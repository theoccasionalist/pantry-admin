import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let pointsMappingSchema = new Schema ({
    pointsMapping: [{
        minSize: Number,
        maxSize: Number,
        points: Number
    }]
})

export const pointsMapping = mongoose.model('points_mappings', pointsMappingSchema);