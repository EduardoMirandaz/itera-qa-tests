import EditPage from "../pages/EditPage";
const editPage = new EditPage

import LoginPage from "../pages/user/LoginPage";
const loginPage = new LoginPage

import DashboardPage from "../pages/DashboardPage";
const dashboardPage = new DashboardPage


import { logar } from "./loginSteps.spec.cy";


import { criarCliente } from "./createCustomerSteps.spec.cy";
import { buscarClienteCriado } from "./createCustomerSteps.spec.cy";
import { validarCliente } from "./createCustomerSteps.spec.cy";

context('Editar cliente', () => {

    it('Editar cliente com sucesso', () => {

        logar()

        criarCliente()

        dashboardPage.clicarNoBtnEdit()

        editar()

        // validações
        buscarClienteCriado()

        // validar cliente pelos details
        validarCliente()
        

    })
})

function editar(){
    editPage.preencherName()
    editPage.preencherCompany()
    editPage.clicarNoBtnSave()
}

