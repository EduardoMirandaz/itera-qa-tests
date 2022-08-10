import Utils from "../utils/utils";
const utils = new Utils

import DetailsElements from "../elements/DetailsElements";
const detailsElements = new DetailsElements 

import {name, company, address, city, phone, email} from '../pages/CreateCustomerPage'



export default class DetailsPage {
    validarNome        (){ utils.validarText(detailsElements.name(), name)}
    validarCompanyEdit (){ utils.validarText(detailsElements.company(), company)}
    validarAddress     (){ utils.validarText(detailsElements.address(), address)}
    validarCity        (){ utils.validarText(detailsElements.city(), city)}
    validarPhone       (){ utils.validarText(detailsElements.phone(), phone)}
    validarEmail       (){ utils.validarText(detailsElements.email(), email)}

}