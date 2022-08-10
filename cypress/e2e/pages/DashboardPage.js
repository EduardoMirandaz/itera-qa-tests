import Utils from "../utils/utils";
const utils = new Utils

import DashboardElements from "../elements/DashboardElements";
const dashboardElements = new DashboardElements


import {name} from "../pages/CreateCustomerPage"
import {editedName} from "../pages/EditPage"


export default class DashboardPage {

    preencherCampoSearch(){
        utils.preencherInput(dashboardElements.formCampoSearching(), name)
    }

    preencherCampoSearchNomeEditado(){
        utils.preencherInput(dashboardElements.formCampoSearching(), editedName)
    }

    preencherCampoSearchNoMatch(){
        utils.preencherInput(dashboardElements.formCampoSearching(), '¨%--!@$#!%@')
    }

    clicarNoBtnCreate(){
        utils.click(dashboardElements.btnCreate())
    }

    clicarNoBtnSearch(){
        utils.click(dashboardElements.btnSubtmitSearch())
    }

    clicarBtnDetails(){
        utils.click(dashboardElements.btnDetails())
    }

    clicarNoBtnEdit(){
        utils.click(dashboardElements.btnEdit())
    }

    clicarBtnDelete(){
        utils.click(dashboardElements.btnDelete())
    }
    clicarBtnConfirmDelete(){
        utils.click(dashboardElements.btnConfirmDelete())
    }

    validarClienteNaoEncontrado(){
        utils.validarText(dashboardElements.msgNoMatch(), 'No Match')
    }

    validarClienteEncontrado(){
        // utils.validarText(dashboardElements.msgmNoMatch(), )
    }

}