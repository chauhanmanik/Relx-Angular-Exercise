import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [MatCardModule, DatePipe, TitleCasePipe, MatIconModule],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.scss',
})
export class CompanyDetailsComponent {
  private sharedDataService = inject(SharedDataService);
  private router = inject(Router);

  public companyDetails = this.sharedDataService.getCompanyDetails();

  public onListOfficers() {
    this.router.navigate([
      '/company',
      this.companyDetails.company_number,
      'officers',
    ]);
  }

  public onBack() {
    this.router.navigate(['/search-results'], {
      queryParams: { query: this.sharedDataService.searchTerm() },
    });
  }
}
