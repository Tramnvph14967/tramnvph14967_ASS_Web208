import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPosts } from '../../.././../models/Posts';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {

  posts: IPosts = {
    title: "",
    image: "",
    // createAt: "",
    // categoryPostId: "",
    shortDesc: "",
    desc: "",
  }
  constructor(
    private postService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.postService.getPost(id).subscribe(data => {
        this.posts = data
      })
    }
  }
  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.postService.updatePost(this.posts).subscribe(data => {
        setTimeout(() => {
          // redirect về posts list
          this.router.navigateByUrl('admin/post');
        }, 1000)
      })
    }
    this.postService.addPost(this.posts).subscribe(data => {
      setTimeout(() => {
        // redirect về posts list
        this.router.navigateByUrl('admin/post');
      }, 1000)
    });
  }

}
