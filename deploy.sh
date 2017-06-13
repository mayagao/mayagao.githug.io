#!/bin/bash
touch out/.nojekyll
touch out/CNAME
echo 'mayagao.com' >> out/CNAME
git push origin `git subtree split --prefix out master`:gh-pages --force