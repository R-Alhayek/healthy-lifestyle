alert ('Wlcome to your healthy life style guide:)');

/*var userAge = prompt('Enter your age')
var age= 26;
if (userAge > age)
{
  alert('it is time to be healthy')
 
} else if (userAge <age)
{
  alert('you should start trying to be healthy');
  
} else if (userAge == age)
{
  alert ('perfect time to a healthy life style');
 
  
}*/



var foodtype = prompt ('please enter your favorite healthy food type(protein , fruit)?');

while (foodtype !== 'protein' && foodtype !== 'fruit'){
  foodtype = prompt ('please enter your favorite healthy food type(protein , fruit)?');
}

 if (foodtype == 'protein')
  {var image = '<img src="https://www.rdasia.com/wp-content/uploads/sites/2/2020/06/protein-shutterstock_721319773-770-scaled.jpg"alt = "protein"/>';
  document.write (image);
  } else if (foodtype == 'fruit')
  { var image2 = '<img src="https://image.sciencenorway.no/1438480.jpg?imageId=1438480&panow=0&panoh=0&panox=0&panoy=0&heightw=0&heighth=0&heightx=0&heighty=0&width=1200&height=630"alt="fruit"/>';
  document.write(image2);
  }

var image3 = '<img src="https://d50b62f6164e0c4a0279-11570554cb5edae3285603e6ab25c978.ssl.cf5.rackcdn.com/html_body_blocks/images/000/013/890/original/EasyHealthySnacks_en65ab5213130c9862172ac11435f055d9_en38b28edc7b2830a46f6e00bfeceeb1b6.jpg?1596090039"alt="snack"/>';
var snackNum = prompt ( 'How many snacks do you have per day?')
for (var i = 1; i <= snackNum; i++){
 document.write(image3)

}

var image3 = '<img src="https://d50b62f6164e0c4a0279-11570554cb5edae3285603e6ab25c978.ssl.cf5.rackcdn.com/html_body_blocks/images/000/013/890/original/EasyHealthySnacks_en65ab5213130c9862172ac11435f055d9_en38b28edc7b2830a46f6e00bfeceeb1b6.jpg?1596090039"alt="snack"/>';
var snackNum = prompt ( 'How many snacks do you have per day?')
for (var i = 1; i <= snackNum; i++){
 document.write(image3)

}

function askUser(){
  var age = 26;
  var userAge = Number(prompt('Enter your age?'));
 if (userAge > age)
{
  alert('it is time to be healthy')
 
} else if (userAge <age)
{
  alert('you should start trying to be healthy');
  
} else if (userAge == age)
{
  alert ('perfect time to a healthy life style');
 
  
}
}


