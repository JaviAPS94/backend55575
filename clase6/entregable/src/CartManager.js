import { promises } from 'fs';

export default class CartManager {

  constructor(ruta) {
    this.ruta = ruta;
  }

  async save(obj) {
    
  }

  async getById(id) {
    
  }

  async getAll() {
    try {
      const products = await promises.readFile(this.ruta, 'utf-8');
      return JSON.parse(products);
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async deleteById(id) {
    
  }

  async deleteAll() {
    
  }
}