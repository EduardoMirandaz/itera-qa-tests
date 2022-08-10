import DashboarPage from "../pages/DashboardPage";
import { logar } from "./loginSteps.spec.cy";
import { editar } from "./editCustomerSteps.spec.cy";
import { validarClienteEditado } from "./editCustomerSteps.spec.cy";
import { buscarClienteEditado } from "./editCustomerSteps.spec.cy";


const dashboardPage = new DashboarPage

context('Busca por clientes', () => {

    it('Buscar cliente valido', () => {
        logar()
        dashboardPage.preencherCampoSearch()
        dashboardPage.clicarNoBtnSearch()
        dashboardPage.validarClienteEncontrado()

    })
    
    it('Buscar cliente inexistente', () => {
        logar()
        dashboardPage.preencherCampoSearchNoMatch()
        dashboardPage.clicarNoBtnSearch()
        dashboardPage.validarClienteNaoEncontrado()
    })

    it('Buscar cliente após edicao', () => {
        logar()
        editar()
        buscarClienteEditado()
        validarClienteEditado()
    })


})