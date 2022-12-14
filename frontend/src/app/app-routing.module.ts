import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DiaryEntryComponent} from "./pages/diary-entry/diary-entry.component";
import { PublicDiaryEntryComponent } from './pages/public-diary-entry/public-diary-entry.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: HomeComponent },
  { path: 'entry/:id', component: DiaryEntryComponent },
  { path: 'entry/public/:id', component: PublicDiaryEntryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
