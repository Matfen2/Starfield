import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PreReleasePageComponent } from './pages/pre-release-page/pre-release-page.component';

const routes: Routes = [
  {path: '', redirectTo:'/main-page', pathMatch:'full'},
  {path: "pre-release-page", component: PreReleasePageComponent},
  {path: "main-page", component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
