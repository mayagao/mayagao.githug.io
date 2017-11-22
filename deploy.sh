#!/bin/bash

STATUS="$(git status)"

if [[ $STATUS == *"nothing to commit, working directory clean"* ]]
then
    sed -i "" 'out/' ./.gitignore
    touch out/.nojekyll
    touch out/CNAME
    echo 'mayagao.com' >> out/CNAME
    git add .
    git commit -m "Edit .gitignore to publish"
    git push origin `git subtree split --prefix out release`:gh-pages --force
    git reset --soft HEAD~1
    git checkout .gitignore
    echo "💎 Deploy success!"
else
    echo "Need clean working directory to deploy"
fi
