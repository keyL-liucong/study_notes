#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>  https://github.com/keyL-liucong/study_notes.git  https://gitee.com/keyLyc/study_notes.git
git push -f https://github.com/keyL-liucong/study_notes.git master:gh-pages

# git@gitee.com:keyLyc/study_notes.git 需要验证权限

cd -
