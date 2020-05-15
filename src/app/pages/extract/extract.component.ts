import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: '0.00050', weight: 19.02, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137' },
  { position: 2, name: '0.00050', weight: 19.02, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137' },
  { position: 3, name: '0.00050', weight: 19.02, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137' },
  { position: 4, name: '0.00050', weight: 19.02, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137' },
  { position: 5, name: '0.00050', weight: 19.02, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137' },
  { position: 6, name: '0.00050', weight: 19.02, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137' },
  { position: 7, name: '0.00050', weight: 19.02, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137' },
  { position: 8, name: '0.00050', weight: 19.02, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137' },
  { position: 9, name: '0.00050', weight: 19.02, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137' },
  { position: 10, name: '0.00050', weight: 19.02, symbol: '0x09c15427Fed859ed46AFFB996bCd62f3b9180137' },
];
@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.css']
})
export class ExtractComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }
}


