Comets = new Meteor.Collection('comets');

// Polyfill the console for the server side
console = console || {log: function() {}};