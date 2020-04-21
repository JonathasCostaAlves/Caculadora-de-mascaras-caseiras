// calculator startup app

const adultMaskCotton = new AdultMask('adult', 'contton', 2.5);
const adultMaskTnt = new AdultMask('adult', 'tnt', 1.4);

const childMaskCotton = new ChildMask('child', 'cotton', 2.5);
const childMaskTnt = new ChildMask('child', 'tnt', 1.4);

const screenCalc1View = new ScreenCalc1View('.content');
const screenCalc1Controller = new ScreenCalc1Controller(screenCalc1View);

const screenCalc2View = new ScreenCalc2View('.content');
const screenCalc2Controller = new ScreenCalc2Controller(screenCalc2View);

const screenCalc3View = new ScreenCalc3View('.content');
const screenCalc3Controller = new ScreenCalc3Controller(screenCalc3View);

const screenCalc4View = new ScreenCalc4View('.content');
const screenCalc4Controller = new ScreenCalc4Controller(screenCalc4View);

// Date for calculator
let widthFabric; //algodão , TNT
let modelMask;  //adulto , infantil
let amountMask; // number

const search = location.search;
if(search === '?2') {
    screenCalc1Controller.startCalc();  
      flow();
}

const btnAction1 = document.querySelector('#btn-action1')
if(btnAction1){
   
    btnAction1.addEventListener('click', function(e){
      e.preventDefault()
      screenCalc1Controller.startCalc();  
      flow();
      
  });

}

function flow(){
    document.querySelector('.btn-action').addEventListener('click', function(e){
        e.preventDefault();
        widthFabric =  document.querySelector('input[name="fabric"]:checked').value;
        screenCalc2Controller.pageCalc();

        console.log(widthFabric);
            document.querySelector('.btn-action').addEventListener('click', function(e){
                e.preventDefault();
                modelMask = document.querySelector('input[name="type"]:checked').value;
                console.log(modelMask);
                    screenCalc3Controller.pageCalc();
                        document.querySelector('.btn-action').addEventListener('click', function(e){
                            e.preventDefault();
                            amountMask = Math.floor(parseFloat(document.querySelector('input[name="amount"]').value));
                            if(!amountMask)return alert('Digite a quantidade.')                            
                            console.log(amountMask);

                            if(modelMask === 'adulto' && widthFabric === 'Algodão Cotton'){
                                screenCalc4Controller.pageCalc(widthFabric,modelMask,amountMask,adultMaskCotton);
                            }
                            if(modelMask === 'adulto' && widthFabric === 'TNT'){
                                screenCalc4Controller.pageCalc(widthFabric,modelMask,amountMask,adultMaskTnt);
                            }
                            if(modelMask === 'infantil' && widthFabric === 'Algodão Cotton'){
                                screenCalc4Controller.pageCalc(widthFabric,modelMask,amountMask,childMaskCotton);
                            }
                            if(modelMask === 'infantil' && widthFabric === 'TNT'){
                                screenCalc4Controller.pageCalc(widthFabric,modelMask,amountMask,childMaskTnt);
                            }

                                document.querySelector('.btn-restart').addEventListener('click', function(){
                                    window.open('http://127.0.0.1:5500?2', '_self')                                    
                                });
                                document.querySelector('.btn-tutorial').addEventListener('click', function(){
                                    window.open('http://127.0.0.1:5500', '_self')
                                });

                        });
            });
        });
}







