import { MessagesComponent } from './messages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesComponent,
    data: {
      title: 'Messages'
    }
  },
  {
    path: 'create',
    component: CreateComponent,
    data: {
      title: 'Create Message'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule {}
