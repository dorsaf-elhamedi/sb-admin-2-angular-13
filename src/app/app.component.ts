import { Component, OnInit } from '@angular/core';

declare var sb_admin_2:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(

  ){

  }

  ngOnInit(): void {

    sb_admin_2();

  }

}
