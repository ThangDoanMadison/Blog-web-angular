import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../models/blog.model'

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss']
})
export class BlogsListComponent implements OnInit {
  datas:Blog[]=[];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.blogService.getAll().subscribe((res:any)=>{
      console.log(res)
      this.datas = res
    })
  }
}
