import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss']
})
export class NewTransactionComponent {

  @Output() updateTransactions = new EventEmitter();

  item = {
    transactionType : 1,
    transactionName : '',
    transactionValue :'',
  }

  constructor() { }

  addTransaction() {
    console.log(this.item);

    this.updateTransactions.emit(this.item);

    this.item = {
      transactionType : 1,
      transactionName : '',
      transactionValue :'',
    }
  }
}
