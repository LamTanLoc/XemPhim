import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  text:string = "LamTanLoc";
  Status:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  hidden(){
    this.Status = false;
    
  }
  Showing(){
    this.Status = true;
  }

}
