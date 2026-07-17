/* =====================================================
   PROMPTFORGE AI v3
   GENERATOR.JS
===================================================== */

function generateProfessionalPrompt(){

    const idea = document.getElementById("idea").value.trim();

    if(idea===""){

        alert("Silakan masukkan ide desain terlebih dahulu.");

        return;

    }

    const detect = smartDetect(idea);

    const category =
        document.getElementById("category").value==="Auto Detect"
        ? detect.category
        : document.getElementById("category").value;

    const style =
        document.getElementById("style").value==="Auto Detect"
        ? detect.style
        : document.getElementById("style").value;

    const size =
        document.getElementById("size").value;

    const ai =
        document.getElementById("ai").value;

    const color = detect.color;

    const audience = detect.audience;

    const prompt = `Create a professional ${category} design.

Main concept:
${idea}

Design Style:
${style}

Target Audience:
${audience}

Primary Color:
${color}

Canvas Size:
${size}

AI Platform:
${ai}

Requirements:

• Modern visual hierarchy

• Premium typography

• Balanced composition

• High quality lighting

• Ultra detailed

• Professional layout

• Print ready

• 8K quality

Negative Prompt:

${promptDB.negativePrompt.join(", ")}

Generate an outstanding professional result.`;

    document.getElementById("output").value = prompt;

    updateDetectResult(detect);

    updateQuality(prompt);

    saveHistory(prompt);

}
