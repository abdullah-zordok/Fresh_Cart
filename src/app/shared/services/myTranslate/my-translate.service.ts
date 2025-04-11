import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root',
})
export class MyTranslateService {
  constructor(private _TranslateService: TranslateService) {
    let defaultLang: string = 'en';
    if (typeof localStorage != 'undefined') {
      let savedLang: string | null = localStorage.getItem('lang');
      if (savedLang) {
        defaultLang = savedLang;
        _TranslateService.setDefaultLang(defaultLang);
        _TranslateService.use(defaultLang)
      } 
      this.changeDir(defaultLang)
    }
  }

  changeLang(lang: string) {
    localStorage.setItem('lang', lang);

    this._TranslateService.setDefaultLang(lang);
    this._TranslateService.use(lang);
    this.changeDir(lang);
  }

  changeDir(lang: string) {
    if (lang === 'ar') {
      document.dir = 'rtl';
    } else {
      document.dir = 'ltr';
    }
  }
}
