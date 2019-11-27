import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';
import { employeeService } from '../employee/employee.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'addEmployee',
    templateUrl: 'app/employee/add.component.html',
    providers: [employeeService]

})

export class addEmployee implements OnInit {
    employees: IEmployee[];
    employee: IEmployee = {} as IEmployee;

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
                    this._employeeService.getEmployee();
                })
        }
    }

    onSubmit(checkoutForm: NgForm) {
        if (checkoutForm.value.Id == null)
            this.insertEmployee(checkoutForm);
        else
            this.onUpdate(checkoutForm);
    }


    onUpdate(checkoutForm: NgForm) {
        this._employeeService.updateEmployee(checkoutForm.value)
            .subscribe((data: any) => this._employeeService.getEmployee());
    }

    insertEmployee(checkoutForm: NgForm) {
        this._employeeService.addEmployee(checkoutForm.value)
            .subscribe((data: any) => this.onGet());
    }

}
