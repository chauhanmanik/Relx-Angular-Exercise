import { Component, Input, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SearchService } from '../../services/search.service';
import { IOfficer } from '../../models/officer.model';
import { ICompanyDetail } from '../../models/company-detail.model';
import { SharedDataService } from '../../services/shared-data.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-officers-list',
  standalone: true,
  imports: [MatCardModule, TitleCasePipe],
  templateUrl: './officers-list.component.html',
  styleUrl: './officers-list.component.scss',
})
export class OfficersListComponent {
  @Input('companyId') companyId!: string;

  private searchService = inject(SearchService);
  private sharedDataService = inject(SharedDataService);

  public officerList = signal<IOfficer[]>({} as IOfficer[]);
  public companyDetails = this.sharedDataService.getCompanyDetails();

  ngOnInit(): void {
    this.getOfficers();
  }

  private getOfficers() {
    this.searchService.getOfficers(this.companyId.trim()).subscribe((res) => {
      console.log('xxx Officrs', res);
      this.officerList.set(res.items);
      // this.loader = false;
      // this.dataSource.data = res.items;
    });
  }
}
