#!/usr/bin/env node

// tslint:disable:no-console

import commander from 'commander';
import fs from 'fs';
import G from 'glob';
import http from 'http';
import path from 'path';
import { encode } from 'plantuml-encoder';
import { convertToPlant } from './convertToPlant';
import { IGTMWorkspace } from './Interface/GTM/IGTMWorkspace';

const AVAILABLE_PLANTUML_EXTENSIONS: string[] = ['svg', 'png', 'txt'];

commander
    .version('0.1.0')
    .option('-i, --input <path>', 'Define the path of the Typescript file')
    .option('-o, --output <path>', 'Define the path of the output file. If not defined, it\'ll output on the STDOUT')
    .option('-T, --tags', 'Convert tags')
    .option('-R, --triggers', 'Convert triggers')
    .option('-R, --triggers', 'Convert triggers')
    .option('-V, --variables', 'Convert variables')
    .option('-U, --usages', 'Generate usages')
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
        // tslint:disable-next-line non-literal-fs-path
        const inputData: string = fs.readFileSync(input, 'utf8');
        const gtmContainer: IGTMWorkspace = JSON.parse(inputData);
        const plantUMLDocument: string = convertToPlant(gtmContainer, {
            tags: <boolean>commander.tags,
            triggers: <boolean>commander.triggers,
            variables: <boolean>commander.variables,
            usages: <boolean>commander.usages
        });

        if (commander.output === undefined) {
            return console.log(plantUMLDocument);
        }

        const extension: string = path.extname(<string>commander.output)
            .replace(/^\./gm, '');

        if (AVAILABLE_PLANTUML_EXTENSIONS.includes(extension)) {
            requestImageFile(<string>commander.output, plantUMLDocument, extension);

            return;
        }

        // tslint:disable-next-line non-literal-fs-path
        fs.writeFileSync(<string>commander.output, plantUMLDocument);
    })
});

function requestImageFile(output: string, input: string, extension: string): void {
    console.log(encode(input));
    http.get({
        host: 'www.plantuml.com',
        path: `/plantuml/${extension}/${encode(input)}`
    }, (res: http.IncomingMessage): void => {
        // tslint:disable-next-line non-literal-fs-path
        const fileStream: fs.WriteStream = fs.createWriteStream(output);
        res.setEncoding('binary');
        res.pipe(fileStream);
        res.on('error', (err: Error): void => {
            throw err;
        });
    });
}