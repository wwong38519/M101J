#!/bin/bash
mongoimport -d blog -c posts --drop < week_4_performance/homework_4_3_mongoproc/hw4-3/hw4-3/posts.json --batchSize 1
