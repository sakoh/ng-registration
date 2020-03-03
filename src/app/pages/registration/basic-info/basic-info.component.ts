import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { RegistrationService } from 'src/app/services/registration.service';

@Component({
    templateUrl: "./basic-info.component.html",
    styleUrls: ["./basic-info.component.scss"]
})
export class BasicInfoComponent implements OnInit {
    basicInfo: FormGroup;

    constructor(private registrationService: RegistrationService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.basicInfo = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.email],
            birthDate: ['']
        });
        this.registrationService.setRegistrationData(JSON.parse(localStorage.getItem("registration-data")));
    }

    submitBasicInfo() {
        this.registrationService.setRegistrationData({
            ...this.registrationService.getRegistrationData(),
            basicInfo: this.basicInfo.value
        });

        window.location.href = "/address"
    }
}