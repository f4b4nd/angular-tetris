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

cf [Héberger une app Angular sur GitHub Pages
](https://www.gaetanrouzies.com/github-pages-angular)

How is it deployed ?

1. Build the production bundle.
Note: Since angular 17, build are in a subfolder "browser".


<code>
(container) sh ./dist-builder.docker.entrypoint.sh
</code>


2. On the repository, go to settings > github pages > branches and set selectors to "main" and "/docs"
