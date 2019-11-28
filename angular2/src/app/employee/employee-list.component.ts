import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';
import { employeeService } from '../employee/employee.service';
import { NgForm } from '@angular/forms';
import { Router  } from '@angular/router';

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


    OnDelete(Id: number) {
        if (confirm("r u sure") == true) {
            this._employeeService.deleteEmployee(Id)
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

        //loadEmployeeToEdit(Id: number)
        //{
        //    this._employeeService.getEmployeeById(Id).subscribe(emp =>
        //        this.employeeIdUpdate = emp.Id;
        //        this.checkoutForm.controls['Name'].setValue(employee.Name);
        //        this.checkoutForm.controls['City'].setValue(employee.City);
        //        this.checkoutForm.controls['Name'].setValue(employee.Name);

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
