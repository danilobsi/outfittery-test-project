import config from 'config/config';

// import heroPicture from 'img/main_photo.jpg';

const CONTROLLER_NAME = 'SuccessController';

function successController($timeout, $http, $state) {
    const vm = this;
    var phone = null;
    if ($state.params.obj)
        phone = $state.params.obj.phone;
    vm.currentAppointment = null;
    vm.order = {
        PaymentMethod: {
            CardBrand: "MasterCard",
            CardNumber: "**** **** **** 8976"
        },
        DeliveryAddress: {
            Address: "Josh Homme c/0 Miller",
            ZipCode: 10997,
            City: "Berlin",
            Country: "Germany"
        },
        BillingAddress: {
            Address: "Josh Homme c/0 Miller",
            ZipCode: 10997,
            City: "Berlin",
            Country: "Germany"
        }
    }

    $http.get('https://nrg-frontend-task-api.herokuapp.com/appointments').then(
        (response) => {
            var appointments = response.data;
            if (appointments.length){
                appointments = appointments.filter((app) => {
                    return app.phone == phone;
                });

                if (appointments.length > 0)
                    vm.currentAppointment = appointments[0];
            }
        }, 
        (err) =>{

        });

    
}

successController.$inject = ['$timeout', '$http', '$state'];

export { CONTROLLER_NAME as successControllerName, successController };
