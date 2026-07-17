/* =====================================================
   PROMPTFORGE AI v3.5
   DETECTOR.JS
===================================================== */

function smartDetect(text){

    text=text.toLowerCase();

    return{

        category:detectCategory(text),

        style:detectStyle(text),

        color:detectColor(text),

        audience:detectAudience(text),

        industry:detectIndustry(text)

    };

}

/* =========================
CATEGORY
========================= */

function detectCategory(text){

    if(text.includes("poster")) return "Poster";

    if(text.includes("banner")) return "Banner";

    if(text.includes("spanduk")) return "Spanduk";

    if(text.includes("flyer")) return "Flyer";

    if(text.includes("thumbnail")) return "Thumbnail";

    if(text.includes("logo")) return "Logo";

    if(text.includes("undangan")) return "Invitation";

    if(text.includes("kemasan")) return "Packaging";

    return "Poster";

}

/* =========================
STYLE
========================= */

function detectStyle(text){

    if(text.includes("luxury")) return "Luxury";

    if(text.includes("mewah")) return "Luxury";

    if(text.includes("minimal")) return "Minimal";

    if(text.includes("futur")) return "Futuristic";

    if(text.includes("3d")) return "3D Cartoon";

    if(text.includes("kartun")) return "3D Cartoon";

    if(text.includes("real")) return "Photorealistic";

    return "Modern";

}

/* =========================
COLOR
========================= */

function detectColor(text){

    if(text.includes("merah")) return "Merah";

    if(text.includes("biru")) return "Biru";

    if(text.includes("hijau")) return "Hijau";

    if(text.includes("kuning")) return "Kuning";

    if(text.includes("hitam")) return "Hitam";

    if(text.includes("putih")) return "Putih";

    if(text.includes("ungu")) return "Ungu";

    return "Auto";

}

/* =========================
AUDIENCE
========================= */

function detectAudience(text){

    if(text.includes("anak")) return "Anak";

    if(text.includes("remaja")) return "Remaja";

    if(text.includes("dewasa")) return "Dewasa";

    if(text.includes("keluarga")) return "Keluarga";

    return "Umum";

}

/* =========================
INDUSTRY
========================= */

function detectIndustry(text){

    if(
        text.includes("bakso")||
        text.includes("mie")||
        text.includes("ayam")||
        text.includes("kopi")||
        text.includes("cafe")||
        text.includes("kuliner")
    ) return "food";

    if(
        text.includes("nikah")||
        text.includes("akad")||
        text.includes("resepsi")
    ) return "wedding";

    if(
        text.includes("ai")||
        text.includes("software")||
        text.includes("website")
    ) return "technology";

    return "corporate";

}
