import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moadal-vendeur',
  templateUrl: './modal-vendeur.component.html',
  styleUrls: ['./modal-vendeur.component.css']
})
export class MoadalVendeurComponent implements OnInit {
  successMsg = false;
  constructor() { }

  ngOnInit(): void {
  }
  showSuccessMsg() {
    this.successMsg = true;

    setTimeout(() => {
      this.successMsg = false;
    }, 3000); // Le message disparaîtra après 3 secondes
  }

}
