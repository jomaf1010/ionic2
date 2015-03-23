import {bootstrap} from 'angular2/core';
import {Component, Template} from 'angular2/angular2';
import {View, Content} from 'ionic/components/view/view';
import {Tabs, Tab} from 'ionic/components/tabs/tabs';

@Component({ selector: '[ion-app]' })
@Template({
  url: 'main.html',
  directives: [Tabs, Tab, View, Content]
})
class IonicApp {
  constructor() {
    console.log('IonicApp Start');
  }
}

bootstrap(IonicApp)