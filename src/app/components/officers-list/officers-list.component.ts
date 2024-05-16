import { TitleCasePipe } from '@angular/common';
import { Component, DestroyRef, Input, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { IOfficer } from '../../models/officer.model';
import { SearchService } from '../../services/search.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-officers-list',
  standalone: true,
  imports: [
    MatCardModule,
    TitleCasePipe,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  templateUrl: './officers-list.component.html',
  styleUrl: './officers-list.component.scss',
})
export class OfficersListComponent {
  @Input('companyId') companyId!: string;
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  private searchService = inject(SearchService);
  private sharedDataService = inject(SharedDataService);

  public officerList = signal<IOfficer[]>({} as IOfficer[]);
  public companyDetails = this.sharedDataService.getCompanyDetails();
  public loader = false;

  ngOnInit(): void {
    this.getOfficers();
  }

  public onBack() {
    this.router.navigate(['/company-details'], {
      queryParams: { query: this.sharedDataService.searchTerm() },
    });
  }

  private getOfficers() {
    this.loader = true;

    this.searchService
      .getOfficers(this.companyId.trim())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        this.officerList.set(res.items);
        this.loader = false;
      });
  }
}
