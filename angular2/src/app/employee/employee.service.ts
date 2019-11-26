import { Component, OnInit, Injectable } from '@angular/core';
import { Http, RequestOptions, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IEmployee } from './IEmployee';
import  'rxjs/add/operator/map';

@Injectable()
export class employeeService {

    constructor(private _http: Http) { }

    getEmployee() {
        return this._http.get("http://localhost:60163/api/employee")
            .map((res: any) => <IEmployee[]>res.json());
    }

    getEmployeeById(Id: number): Observable<IEmployee> {
        return this._http.get("http://localhost:60163/api/employee/FindEmployee")
            .map((res: any) => res.json());
    }

    deleteEmployee(Id: number): Observable<IEmployee> {
        const url = "http://localhost:60163/api/employee/deleteEmployee/" + Id;
        return this._http.delete(url)
            .map((res: any) => res.json());
    }

    addEmployee(emp: IEmployee): Observable<IEmployee> {
        var body = JSON.stringify(emp);
        var headerOptions = new Headers({ 'Content-Type': 'application/json' });
        var requestoptions = new RequestOptions({ method: RequestMethod.Post });
        return this._http.post("http://localhost:60163/api/employee/InsertEmployee", body, requestoptions)
            .map((res: any) => res.json());
    }

    updateEmployee(emp: IEmployee): Observable<IEmployee> {
        var body = JSON.stringify(emp);
        var headerOptions = new Headers({ 'Content-Type': 'application/json' });
        var requestoptions = new RequestOptions({ method: RequestMethod.Post });
        return this._http.put("http://localhost:60163/api/employee/UpdateEmployee", body, requestoptions)
            .map((res: any) => res.json());
    }
}

