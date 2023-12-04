#!/bin/bash

env $(cat .env) npx sequelize db:migrate
env $(cat .env) npx sequelize db:seed:all