"use strict";
import LaravelMicro from 'laravel-micro.js'
export default class Application extends LaravelMicro {

    /**
     * Application Constructor.
     * @return void
     */
    constructor() {
        super();
    }

    /**
     * AutoLoad All Providers and Services.
     * @return void
     */
    loadProviders() {
        this.make('AutoLoader')
            .context(require.context('./Services', true, /\.*ServiceProvider.js$/))
            .each((name, abstract) =>this.register(abstract))
    }

    /**
     * Dispatch Route Request through Middleware Stack.
     * Vue Router will not fire callbacks again if a redirect
     * has occurred, so we should sync the request again after calling next.
     * @return void
     */
    dispatch(to, from, next) {
        const Request = this.make('Request').capture({to, from, next})
        this
            .make('Kernel')
            .setMiddleware(Request.getMiddleware())
            .handle(Request, (Request) => {
                if (this.isCallable(Request.next)) {
                    Request.next()
                    Request.setRoute('to', this.make('Router').currentRoute)
                }
            })
    }

    /**
     * Dispatch Request through the Stack via Terminate in Reverse Order.
     * Once Vue Router has successfully entered the requested route,
     * these last callbacks will be fired.
     * @return void
     */
    terminate(to, from) {
        const Request = this.make('Request').capture({to, from})
        this
            .make('Kernel')
            .setMiddleware(Request.getMiddleware())
            .terminate(Request, (Request) => {
                if (this.isCallable(Request.next)) {
                    Request.next()
                }
            })
    }
}
