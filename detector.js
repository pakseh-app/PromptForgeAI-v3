/* ==========================================================
   PROMPTFORGE AI
   detector.js
   Version : 4.1.0
========================================================== */


/* ==========================================================
   KEYWORD DATABASE
========================================================== */

const DetectorRules={

category:{

poster:[
"poster",
"pamflet"
],

banner:[
"banner",
"spanduk",
"baliho"
],

flyer:[
"flyer",
"brosur"
],

thumbnail:[
"thumbnail",
"youtube"
],

logo:[
"logo",
"brand"
],

undangan:[
"undangan",
"wedding",
"nikah"
]

},



style:{

modern:[
"modern",
"minimal",
"clean"
],

luxury:[
"luxury",
"mewah",
"premium",
"elegan"
],

futuristic:[
"future",
"futuristik",
"cyber"
],

islamic:[
"islam",
"masjid",
"pengajian",
"ramadhan",
"muharram"
],

cute:[
"cute",
"imut",
"kawaii"
],

cartoon:[
"kartun",
"cartoon",
"pixar",
"3d"
]

},



color:{

red:[
"merah",
"red"
],

blue:[
"biru",
"blue"
],

green:[
"hijau",
"green"
],

gold:[
"gold",
"emas"
],

black:[
"hitam",
"black"
],

white:[
"putih",
"white"
]

},



audience:{

kids:[
"anak",
"tk",
"paud"
],

teen:[
"remaja",
"sma"
],

adult:[
"dewasa"
],

family:[
"keluarga"
]

}

};



/* ==========================================================
   MAIN DETECTOR
========================================================== */

function detectPrompt(text){

    text=text.toLowerCase();

    return{

        category:

        detectCategory(text),

        style:

        detectStyle(text),

        color:

        detectColor(text),

        audience:

        detectAudience(text)

    };

}

/* ==========================================================
   CATEGORY DETECTOR
========================================================== */

function detectCategory(text){

    return findKeyword(

        DetectorRules.category,

        text,

        "General"

    );

}



/* ==========================================================
   STYLE DETECTOR
========================================================== */

function detectStyle(text){

    return findKeyword(

        DetectorRules.style,

        text,

        "Modern"

    );

}



/* ==========================================================
   COLOR DETECTOR
========================================================== */

function detectColor(text){

    return findKeyword(

        DetectorRules.color,

        text,

        "Auto"

    );

}



/* ==========================================================
   AUDIENCE DETECTOR
========================================================== */

function detectAudience(text){

    return findKeyword(

        DetectorRules.audience,

        text,

        "General"

    );

}



/* ==========================================================
   KEYWORD ENGINE
========================================================== */

function findKeyword(database,text,defaultValue){

    for(const key in database){

        const keywords=database[key];

        for(const word of keywords){

            if(text.includes(word)){

                return capitalize(key);

            }

        }

    }

    return defaultValue;

}



/* ==========================================================
   TEXT NORMALIZER
========================================================== */

function normalizeText(text){

    return text

        .toLowerCase()

        .trim()

        .replace(/\s+/g," ");

}



/* ==========================================================
   CAPITALIZE
========================================================== */

function capitalize(text){

    if(!text) return "";

    return text.charAt(0).toUpperCase()

        + text.slice(1);

}



/* ==========================================================
   MULTI DETECT
========================================================== */

function detectAll(text){

    text=normalizeText(text);

    return{

        category:detectCategory(text),

        style:detectStyle(text),

        color:detectColor(text),

        audience:detectAudience(text)

    };

}



/* ==========================================================
   PART 3 BELOW
========================================================== */

/* ==========================================================
   SMART PROJECT TYPE DETECTOR
========================================================== */

const ProjectRules={

food:[
"bakso",
"mie",
"mie ayam",
"soto",
"ayam",
"burger",
"pizza",
"kopi",
"coffee",
"cafe",
"es teh",
"minuman",
"kuliner",
"makanan"
],

wedding:[
"nikah",
"akad",
"resepsi",
"wedding",
"pengantin",
"undangan",
"pernikahan"
],

islamic:[
"pengajian",
"masjid",
"ramadhan",
"muharram",
"idul fitri",
"idul adha",
"kajian",
"santri",
"quran",
"islam"
],

education:[
"wisuda",
"kelulusan",
"kampus",
"universitas",
"sekolah",
"smp",
"sma",
"sd",
"paud",
"tk"
],

marketing:[
"promo",
"diskon",
"sale",
"flash sale",
"cashback",
"gratis",
"voucher",
"murah"
],

social:[
"youtube",
"tiktok",
"instagram",
"facebook",
"shorts",
"reels"
]

};



/* ==========================================================
   PROJECT DETECTOR
========================================================== */

function detectProjectType(text){

    return findKeyword(

        ProjectRules,

        text,

        "General"

    );

}



/* ==========================================================
   ORIENTATION DETECTOR
========================================================== */

function detectOrientation(text){

    if(

        text.includes("portrait") ||

        text.includes("vertikal")

    ){

        return "Portrait";

    }

    if(

        text.includes("landscape") ||

        text.includes("horizontal")

    ){

        return "Landscape";

    }

    if(

        text.includes("square") ||

        text.includes("1:1")

    ){

        return "Square";

    }

    return "Auto";

}



/* ==========================================================
   QUALITY LEVEL
========================================================== */

function detectQuality(text){

    if(

        text.includes("8k") ||

        text.includes("ultra hd")

    ){

        return "Ultra";

    }

    if(

        text.includes("4k")

    ){

        return "High";

    }

    return "Standard";

}



/* ==========================================================
   IMPROVED DETECTOR
========================================================== */

function detectPrompt(text){

    text=normalizeText(text);

    return{

        category:

        detectCategory(text),

        style:

        detectStyle(text),

        color:

        detectColor(text),

        audience:

        detectAudience(text),

        project:

        detectProjectType(text),

        orientation:

        detectOrientation(text),

        quality:

        detectQuality(text)

    };

}



/* ==========================================================
   DEBUG
========================================================== */

function detectorPreview(text){

    console.table(

        detectPrompt(text)

    );

}

/* ==========================================================
   HELPER FUNCTIONS
========================================================== */

function containsAny(text, keywords){

    text = normalizeText(text);

    return keywords.some(keyword =>

        text.includes(

            normalizeText(keyword)

        )

    );

}



/* ==========================================================
   DETECTOR INFORMATION
========================================================== */

function getDetectorVersion(){

    return{

        name : "PromptForge Smart Detector",

        version : "4.1.0",

        author : "Pakseh"

    };

}



/* ==========================================================
   PUBLIC API
========================================================== */

window.PromptDetector={

    detect:detectPrompt,

    detectCategory,

    detectStyle,

    detectColor,

    detectAudience,

    detectProjectType,

    detectOrientation,

    detectQuality,

    normalizeText,

    version:getDetectorVersion

};



/* ==========================================================
   SELF TEST
========================================================== */

function detectorSelfTest(){

    console.group(

        "PromptForge Detector Test"

    );

    console.table(

        detectPrompt(

            "Poster promo bakso modern 8K vertikal"

        )

    );

    console.groupEnd();

}



/* ==========================================================
   AUTO INIT
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        console.log(

            "%cPromptForge Smart Detector v4.1 Loaded",

            "color:#22c55e;font-weight:bold;font-size:13px;"

        );

    }

);



/* ==========================================================
   END OF FILE
========================================================== */
