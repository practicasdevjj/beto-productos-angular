import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SesionService } from './sesion.service';

export const chekGuard: CanActivateFn = (route, state) => {
  const sesionservice = inject(SesionService)
  const router = inject(Router)
  const isvalid = sesionservice.valid();
  if (!isvalid){
    router.navigate(["/login"])
  }
  return isvalid
};
