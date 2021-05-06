import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from '../auth.guard';
  
const routes: Routes = [
  { path: 'post', redirectTo: 'post/index', pathMatch: 'full'},
  { path: 'post/index', component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'post/:postId/view', component: ViewComponent, canActivate: [AuthGuard] },
  { path: 'post/create', component: CreateComponent, canActivate: [AuthGuard] },
  { path: 'post/:postId/edit', component: EditComponent, canActivate: [AuthGuard] } 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }