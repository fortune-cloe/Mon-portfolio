
//====================== SKILLS TABS ==================//

const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach(tabContents =>{
            tabContents.classList.remove('skills_active');
        });

        target.classList.add('skills_active');

        tabs.forEach(tab =>{
            tab.classList.remove('skills_active');
        });

        tab.classList.add('skills_active');
    });
});

//==================== INPUT ANIMATION ================//

const inputs = document.querySelectorAll('.input_control');

function focusFonc () {
    let parent = this.parentNode;
    parent.classList.add('focus');
}

function blurFonc () {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove('focus');
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', focusFonc);
    input.addEventListener('blur', blurFonc);
})

//===================== style switcher ===============//
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');

function open() {
    document.querySelector('.style-switcher').classList.toggle('open');
}

styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
})

//=============== hide style - switcher on scroll =============//
window.addEventListener('scroll', () => {
    if(document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open');
    }
})


//====================== CONTACT FORM =====================//

const contactForm = document.getElementById('contact_form');
const contactName = document.getElementById('contact_name');
const contactEmail = document.getElementById('contact_email');
const contactSubject = document.getElementById('contact_subject');
const contactMessage = document.getElementById('contact_message');
const errorMessage = document.getElementById('error_message');

const sendEmail = (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('contact_email').value.trim();
    const validDomains = /^[\w.-]+@(?:gmail\.com|yahoo\.com|outlook\.com)$/i;
    if(!validDomains.test(emailInput)){
        alert('Adresse non valide. Utilisez une adresse gmail, yahoo ou outlook.');
        return;
    }

    // check si l'input a une valeur
    // if(
    //     contactName.value === '' ||
    //     contactEmail.value === '' || 
    //     contactSubject.value === '' || 
    //     contactMessage.value === ''
    // ) {
    //     //show message
    //     errorMessage.textContent ='veuill';
    // }
    // else{
        // serviceID - templateID - #form - publickey
        emailjs.sendForm(
            'service_ggxoxgm',
            'template_ic6acld',
            '#contact_form',
            'NwPhRXdQLP6n69q7N'
        ).then(() => {
            //show message and add color
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Message envoyé ✔';

            //retirer le message après 5secondes
            setTimeout(() => {
                errorMessage.textContent = '';
            }, 5000);
        }, (error) => {
            alert('OOPS! Quelque chose ne va pas, veuillez vérifier votre connexion internet.', error);
        });

        //clear input fields

        contactName.value = '';
        contactEmail.value ='';
        contactSubject.value = '';
        contactMessage.value ='';
    // }
};