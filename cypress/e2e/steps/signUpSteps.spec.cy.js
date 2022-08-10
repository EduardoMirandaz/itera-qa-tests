import SignUpPage from "../pages/user/SignUpPage"
const signUpPage = new SignUpPage

context('Cadastro usuario', () => {
  
  it('Cadastrar usuario com sucesso', () => {
    
    cadastrar()
    signUpPage.clicarBtnSubmit()
    signUpPage.validarMsgSucess()

  })

  it('Cadastrar usuario com username existente', () => {

    signUpPage.abrirNavegador()
    signUpPage.preencherCamposValidos()
    signUpPage.clicarBtnSubmit()
    signUpPage.validarMsgUsuarioExiste()
    
  })

  it('Cadastrar usuario com confirmação errônea de senha', () => {

    signUpPage.abrirNavegador()
    signUpPage.preencherCamposSenhaIncorreta()
    signUpPage.clicarBtnSubmit()
    signUpPage.validarMsgConfirmPasswordErro()

  })

})

export function cadastrar() {
  signUpPage.abrirNavegador()
  signUpPage.preencherCamposValidos()
}
