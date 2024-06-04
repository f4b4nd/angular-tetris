import { Component } from '@angular/core'

@Component({
    selector: 'game-console',
    template: `
        <div class="border border-black flex flex-col">

            <div class="flex justify-end">
                <power-switch-button></power-switch-button>
            </div>

            <game-screen></game-screen>
            
            <div class="flex justify-center">
                <pause-button></pause-button>
            </div>

            <div class="flex justify-between">

                <drop-button></drop-button>

                <div id="directionnal-buttons" class="flex flex-col w-14">

                    <directionnal-button class="self-center" direction="up"></directionnal-button>

                    <div class="flex justify-between">
                        <directionnal-button direction="left"></directionnal-button>
                        <directionnal-button direction="right"></directionnal-button>
                    </div>

                    <directionnal-button class="self-center" direction="down"></directionnal-button>

                </div>
            </div>

        </div>
    `,
})


export class GameConsoleComponent {}