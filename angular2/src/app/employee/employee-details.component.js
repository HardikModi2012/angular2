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
var router_1 = require("@angular/router");
var employee_service_1 = require("./employee.service");
var employeeDetailscomponent = /** @class */ (function () {
    function employeeDetailscomponent(route, employeeService) {
        this.route = route;
        this.employeeService = employeeService;
    }
    employeeDetailscomponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.onGet();
    };
    employeeDetailscomponent.prototype.onGet = function () {
        this.employeeService.getEmployeeById(this.id);
    };
    employeeDetailscomponent = __decorate([
        core_1.Component({
            selector: 'emp-details',
            templateUrl: 'app/employee/employee-details.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, employee_service_1.employeeService])
    ], employeeDetailscomponent);
    return employeeDetailscomponent;
}());
exports.employeeDetailscomponent = employeeDetailscomponent;
//# sourceMappingURL=employee-details.component.js.map