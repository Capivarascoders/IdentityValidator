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

  @Input() deviceXs: boolean;
  logged: boolean;
  wallet: string;
  balance: any;

  constructor(
    private portisService: PortisService
  ) { }

  ngOnInit(): void {
    this.portisService.onEvent.pipe(filter(item => item.type === SubjectType.logged)).subscribe((result) => {
      this.logged = result.data;
    });

    this.portisService.onEvent.pipe(filter(item => item.type === SubjectType.wallet)).subscribe((result) => {
      this.wallet = result.data;
    });
  }

  login() {
    this.portisService.show();
  }

  logout() {
    this.portisService.logout();
  }
}
