import { MedicalServiceData } from "./medicalServiceData";
import { PersonData } from "./personData";

export class ConsultaionSchedulingData {
    id: number;
    schedulingDate: Date;
    doctor: PersonData;
    pacient: PersonData;
    medicalServiceDtoList: MedicalServiceData;
}