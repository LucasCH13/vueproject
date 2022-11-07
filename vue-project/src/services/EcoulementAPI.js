import API from './API'

export default {
    getEcoulement() {
        return API().get('/ecoulement/observations?format=json&code_departement=04&size=20')
    }
}