#!/bin/bash
set -e
python setup.py sdist

CUR_VERSION=$(cat setup.cfg | grep "current_version = .*" | awk '{split($0,a,"\= "); print a[2]}')

echo "new version: ${CUR_VERSION}"
echo "copying to ${HEROKU_PYPI_LOCAL_DIR}/data/"
cp dist/gnosis_epl-${CUR_VERSION}.tar.gz ${HEROKU_PYPI_LOCAL_DIR}/data/
pushd $HEROKU_PYPI_LOCAL_DIR
echo "commiting changes in pypi repo"
git add data/
git commit -m 'new version of gnosis_epl'
echo "pushing changes to heroku"
git push origin master
git push heroku master
popd