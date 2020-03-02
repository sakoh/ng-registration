import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

import { RegistrationService } from 'src/app/services/registration.service';

@Component({
    templateUrl: "./basic-info.component.html",
    styleUrls: ["./basic-info.component.scss"]
})
export class BasicInfoComponent {
    basicInfo = this.fb.group({
        firstName: [''],
        lastName: [''],
        email: [''],
        birthDate: ['']
    });

    constructor(private registrationService: RegistrationService, private fb: FormBuilder) {
    }
}