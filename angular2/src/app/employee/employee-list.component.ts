import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';
import { employeeService } from '../employee/employee.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'ListOfEmployee',
    templateUrl: 'app/employee/list.component.html',
    providers: [employeeService]

})

export class employeeListComponent1 implements OnInit {
    employees: IEmployee[];
    employee: IEmployee;

    constructor(private _employeeService: employeeService) { }

    ngOnInit() {
        this.onGet();

    }
    onGet() {
        this._employeeService.getEmployee()
            .subscribe(emp => this.employees = emp);
    }
    OnDelete(Id: number) {
        if (confirm("r u sure") == true) {
            this._employeeService.deleteEmployee(Id)
                .subscribe((x: any) => {
                    //this._employeeService.getEmployee();
                    this.onGet();
                })
        }
    }

    onUpdate(Id: number, employee: IEmployee) {
        this._employeeService.addEmployee(employee)
                .subscribe((data: any) => this._employeeService.getEmployee());
        }
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
