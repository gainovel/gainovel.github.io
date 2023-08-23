#!/usr/bin/env sh

if [ -d public ]; then
   rm -rf public
fi
if [ -d resources ]; then
   rm -rf resources
fi

hugo --ignoreCache
cp -r public docs

git add .
git commit -m "update blog"
git push origin blog