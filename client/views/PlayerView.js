// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {

    // console.log(this); // THIS IS PlayerView INSTANCE

    // this.$el.on('ended', this.model.ended.bind(this.model)); // NOT WORKING - THIS IS empty model  -> SILENTLY FAILS, ENDED EVENT NOT HEARD
    // this.$el.on('ended', this.model.ended);         // NOT WORKING - THIS IS <audio> -> this.trigger is not a function

    // this.$el.on('ended', this.model.ended.bind(this)); // NOT WORKING - THIS IS PlayerView INSTANCE -> SILENTLY FAILS, ENDED EVENT NOT HEARD
    // this.$el.on('ended', ( function(){this.model.ended()} ).bind(this) ); // THIS bound to SongModel instance
    // this.$el.on('ended', function(){
    //                         this.model.ended();
    //                     }, this ); // THIS throws jquery error
  },

  events: {
    'ended': function(){ 
      console.log('this', this);
      this.model.ended() }
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
