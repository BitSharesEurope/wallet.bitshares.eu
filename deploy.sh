echo "Cloning wallet repo"
git clone -b gh-pages https://github.com:${GITHUB_TOKEN}@github.com/${GITHUB_REPO} gh-pages

echo "Copying compiled files over to repo"
ls -al wallet.bitshares.eu/web/dist/
ls -al gh-pages/
cp -Rv wallet.bitshares.eu/web/dist/* gh-pages/

echo "Pushing new wallet repo"
cd gh-pages

git config user.email "wallet@bitshares.eu"
git config user.name "BitShares wallet"
git add .
git commit -a -m "Travis #$TRAVIS_BUILD_NUMBER"
git push origin gh-pages
