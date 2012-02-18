	

$(function(){

	Event = Backbone.Model.extend({
		defaults:{
			id: 'Event_Default-id',
			name: 'Event_Default-name',
			host_id: 'Event_Default-host_id',
			host_username: 'Event_Default-host_username',
			latitude: 0,
			longitude: 0,
			has_password: false
		},
		initialize: function(){
			//added for testing
			var name = this.get('name');
			alert("Event Created Named: "+ name);
		}
	});

	LibraryEntry = Backbone.Model.extend({
		defaults:{
			id: 'LibraryEntry_default-id',
			title: 'LibraryEntry_default-title',
			artist: 'LibraryEntry_default-artist',
			album: 'LibraryEntry_default-album',
			duration:0
		},
		initialize: function(){
			//added for testing
			var name = this.get('title');
			alert("LibraryEntry Created Named: "+ name);
		}
	});

	ActivePlaylistEntry = Backbone.Model.extend({
		defaults:{
			id:'ActivePlaylistEntry_default-id',
			lib_song_id:'ActivePlaylistEntry_default-lib_song_id',
			title:'ActivePlaylistEntry_default-title',
			artist:'ActivePlaylistEntry_default-artist',
			album:'ActivePlaylistEntry_default-album',
			duration:0,
			up_votes:0,
			down_votes:0,
			time_added:'0000-00-00000:00:00',
			adder_id:'ActivePlaylistEntry_default-adder_id',
			adder_username:'ActivePlaylistEntry_default-adder_username'
		},
		initialize: function(){
			//added for testing
			var name = this.get('title');
			alert("ActivePlaylistEntry Created Named: "+ name);
		}
	});

	Library = Backbone.Collection.extend({
		model: LibraryEntry
	});

	Playlist = Backbone.Collection.extend({
		model: ActivePlaylistEntry
	});


	var song1 = new LibraryEntry();
	var song2 = new LibraryEntry();

	var library = new Library([song1,song2]);

	var psong1 = new ActivePlaylistEntry();
	var psong2 = new ActivePlaylistEntry();

	var playlist = Playlist([psong1,psong2]);


	AppView = Backbone.View.extend({
		el: $("#event_box"),

		initialize: function(){
	  		/*loop through collections*/	
		},

		events: {
			'click input#add_event': 'addEvent'
		},

		//this function is used to add event for TESTING.
		//realease client will not be able to add events
		addEvent: function(){
			var input = this.$('#input_event').val();
			var event = new Event({name:input});
		}


	});

	var app = new AppView;

});



	//$(this.el).append("<input type='text' id='input_event' placeholder='Enter Event Name...' />");
