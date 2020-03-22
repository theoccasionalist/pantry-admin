import { Injectable } from '@angular/core';
import { Type } from '../models/type.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  uri = 'https://damp-brook-50473.herokuapp.com/api';
  types: Type[] = [];

  constructor(private httpClient: HttpClient) { }

  addType(type: object) {
    return this.httpClient.post(`${this.uri}/types/add`, type);
  }

  deleteType(typeId: string) {
    return this.httpClient.delete(`${this.uri}/types/delete/${typeId}`);
  }

  getTypeById(typeId: string) {
    return this.httpClient.get<Type>(`${this.uri}/types/${typeId}`);
  }

  getTypes() {
    return this.httpClient.get<Type[]>(`${this.uri}/types`);
  }

  removeSuperTypeIdMany(removeIds: string[]) {
    return this.httpClient.post(`${this.uri}/types/remove-super-type-many`, removeIds);
  }

  updateSuperTypeIdMany(superTypeId: string, updateIds: string[]) {
    return this.httpClient.post(`${this.uri}/types/update-super-type-many/${superTypeId}`, updateIds);
  }

  updateType(typeId: string, type: object) {
    return this.httpClient.put(`${this.uri}/types/update/${typeId}`, type);
  }

}


