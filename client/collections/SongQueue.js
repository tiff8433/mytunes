// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    });

    this.on('dequeue', function(){
      console.log(this);
      this.remove(this.at(0));
    });

    this.on('ended', function(){
      console.log('ended')
    })
  },

  playFirst: function(){
    this.at(0).play();
  },

});