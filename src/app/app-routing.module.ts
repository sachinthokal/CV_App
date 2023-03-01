import { FormPageComponent } from './form-page/form-page.component';
import { DownloadPageComponent } from './download-page/download-page.component';
import { CVPathwayComponent } from './cv-pathway/cv-pathway.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cv-pathway', component: CVPathwayComponent },
  { path: 'form-page', component: FormPageComponent },
  { path: 'download', component: DownloadPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
