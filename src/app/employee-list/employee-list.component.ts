import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ExServicesComponent } from '../ex-services/ex-services.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  constructor(private _employeeService: EmployeesService) {}

  ngOnInit() {
    this._employeeService
      .getEmployees()
      .subscribe((data) => (this.employees = data));
    //subscribe method first argument fat arrow function
    //that assign data received from the observable to this local
    //employees property
    //the left data argument to the function
    //the right is the body of function
    //we are assigning the employee data to the employess property
  }
}
