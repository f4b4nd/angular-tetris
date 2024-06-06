## 1. Launch application on your own machine 

### Prerequisites :

Docker is the only prerequisite (tested with Docker v25.0.3)

### Node environment :

- Node Version : v20.9.0
- Angular Client Version : v17.3.8


### 1.1 Install docker image

Run `$ sh build-docker.sh`

### 1.2 Run Angular server

Run docker-image with :  `$ sh run-docker.sh`

Then run (in the container)  `$ sh ./ng-serve.sh`

This script automatically installs npm dependencies if there is no "node_modules" directory in the app level.

App is now locally running on  [http://localhost:4200](http://localhost:4200)

## 2. Hosting: github pages

This application is deployed and is available here : [angular-tetris](https://f4b4nd.github.io/angular-tetris/)


How is it deployed ?

cf. [Héberger une app Angular sur GitHub Pages](https://www.gaetanrouzies.com/github-pages-angular)


### 2.1 Build the production bundle.


Run (in the container) `$ sh ./ng-dist-builder.sh`

This script will create the bundle files with `ng build` command, then move its content in a folder named `docs` at the root of the project.

Note: Since angular 17, `ng build` create the bundle files in a subfolder named "browser".


### 2.2 Set up github-pages on repository 

On the repository, go to `settings > github pages > branches`, then set selectors to "main" and "/docs"


### Notes

For playground purpose, you might need to manually run .ts scripts.
That's why `ts-node` in installed as dev-dependency.
When inside the container, use the command `npx ts-node --compilerOptions '{ "module": "commonJS" }' my-script.ts`