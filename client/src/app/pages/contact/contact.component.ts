import { Component, OnInit } from '@angular/core';
import {KakaoLinkService} from '../../shared/kakao-link/kakao-link.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private _kakao: KakaoLinkService
  ) { }

  ngOnInit() {
  }

  getSocialLogo(social: string) {
    return `assets/images/contact-logos/${social}.png`;
  }

  kakao() {
    this._kakao.sendLinkDefault();
  }
}
