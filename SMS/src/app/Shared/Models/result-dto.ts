import { StudentDataDTO } from "./student-data-dto";

export interface ResultDTO {
    data:StudentDataDTO[];
    message?:string;
    success:boolean;
    isAuthorized:boolean;

}
