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
var editEmployee = /** @class */ (function () {
    function editEmployee(_route, _employeeService) {
        this._route = _route;
        this._employeeService = _employeeService;
        this.employee = {};
    }
    editEmployee.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.onGet();
    };
    editEmployee.prototype.onGet = function () {
        var _this = this;
        this._employeeService.getEmployeeById(this.id)
            .subscribe(function (emp) { return _this.employee = emp; });
    };
    editEmployee.prototype.OnDelete = function (Id) {
        var _this = this;
        if (confirm("r u sure") == true) {
            this._employeeService.deleteEmployee(Id)
                .subscribe(function (x) {
                _this._employeeService.getEmployees();
            });
        }
    };
    editEmployee.prototype.onSubmit = function (checkoutForm) {
        if (checkoutForm.value == null)
            this.insertEmployee(checkoutForm);
        else
            this.onUpdate(checkoutForm);
    };
    editEmployee.prototype.onUpdate = function (checkoutForm) {
        var _this = this;
        this._employeeService.updateEmployee(checkoutForm.value)
            .subscribe(function (data) { return _this.onGet(); });
        //this._employeeService.selectedEmployee = Object.assign({}, checkoutForm.
    };
    editEmployee.prototype.insertEmployee = function (checkoutForm) {
        var _this = this;
        this._employeeService.addEmployee(checkoutForm.value)
            .subscribe(function (data) { return _this.onGet(); });
    };
    editEmployee = __decorate([
        core_1.Component({
            selector: 'editEmployee',
            templateUrl: 'app/employee/edit.component.html',
            providers: [employee_service_1.employeeService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, employee_service_1.employeeService])
    ], editEmployee);
    return editEmployee;
}());
exports.editEmployee = editEmployee;
//# sourceMappingURL=edit.component.js.map