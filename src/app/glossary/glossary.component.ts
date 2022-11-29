import { Component, OnInit } from '@angular/core';
import { SideMenuSection } from '../scrollable-side-menu/scrollable-side-menu.component';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent {

  // Height for the mat-expansion-panel-header.
  expansionPanelHeaderHeight = '82px';

  sideMenuSections: SideMenuSection[] = [
    {
      title: 'Sock-Puppet',
      anchorSelector: '.sock-puppet',
      selected: true
    },
    {
      title: 'Targeted Campaign',
      anchorSelector: '.targeted-campaign',
      selected: false
    },
    {
      title: "Inauthentic Network",
      anchorSelector: '.inauthentic-network',
      selected: false
    }
  ];


}
