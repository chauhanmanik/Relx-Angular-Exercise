import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { OfficersListComponent } from './components/officers-list/officers-list.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: SearchComponent },
  { path: 'search-results', component: SearchResultsComponent },
  {
    path: 'company-details',
    component: CompanyDetailsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'company/:companyId/officers',
    component: OfficersListComponent,
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
