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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var employeeService = /** @class */ (function () {
    function employeeService(_http) {
        this._http = _http;
    }
    employeeService.prototype.getEmployee = function () {
        return this._http.get("http://localhost:60163/api/employee")
            .map(function (res) { return res.json(); });
    };
    employeeService.prototype.getEmployeeById = function (id) {
        return this._http.get("http://localhost:60163/api/employee/FindEmployee/" + id)
            .map(function (res) { return res.json(); });
    };
    employeeService.prototype.deleteEmployee = function (Id) {
        var url = "http://localhost:60163/api/employee/deleteEmployee/" + Id;
        return this._http.delete(url)
            .map(function (res) { return res.json(); });
    };
    employeeService.prototype.addEmployee = function (emp) {
        var body = JSON.stringify(emp);
        var headerOptions = new http_1.Headers({ 'Content-Type': 'application/json' });
        var requestoptions = new http_1.RequestOptions({ headers: headerOptions });
        return this._http.post("http://localhost:60163/api/employee/InsertEmployee", body, requestoptions)
            .map(function (res) { return res.json(); });
    };
    employeeService.prototype.updateEmployee = function (emp) {
        var body = JSON.stringify(emp);
        var headerOptions = new http_1.Headers({ 'Content-Type': 'application/json' });
        var requestoptions = new http_1.RequestOptions({ headers: headerOptions });
        return this._http.put("http://localhost:60163/api/employee/UpdateEmployee", body, requestoptions)
            .map(function (res) { return res.json(); });
    };
    employeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], employeeService);
    return employeeService;
}());
exports.employeeService = employeeService;
//# sourceMappingURL=employee.service.js.map