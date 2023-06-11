import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Locale {
  code: string;
  label: string;
}

@Component({
  selector: 'app-locale-selector',
  templateUrl: './locale-selector.component.html',
  styleUrls: ['./locale-selector.component.scss']
})
export class LocaleSelectorComponent implements OnInit {

  locales : Locale[] = [
    {
      code: 'en',
      label: 'English',
    },
    {
      code: 'fr',
      label: 'Français',
    }
  ]

  selectedLocale:Locale = this.locales[0];
  constructor(private router:Router) { }

  changeLanguage(locale: Locale): void {
    this.selectedLocale = locale;
    this.updateLocale();
  }

  updateLocale(): void {;
    this.router.navigate([`/${this.selectedLocale.code}`]);
  }

  ngOnInit(): void {
  }

}
