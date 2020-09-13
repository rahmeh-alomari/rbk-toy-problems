//1.Write a function called sameLength that takes two strings as parmeters, 
//and returns true if those strings have the same length, and false otherwise.
function sameLength(str1, str2) {
  return ((str1.length) === (str2.length))
}

//2.Write a function called passwordLongEnough that takes a 'password' as a parameter 
//and returns true if that password is long enough -- you get to decide what constitutes long enough.
function passwordLongEnough(password) {

  return (password.length >= 15)
}

//3.Write a function called rentalCar that takes a person's name and age as parmeters, 
//and returns either 'You cannot have the keys, .', or "Have fun driving", 
// depending on whether or not the person is old enough. 
//In the US, most rental car companies do not allow you to rent a car until you are 21.
function rentalCar(name, age) {
  if (age >= 21) {
    return "Have fun driving"
  }
  return "You cannot have the keys, " + name + "."
}

// 4.Write a function called max that takes two numbers as parameters, 
//and returns the larger one.
function max(n1, n2) {
  if (n1 > n2) {
    return n1
  }
  else if (n1 < n2) {
    return n2
  }
  return "They are equal, both are Max"
}

// 5.Write a function called  min that takes two numbers as parameters,
// and returns the smaller one.
function min(n1, n2) {
  if (n1 < n2) {
    return n1
  }
  else if (n1 > n2) {
    return n2
  }
  return "They are equal, both are Min"
}