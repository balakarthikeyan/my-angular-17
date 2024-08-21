import { Injectable, NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
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
import { MultipleSelectFormComponent } from './components/multiple-select-form/multiple-select-form.component';
import { TestComponent } from './workout/test/test.component';
import { TestChildComponent } from './workout/test-child/test-child.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: 'list', component: CustomerListComponent },
	{ path: 'details/:id', component: CustomerDetailsComponent },
	{ path: 'create', component: CustomerCreateComponent },
	{ path: 'update', component: CustomerUpdateComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'todo', component: TodosListComponent },
	{ path: 'articles', component: ArticleListComponent },
	{ path: 'parent', component: ParentComponent },
	{ path: 'child', component: ChildComponent },
	{ path: 'products', component: ProductsComponent },
	{ path: 'http-example', component: HttpExampleComponent },
	{ path: 'local-storage', component: LocalStorageExampleComponent },
	{ path: 'standard-forms', component: StandardFormComponent },
	{ path: 'dynamic-forms', component: DynamicFormComponent },
	{ path: 'directive', component: DirectiveExampleComponent },
	{ path: 'observables', component: ObservablesExampleComponent },
	{ path: 'bootstrap', component: BootstrapExampleComponent },
	{ path: 'multi-forms', component: MultipleSelectFormComponent },
	{
		path: 'test',
		children: [
			{ path: '', title: 'Parent', component: TestComponent },
			{ path: 'child', title: 'Child', outlet: 'sidemenu', component: TestChildComponent },
		],
	},
	{ path: 'dashboard', loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule) },
	{
		path: '**',
		loadComponent: () => import('./components/page-not-found/page-not-found.component').then(mod => mod.PageNotFoundComponent)
	},
];

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
	constructor(private readonly title: Title) {
		super();
	}

	override updateTitle(routerState: RouterStateSnapshot) {
		const title = this.buildTitle(routerState);
		if (title !== undefined) {
			this.title.setTitle(`App | ${title}`);
		}
	}
}

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
	exports: [RouterModule]
})
export class AppRoutingModule { }
