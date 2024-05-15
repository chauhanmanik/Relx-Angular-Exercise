import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { OfficersListComponent } from './components/officers-list/officers-list.component';

export const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'search-results', component: SearchResultsComponent },
  {
    path: 'company-details',
    component: CompanyDetailsComponent,
    // canActivate: [AuthGuard], // Apply the AuthGuard
  },
  {
    path: 'company/:companyId/officers',
    component: OfficersListComponent,
    // canActivate: [AuthGuard], // Apply the AuthGuard
  },
];
