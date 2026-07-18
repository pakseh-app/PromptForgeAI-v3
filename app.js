/* =====================================================
   PROMPTFORGE AI v4
   APP.JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initNavigation();

    initHeroButtons();

    initGenerateButton();

});


/* =====================================================
   NAVIGATION SPA
===================================================== */

function initNavigation(){

    const links=document.querySelectorAll(".nav-link");

    const pages=document.querySelectorAll(".page");

    links.forEach(link=>{

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            const page=link.dataset.page;

            showPage(page);

        });

    });

}


function showPage(pageName){

    const links=document.querySelectorAll(".nav-link");

    const pages=document.querySelectorAll(".page");

    links.forEach(link=>{

        link.classList.remove("active");

        if(link.dataset.page===pageName){

            link.classList.add("active");

        }

    });

    pages.forEach(page=>{

        page.classList.remove("active-page");

    });

    const target=document.getElementById(pageName+"-page");

    if(target){

        target.classList.add("active-page");

    }

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


/* =====================================================
   HERO BUTTONS
===================================================== */

function initHeroButtons(){

    const buttons=document.querySelectorAll("[data-open]");

    buttons.forEach(button=>{

        button.addEventListener("click",()=>{

            showPage(button.dataset.open);

        });

    });

}


/* =====================================================
   GENERATE BUTTON
===================================================== */

function initGenerateButton(){

    const btn=document.getElementById("generate");

    if(!btn) return;

    btn.addEventListener("click",()=>{

        if(typeof generateProfessionalPrompt==="function"){

            generateProfessionalPrompt();

        }else{

            console.warn("generator.js belum dimuat.");

        }

    });

}


/* =====================================================
   PUBLIC API
===================================================== */

window.PromptForge={

    openComposer(){

        showPage("composer");

    },

    openTemplates(){

        showPage("templates");

    },

    openHistory(){

        showPage("history");

    },

    openSettings(){

        showPage("settings");

    },

    openAbout(){

        showPage("about");

    }

};
