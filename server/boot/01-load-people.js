'use strict';

// to enable these logs set `DEBUG=boot:02-load-users` or `DEBUG=boot:*`
var log = require('debug')('boot:01-load-people');

function getPeople() {
  return [
    {id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida'},
    {id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California'},
    {id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York'},
    {id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota'},
    {id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota'},
    {id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina'},
    {id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming'},
    {id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah'}
  ];
}

module.exports = function (app) {

  createDefaultUsers();

  function createDefaultUsers() {

    log('Creating people');

    var res = [];
    var People = app.models.People;
    getPeople().forEach(function(ppl) {
      People.findOrCreate(
        {where: {id: ppl.id}},
        ppl,
        function(err, newPerson, created) {
          if ( err ) {
            console.log(err);
            return;
          }
          console.log('Created newPerson: ', newPerson);
          res.push(newPerson);
        }
      )
    });
    return res;
  }

};
