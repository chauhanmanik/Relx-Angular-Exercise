import { TitleCasePipe } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IOfficer } from '../../models/officer.model';
import { SearchService } from '../../services/search.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-officers-list',
  standalone: true,
  imports: [MatCardModule, TitleCasePipe, MatProgressSpinnerModule],
  templateUrl: './officers-list.component.html',
  styleUrl: './officers-list.component.scss',
})
export class OfficersListComponent {
  @Input('companyId') companyId!: string;

  private searchService = inject(SearchService);
  private sharedDataService = inject(SharedDataService);

  public officerList = signal<IOfficer[]>({} as IOfficer[]);
  public companyDetails = this.sharedDataService.getCompanyDetails();
  public loader = false;

  ngOnInit(): void {
    this.getOfficers();
  }

  private getOfficers() {
    this.loader = true;
    this.searchService.getOfficers(this.companyId.trim()).subscribe((res) => {
      this.officerList.set(res.items);
      this.loader = false;
    });
  }
}
