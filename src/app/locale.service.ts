import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private currentLocale: string = 'en';

  constructor() {
    const locale = $localize.locale
    if (locale) {
      this.currentLocale = locale;
    }
  }

  getLocale(): string {
    return this.currentLocale;
  }

  setLocale(locale: string): void {
    this.currentLocale = locale;
  }
}
