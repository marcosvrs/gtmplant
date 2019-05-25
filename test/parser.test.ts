import fs from 'fs';
import os from 'os';
import path from 'path';
import { convertToPlant } from '../src/convertToPlant';

const titleAndLegend: string[] = [
    'title Trigger after 3rd Page View Recipe',
    'legend right',
    '<color:orange>T</color> - Tag',
    '<color:red>T</color> - Trigger',
    '<color:green>V</color> - Variable',
    'end legend',
];

describe('Parse', () => {

    it('generate PlantUML for 3rdPageviewTriggerRecipe.json', () => {
        expect(convertToPlant(JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data/3rdPageviewTriggerRecipe.json'), 'utf8'))))
            .toEqual([
                '@startuml',
                ...titleAndLegend,
                'class "cHTML - Set Cookie - Pageview Counter" as 01<html> << (T, orange) >> {',
                '    .. Firing Triggers ..',
                '    All Pages',
                '}',
                'class "Window Loaded - 3rd Page View" as 15<WINDOW_LOADED> << (T, red) >> {',
                '    .. Variables ..',
                '    Cookie - pageviewCount',
                '}',
                'class "All Pages" as 2147479553<PAGEVIEW> << (T, red) >>',
                'class "Cookie - pageviewCount" as 21<k> << (V, green) >>',
                'class "Page URL"<PAGE_URL> << (V, green) >>',
                'class "Page Hostname"<PAGE_HOSTNAME> << (V, green) >>',
                'class "Page Path"<PAGE_PATH> << (V, green) >>',
                'class "Referrer"<REFERRER> << (V, green) >>',
                'class "Event"<EVENT> << (V, green) >>',
                '01 --> 2147479553',
                '15 --> 21',
                '@enduml'
            ].join(os.EOL));
    });
});