import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})

posts ? : Post[] = [];
export class ListPostsComponent {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.http.get<Post[]>('https://localhost:7087/api/Post')
      .subscribe({
        next: (data: Post[]) => {
          this.posts = data;
          console.log(this.posts);
        }
      })
    }
  }

