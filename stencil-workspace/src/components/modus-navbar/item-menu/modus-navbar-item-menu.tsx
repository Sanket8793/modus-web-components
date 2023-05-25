import { 
  Component, 
  Prop, 
  h // eslint-disable-line @typescript-eslint/no-unused-vars
} from '@stencil/core';

export interface ModusNavbarItem {
  id: string;
  tooltip: string;
  icon: string;
  orderIndex: number;
  menu?: 'pop-out' | undefined;
}

@Component({
  tag: 'modus-navbar-item-menu',
  styleUrl: 'modus-navbar-item-menu.scss',
  shadow: true
})

export class ModusNavbarItemMenu {

  @Prop() reverse: boolean;

  render(): unknown {
    const direction = this.reverse ? 'reverse' : '';
    return (
      <div class={`item-menu ${direction}`} onClick={(event) => event.preventDefault()}>
        <div class="title">Items</div>
        <slot />
      </div>
    );
  }

}