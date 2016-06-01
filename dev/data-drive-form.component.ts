import {Component, OnInit} from "angular2/core";
import {FormBuilder, ControlGroup, Validators, Control} from "angular2/common";
/**
 * Created by jasonholmberg on 5/31/16.
 */

@Component({
    selector: 'my-data-drive',
    template: `
        <h2>Sign-up form</h2>
        <form (ngSubmit)="onSubmit(f)" [ngFormModel]="myForm">
            <div>
                <label for="mail">Mail</label>
                <input [ngFormControl]="myForm.controls['email']" type="text" id="mail" #mail="ngForm">
                <span class="validation-error" *ngIf="!mail.valid">Not valid</span>
            </div>
            <div>
                <label for="password">Password</label>
                <input [ngFormControl]="myForm.controls['password']" type="text" id="password" #password="ngForm">
                <span class="validation-error" *ngIf="!password.valid">Not valid</span>
            </div>
            <div>
                <label for="confirm-password">Confirm Password</label>
                <input [ngFormControl]="myForm.controls['confirmPassword']" type="text" id="confirm-password" #confirmPassword="ngForm">
                <span class="validation-error" *ngIf="!confirmPassword.valid">Not valid</span>
            </div>
            <button type="submit">Submit</button>
        </form>
        <h2>You submitted</h2>
        <div>Mail: {{user.email}}</div>
        <div>Password: {{user.password}}</div>
    `
})
export class DataDriveFormComponent implements OnInit{
    myForm: ControlGroup;
    user = {email: '', password: ''};

    constructor(private _formBuilder: FormBuilder) {

    }

    onSubmit(form) {
        this.user = this.myForm.value;
    }


    ngOnInit():any {
        this.myForm = this._formBuilder.group({
            'email':['', Validators.required],
            'password':['', Validators.compose([
                Validators.required,
                hasNumbers
            ])],
            'confirmPassword':['', Validators.required]
        })
    }
}

function hasNumbers(control: Control): {[s: string]: boolean } {
    if (!control.value.match('\\d+')) {
        return {'noNumbers': true};
    }
}