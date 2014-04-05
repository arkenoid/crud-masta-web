crud-masta-web
==============

sample app with master detail containing all html input element.web front end using angularjs, twitter bootstrap 

# Project Setup
## install generator-angular globally, so many project can use it
npm install -g generator-angular

## install generator-angular to local folder
npm install generator-angular

## generate yeoman generator angular (set all to default)
yo angular:app crudMastaWeb

## install ruby, sass and compass
get ruby v 1.9.3-p545, install it
gem install compass
gem install sass

## test drive
run command :
grunt serve
grunt build
grunt test

## install lib to fix error test
npm install karma-jasmine --save-dev
npm install karma-chrome-launcher --save-dev

## fix css relations for dist folder
change value in styles/main.scss : $icon-font-path
copy fonts in vendor folder to /fonts folder

## test result in dist folder
http-server dist -p 8000

## important eclipse angularjs plugin
https://github.com/angelozerr/angularjs-eclipse

# Development
## create basics page
yo angular:route basics

## create controls page
yo angular:route controls

## update menu on main.html

## update basics.html
based on 1st sample from angularjs.org

## update controls.html
based on 2nd sample from angularjs.org
with its own css and js