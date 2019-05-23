import { IPlantUMLComposite } from "./IPlantUMLComposite";

export interface IPlantUMLTag extends IPlantUMLComposite {
    variables?: IPlantUMLComposite[];
    firingTriggers?: IPlantUMLComposite[];
    blockingTriggers?: IPlantUMLComposite[];
}