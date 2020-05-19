import { Component, OnInit, Input } from '@angular/core';
import { PortisService } from 'src/app/services/portis.service';
import { filter } from 'rxjs/operators';
import { SubjectType } from 'src/app/models/subject-type.enum';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isValidator: boolean;

  @Input() deviceXs: boolean;
  logged: boolean;
  wallet: string;
  balance: any;

  constructor(
    private portisService: PortisService,
    private contractService: ContractService
  ) { }

  async ngOnInit(): Promise <void> {
    this.portisService.onEvent.pipe(filter(item => item.type === SubjectType.logged)).subscribe((result) => {
      this.logged = result.data;
    });

    this.portisService.onEvent.pipe(filter(item => item.type === SubjectType.wallet)).subscribe((result) => {
      this.wallet = result.data;
    });

    // this.isValidator = await this.contractService.isValidator(this.wallet);
  }

  login() {
    this.portisService.show();
  }

  logout() {
    this.portisService.logout();
  }
}
