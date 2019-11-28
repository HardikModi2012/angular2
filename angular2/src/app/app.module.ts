import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { employeeListComponent1 } from './employee/employee-list.component';
import { employeeDetailscomponent } from './employee/employee-details.component';
import { pagenotfound } from './employee/pagenotfound.component';
import { homecomponent } from './employee/home.component';
import { addEmployee } from './employee/add.component';
import { editEmployee } from './employee/edit.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/home' , pathMatch: 'full' },
    { path: 'ListOfEmployee', component: employeeListComponent1 },
    { path: 'emp-details', component: employeeDetailscomponent },
    { path: 'addEmployee', component: addEmployee },
    { path: 'edit/:id', component: editEmployee },
    { path: 'home', component: homecomponent },
    { path: '**', component: pagenotfound }
];
@NgModule({
    imports: [BrowserModule, FormsModule , HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, employeeListComponent1, employeeDetailscomponent, pagenotfound,
        addEmployee, editEmployee , homecomponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
