import BaseAPI from './baseApi'

export interface IcreateChat{
    title:string
}

export class ChatsApi extends BaseAPI {
    constructor() {
        super('/chats')
    }

    create(title:string){
        const options: Record<string,any>={}
        options.data = {'title': title}
        // console.log(options)
        return this.HTTPTransport.post('',options)

    } 
    read(){
        return this.HTTPTransport.get('')
    }
    update = undefined
    delete = undefined
}

export default new ChatsApi()