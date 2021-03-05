import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../post.interface';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostFormComponent {
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