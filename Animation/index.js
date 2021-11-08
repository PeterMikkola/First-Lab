(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [];
	
	
	(lib.AnMovieClip = function(){
		this.actionFrames = [];
		this.ignorePause = false;
		this.currentSoundStreamInMovieclip;
		this.soundStreamDuration = new Map();
		this.streamSoundSymbolsList = [];
	
		this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
		}
		this.gotoAndPlay = function(positionOrLabel){
			this.clearAllSoundStreams();
			var pos = this.timeline.resolve(positionOrLabel);
			if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
			cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
		}
		this.play = function(){
			this.clearAllSoundStreams();
			this.startStreamSoundsForTargetedFrame(this.currentFrame);
			cjs.MovieClip.prototype.play.call(this);
		}
		this.gotoAndStop = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
			this.clearAllSoundStreams();
		}
		this.stop = function(){
			cjs.MovieClip.prototype.stop.call(this);
			this.clearAllSoundStreams();
		}
		this.startStreamSoundsForTargetedFrame = function(targetFrame){
			for(var index=0; index<this.streamSoundSymbolsList.length; index++){
				if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
					for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
						var sound = this.streamSoundSymbolsList[index][i];
						if(sound.endFrame > targetFrame){
							var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
							var instance = playSound(sound.id);
							var remainingLoop = 0;
							if(sound.offset){
								targetPosition = targetPosition + sound.offset;
							}
							else if(sound.loop > 1){
								var loop = targetPosition /instance.duration;
								remainingLoop = Math.floor(sound.loop - loop);
								if(targetPosition == 0){ remainingLoop -= 1; }
								targetPosition = targetPosition % instance.duration;
							}
							instance.loop = remainingLoop;
							instance.position = Math.round(targetPosition);
							this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
						}
					}
				}
			}
		}
		this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
			 this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
		}
		this.clearAllSoundStreams = function(){
			this.soundStreamDuration.forEach(function(value,key){
				key.instance.stop();
			});
			 this.soundStreamDuration.clear();
			this.currentSoundStreamInMovieclip = undefined;
		}
		this.stopSoundStreams = function(currentFrame){
			if(this.soundStreamDuration.size > 0){
				var _this = this;
				this.soundStreamDuration.forEach(function(value,key,arr){
					if((value.end) == currentFrame){
						key.instance.stop();
						if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
						arr.delete(key);
					}
				});
			}
		}
	
		this.computeCurrentSoundStreamInstance = function(currentFrame){
			if(this.currentSoundStreamInMovieclip == undefined){
				var _this = this;
				if(this.soundStreamDuration.size > 0){
					var maxDuration = 0;
					this.soundStreamDuration.forEach(function(value,key){
						if(value.end > maxDuration){
							maxDuration = value.end;
							_this.currentSoundStreamInMovieclip = key;
						}
					});
				}
			}
		}
		this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
			for(var frameIndex in this.actionFrames){
				if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
					return frameIndex;
				}
			}
			return calculatedDesiredFrame;
		}
	
		this.syncStreamSounds = function(){
			this.stopSoundStreams(this.currentFrame);
			this.computeCurrentSoundStreamInstance(this.currentFrame);
			if(this.currentSoundStreamInMovieclip != undefined){
				var soundInstance = this.currentSoundStreamInMovieclip.instance;
				if(soundInstance.position != 0){
					var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
					var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
					var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
					if(soundValue.loop > 1){
						calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
					}
					calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
					var deltaFrame = calculatedDesiredFrame - this.currentFrame;
					if((deltaFrame >= 0) && this.ignorePause){
						cjs.MovieClip.prototype.play.call(this);
						this.ignorePause = false;
					}
					else if(deltaFrame >= 2){
						this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
					}
					else if(deltaFrame <= -2){
						cjs.MovieClip.prototype.stop.call(this);
						this.ignorePause = true;
					}
				}
			}
		}
	}).prototype = p = new cjs.MovieClip();
	// symbols:
	
	
	
	(lib.backwards1426683_640 = function() {
		this.initialize(img.backwards1426683_640);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,617,640);
	
	
	(lib.forward1426686_640 = function() {
		this.initialize(img.forward1426686_640);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,617,640);
	
	
	(lib.Harm_chord_1 = function() {
		this.initialize(img.Harm_chord_1);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,2119,338);
	
	
	(lib.pausknapp = function() {
		this.initialize(img.pausknapp);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,369,134);
	
	
	(lib.playknapp = function() {
		this.initialize(img.playknapp);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,365,129);
	
	
	(lib.stoppknapp = function() {
		this.initialize(img.stoppknapp);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,372,135);// helper functions:
	
	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}
	
	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
		}
	
	
	(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#244AFC").s().p("Ah3B4QgzgxAAhHQAAhGAzgxQAxgzBGAAQBHAAAxAzQAzAxAABGQAABHgzAxQgxAzhHAAQhGAAgxgzg");
		this.shape.setTransform(17.05,17.05);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,34.1,34.1), null);
	
	
	(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.playknapp();
		this.instance.setTransform(-73,-25.8,0.4,0.4);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-73,-25.8,146,51.6), null);
	
	
	(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.stoppknapp();
		this.instance.setTransform(-74.4,-27,0.4,0.4);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-74.4,-27,148.8,54), null);
	
	
	(lib.Red_Dot = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#CC0000").s().p("AheBgQgogoAAg4QAAg3AognQAngoA3AAQA4AAAoAoQAnAnAAA3QAAA4gnAoQgoAng4AAQg3AAgngng");
		this.shape.setTransform(21.85,23.65);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Red_Dot, new cjs.Rectangle(8.4,10.2,27,27.000000000000004), null);
	
	
	(lib.Pause = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.pausknapp();
		this.instance.setTransform(0,0,0.4,0.4);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Pause, new cjs.Rectangle(0,0,147.6,53.6), null);
	
	
	(lib.myBar_1Button = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#0000FF").s().p("Ag8CZIADgxQADgCATgBQATgBADgDQABgBAAgZQAAhhgHgUQgHAQgCANIgFAZIgFACQgJAAAAgWQADgXAOg2QAOgxAAgKQAEgEAJAAQAJAAADAEIAFDyQAJAAALgDIAbgHIAAAsQg7AZgzAAIgLAAg");
		this.shape.setTransform(65.875,31.4395);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#0000FF").s().p("AABB6IgiABQgNg2gBg9QgWgEAAgpQAAgeAWgdQAYgdAcAAQAgAAAMAXQAHAPAAAfQAAAdgOAbQgKAVgeAmQAAAGAhAEIAiAEIABA1QgogEgdAAgAgRg0QgLAKgHANQAJAJADAjIAcglQASgWAAgMQAAgIgPAAQgMAAgNAMg");
		this.shape_1.setTransform(42.325,34.075);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#0000FF").s().p("Ag1B+QgGgdABgUQAAgiANhCQAShXAYgOQAPABALAjIAOBDQAMA3AHA0IAEAaQgBAKgQAAQgPAAgFgQIgGglQglAPgFAGIgBAkgAgSASQASgGAAgEQABgLgEgWIgGAAQgGASgDAZg");
		this.shape_2.setTransform(28.05,33.95);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#0000FF").s().p("Ag7CSQgJgKAAgZQAAgaAOgLIAFgEIABADIAAABIAAAAIAAgEIgBAAIgBgYIgBgsIAAgUIgSADQgRABACgiQACghAognQAngkAZAAQAaAAAJASQAEAJgBAWQgCAggLAUIgMAUQAAABANAHQAlATAAAmQAAA1gcAkQgeAmgzAAQgZAAgKgLgAgRAuQAAA8AGAFQAiADASggQALgUABgPQAAgKgLgKQgLgJgLAAQgbAAgKAcgAAOhoQgOAHgMAMQgNAOAAAPIAFAcQAjgWAOguQABgDgEgDQgEgCgEgBgAgwBJIgBgDIABAAIAAAEIAAAAIAAgBgAgxBGIAAAAg");
		this.shape_3.setTransform(11.9142,30.9);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.myBar_1Button, new cjs.Rectangle(0,0,86.6,58.1), null);
	
	
	(lib.Arrow_Click = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#4600FF").s().p("AhACfIBuhvIkSAAIAAhfIESAAIhuhvICGAAICfCeIifCfg");
		this.shape.setTransform(0.025,0.025);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Arrow_Click, new cjs.Rectangle(-22.8,-15.8,45.7,31.700000000000003), null);
	
	
	(lib.Full_screen_arrow = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#4600FF").s().p("AhACfIBuhvIkSAAIAAhfIESAAIhuhvICGAAICfCeIifCfg");
		this.shape.setTransform(0.025,0.025);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Full_screen_arrow, new cjs.Rectangle(-22.8,-15.8,45.7,31.700000000000003), null);
	
	
	(lib.Forward = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.forward1426686_640();
		this.instance.setTransform(0,0,0.15,0.15);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Forward, new cjs.Rectangle(0,0,92.6,96), null);
	
	
	(lib.Bar_25 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#0000FF").s().p("AgkCYQgFgEgGgRIAAgrIAKgFIAHAOQAHALAGAAQATgBARgTQAQgSAAgVQAAgMgNgNQgMgMgLAAQgIAAgNAJIgPAPQgMAAgBgKIgFhWIgBgOQAAgnAPgRQAMgPAngOIAAAkQAAAPgKAEQgQAGgDAFQgKAOAAAoIAAAQQAPgNAJAAQAZAAATAXQARAVAAAcQAAAqgOAjQgTAvgkAAQgQAAgHgIg");
		this.shape.setTransform(82.55,31.15);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#0000FF").s().p("Ag4B6IACgVQADgnARguQAbhEAEgQIAEgSQAAgIgKAAQghAAAAA8IAAAaQAAAIgHAFQgIAHgHgBIgHgBIgBgWIgCgYQAAgSADgNQAJgpANgVQATgeAiAAQASAAAFATQADALgBAZQgCApgLAnQgGAWgPAnQgQApgFAUIAKADQAOAAAZgTQAggXAMgFQABAIAHAPQAAAegmAbQgkAaggAAQgZgBAAglg");
		this.shape_1.setTransform(67.675,31.1);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#0000FF").s().p("AABB6IgiABQgNg2gBg9QgWgEAAgpQAAgeAWgdQAYgdAcAAQAgAAAMAXQAHAPAAAfQAAAdgOAbQgKAVgeAmQAAAGAhAEIAiAEIABA1QgogEgdAAgAgRg0QgLAKgHANQAJAJADAjIAcglQASgWAAgMQAAgIgPAAQgMAAgNAMg");
		this.shape_2.setTransform(42.325,34.075);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#0000FF").s().p("Ag1B+QgGgdABgUQAAgiANhCQAShXAYgOQAPABALAjIAOBDQAMA3AHA0IAEAaQgBAKgQAAQgPAAgFgQIgGglQglAPgFAGIgBAkgAgSASQASgGAAgEQABgLgEgWIgGAAQgGASgDAZg");
		this.shape_3.setTransform(28.05,33.95);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#0000FF").s().p("Ag7CSQgJgKAAgZQAAgaAOgLIAFgEIABADIAAABIAAAAIAAgEIgBAAIgBgYIgBgsIAAgUIgSADQgRABACgiQACghAognQAngkAZAAQAaAAAJASQAEAJgBAWQgCAggLAUIgMAUQAAABANAHQAlATAAAmQAAA1gcAkQgeAmgzAAQgZAAgKgLgAgRAuQAAA8AGAFQAiADASggQALgUABgPQAAgKgLgKQgLgJgLAAQgbAAgKAcgAAOhoQgOAHgMAMQgNAOAAAPIAFAcQAjgWAOguQABgDgEgDQgEgCgEgBgAgwBJIgBgDIABAAIAAAEIAAAAIAAgBgAgxBGIAAAAg");
		this.shape_4.setTransform(11.9142,30.9);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Bar_25, new cjs.Rectangle(0,0,107,58.1), null);
	
	
	(lib.Bar_21 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#0000FF").s().p("Ag8CZIADgxQADgCATgBQATgBADgDQABgBAAgZQAAhhgHgUQgHAQgCANIgFAZIgFACQgJAAAAgWQADgXAOg2QAOgxAAgKQAEgEAJAAQAJAAADAEIAFDyQAJAAALgDIAbgHIAAAsQg7AZgzAAIgLAAg");
		this.shape.setTransform(82.425,31.4395);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#0000FF").s().p("Ag4B6IACgVQADgnARguQAbhEAEgQIAEgSQAAgIgKAAQghAAAAA8IAAAaQAAAIgHAFQgIAHgHgBIgHgBIgBgWIgCgYQAAgSADgNQAJgpANgVQATgeAiAAQASAAAFATQADALgBAZQgCApgLAnQgGAWgPAnQgQApgFAUIAKADQAOAAAZgTQAggXAMgFQABAIAHAPQAAAegmAbQgkAaggAAQgZgBAAglg");
		this.shape_1.setTransform(67.675,31.1);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#0000FF").s().p("AABB6IgiABQgNg2gBg9QgWgEAAgpQAAgeAWgdQAYgdAcAAQAgAAAMAXQAHAPAAAfQAAAdgOAbQgKAVgeAmQAAAGAhAEIAiAEIABA1QgogEgdAAgAgRg0QgLAKgHANQAJAJADAjIAcglQASgWAAgMQAAgIgPAAQgMAAgNAMg");
		this.shape_2.setTransform(42.325,34.075);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#0000FF").s().p("Ag1B+QgGgdABgUQAAgiANhCQAShXAYgOQAPABALAjIAOBDQAMA3AHA0IAEAaQgBAKgQAAQgPAAgFgQIgGglQglAPgFAGIgBAkgAgSASQASgGAAgEQABgLgEgWIgGAAQgGASgDAZg");
		this.shape_3.setTransform(28.05,33.95);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#0000FF").s().p("Ag7CSQgJgKAAgZQAAgaAOgLIAFgEIABADIAAABIAAAAIAAgEIgBAAIgBgYIgBgsIAAgUIgSADQgRABACgiQACghAognQAngkAZAAQAaAAAJASQAEAJgBAWQgCAggLAUIgMAUQAAABANAHQAlATAAAmQAAA1gcAkQgeAmgzAAQgZAAgKgLgAgRAuQAAA8AGAFQAiADASggQALgUABgPQAAgKgLgKQgLgJgLAAQgbAAgKAcgAAOhoQgOAHgMAMQgNAOAAAPIAFAcQAjgWAOguQABgDgEgDQgEgCgEgBgAgwBJIgBgDIABAAIAAAEIAAAAIAAgBgAgxBGIAAAAg");
		this.shape_4.setTransform(11.9142,30.9);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Bar_21, new cjs.Rectangle(0,0,104,58.1), null);
	
	
	(lib.Bar_17 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#0000FF").s().p("AACCVQgDgHABgNQACgeAUhXIAUhOIACgFIgCgEIgDgFIgbgBQgkAAg0ASIAAhGQAMgKAkgHQAdgFAXAAQA5gBgFAmQgLBYgpCxQAAAEgEACIgHAEg");
		this.shape.setTransform(79.47,30.85);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#0000FF").s().p("Ag8CZIADgxQADgCATgBQATgBADgDQABgBAAgZQAAhhgHgUQgHAQgCANIgFAZIgFACQgJAAAAgWQADgXAOg2QAOgxAAgKQAEgEAJAAQAJAAADAEIAFDyQAJAAALgDIAbgHIAAAsQg7AZgzAAIgLAAg");
		this.shape_1.setTransform(65.875,31.4395);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#0000FF").s().p("AABB6IgiABQgNg2gBg9QgWgEAAgpQAAgeAWgdQAYgdAcAAQAgAAAMAXQAHAPAAAfQAAAdgOAbQgKAVgeAmQAAAGAhAEIAiAEIABA1QgogEgdAAgAgRg0QgLAKgHANQAJAJADAjIAcglQASgWAAgMQAAgIgPAAQgMAAgNAMg");
		this.shape_2.setTransform(42.325,34.075);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#0000FF").s().p("Ag1B+QgGgdABgUQAAgiANhCQAShXAYgOQAPABALAjIAOBDQAMA3AHA0IAEAaQgBAKgQAAQgPAAgFgQIgGglQglAPgFAGIgBAkgAgSASQASgGAAgEQABgLgEgWIgGAAQgGASgDAZg");
		this.shape_3.setTransform(28.05,33.95);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#0000FF").s().p("Ag7CSQgJgKAAgZQAAgaAOgLIAFgEIABADIAAABIAAAAIAAgEIgBAAIgBgYIgBgsIAAgUIgSADQgRABACgiQACghAognQAngkAZAAQAaAAAJASQAEAJgBAWQgCAggLAUIgMAUQAAABANAHQAlATAAAmQAAA1gcAkQgeAmgzAAQgZAAgKgLgAgRAuQAAA8AGAFQAiADASggQALgUABgPQAAgKgLgKQgLgJgLAAQgbAAgKAcgAAOhoQgOAHgMAMQgNAOAAAPIAFAcQAjgWAOguQABgDgEgDQgEgCgEgBgAgwBJIgBgDIABAAIAAAEIAAAAIAAgBgAgxBGIAAAAg");
		this.shape_4.setTransform(11.9142,30.9);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Bar_17, new cjs.Rectangle(0,0,100.5,58.1), null);
	
	
	(lib.Bar_13 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#0000FF").s().p("AglB2QAAgXAWgRQAKAHAAAKIAAAGQAPgEAQgaQAPgVAAgJQAAgHgMgDQgIgDgIABQgPAAgOAJIgXAUQgNAAAAgWIABgQIAAgPQA2hQAAgTQAAgGgFABQgaADgKApIgHAcQgFAEgEAAQgEAAgEgEQgCgKAAgLQAAgPAFgXQAQhGAtgBQAcABAAArQAAAbgIAXQgEANgQAcIARgBQAugBAABBQAAAfgVAoQgYAugbgBQgeAAAAgng");
		this.shape.setTransform(78.775,30.8);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#0000FF").s().p("Ag8CZIADgxQADgCATgBQATgBADgDQABgBAAgZQAAhhgHgUQgHAQgCANIgFAZIgFACQgJAAAAgWQADgXAOg2QAOgxAAgKQAEgEAJAAQAJAAADAEIAFDyQAJAAALgDIAbgHIAAAsQg7AZgzAAIgLAAg");
		this.shape_1.setTransform(65.875,31.4395);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#0000FF").s().p("AABB6IgiABQgNg2gBg9QgWgEAAgpQAAgeAWgdQAYgdAcAAQAgAAAMAXQAHAPAAAfQAAAdgOAbQgKAVgeAmQAAAGAhAEIAiAEIABA1QgogEgdAAgAgRg0QgLAKgHANQAJAJADAjIAcglQASgWAAgMQAAgIgPAAQgMAAgNAMg");
		this.shape_2.setTransform(42.325,34.075);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#0000FF").s().p("Ag1B+QgGgdABgUQAAgiANhCQAShXAYgOQAPABALAjIAOBDQAMA3AHA0IAEAaQgBAKgQAAQgPAAgFgQIgGglQglAPgFAGIgBAkgAgSASQASgGAAgEQABgLgEgWIgGAAQgGASgDAZg");
		this.shape_3.setTransform(28.05,33.95);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#0000FF").s().p("Ag7CSQgJgKAAgZQAAgaAOgLIAFgEIABADIAAABIAAAAIAAgEIgBAAIgBgYIgBgsIAAgUIgSADQgRABACgiQACghAognQAngkAZAAQAaAAAJASQAEAJgBAWQgCAggLAUIgMAUQAAABANAHQAlATAAAmQAAA1gcAkQgeAmgzAAQgZAAgKgLgAgRAuQAAA8AGAFQAiADASggQALgUABgPQAAgKgLgKQgLgJgLAAQgbAAgKAcgAAOhoQgOAHgMAMQgNAOAAAPIAFAcQAjgWAOguQABgDgEgDQgEgCgEgBgAgwBJIgBgDIABAAIAAAEIAAAAIAAgBgAgxBGIAAAAg");
		this.shape_4.setTransform(11.9142,30.9);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Bar_13, new cjs.Rectangle(0,0,112.5,58.1), null);
	
	
	(lib.Bar_9 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#0000FF").s().p("AgQCaQgIgMABgaQAAgTAEgFQAFgCALAAQAPgRALgqQAKglAAgfQAAgSgLgQQgNgTgQAAQgLAAgGAHQgHAHABAKQABAUAOALIAYAMQAOAHABAKQAAAGgGATQgIAXgIAAQg2AAgFhmIAAgQQAAhQAxAAQAjAAAQAlQAMAbADAoIAAATQAAA2gKAuQgNBBgeAWQgFADgEAAQgGAAgGgDg");
		this.shape.setTransform(66.05,31.025);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#0000FF").s().p("AABB6IgiABQgNg2gBg9QgWgEAAgpQAAgeAWgdQAYgdAcAAQAgAAAMAXQAHAPAAAfQAAAdgOAbQgKAVgeAmQAAAGAhAEIAiAEIABA1QgogEgdAAgAgRg0QgLAKgHANQAJAJADAjIAcglQASgWAAgMQAAgIgPAAQgMAAgNAMg");
		this.shape_1.setTransform(42.325,34.075);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#0000FF").s().p("Ag1B+QgGgdABgUQAAgiANhCQAShXAYgOQAPABALAjIAOBDQAMA3AHA0IAEAaQgBAKgQAAQgPAAgFgQIgGglQglAPgFAGIgBAkgAgSASQASgGAAgEQABgLgEgWIgGAAQgGASgDAZg");
		this.shape_2.setTransform(28.05,33.95);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#0000FF").s().p("Ag7CSQgJgKAAgZQAAgaAOgLIAFgEIABADIAAABIAAAAIAAgEIgBAAIgBgYIgBgsIAAgUIgSADQgRABACgiQACghAognQAngkAZAAQAaAAAJASQAEAJgBAWQgCAggLAUIgMAUQAAABANAHQAlATAAAmQAAA1gcAkQgeAmgzAAQgZAAgKgLgAgRAuQAAA8AGAFQAiADASggQALgUABgPQAAgKgLgKQgLgJgLAAQgbAAgKAcgAAOhoQgOAHgMAMQgNAOAAAPIAFAcQAjgWAOguQABgDgEgDQgEgCgEgBgAgwBJIgBgDIABAAIAAAEIAAAAIAAgBgAgxBGIAAAAg");
		this.shape_3.setTransform(11.9142,30.9);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Bar_9, new cjs.Rectangle(0,0,86.6,58.1), null);
	
	
	(lib.Bar_5 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#0000FF").s().p("AgkCYQgFgEgGgRIAAgrIAKgFIAHAOQAGALAHAAQATgBARgTQAQgSAAgVQAAgMgNgNQgMgMgLAAQgIAAgNAJIgPAPQgMAAgBgKIgFhWIAAgOQAAgnAOgRQANgPAmgOIAAAkQAAAPgKAEQgQAGgDAFQgKAOAAAoIAAAQQAPgNAIAAQAaAAATAXQARAVAAAcQABAqgOAjQgUAvgkAAQgQAAgHgIg");
		this.shape.setTransform(66,31.15);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#0000FF").s().p("AABB6IgiABQgNg2gBg9QgWgEAAgpQAAgeAWgdQAYgdAcAAQAgAAAMAXQAHAPAAAfQAAAdgOAbQgKAVgeAmQAAAGAhAEIAiAEIABA1QgogEgdAAgAgRg0QgLAKgHANQAJAJADAjIAcglQASgWAAgMQAAgIgPAAQgMAAgNAMg");
		this.shape_1.setTransform(42.325,34.075);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#0000FF").s().p("Ag1B+QgGgdABgUQAAgiANhCQAShXAYgOQAPABALAjIAOBDQAMA3AHA0IAEAaQgBAKgQAAQgPAAgFgQIgGglQglAPgFAGIgBAkgAgSASQASgGAAgEQABgLgEgWIgGAAQgGASgDAZg");
		this.shape_2.setTransform(28.05,33.95);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#0000FF").s().p("Ag7CSQgJgKAAgZQAAgaAOgLIAFgEIABADIAAABIAAAAIAAgEIgBAAIgBgYIgBgsIAAgUIgSADQgRABACgiQACghAognQAngkAZAAQAaAAAJASQAEAJgBAWQgCAggLAUIgMAUQAAABANAHQAlATAAAmQAAA1gcAkQgeAmgzAAQgZAAgKgLgAgRAuQAAA8AGAFQAiADASggQALgUABgPQAAgKgLgKQgLgJgLAAQgbAAgKAcgAAOhoQgOAHgMAMQgNAOAAAPIAFAcQAjgWAOguQABgDgEgDQgEgCgEgBgAgwBJIgBgDIABAAIAAAEIAAAAIAAgBgAgxBGIAAAAg");
		this.shape_3.setTransform(11.9142,30.9);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Bar_5, new cjs.Rectangle(0,0,86.6,58.1), null);
	
	
	(lib.Back = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.backwards1426683_640();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Back, new cjs.Rectangle(0,0,617,640), null);
	
	
	(lib.Stop = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.movieClip_1 = new lib.Symbol1();
		this.movieClip_1.name = "movieClip_1";
		this.movieClip_1.setTransform(74.4,27);
	
		this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Stop, new cjs.Rectangle(0,0,148.8,54), null);
	
	
	(lib.Play = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.movieClip_3 = new lib.Symbol2();
		this.movieClip_3.name = "movieClip_3";
		this.movieClip_3.setTransform(73,25.8);
	
		this.timeline.addTween(cjs.Tween.get(this.movieClip_3).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Play, new cjs.Rectangle(0,0,146,51.6), null);
	
	
	(lib.Full_screen_iconClickai = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Full_screen_iconClick_ai
		this.Arrow_28 = new lib.Arrow_Click();
		this.Arrow_28.name = "Arrow_28";
		this.Arrow_28.setTransform(27.95,70.95,1.0061,1.0078,-45);
	
		this.Arrow_28_1 = new lib.Arrow_Click();
		this.Arrow_28_1.name = "Arrow_28_1";
		this.Arrow_28_1.setTransform(28,28.85,1.0061,1.0078,34.9998);
	
		this.Arrow_28_2 = new lib.Arrow_Click();
		this.Arrow_28_2.name = "Arrow_28_2";
		this.Arrow_28_2.setTransform(70.55,71,1.0061,1.0078,-135);
	
		this.Arrow_28_3 = new lib.Arrow_Click();
		this.Arrow_28_3.name = "Arrow_28_3";
		this.Arrow_28_3.setTransform(70.6,27.65,1.0061,1.0078,135);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Arrow_28_3},{t:this.Arrow_28_2},{t:this.Arrow_28_1},{t:this.Arrow_28}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0.1,98.2,98.5);
	
	
	(lib.Full_screen_iconai = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Full_screen_icon_ai
		this.Arrow_28 = new lib.Full_screen_arrow();
		this.Arrow_28.name = "Arrow_28";
		this.Arrow_28.setTransform(28.1,82.95,1.0061,1.0078,135);
	
		this.Arrow_28_1 = new lib.Full_screen_arrow();
		this.Arrow_28_1.name = "Arrow_28_1";
		this.Arrow_28_1.setTransform(28.05,29,1.0061,1.0078,-145.0002);
	
		this.Arrow_28_2 = new lib.Full_screen_arrow();
		this.Arrow_28_2.name = "Arrow_28_2";
		this.Arrow_28_2.setTransform(76.55,82.85,1.0061,1.0078,45);
	
		this.Arrow_28_3 = new lib.Full_screen_arrow();
		this.Arrow_28_3.name = "Arrow_28_3";
		this.Arrow_28_3.setTransform(76.45,27.65,1.0061,1.0078,-45);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Arrow_28_3},{t:this.Arrow_28_2},{t:this.Arrow_28_1},{t:this.Arrow_28}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0.1,0.1,104.10000000000001,110.5);
	
	
	(lib.Full_screen_icon = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.Full_screen_iconai("synched",0);
		this.instance.setTransform(52.05,55.25,1,1,0,0,0,52.1,55.3);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Full_screen_icon, new cjs.Rectangle(9.2,11.3,83.6,87.9), null);
	
	
	(lib.Forward_Btn = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.myForwardButton = new lib.Forward();
		this.myForwardButton.name = "myForwardButton";
		this.myForwardButton.setTransform(46.2,48,1,1,0,0,0,46.2,48);
	
		this.timeline.addTween(cjs.Tween.get(this.myForwardButton).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Forward_Btn, new cjs.Rectangle(0,0,92.6,96), null);
	
	
	(lib.BlueBar_25 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.Symbol4();
		this.instance.setTransform(1291.85,18.45,1,1,0,0,0,17.1,17.1);
		this.instance.alpha = 0.75;
		this.instance.compositeOperation = "multiply";
	
		this.instance_1 = new lib.Symbol4();
		this.instance_1.setTransform(858.85,17.1,1,1,0,0,0,17.1,17.1);
		this.instance_1.alpha = 0.75;
		this.instance_1.compositeOperation = "multiply";
	
		this.instance_2 = new lib.Symbol4();
		this.instance_2.setTransform(413.9,18.45,1,1,0,0,0,17.1,17.1);
		this.instance_2.alpha = 0.75;
		this.instance_2.compositeOperation = "multiply";
	
		this.instance_3 = new lib.Symbol4();
		this.instance_3.setTransform(17.1,18.75,1,1,0,0,0,17.1,17.1);
		this.instance_3.alpha = 0.75;
		this.instance_3.compositeOperation = "multiply";
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.BlueBar_25, new cjs.Rectangle(0,0,1308.9,35.8), null);
	
	
	(lib.BlueBar_21 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.Symbol4();
		this.instance.setTransform(1291.85,60.3,1,1,0,0,0,17.1,17.1);
		this.instance.alpha = 0.75;
		this.instance.compositeOperation = "multiply";
	
		this.instance_1 = new lib.Symbol4();
		this.instance_1.setTransform(858.85,58.95,1,1,0,0,0,17.1,17.1);
		this.instance_1.alpha = 0.75;
		this.instance_1.compositeOperation = "multiply";
	
		this.instance_2 = new lib.Symbol4();
		this.instance_2.setTransform(413.9,17.1,1,1,0,0,0,17.1,17.1);
		this.instance_2.alpha = 0.75;
		this.instance_2.compositeOperation = "multiply";
	
		this.instance_3 = new lib.Symbol4();
		this.instance_3.setTransform(17.1,60.6,1,1,0,0,0,17.1,17.1);
		this.instance_3.alpha = 0.75;
		this.instance_3.compositeOperation = "multiply";
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.BlueBar_21, new cjs.Rectangle(0,0,1308.9,77.6), null);
	
	
	(lib.BlueBar_17 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.Symbol4();
		this.instance.setTransform(1291.85,60.3,1,1,0,0,0,17.1,17.1);
		this.instance.alpha = 0.75;
		this.instance.compositeOperation = "multiply";
	
		this.instance_1 = new lib.Symbol4();
		this.instance_1.setTransform(858.85,17.1,1,1,0,0,0,17.1,17.1);
		this.instance_1.alpha = 0.75;
		this.instance_1.compositeOperation = "multiply";
	
		this.instance_2 = new lib.Symbol4();
		this.instance_2.setTransform(413.9,17.1,1,1,0,0,0,17.1,17.1);
		this.instance_2.alpha = 0.75;
		this.instance_2.compositeOperation = "multiply";
	
		this.instance_3 = new lib.Symbol4();
		this.instance_3.setTransform(17.1,60.6,1,1,0,0,0,17.1,17.1);
		this.instance_3.alpha = 0.75;
		this.instance_3.compositeOperation = "multiply";
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.BlueBar_17, new cjs.Rectangle(0,0,1308.9,77.6), null);
	
	
	(lib.BlueBar_13 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.Symbol4();
		this.instance.setTransform(1291.85,17.1,1,1,0,0,0,17.1,17.1);
		this.instance.alpha = 0.75;
		this.instance.compositeOperation = "multiply";
	
		this.instance_1 = new lib.Symbol4();
		this.instance_1.setTransform(858.85,17.1,1,1,0,0,0,17.1,17.1);
		this.instance_1.alpha = 0.75;
		this.instance_1.compositeOperation = "multiply";
	
		this.instance_2 = new lib.Symbol4();
		this.instance_2.setTransform(413.9,17.1,1,1,0,0,0,17.1,17.1);
		this.instance_2.alpha = 0.75;
		this.instance_2.compositeOperation = "multiply";
	
		this.instance_3 = new lib.Symbol4();
		this.instance_3.setTransform(17.1,60.6,1,1,0,0,0,17.1,17.1);
		this.instance_3.alpha = 0.75;
		this.instance_3.compositeOperation = "multiply";
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.BlueBar_13, new cjs.Rectangle(0,0,1308.9,77.6), null);
	
	
	(lib.BlueBar_9 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.Symbol4();
		this.instance.setTransform(1291.85,60.65,1,1,0,0,0,17.1,17.1);
		this.instance.alpha = 0.75;
		this.instance.compositeOperation = "multiply";
	
		this.instance_1 = new lib.Symbol4();
		this.instance_1.setTransform(861.55,60.3,1,1,0,0,0,17.1,17.1);
		this.instance_1.alpha = 0.75;
		this.instance_1.compositeOperation = "multiply";
	
		this.instance_2 = new lib.Symbol4();
		this.instance_2.setTransform(413.9,17.1,1,1,0,0,0,17.1,17.1);
		this.instance_2.alpha = 0.75;
		this.instance_2.compositeOperation = "multiply";
	
		this.instance_3 = new lib.Symbol4();
		this.instance_3.setTransform(17.1,17.4,1,1,0,0,0,17.1,17.1);
		this.instance_3.alpha = 0.75;
		this.instance_3.compositeOperation = "multiply";
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.BlueBar_9, new cjs.Rectangle(0,0,1308.9,77.7), null);
	
	
	(lib.BlueBar_5 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.Symbol4();
		this.instance.setTransform(1291.85,60.65,1,1,0,0,0,17.1,17.1);
		this.instance.alpha = 0.75;
		this.instance.compositeOperation = "multiply";
	
		this.instance_1 = new lib.Symbol4();
		this.instance_1.setTransform(858.85,17.1,1,1,0,0,0,17.1,17.1);
		this.instance_1.alpha = 0.75;
		this.instance_1.compositeOperation = "multiply";
	
		this.instance_2 = new lib.Symbol4();
		this.instance_2.setTransform(413.9,17.1,1,1,0,0,0,17.1,17.1);
		this.instance_2.alpha = 0.75;
		this.instance_2.compositeOperation = "multiply";
	
		this.instance_3 = new lib.Symbol4();
		this.instance_3.setTransform(17.1,17.4,1,1,0,0,0,17.1,17.1);
		this.instance_3.alpha = 0.75;
		this.instance_3.compositeOperation = "multiply";
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.BlueBar_5, new cjs.Rectangle(0,0,1308.9,77.7), null);
	
	
	(lib.Backward_Btn = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.myBackwardButton = new lib.Back();
		this.myBackwardButton.name = "myBackwardButton";
		this.myBackwardButton.setTransform(46.3,48.05,0.15,0.15,0,0,0,308.7,320.4);
	
		this.timeline.addTween(cjs.Tween.get(this.myBackwardButton).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Backward_Btn, new cjs.Rectangle(0,0,92.6,96), null);
	
	
	(lib._4_Blue_Dots_Bar_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.Symbol4();
		this.instance.setTransform(1291.85,17.1,1,1,0,0,0,17.1,17.1);
		this.instance.alpha = 0.75;
		this.instance.compositeOperation = "multiply";
	
		this.instance_1 = new lib.Symbol4();
		this.instance_1.setTransform(858.85,17.1,1,1,0,0,0,17.1,17.1);
		this.instance_1.alpha = 0.75;
		this.instance_1.compositeOperation = "multiply";
	
		this.instance_2 = new lib.Symbol4();
		this.instance_2.setTransform(413.9,17.1,1,1,0,0,0,17.1,17.1);
		this.instance_2.alpha = 0.75;
		this.instance_2.compositeOperation = "multiply";
	
		this.instance_3 = new lib.Symbol4();
		this.instance_3.setTransform(17.1,17.4,1,1,0,0,0,17.1,17.1);
		this.instance_3.alpha = 0.75;
		this.instance_3.compositeOperation = "multiply";
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib._4_Blue_Dots_Bar_1, new cjs.Rectangle(0,0,1308.9,34.4), null);
	
	
	// stage content:
	(lib.Harm_chord_1_HTML5Canvas = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = false; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {sound:0,Dm7_F1:0,G7_F1:120,CMaj7_1_1F1:240,CMaj7_1_2F1:360,Dm7_F3:480,G7_F3:600,CMaj7_1_1F3:720,Am7_F3:840,Dm7_F5:960,G7_F5:1080,Em7_F5:1200,Am7_F5:1320,FMaj7_7:1440,"G7_F5":1560,"CMaj7_1_1F1":1680,"CMaj7_1_2F1":1800,"FMaj7_7":1920,"G7_F5":2040,"CMaj7_1_1F1":2160,"Am7_F5":2280,"FMaj7_7":2400,"G7_F5":2520,"Em7_F5":2640,"Am7_F5":2760,FMaj7_8:2880,"Bm7(b5)_8":3000,Em7_8:3120,Am7_8:3240,my4BlueDotsBar_5:480,my4BlueDotsBar_9:960,my4BlueDotsBar_13:1440,my4BlueDotsBar_17:1920,my4BlueDotsBar_21:2400,my4BlueDotsBar_25:2880,myBar_1Button:0,myBar_5Button:480,myBar_9Button:960,myBar_13Button:1440,myBar_17Button:1920,myBar_21Button:2400,myBar_25Button:2880,myBar_1ButtonClick:0,myBar_5ButtonClick:480,myBar_9ButtonClick:960,myBar_13ButtonClick:1440,myBar_17ButtonClick:1920,myBar_21ButtonClick:2400,myBar_25ButtonClick:2880,Full_screen_icon:0,Full_screen_iconClick:0};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		this.actionFrames = [0,3359];
		this.streamSoundSymbolsList[0] = [{id:"Harmonic_rythm_1",startFrame:0,endFrame:3360,loop:1,offset:0}];
		// timeline functions:
		this.frame_0 = function() {
			this.clearAllSoundStreams();
			 
			var soundInstance = playSound("Harmonic_rythm_1",0);
			this.InsertIntoSoundStreamData(soundInstance,0,3360,1);
			this.stop();
				
				this.myPlayButton.visible = true;
			
			
			this.myPlayButton.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
			
			function fl_ClickToGoToAndPlayFromFrame()
			{
				this.play();
			}
			
			this.myPauseButton.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
			
			function fl_ClickToGoToAndStopAtFrame()
			{
				this.stop();
			}
			
			
			this.myStopButton.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
			
			function fl_ClickToGoToAndStopAtFrame_2()
			{
				this.gotoAndStop(0);
			}
			
			this.myPlayButton.addEventListener("click", fl_ClickToHide_1.bind(this));
			
			function fl_ClickToHide_1()
			{
				this.myPlayButton.visible = false;
			}
			
			
			this.myPauseButton.addEventListener("click", fl_ClickToShow_2.bind(this));
			
			function fl_ClickToShow_2()
			{
				this.myPlayButton.visible = true;
			}
			
			this.myStopButton.addEventListener("click", fl_ClickToShow_3.bind(this));
			
			function fl_ClickToShow_3()
			{
				this.myPlayButton.visible = true;
			}
			
			//////////////////////////////////////////////////////////////////////
			
			
			this.myForwardButton.addEventListener("click", fl_ClickToShow_4.bind(this));
			
			function fl_ClickToShow_4()
			{
				this.myPlayButton.visible = true;
			}
			
			this.myBackwardButton.addEventListener("click", fl_ClickToShow_5.bind(this));
			
			function fl_ClickToShow_5()
			{
				this.myPlayButton.visible = true;
			}
			
			/////////////////////////////////////////////////////////////////////
			
			//Forward btn Timeline goToFrame check current Frame
			this.myForwardButton.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
			
			function fl_ClickToGoToAndStopAtFrame_4() {
				if (this.currentFrame >= 0 && this.currentFrame <= 479) {
			
					this.gotoAndStop("myBar_5Button");
					this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_1);
			
				} else if (this.currentFrame >= 480 && this.currentFrame <= 959) {
			
					this.gotoAndStop("myBar_9Button");
					this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_2);
			
				} else if (this.currentFrame >= 960 && this.currentFrame <= 1439) {
			
					this.gotoAndStop("myBar_13Button");
					this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_3);
			
				} else if (this.currentFrame >= 1440 && this.currentFrame <= 1919) {
			
					this.gotoAndStop("myBar_17Button");
					this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_4);
			
				} else if (this.currentFrame >= 1920 && this.currentFrame <= 2399) {
			
					this.gotoAndStop("myBar_21Button");
					this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_5);
			
				} else if (this.currentFrame >= 2400 && this.currentFrame <= 2879) {
			
					this.gotoAndStop("myBar_25Button");
					this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_6);
			
				} else if (this.currentFrame >= 2880 && this.currentFrame <= 3359) {
			
					this.gotoAndStop("myBar_1Button");
					this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_7);
			
				}
			}
			
			////////////////////////////////////////////////////////////////////////
			
			
			//Backward btn Timeline goToFrame check current Frame
			
			
			this.myBackwardButton.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
			
			function fl_ClickToGoToAndStopAtFrame_5() {
				
				if (this.currentFrame >= 0 && this.currentFrame <= 479) {
			
					this.gotoAndStop("myBar_25Button");
							this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_8);
			
				} else if (this.currentFrame >= 480 && this.currentFrame <= 959) {
			
					this.gotoAndStop("myBar_1Button");
							this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_9);
			
				} else if (this.currentFrame >= 960 && this.currentFrame <= 1439) {
			
					this.gotoAndStop("myBar_5Button");
							this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_10);
			
				} else if (this.currentFrame >= 1440 && this.currentFrame <= 1919) {
			
					this.gotoAndStop("myBar_9Button");
							this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_11);
			
				} else if (this.currentFrame >= 1920 && this.currentFrame <= 2399) {
			
					this.gotoAndStop("myBar_13Button");
							this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_12);
			
				} else if (this.currentFrame >= 2400 && this.currentFrame <= 2879) {
			
					this.gotoAndStop("myBar_17Button");
							this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_13);
			
				} else if (this.currentFrame >= 2880 && this.currentFrame <= 3359) {
			
					this.gotoAndStop("myBar_21Button");
							this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_14);
			
				}
			}
			
			
			////////////////////////////////////////////////////////////////////////
			
			
			//var _this = this;
			
			// Stops timeline on X loop or return to start
			//if (!this.looped) this.looped = 1;
			//if (this.looped++ == 2) this.stop();
			//else _this.gotoAndPlay('start');
			
			
				this.my4BlueDotsBar_1.visible = false;
			
				this.myBar_1Button.addEventListener("click", fl_ClickToShow_6.bind(this));
				function fl_ClickToShow_6()
			{
				this.my4BlueDotsBar_1.visible = true;
				this.myBar_1Button.visible = false;
			}
			
				this.myBar_1ButtonClick.addEventListener("click", fl_ClickToHide_7.bind(this));
				function fl_ClickToHide_7()
			{
				this.my4BlueDotsBar_1.visible = false;
				this.myBar_1Button.visible = true;
			}
			
				this.myPlayButton.addEventListener("click", fl_ClickToHide_8.bind(this));
				function fl_ClickToHide_8()
			{
				this.my4BlueDotsBar_1.visible = false;
				this.myBar_1Button.visible = true;
			}
			
			
			///////////////////////////////////////////////////////////////
			
			
				this.my4BlueDotsBar_5.visible = false;
			
				this.myBar_5Button.addEventListener("click", fl_ClickToShow_7.bind(this));
				function fl_ClickToShow_7()
			{
				this.my4BlueDotsBar_5.visible = true;
				this.myBar_5Button.visible = false;
			}
			
				this.myBar_5ButtonClick.addEventListener("click", fl_ClickToHide_9.bind(this));
				function fl_ClickToHide_9()
			{
				this.my4BlueDotsBar_5.visible = false;
				this.myBar_5Button.visible = true;
			}
			
				this.myPlayButton.addEventListener("click", fl_ClickToHide_10.bind(this));
				function fl_ClickToHide_10()
			{
				this.my4BlueDotsBar_5.visible = false;
				this.myBar_5Button.visible = true;
			}
			
			
			//////////////////////////////////////////////////////////////////
			
				this.my4BlueDotsBar_9.visible = false;
			
				this.myBar_9Button.addEventListener("click", fl_ClickToShow_8.bind(this));
				function fl_ClickToShow_8()
			{
				this.my4BlueDotsBar_9.visible = true;
				this.myBar_9Button.visible = false;
			}
			
				this.myBar_9ButtonClick.addEventListener("click", fl_ClickToHide_11.bind(this));
				function fl_ClickToHide_11()
			{
				this.my4BlueDotsBar_9.visible = false;
				this.myBar_9Button.visible = true;
			}
			
				this.myPlayButton.addEventListener("click", fl_ClickToHide_12.bind(this));
				function fl_ClickToHide_12()
			{
				this.my4BlueDotsBar_9.visible = false;
				this.myBar_9Button.visible = true;
			}
			
			
			//////////////////////////////////////////////////////////////////
			
				this.my4BlueDotsBar_13.visible = false;
			
				this.myBar_13Button.addEventListener("click", fl_ClickToShow_9.bind(this));
				function fl_ClickToShow_9()
			{
				this.my4BlueDotsBar_13.visible = true;
				this.myBar_13Button.visible = false;
			}
			
				this.myBar_13ButtonClick.addEventListener("click", fl_ClickToHide_13.bind(this));
				function fl_ClickToHide_13()
			{
				this.my4BlueDotsBar_13.visible = false;
				this.myBar_13Button.visible = true;
			}
			
				this.myPlayButton.addEventListener("click", fl_ClickToHide_14.bind(this));
				function fl_ClickToHide_14()
			{
				this.my4BlueDotsBar_13.visible = false;
				this.myBar_13Button.visible = true;
			}
			
			
			//////////////////////////////////////////////////////////////////
			
				this.my4BlueDotsBar_17.visible = false;
			
				this.myBar_17Button.addEventListener("click", fl_ClickToShow_10.bind(this));
				function fl_ClickToShow_10()
			{
				this.my4BlueDotsBar_17.visible = true;
				this.myBar_17Button.visible = false;
			}
			
				this.myBar_17ButtonClick.addEventListener("click", fl_ClickToHide_15.bind(this));
				function fl_ClickToHide_15()
			{
				this.my4BlueDotsBar_17.visible = false;
				this.myBar_17Button.visible = true;
			}
			
				this.myPlayButton.addEventListener("click", fl_ClickToHide_16.bind(this));
				function fl_ClickToHide_16()
			{
				this.my4BlueDotsBar_17.visible = false;
				this.myBar_17Button.visible = true;
			}
			
			
			//////////////////////////////////////////////////////////////////
			
				this.my4BlueDotsBar_21.visible = false;
			
				this.myBar_21Button.addEventListener("click", fl_ClickToShow_11.bind(this));
				function fl_ClickToShow_11()
			{
				this.my4BlueDotsBar_21.visible = true;
				this.myBar_21Button.visible = false;
			}
			
				this.myBar_21ButtonClick.addEventListener("click", fl_ClickToHide_17.bind(this));
				function fl_ClickToHide_17()
			{
				this.my4BlueDotsBar_21.visible = false;
				this.myBar_21Button.visible = true;
			}
			
				this.myPlayButton.addEventListener("click", fl_ClickToHide_18.bind(this));
				function fl_ClickToHide_18()
			{
				this.my4BlueDotsBar_21.visible = false;
				this.myBar_21Button.visible = true;
			}
			
			
			//////////////////////////////////////////////////////////////////
			
				
				this.my4BlueDotsBar_25.visible = false;
			
				this.myBar_25Button.addEventListener("click", fl_ClickToShow_12.bind(this));
				function fl_ClickToShow_12()
			{
				this.my4BlueDotsBar_25.visible = true;
				this.myBar_25Button.visible = false;
			}
			
				this.myBar_25ButtonClick.addEventListener("click", fl_ClickToHide_19.bind(this));
				function fl_ClickToHide_19()
			{
				this.my4BlueDotsBar_25.visible = false;
				this.myBar_25Button.visible = true;
			}
			
				this.myPlayButton.addEventListener("click", fl_ClickToHide_20.bind(this));
				function fl_ClickToHide_20()
			{
				this.my4BlueDotsBar_25.visible = false;
				this.myBar_25Button.visible = true;
			}
			
			
			//////////////////////////////////////////////////////////////////
			
				this.Full_screen_iconClick.visible = false;
			
				this.Full_screen_icon.addEventListener("click", fl_ClickToHide_20.bind(this));
			
				function fl_ClickToHide_20()
			{
				this.Full_screen_icon.visible = false;
				this.Full_screen_iconClick.visible = true;
			}
			
				this.Full_screen_iconClick.addEventListener("click", fl_ClickToShow_16.bind(this));
			
				function fl_ClickToShow_16()
			{
				this.Full_screen_icon.visible = true;
				this.Full_screen_iconClick.visible = false;
			}
			
			this.Full_screen_icon.addEventListener("click", fl_FullScreen_1.bind(this));
				function fl_FullScreen_1()
			{
				this.requestFullscreen();
				this.Full_screen_iconClick.visible = true;
			
			}
			
			this.Full_screen_iconClick.addEventListener("click", fl_ExitFullScreen_1.bind(this));
				function fl_ExitFullScreen_1()
			{
				this.exitFullscreen();
				this.Full_screen_icon.visible = true;
			
			}
		}
		this.frame_3359 = function() {
			this.gotoAndStop("myBar_1Button");
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3359).call(this.frame_3359).wait(1));
	
		// Full_song
		this.myDm7 = new lib.Red_Dot();
		this.myDm7.name = "myDm7";
		this.myDm7.setTransform(202.1,109.8,1,1,0,0,0,21.9,23.7);
		this.myDm7.alpha = 0;
		this.myDm7.compositeOperation = "multiply";
	
		this.myG7 = new lib.Red_Dot();
		this.myG7.name = "myG7";
		this.myG7.setTransform(596.95,109.8,1,1,0,0,0,21.9,23.7);
		this.myG7.alpha = 0;
		this.myG7.compositeOperation = "multiply";
		this.myG7._off = true;
	
		this.myCMaj7_1_1 = new lib.Red_Dot();
		this.myCMaj7_1_1.name = "myCMaj7_1_1";
		this.myCMaj7_1_1.setTransform(1044.95,109.8,1,1,0,0,0,21.9,23.7);
		this.myCMaj7_1_1.alpha = 0;
		this.myCMaj7_1_1.compositeOperation = "multiply";
		this.myCMaj7_1_1._off = true;
	
		this.myCMaj7_1_2 = new lib.Red_Dot();
		this.myCMaj7_1_2.name = "myCMaj7_1_2";
		this.myCMaj7_1_2.setTransform(1457.4,87.05);
		this.myCMaj7_1_2.alpha = 0;
		this.myCMaj7_1_2.compositeOperation = "multiply";
		this.myCMaj7_1_2._off = true;
	
		this.myAm7 = new lib.Red_Dot();
		this.myAm7.name = "myAm7";
		this.myAm7.setTransform(1476.9,153.1,1,1,0,0,0,21.9,23.7);
		this.myAm7.alpha = 0;
		this.myAm7.compositeOperation = "multiply";
		this.myAm7._off = true;
	
		this.myEm7 = new lib.Red_Dot();
		this.myEm7.name = "myEm7";
		this.myEm7.setTransform(1044.95,153.1,1,1,0,0,0,21.9,23.7);
		this.myEm7.alpha = 0;
		this.myEm7.compositeOperation = "multiply";
		this.myEm7._off = true;
	
		this.myFMaj7 = new lib.Red_Dot();
		this.myFMaj7.name = "myFMaj7";
		this.myFMaj7.setTransform(202.1,152.8,1,1,0,0,0,21.9,23.7);
		this.myFMaj7.alpha = 0;
		this.myFMaj7.compositeOperation = "multiply";
		this.myFMaj7._off = true;
	
		this.myBm7b5 = new lib.Red_Dot();
		this.myBm7b5.name = "myBm7b5";
		this.myBm7b5.setTransform(576,153.1,1,1,0,0,0,21.9,23.7);
		this.myBm7b5.alpha = 0;
		this.myBm7b5.compositeOperation = "multiply";
		this.myBm7b5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.myDm7).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:201.8,y:99.25,alpha:1},10).wait(49).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:99.4},0).to({regX:22.7,scaleX:1,scaleY:1,x:204,y:98,alpha:0},60).to({_off:true},1).wait(360).to({_off:false,regX:21.9,regY:23.7,x:202.1,y:97.8},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:201.8,y:99.25,alpha:1},10).wait(49).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:99.4},0).to({regX:22.7,scaleX:1,scaleY:1,x:204,y:98,alpha:0},60).to({_off:true},1).wait(360).to({_off:false,regX:21.9,regY:23.7,x:202.1,y:97.8},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:201.8,y:99.25,alpha:1},9).wait(49).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:99.4},0).to({regX:22.7,scaleX:1,scaleY:1,x:204,y:98,alpha:0},61).to({_off:true},1).wait(2280));
		this.timeline.addTween(cjs.Tween.get(this.myG7).wait(120).to({_off:false},0).to({regY:23.8,scaleX:1.8518,scaleY:1.8518,x:595.4,y:98,alpha:1},10).wait(49).to({regX:22.6,regY:24.6,scaleX:1.8513,scaleY:1.8511,x:596.15,y:99.05},0).to({regX:21.9,regY:23.8,scaleX:1,scaleY:1,x:598.35,y:97.7,alpha:0},60).to({_off:true},1).wait(360).to({_off:false,regY:23.7,x:596.95,y:97.8},0).to({regY:23.8,scaleX:1.8518,scaleY:1.8518,x:595.4,y:98,alpha:1},9).wait(51).to({regX:22.6,regY:24.6,scaleX:1.8513,scaleY:1.8511,x:596.15,y:99.05},0).to({regX:21.9,regY:23.8,scaleX:1,scaleY:1,x:598.35,y:97.7,alpha:0},59).to({_off:true},1).wait(360).to({_off:false,regY:23.7,x:596.95,y:97.8},0).to({regY:23.8,scaleX:1.8518,scaleY:1.8518,x:595.4,y:98,alpha:1},9).wait(49).to({regX:22.6,regY:24.6,scaleX:1.8513,scaleY:1.8511,x:596.15,y:99.05},0).to({regX:21.9,regY:23.8,scaleX:1,scaleY:1,x:598.35,y:97.7,alpha:0},61).to({_off:true},1).wait(360).to({_off:false,regY:23.7,x:596.95,y:97.8},0).to({regY:23.8,scaleX:1.8518,scaleY:1.8518,x:595.4,y:98,alpha:1},9).wait(49).to({regX:22.6,regY:24.6,scaleX:1.8513,scaleY:1.8511,x:596.15,y:99.05},0).to({regX:21.9,regY:23.8,scaleX:1,scaleY:1,x:598.35,y:97.7,alpha:0},61).to({_off:true},1).wait(360).to({_off:false,regY:23.7,x:596.95,y:97.8},0).to({regY:23.8,scaleX:1.8518,scaleY:1.8518,x:595.4,y:98,alpha:1},9).wait(49).to({regX:22.6,regY:24.6,scaleX:1.8513,scaleY:1.8511,x:596.15,y:99.05},0).to({regX:21.9,regY:23.8,scaleX:1,scaleY:1,x:598.35,y:97.7,alpha:0},61).to({_off:true},1).wait(360).to({_off:false,regY:23.7,x:596.95,y:97.8},0).to({regY:23.8,scaleX:1.8518,scaleY:1.8518,x:595.4,y:98,alpha:1},9).wait(49).to({regX:22.6,regY:24.6,scaleX:1.8513,scaleY:1.8511,x:596.15,y:99.05},0).to({regX:21.9,regY:23.8,scaleX:1,scaleY:1,x:598.35,y:97.7,alpha:0},61).to({_off:true},1).wait(720));
		this.timeline.addTween(cjs.Tween.get(this.myCMaj7_1_1).wait(240).to({_off:false},0).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:1044.45,y:99.1,alpha:1},9).wait(45).to({scaleX:1.8516,scaleY:1.8516,x:1044.4,y:98.95},0).to({scaleX:1,scaleY:1,x:1046.55,y:97.7,alpha:0},65).to({_off:true},1).wait(360).to({_off:false,regX:21.9,regY:23.7,x:1044.95,y:97.8},0).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:1044.45,y:99.1,alpha:1},9).wait(50).to({scaleX:1.8516,scaleY:1.8516,x:1044.4,y:98.95},0).to({scaleX:1,scaleY:1,x:1046.55,y:97.7,alpha:0},60).to({_off:true},1).wait(840).to({_off:false,regX:21.9,regY:23.7,x:1044.95,y:109.8},0).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:1044.45,y:99.1,alpha:1},9).wait(45).to({scaleX:1.8516,scaleY:1.8516,x:1044.4,y:98.95},0).to({scaleX:1,scaleY:1,x:1046.55,y:97.7,alpha:0},65).wait(1).to({regX:21.9,regY:23.7,x:1477.4,y:109.85},0).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:1485.4,y:99.1,alpha:1},10).wait(48).to({scaleX:1.8516,scaleY:1.8516},0).to({scaleX:1,scaleY:1,x:1478.45,y:97.7,alpha:0},61).to({_off:true},1).wait(240).to({_off:false,regX:21.9,regY:23.7,x:1044.95,y:109.8},0).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:1044.45,y:99.1,alpha:1},9).wait(45).to({scaleX:1.8516,scaleY:1.8516,x:1044.4,y:98.95},0).to({scaleX:1,scaleY:1,x:1046.55,y:97.7,alpha:0},65).to({_off:true},1).wait(1080));
		this.timeline.addTween(cjs.Tween.get(this.myCMaj7_1_2).wait(360).to({_off:false},0).to({regY:1,scaleX:1.8519,scaleY:1.853,x:1437.4,y:56.9,alpha:1},9).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:1478.9,y:99.1},1).wait(48).to({scaleX:1.8516,scaleY:1.8516},0).to({scaleX:1,scaleY:1,x:1478.45,y:97.7,alpha:0},61).to({_off:true},1).wait(2880));
		this.timeline.addTween(cjs.Tween.get(this.myAm7).wait(840).to({_off:false},0).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:1476.35,y:142.3,alpha:1},9).wait(50).to({regY:24.5,scaleX:1.8516,scaleY:1.8516,x:1476.25,y:142.35},0).to({scaleX:1,scaleY:1,x:1478.5,y:141.05,alpha:0},60).to({_off:true},1).wait(360).to({_off:false,regX:21.9,regY:23.7,x:1476.9,y:153.1},0).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:1476.35,y:142.3,alpha:1},9).wait(49).to({regY:24.5,scaleX:1.8516,scaleY:1.8516,x:1476.25,y:142.35},0).to({scaleX:1,scaleY:1,x:1478.5,y:141.05,alpha:0},61).to({_off:true},1).wait(840).to({_off:false,regX:21.9,regY:23.7,x:1476.9,y:153.1},0).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:1476.35,y:142.3,alpha:1},9).wait(49).to({regY:24.5,scaleX:1.8516,scaleY:1.8516,x:1476.25,y:142.35},0).to({scaleX:1,scaleY:1,x:1478.5,y:141.05,alpha:0},61).to({_off:true},1).wait(360).to({_off:false,regX:21.9,regY:23.7,x:1476.9,y:153.1},0).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:1476.35,y:142.3,alpha:1},9).wait(49).to({regY:24.5,scaleX:1.8516,scaleY:1.8516,x:1476.25,y:142.35},0).to({scaleX:1,scaleY:1,x:1478.5,y:141.05,alpha:0},61).to({_off:true},1).wait(360).to({_off:false,regX:21.9,regY:23.7,x:1476.9,y:153.1},0).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:1476.35,y:142.3,alpha:1},9).wait(49).to({regY:24.5,scaleX:1.8516,scaleY:1.8516,x:1476.25,y:142.35},0).to({regY:24.6,scaleX:0.9998,scaleY:0.9998,x:1481.15,y:153.5,alpha:0},61).wait(1));
		this.timeline.addTween(cjs.Tween.get(this.myEm7).wait(1200).to({_off:false},0).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:1044.5,y:142.3,alpha:1},9).wait(49).to({regY:24.5,scaleX:1.8516,scaleY:1.8516,x:1044.4,y:142.35},0).to({scaleX:1,scaleY:1,x:1046.6,y:141.05,alpha:0},61).to({_off:true},1).wait(1320).to({_off:false,regX:21.9,regY:23.7,x:1044.95,y:153.1},0).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:1044.5,y:142.3,alpha:1},9).wait(49).to({regY:24.5,scaleX:1.8516,scaleY:1.8516,x:1044.4,y:142.35},0).to({scaleX:1,scaleY:1,x:1046.6,y:141.05,alpha:0},61).to({_off:true},1).wait(360).to({_off:false,regX:21.9,regY:23.7,x:1044.95,y:153.1},0).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:1044.5,y:142.3,alpha:1},9).wait(49).to({regY:24.5,scaleX:1.8516,scaleY:1.8516,x:1044.4,y:142.35},0).to({scaleX:1,scaleY:1,x:1046.6,y:141.05,alpha:0},61).to({_off:true},1).wait(120));
		this.timeline.addTween(cjs.Tween.get(this.myFMaj7).wait(1440).to({_off:false},0).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:201.55,y:145.1,alpha:1},9).wait(47).to({regX:22.5,regY:24.5,scaleX:1.8516,scaleY:1.8516,x:201.5,y:145.2},0).to({regX:22.6,scaleX:1.0139,scaleY:1.0139,x:203.4,y:153.4,alpha:0.0195},63).to({_off:true},1).wait(360).to({_off:false,regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:202.1,y:152.8,alpha:0},0).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:201.55,y:145.1,alpha:1},9).wait(47).to({regX:22.5,regY:24.5,scaleX:1.8516,scaleY:1.8516,x:201.5,y:145.2},0).to({regX:22.6,scaleX:1.0139,scaleY:1.0139,x:203.4,y:153.4,alpha:0.0195},63).to({_off:true},1).wait(360).to({_off:false,regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:202.1,y:152.8,alpha:0},0).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:201.55,y:145.1,alpha:1},9).wait(47).to({regX:22.5,regY:24.5,scaleX:1.8516,scaleY:1.8516,x:201.5,y:145.2},0).to({regX:22.6,scaleX:1.0139,scaleY:1.0139,x:203.4,y:153.4,alpha:0.0195},63).to({_off:true},1).wait(360).to({_off:false,regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:202.1,y:152.8,alpha:0},0).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:201.55,y:145.1,alpha:1},9).wait(49).to({regX:22.5,regY:24.5,scaleX:1.8516,scaleY:1.8516,x:201.5,y:145.2},0).to({regX:22.6,scaleX:1.0139,scaleY:1.0139,x:203.4,y:153.4,alpha:0.0195},61).to({_off:true,regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:576,y:153.1,alpha:0},1).wait(360));
		this.timeline.addTween(cjs.Tween.get(this.myBm7b5).wait(2999).to({_off:false},1).to({regX:22.4,regY:24.4,scaleX:1.8517,scaleY:1.8517,x:575.4,y:142.3,alpha:1},9).wait(49).to({regX:22.5,regY:24.5,scaleX:1.8516,scaleY:1.8516,x:575.35,y:142.35},0).to({scaleX:1,scaleY:1,x:577.55,y:141.05,alpha:0},61).to({_off:true},1).wait(240));
	
		// Bar_Dot
		this.my4BlueDotsBar_1 = new lib._4_Blue_Dots_Bar_1();
		this.my4BlueDotsBar_1.name = "my4BlueDotsBar_1";
		this.my4BlueDotsBar_1.setTransform(838.45,105.95,1,1,0,0,0,654.4,17.2);
	
		this.my4BlueDotsBar_5 = new lib.BlueBar_5();
		this.my4BlueDotsBar_5.name = "my4BlueDotsBar_5";
		this.my4BlueDotsBar_5.setTransform(838.45,127.55,1,1,0,0,0,654.4,38.8);
	
		this.my4BlueDotsBar_9 = new lib.BlueBar_9();
		this.my4BlueDotsBar_9.name = "my4BlueDotsBar_9";
		this.my4BlueDotsBar_9.setTransform(838.45,127.55,1,1,0,0,0,654.4,38.8);
	
		this.my4BlueDotsBar_13 = new lib.BlueBar_13();
		this.my4BlueDotsBar_13.name = "my4BlueDotsBar_13";
		this.my4BlueDotsBar_13.setTransform(838.45,127.55,1,1,0,0,0,654.4,38.8);
	
		this.my4BlueDotsBar_17 = new lib.BlueBar_17();
		this.my4BlueDotsBar_17.name = "my4BlueDotsBar_17";
		this.my4BlueDotsBar_17.setTransform(838.45,127.55,1,1,0,0,0,654.4,38.8);
	
		this.my4BlueDotsBar_21 = new lib.BlueBar_21();
		this.my4BlueDotsBar_21.name = "my4BlueDotsBar_21";
		this.my4BlueDotsBar_21.setTransform(838.45,127.55,1,1,0,0,0,654.4,38.8);
	
		this.my4BlueDotsBar_25 = new lib.BlueBar_25();
		this.my4BlueDotsBar_25.name = "my4BlueDotsBar_25";
		this.my4BlueDotsBar_25.setTransform(838.45,148.5,1,1,0,0,0,654.4,17.9);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.my4BlueDotsBar_1}]}).to({state:[{t:this.my4BlueDotsBar_5}]},480).to({state:[]},479).to({state:[{t:this.my4BlueDotsBar_9}]},1).to({state:[{t:this.my4BlueDotsBar_13}]},480).to({state:[{t:this.my4BlueDotsBar_17}]},480).to({state:[{t:this.my4BlueDotsBar_21}]},480).to({state:[{t:this.my4BlueDotsBar_25}]},480).wait(480));
	
		// Bars
		this.myBar_1Button = new lib.myBar_1Button();
		this.myBar_1Button.name = "myBar_1Button";
		this.myBar_1Button.setTransform(46.25,106.65,1,1,0,0,0,43.3,29.1);
		new cjs.ButtonHelper(this.myBar_1Button, 0, 1, 1);
	
		this.myBar_5Button = new lib.Bar_5();
		this.myBar_5Button.name = "myBar_5Button";
		this.myBar_5Button.setTransform(46.25,106.65,1,1,0,0,0,43.3,29.1);
	
		this.myBar_9Button = new lib.Bar_9();
		this.myBar_9Button.name = "myBar_9Button";
		this.myBar_9Button.setTransform(46.25,107.15,1,1,0,0,0,43.3,29.1);
		new cjs.ButtonHelper(this.myBar_9Button, 0, 1, 1);
	
		this.myBar_13Button = new lib.Bar_13();
		this.myBar_13Button.name = "myBar_13Button";
		this.myBar_13Button.setTransform(59.15,106.65,1,1,0,0,0,56.2,29.1);
		new cjs.ButtonHelper(this.myBar_13Button, 0, 1, 1);
	
		this.myBar_17Button = new lib.Bar_17();
		this.myBar_17Button.name = "myBar_17Button";
		this.myBar_17Button.setTransform(53.15,107.15,1,1,0,0,0,50.2,29.1);
	
		this.myBar_21Button = new lib.Bar_21();
		this.myBar_21Button.name = "myBar_21Button";
		this.myBar_21Button.setTransform(54.95,107.15,1,1,0,0,0,52,29.1);
		new cjs.ButtonHelper(this.myBar_21Button, 0, 1, 1);
	
		this.myBar_25Button = new lib.Bar_25();
		this.myBar_25Button.name = "myBar_25Button";
		this.myBar_25Button.setTransform(56.45,106.65,1,1,0,0,0,53.5,29.1);
		new cjs.ButtonHelper(this.myBar_25Button, 0, 1, 1);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.myBar_1Button}]}).to({state:[{t:this.myBar_5Button}]},480).to({state:[{t:this.myBar_9Button}]},480).to({state:[{t:this.myBar_13Button}]},480).to({state:[{t:this.myBar_17Button}]},480).to({state:[{t:this.myBar_21Button}]},480).to({state:[{t:this.myBar_25Button}]},480).wait(480));
	
		// Bars_Click
		this.myBar_1ButtonClick = new lib.myBar_1Button();
		this.myBar_1ButtonClick.name = "myBar_1ButtonClick";
		this.myBar_1ButtonClick.setTransform(45.9,106.85,1,1,0,0,0,43.3,29.1);
		this.myBar_1ButtonClick.alpha = 0.5;
		new cjs.ButtonHelper(this.myBar_1ButtonClick, 0, 1, 1);
	
		this.myBar_5ButtonClick = new lib.Bar_5();
		this.myBar_5ButtonClick.name = "myBar_5ButtonClick";
		this.myBar_5ButtonClick.setTransform(46.25,106.65,1,1,0,0,0,43.3,29.1);
		this.myBar_5ButtonClick.alpha = 0.5;
		new cjs.ButtonHelper(this.myBar_5ButtonClick, 0, 1, 1);
	
		this.myBar_9ButtonClick = new lib.Bar_9();
		this.myBar_9ButtonClick.name = "myBar_9ButtonClick";
		this.myBar_9ButtonClick.setTransform(46.25,107.15,1,1,0,0,0,43.3,29.1);
		this.myBar_9ButtonClick.alpha = 0.5;
		new cjs.ButtonHelper(this.myBar_9ButtonClick, 0, 1, 1);
	
		this.myBar_13ButtonClick = new lib.Bar_13();
		this.myBar_13ButtonClick.name = "myBar_13ButtonClick";
		this.myBar_13ButtonClick.setTransform(59.15,106.65,1,1,0,0,0,56.2,29.1);
		this.myBar_13ButtonClick.alpha = 0.5;
		new cjs.ButtonHelper(this.myBar_13ButtonClick, 0, 1, 1);
	
		this.myBar_17ButtonClick = new lib.Bar_17();
		this.myBar_17ButtonClick.name = "myBar_17ButtonClick";
		this.myBar_17ButtonClick.setTransform(53.15,107.15,1,1,0,0,0,50.2,29.1);
		this.myBar_17ButtonClick.alpha = 0.5;
		new cjs.ButtonHelper(this.myBar_17ButtonClick, 0, 1, 1);
	
		this.myBar_21ButtonClick = new lib.Bar_21();
		this.myBar_21ButtonClick.name = "myBar_21ButtonClick";
		this.myBar_21ButtonClick.setTransform(54.95,107.15,1,1,0,0,0,52,29.1);
		this.myBar_21ButtonClick.alpha = 0.5;
		new cjs.ButtonHelper(this.myBar_21ButtonClick, 0, 1, 1);
	
		this.myBar_25ButtonClick = new lib.Bar_25();
		this.myBar_25ButtonClick.name = "myBar_25ButtonClick";
		this.myBar_25ButtonClick.setTransform(56.45,106.65,1,1,0,0,0,53.5,29.1);
		this.myBar_25ButtonClick.alpha = 0.5;
		new cjs.ButtonHelper(this.myBar_25ButtonClick, 0, 1, 1);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.myBar_1ButtonClick}]}).to({state:[{t:this.myBar_5ButtonClick}]},480).to({state:[{t:this.myBar_9ButtonClick}]},480).to({state:[{t:this.myBar_13ButtonClick}]},480).to({state:[{t:this.myBar_17ButtonClick}]},480).to({state:[{t:this.myBar_21ButtonClick}]},480).to({state:[{t:this.myBar_25ButtonClick}]},480).wait(480));
	
		// Full_screen
		this.Full_screen_icon = new lib.Full_screen_icon();
		this.Full_screen_icon.name = "Full_screen_icon";
		this.Full_screen_icon.setTransform(1774.95,337.7,0.7,0.7,0,0,0,52.2,55.5);
		new cjs.ButtonHelper(this.Full_screen_icon, 0, 1, 1);
	
		this.timeline.addTween(cjs.Tween.get(this.Full_screen_icon).wait(3360));
	
		// Full_screen_click
		this.Full_screen_iconClick = new lib.Full_screen_iconClickai();
		this.Full_screen_iconClick.name = "Full_screen_iconClick";
		this.Full_screen_iconClick.setTransform(1774.95,337.7,0.7,0.7,0,0,0,52.2,55.5);
		this.Full_screen_iconClick.alpha = 0.5;
		new cjs.ButtonHelper(this.Full_screen_iconClick, 0, 1, 1);
	
		this.timeline.addTween(cjs.Tween.get(this.Full_screen_iconClick).wait(3360));
	
		// Play_button
		this.myPlayButton = new lib.Play();
		this.myPlayButton.name = "myPlayButton";
		this.myPlayButton.setTransform(76,28.4,1,1,0,0,0,73,25.8);
		new cjs.ButtonHelper(this.myPlayButton, 0, 1, 1);
	
		this.timeline.addTween(cjs.Tween.get(this.myPlayButton).wait(3360));
	
		// Pause_button
		this.myPauseButton = new lib.Pause();
		this.myPauseButton.name = "myPauseButton";
		this.myPauseButton.setTransform(76.8,28.4,1,1,0,0,0,73.8,26.8);
		new cjs.ButtonHelper(this.myPauseButton, 0, 1, 1);
	
		this.timeline.addTween(cjs.Tween.get(this.myPauseButton).wait(3360));
	
		// Stop_button
		this.myStopButton = new lib.Stop();
		this.myStopButton.name = "myStopButton";
		this.myStopButton.setTransform(233.4,28.6,1,1,0,0,0,74.4,27);
		new cjs.ButtonHelper(this.myStopButton, 0, 1, 1);
	
		this.timeline.addTween(cjs.Tween.get(this.myStopButton).wait(3360));
	
		// Forward_Button
		this.myForwardButton = new lib.Forward_Btn();
		this.myForwardButton.name = "myForwardButton";
		this.myForwardButton.setTransform(1765.8,48.05,1,1,0,0,0,46.2,48);
		new cjs.ButtonHelper(this.myForwardButton, 0, 1, 1);
	
		this.timeline.addTween(cjs.Tween.get(this.myForwardButton).wait(3360));
	
		// Backwards_Button
		this.myBackwardButton = new lib.Backward_Btn();
		this.myBackwardButton.name = "myBackwardButton";
		this.myBackwardButton.setTransform(1675.75,48,1,1,0,0,0,46.2,48);
		new cjs.ButtonHelper(this.myBackwardButton, 0, 1, 1);
	
		this.timeline.addTween(cjs.Tween.get(this.myBackwardButton).wait(3360));
	
		// Harm_Score_1
		this.instance = new lib.Harm_chord_1();
		this.instance.setTransform(0,62.1,0.8583,0.8759);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(3360));
	
		// stageBackground
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EiPpge8MEfTAAAMAAAA95MkfTAAAg");
		this.shape.setTransform(909.4,188.1);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("EiPpAe9MAAAg95MEfTAAAMAAAA95g");
		this.shape_1.setTransform(909.4,188.1);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(3360));
	
		this._renderFirstFrame();
	
	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(909,188,909.8,188.2);
	// library properties:
	lib.properties = {
		id: 'C713FFE08B27468BA6C257A472237D04',
		width: 1818,
		height: 376,
		fps: 30,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [
			{src:"images/backwards1426683_640.png?1632076338778", id:"backwards1426683_640"},
			{src:"images/forward1426686_640.png?1632076338778", id:"forward1426686_640"},
			{src:"images/Harm_chord_1.png?1632076338778", id:"Harm_chord_1"},
			{src:"images/pausknapp.jpg?1632076338778", id:"pausknapp"},
			{src:"images/playknapp.jpg?1632076338778", id:"playknapp"},
			{src:"images/stoppknapp.jpg?1632076338778", id:"stoppknapp"},
			{src:"sounds/Harmonic_rythm_1.mp3?1632076338778", id:"Harmonic_rythm_1"}
		],
		preloads: []
	};
	
	
	
	// bootstrap callback support:
	
	(lib.Stage = function(canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();
	
	p.setAutoPlay = function(autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
	p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
	p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
	p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
	
	p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
	
	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if(!an.bootstrapListeners) {
		an.bootstrapListeners=[];
	}
	
	an.bootstrapCallback=function(fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if(an.bootcompsLoaded.length > 0) {
			for(var i=0; i<an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};
	
	an.compositions = an.compositions || {};
	an.compositions['C713FFE08B27468BA6C257A472237D04'] = {
		getStage: function() { return exportRoot.stage; },
		getLibrary: function() { return lib; },
		getSpriteSheet: function() { return ss; },
		getImages: function() { return img; }
	};
	
	an.compositionLoaded = function(id) {
		an.bootcompsLoaded.push(id);
		for(var j=0; j<an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}
	
	an.getComposition = function(id) {
		return an.compositions[id];
	}
	
	
	an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}
			domContainers[0].width = w * pRatio * sRatio;			
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function(container) {				
				container.style.width = w * sRatio + 'px';				
				container.style.height = h * sRatio + 'px';			
			});
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	an.handleSoundStreamOnTick = function(event) {
		if(!event.paused){
			var stageChild = stage.getChildAt(0);
			if(!stageChild.paused || stageChild.ignorePause){
				stageChild.syncStreamSounds();
			}
		}
	}
	an.handleFilterCache = function(event) {
		if(!event.paused){
			var target = event.target;
			if(target){
				if(target.filterCacheList){
					for(var index = 0; index < target.filterCacheList.length ; index++){
						var cacheInst = target.filterCacheList[index];
						if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
							cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
						}
					}
				}
			}
		}
	}
	
	
	})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
	var createjs, AdobeAn;