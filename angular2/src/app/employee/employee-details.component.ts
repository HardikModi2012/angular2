import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from './IEmployee';
import { employeeService } from './employee.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'emp-details',
    templateUrl: 'app/employee/employee-details.component.html'
})
export class employeeDetailscomponent implements OnInit {
    employees: IEmployee[];
    employee: IEmployee;
    id: number;
    constructor(private route: ActivatedRoute, private employeeService: employeeService) { }

    ngOnInit() {
        this.route.params.subscribe((params: any) => {
            this.id = +params['id'];
        });
        this.onGet();
    }

    onGet() {
        this.employeeService.getEmployeeById(this.id)

    }
}