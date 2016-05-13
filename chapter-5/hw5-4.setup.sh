#!/bin/bash
cd week_5_aggregation_framework/homework_5_4/
mongoimport -d test -c zips --drop zips.json --batchSize 1
