class ScreenCalc4View{
    constructor(selector){
        this.selector = document.querySelector(selector);
    }
    
    getTemplate(widthFabric,modelMask,amountMask, fabricsStrips,countElastic,model){
        this.selector.innerHTML=`
        <div class="calculator">
        
        <a href="assets/duvidas-no-preechimento-da-calculadora.pdf" target = "_blank" ><span class="doubts">?</span></a>
        <h2>Sucesso</h2>
        

        <p>Para confecionar ${amountMask} mascaras em tecido ${widthFabric} no molde ${modelMask} você vai precisar de ${fabricsStrips>1 ?  fabricsStrips.toString().replace('.',',') + " m" : fabricsStrips.toString().replace('.',',') + " cm" } de tecido e ${countElastic > 1 ? countElastic.toString().replace('.',',') + " m" : countElastic.toString().replace('.',',') + " cm" }  de elastico da sua preferencia além de linha.</p>
        <div action="" id="form-sucess">
            
            <button class="btn btn-action btn-restart " id="btn-calculator2">Reiniciar</button>
            <button class="btn btn-action btn-tutorial" id="btn-calculator2">Tutorial</button>
            
        </div>
    </div>
    <p class="phrases">Se puder fique em casa e ajude a combater a propagação do COVID</p>
        `
        
    }
    getTemplateFewMasck(widthFabric,modelMask,amountMask,countElastic,model){
        this.selector.innerHTML=`
        <div class="calculator">
        <a href="assets/duvidas-no-preechimento-da-calculadora.pdf" target = "_blank"><span class="doubts">?</span></a>
        <h2>Sucesso</h2>

        

        <p>Para confeccionar ${amountMask} máscaras em ${widthFabric} no molde ${modelMask} você vai precisar de pouco tecido, sugiro usar algo que já tenha em casa como uma camisa, lençol ou fronha e ${countElastic > 1 ? countElastic.toString().replace('.',',') + " m" : countElastic.toString().replace('.',',') + " cm"} de elástico da sua preferencia além de de linha.</p>
       
        <div action="" id="form-sucess">
            
            <button class="btn btn-action btn-restart " id="btn-calculator2">Reiniciar</button>
            <button class="btn btn-action btn-tutorial" id="btn-calculator2">Tutorial</button>
            
        </div>
    </div>
    <p class="phrases">Se puder fique em casa e ajude a combater a propagação do COVID</p>
        `

       
    }
}