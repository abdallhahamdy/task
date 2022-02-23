import { Component, OnInit } from '@angular/core';
// import { Employee } from 'src/app/interfaces/employee.interface'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // employee: Employee[]=[
  //   {responseCode: 200, message: 'success', entity[{id:1, name:'Ahmed',email:"a@fuinco.com",phone: "01128342793"},{id: 2, name: "Mohamed", email: "m@fuinco.com", phone: "01025349793"}],
  //    sensorSettings: null, size: 12}
  // ]
  constructor() { }

  ngOnInit(): void {
  }

}
