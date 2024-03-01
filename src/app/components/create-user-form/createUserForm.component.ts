import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { DataService } from "../../services/dataService";
import { User } from "../../models/user";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
    selector: "oo-app",
    standalone: true,
    imports:[ReactiveFormsModule, CommonModule, RouterModule],
    templateUrl: './createUserForm.component.html',
    styleUrl: './createUserForm.component.scss'
})
export class CreateUserForm {
    profileForm = new FormGroup({
        login: new FormControl(),
        email: new FormControl(),
        gender: new FormControl(),
        date: new FormControl(),
        secretWord: new FormControl(),
    });
    buttonDisabled:boolean = true;
    user: User | null;

    constructor(private dataService: DataService, private route: ActivatedRoute) {
        this.user = this.dataService.getUserById(this.route.snapshot.params['id']);
        this.profileForm.controls.login.setValue(this.user?.login);
        this.profileForm.controls.email.setValue(this.user?.email);
        this.profileForm.controls.gender.setValue(this.user?.gender);
        this.profileForm.controls.date.setValue(this.user?.date);
        this.profileForm.controls.secretWord.setValue(this.user?.secretWord);
    }

    onSubmit(){
        const newUser = new User(this.profileForm.value.login, 
            this.profileForm.value.email, 
            this.profileForm.value.gender, 
            this.profileForm.value.date, 
            this.profileForm.value.secretWord)
        if(this.user===null){
            this.dataService.addUser(newUser);
        }
        else{
            newUser.addId(this.user.id);
            newUser.addDateModified(new Date());
            this.dataService.updateUser(newUser);
        }
    }


    enableButton(){
        const login = this.profileForm.value.login;
        const email = this.profileForm.value.email;
        if(login && email && login.length>2 && email.length>2){
            this.buttonDisabled=false;
        }
        else{
            this.buttonDisabled=true;
        }
    }
}