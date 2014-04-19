// Declare the events template
Template.cometInput.events({
  'submit': function cometInputSubmit(event) {
  	event.preventDefault();
    console.log(this, event);
  }
});