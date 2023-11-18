import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatPageComponent} from '../app/Components/chat-page/chat-page.component'

const routes: Routes = [
  
  { path: '', component: ChatPageComponent, title: 'Home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
