jQuery( document ).ready(function(jQuery) {
	// Handler for .ready() called.
	
	/* login lightbox */
	jQuery( "#login-lightbox" ).dialog({
	  modal: true,
	  autoOpen: false,
	  minWidth: 600
	});
	
	var userName = $('#exlidUserAreaRibbon li.EXLUserName').text(); 
	var userNameDisplay = $('#exlidUserAreaRibbon li.EXLUserName .EXLUserNameDisplay').text();
	var logon_option_offered = readCookie("logon_option_offered");
	
	if (userName.trim() == "Guest" || userNameDisplay.trim().length <= 0 ) {
		
		// offer logon options
		var cookie_override = getQueryVariable("cookie_override",location.search);
		if(!logon_option_offered || logon_option_offered == "0" || cookie_override == "1")
		{
			jQuery( "#login-lightbox" ).dialog("open");
			document.cookie = encodeURIComponent("logon_option_offered") + "=" + encodeURIComponent("1") + "; path=/";
		}
	}
	else
	{
		// reset cookie if user signs-in
		document.cookie = encodeURIComponent("logon_option_offered") + "=" + encodeURIComponent("0") + "; path=/";
	}
	
	// update signin links (all links that start with "login.do")
	jQuery("a").each(function() {
		if(jQuery(this).attr("href")) {
			if($(this).attr("href").substring(0,8) == "login.do") {
				// login link found
				$(this).attr("href","javascript:jQuery( '#login-lightbox' ).dialog('open'); void(0);");
				$(this).attr("onclick","");
			}
		}
	})

	// set login urls
	jQuery("#sso_login_link").attr("href",sso_login_url+"https%3a%2f%2falliance-primo-pds%2ehosted%2eexlibrisgroup%2ecom%2fcas5%2fpds_main%3ffunc%3dload-login%26calling_system%3dprimo%26institute%3dPSU%26PDS_HANDLE%3d%26url%3d"+ encodeURIComponent(window.location.protocol + "//" + window.location.host) +"%2fprimo_library%2flibweb%2faction%2flogin%2edo%3ftargetURL%3d"+encodeURIComponent(document.URL));
	jQuery("#alma_login_link").attr("href","https://alliance-primo-pds.hosted.exlibrisgroup.com" +"/pds?func=load-login&amp;pds_handle=&amp;calling_system=primo&amp;institute=01ALLIANCE_PSU&amp;url=http://"+window.location.host+"/primo_library/libweb/action/login.do?targetURL="+document.URL);
	jQuery("#guest_login_link").attr("href",window.location.protocol + "//" + window.location.host +"/primo_library/libweb/action/login.do?targetURL="+document.URL.replace("cookie_override=1", ""));

});

// update Find & Request tab dynamic sign in links
jQuery( document ).ajaxComplete(function() {
	jQuery(".EXLTabHeaderContentAdditionalDataLineSignIn > a").each(function() {
		// get target location
		var target = getQueryVariable("targetURL",jQuery(this).attr("href"));
		if(!target) target = document.URL;
		jQuery(this).attr("href","#");
		jQuery(this).off('click');
		jQuery(this).click(function(event) {
			event.preventDefault();
			jQuery( "#login-lightbox" ).dialog("open");
			// set login urls (link directly to item details page, not current page)
			jQuery("#sso_login_link").attr("href",sso_login_url+"https%3a%2f%2falliance-primo-pds%2ehosted%2eexlibrisgroup%2ecom%2fcas5%2fpds_main%3ffunc%3dload-login%26calling_system%3dprimo%26institute%3dPSU%26PDS_HANDLE%3d%26url%3d"+ encodeURIComponent(window.location.protocol + "//" + window.location.host) +"%2fprimo_library%2flibweb%2faction%2flogin%2edo%3ftargetURL%3d"+encodeURIComponent(target));
			jQuery("#alma_login_link").attr("href",window.location.protocol + "//" + window.location.host +"/pds?func=load-login&amp;pds_handle=&amp;calling_system=primo&amp;institute=01ALLIANCE_PSU&amp;url=http://"+window.location.host+"/primo_library/libweb/action/login.do?targetURL="+target);
			jQuery("#guest_login_link").attr("href",window.location.protocol + "//" + window.location.host +"/primo_library/libweb/action/login.do?targetURL="+target);
		});
	});
});

// extract variable from query string
function getQueryVariable(variable,query_string) {
    var vars = query_string.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
	return false;
}

// read the value of a cookie parameter
function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}
