function DrawingClass(canvas, submit, write){
	this.id = canvas;
	this.write = write;
	this.submit = submit;
	this.canvas = $('#' + canvas);
	this.ctx; //canvas context
	this.height = 600;
	this.width = 800;
	this.x = 0; //last coordinates used
	this.y = 0;
	this.lines = []; //array to stock all lines
	var self = this;

	this.initialize = function(){
		var c = document.getElementById(self.id);
		self.ctx = c.getContext("2d");
		//we set the canvas width and height at 100%
		self.ctx.canvas.width  = self.width;

  		self.ctx.canvas.height = self.height;

  		if(self.write === true){
  			self.listeners();
  		}
	}

	this.drawFromStorage = function(){
		//we draw each line present in the lines array
		self.ctx.beginPath();
		for(var i=0;i<self.lines.length;i++){
			self.ctx.moveTo(self.lines[i].startx, self.lines[i].starty);
			self.ctx.lineTo(self.lines[i].endx, self.lines[i].endy);
			self.ctx.stroke();
		}
	}

	this.initLine = function(x, y){
		self.x = x;
		self.y = y;
		self.ctx.beginPath();
		self.ctx.moveTo(x,y); //we set the position to start the line
	}

	this.drawLine = function(x, y){
		self.shareLine(self.x, self.y, x, y); //we store the line drawn
		self.ctx.lineTo(x,y); 
		self.x = x;
		self.y = y;
	    self.ctx.stroke(); //we draw a line between the 2 positions

	}

	this.shareLine = function(sx, sy, ex, ey){
		var line = {
			startx : sx,
			starty : sy,
			endx : ex,
			endy : ey
		};
		self.lines.push(line);
	}

	this.listeners = function(){
		self.canvas.on('mousedown',function(e){
			self.initLine(e.offsetX, e.offsetY); //we start drawing a line
			self.canvas.bind('mousemove', function(e){
				self.drawLine(e.offsetX,e.offsetY);// as mouse moves, we draw the line
			});
	  	});
	  	self.canvas.on('mouseup', function(){
	  		self.canvas.unbind('mousemove');
	  	});

	  	$('#' + submit).click(function(){
	 		var name = $('#drawing_name').val();
	  		//send stuff to node

	  		$.ajax({
	  			method: 'POST',
	  			url: '/new',
	  			data: {name: name, drawing : JSON.stringify(self.lines)}
	  		}).done(function(data){
	  			//do stuff
	  			console.log("drawing sent : " + JSON.stringify(data));
	  		});
	  	});
	}

	self.initialize();
	
}