import fs from 'fs';
import path from 'path';
import { convertToPlant } from '../src/convertToPlant';

describe('Parse', () => {
    fs.readdirSync('test/data').forEach((file: string): void => {
        if (path.extname(file) !== '.json') {
            return;
        }

        it(`generate PlantUML for ${file}`, () => {
            expect(convertToPlant(JSON.parse(fs.readFileSync(`test/data/${file}`, 'utf8'))))
                .toEqual(fs.readFileSync(`test/data/${file.replace('.json', '.puml')}`, 'utf8'));
        });
    });
});