import { RegistrationData } from "../dto/types";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class RegistrationService {
    private registrationData: RegistrationData = {
        basicInfo: {
            firstName: '',
            lastName: '',
            email: '',
            birthDate: ''
        },
        address: {
            street: '',
            city: '',
            state: '',
            zipCode: ''
        }
    };

    getRegistrationData(): RegistrationData {

        if(localStorage.getItem('registration-data')) {
            return JSON.parse(localStorage.getItem('registration-data'));
        }
        return this.registrationData;
    }

    setRegistrationData(registrationData: RegistrationData): void {
        this.registrationData = registrationData;
        localStorage.setItem("registration-data", JSON.stringify(this.registrationData));
    }
}