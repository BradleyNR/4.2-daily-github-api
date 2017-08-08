var $ = require('jquery');
var handlebars = require('handlebars');



function displayData(data){
  //defines HTML area
  var $basic = $('.the-basics');
  var $story = $('.the-story');
  var $pic = $('.pic');
  //defines templates to be useable HTML
  var sourceBasic = $('#basics-template').html();
  var sourceStory = $('#story-template').html();
  var sourcePic = $('#pic-template').html();
  //compile
  var templateBasic = handlebars.compile(sourceBasic);
  var templateStory = handlebars.compile(sourceStory);
  var templatePic = handlebars.compile(sourcePic);

  console.log(data);

  //passing data into functions to append
  $basic.append(templateBasic(data));
  $story.append(templateStory(data));
  $pic.append(templatePic(data));
};


fetch('https://api.github.com/users/bradleyNR').then(function(response){
  return response.json();
}).then(function(data){
  displayData(data);
})
