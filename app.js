/* =====================================================
   PROMPTFORGE AI v3
   APP.JS
===================================================== */

const ideaInput = document.getElementById("idea");
const output = document.getElementById("output");

const generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", () => {

    const idea = ideaInput.value.trim();

    if (idea === "") {

        alert("Masukkan ide desain terlebih dahulu.");

        return;

    }

    const detect = smartDetect(idea);

    document.getElementById("detectCategory").textContent = detect.category;
    document.getElementById("detectStyle").textContent = detect.style;
    document.getElementById("detectColor").textContent = detect.color;
    document.getElementById("detectAudience").textContent = detect.audience;

    const prompt = generateProfessionalPrompt(idea);

    output.value = prompt;

    updateQuality(prompt);

});
