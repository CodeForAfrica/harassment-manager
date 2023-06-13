import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOCALE_ID, Inject } from '@angular/core';
import { LocaleService } from '../locale.service';
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

  selectedLocale = this.locales[0];
  constructor(private router:Router, private localeService:LocaleService) { }

  changeLanguage(locale: Locale): void {
    this.selectedLocale = locale;
    this.localeService.setLocale(locale.code);
    this.router.navigate([`/${locale.code}`]);
  }


  ngOnInit(): void {
    const locale = this.localeService.getLocale();
    if (locale) {
      this.selectedLocale = this.locales.find(l => l.code === locale) || this.locales[0];
    }
  }

}
