git config --global user.email "ibby93+zmbot@gmail.com"
git config --global user.name "ZM Bot"
rm -rf ../ng2-facebook-sdk-site
git clone git@github.com:zyramedia/ng2-facebook-sdk.git ../ng2-facebook-sdk-site
cd ../ng2-facebook-sdk-site
git checkout gh-pages
git pull
git rm -rf *
cd ../ng2-facebook-sdk
npm run docs
cd ../ng2-facebook-sdk-site
cp ../ng2-facebook-sdk/scripts/site_includes/* .
git add . || true
git commit -am "Automated docs update" || true
git push origin gh-pages || true
