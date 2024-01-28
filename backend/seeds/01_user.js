/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_data').del()
  await knex('user_data').insert([
    {first_name: 'Bill', last_name: 'Stein', username: 'Bstein', password: "$2b$10$p7388lCoNaqD4nYHUGdCu.DVQcAwqlHl6xZj6jJ7aU5Q/h0v1bJ1G",},
    {first_name: 'Judy', last_name: 'Griffin', username: 'Jgriffin', password: "$2b$10$rchqcmsSjvXXJUe1w1LpA.TNFAcHCYm362vXOONjVWBDn8qua0vfW",}
  ]);
};
