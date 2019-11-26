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
var employeeListComponent1 = /** @class */ (function () {
    function employeeListComponent1(_employeeService) {
        this._employeeService = _employeeService;
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
    employeeListComponent1.prototype.onUpdate = function (Id, employee) {
        var _this = this;
        this._employeeService.addEmployee(employee)
            .subscribe(function (data) { return _this._employeeService.getEmployee(); });
    };
    employeeListComponent1 = __decorate([
        core_1.Component({
            selector: 'ListOfEmployee',
            templateUrl: 'app/employee/list.component.html',
            providers: [employee_service_1.employeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.employeeService])
    ], employeeListComponent1);
    return employeeListComponent1;
}());
exports.employeeListComponent1 = employeeListComponent1;
//# sourceMappingURL=employee-list.component.js.map