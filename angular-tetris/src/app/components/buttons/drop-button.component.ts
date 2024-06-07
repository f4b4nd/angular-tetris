// user-list.component.ts
import { Component } from '@angular/core';
import { injectGameFeature } from '../../game.store';


@Component({
    selector: 'drop-button',
    template: `
        <button 
          class="border border-black h-16 w-16"
          (click)="handleClick()"
        >
        </button>
    `,
})


export class DropButtonComponent {

  gameFeature = injectGameFeature()


  handleClick () {
    this.gameFeature.spawnTetrimino()
    //console.log(this.gridFeature.grid())
  }
}