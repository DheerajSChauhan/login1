function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // TODO: Send the ID token to your server for verification and session management.

  // Example: You could redirect the user or update the UI upon successful sign-in.
  // For instance, if you have a div with id="status":
  // document.getElementById('status').innerText = "Signed in as: " + profile.getName();

  // It's also common to exchange the ID token with your backend server.
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
  // Send this id_token to your backend server via an AJAX request.
}

// It's good practice to also include a signOut function if you're managing session state.
// function signOut() {
//   var auth2 = gapi.auth2.getAuthInstance();
//   auth2.signOut().then(function () {
//     console.log('User signed out.');
//     // Update UI or redirect as needed
//   });
// }
// You would then need to initialize the GoogleAuth object when the library loads.
// function initGoogleAuth() {
//   gapi.load('auth2', function() {
//     gapi.auth2.init({
//       client_id: 'YOUR_GOOGLE_CLIENT_ID' // Replace with your actual client ID
//       // You might also want to specify scopes here, e.g., 'profile email'
//     });
//   });
// }
// Call initGoogleAuth when the page loads, perhaps after platform.js is loaded.
// window.onload = function() {
//   initGoogleAuth();
// };
