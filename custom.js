/* ********************
JS FOR METAMORPHOSIS
******************** */

var AboutContent = "<h2>ABOUT</h2><p>Metamorphosis is a short film-making competition, the ultimate platform that each artist deserves. Amaze your viewers with your perspective, aesthetic sense, emotion or simple ingenuity of idea. So ignite the director, the cinematographer, the sound specialist, the editor and the art connoisseur inside you, waiting to leap out.</p>";
var ParticipateContent = "<h2>PARTICIPATION</h2><p>1st Round:</p><p><ul><li>This is a Screening round. Selected best entries will be short listed for further rounds.<li>No specific theme is required<li>Each entry must be sent along with an abstract not exceeding 50 words explaining the idea and the purpose of the film.<li>Teams must upload their videos onto YouTube or Vimeo and their respective links must be mailed to metamorphosis@bits-oasis.org along with the abstract. Teams from BITS-Pilani may directly submit the entries to the organizers on-campus (refer to Contacts Sections)<li>The name of the uploaded film should be the title of the movie.<li>The description of the video must contain the following details:<ul><li>Name Of Movie:<li>Team Name:<li>College:<li>This video is an entry for Metamorphosis – Oasis 2012<li>Abstract</ul><li>Videos shot using Digicams/Handy cams/Mobile Phones are ALLOWED.<li>Last date for submitting first round entries of metamorphosis is 23:59 16th Oct, 2012.</ul></p><p>2nd Round:</p><p><ul><li>This will be an on-site themed round.<li>The theme will be announced a few days after the preliminary round.<li>Only those teams that are declared qualified will be eligible to participate in this round.<li>After the qualified teams have submitted their video for the final round on the deadline day, they would be forwarded a questionnaire regarding their film which they must send back in 48 hours of receipt.<li>Videos shot using Digicams/Handy cams/Mobile Phones are ALLOWED.<li>Do look out for further notice regarding the deadline for the final round.</ul></p><p>Please read the Rules and Regulations Section.</p>";
var RulesContent = "<h2>RULES & REGULATIONS</h2><p><ul><li>The maximum duration for an entry is 5 minutes.<li>The maximum number of members in a team is 4. (Excluding the cast)<li>Each entry should bear: <ul><li>An appropriate title<li>Team name.</ul><li>A disclaimer bearing the following text: \“This is an entry for Metamorphosis Oasis 2012.\”, the team name and title of the film must run for five seconds before the start of the video.<li>The video should contain the name of all the team members in the final credits along with contact number and email id of the team leader. The credits section and the disclaimer will not be counted in the 5 minutes allotted for the film.<li>All entries should be completely original and independently produced. Content and idea should be original. The participating teams themselves will be responsible for any third-party claim for copyright infringement.<li>Entries must reflect your direction and editing skills, and should comprise of cinematography and editing only.<li>Subtitles must be provided wherever dialogues delivery is inaudible/incomprehensible<li>Organizers solely reserve the right to screen the entry.<li>Pornography, nudity and Excessive Violence are strictly prohibited and will lead to immediate disqualification.<li>Decision of the judges shall be final.<li>Keep checking the <a href=\"http://www.facebook.com/oasis.bitspilani\"style=\"color:#ffffff;\">BITS-Oasis</a> Facebook page for regular updates.</ul></p>";
var ContactsContent = "<h2>CONTACTS</h2><p>Mail your entries to metamorphosis@bits-oasis.org</p><p>For more details, contact:</p><p>SHOBHIT TREHAN<br>+91-9166683457</p><p>G KARTHIK<br>+91-9660898828</p>";
var CurrentActiveContent = "";

function showContent(contentID)
{
	showNavTab(contentID);
	
	if(contentID == "About")
	{
		document.getElementById("contentHolder").innerHTML = AboutContent;
		CurrentActiveContent = "About";
	}
	else if(contentID == "Participate")
	{
		document.getElementById("contentHolder").innerHTML = ParticipateContent;
		CurrentActiveContent = "Participate";
	}
	else if(contentID == "Rules")
	{
		document.getElementById("contentHolder").innerHTML = RulesContent;
		CurrentActiveContent = "Rules";
	}
	else if(contentID == "Contacts")
	{
		document.getElementById("contentHolder").innerHTML = ContactsContent;
		CurrentActiveContent = "Contacts";
	}
	
	modifyFontFace(contentID);
	navBarLinksHoverEffect(contentID);
}

function showNavTab(contentID)
{
	document.getElementById("navTabAbout").style.visibility = "hidden";
	document.getElementById("navTabParticipate").style.visibility = "hidden";
	document.getElementById("navTabRules").style.visibility = "hidden";
	document.getElementById("navTabContacts").style.visibility = "hidden";
	
	var navTabID = "navTab" + contentID;
	
	document.getElementById(navTabID).style.visibility = "visible";
}


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
	
	if(contentID == 0)
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