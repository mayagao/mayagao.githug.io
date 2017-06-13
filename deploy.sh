#!/bin/bash
read -p "Enter commit message: "  message
touch out/.nojekyll
touch out/CNAME
echo 'mayagao.com' >> out/CNAME
git add out
git commit --m $message
git push origin `git subtree split --prefix out master`:gh-pages --force