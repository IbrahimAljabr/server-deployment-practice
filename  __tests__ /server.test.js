'use strict';

// const { expect } = require('@jest/globals');
// const { it } = require('@jest/globals');
const superTest = require('supertest');
// const { describe } = require('yargs');
const server = require('../server.js');
const request = superTest(server.app);

describe('Server ', ()=>{
    it('handle invalid routes', async ()=>{
        const response = await request.get('/nothing');
        expect(response.status).toEqual(404);
    });

    it('handle invalid routes', async ()=>{
        const response = await request.get('/bad');
        expect(response.status).toEqual(500);
    });

    it('handle invalid routes', async ()=>{
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('hello world');
    });

})