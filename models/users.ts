export class User {
  id: number;
  customerName: string;
  type: string;
  balance: number;
 

  constructor(id: number, customerName: string, type: string, balance: number, status?: Boolean) {
    this.id = id;
    this.customerName = customerName;
    this.type = type;
    this.balance = balance;
   
  }
}