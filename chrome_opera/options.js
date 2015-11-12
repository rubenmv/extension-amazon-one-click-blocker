/*global chrome, window, document, console*/
(function () {
	'use strict';
  
  // Letters, numbers and spaces up to 16 characters
  var regexPassword = /^[a-zA-Z0-9]{0,16}$/;
	
	function setInfoMessage(label, str) {
		// Update status to let user know options were saved.
		var status = document.getElementById(label);
		status.textContent = str;
		window.setTimeout(function () {
			status.textContent = "";
		}, 5000);
	}
  
  function resetOptions() {
    document.getElementById('password').value = "";
  }

	// Saves options to chrome.storage
	function saveOptions() {
		var password = document.getElementById('password').value;
    if(!regexPassword.test(password)) {
      setInfoMessage("statusPassword", "Password incorrect. Use letters and numbers up to 16 characters.");
      return false;
    }
		// Set the options object
		var options = {};
		options.password = password;

		chrome.storage.local.set(options, function () {
			// Update status to let user know options were saved.
      setInfoMessage("statusSave", "Options saved");
			// Check for error
			if (chrome.runtime.lastError !== undefined) {
				//console.error("An error ocurred saving options: " + chrome.runtime.lastError.string);
				//console.error(chrome.runtime.lastError);
        setInfoMessage("statusSave", "An error ocurred while saving.");
			}
			window.setTimeout(function () {
				status.textContent = '';
			}, 1800);
		});
	}
  
	//Restore user options on page load
	function restoreOptions() {
		var options = {};
		options.password = "";
		/*  *************
			Get the items from localStorage
				 ************* */
		chrome.storage.local.get(options, function (items) {
			// Check for error
			if (chrome.runtime.lastError !== undefined) {
				//console.error("An error ocurred restoring options: " + chrome.runtime.lastError);
				return;
			}
			// Get password
			document.getElementById('password').value = items.password;
		});
	}

	//Listener ftw
	document.addEventListener('DOMContentLoaded', restoreOptions);
	document.getElementById('save').addEventListener('click', saveOptions);
	document.getElementById('reset').addEventListener('click', resetOptions);
}());
