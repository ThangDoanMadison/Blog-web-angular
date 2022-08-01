import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailComponent } from './detail/detail.component';
import { DefaultComponent } from './admin/default/default.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostCreateComponent } from './admin/dashboard/posts/post-create/post-create.component';
const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'posts', component: PostCreateComponent },
    ],
  },
];
//   { path: 'add-blog', component: AddBlogComponent },
//   { path: 'blogs-list', component: BlogsListComponent },
//   { path: 'detail/:id ', component: DetailComponent },
//   { path: '**', component: PageNotFoundComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
