import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SharedDataService } from '../services/shared-data.service';

export const authGuard: CanActivateFn = (route, state) => {
  const isUserAuthenticated = inject(SharedDataService).userAuthentication();
  const sharedDataService = inject(SharedDataService);

  if (!isUserAuthenticated) {
    const searchTerm = sharedDataService.searchTerm();

    inject(Router).navigate(['/search-results'], {
      queryParams: { query: searchTerm },
    });
  }

  return sharedDataService.userAuthentication();
};
