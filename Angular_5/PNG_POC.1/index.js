// var nsg = require('node-sprite-generator');
 
// nsg({
//     src: [
//         'images/png'
//     ],
//     spritePath: 'images/sprite.png',
//     stylesheetPath: 'stylus/sprite.styl'
// }, function (err) {
//     console.log('Sprite generated!');
// });

// var sprite = require('css-sprite');
// sprite.create({
//   src: ['./images/*.png'],
//   out: './images',
//   name: 'sprites',
//   style: './images/scss/_sprites.scss',
//   cssPath: '../img',
//   processor: 'scss'
// }, function () {
//   console.log('done');
// });


// var sprite = require('node-sprite');
 
// sprite.sprites({path: './images/png'}, function(err, result) {
//   var globalSprite = result['global'];
  
//   console.log('animals/duck11111', globalSprite);
// });

// var sprity = require('sprity');
// sprity.create(options, cb);

var fs = require('fs');
fs.readFile('images/sprite.png.json', 'utf8', function readFileCallback(err, data){
  if (err){
      console.log(err);
  } else {
  obj = JSON.parse(data); //now it an object
  // console.log('111111111111', obj);
  for(var key in obj){
    if(obj.hasOwnProperty('coordinates')){
    console.log('2222222', key);
    }
    else{
      console.log("sdsd")
    }
  }
  // obj.table.push({id: 2, square:3}); //add some data
  // json = JSON.stringify(obj); //convert it back to json
  // fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back 
}});
