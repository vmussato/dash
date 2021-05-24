import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/interfaces/transaction';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  updateTransactions(transaction: Transaction) {
    this.transactions.push(transaction);
    console.log(this.transactions)
  }

}
