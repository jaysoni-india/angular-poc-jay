import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentInteractionComponent } from './component-interaction.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ChildComponentComponent } from './components/parent-component/child-component/child-component.component';
import { Component1Component } from './components/independent-component/component1/component1.component';
import { Component2Component } from './components/independent-component/component2/component2.component';
import { ComponentInteractionRoutingModule } from './component-interaction-routing.module';
import { FormsModule } from '@angular/forms';
import { IndependentComponentComponent } from './components/independent-component/independent-component.component';
import {IndependentComponentServiceService} from './components/independent-component/services/independent-component-service.service';


@NgModule({
  declarations: [
    ComponentInteractionComponent, ParentComponentComponent,
    ChildComponentComponent, Component1Component, Component2Component, IndependentComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentInteractionRoutingModule
  ],
  providers: [IndependentComponentServiceService]
})
export class ComponentInteractionModule { }
