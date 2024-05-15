import { Component, inject } from '@angular/core';
import { ICompanyDetail } from '../../models/company-detail.model';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.scss',
})
export class CompanyDetailsComponent {
  private sharedDataService = inject(SharedDataService);

  public companyDetails = this.sharedDataService.getCompanyDetails();
}
