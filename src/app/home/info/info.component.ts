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
    this.transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
  }

  updateTransactions(transaction: Transaction) {
    this.transactions.push(transaction);
    console.log(this.transactions)
    localStorage.setItem('transactions', JSON.stringify(this.transactions));
  }

}
