import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';
import { Department } from './department.model';
import { employeeService } from '../employee/employee.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'ListOfEmployee',
    templateUrl: 'app/employee/list.component.html',
    providers: [employeeService]

})

export class employeeListComponent1 implements OnInit {
   
    employees: IEmployee[];
    employee: IEmployee;
    employeeIdUpdate: number = null;
    checkoutForm: any;

    constructor(private _router: Router, private _employeeService: employeeService) { }

    ngOnInit() {
        this.onGet();

    }
    onGet() {
        this._employeeService.getEmployee()
            .subscribe(emp => this.employees = emp);
    }

    OnDelete(id: number) {
        if (confirm("r u sure") == true) {
            this._employeeService.deleteEmployee(id)
                .subscribe((x: any) => {
                    //this._employeeService.getEmployee();
                    this.onGet();
                })
        }
    }

    onEdit(Id: number) {
        this._router.navigate(["/edit/" + Id]);
     
    }

    CreateEmployee(employee: IEmployee) {
        if (this.employeeIdUpdate == null) {
            this._employeeService.addEmployee(employee).subscribe(() => {
                    this.onGet();
                }
            );
        } else {
            employee.Id = this.employeeIdUpdate;
            this._employeeService.updateEmployee(employee).subscribe(() => {
                this.onGet();
                this.employeeIdUpdate = null;
            });
        }
        
    }
}
