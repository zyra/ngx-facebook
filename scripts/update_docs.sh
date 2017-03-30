echo "Configuring git"
git config --global user.email "ibby93+zmbot@gmail.com"
git config --global user.name "ZM Bot"

echo "Removing the site repo, in case it exists"
rm -rf ../ng2-facebook-sdk-site

echo "Cloning the site repo"
git clone git@github.com:zyramedia/ng2-facebook-sdk.git ../ng2-facebook-sdk-site
cd ../ng2-facebook-sdk-site

echo "Checking out gh-pages"
git checkout gh-pages
git pull

echo "Removing all old files"
git rm -rf *

echo "Going back to ng2-facebook-sdk"
cd ../ng2-facebook-sdk

echo "Building docs"
npm run docs

echo "Going back to ng2-facebook-sdk-site"
cd ../ng2-facebook-sdk-site

echo "Copying site includes"
cp ../ng2-facebook-sdk/scripts/site_includes/* .

echo "Adding new files"
git add . || true
git commit -am "Automated docs update" || true

echo "Pushing changes"
git push origin gh-pages || true
