import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';

import { ExampleApiRequestFactory, ExampleApiResponseProcessor} from "../apis/ExampleApi";
export class ObservableExampleApi {
    private requestFactory: ExampleApiRequestFactory;
    private responseProcessor: ExampleApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExampleApiRequestFactory,
        responseProcessor?: ExampleApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExampleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExampleApiResponseProcessor();
    }

    /**
     * ask if a word is valid
     * word
     * @param word the word is valid
     */
    public wordWordGet(word: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.wordWordGet(word, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.wordWordGet(rsp)));
            }));
    }

}
