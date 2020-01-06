import {Component , Output} from '@angular/core';
import { style } from '@angular/animations';
import {Post} from '../post.model';
import { NgForm } from '@angular/forms';
import { PostService } from '../posts.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  constructor(public postService: PostService) {}

onAddPost(form: NgForm) {
  if(form.invalid){
    return true;
  }
  this.postService.addPost(form.value.title , form.value.content);
  form.resetForm();
}

}

