var bio = {
    name: 'Zachary Teh',
    role: 'Web Developer',
    contacts: {
        mobile: '647-648-4884',
        email: 'zack8d@ymail.com',
        twitter: 'n/a',
        github: '1kinz',
        blog: 'n/a',
        location: 'Toronto'
    },
    welcomeMessage: 'Hey! Welcome to my online Resume',
    skills: [
        'trading',
        'investing'
    ],
    biopic: 'images/tree.jpg'
};


var education = {
    schools: [{
        name: 'AY Jackson Secoundary School',
        location: 'Toronto',
        degree: 'n/a',
        dates: '2015',
        majors: ['n/a'],
        url: 'www.comingsoon.com'
    }, {
        name: 'University of Waterloo',
        location: 'Waterloo',
        degree: 'Bachelor',
        dates: '2021',
        majors: ['Economics'],
        url:'www.comingsoon.com'
    }],
     onlineCourses: [{
        title: "Javascript Udacity",
        school: 'Udacity',
        dates: '2016',
        url: 'http://www.udacity.com'
    }]
};

var work = {
    jobs: [{
        employer: 'Tlex auto service',
        title: 'service advisor/assistant manager',
        location: 'Toronto',
        dates: '2014-2016',
        description: 'Order parts, create work orders, bill customers, manage mechanics, and so on.'
    }, {
        employer: 'Self',
        title: 'Day trader',
        location: 'Toronto',
        dates: '2014-2016',
        description: 'Specializes in technical analysis. Mainly trades low to mid float stocks with catalysts.'
    }]
};

var projects = {
    projects: [{
        title: 'A pizza',
        dates: '2016',
        description: 'Tomatoes, salsa, pepperoni, and cheese.',
        images: ['images/pizza.jpg']
    }]
};


bio.display = function() {

    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    var formattedbioPic = HTMLbioPic.replace('%data%', bio.biopic);

    var combined = formattedWelcomeMessage + formattedbioPic;

    $('#header').append(combined);
    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);
    

    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedBlog = HTMLblog.replace('%data%', bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

    var contactCombined = formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedBlog + formattedLocation;
    
    $('#topContacts').append(contactCombined);
    $('#footerContacts').append(contactCombined);

    $('#header').append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {

        var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
        $('#skills').append(formattedSkill);
    }
};

bio.display();


education.display = function() {
    education.schools.forEach(function(edu) {

        $('#education').append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace('%data%', edu.name);
        var formrattedSchoolDegree = HTMLschoolDegree.replace('%data%', edu.degree);
        var formrattedSchoolDates = HTMLschoolDates.replace('%data%', edu.dates);
        var formrattedSchoolLocation = HTMLschoolLocation.replace('%data%', edu.location);
        var formrattedSchoolMajor = HTMLschoolMajor.replace('%data%', edu.majors);

        var combinedSchool = formattedSchoolName + formrattedSchoolDegree + formrattedSchoolDates + formrattedSchoolLocation + formrattedSchoolMajor;

        $('.education-entry:last').append(combinedSchool);
    });
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(online) {

        $("#education").append(HTMLschoolStart);

        var formattedOnlineName = HTMLonlineTitle.replace('%data%', online.title);
        var formattedOnlineShool = HTMLonlineSchool.replace('%data%', online.school);
        var formattedOnlineDates = HTMLonlineDates.replace('%data%', online.dates);
        var formattedOnlineURL = HTMLonlineURL.replace('%data%', online.url);
        var formattedlink = formattedOnlineURL.replace('#', online.url);

        var onlineCombined = formattedOnlineName + formattedOnlineShool + formattedOnlineDates + formattedOnlineURL;

        $('.education-entry:last').append(onlineCombined);

    });
};

education.display();


work.display = function() {
    work.jobs.forEach(function(job) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
        var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
        var formattedDates = HTMLworkDates.replace('%data%', job.dates);
        var formattedDescription = HTMLworkDescription.replace('%data%', job.description);

        var formattedEmployerCombined = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

        $('.work-entry:last').append(formattedEmployerCombined);
    });
};

work.display();


projects.display = function() {
    projects.projects.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
        var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
        var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);

        var formattedProjectCombined = formattedTitle + formattedDates + formattedDescription;

        $('.project-entry').append(formattedProjectCombined);
    });

    for (var i = 0; i < projects.projects[0].images.length; i++) {

        var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[0].images[i]);

        $(".project-entry:last").append(formattedImage);
    }
};

projects.display();


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});


function inName(name) {
    name = name.trim().split(' ');
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();

    return name[0] + ' ' + name[1];
}


$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);