import LoginPage from "../pages/user/LoginPage"
const loginPage = new LoginPage

import {cadastrar} from "./signUpSteps.spec.cy";


context('Login usuario', () => {

    it('Realizar login com sucesso', () => {
        cadastrar()
        logar()
        loginPage.validarMsgmSucess()

    })

    it('Realizar login com senha invalida', () => {

        loginPage.abrirNavegador()
        loginPage.preencherUsernameValido()
        loginPage.preencherPasswwordInvalida()
        loginPage.clicarNoBtnSubmit()
        loginPage.validarMsgmError()

    })

    it('Realizar login com usuario inexistente', () => {

        loginPage.abrirNavegador()
        loginPage.preencherUsernameInvalido()
        loginPage.preencherPasswordValida()
        loginPage.clicarNoBtnSubmit()
        loginPage.validarMsgmError()

    })
})


export function logar(){
    loginPage.abrirNavegador()
    loginPage.preencherUsernameValido()
    loginPage.preencherPasswordValida()
    loginPage.clicarNoBtnSubmit()
}
