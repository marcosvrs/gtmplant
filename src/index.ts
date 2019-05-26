#!/usr/bin/env node

// tslint:disable:no-console

import ajv from "ajv";
import commander from "commander";
import fs from "fs";
import http from "http";
import path from "path";
import { encode } from "plantuml-encoder";
import { convertToPlant } from "./convertToPlant";
import { IGTMWorkspace } from "./Interface/GTM/IGTMWorkspace";
import { validateSchema } from "./validate_schema";

const AVAILABLE_PLANTUML_EXTENSIONS: string[] = ["svg", "png", "txt"];

commander
    .version("0.1.5")
    .option("-i, --input <path>", "Define the path of the Typescript file")
    .option("-o, --output <path>", "Define the path of the output file. If not defined, it'll output on the STDOUT")
    .option("-T, --tags", "Convert tags")
    .option("-R, --triggers", "Convert triggers")
    .option("-A, --variables", "Convert variables")
    .option("-U, --usages", "Generate usages")
    .parse(process.argv);

function bootstrap(commanderStatic: commander.CommanderStatic): void {
    if (commanderStatic.input === undefined) {
        return console.error("Missing input file");
    }

    const ajvInstance: ajv.Ajv = new ajv({
        allErrors: true,
        strictDefaults: true,
    });
    const validate: ajv.ValidateFunction = ajvInstance.compile(validateSchema);

    // tslint:disable-next-line non-literal-fs-path
    const inputData: string = fs.readFileSync(<string>commanderStatic.input, "utf8");

    if (!validate(JSON.parse(inputData))) {
        console.log(commanderStatic.input, validate.errors);
        return console.error("Invalid JSON Schema");
    }

    const gtmContainer: IGTMWorkspace = JSON.parse(inputData);
    const plantUMLDocument: string = convertToPlant(gtmContainer, {
        tags: !!commanderStatic.tags,
        triggers: !!commanderStatic.triggers,
        usages: !!commanderStatic.usages,
        variables: !!commanderStatic.variables,
    });

    if (commanderStatic.output === undefined) {
        return console.log(plantUMLDocument);
    }

    const extension: string = path.extname(<string>commanderStatic.output)
        .replace(/^\./gm, "");

    if (AVAILABLE_PLANTUML_EXTENSIONS.includes(extension)) {
        requestImageFile(<string>commanderStatic.output, plantUMLDocument, extension);
    } else {
        // tslint:disable-next-line non-literal-fs-path
        fs.writeFileSync(<string>commanderStatic.output, plantUMLDocument);
    }

    console.log("File saved");
}

function requestImageFile(output: string, input: string, extension: string): void {
    http.get({
        host: "www.plantuml.com",
        path: `/plantuml/${extension}/${encode(input)}`,
    }, (res: http.IncomingMessage): void => {
        // tslint:disable-next-line non-literal-fs-path
        res.pipe(fs.createWriteStream(output));
        res.on("error", (err: Error): void => {
            throw err;
        });
    });
}

bootstrap(commander);
