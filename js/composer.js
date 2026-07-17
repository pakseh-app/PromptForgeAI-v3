/* =====================================================
   PROMPTFORGE AI
   COMPOSER.JS
===================================================== */

function composeIdea(text){

    text=text.toLowerCase();

    return{

        headline:getHeadline(text),

        cta:getCTA(text),

        price:getPrice(text),

        object:getObject(text)

    };

}


/* ==========================
OBJECT
========================== */

function getObject(text){

    const objects=[

        "bakso",
        "mie ayam",
        "ayam geprek",
        "kopi",
        "pizza",
        "burger",
        "barbershop",
        "laundry",
        "pengajian",
        "seminar"

    ];

    for(const item of objects){

        if(text.includes(item))

            return capitalize(item);

    }

    return "Produk";

}


/* ==========================
PRICE
========================== */

function getPrice(text){

    const match=text.match(/\d+/);

    if(match){

        return "Rp"+Number(match[0]).toLocaleString("id-ID");

    }

    return "-";

}


/* ==========================
HEADLINE
========================== */

function getHeadline(text){

    if(text.includes("bakso"))

        return "BAKSO PEDAS SUPER MANTAP";

    if(text.includes("kopi"))

        return "KOPI PALING NIKMAT";

    if(text.includes("laundry"))

        return "CUCI CEPAT HASIL BERSIH";

    return "PROMO SPESIAL";

}


/* ==========================
CTA
========================== */

function getCTA(text){

    if(text.includes("bakso"))

        return "Buruan Cobain Sekarang!";

    if(text.includes("kopi"))

        return "Ngopi Yuk Hari Ini!";

    if(text.includes("laundry"))

        return "Hubungi Kami Sekarang!";

    return "Jangan Sampai Ketinggalan!";

}


/* ==========================
UTIL
========================== */

function capitalize(text){

    return text.replace(/\b\w/g,c=>c.toUpperCase());

}
