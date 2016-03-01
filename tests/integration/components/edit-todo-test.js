import hbs from 'htmlbars-inline-precompile';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('edit-todo', 'Integration - Component - Edit Todo', {
  integration: true,
});

test('renders and autofocuses', function(assert) {

  this.render(hbs`{{edit-todo classNames="root"}}`);

  assert.ok(this.$('.root').is('input'), 'is an input');
  assert.ok(this.$('.root').is('.focus'), 'is in focus');
});
