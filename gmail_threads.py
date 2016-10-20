from __future__ import print_function

from apiclient import discovery
from httplib2 import Http
from oauth2client import file, client, tools

SCOPES = 'https://www.googleapis.com/auth/gmail.readonly'
store = file.Storage('storage.json')
creds = store.get()
if not creds or creds.invalid:
    flow = client.flow_from_clientsecrets('client_secret.json', SCOPES)
    creds = tools.run_flow(flow, store)
GMAIL = discovery.build('gmail', 'v1', http=creds.authorize(Http()))

threads = GMAIL.users().threads().list(userId='me').execute().get('threads', [])
for thread in threads:
    tdata = GMAIL.users().threads().get(userId='me', id=thread['id']).execute()
    nmsgs = len(tdata['messages'])

    if nmsgs > 2:
        msg = tdata['messages'][0]['payload']
        subject = ''
        for header in msg['headers']:
            if header['name'] == 'Subject':
                subject = header['value']
                break
        if subject:
            print('%s (%d msgs)' % (subject, nmsgs))
