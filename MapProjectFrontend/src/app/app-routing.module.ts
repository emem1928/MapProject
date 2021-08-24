import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamerasComponent } from './camera/cameras/cameras.component';

const routes: Routes = [
  { path: 'cameras', component: CamerasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
