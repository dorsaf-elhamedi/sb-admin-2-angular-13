import { Boutique } from './../../Models/Boutique';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-modal-boutique',
  templateUrl: './modal-boutique.component.html',
  styleUrls: ['./modal-boutique.component.css']
})
export class ModalBoutiqueComponent implements OnInit {
  successMsg = false;
  myForm = new FormGroup(
    {
      nom: new FormControl('', Validators.required),
      etablissement: new FormControl('', Validators.required)
    }
  )

  get nom()
  {
    return this.myForm.get("nom");
  }
  get etablissement()
  {
    return this.myForm.get("etablissement");
  }
  constructor(private appService: AppService) { }

  ngOnInit(): void {
  } showSuccessMsg() {
    this.successMsg = true;

    setTimeout(() => {
      this.successMsg = false;
    }, 3000); // Le message disparaîtra après 3 secondes
  }
  onSubmit(e: Event)
  {
    e.preventDefault()
  }
  addBoutiques()
  {
    var boutique = new Boutique(this.myForm.get("nom")!.value, this.myForm.get("etablissement")!.value)
    this.appService.addBoutique(boutique).subscribe(
      (data) =>
      {
        console.log("addBoutique resultat: "+data);
        if(data.done == "True")
        {
          alert("Boutique avec l'id " + data.id + " est ajoutée avec succès")
        }
        else
        {
          alert("échec d'insertion")
        }
      }
    )
  }

}
