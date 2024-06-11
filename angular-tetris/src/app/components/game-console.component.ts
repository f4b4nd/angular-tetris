import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'game-console',
    host: {
        class: 'basis-full',
    },
    styles: 
        `
        .game-console {
            width: 100%;
            max-width: 500px;
            background-color: #efcc19;
            height: 100%;
        }
    `,
    template: `
        <div class="game-console mx-auto flex flex-col rounded-xl p-2">

            <div class="flex justify-end">
                <power-switch-button></power-switch-button>
            </div>

            <game-screen class="px-3 py-1"></game-screen>
            
            <div class="flex justify-center">
                <pause-button></pause-button>
            </div>

            <div class="flex justify-between px-4 border border-black">

                <drop-button class="self-center" ></drop-button>

                <div id="directionnal-buttons" class="flex flex-col align-end self-center basis-2/5">

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


export class GameConsoleComponent implements OnInit {


    ngOnInit() {
        //this.game.resetGame()
    }

}