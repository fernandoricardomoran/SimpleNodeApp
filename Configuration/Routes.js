//import * as core from 'express-serve-static-core';
const ItemsRepo = require('../Repository/ItemsRepository');

var routes = [
    {
        path: '/items',
        childRoutes: [
            { path: '', verb: 'get', method: ItemsRepo.getItems },
            // { path: '', verb: 'post', method: addItem },
            // { path: '/:id', verb: 'put', method: updateItem },
            // { path: '/:id', verb: 'delete', method: deleteItem },
        ]

    }
]


/**
 * Set routes to an application
 * @param {core.Express} app Application to set the routes
 */
function setRoutes(app) {
    for (let iRoute = 0; iRoute < routes.length; iRoute++) {
        const route = routes[iRoute];
        for (let iSubRoute = 0; iSubRoute < route.childRoutes.length; iSubRoute++) {
            const childRoute = route.childRoutes[iSubRoute];
            const path = route.path + childRoute.path;
            app[childRoute.verb](path, childRoute.method);
        }
    }
}


module.exports = {
    setRoutes
}