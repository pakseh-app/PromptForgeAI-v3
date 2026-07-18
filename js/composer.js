/*!
 * ============================================================
 * PromptForge AI v5
 * Smart Prompt Composer Engine
 * ------------------------------------------------------------
 * File      : composer.js
 * Version   : 5.0.0
 * Part      : 1
 * ============================================================
 */

"use strict";

/* ============================================================
 * GLOBAL CONFIG
 * ============================================================
 */

const COMPOSER_VERSION = "5.0.0";

const DEFAULT_COMPOSER_CONFIG = {

    aiTarget: "chatgpt",

    language: "auto",

    quality: "high",

    creativity: 70,

    temperature: 0.7,

    maxLength: 4000,

    optimize: true,

    removeDuplicate: true,

    cleanWhitespace: true,

    includeRole: true,

    includeContext: true,

    includeInstruction: true,

    includeStyle: true,

    includeNegative: true,

    includeOutput: true,

    debug: false

};

/* ============================================================
 * DEFAULT STATE
 * ============================================================
 */

const DEFAULT_STATE = {

    project: "",

    category: "",

    objective: "",

    role: "",

    context: "",

    instruction: "",

    style: "",

    negative: "",

    output: "",

    language: "",

    quality: "",

    aiTarget: "",

    variables: {},

    metadata: {}

};

/* ============================================================
 * UTILITIES
 * ============================================================
 */

class ComposerUtils {

    static clone(obj){

        return JSON.parse(JSON.stringify(obj));

    }

    static merge(a={}, b={}){

        return {

            ...a,

            ...b

        };

    }

    static clean(text){

        if(text===undefined || text===null){

            return "";

        }

        return String(text)

            .replace(/\r/g,"")

            .replace(/\n{3,}/g,"\n\n")

            .replace(/[ \t]{2,}/g," ")

            .trim();

    }

    static isEmpty(value){

        return (

            value===undefined ||

            value===null ||

            value===""

        );

    }

    static capitalize(text=""){

        if(!text.length){

            return "";

        }

        return text.charAt(0).toUpperCase()+text.slice(1);

    }

    static unique(list=[]){

        return [...new Set(list)];

    }

}

/* ============================================================
 * STATE MANAGER
 * ============================================================
 */

class ComposerState{

    constructor(){

        this.reset();

    }

    reset(){

        this.data = ComposerUtils.clone(

            DEFAULT_STATE

        );

    }

    update(obj={}){

        this.data={

            ...this.data,

            ...obj

        };

    }

    set(key,value){

        this.data[key]=value;

    }

    get(key){

        return this.data[key];

    }

    export(){

        return ComposerUtils.clone(

            this.data

        );

    }

}

/* ============================================================
 * MAIN CLASS
 * ============================================================
 */

class PromptComposer{

    constructor(config={}){

        this.version = COMPOSER_VERSION;

        this.config = ComposerUtils.merge(

            DEFAULT_COMPOSER_CONFIG,

            config

        );

        this.state = new ComposerState();

    }

    configure(config={}){

        this.config = ComposerUtils.merge(

            this.config,

            config

        );

        return this;

    }

    reset(){

        this.state.reset();

        return this;

    }

    setData(data={}){

        this.state.update(data);

        return this;

    }

    getData(){

        return this.state.export();

    }

    compose(){

        throw new Error(

            "compose() belum tersedia. Lanjut Part 2."

        );

    }

}

/* ============================================================
 * PART 2
 * VARIABLE RESOLVER
 * ============================================================
 */

class VariableResolver{

    constructor(data={}){

        this.data = data;

    }


    resolve(text=""){

        if(!text){

            return "";

        }


        return String(text).replace(

            /\{\{(.*?)\}\}/g,

            (match,key)=>{


                key = key.trim();


                if(

                    this.data[key]===undefined

                ){

                    return match;

                }


                return this.data[key];


            }

        );


    }


}


/* ============================================================
 * PROMPT SECTION
 * ============================================================
 */

class PromptSection{


    constructor(name,value){

        this.name = name;

        this.value = value;

    }


    render(){

        if(

            ComposerUtils.isEmpty(this.value)

        ){

            return "";

        }


        return ComposerUtils.clean(

            this.value

        );


    }


}


/* ============================================================
 * PROMPT BUILDER
 * ============================================================
 */

class PromptBuilder{


    constructor(config={}){

        this.config = config;

        this.sections=[];

    }


    add(name,value){


        const section = new PromptSection(

            name,

            value

        );


        const result = section.render();


        if(result){

            this.sections.push(

                result

            );

        }


        return this;


    }


    build(){


        return this.sections

            .join("\n\n")

            .trim();


    }


    count(){

        return this.sections.length;

    }


    clear(){

        this.sections=[];

        return this;

    }


}


/* ============================================================
 * COMPOSE ENGINE
 * ============================================================
 */

PromptComposer.prototype.compose = function(){


    const data = this.state.export();


    const builder = new PromptBuilder(

        this.config

    );


    const resolver = new VariableResolver(

        data.variables

    );



    if(

        this.config.includeRole

    ){

        builder.add(

            "ROLE",

            resolver.resolve(

                data.role

            )

        );

    }



    if(

        this.config.includeContext

    ){

        builder.add(

            "CONTEXT",

            resolver.resolve(

                data.context

            )

        );

    }



    if(

        this.config.includeInstruction

    ){

        builder.add(

            "INSTRUCTION",

            resolver.resolve(

                data.instruction

            )

        );

    }



    if(

        this.config.includeStyle

    ){

        builder.add(

            "STYLE",

            resolver.resolve(

                data.style

            )

        );

    }



    if(

        this.config.includeNegative

    ){

        builder.add(

            "NEGATIVE",

            resolver.resolve(

                data.negative

            )

        );

    }



    if(

        this.config.includeOutput

    ){

        builder.add(

            "OUTPUT",

            resolver.resolve(

                data.output

            )

        );

    }



    let result = builder.build();



    if(

        this.config.cleanWhitespace

    ){

        result = ComposerUtils.clean(

            result

        );

    }



    return result;


};



/* ============================================================
 * QUICK SETTER API
 * ============================================================
 */


PromptComposer.prototype.setRole=function(text){


    this.state.set(

        "role",

        text

    );


    return this;


};



PromptComposer.prototype.setContext=function(text){


    this.state.set(

        "context",

        text

    );


    return this;


};



PromptComposer.prototype.setInstruction=function(text){


    this.state.set(

        "instruction",

        text

    );


    return this;


};



PromptComposer.prototype.setStyle=function(text){


    this.state.set(

        "style",

        text

    );


    return this;


};



PromptComposer.prototype.setNegative=function(text){


    this.state.set(

        "negative",

        text

    );


    return this;


};



PromptComposer.prototype.setOutput=function(text){


    this.state.set(

        "output",

        text

    );


    return this;


};

/* ============================================================
 * PART 3
 * PROMPT BLUEPRINT ENGINE
 * ============================================================
 */


/* ============================================================
 * CATEGORY ENGINE
 * ============================================================
 */

class CategoryEngine{


    constructor(){

        this.categories = [

            "General Design",

            "Poster",

            "Banner",

            "Logo",

            "Packaging",

            "Sticker",

            "Social Media",

            "Product Design",

            "Photography",

            "Illustration",

            "Character Design",

            "UI Design",

            "Architecture",

            "Video",

            "Animation"

        ];

    }



    exists(category=""){


        return this.categories.includes(

            category

        );


    }



    add(category){


        if(

            !this.exists(category)

        ){

            this.categories.push(

                category

            );

        }


        return this;


    }



    getAll(){


        return [

            ...this.categories

        ];


    }


}



/* ============================================================
 * OBJECTIVE BUILDER
 * ============================================================
 */

class ObjectiveBuilder{


    constructor(){

        this.objectives=[];

    }



    add(text){


        if(text){

            this.objectives.push(

                text

            );

        }


        return this;


    }



    build(){


        return this.objectives

            .join(". ")

            .trim();


    }



    clear(){


        this.objectives=[];


        return this;


    }


}



/* ============================================================
 * CONSTRAINT ENGINE
 * ============================================================
 */

class ConstraintEngine{


    constructor(){

        this.constraints=[];

    }



    add(rule){


        if(rule){

            this.constraints.push(

                rule

            );

        }


        return this;


    }



    remove(rule){


        this.constraints = this.constraints.filter(

            item=>item!==rule

        );


        return this;


    }



    build(){


        if(

            !this.constraints.length

        ){

            return "";

        }



        return this.constraints

            .map(

                item=>"- "+item

            )

            .join("\n");


    }



}



/* ============================================================
 * METADATA PROCESSOR
 * ============================================================
 */

class MetadataProcessor{


    constructor(data={}){

        this.data=data;

    }



    set(key,value){


        this.data[key]=value;


        return this;


    }



    get(key){


        return this.data[key];


    }



    all(){


        return ComposerUtils.clone(

            this.data

        );


    }



    merge(obj={}){


        this.data={

            ...this.data,

            ...obj

        };


        return this;


    }


}



/* ============================================================
 * PROJECT BLUEPRINT
 * ============================================================
 */

class ProjectBlueprint{


    constructor(){


        this.data={

            project:"",

            category:"",

            objective:"",

            constraints:[],

            metadata:{}

        };


    }



    setProject(name){


        this.data.project=name;


        return this;


    }



    setCategory(category){


        this.data.category=category;


        return this;


    }



    setObjective(objective){


        this.data.objective=objective;


        return this;


    }



    addConstraint(rule){


        this.data.constraints.push(

            rule

        );


        return this;


    }



    export(){


        return ComposerUtils.clone(

            this.data

        );


    }


}



/* ============================================================
 * ATTACH BLUEPRINT TO COMPOSER
 * ============================================================
 */


PromptComposer.prototype.setProject=function(name){


    this.state.set(

        "project",

        name

    );


    return this;


};



PromptComposer.prototype.setCategory=function(category){


    this.state.set(

        "category",

        category

    );


    return this;


};



PromptComposer.prototype.setObjective=function(objective){


    this.state.set(

        "objective",

        objective

    );


    return this;


};



PromptComposer.prototype.addConstraint=function(rule){


    let current = this.state.get(

        "constraints"

    ) || [];



    current.push(

        rule

    );



    this.state.set(

        "constraints",

        current

    );



    return this;


};

/* ============================================================
 * PART 4
 * VISUAL COMPOSITION ENGINE
 * ============================================================
 */


/* ============================================================
 * STYLE ENGINE
 * ============================================================
 */

class StyleEngine{


    constructor(){


        this.styles = [];


    }



    add(style){


        if(style){


            this.styles.push(style);


        }


        return this;


    }



    remove(style){


        this.styles = this.styles.filter(

            item => item !== style

        );


        return this;


    }



    build(){


        return ComposerUtils.unique(

            this.styles

        )

        .join(", ");


    }



    clear(){


        this.styles=[];


        return this;


    }


}



/* ============================================================
 * VISUAL DIRECTION BUILDER
 * ============================================================
 */

class VisualDirectionBuilder{


    constructor(){


        this.elements={

            subject:"",

            environment:"",

            composition:"",

            mood:"",

            details:""

        };


    }



    setSubject(value){


        this.elements.subject=value;


        return this;


    }



    setEnvironment(value){


        this.elements.environment=value;


        return this;


    }



    setComposition(value){


        this.elements.composition=value;


        return this;


    }



    setMood(value){


        this.elements.mood=value;


        return this;


    }



    setDetails(value){


        this.elements.details=value;


        return this;


    }



    build(){


        return Object.values(

            this.elements

        )

        .filter(Boolean)

        .join(", ");


    }


}



/* ============================================================
 * CAMERA ENGINE
 * ============================================================
 */

class CameraEngine{


    constructor(){


        this.camera={

            shot:"",

            angle:"",

            lens:"",

            movement:"",

            perspective:""

        };


    }



    setShot(value){


        this.camera.shot=value;


        return this;


    }



    setAngle(value){


        this.camera.angle=value;


        return this;


    }



    setLens(value){


        this.camera.lens=value;


        return this;


    }



    setMovement(value){


        this.camera.movement=value;


        return this;


    }



    setPerspective(value){


        this.camera.perspective=value;


        return this;


    }



    build(){


        return Object.values(

            this.camera

        )

        .filter(Boolean)

        .join(", ");


    }


}



/* ============================================================
 * LIGHTING ENGINE
 * ============================================================
 */

class LightingEngine{


    constructor(){


        this.lighting=[];


    }



    add(value){


        if(value){


            this.lighting.push(value);


        }


        return this;


    }



    build(){


        return ComposerUtils.unique(

            this.lighting

        )

        .join(", ");


    }


}



/* ============================================================
 * COLOR PALETTE ENGINE
 * ============================================================
 */

class ColorPaletteEngine{


    constructor(){


        this.colors=[];


    }



    add(color){


        if(color){


            this.colors.push(color);


        }


        return this;


    }



    remove(color){


        this.colors=this.colors.filter(

            item=>item!==color

        );


        return this;


    }



    build(){


        return ComposerUtils.unique(

            this.colors

        )

        .join(", ");


    }



    clear(){


        this.colors=[];


        return this;


    }


}



/* ============================================================
 * CONNECT VISUAL ENGINE TO COMPOSER
 * ============================================================
 */


PromptComposer.prototype.setVisualStyle=function(value){


    this.state.set(

        "style",

        value

    );


    return this;


};



PromptComposer.prototype.setCamera=function(value){


    this.state.set(

        "camera",

        value

    );


    return this;


};



PromptComposer.prototype.setLighting=function(value){


    this.state.set(

        "lighting",

        value

    );


    return this;


};



PromptComposer.prototype.setColors=function(value){


    this.state.set(

        "colors",

        value

    );


    return this;


};

/* ============================================================
 * PART 5
 * DESIGN STRUCTURE ENGINE
 * ============================================================
 */


/* ============================================================
 * TYPOGRAPHY ENGINE
 * ============================================================
 */

class TypographyEngine{


    constructor(){


        this.typography={

            fontFamily:"",

            fontStyle:"",

            fontWeight:"",

            textEffect:"",

            hierarchy:""


        };


    }



    setFont(value){


        this.typography.fontFamily=value;


        return this;


    }



    setStyle(value){


        this.typography.fontStyle=value;


        return this;


    }



    setWeight(value){


        this.typography.fontWeight=value;


        return this;


    }



    setEffect(value){


        this.typography.textEffect=value;


        return this;


    }



    setHierarchy(value){


        this.typography.hierarchy=value;


        return this;


    }



    build(){


        return Object.values(

            this.typography

        )

        .filter(Boolean)

        .join(", ");


    }


}



/* ============================================================
 * COMPOSITION ENGINE
 * ============================================================
 */

class CompositionEngine{


    constructor(){


        this.composition={

            layout:"",

            balance:"",

            spacing:"",

            alignment:"",

            focus:""


        };


    }



    setLayout(value){


        this.composition.layout=value;


        return this;


    }



    setBalance(value){


        this.composition.balance=value;


        return this;


    }



    setSpacing(value){


        this.composition.spacing=value;


        return this;


    }



    setAlignment(value){


        this.composition.alignment=value;


        return this;


    }



    setFocus(value){


        this.composition.focus=value;


        return this;


    }



    build(){


        return Object.values(

            this.composition

        )

        .filter(Boolean)

        .join(", ");


    }


}



/* ============================================================
 * LAYOUT BUILDER
 * ============================================================
 */

class LayoutBuilder{


    constructor(){


        this.items=[];


    }



    add(element,position=""){


        this.items.push({

            element,

            position

        });


        return this;


    }



    remove(element){


        this.items=this.items.filter(

            item=>item.element!==element

        );


        return this;


    }



    build(){


        return this.items

        .map(

            item=>{

                if(item.position){

                    return `${item.element} at ${item.position}`;

                }


                return item.element;


            }

        )

        .join(", ");


    }



}



/* ============================================================
 * DESIGN RULE ENGINE
 * ============================================================
 */

class DesignRuleEngine{


    constructor(){


        this.rules=[];


    }



    add(rule){


        if(rule){


            this.rules.push(rule);


        }


        return this;


    }



    addMultiple(list=[]){


        this.rules.push(

            ...list

        );


        return this;


    }



    clear(){


        this.rules=[];


        return this;


    }



    build(){


        if(!this.rules.length){

            return "";

        }



        return this.rules

        .map(

            rule=>"- "+rule

        )

        .join("\n");


    }



}



/* ============================================================
 * CONNECT DESIGN ENGINE TO COMPOSER
 * ============================================================
 */


PromptComposer.prototype.setTypography=function(value){


    this.state.set(

        "typography",

        value

    );


    return this;


};



PromptComposer.prototype.setComposition=function(value){


    this.state.set(

        "composition",

        value

    );


    return this;


};



PromptComposer.prototype.setLayout=function(value){


    this.state.set(

        "layout",

        value

    );


    return this;


};



PromptComposer.prototype.setDesignRules=function(value){


    this.state.set(

        "designRules",

        value

    );


    return this;


};

/* ============================================================
 * PART 6
 * ADVANCED PROMPT LAYER ENGINE
 * ============================================================
 */


/* ============================================================
 * PROMPT LAYER
 * ============================================================
 */

class PromptLayer{


    constructor(name,content="",priority=0){


        this.name=name;

        this.content=content;

        this.priority=priority;


    }



    setContent(value){


        this.content=value;


        return this;


    }



    setPriority(value){


        this.priority=value;


        return this;


    }



    build(){


        return {

            name:this.name,

            content:this.content,

            priority:this.priority


        };


    }


}



/* ============================================================
 * LAYER MANAGER
 * ============================================================
 */

class LayerManager{


    constructor(){


        this.layers=[];


    }



    add(layer){


        if(layer instanceof PromptLayer){


            this.layers.push(layer);


        }


        return this;


    }



    remove(name){


        this.layers=this.layers.filter(

            layer=>layer.name!==name

        );


        return this;


    }



    sort(){


        this.layers.sort(

            (a,b)=>b.priority-a.priority

        );


        return this;


    }



    build(){


        this.sort();


        return this.layers

        .map(

            layer=>layer.content

        )

        .filter(Boolean)

        .join("\n\n");


    }



    clear(){


        this.layers=[];


        return this;


    }


}



/* ============================================================
 * INSTRUCTION LAYER
 * ============================================================
 */

class InstructionLayer extends PromptLayer{


    constructor(content=""){


        super(

            "instruction",

            content,

            100

        );


    }


}



/* ============================================================
 * CONTEXT LAYER
 * ============================================================
 */

class ContextLayer extends PromptLayer{


    constructor(content=""){


        super(

            "context",

            content,

            90

        );


    }


}



/* ============================================================
 * DETAIL LAYER
 * ============================================================
 */

class DetailLayer extends PromptLayer{


    constructor(content=""){


        super(

            "detail",

            content,

            80

        );


    }


}



/* ============================================================
 * ENHANCEMENT LAYER
 * ============================================================
 */

class EnhancementLayer extends PromptLayer{


    constructor(content=""){


        super(

            "enhancement",

            content,

            70

        );


    }


}



/* ============================================================
 * QUALITY BOOST LAYER
 * ============================================================
 */

class QualityLayer extends PromptLayer{


    constructor(content=""){


        super(

            "quality",

            content,

            60

        );


    }


}



/* ============================================================
 * CONNECT LAYER SYSTEM
 * ============================================================
 */


PromptComposer.prototype.layers = function(){


    if(!this._layerManager){


        this._layerManager = new LayerManager();


    }


    return this._layerManager;


};



PromptComposer.prototype.addLayer=function(

    name,

    content,

    priority=50

){


    const layer = new PromptLayer(

        name,

        content,

        priority

    );


    this.layers().add(

        layer

    );


    return this;


};



PromptComposer.prototype.buildLayers=function(){


    return this.layers()

    .build();


};



/* ============================================================
 * ADVANCED SECTION SETTER
 * ============================================================
 */


PromptComposer.prototype.addInstruction=function(text){


    this.layers()

    .add(

        new InstructionLayer(text)

    );


    return this;


};



PromptComposer.prototype.addContext=function(text){


    this.layers()

    .add(

        new ContextLayer(text)

    );


    return this;


};



PromptComposer.prototype.addDetail=function(text){


    this.layers()

    .add(

        new DetailLayer(text)

    );


    return this;


};



PromptComposer.prototype.addEnhancement=function(text){


    this.layers()

    .add(

        new EnhancementLayer(text)

    );


    return this;


};



PromptComposer.prototype.addQuality=function(text){


    this.layers()

    .add(

        new QualityLayer(text)

    );


    return this;


};

/* ============================================================
 * PART 7
 * PROMPT INTELLIGENCE ENGINE
 * ============================================================
 */


/* ============================================================
 * KEYWORD EXTRACTOR
 * ============================================================
 */

class KeywordExtractor{


    constructor(){

        this.stopWords=[

            "dan",
            "atau",
            "yang",
            "untuk",
            "dengan",
            "dari",
            "ke",
            "di",
            "ini",
            "itu"

        ];

    }



    extract(text=""){


        if(!text){

            return [];

        }



        let words = text

            .toLowerCase()

            .replace(

                /[^a-zA-Z0-9\s]/g,

                ""

            )

            .split(/\s+/);



        words = words.filter(

            word =>

            word &&

            !this.stopWords.includes(word)

        );



        return ComposerUtils.unique(

            words

        );


    }


}



/* ============================================================
 * INTENT DETECTOR
 * ============================================================
 */

class IntentDetector{


    constructor(){


        this.patterns={


            design:[

                "poster",
                "banner",
                "logo",
                "sticker",
                "packaging",
                "design"

            ],


            image:[

                "gambar",
                "foto",
                "illustration",
                "image",
                "render"

            ],


            video:[

                "video",
                "animation",
                "motion",
                "cinematic"

            ],


            writing:[

                "artikel",
                "cerita",
                "script",
                "caption"

            ]

        };


    }



    detect(text=""){


        const input=text.toLowerCase();



        let result=[];



        Object.keys(this.patterns)

        .forEach(category=>{


            this.patterns[category]

            .forEach(keyword=>{


                if(

                    input.includes(keyword)

                ){

                    result.push(category);

                }


            });


        });



        return ComposerUtils.unique(

            result

        );


    }


}



/* ============================================================
 * PROMPT ANALYZER
 * ============================================================
 */

class PromptAnalyzer{


    constructor(){


        this.keywordExtractor =

            new KeywordExtractor();



        this.intentDetector =

            new IntentDetector();


    }



    analyze(text=""){


        return {


            length:text.length,


            keywords:

                this.keywordExtractor.extract(text),



            intent:

                this.intentDetector.detect(text),



            quality:

                this.score(text)


        };


    }



    score(text=""){


        let score=0;



        if(text.length>50){

            score+=20;

        }



        if(text.includes("style")){

            score+=20;

        }



        if(text.includes("quality")){

            score+=20;

        }



        if(text.includes("detail")){

            score+=20;

        }



        if(text.includes("format")){

            score+=20;

        }



        return score;


    }


}



/* ============================================================
 * MISSING INFORMATION DETECTOR
 * ============================================================
 */

class MissingInformationDetector{


    constructor(){


        this.required=[

            "project",

            "objective",

            "style",

            "output"

        ];


    }



    check(data={}){


        let missing=[];



        this.required.forEach(

            field=>{


                if(

                    ComposerUtils.isEmpty(

                        data[field]

                    )

                ){

                    missing.push(field);

                }


            }

        );



        return missing;


    }


}



/* ============================================================
 * PROMPT SUGGESTION ENGINE
 * ============================================================
 */

class PromptSuggestionEngine{


    suggest(missing=[]){


        let suggestions=[];



        missing.forEach(field=>{


            switch(field){


                case "project":

                    suggestions.push(

                        "Tambahkan nama proyek"

                    );

                break;



                case "objective":

                    suggestions.push(

                        "Jelaskan tujuan utama"

                    );

                break;



                case "style":

                    suggestions.push(

                        "Tambahkan style visual"

                    );

                break;



                case "output":

                    suggestions.push(

                        "Tentukan format output"

                    );

                break;



            }


        });



        return suggestions;


    }


}



/* ============================================================
 * CONNECT INTELLIGENCE ENGINE
 * ============================================================
 */


PromptComposer.prototype.analyze=function(){


    const prompt=this.compose();



    const analyzer=new PromptAnalyzer();



    return analyzer.analyze(

        prompt

    );


};



PromptComposer.prototype.checkMissing=function(){


    const detector =

        new MissingInformationDetector();



    return detector.check(

        this.state.export()

    );


};



PromptComposer.prototype.getSuggestions=function(){


    const missing =

        this.checkMissing();



    const engine =

        new PromptSuggestionEngine();



    return engine.suggest(

        missing

    );


};

/* ============================================================
 * PART 8
 * PROMPT OPTIMIZATION ENGINE
 * ============================================================
 */


/* ============================================================
 * DUPLICATE CLEANER
 * ============================================================
 */

class DuplicateCleaner{


    clean(text=""){


        if(!text){

            return "";

        }



        let words=text.split(/\s+/);



        let result=[];



        words.forEach(word=>{


            if(

                !result.includes(word)

            ){

                result.push(word);

            }


        });



        return result.join(" ");


    }


}



/* ============================================================
 * WORD OPTIMIZER
 * ============================================================
 */

class WordOptimizer{


    constructor(){


        this.dictionary={


            "bagus":

            "high quality",


            "keren":

            "premium professional",


            "indah":

            "visually stunning",


            "detail":

            "highly detailed",


            "realistis":

            "photorealistic",


            "modern":

            "modern contemporary"


        };


    }



    optimize(text=""){


        if(!text){

            return "";

        }



        let result=text;



        Object.keys(

            this.dictionary

        )

        .forEach(word=>{


            let replacement =

                this.dictionary[word];



            result=result.replace(

                new RegExp(

                    word,

                    "gi"

                ),

                replacement

            );


        });



        return result;


    }


}



/* ============================================================
 * SENTENCE ENHANCER
 * ============================================================
 */

class SentenceEnhancer{


    enhance(text=""){


        if(!text){

            return "";

        }



        let enhancements=[

            "professional quality",

            "high attention to detail",

            "visually appealing",

            "optimized composition",

            "premium result"

        ];



        let addition =

            enhancements.join(", ");



        return `${text}, ${addition}`;


    }


}



/* ============================================================
 * PROMPT COMPRESSOR
 * ============================================================
 */

class PromptCompressor{


    compress(text=""){


        if(!text){

            return "";

        }



        return text

        .replace(

            /\s+/g,

            " "

        )

        .trim();


    }



}



/* ============================================================
 * OPTIMIZATION PIPELINE
 * ============================================================
 */

class PromptOptimizer{


    constructor(){


        this.cleaner =

            new DuplicateCleaner();



        this.wordOptimizer =

            new WordOptimizer();



        this.enhancer =

            new SentenceEnhancer();



        this.compressor =

            new PromptCompressor();


    }



    optimize(text="",config={}){


        let result=text;



        if(

            config.removeDuplicate!==false

        ){

            result=this.cleaner.clean(

                result

            );

        }



        result=this.wordOptimizer.optimize(

            result

        );



        if(

            config.enhance

        ){

            result=this.enhancer.enhance(

                result

            );

        }



        result=this.compressor.compress(

            result

        );



        return result;


    }


}



/* ============================================================
 * CONNECT OPTIMIZER TO COMPOSER
 * ============================================================
 */


PromptComposer.prototype.optimize=function(options={}){


    const optimizer =

        new PromptOptimizer();



    return optimizer.optimize(

        this.compose(),

        {

            ...this.config,

            ...options

        }

    );


};



PromptComposer.prototype.generateOptimized=function(){


    return this.optimize({

        enhance:true

    });


};

/* ============================================================
 * PART 9
 * AI TARGET FORMATTER ENGINE
 * ============================================================
 */


/* ============================================================
 * BASE AI FORMATTER
 * ============================================================
 */

class AIFormatter{


    constructor(target="generic"){


        this.target = target;


    }



    format(prompt=""){


        return prompt;


    }


}



/* ============================================================
 * CHATGPT FORMATTER
 * ============================================================
 */

class ChatGPTFormatter extends AIFormatter{


    constructor(){

        super("chatgpt");

    }



    format(prompt=""){


        return [

            "Create the following:",

            "",

            prompt,

            "",

            "Provide a professional and detailed result."

        ]

        .join("\n");


    }


}



/* ============================================================
 * MIDJOURNEY FORMATTER
 * ============================================================
 */

class MidjourneyFormatter extends AIFormatter{


    constructor(){

        super("midjourney");

    }



    format(prompt=""){


        return `${prompt}

--v 7
--style raw
--quality 2
--detail high`;


    }


}



/* ============================================================
 * LEONARDO FORMATTER
 * ============================================================
 */

class LeonardoFormatter extends AIFormatter{


    constructor(){

        super("leonardo");

    }



    format(prompt=""){


        return [

            prompt,

            "",

            "Ultra detailed",

            "high quality rendering",

            "professional lighting",

            "cinematic composition"

        ]

        .join(", ");


    }


}



/* ============================================================
 * STABLE DIFFUSION FORMATTER
 * ============================================================
 */

class StableDiffusionFormatter extends AIFormatter{


    constructor(){

        super("stable-diffusion");

    }



    format(prompt=""){


        return {

            positive:prompt,

            negative:

            "low quality, blurry, bad anatomy, distorted, watermark"


        };


    }


}



/* ============================================================
 * FLUX FORMATTER
 * ============================================================
 */

class FluxFormatter extends AIFormatter{


    constructor(){

        super("flux");

    }



    format(prompt=""){


        return [

            prompt,

            "photorealistic",

            "high resolution",

            "natural details",

            "professional photography"

        ]

        .join(", ");


    }


}



/* ============================================================
 * DALLE FORMATTER
 * ============================================================
 */

class DalleFormatter extends AIFormatter{


    constructor(){

        super("dalle");

    }



    format(prompt=""){


        return [

            "Generate an image:",

            prompt,

            "Ensure accurate details and composition."

        ]

        .join("\n");


    }


}



/* ============================================================
 * VIDEO AI FORMATTER
 * ============================================================
 */

class VideoAIFormatter extends AIFormatter{


    constructor(){

        super("video");

    }



    format(prompt=""){


        return [

            prompt,

            "",

            "cinematic camera movement",

            "smooth motion",

            "realistic animation",

            "professional film quality"

        ]

        .join(", ");


    }


}



/* ============================================================
 * FORMATTER FACTORY
 * ============================================================
 */

class FormatterFactory{


    static create(target="generic"){



        switch(

            target.toLowerCase()

        ){


            case "chatgpt":

                return new ChatGPTFormatter();



            case "midjourney":

                return new MidjourneyFormatter();



            case "leonardo":

                return new LeonardoFormatter();



            case "stable-diffusion":

                return new StableDiffusionFormatter();



            case "flux":

                return new FluxFormatter();



            case "dalle":

            case "dall-e":

                return new DalleFormatter();



            case "veo":

            case "runway":

            case "kling":

                return new VideoAIFormatter();



            default:

                return new AIFormatter();


        }


    }


}



/* ============================================================
 * CONNECT FORMATTER TO COMPOSER
 * ============================================================
 */


PromptComposer.prototype.formatFor=function(target=""){


    const formatter =

        FormatterFactory.create(

            target || this.config.aiTarget

        );



    return formatter.format(

        this.compose()

    );


};



PromptComposer.prototype.setAITarget=function(target){


    this.config.aiTarget=target;


    this.state.set(

        "aiTarget",

        target

    );


    return this;


};

/* ============================================================
 * PART 10
 * PROMPT VALIDATION ENGINE
 * ============================================================
 */


/* ============================================================
 * VALIDATION RULE
 * ============================================================
 */

class ValidationRule{


    constructor(name,check,message){


        this.name=name;

        this.check=check;

        this.message=message;


    }



    run(value){


        return this.check(value);


    }


}



/* ============================================================
 * PROMPT VALIDATOR
 * ============================================================
 */

class PromptValidator{


    constructor(){


        this.rules=[

            new ValidationRule(

                "empty",

                text=>text.length>0,

                "Prompt masih kosong"

            ),



            new ValidationRule(

                "length",

                text=>text.length>=50,

                "Prompt terlalu pendek"

            ),



            new ValidationRule(

                "style",

                text=>

                /style|visual|design|cinematic/i

                .test(text),

                "Style belum ditentukan"

            ),



            new ValidationRule(

                "detail",

                text=>

                text.split(" ").length>10,

                "Detail prompt kurang"

            )

        ];


    }



    validate(prompt=""){


        let result={

            valid:true,

            errors:[]

        };



        this.rules.forEach(rule=>{


            if(

                !rule.run(prompt)

            ){

                result.valid=false;


                result.errors.push(

                    rule.message

                );

            }


        });



        return result;


    }


}



/* ============================================================
 * ERROR DETECTOR
 * ============================================================
 */

class PromptErrorDetector{


    detect(prompt=""){


        let errors=[];



        if(!prompt){

            errors.push(

                "Prompt kosong"

            );

        }



        if(

            prompt.length < 30

        ){

            errors.push(

                "Prompt terlalu singkat"

            );

        }



        if(

            !/[a-zA-Z]/.test(prompt)

        ){

            errors.push(

                "Tidak ditemukan deskripsi"

            );

        }



        return errors;


    }


}



/* ============================================================
 * ADVANCED QUALITY SCORER
 * ============================================================
 */

class QualityScoreEngine{


    calculate(prompt=""){


        let score=0;



        const words =

            prompt.split(/\s+/);



        if(words.length>15){

            score+=20;

        }



        if(

            /style/i.test(prompt)

        ){

            score+=15;

        }



        if(

            /detail|detailed/i.test(prompt)

        ){

            score+=15;

        }



        if(

            /lighting|camera|composition/i.test(prompt)

        ){

            score+=20;

        }



        if(

            /quality|professional|premium/i.test(prompt)

        ){

            score+=20;

        }



        if(

            score>100

        ){

            score=100;

        }



        return score;


    }


}



/* ============================================================
 * PROMPT HEALTH CHECK
 * ============================================================
 */

class PromptHealthCheck{


    constructor(){


        this.validator =

            new PromptValidator();



        this.errorDetector =

            new PromptErrorDetector();



        this.scorer =

            new QualityScoreEngine();


    }



    check(prompt=""){


        return {


            validation:

                this.validator.validate(

                    prompt

                ),



            errors:

                this.errorDetector.detect(

                    prompt

                ),



            score:

                this.scorer.calculate(

                    prompt

                )


        };


    }


}



/* ============================================================
 * AUTO FIX SUGGESTION
 * ============================================================
 */

class AutoFixSuggestion{


    generate(report={}){


        let suggestions=[];



        if(

            report.score < 50

        ){

            suggestions.push(

                "Tambahkan detail visual dan tujuan"

            );

        }



        if(

            report.errors.length

        ){

            suggestions.push(

                "Lengkapi informasi prompt"

            );

        }



        if(

            report.validation.errors.length

        ){

            suggestions.push(

                ...report.validation.errors

            );

        }



        return ComposerUtils.unique(

            suggestions

        );


    }


}



/* ============================================================
 * CONNECT VALIDATION TO COMPOSER
 * ============================================================
 */


PromptComposer.prototype.health=function(){


    const checker =

        new PromptHealthCheck();



    return checker.check(

        this.compose()

    );


};



PromptComposer.prototype.fixSuggestion=function(){


    const report=this.health();



    const fixer=

        new AutoFixSuggestion();



    return fixer.generate(

        report

    );


};

/* ============================================================
 * PART 11
 * PROMPT MEMORY & PRESET SYSTEM
 * ============================================================
 */


/* ============================================================
 * MEMORY STORAGE
 * ============================================================
 */

class PromptMemory{


    constructor(){


        this.storage=[];


    }



    save(name,data={}){


        this.storage.push({

            id:Date.now(),

            name:name,

            data:ComposerUtils.clone(data),

            created:new Date().toISOString()

        });


        return this;


    }



    get(name){


        return this.storage.find(

            item=>item.name===name

        );


    }



    getAll(){


        return ComposerUtils.clone(

            this.storage

        );


    }



    remove(name){


        this.storage = this.storage.filter(

            item=>item.name!==name

        );


        return this;


    }



    clear(){


        this.storage=[];


        return this;


    }


}



/* ============================================================
 * PRESET MANAGER
 * ============================================================
 */

class PresetManager{


    constructor(){


        this.presets={};


    }



    create(name,config={}){


        this.presets[name]={

            name:name,

            config:

                ComposerUtils.clone(config)

        };


        return this;


    }



    load(name){


        return this.presets[name] || null;


    }



    remove(name){


        delete this.presets[name];


        return this;


    }



    list(){


        return Object.keys(

            this.presets

        );


    }


}



/* ============================================================
 * SAVED CONFIGURATION
 * ============================================================
 */

class ConfigurationStorage{


    constructor(){


        this.configs=[];


    }



    save(name,config){


        this.configs.push({

            name:name,

            config:

                ComposerUtils.clone(config)

        });


        return this;


    }



    find(name){


        return this.configs.find(

            item=>item.name===name

        );


    }



    all(){


        return ComposerUtils.clone(

            this.configs

        );


    }


}



/* ============================================================
 * REUSABLE COMPONENT
 * ============================================================
 */

class PromptComponent{


    constructor(name,value){


        this.name=name;

        this.value=value;


    }



    render(){


        return this.value;


    }


}



/* ============================================================
 * COMPONENT LIBRARY
 * ============================================================
 */

class ComponentLibrary{


    constructor(){


        this.components=[];


    }



    add(component){


        if(

            component instanceof PromptComponent

        ){

            this.components.push(

                component

            );

        }


        return this;


    }



    get(name){


        return this.components.find(

            item=>item.name===name

        );


    }



    all(){


        return this.components;


    }


}



/* ============================================================
 * TEMPLATE CONNECTION FOUNDATION
 * ============================================================
 */

class TemplateConnector{


    constructor(){


        this.templates={};


    }



    register(name,data){


        this.templates[name]=data;


        return this;


    }



    use(name){


        return this.templates[name] || null;


    }



    list(){


        return Object.keys(

            this.templates

        );


    }


}



/* ============================================================
 * CONNECT MEMORY SYSTEM
 * ============================================================
 */


PromptComposer.prototype.memory=function(){


    if(!this._memory){


        this._memory=new PromptMemory();


    }


    return this._memory;


};



PromptComposer.prototype.savePrompt=function(name){


    this.memory()

    .save(

        name,

        this.state.export()

    );


    return this;


};



PromptComposer.prototype.loadPrompt=function(name){


    const saved =

        this.memory()

        .get(name);



    if(saved){


        this.state.update(

            saved.data

        );


    }



    return this;


};

/* ============================================================
 * PART 12
 * PROMPT TEMPLATE ENGINE
 * ============================================================
 */


/* ============================================================
 * PLACEHOLDER ENGINE
 * ============================================================
 */

class PlaceholderEngine{


    constructor(){


        this.pattern=/\{\{(.*?)\}\}/g;


    }



    extract(text=""){


        let matches = text.match(

            this.pattern

        );


        if(!matches){

            return [];

        }



        return matches.map(

            item=>

            item

            .replace("{{","")

            .replace("}}","")

            .trim()

        );


    }



    replace(text="",values={}){


        if(!text){

            return "";

        }



        return text.replace(

            this.pattern,

            (match,key)=>{


                key=key.trim();



                return values[key] ?? match;


            }

        );


    }



}



/* ============================================================
 * TEMPLATE OBJECT
 * ============================================================
 */

class PromptTemplate{


    constructor(name,content){


        this.name=name;

        this.content=content;

        this.created=

            new Date().toISOString();


    }



    render(values={}){


        const engine=

            new PlaceholderEngine();



        return engine.replace(

            this.content,

            values

        );


    }



    placeholders(){


        const engine=

            new PlaceholderEngine();



        return engine.extract(

            this.content

        );


    }


}



/* ============================================================
 * TEMPLATE ENGINE
 * ============================================================
 */

class TemplateEngine{


    constructor(){


        this.templates={};


    }



    add(name,content){


        this.templates[name]=

            new PromptTemplate(

                name,

                content

            );



        return this;


    }



    get(name){


        return this.templates[name] || null;


    }



    remove(name){


        delete this.templates[name];


        return this;


    }



    render(name,data={}){


        const template=

            this.get(name);



        if(!template){


            return "";


        }



        return template.render(

            data

        );


    }



    list(){


        return Object.keys(

            this.templates

        );


    }


}



/* ============================================================
 * TEMPLATE VALIDATOR
 * ============================================================
 */

class TemplateValidator{


    validate(template){


        let result={


            valid:true,


            missing:[]


        };



        if(!template){


            result.valid=false;


            return result;


        }



        const placeholders=

            template.placeholders();



        if(

            placeholders.length===0

        ){


            result.missing.push(

                "Template tidak memiliki variable"

            );


        }



        return result;


    }


}



/* ============================================================
 * DYNAMIC VARIABLE BUILDER
 * ============================================================
 */

class VariableBuilder{


    constructor(){


        this.variables={};


    }



    set(key,value){


        this.variables[key]=value;


        return this;


    }



    merge(data={}){


        this.variables={

            ...this.variables,

            ...data

        };


        return this;


    }



    build(){


        return ComposerUtils.clone(

            this.variables

        );


    }


}



/* ============================================================
 * CONNECT TEMPLATE SYSTEM
 * ============================================================
 */


PromptComposer.prototype.templates=function(){


    if(!this._templates){


        this._templates=

            new TemplateEngine();


    }



    return this._templates;


};



PromptComposer.prototype.addTemplate=function(

    name,

    content

){


    this.templates()

    .add(

        name,

        content

    );



    return this;


};



PromptComposer.prototype.useTemplate=function(

    name,

    variables={}

){


    return this.templates()

    .render(

        name,

        variables

    );


};

/* ============================================================
 * PART 13
 * MULTI LANGUAGE ENGINE
 * ============================================================
 */


/* ============================================================
 * LANGUAGE DETECTOR
 * ============================================================
 */

class LanguageDetector{


    constructor(){


        this.languages={


            id:[

                "dan",

                "dengan",

                "untuk",

                "buat",

                "gambar",

                "desain"

            ],



            en:[

                "the",

                "with",

                "for",

                "create",

                "design",

                "image"

            ],



            jp:[

                "です",

                "画像",

                "作成"

            ]

        };


    }



    detect(text=""){


        if(!text){

            return "unknown";

        }



        let scores={};



        Object.keys(

            this.languages

        )

        .forEach(lang=>{


            scores[lang]=0;



            this.languages[lang]

            .forEach(word=>{


                if(

                    text.toLowerCase()

                    .includes(word)

                ){

                    scores[lang]++;

                }


            });


        });



        let result =

            Object.keys(scores)

            .sort(

                (a,b)=>

                scores[b]-scores[a]

            )[0];



        return result || "unknown";


    }


}



/* ============================================================
 * LANGUAGE TRANSLATOR FOUNDATION
 * ============================================================
 */

class LanguageTranslator{


    constructor(){


        this.dictionary={


            id:{


                "gambar":

                "image",


                "desain":

                "design",


                "indah":

                "beautiful",


                "modern":

                "modern"


            }



        };


    }



    translate(text="",from="id",to="en"){


        if(

            from===to

        ){

            return text;

        }



        let result=text;



        if(

            this.dictionary[from]

        ){


            Object.keys(

                this.dictionary[from]

            )

            .forEach(word=>{


                result=result.replace(

                    new RegExp(

                        word,

                        "gi"

                    ),

                    this.dictionary[from][word]

                );


            });


        }



        return result;


    }


}



/* ============================================================
 * LOCALIZATION ENGINE
 * ============================================================
 */

class LocalizationEngine{


    constructor(){


        this.translator=

            new LanguageTranslator();



        this.detector=

            new LanguageDetector();


    }



    process(text="",target="en"){


        const source=

            this.detector.detect(

                text

            );



        return {


            source,

            target,


            result:

            this.translator.translate(

                text,

                source,

                target

            )


        };


    }


}



/* ============================================================
 * AI LANGUAGE ADAPTER
 * ============================================================
 */

class AILanguageAdapter{


    constructor(target="chatgpt"){


        this.target=target;


    }



    format(text,language="en"){


        switch(

            this.target

        ){


            case "midjourney":


                return text;



            case "leonardo":


                return `${text}, language optimized prompt`;



            case "chatgpt":


                return [

                    "Respond in",

                    language,

                    "",

                    text

                ]

                .join(" ");



            default:


                return text;


        }


    }


}



/* ============================================================
 * LANGUAGE PROFILE
 * ============================================================
 */

class LanguageProfile{


    constructor(){


        this.language="auto";


        this.output="";


    }



    setLanguage(lang){


        this.language=lang;


        return this;


    }



    setOutput(lang){


        this.output=lang;


        return this;


    }



    get(){


        return {


            input:this.language,


            output:this.output


        };


    }


}



/* ============================================================
 * CONNECT LANGUAGE SYSTEM
 * ============================================================
 */


PromptComposer.prototype.detectLanguage=function(){


    const detector=

        new LanguageDetector();



    return detector.detect(

        this.compose()

    );


};



PromptComposer.prototype.translate=function(target="en"){


    const engine=

        new LocalizationEngine();



    return engine.process(

        this.compose(),

        target

    );


};



PromptComposer.prototype.setLanguage=function(lang){


    this.config.language=lang;


    this.state.set(

        "language",

        lang

    );


    return this;


};
