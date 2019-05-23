import { IPlantUMLComposite } from "./IPlantUMLComposite";

export interface IPlantUMLContainer extends IPlantUMLComposite {
    variables: IPlantUMLComposite[];
    triggers: IPlantUMLComposite[];
    tags: IPlantUMLComposite[];
}