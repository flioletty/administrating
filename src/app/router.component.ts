import { Routes } from '@angular/router';
import { AllUsersComponent } from './components/all-users/allUsers.component';
import { CreateUserForm } from './components/create-user-form/createUserForm.component';

const routeConfig: Routes = [
    { path: 'view', component: AllUsersComponent },
    { path: 'administration', component: CreateUserForm },
    { path: 'edit/:id', component: CreateUserForm },
];

export default routeConfig;