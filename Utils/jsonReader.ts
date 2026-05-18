import * as fs from 'fs';
import * as path from 'path';

export class JsonReader {

  static readJson(filePath: string) {
    const fullPath = path.isAbsolute(filePath)
      ? filePath
      : path.resolve(process.cwd(), filePath);

    if (!fs.existsSync(fullPath)) {
      throw new Error(`JSON file not found: ${fullPath}`);
    }

    return JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
  }

}