import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor( @Inject (DOCUMENT) private document:Document) { }

  ngOnInit(): void {
  }
  toggleBodyClass(){
    const body = this.document.body;
    if (body.classList.contains ('active')){
      body.classList.remove('active');
    }else{
      body.classList.add('active')
    }

  }

}
