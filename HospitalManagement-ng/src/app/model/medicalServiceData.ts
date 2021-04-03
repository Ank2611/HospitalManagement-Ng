import { ConsultaionSchedulingData } from "./consultationSchedulingData";

export class MedicalServiceData {
    id: number;
    servicePrice: number;
    serviceName: string;
    consultationSchedulingDto: ConsultaionSchedulingData;
}