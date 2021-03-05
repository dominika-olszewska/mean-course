import { CanActivateHeaderGuard } from './guards/can-activate-header.guard';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ViewName } from './enums/view-name';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    data: {
      viewName: ViewName.POST_LIST,
    },
    canActivate: [CanActivateHeaderGuard]
  },
  {
    path: 'create',
    component: PostCreateComponent,
    data: {
      viewName: ViewName.POST_CREATE,
    },
    canActivate: [CanActivateHeaderGuard]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}
