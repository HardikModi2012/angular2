import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';
import { Department } from './department.model';
import { employeeService } from '../employee/employee.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
    selector: 'ListOfEmployee',
    templateUrl: 'app/employee/list.component.html',
    providers: [employeeService]

})

export class employeeListComponent1 implements OnInit {
    departments: Department[] =
        [
            { id: 1, name: "HR" },
            { id: 2, name: "it" },
            { id: 3, name: "payroll" },
            { id: 4, name: "help desk" },

        ];

    employees: IEmployee[];
    employee: IEmployee;
    employeeIdUpdate: number = null;
    checkoutForm: any;

    constructor(private _router: Router, private _employeeService: employeeService) { }

    ngOnInit() {
        this.onGet();

    }
    onGet() {
        this._employeeService.getEmployees();
            
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
        //this._employeeService.updateEmployee(employee)
        //    .subscribe((data: any) => this._employeeService.getEmployee());
    }

    CreateEmployee(employee: IEmployee) {
        if (this.employeeIdUpdate == null) {
            this._employeeService.addEmployee(employee).subscribe(
                () => {
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


        //}   
        //onSubmit(form: NgForm) {
        //    if (form.value.Id == null) {
        //        this.employeeService.addEmployee(form.value)
        //            .subscribe((data: any) => this.employeeService.getEmployee());
        //    }
        //    else {
        //        this.employeeService.putEmployee(form.value.Id, form.value)
        //            .subscribe((data: any) => {
        //                this.employeeService.getEmployee();
        //            });
        //    }

        //}
    }
}
