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
var editEmployee = /** @class */ (function () {
    function editEmployee(_employeeService) {
        this._employeeService = _employeeService;
        this.employee = {};
    }
    editEmployee.prototype.ngOnInit = function () {
        //this.employee.Name = "Hardik";
        //this.employee.City = "Mumbai";
        //this.employee.Address = "Ahmd";
        this.onGet();
    };
    editEmployee.prototype.onGet = function () {
        var _this = this;
        this._employeeService.getEmployeeById()
            .subscribe(function (emp) { return _this.employee = emp; });
    };
    editEmployee.prototype.OnDelete = function (Id) {
        var _this = this;
        if (confirm("r u sure") == true) {
            this._employeeService.deleteEmployee(Id)
                .subscribe(function (x) {
                _this._employeeService.getEmployee();
            });
        }
    };
    editEmployee.prototype.onSubmit = function (checkoutForm) {
        if (checkoutForm.value.Id == null)
            this.insertEmployee(checkoutForm);
        else
            this.onUpdate(checkoutForm);
    };
    editEmployee.prototype.onUpdate = function (checkoutForm) {
        var _this = this;
        this._employeeService.updateEmployee(checkoutForm.value)
            .subscribe(function (data) { return _this._employeeService.getEmployee(); });
    };
    editEmployee.prototype.insertEmployee = function (checkoutForm) {
        var _this = this;
        this._employeeService.addEmployee(checkoutForm.value)
            .subscribe(function (data) { return _this._employeeService.getEmployee(); });
    };
    editEmployee = __decorate([
        core_1.Component({
            selector: 'editEmployee',
            templateUrl: 'app/employee/edit.component.html',
            providers: [employee_service_1.employeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.employeeService])
    ], editEmployee);
    return editEmployee;
}());
exports.editEmployee = editEmployee;
//# sourceMappingURL=edit.component.js.map