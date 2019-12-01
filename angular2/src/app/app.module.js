"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var employee_list_component_1 = require("./employee/employee-list.component");
var employee_details_component_1 = require("./employee/employee-details.component");
var pagenotfound_component_1 = require("./employee/pagenotfound.component");
var home_component_1 = require("./employee/home.component");
var add_component_1 = require("./employee/add.component");
var edit_component_1 = require("./employee/edit.component");
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'ListOfEmployee', component: employee_list_component_1.employeeListComponent1 },
    { path: 'emp-details', component: employee_details_component_1.employeeDetailscomponent },
    { path: 'addEmployee', component: add_component_1.addEmployee },
    { path: 'edit/:id', component: edit_component_1.editEmployee },
    { path: 'home', component: home_component_1.homecomponent },
    { path: '**', component: pagenotfound_component_1.pagenotfound }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpClientModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent, employee_list_component_1.employeeListComponent1, employee_details_component_1.employeeDetailscomponent, pagenotfound_component_1.pagenotfound,
                add_component_1.addEmployee, edit_component_1.editEmployee, home_component_1.homecomponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map