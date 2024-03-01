import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllUsersComponent } from '../components/all-users/allUsers.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AllUsersComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}