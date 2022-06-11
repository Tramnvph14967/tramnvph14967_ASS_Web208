import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { WorkComponent } from './pages/work/work.component';
import { WorkDetailComponent } from './pages/work-detail/work-detail.component';



import { ProductAddComponent } from './pages/product/product-add/product-add.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { ProductsComponent } from './pages/product/products/products.component';


import { AddUserComponent } from './pages/admin/user/add-user/add-user.component';
import { ListUserComponent } from './pages/admin/user/list-user/list-user.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "blog", component: BlogComponent },
  { path: "work", component: WorkComponent },
  { path: "workDetail", component: WorkDetailComponent },

//product
  {path: "product", children: [
      { path: "", redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ProductsComponent },
      { path: "add", component: ProductAddComponent },
      { path: ":id", component: ProductDetailComponent },
      { path: "edit/:id", component: ProductAddComponent },
  ]},

  
//user
  {path: "user", children: [
    { path: "", redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ListUserComponent },
    { path: "add", component: AddUserComponent },
    { path: "edit/:id", component: AddUserComponent },
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }