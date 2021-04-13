import { Component, Input, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['../app.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input('firstName') name: string;
  @Input('lastName') lastname: string;
  @Input() age: number;

  clients: Client[]

  constructor() {
    this.clients = [
      {id:1, name:"Bob", age:30},
      {id:2, name:"Martin", age:32},
      {id:3, name:"Billie", age:20},
      {id:4, name:"Marie", age:36},
      {id:5, name:"Rita", age:25},
    ]
  }

  ngOnInit(): void {
  }

}
