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
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  wallet;


  constructor() {

   }
   
   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

   ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Validated', weight: 10.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 2, name: 'Not validate', weight: 15.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 3, name: 'Validated', weight: 17.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 4, name: 'Validated', weight: 18.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 5, name: 'Validated', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 6, name: 'Validated', weight: 19.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 7, name: 'Validated', weight: 20.05, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 8, name: 'Validated', weight: 15.9994, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 9, name: 'Not validate', weight: 18.9984, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 10, name: 'Not validate', weight: 20.1797, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
  {position: 11, name: 'Not validate', weight: 22.9897, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137'},
];
