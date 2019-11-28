import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';
import { employeeService } from '../employee/employee.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'editEmployee',
    templateUrl: 'app/employee/edit.component.html',
    providers: [employeeService]

})

export class editEmployee implements OnInit {
    employees: IEmployee[];
    employee: IEmployee = {} as IEmployee;
    id: number;
    sub: any;

    constructor(private _route: ActivatedRoute ,private _employeeService: employeeService) { }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.onGet();

    }
    onGet() {
        this._employeeService.getEmployeeById(this.id)
            .subscribe((emp:any) => this.employee = emp);
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
            .subscribe((data: any) => this.onGet());
    }

    insertEmployee(checkoutForm: NgForm) {
        this._employeeService.addEmployee(checkoutForm.value)
            .subscribe((data: any) => this.onGet());
    }

}
