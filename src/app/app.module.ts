import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { WorkComponent } from './pages/work/work.component';
import { WorkDetailComponent } from './pages/work-detail/work-detail.component';


import { ProductAddComponent } from './pages/product/product-add/product-add.component';
import { ProductsComponent } from './pages/product/products/products.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';


import { AddComponent } from './pages/admin/categoriesPosts/add/add.component';
import { DetailComponent } from './pages/admin/categoriesPosts/detail/detail.component';
import { ListComponent } from './pages/admin/categoriesPosts/list/list.component';
import { ListUserComponent } from './pages/admin/user/list-user/list-user.component';


import { LogupComponent } from './pages/logup/logup.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AddPostsComponent } from './pages/admin/posts/add-posts/add-posts.component';
import { ListPostsComponent } from './pages/admin/posts/list-posts/list-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    WorkComponent,
    WorkDetailComponent,




    ProductAddComponent,
    ProductsComponent,
    ProductDetailComponent,


    AddComponent,
    DetailComponent,
    ListComponent,
    ListUserComponent,
    LogupComponent,
    LoginComponent,
    AdminLayoutComponent,
    SiteLayoutComponent,
    AdminHeaderComponent,
    AddPostsComponent,
    ListPostsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
