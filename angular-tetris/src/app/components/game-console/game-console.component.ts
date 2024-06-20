import { Component, OnInit, inject } from '@angular/core'
import { GameService } from '../../game.service'

@Component({
    selector: 'game-console',
    host: {
        class: 'basis-full',
    },
    styles: 
        `
        $grey: #A6ACAF;

        .game-console {
            width: 100%;
            max-width: 500px;
            background-color: $grey;
            height: 100%;
        }

        [name='game-controls'] {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }

        #directionnal-buttons ::ng-deep {

            button {
                height: 40px;
                width: 40px;
            }
           
        }

    `,
    template: `
        <div class="game-console flex flex-col mx-auto rounded-xl p-2">

            <div class="flex justify-end">
                <power-switch-button />
            </div>

            <game-screen class="py-4 self-center" />
    
            <div name="game-controls" >

                <div name="commands" class="flex justify-between px-4 ">

                    <drop-button class="self-center" />

                    <div 
                        id="directionnal-buttons" 
                        class="flex flex-col align-end self-center basis-2/5"
                    >

                        <directionnal-button 
                            classNames="blue" 
                            class="self-center" 
                            direction="up" 
                        />

                        <div class="flex justify-between">

                            <directionnal-button 
                            classNames="green" 
                                direction="left" 
                            />

                            <directionnal-button 
                                classNames="red" 
                                direction="right" 
                            />
                        
                        </div>

                        <directionnal-button 
                            classNames="yellow" 
                            class="self-center" 
                            direction="down" 
                        />

                    </div>

                </div>

                <div class="flex justify-center">
                    <pause-button />
                </div>

            </div>

        </div>
    `,
})


export class GameConsoleComponent {

}