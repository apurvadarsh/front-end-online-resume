var bio = {
	"name": "Apurv Adarsh",
	"role": "Front-end-Ninja",
	"contacts": {
		"mobile": "+91-9685511172",
		"email": "apurv.adarsh@live.com",
		"github": "apurvadarsh",
		"facebook": "/apurv.con",
		"location": "Pune"
	} ,
	"welcomeMessage": "A developer at core, designer by passion and an engineer by profession",
	"skills": [
	"Java Programming", "Enterprise Developer", "Windows App Developer", "UI/UX Designer"
	],
	"bioPic": "images/fry.jpg"
}

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedFacebook = HTMLfacebook.replace("%data%",bio.contacts.facebook);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedWelcomeMessage);
	$("#header").append(formattedBioPic);

	$("#topContacts").prepend(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedFacebook);
	$("#topContacts").append(formattedLocation);
	

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);	
	}

	$("#footerContacts").prepend(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedFacebook);
	$("#footerContacts").append(formattedLocation);
}

bio.display();

var work = {
	"jobs": [
	{
		"employer": "Niks Technologies",
		"title": "Windows App Developer",
		"dates": "June 2014",
		"location": "Patna, India",
		"description": "Worked as an intern Windows App Developer at Niks Technologies. "
	},
	{
		"employer": "Vedisoft Technologies",
		"title": "Java Enterprise Developer",
		"dates": "June 2013",
		"location": "Bhopal, India",
		"description": "Worked as a Java Enterprise Developer at Vedisoft Technologies. "

	}
	]
}

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);	
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);	
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);	
		$(".work-entry:last").append(formattedDescription);

	}
}
work.display();

var projects = {
	"projects": [
		{
			"title": "Cookbook- JSP",
			"dates": "Jan 2015",
			"description": "A simple and lucid tutorial to design a working JSP project on your own. ",
			"images": [
				"https://store-images.s-microsoft.com/image/apps.62396.13510798884060286.e99113e9-f6ef-4a68-bfae-544d90d2b123.c2faa65d-07e6-4b38-8259-606c6c679cb7?w=580&h=326&q=60&mode=letterbox&background=black",
				"https://store-images.s-microsoft.com/image/apps.22391.13510798884060286.1915baa1-2d6f-41f4-92e0-aef2af7e77c6.fc31871f-8029-47de-a21b-e34c3e742947?w=580&h=326&q=60&mode=letterbox&background=black"
			]
		}
	]
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);	
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);	
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);	
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0 ) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);	
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

var education = {
	"schools": [
		{
		"name": "Symbiosis Centre for Management and Human Resource Development",
		"location": "Pune",
		"degree": "M.B.A.",
		"majors": ["HR"],
		"dates": 2016,
		"url": "http://scmhrd.edu"
		}
	],
	"onlineCourses": [
		{
		"title": "Front End Web Development Nano Degree",
		"school": "Udacity",
		"dates": 2016,
		"url": "http://www.udacity.com"
		}
	]
}

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);


		
		$(".education-entry:last").append(formattedschoolName);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	$("#education").append(HTMLonlineClasses);

	for (online in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
		var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
		

		$(".education-entry:last").append(formattedonlineTitle);
		$(".education-entry:last").append(formattedonlineSchool);
		$(".education-entry:last").append(formattedonlineDates);
		$(".education-entry:last").append(formattedonlineURL);
	}
}

education.display();

function displayMap() {
	$("#mapDiv").append(googleMap);
}
displayMap();