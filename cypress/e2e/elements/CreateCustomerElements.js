export default class CreateCostumerElements {

    url                  () {return 'https://itera-qa.azurewebsites.net/Customer/Create'}
    formCampoName        () {return '#Name'}
    formCampoCompany     () {return '#Company'}
    formCampoAddress     () {return '#Address'}
    formCampoCity        () {return '#City'}
    formCampoPhone       () {return '#Phone'}
    formCampoEmail       () {return '#Email'}
    btnSubmitCreate      () {return 'body > div > form > div > div:nth-child(9) > div > input'}
    btnReturnToList      () {return 'body > div > div > a'}

}