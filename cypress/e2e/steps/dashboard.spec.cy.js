import DashboarPage from "../pages/DashboardPage";
const dashboardPage = new DashboarPage

context('Pagina de Dashboard', () => {

    it('Realizar pesquisa por cliente', () => {

        dashboardPage.preencherCampoSearchComClienteInexistente()
        dashboardPage.clicarNoBtnSearch()
        dashboardPage.validarClienteNaoEncontrado()

    })
})