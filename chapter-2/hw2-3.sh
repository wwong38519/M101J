#!/bin/bash
cd week_2_crud/homework_2_3/
mongoimport -d students -c grades < grades.json
