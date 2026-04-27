import { CanActivateFn } from '@angular/router';

// TODO: Implement the actual authentication logic here
export const requireAuthGuard: CanActivateFn = (route, state) => {
  return true;
};
