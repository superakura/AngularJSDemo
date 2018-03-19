var phonecatApp = angular.module("phonecatApp", []);

phonecatApp.controller("HomeCtrl", function($scope) {
    $scope.greeting = { text: "hello,world!" };

    $scope.btnShowHello = function() {
        alert("hello,world!");
    };
});

phonecatApp.controller('PhoneListCtrl', function($scope) {
    $scope.phones = [{
            'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.',
            'age': 1
        },
        {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.',
            'age': 2
        },
        {
            'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.',
            'age': 3
        }
    ];

    $scope.orderbyProp = 'age';
});

phonecatApp.controller('PhoneListHttpCtrl', function($scope, $http) {
    $http.get('data.json').success(function(data) {
        $scope.phones = data;
    });

    $scope.orderbyProp = 'age';
});