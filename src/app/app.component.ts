import { AfterViewInit, Component } from '@angular/core';
import { RoutercontrolService } from './shared/routercontrol.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  isNavigation: any;
  constructor(private routercontrol: RoutercontrolService) {}
  ngAfterViewInit(): void {
    this.routercontrol.cast.subscribe((res: any) => {
      console.log(res);
      this.isNavigation = res;
    });
  }

  title = 'foodorder';
}
