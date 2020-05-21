import { Component, OnInit } from '@angular/core';
import { PortisService } from 'src/app/services/portis.service';
import { filter } from 'rxjs/operators';
import { ValidationStatus } from './../../models/validation-status.enum';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-peding-validations',
  templateUrl: './peding-validations.component.html',
  styleUrls: ['./peding-validations.component.css']
})
export class PedingValidationsComponent implements OnInit {
  wallet = '0x7105d236BdA4Db17666807726D99B70b1da19def';
  price = '0.300102930 ETH';
  document = '35049705-5';

  panelOpenState = false;


  constructor(private contractService: ContractService) { }

  ngOnInit(): void {

  }

}
