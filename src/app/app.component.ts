import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/additions/navbar/navbar.component";
import { FooterComponent } from "./layout/additions/footer/footer.component";
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  

  appTitle = 'E-CommerceApp';

  constructor(private meta: Meta, private titleService: Title) {
    this.updateMetaTags();
  }
  
  updateMetaTags() {
    this.titleService.setTitle('Fresh Cart - أفضل المنتجات الطازجة');
    this.meta.updateTag({ name: 'description', content: 'تسوق الآن أفضل المنتجات الطازجة بأفضل الأسعار مع Fresh Cart. جودة عالية وتوصيل سريع!' });
  }
}
