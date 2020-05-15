import { Component, OnInit, Input } from '@angular/core';
import { PortisService } from 'src/app/services/portis.service';
import { filter } from 'rxjs/operators';
import { SubjectType } from 'src/app/models/subject-type.enum';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Input() deviceXs: boolean;
  logged: boolean;

  constructor(
    private portisService: PortisService
  ) { }

  ngOnInit(): void {
    this.portisService.onEvent.pipe(filter(item => item.type === SubjectType.logged)).subscribe((result) => {
      console.log(`nav: ${result.type} | ${result.data}`);
      this.logged = result.data;
    });
  }

  login(){
    this.portisService.show();
  }

  logout(){
    this.portisService.logout();
  }
}
