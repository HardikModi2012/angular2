import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from './IEmployee';
import { employeeService } from './employee.service';

@Component({
    selector: 'emp-details',
    templateUrl: 'app/employee/employee-details.component.html'
})
export class employeeDetailscomponent implements OnInit {
    employees: IEmployee[];
    employee: IEmployee;

    constructor(private route: ActivatedRoute, private employeeService: employeeService) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params: any) => this.employee = this.employees[+params.get('Id')]);
    }
}