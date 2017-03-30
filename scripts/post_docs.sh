cp ../ng2-facebook-sdk/scripts/site_includes/* ../ng2-facebook-sdk-site/

cd ../ng2-facebook-sdk-site

git add .
git commit -am "Automated docs update"

git push origin gh-pages || true
