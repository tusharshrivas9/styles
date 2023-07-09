document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('input');
    var submitButton = document.getElementById('submit');
    var list = document.getElementById('list');
  
    submitButton.addEventListener('click', function() {
      var userInput = input.value;
      if (userInput !== '') {
        var listItem = document.createElement('li');
        listItem.textContent = userInput;
        list.appendChild(listItem);
        input.value = '';
      }
    });
  });
  