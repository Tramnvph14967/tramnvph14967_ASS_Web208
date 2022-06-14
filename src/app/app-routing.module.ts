import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { WorkComponent } from './pages/work/work.component';
import { WorkDetailComponent } from './pages/work-detail/work-detail.component';

import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

import { LogupComponent } from './pages/logup/logup.component';
import { LoginComponent } from './pages/login/login.component';
import { ListUserComponent } from './pages/admin/user/list-user/list-user.component';

import { AddPostsComponent } from './pages/admin/posts/add-posts/add-posts.component';
import { ListPostsComponent } from './pages/admin/posts/list-posts/list-posts.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logup', component: LogupComponent },
  {
    path: 'site',
    component: SiteLayoutComponent, 
    children: [
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "blog", component: BlogComponent },
      { path: "work", component: WorkComponent },
      { path: "workDetail", component: WorkDetailComponent },
    ]
  },

  {
    path: 'admin', component: AdminLayoutComponent, 
    children: [
      
      {
        path: "user", children: [
          { path: "", redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: ListUserComponent },
        ]
      },
      {
        path: "post", children: [
          { path: "", redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: ListPostsComponent },
          { path: "add", component: AddPostsComponent },
          { path: "edit/:id", component: AddPostsComponent },
        ]
      },

    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }