#!/bin/bash
mkdir -p ./dist
rm -r ./dist/*

find ./src -name '*.css' | xargs uglifycss --output ./dist/style.css
find ./src -name '*.js'  | xargs uglifyjs  --output ./dist/script.js -c -m --

pushd ./src >/dev/null
find . -type d -exec mkdir -p ../dist/{} \;
find . -type f ! -name '*.css' ! -name '*.js' -exec cp {} ../dist/{} \;
popd >/dev/null

find ./dist -type d -empty -delete
sed -i -e '/{%LP_STYLE%}/{
  s/{%LP_STYLE%}//g
  r ./dist/style.css
}' -e '/{%LP_SCRIPT%}/{
  s/{%LP_SCRIPT%}//g
  r ./dist/script.js
}' ./dist/index.html
rm ./dist/style.css ./dist/script.js

html-minifier --output ./dist/index.html ./dist/index.html \
  --collapse-boolean-attributes \
  --collapse-inline-tag-whitespace \
  --collapse-whitespace \
  --decode-entities \
  --ignore-custom-comments "INFO - " \
  --keep-closing-slash \
  --preserve-line-breaks \
  --prevent-attributes-escaping \
  --remove-comments \
  --remove-empty-attributes \
  --remove-empty-elements \
  --remove-redundant-attributes \
  --remove-script-type-attributes \
  --remove-style-link-type-attributes \
  --sort-attributes \
  --sort-class-name
exit 0
