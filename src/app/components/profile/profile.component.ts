import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  location = 'Osasco, SP';
  validations = '12';
  balanceStaking = '3.030012';
  user = 'Danilo Falco';

  constructor() { }

  ngOnInit(): void {
  }

}
