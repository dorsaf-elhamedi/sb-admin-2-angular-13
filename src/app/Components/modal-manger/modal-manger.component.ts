import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-manger',
  templateUrl: './modal-manger.component.html',
  styleUrls: ['./modal-manger.component.css']
})
export class ModalMangerComponent implements OnInit {

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
