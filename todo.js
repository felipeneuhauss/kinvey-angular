function TodoCtrl($scope) {
    $scope.todos = [
        {text:'learn angular', done:true},
        {text:'build an angular app', done:false}];


    $scope.addTodo = function() {
        Kinvey.DataStore.save('Todos', {text:$scope.todoText, done:false}, {
            success: function (todo) {
                $scope.todos.push(todo);
            }
        });

        $scope.todoText = '';
    };

    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    $scope.archive = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done) $scope.todos.push(todo);
        });
    };
}





















//_this.scope.$apply(function() {
//    return _this.scope['customerList'] = _this.prepareDataToList(list);
//})