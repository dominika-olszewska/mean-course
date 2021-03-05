import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { HeaderService } from '../header/services/header.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateHeaderGuard implements CanActivate {
  constructor(private headerService: HeaderService) {

  }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.headerService.setCurrentViewName(route.data.viewName);
    return true;
  }

}
