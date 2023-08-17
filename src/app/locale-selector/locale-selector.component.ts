import { Component, OnInit } from '@angular/core';
export interface Locale {
  code: string;
  label: string;
}

@Component({
  selector: 'app-locale-selector',
  templateUrl: './locale-selector.component.html',
  styleUrls: ['./locale-selector.component.scss'],
})
export class LocaleSelectorComponent implements OnInit {
  locales: Locale[] = [
    {
      code: 'en',
      label: 'English',
    },
    {
      code: 'fr',
      label: 'Français',
    },
  ];
  constructor(
  ) { }

  ngOnInit(): void { }
}
