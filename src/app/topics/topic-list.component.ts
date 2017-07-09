import { Component, OnInit } from '@angular/core';
import {Topic} from "./topic";
import {TopicService} from "./topic.service";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  pageTitle = "Topics";
  listFilter: string;
  topics: Topic[];
  errorMessage: string;

  constructor(private _topicService: TopicService) { }

  ngOnInit() {

    this._topicService.getTopics().subscribe(
      topics => this.topics = topics,
      error => this.errorMessage = <any> error
    );


  }

}
