jQuery.githubUser = function(username, callback) {
  jQuery.getJSON("https://api.github.com/users/" + username + "/repos", callback);
}
 
jQuery.fn.loadRepositories = function(username) {
  this.html("<span>Loading...</span>");
 
  var target = this; 
  $.githubUser(username, function(data) {
    var repos = data;
    sortByName(repos);
 
    var list = $('<ul/>');
    target.empty().append(list);
    $(repos).each(function() {
      if (this.name != (username.toLowerCase()+'.github.io')) {
       list.append('<li><a href="'+ (this.homepage?this.homepage:this.html_url) +'">' + this.name + '</a></li>');
        if (this.description != null) {
                list.append('<dd>' + this.description +'</dd>');
        }
              list.append('</br>');
      }
      // list.append('<dt><a href="'+ this.url +'">' + this.name + '</a></dt>');
      // list.append('<dd>' + this.description + '</dd>');
    });
  });
 
  function sortByNumberOfWatchers(repos) {
    repos.sort(function(a,b) {
      return b.watchers - a.watchers;
    });
  }
   function sortByName(repos) {
        repos.sort(function(a,b) {
        return a.name - b.name;
       });
    }
};