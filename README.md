# GmailApi
### API Overview

The Gmail API is a RESTful API that can be used to access Gmail mailboxes and send mail.  The API supports many of the basic operations available through the Gmail user interface like reading, composing, and sending mail.

The Gmail RESTful API uses a JSON payload and provides five primary resource types:
- Messages
- Labels
- Drafts
- History 
- Threads

### Resource Type: Messages
Messages are immutable: they can only be created and deleted.  No message properties can be changed other than the labels applied to a given message.

### Resource Type: History
History is a collection of recently modified messages in chronological order. While the history is intended as a lightweight method of synchronizing a client, it typically only contains records of changes within the past 30 days.
Manual synchronization is required for clients that are out-of-date for more than 30 days.

## Quick Links

 * [Intro to GMAIL API video](https://www.youtube.com/watch?v=UhdiQmS3kDs)
 * [Getting Started with the Gmail API](https://developers.google.com/gmail/api/?utm_source=gdev-yt&utm_medium=video&utm_term=gmail&utm_content=19&utm_campaign=io-14)
 * [Stackoverflow](http://stackoverflow.com/questions/tagged/gmail-api?utm_source=gdev-yt&utm_medium=video&utm_term=gmail&utm_content=19&utm_campaign=io-14)
