## 1. Launch application on your own machine 

### Prerequisites :

Docker is the only prerequisite (tested with Docker v25.0.3)

### Node environment :

- Node Version : v20.9.0
- Angular Client Version : v17.3.0


### 1.1 Install docker image

Run `$ sh build-docker.sh`

### 1.2 Run Angular server

Run docker-image with :  `$ sh run-docker.sh`

Then run (in the container)  `$ sh ./ng-serve.sh`

App is now locally running on  [http://localhost:4200](http://localhost:4200)

## 2. Hosting: github pages

This application is deployed at url : [f4b4nd.github.io/angular-tetris/](f4b4nd.github.io/angular-tetris/)


How is it deployed ?

cf. [Héberger une app Angular sur GitHub Pages](https://www.gaetanrouzies.com/github-pages-angular)


### 2.1 Build the production bundle.

Note: Since angular 17, build are in a subfolder "browser".

Run (in the container) `$ sh ./ng-dist-builder.sh`


### 2.2 Set up github-pages on repository 

On the repository, go to `settings > github pages > branches`, then set selectors to "main" and "/docs"
