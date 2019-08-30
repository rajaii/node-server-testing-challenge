const request = require('supertest');
const server = require('../api/server.js');

describe('server works properly', () => {
    it('returns the right status code', async () => {
        const expectedCode = 200;
        const res = await request(server).get('/');
        expect(res.status).toBe(expectedCode);
    })
/* why this didn't test properly said expected ... but recieved {}
    it('returns the proper data type', async () => {
        const res = await request(server).get('/');
        expect(res.body).toEqual('<h1>hackathon Api... You have been hacked. Just kidding.</h1>');
    }) //also tried with expect(typeof res.body).toBe('string')???
    */

   it('returns the proper data type', async () => {
    const res = await request(server).get('/');
    expect(res.type).toBe('application/json');
   })
    it('returns the proper json', async () => {
        const res = await request(server).get('/');
        expect(res.body).toEqual({hackers: 'definitely from LAMBDA LOL'});
    })
})
