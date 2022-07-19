import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss']
})
export class BlogsListComponent implements OnInit {
  posts:any;
  constructor(
    private configService:ConfigService
  ) { }

  ngOnInit(): void {
   this.configService.getData().then(res=>console.log(res))
  }

}
