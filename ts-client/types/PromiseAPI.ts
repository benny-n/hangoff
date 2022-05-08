import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ObservableExampleApi } from './ObservableAPI';

import { ExampleApiRequestFactory, ExampleApiResponseProcessor} from "../apis/ExampleApi";
export class PromiseExampleApi {
    private api: ObservableExampleApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExampleApiRequestFactory,
        responseProcessor?: ExampleApiResponseProcessor
    ) {
        this.api = new ObservableExampleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ask if a word is valid
     * word
     * @param word the word is valid
     */
    public wordWordGet(word: string, _options?: Configuration): Promise<void> {
        const result = this.api.wordWordGet(word, _options);
        return result.toPromise();
    }


}



