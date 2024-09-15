var form = document.getElementById('resumeForm');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var download_pdf_Button = document.getElementById('download-pdf');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skill = document.getElementById('skills').value;
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        education: education,
        experience: experience,
        skill: skill
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resumeHtml = "\n    <h2><b> Shareable & Eitable Resume </b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name : </b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email : </b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone : </b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    <p><b>Address : </b><span contenteditable=\"true\">").concat(address, "</span></p>\n    <br>\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    <br>\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    <br>\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skill, "</p>\n    ");
    resumeDisplayElement.innerHTML = resumeHtml;
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
download_pdf_Button.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedresumeData = localStorage.getItem(username);
        if (savedresumeData) {
            var resumeData = JSON.parse(savedresumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('address').value = resumeData.address;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skill;
        }
    }
});
