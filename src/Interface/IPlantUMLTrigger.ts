import { IPlantUMLComposite } from "./IPlantUMLComposite";

export interface IPlantUMLTrigger extends IPlantUMLComposite {
    variables?: IPlantUMLComposite[];
}