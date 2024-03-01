import { Component } from "@angular/core";
import { DataService } from "../../services/dataService";
import { User } from "../../models/user";
import { CommonModule } from "@angular/common";
import { UserComponent } from "../user/user.component";


@Component({
    selector: "oo-app",
    standalone: true,
    imports:[CommonModule, UserComponent],
    templateUrl: './allUsers.component.html',
    styleUrl: './allUsers.component.scss'
})
export class AllUsersComponent {
    users: User[]=[];
    constructor(private dataService: DataService) {
        this.dataService.getUsers.subscribe((val)=>this.users = (val));
    }
}