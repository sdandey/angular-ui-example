import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicListComponent } from './topic-list.component';
import { TopicDetailComponent } from './topic-detail.component';
import {ProductService} from "../product/product.service";
import {TopicService} from "./topic.service";

@NgModule({
  imports: [
    CommonModule,
    TopicsRoutingModule
  ],
  declarations: [

  TopicListComponent,
  TopicDetailComponent],
  providers: [
    TopicService
  ]
})
export class TopicsModule { }
