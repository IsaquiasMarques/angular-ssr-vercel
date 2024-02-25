import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  private http = inject(HttpClient);

  posts: any[] = [];
  isLoading: boolean = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.http.get<any[]>(`https://pontualao-bo.pontual-ao.com/wp-json/wp/v2/posts`)
            .subscribe(posts => {
              this.posts = posts
              this.isLoading = false;
            });
  }

}
