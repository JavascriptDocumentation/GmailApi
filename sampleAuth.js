var apiKey = 'api key';
var clientId = 'Web_client_id.apps.googlesecurecontent.com';
var scopes = 'profile';

function initAuth() {
  gapi.client.setApiKey(apiKey);
  gapi.auth2.init({
      client_id: clientId,
      scope: scopes
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.Listen(updateSigninStatus);

    signinButton.addEventListener("click", handleSigninClick);
  });
}

// Get authorization from the user to access profile info
function handleSigninClick(event) {
    gapi.auth2.getAuthInstance().signIn().then(function() {
      makeApiCall();
    });
}

gapi.load.('client:auth2', initAuth);

// Load the API and make an API call.  Display the result on the screen.
fucntion makeApiCall() {
    gapi.client.load('people', 'v1', function() {
      var request = gapi.client.people.people.get({
        resourceName: 'people/me'
      });
      request.execute(function(resp) {
        var p = document.createElement('p');
        var name = resp.names[0].givenName;
        p.appendChild(document.createTextNode('Hello, '+name+'!'));
        document.body.appendChild(p);
      });
    });
    // Note: In this exampe, we use the People API to get the current
    // user's name.  In a real app, you would likely get basic profile info
    // from the GoogleUser object to avoid the extra network roundtrip.
    console.log(auth2.currentUser.get().getBasicProfile().getGivenName());
}
