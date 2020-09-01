const db = require('../data/db-config.js');
const hackerModel = require('../hackers/hackerModel.js');

describe('hackermodel works properly', () => {
    describe('insert', () => {
        beforeEach(async () => {
            await db('hackers').truncate();
        })

        it('should insert 2 hackers', async () => {
            await hackerModel.add({name: 'gaffe', username: 'sjlkfdsdjfkl', password: 'tttttttt'});
            await hackerModel.add({name: 'jow', username: 'safda', password: 'hhhhh'});

            const hackers = await db('hackers');
            expect(hackers).toHaveLength(2);
        })
    })
})