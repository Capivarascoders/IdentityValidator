import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {
  wallet = '0x7105d236BdA4Db17666807726D99B70b1da19def';

  constructor() { }

  ngOnInit(): void {
  }

}
