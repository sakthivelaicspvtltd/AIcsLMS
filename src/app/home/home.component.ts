import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  closeResult: string;
  private url = 'http://jsonplaceholder.typicode.com/posts';
  Employees;
  // Edit; Show; Delete;
  constructor(private modalService: NgbModal, private httpClient: HttpClient) {
    this.httpClient.get(this.url)
    .subscribe(response => {
      // console.log(response.valueOf());
      this.Employees = response;
    });
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(json =>   this.Employees = json);
  }
  openXl(content, emp, type) {
    console.log(emp.id);
    // if (type == 'edit') {
    //   this.Edit = true;
    // } else if (type == 'show') {
    //   this.Show = true;
    // } else if (type == 'del') {
    //   this.Delete = true;
    // }
    this.modalService.open(content, {size: 'xl'});
  }

}


