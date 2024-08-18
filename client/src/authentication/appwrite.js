import {Client,Account} from 'appwrite'

const client = new Client();

client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('66c01ea1003140ec2329')

const account = new Account(client);

export {account};