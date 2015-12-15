var repos = {};

repos.all = [];

repos.requestAll = function(callback) {
  $.ajax({
    type: 'GET',
    url:'http://api.github.com/users/ardianajvazi/repos?sort=updated',
    header: {Authorization: githubToken}
  }).done(function(data){
    repos.all = data;
    // console.log(data);
  }).done(callback);
};
