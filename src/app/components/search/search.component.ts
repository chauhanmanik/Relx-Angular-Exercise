import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  public searchTermControl = new FormControl('', Validators.required);

  private router = inject(Router);

  public onSearch() {
    let valueToSearch = this.searchTermControl.value;

    if (valueToSearch !== '') {
      this.router.navigate(['/search-results'], {
        queryParams: { query: valueToSearch },
      });
    }
  }

  // isValidSearchTerm(): boolean {
  //   // Validation
  //   // return this.searchTerm.trim().length > 0;
  // }
}
