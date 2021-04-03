import { PersonType } from "./personType";
import { AddressData } from "./addressData";
import { ConsultaionSchedulingData } from "./consultationSchedulingData";

export class PersonData{
    id: number;
    firstName: string;
    lasName: string;
    gender: PersonType;
    age: number;
    userName: string;
    password: string;
    addressDto: AddressData;
    doctorConsultationList: ConsultaionSchedulingData;
    pacientConsultationList: ConsultaionSchedulingData;
}