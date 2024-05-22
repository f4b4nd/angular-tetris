# 1 Launch application on your own machine 
Prerequisites: docker (tested with docker 25.0.3)

Node Version : v20.9.0 (docker) 

Angular Client Version : v17 (docker)

## 1.1 Install docker image
<code>
sh build-docker.sh
</code>

## 1.2 Install app (if not already) and run angular server
<code>
sh run-docker.sh

(container) sh ./docker-entrypoint.sh
</code>

App is now running on port localhost:4200 !!

# 2 Hosting: github pages

cf [Medium : How to Deploy (for Free) an Angular App to GitHub Pages Without Using Any Libraries](https://medium.com/swlh/how-to-deploy-an-angular-app-to-github-pages-without-using-any-libraries-step-by-step-guide-cfe96fb0c879)

How is it deployed ?

1. Make sure your angular application is at the root of the project (not in a subdirectory)
2. In angular.json, set the value of projects.architect.build.outputPath to "docs"
3. On the repository, go to settings > github pages > 
<code>
ng new myApp --directory ./ 
ng build
</code>


ng build --output-path ./docs/ && mv ./docs/browser/ ../docs/ && cp ../docs/index.html ../docs/404.html

