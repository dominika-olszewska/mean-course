import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

export enum ClientError {
  REQUIRED = 'required',
  MINLENGTH = 'minlength'
}

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent {

  @Input() public field: AbstractControl;

  public clientError: typeof ClientError = ClientError;

}
