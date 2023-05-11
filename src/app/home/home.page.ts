import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
stories:any[]=[];
  constructor(private router: Router) {}
  async openBrowser() {
    await Browser.open({url: 'http://capacitorjs.com/'});
  }
  goToPage1() {
    this.router.navigate(['/page1']);
  }
}
