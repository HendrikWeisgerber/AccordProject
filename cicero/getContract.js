const path = require('path');
const fs = require('fs');

const { Template } = require('@accordproject/cicero-core');
const { Clause } = require('@accordproject/cicero-core');

const api = require('./api');
const config = require('./config.json');
const ContractId = path.resolve(process.argv[2]); // 2. Argument in der kommando ziele wird in ContractId gespeichert
getContract();