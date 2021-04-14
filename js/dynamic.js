alert ('Wlcome to your healthy life style guide:)');
var userAge = prompt('Enter your age')
var age = 26;

if (userAge > age)
{
  alert('it is time to be healthy')
  console.log ('it is time to be healthy');
} else if (userAge <age)
{
  alert('you should start trying to be healthy');
  console.log ('you should start trying to be healthy');
} else if (userAge == age)
{
  alert ('perfect time to a healthy life style');
  console.log ('perfect time to a healthy life style')
}

var foodtype = prompt ('please enter your favorite healthy food type(protein , fruit)?');
if (foodtype == 'protein')
{var image = '<img src="https://www.rdasia.com/wp-content/uploads/sites/2/2020/06/protein-shutterstock_721319773-770-scaled.jpg"alt = "protein"/>';
document.write (image);
} else if (foodtype == 'fruit')
{ var image2 = '<img src="https://image.sciencenorway.no/1438480.jpg?imageId=1438480&panow=0&panoh=0&panox=0&panoy=0&heightw=0&heighth=0&heightx=0&heighty=0&width=1200&height=630"alt="fruit"/>';
document.write(image2);
}
