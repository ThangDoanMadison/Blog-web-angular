import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../models/blog.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  blog = new Blog();

  constructor(private route:ActivatedRoute,private blogService:BlogService) { }

  ngOnInit(): void {
    this.getRoute(this.route.snapshot.params['id']);
  }

  getRoute(id:any){
    this.blogService.find(id).subscribe((res:any)=>{
      console.log(res);
      this.blog = res;
    });    
  }

}
