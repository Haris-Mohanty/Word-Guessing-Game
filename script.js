let words = [
  {
    word: "comfort",
    hint: "A pleasant feeling of relaxation"
  },
  {
    word: "tongue",
    hint: "The muscular organ of mouth"
  },
  {
    word: "expansion",
    hint: "The process of increase or grow"
  },
  {
    word: "country",
    hint: "A politically identified region"
  },
  {
    word: "statement",
    hint: "A declaration of something"
  },
  {
    word: "second",
    hint: "One-sixtieth of a minute"
  },
  {
    word: "library",
    hint: "Place containing collection of books"
  },
  {
    word: "group",
    hint: "A number of objects or persons"
  },
  {
    word: "taste",
    hint: "Ability of tongue to detect flavour"
  },
  {
    word: "store",
    hint: "Large shop where goods are traded"
  },
  {
    word: "field",
    hint: "Area of land for farming activities"
  },
  {
    word: "friend",
    hint: "Person other than a family member"
  },
  {
    word: "pocket",
    hint: "A bag for carrying small items"
  },
  {
    word: "addition",
    hint: "The process of adding numbers"
  },
  {
    word: "meeting",
    hint: "Event in which people come together"
  },
  {
    word: "number",
    hint: "Math symbol used for counting"
  },
  {
    word: "exchange",
    hint: "The act of trading"
  },
  {
    word: "canvas",
    hint: "Piece of fabric for oil painting"
  },
  {
    word: "garden",
    hint: "Space for planting flower and plant"
  },
  {
    word: "position",
    hint: "Location of someone or something"
  },
  {
    word: "feather",
    hint: "Hair like outer covering of bird"
  },

  {
    word: "needle",
    hint: "A thin and sharp metal pin"
  },
  {
    word: "expert",
    hint: "Person with extensive knowledge"
  },
  {
    word: "book",
    hint: "People read for knowledge"
  },
];
let display_text = document.getElementById("display-text");
let word_hint = document.getElementById("word-hint");
let refresh_btn = document.getElementById("refresh-btn");
let check_btn = document.getElementById("check-btn");
let user_input = document.getElementById("user-input");
let time = document.getElementById("timer");
let correct_word;
let timer;

function timer_func(maxTime){
  clearInterval(timer);
  timer = setInterval(function(){
    if(maxTime > 0)
    {
     maxTime--;
     return time.innerText = maxTime;
    }
    clearInterval(timer);
  },1000)
}

function game() {
  timer_func(30);
  let word_obj = words[Math.floor(Math.random() * words.length)];
  let word_array = word_obj.word.split("");
  let i, j;
  for (i = word_array.length - 1; i > 0; i--) {

    j = Math.floor(Math.random() * (i + 1));
    [word_array[i], word_array[j]] = [word_array[j], word_array[i]];//

  }
  display_text.innerText = word_array.join("");
  word_hint.innerText = word_obj.hint;
  user_input.setAttribute("maxlength", word_array.length);
  correct_word = word_obj.word;
}
game();

const check_word = () =>{
  let user_word = user_input.value.toLowerCase();
  if(user_word != ""){
    if(user_word == correct_word){
    swal("Congrats!", "You Entered a Correct Word !", "success");
      game();
      user_input.value = "";
      user_input.reset();
    }else{
    swal("Try Again!", "You Entered a Wrong Word !", "error");
    }
  }else{
    swal("Input Field Empty!", "Please Fill The Input Field !", "warning");
  }
}
//REFRESH BUTTON
refresh_btn.addEventListener('click', () => {
  game();
});
check_btn.addEventListener('click', () => {
  check_word();
});