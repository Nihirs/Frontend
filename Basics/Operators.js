let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
  ]

  let studentsWhoPass = allStudents.filter(Checker);

  function Checker(value, index, array){
    if(value>3){
        console.log(value);
        return value;

    }
    else if(value==="A"|| value==="A-" || value==="B" || value==="B-" || value=="C"){
        console.log(value);
        return value;
    }
  }