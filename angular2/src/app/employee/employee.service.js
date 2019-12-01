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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
var employeeService = /** @class */ (function () {
    function employeeService(_http) {
        this._http = _http;
    }
    //getEmployee() {
    //    return this._http.get("http://localhost:60163/api/employee")
    //        .map((res: any) => <IEmployee[]>res.json());
    //}
    //getEmployeeById(Id: number): Observable<IEmployee> {
    //    return this._http.get("http://localhost:60163/api/employee/FindEmployee/" + Id)
    //        .map((res: any) => res.json());
    //}
    //deleteEmployee(Id: number): Observable<IEmployee> {
    //    const url = "http://localhost:60163/api/employee/deleteEmployee/" + Id;
    //    return this._http.delete(url)
    //        .map((res: any) => res.json());
    //}
    //addEmployee(emp: IEmployee): Observable<IEmployee> {
    //    var body = JSON.stringify(emp);
    //    var requestoptions = new RequestOptions({ headers: headerOptions });
    //    return this._http.post("http://localhost:60163/api/employee/InsertEmployee", body, requestoptions)
    //        .map((res: any) => res.json());
    //}
    //updateEmployee(emp: IEmployee): Observable<IEmployee> {
    //    var body = JSON.stringify(emp);
    //    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    //    var requestoptions = new RequestOptions({ headers: headerOptions });
    //    return this._http.put("http://localhost:60163/api/employee/UpdateEmployee", body , requestoptions)
    //        .map((res: any) => res.json());
    //}
    employeeService.prototype.getEmployees = function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, this._http.get("http://localhost:60163/api/employee")];
        });
    };
    employeeService.prototype.getEmployeeById = function (id) {
        return this._http.get("http://localhost:60163/api/employee/FindEmployee/" + id);
    };
    employeeService.prototype.addEmployee = function (employee) {
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        var body = {
            Id: employee.Id,
            Name: employee.Name,
            city: employee.city,
            gender: employee.gender,
            department: employee.department,
            email: employee.email,
            contact: employee.contact
        };
        return this._http.post("http://localhost:60163/api/employee/InsertEmployee", body, { headers: headers });
    };
    employeeService.prototype.updateEmployee = function (employee) {
        var body = JSON.stringify(employee);
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put("http://localhost:60163/api/employee/UpdateEmployee/" + employee.Id, body, { headers: headers });
    };
    employeeService.prototype.deleteEmployee = function (id) {
        return this._http.delete("http://localhost:60163/api/employee/deleteEmployee/" + id);
    };
    employeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], employeeService);
    return employeeService;
}());
exports.employeeService = employeeService;
//# sourceMappingURL=employee.service.js.map