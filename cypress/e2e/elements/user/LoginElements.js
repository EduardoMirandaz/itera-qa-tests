export default class LoginElements {

    url                () {return 'https://itera-qa.azurewebsites.net/Login'}
    formCampoUsername  () {return '#Username'}
    formCampoPassword  () {return '#Password'}
    btnSubmit          () {return 'body > div > div:nth-child(4) > form > table > tbody > tr:nth-child(7) > td:nth-child(2) > input.btn.btn-primary'}
    btnClear           () {return 'body > div > div:nth-child(4) > form > table > tbody > tr:nth-child(7) > td:nth-child(2) > input.btn.btn-secondary'}
    msgmSucessLogin    () {return 'body > div > div > h3'}
    msgmErrorlogin     () {return 'body > div > div:nth-child(4) > form > table > tbody > tr:nth-child(5) > td > label'}
}