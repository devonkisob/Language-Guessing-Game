console.log("script running");

const inputField = document.querySelector("#guess");

inputField.addEventListener("change", (e) => {
  console.log("Guess submitted!");
  let guess = inputField.value;
  console.log(guess);

  let languages = ["English", "Spanish", "Chinese", "Tagalog", "Vietnamese", "Arabic", "French", "Korean", "Russian"];

  // Loop searches for inputted language and removes hidden class
    for(let i = 0; i<languages.length; i++){
      if (guess === languages[i]){
        document.querySelector("#" + languages[i]).classList.remove("hidden");
      }
    }
  inputField.value = "";
});
