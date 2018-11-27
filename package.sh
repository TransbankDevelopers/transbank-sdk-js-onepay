#!/usr/bin/env bash

#Script for create the plugin artifact
echo "Travis tag: $TRAVIS_TAG"

if [ "$TRAVIS_TAG" = "" ]
then
   TRAVIS_TAG='1.0.0'
fi

FILE1="package.json"
FILE2="src/onepay-lib-version.js"

sed -i.bkp 's/  "version": "1.0.0",/  "version": "'"${TRAVIS_TAG#"v"}"'",/g' "$FILE1"
sed -i.bkp "s/module.exports = '1.0.0';/module.exports = '${TRAVIS_TAG#"v"}';/g" "$FILE2"

npm run build

echo "Plugin version: $TRAVIS_TAG"
