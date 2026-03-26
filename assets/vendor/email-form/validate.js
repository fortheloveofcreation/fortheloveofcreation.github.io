(function () {
  "use strict";

  document.getElementById('email-form-fr').addEventListener('submit', function(e) {
            e.preventDefault();
            subjectField = document.getElementById('message-field')+"\n"+document.getElementById('name-field')+"("+document.getElementById('email-field')+")";
            if (!subjectField.value.trim()) {
                subjectField.value = `Message from website - ${new Date().toLocaleString()}`;
            }            
        });
  });
