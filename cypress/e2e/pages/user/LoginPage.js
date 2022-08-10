import Util from "../../utils/utils";
const util = new Util

import LoginElements from "../../elements/user/LoginElements";
const loginElements = new LoginElements

const Chance = require("chance")
const chance = new Chance

import {usuario} from './SignUpPage'

// usuario existente
let usernameValido = usuario
let password = 'senha@1'


export default class LoginPage {


    abrirNavegador(){
        util.navegar(loginElements.url())
    }

    preencherUsernameValido(){
        util.preencherInput(loginElements.formCampoUsername(), usernameValido)
    }

    preencherUsernameInvalido(){
        util.preencherInput(loginElements.formCampoUsername(), 'nonExistoOt')
    }

    preencherPasswordValida(){
        util.preencherInput(loginElements.formCampoPassword(), password)
    }

    preencherPasswwordInvalida(){
        util.preencherInput(loginElements.formCampoPassword(), '-@easxf')
    }

    clicarNoBtnSubmit(){
        util.click(loginElements.btnSubmit())
    }

    validarMsgmSucess(){
        util.validarText(loginElements.msgmSucessLogin(), 'Welcome '+usernameValido)
    }

    validarMsgmError(){
        util.validarText(loginElements.msgmErrorlogin(), 'Wrong username or password')
    }

}

