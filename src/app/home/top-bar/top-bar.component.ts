import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  showSidebar = false

  constructor() { }

  ngOnInit(): void {
  }

  changeSidebar() {
    console.log('change sidebar');
    this.showSidebar = !this.showSidebar;
  }
}
