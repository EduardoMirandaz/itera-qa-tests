import DashboardPage from "../pages/DashboardPage";
import { logar } from "./loginSteps.spec.cy";

import CreateCostumerPage from "../pages/CreateCustomerPage";

const dashboardPage = new DashboardPage
const createCostumerPage = new CreateCostumerPage

context('Deletar cliente', () => {

    it('Deletar cliente valido', () => {
        logar()
        criarCliente()
        buscar()
        dashboardPage.clicarBtnDelete()
        dashboardPage.clicarBtnConfirmDelete()
        buscar()
        
        dashboardPage.validarClienteNaoEncontrado()
    })


})

function buscar(){
    dashboardPage.preencherCampoSearch()
    dashboardPage.clicarNoBtnSearch()
}

export function criarCliente(){
    dashboardPage.clicarNoBtnCreate()
    createCostumerPage.preencherCamposValidos()
    createCostumerPage.clicarNoSubmitCreate()
}