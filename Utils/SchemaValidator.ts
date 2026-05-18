import Ajv from "ajv";

export default class SchemaValidator {
  static validate(schema: object, data: object) {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);

    const valid = validate(data);

    if (!valid) {
      console.error(validate.errors);
    }

    return valid;
  }
}