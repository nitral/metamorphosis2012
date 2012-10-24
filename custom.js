/* ****************************************
Javascript for Metamorphosis - 2012 | OASIS
**************************************** */

var CurrentActiveContent = "";

// Places Content in the ContentHolder.
function showContent(contentID)
{
	document.getElementById("contentHolderAbout").style.display = "none";
	document.getElementById("contentHolderParticipate").style.display = "none";
	document.getElementById("contentHolderRules").style.display = "none";
	document.getElementById("contentHolderContacts").style.display = "none";
	
	showNavTab(contentID);
	
	if(contentID == "About")
	{
		document.getElementById("contentHolderAbout").style.display = "block";
		CurrentActiveContent = "About";
	}
	else if(contentID == "Participate")
	{
		document.getElementById("contentHolderParticipate").style.display = "block";
		CurrentActiveContent = "Participate";
	}
	else if(contentID == "Rules")
	{
		document.getElementById("contentHolderRules").style.display = "block";
		CurrentActiveContent = "Rules";
	}
	else if(contentID == "Contacts")
	{
		document.getElementById("contentHolderContacts").style.display = "block";
		CurrentActiveContent = "Contacts";
	}
	
	modifyFontFace(contentID);
	navBarLinksHoverEffect(contentID);
}

// Displays the NavTab of the Currently Active Content.
function showNavTab(contentID)
{
	document.getElementById("navTabAbout").style.visibility = "hidden";
	document.getElementById("navTabParticipate").style.visibility = "hidden";
	document.getElementById("navTabRules").style.visibility = "hidden";
	document.getElementById("navTabContacts").style.visibility = "hidden";
	
	var navTabID = "navTab" + contentID;
	
	document.getElementById(navTabID).style.visibility = "visible";
}

// Modifies Text Properties of NavBarLinks on hover.
function modifyFontFace(contentID)
{
	var navBarLinkID = "nav" + contentID;
	
	document.getElementById("navAbout").style.color = "#000000";
	document.getElementById("navParticipate").style.color = "#000000";
	document.getElementById("navRules").style.color = "#000000";
	document.getElementById("navContacts").style.color = "#000000";
	document.getElementById("navAbout").style.textShadow = "0px 0px 0px #000000";
	document.getElementById("navParticipate").style.textShadow = "0px 0px 0px #000000";
	document.getElementById("navRules").style.textShadow = "0px 0px 0px #000000";
	document.getElementById("navContacts").style.textShadow = "0px 0px 0px #000000";
	
	document.getElementById(navBarLinkID).style.color = "#3fc7dd";
	document.getElementById(navBarLinkID).style.textShadow = "0px 0px 6px #3fc7dd";
}

// Creates GlowBar Hover Effects.
function navBarLinksHoverEffect(contentID)
{
	document.getElementById("glowBarAbout").src = "./images/glowBarInactive.png";
	document.getElementById("glowBarParticipate").src = "./images/glowBarInactive.png";
	document.getElementById("glowBarRules").src = "./images/glowBarInactive.png";
	document.getElementById("glowBarContacts").src = "./images/glowBarInactive.png";
	document.getElementById("glowBarAbout").style.boxShadow = "0px 0px 0px #000000";
	document.getElementById("glowBarParticipate").style.boxShadow = "0px 0px 0px #000000";
	document.getElementById("glowBarRules").style.boxShadow = "0px 0px 0px #000000";
	document.getElementById("glowBarContacts").style.boxShadow = "0px 0px 0px #000000";
	
	if(contentID == 0)																				// ContentID = 0 means onMouseOut Event.
	{
		var CurrentActiveGlowBar = "glowBar" + CurrentActiveContent;
		var CurrentActiveNavContent = "nav" + CurrentActiveContent;
		document.getElementById(CurrentActiveGlowBar).src = "./images/glowBarActive.png";
		document.getElementById(CurrentActiveGlowBar).style.boxShadow = "0px 0px 12px #3fc7dd";
		document.getElementById(CurrentActiveNavContent).style.color = "#3fc7dd";
		document.getElementById(CurrentActiveNavContent).style.textShadow = "0px 0px 6px #3fc7dd";
		modifyFontFace(CurrentActiveContent);
	}
	else
	{
		var glowBarID = "glowBar" + contentID;
		document.getElementById(glowBarID).src = "./images/glowBarActive.png";
		document.getElementById(glowBarID).style.boxShadow = "0px 0px 12px #3fc7dd";
		modifyFontFace(contentID);
	}
}