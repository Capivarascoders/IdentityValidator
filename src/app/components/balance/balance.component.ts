import { Component, OnInit } from '@angular/core';
import { PortisService } from 'src/app/services/portis.service';
import { filter } from 'rxjs/operators';
import { SubjectType } from 'src/app/models/subject-type.enum';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  balance: number = 0;

  constructor(
    private contractService: ContractService
  ) { }

  ngOnInit(): void {
    this.contractService.onEvent.pipe(filter(item => item.type === SubjectType.balance)).subscribe((result) => {
      this.balance = result.data;
    });
  }
}
