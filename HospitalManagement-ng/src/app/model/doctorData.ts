import { PacientData } from "./pacientData";

export class DoctorData{
    medicalFacilityName: string;
    field: string;
    pacientDtoList: PacientData[]=[];
}