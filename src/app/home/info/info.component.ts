import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  transactions: Object[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  updateTransactions(transaction: object) {
    this.transactions.push(transaction);
    console.log(this.transactions)
  }

}
