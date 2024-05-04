export class Product {
  id: number | undefined;
  name: string = '';
  price: number = 0;
  discount: number = 0;
  gender: string = '';
  color: string = '';
  stockAvailable: boolean = false;
  photo?: string = '';
}
