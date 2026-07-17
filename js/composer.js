/* =====================================================
   PROMPTFORGE AI v4
   COMPOSER.JS
===================================================== */

function composeIdea(text){

    text = text.toLowerCase();

    return{

        object:getObject(text),

        headline:getHeadline(text),

        cta:getCTA(text),

        price:getPrice(text)

    };

}

function getObject(text){

    const list=[

        "bakso",
        "mie ayam",
        "ayam geprek",
        "kopi",
        "pizza",
        "burger",
        "laundry",
        "barbershop",
        "seminar",
        "pengajian"

    ];

    for(const item of list){

        if(text.includes(item)){

            return item.charAt(0).toUpperCase()+item.slice(1);

        }

    }

    return "Produk";

}

function getHeadline(text){

    if(text.includes("bakso"))

        return "BAKSO PEDAS SUPER MANTAP";

    if(text.includes("mie"))

        return "MIE AYAM FAVORIT KELUARGA";

    if(text.includes("kopi"))

        return "KOPI PALING NIKMAT";

    if(text.includes("laundry"))

        return "CUCI CEPAT HASIL MAKSIMAL";

    return "PROMO SPESIAL";

}

function getCTA(text){

    if(text.includes("bakso"))

        return "Yuk Cobain Sekarang!";

    if(text.includes("kopi"))

        return "Nikmati Harimu Bersama Kopi Kami!";

    if(text.includes("laundry"))

        return "Hubungi Kami Hari Ini!";

    return "Jangan Sampai Ketinggalan!";

}

function getPrice(text){

    const match=text.match(/\d+/);

    if(match){

        return "Rp "+Number(match[0]).toLocaleString("id-ID");

    }

    return "-";

}
