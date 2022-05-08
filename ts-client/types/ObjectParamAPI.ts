import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'


import { ObservableExampleApi } from "./ObservableAPI";
import { ExampleApiRequestFactory, ExampleApiResponseProcessor} from "../apis/ExampleApi";

export interface ExampleApiWordWordGetRequest {
    /**
     * the word is valid
     * @type string
     * @memberof ExampleApiwordWordGet
     */
    word: string
}

export class ObjectExampleApi {
    private api: ObservableExampleApi

    public constructor(configuration: Configuration, requestFactory?: ExampleApiRequestFactory, responseProcessor?: ExampleApiResponseProcessor) {
        this.api = new ObservableExampleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ask if a word is valid
     * word
     * @param param the request object
     */
    public wordWordGet(param: ExampleApiWordWordGetRequest, options?: Configuration): Promise<void> {
        return this.api.wordWordGet(param.word,  options).toPromise();
    }

}
