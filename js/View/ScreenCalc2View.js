class ScreenCalc2View{
    constructor(selector){
        this.selector = document.querySelector(selector);
    }
    getTemplate(){
        
        this.selector.innerHTML=`
        
        <div class="calculator">
        <a href="assets/duvidas-no-preechimento-da-calculadora.pdf" target = "_blank"><span class="doubts">?</span></a>
        <h2>Escolha o modelo</h2> 
        
        <form action="">
                <div class="form-check">
                    <label class="form-check-label">
                    <input type="radio" class="form-check-input fabric-type" name="type" id="" value="adulto" checked>
                    Adulto
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="type" id="" value="infantil" >
                    Infantil
                    </label>
                </div>
            <button class="btn btn-action" id="btn-calculator">Contiuar</button>
            
        </form>
    </div>
    <p class="phrases">Vamos deixar as mascaras para os profissionais de saúde </p>
    
    `
    
    }
}