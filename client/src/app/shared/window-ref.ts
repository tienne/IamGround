import { Injectable } from '@angular/core';

function _window(): any {
  return window;
}

@Injectable()
export class WindowRef {
  get nativeWindow(): any {
    return _window();
  }

  isWebApp(): boolean {
    return this.nativeWindow.matchMedia('(display-mode: standalone)').matches;
  }
}
