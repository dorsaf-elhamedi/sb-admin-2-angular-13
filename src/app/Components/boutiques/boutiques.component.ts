import { Observable } from 'rxjs';
import { AppService } from './../../Services/app.service';
import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-boutiques',
  templateUrl: './boutiques.component.html',
  styleUrls: ['./boutiques.component.css']
})
export class BoutiquesComponent implements OnInit {

  Boutiques: any;
  constructor(private appService: AppService) { }
  ngOnInit(): void {
    $('#dataTable').DataTable();
    this.getBoutiques();
  }

  getBoutiques()
  {
    this.appService.getBoutiques().subscribe(
      (data) =>
      {
        console.log("getBoutiques resultat: "+data);
        this.Boutiques = data;
      }
    )
  }

}
