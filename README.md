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
<table cellpadding="0" cellspacing="0" border="0" width="100%" height="100%">
   <tbody><tr>
   <td>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://alliance-primo-pds.hosted.exlibrisgroup.com//exlibris/primo/p4_1/pds/html_form/icon/PSU_logo.gif">
   </td>
   </tr>
 <tr>
 <td valign="center" align="center">
 <table cellpadding="0" cellspacing="0" border="0" width="80%" height="100%" style="width:80%; font-size:16px">
  <tbody><tr>
   <td valign="center">
     <span style="font-size:16px;"><b>Sign in to see additional results, library services, and request options</b></span>
   </td>
   </tr>
   <tr><td align="center" valign="center">&nbsp;</td></tr>
  <tr>
   <td valign="center">
 		<!-- <span style="font-weight:bold;">Portland State University students, faculty, and staff:</span><br/> -->
 		<span style='font-family:"Lato",arial,sans-serif;'><a id="sso_login_link" href="#">Current PSU students, faculty &amp; staff</a> </span>
  </td>
   </tr>
 
    <tr><td align="center" valign="center">&nbsp;</td></tr>
 
   <tr>
   <td valign="center">
      <!-- <span style="font-weight:bold;">Alumni and registered community borrowers:</span><br/> -->
      <span style='font-family:"Lato",arial,sans-serif;'><a id="community_member_login_link" href="#">Registered PSU Alumni Association members and PSU community borrowers</b></a></span>
 <br>
   </td>
   </tr>
   <tr><td align="center" valign="center">&nbsp;</td></tr>
   <tr>
   <td valign="center" style="margin-left:30px">
      <span style='font-family:"Lato",arial,sans-serif;'><a id="guest_login_link" href="#">Continue as guest</a></span>
   </td>
   </tr>
 </tbody></table>
   </td>
     </tr>
 </tbody></table>
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

*community_member_login_link*

*guest_login_link*






