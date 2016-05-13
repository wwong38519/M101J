#!/bin/bash
cd week_5_aggregation_framework/homework_5_1/small_posts/
mongoimport -d blog -c posts --drop small_posts.json --batchSize 1