import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentComponentComponent} from './components/parent-component/parent-component.component';
import {ComponentInteractionComponent} from './component-interaction.component';
import {IndependentComponentComponent} from './components/independent-component/independent-component.component';

const routes: Routes = [
  { path: '', component: ComponentInteractionComponent,
    children: [
      { path: '', redirectTo: 'parent-child-example', pathMatch: 'full'},
      { path: 'parent-child-example', component: ParentComponentComponent },
      { path: 'independent', component: IndependentComponentComponent }
    ]
  }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentInteractionRoutingModule { }
