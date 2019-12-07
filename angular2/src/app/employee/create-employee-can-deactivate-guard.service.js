"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CreateEmployeeCanDeactivateGuardService = /** @class */ (function () {
    function CreateEmployeeCanDeactivateGuardService() {
    }
    CreateEmployeeCanDeactivateGuardService.prototype.canDeactivate = function (component) {
        if (component.createEmployeeFORM.dirty) {
            return confirm("r u sure want tot leave this page?");
        }
        return true;
    };
    CreateEmployeeCanDeactivateGuardService = __decorate([
        core_1.Injectable()
    ], CreateEmployeeCanDeactivateGuardService);
    return CreateEmployeeCanDeactivateGuardService;
}());
exports.CreateEmployeeCanDeactivateGuardService = CreateEmployeeCanDeactivateGuardService;
//# sourceMappingURL=create-employee-can-deactivate-guard.service.js.map