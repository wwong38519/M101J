#!/bin/bash
mongoimport -d m101 -c profile --drop < week_4_performance/homework_4_4/sysprofile.json --batchSize 1
