var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input")
var elOutput = document.querySelector(".js-result");

// the variable of elForm listens submit and if things that are located in form submitted the function will work. 
elForm.addEventListener("submit", function(evt){
  // preventDefault() method helps us to prevent refreshment of site
  evt.preventDefault();
  // this converts string to number that comes from input
  var inputValue = Number(elInput.value);
  // if input's value is divisible by 3 and 5, the output shows us FizzBuzz word
  if (inputValue % 3 == 0 && inputValue % 5 == 0 ){
    elOutput.textContent = "FizzBuzz";
  }
  // if input's value is divisible by 3, the output shows us Fizz word
  else if (inputValue % 3 == 0){
    elOutput.textContent = "Fizz";
  }
  // if input's value is divisible by 5, the output shows us Buzz word
  else if (inputValue % 5 == 0){
    elOutput.textContent = "Buzz";
  }
  // if input's value is not divisible by 3 and 5, the output shows us "this number is not divisible by 3 and 5"
  else {
    elOutput.textContent = `${inputValue} soni 3 ga ham 5 ga ham bo'linmaydi`;

  }
  // after entering number clears inside of input
  elInput.value = "";
})