import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [MatCardModule, DatePipe, TitleCasePipe],
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

  // export interface ICompanyDetail {
  //   company_status: string;
  //   address_snippet: string;
  //   date_of_creation: string;
  //   matches: IMatches;
  //   description: string;
  //   links: ILinks;
  //   company_number: string;
  //   title: string;
  //   company_type: string;
  //   address: IAddress;
  // }
}
