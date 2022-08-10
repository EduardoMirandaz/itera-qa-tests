import Utils from "../utils/utils";
const utils = new Utils

import EditElements from "../elements/EditElements";
const editElements = new EditElements

import DashboardElements from "../elements/DashboardElements";
const dashboardElements = new DashboardElements

import DetailsElements from "../elements/DetailsElements";
const detailsElements = new DetailsElements


let nomeEditado = 'Editado Editado'
let companyEditada = 'Editada Editada'


export default class EditPage {

    clicarNoBtnSave       (){        utils.click(editElements.btnSave())                                       }
    preencherCampoSearch  (){        utils.preencherInput(dashboardElements.formCampoSearching(), nomeEditado) }
    validarNome           (){        utils.validarText(detailsElements.name(), nomeEditado)                    }
    validarCompanyEdit    (){        utils.validarText(detailsElements.company(), companyEditada)              }


    preencherName(){
        utils.limparInput(editElements.formCampoName())
        utils.preencherInput(editElements.formCampoName(), nomeEditado)
    }

    preencherCompany(){
        utils.limparInput(editElements.formCampoCompany())
        utils.preencherInput(editElements.formCampoCompany(), companyEditada)
    }

}