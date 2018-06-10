#!/bin/bash

STATUS="$(git status)"

touch out/.nojekyll
touch out/CNAME
echo 'mayagao.com' >> out/CNAME
git add .
git commit -m "Edit .gitignore to publish"
git checkout -b release
git push origin -f release
git push origin `git subtree split --prefix out release`:gh-pages --force
git reset --soft HEAD~1
git checkout .gitignore
git checkout master
git reset --hard origin/master
git branch -D release
echo "💎 Deploy success!"
