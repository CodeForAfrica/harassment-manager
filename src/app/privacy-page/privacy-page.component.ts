import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SideMenuSection } from '../scrollable-side-menu/scrollable-side-menu.component';
import { Direction } from '@angular/cdk/bidi';

@Component({
  selector: 'app-privacy-page',
  templateUrl: './privacy-page.component.html',
  styleUrls: ['./privacy-page.component.scss']
})
export class PrivacyPageComponent {
  dir: Direction  = $localize.locale?.startsWith('ar') ? 'rtl' : 'ltr' || 'ltr';

  expansionPanelHeaderHeight = '82px';


  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'medical_services',
      this.sanitizer.bypassSecurityTrustResourceUrl('medical_services.svg')
    );
  }

  sideMenuSections: SideMenuSection[] = [
    { title: 'Collected Data', anchorSelector: '.collected-data', selected: true },
    {
      title: 'Data Usage',
      anchorSelector: '.data-usage',
      selected: false,
    },
    {
      title: 'Data Storage',
      anchorSelector: '.data-storage',
      selected: false,
    },
  ];


}
