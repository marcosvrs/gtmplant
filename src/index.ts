#!/usr/bin/env node

// tslint:disable:no-console

import commander from 'commander';
import fs from 'fs';
import http from 'http';
import path from 'path';
import { encode } from 'plantuml-encoder';
import { convertToPlant } from './convertToPlant';
import { IGTMWorkspace } from './Interface/GTM/IGTMWorkspace';

const AVAILABLE_PLANTUML_EXTENSIONS: string[] = ['svg', 'png', 'txt'];

commander
    .version('0.1.3')
    .option('-i, --input <path>', 'Define the path of the Typescript file')
    .option('-o, --output <path>', 'Define the path of the output file. If not defined, it\'ll output on the STDOUT')
    .option('-T, --tags', 'Convert tags')
    .option('-R, --triggers', 'Convert triggers')
    .option('-V, --variables', 'Convert variables')
    .option('-U, --usages', 'Generate usages')
    .parse(process.argv);

function bootstrap(commander: commander.CommanderStatic): void {
    if (commander.input === undefined) {
        return console.error('Missing input file');
    }

    // tslint:disable-next-line non-literal-fs-path
    const inputData: string = fs.readFileSync(<string>commander.input, 'utf8');
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
        return console.log('File saved');
    }

    // tslint:disable-next-line non-literal-fs-path
    fs.writeFileSync(<string>commander.output, plantUMLDocument);
    console.log('File saved');
}

function requestImageFile(output: string, input: string, extension: string): void {
    http.get({
        host: 'www.plantuml.com',
        path: `/plantuml/${extension}/${encode(input)}`
    }, (res: http.IncomingMessage): void => {
        // tslint:disable-next-line non-literal-fs-path
        res.pipe(fs.createWriteStream(output));
        res.on('error', (err: Error): void => {
            throw err;
        });
    });
}

bootstrap(commander);