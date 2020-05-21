import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  selected = 1;
  isValidator: boolean;
  form: FormGroup;
  
  constructor(private contractService: ContractService, private fb: FormBuilder) { 
    this.form = this.fb.group({ 
      strategy: ['', Validators.required], 
      price: ['']
     });
  }

  ngOnInit(): void {

  }

  addValidator() {
    const strategy = this.form.value.strategy;
    const price = this.form.value.price;
    
    this.contractService.addValidator(strategy, price).then((result) => { console.log('add') })
  }

}
