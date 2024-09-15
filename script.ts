var form = document.getElementById('resumeForm') as HTMLFormElement

var resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

var shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement

var shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement

var download_pdf_Button = document.getElementById('download-pdf') as HTMLButtonElement

form.addEventListener('submit',(event:Event) => {
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const address = (document.getElementById('address') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLTextAreaElement).value
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
    const skill = (document.getElementById('skills') as HTMLTextAreaElement).value

    const resumeData = {
        name,
        email,
        phone,
        address,
        education,
        experience,
        skill
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    
    const resumeHtml = `
    <h2><b> Shareable & Eitable Resume </b></h2>
    <h3>Personal Information</h3>
    <p><b>Name : </b><span contenteditable="true">${name}</span></p>
    <p><b>Email : </b><span contenteditable="true">${email}</span></p>
    <p><b>Phone : </b><span contenteditable="true">${phone}</span></p>
    <p><b>Address : </b><span contenteditable="true">${address}</span></p>
    <br>
    <h3>Education</h3>
    <p contenteditable="true">${education}</p>
    <br>
    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>
    <br>
    <h3>Skills</h3>
    <p contenteditable="true">${skill}</p>
    `;

    resumeDisplayElement.innerHTML = resumeHtml;

    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
})

    download_pdf_Button.addEventListener('click', () => {
        window.print();
    });

    window.addEventListener('DOMContentLoaded', () => {
        const urlParams = new URLSearchParams(window.location.search);
        const username = urlParams.get('username');
        if(username){
            const savedresumeData = localStorage.getItem(username);
            if(savedresumeData){
                const resumeData = JSON.parse(savedresumeData);
                (document.getElementById('username') as HTMLInputElement).value = username;
                (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
                (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
                (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
                (document.getElementById('address') as HTMLInputElement).value = resumeData.address;
                (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
                (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
                (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skill;
            }
        }
    })
