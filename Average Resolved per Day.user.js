// ==UserScript==
// @name         Average Resolved per Day
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Finds your average resolved, just load the resolves by month
// @author       Jacob Gantz
// @match        https://ironbow.servicenowservices.com/sn_customerservice_case_list.do?*5Eresolved_atONThis%20month*
// @match        https://ironbow.servicenowservices.com/sn_customerservice_case_list.do?*5Esys_created_onONThis%20month*
// @icon         https://www.google.com/s2/favicons?domain=servicenowservices.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var hiddenField = document.querySelector("[id*='_total_rows']");
console.log(hiddenField.innerHTML);

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd;



var hf = document.querySelector("[id*='_last_row']");
        hf.innerHTML = (Math.round(hiddenField.innerHTML / today * 100) / 100).toFixed(2);

})();