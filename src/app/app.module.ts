import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {LayoutModule} from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { Blog } from './models/blog.model';
import { BlogService } from './blog.service';
import { DetailComponent } from './detail/detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DefaultComponent } from './admin/default/default.component';
import { SidebarComponent } from './admin/shared/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostCreateComponent } from './admin/dashboard/posts/post-create/post-create.component';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


const Ux_Modules = [
  MatSliderModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  LayoutModule,
  MatInputModule,
  MatCardModule
]

@NgModule({
  declarations: [
    AppComponent,
    BlogsListComponent,
    AddBlogComponent,
    PageNotFoundComponent,
    DetailComponent,
    DefaultComponent,
    SidebarComponent,
    DashboardComponent,
    PostCreateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    Ux_Modules,
  ],
  providers: [BlogService, Blog],
  bootstrap: [AppComponent]
})
export class AppModule { }
