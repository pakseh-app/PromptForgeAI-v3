/* ==========================================================
   PROMPTFORGE AI
   SMART PROMPT COMPOSER
   File : composer.js
   Version : 5.0.0

   PART 1 / 6
========================================================== */

"use strict";

/* ==========================================================
   ENGINE INFO
========================================================== */

const PromptComposer = (function () {

    const VERSION = "5.0.0";



    /* ==========================================================
       DEFAULT STRATEGY
    ========================================================== */

    const DEFAULT_STRATEGY = {

        category: "General Design",

        objective: "Creative Design",

        style: "Modern",

        mood: "Professional",

        canvas: "Auto",

        color: "Auto",

        audience: "General Audience",

        typography: "Modern Sans Serif",

        composition: "Balanced",

        lighting: "Soft Studio",

        camera: "Eye Level",

        ai: "Universal",

        confidence: 0,

        decorations: [],

        effects: [],

        materials: [],

        keywords: [],

        negative: []

    };



    /* ==========================================================
       SAFE CLONE
    ========================================================== */

    function cloneStrategy() {

        return {

            ...DEFAULT_STRATEGY,

            decorations: [...DEFAULT_STRATEGY.decorations],

            effects: [...DEFAULT_STRATEGY.effects],

            materials: [...DEFAULT_STRATEGY.materials],

            keywords: [...DEFAULT_STRATEGY.keywords],

            negative: [...DEFAULT_STRATEGY.negative]

        };

    }



    /* ==========================================================
       NORMALIZE VALUE
    ========================================================== */

    function normalize(value) {

        if (value === undefined) return "";

        if (value === null) return "";

        return String(value).trim();

    }



    /* ==========================================================
       AUTO DETECT CHECK
    ========================================================== */

    function isAuto(value) {

        value = normalize(value);

        return (

            value === "" ||

            value === "Auto Detect"

        );

    }



    /* ==========================================================
       RESOLVE VALUE
    ========================================================== */

    function resolve(

        userValue,

        detectedValue,

        defaultValue

    ) {

        if (isAuto(userValue)) {

            if (

                detectedValue !== undefined &&

                detectedValue !== null &&

                detectedValue !== ""

            ) {

                return detectedValue;

            }

            return defaultValue;

        }

        return userValue;

    }



    /* ==========================================================
       CREATE BASE STRATEGY
    ========================================================== */

    function createBaseStrategy(

        input,

        detect

    ) {

        const strategy = cloneStrategy();



        strategy.category = resolve(

            input.category,

            detect.category,

            DEFAULT_STRATEGY.category

        );



        strategy.style = resolve(

            input.style,

            detect.style,

            DEFAULT_STRATEGY.style

        );



        strategy.canvas = resolve(

            input.size,

            detect.canvas,

            DEFAULT_STRATEGY.canvas

        );



        strategy.color = resolve(

            input.color,

            detect.color,

            DEFAULT_STRATEGY.color

        );



        strategy.audience =

            detect.audience ||

            DEFAULT_STRATEGY.audience;



        strategy.ai =

            input.ai ||

            DEFAULT_STRATEGY.ai;



        strategy.confidence =

            detect.confidence ||

            0;



        strategy.idea =

            normalize(input.idea);



        return strategy;

    }



    /* ==========================================================
       PLACEHOLDER ENGINE
       (akan diisi PART berikutnya)
    ========================================================== */

    function analyzeIntent(

        strategy,

        input,

        detect

    ) {

        return strategy;

    }



    function analyzeObjective(

        strategy,

        input,

        detect

    ) {

        return strategy;

    }



    function analyzeMood(

        strategy,

        input,

        detect

    ) {

        return strategy;

    }



    function analyzeComposition(

        strategy,

        input,

        detect

    ) {

        return strategy;

    }



    /* ==========================================================
       MAIN COMPOSER
    ========================================================== */

    function compose(

        input,

        detect

    ) {

        let strategy =

            createBaseStrategy(

                input,

                detect

            );



        strategy = analyzeIntent(

            strategy,

            input,

            detect

        );



        strategy = analyzeObjective(

            strategy,

            input,

            detect

        );



        strategy = analyzeMood(

            strategy,

            input,

            detect

        );



        strategy = analyzeComposition(

            strategy,

            input,

            detect

        );



        return strategy;

    }



    /* ==========================================================
       PUBLIC API
    ========================================================== */

    return {

        version: VERSION,

        compose: compose,

        resolve: resolve,

        defaults: cloneStrategy

    };

})();



/* ==========================================================
   GLOBAL
========================================================== */

window.PromptComposer = PromptComposer;



/* ==========================================================
   READY
========================================================== */

console.log(

    "%cPromptComposer v5 Loaded",

    "color:#06b6d4;font-weight:bold;"

);



/* ==========================================================
   END PART 1
========================================================== */
