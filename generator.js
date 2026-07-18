/* ==========================================================
   PROMPTFORGE AI
   generator.js
   Version : 4.1.0
   ========================================================== */


/* ==========================================================
   CONFIG
========================================================== */

const PromptForgeEngine = {

    version : "4.1.0",

    author : "Pakseh",

    build : "Professional Prompt Engine"

};



/* ==========================================================
   MAIN ENGINE
========================================================== */

function generateProfessionalPrompt(){

    const input = collectInput();

    if(!validateInput(input)){

        return;

    }

    const detected = detectInformation(input);

    const template = getSelectedTemplate();

    const composed = composePrompt(

        input,
        detected,
        template

    );

    const optimized = optimizePrompt(composed);

    renderOutput(optimized);

    savePromptHistory(

        optimized

    );

    updatePromptQuality(

        optimized

    );

}



/* ==========================================================
   STEP 1
   Collect Input
========================================================== */

function collectInput(){

    return{

        idea:

        getValue("idea"),

        category:

        getValue("category"),

        style:

        getValue("style"),

        size:

        getValue("size"),

        ai:

        getValue("ai")

    };

}



/* ==========================================================
   STEP 2
   Validation
========================================================== */

function validateInput(data){

    if(

        !data.idea ||

        data.idea.trim()===""

    ){

        alert(

            "Silakan masukkan ide desain terlebih dahulu."

        );

        return false;

    }

    return true;

}



/* ==========================================================
   STEP 3
   Smart Detection
========================================================== */

function detectInformation(data){

    let result={

        category:data.category,

        style:data.style,

        color:"Auto",

        audience:"General"

    };

    if(

        typeof detectPrompt==="function"

    ){

        try{

            const detect=

            detectPrompt(

                data.idea

            );

            if(detect){

                result={

                    ...result,

                    ...detect

                };

            }

        }

        catch(e){

            console.warn(

                e

            );

        }

    }

    return result;

}



/* ==========================================================
   STEP 4
   Template
========================================================== */

function getSelectedTemplate(){

    if(

        typeof getCurrentTemplate==="function"

    ){

        return getCurrentTemplate();

    }

    return null;

}



/* ==========================================================
   STEP 5
   Compose Prompt
========================================================== */

function composePrompt(

    input,

    detect,

    template

){

    let output=[];

    output.push(

`# PROFESSIONAL AI DESIGN PROMPT`

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

detect.category

    );



    output.push("");



    output.push(

"STYLE"

    );



    output.push("");



    output.push(

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



    output.push(

"CANVAS SIZE"

    );



    output.push("");



    output.push(

input.size

    );



    output.push("");






/* ==========================================================
   PART 2 BELOW
========================================================== */

/* ==========================================================
   STEP 6
   Add Template Information
========================================================== */

    output.push(
"OBJECTIVE"
    );

    output.push("");

    if(template){

        output.push(
template.template.objective
        );

    }else{

        output.push(
"Create a professional high quality design."
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

    }else{

        output.push(
detect.color
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
detect.audience
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

    output.push(
`
Ultra detailed,
professional composition,
premium quality,
clean layout,
high resolution,
sharp focus,
balanced composition,
realistic lighting,
commercial quality
`
    );

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

    output.push(
`
Bold headline

Modern Sans Serif

Readable hierarchy

Premium spacing

Professional alignment
`
    );

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

    output.push(
`
Professional grid system

Balanced white space

Strong visual hierarchy

Eye-catching focal point

Premium composition
`
    );

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

    }else{

        output.push(
"Professional Studio Lighting"
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

    }else{

        output.push(
"Front View"
        );

    }

    output.push("");



/* ==========================================================
   PART 3 BELOW
========================================================== */

/* ==========================================================
   STEP 7
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

    }else{

        output.push(
`
Low quality

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

Distorted perspective
`
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
`
Professional commercial quality

Ultra HD

8K Detail

Print Ready

Photorealistic

High Dynamic Range

Sharp Focus

Premium Design

Modern Composition
`
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




/* ==========================================================
   STEP 8
   OPTIMIZER
========================================================== */

function optimizePrompt(prompt){

    return prompt

    .replace(/\n{3,}/g,"\n\n")

    .trim();

}



/* ==========================================================
   STEP 9
   OUTPUT
========================================================== */

function renderOutput(prompt){

    const output=

    document.getElementById("result");

    if(output){

        output.value=prompt;

    }

}



/* ==========================================================
   STEP 10
   HISTORY
========================================================== */

function savePromptHistory(prompt){

    if(

        typeof saveHistory==="function"

    ){

        saveHistory(prompt);

    }

}



/* ==========================================================
   STEP 11
   QUALITY
========================================================== */

function updatePromptQuality(prompt){

    if(

        typeof calculatePromptQuality==="function"

    ){

        calculatePromptQuality(

            prompt

        );

    }

}



/* ==========================================================
   PART 4 BELOW
========================================================== */

/* ==========================================================
   STEP 12
   HELPER FUNCTIONS
========================================================== */

function getValue(id){

    const element=document.getElementById(id);

    if(!element) return "";

    return element.value.trim();

}



/* ==========================================================
   COPY SUPPORT
========================================================== */

function copyGeneratedPrompt(){

    const output=document.getElementById("result");

    if(!output) return;

    navigator.clipboard.writeText(output.value);

}



/* ==========================================================
   DOWNLOAD SUPPORT
========================================================== */

function downloadGeneratedPrompt(){

    const output=document.getElementById("result");

    if(!output) return;

    const blob=new Blob(

        [output.value],

        {

            type:"text/plain"

        }

    );

    const url=

    URL.createObjectURL(blob);

    const a=

    document.createElement("a");

    a.href=url;

    a.download="PromptForge-Prompt.txt";

    a.click();

    URL.revokeObjectURL(url);

}



/* ==========================================================
   AUTO BIND BUTTON
========================================================== */

document.addEventListener(

"DOMContentLoaded",

()=>{

    const copyBtn=

    document.getElementById("copy");

    if(copyBtn){

        copyBtn.addEventListener(

            "click",

            copyGeneratedPrompt

        );

    }

    const downloadBtn=

    document.getElementById("download");

    if(downloadBtn){

        downloadBtn.addEventListener(

            "click",

            downloadGeneratedPrompt

        );

    }

});



/* ==========================================================
   PUBLIC ENGINE
========================================================== */

window.PromptForgeEngine={

    version:"4.1.0",

    generate:

    generateProfessionalPrompt,

    collect:

    collectInput,

    compose:

    composePrompt,

    optimize:

    optimizePrompt,

    copy:

    copyGeneratedPrompt,

    download:

    downloadGeneratedPrompt

};



/* ==========================================================
   CONSOLE INFO
========================================================== */

console.log(

"%cPromptForge AI Engine v4.1 Loaded",

"color:#6366f1;font-weight:bold;font-size:14px;"

);

/* ==========================================================
   FINAL BUILD
========================================================== */

    return output.join("\n");

}

/* ==========================================================
   END OF FILE
========================================================== */
