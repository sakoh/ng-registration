import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

import { RegistrationService } from 'src/app/services/registration.service';

@Component({
    templateUrl: "./basic-info.component.html",
    styleUrls: ["./basic-info.component.scss"]
})
export class BasicInfoComponent {
    constructor(private registrationService: RegistrationService, private fb: FormBuilder) {}
}