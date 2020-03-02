import { RegistrationData } from "../dto/types";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class RegistrationService {
    private registrationData: RegistrationData = {
        basicInfo: {
            firstName: "",
            lastName: "",
            email: "",
            birthDate: null
        },
        billingAddress: {
            street: "",
            city: "",
            state: "",
            zipCode: ""
        },
        shippingAddress: {
            street: "",
            city: "",
            state: "",
            zipCode: ""
        }
    }

    getRegistrationData(): RegistrationData {
        return this.registrationData;
    }

    setRegistrationData(registrationData: RegistrationData): void {
        this.registrationData = registrationData;
    }
}