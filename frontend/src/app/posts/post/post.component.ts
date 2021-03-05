import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  @Input() public post: Post;
  @Output() public deleteClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() public editClicked: EventEmitter<string> = new EventEmitter<string>();

  public isInfoDisplayed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onDelete(postId: string): void {
    this.deleteClicked.emit(postId);
  }

  public onEdit(postId: string): void {
    this.editClicked.emit(postId);
  }

  public toggle(): void {
    this.isInfoDisplayed = !this.isInfoDisplayed;
  }

}
