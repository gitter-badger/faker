#!/bin/sh

export FAKER_ROOT=`pwd`

nginx_home=/etc/nginx

sudo cp ${FAKER_ROOT}/assets/faker ${nginx_home}/sites-available/
sudo ln -s ${nginx_home}/sites-enabled/faker ${nginx_home}/sites-available/faker

sudo service nginx restart