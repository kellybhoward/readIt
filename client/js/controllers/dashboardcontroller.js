myAppModule.controller('DashboardController', ['auth', 'store', '$http', '$scope', '$rootScope', 'DashboardFactory', 'ForumFactory', '$location', '$timeout', function(auth, store, $http, $scope, $rootScope, DashboardFactory, ForumFactory, $location, $timeout){
    console.log('got to dashboard controller!');
    $(document).ready(function(){
        $(".button-collapse").sideNav();
        $('.tooltipped').tooltip({delay: 50});
    })
    $scope.logout = function() {
        auth.signout();
        store.remove('profile');
        store.remove('token');
        $location.path('/');
    }
    //nav bar functions
    $scope.goToMyDashboard = function(){
        return $location.path('/mydashboard');
    }
    $scope.goToNewsfeed = function(){
        return $location.path('/newsfeed');
    }
    $scope.goToForum = function(){
        return $location.path('/forum');
    }
    $scope.goToEvents = function(){
        return $location.path('/events');
    }
    $scope.goToSuggestions = function(){
        return $location.path('/suggestions');
    }
    $scope.logout = function(){
        $rootScope.loggedIn = false;
        $rootScope.userName = "";
        return $location.path('/');
    }
    $scope.user = auth.profile;
    $scope.badges = [];
    DashboardFactory.getBadges(function(data){
        $scope.badges = data;
        console.log($scope.badges);
    })
    $scope.books = [];
    DashboardFactory.getBooks(function(data){
        $scope.books = data;
    })
    $scope.categories = [];
    ForumFactory.showCategories(function(data){
        console.log(data);
        for(var i = 0; i< data.length; i++){
            for(var b = 0; b<$scope.books.length; b++){
                if(data[i].name == $scope.books[b].categoryName){
                    data[i].books.push($scope.books[b]);
                }
                for(var t = 0; t<$scope.badges.length; t++){
                    if(data[i].name == $scope.badges[t].name){
                        console.log($scope.badges[t].name);
                        data[i].badge = $scope.badges[t];
                    }
                }
            }

        }
        $scope.categories = data;
        $('.tooltipped').tooltip({delay: 50});
    });
    $scope.toggleShowBooks = function(index){
        $("."+index).toggle();
    }
}])
