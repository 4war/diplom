import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SectionSalesComponent} from "./Sections/section-sales/section-sales.component";

const routes: Routes = [{
  path: '',
  component: SectionSalesComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
