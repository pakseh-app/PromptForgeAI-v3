/* =====================================================
   PROMPTFORGE AI v4
   DETECTOR.JS
===================================================== */

function smartDetect(text){

    text=text.toLowerCase();

    return{

        category:detectCategory(text),

        style:detectStyle(text),

        color:detectColor(text),

        audience:detectAudience(text),

        industry:detectIndustry(text),

        platform:detectPlatform(text),

        mood:detectMood(text),

        purpose:detectPurpose(text)

    };

}

/* ===========================
CATEGORY
=========================== */

function detectCategory(text){

    if(/poster|pamflet/.test(text)) return "Poster";

    if(/banner|xbanner|roll banner/.test(text)) return "Banner";

    if(/spanduk/.test(text)) return "Spanduk";

    if(/flyer/.test(text)) return "Flyer";

    if(/thumbnail|youtube|yt/.test(text)) return "Thumbnail";

    if(/logo|branding/.test(text)) return "Logo";

    if(/undangan|akad|resepsi/.test(text)) return "Invitation";

    if(/kemasan|packaging|label/.test(text)) return "Packaging";

    return "Poster";

}

/* ===========================
STYLE
=========================== */

function detectStyle(text){

    if(/luxury|mewah|gold/.test(text)) return "Luxury";

    if(/minimal/.test(text)) return "Minimal";

    if(/future|cyber|futuristik/.test(text)) return "Futuristic";

    if(/kartun|pixar|3d/.test(text)) return "3D Cartoon";

    if(/real|realistis|photorealistic/.test(text)) return "Photorealistic";

    return "Modern";

}

/* ===========================
COLOR
=========================== */

function detectColor(text){

    const colors=[
        "Merah",
        "Biru",
        "Hijau",
        "Kuning",
        "Hitam",
        "Putih",
        "Orange",
        "Ungu",
        "Pink",
        "Emas",
        "Silver",
        "Coklat"
    ];

    for(const color of colors){

        if(text.includes(color.toLowerCase()))

            return color;

    }

    return "Auto";

}

/* ===========================
AUDIENCE
=========================== */

function detectAudience(text){

    if(/anak/.test(text)) return "Anak";

    if(/remaja/.test(text)) return "Remaja";

    if(/dewasa/.test(text)) return "Dewasa";

    if(/keluarga/.test(text)) return "Keluarga";

    return "Umum";

}

/* ===========================
INDUSTRY
=========================== */

function detectIndustry(text){

    if(/bakso|mie|ayam|kopi|cafe|kuliner|makanan|minuman/.test(text))

        return "Food";

    if(/nikah|akad|resepsi|pengantin/.test(text))

        return "Wedding";

    if(/ai|software|website|startup|teknologi/.test(text))

        return "Technology";

    if(/sekolah|sd|smp|sma|kampus/.test(text))

        return "Education";

    return "General";

}

/* ===========================
PLATFORM
=========================== */

function detectPlatform(text){

    if(/instagram|ig|feed/.test(text))

        return "Instagram Feed";

    if(/story/.test(text))

        return "Instagram Story";

    if(/tiktok/.test(text))

        return "TikTok";

    if(/youtube/.test(text))

        return "YouTube";

    if(/banner|spanduk/.test(text))

        return "Printing";

    return "Universal";

}

/* ===========================
MOOD
=========================== */

function detectMood(text){

    if(/luxury|premium|mewah/.test(text))

        return "Luxury";

    if(/ceria|happy/.test(text))

        return "Playful";

    if(/elegan/.test(text))

        return "Elegant";

    if(/minimal/.test(text))

        return "Minimal";

    if(/futur/.test(text))

        return "Futuristic";

    return "Professional";

}

/* ===========================
PURPOSE
=========================== */

function detectPurpose(text){

    if(/promo|promosi|diskon/.test(text))

        return "Promotion";

    if(/branding|logo/.test(text))

        return "Branding";

    if(/event|seminar|pengajian/.test(text))

        return "Event";

    if(/edukasi|belajar/.test(text))

        return "Education";

    return "General";

}
