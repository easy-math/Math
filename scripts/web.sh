#!/usr/bin/env zsh

repo='git@github.com:haozi/Math.git'
branch='gh-pages'
tmp=`pwd`/.docs-tmp
method=$1

rm -rf $tmp
cp -r docs $tmp
cp -r scripts/.vuepress $tmp

docker run --rm -v $tmp:/d haozhi/tensorflow zsh -c '. ~/.zshrc && cd /d && jupyter nbconvert --to markdown **/*.ipynb && find . -name "*.ipynb" | xargs rm -rf'

npx vuepress $method $tmp

cd $tmp/.vuepress/dist
git init
git add .
git commit -m 'web'
git push $repo master:$branch -f

rm -rf $tmp
