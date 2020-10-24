#!/usr/bin/env zsh

repo='git@github.com:haozi/Math.git'
branch='gh-pages'
tmp=`pwd`/.docs-tmp
method=$1
dirname=`dirname $0`

rm -rf $tmp
cp -r docs $tmp
cp -r scripts/.vuepress $tmp
cp -r README.md $tmp

docker run --rm -v $tmp:/d haozhi/tensorflow zsh -c '. ~/.zshrc && cd /d && jupyter nbconvert --to markdown **/*.ipynb && find . -name "*.ipynb" | xargs rm -rf'
node $dirname/handleFiles $tmp

npx vuepress $method $tmp

read -p '是否将构建结果发布上线 (Y/n)?' choice
case $choice in
  Y );;
  * ) exit 0;;
esac

cd $tmp/.vuepress/dist && git init && git add . && git commit -m 'web' && git push $repo master:$branch -f

rm -rf $tmp
