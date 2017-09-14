import config from 'config/config';

const CONTROLLER_NAME = 'CalendarController';

function calendarController($timeout, $http, $state) {
    const vm = this;

    vm.countryCodes = [{ code: '+49', label: 'Germany (+49)'}, { code:'+55', label:  'Brazil (+55)'}];
    vm.countryCode = { code: '+49', label: 'Germany (+49)'};

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
            phone: vm.countryCode.code + vm.phoneNumber//'+4901234567890'
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
}

calendarController.$inject = ['$timeout', '$http', '$state'];

export { CONTROLLER_NAME as calendarControllerName, calendarController };
