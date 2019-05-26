import { IGTMList } from "./IGTMList";

export interface IGTMParameter {
    type: string;
    key: string;
    value?: string;
    list?: IGTMList[];
}
