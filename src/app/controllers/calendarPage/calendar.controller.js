import config from 'config/config';

// import heroPicture from 'img/main_photo.jpg';
// import feature1Picture from 'img/manSide.jpg';
// import feature2Picture from 'img/boxTwo.jpg';
// import feature3Picture from 'img/boxOne.jpg';
// import sentencePicture from 'img/stylist.jpg';

const CONTROLLER_NAME = 'CalendarController';

function calendarController($timeout, $http, $state) {
    const vm = this;

    vm.countryCodes = ['Germany (+49)', 'Brazil (+55)'];
    vm.callFromStylist = true;
    vm.obs = "";

    $http.get('https://nrg-frontend-task-api.herokuapp.com/timeslots').then(
        (response) => {
            vm.timeslots = response.data;
        }, 
        (err) =>{

        });
    
    vm.submit = function (){
        var appointment = {
            date: vm.currentDate,//'yyyy-MM-dd', 
            slot: vm.currentTime,//'HH:mm', 
            orderConfirmationComment: vm.obs,//'TEXT', 
            phone: vm.phoneNumber//'+4901234567890'
        };
        if (vm.callFromStylist){
            $http.post('https://nrg-frontend-task-api.herokuapp.com/appointments', appointment).then(
            (response) => {
                submitAction(appointment);
            }, 
            (err) =>{
                alert('error');
            });
        }
        else
            submitAction(appointment);
    }

    function submitAction(appointment){        
        $state.go('successPage', {obj: appointment});
    }
//   vm.heroPicture = heroPicture;
//   vm.feature1Picture = feature1Picture;
//   vm.feature2Picture = feature2Picture;
//   vm.feature3Picture = feature3Picture;
//   vm.sentencePicture = sentencePicture;
}

calendarController.$inject = ['$timeout', '$http', '$state'];

export { CONTROLLER_NAME as calendarControllerName, calendarController };
