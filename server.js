const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const Order = require('./models/order.model');
const Type = require('./models/type.model');
const Product = require('./models/product.model');
const pointsMapping = require('./models/points-mapping');
const Shop = require('./models/shop.model');

const app = express();
const router = express.Router();
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

var checkJwt = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

app.use(cors());
app.use(bodyParser.json());

console.log(checkJwt, process.env.AUTH0_AUDIENCE);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pantry');
const connection = mongoose.connection;

connection.once('open', () => console.log('MongoDB connection establised.'));

const port = process.env.PORT || '4001';
app.set('port', port);

router.route('/api/orders').get((req, res) => {
    Order.find((err, orders) => {
        err ? res.json({error: err, status: 400}) : res.json(orders); 
    });
});

router.route('/api/orders/:id').get((req, res) => {
    Order.findById({_id: req.params.id}, (err, order) => {
        err ? res.json({error: err, status: 400}) : res.json(order);
    });
});

router.route('/api/orders/update-received/:id').put((req, res) => {
    Order.findByIdAndUpdate({_id: req.params.id}, {'$set': {received: req.body.received}}, (err, shop) => {
        err ? res.json({error: err, status: 400}) : res.json({status: 200});
    });
});

router.route('/api/orders/delete/:id').delete(checkJwt, (req, res) => {
    Order.findByIdAndDelete({_id: req.params.id}, (err, order) => {
        err ? res.json({error: err, status: 400}) : res.json({status: 200});
    });
});

router.route('/api/points-mappings').get((req,res) => {
    pointsMapping.find((err, mapping) => {
        err ? res.json({error: err, status: 400}) : res.json(mapping); 
    });
});

router.route('/api/products').get((req, res) => {
    Product.find((err, products) => {
        console.log(products);
        err ? res.json({error: err, status: 400}) : res.json(products);
    });
});

router.route('/api/products/:id').get((req, res) => {
    Product.findById({_id: req.params.id}, (err, product) => {
        err ? res.json({error: err, status: 400}) : res.json(product);
    });
});

router.route('/api/products/add').post((req, res) => {
    let product = new Product(req.body);
    product.save().then(() => 
    res.json({status: 200})).catch((err) => res.json({error: err, status: 400}));
});

router.route('/api/products/update/:id').put((req, res) => {
    Product.findById({_id: req.params.id}, (err, product) => {
        if (!product) {
            res.json({status: 500});
            return next(new Error('Could not load product.'))
        } else {
            product.productName = req.body.productName;
            product.prodSizeAmount = req.body.prodSizeAmount;
            product.points = req.body.points;
            product.school = req.body.school;
            product.infant = req.body.infant;
            product.save().then(() => 
            res.json({error: err, status: 200})).catch(() => res.json({status: 400}));
        }
    });
});

router.route('/api/products/delete/:id').delete(checkJwt, (req, res) => {
    Product.findByIdAndDelete({_id: req.params.id}, (err, product) => {
        err ? res.json({error: err, status: 400}) : res.json({status: 200});
    });
});

router.route('/api/shop').get((req, res) => {
    Shop.find().populate({path:'shop', populate: {path: 'products'}}).exec((err, shop) => {
        err ? res.json({error: err, status: 400}) : res.json(shop);
    });
});

router.route('/api/shop/update/:id').put((req, res) => {
    Shop.findByIdAndUpdate({_id: req.params.id}, {'$set': {shop: req.body.shop}}).populate('types').exec((err, shop) => {
        err ? res.json({error: err, status: 400}) : res.json({status: 200});
    });
});

router.route('/api/types').get((req, res) => {
    Type.find().populate('products').exec((err, type) => {
        err ? res.json({error: err, status: 400}) : res.json(type);
    });
});

router.route('/api/types/:id').get((req, res) => {
    Type.findById({_id: req.params.id}).populate('products').exec((err, type) => {
        err ? res.json({error: err, status: 400}) : res.json(type);
    });
});

router.route('api/types/add').post((req, res) => {
    let type = new Type(req.body);
    type.save().then(() => 
    res.json({status: 200, type: type})).catch((err) => res.json({error: err, status: 400}));
});

router.route('/api/types/update/:id').put((req, res) => {
    Type.findById({_id: req.params.id}, (err, type) => {
        if (!type) {
            res.json({status: 500});
            return next(new Error('Could not load type.'))
        } else {
            type.typeName = req.body.typeName;
            type.typeSizeAmount = req.body.typeSizeAmount;
            type.products = req.body.products;
            type.superTypeId = req.body.superTypeId;
            type.save().then(() => 
            res.json({error: err, status: 200})).catch(() => res.json({status: 400}));
        }
    });
});

router.route('/api/types/update-super-type-many/:superTypeId').post((req, res) => {
    Type.updateMany({_id: {'$in': req.body}}, {'$set': {superTypeId: req.params.superTypeId}}, (err, type) => {
        err ? res.json({error: err, status: 400}) : res.json({type: type, status: 200});
    });
});

router.route('/api/types/remove-super-type-many').post((req, res) => {
    Type.updateMany({_id: {'$in': req.body}}, {'$unset': {superTypeId: undefined}}, (err, type) => {
        err ? res.json({error: err, status: 400}) : res.json({type: type, status: 200});
    });
});

router.route('/api/types/delete/:id').delete((req, res) => {
    Type.findByIdAndDelete({_id: req.params.id}, (err, type) => {
        err ? res.json({error: err, status: 400}) : res.json({status: 200});
    });
});

app.use('/', router);

if (process.env.NODE_ENV !== 'dev') {
    app.use('/', express.static(path.join(__dirname, './dist')));
}

if (process.env.NODE_ENV !== 'dev') {
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '/dist/index.html'));
    });
}

app.listen(port, () => console.log('Express server running on port 4001.'));
