#!/bin/bash
cd week_5_aggregation_framework/homework_5_2/small_zips/
mongoimport -d test -c zips --drop small_zips.json --batchSize 1
