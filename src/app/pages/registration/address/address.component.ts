import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

import { RegistrationService } from 'src/app/services/registration.service';

@Component({
    templateUrl: "./address.component.html",
    styleUrls: ["./address.component.scss"]
})
export class AddressComponent implements OnInit {
    address: FormGroup;

    constructor(private registrationService: RegistrationService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.address = this.fb.group({
            street: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zipCode: ['', Validators.required]
        });
        this.registrationService.setRegistrationData(JSON.parse(localStorage.getItem("registration-data")));
    }

    submitAddress() {
        this.registrationService.setRegistrationData({
            ...this.registrationService.getRegistrationData(),
            address: this.address.value
        });

        window.location.href = '/review'
    }
}