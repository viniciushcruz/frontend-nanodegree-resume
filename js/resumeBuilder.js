/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: 'John Doe',
    role: 'Web Developer',
    contacts: {
        mobile: '655-555-5555',
        email: 'john@gmial.com',
        github: 'https://github.com/johndoe',
        twitter: '@johndoe',
        location: 'Brazil'
    },
    welcomeMessage: 'Looking for developing opportunity',
    skills: ['awesomeness', 'learning fast'],
    biopic: 'images/fry.jpg',
    display: function() {
        var header = $("#header");
        var topContacts = $("#topContacts");
        topContacts.before(HTMLheaderName.replace("%data%", bio.name));

        topContacts.before(HTMLheaderRole.replace("%data%", bio.role));

        addContact(topContacts);

        header.append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        header.append(HTMLbioPic.replace("%data%", bio.biopic));
        header.append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            header.append(HTMLskills.replace("%data%", skill));
        });

        addContact($("#footerContacts"));
    }
};

var work = {
    jobs: [{
        employer: 'Planet Express',
        title: 'Delivery Boy',
        location: 'São Paulo, Brazil',
        dates: 'January 2017 - current',
        description: 'Working as delivery boy that need to guarantee a good delivery'
    },
        {
            employer: 'Pizza Delivery',
            title: 'Delivery Boy',
            location: 'São Paulo, Brazil',
            dates: 'November 2016 - January 2017',
            description: 'Working as delivery boy that need to guarantee a good delivery'
        }
    ],
    display: function() {
        var workExperience = $("#workExperience");
        workExperience.append(HTMLworkStart);
        var workEntry = $(".work-entry");

        work.jobs.forEach(function(item) {
            workEntry.append(HTMLworkEmployer.replace("%data%", item.employer) + HTMLworkTitle.replace("%data%", item.title));
            workEntry.append(HTMLworkDates.replace("%data%", item.dates));
            workEntry.append(HTMLworkLocation.replace("%data%", item.location));
            workEntry.append(HTMLworkDescription.replace("%data%", item.description));
        });
    }
};

var projects = {
    projects: [{
        title: 'Udacity - mockup',
        dates: '2017',
        description: 'Transform the mockup into html and css',
        images: ['images/html.jpg', 'images/css.jpg']
    }],
    display: function() {
        var projectSection = $("#projects");
        projectSection.append(HTMLprojectStart);
        var projectEntry = $(".project-entry");

        projects.projects.forEach(function(project) {
            projectEntry.append(HTMLprojectTitle.replace("%data%", project.title));
            projectEntry.append(HTMLprojectDates.replace("%data%", project.dates));
            projectEntry.append(HTMLprojectDescription.replace("%data%", project.description));
            project.images.forEach(function(image) {
                projectEntry.append(HTMLprojectImage.replace("%data%", image));
            })
        });
    }
};

var education = {
    schools: [{
        name: 'USP',
        location: 'São Paulo',
        degree: 'Master',
        majors: ['CS'],
        dates: '2017',
        url: ''
    },
        {
            name: 'USP',
            location: 'São Paulo',
            degree: 'POS',
            majors: ['CS'],
            dates: '2016',
            url: ''
        }
    ],
    onlineCourses: [{
        title: 'JavaScript',
        school: 'Udacity',
        dates: '2015',
        url: 'www.udacity.com'
    }],
    display: function() {
        var educationSection = $("#education");
        educationSection.append(HTMLschoolStart);
        var educationEntry = $(".education-entry");

        education.schools.forEach(function(school) {
            educationEntry.append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
            educationEntry.append(HTMLschoolDates.replace("%data%", school.dates));
            educationEntry.append(HTMLschoolLocation.replace("%data%", school.location));
            school.majors.forEach(function(major) {
                educationEntry.append(HTMLschoolMajor.replace("%data%", major));
            })
        });

        educationSection.append(HTMLonlineClasses);
        educationSection.append(HTMLschoolStart);
        var onlineEducationEntry = $(".education-entry").eq(1);
        education.onlineCourses.forEach(function(onlineCourse) {
            onlineEducationEntry.append(HTMLonlineTitle.replace("%data%", onlineCourse.title) + HTMLonlineSchool.replace("%data%", onlineCourse.school));
            onlineEducationEntry.append(HTMLonlineDates.replace("%data%", onlineCourse.dates));
            onlineEducationEntry.append(HTMLonlineURL.replace("%data%", onlineCourse.url));
        });
    }
};

function addContact(element) {
    element.append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    element.append(HTMLemail.replace("%data%", bio.contacts.email));
    element.append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    element.append(HTMLgithub.replace("%data%", bio.contacts.github));
    element.append(HTMLlocation.replace("%data%", bio.contacts.location));
}

bio.display();

work.display();

projects.display();

education.display();

var map = $("#mapDiv");
map.append(googleMap);