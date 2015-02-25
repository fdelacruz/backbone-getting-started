var Animal = Backbone.Model.extend({
  defaults: {
    name: 'Fido',
    color: 'black',
    sound: 'woof'
  },
  validate: function(attrs, options){
    if (!attrs.name){
        alert('Your animal must have a name!');
    }
    if (attrs.name.length < 2){
        alert('Your animal\'s name must have more than one letter!');
    }
  },
  sleep: function(){
    alert(this.get('name') + ' is sleeping.');
  }
});

var AnimalView = Backbone.View.extend({
  tagName: 'li', // defaults to div if not specified
  className: 'animal', // optional, can also set multiple like 'animal dog'
  id: 'dogs', // also optional
  events: {
    'click':         'alertTest',
    'click .edit':   'editAnimal',
    'click .delete': 'deleteAnimal'
  },
  newTemplate: _.template($('#dogTemplate').html()), // external template
  initialize: function() {
    this.render(); // render is an optional function that defines the logic for rendering a template
  },
  render: function() {
    // the below line represents the code prior to adding the template
    // this.$el.html(this.model.get('name') + ' is ' + this.model.get('color') + ' and says ' + this.model.get('sound'));
    this.$el.html(this.newTemplate(this.model.toJSON())); // calls the template
  }
});

var AnimalCollection = Backbone.Collection.extend({
  model: Animal
});

// adding multiple models to collection
var animalCollection = new AnimalCollection([
  {
    name: 'Sugar',
    color: 'black',
    sound: 'woof'
  },
  {
    name: 'Gizmo',
    color: 'tan',
    sound: 'woof'
  },
  {
    name: 'Biscuit',
    color: 'brown',
    sound: 'arf'
  }
])
