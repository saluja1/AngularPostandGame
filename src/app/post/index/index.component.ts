import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { AuthService } from '../../auth.service';
import { Router } from  '@angular/router';

  
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
   
  posts: Post[] = [];
  isAdmin:boolean = false;  
  constructor(public postService: PostService, private authService: AuthService, private router: Router) {
    if(this.authService.checkUserRole() == "admin"){
      this.isAdmin = true;
    }
   }
  
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[])=>{
      this.posts = data;
    })  
  }
  
  deletePost(id){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  
}