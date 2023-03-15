import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

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
