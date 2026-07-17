/* =====================================================
   PROMPTFORGE AI v4
   GENERATOR.JS
===================================================== */

function generateProfessionalPrompt(){

    const idea=document.getElementById("idea").value.trim();

    if(idea===""){

        alert("Silakan masukkan ide desain terlebih dahulu.");

        return;

    }

    const detect=smartDetect(idea);

    updateDetectResult(detect);

    const category=
    document.getElementById("category").value==="Auto Detect"
    ?detect.category
    :document.getElementById("category").value;

    const style=
    document.getElementById("style").value==="Auto Detect"
    ?detect.style
    :document.getElementById("style").value;

    const ai=
    document.getElementById("ai").value;

    const size=
    document.getElementById("size").value;

    const prompt=buildProfessionalPrompt({

        idea,

        detect,

        category,

        style,

        ai,

        size

    });

    document.getElementById("output").value=prompt;

    updateQuality(prompt);

    if(typeof saveHistory==="function"){

        saveHistory(prompt);

    }

}
