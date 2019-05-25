export interface IPlantUMLComposite {
    id: string;
    name: string;
    type: string;
    variables?: IPlantUMLComposite[];
}