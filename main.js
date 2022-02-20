let input = document.getElementById("user-caption");
let write = document.getElementById("test-typing");
let erase = document.getElementById("test-erasing");
let writing = document.getElementById("caption");

function animate(i) {
  var text = input.value;
  if (text === "") {
    text = "typing test!";
  }
  var c = input.value.length;
  if (input.value.length === 0) {
    c = text.length;
  }
  myVar = setTimeout(function () {
    output = `<div class="v${i}">${text[i] === " " ? "&nbsp;" : text[i]}</div>`;
    writing.innerHTML += output;
    if (i == c - 1) {
      clearTimeout(myVar);
      return;
    }
    animate(i + 1);
  }, 30);
}

write.addEventListener("click", () => {
  var i = 0;
  animate(i);
});

function animated(i) {
  var c = input.value.length;
  var text = input.value;
  if (text === "") {
    text = "typing test!";
  }
  var c = input.value.length;
  if (input.value.length === 0) {
    c = text.length;
  }
  myVar = setTimeout(function () {
    writing.children[i].innerHTML = "";
    if (i < c - (c - 1)) {
      clearTimeout(myVar);
      return;
    }
    animated(i - 1);
  }, 30);
}

erase.addEventListener("click", () => {
  c = writing.children.length;
  var i = c - 1;
  animated(i);
});
