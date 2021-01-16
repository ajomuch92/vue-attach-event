import Vue from 'Vue';

export default attachDirective = Vue.directive('attach-event', {
  bind: (el, binding) => {
    const {value} = binding;
    if(typeof value !== 'object')
      return;
    const keys = Object.keys(value);
    if(!keys.includes('on') && !keys.includes('newEvent'))
      return;
    const event = value.on;
    if(event) {
      el.addEventListener(event, () => eventHandler(el, value));
    }
  },
  componentUpdated: (el, binding) => {
    const {value, oldValue} = binding;
    const event = value.on;
    const oldEvent = oldValue.on;
    if(oldEvent) {
      el.removeEventListener(oldEvent, () => eventHandler(el, oldValue));
    }
    if(event)
      el.addEventListener(event, () => eventHandler(el, value));
  },
  unbind: (el, binding) => {
    const {value} = binding;
    const event = value.on;
    if(event) {
      el.removeEventListener(event, () => eventHandler(el, value));
    }
  }
});

function eventHandler(el, value) {
  const {newEvent} = value;
  if(newEvent)
    el.dispatchEvent(new Event(newEvent));
}
