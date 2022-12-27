const whichSchool  = function (age) {
  //If students are under 13, they should go to Elementary School.
  if (age < 13) {
    return "Elementary School";
  }
  //If students are between 13 and 18, they should go to Secondary School.
  else if (age >= 13 && age <= 18) {
    return "Secondary School";
  }
  //If students are older than 18, they should go to Lighthouse Labs.
  else {
    return "Lighthouse Labs";
  }
};


console.log(whichSchool(35));
