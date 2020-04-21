class ScreenCalc3View{
    constructor(selector){
        this.selector = document.querySelector(selector);
    }
    getTemplate(){
        this.selector.innerHTML=`
        <div class="calculator">
        <a href="assets/duvidas-no-preechimento-da-calculadora.pdf" target = "_blank"><span class="doubts">?</span></a>
        <h2>Quantidade</h2>
       
        <form action="" >
               <div class="form-group">
                 <input type="text"
                   class="form-control input-amout" name="amount" id="" aria-describedby="helpId" placeholder="Digite a quantidade" min="1" autofocus>
                 
               </div>
            <button class="btn btn-action .input-amout" id="btn-calculator">Contiuar</button>
            
        </form>
    </div>
    <p class="phrases">Juntos vamos vencer o COVID </p>
        `
       
    
    }
}