import { Component, OnInit } from '@angular/core';
import { employeeService } from '../employee/employee.service';
import { IEmployee } from './IEmployee';


@Component({
    selector: 'pagenotfound',
    templateUrl: 'app/employee/pagenotfound.component.html'
})
export class pagenotfound implements OnInit {
    employees: IEmployee[];
    employee: IEmployee;

    constructor() { }

    ngOnInit() {
    }

}
