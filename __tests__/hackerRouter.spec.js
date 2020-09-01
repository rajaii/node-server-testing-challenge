const request = require('supertest');
const router = require('../hackers/hackerRouter.js');
const server = require('../api/server.js');
// in a job would have to test router and server to do all steps as integration for this will jump to server with direct router endpoints to streamline
describe('hackerRouter works properly', () => {
    it('returns proper status code on base route', async () => {
        const res = await request(server).get('/api/hackers');
        expect(res.status).toBe(200);
    })
    it('returns the proper data type on base route', async () => {
        const res = await request(server).get('/api/hackers');
        expect(res.type).toBe('application/json');
    })
    it('returns the proper amount of data', async () => {
        const res = await request(server).get('/api/hackers');
        expect(res.body).toEqual([{"id": 1, "name": "Ali", "password": "laskjfhewiug24hofuhwenilsjfnqleiashfkajfhquierasjkfa", "username": "hackamonga"}, {"id": 2, "name": "Chris", "password": "345623543245325235hofuhwenilsjfnqleiashfkajfhquierasjkfa", "username": "sluggzmnuggsa"}, {"id": 3, "name": "Ali", "password": "laskjfhewiug24hofuhasdfasdfasfdtrereiashfkajfhquierasjkfa", "username": "halo4"}]
        )
})
})