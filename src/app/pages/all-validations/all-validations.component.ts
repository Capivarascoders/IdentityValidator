import { PortisService } from './../../services/portis.service';
import { ContractService } from 'src/app/services/contract.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { filter } from 'rxjs/operators';
import { SubjectType } from 'src/app/models/subject-type.enum';

@Component({
  selector: 'app-all-validations',
  templateUrl: './all-validations.component.html',
  styleUrls: ['./all-validations.component.css']
})
export class AllValidationsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource;
  wallet;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private contractService: ContractService, private portisService: PortisService) {
    this.portisService.onEvent.pipe(filter(item => item.type === SubjectType.wallet)).subscribe((result) => {
      this.wallet = result.data;
    });
   }

  async ngOnInit(): Promise <void> {
    this.dataSource.paginator = this.paginator;

    const validator = await this.contractService.getValidatorByAddress(this.wallet);
    const dateToBeValidate = await this.contractService.getIdsDataToBeValidatedIdByValidatorId(validator.validatorId);

  }



}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 2, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 3, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 4, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 5, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 6, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 7, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 8, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 9, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 10, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 11, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 12, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 13, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 14, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 15, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 16, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 17, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 18, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 19, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 20, name: 'Aprovado', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
];
