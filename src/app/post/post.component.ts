import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  private http = inject(HttpClient);
  private activatedRoute = inject(ActivatedRoute);
  post: any;
  hasData: boolean = false;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.isLoading = true;
      this.http.get<any>(`https://pontualao-bo.pontual-ao.com/wp-json/wp/v2/posts?slug=${ param.get('slug') }`)
               .subscribe(post => {
                this.post = post[0]
                if(this.post.title ){
                  this.hasData = true;
                }else{
                  this.hasData = false
                }
                this.isLoading = false;
              });
    });

  }

}
