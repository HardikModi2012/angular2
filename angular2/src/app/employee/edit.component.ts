import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';
import { employeeService } from '../employee/employee.service';
import { Department } from './Department';
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
    checkoutForm: NgForm;
    departments: Department[] =
        [

            { id: 1, name: "HR" },
            { id: 2, name: "it" },
            { id: 3, name: "payroll" },
            { id: 4, name: "help desk" },

        ] as Department[];
    //departmentId = 2;


    constructor(private _route: ActivatedRoute ,private _employeeService: employeeService) { }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.onGet();



    }

    bindEmployee(emp: any) {
        this.employee = emp;
        this.employee.department = "2";
    }
    
    onGet() {
        this._employeeService.getEmployeeById(this.id)
            .subscribe((emp: any) => this.bindEmployee(emp));
    }

    onSubmit(checkoutForm: NgForm) {
        if (checkoutForm.value == null)
            this.insertEmployee(checkoutForm);
        else
            this.onUpdate(checkoutForm);
    }


    onUpdate(checkoutForm: NgForm) {
        this._employeeService.updateEmployee(checkoutForm.value)
            .subscribe((data: any) => this.onGet()
                , this.checkoutForm.reset
            );
    }

    insertEmployee(checkoutForm: NgForm) {
        this._employeeService.addEmployee(checkoutForm.value)
            .subscribe((data: any) => this.onGet());
    }

}
