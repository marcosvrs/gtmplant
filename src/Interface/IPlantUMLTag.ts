import { IPlantUMLComposite } from "./IPlantUMLComposite";

export interface IPlantUMLTag extends IPlantUMLComposite {
    firingTriggers?: IPlantUMLComposite[];
    blockingTriggers?: IPlantUMLComposite[];
}
