import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Mode } from 'src/app/enums/mode';
import { Post } from '../post.interface';
import { mimeType } from './mime-type.validator'

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
  public imagePreview: string;

  public get title(): AbstractControl {
    return this.form.get('title');
  }

  public get content(): AbstractControl {
    return this.form.get('content');
  }

  public get image(): AbstractControl {
    return this.form.get('image');
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
        }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      })
    });

    if (this.post) {
      this.form.patchValue({ title: this.post.title, content: this.post.content });
    }
  }

  public onImagePicked(event: Event): void {
    const file: File = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.image.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    }
    reader.readAsDataURL(file);
  }

  public submit(): void {

    if (this.form.invalid) {
      return;
    }
    this.postAdded.emit(this.form.value);
    this.form.reset();
  }

}
