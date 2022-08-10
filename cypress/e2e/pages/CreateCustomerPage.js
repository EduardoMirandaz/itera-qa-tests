import Utils from "../utils/utils"
const util = new Utils

import CreateCostumerElements from "../elements/CreateCustomerElements"
const createCostumerElements = new CreateCostumerElements

const Chance = require('chance')
const chance = new Chance

export let name = chance.name()
export let company = chance.company()
export let address = chance.address()
export let city = chance.city()
export let phone = chance.phone()
export let email = chance.email()

export default class CreateCostumerPage {

    abriNavegador         (){      util.navegar(createCostumerElements.url())                               }
    clicarNoSubmitCreate  (){      util.click(createCostumerElements.btnSubmitCreate())                     }
    clicarNoReturnToList  (){      util.click(createCostumerElements.btnReturnToList())                     }

    preencherCamposValidos(){      
        util.typeAndTab(createCostumerElements.formCampoName(), name, company, address, city,phone, email)  
    }
    preencherCamposInvalidos(){      
        util.typeAndTab(createCostumerElements.formCampoName(), name, '@@@@@@@', '@@@@@', city,'@@@@@@@', email)  
    }
}
