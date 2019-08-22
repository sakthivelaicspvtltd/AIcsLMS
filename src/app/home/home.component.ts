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
  constructor(private modalService: NgbModal, private httpClient: HttpClient) {}
  openXl(content) { this.modalService.open(content, {size: 'xl'}); }


}


