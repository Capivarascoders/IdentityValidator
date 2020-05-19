import { Component, OnInit } from '@angular/core';
import { PortisService } from 'src/app/services/portis.service';
import { filter } from 'rxjs/operators';
import { SubjectType } from 'src/app/models/subject-type.enum';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  validationStatus = 'Peding';
  panelOpenState = false;
  isValidator: boolean;
  wallet: string;

  constructor(
    private portisService: PortisService,
    private contractService: ContractService) { 
      this.portisService.onEvent.pipe(filter(item => item.type === SubjectType.wallet)).subscribe((result) => {
        this.wallet = result.data;
      });
    }

   ngOnInit(): void {
    // this.contractService.isValidator(this.wallet).then((result) => { console.log(result) });
    console.log(this.contractService)
    
  }

}
