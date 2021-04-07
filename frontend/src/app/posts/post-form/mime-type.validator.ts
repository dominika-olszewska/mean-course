import { Observable, Observer } from 'rxjs';
import { AbstractControl } from "@angular/forms";

export interface MimeError {
  [key: string]: any;
}

export const mimeType = (control: AbstractControl): Promise<MimeError> | Observable<MimeError> => {
  const file: File = control.value as File;
  const fileReader: FileReader = new FileReader();
  const frObs = Observable.create((observer: Observer<MimeError>) => {
    fileReader.addEventListener("loadend", () => {
      const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(0, 4);
      let header: string = '';
      let isValid: boolean = false;
      for (let i = 0; i < arr.length; i++) {
        header += arr[i].toString(16);
      }
      switch (header) {
        case '89504e47':
          isValid = true;
          break;
        case 'ffd8ffe0':
        case 'ffd8ffe1':
        case 'ffd8ffe2':
        case 'ffd8ffe3':
        case 'ffd8ffe8':
          isValid = true;
          break;
        default:
          isValid = false;
          break;
      }

      if (isValid) {
        observer.next(null);
      } else {
        observer.next({ invalidMimeType: true })
      }

      observer.complete();

    });
    fileReader.readAsArrayBuffer(file);
  })
  return frObs;
}
