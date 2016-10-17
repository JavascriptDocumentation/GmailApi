/**
 * Get Attachments from a given Message.
 *
 * @param  {String} userId User's email address. The special value 'me'
 * can be used to indicate the authenticated user.
 * @param  {String} messageId ID of Message with attachments.
 * @param  {Function} callback Function to call when the request is complete.
 */
function getAttachments(userId, message, callback) {
  var parts = message.payload.parts;
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (part.filename && part.filename.length > 0) {
      var attachId = part.body.attachmentId;
      var request = gapi.client.gmail.users.messages.attachments.get({
        'id': attachId,
        'messageId': message.id,
        'userId': userId
      });
      request.execute(function(attachment) {
        callback(part.filename, part.mimeType, attachment);
      });
    }
  }
}
