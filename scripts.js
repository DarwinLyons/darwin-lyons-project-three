// Create an array of compliment options with type of relationship- with the relationships all being true or false

const complimentOptions = [ 
  //0
  {
  compliment: `, you light up my life.`,
  friend: true,
  relative: false,
  romanticPartner: true,
  potential: true,
},
//1
  {
  compliment: `, you're so fun to be around, I would wait in line at the airport with you.`, 
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//2
{
  compliment: `, when you pop into my head, I think: I'm so lucky you're in my life.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,   
},
//3
{
  compliment: `, you make life look easy.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true, 
},
//4
{
  compliment: `, you always speak at the exact right volume.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//5
{
  compliment: `, when I think about the apocolypse, I want you on my End of the World team.`,
  friend: true,
  relative: false,
  romanticPartner: false,
  potential: true,
},
//6
{
  compliment: `, the fact that you're in my family makes me feel like I'm about 100 degrees cooler by association.`,
  friend: false,
  relative: true,
  romanticPartner: false,
  potential: false,
},
//7
{
  compliment: `, you're the best!`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//8
{
  compliment: `, when I'm with you it's like time doesn't even exist because you're so fun. You broke the time/space continuum with your awesomeness!`,
  friend: true,
  relative: false,
  romanticPartner: true,
  potential: true,
},
//9
{
  compliment: `, you make me laugh so much I giggle in public when I think about things you've said.`,
  friend: true,
  relative: false,
  romanticPartner: true,
  potential: true,
},
//10
{
  compliment: `, you've made my life so fun I don't have anything to talk to my therapist about anymore.`,
  friend: false,
  relative: false,
  romanticPartner: true,
  potential: false,
},
//11
{
  compliment: `, you're a magical, intelligent mermaid.`,
  friend: true,
  relative: false,
  romanticPartner: true,
  potential: true,
},
//12
{
  compliment: `: (proper noun) Definition: a human being who is more awesome than all the other human beings.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//13
{
  compliment: `, you make doing taxes fun.`,
  friend: false,
  relative: false,
  romanticPartner: true,
  potential: false,
},
//14
{
  compliment: `, I think about the things you say all the time. You're like my own personal podcast.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//15
{
  compliment: `, if you were a food you'd be cake. Because cake is the best.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//16
{
  compliment: `! You are the smartest person I know!`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//17
{
  compliment: `, I wish I could go back in time and introduce us as children so we'd have a lifetime of inside jokes.`,
  friend: true,
  relative: false,
  romanticPartner: true,
  potential: true,
},
//18 
{
  compliment: `, you make me so happy I literally forgot what sadness feels like`,
  friend: false,
  relative: false,
  romanticPartner: true,
  potential: true,
},
//19
{
  compliment: `, I would hang out with you in the middle of summer next to a garbage dump, that's how much I like hanging out with you.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
}
]

//name space

//document ready
$(function() {

  
  //bind click event with button
  $('button').on('click', function(event) {
    //prevent default behaviour of submit button
    event.preventDefault();
    
    // Capturing the complimentee's name
    const complimenteeName = $('input[type=text]').val();

    //Capturing the complimentee's relationship
    const relationshipCapture = $('input[name=relationship]:checked').val();

    //checking if name input is a number
    function isNumeric(nameNumber) {
      return ($.isNumeric(complimenteeName));
    }

    //checking if the radio buttons are checked - I found this on stack overflow
    function atLeastOneRadio() {
      return ($('input[type=radio]:checked').size() > 0);
    }

    
    // creating a requirement for a correct name 
    if (complimenteeName === '' || complimenteeName === ' ' || complimenteeName === undefined || isNumeric() === true ) {
      // add this text to the class nameAlert and the animated classes
      $('.nameAlert').html(`<p>We need your complimentee's name</p>`).addClass(`alert animated bounceIn delay-2s`);
      //go into html and body (to get all browsers), animate and then scroll to the ID nameScroll, offset gets the coordinates and .top goes to the top of the coordinates, then 2000 is the milisecond count of the animation. I found this answer on jsfiddle by kevinPHPkevin
      $(`html, body`).animate({
        scrollTop: $(`#nameScroll`).offset().top
      }, 2000);
      //if the relationship inputs are empty
    } else if (atLeastOneRadio() === false) {
      //add this alert to relationshipAlert the animated classes
      $('.relationshipAlert').html(`<p>We need to know your relationship!</p>`).addClass(`alert animated bounceIn delay-2s`);
      //and scroll to the id relationshipScroll
      $(`html, body`).animate({
        scrollTop: $(`#relationshipScroll`).offset().top
      }, 2000); 
    } else {
      //run function for random generator 
      runFilter(complimenteeName, relationshipCapture);
      //scroll to see the answer
      $(`html, body`).animate({
        scrollTop: $(`#scrollBottom`).offset().top
      }, 2000); 
    }
        
    //on click
  })
  //document ready 
});

//Event listener to add new image to the radio button when selected
$('input[name=relationship]').on('change', function (event) {
  //create a variable that goes into the direct sibling of this and finds the class far inside that sibling
  const checkBox = $(this).next(`label`).find('.far');
  //make a variable to store the font awesome class in all the inputs
  const allChecks = $(`input[name=relationship]`).next(`label`).find('.far');
  
  //remove the checked class and readd the circle class if someone navigates away from this radio button
  allChecks.removeClass(`fa-check-circle`).addClass(`fa-circle`);
  
  //add the checked class to the selected radio button
  checkBox.removeClass(`fa-circle`).addClass('fa-check-circle');
});

 
//Create a random index that will take the filtered results from the runFilter function
function randoIndex(optionsArray) {
  console.log(optionsArray)
  //Generating a random number between 0 and the final index position value 
  const index = Math.floor(Math.random() * optionsArray.length);
  console.log(index);
  //Returning our passed in array with a specific index value attached
  return optionsArray[index]
  };

// create a function that takes two perameters, that will be the name and relationship the user inputs       
const runFilter = (name, chosenRelationship) => {
  //new variable
  const filterCompliments = () => {
    //what is selected?
    const filtered = complimentOptions.filter((complimentOption) => {
      // if the relationship is selected, filter the compliments where that relationship is true and put them in an array
      if (chosenRelationship === 'friend') {
        return complimentOption.friend === true;
      } else if (chosenRelationship === 'relative') {
        return complimentOption.relative === true;
      } else if (chosenRelationship === 'romanticPartner') {
        return complimentOption.romanticPartner === true;
      } else if (chosenRelationship === 'potential') {
        return complimentOption.potential === true;
      }
    });
    return filtered;
  }

  // Generating a random index value for the appropriate compliment options array
  const optionsToDisplay = randoIndex(filterCompliments());
  console.log(optionsToDisplay);
  // Printing to the page, the name of the random compliment that is stored in our optionsToDisplay variable 
  $(`.results`).html(`<h3>${name}${optionsToDisplay.compliment}</h3>`);
  
  //add text above twitter button
  $(`.twitterText`).html(`<p>Share your compliment on twitter!</p>`);
  
  //saves tweet button tag- Shane Keulen helped me with this
  const tweetButton = $(`<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button hidden" data-size="large"
    data-text="${name}${optionsToDisplay.compliment}" 
    data-show-count="false" id="tweetShare">Tweet</a>`);
    //puts twitter button on page
  $(`.twitterButton`).html(tweetButton);
  //twitter widget from twitter
  twttr.widgets.load();

  //adding try again text
  $(`.tryAgain`).html(`<p>Not exactly what you want to say?</p>`);
  //changing the button text after reset
  $(`.button`).html(`Compliment again!`);
  //removing original instructions
  $(`.clickRemove`).remove();
}
          
