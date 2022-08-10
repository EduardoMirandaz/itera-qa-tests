import Util from "../../utils/utils";
const util = new Util

import CadastroElements from "../../elements/user/CadastroElements";
const cadastroElements = new CadastroElements


const Chance = require("chance")
const chance = new Chance

export let usuario = chance.name()

let usernameAlreadyExist = 'Username already exist'
let confirmPasswordError = "'Confirm password' and 'Password' do not match."
let emailError = 'Email translation missing: pt-BR.activerecord.errors.models.user.attributes.email.invalid'
let registrationSuccess = 'Registration Successful'

export default class SignUpPage {
    
    abrirNavegador(){                  util.navegar(cadastroElements.url())}
    clicarBtnSubmit(){                 util.click(cadastroElements.btnSubmit())}
    validarMsgSucess(){                util.validarText(cadastroElements.msgSucess(), registrationSuccess)}
    validarMsgUsuarioExiste(){         util.validarText(cadastroElements.msgErroUsuarioExiste(), usernameAlreadyExist)}
    validarMsgConfirmPasswordErro(){   util.validarText(cadastroElements.msgErroConfirmPassword(), confirmPasswordError)}
    validarMsgErrorEmail(){            util.validarText(cadastroElements.msgErrorEmail(), emailError)}

    preencherCamposValidos(){
        util.typeAndTab(cadastroElements.formCampoFirstName(), 
        chance.first(), chance.last(), '54655465',chance.phone(), usuario,'senha@1','senha@1')
    }

    preencherCamposSenhaIncorreta(){
        util.typeAndTab(cadastroElements.formCampoFirstName(), 
        chance.first(), chance.last(), '54655465',chance.phone(), chance.name(),'senha@2','senha@1')
    }

}

