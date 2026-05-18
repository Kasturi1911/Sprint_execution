import { BaseAPI } from './BaseAPI';

export class UserAPI extends BaseAPI {

  async createAccount(
  customerId: number,
  newAccountType: number,
  fromAccountId: number
) {

   return await this.request.post(
    `${this.baseURL}/createAccount`,
    {
      headers: {
        Accept: 'application/json'
      },

      params: {
        customerId,
        newAccountType,
        fromAccountId
      }
    }
  );
}

  async getUser(id: number) {
    return await this.request.get(`${this.baseURL}/accounts/${id}`,

    
     {
      headers: {
        Accept: 'application/json'
      }
    });
  }


  async getAccount(accountId: number) {
  return await this.request.get(
    `${this.baseURL}/accounts/${accountId}`,
    {
      headers: {
        Accept: 'application/json'
      }
    }
  );
}


async registerUser(user: any) {
  return await this.request.post(
    `${this.baseURL}/customers/new`,
    {
      headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: user
    }
  );
}

async getAccountsByCustomer(customerId: number) {
  return await this.request.get(
    `${this.baseURL}/customers/${customerId}/accounts`,
    {
      headers: { Accept: 'application/json' }
    }
  );
}
  // async updateUser(id: number, payload: any) {
  //   return await this.request.put(`${this.baseURL}/users/${id}`, { data: payload });
  // }

  // async deleteUser(id: number) {
  //   return await this.request.delete(`${this.baseURL}/users/${id}`);
  // }
}