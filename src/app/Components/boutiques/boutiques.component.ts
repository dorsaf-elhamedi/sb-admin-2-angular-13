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

  Boutiques: {"nom": String, "etablissement": String}[] = [];
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
  deleteBoutique(etablissement: String, index: number)
  {
    this.appService.deleteBoutique(etablissement).subscribe(
      (data) =>
      {
        console.log("deleteBoutiques resultat: "+data);
        if(data.done == "True")
        {
          this.Boutiques.splice(index,1)
          alert("Boutique avec l'etablissement" + data.etablissement + " est supprimée avec succès")
        }
        else
        {
          alert("échec de suppression")
        }
      }
    )
  }

}
