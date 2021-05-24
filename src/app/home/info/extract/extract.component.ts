import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Transaction } from '../../../interfaces/transaction';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnChanges {

  @Input() transactions: Transaction[] = [];
  total = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let total = 0;

    this.transactions.forEach( transaction => {
      if (transaction.transactionType !== 1) {
        total += transaction.transactionValue;
      } else {
        total -= transaction.transactionValue;
      }
    });

    this.total = total;
  }

}
