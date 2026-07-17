/* =====================================================
   PROMPTFORGE AI v3
   DETECTOR.JS
   Smart AI Detector
===================================================== */

function smartDetect(text){

    text = text.toLowerCase();

    return{

        category:detectCategory(text),

        style:detectStyle(text),

        color:detectColor(text),

        audience:detectAudience(text)

    };

}

/* ===========================
   CATEGORY
=========================== */

function detectCategory(text){

    for(const key in promptDB.categories){

        const item = promptDB.categories[key];

        for(const word of item.keywords){

            if(text.includes(word)){

                return item.name;

            }

        }

    }

    return "Auto Detect";

}

/* ===========================
   STYLE
=========================== */

function detectStyle(text){

    for(const key in promptDB.styles){

        const words = promptDB.styles[key];

        for(const word of words){

            if(text.includes(word)){

                return capitalize(key);

            }

        }

    }

    return "Auto Detect";

}

/* ===========================
   COLOR
=========================== */

function detectColor(text){

    for(const key in promptDB.colors){

        const words = promptDB.colors[key];

        for(const word of words){

            if(text.includes(word)){

                return capitalize(key);

            }

        }

    }

    return "-";

}

/* ===========================
   AUDIENCE
=========================== */

function detectAudience(text){

    for(const key in promptDB.audience){

        const words = promptDB.audience[key];

        for(const word of words){

            if(text.includes(word)){

                return capitalize(key);

            }

        }

    }

    return "-";

}

/* ===========================
   HELPER
=========================== */

function capitalize(str){

    return str.charAt(0).toUpperCase()+str.slice(1);

}
