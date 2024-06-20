import { Component, OnInit, inject } from '@angular/core'

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

        
        [name='directionnal-cross'] {
            margin-top: 3%;
        }

        [name='drop-button'] ::ng-deep button {
            height: 4.5rem;
            width: 4.5rem;
        }
        
        #directionnal-buttons ::ng-deep {

            button {
                height: 2.6rem;
                width: 2.6rem;
            }

            [name='btn-up'] {
                
                label {
                    position: absolute;
                    right: -57px;
                    top: 0%;
                }
          
            }

            [name='btn-down'] {
                
                label {
                    position: absolute;
                    right: -40px;
                    bottom: 0%;
                }
          
            }

        }

    `,
    template: `
        <div class="game-console flex flex-col mx-auto rounded-xl p-2">

            <div class="flex justify-end">
                <power-switch-button />
            </div>

            <game-screen 
                class="self-center" 
            />
    
            <div name="game-controls" >

                <div name="commands" class="flex black justify-between px-4 ">

                    <drop-button 
                        name="drop-button" 
                        class="self-center" 
                    />

                    <div 
                        id="directionnal-buttons" 
                        class="flex flex-col align-end self-center basis-2/5"
                    >


                        <directionnal-button
                            name='btn-up'
                            classNames="blue" 
                            class="self-center" 
                            direction="rotation" 
                        />

                        <div class="flex justify-between">

                            <directionnal-button 
                                name='btn-left'
                                classNames="green" 
                                direction="left" 
                            />

                            <directionnal-cross 
                                name="directionnal-cross" 
                            />

                            <directionnal-button
                                name='btn-right'
                                classNames="red" 
                                direction="right" 
                            />
                        
                        </div>

                        <directionnal-button
                            name='btn-down'
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