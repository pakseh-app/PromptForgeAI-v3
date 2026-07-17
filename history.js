/* =====================================================
   PROMPTFORGE AI v3
   HISTORY.JS
===================================================== */

const promptHistory=[];


function saveHistory(prompt){

    promptHistory.unshift(prompt);

    if(promptHistory.length>10){

        promptHistory.pop();

    }

}


document.addEventListener("DOMContentLoaded",()=>{

    const downloadBtn=document.getElementById("download");

    if(downloadBtn){

        downloadBtn.addEventListener("click",downloadPrompt);

    }

});


function downloadPrompt(){

    const text=document.getElementById("output").value;

    if(!text.trim()){

        alert("Belum ada prompt.");

        return;

    }

    const blob=new Blob([text],{

        type:"text/plain"

    });

    const url=URL.createObjectURL(blob);

    const a=document.createElement("a");

    a.href=url;

    a.download="PromptForgeAI.txt";

    a.click();

    URL.revokeObjectURL(url);

}
