/* =====================================================
   PROMPTFORGE AI v3
   QUALITY.JS
===================================================== */

function updateQuality(prompt){

    let score = 0;

    const length = prompt.length;

    if(length >= promptDB.qualityRules.medium){

        score += 25;

    }

    if(length >= promptDB.qualityRules.good){

        score += 25;

    }

    if(length >= promptDB.qualityRules.excellent){

        score += 25;

    }

    if(prompt.includes("Negative Prompt")){

        score += 10;

    }

    if(prompt.includes("Design Style")){

        score += 5;

    }

    if(prompt.includes("Target Audience")){

        score += 5;

    }

    if(prompt.includes("Primary Color")){

        score += 5;

    }

    score = Math.min(score,100);

    document.getElementById("qualityBar").style.width = score+"%";

    document.getElementById("qualityText").textContent = score+"%";

}
