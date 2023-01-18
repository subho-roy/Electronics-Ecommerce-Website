import { Component, OnInit } from '@angular/core';
import { Serve1Service } from '../f1/serve1.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
store:any=[];
  constructor(private ins:Serve1Service) { }

  ngOnInit(): void {
    this.store=this.ins.product;
    
  }

}
