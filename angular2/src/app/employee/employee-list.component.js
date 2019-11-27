"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("../employee/employee.service");
var router_1 = require("@angular/router");
var employeeListComponent1 = /** @class */ (function () {
    function employeeListComponent1(_router, _employeeService) {
        this._router = _router;
        this._employeeService = _employeeService;
        this.employeeIdUpdate = null;
    }
    employeeListComponent1.prototype.ngOnInit = function () {
        this.onGet();
    };
    employeeListComponent1.prototype.onGet = function () {
        var _this = this;
        this._employeeService.getEmployee()
            .subscribe(function (emp) { return _this.employees = emp; });
    };
    employeeListComponent1.prototype.OnDelete = function (Id) {
        var _this = this;
        if (confirm("r u sure") == true) {
            this._employeeService.deleteEmployee(Id)
                .subscribe(function (x) {
                //this._employeeService.getEmployee();
                _this.onGet();
            });
        }
    };
    employeeListComponent1.prototype.onEdit = function (employee) {
        this._router.navigate(["/edit/" + employee.Id]);
        //this._employeeService.updateEmployee(employee)
        //    .subscribe((data: any) => this._employeeService.getEmployee());
    };
    employeeListComponent1.prototype.CreateEmployee = function (employee) {
        var _this = this;
        if (this.employeeIdUpdate == null) {
            this._employeeService.addEmployee(employee).subscribe(function () {
                _this.onGet();
            });
        }
        else {
            employee.Id = this.employeeIdUpdate;
            this._employeeService.updateEmployee(employee).subscribe(function () {
                _this.onGet();
                _this.employeeIdUpdate = null;
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
    };
    employeeListComponent1 = __decorate([
        core_1.Component({
            selector: 'ListOfEmployee',
            templateUrl: 'app/employee/list.component.html',
            providers: [employee_service_1.employeeService]
        }),
        __metadata("design:paramtypes", [router_1.Router, employee_service_1.employeeService])
    ], employeeListComponent1);
    return employeeListComponent1;
}());
exports.employeeListComponent1 = employeeListComponent1;
//# sourceMappingURL=employee-list.component.js.map