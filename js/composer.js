/*
=========================================================
 PromptForge AI v5
 Smart Prompt Composer Engine
 Version : 5.0
=========================================================
*/

class PromptComposer {

    constructor() {

        this.version = "5.0";

        this.defaultData = {

            project: "",
            category: "",
            style: "",
            targetAI: "",
            canvas: "Auto",
            aspectRatio: "Auto",
            quality: "Professional",
            colors: "",
            objective: "",
            subject: "",
            lighting: "",
            camera: "",
            composition: "",
            typography: "",
            negativePrompt: "",
            extra: ""

        };

    }

    /* =====================================================
       MAIN
    ===================================================== */

    compose(userData = {}) {

        const data = this.normalize(userData);

        return {

            version: this.version,

            data,

            prompt: this.buildPrompt(data)

        };

    }

    /* =====================================================
       NORMALIZE INPUT
    ===================================================== */

    normalize(input = {}) {

        const result = {
            ...this.defaultData
        };

        Object.keys(result).forEach(key => {

            if (input[key] !== undefined &&
                input[key] !== null &&
                input[key] !== "") {

                result[key] = input[key];

            }

        });

        return result;

    }

    /* =====================================================
       BUILD PROMPT
    ===================================================== */

    buildPrompt(data) {

        const sections = [];

        sections.push(this.sectionProject(data));
        sections.push(this.sectionCategory(data));
        sections.push(this.sectionStyle(data));
        sections.push(this.sectionTarget(data));
        sections.push(this.sectionCanvas(data));
        sections.push(this.sectionObjective(data));

        return sections
            .filter(Boolean)
            .join("\n\n");

    }

    /* =====================================================
       SECTION
    ===================================================== */

    sectionProject(data) {

        return [
            "==================================================",
            "PROJECT",
            "",
            data.project || "Untitled Project"
        ].join("\n");

    }

    sectionCategory(data) {

        return [
            "==================================================",
            "CATEGORY",
            "",
            data.category || "General"
        ].join("\n");

    }

    sectionStyle(data) {

        return [
            "==================================================",
            "STYLE",
            "",
            data.style || "Professional"
        ].join("\n");

    }

    sectionTarget(data) {

        return [
            "==================================================",
            "TARGET AI",
            "",
            data.targetAI || "ChatGPT"
        ].join("\n");

    }

    sectionCanvas(data) {

        return [
            "==================================================",
            "CANVAS SIZE",
            "",
            data.canvas || "Auto",
            "",
            "ASPECT RATIO",
            "",
            data.aspectRatio || "Auto"
        ].join("\n");

    }

    sectionObjective(data) {

        return [
            "==================================================",
            "OBJECTIVE",
            "",
            data.objective || ""
        ].join("\n");

    }

}

/* =========================================================
   EXPORT
========================================================= */

window.PromptComposer = PromptComposer;
window.promptComposer = new PromptComposer();
