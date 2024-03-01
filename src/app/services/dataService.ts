import { Injectable } from "@angular/core";
import {User} from '../models/user'
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class DataService {
    private data : User[] = [];
    private readonly subject; 
    constructor() {
        
        this.subject = new BehaviorSubject(this.data);
    }

    public readonly getUsers = new Observable<User[]>((subscriber)=>{
        this.subject.subscribe((val:User[])=>subscriber.next(val))
    })

    etUsers(){
        return this.data;
    }

    addUser(user: User){
        user.addId(this.data.length)
        this.data.push(user);
        this.subject.next(this.data);
    }

    updateUser(user: User){
        this.data[user.id]=user;
        this.subject.next(this.data);
    }

    getUserById(id: number): User|null{
        if(id>=0 && id<this.data.length)
            return this.data[id];
        else
            return null;
    }
}