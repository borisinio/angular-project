import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {Post} from '../post.model';
import { PostService } from '../posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']

})
export class PostListComponent implements OnInit, OnDestroy {
 posts: Post[] = [];
 private postsSub: Subscription;

 constructor(public postService: PostService) {}
ngOnInit(){
  this.postService.getPosts();
  this.postsSub = this.postService.getPostUpdateListener().subscribe((posts: Post[]) => {
    this.posts = posts;
  });
}

onDelete(postId: string) {
  this.postService.deletePost(postId);
}
ngOnDestroy(){
  this.postsSub.unsubscribe();
}
}
