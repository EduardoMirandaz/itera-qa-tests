export default class CadastroElements {

    url                      () {return 'https://itera-qa.azurewebsites.net/UserRegister/NewUser'}
    formCampoFirstName       () {return '#FirstName'}
    btnSubmit                () {return '#submit'}
    msgErroFirstName         () {return '#FirstName-error'}
    msgErroSurName           () {return '#Surname-error'}
    msgErroUsername          () {return '#Username-error'}
    msgErroPassword          () {return '#Password-error'}
    msgErroConfirmPassword   () {return '#ConfirmPassword-error'}
    msgErroUsuarioExiste     () {return 'body > div > form > div > div:nth-child(12) > div > label'}
    msgSucess                () {return 'body > div > form > div > div:nth-child(11) > div > label'}
   
}