import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
// import { HeroListComponent } from './heroes/hero-list/hero-list.component';

const routes: Routes = [
  {
    path: 'compose/:id',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'heroes/a', component: HeroListComponent },
  { path: '', redirectTo: 'heroes', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(
    routes,
    {  enableTracing: true }
    ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
