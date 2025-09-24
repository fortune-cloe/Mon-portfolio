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