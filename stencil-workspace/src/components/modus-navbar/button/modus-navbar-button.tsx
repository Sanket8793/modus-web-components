import {
  Component,
  Element,
  Prop,
  State,
  h // eslint-disable-line @typescript-eslint/no-unused-vars
} from '@stencil/core';
import { IconMap } from '../../icons/IconMap';


@Component({
  tag: 'modus-navbar-button',
  styleUrl: 'modus-navbar-button.scss'
})

export class ModusNavbarButton {

  @Element() element: HTMLElement;

  @Prop() reverse: boolean;

  /** The id for the button in the Navbar. */
  @Prop() buttonId: string;
  /** The tooltip for the button in the Navbar. */
  @Prop() tooltip: string;
  /** The icon for the button in the Navbar. */
  @Prop() icon: string;
  /** The menu for the button in the Navbar. */
  @Prop() menu: string;

  @State() itemMenuVisible: boolean;
  @State() slots: string[] = [];

  readonly SLOT_MAIN = 'main';
  readonly SLOT_NOTIFICATIONS = 'notifications';

  buttonMenuKeydownHandler(event: KeyboardEvent): void {
    if (event.code !== 'Enter') {
      return;
    }
    this.buttonMenuToggle();
  }

  buttonMenuToggle(): void {
    if (this.menu == 'pop-out') {
      this.menu = undefined;
    } else {
      this.menu = 'pop-out';
    }
  }

  buttonMenuClickHandler(event): void {
    event.preventDefault();
    this.buttonMenuToggle();
  }

  componentDidRender(): void {

    const slotElements = document.querySelectorAll('[slot]') as unknown as HTMLSlotElement[];
    const slotNames = Array.from(slotElements).map((s) => s.slot) || [];

    const isUpdated = this.slots?.length !== slotNames.length || this.slots?.filter((s) => !slotNames.includes(s)).length;
    if (isUpdated) this.slots = [...slotNames];
  }


  render(): unknown {
    return (
      <div class="navbar-button">
        <span class="navbar-button-icon"
          onKeyDown={(event) => this.buttonMenuKeydownHandler(event)}
          tabIndex={0}>
          <modus-tooltip text={this.tooltip} position="bottom">
            <IconMap
              icon={this.icon}
              size="24"
              onClick={(event) => this.buttonMenuClickHandler(event)}
              pressed={this.menu === 'pop-out'}
            />
          </modus-tooltip>
        </span>
        {this.menu === 'pop-out' && (
          <modus-navbar-button-menu reverse={this.reverse}>
            <slot name={this.buttonId}></slot>
          </modus-navbar-button-menu>
        )}
      </div>
    );
  }

}