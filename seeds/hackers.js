
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hackers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('hackers').insert([
        {name: 'Ali', username: 'hackamonga', password: 'laskjfhewiug24hofuhwenilsjfnqleiashfkajfhquierasjkfa'},
        {name: 'Chris', username: 'sluggzmnuggsa', password: '345623543245325235hofuhwenilsjfnqleiashfkajfhquierasjkfa'},
        {name: 'Ali', username: 'halo4', password: 'laskjfhewiug24hofuhasdfasdfasfdtrereiashfkajfhquierasjkfa'},
      ]);
    });
};
