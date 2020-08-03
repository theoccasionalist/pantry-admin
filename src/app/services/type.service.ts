import { Injectable } from '@angular/core';
import { Type } from '../models/type.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  url = environment.apiUrl;
  types: Type[] = [];

  constructor(private httpClient: HttpClient) { }

  addType(type: object) {
    return this.httpClient.post(`${this.url}/types/add`, type);
  }

  deleteType(typeId: string) {
    return this.httpClient.delete(`${this.url}/types/delete/${typeId}`);
  }

  getTypeById(typeId: string) {
    return this.httpClient.get<Type>(`${this.url}/types/${typeId}`);
  }

  getTypes() {
    return this.httpClient.get<Type[]>(`${this.url}/types`);
  }

  removeSuperTypeIdMany(removeIds: string[]) {
    return this.httpClient.post(`${this.url}/types/remove-super-type-many`, removeIds);
  }

  updateSuperTypeIdMany(superTypeId: string, updateIds: string[]) {
    return this.httpClient.post(`${this.url}/types/update-super-type-many/${superTypeId}`, updateIds);
  }

  updateType(typeId: string, type: object) {
    return this.httpClient.put(`${this.url}/types/update/${typeId}`, type);
  }

}


