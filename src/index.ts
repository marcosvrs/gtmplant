#!/usr/bin/env node

// tslint:disable:no-console

import commander from 'commander';
import fs from 'fs';
import G from 'glob';
import { convertToPlant } from './convertToPlant';

commander
    .version('0.0.3')
    .option('-i, --input <path>', 'Define the path of the Typescript file')
    .option('-o, --output <path>', 'Define the path of the output file. If not defined, it\'ll output on the STDOUT')
    // .option('-C, --compositions', 'Create not heritage compositions')
    .parse(process.argv);

if (!commander.input) {
    console.error('Missing input file');
    process.exit(1);
}

G(<string>commander.input, {}, (err: Error | null, matches: string[]): void => {
    if (err !== null) {
        throw err;
    }

    matches.forEach((input: string): void => {
        if (commander.output === undefined) {
            // tslint:disable-next-line non-literal-require
            console.log(convertToPlant(require(input)));

            return;
        }

        // tslint:disable-next-line non-literal-fs-path non-literal-require
        fs.writeFileSync(<string>commander.output, convertToPlant(require(input)));
    })
});