import { IPlantUMLTrigger } from "./Interface/IPlantUMLTrigger";

export const INDENTATION: string = "    ";
export const RIGHT_USAGE_SYMBOL: string = "-->";
export const ALL_PAGES_TRIGGER: IPlantUMLTrigger = { id: "2147479553", name: "All Pages", type: "PAGEVIEW" };
export enum ID_PREFIX {
    TAG = "0",
    TRIGGER = "1",
    VARIABLE = "2",
}
