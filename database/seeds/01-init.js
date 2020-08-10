exports.seed = function(knex) {
  // 00-cleanup already cleaned out all the tables

  const roles = [
    {
      name: 'admin', // will be assigned an id of 1
    },
    {
      name: 'user', // will be assigned an id of 2
    },
  ];

  return knex('roles')
    .insert(roles)
    .then(() => console.log('\n== Seed data for roles table has been added. ==\n'));
};
