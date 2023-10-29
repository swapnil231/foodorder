import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-serchbox',
  templateUrl: './serchbox.component.html',
  styleUrls: ['./serchbox.component.scss'],
})
export class SerchboxComponent {
  searchTerm = '';
  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
    });
  }

  ngOnInit(): void {}

  search(term: string): void {
    if (term) this.router.navigateByUrl('/search/' + term);
  }
}
