import appView from 'controllers/app/app.view.html';
import calendarView from 'controllers/calendarPage/calendar.view.html';

function routing($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: appView,
      controller: 'AppController',
      controllerAs: '$ctrl',
    })
    .state('calendarPage', {
      url: '/Calendar_Page/',
      templateUrl: calendarView,
      controller: 'CalendarController',
      controllerAs: '$ctrl',
    });
}

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default routing;
