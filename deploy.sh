cd public

git init
git add .
git commit -m 'deploy'

git push origin git@github.com:ArikarWang/arikarblog.git:gh-pages

cd ../
rm -rf public