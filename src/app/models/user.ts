export class User {
    login: string | null | undefined;
    email: string | null | undefined;
    gender: string | null | undefined;
    date: string | null | undefined;
    secretWord: string | null | undefined;
    id: number = 0;
    dateModified: Date | undefined;
   
    constructor(login: string | null | undefined, 
        email: string | null | undefined, 
        gender: string | null | undefined, 
        date: string | null | undefined, 
        word: string | null | undefined) 
    {
        this.login = login;
        this.email = email;
        this.gender = gender;
        this.date = date;
        this.secretWord = word;
    }

    addId(id: number){
        this.id = id;
    }

    addDateModified(date: Date){
        this.dateModified = date;
    }
}