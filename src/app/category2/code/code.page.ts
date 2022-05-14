import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {
  public codeCategory = [
    {
      title: '',
      path: '/article/',
      content: '',
    },
   
  ];

  constructor() { }

  ngOnInit() {
  }

}