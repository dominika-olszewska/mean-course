import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {
  @Output() public postAdded: EventEmitter<Post> = new EventEmitter<Post>();

  public form: FormGroup = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  });

  public submit(): void {
    this.postAdded.emit(this.form.value);
    this.form.reset();
  }

}
