import { HttpInterceptorFn } from '@angular/common/http';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const API_KEY = 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf';

  const authReq = req.clone({
    setHeaders: {
      'x-api-key': API_KEY,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET',
    },
  });

  return next(authReq);
};
