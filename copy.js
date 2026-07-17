/* =====================================================
   PROMPTFORGE AI v3
   COPY.JS
===================================================== */

document.addEventListener("DOMContentLoaded",()=>{

    const copyBtn=document.getElementById("copy");

    if(copyBtn){

        copyBtn.addEventListener("click",copyPrompt);

    }

});


function copyPrompt(){

    const output=document.getElementById("output");

    if(!output.value.trim()){

        alert("Belum ada prompt yang dapat disalin.");

        return;

    }

    navigator.clipboard.writeText(output.value);

    alert("✅ Prompt berhasil disalin.");

}
