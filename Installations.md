# Installation

In order to achieve the postApp workshop you should follow these instructions. 

## VS Code extensions
To have a better coding experience add these extensions to you VS Code:
 - [Vue VS Code Extension Pack](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-extensionpack)
## front-end

First, create a new github repository and clone it into your computer.

Secondly, make sure you have node.js installed. If not you can install it [here](https://nodejs.org/en/download/package-manager/#centos-fedora-and-red-hat-enterprise-linux).

Then we need to [install](https://cli.vuejs.org/guide/installation.html) vue-cli to config and manage easily our project.
After it is installed you can create a new vue project with `vue create front`, it will create a `front` directory with all the files you need.

You are now invited to select projects settings: use **arrow keys** to navigate, **enter** to go to next step and **space** to select/unselect.
 - choose `Manually select features`
 - select `Router`, `CSS Pre-procesors` and unselect `Linter / formatter`
 - say Yes to Use history mode for router
 - choose `Sass/SCSS (with node-sass)`
 - choose `In dedicated config files`
 - and finally say No to Save this as a preset for future projects
 
Now you can replace your `front/src/` folder by downloading [this one](https://github.com/TristanB12/postApp_workshop/raw/master/asides/content/src_content.zip) to have no useless files.

Finally go into your `front/` folder and run `yarn serve` or `npm run dev`, go into your browser at http://localhost:8080/. You should have a full white screen.