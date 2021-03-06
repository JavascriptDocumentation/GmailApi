# GmailApi
### API Overview

The Gmail API is a RESTful API that can be used to access Gmail mailboxes and send mail.  The API supports many of the basic operations available through the Gmail user interface like reading, composing, and sending mail.

The Gmail RESTful API uses a JSON payload and provides five primary resource types:
- Messages
- Labels
- Drafts
- History 
- Threads


### Messages
Messages are immutable: they can only be created and deleted.  No message properties can be changed other than the labels applied to a given message.

### History
History is a collection of recently modified messages in chronological order. While the history is intended as a lightweight method of synchronizing a client, it typically only contains records of changes within the past 30 days.
Manual synchronization is required for clients that are out-of-date for more than 30 days.

### Threads
Threads are collections of messages that represent a conversation.  Like messages, threads may also have labels applied to them. However, unlike messages, threads cannot be created, only deleted.  Messages can be inserted into a thread.

## API Authorization and Scopes

Like other Google APIs, the Gmail API uses OAuth 2.0 to handle authentication and authorization which means you will have to generate client credentials in the Google Developers Console.  Your app will also specify one or more scopes to gain access to various resources provided by the API.

## Gmail API Scopes

List of most to least restrictive scopes:
 * 'https://www.googleapis.com/auth/gmail.readonly' - Read only access to all resources + metadata
 * 'https://www.googleapis.com/auth/gmail.send' - Send messages only (no inbox read nor modify)
 * 'https://www.googleapis.com/auth/gmail.labels' - Create, read, update, and delete labels only
 * 'https://www.googleapis.com/auth/gmail.insert' - Insert and import messages only
 * 'https://www.googleapis.com/auth/gmail.compose' - Create, read, update, delete, and send email drafts and messages
 * 'https://www.googleapis.com/auth/gmail.modify' - All read/write operations except for immediate and permanent deletion of threads & messages
 * 'https://mail.google.com/' - All read/write operations

## Quick Links

 * [Gmail Api Overview](https://developers.google.com/gmail/api/guides/)
 * [Intro to GMAIL API video](https://www.youtube.com/watch?v=UhdiQmS3kDs)
 * [Getting Started with the Gmail API](https://developers.google.com/gmail/api/?utm_source=gdev-yt&utm_medium=video&utm_term=gmail&utm_content=19&utm_campaign=io-14)
 * [Stackoverflow](http://stackoverflow.com/questions/tagged/gmail-api?utm_source=gdev-yt&utm_medium=video&utm_term=gmail&utm_content=19&utm_campaign=io-14)
 * [Building Web Applications using Google APIs and JavaScript Client for Google APIs](https://www.youtube.com/watch?v=Z9uhYIzaiHI)
 * [Gmail Api v1 Services](https://developers.google.com/apis-explorer/?hl=en_US#p/gmail/v1/)
 * [Cross-Origin Resource Sharing](https://www.w3.org/TR/cors/)
 * [How to parse PDF files](https://thomaslevine.com/!/parsing-pdfs/)
 * [Google Push Notifications](https://developers.google.com/gmail/api/guides/push)
 * [Gmail Service Reference Guide](https://developers.google.com/apps-script/reference/gmail/)
 * [Verifying Domains for Push Notifications](https://support.google.com/googleapi/answer/7072069?hl=en)
 * [Google API Javascript Libraries](https://developers.google.com/api-client-library/javascript/start/start-js#registeryourapp)
 * [What is Google Cloud Pub/Sub?](https://cloud.google.com/pubsub/docs/overview)
 * [Parsing body of an email](http://stackoverflow.com/questions/17874360/python-how-to-parse-the-body-from-a-raw-email-given-that-raw-email-does-not)
