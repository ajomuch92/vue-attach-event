# vue-attach-event
## Directive to be able to attach events through other events on HTML elements in VueJS

### Install  

NPM:  
```bash
npm i --save vue-attach-event
```
Require it in your main.js (or index.js) file:

```javascript
// ES6
import 'vue-attach-event';
```

### Usage instructions  

Add `v-attach-event` as an attribute on the element you wish to handle a new event and pass and config object:

```html
<button class='some-class' v-class-toggle="config" @click="handler" @my-event="handler2">
```

### Config

```javascript
{
  on: 'eventName',
  newEvent: 'newEventName'
}
```
- on (Required): Name of the original event that will trigger the new event.
- newEvent (Required): Name of the new event to run with the original event.

### License
MIT

### TODO
- Add event modifiers
- Handler when config object changes