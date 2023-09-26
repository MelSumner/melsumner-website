import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MyContentComponent extends Component {
  @tracked isPressed = false;

  @action
  toggleButton() {
    this.isPressed = !this.isPressed;
    console.log(`isPressed is ${this.isPressed}`);
  }
}
