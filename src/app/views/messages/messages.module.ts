import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { CreateComponent } from './create/create.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [MessagesComponent, CreateComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    CKEditorModule,
  ]
})
export class MessagesModule { }
