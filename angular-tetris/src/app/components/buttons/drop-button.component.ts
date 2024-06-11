// user-list.component.ts
import { Component, inject } from '@angular/core';
import { TetrisEngineService } from '../../tetris-engine.service';


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

  #tetrisEngine = inject(TetrisEngineService)
  //constructor (private tetrisEngine: TetrisEngineService) {}

  handleClick () {
    this.#tetrisEngine.spawnTetrimino()
    console.log(this.#tetrisEngine.grid)
  }
  
}