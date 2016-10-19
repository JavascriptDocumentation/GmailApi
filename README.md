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

## Quick Links

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
