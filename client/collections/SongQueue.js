// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.enqueue, this);
    this.on('ended', this.playNext, this);
  },

  enqueue: function(song){
    console.log("from AppM, playsFirst on SQ");
    if(this.length === 1){
      this.playFirst();
    }
  },

  playFirst: function(){
    console.log("from SQ, plays first song");
    this.at(0).play();
  },

  playNext: function(){
    this.remove(this.at(0));
    if(this.at(0)){
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  }

});