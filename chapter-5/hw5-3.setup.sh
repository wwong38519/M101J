#!/bin/bash
cd week_5_aggregation_framework/homework_5_3/grades/
mongoimport -d test -c grades --drop grades.json --batchSize 1
