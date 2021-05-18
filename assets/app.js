/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// app.js

// require jQuery normally
const $ = require('jquery');

// create global $ and jQuery variables
global.$ = global.jQuery = $;

// any CSS you import will output into a single css file (app.scss in this case)
import './styles/app.scss';
import "bootswatch/dist/lux/bootstrap.min.css";
import "bootstrap";
// start the Stimulus application


$('.custom-file-input').on('change', function (e){
    var inputfile = e.currentTarget;
    $(inputFile).parent().find('.custom-file-label').html(inputFile.files[0].name);
})


