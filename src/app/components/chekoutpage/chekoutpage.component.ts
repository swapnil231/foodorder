import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chekoutpage',
  templateUrl: './chekoutpage.component.html',
  styleUrls: ['./chekoutpage.component.scss'],
})
export class ChekoutpageComponent implements OnDestroy {
  constructor(private router_: Router) {}
  ngOnDestroy(): void {
    window.location.reload();
  }
  gotoHome() {
    // this.router_.navigate(['/']).then(() => window.location.reload());
    this.router_.navigate(['/']);
  }
}
