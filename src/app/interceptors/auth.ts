import { TOKEN_STORAGE_KEY } from '@/config';
import { loadFromStorage } from '@/utils';
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = loadFromStorage(TOKEN_STORAGE_KEY);
  if (token) {
    req = req.clone({
      headers: req.headers.append('Authorization', 'Bearer ' + token),
    });
  }

  return next(req);
};
