yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'deoloy' &&
git remote add git git@github.com:YingJiangHui/lemon-ui-docs.git &&
git remote add gitee git@gitee.com:yingjianghui/lemon-ui-docs.git 

git push -u git master -f 
git push -u gitee master -f 

cd -