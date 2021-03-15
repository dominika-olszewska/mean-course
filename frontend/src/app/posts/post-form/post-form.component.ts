import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Mode } from 'src/app/enums/mode';
import { Post } from '../post.interface';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostFormComponent implements OnInit {
  @Input() public post: Post;
  @Input() public postMode: string;
  @Output() public postAdded: EventEmitter<Post> = new EventEmitter<Post>();
  public mode: typeof Mode = Mode;
  public form: FormGroup;

  public get title(): AbstractControl {
    return this.form.get('title');
  }

  public get content(): AbstractControl {
    return this.form.get('content');
  }
  public ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl(
        null,
        {
          validators: [Validators.required, Validators.minLength(3)]
        }),
      content: new FormControl(null,
        {
          validators: [Validators.required]
        })
    });

    if (this.post) {
      this.form.patchValue({ title: this.post.title, content: this.post.content });
    }
  }

  public submit(): void {

    if (this.form.invalid) {
      return;
    }
    this.postAdded.emit(this.form.value);
    this.form.reset();
  }

}
