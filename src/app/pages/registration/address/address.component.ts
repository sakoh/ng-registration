import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

import { RegistrationService } from 'src/app/services/registration.service';

@Component({
    templateUrl: "./address.component.html",
    styleUrls: ["./address.component.scss"]
})
export class AddressComponent {
    constructor(private registrationService: RegistrationService, private fb: FormBuilder) {}
}