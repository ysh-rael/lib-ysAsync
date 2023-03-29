function ysAsync() {
  this.res = null
  return this
}

ysAsync.prototype = {
  await: function(req, func) {
    func(req, this)
    var self = this
    setInterval(function() {
      if(self.res !== null ) {
        clearInterval(this); 
      }
    })
    return this    
  },
  then: function(call) {
    const self = this
    setInterval(function(){
      if(self.res !== null ) {
        self.res =  call(self.res);
        clearInterval(this); 
      }
    })
    return this
  }
}
