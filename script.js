function selectButton(button) {
    // Remove 'selected' class from all buttons
    var buttons = document.getElementsByClassName('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('selected');
    }
    
    // Add 'selected' class to the clicked button
    button.classList.add('selected');
  }