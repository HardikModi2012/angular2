import { Component, OnInit, Injectable } from '@angular/core';
import { RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IEmployee } from './IEmployee';
import  'rxjs/add/operator/map';

@Injectable()
export class employeeService {

    
    selectedEmployee: IEmployee;
    constructor(private _http: HttpClient) { }

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
    *//    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
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

    getEmployees(){
        return this._http.get("http://localhost:60163/api/employee")
    }

    getEmployeeById(id: number) {
        return this._http.get("http://localhost:60163/api/employee/FindEmployee/" + id)
    }


    addEmployee(employee: IEmployee) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        var body =
        {
            Id: employee.Id,
            Name: employee.Name,
            city: employee.city,
            gender: employee.gender,
            department: employee.department,
            email: employee.email,
            contact: employee.contact
        }
       return  this._http.post("http://localhost:60163/api/employee/InsertEmployee", body, { headers })

    }

    updateEmployee(employee: IEmployee) {
        var body = JSON.stringify(employee);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put("http://localhost:60163/api/employee/UpdateEmployee/" + employee.Id , body, { headers })
    }

    deleteEmployee(id: number) {
       return this._http.delete("http://localhost:60163/api/employee/deleteEmployee/" + id)

    }

}

