import { Component, Input, OnInit } from '@angular/core';
import { IPosts } from '../../../../models/Posts';
import { PostsService } from '../../../../services/posts.service';
@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  postList!: IPosts[];
  constructor(private postsService: PostsService) {

  }

  ngOnInit(): void {
    this.showProducts();
  }

  showProducts() {
    this.postsService.getPosts().subscribe(data => {
      this.postList = data
    })
  }
  
  onRemoveItem(id: number) {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirm) {
      // call api xoa
      this.postsService.removePost(id).subscribe(() => {
        // reRender
        this.postList = this.postList.filter(item => item.id !== id);
      });
    }

  }


}
