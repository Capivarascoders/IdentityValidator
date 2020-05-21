import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-request-loot',
  templateUrl: './request-loot.component.html',
  styleUrls: ['./request-loot.component.css'],
})
export class RequestLootComponent implements OnInit{
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;
  color = '#F5F5F5';

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
  }
}