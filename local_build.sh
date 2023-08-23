#!/usr/bin/env sh

if [ -d public ]; then
   rm -rf public
fi
if [ -d docs ]; then
   rm -rf docs
fi
if [ -d resources ]; then
   rm -rf resources
fi

hugo server --ignoreCache
