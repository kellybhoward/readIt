myAppModule.controller('ForumCatController', ['auth', 'store', '$http', '$scope', '$rootScope', 'ForumCatFactory', '$location', function(auth, store, $http, $scope, $rootScope, ForumCatFactory, $location){
    console.log('got to forum cat controller!');
    $(document).ready(function(){
        $(".button-collapse").sideNav();
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
    $scope.myComments = {};
    $scope.showComments = function($index){
        if($scope.myComments.$index == true){
            $scope.myComments.$index = false;
        }
        else{
            $scope.myComments.$index = true;
        }
    }
    $scope.category = {};
    if($rootScope.categoryName == undefined){
        return $location.path('/forum');
    }
    else{
        var categoryName = {name:$rootScope.categoryName};
        console.log(categoryName);
        ForumCatFactory.getCategory(categoryName, function(data){
            $scope.category = data;
        })
    }
    $scope.user = auth.profile;
    console.log($scope.user.user_id);
    $scope.$watch("$scope.category", function(newValue, oldValue) {
        return $scope.category
    })

    $scope.addPost = function(){
        console.log($scope.newPost);
        var user = {user_id: $scope.user.user_id};
        ForumCatFactory.getUser(user, function(user){
            console.log($scope.category);
            var totalPost = {user: user, category: $scope.category, post: $scope.newPost};
            console.log(totalPost);
            ForumCatFactory.addPost(totalPost, function(){
                console.log($scope.category.name);
                var categoryName = {name: $scope.category.name};
                console.log(categoryName);
                ForumCatFactory.getCategory(categoryName, function(data){
                    $scope.category = data;
                    $scope.newPost = {};
                });
            })
        })
    }
    $scope.newComment = {};
    $scope.addComment = function(post_id, index){
        var user = {user_id: $scope.user.user_id};
        ForumCatFactory.getUser(user, function(user){
            var postId = {id: post_id};
            ForumCatFactory.getPost(postId, function(post){
                var totalComment = {user: user[0], post: post, comment: $scope.newComment[index]};
                ForumCatFactory.addComment(totalComment, function(){
                    var categoryName = {name: $scope.category.name};
                    console.log(categoryName);
                    ForumCatFactory.getCategory(categoryName, function(data){
                        $scope.category = data;
                        $scope.newComment = {};
                    });
                })
            })
        })
    }
}])
