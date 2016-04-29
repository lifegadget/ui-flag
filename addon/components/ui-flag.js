import Ember from 'ember';
import layout from '../templates/components/ui-flag';
import SharedStylist from 'ember-cli-stylist/mixins/shared-stylist';

const { keys, create } = Object; // jshint ignore:line
const { RSVP: {Promise, all, race, resolve, defer} } = Ember; // jshint ignore:line
const { inject: {service} } = Ember; // jshint ignore:line
const { computed, observe, $, run, on, typeOf } = Ember;  // jshint ignore:line
const { get, set, debug } = Ember; // jshint ignore:line
const a = Ember.A; // jshint ignore:line
const named = a(['small', 'medium', 'large', 'huge']);


const flag = Ember.Component.extend(SharedStylist, {
  layout,
  tagName: '',
  styleBindings: 'fontSize,backgroundColor,height,width,cursor',

  country: undefined,
  squared: false,
  size: undefined,
  _size: computed('size', function() {
    const size = this.get('size');
    if (named.contains(size)) {
      return size;
    } else {
      return undefined;
    }
  }),
  fontSize: computed('size',{
    set(_, value) {
      return value;
    },
    get() {
      const size = this.get('size');
      if (named.contains(size)) {
        return undefined;
      } else {
        return size;
      }
    }
  })

});

flag.reopenClass({
  positionalParams: ['country']
});
flag[Ember.NAME_KEY] = 'ui-flag';
export default flag;
