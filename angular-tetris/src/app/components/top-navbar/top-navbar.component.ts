import { Component } from '@angular/core'

@Component({
    selector: 'top-navbar',
    template: `
        <nav>

            <a routerLink="/login">
                <button> Login </button>
            </a>

            <a routerLink="/">
                <button> Accueil </button>
            </a>

        </nav>
    `,
})


export class TopNavbarComponent {

}