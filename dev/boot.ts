///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {LoggingService} from "./services/logging.service";
import {DataService} from "./services/data.service";

bootstrap(AppComponent, [LoggingService,DataService]);