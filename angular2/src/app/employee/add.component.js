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
var addEmployee = /** @class */ (function () {
    function addEmployee(_employeeService) {
        this._employeeService = _employeeService;
        this.employee = {};
    }
    addEmployee.prototype.ngOnInit = function () {
        this.employee.Name = "Hardik";
        this.employee.City = "Mumbai";
        this.employee.Address = "Ahmd";
        this.onGet();
    };
    addEmployee.prototype.onGet = function () {
        var _this = this;
        this._employeeService.getEmployee()
            .subscribe(function (emp) { return _this.employees = emp; });
    };
    addEmployee.prototype.OnDelete = function (Id) {
        var _this = this;
        if (confirm("r u sure") == true) {
            this._employeeService.deleteEmployee(Id)
                .subscribe(function (x) {
                _this._employeeService.getEmployee();
            });
        }
    };
    addEmployee.prototype.onSubmit = function (checkoutForm) {
        if (checkoutForm.value.Id == null)
            this.insertEmployee(checkoutForm);
        else
            this.onUpdate(checkoutForm);
    };
    addEmployee.prototype.onUpdate = function (checkoutForm) {
        var _this = this;
        this._employeeService.updateEmployee(checkoutForm.value)
            .subscribe(function (data) { return _this._employeeService.getEmployee(); });
    };
    addEmployee.prototype.insertEmployee = function (checkoutForm) {
        var _this = this;
        this._employeeService.addEmployee(checkoutForm.value)
            .subscribe(function (data) { return _this._employeeService.getEmployee(); });
    };
    addEmployee = __decorate([
        core_1.Component({
            selector: 'addEmployee',
            templateUrl: 'app/employee/add.component.html',
            providers: [employee_service_1.employeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.employeeService])
    ], addEmployee);
    return addEmployee;
}());
exports.addEmployee = addEmployee;
//# sourceMappingURL=add.component.js.map