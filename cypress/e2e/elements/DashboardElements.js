export default class DashboardElements {

    btnCreate                 () {return 'body > div > div > p:nth-child(4) > a'                                                           }
    formCampoSearching        () {return '#searching'                                                                                      }
    btnSubtmitSearch          () {return 'body > div > div > form > input.btn.btn-secondary.my-2.my-sm-0'                                  }
    msgNoMatch                () {return 'body > div > div > table > tbody > tr:nth-child(2) > td'                                         }
    btnEdit                   () {return 'body > div > div > table > tbody > tr:nth-child(2) > td:nth-child(7) > a.btn.btn-outline-primary'}
    btnDetails                () {return 'body > div > div > table > tbody > tr:nth-child(2) > td:nth-child(7) > a.btn.btn-outline-info'   }
    btnDelete                 () {return 'body > div > div > table > tbody > tr:nth-child(2) > td:nth-child(7) > a.btn.btn-outline-danger' }
    btnConfirmDelete          () {return 'body > div > div > form > div > input'                                                           }
    
}