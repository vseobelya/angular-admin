export class Product{
  id: number;
  name: string;
  price: number;
  qtyTotal: number;

  constructor(id:number, name: string, price: number, qtyTotal: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.qtyTotal = qtyTotal;
    }
}
