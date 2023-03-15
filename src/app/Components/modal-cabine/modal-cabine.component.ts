import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-cabine',
  templateUrl: './modal-cabine.component.html',
  styleUrls: ['./modal-cabine.component.css']
})
export class ModalCabineComponent implements OnInit {

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
