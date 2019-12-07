import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { addEmployee } from './add.component';

@Injectable()
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<addEmployee>
{
    canDeactivate(component: addEmployee): boolean {
        if (component.createEmployeeFORM.dirty) {
            return confirm("r u sure want tot leave this page?");
        }
        return true;
    }

}