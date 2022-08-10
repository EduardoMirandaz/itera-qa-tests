import EditPage from "../pages/EditPage";
const editPage = new EditPage

import LoginPage from "../pages/user/LoginPage";
const loginPage = new LoginPage

import DashboardPage from "../pages/DashboardPage";
const dashboardPage = new DashboardPage

import DetailsPage from "../pages/DetailsPage";
const detailsPage = new DetailsPage


import { logar } from "./loginSteps.spec.cy";


import { criarCliente } from "./createCustomerSteps.spec.cy";

context('Editar cliente', () => {

    it('Editar cliente com sucesso', () => {

        logar()
        criarCliente()
        editar()
        // validações
        buscarClienteEditado()
        // validar cliente pelos details
        validarClienteEditado()
        
    })



})

export function editar(){
    dashboardPage.clicarNoBtnEdit()
    editPage.preencherName()
    editPage.preencherCompany()
    editPage.clicarNoBtnSave()
}

export function buscarClienteEditado(){
    editPage.preencherCampoSearch()
    dashboardPage.clicarNoBtnSearch()
}

export function validarClienteEditado(){
    dashboardPage.clicarBtnDetails ()
    editPage.validarNome           ()
    editPage.validarCompanyEdit    ()
}