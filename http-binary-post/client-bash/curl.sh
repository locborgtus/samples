#!/bin/sh
curl -v -H "Content-type: application/octet-stream" -X POST --data-binary @../data/random http://localhost:3000/data
