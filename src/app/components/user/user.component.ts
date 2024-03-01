import { CommonModule, DatePipe } from "@angular/common";
import { Component, Input } from "@angular/core";
import { User } from "../../models/user";
import { RouterModule } from "@angular/router";
import { FirstLetterPipe } from "../../pipes/first-letter";
import { ReversePipe } from "../../pipes/reverse";

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [CommonModule, RouterModule, FirstLetterPipe, ReversePipe, DatePipe],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
  })
  
  export class UserComponent {
    @Input() user:User = new User(null, null, null, null, null);
  }