# Primo-Popup-Sign-In
Updates all the "Sign In" links to redirect them to open a modal dialog popup with Sign In options.

## Requirements

jQueryUI - http://jqueryui.com/

## Installation

Add the following to your header or footer template file:

```html 

<!-- Include Files for Popup Login Form -->
<script src="//PATH_TO_JS_FILE/primo-popup-sign-in.js"></script>
<script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
<script>
var sso_login_url = "SSO_LOGIN_URL";
</script>
<link rel="stylesheet" href="//PATH_TO_JQUERYUI_THEME/css/jquery-ui.css">

<!-- Popup Login Form -->
<div id="login-lightbox" title="Sign In" style="display:none;">
<div><a id="sso_login_link" href="#">Single Sign-on</a></div>
<div><a id="alma_login_link" href="#">Primo Sign-in</a></div>
<div><a id="guest_login_link" href="#">Continue as guest</a></div>
</div>
<!-- /Popup Login Form -->

```

## Configuration

*PATH_TO_JS_FILE* - set to the path where you have uploaded the primo-popup-sign-in.js file from this application

*PATH_TO_JQUERYUI_THEME* - set to the path where you have uploaded your jQueryUI Theme

*SSO_LOGIN_URL* - set to your institution's Single Sign-on URL prefix. The redirect location after authentication will be added to this setting. 

Example: 

```javascript

var sso_login_url = "https://sso.pdx.edu/cas/login?service=";

```


## Login Form Design

The Login Form can be designed any way you want. Simply edit the contents between

```html

<!-- Popup Login Form --> and <!-- /Popup Login Form -->

```

The following link ID's will be automatically updated to use the appropriate returning target location after a successful sign in. These ID's must be retained when modifying the form design.

*sso_login_link*

*alma_login_link*

*guest_login_link*






