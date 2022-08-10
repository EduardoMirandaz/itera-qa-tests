import CreateCostumerPage from "../pages/CreateCustomerPage";
const createCostumerPage = new CreateCostumerPage

import LoginPage from "../pages/user/LoginPage"
const loginPage = new LoginPage

import DashboardPage from "../pages/DashboardPage"
const dashboardPage = new DashboardPage

import DetailsPage from "../pages/DetailsPage";
const detailsPage = new DetailsPage


import {logar} from "../steps/loginSteps.spec.cy"


context('Criar Cliente', () => {

    it('Criar Cliente com sucesso', () => {

        logar()
        
        criarCliente()

        // validações
        buscarClienteCriado()
        
        // validar cliente pelos details
        validarCliente()

    })

})

export function buscarClienteCriado(){
    dashboardPage.preencherCampoSearch()
    dashboardPage.clicarNoBtnSearch()
}

export function validarCliente(){
    dashboardPage.clicarBtnDetails ()
    detailsPage.validarNome        ()
    detailsPage.validarCompanyEdit ()
    detailsPage.validarAddress     ()
    detailsPage.validarCity        ()
    detailsPage.validarPhone       ()
    detailsPage.validarEmail       ()
}

export function criarCliente(){
    dashboardPage.clicarNoBtnCreate()
    createCostumerPage.preencherCamposValidos()
    createCostumerPage.clicarNoSubmitCreate()
}