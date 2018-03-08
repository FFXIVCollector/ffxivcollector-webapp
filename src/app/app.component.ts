import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  @ViewChild("navbar") navbarEl: ElementRef;
  @ViewChild("jumbotron") jumbotronEl: ElementRef;

  constructor() {
    window.onscroll = ev => this.onScroll(ev);
  }


  public goToGitHub(): void {
    window.open("https://github.com/orgs/FFXIVCollector/dashboard", "_blank");
  }

  public goToTaiga(): void {
    window.open("https://tree.taiga.io/project/pascalbe07-ffxiv-collector-spa/", "_blank");
  }

  private onScroll(ev: UIEvent): void {
    const offset = this.navbarEl.nativeElement.offsetTop;

    if (window.pageYOffset > offset) {
      this.navbarEl.nativeElement.classList.add("sticky");
    }
    if (window.pageYOffset < this.jumbotronEl.nativeElement.clientHeight) {
      this.navbarEl.nativeElement.classList.remove("sticky");
    }
  }

}
