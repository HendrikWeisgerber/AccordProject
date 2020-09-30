/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const path = require('path');
const fs = require('fs');
const api = require('./api');
const config = require('./config.json');

const requestPath = path.resolve(process.argv[2]);
const requestJSON = JSON.parse(fs.readFileSync(path.resolve(requestPath), 'utf8'));
console.log('RequestPAth: ' + requestPath)
const request = {
  fcn: 'executeSmartLegalContract',
  args: [config.contractId, JSON.stringify(requestJSON)],
};
console.log('Request: ' + JSON.stringify(request))
api.proposeAndCommitTransaction(request);
