import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortUrlComponent } from './short-url/short-url.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'shorten',
    pathMatch: 'full'
  },
  {
    path:'shorten',
    component: ShortUrlComponent
  },
  { path: ':shortUrl', component: ShortUrlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
