export default class Utils {

    navegar(url){
        cy.visit(url)
    }

    click(element){
        cy.get(element).click()
    }

    clickForce(element){
        cy.get(element).click({force:true})
    }

    preencherInput(element, text){
        cy.get(element).type(text)
    }

    preencherInputComTeclaNoFinal(element, text, tecla){
        cy.get(element).type(text).type(tecla);
    }

    preencherInputForce(element, text){
        cy.get(element).type(text, {force:true})
    }

    tempo(tempo){
        cy.wait(tempo)
    }

    select(element, value){
        cy.get(element).select(value)
    }

    validarText(element, text){
        cy.get(element).should('contain', text)
    }

    limparInput(element){
        cy.get(element).clear()
    }

    typeAndTab(){
        var element = cy.get(arguments[0])
        for(var i = 1; i < arguments.length; i++){
           element.clear().type(arguments[i]).tab()
        }
     }
  
     assertSequenceChilds(){
        var newPath = arguments[0];
        for(var i = 1; i < arguments.length; i++){    
           cy.get(newPath + i + ')')
           .should('contain', arguments[i])
        }
     }
  
     enter(element){
        cy.get(element).type('{enter}')
     }

     
}