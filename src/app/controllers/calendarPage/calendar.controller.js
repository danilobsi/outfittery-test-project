import config from 'config/config';

// import heroPicture from 'img/main_photo.jpg';
// import feature1Picture from 'img/manSide.jpg';
// import feature2Picture from 'img/boxTwo.jpg';
// import feature3Picture from 'img/boxOne.jpg';
// import sentencePicture from 'img/stylist.jpg';

const CONTROLLER_NAME = 'CalendarController';

function calendarController($timeout, $http) {
    const vm = this;

    vm.countryCodes = ['Germany (+49)', 'Brazil (+55)'];
    vm.callFromStylist = true;

    $http.get('https://nrg-frontend-task-api.herokuapp.com/timeslots').then(
        (response) => {
            vm.timeslots = response.data;
        }, 
        (err) =>{

        });
    
    vm.submit = function (){
        alert('submitted')
    }
//   vm.heroPicture = heroPicture;
//   vm.feature1Picture = feature1Picture;
//   vm.feature2Picture = feature2Picture;
//   vm.feature3Picture = feature3Picture;
//   vm.sentencePicture = sentencePicture;
}

calendarController.$inject = ['$timeout', '$http', 'LoggerService', 'AbLoggerService'];

export { CONTROLLER_NAME as calendarControllerName, calendarController };
