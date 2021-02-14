import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/404/404.component';
import { NotFoundComponent } from './modules/404/page-not-found.component';

const routes: Routes = [
    {path: 'login', loadChildren: () => import('./modules/authentication/login/login.module'). then(r => r.LoginModule)},
    {path: 'register', loadChildren: () => import('./modules/authentication/sign-up/sign-up.module'). then(r => r.SignUpModule)},
    {path: 'home', loadChildren: () => import('./modules/home/home.module'). then(r => r.HomeModule)},
    {path: 'profile', loadChildren: () => import('./modules/profile/profile.module'). then(r => r.ProfileModule)},
    {path: 'admin', children: [
		{path: 'team', loadChildren: () => import('./modules/admin/team/team.module').then(r => r.TeamModule)},
		{path: 'users', loadChildren: () => import('./modules/admin/users/user.module').then(r => r.UserModule)},
	]},
	{path: 'blogs', loadChildren: () => import('./modules/blog-view/blog-view.module').then(b => b.BlogViewModule)},
	{path: '404', component: PageNotFoundComponent},
	{path: 'notfound', component: NotFoundComponent},
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', redirectTo: '404' },
	{ path: '*', redirectTo: 'notfound' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes,{
			scrollPositionRestoration: 'enabled'
		  })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
