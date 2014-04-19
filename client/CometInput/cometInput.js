// Declare the events template
Template.cometInput.events({
	'submit': function cometInputSubmit(event) {
		event.preventDefault();

		// Get the content
		var $form = $(event.currentTarget),
			$input = $form.find('.comet-input-text');

		Comets.insert({
			text: $input.val()
		}, function() {
			$input.val('');
		});
	}
});