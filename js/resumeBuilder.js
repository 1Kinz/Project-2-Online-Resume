var bio = {
    name: 'Zachary Teh',
    role: 'Web Developer',
    contacts: [{
        mobile: '647-648-4884',
        email: 'zack8d@ymail.com',
        twitter: 'n/a',
        github: '1kinz',
        blog: 'n/a',
        location: 'Toronto'
    }],
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
        major: 'n/a'
    }, {
        name: 'University of Waterloo',
        location: 'Waterloo',
        degree: 'Bachelor',
        dates: '2021',
        major: 'Economics'
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
    $('#header').append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {

        var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
        $('#skills').append(formattedSkill);
    }

    bio.contacts.forEach(function(cbio) {

        var formattedMobile = HTMLmobile.replace('%data%', cbio.mobile);
        var formattedEmail = HTMLemail.replace('%data%', cbio.email);
        var formattedTwitter = HTMLtwitter.replace('%data%', cbio.twitter);
        var formattedGithub = HTMLgithub.replace('%data%', cbio.github);
        var formattedBlog = HTMLblog.replace('%data%', cbio.blog);
        var formattedLocation = HTMLlocation.replace('%data%', cbio.location);

        var contactCombined = formattedLocation + formattedBlog + formattedGithub + formattedTwitter + formattedEmail + formattedMobile;

        $('#topContacts').append(contactCombined);
    });
};

bio.display();


education.display = function() {
    education.schools.forEach(function(edu) {

        $('#education').append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace('%data%', edu.name);
        var formrattedSchoolDegree = HTMLschoolDegree.replace('%data%', edu.degree);
        var formrattedSchoolDates = HTMLschoolDates.replace('%data%', edu.dates);
        var formrattedSchoolLocation = HTMLschoolLocation.replace('%data%', edu.location);
        var formrattedSchoolMajor = HTMLschoolMajor.replace('%data%', edu.major);


        var combinedSchool = formattedSchoolName + formrattedSchoolDegree + formrattedSchoolDates + formrattedSchoolLocation + formrattedSchoolMajor;

        $('.education-entry:last').append(combinedSchool);
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

        var employerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

        $('.work-entry:last').append(employerTitle);
    });
};

work.display();


projects.display = function() {
    projects.projects.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
        var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
        var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
        var formattedImage = HTMLprojectImage.replace('%data%', project.images);

        var combined = formattedTitle + formattedDates + formattedDescription + formattedImage;

        $('.project-entry').append(combined);
    });
};

projects.display();


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});


function locationFinder() {
    var locations = [];

    for (var contact in bio.contacts) {
        locations.push(bio.contacts[contact].location);
    }

    for (var school in education.schools) {
        locations.push(education.schools[school].location);
    }

    for (var job in work.jobs) {
        locations.push(work.jobs[job].location);
    }
    console.log('locations: ', locations);
    return locations;
}

locationFinder();


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