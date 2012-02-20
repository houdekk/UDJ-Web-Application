	

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
			//var name = this.get('title');
			//alert("LibraryEntry Created Named: "+ name);
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
			//var name = this.get('title');
			//alert("ActivePlaylistEntry Created Named: "+ name);
		}
	});

	Library = Backbone.Collection.extend({
		model: LibraryEntry
	});

	Playlist = Backbone.Collection.extend({
		model: ActivePlaylistEntry
	});

	var psong1 = new ActivePlaylistEntry({title:'Jambi'});
	var psong2 = new ActivePlaylistEntry({title:'Rosetta Stoned'});
	var psong3 = new ActivePlaylistEntry({title:'The Pot'});

	var song1 = new LibraryEntry({title:'Schism'});
	var song2 = new LibraryEntry({title:'Stinkfist'});

	var playlist = new Playlist([psong1,psong2,psong3]);

	var library = new Library([song1,song2]);


	AppView = Backbone.View.extend({
		el: $("#udj_app"),

		initialize: function(){
			this.render();
		},

		events: {
			'click input#add_event': 'addEvent'
		},

		render: function(){
			//update now playing
			$("#now_playing").append("<div class='song_name'><p>"+playlist.at(0).get('title')+"<input type='button' class='upvote' value='Up'/><input type='button' class='downvote' value='Down'/></p></div>");
			//display playlist
			for(var i=1; i< playlist.length;i++){
				$("#song_box").append("<div class='song_name'><p>"+playlist.at(i).get('title')+"<input type='button' class='upvote' value='Up'/><input type='button' class='downvote' value='Down'/></p></div>");
			}

			//display library
			for(var j=0; j< library.length;j++){
				$("#library_box").append("<div class='song_name'><p>"+library.at(j).get('title')+"<input type='button' class='add_song' value='Add Song'/></p></div>");
			}	
		},

		//this function is used to add event for TESTING.
		//realease client will not be able to add events
		addEvent: function(){
			var input = $('#input_event').val();
			var event = new Event({name:input});
		}


	});

	var app = new AppView;

});

