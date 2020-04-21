class ScreenCalc1View{
    constructor(selector){
        this.selector = document.querySelector(selector);
    }
    getTemplate(){
            
        this.selector.innerHTML =`
        
            <div class="calculator">
            
            <a href="assets/duvidas-no-preechimento-da-calculadora.pdf" target = "_blank"><span class="doubts">?</span></a>
            <h2>Escolha o tecido</h2> 
            
            <form action="">
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input fabric-type" name="fabric" id="" value="Algodão Cotton" checked>
                        Algodão ou Cotton <span style="font-size:12px; color:#212529">(Larg. 2,5m)</span>
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="fabric" id="" value="TNT" >
                        TNT <span style="font-size:12px; color:#212529">(Larg. 1,4m)</span>
                        </label>
                    </div>
                <button class="btn btn-action" id="btn-calculator">Contiuar</button>
                
            </form>

        </div>
            <p class="phrases">Juntos somos mais fortes </p>
        `
    }

}

