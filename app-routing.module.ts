import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';

const routes: Routes = [
  {
    path: 'select',
    loadChildren: () => SelectDropdownComponent,
    data: { roles: 'Admin' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
