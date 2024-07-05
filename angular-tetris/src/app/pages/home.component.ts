import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { GameConsoleComponent } from '../components/game-console/game-console.component'


@Component({
    standalone: true,
    imports: [GameConsoleComponent, CommonModule],
    template: `
        <div class="h-full">
            <div class="flex justify-center h-full px-1 py-2">
                <game-console />
            </div>
        </div>
    `,
    host: {
        class: 'h-full',
    }
})

export class HomeComponent {

}