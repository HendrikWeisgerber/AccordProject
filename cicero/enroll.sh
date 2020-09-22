#!/bin/bash

#exit on first error
set -e

echo "Starting HLF...."

./startFabric.sh

echo "Adding admin...."
node enrollAdmin.js

echo "Register user...."
node registerUser.js

echo "Deploy contract...."
# the contract template needs to be a .cta archive
node deploy.js licensingagreement@0.20.0.cta sample.md

echo "Submit request...."
# node submitRequest.js request.json 

echo "done."
