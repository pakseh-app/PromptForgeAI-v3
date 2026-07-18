/* =====================================================
   PROMPTFORGE AI v4
   COMPOSER.JS
===================================================== */

let currentTemplate = null;


/* =====================================================
   LOAD TEMPLATE
===================================================== */

function loadTemplate(template){

    currentTemplate = template;

    // isi dropdown

    setValue("category", template.category);

    setValue("style", template.style);

    setValue("size", template.size);

    setValue("ai", template.ai);

    // isi textarea ide

    const idea = document.getElementById("idea");

    if(idea){

        idea.value =
`PROJECT

${template.title}

CATEGORY

${template.category}

STYLE

${template.style}

OBJECTIVE

${template.template.objective}

`;

    }

}


/* =====================================================
   SET VALUE
===================================================== */

function setValue(id,value){

    const element=document.getElementById(id);

    if(!element) return;

    for(let option of element.options){

        if(option.value===value ||

           option.text===value){

            element.value=option.value;

            return;

        }

    }

}


/* =====================================================
   GET CURRENT TEMPLATE
===================================================== */

function getCurrentTemplate(){

    return currentTemplate;

}


/* =====================================================
   CLEAR
===================================================== */

function clearComposer(){

    currentTemplate=null;

    const idea=document.getElementById("idea");

    if(idea){

        idea.value="";

    }

}


/* =====================================================
   BUILD PROMPT
===================================================== */

function buildPrompt(userIdea){

    if(!currentTemplate){

        return userIdea;

    }

    return `

${userIdea}

--------------------------------------

CATEGORY

${currentTemplate.category}

STYLE

${currentTemplate.style}

OBJECTIVE

${currentTemplate.template.objective}

COLOR

${currentTemplate.template.color}

LIGHTING

${currentTemplate.template.lighting}

CAMERA

${currentTemplate.template.camera}

NEGATIVE PROMPT

${currentTemplate.template.negative}

`;

}
