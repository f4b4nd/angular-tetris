// user-list.component.ts
import { Component } from '@angular/core';
import { injectGridFeature } from '../../grid.store';


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

  gridFeature = injectGridFeature()


  handleClick () {
    this.gridFeature.spawnTetrimino()
    //console.log(this.gridFeature.grid())
  }
}