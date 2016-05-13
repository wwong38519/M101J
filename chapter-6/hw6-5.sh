#!/bin/bash

mkdir -p /home/vagrant/mongodb/M101J/data/rs1 
mkdir -p /home/vagrant/mongodb/M101J/data/rs2 
mkdir -p /home/vagrant/mongodb/M101J/data/rs3

mongod --replSet m101 --logpath /home/vagrant/mongodb/M101J/rs1.log --dbpath /home/vagrant/mongodb/M101J/data/rs1 --port 27017 --oplogSize 64 --smallfiles --fork
mongod --replSet m101 --logpath /home/vagrant/mongodb/M101J/rs2.log --dbpath /home/vagrant/mongodb/M101J/data/rs2 --port 27018 --oplogSize 64 --smallfiles --fork
mongod --replSet m101 --logpath /home/vagrant/mongodb/M101J/rs3.log --dbpath /home/vagrant/mongodb/M101J/data/rs3 --port 27019 --oplogSize 64 --smallfiles --fork

mongo < hw6-5.js
