import {
  Component,
  Event,
  EventEmitter,
  Fragment,
  Prop,
  h // eslint-disable-line @typescript-eslint/no-unused-vars
} from '@stencil/core';

export interface ModusNavbarButton {
  id: string;
  tooltip: string;
  icon: string;
  orderIndex: number;
  menu?: 'pop-out' | undefined;
}

@Component({
  tag: 'modus-navbar-button-list',
  styleUrl: 'modus-navbar-button-list.scss'
})

export class ModusNavbarButtonList {

  /** (optional) The buttons to render in the Navbar. */
  @Prop() buttons: ModusNavbarButton[];

  @Event() buttonClick: EventEmitter<string>;

  render(): unknown {
    return (
      <Fragment>
        {this.buttons?.map((button) =>
          <modus-navbar-button onClick={() => this.buttonClick.emit(button.id)} buttonId={button.id} tooltip={button.tooltip} icon={button.icon} menu={button.menu}>
          </modus-navbar-button>
        )}
      </Fragment>
    )
  }

}