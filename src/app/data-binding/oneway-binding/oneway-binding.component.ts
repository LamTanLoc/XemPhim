import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.scss']
})
export class OnewayBindingComponent implements OnInit {


  name_1:string = "LamTanLoc";
  name_2:string = "PhungVanTrongNghia";
  img:string = "https://picsum.photos/200/300";

 

  constructor() { }

  ngOnInit() {
  }

  eventBinding(thamso){
    alert("Chao em Trai " + thamso + "!!!");
  }
}
