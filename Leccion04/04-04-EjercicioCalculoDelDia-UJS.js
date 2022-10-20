let whatTimeIsIt = 16;
let message;

if (whatTimeIsIt >= 06 && whatTimeIsIt <= 11) {
  message = "Good Morning";
} 
else if (whatTimeIsIt >= 12 && whatTimeIsIt <= 18) {
  message = "Good Afternoon";
} 
else if (whatTimeIsIt >= 19 && whatTimeIsIt <= 24) {
  message = "Good Evening";
} 
else if (whatTimeIsIt >= 00 && whatTimeIsIt <= 06){
  message = "Sleeping";
}
else {
  message = "Time not valid";
};

console.log(message);