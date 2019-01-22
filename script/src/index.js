import $ from 'jquery';
import {handleInput} from './weather';
import {clockStart} from './clock.js';

$(document).ready(function() {
    clockStart();

    $('#submitWeather').click(handleInput);
    $('input').keydown(handleInput);
})
           
