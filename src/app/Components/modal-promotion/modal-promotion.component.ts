import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-promotion',
  templateUrl: './modal-promotion.component.html',
  styleUrls: ['./modal-promotion.component.css']
})
export class ModalPromotionComponent implements OnInit {

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
