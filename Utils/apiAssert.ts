import { APIResponse, expect } from "@playwright/test";

export default class Assert {

  static verifyStatusCode(
    response: APIResponse,
    Code: number
  ) {

    expect(response.status()).toBe(Code);

  }

  static verifyAnyStatusCode(
    response: APIResponse,
    codes: number[]
  ) {

    expect(codes).toContain(
      response.status()
    );

  }

}