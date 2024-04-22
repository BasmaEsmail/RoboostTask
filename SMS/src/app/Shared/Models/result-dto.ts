import { StudentDataDTO } from "./student-data-dto";

export interface ResultDTO {
    Data:StudentDataDTO[];
    Message?:string;
    Success:boolean;
    IsAuthorized:boolean;

}
