//https://json-generator.com
//https://konbert.com/convert

// USER TEMPLATE (track_users)
[
  '{{repeat(10)}}',
  {
    id: '{{index(1)}}',
    name: '{{firstName()}} {{surname()}}',
    username: function(){
      return 'user' + this.id;
    },
    email: function(){
      return this.username + '@gmail.com';
    },
    password: 'md5(pass)',
    phone: '{{phone()}}',
    
    img: function(tags) {
      return 'https://via.placeholder.com/400/' + 
        tags.integer (700, 999) +
        '/fff/?text=' +
        this.username;
    },
    occupation: '{{random("Graphic Designer", "UX Designer", "Interior Designer", "Product Designer", "Art Director", "Visual Designer", "Photographer", "Video Editor", "Web Designer", "Illustrator", "Game Designer", "Motion Designer", "Freelancer")}}'
  }
]


//TYPE TEMPLATE (track_types)
[
  '{{repeat(50)}}',
  {
    id: '{{index(1)}}',
    user_id: '{{integer(1, 10)}}',
    name: '{{random("Times", "Helvetica", "Cambria", "Georgia", "Arial", "Open Sans", "Futura", "Garamond", "Bodoni", "Didot", "Gotham", "Frutiger", "Sabon", "Gill Sans", "Baskerville", "Avenir", "Univers", "Trajan", "Franklin Gothic", "Clarendon", "Goudy", "Rockwell", "Myriad", "Minion", "Mrs Eaves", "Proxima Nova", "Gibson", "Century Gothic", "Neutra Text", "DIN", "Avant Garde", "Montserrat", "Palatino", "Verdana", "Caslon", "Roboto", "Raleway", "Lato", "Akzidenz-Grotesk", "Bembo", "Optima", "Courier", "Noto Sans", "Interstate", "Adelle", "Hoefler", "Calibri", "Meta", "Lucida Sans", "VAG Rounded")}}',
    
    category: function(tags){
      var serif = ['Times', 'Baskerville', 'Mrs Eaves', 'Cambria', 'Georgia', 'Garamond', 'Bodoni', 'Didot', 'Sabon', 'Trajan', 'Clarendon', 'Goudy', 'Minion', 'Palatino', 'Caslon', 'Bembo', 'Courier', 'Rockwell', 'Adelle', 'Hoefler'];
      if (serif.includes(this.name)) {
        return "Serif";
      }
      else {return "Sans Serif";}
    },

    classification: function(tags) {
      
      //Serifs
      var transitional = ['Times', 'Baskerville', 'Mrs Eaves', 'Cambria', 'Georgia'];
      var old_style = ['Garamond', 'Sabon', 'Goudy', 'Minion', 'Palatino', 'Caslon', 'Bembo', 'Hoefler'];
      var didone = ['Bodoni', 'Didot'];
      var slab_serif = ['Clarendon', 'Courier', 'Rockwell', 'Adelle'];

      //Sans-Serifs
      var neo_grotesque = ['Helvetica', 'Arial', 'Univers', 'Roboto', 'Raleway', 'Interstate'];
      var humanist = ['Open Sans', 'Frutiger', 'Gill Sans', 'Myriad', 'Gibson', 'Lato', 'Verdana', 'Meta', 'Lucida Sans', 'Calibri', 'Noto Sans', 'Optima'];
      var geometric = ['Futura', 'Avenir', 'Gotham', 'Century Gothic', 'Avant Garde', 'VAG Rounded', 'Neutra Text', 'VAG Rounded', 'Montserrat', 'Proxima Nova'];
      var grotesque = ['Franklin Gothic', 'Akzidenz-Grotesk', 'DIN'];

      if (transitional.includes(this.name)){
        return "Transitional";
      } else if (old_style.includes(this.name)){
        return "Old-Style";
      } else if (didone.includes(this.name)){
        return "Didone";
      } else if (slab_serif.includes(this.name)){
        return "Slab Serif";
      } else if (neo_grotesque.includes(this.name)){
        return "Neo-Grotesque";
      } else if (humanist.includes(this.name)){
        return "Humanist";
      } else if (geometric.includes(this.name)){
        return "Geometric";
      } else if (grotesque.includes(this.name)){
        return "Grotesque";
      } else { 
        return "Display Serif";
      }
    },

    img: function(tags) {
      return 'https://via.placeholder.com/400/' +
        tags.integer(700,999) +
        '/fff/?text=' +
        this.name;
    }
  }
]


//LOCATION TEMPLATE (track_locations)
[
  '{{repeat(250)}}',
  {
    id: '{{index(1)}}',
    type_id: '{{integer(1, 50)}}',

    lat: '{{floating(37.784206,37.643083)}}',
    lng: '{{floating(-122.509814,-122.394388)}}',
    
    note: '{{lorem(3, "sentences")}}', 
    img: function(tags) {
      return 'https://via.placeholder.com/400/' + 
        tags.integer (700, 999) +
        '/fff/?text=' + 'location' +
        this.id;
    },
    icon: 'images/Location Icon.png',

    application: '{{random("Poster", "Packaging", "Sign", "Digital ad", "Billboard", "Book cover")}}',
    
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd")}}'
  }
]




//JASON GENERATOR

[
  '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    index: '{{index()}}',
    guid: '{{guid()}}',
    isActive: '{{bool()}}',
    balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
    picture: 'http://placehold.it/32x32',
    age: '{{integer(20, 40)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    about: '{{lorem(1, "paragraphs")}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    tags: [
      '{{repeat(7)}}',
      '{{lorem(1, "words")}}'
    ],
    friends: [
      '{{repeat(3)}}',
      {
        id: '{{index()}}',
        name: '{{firstName()}} {{surname()}}'
      }
    ],
    greeting: function (tags) {
      return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
    },
    favoriteFruit: function (tags) {
      var fruits = ['apple', 'banana', 'strawberry'];
      return fruits[tags.integer(0, fruits.length - 1)];
    }
  }
]

   /* breed: function(tags) {
      var breeds = {
        "dog":["shiba", "yorkie", "dachshund", "yorkie"],
        "horse":["shetland", "andalusia", "unicorn"],
        "cat": ["calico", "ginger", "jellicle", "tuxedo"]
      };
      var chosen_type = breeds[this.type];
      var chosen_index = tags.integer(0, chosen_type.length-1);
      return chosen_type[chosen_index];
    },*/