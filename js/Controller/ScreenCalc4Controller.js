class ScreenCalc4Controller{
    constructor(view){
        this.view = view;
    }
  
    pageCalc(widthFabric,modelMask,amountMask,model){
        let countElastic;
        let fabricsStrips

        if(model.type === 'adult'){
            let elasticMeasure = .25;

                if(model.widthFabric === 2.5){
                    let amountMaskForStrips = 8;
                    let controller =  calcAmoutmask(amountMaskForStrips,elasticMeasure,this.view );
                if(controller < .26) return;                
                                        
            }
            if(model.widthFabric === 1.4){
                    let amountMaskForStrips = 5;
                    let controller =  calcAmoutmask(amountMaskForStrips,elasticMeasure,this.view );
                if(controller < .26) return;
            }

        } // end adult calc
        if(model.type === 'child'){
            let elasticMeasure = .20;

            if(model.widthFabric === 2.5){

            let amountMaskForStrips = 11;
            let controller =  calcAmoutmask(amountMaskForStrips,elasticMeasure,this.view );
            if(controller < .26) return;                
                                    
        }
        if(model.widthFabric === 1.4){

            let amountMaskForStrips = 6;
            let controller =  calcAmoutmask(amountMaskForStrips,elasticMeasure,this.view );
            if(controller < .26) return;
        }

    } // end adult calc
            function  calcAmoutmask(amountMaskForStrips,elasticMeasure, view){

                let count = amountMask/amountMaskForStrips;  // amount mask
                countElastic = ((count/0.125) * elasticMeasure); // amount elastic
                countElastic = countElastic.toPrecision(2);
              
                    if(count < 0.26) {
                        console.log(widthFabric,modelMask,amountMask,countElastic, model)
                        view.getTemplateFewMasck(widthFabric,modelMask,amountMask,countElastic, model);
                        return count;
                    }       
                    if(count > 0.25){
                        fabricsStrips = 1 + Math.floor(count);
                        fabricsStrips =(fabricsStrips *0.3).toPrecision(2) ;                 
                    } 

                    return (fabricsStrips,countElastic);
            }

        this.view.getTemplate(widthFabric,modelMask,amountMask,fabricsStrips,countElastic, model);
    }
    
}