(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$q', 'logger', 'People'];
  /* @ngInject */
  function dataservice($q, logger, People) {
    var service = {
      getPeople: getPeople,
      getMessageCount: getMessageCount
    };

    return service;

    function getMessageCount() {
      return $q.when(72);
    }

    function getPeople() {
      return People
        .find()
        .$promise
        .then(success)
        .catch(fail);

      function success(response) {
        return response;
      }

      function fail(error) {
        var msg = 'query for people failed. ' + error.data.description;
        logger.error(msg);
        return $q.reject(msg);
      }
    }
  }
})();
