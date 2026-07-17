/* =====================================================
   PROMPTFORGE AI v3.5
   DATABASE.JS
===================================================== */

const promptDB = {

    version: "3.5",

    // =========================================
    // CATEGORY
    // =========================================

    categories: {

        poster: {
            name: "Poster",
            goal: "Professional promotional poster",
            ratio: "70:99",
            dpi: "300 DPI",
            output: "Print Ready"
        },

        banner: {
            name: "Banner",
            goal: "Advertising Banner",
            ratio: "16:9",
            dpi: "300 DPI",
            output: "High Resolution"
        },

        flyer: {
            name: "Flyer",
            goal: "Marketing Flyer",
            ratio: "A5",
            dpi: "300 DPI",
            output: "Print Ready"
        },

        thumbnail: {
            name: "Thumbnail",
            goal: "High CTR Thumbnail",
            ratio: "16:9",
            dpi: "72 DPI",
            output: "Digital"
        },

        logo: {
            name: "Logo",
            goal: "Brand Identity",
            ratio: "1:1",
            dpi: "Vector",
            output: "SVG / AI"
        },

        invitation: {
            name: "Invitation",
            goal: "Premium Invitation",
            ratio: "A5",
            dpi: "300 DPI",
            output: "Print Ready"
        },

        packaging: {
            name: "Packaging",
            goal: "Product Packaging",
            ratio: "Custom",
            dpi: "300 DPI",
            output: "Packaging Ready"
        }

    },

    // =========================================
    // STYLE
    // =========================================

    styles: {

        modern: {
            title: "Modern",
            description:
                "clean modern design, premium layout, bold typography"
        },

        luxury: {
            title: "Luxury",
            description:
                "gold accents, elegant typography, premium appearance"
        },

        minimal: {
            title: "Minimal",
            description:
                "minimalist composition, white space, clean layout"
        },

        futuristic: {
            title: "Futuristic",
            description:
                "cyberpunk interface, hologram effect, neon lighting"
        },

        cartoon3d: {
            title: "3D Cartoon",
            description:
                "Pixar quality, colorful, cute, soft lighting"
        },

        realistic: {
            title: "Photorealistic",
            description:
                "ultra realistic, DSLR photography, cinematic"
        }

    },

    // =========================================
    // INDUSTRY
    // =========================================

    industries: {

        food: {

            title: "Food & Beverage",

            palette: [
                "Red",
                "Orange",
                "Black"
            ],

            typography:
                "Bold Sans Serif",

            layout:
                "Hero Product Center",

            lighting:
                "Warm cinematic food lighting",

            composition:
                "Close-up food photography with steam effect"

        },

        wedding: {

            title: "Wedding",

            palette: [
                "White",
                "Gold",
                "Cream"
            ],

            typography:
                "Elegant Serif",

            layout:
                "Centered Elegant",

            lighting:
                "Soft romantic lighting",

            composition:
                "Luxury floral composition"

        },

        technology: {

            title: "Technology",

            palette: [
                "Blue",
                "Purple",
                "Black"
            ],

            typography:
                "Modern Sans Serif",

            layout:
                "Grid Layout",

            lighting:
                "Neon lighting",

            composition:
                "Futuristic interface"

        },

        education: {

            title: "Education",

            palette: [
                "Blue",
                "White",
                "Yellow"
            ],

            typography:
                "Friendly Sans Serif",

            layout:
                "Information Layout",

            lighting:
                "Natural lighting",

            composition:
                "Educational illustration"

        },

        corporate: {

            title: "Corporate",

            palette: [
                "Navy",
                "White",
                "Gray"
            ],

            typography:
                "Professional Sans Serif",

            layout:
                "Corporate Grid",

            lighting:
                "Studio lighting",

            composition:
                "Professional business style"

        }

    },

    // =========================================
    // CAMERA
    // =========================================

    camera: [

        "cinematic lighting",
        "HDR",
        "depth of field",
        "professional composition",
        "ultra realistic",
        "8K",
        "sharp focus",
        "DSLR quality",
        "soft shadow",
        "global illumination"

    ],

    // =========================================
    // PRINT
    // =========================================

    printing: [

        "300 DPI",
        "CMYK color",
        "Print Ready",
        "Ultra High Resolution"

    ],

    // =========================================
    // AI OPTIMIZATION
    // =========================================

    aiOptimization: [

        "Highly detailed",

        "Professional composition",

        "Award winning design",

        "Trending design",

        "Best quality",

        "Masterpiece"

    ],

    // =========================================
    // NEGATIVE PROMPT
    // =========================================

    negativePrompt: [

        "low quality",

        "low resolution",

        "blurry",

        "noise",

        "cropped",

        "duplicate",

        "bad anatomy",

        "watermark",

        "logo",

        "text error",

        "oversaturated",

        "distorted",

        "jpeg artifacts"

    ],

    // =========================================
    // QUALITY
    // =========================================

    qualityRules: {

        minLength: 30,

        medium: 80,

        good: 150,

        excellent: 250

    }

};
