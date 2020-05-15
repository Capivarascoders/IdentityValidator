import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-validate',
  templateUrl: './not-validate.component.html',
  styleUrls: ['./not-validate.component.css']
})
export class NotValidateComponent implements OnInit {
  wallet = '0x7105d236BdA4Db17666807726D99B70b1da19def';

  constructor() { }

  ngOnInit(): void {
  }

}
