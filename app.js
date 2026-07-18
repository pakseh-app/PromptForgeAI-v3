/* =====================================================
   PROMPTFORGE AI v5
   APP.JS
   CORE INITIALIZATION
===================================================== */


/* =====================================================
   GLOBAL APP STATE
===================================================== */


window.PromptForgeApp = {


    version:"5.0.0",


    composer:null,


    initialized:false,


    result:null,


    settings:{


        mode:"professional",


        autoEnhance:true


    }


};



/* =====================================================
   DOM READY
===================================================== */


document.addEventListener(

    "DOMContentLoaded",

    ()=>{


        bootPromptForge();


    }

);




/* =====================================================
   BOOT SYSTEM
===================================================== */


function bootPromptForge(){


    console.log(
        "%cStarting PromptForge AI v5...",
        "color:#06b6d4;font-weight:bold"
    );


    initComposerCore();


    initNavigation();


    initHeroButtons();


    initializeAIEngine();



    PromptForgeApp.initialized=true;



    console.log(

        "%cPromptForge AI v5 Ready",

        "color:#22c55e;font-weight:bold"

    );


}




/* =====================================================
   COMPOSER CORE INITIALIZER
===================================================== */


function initComposerCore(){



    if(

        typeof PromptComposer==="undefined"

    ){


        console.warn(

            "PromptComposer belum tersedia"

        );


        return;


    }




    PromptForgeApp.composer =

        new PromptComposer();




    console.log(

        "Composer Engine Connected",

        PromptForgeApp.composer

    );


}





/* =====================================================
   APP STATUS
===================================================== */


function getAppStatus(){



    return {


        version:

        PromptForgeApp.version,



        initialized:

        PromptForgeApp.initialized,



        composer:

        !!PromptForgeApp.composer


    };


}

/* =====================================================
   PART 2
   NAVIGATION SYSTEM v5
===================================================== */


/* =====================================================
   NAVIGATION INITIALIZER
===================================================== */


function initNavigation(){



    const links =

        document.querySelectorAll(

            ".nav-link"

        );



    if(!links.length){

        console.warn(

            "Navigation link tidak ditemukan"

        );

        return;

    }




    links.forEach(

        link=>{



            link.addEventListener(

                "click",

                event=>{



                    event.preventDefault();



                    const page =

                        link.dataset.page;



                    if(page){


                        showPage(page);


                    }



                }

            );



        }

    );



}



/* =====================================================
   SHOW PAGE
===================================================== */


function showPage(pageName){



    const pages =

        document.querySelectorAll(

            ".page"

        );



    const links =

        document.querySelectorAll(

            ".nav-link"

        );




    /* REMOVE ACTIVE MENU */

    links.forEach(

        link=>{


            link.classList.remove(

                "active"

            );



            if(

                link.dataset.page===pageName

            ){


                link.classList.add(

                    "active"

                );


            }



        }

    );




    /* HIDE ALL PAGE */

    pages.forEach(

        page=>{


            page.classList.remove(

                "active-page"

            );


        }

    );





    /* SHOW TARGET PAGE */

    const target =

        document.getElementById(

            pageName+"-page"

        );




    if(target){


        target.classList.add(

            "active-page"

        );



        PromptForgeApp.currentPage =

            pageName;


    }

    else{


        console.warn(

            "Page tidak ditemukan:",

            pageName

        );


    }





    window.scrollTo({


        top:0,


        behavior:"smooth"


    });



}





/* =====================================================
   HERO BUTTON SYSTEM
===================================================== */


function initHeroButtons(){



    const buttons =

        document.querySelectorAll(

            "[data-open]"

        );



    buttons.forEach(

        button=>{


            button.addEventListener(

                "click",

                ()=>{


                    const page =

                        button.dataset.open;



                    if(page){


                        showPage(page);


                    }



                }

            );


        }

    );



}

/* =====================================================
   PART 3
   COMPOSER CONNECTION LAYER
===================================================== */


/* =====================================================
   CREATE COMPOSER INSTANCE
===================================================== */


function createComposer(){



    if(

        PromptForgeApp.composer

    ){


        return PromptForgeApp.composer;


    }




    if(

        typeof PromptComposer==="undefined"

    ){



        console.error(

            "PromptComposer v5 tidak ditemukan"

        );



        return null;


    }




    try{



        PromptForgeApp.composer =

            new PromptComposer();




        console.log(

            "%cComposer Engine Connected",

            "color:#22c55e;font-weight:bold"

        );



        return PromptForgeApp.composer;



    }

    catch(error){



        console.error(

            "Composer gagal dibuat:",

            error

        );



        return null;


    }



}





/* =====================================================
   GET COMPOSER
===================================================== */


function getComposer(){



    if(

        !PromptForgeApp.composer

    ){



        return createComposer();


    }




    return PromptForgeApp.composer;



}





/* =====================================================
   COMPOSER HEALTH CHECK
===================================================== */


function checkComposer(){



    const composer =

        getComposer();





    if(!composer){



        return {


            ready:false,


            message:

            "Composer belum aktif"


        };



    }




    return {


        ready:true,


        version:

        window.PromptComposerVersion || "unknown",



        engine:

        composer



    };



}





/* =====================================================
   INITIALIZE ADVANCED ENGINE
===================================================== */


function initializeAIEngine(){



    const composer =

        getComposer();




    if(!composer){


        return false;


    }




    try{



        if(

            typeof composer.boot === "function"

        ){



            composer.boot();



        }





        console.log(

            "%cAI Engine Initialized",

            "color:#facc15;font-weight:bold"

        );




        return true;



    }

    catch(error){



        console.error(

            "AI Engine initialization error:",

            error

        );



        return false;


    }


}

