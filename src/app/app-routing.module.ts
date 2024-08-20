import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { HomeComponent } from './home/home.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpExampleComponent } from './workout/http-example/http-example.component';
import { LocalStorageExampleComponent } from './workout/local-storage-example/local-storage-example.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ChildComponent } from './workout/child/child.component';
import { DirectiveExampleComponent } from './workout/directive-example/directive-example.component';
import { StandardFormComponent } from './workout/standard-form/standard-form.component';
import { ObservablesExampleComponent } from './workout/observables-example/observables-example.component';
import { ParentComponent } from './workout/parent/parent.component';
import { BootstrapExampleComponent } from './workout/bootstrap-example/bootstrap-example.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'list', component: CustomerListComponent},
  { path: 'details/:id', component: CustomerDetailsComponent},
  { path: 'create', component: CustomerCreateComponent},
  { path: 'update', component: CustomerUpdateComponent},  
  { path: 'home', component: HomeComponent},
  { path: 'todo', component: TodosListComponent},
  { path: 'articles', component: ArticleListComponent},
  { path: 'parent', component: ParentComponent},
  { path: 'child', component: ChildComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'http-example', component: HttpExampleComponent},
  { path: 'local-storage', component: LocalStorageExampleComponent},
  { path: 'standard-forms', component: StandardFormComponent},
  { path: 'dynamic-forms', component: DynamicFormComponent},
  { path: 'directive', component: DirectiveExampleComponent},
  { path: 'observables', component: ObservablesExampleComponent},
  { path: 'bootstrap', component: BootstrapExampleComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
