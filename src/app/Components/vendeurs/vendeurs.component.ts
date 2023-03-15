import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-vendeurs',
  templateUrl: './vendeurs.component.html',
  styleUrls: ['./vendeurs.component.css']
})
export class VendeursComponent implements OnInit {

  successMsg = false;
  constructor() { }

  ngOnInit(): void {
    $('#dataTable').DataTable();


  }
  showSuccessMsg() {
    this.successMsg = true;

    setTimeout(() => {
      this.successMsg = false;
    }, 3000); // Le message disparaîtra après 3 secondes
  }




}
