#!/usr/bin/env bash


mongod --replSet mySet --logpath "1.log" --dbpath /data/rs1 --port 27017 --smallfiles --oplogSize 64 --fork
 
mongod --replSet mySet --logpath "2.log" --dbpath /data/rs2 --port 27018 --smallfiles --oplogSize 64 --fork

mongod --replSet mySet --logpath "3.log" --dbpath /data/rs3 --port 27019 --smallfiles --oplogSize 64 --fork


