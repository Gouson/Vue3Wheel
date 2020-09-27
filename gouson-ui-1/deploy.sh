rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m'update' &&
git branch -M master &&
git remote add origin git@github.com:Gouson/gouson-ui-1.git &&
git push -f -u origin master &&
cd - &&
echo https://gouson.github.io/gouson-ui-1/index.html