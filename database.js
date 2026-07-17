/* =====================================================
   PROMPTFORGE AI v3
   DATABASE.JS
   Prompt Database
===================================================== */

const promptDB = {

    categories: {

        poster: {
            name: "Poster",
            keywords: [
                "poster",
                "promosi",
                "event",
                "seminar",
                "konser",
                "lomba",
                "kampanye",
                "festival"
            ]
        },

        banner: {
            name: "Banner",
            keywords: [
                "banner",
                "spanduk",
                "billboard",
                "backdrop"
            ]
        },

        flyer: {
            name: "Flyer",
            keywords: [
                "flyer",
                "brosur",
                "leaflet",
                "pamflet"
            ]
        },

        thumbnail: {
            name: "Thumbnail",
            keywords: [
                "thumbnail",
                "youtube",
                "cover video"
            ]
        },

        logo: {
            name: "Logo",
            keywords: [
                "logo",
                "brand",
                "maskot",
                "icon"
            ]
        },

        invitation: {
            name: "Invitation",
            keywords: [
                "undangan",
                "nikah",
                "wedding",
                "aqiqah",
                "khitan"
            ]
        },

        packaging: {
            name: "Packaging",
            keywords: [
                "kemasan",
                "packaging",
                "label",
                "box"
            ]
        }

    },

    styles: {

        modern: [
            "modern",
            "clean",
            "simple",
            "minimal"
        ],

        luxury: [
            "luxury",
            "elegan",
            "premium",
            "gold"
        ],

        futuristic: [
            "future",
            "futuristic",
            "cyberpunk",
            "technology"
        ],

        cartoon3d: [
            "3d",
            "kartun",
            "pixar",
            "disney"
        ],

        realistic: [
            "realistic",
            "photorealistic",
            "realistis",
            "ultra detail"
        ]

    },

    colors: {

        merah:[
            "merah",
            "red"
        ],

        biru:[
            "biru",
            "blue"
        ],

        hijau:[
            "green",
            "hijau"
        ],

        hitam:[
            "black",
            "hitam"
        ],

        putih:[
            "white",
            "putih"
        ],

        emas:[
            "gold",
            "golden",
            "emas"
        ],

        ungu:[
            "purple",
            "ungu"
        ]

    },

    audience:{

        anak:[
            "anak",
            "kids",
            "playgroup",
            "tk"
        ],

        remaja:[
            "remaja",
            "teen"
        ],

        dewasa:[
            "dewasa",
            "adult"
        ],

        keluarga:[
            "family",
            "keluarga"
        ]

    },

    qualityRules:{

        minLength:30,

        excellent:250,

        good:150,

        medium:80

    },

    negativePrompt:[

        "low quality",

        "blurry",

        "cropped",

        "watermark",

        "text error",

        "duplicate",

        "bad anatomy",

        "extra fingers",

        "low resolution"

    ]

};
