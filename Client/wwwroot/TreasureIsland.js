(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"TreasureIsland_atlas_1", frames: [[1611,567,276,228],[760,0,372,360],[1134,0,372,360],[0,736,322,181],[792,839,202,193],[545,898,202,192],[749,1034,192,183],[1356,567,253,266],[0,0,356,479],[1508,339,285,127],[324,736,219,236],[1611,797,219,236],[1068,807,219,236],[760,362,299,104],[1508,0,281,337],[1791,0,253,310],[1832,797,188,268],[1289,835,207,243],[0,567,551,167],[0,919,201,192],[943,1034,106,122],[1498,835,50,590],[358,0,400,400],[553,567,237,329],[1274,362,51,50],[203,974,285,127],[1068,567,286,238],[1417,362,32,32],[1220,362,52,52],[1889,567,141,160],[1795,312,165,167],[1550,1035,165,167],[792,567,274,270],[1372,362,43,42],[0,481,2021,84],[1327,362,43,43],[1962,312,68,68],[1160,362,58,58],[1061,362,97,104]]},
		{name:"TreasureIsland_atlas_2", frames: [[1258,993,451,452],[1295,1447,418,452],[0,0,1177,417],[0,1193,1178,382],[0,1577,1293,327],[0,419,1241,389],[1295,0,677,510],[1295,512,592,479],[0,810,1256,381]]},
		{name:"TreasureIsland_atlas_3", frames: [[961,0,946,716],[0,737,1439,480],[0,1219,1175,542],[0,0,959,735]]},
		{name:"TreasureIsland_atlas_4", frames: [[0,1066,1422,617],[0,0,1386,1064]]},
		{name:"TreasureIsland_atlas_5", frames: [[0,0,1467,1179]]},
		{name:"TreasureIsland_atlas_6", frames: [[0,0,1172,707],[0,709,1173,699]]},
		{name:"TreasureIsland_atlas_7", frames: [[0,1250,1354,561],[0,694,1455,554],[0,0,1173,692]]},
		{name:"TreasureIsland_atlas_8", frames: [[0,0,1499,1174]]},
		{name:"TreasureIsland_atlas_9", frames: [[0,940,1176,470],[0,1412,1177,445],[0,0,1194,523],[0,525,1456,413]]},
		{name:"TreasureIsland_atlas_10", frames: [[0,0,1920,1080]]},
		{name:"TreasureIsland_atlas_11", frames: [[0,0,1920,1080]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_24 = function() {
	this.initialize(img.CachedBmp_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2641,1478);


(lib.CachedBmp_23 = function() {
	this.initialize(img.CachedBmp_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2641,1478);


(lib.CachedBmp_22 = function() {
	this.initialize(img.CachedBmp_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2660,1480);


(lib.CachedBmp_21 = function() {
	this.initialize(ss["TreasureIsland_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["TreasureIsland_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["TreasureIsland_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["TreasureIsland_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["TreasureIsland_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["TreasureIsland_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["TreasureIsland_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["TreasureIsland_atlas_9"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["TreasureIsland_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["TreasureIsland_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["TreasureIsland_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["TreasureIsland_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["TreasureIsland_atlas_9"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["TreasureIsland_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["TreasureIsland_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["TreasureIsland_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["TreasureIsland_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["TreasureIsland_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["TreasureIsland_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._100_shekels = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._100_shekels_1 = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.background_questionsjpg = function() {
	this.initialize(img.background_questionsjpg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2525,1399);


(lib.Bitmap3 = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap93 = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap94 = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap95 = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap96 = function() {
	this.initialize(ss["TreasureIsland_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blue_flower = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bone = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.brown_btnjpg = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.characterjpg = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.characterjpg_1 = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.characterjpgpngcopy = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.check_btnjpg = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.coins = function() {
	this.initialize(ss["TreasureIsland_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dam_flower = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.final_score_background = function() {
	this.initialize(img.final_score_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2500,1391);


(lib.Final_score_window = function() {
	this.initialize(ss["TreasureIsland_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.frame = function() {
	this.initialize(ss["TreasureIsland_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Golda_Meir = function() {
	this.initialize(img.Golda_Meir);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1822,2400);


(lib.irous_flower = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Itzhak_Rabinjfif = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.kida_flower = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.odot_window_backgroundjpg = function() {
	this.initialize(ss["TreasureIsland_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.orange_btnjpg = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.pause_popUpjpg = function() {
	this.initialize(ss["TreasureIsland_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pausePicBTN = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.picture_leaderjpg = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.scale = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.shimon_peres = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.skull = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.sound_btnjpg = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.StartGame_State2 = function() {
	this.initialize(ss["TreasureIsland_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.StartOver_Btn = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.talking_frame = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.TextInput = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.time_icon = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.timeover_popUp = function() {
	this.initialize(img.timeover_popUp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2223,1274);


(lib.treasureBox_closejpg = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.treasureBox_goldjpg = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.treasureBox_goldjpgpngcopy = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.treasureBox_sculp = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Untitleddesign2 = function() {
	this.initialize(ss["TreasureIsland_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Vjpg = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.wood_TopOfPagejpg = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.woodenBoardjpg = function() {
	this.initialize(ss["TreasureIsland_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Xjpg = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.zoomIn_btnjpg = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.zoomIn_btn1 = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.zzzz = function() {
	this.initialize(ss["TreasureIsland_atlas_1"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Tween25 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("אי המטמון", "normal 700 80px 'Assistant'", "#5A3114");
	this.text.textAlign = "center";
	this.text.lineHeight = 106;
	this.text.lineWidth = 388;
	this.text.parent = this;
	this.text.setTransform(0,-76.35);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196,-78.3,392.1,130.7);


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Untitleddesign2();
	this.instance.setTransform(-473.3,-390.2,0.5812,0.5841,0,14.3564,8.7261);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-629.7,-390.2,1259.5,780.4);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Untitleddesign2();
	this.instance.setTransform(-316.4,-260.9,0.3886,0.3905,0,14.3583,8.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-421,-260.9,842.1,521.8);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Untitleddesign2();
	this.instance.setTransform(-251.65,-207.5,0.309,0.3105,0,14.3585,8.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334.8,-207.5,669.7,415);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Untitleddesign2();
	this.instance.setTransform(-282.1,-232.6,0.3465,0.3481,0,14.3584,8.7268);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375.3,-232.6,750.7,465.2);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.Untitleddesign2();
	this.instance.setTransform(-251.6,-149.85,0.2775,0.2788,0,5.6338,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-281.1,-149.8,562.3,299.70000000000005);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Untitleddesign2();
	this.instance.setTransform(-289.5,-172.4,0.3193,0.3208,0,5.6311,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323.5,-172.4,647,344.8);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Untitleddesign2();
	this.instance.setTransform(-241,-143.55,0.2658,0.2671,0,5.6327,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269.3,-143.5,538.6,287);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Untitleddesign2();
	this.instance.setTransform(-241,-143.55,0.2658,0.2671,0,5.6327,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269.3,-143.5,538.6,287);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Untitleddesign2();
	this.instance.setTransform(-283.2,-168.65,0.3123,0.3138,0,5.6338,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316.4,-168.6,632.8,337.29999999999995);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Untitleddesign2();
	this.instance.setTransform(-251.65,-149.85,0.2775,0.2788,0,5.6338,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-281.2,-149.8,562.4,299.70000000000005);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.coins();
	this.instance.setTransform(-385.3,-259,0.4215,0.4215,4.5514);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-421.4,-259,842.8,518);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.coins();
	this.instance.setTransform(-169.2,-285.55,0.3013,0.3013,29.9929);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-331.8,-285.5,663.7,571);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.coins();
	this.instance.setTransform(-96.6,-163.1,0.1721,0.1721,29.9975);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.5,-163.1,379.1,326.2);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.coins();
	this.instance.setTransform(-53.8,-90.85,0.0959,0.0959,29.9971);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,-90.8,211.1,181.6);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.coins();
	this.instance.setTransform(-131.6,-91.6,0.1371,0.1696);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.6,-91.6,263.2,183.2);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.coins();
	this.instance.setTransform(-94.4,-53.1,0.0983,0.0983);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.4,-53.1,188.8,106.2);


(lib.Symbol1Tween = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.characterjpgpngcopy();
	this.instance.setTransform(70.5,0,0.3219,0.3219,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1Tween, new cjs.Rectangle(0,0,70.5,76), null);


(lib.zzzz_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.zzzz();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.zzzz_1, new cjs.Rectangle(0,0,97,104), null);


(lib.wood_topPage = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wood_TopOfPagejpg();
	this.instance.setTransform(0,28.1,0.3344,0.3344,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wood_topPage, new cjs.Rectangle(0,0,675.9,28.1), null);


(lib.boxWrong = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.treasureBox_sculp();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boxWrong, new cjs.Rectangle(0,0,274,270), null);


(lib.treasureBox_gold = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.treasureBox_goldjpg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.treasureBox_gold, new cjs.Rectangle(0,0,165,167), null);


(lib.timeover_popup = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.timeover_popUp();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.timeover_popup, new cjs.Rectangle(0,0,2223,1274), null);


(lib.time_icon_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.time_icon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.time_icon_1, new cjs.Rectangle(0,0,52,52), null);


(lib.talkingframe = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.talking_frame();
	this.instance.setTransform(-146,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.talkingframe, new cjs.Rectangle(-146,-119,286,238), null);


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
	this.instance = new lib.skull();
	this.instance.setTransform(0,0,0.1882,0.1882);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,44.6,61.9), null);


(lib.story_Game = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("ברוכים הבאים!", "normal 700 96px 'Assistant'", "#663300");
	this.text.textAlign = "right";
	this.text.lineHeight = 127;
	this.text.lineWidth = 592;
	this.text.parent = this;
	this.text.setTransform(790.9738,164.7,0.3824,0.3824);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("\"אי המטמון\" הוא אי מסתורי ובו מתגורר מוקי התוכי.\nלכנפיו של מוקי מגיעה מפת אוצר משודד ים שהלך לעולמו.\nעזרו למוקי התוכי במסעו לחפש את האוצר האבוד המפוזר ברחבי האי.", "normal 700 70px 'Assistant'", "#663300");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 93;
	this.text_1.lineWidth = 962;
	this.text_1.parent = this;
	this.text_1.setTransform(850.488,236.05,0.3824,0.3824);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.instance = new lib.odot_window_backgroundjpg();
	this.instance.setTransform(360,111,0.4306,0.4306);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.story_Game, new cjs.Rectangle(360,111,596.8,458.20000000000005), null);


(lib.startOverBtn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.StartOver_Btn();
	this.instance.setTransform(-147,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startOverBtn, new cjs.Rectangle(-147,-65,285,127), null);


(lib.startbtn = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("כניסה למשחק", "bold 50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 58;
	this.text.lineWidth = 405;
	this.text.parent = this;
	this.text.setTransform(246.1346,138.55,0.552,0.552);

	this.instance = new lib.StartGame_State2();
	this.instance.setTransform(110,88,0.4529,0.4529);

	this.instance_1 = new lib.Bitmap96();
	this.instance_1.setTransform(87,65,0.212,0.2126);

	this.text_1 = new cjs.Text("כניסה למשחק", "bold 50px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 58;
	this.text_1.lineWidth = 405;
	this.text_1.parent = this;
	this.text_1.setTransform(246.1346,138.55,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{color:"#FFFFFF"}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{color:"#FF9933"}}]},1).to({state:[{t:this.instance},{t:this.text_1},{t:this.instance_1},{t:this.text,p:{color:"#FF9933"}}]},1).to({state:[{t:this.instance},{t:this.text_1},{t:this.instance_1},{t:this.text,p:{color:"#FF9933"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(87,65,311,250.60000000000002);


(lib.soundbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AiSB9IElj5");
	this.shape.setTransform(73,25.275);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap95();
	this.instance.setTransform(48,0,0.2708,0.2787);

	this.instance_1 = new lib.Bitmap94();
	this.instance_1.setTransform(47,0,0.2574,0.2656);

	this.instance_2 = new lib.sound_btnjpg();
	this.instance_2.setTransform(48,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47,0,53,51);


(lib.progressBarFill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF9933").s().p("EAAAAs7QhPAAg5g5Qg5g5AAhQMAAAhTxQAAhQA5g5QA5g5BPAAIAAAAQBQAAA5A5QA5A5AABQMAAABTxQAABQg5A5Qg5A5hQAAg");
	this.shape.setTransform(21.8839,257.6476,0.7679,0.8589);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.progressBarFill, new cjs.Rectangle(7,10.8,29.799999999999997,493.8), null);


(lib.progressBarBK = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B6AB88").s().p("EgMEA0eMAAAho7IYJAAMAAABo7g");
	this.shape.setTransform(77.3,391.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.progressBarBK, new cjs.Rectangle(0,55.8,154.6,671.7), null);


(lib.progressBar = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.scale();
	this.instance.setTransform(0,0,0.882,0.8663);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.progressBar, new cjs.Rectangle(0,0,44.1,511.2), null);


(lib.pausebtn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap93();
	this.instance.setTransform(48,0,0.2573,0.2591);

	this.instance_1 = new lib.pausePicBTN();
	this.instance_1.setTransform(48,0,0.2672,0.2672);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48,0,53.7,51.3);


(lib.pause_popup = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pause_popUpjpg();
	this.instance.setTransform(271,62,0.5154,0.5154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.337)").s().p("EhqHA8HMAAAh4NMDUPAAAMAAAB4Ng");
	this.shape.setTransform(656.95,364.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pause_popup, new cjs.Rectangle(-22.2,-20.1,1358.4,769.5), null);


(lib.ParrotGreen = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(3.05,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(2.5,2,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(1,2.5,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_5();
	this.instance_3.setTransform(-0.35,70,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(-3.4,137.65,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_7();
	this.instance_5.setTransform(-3.45,164.85,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_8();
	this.instance_6.setTransform(-3.8,163.25,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_9();
	this.instance_7.setTransform(-4.4,162.65,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_10();
	this.instance_8.setTransform(-1.05,160.9,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_11();
	this.instance_9.setTransform(-1.75,158.95,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_12();
	this.instance_10.setTransform(-2.45,157.95,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_13();
	this.instance_11.setTransform(-3.25,160.3,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_14();
	this.instance_12.setTransform(-3.65,159.15,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_15();
	this.instance_13.setTransform(-3.4,124.95,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_16();
	this.instance_14.setTransform(-3.15,111.5,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_17();
	this.instance_15.setTransform(-3.7,105.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,0,730.9,467.5);


(lib.Open_background = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.final_score_background();
	this.instance.setTransform(16,-3,0.5235,0.5235);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Open_background, new cjs.Rectangle(16,-3,1308.8,728.2), null);


(lib.MadHazahavIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.text = new cjs.Text("מד הזהב", "bold 16px 'Tahoma'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 58;
	this.text.parent = this;
	this.text.setTransform(55.7,628.35,0.6585,0.6585);

	this.instance = new lib.treasureBox_goldjpg();
	this.instance.setTransform(20,618,0.5599,0.5611);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MadHazahavIcon, new cjs.Rectangle(20,618,92.4,93.70000000000005), null);


(lib.glassbtn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.zoomIn_btnjpg();
	this.instance.setTransform(100,-41,0.6471,0.6471);

	this.instance_1 = new lib.zoomIn_btn1();
	this.instance_1.setTransform(100,-41,0.7828,0.7828);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100,-41,45.400000000000006,45.4);


(lib.GameButton = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.orange_btnjpg();
	this.instance.setTransform(-97,-30,0.3533,0.3533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GameButton, new cjs.Rectangle(-97,-30,194.7,59), null);


(lib.Final_score_window_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Final_score_window();
	this.instance.setTransform(36,-8,0.6079,0.6079);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Final_score_window_1, new cjs.Rectangle(36,-8,583,446.8), null);


(lib.final_score_background_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.final_score_background();
	this.instance.setTransform(0,-67,0.246,0.246);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.final_score_background_1, new cjs.Rectangle(0,-67,614.9,342.2), null);


(lib.checkbtn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CC6633").ss(2,1,1).p("Ap2jUITtAAQAUAAAAAUIAAGAQAAAUgUAAIztAAQgUAAAAgUIAAmAQAAgUAUAAg");
	this.shape.setTransform(-2.0398,-1.75,1.0386,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9933").s().p("Ap1DUQgVAAAAgTIAAmBQAAgTAVAAITsAAQATAAABATIAAGBQgBATgTAAg");
	this.shape_1.setTransform(-2.0398,-1.75,1.0386,1);

	this.instance = new lib.check_btnjpg();
	this.instance.setTransform(-76,-27,0.5029,0.5029);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("Aquj6IVdAAQAUAAAAAUIAAHNQAAAUgUAAI1dAAQgUAAAAgUIAAnNQAAgUAUAAg");
	this.shape_2.setTransform(-1.275,0.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9933").s().p("AquD7QgUAAAAgUIAAnNQAAgUAUAAIVdAAQAUAAAAAUIAAHNQAAAUgUAAg");
	this.shape_3.setTransform(-1.275,0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-27,150.4,54.3);


(lib.character = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.characterjpg_1();
	this.instance.setTransform(22,24,0.7966,0.7966);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.character, new cjs.Rectangle(22,24,174.5,188), null);


(lib.brown_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.brown_btnjpg();
	this.instance.setTransform(-144,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.brown_btn, new cjs.Rectangle(-144,-64,285,127), null);


(lib.bones = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bone();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bones, new cjs.Rectangle(0,0,356,479), null);


(lib.bk_title = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("אי המטמון", "bold 100px 'Calibri'", "#663300");
	this.text.textAlign = "center";
	this.text.lineHeight = 124;
	this.text.lineWidth = 441;
	this.text.parent = this;
	this.text.setTransform(179,31);

	this.instance = new lib.woodenBoardjpg();
	this.instance.setTransform(-71,0,0.3981,0.4724);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bk_title, new cjs.Rectangle(-71,0,500,225.9), null);


(lib.background_questions = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.background_questionsjpg();
	this.instance.setTransform(0,0,0.52,0.52);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6AB88").s().p("ArISYMAAAgkvIWRAAMAAAAkvg");
	this.shape.setTransform(119.975,175.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background_questions, new cjs.Rectangle(0,0,1313,727.5), null);


(lib.ZeevGrave = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["TreasureIsland_atlas_1"],3);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.802,0,0,0.802,-129.1,-72.6)).s().p("AqxLWIAA2rIVjAAIAAWrg")
	}.bind(this);
	this.shape.setTransform(0,5.8);

	this.shape_1 = new cjs.Shape();
	var sprImg_shape_1 = cjs.SpriteSheetUtils.extractFrame(ss["TreasureIsland_atlas_1"],3);
	sprImg_shape_1.onload = function(){
		this.shape_1.graphics.bf(sprImg_shape_1, null, new cjs.Matrix2D(1.101,0,0,1.101,-177.1,-99.5)).s().p("AuyPkIAA/HIdlAAIAAfHg")
	}.bind(this);
	this.shape_1.setTransform(0,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.6,-93.8,189.3,199.2);


(lib.LeviAshkol = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.picture_leaderjpg();
	this.instance.setTransform(147,-99,0.7482,0.7482);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LeviAshkol, new cjs.Rectangle(147,-99,79.30000000000001,91.3), null);


(lib.kidaflower = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.kida_flower();
	this.instance.setTransform(-56,-63,0.5638,0.5638);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kidaflower, new cjs.Rectangle(-56,-63,116.7,137), null);


(lib.Itzhak_Rabin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.Itzhak_Rabinjfif();
	this.instance.setTransform(145,-100,0.3496,0.3496);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4551,scaleY:0.4551,x:80,y:-124},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,-124,130.7,122);


(lib.irousflower = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.irous_flower();
	this.instance.setTransform(-61,-67,0.4703,0.4703);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.irousflower, new cjs.Rectangle(-61,-67,119,145.8), null);


(lib.Golda_Meir_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Golda_Meir();
	this.instance.setTransform(147,-100,0.0406,0.0406);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Golda_Meir_1, new cjs.Rectangle(147,-100,74.1,97.6), null);


(lib.damflower = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.dam_flower();
	this.instance.setTransform(-54,-62,0.3932,0.3932);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.damflower, new cjs.Rectangle(-54,-62,110.5,132.5), null);


(lib.blueflower = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.blue_flower();
	this.instance.setTransform(-60,-67,0.5336,0.5336);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blueflower, new cjs.Rectangle(-60,-67,135,142), null);


(lib.bill = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._100_shekels_1();
	this.instance.setTransform(-77,-64,0.3668,0.365);

	this.instance_1 = new lib._100_shekels();
	this.instance_1.setTransform(-108,-104,0.5746,0.5718);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-104,213.8,205.9);


(lib.Symbol1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.shimon_peres();
	this.instance_1.setTransform(0,0,0.237,0.237);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(0,0,94.8,94.8), null);


(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Tween29 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_24();
	this.instance.setTransform(-660.25,-369.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-660.2,-369.3,1320.5,739);


(lib.Tween28 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_23();
	this.instance.setTransform(-660.25,-369.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-660.2,-369.3,1320.5,739);


(lib.Tween23 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.woodenBoardjpg();
	this.instance.setTransform(-97.2,-29.5,0.1548,0.1548);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.2,-29.5,194.5,59);


(lib.Tween21 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.woodenBoardjpg();
	this.instance.setTransform(-246.05,-74.65,0.3918,0.3918);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246,-74.6,492.1,149.3);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.woodenBoardjpg();
	this.instance.setTransform(-230.05,-69.8,0.3664,0.3664);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230,-69.8,460.1,139.6);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.woodenBoardjpg();
	this.instance.setTransform(-253.2,-76.8,0.4032,0.4032);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-253.2,-76.8,506.4,153.6);


(lib.Tween10_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.CachedBmp_21();
	this.instance_1.setTransform(-112.65,-113,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.6,-113,225.5,226);


(lib.Tween9_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.CachedBmp_20();
	this.instance_1.setTransform(-104.5,-113,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-113,209,226);


(lib.Tween4_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.characterjpgpngcopy();
	this.instance_1.setTransform(35.25,-38,0.3219,0.3219,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.2,-38,70.5,76);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.characterjpgpngcopy();
	this.instance.setTransform(35.25,-38,0.3219,0.3219,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.2,-38,70.5,76);


(lib.Tween2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.characterjpgpngcopy();
	this.instance_1.setTransform(35.25,-38,0.3219,0.3219,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.2,-38,70.5,76);


(lib.Tween1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.characterjpgpngcopy();
	this.instance_1.setTransform(35.25,-38,0.3219,0.3219,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.2,-38,70.5,76);


(lib.treasureBox_gold_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.treasureBox_goldjpgpngcopy();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.treasureBox_gold_1, new cjs.Rectangle(0,0,165,167), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgXCNIgCAAIgEAAIgCgBIgCgBIgDgBIgDgBIgCgCIgBgBIgCgBIgDgCIgBgDIgCgCIgBgCIgBgCIgBgDIgBgCIAAgCIgBgDIAAgDIAAgCIABgDIAAgDIABgDIABgCIABgCIABgDIACgCIABgBIADgCIACgCIABgCIACgBIADgBIADgBIACgBIACAAIAEgBIACAAIACAAIAEABIACAAIACABIADABIADABIABABIACACIACACIACACIABABIABACIACADIABACIABACIABADIABADIAAADIAAACIAAADIAAADIgBACIgBACIgBADIgBACIgCACIgBACIgBADIgCACIgCABIgCABIgBACIgDABIgDABIgCABIgCABIgEAAIgCAAgAABBRIgBAAIgEgBIgCAAIgCgBIgDgBIgDgBIgBgBIgCgCIgDgCIgCgCIgBgBIgBgCIgCgDIgBgCIgBgCIgBgDIgBgDIAAgCIAAgDIAAgDIAAgDIABgCIABgDIABgCIABgCIACgCIABgDIABgCIACgCIADgBIACgBIABgCIADgBIADgBIACgBIACgBIAEAAIABAAIACAAIADAAIADABIADABIACABIADABIACACIACABIABABIACACIACACIACADIABACIABACIABACIABADIAAACIABADIAAADIAAADIgBACIAAADIgBADIgBACIgBACIgBADIgCACIgCABIgCACIgBACIgCACIgCABIgDABIgCABIgDABIgDAAIgDABIgCAAgAAQALIgDAAIgCgBIgDAAIgDgBIgCgBIgCgBIgBgBIgDgCIgCgCIgBgCIgCgBIgBgBIgCgCIgBgDIgBgCIgBgDIgBgDIAAgDIAAgCIAAgCIAAgEIABgCIABgCIABgDIABgDIACgBIABgCIACgDIABgCIACgBIADgBIABgCIACgBIACgBIADgBIADgBIACAAIADAAIADAAIACAAIADABIADABIACABIACABIACACIADABIACABIABACIACADIABACIACABIABADIABADIABACIAAACIABAEIAAACIAAACIgBADIAAADIgBADIgBACIgBADIgCACIgBABIgCABIgBACIgCACIgDACIgCABIgCABIgCABIgDABIgDAAIgCABIgDAAgAAQg8IgDAAIgCgBIgDAAIgDgBIgCAAIgCgBIgCgBIgCgBIgCgCIgCgCIgCgBIgCgCIgCgBIgCgCIgBgDIgBgCIgBgCIgCgCIgBgDIgBgDIAAgCIgBgCIAAgEIAAgCIAAgCIAAgEIABgCIAAgCIABgDIABgDIACgCIABgCIABgCIABgDIACgBIACgCIACgCIACgCIACgBIACgCIACgBIACgBIACgBIACAAIADgBIADAAIACgBIADAAIADAAIACABIADAAIADABIACAAIACABIADABIACABIACACIACABIACACIACACIACACIABABIACADIABACIABACIACACIABADIABADIAAACIABACIAAAEIAAACIAAACIAAAEIgBACIAAACIgBADIgBADIgCACIgBACIgBACIgCADIgBACIgCABIgCACIgCABIgCACIgCACIgCABIgDABIgCABIgCAAIgDABIgDAAIgCABIgDAAg");
	this.shape.setTransform(5.6,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,11.2,28.2), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgTBhIgCAAIgEAAIgCgBIgCgBIgDgBIgDgBIgCgCIgBgBIgCgCIgDgBIgBgCIgCgDIgBgCIgBgCIgBgCIgBgDIAAgDIgBgCIAAgDIAAgDIABgCIAAgDIABgDIABgCIABgCIABgCIACgDIABgCIADgBIACgCIABgBIACgCIADgBIADgBIACgBIACAAIAEgBIACAAIACAAIAEABIACAAIACABIADABIADABIABACIACABIABACIADABIABACIABADIACACIABACIABACIABADIABADIAAACIAAADIAAADIAAACIgBADIgBADIgBACIgBACIgCACIgBADIgBACIgDABIgBACIgCABIgBACIgDABIgDABIgCABIgCABIgEAAIgCAAgAAFAlIgCAAIgDgBIgCAAIgCgBIgDgBIgDgBIgBgBIgCgCIgDgCIgCgCIgBgCIgBgBIgCgCIgBgDIgBgCIgBgDIgBgDIAAgDIAAgCIAAgCIAAgDIABgCIABgCIABgDIABgDIACgBIABgCIABgDIACgCIADgBIACgBIABgCIADgBIADgBIACgBIACgBIADAAIACAAIACAAIADAAIADABIACABIADABIADABIACACIACABIABABIACACIACADIACACIABABIABADIABADIABACIAAACIABADIAAACIAAACIgBADIAAADIgBADIgBACIgBADIgBACIgCABIgCACIgCACIgBACIgCACIgCABIgDABIgDABIgCABIgDAAIgDABIgCAAgAAUggIgDAAIgCAAIgDgBIgDgBIgCgBIgCgBIgCgCIgDgBIgBgBIgBgDIgCgCIgBgCIgCgBIgBgDIgBgDIgBgCIgBgCIAAgEIAAgCIAAgCIAAgEIABgCIABgCIABgDIABgDIACgCIABgBIACgCIABgDIABgBIADgCIACgBIACgBIACgBIADgBIADAAIACgBIADAAIADAAIACABIADAAIADABIACABIACABIACABIADACIACABIABADIACACIABABIACACIABADIABADIABACIAAACIABAEIAAACIAAACIgBAEIAAACIgBACIgBADIgBADIgCABIgBACIgCACIgBADIgCABIgDABIgCACIgCABIgCABIgDABIgDABIgCAAIgDAAg");
	this.shape.setTransform(5.2,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,10.4,19.4), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgTBhIgCAAIgEAAIgCgBIgCgBIgDgBIgDgBIgCgCIgBgBIgCgCIgDgBIgBgCIgCgDIgBgCIgBgCIgBgCIgBgDIAAgDIgBgCIAAgDIAAgDIABgCIAAgDIABgDIABgCIABgCIABgCIACgDIABgCIADgBIACgCIABgBIACgCIADgBIADgBIACgBIACAAIAEgBIACAAIACAAIAEABIACAAIACABIADABIADABIABACIACABIABACIADABIABACIABADIACACIABACIABACIABADIABADIAAACIAAADIAAADIAAACIgBADIgBADIgBACIgBACIgCACIgBADIgBACIgDABIgBACIgCABIgBACIgDABIgDABIgCABIgCABIgEAAIgCAAgAAFAlIgCAAIgDgBIgCAAIgCgBIgDgBIgDgBIgBgBIgCgCIgDgCIgCgCIgBgCIgBgBIgCgCIgBgDIgBgCIgBgDIgBgDIAAgDIAAgCIAAgCIAAgDIABgCIABgCIABgDIABgDIACgBIABgCIABgDIACgCIADgBIACgBIABgCIADgBIADgBIACgBIACgBIADAAIACAAIACAAIADAAIADABIACABIADABIADABIACACIACABIABABIACACIACADIACACIABABIABADIABADIABACIAAACIABADIAAACIAAACIgBADIAAADIgBADIgBACIgBADIgBACIgCABIgCACIgCACIgBACIgCACIgCABIgDABIgDABIgCABIgDAAIgDABIgCAAgAAUggIgDAAIgCAAIgDgBIgDgBIgCgBIgCgBIgCgCIgDgBIgBgBIgBgDIgCgCIgBgCIgCgBIgBgDIgBgDIgBgCIgBgCIAAgEIAAgCIAAgCIAAgEIABgCIABgCIABgDIABgDIACgCIABgBIACgCIABgDIABgBIADgCIACgBIACgBIACgBIADgBIADAAIACgBIADAAIADAAIACABIADAAIADABIACABIACABIACABIADACIACABIABADIACACIABABIACACIABADIABADIABACIAAACIABAEIAAACIAAACIgBAEIAAACIgBACIgBADIgBADIgCABIgBACIgCACIgBADIgCABIgDABIgCACIgCABIgCABIgDABIgDABIgCAAIgDAAg");
	this.shape.setTransform(5.2,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,10.4,19.4), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#333333").s().p("AgLA+IgDAAIgDgBIgCAAIgDgBIgDgBIgCgBIgCgBIgCgCIgCgCIgCgCIgBgBIgCgCIgCgDIgBgCIgBgCIgBgDIAAgDIgBgDIAAgCIAAgDIABgDIAAgCIABgCIABgDIABgCIACgCIACgCIABgDIACgCIACgBIACgBIACgCIACgBIADgBIADAAIACgBIADAAIADAAIACAAIADAAIACABIADAAIABABIADABIACACIACABIACABIACACIABADIACACIACACIABACIABADIAAACIABACIAAADIAAADIAAACIAAADIgBADIAAADIgBACIgBACIgCADIgCACIgBABIgCACIgCACIgCACIgCABIgDABIgBABIgDABIgCAAIgDABIgCAAgAAMACIgCAAIgDAAIgDgBIgCgBIgCAAIgCgBIgCgCIgCgBIgCgBIgCgDIgBgCIgCgCIgCgBIgBgDIAAgDIgBgCIgBgCIAAgEIAAgCIAAgCIAAgEIABgCIABgCIAAgDIABgDIACgCIACgBIABgCIACgDIACgBIACgCIACgBIACgBIACgBIACgBIADAAIADgBIACAAIADAAIADABIACAAIADABIADABIACABIACABIACACIACABIACADIABACIACABIABACIACADIABADIABACIAAACIABAEIAAACIAAACIgBAEIAAACIgBACIgBADIgCADIgBABIgCACIgBACIgCADIgCABIgCABIgCACIgCABIgDAAIgDABIgCABIgDAAIgDAAg");
	this.shape.setTransform(4.45,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,8.9,12.4), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(4,1,1).p("AgJgxIA2AkIhZAfIA2Ag");
	this.shape.setTransform(4.475,4.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgXCNIgCAAIgEgBIgCAAIgCgBIgDgBIgDgBIgBgCIgCgBIgCgCIgDgBIgBgCIgCgDIgBgCIgBgCIgBgCIgBgDIgBgDIAAgCIAAgDIAAgDIAAgCIABgDIABgDIABgCIABgCIABgCIACgDIABgCIADgBIACgCIACgBIABgCIADgBIADgBIACgBIACgBIAEAAIACAAIACAAIAEAAIACABIACABIADABIADABIACACIABABIACACIACABIABACIACADIABACIABACIABACIABADIAAADIABACIAAADIAAADIgBACIAAADIgBADIgBACIgBACIgBACIgCADIgBACIgCABIgCACIgBABIgCACIgDABIgDABIgCABIgCAAIgEABIgCAAgAABBRIgCAAIgDgBIgCAAIgCgBIgDgBIgCgBIgCgBIgCgCIgDgCIgCgCIgBgCIgBgBIgCgCIgBgDIgBgCIgBgDIgBgDIAAgDIAAgCIAAgCIAAgEIABgCIABgCIABgDIABgDIACgBIABgCIABgDIACgCIADgBIACgBIACgCIACgBIADgBIACgBIACgBIADAAIACAAIACAAIADAAIADABIADABIACABIACABIADACIACABIABABIACACIACADIACACIABABIABADIABADIABACIAAACIABAEIAAACIAAACIgBADIAAADIgBADIgBACIgBADIgBACIgCABIgCACIgCACIgBACIgCACIgDABIgCABIgCABIgDABIgDAAIgDABIgCAAgAAQALIgDAAIgCAAIgDgBIgDgBIgCgBIgCgBIgCgBIgCgCIgCgBIgBgDIgCgBIgCgCIgBgBIgBgDIgBgDIgBgCIAAgCIgBgEIAAgCIAAgCIABgEIAAgCIABgCIABgDIABgDIABgCIACgBIACgCIABgDIACgBIACgCIACgBIACgBIACgBIADgBIADAAIACgBIADAAIADAAIADABIACAAIADABIACABIACABIACABIADACIACABIACADIABACIABABIACACIABADIABADIABACIABACIAAAEIAAACIAAACIAAAEIgBACIgBACIgBADIgBADIgCABIgBACIgBABIgCADIgCABIgDACIgCABIgCABIgCABIgDABIgCABIgDAAIgDAAgAAQg8IgDAAIgCAAIgDgBIgDgBIgCAAIgCgBIgCgCIgCgBIgCgBIgCgBIgDgCIgBgCIgCgCIgBgBIgCgDIgBgCIgCgCIgBgCIgBgDIgBgDIAAgCIAAgCIgBgEIAAgCIAAgCIABgDIAAgDIAAgDIABgCIABgDIABgCIACgCIABgCIACgDIABgCIACgBIABgCIADgBIACgCIACgCIACgBIACgBIACgBIACAAIADgBIADAAIACgBIADAAIADAAIADABIACAAIADABIACAAIACABIADABIACABIACACIACACIACABIACACIACABIACACIABADIABACIABACIACACIABADIABACIAAADIABADIAAADIAAACIAAACIAAAEIgBACIAAACIgBADIgBADIgCACIgBACIgBACIgBADIgCABIgCACIgCACIgCACIgCABIgCABIgCABIgDACIgCABIgCAAIgDABIgCABIgDAAIgDAAg");
	this.shape_1.setTransform(6.85,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-2,-2,14.5,43.9), null);


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
	this.shape.graphics.f().s("#333333").ss(4,1,1).p("Ag7h+IBUA3IiLAyIBVAxAA8AcIA3AjIhaAgIA3Ag");
	this.shape.setTransform(11.475,12.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgXCNIgDAAIgCgBIgDAAIgDgBIgCgBIgCgBIgCgBIgDgCIgCgCIgBgCIgCgBIgBgCIgCgDIgBgCIgBgCIgBgDIAAgDIgBgCIAAgDIAAgDIABgDIAAgCIABgCIABgDIABgDIACgBIABgCIACgDIABgCIACgBIADgBIACgCIACgBIACgBIADgBIADgBIACAAIADAAIADAAIACAAIADABIADABIACABIACABIACACIADABIACABIABACIABADIABACIACABIABADIABADIABACIABACIAAADIAAADIAAADIAAACIgBADIgBADIgBACIgBACIgCADIgBACIgBABIgBACIgCACIgDACIgCABIgCABIgCABIgDABIgDAAIgCABIgDAAgAABBRIgCAAIgCAAIgDgBIgDgBIgCgBIgCgBIgDgCIgCgBIgBgBIgCgDIgCgCIgCgBIgBgCIgBgDIgBgDIgBgCIAAgCIgBgEIAAgCIAAgCIABgEIAAgCIABgCIABgDIABgDIABgCIACgBIACgCIACgDIABgBIACgCIADgBIACgBIACgBIADgBIADAAIACgBIACAAIADAAIADABIACAAIACABIADABIACABIACABIACACIADABIACADIABACIABABIACACIABADIABADIABACIABACIAAAEIAAACIAAACIAAAEIgBACIgBACIgBADIgBADIgCACIgBABIgBACIgCADIgDABIgCABIgCACIgCABIgDABIgCABIgCABIgDAAIgDAAgAAQALIgCAAIgEAAIgCgBIgCgBIgDgBIgDgBIgBgCIgBgBIgCgBIgDgCIgBgCIgCgCIgBgBIgBgDIgBgDIgBgCIgBgCIAAgDIAAgDIAAgCIAAgDIABgDIABgDIABgCIABgCIABgDIACgCIABgBIADgCIACgCIABgCIABgBIADgBIADgBIACgBIACAAIAEgBIACAAIACAAIAEABIACAAIACABIADABIADABIACABIABACIACACIADACIABABIACACIABADIABACIABACIABADIAAADIABADIAAACIAAADIgBADIAAACIgBACIgBADIgBADIgBABIgCACIgBACIgDACIgCABIgBABIgCACIgDABIgDABIgCABIgCABIgEAAIgCAAgAAQg8IgCAAIgEAAIgCgBIgCAAIgDgBIgDgBIgBgCIgCgBIgCgBIgDgBIgCgCIgBgCIgCgCIgCgCIgBgCIgCgCIgBgCIgBgDIgBgCIAAgCIgBgDIAAgCIgBgDIAAgDIAAgDIABgCIAAgDIABgDIAAgCIABgCIABgDIABgCIACgCIABgCIACgDIACgBIABgCIACgBIADgCIACgBIACgCIABgBIADgBIADgBIACAAIACAAIAEgBIACAAIACAAIAEABIACAAIACAAIADABIADABIACABIACACIACABIADACIACABIABACIACABIABADIACACIACACIABACIABADIABACIAAACIABADIAAADIABACIAAADIAAADIgBADIAAACIgBADIAAACIgBACIgBADIgBACIgCACIgCACIgBACIgCACIgBACIgCACIgDABIgCABIgCABIgCACIgDABIgDABIgCAAIgCABIgEAAIgCAAg");
	this.shape_1.setTransform(20.85,43.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-2,-2,28.5,59.4), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(4,1,1).p("AAnguIBVA2IiLAyIBUAyAiBjOICBBTIjUBMICBBKACfBsIA2AjIhZAgIA2Ag");
	this.shape.setTransform(21.325,20.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgXCNIgDAAIgCgBIgDAAIgDgBIgCgBIgCgBIgDgCIgCgBIgBgCIgCgBIgCgCIgCgDIgBgCIgBgCIgBgCIgBgDIAAgDIgBgCIAAgDIAAgDIABgCIAAgDIABgDIABgCIABgCIABgCIACgDIACgCIACgBIABgCIACgBIADgCIACgBIACgBIADgBIADgBIACAAIADAAIADAAIADAAIACABIADABIACABIACABIACACIADABIACACIABABIABACIABADIACACIABACIABACIABADIABADIAAACIAAADIAAADIAAACIgBADIgBADIgBACIgBACIgCACIgBADIgBACIgBABIgCACIgDABIgCACIgCABIgCABIgDABIgCAAIgDABIgDAAgAABBRIgBAAIgDgBIgDAAIgDgBIgCgBIgDgBIgCgBIgBgCIgCgCIgCgCIgCgBIgCgCIgBgCIgBgDIgBgDIgBgCIAAgDIgBgDIAAgCIAAgCIABgEIAAgCIABgCIABgDIABgDIABgBIACgCIACgDIACgCIACgBIABgBIACgCIADgBIACgBIADgBIADgBIADAAIABAAIACAAIAEAAIACABIACABIADABIADABIABACIACABIADABIACACIABADIABACIACABIABADIABADIABACIABACIAAAEIAAACIAAACIAAADIgBADIgBACIgBADIgBADIgCACIgBACIgBABIgCACIgDACIgCACIgBABIgDABIgDABIgCABIgCAAIgEABIgCAAgAAQALIgCAAIgEAAIgCgBIgCgBIgDgBIgDgBIAAgCIgCgBIgDgBIgCgDIgBgBIgBgBIgCgCIgBgDIgBgDIgBgCIgBgCIAAgEIAAgCIAAgCIAAgEIABgCIABgCIABgDIABgDIACgCIABgBIABgCIACgDIADgBIACgCIAAgBIADgBIADgBIACgBIACAAIAEgBIACAAIACAAIADABIADAAIADABIACABIADABIACABIABACIACABIACADIACACIACABIABACIABADIABADIABACIAAACIABAEIAAACIAAACIgBAEIAAACIgBACIgBADIgBADIgBACIgCABIgCABIgCADIgCABIgBABIgCACIgDABIgCABIgDABIgDABIgDAAIgCAAgAAQg8IgCAAIgEAAIgCgBIgCgBIgDAAIgDgBIgBgCIgCgBIgCgBIgDgBIgBgCIgCgCIgCgCIgCgBIgBgDIgBgCIgBgCIgCgCIgBgDIAAgDIgBgCIgBgCIAAgEIAAgCIAAgCIAAgDIABgDIABgDIAAgCIABgDIACgCIABgCIABgCIABgDIACgCIACgBIACgCIABgBIADgCIACgCIACgBIABgBIADgBIADAAIACgBIACAAIAEgBIACAAIACAAIADABIADAAIADABIACAAIADABIACABIACABIACACIADACIACABIABACIACABIABACIACADIACACIABACIABACIABADIAAACIABADIAAADIABADIAAACIAAACIgBAEIAAACIgBACIAAADIgBADIgBACIgBACIgCACIgCADIgBABIgCACIgBACIgCACIgDABIgCABIgCABIgCACIgDABIgCAAIgDABIgDABIgDAAIgCAAg");
	this.shape_1.setTransform(40.55,59.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-2,-2,48.2,75.4), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAAAgIgBAAIgEAAIgCgBIgCgBIgDgBIgDgBIgCgCIgBgBIgCgBIgDgDIgBgCIgCgCIgBgBIgBgDIgBgDIgBgCIAAgCIgBgEIAAgCIAAgBIABgEIAAgCIABgCIABgDIABgDIABgCIACgBIABgCIADgDIACgBIABgCIACgBIADgBIADgBIACgBIACAAIAEgBIABAAIACAAIAEABIACAAIACABIADABIADABIABABIACACIACABIADADIABACIABABIACACIABADIABADIABACIABACIAAAEIAAABIAAACIAAAEIgBACIgBACIgBADIgBADIgCABIgBACIgBACIgDADIgCABIgCABIgBACIgDABIgDABIgCABIgCABIgEAAIgCAAg");
	this.shape.setTransform(3.2,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,6.4,6.4), null);


(lib.piratboat1copy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.piratboat1copy, new cjs.Rectangle(0,0,473,358), null);


(lib.piratboat1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.piratboat1, new cjs.Rectangle(0,0,473,358), null);


(lib.final_score_background_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.CachedBmp_22();
	this.instance_1.setTransform(0,0,0.2312,0.2312);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.final_score_background_2, new cjs.Rectangle(0,0,615,342.2), null);


(lib.character_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.characterjpg();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.character_1, new cjs.Rectangle(0,0,219,236), null);


(lib.character_telescope = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.character_telescope, new cjs.Rectangle(0,0,138,114), null);


(lib.shimon_peres_1 = function(mode,startPosition,loop,reversed) {
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
	this.shimon_peres = new lib.Symbol1_1();
	this.shimon_peres.name = "shimon_peres";
	this.shimon_peres.setTransform(187.4,-50.6,1,1,0,0,0,47.4,47.4);

	this.timeline.addTween(cjs.Tween.get(this.shimon_peres).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shimon_peres_1, new cjs.Rectangle(140,-98,94.80000000000001,94.8), null);


(lib.forcombo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MergedLayer_1
	this.gameCodeTXT = new lib.an_TextInput({'id': 'gameCodeTXT', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.gameCodeTXT.name = "gameCodeTXT";
	this.gameCodeTXT.setTransform(374.2,114.1,1.28,1.4545,0,0,0,50.1,11.1);

	this.ComboBox = new lib.an_CSS({'id': 'ComboBox', 'href':'assets/cssCombo.css'});

	this.ComboBox.name = "ComboBox";
	this.ComboBox.setTransform(399,190.65,1,1.0909,0,0,0,50,11.1);

	this.startbtn = new lib.startbtn();
	this.startbtn.name = "startbtn";
	this.startbtn.setTransform(175.05,259.1,1,1,0,0,0,243.1,196.5);
	new cjs.ButtonHelper(this.startbtn, 0, 1, 2, false, new lib.startbtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startbtn},{t:this.ComboBox},{t:this.gameCodeTXT}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.forcombo, new cjs.Rectangle(19,97.2,430.5,281), null);


(lib.Tween22 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween28("synched",0);

	this.instance_1 = new lib.Tween29("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},17).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},17).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-660.2,-369.3,1320.5,739);


(lib.zzz = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Symbol2();
	this.instance.setTransform(651.95,292.45,1,1,0,0,0,3.2,3.2);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(653.25,289.45,1,1,0,0,0,4.5,6.2);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(653.95,285.95,1,1,0,0,0,5.2,9.7);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol8();
	this.instance_3.setTransform(653.95,285.95,1,1,0,0,0,5.2,9.7);
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol9();
	this.instance_4.setTransform(654.35,281.55,1,1,0,0,0,5.6,14.1);
	this.instance_4._off = true;

	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(652.7,273.65,1,1,0,0,0,5.2,19.9);
	this.instance_5._off = true;

	this.instance_6 = new lib.Symbol4();
	this.instance_6.setTransform(645.7,265.95,1,1,0,0,0,12.2,27.7);
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol3();
	this.instance_7.setTransform(635.9,257.95,1,1,0,0,0,22.1,35.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:true},1).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(7).to({_off:true},1).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).wait(8).to({_off:true},1).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).wait(7).to({_off:true},1).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},0).wait(7).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({_off:false},0).wait(8).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(51).to({_off:false},0).wait(7).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(59).to({_off:false},0).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(611.8,220.3,48.200000000000045,75.39999999999998);


(lib.Tween6_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.Symbol1Tween();
	this.instance_1.setTransform(-0.05,0,1,1,0,0,0,35.2,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.2,-38,70.5,76);


(lib.coinsAni = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		playSound("sound_win_coin");
	}
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(1));

	// Layer_5
	this.instance = new lib.Tween8("synched",0);
	this.instance.setTransform(-27.35,-408.25);
	this.instance._off = true;

	this.instance_1 = new lib.Tween9("synched",0);
	this.instance_1.setTransform(-27.35,-408.2);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween10("synched",0);
	this.instance_2.setTransform(-27.35,-408.15);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween11("synched",0);
	this.instance_3.setTransform(-27.35,-408.15);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween12("synched",0);
	this.instance_4.setTransform(-63.15,-453.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true,y:-408.2},3).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},3).to({_off:true,y:-408.15},2).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},2).to({_off:true},2).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},2).to({_off:true,x:-63.15,y:-453.6},2).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},2).to({scaleX:2.0289,scaleY:2.0289,x:-22.5,y:-502.8},2).to({scaleX:1.9403,scaleY:1.9403,x:45.5,y:-480.65},2).to({scaleX:1.7176,scaleY:1.7176,x:40.05,y:-466.4},3).to({_off:true},1).wait(1));

	// Layer_6
	this.instance_5 = new lib.Tween13("synched",0);
	this.instance_5.setTransform(241.15,-220.2);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween14("synched",0);
	this.instance_6.setTransform(241.2,-220.2);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween15("synched",0);
	this.instance_7.setTransform(241.25,-220.15);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween16("synched",0);
	this.instance_8.setTransform(275.7,-234.25);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween17("synched",0);
	this.instance_9.setTransform(542.8,-200.2,1.2783,1.2783);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({_off:true,x:241.2},3).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},3).to({_off:true,x:241.25,y:-220.15},2).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(17).to({_off:false},2).to({_off:true,x:275.7,y:-234.25},2).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},2).to({scaleX:1.5721,scaleY:1.5721,x:554.35,y:-157.9},4).to({_off:true,scaleX:1.2783,scaleY:1.2783,x:542.8,y:-200.2},2).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(25).to({_off:false},2).to({scaleX:1.1315,scaleY:1.1315,x:480.25,y:-218.15},3).to({_off:true},1).wait(1));

	// Layer_4
	this.instance_10 = new lib.Tween4("synched",0);
	this.instance_10.setTransform(58.4,-45.7);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween5("synched",0);
	this.instance_11.setTransform(58.45,-86.45);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween6("synched",0);
	this.instance_12.setTransform(58.55,-86.4);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween7("synched",0);
	this.instance_13.setTransform(58.6,-86.45);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},0).to({_off:true,x:58.45,y:-86.45},4).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({_off:false},4).to({_off:true,x:58.55,y:-86.4},4).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10).to({_off:false},4).to({_off:true,x:58.6,y:-86.45},3).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(14).to({_off:false},3).to({regX:0.1,regY:-0.1,scaleX:0.8863,scaleY:0.8863,x:58.55,y:-103.3},3).to({regX:0.2,scaleX:1.3934,scaleY:1.3934,x:92.9,y:47.8},5).to({scaleX:1.133,scaleY:1.133,x:90.95,y:-32.85},2).to({regX:0.1,scaleX:1.0029,scaleY:1.0029,x:80.15,y:-70},3).to({_off:true},1).wait(1));

	// Layer_2
	this.instance_14 = new lib.Tween1("synched",0);
	this.instance_14.setTransform(57.4,-19.9);

	this.instance_15 = new lib.Tween2("synched",0);
	this.instance_15.setTransform(57.6,-69.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true,x:57.6,y:-69.4},3).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:false},3).to({scaleX:1.3476,scaleY:1.3476,rotation:-12.4651,x:72.05,y:-97.45},3).to({regX:0.1,regY:-0.1,scaleX:1.6687,scaleY:1.6687,rotation:-32.6523,x:72.1,y:-97.7},2).to({scaleX:1.2865,scaleY:1.2865,rotation:-13.9936,x:81.9,y:-151.65},2).to({regX:0.4,regY:-0.3,scaleX:1.5898,scaleY:1.5898,rotation:10.3346,x:132.75,y:-242.65},2).to({regY:-0.4,scaleX:2.2061,scaleY:2.2061,rotation:10.3344,x:99.8,y:-310.25},3).to({regX:0.6,regY:-0.5,scaleX:3.2329,scaleY:3.2329,x:61.25,y:-395.05},2).to({scaleX:3.1294,scaleY:3.1294,rotation:10.3343,x:61.5,y:-395.15},3).to({scaleX:3.9375,scaleY:3.9375,rotation:10.3342,x:62,y:-422.7},3).to({scaleX:6.1898,scaleY:6.1898,rotation:10.3364,x:98.2,y:-454.3},2).to({scaleX:5.0331,scaleY:5.0331,rotation:10.3341,x:95.3,y:-441.1},2).to({scaleX:4.4554,scaleY:4.4554,rotation:10.3342,x:84.15,y:-431.35},3).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-809,-1155.8,2156.8,1564.6);


(lib.CharacterHappy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_1
	this.instance = new lib.Tween10_1("synched",0);
	this.instance.setTransform(96.35,113);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:81},4).to({y:135},6).to({y:97},5).to({y:135},6).to({y:113},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-32,225.5,280);


(lib.character_move = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween9_1("synched",0);
	this.instance.setTransform(104.5,113);

	this.instance_1 = new lib.Tween10_1("synched",0);
	this.instance_1.setTransform(96.35,113);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(17).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(8).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,0,225.5,226);


(lib.boatpirate = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.character_telescope();
	this.instance.setTransform(102.6,133.3,1,1,0,0,0,68.9,57.1);

	this.instance_1 = new lib.piratboat1();
	this.instance_1.setTransform(205.5,155.35,0.8689,0.8689,0,0,0,236.5,178.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.769)").s().p("AFrBeIgdAAIgdAAIgxAAIgoAAIgoAAIgnAAIgcAAIgdgBQgQgBgQgCIgIgCIgIgCIgHgDIgIgEIgHgEIgGgFIgEgFIgFgFIgEgGIgEgHIgDgHIgKAAIgKAAIgKAAIgIAAIgJAAIgIABIgJAAIgJAAIgKAAIgJAAIgJAAIgKAAIgJABIgJAAIgCABIgGAGIgIAGIgIAGIgCACIgGAGIgHAGIgHAEIgHAEIgIAEIgJADIgKACIgKABIgJABIgKAAIgGAAIgJAAIgJAAIgIAAIgJAAIgJAAIgLAAIgKAAIgKgBIgLAAIgKgBIgKgBIgLgBIgKgCIgGgBIgIgDIgHgDIgFgDIgHgFIgHgFIgFgGIgGgHIgEgIIgDgIIgDgJIgDgIIgFgEIgGgFIgJAAIgKAAIgKAAIgKAAIgKAAIgJAAIgKABIgJAAIgKAAIgJAAIgKAAIgJAAIgFAFIgFAFIgGAEIgHAEIgHADIgHACIgHACIgIABIgIAAIgHAAIgHgBIgHgDIgGgDIgGgEIgFgEIgFgGIgEgFIgDgHIgCgGIgBgGIgBgHIABgHIABgHIACgHIADgGIAEgFIAEgGIAGgEIAFgEIAGgDIAHgDIAFgGIAHgGIAHgFIAHgDIAHgDIAIgCIAIgBIAIgBIAIgBIAIAAIAIAAIAJgBIAKAAIAJAAIAKAAIAJAAIALAAIAKAAIAKAAIAKAAIAJAAIAJAAIAKAAIAKABIAKACIAIACIAHACIAHAEIAHAEIAGAEIAGAFIAGAFIAHAFIAGAEIAGAGIAFAFIAFAHIADAIIADAIIADAHIALABIAKAAIALAAIALAAIAKAAIAKABIAKAAIAKAAIAKAAIAKAAIAGgFIAHgFIAGgFIACgDIADgEIAHgHIAGgFIAHgEIAIgEIAHgDIAIgDIAJgCIAJgBIASgCIATAAIAJgBIAKAAIAKAAIAKAAIAJAAIAKAAIAKAAIAKAAIATAAIASAAIAQABIAPACIAHABIAHADIAGADIAGADIAGADIAFAFIAFAFIAEAFIADAGIADAHIADAGQAIAFANgBIAfAAIAeAAIAegBIAoAAIAoAAIAdAAIAlABIAcAAIAeAAIAgAAIAGgFIAGgFIAIgEIAHgDIAGgCIAHgCIAHgCIAKgBIAKgBIALgBIAIgBIAJAAIAIAAIAJAAIAJAAIAKAAIAKAAIALAAIAKAAIAKAAIALAAIAVAAIAKAAIAHAAIAHACIAHACIAGADIAGAEIAFAEIAEAGIAEAFIADAHIADAGIABAGIABAHIgBAHIgBAHIgDAHIgDAGIgEAGIgEAFIgFAFIgGAEIgGADIgHACIgHABIgHABIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgLAAIgKAAIgKAAIgKABIgKAAIgFACIgEADIgFAEIgGAEIgGADIgHADIgHACIgHACIgJACIgKABIgmAAIgeAAg");
	this.shape.setTransform(227.725,307.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boatpirate, new cjs.Rectangle(0,0,411,317), null);


(lib.boat_pirat2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween6_1("synched",0);
	this.instance.setTransform(223.65,113.15);

	this.instance_1 = new lib.treasureBox_gold_1();
	this.instance_1.setTransform(80.25,141.95,0.2195,0.2195,0,0,0,82.5,83.4);

	this.instance_2 = new lib.piratboat1copy();
	this.instance_2.setTransform(145.25,119,0.6648,0.6648,0,0,180,254.5,179);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boat_pirat2, new cjs.Rectangle(0,0,314.5,238), null);


(lib.skullAni = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(0.75,-1.8,0.1597,0.1597,0,0,0,22.6,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:22.3,regY:30.4,scaleX:0.2153,scaleY:0.2153,x:1.15,y:-2.6},8).to({regX:22.2,regY:30.3,scaleX:0.401,scaleY:0.401,x:2.6,y:-5.35},6).to({regY:30.2,scaleX:0.4009,scaleY:0.4009,rotation:26.2364,x:2.65,y:-5.4},5).to({regX:22.4,rotation:38.9258,x:2.7},6).to({rotation:16.9867,x:2.75},4).to({regX:22.2,rotation:1.987,x:2.8},5).to({regY:30.1,rotation:31.986,y:-5.45},5).to({rotation:42.4346,x:2.75},5).to({regY:29.9,rotation:21.2368,x:2.85,y:-5.55},5).to({regY:29.8,rotation:6.2369,x:2.9,y:-5.6},5).to({rotation:18.6805,x:2.95},5).wait(1));

	// Layer_7
	this.instance_1 = new lib.bones();
	this.instance_1.setTransform(-0.5,0.55,0.0387,0.0387,14.9939,0,0,177.7,239.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:178.1,scaleX:0.0523,scaleY:0.0523,y:0.6},8).to({regX:177.4,regY:239.2,scaleX:0.0973,scaleY:0.0973,rotation:14.9887},6).wait(46));

	// Layer_6
	this.instance_2 = new lib.bones();
	this.instance_2.setTransform(0.9,0.95,0.0364,0.0364,0,0,180,177,236);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.0491,scaleY:0.0491,x:1.35,y:1.15},8).to({regX:177.1,regY:236.1,scaleX:0.0915,scaleY:0.0915,x:2.95,y:1.65},6).wait(46));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,-26.3,45.5,53.900000000000006);


(lib.openAni = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_224 = function() {
		playSound("blopCharacter");
	}
	this.frame_299 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(224).call(this.frame_224).wait(75).call(this.frame_299).wait(1));

	// Parrot_Green_copy
	this.instance = new lib.ParrotGreen("synched",0);
	this.instance.setTransform(-68.8,119.5,0.12,0.12,0,0,0,362,126.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(142).to({_off:false},0).to({x:19.4,y:80.3,startPosition:10},10).to({x:137.35,y:52.7,startPosition:17},7).to({x:257.8,y:81.55,startPosition:24},7).to({x:443.45,y:46.4,startPosition:32},8).to({x:622.85,y:71.5,startPosition:42},10).to({x:774.65,y:36.35,startPosition:53},11).to({x:939,y:62.7,startPosition:61},8).to({x:977.9,startPosition:14},17).to({regX:362.4,regY:127,x:1064.15,y:71.5,startPosition:21},7).to({regX:362,regY:126.7,x:1183.6,y:85.3,startPosition:32},11).to({regX:362.4,regY:127,x:1258.3,y:61.15,startPosition:39},7).to({regX:362,regY:126.7,x:1302.75,y:30.1,startPosition:48},9).to({x:1401.85,y:48.9,startPosition:59},11).to({_off:true},1).wait(34));

	// Parrot_Green
	this.instance_1 = new lib.ParrotGreen("synched",0);
	this.instance_1.setTransform(-68.8,119.5,0.12,0.12,0,0,0,362,126.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:19.4,y:80.3,startPosition:10},10).to({x:137.35,y:52.7,startPosition:17},7).to({x:257.8,y:81.55,startPosition:24},7).to({x:443.45,y:46.4,startPosition:32},8).to({x:622.85,y:71.5,startPosition:42},10).to({x:774.65,y:36.35,startPosition:53},11).to({x:939,y:62.7,startPosition:61},8).to({x:977.9,y:50.15,startPosition:4},7).to({regX:362.4,regY:127,x:1064.15,y:71.5,startPosition:21},17).to({regX:362,regY:126.7,x:1183.6,y:85.3,startPosition:32},11).to({regX:362.4,regY:127,x:1258.3,y:61.15,startPosition:39},7).to({regX:362,regY:126.7,x:1302.75,y:30.1,startPosition:48},9).to({x:1401.85,y:48.9,startPosition:59},11).to({_off:true},1).wait(176));

	// text
	this.instance_2 = new lib.Tween25("synched",0);
	this.instance_2.setTransform(661.95,296.95);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(229).to({_off:false},0).wait(70).to({startPosition:0},0).wait(1));

	// board
	this.instance_3 = new lib.Tween23("synched",0);
	this.instance_3.setTransform(663.2,279.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween19("synched",0);
	this.instance_4.setTransform(663.2,279.8);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween20("synched",0);
	this.instance_5.setTransform(663.05,279.8);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween21("synched",0);
	this.instance_6.setTransform(663.05,279.65);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(209).to({_off:false},0).to({_off:true,y:279.8},5).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(209).to({_off:false},5).to({_off:true,x:663.05},6).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(214).to({_off:false},6).to({_off:true,y:279.65},9).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(220).to({_off:false},9).to({rotation:2.7226},11).to({regY:0.1,rotation:-1.2179,y:279.75},9).to({regX:0.1,rotation:1.0195,x:663.15},9).to({rotation:-2.433},8).to({rotation:1.0195},9).to({regY:0.2,rotation:3.6658,x:663.05},7).to({regX:0,regY:0,rotation:0,y:279.65},6).wait(11).to({startPosition:0},0).wait(1));

	// Layer_4
	this.instance_7 = new lib.treasureBox_closejpg();
	this.instance_7.setTransform(140,524,0.3194,0.3194);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(300));

	// pirate
	this.instance_8 = new lib.character_1();
	this.instance_8.setTransform(397.25,473.2,0.2657,0.2657,0,0,0,109.5,118);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(179).to({_off:false},0).to({x:362.45,y:529.2},20).to({x:308.45,y:533.25},10).to({x:212.6,y:538.65},30).wait(61));

	// boat
	this.instance_9 = new lib.boatpirate();
	this.instance_9.setTransform(1397.25,567.95,1,1,0,0,0,205.5,155.4);

	this.instance_10 = new lib.piratboat1copy();
	this.instance_10.setTransform(460.3,486.5,0.5015,0.4657,0,0,0,236.5,179.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_9}]},43).to({state:[{t:this.instance_9}]},45).to({state:[{t:this.instance_9}]},45).to({state:[{t:this.instance_9}]},45).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},59).to({state:[{t:this.instance_10}]},61).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:0.7445,scaleY:0.7445,x:998.35,y:528.8},43).to({regY:155.5,scaleX:0.6415,scaleY:0.6415,x:830.35,y:484.85},45).to({regX:205.6,regY:155.6,scaleX:0.5771,scaleY:0.5771,x:658.35,y:480.9},45).to({regY:155.7,scaleY:0.5256,x:460.35,y:484.95},45).to({_off:true},1).wait(121));

	// background
	this.instance_11 = new lib.Tween22("synched",0,false);
	this.instance_11.setTransform(659.75,368.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(239).to({startPosition:0},0).wait(60).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.8,-0.5,1714.6,739);


(lib.treasureBox_close = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1).call(this.frame_19).wait(1));

	// Layer_9
	this.instance = new lib.skullAni();
	this.instance.setTransform(21.8,-12.7,3.5881,3.5881,0,0,0,-0.8,0.1);

	this.instance_1 = new lib.coinsAni();
	this.instance_1.setTransform(46.45,-35.3,0.2965,0.2965,0,0,0,57.5,-20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(16));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9933").ss(4,1,1).p("AySseMAklAAAQCWAAAACWIAAURQAACWiWAAMgklAAAQiWAAAAiWIAA0RQAAiWCWAAg");
	this.shape.setTransform(179.4415,-50.7686,0.6017,0.6711);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AySMfQiWAAAAiWIAA0RQAAiWCWAAMAklAAAQCWAAAACWIAAURQAACWiWAAg");
	this.shape_1.setTransform(179.4415,-50.7686,0.6017,0.6711);

	this.instance_2 = new lib.treasureBox_closejpg();
	this.instance_2.setTransform(-4,-45,0.8172,0.8247);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{x:-4}},{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.instance_2,p:{x:-10}},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.instance_2,p:{x:3}},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.instance_2,p:{x:-10}},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.instance_2,p:{x:5}},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.instance_2,p:{x:-8}},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.instance_2,p:{x:-4}},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance_3 = new lib.Xjpg();
	this.instance_3.setTransform(163,-127,0.6973,0.6935);

	this.instance_4 = new lib.Vjpg();
	this.instance_4.setTransform(164,-127,0.6774,0.674);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[]},2).wait(14));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CC6633").ss(1,1,1).p("AmtoRINbAAIAAQjItbAAg");
	this.shape_2.setTransform(448,-684.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9933").s().p("AmtISIAAwjINbAAIAAQjg");
	this.shape_3.setTransform(448,-684.95);

	this.instance_5 = new lib.frame();
	this.instance_5.setTransform(95,-113,0.2544,0.2394);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF9933").ss(4,1,1).p("AySseMAklAAAQCWAAAACWIAAURQAACWiWAAMgklAAAQiWAAAAiWIAA0RQAAiWCWAAg");
	this.shape_4.setTransform(179.4415,-50.7686,0.6017,0.6711);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AySMfQiWAAAAiWIAA0RQAAiWCWAAMAklAAAQCWAAAACWIAAURQAACWiWAAg");
	this.shape_5.setTransform(179.4415,-50.7686,0.6017,0.6711);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(4,1,1).p("AzMsTMAmZAAAQCWAAAACWIAAT7QAACWiWAAMgmZAAAQiWAAAAiWIAAz7QAAiWCWAAg");
	this.shape_6.setTransform(178.8041,-51.5672,0.5887,0.6707);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AzMMUQiWAAAAiWIAAz7QAAiWCWAAMAmZAAAQCWAAAACWIAAT7QAACWiWAAg");
	this.shape_7.setTransform(178.8041,-51.5672,0.5887,0.6707);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00CC33").ss(4,1,1).p("AzOsPMAmdAAAQCWAAAACWIAATzQAACWiWAAMgmdAAAQiWAAAAiWIAAzzQAAiWCWAAg");
	this.shape_8.setTransform(180.7031,-51.5608,0.5766,0.673);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AzOMQQiWAAAAiWIAAzzQAAiWCWAAMAmdAAAQCWAAAACWIAATzQAACWiWAAg");
	this.shape_9.setTransform(180.7031,-51.5608,0.5766,0.673);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#666666").ss(0.1,1,1).p("AxmtGMAjNAAAQCWAAAACWIAAVhQAACWiWAAMgjNAAAQiWAAAAiWIAA1hQAAiWCWAAg");
	this.shape_10.setTransform(171.1092,-64.2507,0.7595,0.7756);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AxmNGQiWAAAAiVIAA1gQAAiWCWgBMAjNAAAQCWABAACWIAAVgQAACViWAAg");
	this.shape_11.setTransform(171.1092,-64.2507,0.7595,0.7756);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(14));

	// Layer_1
	this.instance_6 = new lib.treasureBox_closejpg();
	this.instance_6.setTransform(-4,-45,0.8172,0.8247);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#999999").ss(1,1,1).p("AAAApIAAhR");
	this.shape_12.setTransform(66.85,-4.05);

	this.instance_7 = new lib.treasureBox_sculp();
	this.instance_7.setTransform(-45,-80,0.5495,0.5262);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#999999").ss(1,1,1).p("AAAAoIAAhP");
	this.shape_13.setTransform(53.45,-9.725);

	this.instance_8 = new lib.treasureBox_goldjpg();
	this.instance_8.setTransform(-40,-80,0.8769,0.8372);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.instance_6,p:{scaleX:0.8172}}]}).to({state:[{t:this.instance_6,p:{scaleX:0.8164}}]},1).to({state:[{t:this.shape_13,p:{x:53.45,y:-9.725}},{t:this.instance_7}]},1).to({state:[{t:this.shape_13,p:{x:53.1,y:-9.625}},{t:this.instance_8}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.8172}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.8172}}]},1).to({state:[]},1).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-738.9,537,825.9);


(lib.final_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// Parrot_Green
	this.instance = new lib.ParrotGreen("synched",0);
	this.instance.setTransform(-68.8,119.5,0.12,0.12,0,0,0,362,126.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:19.4,y:80.3,startPosition:10},10).to({x:137.35,y:52.7,startPosition:17},7).to({x:257.8,y:81.55,startPosition:24},7).to({x:443.45,y:46.4,startPosition:32},8).to({x:622.85,y:71.5,startPosition:42},10).to({x:774.65,y:36.35,startPosition:53},11).to({x:939,y:62.7,startPosition:61},8).to({x:977.9,y:50.15,startPosition:4},7).to({regX:362.4,regY:127,x:1064.15,y:71.5,startPosition:21},17).to({regX:362,regY:126.7,x:1183.6,y:85.3,startPosition:32},11).to({regX:362.4,regY:127,x:1258.3,y:61.15,startPosition:39},7).to({regX:362,regY:126.7,x:1302.75,y:30.1,startPosition:48},9).to({x:1401.85,y:48.9,startPosition:59},11).to({_off:true},1).wait(56));

	// move_boat
	this.instance_1 = new lib.boat_pirat2();
	this.instance_1.setTransform(474.75,447.8,1,1,0,0,0,157.2,118.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({scaleX:1.1051,scaleY:1.1051,x:1290,y:488.95},111).to({x:1562},19).wait(1));

	// character
	this.instance_2 = new lib.Tween1_1("synched",0);
	this.instance_2.setTransform(253.25,496);

	this.instance_3 = new lib.Tween2_1("synched",0);
	this.instance_3.setTransform(281.25,496);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween3("synched",0);
	this.instance_4.setTransform(347.25,515);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween4_1("synched",0);
	this.instance_5.setTransform(383.25,520);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:281.25},11).wait(169));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},11).to({x:294.45,y:499.8},4).to({_off:true,x:347.25,y:515},6).wait(159));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},6).to({_off:true,x:383.25,y:520},9).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},9).to({x:393.3,y:511.75},9).to({startPosition:0},10).to({_off:true},1).wait(130));

	// background
	this.instance_6 = new lib.treasureBox_gold_1();
	this.instance_6.setTransform(300.7,534.2,0.4514,0.4514,0,0,0,82.9,83.8);

	this.instance_7 = new lib.piratboat1copy();
	this.instance_7.setTransform(461.85,445.8,0.6648,0.6648,0,0,180,254.5,178.9);

	this.instance_8 = new lib.final_score_background_2();
	this.instance_8.setTransform(665.25,370.05,2.1627,2.1627,0,0,0,307.6,171.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).to({state:[{t:this.instance_8}]},49).to({state:[{t:this.instance_8}]},130).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.8,0,1847.6,740);


// stage content:
(lib.TreasureIsland = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		
		document.getElementById("canvas").style.direction = "rtl";
		
		//שמירת גדול מסך
		var stageH = parseInt(canvas.style.height);
		var stageW = parseInt(canvas.style.width);
		
		createjs.Sound.registerSound("sounds/GameSoundTrack.mp3", "GameSound");
		createjs.Sound.registerSound("sounds/startAnimationSound.mp3", "startAnimationSound");
		createjs.Sound.registerSound("sounds/EndAnimation.mp3", "EndAnimation");
		createjs.Sound.registerSound("sounds/ShakingBox.mp3", "ShakingBox");
		createjs.Sound.registerSound("sounds/coinsFillBar.mp3", "coinsFillBar");
		createjs.Sound.registerSound("sounds/blopCharacter.mp3", "blopCharacter");
		createjs.Sound.registerSound("sounds/shakingBones.mp3", "shakingBones");
		createjs.Sound.registerSound("sounds/pirateSound.mp3", "pirate");
		createjs.Sound.registerSound("sounds/sleep_sound_effect.mp3", "sleep");
		
		createjs.Sound.registerSound("sounds/taDa.mp3", "taDa");
		
		
		stage.enableMouseOver(24);
		
		//var mychoice = 1; //נושא המשחק
		
		
		var mychoice; //בחירת משחק
		combo_bk();
		
		
		
		
		//..//הנתיב המוביל לפרויקט המחולל שלכם לשיטה השולפת משחק לפי קוד
		var url = "https://localhost:5001/api/Games/byCode/";
		//var url = "Editor/api/Games/byCode/";
		
		// משתנה שיכיל את הנתונים שמתקבלים
		var myJSON;
		
		//אירוע לחיצה לכפתור הכניסה
		/*self.EnterBtn.addEventListener("click", getTheGame);
		 */
		
		
		//פונקציה א-סינכרונית לשליפת המידע מבסיס הנתונים דרך קריאת רשת
		async function getTheGame() {
		
			//משיכת קוד המשחק שהוקלד בתיבת הטקסט
			var code = gameCodeTXT.value;
		
			//fetch = שיטה הקיימת בג'אווה סקריפט המאפשר לבצע קריאות רשת ולקרוא את התשובות החוזרות מהן
			//משתנה המכיל את כל תשובת הרשת שחוזרת מהקריאה לנתיב שהוגדר
			var response = await fetch(url + code);
		
			//אם הקריאה הסתיימה והחזירה משחק תקין
			if (response.ok) {
		
				//חילוץ המידע של המשחק מקריאת הרשת בפורמט של ג'ייסון
				myJSON = await response.json();
				console.log(myJSON);
		
				createArray();
		
		
			}
		
			//אם הקריאה הסתיימה בתשובה שאינה תקינה (כלומר שגיאה)
			else {
		
				//חילוץ תוכן התשובה עצמה שחזרה מהקריאה = התוכן שכתבנו בתוך הסוגריים במחולל
				var error = await response.text();
		
				if (error == "Game not publish") {
					console.log("משחק קיים אך לא פורסם");
					stage.getChildByName("instruction2").text = "משחק קיים אך לא פורסם";
		
		
				} else if (error == "Game not found") {
					console.log("המשחק שחיפשת אינו קיים");
					stage.getChildByName("instruction2").text = "המשחק שחיפשת אינו קיים";
		
				} else {
					console.log("אירעה תקלת שרת, נסו שוב");
					stage.getChildByName("instruction2").text = "אירעה תקלת שרת, נסו שוב";
					console.log(error);
				}
				stage.getChildByName("instruction2").color = "red";
			}
		
		}
		
		//-----------------------------json
		
		
		// משתנה שיכיל את הנתונים שמתקבלים
		//var myJSON;
		// מערך ריק שיקבל תוכן מהגיסון
		var gameArray = [];
		
		//מקם את התוכן מגייון אל המערך
		var place;
		//תמונה בתוך המערך
		var bmp;
		
		var questionNum = 0; //+1 after player answer question correctly
		var randomQuestionNum;
		var rand;
		
		//GLOBAL ARRAY:
		randomAnswersArray = [];
		boolArray = ["NOTHING"];
		
		////יצירת מופע של מחלקה שטוענת קבצים חיצוניים
		//var lq = new createjs.LoadQueue(true);
		////קריאה לטעינה 
		//lq.loadFile({
		//	id: "forjson",
		//	type: "json",
		//	src: "JSON_txt.txt"
		//});
		//// ארוע סיום טעינה
		//lq.addEventListener('complete', loadJSON);
		//// פונקציה שתקבל את הנתונים ותציב לתוך משתנה 
		//function loadJSON(event) {
		//	myJSON = event.target.getResult('forjson');
		//	console.log(myJSON);
		//	createArray();
		//}
		
		
		function createArray() {
			//stage.removeChild(stage.getChildByName("BTN_PLAY"));
			//stage.removeChild(stage.getChildByName("TXT_CODE"));
			//stage.getChildByName("msg").text="LOADING...HOLD ON DAMMIT";
		
			for (var qnumber = 0; qnumber < myJSON.gameQuestions.length; qnumber++) {
				var tempContent = [];
				for (var content = 0; content < myJSON.gameQuestions[qnumber].questionDistractors.length; content++) {
					tempContent[content] = myJSON.gameQuestions[qnumber].questionDistractors[content];
				}
				gameArray[qnumber] = tempContent;
		
				var tempTitle = [];
				tempTitle["questionTitle"] = myJSON.gameQuestions[qnumber].questionTitle;
				tempTitle["questionImage"] = myJSON.gameQuestions[qnumber].questionImage;
				tempTitle["NumberofAttempts"] = 1;
		
				gameArray[qnumber].unshift(tempTitle);
			
			}
			//stage.removeChild(stage.getChildByName("msg"));
			//play();
			//Selectedgame();
		
			console.log("gameArray" + gameArray);
			Selectedgame();
		}
		
		
		
		
		
		
		
		//-----------------------------json
		
		
		function combo_bk() {
			mychoice = 0; // ערך התחלתי המראה כי לא נבחר נושא למשחק	
		
			//mychoice = 0;
			//console.log(mychoice + "mychoiceison");
			//הוספת הקומבו לבמה
			//stage.removeAllChildren();
			//reset();
		
		
			//הוספת רקע מסך פתיחה
			var Open_background = new lib.Open_background();
			Open_background.name = "Open_background";
			Open_background.x = -10;
			Open_background.y = -10;
			Open_background.scaleX = 1.02;
			Open_background.scaleY = 1.02;
			stage.addChild(Open_background);
		
			//כותרת אי המטמון
			var bk_title = new lib.bk_title();
			bk_title.name = "bk_title";
			bk_title.x = 450;
			bk_title.y = 50;
			stage.addChild(bk_title);
		
			// הוספת טקסט בחר משחק לצד הקומבו
			comboTXT = new createjs.Text(); //הוספת טקסט
			comboTXT.text = "הזן קוד משחק: ";
			comboTXT.name = "comboTXT";
			comboTXT.font = "30px Assistant";
			comboTXT.color = "#5A3114";
			comboTXT.x = 600;
			comboTXT.y = 300;
			stage.addChild(comboTXT);
		
			var instruction2 = new createjs.Text();
			stage.addChild(instruction2);
			instruction2.textAlign = "right";
			instruction2.text = "משחקים לדוגמא: 1021";
			instruction2.x = 650;
			instruction2.y = 335;
			instruction2.font = "20px Assistant";
			instruction2.color = "black";
			instruction2.name = "instruction2";
		
		
		
			//קומבו בחירת משחק
			forcombo = new lib.forcombo();
			forcombo.x = 150;
			forcombo.y = 200;
			forcombo.name = "forcombo";
		
			stage.addChild(forcombo);
			forcombo.startbtn.alpha = 0.3;
			forcombo.startbtn.cursor = "default";
			//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
			//stage.getChildByName("startbtn").gotoAndStop(0);
		
			//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
			$("#dom_overlay_container").on("keyup", "#gameCodeTXT", mycb_change);
			//console.log($("#dom_overlay_container").on("change", "#gameCodeTXT", mycb_change));
		
		}
		
		
		
		//בעת שינוי ערך בקומבו
		function mycb_change(evt) {
			//שמירת הערך שנבחר בקומבו
			//console.log(evt.currentTarget.value);
			mychoice = evt.currentTarget.value;
			//console.log("mychoice" + mychoice);
			//אם נבחר הערך הראשון - "בחר נושא
			if (mychoice == "") {
				//ניטרול כפתור "בחר
				forcombo.startbtn.alpha = 0.3;
				forcombo.startbtn.cursor = "default";
				//forcombo.startbtn.removeEventListener("click", Selectedgame);
				forcombo.startbtn.removeEventListener("click", getTheGame);
			} else {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				forcombo.startbtn.alpha = 1;
				forcombo.startbtn.cursor = "pointer";
				//forcombo.startbtn.addEventListener("click", Selectedgame);
				forcombo.startbtn.addEventListener("click", getTheGame);
		
		
				var music = createjs.Sound.play("blopCharacter");
			}
		}
		
		
		
		// איזה מספר שאלה להציג
		var qnum = 0;
		//var qustions;
		
		//GLOBAL VAR:
		//var questionNum = qnum ; //26.09.2022
		//var randomQuestionNum;//26.09.2022
		//var rand;//26.09.2022
		
		
		
		//משתנים גלובאליים
		var Question;
		var successtotal = 0; //משתנה שמייצג את כמות ההצלחות
		var wrongtotal = 0; //משתנה שמייצג את כמות הטעויות
		var RandQ; //משתנה להגרלת שאלה
		var RandL; //משתנה להגרלת מיקום למסיח
		var choiceAns; //משתנה שמכיל את בחירת השחקן -התשובה
		var timer; //משתנה לספירת הזמן בכל שאלה
		var counter = 30; //משתנה לספירה לאחור
		//console.log(counter);
		
		var counterNoMove = 60; // משתנה לספירת אי תזוזה
		var TimerNoMove; //משתנה לספירת הזמן באי תזוזה
		var timeTotal = 0; //משתנה לסכימת זמן המשק
		var totalScore = 0; //משתנה לסכימת הציון
		
		sumScore = []; //מערך ביניים מכיל ניקוד יחסי של שאלות
		//var grade = 0; //ציון סופי
		
		var forcombo; //משתנה גלובלי קומבו
		var timerTXT;
		var boxSelected = "false";
		var numberM = 0; //משתנה לספירת המסיחים משמש ללולאה וגם למחיקת האלמנט של זכוכית מגדלת
		var glassOn = "false";
		var glassOnQ = "false";
		var talkingTEXT = "";
		var picBig = 0;
		var picIsBig = 0;
		var progressBarSteps; // משתנה של מד התקדמות
		var proOutOf; //משתנה לספירת שאלות מתוך
		var countQ = 0;
		
		//var glassbtn = new lib.glassbtn();
		var soundOn = "true"; //משתנה שבודק האם הסאונד עובד או לא
		
		//משתנה לדילוג
		var skip = 0;
		
		//שאלות המערך
		//צריך בתוך פונקציה
		var Questions = [
			[
				//שאלות מנהיגים
				[
					//שאלה 1
					["מי כיהן כראש ממשלה בישראל?", "", 0],
					["", lib.LeviAshkol, true],
					["זלמן שזר", "", false],
					["משה שרת", "", false],
					["חיים הרצוג", "", false],
					["משה רבינו", "", false],
					["משה דץ", "", false]
				],
		
				[
					// שאלה 2
					["איזה מן ההיגדים הבאים נאמר על ידי הרצל", "", 0],
					["כאן בבאזל יסדתי את מדינת היהודים", "", true],
					["אם תרצו אין זו המחשבה היוצרת את המציאות", "", false],
					["אנו מכריזים בזאת על הקמת מדינה יהודית", "", false],
					["אם אין לחם תאכלו עוגות", "", false]
				],
		
				[
					// שאלה 3
					["מי מבין המנהיגים הבאים עיברת את שם משפחתו גרין?", "", 0],
					["דוד בן גוריון", "", true],
					["", lib.Itzhak_Rabin, false],
					["משה דיין", "", false],
					["שמעון פרס", "", false]
		
				],
		
				[
					// שאלה 4
					["מי היה הנשיא הראשון של מדינת ישראל?", "", 0],
					["חיים ויצמן", "", true],
					["עזר ויצמן", "", false]
		
				],
		
				[
					//שאלה 5
					["היכן קבור זאב ז'בוטינסקי?", lib.ZeevGrave, 0],
					["הר הרצל", "", true],
					["הר הזיתים", "", false],
					["חוות השקמים", "", false],
					["ורשה, פולין", "", false]
				],
		
				[
					//שאלה 6
					["איזה מנהיג/ה כתב את המחזה בוסתן ספרדי?", "", 0],
					["יצחק נבון", "", true],
					["יזהר אשדות", "", false],
					["גולדה מאיר", "", false],
					["נעמי שמר", "", false]
				],
		
				[
					//שאלה 7
					["איזה מנהיג/ה מופיע על שטר 100 שקלים?", lib.bill, 0],
					["יצחק בן צבי", "", true],
					["מנחם בגין", "", false],
					["לאה גולדברג", "", false],
					["בנימין נתניהו", "", false]
				],
		
				[
					// שאלה 8
					["מי היה ראש הממשלה שקיבל את הדרכון הראשון?", "", 0],
					["גולדה מאיר", "", true],
					["אהוד אולמרט", "", false],
					["", lib.Itzhak_Rabin, false],
					["יצחק בן צבי", "", false]
				],
		
				[
					//שאלה 9
					["היכן קבורים מנחם בגין ורעייתו עליזה?", "", 0],
					["הר הזיתים", "", true],
					["הר הרצל", "", false],
					["חוות השקמים", "", false],
					["פתח תקווה", "", false]
				],
		
				[
					// שאלה 10
					["מי המנהיג שנהג לעמוד על הראש?", "", 0],
					["דוד בן גוריון", "", true],
					["משה דיין", "", false],
					["אילן רמון", "", false],
					["גנדי", "", false]
				]
			],
			//מערך שאלות משחק 2
			[
				//שאלות טבע ישראלי
				[
					//שאלה 1
					["מדוע נקבע החוק להגנת פרחי הבר בישראל?", "", 0],
					["כיוון שקטפו אותם והם עמדו להתכלות", "", true],
					["היה צורך להרחיק את בעלי החיים מהפרחים", "", false],
					["פרחי הבר יפים יותר מהפרחים במשתלות", "", false],
					["בכל העולם קיים החוק, לכן גם במדינת ישראל הוחלט להכניס את החוק", "", false]
				],
		
				[
					// שאלה 2
					["איזה פרח מופיע בתמונה?", lib.blueflower, 0],
					["דרדר כחול", "", true],
					["כובע הנזיר", "", false],
					["כלנית", "", false]
				],
		
				[
					// שאלה 3
					["נכון או לא נכון : המשמעות המקורית של המילה אביב היא תבואה לפני הבשלתה", "", 0],
					["נכון", "", true],
					["לא נכון", "", false]
		
				],
		
				[
					// שאלה 4
					["הווניל הוא צמח ממשפחת הסחלביים. בעברית שמו:", "", 0],
					["שנף", "", true],
					["ונילה", "", false],
					["סחלב", "", false]
				],
		
				[
					//שאלה 5
					["איזה פרח מופיע בתמונה?", lib.damflower, 0],
					["דם המכבים", "", true],
					["עירית", "", false],
					["שום משולש", "", false],
					["פרח הפלמנגו", "", false],
					["ורד בר", "", false],
					["דוקרן", "", false]
				],
		
				[
					//שאלה 6
					["נכון או לא נכון: מקור שמה של החמנית הוא ביכולת התפרחת שלה להטות את עצמה לכיוון קרני השמש", "", 0],
					["נכון", "", true],
					["לא נכון", "", false]
				],
		
				[
					//שאלה 7
					["איזה פרח מופיע בתמונה?", lib.kidaflower, 0],
					["קידה שעירה", "", true],
					["חרצית", "", false],
					["חלמונית", "", false],
					["פשתה שעירה", "", false]
				],
		
				[
					// שאלה 8
					["לפי האגדה, איזה פרח היה השראה לכתר המלכות של שלמה?", "", 0],
					["רקפת", "", true],
					["כלנית", "", false],
					["נרקיס", "", false],
					["שושן צחור", "", false],
					["עלה של זית", "", false]
				],
		
				[
					//שאלה 9
					["איזה פרח מופיע בתמונה?", lib.irousflower, 0],
					["אירוס הגלבוע", "", true],
					["צבעוני", "", false],
					["אירוס התבור", "", false]
				],
		
				[
					// שאלה 10
					["מה שמה של המשוררת שכתבה את השיר ואלס להגנת הצומח?", "", 0],
					["נעמי שמר", "", true],
					["ירדנה ארזי", "", false],
					["לאה גולדברג", "", false],
					["נועה קירל", "", false]
				]
			]
		]
		
		
		
		// בחירת תוכן המשחק
			function Selectedgame() {
				//המירו את הג'ייסון למערך שמתאים למשחק שלכם והפעילו את המשחק
				Question = gameArray;
		
				//console.log("mych" + mychoice);
				//if (mychoice == 1) { //מנהיגים
				//Question = gameArray;
				// להגדיר מערך מתאים
				//	startAnimation();
				//} else if (mychoice == 2) { //טבע
				//Question = Questions[1];
				startAnimation();
		
			}
		
		
			function startAnimation() {
				stage.removeAllChildren();
				var openAni = new lib.openAni();
				openAni.name = "openAni";
				stage.addChild(openAni);
				var music = createjs.Sound.play("startAnimationSound"); //ניגון המוזיקה 
		
				var checkbtn = new lib.checkbtn(); // יצירת כפתור המשך המסע
				checkbtn.name = "checkbtn";
				stage.addChild(checkbtn);
				checkbtn.x = 1090;
				checkbtn.y = 650;
				checkbtn.scaleX = 1.4;
				checkbtn.scaleY = 1.4;
				checkbtn.gotoAndStop(0);
				var pausetxt = new createjs.Text(); //יצירת טקסט להמשך המסע
				pausetxt.text = "לדלג";
				pausetxt.font = "22px Assistant"
				pausetxt.color = "white"
				pausetxt.textAlign = "center";
				pausetxt.y = -15;
				checkbtn.addChild(pausetxt); //הוספת הטקסט לכפתור
				checkbtn.cursor = "pointer";
		
				var timer_story = setTimeout(daleg, 12500);
		
				checkbtn.addEventListener("click", daleg); //בלחיצה על המשך-מעבר לפונקציית המשך לסטורי
		
			}
		
			function daleg() {
		
				stage.removeChild(stage.getChildByName("checkbtn"));
				if (skip == 0) {
					skip++;
					story();
				}
			}
		
			function story() {
				stage.removeChild(stage.getChildByName("checkbtn"));
				//stage.removeAllChildren();
				//var music = createjs.Sound.play("startAnimationSound"); //ניגון המוזיקה
				var story_Game = new lib.story_Game();
				story_Game.name = "story_Game";
				stage.addChild(story_Game);
		
				var checkbtn = new lib.checkbtn() // יצירת כפתור המשך המסע
				checkbtn.name = "checkbtn";
				stage.addChild(checkbtn);
				checkbtn.x = 670;
				checkbtn.y = 510;
				checkbtn.scaleX = 1.4;
				checkbtn.scaleY = 1.4;
				checkbtn.gotoAndStop(0);
				var pausetxt = new createjs.Text(); //יצירת טקסט להמשך המסע
				pausetxt.text = "לתחילת המסע";
				pausetxt.font = "22px Assistant"
				pausetxt.color = "white"
				pausetxt.textAlign = "center";
				pausetxt.y = -15;
				checkbtn.addChild(pausetxt); //הוספת הטקסט לכפתור
		
				checkbtn.addEventListener("click", createBK); //בלחיצה על המשך-מעבר לפונקציית המשך משחק
				checkbtn.cursor = "pointer";
		
				//var timer_opening = setTimeout(createBK, 10000);
			}
		
			function createBK() {
				var music = createjs.Sound.stop("startAnimationSound");
				stage.removeAllChildren();
		
				//הוספת רקע לבמה
				var Qbackground = new lib.background_questions(); //רקע
				stage.addChild(Qbackground);
				//Qbackground.addEventListener('mouseover', mouseout_Functions);
		
		
				//הוספת טקסט נושא המשחק
				var gameName = new createjs.Text();
				gameName.font = "25px Assistant";
				gameName.x = 1050
				gameName.y = 18;
				gameName.color = "white";
				stage.addChild(gameName);
				gameName.name = "gameName"
				/*	if (mychoice == 1) {
				 */
				gameName.text = myJSON.gameName;
				/*}
			if (mychoice == 2) {
				gameName.text = "טבע ישראלי"
			}*/
				//כפתור סאונד
				addSoundButton();
		
		
		
				//הוספת מד התקדמות	
				Progress(); //יצירת מד התקדמות
				theGame();
		
			}
		
			function Progress() {
		
				var progressBarBK = new lib.progressBarBK();
				progressBarBK.name = "progressBar";
				//progressBarBK.x = 50;
				//progressBarBK.y = 100	
				stage.addChild(progressBarBK);
		
				var progressBar = new lib.progressBar();
				progressBar.name = "progressBar";
				progressBar.x = 50;
				progressBar.y = 150
		
				stage.addChild(progressBar);
		
				var progressBarFill = new lib.progressBarFill();
				progressBarFill.name = "progressBarFill";
		
				progressBarFill.x = 94;
				progressBarFill.y = 662;
		
				progressBarFill.rotation = 180;
				progressBarFill.scaleY = 0;
				stage.addChild(progressBarFill);
		
				var MadHazahavIcon = new lib.MadHazahavIcon();
				MadHazahavIcon.name = "MadHazahavIcon";
		
		
				stage.addChild(MadHazahavIcon);
		
				//progressBarSteps = 1 / 10; // בכמה אחוזים מד ההתדמות צריך לעלות ביחס למספר השאלות
				//לפי אורך המערך
				progressBarSteps = 1 / parseInt(myJSON.gameQuestions.length);
		
		
				var questionCount = parseInt(myJSON.gameQuestions.length);
		
		
				//מספר שאלות מתוך שהושלמו
				proOutOf = new createjs.Text();
				proOutOf.text = "שאלות במשחק " + questionCount + " / " + countQ;
				proOutOf.name = "proOutOf";
				proOutOf.font = "20px Assistant";
				proOutOf.lineWidth = 70;
				proOutOf.textAlign = "center";
				proOutOf.color = "black";
				proOutOf.x = 80;
				proOutOf.y = 70;
				stage.addChild(proOutOf);
		
			}
		
		
			function CreatePause() {
		
				stage.removeChild(stage.getChildByName("pausebtn"));
		
				var pausebtn = new lib.pausebtn();
				stage.addChild(pausebtn).gotoAndStop(0);
				pausebtn.name = "pausebtn";
				pausebtn.x = 65;
				pausebtn.y = 8;
				pausebtn.scaleX = 0.8;
				pausebtn.scaleY = 0.8;
				pausebtn.cursor = "pointer";
				pausebtn.addEventListener("click", pauseFunc); //בלחיצה על המשך מעבר לפונקציית ניקיון במה
				pausebtn.addEventListener('mouseover', mouseover_Functions);
				pausebtn.addEventListener('mouseout', mouseout_Functions);
			}
			//הוספת כפתור השתק סאונד
			function addSoundButton() {
				stage.removeChild(stage.getChildByName("soundbtn"));
				//var soundbtn;
				var music = createjs.Sound.play("GameSound");
				var soundbtn = new lib.soundbtn();
				stage.addChild(soundbtn).gotoAndStop(0);
				soundbtn.name = "soundbtn";
				soundbtn.x = 10;
				soundbtn.y = 8;
				soundbtn.scaleX = 0.8;
				soundbtn.scaleY = 0.8;
				soundbtn.cursor = "pointer";
				soundbtn.addEventListener('mouseover', mouseover_Functions);
				soundbtn.addEventListener('mouseout', mouseout_Functions);
				soundbtn.addEventListener("click", soundOnOff);
			}
		
			function soundOnOff() {
				if (soundOn == "true") {
					var music = createjs.Sound.stop("GameSound");
					soundOn = "false";
					stage.addChild(soundbtn).gotoAndStop(2);
				} else {
					soundOn = "true"
					var music = createjs.Sound.play("GameSound");
					stage.addChild(soundbtn).gotoAndStop(0);
				}
			}
		
		
		//console.log(Question);
		
		
		
		//פונקציית המשחק
		function theGame() {
		
			//זמן מוקצב לשאלה
			counter = myJSON.qTimeLimit;
			//console.log("זמן מוגדר לשאלה :" + counter);
		
			timerTXT = new createjs.Text(); //הוספת טקסט ספירה לאחור
			timerTXT.text = "00:" + counter;
			timerTXT.name = "timerTXT";
			timerTXT.font = "30px Assistant";
			timerTXT.color = "white";
			timerTXT.x = 200;
			timerTXT.y = 15;
			//איקון זמן
			stage.addChild(timerTXT);
		
			var time_icon = new lib.time_icon();
			time_icon.name = "time_icon";
			time_icon.x = 270;
			time_icon.y = 8;
			time_icon.scaleX = 0.8;
			time_icon.scaleY = 0.8;
			stage.addChild(time_icon);
			//כפתור עצירה
			CreatePause();
			//addSoundButton();
			numberM = 0;
			talkingTEXT = ""; //בועת דיבור של תוכי חווי
			boxSelected = "false";
			//console.log(Question);
			funcRandQ(); //הגרלת מספר שאלה
			//counter = 30;
			//----------------
		
			//Question[RandQ][0][2]=0;
			//console.log("Question[RandQ-1][0][2] " + Question[RandQ][0][2]);
		
			//Question[RandQ][0][2] += 1; //סכימת מספר ההופעות של שאלה
			//console.log("מספר ההופעות של השאלה " + Question[RandQ][0][2]);
		
			//הגדלה של מספר הניסיונות של התא של השאלה שנבחר ב1
			//tryArray[RandQ-1]++;
		
			//console.log("tryArray " + tryArray);
		
			//הכנסה לתוך משתנה כמה פעמים נענתה השאלה
			//var tryAns = Question[randQ][0][2];
			//העלאה ב1, כי השאלה נענתה שוב
			//tryAns++;
			//הכנסה בחזרה למערך
			//Question[randQ][0][2] = tryAns;
			//console.log("tryAns game array" + gameArray);
			//----------
		
		
			//זמן מוקצב לשאלה
			counter = myJSON.qTimeLimit;
			//console.log("זמן מוגדר לשאלה :" + counter);
			timerTXT.text = "00:" + counter; //הגדרת הספירה לאחור
			timer = setInterval(myinterval, 1000); //יצירת ספירה לאחור
		
			var character = new lib.character_move(); //הוספת תוכי לבמה
			character.name = "character";
			character.x = 1130;
			character.y = 240;
			character.scaleY = 0.7;
			character.scaleX = 0.7;
			stage.addChild(character);
			//הוספת בועת דיבור לתוכי
			talkingMoki();
		
			//stage.getChildByName("character").gotoAndPlay(0);
		
		
			//יצירת גזע השאלה
			var Qtitle = new createjs.Text(); //תיבת טקסט שתכיל את השאלה
			Qtitle.name = "Qtitle";
		
		
			if (gameArray[RandQ][0].questionImage == null)
			//if ((Question[RandQ][0][1]) == "") //לשאלה אין תמונה 
			{
				Qtitle.text = gameArray[RandQ][0].questionTitle;
				//Qtitle.text = Question[RandQ][0][0]; //במידה ולא תגריל שאלה ותמקם אותה
				stage.addChild(Qtitle);
				Qtitle.lineWidth = 580; //אורך טקסט בלי תמונה
				Qtitle.textAlign = "right";
				Qtitle.x = 960;
				Qtitle.y = 100;
				Qtitle.font = "25px Assistant";
			} else //לשאלה יש תמונה
			{
		
				Qtitle.text = gameArray[RandQ][0].questionTitle; //הצג טקסט
				stage.addChild(Qtitle);
				Qtitle.lineWidth = 360; //אורך טקסט עם תמונה
				Qtitle.textAlign = "right";
				Qtitle.x = 960;
				Qtitle.y = 100;
				Qtitle.font = "32px Assistant";
				var pic = new createjs.Bitmap((gameArray[RandQ][0].questionImage)).set({
						scaleX: 0.1,
						scaleY: 0.1,
					});
		
				pic.name = "pic"
				pic.x = 420;
				pic.y = 120;
				pic.height = "60px";
				pic.width = "40px";
				//stage.addChild(pic).gotoAndStop(0);
				//pic.addEventListener("mouseover", mouseover_picQuestion);
				//pic.addEventListener("mouseout", mouseout_picQuestion); //מעבר עכבר על תמונה
				stage.addChild(pic);
				var glassbtn = new lib.glassbtn();
				glassbtn.name = "glassbtnQ";
				glassbtn.cursor = "pointer";
				glassbtn.x = 280;
				glassbtn.y = 230;
				stage.addChild(glassbtn);
				glassbtn.gotoAndStop(0);
				glassbtn.addEventListener("click", click_glassbtn);
				glassbtn.addEventListener('mouseover', mouseover_glassbtn);
				glassbtn.addEventListener('mouseout', mouseout_glassbtn);
				glassOnQ = "true"; //משתנה לבדיקה זכוכית מגדלת
			}
		
		
		
			var objectLoc = //מערך של מיקומים להגרלה
			[
				//3 אובייקטים
				[
					[600, 605], //שורה שניה אמצעי
					[300, 605], //שורה שניה שמאלי
					[900, 605], //שורה שניה ימני
				],
				//4 אובייקטים
				[
					[600, 605], //שורה שניה אמצעי
					[300, 605], //שורה שניה שמאלי
					[500, 395], //שורה ראשונה אמצעי
					[800, 395] //שורה ראשנה ימני
				],
				//	5 אובייקטים
				[
					[600, 605], //שורה שניה אמצעי
					[300, 605], //שורה שניה שמאלי
					[900, 605], //שורה שניה ימני
					[500, 395], //שורה ראשונה אמצעי
					[800, 395] //שורה ראשנה ימני
		
				],
				//	 6 אובייקטים
				[
					[600, 605], //שורה שניה אמצעי
					[300, 605], //שורה שניה שמאלי
					[900, 605], //שורה שניה ימני
					[500, 395], //שורה ראשונה אמצעי
					[800, 395], //שורה ראשנה ימני
					[200, 395] //שורה ראשונה שמאלי
				], //2 אובייקטים
				[
					[800, 395], //שורה ראשונה שמאלי
					[500, 395] //שורה ראשונה אמצעי
				]
			]
		
			var Anum = Question[RandQ].length - 1; //משתנה ששומר את מספר המסיחים של השאלה
		
			//יצירת אובייקטים כמספר המסיחים
			for (var i = 1; i <= Question[RandQ].length - 1; i++) {
				//console.log(Question[RandQ].length - 1 + "מספר מסיחים");
		
				var object = new lib.treasureBox_close();
				stage.addChild(object);
		
				object.name = "object" + i;
		
		
		
		
				if (gameArray[RandQ][i].isImage == true) //אם המסיח הוא תמונה
				//if ((gameArray[RandQ][i].isImage) == "true") 
				{
					//הצגת מסיח מסוג תמונה מתוך המערך
		//------------------------------------------------
					//var questImg = new createjs.Bitmap("https://localhost:5001/"+arraygame[currentQuest - 1][0][2]).set({scaleX: 0.15, scaleY: 0.15});
				//	var Answer = new createjs.Bitmap("https://localhost:5001/"+(gameArray[RandQ][i].distractorContent)).set({
					var Answer = new createjs.Bitmap((gameArray[RandQ][i].distractorContent)).set({
						scaleX: 0.1,
						scaleY: 0.1,
					});
					stage.addChild(Answer);
					Answer.name = "Answer" + i;
					//console.log("answer pic is: ");
					//console.log(stage.getChildByName("Answer" + i).event);
					Answer.x = 150;
					Answer.y = -70;
					Answer.width = "50px";
					Answer.hight = "100px";
					///----------------------------------
					//var Answer = new Question[RandQ][i][1](); //הצג תמונה
					//var Answer = new bmp; //הצג תמונה
					//Answer.scaleY = 0.5;
					//Answer.scaleX = 0.5;
					//Answer.X=-300; //Answer.Y=200;
					//Answer.addEventListener("mouseover", mouseover_picAnswer); //מעבר עכבר על תמונה
					//Answer.addEventListener("mouseout", mouseout_picAnswer);
		
				} else {
					var Answer = new createjs.Text();
					Answer.name = "Answer" + i;
					//console.log("gameArray[RandQ][i].answerContent" + gameArray[RandQ][i].distractorContent);
		
					//הצגת מסיח מסוג טקסט מתוך המערך
					Answer.text = gameArray[RandQ][i].distractorContent;
					//Answer.text = Question[RandQ][i][0];
					Answer.font = "16px Assistant";
					Answer.lineWidth = 124; //אורך טקסט בלי תמונה
					Answer.textAlign = "right";
					Answer.x = 250;
					Answer.y = -85;
				}
		
		
				if (Question[RandQ].length - 1 == 3) //אם כמות המסיחים היא 3 
				{
					funcRandL(Anum) //הפונק' מקבלת את מס' המסיחים ומחזרי מיקום רנדומלי
					//console.log("RandL" + RandL);
					//console.log("Anum" + Anum);
					object.x = objectLoc[0][RandL][0];
					object.y = objectLoc[0][RandL][1];
					//if (Question[RandQ][i][0] == "") {
					if (((gameArray[RandQ][i].isImage) == true)) {
		
		
						var glassbtn = new lib.glassbtn();
						glassbtn.name = "glassbtn" + i;
						glassbtn.cursor = "pointer";
						glassbtn.x = objectLoc[0][RandL][0];
						glassbtn.y = objectLoc[0][RandL][1];
						stage.addChild(glassbtn);
						glassbtn.gotoAndStop(0);
						glassbtn.addEventListener("click", click_glassbtn);
						glassbtn.addEventListener('mouseover', mouseover_glassbtn);
						glassbtn.addEventListener('mouseout', mouseout_glassbtn);
						glassOn = "true"; //משתנה לבדיקה זכוכית מגדלת
		
					}
		
					objectLoc[0].splice(RandL, 1); //מחיקת המיקום ממערך המיקומים
		
					Anum = Anum - 1;
		
		
		
		
				} else if (Question[RandQ].length - 1 == 4) //אם כמות המסיחים היא 4
				{
					funcRandL(Anum) //הפונק' מקבלת את מס' המסיחים ומחזרי מיקום רנדומלי
					//console.log("RandL" + RandL)
					//console.log("Anum" + Anum)
					object.x = objectLoc[1][RandL][0]
					object.y = objectLoc[1][RandL][1]
					//אייקון זכוכית מגדלת
					//if (Question[RandQ][i][0] == "") {
					if (((gameArray[RandQ][i].isImage) == true)) {
						var glassbtn = new lib.glassbtn();
						glassbtn.name = "glassbtn" + i;
						glassbtn.cursor = "pointer";
						glassbtn.x = objectLoc[1][RandL][0]
						glassbtn.y = objectLoc[1][RandL][1];
						stage.addChild(glassbtn);
						glassbtn.gotoAndStop(0);
						glassbtn.addEventListener("click", click_glassbtn);
						glassbtn.addEventListener('mouseover', mouseover_glassbtn);
						glassbtn.addEventListener('mouseout', mouseout_glassbtn);
						glassOn = "true"; //משתנה לבדיקה זכוכית מגדלת
					}
					objectLoc[1].splice(RandL, 1); //מחיקת המיקום ממערך המיקומים
					Anum = Anum - 1;
				} else if (Question[RandQ].length - 1 == 6) //אם כמות המסיחים היא 6
				{
					funcRandL(Anum) //הפונק' מקבלת את מס' המסיחים ומחזרי מיקום רנדומלי
					//console.log("RandL" + RandL)
					//console.log("Anum" + Anum)
					object.x = objectLoc[3][RandL][0]
					object.y = objectLoc[3][RandL][1]
					//if (Question[RandQ][i][0] == "") {
					if (((gameArray[RandQ][i].isImage) == true)) {
						var glassbtn = new lib.glassbtn();
						glassbtn.name = "glassbtn" + i;
						glassbtn.cursor = "pointer";
						glassbtn.x = objectLoc[3][RandL][0]
						glassbtn.y = objectLoc[3][RandL][1];
						stage.addChild(glassbtn);
						glassbtn.gotoAndStop(0);
						glassbtn.addEventListener("click", click_glassbtn);
						glassbtn.addEventListener('mouseover', mouseover_glassbtn);
						glassbtn.addEventListener('mouseout', mouseout_glassbtn);
						glassOn = "true"; //משתנה לבדיקה זכוכית מגדלת
					}
		
					objectLoc[3].splice(RandL, 1); //מחיקת המיקום ממערך המיקומים
					Anum = Anum - 1;
		
				} else if (Question[RandQ].length - 1 == 2) //אם כמות המסיחים היא 2
				{
					funcRandL(Anum) //הפונק' מקבלת את מס' המסיחים ומחזרי מיקום רנדומלי
					//console.log("RandL" + RandL)
					//console.log("Anum" + Anum)
					object.x = objectLoc[4][RandL][0];
					object.y = objectLoc[4][RandL][1];
					//if (Question[RandQ][i][0] == "") {
					if (((gameArray[RandQ][i].isImage) == true)) {
						var glassbtn = new lib.glassbtn();
						glassbtn.name = "glassbtn" + i;
						glassbtn.cursor = "pointer";
						glassbtn.x = objectLoc[4][RandL][0]
						glassbtn.y = objectLoc[4][RandL][1];
						stage.addChild(glassbtn);
						glassbtn.gotoAndStop(0);
						glassbtn.addEventListener("click", click_glassbtn);
						glassbtn.addEventListener('mouseover', mouseover_glassbtn);
						glassbtn.addEventListener('mouseout', mouseout_glassbtn);
						glassOn = "true"; //משתנה לבדיקה זכוכית מגדלת
					}
		
		
					objectLoc[4].splice(RandL, 1); //מחיקת המיקום ממערך המיקומים
					Anum = Anum - 1;
		
				} else if (Question[RandQ].length - 1 == 5) //אם כמות המסיחים היא 5
				{
					funcRandL(Anum) //הפונק' מקבלת את מס' המסיחים ומחזרי מיקום רנדומלי
					//console.log("RandL" + RandL)
					//console.log("Anum" + Anum)
					object.x = objectLoc[2][RandL][0];
					object.y = objectLoc[2][RandL][1];
		
					//if (Question[RandQ][i][0] == "") {
					if (((gameArray[RandQ][i].isImage) == true)) {
						var glassbtn = new lib.glassbtn();
						glassbtn.name = "glassbtn" + i;
						glassbtn.cursor = "pointer";
						glassbtn.x = objectLoc[2][RandL][0]
						glassbtn.y = objectLoc[2][RandL][1];
						stage.addChild(glassbtn);
						glassbtn.gotoAndStop(0);
						glassbtn.addEventListener("click", click_glassbtn);
						glassbtn.addEventListener('mouseover', mouseover_glassbtn);
						glassbtn.addEventListener('mouseout', mouseout_glassbtn);
						glassOn = "true"; //משתנה לבדיקה זכוכית מגדלת
					}
					objectLoc[2].splice(RandL, 1); //מחיקת המיקום ממערך המיקומים
					Anum = Anum - 1;
				}
		
		
				object.addChild(Answer); //הצבת מסיח על האובייקט
		
				stage.getChildByName("object" + i).gotoAndStop(0);
				object.cursor = "pointer";
		
				object.addEventListener('mouseover', mouseover_Answers); //מעבר עכבר על מסיחים
				object.addEventListener('mouseout', mouseout_Answers); //יציאה ממעבר עכבר
				object.addEventListener("click", ClickAns); //קליק על בחירת תשובה מסיח
				numberM++; // ספירת מספר המסיחים בשאלה
		
			}
		
		
		}
		
		function talkingMoki() {
		
		
			stage.removeChild(stage.getChildByName("talkingframe"));
		
		
			var talkingframe = new lib.talkingframe();
			talkingframe.name = "talkingframe"
			stage.addChild(talkingframe);
			talkingframe.x = 1120;
			talkingframe.y = 160;
			talkingframe.scaleX = 0.7;
			talkingframe.scaleY = 0.7;
			var talkingtxt = new createjs.Text();
			talkingtxt.font = "24px Assistant";
			talkingtxt.lineWidth = 200;
			talkingtxt.color = "black";
			talkingtxt.textAlign = "right";
			talkingtxt.y = -70;
			talkingtxt.x = 90;
			talkingframe.addChild(talkingtxt);
		
			if (talkingTEXT == "") {
				talkingtxt.text = "לחצו על התשובה הנכונה";
			}
			if (talkingTEXT == "1") {
				talkingtxt.text = "לבדוק את תשובתך";
			}
			if (talkingTEXT == "2") {
				talkingtxt.text = "לא נורא, נסו בשאלה הבאה";
			}
			if (talkingTEXT == "3") {
				talkingtxt.text = "נכון מאוד! כל הכבוד!";
			}
			//if (talkingTEXT == "4"){
			//	talkingtxt.text = "לשאלה הבאה";
			//}
		
		}
		
		//פונקציה של הגרלת שאלה
		function funcRandQ() {
			//var myrand = Math.floor(Math.random());
			//RandQ = Math.floor(Math.random() * Question[0].length)
			RandQ = Math.floor(Math.random() * Question.length); // לבדוק שזה מגיע ל10
			//console.log(" RandQ שאלה" + RandQ);
		}
		
		
		//הגרלת מיקום מסיחים
		//X=מספר המסיחים להגרלה
		function funcRandL(x) {
			RandL = Math.floor(Math.random() * x);
		}
		
		
		//ריחוף מעל כפתור לבדיקה
		function CheckbtnOver(evt) {
			stage.getChildByName(evt.currentTarget.name).gotoAndStop(1);
		
		}
		
		//יציאה מריחוף על כפתור בדיקה
		function CheckbtnOut(evt) {
			stage.getChildByName(evt.currentTarget.name).gotoAndStop(0);
		}
		
		//פונקציה ריחוף מעל מסיח
		function mouseover_Answers(evt) {
		
			if (boxSelected == "false" && picBig == 0) {
		
				stage.getChildByName(evt.currentTarget.name).gotoAndStop(1);
		
			}
			//boxSelected = "false";
		}
		
		
		//פונקצית יציאה ממעבר על מסיח
		function mouseout_Answers(evt) {
		
			if (boxSelected == "false" && picBig == 0) {
				stage.getChildByName(evt.currentTarget.name).gotoAndStop(0);
		
			}
		}
		
		
		//פונצקית ריחוף על מסיח עם תמונה
		//function mouseover_picAnswer(evt) {
		//if (boxSelected == "false") {
		//	stage.getChildByName(evt.currentTarget.name).gotoAndStop(1);
		//	var r = (evt.currentTarget).name.slice(-1);
		//	stage.getChildByName(evt.currentTarget.name).getChildByName("Answer" + r).scaleX = 1;
		//	stage.getChildByName(evt.currentTarget.name).getChildByName("Answer" + r).scaleY = 1;
		//if (picBig == 1) {
		//	stage.getChildByName(evt.currentTarget.name).gotoAndStop(4);
		//	}
		//}
		//}
		
		//פונקציית יציאה ממעבר עכבר על מסיח עם תמונה
		//function mouseout_picAnswer(evt) {
		//if (boxSelected == "false") {
		//	stage.getChildByName(evt.currentTarget.name).gotoAndStop(0);
		//if (picBig == 1) {
		//	stage.getChildByName(evt.currentTarget.name).gotoAndStop(4);
		//}
		//}
		//}
		
		
		function mouseover_glassbtn(evt) { //פונקציה מעבר עכבר על זכוכית מגדלת
			if (glassOn == "true" || glassOnQ == "true") {
		
				(evt.currentTarget).gotoAndStop(1);
		
		
			} else {
				(evt.currentTarget).cursor = "default";
			}
		}
		
		function mouseout_glassbtn(evt) { //פונקציה מעבר עכבר על זכוכית מגדלת
			if (glassOn == "true" || glassOnQ == "true") {
		
				(evt.currentTarget).gotoAndStop(0);
		
			} else {
		
				(evt.currentTarget).cursor = "default";
		
			}
		}
		
		
		//קליק על זכוכית מגדלת
		function click_glassbtn(evt) {
			var r = (evt.currentTarget).name.slice(-1);
			if (glassOn == "true") {
				if (picBig == 0) {
					picIsBig = r;
					stage.getChildByName("object" + r).getChildByName("Answer" + r).scaleX = 0.3;
					stage.getChildByName("object" + r).getChildByName("Answer" + r).scaleY = 0.3;
		
					//stage.getChildByName("object" + r).getChildByName("Answer" + r).x -= 300;
					//stage.getChildByName("object" + r).getChildByName("Answer" + r).y += 10;
					stage.getChildByName("object" + r).gotoAndStop(4); //שינוי תיבת האוצר להגדלה
					/*	
				stage.getChildByName("object" + r).getChildByName("Answer" + r).setChildIndex = function(child,0) {
				var kids = this.children, l=kids.length;
				if (child.parent != this || index < 0 || index >= l) { return; }
				for (var i=0;i<l;i++) {
					if (kids[i] == child) { break; }
				}
				if (i==l || i == index) { return; }
				kids.splice(i,1);
				kids.splice(index,0,child);
		*/
					//var pause_popup = new lib.pause_popup(); //תוסיף מסך לבן
					//stage.addChild(pause_popup);
					//	pause_popup.name = "pause_popup";
					//	pause_popup.addChild(stage.getChildByName("object" + r).getChildByName("Answer" + r));
		
		
					//var BiggerPic =stage.addChild(stage.getChildByName("object" + r).getChildByName("Answer" + r));
					//stage.addChild(BiggerPic);
		
					picBig = 1;
		
				} else {
					if (picBig == 1) {
						stage.getChildByName("object" + r).getChildByName("Answer" + r).scaleX = 0.1;
						stage.getChildByName("object" + r).getChildByName("Answer" + r).scaleY = 0.1;
						//stage.getChildByName("object" + r).getChildByName("Answer" + r).x += 300;
						//stage.getChildByName("object" + r).getChildByName("Answer" + r).y -= 10;
						//stage.getChildByName("object" + r).gotoAndStop(0);
						picBig = 0;
						picIsBig = 0;
		
					}
				}
			}
		
			if (glassOnQ == "true") {
		
				if (picBig == 1) {
					//	stage.getChildByName("pic").gotoAndStop(0);
					stage.getChildByName("pic").scaleX = 0.1;
					stage.getChildByName("pic").scaleY = 0.1;
					//stage.getChildByName("pic").y -= 30;
					//stage.getChildByName("pic").x -= 20;
		
					picBig = 0;
		
				} else {
					//stage.getChildByName("pic").gotoAndStop(1);
					stage.getChildByName("pic").scaleX = 0.3;
					stage.getChildByName("pic").scaleY = 0.3;
					//stage.getChildByName("pic").y += 30;
					//stage.getChildByName("pic").x += 20;
					picBig = 1;
				}
			}
		}
		
		
		//כפתור השהיה
		function mouseover_Functions(evt) {
			if (evt.currentTarget.name == "pausebtn" || evt.currentTarget.name == "soundbtn") {
				(evt.currentTarget).gotoAndStop(1);
			}
		
		}
		//כפתור השהיה
		function mouseout_Functions(evt) {
			if (evt.currentTarget.name == "pausebtn" || evt.currentTarget.name == "soundbtn" && soundOn == "true") {
				(evt.currentTarget).gotoAndStop(0);
			}
			if (soundOn == "false") {
				(evt.currentTarget).gotoAndStop(2);
			}
		}
		
		
		//כפתור השהיה
		function pauseFunc() //השהייה
		{
		
			stage.removeChild(stage.getChildByName("checkbtn")); //מחיקת כפתור לבדיקה
			stage.removeChild(stage.getChildByName("Qtitle")); //מחיקת גזע השאלה
			stage.removeChild(stage.getChildByName("pic")); //מחיקת התמונה מגזע השאלה
			stage.removeChild(stage.getChildByName("character")); //מחיקת הדמות תוכי
			stage.removeChild(stage.getChildByName("characterHappy")); //מחיקת הדמות תוכי
			stage.removeChild(stage.getChildByName("talkingframe")); //מחיקת בועת דיבור
			//stage.removeChild(stage.getChildByName("pause_popup")); //הסרת רקע מסך עצירה
			//stage.removeChild(stage.getChildByName("pausetxt")); //הסרת מאפיין עצירה
			stage.removeChild(stage.getChildByName("zzzz")); //
			stage.removeChild(stage.getChildByName("GameButton")); //מחיקת כפתור
			//stage.removeChild(stage.getChildByName("pause_title")); //מחיקת כותרת PAUSE
			stage.removeChild(stage.getChildByName("glassbtnQ")); //מחיקת זכוכית מגדלת
			stage.removeChild(stage.getChildByName("pausebtn"));
		
		
			//addSoundButton(); //הוספת כפתור סאונד מחדש
		
			//מחיקת מסיחים
			for (var i = 1; i <= Question[RandQ].length - 1; i++) {
				stage.removeChild(stage.getChildByName("object" + i));
				stage.removeChild(stage.getChildByName("Answer" + i));
				stage.removeChild(stage.getChildByName("glassbtn" + i));
		
			}
		
			//numberM = 0;
			//glassOn = "false"; //משתנה לבדיקה זכוכית מגדלת
			//glassOnQ = "false";
		
			var pause_popup = new lib.pause_popup(); //תוסיף מסך לבן
			stage.addChild(pause_popup);
			pause_popup.name = "pause_popup";
			//pause_popup.x = 60;
			//pause_popup.y = 40;
			var zzz = new lib.zzz();
			zzz.name = "zzz";
			zzz.y = 100;
			zzz.x = 20;
		
			stage.addChild(zzz);
			var music = createjs.Sound.play("sleep");
		
			var checkbtn = new lib.checkbtn() // יצירת כפתור המשך המסע
			checkbtn.name = "checkbtn";
			pause_popup.addChild(checkbtn);
			checkbtn.x = 650;
			checkbtn.y = 580;
			checkbtn.scaleX = 1.4;
			checkbtn.scaleY = 1.4;
			checkbtn.gotoAndStop(0);
			var pausetxt = new createjs.Text(); //יצירת טקסט להמשך המסע
			pausetxt.text = "להמשך המסע";
			pausetxt.font = "22px Assistant"
			pausetxt.color = "white"
			pausetxt.textAlign = "center";
			pausetxt.y = -15;
			checkbtn.addChild(pausetxt); //הוספת הטקסט לכפתור
		
			checkbtn.addEventListener("click", clean); //בלחיצה על המשך-מעבר לפונקציית המשך משחק
			checkbtn.cursor = "pointer";
			clearTimeout(timer); //תעצור את הטיימר
		
			//טקטס של מסך עצירה
		
			var pause_title = new createjs.Text();
			pause_title.text = "מוקי התוכי יצא למנוחה...";
			pause_popup.addChild(pause_title);
			pause_title.name = "pause_title";
			pause_title.font = "36px Assistant"
			pause_title.lineWidth = 200; //אורך הטקסט
			pause_title.textAlign = "right";
			pause_title.color = "#5A3114"
			pause_title.x = 670;
			pause_title.y = 230;
			//console.log("timerTXT.text: " + timerTXT.text);
		}
		//}
		
		
		function stillHere() //פונקציית השייה לאחר המון זמן
		{
		
			clearTimeout(TimerNoMove); //תעצור את הטיימר
		
			stage.removeChild(stage.getChildByName("checkbtn")); //מחיקת כפתור לבדיקה
			stage.removeChild(stage.getChildByName("Qtitle")); //מחיקת גזע השאלה
			stage.removeChild(stage.getChildByName("pic")); //מחיקת התמונה מגזע השאלה
			stage.removeChild(stage.getChildByName("character")); //מחיקת הדמות תוכי
			stage.removeChild(stage.getChildByName("characterHappy")); //מחיקת הדמות תוכי
			stage.removeChild(stage.getChildByName("talkingframe")); //מחיקת בועת דיבור
			//stage.removeChild(stage.getChildByName("pause_popup")); //הסרת רקע מסך עצירה
			//stage.removeChild(stage.getChildByName("pausetxt")); //הסרת מאפיין עצירה
			stage.removeChild(stage.getChildByName("zzzz")); //
			stage.removeChild(stage.getChildByName("GameButton")); //מחיקת כפתור
			//stage.removeChild(stage.getChildByName("pause_title")); //מחיקת כותרת PAUSE
			stage.removeChild(stage.getChildByName("glassbtnQ")); //מחיקת זכוכית מגדלת
			stage.removeChild(stage.getChildByName("pausebtn"));
		
		
			//addSoundButton(); //הוספת כפתור סאונד מחדש
		
			/*//מחיקת מסיחים
			for (var i = 1; i <= Question[RandQ].length - 1; i++) {
				stage.removeChild(stage.getChildByName("object" + i));
				stage.removeChild(stage.getChildByName("Answer" + i));
				stage.removeChild(stage.getChildByName("glassbtn" + i));
		
			}*/
		
			//numberM = 0;
			//glassOn = "false"; //משתנה לבדיקה זכוכית מגדלת
			//glassOnQ = "false";
		
			var pause_popup = new lib.pause_popup(); //תוסיף מסך לבן
			stage.addChild(pause_popup);
			pause_popup.name = "pause_popup";
			//pause_popup.x = 60;
			//pause_popup.y = 40;
		
			var checkbtn = new lib.checkbtn(); // יצירת כפתור המשך המסע
			checkbtn.name = "checkbtn";
			pause_popup.addChild(checkbtn)
			checkbtn.x = 650;
			checkbtn.y = 580;
			checkbtn.scaleX = 1.4;
			checkbtn.scaleY = 1.4;
			checkbtn.gotoAndStop(0);
			var pausetxt = new createjs.Text(); //יצירת טקסט להמשך המסע
			pausetxt.text = "להמשך המסע";
			pausetxt.font = "22px Assistant"
			pausetxt.color = "white"
			pausetxt.textAlign = "center";
			pausetxt.y = -15;
			checkbtn.addChild(pausetxt); //הוספת הטקסט לכפתור
		
			checkbtn.addEventListener("click", clean); //בלחיצה על המשך-מעבר לפונקציית המשך משחק
			checkbtn.cursor = "pointer";
			clearTimeout(timer); //תעצור את הטיימר
		
			//טקטס של מסך עצירה
		
			var pause_title = new createjs.Text();
			pause_title.text = "אתם עוד פה? יש לנו עוד מטבעות אוצר לאסוף";
			pause_popup.addChild(pause_title);
			pause_title.name = "pause_title";
			pause_title.font = "36px Assistant"
			pause_title.lineWidth = 200; //אורך הטקסט
			pause_title.textAlign = "right";
			pause_title.color = "#5A3114"
			pause_title.x = 670;
			pause_title.y = 230;
			//console.log("timerTXT.text: " + timerTXT.text);
		}
		
		
		function ClickAns(evt) {
		
			for (var i = 1; i <= Question[RandQ].length - 1; i++) {
				stage.getChildByName("object" + i).gotoAndStop(0);
			}
		
			boxSelected = "true";
			//תיבת אוצר משקשקת //
		
			//מסיח משנה צבע לכתום
		
			stage.getChildByName(evt.currentTarget.name).gotoAndPlay(7);
			var music = createjs.Sound.play("ShakingBox");
			//console.log("evt.currentTarget.name" + evt.currentTarget.name);
		
			//טקסט חיווי של מוכי התוכי משתנה
			talkingTEXT = "1";
			talkingMoki();
		
			stage.removeChild(stage.getChildByName("checkbtn")); //מחיקת כפתור לבדיקה
		
			var checkbtn = new lib.checkbtn() //יצירת כפתור לבדיקה
			checkbtn.name = "checkbtn"
			stage.addChild(checkbtn);
			checkbtn.x = 1120;
			checkbtn.y = 170;
			checkbtn.scaleX = 0.8;
			checkbtn.scaleY = 0.8;
		
			var checktxt = new createjs.Text(); //יצירת טקסט לבדיקה
			checktxt.text = "לבדיקה";
			checktxt.font = "25px Assistant";
			checktxt.color = "white";
			checktxt.textAlign = "center";
			checktxt.y = -15;
			checkbtn.addChild(checktxt); //הוספת הטקסט לכפתור
			checkbtn.cursor = "pointer";
			stage.getChildByName("checkbtn").gotoAndStop(0);
		
			checkbtn.addEventListener("click", CheckAns); //הוספת מאזין לקליק של כפתור בדיקה
			checkbtn.addEventListener('mouseover', CheckbtnOver); //הוספת מאזין לריחוף 
			checkbtn.addEventListener('mouseout', CheckbtnOut); //הוספת מאזין ליציאה מריחוף 
		
			choiceAns = evt.currentTarget.name //שמירת שם האוביקט שנלחץ כמשתנה
		
		
			//console.log("choiceAns" + choiceAns);
		
		
		
			//תיבת אוצר משקשקת // מסגרת מסיח משנה צבע לכתום
		}
		
		//פונקציה שבודקת תשובה ומגיבה בהתאם
		function CheckAns() {
		
			glassOn = "false"; //משתנה לבדיקה זכוכית מגדלת
			glassOnQ = "false";
		
			clearTimeout(timer); //תעצור את הטיימר
			var thetime = myJSON.qTimeLimit;
			timeTotal += thetime - timerTXT.text.slice(-2); //זמן כולל של המשחק
		
			TimerNoMove = setInterval(myNoMoveCounter, 1000); // טיימר מתחיל של אי תזוזה
		
			//console.log("timeTotal " + timeTotal);
			for (var i = 1; i <= Question[RandQ].length - 1; i++) { //לולואה מחיקת מאזינים למסיחים לאחר בחירת תשובה
				stage.getChildByName("object" + i).removeEventListener('mouseover', mouseover_Answers); //מעבר עכבר על מסיחים
				stage.getChildByName("object" + i).removeEventListener('mouseout', mouseout_Answers); //יציאה ממעבר עכבר
				stage.getChildByName("object" + i).removeEventListener("click", ClickAns); // מחיקת מאזין קליק 
				stage.getChildByName("object" + i).cursor = "default";
			}
			if (choiceAns == "object1") //אם התשובה נכונה
			{
				RightAnswer(); //תפעיל פונקציה לתשובה נכונה
		
				//console.log("מיקום מסיח" + stage.getChildByName("choiceAns").x)
		
		
			} else //תשובה שגויה
			{
				//החלפת מסגרת מסיח לאדום
				//משוב של תוכי אומר לא נורא
		
				talkingTEXT = "2";
				talkingMoki();
				//כפתור המשך מופיע
				//התשובה שגויה נספרת
				//השאלה תחזור בסוף
		
			var countRespone = Question[RandQ][0].NumberofAttempts; //ציין בשאלה במערך מסיחים מספר ניסיון נוסף
				Question[RandQ][0].NumberofAttempts = countRespone + 1; //הוסף למספר הניסיון הקיים עוד 1		
				
				wrongtotal++; //תוסיף למשתנה שגיאות
				//console.log("wrongtotal" + wrongtotal);
		
		
				stage.getChildByName(choiceAns).gotoAndStop(2);
		
				//אנימציה גולגולת
				var music = createjs.Sound.play("shakingBones");
		
				//var timer_skull = setTimeout(skullfunc, 1500);
				var timer_continueB = setTimeout(continueButton, 2500);
				//var comment = new lib.boxWrong(); //משוב על אי הצלחה-איקס
				//comment.name = "comment"
				//	comment.x = 230
				//comment.y = 80
				//stage.getChildByName(choiceAns).addChild(comment);
		
			}
		}
		
		//function skullfunc() {
		
		//var skullAni = new lib.skullAni();
		//	skullAni.name = "skullAni";
		//skullAni.x = 650;
		//skullAni.y = 450;
		//skullAni.scaleX = 10;
		//skullAni.scaleY = 10;
		//stage.addChild(skullAni);
		//}
		
		function continueButton() {
			stage.removeChild(stage.getChildByName("skullAni"));
		
			stage.removeChild(stage.getChildByName("checkbtn")); //מחיקת כפתור לבדיקה
			var music = createjs.Sound.play("blopCharacter");
			var checkbtn = new lib.checkbtn(); //יצירת כפתור המשך
			checkbtn.name = "checkbtn"
			stage.addChild(checkbtn);
			checkbtn.x = 1120;
			checkbtn.y = 170;
			checkbtn.scaleX = 0.8;
			checkbtn.scaleY = 0.8;
			var checktxt = new createjs.Text(); //יצירת טקסט לכפתור המשך
			checktxt.text = "להמשך";
			checktxt.font = "25px Assistant"
			checktxt.color = "white"
			checktxt.textAlign = "center";
			checktxt.y = -15;
			checkbtn.addChild(checktxt);
			checkbtn.cursor = "pointer";
			stage.getChildByName("checkbtn").gotoAndStop(0);
			checkbtn.addEventListener("click", clean); //בלחיצה על כפתור המשך-מעבר לשאלה הבאה
			checkbtn.addEventListener('mouseover', CheckbtnOver); //הוספת מאזין לריחוף 
			checkbtn.addEventListener('mouseout', CheckbtnOut); //הוספת מאזין ליציאה מריחוף 
			//clearTimeout(TimerNoMove); //תעצור את הטיימר של אי תזוזה
		}
		
		
		//פונקציה לניקוי הבמה עבור השאלה הבאה
		function clean() {
			clearTimeout(TimerNoMove); //תעצור את הטיימר של אי תזוזה	
			counterNoMove = 60;
		
			stage.removeChild(stage.getChildByName("checkbtn")); //מחיקת כפתור לבדיקה
			stage.removeChild(stage.getChildByName("Qtitle")); //מחיקת גזע השאלה
			stage.removeChild(stage.getChildByName("pic")); //מחיקת התמונה מגזע השאלה
			stage.removeChild(stage.getChildByName("character")); //מחיקת הדמות תוכי
			stage.removeChild(stage.getChildByName("talkingframe")); //מחיקת בועת דיבור
			stage.removeChild(stage.getChildByName("pause_popup")); //הסרת רקע מסך עצירה
			stage.removeChild(stage.getChildByName("pausetxt")); //הסרת מאפיין עצירה
			stage.removeChild(stage.getChildByName("zzz"));
			stage.removeChild(stage.getChildByName("GameButton")); //מחיקת כפתור
			stage.removeChild(stage.getChildByName("pause_title")); //מחיקת כותרת PAUSE
			stage.removeChild(stage.getChildByName("glassbtnQ")); //מחיקת התמונה מגזע השאלה
			stage.removeChild(stage.getChildByName("timerTXT")); //מחיקת טיימר
			stage.removeChild(stage.getChildByName("time_icon")); //מחיקת אייקון טיימר
		
			//addSoundButton(); //הוספת כפתור סאונד מחדש
		
			for (var i = 1; i <= numberM; i++) //מחיקת מסיחים
			{
				stage.removeChild(stage.getChildByName("object" + i));
				stage.removeChild(stage.getChildByName("Answer" + i));
				stage.removeChild(stage.getChildByName("glassbtn" + i));
			}
			numberM = 0;
			glassOn = "false"; //משתנה לבדיקה זכוכית מגדלת
			glassOnQ = "false";
			//console.log(numberM + "numberM =");
			theGame(); //המשך משחק
		}
		
		function myinterval(){ //פונקציית טיימר
			timerTXT.text = "00:" + counter;
			counter--;
			if (counter <= 9) {
				timerTXT.text = "00:0" + counter;
		
			}
			if (counter == 0) {
				clearTimeout(timer); //תעצור את הטיימר
				//timeout();
				Timeover_popup();
			}
		}
		
		function myNoMoveCounter() //פונקציית שהיה ארוכה
		{
			counterNoMove--;
		
			if (counterNoMove == 0) {
		
				stillHere(); //מעבר לפופ אפ, האם אתם עדיין פה
		
			}
		}
		
		
		function RightAnswer() { //תפעיל פונקציה לתשובה נכונה
		
			//הופעת מסגרת ירוקה חיווי תשובה נכונה
			stage.getChildByName(choiceAns).gotoAndStop(3);
		
		
			// חיווי בועת דיבור של מוקי התוכי משתנה לכל הכבוד
			talkingTEXT = "3";
			talkingMoki();
		
			stage.removeChild(stage.getChildByName("character")); //מחיקת הדמות תוכי
		
			var characterHappy = new lib.CharacterHappy(); //הוספת תוכי לבמה
			characterHappy.name = "character";
			characterHappy.x = 1130;
			characterHappy.y = 240;
			characterHappy.scaleY = 0.7;
			characterHappy.scaleX = 0.7;
			stage.addChild(characterHappy).gotoAndPlay(0);
		
		
			// אנימציית מטבעות קופצים למד הזהב
			//אנימציה מטבעות
			var timer_coins = setTimeout(coinsFunc, 400);
		
			//------------חישוב ציון
			var countRespone = Question[RandQ][0].NumberofAttempts; //שלוף את מספר ניסיונות המענה לשאלה
			//console.log(countRespone + " countRespone");
			var totalQuestions= parseInt(myJSON.gameQuestions.length);
			var countGrade = 100 / (totalQuestions * countRespone); //בצע חישוב של נוסחת ציון ביניים
			sumScore.push(countGrade); //דחוף ציון למערך ציון ביניים
			
				//myJSON.gameQuestions[qnumber].NumberofAttempts
			//-------------
		
			successtotal++; //הוספה למספר התשובות הנכונות 
		
			//חיווי מספר שאלות שנענו נכונה
			countQ++;
			proOutOf.text = "שאלות במשחק " + (myJSON.gameQuestions.length) + " / " + countQ;
		
		
			// מד הזהב מתמלא בהתאם
			var timer_scale = setTimeout(fillBar, 2100);
		
		
			//console.log("successtotal" + successtotal);
		
			//מחיקת השאלה ממאגר השאלות במערך
			Question.splice(RandQ, 1);
			var timer_nextq = setTimeout(nextqFunc, 2601);
		
		}
		
		function nextqFunc() {
			if (successtotal == myJSON.gameQuestions.length) //אם כל התשובות נענו-מסך סיום
			{
				var music = createjs.Sound.play("taDa");
				var timer_EndGame = setTimeout(endofGame, 3000);
			} else {
				continueButton();
				stage.removeChild(stage.getChildByName("characterHappy"));
				//הוספת כפתור המשך
			}
		}
		function fillBar() {
			stage.getChildByName("progressBarFill").scaleY += progressBarSteps;
			var music = createjs.Sound.play("coinsFillBar");
		}
		
		function coinsFunc() {
			//var coinsAni = new lib.coinsAni();
			//coinsAni.name = "coinsAni";
			//coinsAni.x = 610;
			//coinsAni.y = 500;
			//coinsAni.scaleX = 0.8;
			//coinsAni.scaleY = 0.8;
			//stage.addChild(coinsAni);
			//stage.getChildByName("coinsAni").gotoAndPlay(0);
		
		}
		
		function stopGameMusic() {
			var music = createjs.Sound.stop("GameSound");
		}
		
		function endofGame() {
			stopGameMusic();
			stage.removeAllChildren(); //נקה את הבמה לגמרי
			//var BKֹ_empty = new lib.BKֹ_empty(); //יצירת רקע ריק
			//stage.addChild(BKֹ_empty);
			//אנימצית סיום
		
			var music = createjs.Sound.play("EndAnimation");
			var final_animation = new lib.final_animation();
			final_animation.name = "final_animation";
			stage.addChild(final_animation);
			var timer_ending = setTimeout(ending, 6500);
		
		}
		
		
		
		function ending() {
		
			clearTimeout(TimerNoMove); //תעצור את הטיימר
		
		
			//----------------------	///חישוב הציון
		for (i = 0; i <= sumScore.length - 1; i++) { //בצע חישוב של ציון המשחק
						totalScore = totalScore + sumScore[i]; //סכום את מערך ביניים של ציון המשחק
		}
		
		
			//----------------------	///חישוב הציון	
		
		
		
			stage.removeChild(stage.getChildByName("final_animation"));
		
			//הוספת רקע
			var final_score_background = new lib.final_score_background();
			stage.addChild(final_score_background);
			final_score_background.name = "final_score_background";
		
			final_score_background.scaleY = 0.5;
			final_score_background.scaleX = 0.5; //הוספת אלמנט של רקע סיום 
			//final_score_background.x = 25;
			final_score_background.y = 10;
		
			var Final_score_window = new lib.Final_score_window();
			Final_score_window.name = "Final_score_window";
			Final_score_window.scaleX = 0.7;
			Final_score_window.scaleY = 0.7;
			Final_score_window.x = 280;
			Final_score_window.y = 100;
		
			stage.addChild(Final_score_window);
		
			//כותרת מסך סיום
			var titleEnd = new createjs.Text();
			titleEnd.text = "כל הכבוד המשחק הסתיים"
			titleEnd.name = "titleEnd";
			titleEnd.textAlign = "center"
			titleEnd.lineWidth = 440;
			titleEnd.font = "30px Assistant";
			titleEnd.color = "#5A3114";
			titleEnd.x = 610;
			titleEnd.y = 170;
			stage.addChild(titleEnd);
		
			//כותרת מסך סיום
			var titleEnd2 = new createjs.Text();
			titleEnd2.text = "כל מטבעות האוצר נאספו"
			titleEnd2.name = "titleEnd";
			titleEnd2.textAlign = "center"
			titleEnd2.lineWidth = 440;
			titleEnd2.font = "30px Assistant";
			titleEnd2.color = "#5A3114";
			titleEnd2.x = 610;
			titleEnd2.y = 215;
			stage.addChild(titleEnd2);
		
			var end_score = new createjs.Text(); //תיבת טקסט לציון סופי
			end_score.text = " ציון: " + Math.round(totalScore);
			end_score.name = "end_score";
			end_score.font = "20px Assistant"
			end_score.color = "#5A3114"
			end_score.textAlign = "center";
			end_score.x = 790
			end_score.y = 300
			stage.addChild(end_score);
		
			var min = Math.floor(timeTotal / 60) //משתנה לדקות
			//console.log(min)
			var sec = timeTotal % 60 //משתנה לשניות
			console.log(sec)
			var Totalfinal_time = new createjs.Text(); //תיבת טקסט לתזמון המשחק
			Totalfinal_time.text = "זמן כולל: " + min + ":" + sec;
			Totalfinal_time.name = "end_time";
			Totalfinal_time.font = "20px Assistant"
			Totalfinal_time.color = "#5A3114"
			Totalfinal_time.textAlign = "center";
			Totalfinal_time.x = 620
			Totalfinal_time.y = 300
			stage.addChild(Totalfinal_time);
		
		
			var end_worng = new createjs.Text(); //תיבת טקסט למסר הטעויות
			end_worng.text = "מספר שגיאות: " + wrongtotal
			end_worng.name = "end_worng";
			end_worng.font = "20px Assistant"
			end_worng.color = "#5A3114"
			end_worng.textAlign = "center";
			end_worng.x = 440
			end_worng.y = 300
			stage.addChild(end_worng);
		
			var moki = new lib.character_move();
			moki.name = "moki";
			moki.x = 720;
			moki.y = 400;
			moki.scaleY = 0.7;
			moki.scaleX = 0.7;
			//moki.loop = 1000;
			stage.addChild(moki).gotoAndPlay(0);
		
		
			var treasureBox_gold = new lib.treasureBox_gold();
			treasureBox_gold.name = "treasureBox_gold";
			treasureBox_gold.x = 340;
			treasureBox_gold.y = 430;
			treasureBox_gold.scaleY = 0.8;
			treasureBox_gold.scaleX = 0.8;
			stage.addChild(treasureBox_gold).gotoAndStop(1);
		
			//יצירת כפתור "שחק שוב"
			var againButton = new lib.brown_btn(); //שחק שוב כפתור 
			againButton.name = "againButton";
			againButton.x = 620;
			againButton.y = 470;
			againButton.scaleX = 0.7;
			againButton.scaleY = 0.7;
			againButton.cursor = "pointer"
			stage.addChild(againButton);
		
			var againtxt = new createjs.Text(); //יצירת טקסט שחק שוב
			againtxt.text = "שחק שוב";
			againtxt.font = "24px Assistant"
			againtxt.color = "white"
			againtxt.textAlign = "center";
			againtxt.y = -15;
			againButton.addChild(againtxt) //הוספת הטקסט לכפתור
			againButton.addEventListener("click", againClean);
		
			//יצירת כפתור חזור למסך הראשי
			var startOverBtn = new lib.startOverBtn(); //   חזרה למסך הראשי
			startOverBtn.name = "startOverBtn";
			startOverBtn.x = 620;
			startOverBtn.y = 540;
			startOverBtn.scaleX = 0.7;
			startOverBtn.scaleY = 0.7;
			startOverBtn.cursor = "pointer"
			stage.addChild(startOverBtn);
		
			var startOverT = new createjs.Text(); //יצירת טקסט שחק שוב
			startOverT.text = "חזרה למסך הראשי";
			startOverT.font = "24px Assistant"
			startOverT.color = "black"
			startOverT.textAlign = "center";
			startOverT.y = -15;
			startOverBtn.addChild(startOverT);
			startOverBtn.addEventListener("click", againClean);
		}
		
		//function cleanScreen() //פונקציה לניקוי מסך עצירה
		//{
		//	stage.removeChild(stage.getChildByName("checkbtn")); //מחיקת כפתור המשך
		//stage.removeChild(stage.getChildByName("title_timeOut")); //מחיקת כותרת
		//}
		
		async function againClean(evt) {
			stage.removeAllChildren();
			var music = createjs.Sound.stop("EndAnimation");
			reset();
			if (evt.currentTarget.name == "againButton") {
				createArray();
				//Selectedgame(); //המשך משחק
			}
			if (evt.currentTarget.name == "startOverBtn") {
				combo_bk();
			}
		}
		
		
		function Timeover_popup() {
		
			TimeoverFunc(); //פונקציה למחיקת המסיחים וכל מה שנמצא ברקע
		
			var timeover_popup = new lib.timeover_popup();
			stage.addChild(timeover_popup);
			timeover_popup.name = "timeover_popup";
			timeover_popup.x = 160;
			timeover_popup.y = 60;
			timeover_popup.scaleX = 0.55;
			timeover_popup.scaleY = 0.55;
		
			var timeover_title = new createjs.Text();
			timeover_title.text = "אוי נגמר הזמן! נסו בשאלה הבאה";
			timeover_popup.addChild(timeover_title);
			timeover_title.name = "timeover_title";
			timeover_title.font = "100px Assistant"
			timeover_title.lineWidth = 700; //אורך הטקסט
			timeover_title.textAlign = "center";
			timeover_title.color = "#5A3114"
			timeover_title.x = 900;
			timeover_title.y = 500;
		
		
			var checkbtn = new lib.checkbtn() // יצירת כפתור המשך לשאלה הבאה
			checkbtn.name = "checkbtn";
			timeover_popup.addChild(checkbtn)
			checkbtn.x = 950;
			checkbtn.y = 1000;
			checkbtn.scaleX = 2.5;
			checkbtn.scaleY = 2.5;
			checkbtn.cursor = "pointer";
			checkbtn.gotoAndStop(0);
		
		
			checkbtn.cursor = "pointer";
		
		
			var TimeoverTXT = new createjs.Text(); //יצירת טקסט לשאלה הבאה
			TimeoverTXT.text = "לשאלה הבאה";
			TimeoverTXT.font = "22px Assistant"
			TimeoverTXT.color = "white"
			TimeoverTXT.textAlign = "center";
			TimeoverTXT.y = -15;
			checkbtn.addChild(TimeoverTXT); //הוספת הטקסט לכפתור
		
			checkbtn.addEventListener("click", clean_TimeoverFunc); //בלחיצה על המשך-מעבר לפונקציית המשך משחק
		
			var music = createjs.Sound.play("pirate");
		
		}
		
		
		//נגמר הזמן - פופ אפ
		function TimeoverFunc() //נגמר הזמן
		{
		
			timer = 0; //משתנה לספירת הזמן בכל שאלה
			counter = 30; //משתנה לספירה לאחור
			timerTXT = "";
		
			stage.removeChild(stage.getChildByName("checkbtn")); //מחיקת כפתור לבדיקה
			stage.removeChild(stage.getChildByName("Qtitle")); //מחיקת גזע השאלה
			stage.removeChild(stage.getChildByName("pic")); //מחיקת התמונה מגזע השאלה
			stage.removeChild(stage.getChildByName("character")); //מחיקת הדמות תוכי
			stage.removeChild(stage.getChildByName("characterHappy")); //מחיקת הדמות תוכי
			stage.removeChild(stage.getChildByName("talkingframe")); //מחיקת בועת דיבור
			stage.removeChild(stage.getChildByName("timerTXT")); //הסרת מאפיין זמן
			stage.removeChild(stage.getChildByName("glassbtnQ")); //מחיקת זכוכית מגדלת
			stage.removeChild(stage.getChildByName("time_icon")); //מחיקת אייקון טיימר
			stage.removeChild(stage.getChildByName("pausebtn")); //מחיקת אייקון השהייה
		
			//addSoundButton(); //הוספת כפתור סאונד מחדש
		
			//מחיקת מסיחים
			for (var i = 1; i <= Question[RandQ].length - 1; i++) {
				stage.removeChild(stage.getChildByName("object" + i));
				stage.removeChild(stage.getChildByName("Answer" + i));
				stage.removeChild(stage.getChildByName("glassbtn" + i));
		
			}
		
			numberM = 0;
			glassOn = "false"; //משתנה לבדיקה זכוכית מגדלת
			glassOnQ = "false";
		}
		
		//מחיקת פופ אפ נגמר הזמן
		function clean_TimeoverFunc() {
			stage.removeChild(stage.getChildByName("checkbtn")); //מחיקת כפתור לבדיקה
			stage.removeChild(stage.getChildByName("timeover_popup")); //מחיקת חלונית פופ אפ
			stage.removeChild(stage.getChildByName("timeover_title")); //מחיקת התמונה מגזע השאלה
			stage.removeChild(stage.getChildByName("TimeoverTXT")); //מחיקת טקסט
		
			theGame();
		}
		
		
		function reset() {
		
			// איזה מספר שאלה להציג
			qnum = 0;
			//var qustions;
		
			//משתנים גלובאליים
			successtotal = 0; //משתנה שמייצג את כמות ההצלחות
			wrongtotal = 0; //משתנה שמייצג את כמות הטעויות
			RandQ; //משתנה להגרלת שאלה
			RandL; //משתנה להגרלת מיקום למסיח
			choiceAns; //משתנה שמכיל את בחירת השחקן -התשובה
			timer; //משתנה לספירת הזמן בכל שאלה
			//counter = ; //משתנה לספירה לאחור
			counter = 30;
			counterNoMove = 60; // משתנה לספירת אי תזוזה
			TimerNoMove; //משתנה לספירת הזמן באי תזוזה
			timeTotal = 0; //משתנה לסכימת זמן המשק
			totalScore = 0; //משתנה לסכימת הציון
			sumScore = []; //מערך ביניים מכיל ניקוד יחסי של שאלות
		
			//var forcombo; //משתנה גלובלי קומבו
			timerTXT;
			boxSelected = "false";
			numberM = 0; //משתנה לספירת המסיחים משמש ללולאה וגם למחיקת האלמנט של זכוכית מגדלת
			glassOn = "false";
			glassOnQ = "false";
			talkingTEXT = "";
			picBig = 0;
			picIsBig = 0;
			progressBarSteps; // משתנה של מד התקדמות
			proOutOf; // משתנה לספירת שאלות מתוך שנענו נכונה
			countQ = 0;
			skip = 0;
		
		
		
		
			//var glassbtn = new lib.glassbtn();
			//var soundOn = true; //משתנה שבודק האם הסאונד עובד או לא
		
			//שאלות המערך
		
			Questions = [
				[
					//שאלות מנהיגים
					[
						//שאלה 1
						["מי כיהן כראש ממשלה בישראל?", "", 0],
						["", lib.LeviAshkol, true],
						["זלמן שזר", "", false],
						["משה שרת", "", false],
						["חיים הרצוג", "", false],
						["דודו טופז", "", false],
						["משה דץ", "", false]
					],
		
					[
						// שאלה 2
						["איזה מן ההיגדים הבאים נאמר על ידי הרצל", "", 0],
						["כאן בבאזל יסדתי את מדינת היהודים", "", true],
						["אם תרצו אין זו המחשבה היוצרת את המציאות", "", false],
						["אנו מכריזים בזאת על הקמת מדינה יהודית", "", false],
						["אם אין לחם תאכלו עוגות", "", false]
					],
		
					[
						// שאלה 3
						["מי מבין המנהיגים הבאים עיברת את שם משפחתו גרין?", "", 0],
						["דוד בן גוריון", "", true],
						["", lib.Itzhak_Rabin, false],
						["משה דיין", "", false],
						["שמעון פרס", "", false]
		
					],
		
					[
						// שאלה 4
						["מי היה הנשיא הראשון של מדינת ישראל?", "", 0],
						["חיים ויצמן", "", true],
						["עזר ויצמן", "", false]
		
					],
		
					[
						//שאלה 5
						["היכן קבור זאב ז'בוטינסקי?", lib.ZeevGrave, 0],
						["הר הרצל", "", true],
						["הר הזיתים", "", false],
						["חוות השקמים", "", false],
						["ורשה, פולין", "", false]
					],
		
					[
						//שאלה 6
						["איזה מנהיג/ה כתב את המחזה בוסתן ספרדי?", "", 0],
						["יצחק נבון", "", true],
						["יזהר אשדות", "", false],
						["גולדה מאיר", "", false],
						["נעמי שמר", "", false]
					],
		
					[
						//שאלה 7
						["איזה מנהיג/ה מופיע על שטר 100 שקלים?", lib.bill, 0],
						["יצחק בן צבי", "", true],
						["מנחם בגין", "", false],
						["לאה גולדברג", "", false],
						["בנימין נתניהו", "", false]
					],
		
					[
						// שאלה 8
						["מי היה ראש הממשלה שקיבל את הדרכון הראשון?", "", 0],
						["גולדה מאיר", "", true],
						["אהוד אולמרט", "", false],
						["", lib.Itzhak_Rabin, false],
						["יצחק בן צבי", "", false]
					],
		
					[
						//שאלה 9
						["היכן קבורים מנחם בגין ורעייתו עליזה?", "", 0],
						["הר הזיתים", "", true],
						["הר הרצל", "", false],
						["חוות השקמים", "", false],
						["פתח תקווה", "", false]
					],
		
					[
						// שאלה 10
						["מי המנהיג שנהג לעמוד על הראש?", "", 0],
						["דוד בן גוריון", "", true],
						["משה דיין", "", false],
						["אילן רמון", "", false],
						["גנדי", "", false]
					]
				],
				//מערך שאלות משחק 2
				[
					//שאלות טבע ישראלי
					[
						//שאלה 1
						["מדוע נקבע החוק להגנת פרחי הבר בישראל?", "", 0],
						["כיוון שקטפו אותם והם עמדו להתכלות", "", true],
						["היה צורך להרחיק את בעלי החיים מהפרחים", "", false],
						["פרחי הבר יפים יותר מהפרחים במשתלות", "", false],
						["בכל העולם קיים החוק, לכן גם במדינת ישראל הוחלט להכניס את החוק", "", false]
					],
		
					[
						// שאלה 2
						["איזה פרח מופיע בתמונה?", lib.blueflower, 0],
						["דרדר כחול", "", true],
						["כובע הנזיר", "", false],
						["כלנית", "", false]
					],
		
					[
						// שאלה 3
						["נכון או לא נכון : המשמעות המקורית של המילה אביב היא תבואה לפני הבשלתה", "", 0],
						["נכון", "", true],
						["לא נכון", "", false]
		
					],
		
					[
						// שאלה 4
						["הווניל הוא צמח ממשפחת הסחלביים. בעברית שמו:", "", 0],
						["שנף", "", true],
						["ונילה", "", false],
						["סחלב", "", false]
					],
		
					[
						//שאלה 5
						["איזה פרח מופיע בתמונה?", lib.damflower, 0],
						["דם המכבים", "", true],
						["עירית", "", false],
						["שום משולש", "", false],
						["פרח הפלמנגו", "", false],
						["שום מחומש", "", false],
						["דוקרן", "", false]
					],
		
					[
						//שאלה 6
						["נכון או לא נכון: מקור שמה של החמנית הוא ביכולת התפרחת שלה להטות את עצמה לכיוון קרני השמש", "", 0],
						["נכון", "", true],
						["לא נכון", "", false]
					],
		
					[
						//שאלה 7
						["איזה פרח מופיע בתמונה?", lib.kidaflower, 0],
						["קידה שעירה", "", true],
						["חרצית", "", false],
						["חלמונית", "", false],
						["פשתה שעירה", "", false]
					],
		
					[
						// שאלה 8
						["לפי האגדה, איזה פרח היה השראה לכתר המלכות של שלמה?", "", 0],
						["רקפת", "", true],
						["כלנית", "", false],
						["נרקיס", "", false],
						["שושן צחור", "", false],
						["עלה של זית", "", false]
					],
		
					[
						//שאלה 9
						["איזה פרח מופיע בתמונה?", lib.irousflower, 0],
						["אירוס הגלבוע", "", true],
						["צבעוני", "", false],
						["אירוס התבור", "", false]
					],
		
					[
						// שאלה 10
						["מה שמה של המשוררת שכתבה את השיר ואלס להגנת הצומח?", "", 0],
						["נעמי שמר", "", true],
						["ירדנה ארזי", "", false],
						["לאה גולדברג", "", false],
						["נועה קירל", "", false]
					]
				]
			]
		
			Question;
		
			//-----------------------------json
		
		
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '27213010F045244784D8F41C3C160378',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_24.png", id:"CachedBmp_24"},
		{src:"images/CachedBmp_23.png", id:"CachedBmp_23"},
		{src:"images/CachedBmp_22.png", id:"CachedBmp_22"},
		{src:"images/background_questionsjpg.png", id:"background_questionsjpg"},
		{src:"images/final_score_background.png", id:"final_score_background"},
		{src:"images/Golda_Meir.jpg", id:"Golda_Meir"},
		{src:"images/timeover_popUp.png", id:"timeover_popUp"},
		{src:"images/TreasureIsland_atlas_1.png", id:"TreasureIsland_atlas_1"},
		{src:"images/TreasureIsland_atlas_2.png", id:"TreasureIsland_atlas_2"},
		{src:"images/TreasureIsland_atlas_3.png", id:"TreasureIsland_atlas_3"},
		{src:"images/TreasureIsland_atlas_4.png", id:"TreasureIsland_atlas_4"},
		{src:"images/TreasureIsland_atlas_5.png", id:"TreasureIsland_atlas_5"},
		{src:"images/TreasureIsland_atlas_6.png", id:"TreasureIsland_atlas_6"},
		{src:"images/TreasureIsland_atlas_7.png", id:"TreasureIsland_atlas_7"},
		{src:"images/TreasureIsland_atlas_8.png", id:"TreasureIsland_atlas_8"},
		{src:"images/TreasureIsland_atlas_9.png", id:"TreasureIsland_atlas_9"},
		{src:"images/TreasureIsland_atlas_10.png", id:"TreasureIsland_atlas_10"},
		{src:"images/TreasureIsland_atlas_11.png", id:"TreasureIsland_atlas_11"},
		{src:"sounds/blopCharacter.mp3", id:"blopCharacter"},
		{src:"sounds/coinsFillBar.mp3", id:"coinsFillBar"},
		{src:"sounds/EndAnimation.mp3", id:"EndAnimation"},
		{src:"sounds/GameSound.mp3", id:"GameSound"},
		{src:"sounds/openChest.mp3", id:"openChest"},
		{src:"sounds/pirate.mp3", id:"pirate"},
		{src:"sounds/shakingBones.mp3", id:"shakingBones"},
		{src:"sounds/ShakingBox.mp3", id:"ShakingBox"},
		{src:"sounds/sleep.mp3", id:"sleep"},
		{src:"sounds/sound_win_coin.mp3", id:"sound_win_coin"},
		{src:"sounds/startAnimationSound.mp3", id:"startAnimationSound"},
		{src:"sounds/taDa.mp3", id:"taDa"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js", id:"an.CSS"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"}
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
an.compositions['27213010F045244784D8F41C3C160378'] = {
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
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
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