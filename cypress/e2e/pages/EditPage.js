import Utils from "../utils/utils";
const utils = new Utils

import EditElements from "../elements/EditElements";
const editElements = new EditElements


let nomeEditado = 'Editado Editado'
let companyEditada = 'Editada Editada'


export default class EditPage {

    clicarNoBtnSave(){
        utils.click(editElements.btnSave())
    }

    preencherName(){
        utils.limparInput(editElements.formCampoName())
        utils.preencherInput(editElements.formCampoName(), nomeEditado)
    }

    preencherCompany(){
        utils.limparInput(editElements.formCampoCompany())
        utils.preencherInput(editElements.formCampoCompany(), companyEditada)
    }

    preencherAnddress(){
        utils.limparInput(editElements.formCampoAddress())
        utils.preencherInput(editElements.formCampoAddress())
    }

    preencherCity(){
        utils.limparInput(editElements.formCampoCity())
        utils.preencherInput(editElements.formCampoCity())
    }

    preencherPhone(){
        utils.limparInput(editElements.formCampoPhone())
        utils.preencherInput(editElements.formCampoPhone())
    }

    preencherEmail(){
        utils.limparInput(editElements.formCampoEmail())
        utils.preencherInput(editElements.formCampoEmail())
    }

}