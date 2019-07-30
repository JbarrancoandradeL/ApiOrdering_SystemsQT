'use strict';

const base    = require('./base');
const model   = require('../model/Insumos');
const factory = require('../factory/Insumos');

module.exports = (router) => {
	router
		.get('/insumos', (req, res, next) => {
			base.execute.all(model, factory, req, res);
		})
		.post('/insumos', (req, res, next) => {
    	base.execute.post(model, factory, req, res);
    })
		.get('/insumos/:id', (req, res, next) => {
			base.execute.get(model, factory, req, res);
		})
		.put('/insumos/:id', (req, res, next) => {
 			base.execute.put(model, factory, req, res);	
    })
    .delete('/insumos/:id', (req, res, next) => {
    	base.execute.delete(model, factory, req, res);
    });
};