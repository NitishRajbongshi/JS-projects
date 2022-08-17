let team_a = document.querySelector("#team_a");
let team_b = document.querySelector("#team_b");
let score_a = document.querySelector("#score_a");
let score_b = document.querySelector("#score_b");
let sel = document.querySelector("#sel");
let results = document.querySelector('#results');
let rel_texta = document.querySelector('#rel_texta');
let rel_textb = document.querySelector('#rel_textb');

let max;
let x = 0;
let y = 0;

sel.addEventListener('click', () => {
  max = sel.value;
});

team_a.addEventListener('click', () => {
  if (x + y < max) {
    x = x + 1;
    score_a.innerText = x;
  }
  if (x + y == max) {
    if (results.innerText == "") {
      game_over();
      if (x > y) {
        rel_texta.innerText = "Winner !";
        rel_texta.style.backgroundColor = "green";
        rel_texta.style.color = "white";
        rel_texta.style.padding = "12px";

        rel_textb.innerText = "Loser !";
        rel_textb.style.backgroundColor = "grey";
        rel_textb.style.color = "white";
        rel_textb.style.padding = "12px";
      }
      else if (y == x) {
        rel_texta.innerText = "Draw !";
        rel_texta.style.backgroundColor = "lightblue";
        rel_texta.style.color = "white";
        rel_texta.style.padding = "12px";

        rel_textb.innerText = "Draw !";
        rel_textb.style.backgroundColor = "lightblue";
        rel_textb.style.color = "white";
        rel_textb.style.padding = "12px";
      }
      else {
        rel_textb.innerText = "Winner !";
        rel_textb.style.backgroundColor = "green";
        rel_textb.style.color = "white";
        rel_textb.style.padding = "12px";

        rel_texta.innerText = "Loser !";
        rel_texta.style.backgroundColor = "grey";
        rel_texta.style.color = "white";
        rel_texta.style.padding = "12px";
      }
    }
  }
});
team_b.addEventListener('click', () => {
  if (x + y < max) {
    y = y + 1;
    score_b.innerText = y;
  }
  if (x + y == max) {
    if (results.innerText == "") {
      game_over();
      if (y > x) {
        rel_textb.innerText = "Winner !";
        rel_textb.style.backgroundColor = "green";
        rel_textb.style.color = "white";
        rel_textb.style.padding = "12px";

        rel_texta.innerText = "Loser !";
        rel_texta.style.backgroundColor = "grey";
        rel_texta.style.color = "white";
        rel_texta.style.padding = "12px";


      }
      else if (y == x) {
        rel_texta.innerText = "Draw !";
        rel_texta.style.backgroundColor = "lightblue";
        rel_texta.style.color = "white";
        rel_texta.style.padding = "12px";

        rel_textb.innerText = "Draw !";
        rel_textb.style.backgroundColor = "lightblue";
        rel_textb.style.color = "white";
        rel_textb.style.padding = "12px";
      }
      else {
        rel_texta.innerText = "Winner !";
        rel_texta.style.backgroundColor = "green";
        rel_texta.style.color = "white";
        rel_texta.style.padding = "12px";

        rel_textb.innerText = "Loser !";
        rel_textb.style.backgroundColor = "grey";
        rel_textb.style.color = "white";
        rel_textb.style.padding = "12px";
      }
    }
  }
});

function game_over() {
  results.innerText = "Game over !";
  results.style.backgroundColor = 'red';
  results.style.padding = '17px 0px ';
}