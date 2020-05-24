import { Component, OnInit } from '@angular/core';
import { PortisService } from 'src/app/services/portis.service';
import { filter } from 'rxjs/operators';
import { SubjectType } from 'src/app/models/subject-type.enum';
import { ContractService } from 'src/app/services/contract.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

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
  form;

  constructor(
    private portisService: PortisService,
    private contractService: ContractService,
    private router: Router) { 
      this.portisService.onEvent.pipe(filter(item => item.type === SubjectType.wallet)).subscribe((result) => {
        this.wallet = result.data;
      });
    }

   ngOnInit(): void {
  }

  addValidator() {
    const strategy = this.form.value.strategy;
    const price = this.form.value.price;
    this.contractService.addValidator(strategy, price)
      .then((result) => {
        // this.dispatchEvent({ type: SubjectType.isvalidator, data: true });
        this.router.navigateByUrl('/home');
      })
  }

}
