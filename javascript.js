const deleteBtn = document.querySelector('#delete-btn');

deleteBtn.addEventListener('click', function() {

  const checkboxes = document.querySelectorAll('.checkbox');

  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      checkbox.closest('li').remove();
    }
  });
});

var myWord = document.getElementById("myWord");
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];

myWord.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
