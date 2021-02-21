import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { CreateComponent } from './create/create.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [MessagesComponent, CreateComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    CKEditorModule,
    FormsModule,
    NgbTypeaheadModule
  ]
})
export class MessagesModule { }
