import { ViewName } from './../../enums/view-name';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public ViewName: typeof ViewName = ViewName;

  constructor(public headerService: HeaderService) {
  }

}
