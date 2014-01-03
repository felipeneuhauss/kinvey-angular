function LoginController($scope)
{
    $scope.login = function() {
        var promise = Kinvey.User.login($scope.username, $scope.password , {
            success: function(response) {
                console.log(response);
            }
        });
    }

    $scope.save = function() {
        var promise = Kinvey.User.signup($scope.signUpForm, {
            success: function(response) {
                var promise = Kinvey.User.verifyEmail(response.username, {
                    success: function() {
                        alert('Sucesso! E-mail de autenticação enviado com sucesso.');
                    }
                });
            }
        });
    }

    $scope.logout = function() {
        var user = Kinvey.getActiveUser();
        if(null !== user) {
            var promise = Kinvey.User.logout({
                success: function() {
                }
            });
        }
    }
}









































///**
// * Created with JetBrains PhpStorm.
// * User: felipeneuhauss
// * Date: 02/01/14
// * Time: 16:14
// * To change this template use File | Settings | File Templates.
// */
//function LoginController($scope){
//
//    $scope.signUp = {};
//
//    $scope.login = function() {
//        var promise = Kinvey.User.login($scope.username, $scope.password, {
//            success: function(response) {
//                window.location.href = '/index.html';
//            }
//        });
//    }
//
//    $scope.signUp = function() {
//        console.log($scope.signUpForm)
//        var promise = Kinvey.User.signup($scope.signUpForm, {
//            success: function(response) {
//                window.location.href = '/index.html';
//            }
//        });
//    }
//}