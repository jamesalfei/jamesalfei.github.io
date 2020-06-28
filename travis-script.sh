#!/bin/sh

set -e

echo "Building site..."

bundle exec jekyll build

if test -e "./_site/index.html";then
  echo "Site built successfully."
  rm -Rf _site
else
  echo "Site build unsuccessful."
  exit 1
fi
