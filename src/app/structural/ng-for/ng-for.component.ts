import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  public DSNV:any = [
    {ten:"Loc",tuoi:"21"},
    {ten:"Nghia" , tuoi:"100"},
    {ten:"Loc",tuoi:"21"},
    {ten:"Nghia" , tuoi:"100"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
