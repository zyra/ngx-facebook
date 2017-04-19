git config --global user.email "ibby93+zmbot@gmail.com"
git config --global user.name "ZM Bot"

rm -rf ../ngx-facebook-site

git clone git@github.com:zyra/ngx-facebook.git ../ngx-facebook-site
cd ../ngx-facebook-site

git checkout gh-pages
git pull

git rm -rf *

cd ../ngx-facebook

npm run docs

cp scripts/docs/site_includes/* circle.yml ../ngx-facebook-site/

cd ../ngx-facebook-site

git add .
git commit -am "Automated docs update zyra/ngx-facebook@$CIRCLE_SHA1" -m "[ci skip]"

git push origin gh-pages || true
