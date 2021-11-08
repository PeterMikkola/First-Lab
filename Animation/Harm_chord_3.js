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


(lib.Harmonic_chord_3ai = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AABAnQgBgCAAgEQAAgHAGgXIAFgUIAAgBIAAgBIgBgCIgHAAQgJAAgNAGIAAgTQADgCAJgDIANgBQAPAAgBAKQgDAWgLAvIgBABIgCABg");
	this.shape.setTransform(417.3068,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWAnQgBgTgBgBQgGATgQAAQgaAAgBgtQgBgFACgLQADgOAFgJQAHgOALgBQAJAAAEAIQADAEACAMIACAOQAAAGgCAAQgGAAgCgFIgEgKQgCgEgEAAQgHAAgGAOQgEANAAAGQAAAIAEAEQAEAFAIgBQAHABAEgFIABgBIgQAAIAAgTQAEgDAPgBQAMAAAEARQACAGAAARQABAXgCAKQgDAEgDAAQgBgEAAgTg");
	this.shape_1.setTransform(410.775,33.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag0AaIAAgPIAcghQASgVAGgOIAZAVQAQANAMADIgBAOQgHALgTAVIgbAgQglgbgOgFgAghANIARALIAQALIAigoQgNgIgTgQQgEAKgfAgg");
	this.shape_2.setTransform(415.5,60.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AABAnQgBgCAAgEQAAgHAGgXIAFgUIAAgBIAAgBIgBgCIgHAAQgJAAgNAGIAAgTQADgCAJgDIANgBQAPAAgBAKQgDAWgLAvIgBABIgCABg");
	this.shape_3.setTransform(296.3568,33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWAnQgBgTgBgBQgGATgQAAQgaAAgBgtQgBgFACgLQADgOAFgJQAHgOALgBQAJAAAEAIQADAEACAMIACAOQAAAGgCAAQgGAAgCgFIgEgKQgCgEgEAAQgHAAgGAOQgEANAAAGQAAAIAEAEQAEAFAIgBQAHABAEgFIABgBIgQAAIAAgTQAEgDAPgBQAMAAAEARQACAGAAARQABAXgCAKQgDAEgDAAQgBgEAAgTg");
	this.shape_4.setTransform(289.825,33.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag0AaIAAgPIAcghQASgVAGgOIAYAVQARANALADIAAAOQgIALgSAVIgcAgQgkgbgOgFgAggANIAQALIAQALIAigoQgOgIgRgQQgGAKgdAgg");
	this.shape_5.setTransform(294.55,60.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AABAnQgBgCAAgDQAAgIAGgXIAFgUIAAgBIAAgBIgBgBIgHAAQgJAAgNAEIAAgSQADgDAJgBIANgCQAPAAgBAKQgDAXgLAtIgBACIgCABg");
	this.shape_6.setTransform(172.7068,21.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAQAhQgFgLgBgOQgEANgGAAQgEAAgFgEIgBANQgCACgDAAIgEgBQgCgBAAgRIgDgqIAHAAIADALIAFANQAEAGAEAAQADAAADgGIAEgPIAGgMIAFAEQgBAoAGAVg");
	this.shape_7.setTransform(168.35,22.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOAxQgHgBgDgFIgCgZIAFABIgFgaIgDADIAAgYQAHgKAFgFQAIgFAKAAQASAAAHAQQAEAKAAAWQAAARgCAJQgEATgKAEQgEABgMAAIgMgBgAACgZQgHADgLALQACAEADAbQAHAEAHAAQAKgBADgEQADgDACgIQACgIAAgDQAAgHgGgIQgFgHgIAAg");
	this.shape_8.setTransform(161.525,20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AABAnQgBgCAAgEQAAgIAGgWIAFgUIAAgBIAAgBIgBgBIgHAAQgJAAgNAEIAAgSQADgCAJgCIANgCQAPAAgBAKQgDAWgLAvIgBABIgCABg");
	this.shape_9.setTransform(174.6568,32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIAUQgBgGADgCIAFADIAEADIABAAIgBgGIgBgMIAAgJQADgDACAAIADABIAAAJIACAYIAAAGQgBAFgEAAQgOgDgBgKgAgPAEIgBgGQAAgHAGgIQAFgGAGgFQAHgEACAAQADAAADACQABABAAAEIgBAHQgHABgJAIQgFAEgCAFIgBAEQgBABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgDAAgCgCg");
	this.shape_10.setTransform(172.75,34.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgNAhIgCgNQAAgIAEgRQAFgXAGgEQADAAADAKIAEASIAFAbIABAGQgBADgEAAQgEAAgBgEIgBgKQgKAEgBACIAAAJgAgEAFQAEgBAAgCIAAgIIgBAAIgDALg");
	this.shape_11.setTransform(169.8,33);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAXApQgFgMgCgaQgGAXgKgBQgGABgHgIQgCAIAAANQgCABgDABQgDgBgCgBQgCgCAAgVIgDg1IAGAAQACACAEAMQADAMADAGQAFAHAGAAQADAAAFgIIAGgSIAHgQIAFAEIAAAKQAAAtAGAWg");
	this.shape_12.setTransform(164.1,33.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNAsIgCgVIgCgVIgCgZQAAgGACgEQADgEAMgGQAKgFADAAQAEAAABAFIABAGIAAAEIgBAGQgCADgGADQgJAFgHAEIABAQQADAAAIgEIALgCQAEAAABAJQAAAJgBABIgNAEQgJADgCACIAAAKQAAANgBAAQgGAAgBgFg");
	this.shape_13.setTransform(158.475,32.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag0AaIAAgPIAcghQASgVAGgOIAYAVQARANALADIAAAOQgIALgSAVIgbAgQglgbgOgFgAggANIAQALIAQALIAigoQgOgIgRgQQgGAKgdAgg");
	this.shape_14.setTransform(168.55,60.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AABAnQgBgCAAgEQAAgIAGgWIAFgTIAAgCIAAgBIgBgCIgHAAQgJABgNAFIAAgTQADgDAJgCIANgBQAPAAgBAKQgDAWgLAvIgBABIgCABg");
	this.shape_15.setTransform(60.9068,9.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAQAhQgFgLgBgOQgEANgGAAQgEAAgFgEIgBANQgCACgDAAIgEgBQgCgBAAgRIgDgqIAHAAIADALIAFANQAEAGAEAAQADAAADgGIAEgPIAGgMIAFAEQgBAoAGAVg");
	this.shape_16.setTransform(56.75,10.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAxIAAgCIgBgGIAAgHIAAgDQAAgOAEgZQAHgjAJgFQAHAAAEAVIAEATIAAADIADASIABACIADAUIACAJQgBADgFAAQgEAAgDgDIgBgHIgCgLIgMAFIgFADIgBACIABAGIgBAHgAgGgEIgCANQAKgFgBgBIgBgJQAAgIgCgCQgCACgCAKg");
	this.shape_17.setTransform(50.65,8.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AABAnQgBgCAAgDQAAgIAGgXIAFgUIAAgBIAAgBIgBgBIgHAAQgJAAgNAEIAAgSQADgDAJgBIANgCQAPAAgBAKQgDAXgLAtIgBACIgCABg");
	this.shape_18.setTransform(61.1568,21.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAQAhQgEgLgCgOQgEANgGAAQgEAAgFgEIgBANQgCACgDAAIgEgBQgCgBgBgRIgCgqIAHAAIADALIAFANQADAGAFAAQACAAADgGIAGgPIAEgMIAGAEQgBAoAGAVg");
	this.shape_19.setTransform(57,22.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAOAxIgBAAIgeAAQgCgDgCgYIgDgiQAAgIAIgJQAHgHAJgGQAJgGAFAAQAEgBAAAGIAAAGQgBAHgBACQgBACgEACQgLAFgIAJQgFAFAAADQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAIAXgKQAEAAAAAHIAAADIAAABQAAAKgGAEIgVAJQABAEACABIAXgCQAIAAABABIABADIgCANQgBAFgGAAg");
	this.shape_20.setTransform(50.4736,20.3683);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AABAnQgBgCAAgEQAAgIAGgWIAFgUIAAgBIAAgBIgBgBIgHAAQgJAAgNAEIAAgSQADgCAJgCIANgCQAPAAgBAKQgDAWgLAvIgBABIgCABg");
	this.shape_21.setTransform(64.5068,32.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIAUQAAgGACgCIAFADIAEADIABAAIgBgGIgBgMIAAgJQADgDACAAIADABIAAAJIACAYIAAAGQgBAFgEAAQgOgDgBgKgAgPAEIgBgGQAAgHAGgIQAFgGAGgFQAHgEACAAQADAAADACQABABAAAEIgBAHQgHABgJAIQgFAEgCAFIgCAEQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgDAAgCgCg");
	this.shape_22.setTransform(62.6,34.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgNAhIgBgNQgBgIAEgRQAEgXAHgEQADAAADAKIAEASIAEAbIABAGQABADgFAAQgEAAgBgEIgCgKQgJAEgBACIAAAJgAgEAFQAEgBAAgCIAAgIIgCAAIgCALg");
	this.shape_23.setTransform(59.4,33);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAYApQgGgMgCgaQgGAXgKgBQgGABgHgIQgCAIAAANQgBABgEABQgDgBgCgBQgCgCAAgVIgDg1IAGAAQADACADAMQADAMADAGQAEAHAHAAQAEAAAEgIIAGgSIAGgQIAGAEIAAAKQAAAtAGAWg");
	this.shape_24.setTransform(53.95,33.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgOAxQgHgEgEgOIgCgXQgBgQAGgRQAHgXAPAAQAQAAACAeQAAAOgCAKQgDAAgCACQgGAAgBgHIAAgPQAAgLgEAAQgDAAgFAGIgGAKQgEAJABAIQABASALACIAeAAIACADQABABAAAFQAAAHgEAFg");
	this.shape_25.setTransform(47.4706,32.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag0AaIAAgPIAcghQASgVAGgOIAYAVQARANALADIAAAOQgIALgSAVIgcAgQgkgbgOgFgAggANIAQALIAQALIAigoQgOgIgRgQQgGAKgdAgg");
	this.shape_26.setTransform(57.4,60.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(0.2).p("Abbh3IAADvALLh3IAADvAnth3IAADvA7ah3IAADv");
	this.shape_27.setTransform(332.4,60.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAEBGQgFABAAgLQAAgFACgBIAHAAIAEgBIAAgFIAAgGQgMgFgJgJIgPgMQgDAAgFAIIgHAHQgDAAgCgGQACgWAOgDQARgbAVgmQACgEAEgBIADAFIADADQACAJAAAqIAAAQIAAAKIAAAHQABABAFAAQAEAAAHgFQAEADAAAFQAAAFgHAGQgGAHgGgBIgDAAIAAAFIgBAFIALABQAGACAAAEQAAALgFgBgAgNgCQAFAAAIAIIAMAKIAAgHIAAgJIAAgPIAAgdg");
	this.shape_28.setTransform(38.325,54.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAEBGQgFAAAAgLQAAgEACgBIAHAAIAEAAIAAgGIAAgGQgMgFgJgIIgPgNQgDAAgFAHIgHAHQgDAAgCgFQACgWAOgDQARgbAVgnQACgDAEAAIADADIADAFQACAIAAApIAAAQIAAAKIAAAHQABACAFAAQAEAAAHgEQAEACAAAFQAAAFgHAHQgGAFgGAAIgDAAIAAAFIgBAGIALABQAGABAAAEQAAAKgFAAgAgNgCQAFABAIAGIAMALIAAgGIAAgJIAAgQIAAgcg");
	this.shape_29.setTransform(38.225,66.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AADD2QgCgIABgIQARgeAAgaIgBgKQgBgIgCAAIgIACIgQABQgmAAgUgYQgSgXAAgmQABgcAPgvQAJgXAag/IAQgpIgPh5QACgJAGAAIALAFQAfAXAAA1QgBAbgQAnIgDAKQAAALADAuQAEAuABAFQAJgIAMgGQAMgHALAAQAUAAAJAQQAIANgBAWQABALgEAUQgEAVgDAIQgLAZgSAQQgGAFgLAHIgBABIACALQADAQAAAKQAAATgFAWQgGAegMAAQgFAAgCgNgAgPBMQgNAUAAAPIAKABQAHAAATgEIgGg3gAhEBMQAAAXASAHIAIADQAAglAZgmIAMgTIgIhbQg3B6AAAegAAcAgQgQAIAAAGIACAcIADAcQAPgFARgXQATgXAAgPQAAgFgIgEQgFgDgHAAQgGAAgOAIgAgPjEQgBAaAHAgIAGgWQADgOABgIQAAgEgFgIQgEgHgFAAQgCAAAAAFg");
	this.shape_30.setTransform(18.65,60.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(0.2).p("EgnXAB4MBOvAAAEgnXAA8MBOvAAAEgnXAAAMBOvAAAEgnXgA7MBOvAAAEgnXgB3MBOvAAA");
	this.shape_31.setTransform(255.95,60.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,-2,506,97.4);


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


(lib.Bar_45Click = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#244AFC").s().p("AgkCYQgFgEgGgRIAAgrIAKgFIAIAOQAFALAHAAQATgBARgTQAQgSAAgVQAAgMgNgNQgNgMgKAAQgIAAgNAJIgPAPQgMAAgBgKIgFhWIAAgOQAAgnAOgRQANgPAlgOIAAAkQAAAPgJAEQgQAGgDAFQgKAOAAAoIAAAQQAPgNAIAAQAaAAATAXQARAVAAAcQABAqgOAjQgUAvgkAAQgQAAgHgIg");
	this.shape.setTransform(82.75,31.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#244AFC").s().p("AAlCdIgFgmQgEgZgHgPQgrARgaAAQgQAAgGgGQgGgGAAgQQAAgzA4hrQAfg/ARgDQAFAJAAALIgBAWIAAAWQAAArAFA9IAkgIQAEAIAAAuQAAAFgbAJQAAALAEAXQAEAWAAAMIgBARgAgUgVQgRAjgFARQAaAAAggKQgIg0AAgnQgKAOgSAjg");
	this.shape_1.setTransform(67.975,30.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#244AFC").s().p("AABB6IgiABQgNg2gBg9QgWgEAAgpQAAgeAWgdQAYgdAcAAQAgAAAMAXQAHAPAAAfQAAAdgOAbQgKAVgeAmQAAAGAhAEIAiAEIABA1QgogEgdAAgAgRg0QgLAKgHANQAJAJADAjIAcglQASgWAAgMQAAgIgPAAQgMAAgNAMg");
	this.shape_2.setTransform(42.325,34.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#244AFC").s().p("Ag1B+QgGgdABgUQAAgiANhCQAShXAYgOQAPABALAjIAOBDQAMA3AHA0IAEAaQgBAKgQAAQgPAAgFgQIgGglQglAPgFAGIgBAkgAgSASQASgGAAgEQABgLgEgWIgGAAQgGASgDAZg");
	this.shape_3.setTransform(28.05,33.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#244AFC").s().p("Ag7CSQgJgKAAgZQAAgaAOgLIAFgEIABADIAAABIAAAAIAAgEIgBAAIgBgYIgBgsIAAgUIgSADQgRABACgiQACghAognQAngkAZAAQAaAAAJASQAEAJgBAWQgCAggLAUIgMAUQAAABANAHQAlATAAAmQAAA1gcAkQgeAmgzAAQgZAAgKgLgAgRAuQAAA8AGAFQAiADASggQALgUABgPQAAgKgLgKQgLgJgLAAQgbAAgKAcgAAOhoQgOAHgMAMQgNAOAAAPIAFAcQAjgWAOguQABgDgEgDQgEgCgEgBgAgwBJIgBgDIABAAIAAAEIAAAAIAAgBgAgxBGIAAAAg");
	this.shape_4.setTransform(11.9142,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bar_45Click, new cjs.Rectangle(0,0,91,58.1), null);


(lib.Bar_45 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#244AFC").s().p("AgkCYQgFgEgGgRIAAgrIAKgFIAIAOQAFALAHAAQATgBARgTQAQgSAAgVQAAgMgNgNQgNgMgKAAQgIAAgNAJIgPAPQgMAAgBgKIgFhWIAAgOQAAgnAOgRQANgPAlgOIAAAkQAAAPgJAEQgQAGgDAFQgKAOAAAoIAAAQQAPgNAIAAQAaAAATAXQARAVAAAcQABAqgOAjQgUAvgkAAQgQAAgHgIg");
	this.shape.setTransform(82.75,31.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#244AFC").s().p("AAlCdIgFgmQgEgZgHgPQgrARgaAAQgQAAgGgGQgGgGAAgQQAAgzA4hrQAfg/ARgDQAFAJAAALIgBAWIAAAWQAAArAFA9IAkgIQAEAIAAAuQAAAFgbAJQAAALAEAXQAEAWAAAMIgBARgAgUgVQgRAjgFARQAaAAAggKQgIg0AAgnQgKAOgSAjg");
	this.shape_1.setTransform(67.975,30.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#244AFC").s().p("AABB6IgiABQgNg2gBg9QgWgEAAgpQAAgeAWgdQAYgdAcAAQAgAAAMAXQAHAPAAAfQAAAdgOAbQgKAVgeAmQAAAGAhAEIAiAEIABA1QgogEgdAAgAgRg0QgLAKgHANQAJAJADAjIAcglQASgWAAgMQAAgIgPAAQgMAAgNAMg");
	this.shape_2.setTransform(42.325,34.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#244AFC").s().p("Ag1B+QgGgdABgUQAAgiANhCQAShXAYgOQAPABALAjIAOBDQAMA3AHA0IAEAaQgBAKgQAAQgPAAgFgQIgGglQglAPgFAGIgBAkgAgSASQASgGAAgEQABgLgEgWIgGAAQgGASgDAZg");
	this.shape_3.setTransform(28.05,33.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#244AFC").s().p("Ag7CSQgJgKAAgZQAAgaAOgLIAFgEIABADIAAABIAAAAIAAgEIgBAAIgBgYIgBgsIAAgUIgSADQgRABACgiQACghAognQAngkAZAAQAaAAAJASQAEAJgBAWQgCAggLAUIgMAUQAAABANAHQAlATAAAmQAAA1gcAkQgeAmgzAAQgZAAgKgLgAgRAuQAAA8AGAFQAiADASggQALgUABgPQAAgKgLgKQgLgJgLAAQgbAAgKAcgAAOhoQgOAHgMAMQgNAOAAAPIAFAcQAjgWAOguQABgDgEgDQgEgCgEgBgAgwBJIgBgDIABAAIAAAEIAAAAIAAgBgAgxBGIAAAAg");
	this.shape_4.setTransform(11.9142,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,58.1);


(lib.Bar_41Click = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#244AFC").s().p("Ag8CZIADgxQADgCATgBQATgBADgDQABgBAAgZQAAhhgHgUQgHAQgCANIgFAZIgFACQgJAAAAgWQADgXAOg2QAOgxAAgKQAEgEAJAAQAJAAADAEIAFDyQAJAAALgDIAbgHIAAAsQg7AZgzAAIgLAAg");
	this.shape.setTransform(82.625,31.4395);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#244AFC").s().p("AAlCdIgFgmQgEgZgHgPQgrARgaAAQgQAAgGgGQgGgGAAgQQAAgzA4hrQAfg/ARgDQAFAJAAALIgBAWIAAAWQAAArAFA9IAkgIQAEAIAAAuQAAAFgbAJQAAALAEAXQAEAWAAAMIgBARgAgUgVQgRAjgFARQAaAAAggKQgIg0AAgnQgKAOgSAjg");
	this.shape_1.setTransform(67.975,30.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#244AFC").s().p("AABB6IgiABQgNg2gBg9QgWgEAAgpQAAgeAWgdQAYgdAcAAQAgAAAMAXQAHAPAAAfQAAAdgOAbQgKAVgeAmQAAAGAhAEIAiAEIABA1QgogEgdAAgAgRg0QgLAKgHANQAJAJADAjIAcglQASgWAAgMQAAgIgPAAQgMAAgNAMg");
	this.shape_2.setTransform(42.325,34.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#244AFC").s().p("Ag1B+QgGgdABgUQAAgiANhCQAShXAYgOQAPABALAjIAOBDQAMA3AHA0IAEAaQgBAKgQAAQgPAAgFgQIgGglQglAPgFAGIgBAkgAgSASQASgGAAgEQABgLgEgWIgGAAQgGASgDAZg");
	this.shape_3.setTransform(28.05,33.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#244AFC").s().p("Ag7CSQgJgKAAgZQAAgaAOgLIAFgEIABADIAAABIAAAAIAAgEIgBAAIgBgYIgBgsIAAgUIgSADQgRABACgiQACghAognQAngkAZAAQAaAAAJASQAEAJgBAWQgCAggLAUIgMAUQAAABANAHQAlATAAAmQAAA1gcAkQgeAmgzAAQgZAAgKgLgAgRAuQAAA8AGAFQAiADASggQALgUABgPQAAgKgLgKQgLgJgLAAQgbAAgKAcgAAOhoQgOAHgMAMQgNAOAAAPIAFAcQAjgWAOguQABgDgEgDQgEgCgEgBgAgwBJIgBgDIABAAIAAAEIAAAAIAAgBgAgxBGIAAAAg");
	this.shape_4.setTransform(11.9142,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bar_41Click, new cjs.Rectangle(0,0,90.7,58.1), null);


(lib.Bar_41 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#244AFC").s().p("Ag8CZIADgxQADgCATgBQATgBADgDQABgBAAgZQAAhhgHgUQgHAQgCANIgFAZIgFACQgJAAAAgWQADgXAOg2QAOgxAAgKQAEgEAJAAQAJAAADAEIAFDyQAJAAALgDIAbgHIAAAsQg7AZgzAAIgLAAg");
	this.shape.setTransform(82.625,31.4395);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#244AFC").s().p("AAlCdIgFgmQgEgZgHgPQgrARgaAAQgQAAgGgGQgGgGAAgQQAAgzA4hrQAfg/ARgDQAFAJAAALIgBAWIAAAWQAAArAFA9IAkgIQAEAIAAAuQAAAFgbAJQAAALAEAXQAEAWAAAMIgBARgAgUgVQgRAjgFARQAaAAAggKQgIg0AAgnQgKAOgSAjg");
	this.shape_1.setTransform(67.975,30.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#244AFC").s().p("AABB6IgiABQgNg2gBg9QgWgEAAgpQAAgeAWgdQAYgdAcAAQAgAAAMAXQAHAPAAAfQAAAdgOAbQgKAVgeAmQAAAGAhAEIAiAEIABA1QgogEgdAAgAgRg0QgLAKgHANQAJAJADAjIAcglQASgWAAgMQAAgIgPAAQgMAAgNAMg");
	this.shape_2.setTransform(42.325,34.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#244AFC").s().p("Ag1B+QgGgdABgUQAAgiANhCQAShXAYgOQAPABALAjIAOBDQAMA3AHA0IAEAaQgBAKgQAAQgPAAgFgQIgGglQglAPgFAGIgBAkgAgSASQASgGAAgEQABgLgEgWIgGAAQgGASgDAZg");
	this.shape_3.setTransform(28.05,33.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#244AFC").s().p("Ag7CSQgJgKAAgZQAAgaAOgLIAFgEIABADIAAABIAAAAIAAgEIgBAAIgBgYIgBgsIAAgUIgSADQgRABACgiQACghAognQAngkAZAAQAaAAAJASQAEAJgBAWQgCAggLAUIgMAUQAAABANAHQAlATAAAmQAAA1gcAkQgeAmgzAAQgZAAgKgLgAgRAuQAAA8AGAFQAiADASggQALgUABgPQAAgKgLgKQgLgJgLAAQgbAAgKAcgAAOhoQgOAHgMAMQgNAOAAAPIAFAcQAjgWAOguQABgDgEgDQgEgCgEgBgAgwBJIgBgDIABAAIAAAEIAAAAIAAgBgAgxBGIAAAAg");
	this.shape_4.setTransform(11.9142,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.7,58.1);


(lib.Bar_37Click = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#244AFC").s().p("AACCVQgDgHABgNQACgeAUhXIAUhOIACgFIgCgEIgDgFIgbgBQgkAAg0ASIAAhGQAMgKAkgHQAdgFAXAAQA5gBgFAmQgLBYgpCxQAAAEgEACIgHAEg");
	this.shape.setTransform(81.17,30.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#244AFC").s().p("AglB2QAAgXAWgRQAKAHAAAKIAAAGQAPgEAQgaQAPgVAAgJQAAgHgMgDQgIgDgIABQgPAAgOAJIgXAUQgNAAAAgWIABgQIAAgPQA2hQAAgTQAAgGgFABQgaADgKApIgHAcQgFAEgEAAQgEAAgEgEQgCgKAAgLQAAgPAFgXQAQhGAtgBQAcABAAArQAAAbgIAXQgEANgQAcIARgBQAugBAABBQAAAfgVAoQgYAugbgBQgeAAAAgng");
	this.shape_1.setTransform(66.425,30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#244AFC").s().p("AABB6IgiABQgNg2gBg9QgWgEAAgpQAAgeAWgdQAYgdAcAAQAgAAAMAXQAHAPAAAfQAAAdgOAbQgKAVgeAmQAAAGAhAEIAiAEIABA1QgogEgdAAgAgRg0QgLAKgHANQAJAJADAjIAcglQASgWAAgMQAAgIgPAAQgMAAgNAMg");
	this.shape_2.setTransform(42.325,34.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#244AFC").s().p("Ag1B+QgGgdABgUQAAgiANhCQAShXAYgOQAPABALAjIAOBDQAMA3AHA0IAEAaQgBAKgQAAQgPAAgFgQIgGglQglAPgFAGIgBAkgAgSASQASgGAAgEQABgLgEgWIgGAAQgGASgDAZg");
	this.shape_3.setTransform(28.05,33.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#244AFC").s().p("Ag7CSQgJgKAAgZQAAgaAOgLIAFgEIABADIAAABIAAAAIAAgEIgBAAIgBgYIgBgsIAAgUIgSADQgRABACgiQACghAognQAngkAZAAQAaAAAJASQAEAJgBAWQgCAggLAUIgMAUQAAABANAHQAlATAAAmQAAA1gcAkQgeAmgzAAQgZAAgKgLgAgRAuQAAA8AGAFQAiADASggQALgUABgPQAAgKgLgKQgLgJgLAAQgbAAgKAcgAAOhoQgOAHgMAMQgNAOAAAPIAFAcQAjgWAOguQABgDgEgDQgEgCgEgBgAgwBJIgBgDIABAAIAAAEIAAAAIAAgBgAgxBGIAAAAg");
	this.shape_4.setTransform(11.9142,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bar_37Click, new cjs.Rectangle(0,0,91,58.1), null);


(lib.Bar_37 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#244AFC").s().p("AACCVQgDgHABgNQACgeAUhXIAUhOIACgFIgCgEIgDgFIgbgBQgkAAg0ASIAAhGQAMgKAkgHQAdgFAXAAQA5gBgFAmQgLBYgpCxQAAAEgEACIgHAEg");
	this.shape.setTransform(81.17,30.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#244AFC").s().p("AglB2QAAgXAWgRQAKAHAAAKIAAAGQAPgEAQgaQAPgVAAgJQAAgHgMgDQgIgDgIABQgPAAgOAJIgXAUQgNAAAAgWIABgQIAAgPQA2hQAAgTQAAgGgFABQgaADgKApIgHAcQgFAEgEAAQgEAAgEgEQgCgKAAgLQAAgPAFgXQAQhGAtgBQAcABAAArQAAAbgIAXQgEANgQAcIARgBQAugBAABBQAAAfgVAoQgYAugbgBQgeAAAAgng");
	this.shape_1.setTransform(66.425,30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#244AFC").s().p("AABB6IgiABQgNg2gBg9QgWgEAAgpQAAgeAWgdQAYgdAcAAQAgAAAMAXQAHAPAAAfQAAAdgOAbQgKAVgeAmQAAAGAhAEIAiAEIABA1QgogEgdAAgAgRg0QgLAKgHANQAJAJADAjIAcglQASgWAAgMQAAgIgPAAQgMAAgNAMg");
	this.shape_2.setTransform(42.325,34.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#244AFC").s().p("Ag1B+QgGgdABgUQAAgiANhCQAShXAYgOQAPABALAjIAOBDQAMA3AHA0IAEAaQgBAKgQAAQgPAAgFgQIgGglQglAPgFAGIgBAkgAgSASQASgGAAgEQABgLgEgWIgGAAQgGASgDAZg");
	this.shape_3.setTransform(28.05,33.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#244AFC").s().p("Ag7CSQgJgKAAgZQAAgaAOgLIAFgEIABADIAAABIAAAAIAAgEIgBAAIgBgYIgBgsIAAgUIgSADQgRABACgiQACghAognQAngkAZAAQAaAAAJASQAEAJgBAWQgCAggLAUIgMAUQAAABANAHQAlATAAAmQAAA1gcAkQgeAmgzAAQgZAAgKgLgAgRAuQAAA8AGAFQAiADASggQALgUABgPQAAgKgLgKQgLgJgLAAQgbAAgKAcgAAOhoQgOAHgMAMQgNAOAAAPIAFAcQAjgWAOguQABgDgEgDQgEgCgEgBgAgwBJIgBgDIABAAIAAAEIAAAAIAAgBgAgxBGIAAAAg");
	this.shape_4.setTransform(11.9142,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,58.1);


(lib.Bar_33Click = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#244AFC").s().p("AglB2QAAgXAWgRQAKAHAAAKIAAAGQAPgEAQgaQAPgVAAgJQAAgHgMgDQgIgDgIABQgPAAgOAJIgXAUQgNAAAAgWIABgQIAAgPQA2hQAAgTQAAgGgFABQgaADgKApIgHAcQgFAEgEAAQgEAAgEgEQgCgKAAgLQAAgPAFgXQAQhGAtgBQAcABAAArQAAAbgIAXQgEANgQAcIARgBQAugBAABBQAAAfgVAoQgYAugbgBQgeAAAAgng");
	this.shape.setTransform(80.475,30.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#244AFC").s().p("AglB2QAAgXAWgRQAKAHAAAKIAAAGQAPgEAQgaQAPgVAAgJQAAgHgMgDQgIgDgIABQgPAAgOAJIgXAUQgNAAAAgWIABgQIAAgPQA2hQAAgTQAAgGgFABQgaADgKApIgHAcQgFAEgEAAQgEAAgEgEQgCgKAAgLQAAgPAFgXQAQhGAtgBQAcABAAArQAAAbgIAXQgEANgQAcIARgBQAugBAABBQAAAfgVAoQgYAugbgBQgeAAAAgng");
	this.shape_1.setTransform(66.425,30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#244AFC").s().p("AABB6IgiABQgNg2gBg9QgWgEAAgpQAAgeAWgdQAYgdAcAAQAgAAAMAXQAHAPAAAfQAAAdgOAbQgKAVgeAmQAAAGAhAEIAiAEIABA1QgogEgdAAgAgRg0QgLAKgHANQAJAJADAjIAcglQASgWAAgMQAAgIgPAAQgMAAgNAMg");
	this.shape_2.setTransform(42.325,34.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#244AFC").s().p("Ag1B+QgGgdABgUQAAgiANhCQAShXAYgOQAPABALAjIAOBDQAMA3AHA0IAEAaQgBAKgQAAQgPAAgFgQIgGglQglAPgFAGIgBAkgAgSASQASgGAAgEQABgLgEgWIgGAAQgGASgDAZg");
	this.shape_3.setTransform(28.05,33.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#244AFC").s().p("Ag7CSQgJgKAAgZQAAgaAOgLIAFgEIABADIAAABIAAAAIAAgEIgBAAIgBgYIgBgsIAAgUIgSADQgRABACgiQACghAognQAngkAZAAQAaAAAJASQAEAJgBAWQgCAggLAUIgMAUQAAABANAHQAlATAAAmQAAA1gcAkQgeAmgzAAQgZAAgKgLgAgRAuQAAA8AGAFQAiADASggQALgUABgPQAAgKgLgKQgLgJgLAAQgbAAgKAcgAAOhoQgOAHgMAMQgNAOAAAPIAFAcQAjgWAOguQABgDgEgDQgEgCgEgBgAgwBJIgBgDIABAAIAAAEIAAAAIAAgBgAgxBGIAAAAg");
	this.shape_4.setTransform(11.9142,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bar_33Click, new cjs.Rectangle(0,0,89.7,58.1), null);


(lib.Bar_33 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#244AFC").s().p("AglB2QAAgXAWgRQAKAHAAAKIAAAGQAPgEAQgaQAPgVAAgJQAAgHgMgDQgIgDgIABQgPAAgOAJIgXAUQgNAAAAgWIABgQIAAgPQA2hQAAgTQAAgGgFABQgaADgKApIgHAcQgFAEgEAAQgEAAgEgEQgCgKAAgLQAAgPAFgXQAQhGAtgBQAcABAAArQAAAbgIAXQgEANgQAcIARgBQAugBAABBQAAAfgVAoQgYAugbgBQgeAAAAgng");
	this.shape.setTransform(80.475,30.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#244AFC").s().p("AglB2QAAgXAWgRQAKAHAAAKIAAAGQAPgEAQgaQAPgVAAgJQAAgHgMgDQgIgDgIABQgPAAgOAJIgXAUQgNAAAAgWIABgQIAAgPQA2hQAAgTQAAgGgFABQgaADgKApIgHAcQgFAEgEAAQgEAAgEgEQgCgKAAgLQAAgPAFgXQAQhGAtgBQAcABAAArQAAAbgIAXQgEANgQAcIARgBQAugBAABBQAAAfgVAoQgYAugbgBQgeAAAAgng");
	this.shape_1.setTransform(66.425,30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#244AFC").s().p("AABB6IgiABQgNg2gBg9QgWgEAAgpQAAgeAWgdQAYgdAcAAQAgAAAMAXQAHAPAAAfQAAAdgOAbQgKAVgeAmQAAAGAhAEIAiAEIABA1QgogEgdAAgAgRg0QgLAKgHANQAJAJADAjIAcglQASgWAAgMQAAgIgPAAQgMAAgNAMg");
	this.shape_2.setTransform(42.325,34.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#244AFC").s().p("Ag1B+QgGgdABgUQAAgiANhCQAShXAYgOQAPABALAjIAOBDQAMA3AHA0IAEAaQgBAKgQAAQgPAAgFgQIgGglQglAPgFAGIgBAkgAgSASQASgGAAgEQABgLgEgWIgGAAQgGASgDAZg");
	this.shape_3.setTransform(28.05,33.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#244AFC").s().p("Ag7CSQgJgKAAgZQAAgaAOgLIAFgEIABADIAAABIAAAAIAAgEIgBAAIgBgYIgBgsIAAgUIgSADQgRABACgiQACghAognQAngkAZAAQAaAAAJASQAEAJgBAWQgCAggLAUIgMAUQAAABANAHQAlATAAAmQAAA1gcAkQgeAmgzAAQgZAAgKgLgAgRAuQAAA8AGAFQAiADASggQALgUABgPQAAgKgLgKQgLgJgLAAQgbAAgKAcgAAOhoQgOAHgMAMQgNAOAAAPIAFAcQAjgWAOguQABgDgEgDQgEgCgEgBgAgwBJIgBgDIABAAIAAAEIAAAAIAAgBgAgxBGIAAAAg");
	this.shape_4.setTransform(11.9142,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.7,58.1);


(lib.Bar_29Click = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#244AFC").s().p("AgQCaQgIgMABgaQAAgTAEgFQAFgCAMAAQAOgRALgqQAKglAAgfQAAgSgLgQQgNgTgQAAQgKAAgIAHQgGAHABAKQAAAUAOALIAZAMQAOAHABAKQAAAGgGATQgIAXgIAAQg2AAgEhmIgBgQQAAhQAxAAQAjAAAQAlQANAbACAoIAAATQAAA2gKAuQgNBBgeAWQgFADgEAAQgGAAgGgDg");
	this.shape.setTransform(82.6,31.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#244AFC").s().p("Ag4B6IACgVQADgnARguQAbhEAEgQIAEgSQAAgIgKAAQghAAAAA8IAAAaQAAAIgHAFQgIAHgHgBIgHgBIgBgWIgCgYQAAgSADgNQAJgpANgVQATgeAiAAQASAAAFATQADALgBAZQgCApgLAnQgGAWgPAnQgQApgFAUIAKADQAOAAAZgTQAggXAMgFQABAIAHAPQAAAegmAbQgkAaggAAQgZgBAAglg");
	this.shape_1.setTransform(67.675,31.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#244AFC").s().p("AABB6IgiABQgNg2gBg9QgWgEAAgpQAAgeAWgdQAYgdAcAAQAgAAAMAXQAHAPAAAfQAAAdgOAbQgKAVgeAmQAAAGAhAEIAiAEIABA1QgogEgdAAgAgRg0QgLAKgHANQAJAJADAjIAcglQASgWAAgMQAAgIgPAAQgMAAgNAMg");
	this.shape_2.setTransform(42.325,34.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#244AFC").s().p("Ag1B+QgGgdABgUQAAgiANhCQAShXAYgOQAPABALAjIAOBDQAMA3AHA0IAEAaQgBAKgQAAQgPAAgFgQIgGglQglAPgFAGIgBAkgAgSASQASgGAAgEQABgLgEgWIgGAAQgGASgDAZg");
	this.shape_3.setTransform(28.05,33.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#244AFC").s().p("Ag7CSQgJgKAAgZQAAgaAOgLIAFgEIABADIAAABIAAAAIAAgEIgBAAIgBgYIgBgsIAAgUIgSADQgRABACgiQACghAognQAngkAZAAQAaAAAJASQAEAJgBAWQgCAggLAUIgMAUQAAABANAHQAlATAAAmQAAA1gcAkQgeAmgzAAQgZAAgKgLgAgRAuQAAA8AGAFQAiADASggQALgUABgPQAAgKgLgKQgLgJgLAAQgbAAgKAcgAAOhoQgOAHgMAMQgNAOAAAPIAFAcQAjgWAOguQABgDgEgDQgEgCgEgBgAgwBJIgBgDIABAAIAAAEIAAAAIAAgBgAgxBGIAAAAg");
	this.shape_4.setTransform(11.9142,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bar_29Click, new cjs.Rectangle(0,0,91,58.1), null);


(lib.Bar_29 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#244AFC").s().p("AgQCaQgIgMABgaQAAgTAEgFQAFgCAMAAQAOgRALgqQAKglAAgfQAAgSgLgQQgNgTgQAAQgKAAgIAHQgGAHABAKQAAAUAOALIAZAMQAOAHABAKQAAAGgGATQgIAXgIAAQg2AAgEhmIgBgQQAAhQAxAAQAjAAAQAlQANAbACAoIAAATQAAA2gKAuQgNBBgeAWQgFADgEAAQgGAAgGgDg");
	this.shape.setTransform(82.6,31.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#244AFC").s().p("Ag4B6IACgVQADgnARguQAbhEAEgQIAEgSQAAgIgKAAQghAAAAA8IAAAaQAAAIgHAFQgIAHgHgBIgHgBIgBgWIgCgYQAAgSADgNQAJgpANgVQATgeAiAAQASAAAFATQADALgBAZQgCApgLAnQgGAWgPAnQgQApgFAUIAKADQAOAAAZgTQAggXAMgFQABAIAHAPQAAAegmAbQgkAaggAAQgZgBAAglg");
	this.shape_1.setTransform(67.675,31.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#244AFC").s().p("AABB6IgiABQgNg2gBg9QgWgEAAgpQAAgeAWgdQAYgdAcAAQAgAAAMAXQAHAPAAAfQAAAdgOAbQgKAVgeAmQAAAGAhAEIAiAEIABA1QgogEgdAAgAgRg0QgLAKgHANQAJAJADAjIAcglQASgWAAgMQAAgIgPAAQgMAAgNAMg");
	this.shape_2.setTransform(42.325,34.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#244AFC").s().p("Ag1B+QgGgdABgUQAAgiANhCQAShXAYgOQAPABALAjIAOBDQAMA3AHA0IAEAaQgBAKgQAAQgPAAgFgQIgGglQglAPgFAGIgBAkgAgSASQASgGAAgEQABgLgEgWIgGAAQgGASgDAZg");
	this.shape_3.setTransform(28.05,33.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#244AFC").s().p("Ag7CSQgJgKAAgZQAAgaAOgLIAFgEIABADIAAABIAAAAIAAgEIgBAAIgBgYIgBgsIAAgUIgSADQgRABACgiQACghAognQAngkAZAAQAaAAAJASQAEAJgBAWQgCAggLAUIgMAUQAAABANAHQAlATAAAmQAAA1gcAkQgeAmgzAAQgZAAgKgLgAgRAuQAAA8AGAFQAiADASggQALgUABgPQAAgKgLgKQgLgJgLAAQgbAAgKAcgAAOhoQgOAHgMAMQgNAOAAAPIAFAcQAjgWAOguQABgDgEgDQgEgCgEgBgAgwBJIgBgDIABAAIAAAEIAAAAIAAgBgAgxBGIAAAAg");
	this.shape_4.setTransform(11.9142,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,58.1);


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


(lib.myBlueDotsBar_41 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(1291.85,60.6,1,1,0,0,0,17.1,17.1);
	this.instance.alpha = 0.75;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(858.85,60.1,1,1,0,0,0,17.1,17.1);
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

}).prototype = getMCSymbolPrototype(lib.myBlueDotsBar_41, new cjs.Rectangle(0,0,1308.9,77.6), null);


(lib.myBlueDotsBar_33 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(1292.35,17.1,1,1,0,0,0,17.1,17.1);
	this.instance.alpha = 0.75;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(863.35,17.75,1,1,0,0,0,17.1,17.1);
	this.instance_1.alpha = 0.75;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(414.4,17.6,1,1,0,0,0,17.1,17.1);
	this.instance_2.alpha = 0.75;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(17.1,18.1,1,1,0,0,0,17.1,17.1);
	this.instance_3.alpha = 0.75;
	this.instance_3.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.myBlueDotsBar_33, new cjs.Rectangle(0,0,1309.4,35.1), null);


(lib.myBlueDotsBar_25 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(17.1,17.1,1,1,0,0,0,17.1,17.1);
	this.instance.alpha = 0.75;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(1290.55,59.1,1,1,0,0,0,17.1,17.1);
	this.instance_1.alpha = 0.75;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(857.55,59.6,1,1,0,0,0,17.1,17.1);
	this.instance_2.alpha = 0.75;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(412.6,59.6,1,1,0,0,0,17.1,17.1);
	this.instance_3.alpha = 0.75;
	this.instance_3.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.myBlueDotsBar_25, new cjs.Rectangle(0,0,1307.6,76.6), null);


(lib.myBlueDotsBar_17 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(17.1,17.6,1,1,0,0,0,17.1,17.1);
	this.instance.alpha = 0.75;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(1290.55,59.6,1,1,0,0,0,17.1,17.1);
	this.instance_1.alpha = 0.75;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(857.55,60.1,1,1,0,0,0,17.1,17.1);
	this.instance_2.alpha = 0.75;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(412.6,17.1,1,1,0,0,0,17.1,17.1);
	this.instance_3.alpha = 0.75;
	this.instance_3.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.myBlueDotsBar_17, new cjs.Rectangle(0,0,1307.6,77.1), null);


(lib.myBlueDotsBar_9 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(17.1,17.1,1,1,0,0,0,17.1,17.1);
	this.instance.alpha = 0.75;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(1284.6,105.25,1,1,0,0,0,17.1,17.1);
	this.instance_1.alpha = 0.75;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(851.6,105.75,1,1,0,0,0,17.1,17.1);
	this.instance_2.alpha = 0.75;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(406.65,103.85,1,1,0,0,0,17.1,17.1);
	this.instance_3.alpha = 0.75;
	this.instance_3.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.myBlueDotsBar_9, new cjs.Rectangle(0,0,1301.6,122.8), null);


(lib.myBar_5ButtonClick = function(mode,startPosition,loop,reversed) {
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
	this.myBar_5ButtonClick = new lib.Bar_5();
	this.myBar_5ButtonClick.name = "myBar_5ButtonClick";
	this.myBar_5ButtonClick.setTransform(43.3,29.1,1,1,0,0,0,43.3,29.1);
	this.myBar_5ButtonClick.alpha = 0.5;
	new cjs.ButtonHelper(this.myBar_5ButtonClick, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.myBar_5ButtonClick).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.myBar_5ButtonClick, new cjs.Rectangle(0,0,86.6,58.1), null);


(lib.myBar_5Button = function(mode,startPosition,loop,reversed) {
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
	this.myBar_5Button = new lib.Bar_5();
	this.myBar_5Button.name = "myBar_5Button";
	this.myBar_5Button.setTransform(43.3,29.1,1,1,0,0,0,43.3,29.1);

	this.timeline.addTween(cjs.Tween.get(this.myBar_5Button).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.myBar_5Button, new cjs.Rectangle(0,0,86.6,58.1), null);


(lib.my4BlueDotsBar_45 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1.setTransform(858.85,60.6,1,1,0,0,0,17.1,17.1);
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

}).prototype = getMCSymbolPrototype(lib.my4BlueDotsBar_45, new cjs.Rectangle(0,0,1308.9,77.6), null);


(lib.my4BlueDotsBar_11 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(17.1,17.1,1,1,0,0,0,17.1,17.1);
	this.instance.alpha = 0.75;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(1290.55,102.6,1,1,0,0,0,17.1,17.1);
	this.instance_1.alpha = 0.75;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(857.55,103.1,1,1,0,0,0,17.1,17.1);
	this.instance_2.alpha = 0.75;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(412.6,60.1,1,1,0,0,0,17.1,17.1);
	this.instance_3.alpha = 0.75;
	this.instance_3.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.my4BlueDotsBar_11, new cjs.Rectangle(0,0,1307.6,120.1), null);


(lib.my4BlueDotsBar_1Harm3 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(17.1,17.1,1,1,0,0,0,17.1,17.1);
	this.instance.alpha = 0.75;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(1290.55,102.6,1,1,0,0,0,17.1,17.1);
	this.instance_1.alpha = 0.75;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(857.55,103.1,1,1,0,0,0,17.1,17.1);
	this.instance_2.alpha = 0.75;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(412.6,60.1,1,1,0,0,0,17.1,17.1);
	this.instance_3.alpha = 0.75;
	this.instance_3.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.my4BlueDotsBar_1Harm3, new cjs.Rectangle(0,0,1307.6,120.1), null);


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


// stage content:
(lib.Harm_chord_3_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Am7_1F3:0,Dm7_F1:59,Dm7_F3:60,"Dm7_F1":119,G71_F3:120,"Dm7_F1":179,G72_F3:180,G7_F2:239,"Am7_1F3":240,"Dm7_F1":299,"Dm7_F3":300,"Dm7_F1":359,"G71_F3":360,"Dm7_F1":419,"G72_F3":420,"G7_F2":479,Am71_F3:480,"Dm7_F1":539,FMaj7_F3:540,"Dm7_F1":599,"G71_F3":600,"Dm7_F1":659,"G72_F3":660,"G7_F2":719,"Am71_F3":720,"Dm7_F1":779,"FMaj7_F3":780,"Dm7_F1":839,"G71_F3":840,"Dm7_F1":899,"G72_F3":900,"G7_F2":959,Em7_1F3:960,"Dm7_F1":1019,"Dm7_F3":1020,"Dm7_F1":1079,"G71_F3":1080,"Dm7_F1":1139,"G72_F3":1140,"G7_F2":1199,"Em7_1F3":1200,"Dm7_F1":1259,"Dm7_F3":1260,"Dm7_F1":1319,"G71_F3":1320,"Dm7_F1":1379,"G72_F3":1380,"G7_F2":1439,"Em7_1F3":1440,"Dm7_F1":1499,"FMaj7_F3":1500,"Dm7_F1":1559,"G71_F3":1560,"Dm7_F1":1619,"G72_F3":1620,"G7_F2":1679,"Em7_1F3":1680,"Dm7_F1":1739,"FMaj7_F3":1740,"Dm7_F1":1799,"G71_F3":1800,"Dm7_F1":1859,"G72_F3":1860,"G7_F2":1919,CMaj7_1F3:1920,"Dm7_F1":1979,"FMaj7_F3":1980,"Dm7_F1":2039,"G71_F3":2040,"Dm7_F1":2099,"G72_F3":2100,"G7_F2":2159,"CMaj7_1F3":2160,"Dm7_F1":2219,"FMaj7_F3":2220,"Dm7_F1":2279,"G71_F3":2280,"Dm7_F1":2339,"G72_F3":2340,"G7_F2":2399,"CMaj7_1F3":2400,"Dm7_F1":2459,"Dm7_F3":2460,"Dm7_F1":2519,"G71_F3":2520,"Dm7_F1":2579,"G72_F3":2580,"G7_F2":2639,"CMaj7_1F3":2640,"Dm7_F1":2699,"Dm7_F3":2700,"Dm7_F1":2759,"G71_F3":2760,"Dm7_F1":2819,"G72_F3":2820,"G7_F2":2879,my4BlueDotsBar_1:0,my4BlueDotsBar_5:240,my4BlueDotsBar_9:480,my4BlueDotsBar_13:720,my4BlueDotsBar_17:960,my4BlueDotsBar_21:1200,my4BlueDotsBar_25:1440,my4BlueDotsBar_29:1680,my4BlueDotsBar_33:1920,my4BlueDotsBar_37:2160,my4BlueDotsBar_41:2400,my4BlueDotsBar_45:2640,myBar_1Button:0,myBar_5Button:240,myBar_9Button:480,myBar_13Button:720,myBar_17Button:960,myBar_21Button:1200,myBar_25Button:1440,myBar_29Button:1680,myBar_33Button:1920,myBar_37Button:2160,myBar_41Button:2400,myBar_45Button:2640,myBar_1ButtonClick:0,myBar_21ButtonClick:240,myBar_9ButtonClick:480,"myBar_21ButtonClick":720,"myBar_21ButtonClick":960,"myBar_21ButtonClick":1200,myBar_25ButtonClick:1440,myBar_29ButtonClick:1680,"myBar_21ButtonClick":1920,myBar_37ButtonClick:2160,myBar_41ButtonClick:2400,myBar_45ButtonClick:2640,Full_screen_icon:0,Full_screen_iconClick:0,Harm_chord_3:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,2880];
	this.streamSoundSymbolsList[0] = [{id:"Harmonic_rythm_3",startFrame:0,endFrame:2893,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("Harmonic_rythm_3",0);
		this.InsertIntoSoundStreamData(soundInstance,0,2893,1);
		this.stop();
		
		
		this.myPlayButton.visible = true;
		
		
		this.myPlayButton.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.play();
		}
		
		this.myPauseButton.addEventListener("click", fl_ClickToGoToAndStopAtFrame_1.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_1()
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
		
		//Forward btn Timeline goToFrame check current Frame
			
		this.myForwardButton.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4() {
		    
			if (this.currentFrame >= 0 && this.currentFrame <= 239) {
		
		        this.gotoAndStop("myBar_5Button");
				this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_1);
		
		
		    } else if (this.currentFrame >= 240 && this.currentFrame <= 479) {
		
		        this.gotoAndStop("myBar_9Button");
				this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_2);
		
		
		    } else if (this.currentFrame >= 480 && this.currentFrame <= 719) {
		
		        this.gotoAndStop("myBar_13Button");
				this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_3);
		
		
		    } else if (this.currentFrame >= 720 && this.currentFrame <= 959) {
		
		        this.gotoAndStop("myBar_17Button");
				this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_4);
		
		
		    } else if (this.currentFrame >= 960 && this.currentFrame <= 1199) {
		
		        this.gotoAndStop("myBar_21Button");
				this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_5);
		
		
		    } else if (this.currentFrame >= 1200 && this.currentFrame <= 1439) {
		
		        this.gotoAndStop("myBar_25Button");
				this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_6);
		
		
		    } else if (this.currentFrame >= 1440 && this.currentFrame <= 1679) {
		
		        this.gotoAndStop("myBar_29Button");
				this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_7);
		
			
			} else if (this.currentFrame >= 1680 && this.currentFrame <= 1919) {
		
		        this.gotoAndStop("myBar_33Button");
				this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_8);
		
		
		    } else if (this.currentFrame >= 1920 && this.currentFrame <= 2159) {
		
		        this.gotoAndStop("myBar_37Button");
				this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_9);
		
		
		    } else if (this.currentFrame >= 2160 && this.currentFrame <= 2399) {
		
		        this.gotoAndStop("myBar_41Button");
				this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_10);
		
		
		    } else if (this.currentFrame >= 2400 && this.currentFrame <= 2639) {
		
		        this.gotoAndStop("myBar_45Button");
				this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_11);
		
		
		    } else if (this.currentFrame >= 2640 && this.currentFrame <= 2879) {
		
		        this.gotoAndStop("myBar_1Button");
				this.myForwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_12);
		
		
		    }
		}
		
		
		////////////////////////////////////////////////////////////////////////
		
		
		//Backward btn Timeline goToFrame check current Frame
		
		
		this.myBackwardButton.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5() {
		    
			if (this.currentFrame >= 0 && this.currentFrame <= 239) {
		
		        this.gotoAndStop("myBar_45Button");
				this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_13);
		
		
		    } else if (this.currentFrame >= 240 && this.currentFrame <= 479) {
		
		        this.gotoAndStop("myBar_1Button");
						this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_14);
		
		
		    } else if (this.currentFrame >= 480 && this.currentFrame <= 719) {
		
		        this.gotoAndStop("myBar_5Button");
						this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_15);
		
		
		    } else if (this.currentFrame >= 720 && this.currentFrame <= 959) {
		
		        this.gotoAndStop("myBar_9Button");
						this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_16);
		
		
		    } else if (this.currentFrame >= 960 && this.currentFrame <= 1199) {
		
		        this.gotoAndStop("myBar_13Button");
								this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_17);
		
		
		    } else if (this.currentFrame >= 1200 && this.currentFrame <= 1439) {
		
		        this.gotoAndStop("myBar_17Button");
								this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_18);
		
		
		    } else if (this.currentFrame >= 1440 && this.currentFrame <= 1679) {
		
		        this.gotoAndStop("myBar_21Button");
								this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_19);
		
			
			} else if (this.currentFrame >= 1680 && this.currentFrame <= 1919) {
		
		        this.gotoAndStop("myBar_25Button");
								this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_20);
		
		
		    } else if (this.currentFrame >= 1920 && this.currentFrame <= 2159) {
		
		        this.gotoAndStop("myBar_29Button");
								this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_21);
		
		
		    } else if (this.currentFrame >= 2160 && this.currentFrame <= 2399) {
		
		        this.gotoAndStop("myBar_33Button");
								this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_22);
		
		
		    } else if (this.currentFrame >= 2400 && this.currentFrame <= 2639) {
		
		        this.gotoAndStop("myBar_37Button");
								this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_23);
		
		
		    } else if (this.currentFrame >= 2640 && this.currentFrame <= 2879) {
		
		        this.gotoAndStop("myBar_41Button");
								this.myBackwardButton.removeAllEventListener("click", fl_ClickToGoToAndStopAtFrame_24);
		
		
		    } 
		}
		
			
		
		
		//////////////////////////////////////////////////////////////////////
		
		
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
		
			
			this.my4BlueDotsBar_29.visible = false;
		
			this.myBar_29Button.addEventListener("click", fl_ClickToShow_13.bind(this));
			function fl_ClickToShow_13()
		{
			this.my4BlueDotsBar_29.visible = true;
			this.myBar_29Button.visible = false;
		}
		
			this.myBar_29ButtonClick.addEventListener("click", fl_ClickToHide_21.bind(this));
			function fl_ClickToHide_21()
		{
			this.my4BlueDotsBar_29.visible = false;
			this.myBar_29Button.visible = true;
		}
		
			this.myPlayButton.addEventListener("click", fl_ClickToHide_22.bind(this));
			function fl_ClickToHide_22()
		{
			this.my4BlueDotsBar_29.visible = false;
			this.myBar_29Button.visible = true;
		}
		
		
		//////////////////////////////////////////////////////////////////
		
			
			this.my4BlueDotsBar_33.visible = false;
		
			this.myBar_33Button.addEventListener("click", fl_ClickToShow_14.bind(this));
			function fl_ClickToShow_14()
		{
			this.my4BlueDotsBar_33.visible = true;
			this.myBar_33Button.visible = false;
		}
		
			this.myBar_33ButtonClick.addEventListener("click", fl_ClickToHide_23.bind(this));
			function fl_ClickToHide_23()
		{
			this.my4BlueDotsBar_33.visible = false;
			this.myBar_33Button.visible = true;
		}
		
			this.myPlayButton.addEventListener("click", fl_ClickToHide_24.bind(this));
			function fl_ClickToHide_24()
		{
			this.my4BlueDotsBar_33.visible = false;
			this.myBar_33Button.visible = true;
		}
		
		
		//////////////////////////////////////////////////////////////////
		
			
			this.my4BlueDotsBar_37.visible = false;
		
			this.myBar_37Button.addEventListener("click", fl_ClickToShow_15.bind(this));
			function fl_ClickToShow_15()
		{
			this.my4BlueDotsBar_37.visible = true;
			this.myBar_37Button.visible = false;
		}
		
			this.myBar_37ButtonClick.addEventListener("click", fl_ClickToHide_25.bind(this));
			function fl_ClickToHide_25()
		{
			this.my4BlueDotsBar_37.visible = false;
			this.myBar_37Button.visible = true;
		}
		
			this.myPlayButton.addEventListener("click", fl_ClickToHide_26.bind(this));
			function fl_ClickToHide_26()
		{
			this.my4BlueDotsBar_37.visible = false;
			this.myBar_37Button.visible = true;
		}
		
		
		//////////////////////////////////////////////////////////////////
		
			
			this.my4BlueDotsBar_41.visible = false;
		
			this.myBar_41Button.addEventListener("click", fl_ClickToShow_16.bind(this));
			function fl_ClickToShow_16()
		{
			this.my4BlueDotsBar_41.visible = true;
			this.myBar_41Button.visible = false;
		}
		
			this.myBar_41ButtonClick.addEventListener("click", fl_ClickToHide_27.bind(this));
			function fl_ClickToHide_27()
		{
			this.my4BlueDotsBar_41.visible = false;
			this.myBar_41Button.visible = true;
		}
		
			this.myPlayButton.addEventListener("click", fl_ClickToHide_28.bind(this));
			function fl_ClickToHide_28()
		{
			this.my4BlueDotsBar_41.visible = false;
			this.myBar_41Button.visible = true;
		}
		
		
		//////////////////////////////////////////////////////////////////
		
			
			this.my4BlueDotsBar_45.visible = false;
		
			this.myBar_45Button.addEventListener("click", fl_ClickToShow_17.bind(this));
			function fl_ClickToShow_17()
		{
			this.my4BlueDotsBar_45.visible = true;
			this.myBar_45Button.visible = false;
		}
		
			this.myBar_45ButtonClick.addEventListener("click", fl_ClickToHide_29.bind(this));
			function fl_ClickToHide_29()
		{
			this.my4BlueDotsBar_45.visible = false;
			this.myBar_45Button.visible = true;
		}
		
			this.myPlayButton.addEventListener("click", fl_ClickToHide_30.bind(this));
			function fl_ClickToHide_30()
		{
			this.my4BlueDotsBar_45.visible = false;
			this.myBar_45Button.visible = true;
		}
		//////////////////////////////////////////////////////////////////
		
			this.Full_screen_iconClick.visible = false;
		
			this.Full_screen_icon.addEventListener("click", fl_ClickToHide_31.bind(this));
		
			function fl_ClickToHide_31()
		{
			this.Full_screen_icon.visible = false;
			this.Full_screen_iconClick.visible = true;
		}
		
			this.Full_screen_iconClick.addEventListener("click", fl_ClickToShow_20.bind(this));
		
			function fl_ClickToShow_20()
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
	this.frame_2880 = function() {
		this.gotoAndStop("myBar_1Button");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2880).call(this.frame_2880).wait(13));

	// Full_song
	this.myAm7_1F3 = new lib.Red_Dot();
	this.myAm7_1F3.name = "myAm7_1F3";
	this.myAm7_1F3.setTransform(192.5,84.2,1,1,0,0,0,21.9,23.7);
	this.myAm7_1F3.alpha = 0;

	this.myDm7_F3 = new lib.Red_Dot();
	this.myDm7_F3.name = "myDm7_F3";
	this.myDm7_F3.setTransform(586.5,124.7,1,1,0,0,0,21.9,23.7);
	this.myDm7_F3.alpha = 0;
	this.myDm7_F3.compositeOperation = "multiply";
	this.myDm7_F3._off = true;

	this.myG71_F3 = new lib.Red_Dot();
	this.myG71_F3.name = "myG71_F3";
	this.myG71_F3.setTransform(1032.55,168.2,1,1,0,0,0,21.9,23.7);
	this.myG71_F3.alpha = 0;
	this.myG71_F3.compositeOperation = "multiply";
	this.myG71_F3._off = true;

	this.myG72_F3 = new lib.Red_Dot();
	this.myG72_F3.name = "myG72_F3";
	this.myG72_F3.setTransform(1464.5,168.7,1,1,0,0,0,21.9,23.7);
	this.myG72_F3.alpha = 0;
	this.myG72_F3.compositeOperation = "multiply";
	this.myG72_F3._off = true;

	this.Am71_F3 = new lib.Red_Dot();
	this.Am71_F3.name = "Am71_F3";
	this.Am71_F3.setTransform(192.5,84.2,1,1,0,0,0,21.9,23.7);
	this.Am71_F3.alpha = 0;
	this.Am71_F3._off = true;

	this.myFMaj7_F3 = new lib.Red_Dot();
	this.myFMaj7_F3.name = "myFMaj7_F3";
	this.myFMaj7_F3.setTransform(586.5,168.7,1,1,0,0,0,21.9,23.7);
	this.myFMaj7_F3.alpha = 0;
	this.myFMaj7_F3.compositeOperation = "multiply";
	this.myFMaj7_F3._off = true;

	this.myEm7_1F3 = new lib.Red_Dot();
	this.myEm7_1F3.name = "myEm7_1F3";
	this.myEm7_1F3.setTransform(191.5,124.7,1,1,0,0,0,21.9,23.7);
	this.myEm7_1F3.alpha = 0;
	this.myEm7_1F3._off = true;

	this.myCMaj7_1F3 = new lib.Red_Dot();
	this.myCMaj7_1F3.name = "myCMaj7_1F3";
	this.myCMaj7_1F3.setTransform(191.5,168.2,1,1,0,0,0,21.9,23.7);
	this.myCMaj7_1F3.alpha = 0;
	this.myCMaj7_1F3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myAm7_1F3).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:192.7,y:83.65,alpha:1},9).wait(18).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:192.2,y:84.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:192.5,y:84.2,alpha:0},32).to({_off:true},1).wait(180).to({_off:false},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:192.7,y:83.65,alpha:1},9).wait(18).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:192.2,y:84.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:192.5,y:84.2,alpha:0},32).to({_off:true},1).wait(2593));
	this.timeline.addTween(cjs.Tween.get(this.myDm7_F3).wait(60).to({_off:false},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:587.2,y:125.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:586.7,y:125.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:586.5,y:124.7,alpha:0},33).to({_off:true},1).wait(180).to({_off:false},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:587.2,y:125.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:586.7,y:125.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:586.5,y:124.7,alpha:0},33).to({_off:true},1).wait(660).to({_off:false},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:587.2,y:125.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:586.7,y:125.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:586.5,y:124.7,alpha:0},33).to({_off:true},1).wait(180).to({_off:false},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:587.2,y:125.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:586.7,y:125.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:586.5,y:124.7,alpha:0},33).to({_off:true},1).wait(1140).to({_off:false},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:587.2,y:125.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:586.7,y:125.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:586.5,y:124.7,alpha:0},33).to({_off:true},1).wait(180).to({_off:false},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:587.2,y:125.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:586.7,y:125.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:586.5,y:124.7,alpha:0},33).to({_off:true},1).wait(133));
	this.timeline.addTween(cjs.Tween.get(this.myG71_F3).wait(120).to({_off:false},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1032.85,y:168.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:1032.7,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1033,y:168.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,x:1032.55},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1032.85,y:168.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:1032.7,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1033,y:168.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,x:1032.55},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1032.85,y:168.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:1032.7,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1033,y:168.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,x:1032.55},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1032.85,y:168.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:1032.7,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1033,y:168.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,x:1032.55},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1032.85,y:168.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:1032.7,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1033,y:168.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,x:1032.55},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1032.85,y:168.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:1032.7,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1033,y:168.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,x:1032.55},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1032.85,y:168.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:1032.7,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1033,y:168.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,x:1032.55},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1032.85,y:168.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:1032.7,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1033,y:168.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,x:1032.55},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1032.85,y:168.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:1032.7,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1033,y:168.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,x:1032.55},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1032.85,y:168.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:1032.7,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1033,y:168.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,x:1032.55},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1032.85,y:168.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:1032.7,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1033,y:168.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,x:1032.55},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1032.85,y:168.65,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:1032.7,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1033,y:168.2,alpha:0},33).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.myG72_F3).wait(180).to({_off:false},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1464.2,y:169.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1464.5,y:169.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,y:168.7},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1464.2,y:169.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1464.5,y:169.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,y:168.7},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1464.2,y:169.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1464.5,y:169.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,y:168.7},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1464.2,y:169.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1464.5,y:169.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,y:168.7},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1464.2,y:169.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1464.5,y:169.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,y:168.7},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1464.2,y:169.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1464.5,y:169.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,y:168.7},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1464.2,y:169.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1464.5,y:169.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,y:168.7},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1464.2,y:169.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1464.5,y:169.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,y:168.7},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1464.2,y:169.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1464.5,y:169.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,y:168.7},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1464.2,y:169.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1464.5,y:169.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,y:168.7},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1464.2,y:169.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1464.5,y:169.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,y:168.7},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:1464.2,y:169.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:168.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:1464.5,y:169.2,alpha:0},33).wait(1).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.Am71_F3).wait(480).to({_off:false},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:192.7,y:83.65,alpha:1},9).wait(18).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:192.2,y:84.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:192.5,y:84.2,alpha:0},32).to({_off:true},1).wait(180).to({_off:false},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:192.7,y:83.65,alpha:1},9).wait(18).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:192.2,y:84.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:192.5,y:84.2,alpha:0},32).to({_off:true},1).wait(2113));
	this.timeline.addTween(cjs.Tween.get(this.myFMaj7_F3).wait(540).to({_off:false},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:587.2,y:168.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:586.7,y:168.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:586.5,y:168.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,y:168.7},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:587.2,y:168.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:586.7,y:168.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:586.5,y:168.2,alpha:0},33).to({_off:true},1).wait(660).to({_off:false,y:168.7},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:587.2,y:168.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:586.7,y:168.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:586.5,y:168.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,y:168.7},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:587.2,y:168.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:586.7,y:168.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:586.5,y:168.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,y:168.7},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:587.2,y:168.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:586.7,y:168.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:586.5,y:168.2,alpha:0},33).to({_off:true},1).wait(180).to({_off:false,y:168.7},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:587.2,y:168.15,alpha:1},9).wait(17).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:586.7,y:168.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:586.5,y:168.2,alpha:0},33).to({_off:true},1).wait(613));
	this.timeline.addTween(cjs.Tween.get(this.myEm7_1F3).wait(960).to({_off:false},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:192.2,y:124.65,alpha:1},9).wait(18).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:125.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:192,y:124.7,alpha:0},32).to({_off:true},1).wait(180).to({_off:false,x:191.5},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:192.2,y:124.65,alpha:1},9).wait(18).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:125.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:192,y:124.7,alpha:0},32).to({_off:true},1).wait(180).to({_off:false,x:191.5},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:192.2,y:124.65,alpha:1},9).wait(18).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:125.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:192,y:124.7,alpha:0},32).to({_off:true},1).wait(180).to({_off:false,x:191.5},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:192.2,y:124.65,alpha:1},9).wait(18).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,y:125.8},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:192,y:124.7,alpha:0},32).to({_off:true},1).wait(1153));
	this.timeline.addTween(cjs.Tween.get(this.myCMaj7_1F3).wait(1920).to({_off:false},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:192.2,y:168.65,alpha:1},9).wait(18).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:191.7,y:168.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:191.5,y:168.2,alpha:0},32).to({_off:true},1).wait(180).to({_off:false},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:192.2,y:168.65,alpha:1},9).wait(18).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:191.7,y:168.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:191.5,y:168.2,alpha:0},32).to({_off:true},1).wait(180).to({_off:false},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:192.2,y:168.65,alpha:1},9).wait(18).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:191.7,y:168.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:191.5,y:168.2,alpha:0},32).to({_off:true},1).wait(180).to({_off:false},0).to({regX:22.5,regY:24.5,scaleX:1.8518,scaleY:1.8517,x:192.2,y:168.65,alpha:1},9).wait(18).to({regX:22.6,regY:24.6,scaleX:1.8517,scaleY:1.8516,x:191.7,y:168.3},0).to({regX:21.9,regY:23.7,scaleX:1,scaleY:1,x:191.5,y:168.2,alpha:0},32).to({_off:true},1).wait(193));

	// Bar_Dot
	this.my4BlueDotsBar_1 = new lib.my4BlueDotsBar_11();
	this.my4BlueDotsBar_1.name = "my4BlueDotsBar_1";
	this.my4BlueDotsBar_1.setTransform(828.55,132.75,1,1,0,0,0,653.8,60.1);

	this.my4BlueDotsBar_5 = new lib.my4BlueDotsBar_1Harm3();
	this.my4BlueDotsBar_5.name = "my4BlueDotsBar_5";
	this.my4BlueDotsBar_5.setTransform(826.85,132.25,1,1,0,0,0,654.4,60.1);

	this.my4BlueDotsBar_9 = new lib.myBlueDotsBar_9();
	this.my4BlueDotsBar_9.name = "my4BlueDotsBar_9";
	this.my4BlueDotsBar_9.setTransform(824.55,133.05,1,1,0,0,0,650.8,61.4);

	this.my4BlueDotsBar_13 = new lib.myBlueDotsBar_9();
	this.my4BlueDotsBar_13.name = "my4BlueDotsBar_13";
	this.my4BlueDotsBar_13.setTransform(826.85,131.25,1,1,0,0,0,654.4,60.1);

	this.my4BlueDotsBar_17 = new lib.myBlueDotsBar_17();
	this.my4BlueDotsBar_17.name = "my4BlueDotsBar_17";
	this.my4BlueDotsBar_17.setTransform(825.25,153.55,1,1,0,0,0,653.8,38.6);

	this.my4BlueDotsBar_21 = new lib.myBlueDotsBar_17();
	this.my4BlueDotsBar_21.name = "my4BlueDotsBar_21";
	this.my4BlueDotsBar_21.setTransform(825.85,153.75,1,1,0,0,0,654.4,38.6);

	this.my4BlueDotsBar_25 = new lib.myBlueDotsBar_25();
	this.my4BlueDotsBar_25.name = "my4BlueDotsBar_25";
	this.my4BlueDotsBar_25.setTransform(825.75,154.3,1,1,0,0,0,653.8,38.3);

	this.my4BlueDotsBar_29 = new lib.myBlueDotsBar_25();
	this.my4BlueDotsBar_29.name = "my4BlueDotsBar_29";
	this.my4BlueDotsBar_29.setTransform(827.35,133.4,1,1,0,0,0,654.4,17.4);

	this.my4BlueDotsBar_33 = new lib.myBlueDotsBar_33();
	this.my4BlueDotsBar_33.name = "my4BlueDotsBar_33";
	this.my4BlueDotsBar_33.setTransform(825.55,175.25,1,1,0,0,0,654.6,17.6);

	this.my4BlueDotsBar_37 = new lib.myBlueDotsBar_33();
	this.my4BlueDotsBar_37.name = "my4BlueDotsBar_37";
	this.my4BlueDotsBar_37.setTransform(829.05,217.25,1,1,0,0,0,654.6,60.1);

	this.my4BlueDotsBar_41 = new lib.myBlueDotsBar_41();
	this.my4BlueDotsBar_41.name = "my4BlueDotsBar_41";
	this.my4BlueDotsBar_41.setTransform(825.85,153.95,1,1,0,0,0,654.4,38.8);

	this.my4BlueDotsBar_45 = new lib.my4BlueDotsBar_45();
	this.my4BlueDotsBar_45.name = "my4BlueDotsBar_45";
	this.my4BlueDotsBar_45.setTransform(827.35,153.95,1,1,0,0,0,654.4,38.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.my4BlueDotsBar_1}]}).to({state:[{t:this.my4BlueDotsBar_5}]},240).to({state:[{t:this.my4BlueDotsBar_9}]},240).to({state:[{t:this.my4BlueDotsBar_13}]},240).to({state:[{t:this.my4BlueDotsBar_17}]},240).to({state:[{t:this.my4BlueDotsBar_21}]},240).to({state:[{t:this.my4BlueDotsBar_25}]},240).to({state:[{t:this.my4BlueDotsBar_29}]},240).to({state:[{t:this.my4BlueDotsBar_33}]},240).to({state:[{t:this.my4BlueDotsBar_37}]},240).to({state:[{t:this.my4BlueDotsBar_41}]},240).to({state:[{t:this.my4BlueDotsBar_45}]},240).to({state:[]},240).wait(13));

	// Bars
	this.myBar_1Button = new lib.myBar_1Button();
	this.myBar_1Button.name = "myBar_1Button";
	this.myBar_1Button.setTransform(43.65,133.05,1,1,0,0,0,43.3,29.1);
	new cjs.ButtonHelper(this.myBar_1Button, 0, 1, 1);

	this.myBar_5Button = new lib.myBar_5Button();
	this.myBar_5Button.name = "myBar_5Button";
	this.myBar_5Button.setTransform(43.65,133.05,1,1,0,0,0,43.3,29.1);
	new cjs.ButtonHelper(this.myBar_5Button, 0, 1, 1);

	this.myBar_9Button = new lib.Bar_9();
	this.myBar_9Button.name = "myBar_9Button";
	this.myBar_9Button.setTransform(43.65,132.55,1,1,0,0,0,43.3,29.1);
	new cjs.ButtonHelper(this.myBar_9Button, 0, 1, 1);

	this.myBar_13Button = new lib.Bar_13();
	this.myBar_13Button.name = "myBar_13Button";
	this.myBar_13Button.setTransform(56.55,133.05,1,1,0,0,0,56.2,29.1);
	new cjs.ButtonHelper(this.myBar_13Button, 0, 1, 1);

	this.myBar_17Button = new lib.Bar_17();
	this.myBar_17Button.name = "myBar_17Button";
	this.myBar_17Button.setTransform(50.55,132.55,1,1,0,0,0,50.2,29.1);

	this.myBar_21Button = new lib.Bar_21();
	this.myBar_21Button.name = "myBar_21Button";
	this.myBar_21Button.setTransform(52.35,132.55,1,1,0,0,0,52,29.1);
	new cjs.ButtonHelper(this.myBar_21Button, 0, 1, 1);

	this.myBar_25Button = new lib.Bar_25();
	this.myBar_25Button.name = "myBar_25Button";
	this.myBar_25Button.setTransform(53.85,133.05,1,1,0,0,0,53.5,29.1);
	new cjs.ButtonHelper(this.myBar_25Button, 0, 1, 1);

	this.myBar_29Button = new lib.Bar_29();
	this.myBar_29Button.name = "myBar_29Button";
	this.myBar_29Button.setTransform(45.5,133.25,1,1,0,0,0,45.5,29.1);
	new cjs.ButtonHelper(this.myBar_29Button, 0, 1, 1);

	this.myBar_33Button = new lib.Bar_33();
	this.myBar_33Button.name = "myBar_33Button";
	this.myBar_33Button.setTransform(44.9,132.25,1,1,0,0,0,44.9,29.1);
	new cjs.ButtonHelper(this.myBar_33Button, 0, 1, 1);

	this.myBar_37Button = new lib.Bar_37();
	this.myBar_37Button.name = "myBar_37Button";
	this.myBar_37Button.setTransform(45.5,132.25,1,1,0,0,0,45.5,29.1);
	new cjs.ButtonHelper(this.myBar_37Button, 0, 1, 1);

	this.myBar_41Button = new lib.Bar_41();
	this.myBar_41Button.name = "myBar_41Button";
	this.myBar_41Button.setTransform(45.4,132.25,1,1,0,0,0,45.4,29.1);
	new cjs.ButtonHelper(this.myBar_41Button, 0, 1, 1);

	this.myBar_45Button = new lib.Bar_45();
	this.myBar_45Button.name = "myBar_45Button";
	this.myBar_45Button.setTransform(45.5,132.25,1,1,0,0,0,45.5,29.1);
	new cjs.ButtonHelper(this.myBar_45Button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.myBar_1Button}]}).to({state:[{t:this.myBar_5Button}]},240).to({state:[{t:this.myBar_9Button}]},240).to({state:[{t:this.myBar_13Button}]},240).to({state:[{t:this.myBar_17Button}]},240).to({state:[{t:this.myBar_21Button}]},240).to({state:[{t:this.myBar_25Button}]},240).to({state:[{t:this.myBar_29Button}]},240).to({state:[{t:this.myBar_33Button}]},240).to({state:[{t:this.myBar_37Button}]},240).to({state:[{t:this.myBar_41Button}]},240).to({state:[{t:this.myBar_45Button}]},240).to({state:[]},240).wait(13));

	// Bars_Click
	this.myBar_1ButtonClick = new lib.myBar_1Button();
	this.myBar_1ButtonClick.name = "myBar_1ButtonClick";
	this.myBar_1ButtonClick.setTransform(43.3,133.25,1,1,0,0,0,43.3,29.1);
	this.myBar_1ButtonClick.alpha = 0.5;
	new cjs.ButtonHelper(this.myBar_1ButtonClick, 0, 1, 1);

	this.myBar_5ButtonClick = new lib.myBar_5ButtonClick();
	this.myBar_5ButtonClick.name = "myBar_5ButtonClick";
	this.myBar_5ButtonClick.setTransform(43.65,133.05,1,1,0,0,0,43.3,29.1);
	new cjs.ButtonHelper(this.myBar_5ButtonClick, 0, 1, 1);

	this.myBar_9ButtonClick = new lib.Bar_9();
	this.myBar_9ButtonClick.name = "myBar_9ButtonClick";
	this.myBar_9ButtonClick.setTransform(43.65,132.55,1,1,0,0,0,43.3,29.1);
	this.myBar_9ButtonClick.alpha = 0.5;
	new cjs.ButtonHelper(this.myBar_9ButtonClick, 0, 1, 1);

	this.myBar_13ButtonClick = new lib.Bar_13();
	this.myBar_13ButtonClick.name = "myBar_13ButtonClick";
	this.myBar_13ButtonClick.setTransform(56.55,133.05,1,1,0,0,0,56.2,29.1);
	this.myBar_13ButtonClick.alpha = 0.5;
	new cjs.ButtonHelper(this.myBar_13ButtonClick, 0, 1, 1);

	this.myBar_17ButtonClick = new lib.Bar_17();
	this.myBar_17ButtonClick.name = "myBar_17ButtonClick";
	this.myBar_17ButtonClick.setTransform(50.55,132.55,1,1,0,0,0,50.2,29.1);
	this.myBar_17ButtonClick.alpha = 0.5;
	new cjs.ButtonHelper(this.myBar_17ButtonClick, 0, 1, 1);

	this.myBar_21ButtonClick = new lib.Bar_21();
	this.myBar_21ButtonClick.name = "myBar_21ButtonClick";
	this.myBar_21ButtonClick.setTransform(52.35,132.55,1,1,0,0,0,52,29.1);
	this.myBar_21ButtonClick.alpha = 0.5;
	new cjs.ButtonHelper(this.myBar_21ButtonClick, 0, 1, 1);

	this.myBar_25ButtonClick = new lib.Bar_25();
	this.myBar_25ButtonClick.name = "myBar_25ButtonClick";
	this.myBar_25ButtonClick.setTransform(53.85,133.05,1,1,0,0,0,53.5,29.1);
	this.myBar_25ButtonClick.alpha = 0.5;
	new cjs.ButtonHelper(this.myBar_25ButtonClick, 0, 1, 1);

	this.myBar_29ButtonClick = new lib.Bar_29Click();
	this.myBar_29ButtonClick.name = "myBar_29ButtonClick";
	this.myBar_29ButtonClick.setTransform(45.5,132.25,1,1,0,0,0,45.5,29.1);
	this.myBar_29ButtonClick.alpha = 0.5;
	new cjs.ButtonHelper(this.myBar_29ButtonClick, 0, 1, 1);

	this.myBar_33ButtonClick = new lib.Bar_33Click();
	this.myBar_33ButtonClick.name = "myBar_33ButtonClick";
	this.myBar_33ButtonClick.setTransform(44.9,132.25,1,1,0,0,0,44.9,29.1);
	this.myBar_33ButtonClick.alpha = 0.5;
	new cjs.ButtonHelper(this.myBar_33ButtonClick, 0, 1, 1);

	this.myBar_37ButtonClick = new lib.Bar_37Click();
	this.myBar_37ButtonClick.name = "myBar_37ButtonClick";
	this.myBar_37ButtonClick.setTransform(45.5,132.25,1,1,0,0,0,45.5,29.1);
	this.myBar_37ButtonClick.alpha = 0.5;
	new cjs.ButtonHelper(this.myBar_37ButtonClick, 0, 1, 1);

	this.myBar_41ButtonClick = new lib.Bar_41Click();
	this.myBar_41ButtonClick.name = "myBar_41ButtonClick";
	this.myBar_41ButtonClick.setTransform(45.4,132.25,1,1,0,0,0,45.4,29.1);
	this.myBar_41ButtonClick.alpha = 0.5;
	new cjs.ButtonHelper(this.myBar_41ButtonClick, 0, 1, 1);

	this.myBar_45ButtonClick = new lib.Bar_45Click();
	this.myBar_45ButtonClick.name = "myBar_45ButtonClick";
	this.myBar_45ButtonClick.setTransform(45.5,132.25,1,1,0,0,0,45.5,29.1);
	this.myBar_45ButtonClick.alpha = 0.5;
	new cjs.ButtonHelper(this.myBar_45ButtonClick, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.myBar_1ButtonClick}]}).to({state:[{t:this.myBar_5ButtonClick}]},240).to({state:[{t:this.myBar_9ButtonClick}]},240).to({state:[{t:this.myBar_13ButtonClick}]},240).to({state:[{t:this.myBar_17ButtonClick}]},240).to({state:[{t:this.myBar_21ButtonClick}]},240).to({state:[{t:this.myBar_25ButtonClick}]},240).to({state:[{t:this.myBar_29ButtonClick}]},240).to({state:[{t:this.myBar_33ButtonClick}]},240).to({state:[{t:this.myBar_37ButtonClick}]},240).to({state:[{t:this.myBar_41ButtonClick}]},240).to({state:[{t:this.myBar_45ButtonClick}]},240).to({state:[]},240).wait(13));

	// Full_screen
	this.Full_screen_icon = new lib.Full_screen_icon();
	this.Full_screen_icon.name = "Full_screen_icon";
	this.Full_screen_icon.setTransform(1772.35,364.1,0.7,0.7,0,0,0,52.2,55.5);
	new cjs.ButtonHelper(this.Full_screen_icon, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Full_screen_icon).to({_off:true},2880).wait(13));

	// Full_screen_click
	this.Full_screen_iconClick = new lib.Full_screen_iconClickai();
	this.Full_screen_iconClick.name = "Full_screen_iconClick";
	this.Full_screen_iconClick.setTransform(1772.35,364.1,0.7,0.7,0,0,0,52.2,55.5);
	this.Full_screen_iconClick.alpha = 0.5;
	new cjs.ButtonHelper(this.Full_screen_iconClick, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Full_screen_iconClick).to({_off:true},2880).wait(13));

	// Play_button
	this.myPlayButton = new lib.Play();
	this.myPlayButton.name = "myPlayButton";
	this.myPlayButton.setTransform(73.4,26.8,1,1,0,0,0,73,25.8);
	new cjs.ButtonHelper(this.myPlayButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.myPlayButton).to({_off:true},2880).wait(13));

	// Pause_button
	this.myPauseButton = new lib.Pause();
	this.myPauseButton.name = "myPauseButton";
	this.myPauseButton.setTransform(74.2,26.8,1,1,0,0,0,73.8,26.8);
	new cjs.ButtonHelper(this.myPauseButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.myPauseButton).to({_off:true},2880).wait(13));

	// Stop_button
	this.myStopButton = new lib.Stop();
	this.myStopButton.name = "myStopButton";
	this.myStopButton.setTransform(230.8,27,1,1,0,0,0,74.4,27);
	new cjs.ButtonHelper(this.myStopButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.myStopButton).to({_off:true},2880).wait(13));

	// Forward_Button
	this.myForwardButton = new lib.Forward_Btn();
	this.myForwardButton.name = "myForwardButton";
	this.myForwardButton.setTransform(1763.2,74.45,1,1,0,0,0,46.2,48);
	new cjs.ButtonHelper(this.myForwardButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.myForwardButton).to({_off:true},2880).wait(13));

	// Backwards_Button
	this.myBackwardButton = new lib.Backward_Btn();
	this.myBackwardButton.name = "myBackwardButton";
	this.myBackwardButton.setTransform(1673.15,74.4,1,1,0,0,0,46.2,48);
	new cjs.ButtonHelper(this.myBackwardButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.myBackwardButton).to({_off:true},2880).wait(13));

	// Harm_Score_2
	this.Harm_chord_3 = new lib.Harmonic_chord_3ai();
	this.Harm_chord_3.name = "Harm_chord_3";
	this.Harm_chord_3.setTransform(902.75,226.7,3.5601,3.5601,0,0,0,256,46.8);

	this.timeline.addTween(cjs.Tween.get(this.Harm_chord_3).to({_off:true},2880).wait(13));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EiO7ghAMEd3AAAMAAABCBMkd3AAAg");
	this.shape.setTransform(904.775,201.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EiO7AhBMAAAhCBMEd3AAAMAAABCBg");
	this.shape_1.setTransform(904.775,201.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2893));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1809.6,402.6);
// library properties:
lib.properties = {
	id: 'C713FFE08B27468BA6C257A472237D04',
	width: 1809,
	height: 402,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/backwards1426683_640.png", id:"backwards1426683_640"},
		{src:"images/forward1426686_640.png", id:"forward1426686_640"},
		{src:"images/pausknapp.jpg", id:"pausknapp"},
		{src:"images/playknapp.jpg", id:"playknapp"},
		{src:"images/stoppknapp.jpg", id:"stoppknapp"},
		{src:"sounds/Harmonic_rythm_3.mp3", id:"Harmonic_rythm_3"}
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