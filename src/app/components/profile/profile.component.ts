import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  validations = '12';
  balanceStaking = '3.030012';
  address = '0x09c15427Fed859ed46AFFB996bCd62f3b9180137';
  status = 'Ativo'

  constructor() { }

  ngOnInit(): void {
  }

}
