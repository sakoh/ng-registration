import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { RegistrationService } from '../../../services/registration.service';
import { RegistrationData } from 'src/app/dto/types';

@Component({
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
    registrationData: RegistrationData;

    constructor(private registrationService: RegistrationService) {
        this.registrationData = registrationService.getRegistrationData();
    }
}