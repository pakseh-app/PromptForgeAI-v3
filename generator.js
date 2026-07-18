/* ==========================================================
   PROMPTFORGE AI v4
   generator.js
   PART 1
========================================================== */


/* ==========================================================
   ENGINE INFO
========================================================== */

const PromptForgeEngine={

    version:"4.1.0",

    build:"Professional",

    author:"PromptForge AI"

};



/* ==========================================================
   MAIN GENERATE ENGINE
========================================================== */

function generateProfessionalPrompt(){

    try{

        const input=

        collectInput();

        const detect = PromptDetector.detect(

    input.idea

);

        const template=

        getSelectedTemplate();

        let prompt=

        composePrompt(

            input,

            detect,

            template

        );

        prompt=

        optimizePrompt(

            prompt

        );

        renderOutput(

            prompt

        );

        savePromptHistory(

            prompt

        );

        updatePromptQuality(

            prompt

        );

    }

    catch(error){

        console.error(

            error

        );

        alert(

            "Generate Prompt gagal.\n\n"+

            error.message

        );

    }

}



/* ==========================================================
   STEP 1
   COLLECT INPUT
========================================================== */

function collectInput(){

    return{

        idea:getValue("idea"),

        category:getValue("category"),

        style:getValue("style"),

        ai:getValue("ai"),

        size:getValue("size")

    };

}



/* ==========================================================
   STEP 2
   TEMPLATE
========================================================== */

function getSelectedTemplate(){

    if(

        typeof getCurrentTemplate

        ==="function"

    ){

        return getCurrentTemplate();

    }

    return null;

}



/* ==========================================================
   STEP 3
   COMPOSE PROMPT
========================================================== */

function composePrompt(

    input,

    detect,

    template

){

    let output=[];

    output.push(

"# PROFESSIONAL AI DESIGN PROMPT"

    );

    output.push("");

    output.push(

"=================================================="

    );

    output.push("");

    output.push(

"PROJECT"

    );

    output.push("");

    output.push(

input.idea

    );

    output.push("");

    output.push(

"=================================================="

    );

    output.push("");

    output.push(

"CATEGORY"

    );

    output.push("");

    output.push(

input.category ||

    detect.category

    );

    output.push("");

    output.push(

"STYLE"

    );

    output.push("");

    output.push(

input.style ||

    detect.style

    );

    output.push("");

    output.push(

"TARGET AI"

    );

    output.push("");

    output.push(

input.ai

    );

    output.push("");

/* ==========================================================
   STEP 4
   CANVAS SIZE
========================================================== */

    output.push(

    "=================================================="

    );

    output.push("");

    output.push(

    "CANVAS SIZE"

    );

    output.push("");

    output.push(

    input.size ||

    "Auto"

    );

    output.push("");



/* ==========================================================
   OBJECTIVE
========================================================== */

    output.push(

    "=================================================="

    );

    output.push("");

    output.push(

    "OBJECTIVE"

    );

    output.push("");



    if(template){

        output.push(

        template.template.objective

        );

    }

    else{

        output.push(

        "Create a premium quality design with excellent composition, highly detailed elements, professional layout, realistic lighting, balanced colors, and commercial production quality."

        );

    }

    output.push("");



/* ==========================================================
   COLOR PALETTE
========================================================== */

    output.push(

    "=================================================="

    );

    output.push("");

    output.push(

    "COLOR PALETTE"

    );

    output.push("");



    if(template){

        output.push(

        template.template.color

        );

    }

    else{

        output.push(

        "Use harmonious colors with modern gradients, balanced contrast, premium visual appearance, and high readability."

        );

    }

    output.push("");



/* ==========================================================
   TARGET AUDIENCE
========================================================== */

    output.push(

    "=================================================="

    );

    output.push("");

    output.push(

    "TARGET AUDIENCE"

    );

    output.push("");



    output.push(

    "General audience, commercial clients, social media users, print media, digital marketing, premium branding."

    );

    output.push("");



/* ==========================================================
   VISUAL STYLE
========================================================== */

    output.push(

    "=================================================="

    );

    output.push("");

    output.push(

    "VISUAL STYLE"

    );

    output.push("");



    if(template){

        output.push(

        template.template.visual

        );

    }

    else{

        output.push(

        "Professional, modern, clean, highly detailed, cinematic composition, visually attractive, realistic rendering."

        );

    }

    output.push("");

/* ==========================================================
   TYPOGRAPHY
========================================================== */

    output.push(

    "=================================================="

    );

    output.push("");

    output.push(

    "TYPOGRAPHY"

    );

    output.push("");



    if(template){

        output.push(

        template.template.typography

        );

    }

    else{

        output.push(

        "Use bold modern typography with excellent readability, clean spacing, premium hierarchy, and balanced visual weight."

        );

    }

    output.push("");



/* ==========================================================
   LAYOUT
========================================================== */

    output.push(

    "=================================================="

    );

    output.push("");

    output.push(

    "LAYOUT"

    );

    output.push("");



    if(template){

        output.push(

        template.template.layout

        );

    }

    else{

        output.push(

        "Professional composition using grid alignment, balanced spacing, visual hierarchy, focal point, and clean arrangement."

        );

    }

    output.push("");



/* ==========================================================
   LIGHTING
========================================================== */

    output.push(

    "=================================================="

    );

    output.push("");

    output.push(

    "LIGHTING"

    );

    output.push("");



    if(template){

        output.push(

        template.template.lighting

        );

    }

    else{

        output.push(

        "Soft cinematic lighting, realistic shadows, global illumination, ambient light, HDR rendering."

        );

    }

    output.push("");



/* ==========================================================
   CAMERA
========================================================== */

    output.push(

    "=================================================="

    );

    output.push("");

    output.push(

    "CAMERA"

    );

    output.push("");



    if(template){

        output.push(

        template.template.camera

        );

    }

    else{

        output.push(

        "Eye level perspective, professional framing, balanced composition, realistic depth of field."

        );

    }

    output.push("");



/* ==========================================================
   NEGATIVE PROMPT
========================================================== */

    output.push(

    "=================================================="

    );

    output.push("");

    output.push(

    "NEGATIVE PROMPT"

    );

    output.push("");



    if(template){

        output.push(

        template.template.negative

        );

    }

    else{

        output.push(

`Low quality

Blurry

Pixelated

Noise

Overexposed

Underexposed

Bad anatomy

Bad composition

Watermark

Logo

Signature

Text artifacts

Low resolution

Duplicate objects

Distorted perspective`

        );

    }

    output.push("");

/* ==========================================================
   OUTPUT FORMAT
========================================================== */

    output.push(

    "=================================================="

    );

    output.push("");

    output.push(

    "OUTPUT FORMAT"

    );

    output.push("");



    output.push(

`Professional Commercial Quality

Ultra HD

8K Detail

Print Ready

Photorealistic

High Dynamic Range

Sharp Focus

Premium Design

Modern Composition`

    );

    output.push("");



/* ==========================================================
   TARGET AI OPTIMIZATION
========================================================== */

    output.push(

    "=================================================="

    );

    output.push("");

    output.push(

    "TARGET AI OPTIMIZATION"

    );

    output.push("");



    switch(input.ai){

        case "ChatGPT":

            output.push(

            "Optimized for ChatGPT Image Generation"

            );

        break;



        case "Gemini":

            output.push(

            "Optimized for Google Gemini"

            );

        break;



        case "Claude":

            output.push(

            "Optimized for Claude AI"

            );

        break;



        case "Leonardo AI":

            output.push(

            "Optimized for Leonardo AI"

            );

        break;



        case "Midjourney":

            output.push(

            "Optimized for Midjourney"

            );

        break;



        case "Ideogram":

            output.push(

            "Optimized for Ideogram"

            );

        break;



        case "Flux":

            output.push(

            "Optimized for Flux"

            );

        break;



        default:

            output.push(

            "Universal AI Prompt"

            );

    }

    output.push("");



/* ==========================================================
   FINAL BUILD
========================================================== */

    return output.join("\n");

}

/* ==========================================================
   STEP 4
   OPTIMIZER
========================================================== */

function optimizePrompt(prompt){

    if(!prompt){

        return "";

    }

    return prompt

    .replace(/\n{3,}/g,"\n\n")

    .trim();

}



/* ==========================================================
   STEP 5
   RENDER OUTPUT
========================================================== */

function renderOutput(prompt){

    const output=document.getElementById("output");

    if(output){

        output.value=prompt;

    }

}


/* ==========================================================
   STEP 6
   SAVE HISTORY
========================================================== */

function savePromptHistory(prompt){

    if(

        typeof saveHistory==="function"

    ){

        saveHistory(prompt);

    }

}



/* ==========================================================
   STEP 7
   UPDATE QUALITY
========================================================== */

function updatePromptQuality(prompt){

    if(

        typeof calculatePromptQuality==="function"

    ){

        calculatePromptQuality(

            prompt

        );

        return;

    }

    if(

        typeof analyzePrompt==="function"

    ){

        analyzePrompt(

            prompt

        );

    }

}



/* ==========================================================
   STEP 8
   HELPER
========================================================== */

function getValue(id){

    const element=

    document.getElementById(id);

    if(!element){

        return "";

    }

    return element.value.trim();

}

/* ==========================================================
   STEP 9
   COPY SUPPORT
========================================================== */

function copyGeneratedPrompt(){

    if(

        window.PromptClipboard

    ){

        PromptClipboard.copyResult();

        return;

    }

    const output=

    document.getElementById(

        "output"

    );

    if(!output) return;

    navigator.clipboard.writeText(

        output.value

    );

}



/* ==========================================================
   STEP 10
   DOWNLOAD SUPPORT
========================================================== */

function downloadGeneratedPrompt(){

    const output=

    document.getElementById(

        "output"

    );

    if(!output) return;

    const blob=

    new Blob(

        [output.value],

        {

            type:"text/plain"

        }

    );

    const url=

    URL.createObjectURL(blob);

    const a=

    document.createElement(

        "a"

    );

    a.href=url;

    a.download=

    "PromptForge-Prompt.txt";

    a.click();

    URL.revokeObjectURL(url);

}



/* ==========================================================
   STEP 11
   BUTTON BINDING
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        const copyBtn=

        document.getElementById(

            "copy"

        );

        if(copyBtn){

            copyBtn.addEventListener(

                "click",

                copyGeneratedPrompt

            );

        }

        const downloadBtn=

        document.getElementById(

            "download"

        );

        if(downloadBtn){

            downloadBtn.addEventListener(

                "click",

                downloadGeneratedPrompt

            );

        }

    }

);



/* ==========================================================
   STEP 12
   UTILITIES
========================================================== */

function clearOutput(){

    const output=

    document.getElementById(

        "output"

    );

    if(output){

        output.value="";

    }

}



function appendOutput(text){

    const output=

    document.getElementById(

        "output"

    );

    if(!output) return;

    output.value+=text;

}

/* ==========================================================
   STEP 13
   PUBLIC API
========================================================== */

window.PromptForgeEngine={

    version:"4.1.0",

    generate:generateProfessionalPrompt,

    collect:collectInput,

    compose:composePrompt,

    optimize:optimizePrompt,

    render:renderOutput,

    history:savePromptHistory,

    quality:updatePromptQuality,

    copy:copyGeneratedPrompt,

    download:downloadGeneratedPrompt,

    clear:clearOutput

};



/* ==========================================================
   AUTO READY
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        console.log(

            "Generator Ready."

        );

    }

);



/* ==========================================================
   CONSOLE INFO
========================================================== */

console.log(

"%cPromptForge AI Generator v4.1 Loaded",

"color:#6366f1;font-size:14px;font-weight:bold;"

);



/* ==========================================================
   END OF FILE
========================================================== */
