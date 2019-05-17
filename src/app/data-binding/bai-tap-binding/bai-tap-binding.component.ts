import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-binding',
  templateUrl: './bai-tap-binding.component.html',
  styleUrls: ['./bai-tap-binding.component.scss']
})
export class BaiTapBindingComponent implements OnInit {

  email:string = "";
  fullname:string = "";

  change(thamso){
    this.fullname = thamso.value;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
