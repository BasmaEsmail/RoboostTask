import { UpdateStudentDTO } from "./update-student-dto";

export interface EditableStudentDTO {
    Data:UpdateStudentDTO;
    Message?:string;
    Success:boolean;
    IsAuthorized:boolean;
}
