import { DatePipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { ICompanyDetail } from '../../models/company-detail.model';
import { SearchService } from '../../services/search.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    DatePipe,
    MatProgressSpinnerModule,
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent implements OnInit, AfterViewInit {
  private searchService = inject(SearchService);
  private sharedDataService = inject(SharedDataService);
  private router = inject(Router);
  private shareDataService = inject(SharedDataService);

  // A new feature of angular 17 to get query param from the router
  @Input('query') searchTerm!: string;

  public displayedColumns: string[] = ['na'];
  public dataSource = new MatTableDataSource<ICompanyDetail>();
  public loader = false;

  @ViewChild(MatPaginator) public paginator!: MatPaginator;

  ngOnInit(): void {
    this.shareDataService.searchTerm.set(this.searchTerm);
    this.getSearchResults();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public onCompanyDetails(companyDetails: ICompanyDetail) {
    this.sharedDataService.updateCompanyDetails(companyDetails);

    this.router.navigate(['/company-details']);
  }

  private getSearchResults() {
    this.loader = true;

    this.searchService
      .getSearchResults(this.searchTerm.trim())
      .subscribe((res) => {
        this.loader = false;
        this.dataSource.data = res.items;
      });
  }
}
