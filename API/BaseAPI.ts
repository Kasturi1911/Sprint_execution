import { APIRequestContext } from '@playwright/test';

export class BaseAPI {
  protected request: APIRequestContext;
  protected baseURL: string;

  constructor(request: APIRequestContext, baseURL: string) {
    this.request = request;
    this.baseURL = baseURL;
  }
}