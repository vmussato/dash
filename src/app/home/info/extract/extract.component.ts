import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../../interfaces/transaction';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {

  @Input() transactions: Transaction[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
