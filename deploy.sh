#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
# 默认如果是master 就变为main 否则后续冲突
git branch -M main
git add -A
git commit -m 'deploy'

git push -f git@github.com:xiaoyan13/xiaoyan13.github.io.git main

cd -