// Garden Gnome Software - Skin
// Pano2VR 5.0.1/15068
// Filename: flow-IX-2.ggsk
// Generated seg dez 19 21:50:44 2016

function pano2vrSkin(player, base) {
  var ggSkinVars = [];
  var me = this;
  var flag = false;
  this.player = player;
  this.player.skinObj = this;
  this.divSkin = player.divSkin;
  this.ggUserdata = me.player.userdata;
  this.lastSize = { w: -1, h: -1 };
  var basePath = "";
  // auto detect base path
  if (base == "?") {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      var src = scripts[i].src;
      if (src.indexOf("skin.js") >= 0) {
        var p = src.lastIndexOf("/");
        if (p >= 0) {
          basePath = src.substr(0, p + 1);
        }
      }
    }
  } else if (base) {
    basePath = base;
  }
  this.elementMouseDown = [];
  this.elementMouseOver = [];
  var cssPrefix = "";
  var domTransition = "transition";
  var domTransform = "transform";
  var prefixes = "Webkit,Moz,O,ms,Ms".split(",");
  var i;
  if (typeof document.body.style["transform"] == "undefined") {
    for (var i = 0; i < prefixes.length; i++) {
      if (
        typeof document.body.style[prefixes[i] + "Transform"] !== "undefined"
      ) {
        cssPrefix = "-" + prefixes[i].toLowerCase() + "-";
        domTransition = prefixes[i] + "Transition";
        domTransform = prefixes[i] + "Transform";
      }
    }
  }

  this.player.setMargins(0, 0, 0, 0);

  this.updateSize = function(startElement) {
    var stack = [];
    stack.push(startElement);
    while (stack.length > 0) {
      var e = stack.pop();
      if (e.ggUpdatePosition) {
        e.ggUpdatePosition();
      }
      if (e.hasChildNodes()) {
        for (var i = 0; i < e.childNodes.length; i++) {
          stack.push(e.childNodes[i]);
        }
      }
    }
  };

  parameterToTransform = function(p) {
    var hs =
      "translate(" +
      p.rx +
      "px," +
      p.ry +
      "px) rotate(" +
      p.a +
      "deg) scale(" +
      p.sx +
      "," +
      p.sy +
      ")";
    return hs;
  };

  this.findElements = function(id, regex) {
    var r = [];
    var stack = [];
    var pat = new RegExp(id, "");
    stack.push(me.divSkin);
    while (stack.length > 0) {
      var e = stack.pop();
      if (regex) {
        if (pat.test(e.ggId)) r.push(e);
      } else {
        if (e.ggId == id) r.push(e);
      }
      if (e.hasChildNodes()) {
        for (var i = 0; i < e.childNodes.length; i++) {
          stack.push(e.childNodes[i]);
        }
      }
    }
    return r;
  };

  this.addSkin = function() {
    var hs = "";
    this.ggCurrentTime = new Date().getTime();
    this._sfo = document.createElement("div");
    this._sfo.ggId = "SFO";
    this._sfo.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    this._sfo.ggVisible = true;
    this._sfo.className = "ggskin ggskin_container ";
    this._sfo.ggType = "container";
    hs = "";
    hs += "height : 20px;";
    hs += "left : 139px;";
    hs += "position : absolute;";
    hs += "top : 172px;";
    hs += "visibility : inherit;";
    hs += "width : 100px;";
    this._sfo.setAttribute("style", hs);
    this._sfo.style[domTransform + "Origin"] = "50% 50%";
    me._sfo.ggIsActive = function() {
      return false;
    };
    me._sfo.ggElementNodeId = function() {
      return me.player.getCurrentNode();
    };
    this._sfo.ggUpdatePosition = function() {};
    this.divSkin.appendChild(this._sfo);
    this._yosmeite = document.createElement("div");
    this._yosmeite.ggId = "Yosmeite";
    this._yosmeite.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    this._yosmeite.ggVisible = true;
    this._yosmeite.className = "ggskin ggskin_container ";
    this._yosmeite.ggType = "container";
    hs = "";
    hs += "height : 20px;";
    hs += "left : 129px;";
    hs += "position : absolute;";
    hs += "top : 137px;";
    hs += "visibility : inherit;";
    hs += "width : 100px;";
    this._yosmeite.setAttribute("style", hs);
    this._yosmeite.style[domTransform + "Origin"] = "50% 50%";
    me._yosmeite.ggIsActive = function() {
      return false;
    };
    me._yosmeite.ggElementNodeId = function() {
      return me.player.getCurrentNode();
    };
    this._yosmeite.ggUpdatePosition = function() {};
    this.divSkin.appendChild(this._yosmeite);
    this._deathvalley = document.createElement("div");
    this._deathvalley.ggId = "Death-Valley";
    this._deathvalley.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    this._deathvalley.ggVisible = true;
    this._deathvalley.className = "ggskin ggskin_container ";
    this._deathvalley.ggType = "container";
    hs = "";
    hs += "height : 20px;";
    hs += "left : 220px;";
    hs += "position : absolute;";
    hs += "top : 166px;";
    hs += "visibility : inherit;";
    hs += "width : 100px;";
    this._deathvalley.setAttribute("style", hs);
    this._deathvalley.style[domTransform + "Origin"] = "50% 50%";
    me._deathvalley.ggIsActive = function() {
      return false;
    };
    me._deathvalley.ggElementNodeId = function() {
      return me.player.getCurrentNode();
    };
    this._deathvalley.ggUpdatePosition = function() {};
    this.divSkin.appendChild(this._deathvalley);
    this.divSkin.ggUpdateSize = function(w, h) {
      me.updateSize(me.divSkin);
    };
    this.divSkin.ggViewerInit = function() {};
    this.divSkin.ggLoaded = function() {};
    this.divSkin.ggReLoaded = function() {};
    this.divSkin.ggLoadedLevels = function() {};
    this.divSkin.ggReLoadedLevels = function() {};
    this.divSkin.ggEnterFullscreen = function() {};
    this.divSkin.ggExitFullscreen = function() {};
    this.skinTimerEvent();
  };
  this.hotspotProxyClick = function(id) {};
  this.hotspotProxyOver = function(id) {};
  this.hotspotProxyOut = function(id) {};
  this.changeActiveNode = function(id) {
    me.ggUserdata = me.player.userdata;
  };
  this.skinTimerEvent = function() {
    setTimeout(function() {
      me.skinTimerEvent();
    }, 10);
    me.ggCurrentTime = new Date().getTime();
  };
  function SkinHotspotClass(skinObj, hotspot) {
    var me = this;
    var flag = false;
    this.player = skinObj.player;
    this.skin = skinObj;
    this.hotspot = hotspot;
    var nodeId = String(hotspot.url);
    nodeId = nodeId.charAt(0) == "{" ? nodeId.substr(1, nodeId.length - 2) : "";
    this.ggUserdata = this.skin.player.getNodeUserdata(nodeId);
    this.elementMouseDown = [];
    this.elementMouseOver = [];

    this.findElements = function(id, regex) {
      return me.skin.findElements(id, regex);
    };

    if (hotspot.skinid == "interaction-climb") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-climb";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 261px;";
      hs += "position : absolute;";
      hs += "top : 277px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        return me.player.getCurrentNode() == this.ggElementNodeId();
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_249 = document.createElement("div");
      this._svg_249__img = document.createElement("img");
      this._svg_249__img.className = "ggskin ggskin_svg";
      this._svg_249__img.setAttribute("src", basePath + "images/svg_249.svg");
      this._svg_249__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_249__img["ondragstart"] = function() {
        return false;
      };
      this._svg_249.appendChild(this._svg_249__img);
      this._svg_249.ggId = "Svg 249";
      this._svg_249.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_249.ggVisible = true;
      this._svg_249.className = "ggskin ggskin_svg ";
      this._svg_249.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_249.setAttribute("style", hs);
      this._svg_249.style[domTransform + "Origin"] = "50% 50%";
      me._svg_249.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_249.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_249.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_249);
      this._svg_257 = document.createElement("div");
      this._svg_257__img = document.createElement("img");
      this._svg_257__img.className = "ggskin ggskin_svg";
      this._svg_257__img.setAttribute("src", basePath + "images/svg_257.svg");
      this._svg_257__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_257__img["ondragstart"] = function() {
        return false;
      };
      this._svg_257.appendChild(this._svg_257__img);
      this._svg_257.ggId = "Svg 257";
      this._svg_257.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_257.ggVisible = true;
      this._svg_257.className = "ggskin ggskin_svg ";
      this._svg_257.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_257.setAttribute("style", hs);
      this._svg_257.style[domTransform + "Origin"] = "50% 50%";
      me._svg_257.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_257.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_257.onclick = function() {
        me._cardclimb.ggVisible = !me._cardclimb.ggVisible;
        me._cardclimb.style[domTransition] = "none";
        me._cardclimb.style.visibility =
          me._cardclimb.ggVisible &&
          (Number(me._cardclimb.style.opacity) > 0 ||
            !me._cardclimb.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardclimbtext.ggVisible = !me._cardclimbtext.ggVisible;
        me._cardclimbtext.style[domTransition] = "none";
        me._cardclimbtext.style.visibility =
          me._cardclimbtext.ggVisible &&
          (Number(me._cardclimbtext.style.opacity) > 0 ||
            !me._cardclimbtext.style.opacity)
            ? "inherit"
            : "hidden";
        me._closeclimb.ggVisible = !me._closeclimb.ggVisible;
        me._closeclimb.style[domTransition] = "none";
        me._closeclimb.style.visibility =
          me._closeclimb.ggVisible &&
          (Number(me._closeclimb.style.opacity) > 0 ||
            !me._closeclimb.style.opacity)
            ? "inherit"
            : "hidden";
      };
      this._svg_257.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_257);
      this._svg_35 = document.createElement("div");
      this._svg_35__img = document.createElement("img");
      this._svg_35__img.className = "ggskin ggskin_svg";
      this._svg_35__img.setAttribute("src", basePath + "images/svg_35.svg");
      this._svg_35__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_35__img["ondragstart"] = function() {
        return false;
      };
      this._svg_35.appendChild(this._svg_35__img);
      this._svg_35.ggId = "Svg 35";
      this._svg_35.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_35.ggVisible = true;
      this._svg_35.className = "ggskin ggskin_svg ";
      this._svg_35.ggType = "svg";
      hs = "";
      hs += "height : 12px;";
      hs += "left : -39px;";
      hs += "position : absolute;";
      hs += "top : 26px;";
      hs += "visibility : inherit;";
      hs += "width : 84px;";
      this._svg_35.setAttribute("style", hs);
      this._svg_35.style[domTransform + "Origin"] = "50% 50%";
      me._svg_35.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_35.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_35.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_35);
      this._cardclimb = document.createElement("div");
      this._cardclimb__img = document.createElement("img");
      this._cardclimb__img.className = "ggskin ggskin_image";
      this._cardclimb__img.setAttribute(
        "src",
        basePath + "images/cardclimb.png"
      );
      this._cardclimb__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardclimb__img.className = "ggskin ggskin_image";
      this._cardclimb__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardclimb__img);
      this._cardclimb.appendChild(this._cardclimb__img);
      this._cardclimb.ggId = "card-climb";
      this._cardclimb.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardclimb.ggVisible = false;
      this._cardclimb.className = "ggskin ggskin_image ";
      this._cardclimb.ggType = "image";
      hs = "";
      hs += "height : 258px;";
      hs += "left : -135px;";
      hs += "position : absolute;";
      hs += "top : -79px;";
      hs += "visibility : hidden;";
      hs += "width : 260px;";
      this._cardclimb.setAttribute("style", hs);
      this._cardclimb.style[domTransform + "Origin"] = "50% 50%";
      me._cardclimb.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardclimb.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardclimb.ggUpdatePosition = function() {};
      this._cardclimbtext = document.createElement("div");
      this._cardclimbtext__img = document.createElement("img");
      this._cardclimbtext__img.className = "ggskin ggskin_svg";
      this._cardclimbtext__img.setAttribute(
        "src",
        basePath + "images/cardclimbtext.svg"
      );
      this._cardclimbtext__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardclimbtext__img["ondragstart"] = function() {
        return false;
      };
      this._cardclimbtext.appendChild(this._cardclimbtext__img);
      this._cardclimbtext.ggId = "card-climb-text";
      this._cardclimbtext.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardclimbtext.ggVisible = false;
      this._cardclimbtext.className = "ggskin ggskin_svg ";
      this._cardclimbtext.ggType = "svg";
      hs = "";
      hs += "height : 84px;";
      hs += "left : 22px;";
      hs += "position : absolute;";
      hs += "top : 159px;";
      hs += "visibility : hidden;";
      hs += "width : 213px;";
      this._cardclimbtext.setAttribute("style", hs);
      this._cardclimbtext.style[domTransform + "Origin"] = "50% 50%";
      me._cardclimbtext.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardclimbtext.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardclimbtext.ggUpdatePosition = function() {};
      this._cardclimb.appendChild(this._cardclimbtext);
      this.__div.appendChild(this._cardclimb);
      this._closeclimb = document.createElement("div");
      this._closeclimb__img = document.createElement("img");
      this._closeclimb__img.className = "ggskin ggskin_svg";
      this._closeclimb__img.setAttribute(
        "src",
        basePath + "images/closeclimb.svg"
      );
      this._closeclimb__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closeclimb__img["ondragstart"] = function() {
        return false;
      };
      this._closeclimb.appendChild(this._closeclimb__img);
      this._closeclimb.ggId = "close-climb";
      this._closeclimb.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._closeclimb.ggVisible = false;
      this._closeclimb.className = "ggskin ggskin_svg ";
      this._closeclimb.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 48px;";
      hs += "left : 92px;";
      hs += "position : absolute;";
      hs += "top : -96px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closeclimb.setAttribute("style", hs);
      this._closeclimb.style[domTransform + "Origin"] = "50% 50%";
      me._closeclimb.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closeclimb.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closeclimb.onclick = function() {
        me._closeclimb.style[domTransition] = "none";
        me._closeclimb.style.visibility = "hidden";
        me._closeclimb.ggVisible = false;
        me._cardclimb.style[domTransition] = "none";
        me._cardclimb.style.visibility = "hidden";
        me._cardclimb.ggVisible = false;
        me._cardclimbtext.style[domTransition] = "none";
        me._cardclimbtext.style.visibility = "hidden";
        me._cardclimbtext.ggVisible = false;
      };
      this._closeclimb.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closeclimb);
    } else if (hotspot.skinid == "interaction-zion") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-zion";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 261px;";
      hs += "position : absolute;";
      hs += "top : 277px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        return me.player.getCurrentNode() == this.ggElementNodeId();
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_333 = document.createElement("div");
      this._svg_333__img = document.createElement("img");
      this._svg_333__img.className = "ggskin ggskin_svg";
      this._svg_333__img.setAttribute("src", basePath + "images/svg_333.svg");
      this._svg_333__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_333__img["ondragstart"] = function() {
        return false;
      };
      this._svg_333.appendChild(this._svg_333__img);
      this._svg_333.ggId = "Svg 333";
      this._svg_333.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_333.ggVisible = true;
      this._svg_333.className = "ggskin ggskin_svg ";
      this._svg_333.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_333.setAttribute("style", hs);
      this._svg_333.style[domTransform + "Origin"] = "50% 50%";
      me._svg_333.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_333.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_333.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_333);
      this._svg_259 = document.createElement("div");
      this._svg_259__img = document.createElement("img");
      this._svg_259__img.className = "ggskin ggskin_svg";
      this._svg_259__img.setAttribute("src", basePath + "images/svg_259.svg");
      this._svg_259__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_259__img["ondragstart"] = function() {
        return false;
      };
      this._svg_259.appendChild(this._svg_259__img);
      this._svg_259.ggId = "Svg 259";
      this._svg_259.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_259.ggVisible = true;
      this._svg_259.className = "ggskin ggskin_svg ";
      this._svg_259.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_259.setAttribute("style", hs);
      this._svg_259.style[domTransform + "Origin"] = "50% 50%";
      me._svg_259.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_259.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_259.onclick = function() {
        me._cardzion.ggVisible = !me._cardzion.ggVisible;
        me._cardzion.style[domTransition] = "none";
        me._cardzion.style.visibility =
          me._cardzion.ggVisible &&
          (Number(me._cardzion.style.opacity) > 0 ||
            !me._cardzion.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardziontext.ggVisible = !me._cardziontext.ggVisible;
        me._cardziontext.style[domTransition] = "none";
        me._cardziontext.style.visibility =
          me._cardziontext.ggVisible &&
          (Number(me._cardziontext.style.opacity) > 0 ||
            !me._cardziontext.style.opacity)
            ? "inherit"
            : "hidden";
        me._closezion.ggVisible = !me._closezion.ggVisible;
        me._closezion.style[domTransition] = "none";
        me._closezion.style.visibility =
          me._closezion.ggVisible &&
          (Number(me._closezion.style.opacity) > 0 ||
            !me._closezion.style.opacity)
            ? "inherit"
            : "hidden";
      };
      this._svg_259.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_259);
      this._svg_37 = document.createElement("div");
      this._svg_37__img = document.createElement("img");
      this._svg_37__img.className = "ggskin ggskin_svg";
      this._svg_37__img.setAttribute("src", basePath + "images/svg_37.svg");
      this._svg_37__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_37__img["ondragstart"] = function() {
        return false;
      };
      this._svg_37.appendChild(this._svg_37__img);
      this._svg_37.ggId = "Svg 37";
      this._svg_37.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_37.ggVisible = true;
      this._svg_37.className = "ggskin ggskin_svg ";
      this._svg_37.ggType = "svg";
      hs = "";
      hs += "height : 10px;";
      hs += "left : -13px;";
      hs += "position : absolute;";
      hs += "top : 26px;";
      hs += "visibility : inherit;";
      hs += "width : 27px;";
      this._svg_37.setAttribute("style", hs);
      this._svg_37.style[domTransform + "Origin"] = "50% 50%";
      me._svg_37.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_37.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_37.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_37);
      this._cardzion = document.createElement("div");
      this._cardzion__img = document.createElement("img");
      this._cardzion__img.className = "ggskin ggskin_image";
      this._cardzion__img.setAttribute("src", basePath + "images/cardzion.png");
      this._cardzion__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardzion__img.className = "ggskin ggskin_image";
      this._cardzion__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardzion__img);
      this._cardzion.appendChild(this._cardzion__img);
      this._cardzion.ggId = "card-zion";
      this._cardzion.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardzion.ggVisible = false;
      this._cardzion.className = "ggskin ggskin_image ";
      this._cardzion.ggType = "image";
      hs = "";
      hs += "height : 258px;";
      hs += "left : -120px;";
      hs += "position : absolute;";
      hs += "top : -82px;";
      hs += "visibility : hidden;";
      hs += "width : 260px;";
      this._cardzion.setAttribute("style", hs);
      this._cardzion.style[domTransform + "Origin"] = "50% 50%";
      me._cardzion.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardzion.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardzion.ggUpdatePosition = function() {};
      this._cardziontext = document.createElement("div");
      this._cardziontext__img = document.createElement("img");
      this._cardziontext__img.className = "ggskin ggskin_svg";
      this._cardziontext__img.setAttribute(
        "src",
        basePath + "images/cardziontext.svg"
      );
      this._cardziontext__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardziontext__img["ondragstart"] = function() {
        return false;
      };
      this._cardziontext.appendChild(this._cardziontext__img);
      this._cardziontext.ggId = "card-zion-text";
      this._cardziontext.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardziontext.ggVisible = false;
      this._cardziontext.className = "ggskin ggskin_svg ";
      this._cardziontext.ggType = "svg";
      hs = "";
      hs += "height : 84px;";
      hs += "left : 24px;";
      hs += "position : absolute;";
      hs += "top : 159px;";
      hs += "visibility : hidden;";
      hs += "width : 213px;";
      this._cardziontext.setAttribute("style", hs);
      this._cardziontext.style[domTransform + "Origin"] = "50% 50%";
      me._cardziontext.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardziontext.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardziontext.ggUpdatePosition = function() {};
      this._cardzion.appendChild(this._cardziontext);
      this.__div.appendChild(this._cardzion);
      this._closezion = document.createElement("div");
      this._closezion__img = document.createElement("img");
      this._closezion__img.className = "ggskin ggskin_svg";
      this._closezion__img.setAttribute(
        "src",
        basePath + "images/closezion.svg"
      );
      this._closezion__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closezion__img["ondragstart"] = function() {
        return false;
      };
      this._closezion.appendChild(this._closezion__img);
      this._closezion.ggId = "close-zion";
      this._closezion.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._closezion.ggVisible = false;
      this._closezion.className = "ggskin ggskin_svg ";
      this._closezion.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 48px;";
      hs += "left : 106px;";
      hs += "position : absolute;";
      hs += "top : -98px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closezion.setAttribute("style", hs);
      this._closezion.style[domTransform + "Origin"] = "50% 50%";
      me._closezion.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closezion.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closezion.onclick = function() {
        me._closezion.style[domTransition] = "none";
        me._closezion.style.visibility = "hidden";
        me._closezion.ggVisible = false;
        me._cardzion.style[domTransition] = "none";
        me._cardzion.style.visibility = "hidden";
        me._cardzion.ggVisible = false;
        me._cardziontext.style[domTransition] = "none";
        me._cardziontext.style.visibility = "hidden";
        me._cardziontext.ggVisible = false;
      };
      this._closezion.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closezion);
    } else if (hotspot.skinid == "interaction-highline") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-highline";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 261px;";
      hs += "position : absolute;";
      hs += "top : 277px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        return me.player.getCurrentNode() == this.ggElementNodeId();
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_2444 = document.createElement("div");
      this._svg_2444__img = document.createElement("img");
      this._svg_2444__img.className = "ggskin ggskin_svg";
      this._svg_2444__img.setAttribute("src", basePath + "images/svg_2444.svg");
      this._svg_2444__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_2444__img["ondragstart"] = function() {
        return false;
      };
      this._svg_2444.appendChild(this._svg_2444__img);
      this._svg_2444.ggId = "Svg 2444";
      this._svg_2444.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_2444.ggVisible = true;
      this._svg_2444.className = "ggskin ggskin_svg ";
      this._svg_2444.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_2444.setAttribute("style", hs);
      this._svg_2444.style[domTransform + "Origin"] = "50% 50%";
      me._svg_2444.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_2444.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_2444.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_2444);
      this._svg_554 = document.createElement("div");
      this._svg_554__img = document.createElement("img");
      this._svg_554__img.className = "ggskin ggskin_svg";
      this._svg_554__img.setAttribute("src", basePath + "images/svg_554.svg");
      this._svg_554__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_554__img["ondragstart"] = function() {
        return false;
      };
      this._svg_554.appendChild(this._svg_554__img);
      this._svg_554.ggId = "Svg 554";
      this._svg_554.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_554.ggVisible = true;
      this._svg_554.className = "ggskin ggskin_svg ";
      this._svg_554.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_554.setAttribute("style", hs);
      this._svg_554.style[domTransform + "Origin"] = "50% 50%";
      me._svg_554.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_554.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_554.onclick = function() {
        me._cardhighline.ggVisible = !me._cardhighline.ggVisible;
        me._cardhighline.style[domTransition] = "none";
        me._cardhighline.style.visibility =
          me._cardhighline.ggVisible &&
          (Number(me._cardhighline.style.opacity) > 0 ||
            !me._cardhighline.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardhighlinetext.ggVisible = !me._cardhighlinetext.ggVisible;
        me._cardhighlinetext.style[domTransition] = "none";
        me._cardhighlinetext.style.visibility =
          me._cardhighlinetext.ggVisible &&
          (Number(me._cardhighlinetext.style.opacity) > 0 ||
            !me._cardhighlinetext.style.opacity)
            ? "inherit"
            : "hidden";
        me._closehighline.ggVisible = !me._closehighline.ggVisible;
        me._closehighline.style[domTransition] = "none";
        me._closehighline.style.visibility =
          me._closehighline.ggVisible &&
          (Number(me._closehighline.style.opacity) > 0 ||
            !me._closehighline.style.opacity)
            ? "inherit"
            : "hidden";
      };
      this._svg_554.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_554);
      this._svg_39 = document.createElement("div");
      this._svg_39__img = document.createElement("img");
      this._svg_39__img.className = "ggskin ggskin_svg";
      this._svg_39__img.setAttribute("src", basePath + "images/svg_39.svg");
      this._svg_39__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_39__img["ondragstart"] = function() {
        return false;
      };
      this._svg_39.appendChild(this._svg_39__img);
      this._svg_39.ggId = "Svg 39";
      this._svg_39.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_39.ggVisible = true;
      this._svg_39.className = "ggskin ggskin_svg ";
      this._svg_39.ggType = "svg";
      hs = "";
      hs += "height : 12px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : 27px;";
      hs += "visibility : inherit;";
      hs += "width : 52px;";
      this._svg_39.setAttribute("style", hs);
      this._svg_39.style[domTransform + "Origin"] = "50% 50%";
      me._svg_39.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_39.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_39.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_39);
      this._cardhighline = document.createElement("div");
      this._cardhighline__img = document.createElement("img");
      this._cardhighline__img.className = "ggskin ggskin_image";
      this._cardhighline__img.setAttribute(
        "src",
        basePath + "images/cardhighline.png"
      );
      this._cardhighline__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardhighline__img.className = "ggskin ggskin_image";
      this._cardhighline__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardhighline__img);
      this._cardhighline.appendChild(this._cardhighline__img);
      this._cardhighline.ggId = "card-highline";
      this._cardhighline.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardhighline.ggVisible = false;
      this._cardhighline.className = "ggskin ggskin_image ";
      this._cardhighline.ggType = "image";
      hs = "";
      hs += "height : 266px;";
      hs += "left : -146px;";
      hs += "position : absolute;";
      hs += "top : -89px;";
      hs += "visibility : hidden;";
      hs += "width : 260px;";
      this._cardhighline.setAttribute("style", hs);
      this._cardhighline.style[domTransform + "Origin"] = "50% 50%";
      me._cardhighline.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardhighline.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardhighline.ggUpdatePosition = function() {};
      this._cardhighlinetext = document.createElement("div");
      this._cardhighlinetext__img = document.createElement("img");
      this._cardhighlinetext__img.className = "ggskin ggskin_svg";
      this._cardhighlinetext__img.setAttribute(
        "src",
        basePath + "images/cardhighlinetext.svg"
      );
      this._cardhighlinetext__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardhighlinetext__img["ondragstart"] = function() {
        return false;
      };
      this._cardhighlinetext.appendChild(this._cardhighlinetext__img);
      this._cardhighlinetext.ggId = "card-highline-text";
      this._cardhighlinetext.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardhighlinetext.ggVisible = false;
      this._cardhighlinetext.className = "ggskin ggskin_svg ";
      this._cardhighlinetext.ggType = "svg";
      hs = "";
      hs += "height : 84px;";
      hs += "left : 23px;";
      hs += "position : absolute;";
      hs += "top : 166px;";
      hs += "visibility : hidden;";
      hs += "width : 213px;";
      this._cardhighlinetext.setAttribute("style", hs);
      this._cardhighlinetext.style[domTransform + "Origin"] = "50% 50%";
      me._cardhighlinetext.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardhighlinetext.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardhighlinetext.ggUpdatePosition = function() {};
      this._cardhighline.appendChild(this._cardhighlinetext);
      this.__div.appendChild(this._cardhighline);
      this._closehighline = document.createElement("div");
      this._closehighline__img = document.createElement("img");
      this._closehighline__img.className = "ggskin ggskin_svg";
      this._closehighline__img.setAttribute(
        "src",
        basePath + "images/closehighline.svg"
      );
      this._closehighline__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closehighline__img["ondragstart"] = function() {
        return false;
      };
      this._closehighline.appendChild(this._closehighline__img);
      this._closehighline.ggId = "close-highline";
      this._closehighline.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._closehighline.ggVisible = false;
      this._closehighline.className = "ggskin ggskin_svg ";
      this._closehighline.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 48px;";
      hs += "left : 80px;";
      hs += "position : absolute;";
      hs += "top : -107px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closehighline.setAttribute("style", hs);
      this._closehighline.style[domTransform + "Origin"] = "50% 50%";
      me._closehighline.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closehighline.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closehighline.onclick = function() {
        me._closehighline.style[domTransition] = "none";
        me._closehighline.style.visibility = "hidden";
        me._closehighline.ggVisible = false;
        me._cardhighline.style[domTransition] = "none";
        me._cardhighline.style.visibility = "hidden";
        me._cardhighline.ggVisible = false;
        me._cardhighlinetext.style[domTransition] = "none";
        me._cardhighlinetext.style.visibility = "hidden";
        me._cardhighlinetext.ggVisible = false;
      };
      this._closehighline.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closehighline);
    } else if (hotspot.skinid == "interaction-end") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-end";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 261px;";
      hs += "position : absolute;";
      hs += "top : 277px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        return me.player.getCurrentNode() == this.ggElementNodeId();
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_2433 = document.createElement("div");
      this._svg_2433__img = document.createElement("img");
      this._svg_2433__img.className = "ggskin ggskin_svg";
      this._svg_2433__img.setAttribute("src", basePath + "images/svg_2433.svg");
      this._svg_2433__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_2433__img["ondragstart"] = function() {
        return false;
      };
      this._svg_2433.appendChild(this._svg_2433__img);
      this._svg_2433.ggId = "Svg 2433";
      this._svg_2433.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_2433.ggVisible = true;
      this._svg_2433.className = "ggskin ggskin_svg ";
      this._svg_2433.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_2433.setAttribute("style", hs);
      this._svg_2433.style[domTransform + "Origin"] = "50% 50%";
      me._svg_2433.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_2433.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_2433.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_2433);
      this._svg_2533 = document.createElement("div");
      this._svg_2533__img = document.createElement("img");
      this._svg_2533__img.className = "ggskin ggskin_svg";
      this._svg_2533__img.setAttribute("src", basePath + "images/svg_2533.svg");
      this._svg_2533__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_2533__img["ondragstart"] = function() {
        return false;
      };
      this._svg_2533.appendChild(this._svg_2533__img);
      this._svg_2533.ggId = "Svg 2533";
      this._svg_2533.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_2533.ggVisible = true;
      this._svg_2533.className = "ggskin ggskin_svg ";
      this._svg_2533.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_2533.setAttribute("style", hs);
      this._svg_2533.style[domTransform + "Origin"] = "50% 50%";
      me._svg_2533.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_2533.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_2533.onclick = function() {
        me._cardend.ggVisible = !me._cardend.ggVisible;
        me._cardend.style[domTransition] = "none";
        me._cardend.style.visibility =
          me._cardend.ggVisible &&
          (Number(me._cardend.style.opacity) > 0 || !me._cardend.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardendtext.ggVisible = !me._cardendtext.ggVisible;
        me._cardendtext.style[domTransition] = "none";
        me._cardendtext.style.visibility =
          me._cardendtext.ggVisible &&
          (Number(me._cardendtext.style.opacity) > 0 ||
            !me._cardendtext.style.opacity)
            ? "inherit"
            : "hidden";
        me._closeend.style[domTransition] = "none";
        me._closeend.style.visibility =
          Number(me._closeend.style.opacity) > 0 || !me._closeend.style.opacity
            ? "inherit"
            : "hidden";
        me._closeend.ggVisible = true;
      };
      this._svg_2533.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_2533);
      this._svg_41 = document.createElement("div");
      this._svg_41__img = document.createElement("img");
      this._svg_41__img.className = "ggskin ggskin_svg";
      this._svg_41__img.setAttribute("src", basePath + "images/svg_41.svg");
      this._svg_41__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_41__img["ondragstart"] = function() {
        return false;
      };
      this._svg_41.appendChild(this._svg_41__img);
      this._svg_41.ggId = "Svg 41";
      this._svg_41.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_41.ggVisible = true;
      this._svg_41.className = "ggskin ggskin_svg ";
      this._svg_41.ggType = "svg";
      hs = "";
      hs += "height : 10px;";
      hs += "left : -40px;";
      hs += "position : absolute;";
      hs += "top : 26px;";
      hs += "visibility : inherit;";
      hs += "width : 82px;";
      this._svg_41.setAttribute("style", hs);
      this._svg_41.style[domTransform + "Origin"] = "50% 50%";
      me._svg_41.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_41.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_41.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_41);
      this._cardend = document.createElement("div");
      this._cardend__img = document.createElement("img");
      this._cardend__img.className = "ggskin ggskin_image";
      this._cardend__img.setAttribute("src", basePath + "images/cardend.png");
      this._cardend__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardend__img.className = "ggskin ggskin_image";
      this._cardend__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardend__img);
      this._cardend.appendChild(this._cardend__img);
      this._cardend.ggId = "card-end";
      this._cardend.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardend.ggVisible = false;
      this._cardend.className = "ggskin ggskin_image ";
      this._cardend.ggType = "image";
      hs = "";
      hs += "height : 271px;";
      hs += "left : -133px;";
      hs += "position : absolute;";
      hs += "top : -120px;";
      hs += "visibility : hidden;";
      hs += "width : 260px;";
      this._cardend.setAttribute("style", hs);
      this._cardend.style[domTransform + "Origin"] = "50% 50%";
      me._cardend.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardend.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardend.ggUpdatePosition = function() {};
      this._cardendtext = document.createElement("div");
      this._cardendtext__img = document.createElement("img");
      this._cardendtext__img.className = "ggskin ggskin_svg";
      this._cardendtext__img.setAttribute(
        "src",
        basePath + "images/cardendtext.svg"
      );
      this._cardendtext__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardendtext__img["ondragstart"] = function() {
        return false;
      };
      this._cardendtext.appendChild(this._cardendtext__img);
      this._cardendtext.ggId = "card-end-text";
      this._cardendtext.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardendtext.ggVisible = false;
      this._cardendtext.className = "ggskin ggskin_svg ";
      this._cardendtext.ggType = "svg";
      hs = "";
      hs += "height : 85px;";
      hs += "left : 23px;";
      hs += "position : absolute;";
      hs += "top : 169px;";
      hs += "visibility : hidden;";
      hs += "width : 213px;";
      this._cardendtext.setAttribute("style", hs);
      this._cardendtext.style[domTransform + "Origin"] = "50% 50%";
      me._cardendtext.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardendtext.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardendtext.ggUpdatePosition = function() {};
      this._cardend.appendChild(this._cardendtext);
      this.__div.appendChild(this._cardend);
      this._closeend = document.createElement("div");
      this._closeend__img = document.createElement("img");
      this._closeend__img.className = "ggskin ggskin_svg";
      this._closeend__img.setAttribute("src", basePath + "images/closeend.svg");
      this._closeend__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closeend__img["ondragstart"] = function() {
        return false;
      };
      this._closeend.appendChild(this._closeend__img);
      this._closeend.ggId = "close-end";
      this._closeend.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._closeend.ggVisible = false;
      this._closeend.className = "ggskin ggskin_svg ";
      this._closeend.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 48px;";
      hs += "left : 95px;";
      hs += "position : absolute;";
      hs += "top : -135px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closeend.setAttribute("style", hs);
      this._closeend.style[domTransform + "Origin"] = "50% 50%";
      me._closeend.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closeend.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closeend.onclick = function() {
        me._closeend.style[domTransition] = "none";
        me._closeend.style.visibility = "hidden";
        me._closeend.ggVisible = false;
        me._cardend.style[domTransition] = "none";
        me._cardend.style.visibility = "hidden";
        me._cardend.ggVisible = false;
        me._cardendtext.style[domTransition] = "none";
        me._cardendtext.style.visibility = "hidden";
        me._cardendtext.ggVisible = false;
      };
      this._closeend.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closeend);
    } else if (hotspot.skinid == "logo+tag") {
      this.__div = document.createElement("div");
      this.__div.ggId = "logo+tag";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : -10px;";
      hs += "position : absolute;";
      hs += "top : -14px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._logotagsvg = document.createElement("div");
      this._logotagsvg__img = document.createElement("img");
      this._logotagsvg__img.className = "ggskin ggskin_svg";
      this._logotagsvg__img.setAttribute(
        "src",
        basePath + "images/logotagsvg.svg"
      );
      this._logotagsvg__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._logotagsvg__img["ondragstart"] = function() {
        return false;
      };
      this._logotagsvg.appendChild(this._logotagsvg__img);
      this._logotagsvg.ggId = "logo+tag-svg";
      this._logotagsvg.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._logotagsvg.ggVisible = true;
      this._logotagsvg.className = "ggskin ggskin_svg ";
      this._logotagsvg.ggType = "svg";
      hs = "";
      hs += "height : 140px;";
      hs += "left : -104px;";
      hs += "position : absolute;";
      hs += "top : -137px;";
      hs += "visibility : inherit;";
      hs += "width : 213px;";
      this._logotagsvg.setAttribute("style", hs);
      this._logotagsvg.style[domTransform + "Origin"] = "50% 50%";
      me._logotagsvg.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._logotagsvg.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._logotagsvg.ggUpdatePosition = function() {};
      this.__div.appendChild(this._logotagsvg);
    } else if (hotspot.skinid == "play-intro") {
      this.__div = document.createElement("div");
      this.__div.ggId = "play-intro";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 94px;";
      hs += "position : absolute;";
      hs += "top : 102px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_1 = document.createElement("div");
      this._svg_1__img = document.createElement("img");
      this._svg_1__img.className = "ggskin ggskin_svg";
      this._svg_1__img.setAttribute("src", basePath + "images/svg_1.svg");
      this._svg_1__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_1__img["ondragstart"] = function() {
        return false;
      };
      this._svg_1.appendChild(this._svg_1__img);
      this._svg_1.ggId = "Svg 1";
      this._svg_1.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_1.ggVisible = true;
      this._svg_1.className = "ggskin ggskin_svg ";
      this._svg_1.ggType = "svg";
      hs = "";
      hs += "height : 68px;";
      hs += "left : -32px;";
      hs += "position : absolute;";
      hs += "top : -32px;";
      hs += "visibility : inherit;";
      hs += "width : 68px;";
      this._svg_1.setAttribute("style", hs);
      this._svg_1.style[domTransform + "Origin"] = "50% 50%";
      me._svg_1.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_1.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_1.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_1);
      this._playintrosvg = document.createElement("div");
      this._playintrosvg__img = document.createElement("img");
      this._playintrosvg__img.className = "ggskin ggskin_svg";
      this._playintrosvg__img.setAttribute(
        "src",
        basePath + "images/playintrosvg.svg"
      );
      this._playintrosvg__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._playintrosvg__img["ondragstart"] = function() {
        return false;
      };
      this._playintrosvg.appendChild(this._playintrosvg__img);
      this._playintrosvg.ggId = "play-intro-svg";
      this._playintrosvg.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._playintrosvg.ggVisible = true;
      this._playintrosvg.className = "ggskin ggskin_svg ";
      this._playintrosvg.ggType = "svg";
      hs = "";
      hs += "height : 38px;";
      hs += "left : -17px;";
      hs += "position : absolute;";
      hs += "top : -17px;";
      hs += "visibility : inherit;";
      hs += "width : 38px;";
      this._playintrosvg.setAttribute("style", hs);
      this._playintrosvg.style[domTransform + "Origin"] = "50% 50%";
      me._playintrosvg.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._playintrosvg.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._playintrosvg.onclick = function() {
        me._videointro.ggVisible = !me._videointro.ggVisible;
        me._videointro.style[domTransition] = "none";
        me._videointro.style.visibility =
          me._videointro.ggVisible &&
          (Number(me._videointro.style.opacity) > 0 ||
            !me._videointro.style.opacity)
            ? "inherit"
            : "hidden";
        me._videointro.style[domTransition] = "none";
        me._videointro.style.opacity = "1";
        me._videointro.style.visibility = me._videointro.ggVisible
          ? "inherit"
          : "hidden";
        me._closevideointro.ggVisible = !me._closevideointro.ggVisible;
        me._closevideointro.style[domTransition] = "none";
        me._closevideointro.style.visibility =
          me._closevideointro.ggVisible &&
          (Number(me._closevideointro.style.opacity) > 0 ||
            !me._closevideointro.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardvideointro.ggVisible = !me._cardvideointro.ggVisible;
        me._cardvideointro.style[domTransition] = "none";
        me._cardvideointro.style.visibility =
          me._cardvideointro.ggVisible &&
          (Number(me._cardvideointro.style.opacity) > 0 ||
            !me._cardvideointro.style.opacity)
            ? "inherit"
            : "hidden";
      };
      this._playintrosvg.ggUpdatePosition = function() {};
      this.__div.appendChild(this._playintrosvg);
      this._cardvideointro = document.createElement("div");
      this._cardvideointro__img = document.createElement("img");
      this._cardvideointro__img.className = "ggskin ggskin_image";
      this._cardvideointro__img.setAttribute(
        "src",
        basePath + "images/cardvideointro.png"
      );
      this._cardvideointro__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardvideointro__img.className = "ggskin ggskin_image";
      this._cardvideointro__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardvideointro__img);
      this._cardvideointro.appendChild(this._cardvideointro__img);
      this._cardvideointro.ggId = "card-VideoIntro";
      this._cardvideointro.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardvideointro.ggVisible = false;
      this._cardvideointro.className = "ggskin ggskin_image ";
      this._cardvideointro.ggType = "image";
      hs = "";
      hs += "height : 170px;";
      hs += "left : -155px;";
      hs += "position : absolute;";
      hs += "top : -29px;";
      hs += "visibility : hidden;";
      hs += "width : 320px;";
      this._cardvideointro.setAttribute("style", hs);
      this._cardvideointro.style[domTransform + "Origin"] = "50% 50%";
      me._cardvideointro.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardvideointro.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardvideointro.ggUpdatePosition = function() {};
      this._videointro = document.createElement("div");
      this._videointro__text = document.createElement("div");
      this._videointro.className = "ggskin ggskin_textdiv";
      this._videointro.ggTextDiv = this._videointro__text;
      this._videointro.ggId = "video-intro";
      this._videointro.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._videointro.ggVisible = false;
      this._videointro.className = "ggskin ggskin_text ";
      this._videointro.ggType = "text";
      hs = "";
      hs += "height : 169px;";
      hs += "left : 4px;";
      hs += "opacity : 0;";
      hs += "position : absolute;";
      hs += "top : 1px;";
      hs += "visibility : hidden;";
      hs += "width : 311px;";
      this._videointro.setAttribute("style", hs);
      this._videointro.style[domTransform + "Origin"] = "50% 50%";
      hs = "position:absolute;";
      hs += "left: 0px;";
      hs += "top:  0px;";
      hs += "width: 311px;";
      hs += "height: 169px;";
      hs += "border: 0px solid #000000;";
      hs += "color: #000000;";
      hs += "text-align: center;";
      hs += "white-space: nowrap;";
      hs += "padding: 0px 1px 0px 1px;";
      hs += "overflow: hidden;";
      this._videointro__text.setAttribute("style", hs);
      this._videointro__text.innerHTML =
        '<iframe src="https://player.vimeo.com/video/120579381?title=0&byline=0&portrait=0" width="320" height="169" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      this._videointro.appendChild(this._videointro__text);
      me._videointro.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._videointro.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._videointro.ggUpdatePosition = function() {};
      this._cardvideointro.appendChild(this._videointro);
      this.__div.appendChild(this._cardvideointro);
      this._closevideointro = document.createElement("div");
      this._closevideointro__img = document.createElement("img");
      this._closevideointro__img.className = "ggskin ggskin_svg";
      this._closevideointro__img.setAttribute(
        "src",
        basePath + "images/closevideointro.svg"
      );
      this._closevideointro__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closevideointro__img["ondragstart"] = function() {
        return false;
      };
      this._closevideointro.appendChild(this._closevideointro__img);
      this._closevideointro.ggId = "close-video-intro";
      this._closevideointro.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._closevideointro.ggVisible = false;
      this._closevideointro.className = "ggskin ggskin_svg ";
      this._closevideointro.ggType = "svg";
      hs = "";
      hs += "height : 48px;";
      hs += "left : 139px;";
      hs += "position : absolute;";
      hs += "top : -49px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closevideointro.setAttribute("style", hs);
      this._closevideointro.style[domTransform + "Origin"] = "50% 50%";
      me._closevideointro.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closevideointro.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closevideointro.onclick = function() {
        me._closevideointro.style[domTransition] = "none";
        me._closevideointro.style.visibility = "hidden";
        me._closevideointro.ggVisible = false;
        me._cardvideointro.style[domTransition] = "none";
        me._cardvideointro.style.visibility = "hidden";
        me._cardvideointro.ggVisible = false;
        me._videointro.style[domTransition] = "none";
        me._videointro.style.visibility = "hidden";
        me._videointro.ggVisible = false;
        me._videointro.style[domTransition] = "none";
        me._videointro.style.opacity = "0";
        me._videointro.style.visibility = "hidden";
      };
      this._closevideointro.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closevideointro);
    } else if (hotspot.skinid == "interaction-head-lands") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-head-lands";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 122px;";
      hs += "position : absolute;";
      hs += "top : 105px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_33 = document.createElement("div");
      this._svg_33__img = document.createElement("img");
      this._svg_33__img.className = "ggskin ggskin_svg";
      this._svg_33__img.setAttribute("src", basePath + "images/svg_33.svg");
      this._svg_33__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_33__img["ondragstart"] = function() {
        return false;
      };
      this._svg_33.appendChild(this._svg_33__img);
      this._svg_33.ggId = "Svg 3";
      this._svg_33.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_33.ggVisible = true;
      this._svg_33.className = "ggskin ggskin_svg ";
      this._svg_33.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_33.setAttribute("style", hs);
      this._svg_33.style[domTransform + "Origin"] = "50% 50%";
      me._svg_33.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_33.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_33.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_33);
      this._svg_2 = document.createElement("div");
      this._svg_2__img = document.createElement("img");
      this._svg_2__img.className = "ggskin ggskin_svg";
      this._svg_2__img.setAttribute("src", basePath + "images/svg_2.svg");
      this._svg_2__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_2__img["ondragstart"] = function() {
        return false;
      };
      this._svg_2.appendChild(this._svg_2__img);
      this._svg_2.ggId = "Svg 2";
      this._svg_2.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_2.ggVisible = true;
      this._svg_2.className = "ggskin ggskin_svg ";
      this._svg_2.ggType = "svg";
      hs = "";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_2.setAttribute("style", hs);
      this._svg_2.style[domTransform + "Origin"] = "50% 50%";
      me._svg_2.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_2.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_2.onclick = function() {
        me._cardheadlands.ggVisible = !me._cardheadlands.ggVisible;
        me._cardheadlands.style[domTransition] = "none";
        me._cardheadlands.style.visibility =
          me._cardheadlands.ggVisible &&
          (Number(me._cardheadlands.style.opacity) > 0 ||
            !me._cardheadlands.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardheadlandstext.ggVisible = !me._cardheadlandstext.ggVisible;
        me._cardheadlandstext.style[domTransition] = "none";
        me._cardheadlandstext.style.visibility =
          me._cardheadlandstext.ggVisible &&
          (Number(me._cardheadlandstext.style.opacity) > 0 ||
            !me._cardheadlandstext.style.opacity)
            ? "inherit"
            : "hidden";
        me._closeheadlands.ggVisible = !me._closeheadlands.ggVisible;
        me._closeheadlands.style[domTransition] = "none";
        me._closeheadlands.style.visibility =
          me._closeheadlands.ggVisible &&
          (Number(me._closeheadlands.style.opacity) > 0 ||
            !me._closeheadlands.style.opacity)
            ? "inherit"
            : "hidden";
      };
      this._svg_2.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_2);
      this._svg_10 = document.createElement("div");
      this._svg_10__img = document.createElement("img");
      this._svg_10__img.className = "ggskin ggskin_svg";
      this._svg_10__img.setAttribute("src", basePath + "images/svg_10.svg");
      this._svg_10__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_10__img["ondragstart"] = function() {
        return false;
      };
      this._svg_10.appendChild(this._svg_10__img);
      this._svg_10.ggId = "Svg 10";
      this._svg_10.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_10.ggVisible = true;
      this._svg_10.className = "ggskin ggskin_svg ";
      this._svg_10.ggType = "svg";
      hs = "";
      hs += "height : 10px;";
      hs += "left : -30px;";
      hs += "position : absolute;";
      hs += "top : 23px;";
      hs += "visibility : inherit;";
      hs += "width : 67px;";
      this._svg_10.setAttribute("style", hs);
      this._svg_10.style[domTransform + "Origin"] = "50% 50%";
      me._svg_10.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_10.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_10.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_10);
      this._cardheadlands = document.createElement("div");
      this._cardheadlands__img = document.createElement("img");
      this._cardheadlands__img.className = "ggskin ggskin_image";
      this._cardheadlands__img.setAttribute(
        "src",
        basePath + "images/cardheadlands.png"
      );
      this._cardheadlands__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardheadlands__img.className = "ggskin ggskin_image";
      this._cardheadlands__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardheadlands__img);
      this._cardheadlands.appendChild(this._cardheadlands__img);
      this._cardheadlands.ggId = "card-headlands";
      this._cardheadlands.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardheadlands.ggVisible = false;
      this._cardheadlands.className = "ggskin ggskin_image ";
      this._cardheadlands.ggType = "image";
      hs = "";
      hs += "height : 286px;";
      hs += "left : -144px;";
      hs += "position : absolute;";
      hs += "top : -87px;";
      hs += "visibility : hidden;";
      hs += "width : 260px;";
      this._cardheadlands.setAttribute("style", hs);
      this._cardheadlands.style[domTransform + "Origin"] = "50% 50%";
      me._cardheadlands.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardheadlands.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardheadlands.ggUpdatePosition = function() {};
      this._cardheadlandstext = document.createElement("div");
      this._cardheadlandstext__img = document.createElement("img");
      this._cardheadlandstext__img.className = "ggskin ggskin_svg";
      this._cardheadlandstext__img.setAttribute(
        "src",
        basePath + "images/cardheadlandstext.svg"
      );
      this._cardheadlandstext__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardheadlandstext__img["ondragstart"] = function() {
        return false;
      };
      this._cardheadlandstext.appendChild(this._cardheadlandstext__img);
      this._cardheadlandstext.ggId = "card-headlands-text";
      this._cardheadlandstext.ggParameter = {
        rx: 0,
        ry: 0,
        a: 0,
        sx: 1,
        sy: 1
      };
      this._cardheadlandstext.ggVisible = false;
      this._cardheadlandstext.className = "ggskin ggskin_svg ";
      this._cardheadlandstext.ggType = "svg";
      hs = "";
      hs += "height : 90px;";
      hs += "left : 21px;";
      hs += "position : absolute;";
      hs += "top : 177px;";
      hs += "visibility : hidden;";
      hs += "width : 217px;";
      this._cardheadlandstext.setAttribute("style", hs);
      this._cardheadlandstext.style[domTransform + "Origin"] = "50% 50%";
      me._cardheadlandstext.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardheadlandstext.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardheadlandstext.ggUpdatePosition = function() {};
      this._cardheadlands.appendChild(this._cardheadlandstext);
      this.__div.appendChild(this._cardheadlands);
      this._closeheadlands = document.createElement("div");
      this._closeheadlands__img = document.createElement("img");
      this._closeheadlands__img.className = "ggskin ggskin_svg";
      this._closeheadlands__img.setAttribute(
        "src",
        basePath + "images/closeheadlands.svg"
      );
      this._closeheadlands__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closeheadlands__img["ondragstart"] = function() {
        return false;
      };
      this._closeheadlands.appendChild(this._closeheadlands__img);
      this._closeheadlands.ggId = "close-headlands";
      this._closeheadlands.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._closeheadlands.ggVisible = false;
      this._closeheadlands.className = "ggskin ggskin_svg ";
      this._closeheadlands.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 48px;";
      hs += "left : 83px;";
      hs += "position : absolute;";
      hs += "top : -106px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closeheadlands.setAttribute("style", hs);
      this._closeheadlands.style[domTransform + "Origin"] = "50% 50%";
      me._closeheadlands.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closeheadlands.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closeheadlands.onclick = function() {
        me._closeheadlands.style[domTransition] = "none";
        me._closeheadlands.style.visibility = "hidden";
        me._closeheadlands.ggVisible = false;
        me._cardheadlands.style[domTransition] = "none";
        me._cardheadlands.style.visibility = "hidden";
        me._cardheadlands.ggVisible = false;
        me._cardheadlandstext.style[domTransition] = "none";
        me._cardheadlandstext.style.visibility = "hidden";
        me._cardheadlandstext.ggVisible = false;
      };
      this._closeheadlands.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closeheadlands);
    } else if (hotspot.skinid == "interaction-golden-gate") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-golden-gate";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 122px;";
      hs += "position : absolute;";
      hs += "top : 105px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_4 = document.createElement("div");
      this._svg_4__img = document.createElement("img");
      this._svg_4__img.className = "ggskin ggskin_svg";
      this._svg_4__img.setAttribute("src", basePath + "images/svg_4.svg");
      this._svg_4__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_4__img["ondragstart"] = function() {
        return false;
      };
      this._svg_4.appendChild(this._svg_4__img);
      this._svg_4.ggId = "Svg 4";
      this._svg_4.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_4.ggVisible = true;
      this._svg_4.className = "ggskin ggskin_svg ";
      this._svg_4.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_4.setAttribute("style", hs);
      this._svg_4.style[domTransform + "Origin"] = "50% 50%";
      me._svg_4.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_4.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_4.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_4);
      this._svg_11 = document.createElement("div");
      this._svg_11__img = document.createElement("img");
      this._svg_11__img.className = "ggskin ggskin_svg";
      this._svg_11__img.setAttribute("src", basePath + "images/svg_11.svg");
      this._svg_11__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_11__img["ondragstart"] = function() {
        return false;
      };
      this._svg_11.appendChild(this._svg_11__img);
      this._svg_11.ggId = "Svg 11";
      this._svg_11.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_11.ggVisible = true;
      this._svg_11.className = "ggskin ggskin_svg ";
      this._svg_11.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_11.setAttribute("style", hs);
      this._svg_11.style[domTransform + "Origin"] = "50% 50%";
      me._svg_11.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_11.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_11.onclick = function() {
        me._videosfo.ggVisible = !me._videosfo.ggVisible;
        me._videosfo.style[domTransition] = "none";
        me._videosfo.style.visibility =
          me._videosfo.ggVisible &&
          (Number(me._videosfo.style.opacity) > 0 ||
            !me._videosfo.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardvideosfo.ggVisible = !me._cardvideosfo.ggVisible;
        me._cardvideosfo.style[domTransition] = "none";
        me._cardvideosfo.style.visibility =
          me._cardvideosfo.ggVisible &&
          (Number(me._cardvideosfo.style.opacity) > 0 ||
            !me._cardvideosfo.style.opacity)
            ? "inherit"
            : "hidden";
        me._closevideosfo.ggVisible = !me._closevideosfo.ggVisible;
        me._closevideosfo.style[domTransition] = "none";
        me._closevideosfo.style.visibility =
          me._closevideosfo.ggVisible &&
          (Number(me._closevideosfo.style.opacity) > 0 ||
            !me._closevideosfo.style.opacity)
            ? "inherit"
            : "hidden";
        if (me.player.transitionsDisabled) {
          me._videosfo.style[domTransition] = "none";
        } else {
          me._videosfo.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me._videosfo.style.opacity = "1";
        me._videosfo.style.visibility = me._videosfo.ggVisible
          ? "inherit"
          : "hidden";
        me._cardvideosfotext.ggVisible = !me._cardvideosfotext.ggVisible;
        me._cardvideosfotext.style[domTransition] = "none";
        me._cardvideosfotext.style.visibility =
          me._cardvideosfotext.ggVisible &&
          (Number(me._cardvideosfotext.style.opacity) > 0 ||
            !me._cardvideosfotext.style.opacity)
            ? "inherit"
            : "hidden";
      };
      this._svg_11.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_11);
      this._svg_14 = document.createElement("div");
      this._svg_14__img = document.createElement("img");
      this._svg_14__img.className = "ggskin ggskin_svg";
      this._svg_14__img.setAttribute("src", basePath + "images/svg_14.svg");
      this._svg_14__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_14__img["ondragstart"] = function() {
        return false;
      };
      this._svg_14.appendChild(this._svg_14__img);
      this._svg_14.ggId = "Svg 14";
      this._svg_14.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_14.ggVisible = true;
      this._svg_14.className = "ggskin ggskin_svg ";
      this._svg_14.ggType = "svg";
      hs = "";
      hs += "height : 13px;";
      hs += "left : -38px;";
      hs += "position : absolute;";
      hs += "top : 25px;";
      hs += "visibility : inherit;";
      hs += "width : 82px;";
      this._svg_14.setAttribute("style", hs);
      this._svg_14.style[domTransform + "Origin"] = "50% 50%";
      me._svg_14.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_14.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_14.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_14);
      this._cardvideosfo = document.createElement("div");
      this._cardvideosfo__img = document.createElement("img");
      this._cardvideosfo__img.className = "ggskin ggskin_image";
      this._cardvideosfo__img.setAttribute(
        "src",
        basePath + "images/cardvideosfo.png"
      );
      this._cardvideosfo__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardvideosfo__img.className = "ggskin ggskin_image";
      this._cardvideosfo__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardvideosfo__img);
      this._cardvideosfo.appendChild(this._cardvideosfo__img);
      this._cardvideosfo.ggId = "card-videoSFO";
      this._cardvideosfo.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardvideosfo.ggVisible = false;
      this._cardvideosfo.className = "ggskin ggskin_image ";
      this._cardvideosfo.ggType = "image";
      hs = "";
      hs += "height : 311px;";
      hs += "left : -145px;";
      hs += "position : absolute;";
      hs += "top : -147px;";
      hs += "visibility : hidden;";
      hs += "width : 260px;";
      this._cardvideosfo.setAttribute("style", hs);
      this._cardvideosfo.style[domTransform + "Origin"] = "50% 50%";
      me._cardvideosfo.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardvideosfo.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardvideosfo.ggUpdatePosition = function() {};
      this._cardvideosfotext = document.createElement("div");
      this._cardvideosfotext__img = document.createElement("img");
      this._cardvideosfotext__img.className = "ggskin ggskin_svg";
      this._cardvideosfotext__img.setAttribute(
        "src",
        basePath + "images/cardvideosfotext.svg"
      );
      this._cardvideosfotext__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardvideosfotext__img["ondragstart"] = function() {
        return false;
      };
      this._cardvideosfotext.appendChild(this._cardvideosfotext__img);
      this._cardvideosfotext.ggId = "card-videoSFO-text";
      this._cardvideosfotext.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardvideosfotext.ggVisible = false;
      this._cardvideosfotext.className = "ggskin ggskin_svg ";
      this._cardvideosfotext.ggType = "svg";
      hs = "";
      hs += "height : 125px;";
      hs += "left : 24px;";
      hs += "position : absolute;";
      hs += "top : 162px;";
      hs += "visibility : hidden;";
      hs += "width : 213px;";
      this._cardvideosfotext.setAttribute("style", hs);
      this._cardvideosfotext.style[domTransform + "Origin"] = "50% 50%";
      me._cardvideosfotext.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardvideosfotext.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardvideosfotext.ggUpdatePosition = function() {};
      this._cardvideosfo.appendChild(this._cardvideosfotext);
      this.__div.appendChild(this._cardvideosfo);
      this._videosfo = document.createElement("div");
      this._videosfo__text = document.createElement("div");
      this._videosfo.className = "ggskin ggskin_textdiv";
      this._videosfo.ggTextDiv = this._videosfo__text;
      this._videosfo.ggId = "VideoSFO";
      this._videosfo.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._videosfo.ggVisible = false;
      this._videosfo.className = "ggskin ggskin_text ";
      this._videosfo.ggType = "text";
      hs = "";
      hs += "height : 146px;";
      hs += "left : -142px;";
      hs += "opacity : 0;";
      hs += "position : absolute;";
      hs += "top : -146px;";
      hs += "visibility : hidden;";
      hs += "width : 254px;";
      this._videosfo.setAttribute("style", hs);
      this._videosfo.style[domTransform + "Origin"] = "50% 50%";
      hs = "position:absolute;";
      hs += "left: 0px;";
      hs += "top:  0px;";
      hs += "width: 254px;";
      hs += "height: 146px;";
      hs += "border: 0px solid #000000;";
      hs += "color: #000000;";
      hs += "text-align: center;";
      hs += "white-space: nowrap;";
      hs += "padding: 0px 1px 0px 1px;";
      hs += "overflow: hidden;";
      this._videosfo__text.setAttribute("style", hs);
      this._videosfo__text.innerHTML =
        '<iframe src="https://player.vimeo.com/video/120579381?title=0&byline=0&portrait=0" width="256" height="146" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      this._videosfo.appendChild(this._videosfo__text);
      me._videosfo.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._videosfo.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._videosfo.ggUpdatePosition = function() {};
      this.__div.appendChild(this._videosfo);
      this._closevideosfo = document.createElement("div");
      this._closevideosfo__img = document.createElement("img");
      this._closevideosfo__img.className = "ggskin ggskin_svg";
      this._closevideosfo__img.setAttribute(
        "src",
        basePath + "images/closevideosfo.svg"
      );
      this._closevideosfo__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closevideosfo__img["ondragstart"] = function() {
        return false;
      };
      this._closevideosfo.appendChild(this._closevideosfo__img);
      this._closevideosfo.ggId = "close-video-sfo";
      this._closevideosfo.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._closevideosfo.ggVisible = false;
      this._closevideosfo.className = "ggskin ggskin_svg ";
      this._closevideosfo.ggType = "svg";
      hs = "";
      hs += "height : 48px;";
      hs += "left : 85px;";
      hs += "position : absolute;";
      hs += "top : -164px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closevideosfo.setAttribute("style", hs);
      this._closevideosfo.style[domTransform + "Origin"] = "50% 50%";
      me._closevideosfo.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closevideosfo.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closevideosfo.onclick = function() {
        me._closevideosfo.style[domTransition] = "none";
        me._closevideosfo.style.visibility = "hidden";
        me._closevideosfo.ggVisible = false;
        me._cardvideosfo.style[domTransition] = "none";
        me._cardvideosfo.style.visibility = "hidden";
        me._cardvideosfo.ggVisible = false;
        me._videosfo.style[domTransition] = "none";
        me._videosfo.style.visibility = "hidden";
        me._videosfo.ggVisible = false;
        me._videosfo.style[domTransition] = "none";
        me._videosfo.style.opacity = "0";
        me._videosfo.style.visibility = "hidden";
        me._cardvideosfotext.style[domTransition] = "none";
        me._cardvideosfotext.style.visibility = "hidden";
        me._cardvideosfotext.ggVisible = false;
      };
      this._closevideosfo.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closevideosfo);
    } else if (hotspot.skinid == "interaction-yosemite") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-yosemite";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 122px;";
      hs += "position : absolute;";
      hs += "top : 105px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_6 = document.createElement("div");
      this._svg_6__img = document.createElement("img");
      this._svg_6__img.className = "ggskin ggskin_svg";
      this._svg_6__img.setAttribute("src", basePath + "images/svg_6.svg");
      this._svg_6__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_6__img["ondragstart"] = function() {
        return false;
      };
      this._svg_6.appendChild(this._svg_6__img);
      this._svg_6.ggId = "Svg 6";
      this._svg_6.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_6.ggVisible = true;
      this._svg_6.className = "ggskin ggskin_svg ";
      this._svg_6.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_6.setAttribute("style", hs);
      this._svg_6.style[domTransform + "Origin"] = "50% 50%";
      me._svg_6.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_6.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_6.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_6);
      this._image_1 = document.createElement("div");
      this._image_1__img = document.createElement("img");
      this._image_1__img.className = "ggskin ggskin_image";
      this._image_1__img.setAttribute("src", basePath + "images/image_1.png");
      this._image_1__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._image_1__img.className = "ggskin ggskin_image";
      this._image_1__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._image_1__img);
      this._image_1.appendChild(this._image_1__img);
      this._image_1.ggId = "Image 1";
      this._image_1.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._image_1.ggVisible = false;
      this._image_1.className = "ggskin ggskin_image ";
      this._image_1.ggType = "image";
      hs = "";
      hs += "height : 80px;";
      hs += "left : -40px;";
      hs += "position : absolute;";
      hs += "top : -59px;";
      hs += "visibility : hidden;";
      hs += "width : 80px;";
      this._image_1.setAttribute("style", hs);
      this._image_1.style[domTransform + "Origin"] = "50% 50%";
      me._image_1.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._image_1.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._image_1.ggUpdatePosition = function() {};
      this.__div.appendChild(this._image_1);
      this._svg_5 = document.createElement("div");
      this._svg_5__img = document.createElement("img");
      this._svg_5__img.className = "ggskin ggskin_svg";
      this._svg_5__img.setAttribute("src", basePath + "images/svg_5.svg");
      this._svg_5__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_5__img["ondragstart"] = function() {
        return false;
      };
      this._svg_5.appendChild(this._svg_5__img);
      this._svg_5.ggId = "Svg 5";
      this._svg_5.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_5.ggVisible = true;
      this._svg_5.className = "ggskin ggskin_svg ";
      this._svg_5.ggType = "svg";
      hs = "";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_5.setAttribute("style", hs);
      this._svg_5.style[domTransform + "Origin"] = "50% 50%";
      me._svg_5.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_5.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_5.onclick = function() {
        me.player.openNext("{node2}", "");
      };
      this._svg_5.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_5);
      this._svg_12 = document.createElement("div");
      this._svg_12__img = document.createElement("img");
      this._svg_12__img.className = "ggskin ggskin_svg";
      this._svg_12__img.setAttribute("src", basePath + "images/svg_12.svg");
      this._svg_12__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_12__img["ondragstart"] = function() {
        return false;
      };
      this._svg_12.appendChild(this._svg_12__img);
      this._svg_12.ggId = "Svg 12";
      this._svg_12.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_12.ggVisible = true;
      this._svg_12.className = "ggskin ggskin_svg ";
      this._svg_12.ggType = "svg";
      hs = "";
      hs += "height : 10px;";
      hs += "left : -27px;";
      hs += "position : absolute;";
      hs += "top : 26px;";
      hs += "visibility : inherit;";
      hs += "width : 60px;";
      this._svg_12.setAttribute("style", hs);
      this._svg_12.style[domTransform + "Origin"] = "50% 50%";
      me._svg_12.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_12.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_12.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_12);
    } else if (hotspot.skinid == "interaction-slack") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-slack";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 122px;";
      hs += "position : absolute;";
      hs += "top : 105px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_8 = document.createElement("div");
      this._svg_8__img = document.createElement("img");
      this._svg_8__img.className = "ggskin ggskin_svg";
      this._svg_8__img.setAttribute("src", basePath + "images/svg_8.svg");
      this._svg_8__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_8__img["ondragstart"] = function() {
        return false;
      };
      this._svg_8.appendChild(this._svg_8__img);
      this._svg_8.ggId = "Svg 8";
      this._svg_8.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_8.ggVisible = true;
      this._svg_8.className = "ggskin ggskin_svg ";
      this._svg_8.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_8.setAttribute("style", hs);
      this._svg_8.style[domTransform + "Origin"] = "50% 50%";
      me._svg_8.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_8.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_8.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_8);
      this._svg_7 = document.createElement("div");
      this._svg_7__img = document.createElement("img");
      this._svg_7__img.className = "ggskin ggskin_svg";
      this._svg_7__img.setAttribute("src", basePath + "images/svg_7.svg");
      this._svg_7__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_7__img["ondragstart"] = function() {
        return false;
      };
      this._svg_7.appendChild(this._svg_7__img);
      this._svg_7.ggId = "Svg 7";
      this._svg_7.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_7.ggVisible = true;
      this._svg_7.className = "ggskin ggskin_svg ";
      this._svg_7.ggType = "svg";
      hs = "";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_7.setAttribute("style", hs);
      this._svg_7.style[domTransform + "Origin"] = "50% 50%";
      me._svg_7.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_7.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_7.onclick = function() {
        me._cardpresidio.ggVisible = !me._cardpresidio.ggVisible;
        me._cardpresidio.style[domTransition] = "none";
        me._cardpresidio.style.visibility =
          me._cardpresidio.ggVisible &&
          (Number(me._cardpresidio.style.opacity) > 0 ||
            !me._cardpresidio.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardpresidiotext.ggVisible = !me._cardpresidiotext.ggVisible;
        me._cardpresidiotext.style[domTransition] = "none";
        me._cardpresidiotext.style.visibility =
          me._cardpresidiotext.ggVisible &&
          (Number(me._cardpresidiotext.style.opacity) > 0 ||
            !me._cardpresidiotext.style.opacity)
            ? "inherit"
            : "hidden";
        me._closepresidio.ggVisible = !me._closepresidio.ggVisible;
        me._closepresidio.style[domTransition] = "none";
        me._closepresidio.style.visibility =
          me._closepresidio.ggVisible &&
          (Number(me._closepresidio.style.opacity) > 0 ||
            !me._closepresidio.style.opacity)
            ? "inherit"
            : "hidden";
      };
      this._svg_7.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_7);
      this._svg_13 = document.createElement("div");
      this._svg_13__img = document.createElement("img");
      this._svg_13__img.className = "ggskin ggskin_svg";
      this._svg_13__img.setAttribute("src", basePath + "images/svg_13.svg");
      this._svg_13__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_13__img["ondragstart"] = function() {
        return false;
      };
      this._svg_13.appendChild(this._svg_13__img);
      this._svg_13.ggId = "Svg 13";
      this._svg_13.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_13.ggVisible = true;
      this._svg_13.className = "ggskin ggskin_svg ";
      this._svg_13.ggType = "svg";
      hs = "";
      hs += "height : 10px;";
      hs += "left : -43px;";
      hs += "position : absolute;";
      hs += "top : 25px;";
      hs += "visibility : inherit;";
      hs += "width : 93px;";
      this._svg_13.setAttribute("style", hs);
      this._svg_13.style[domTransform + "Origin"] = "50% 50%";
      me._svg_13.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_13.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_13.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_13);
      this._cardpresidio = document.createElement("div");
      this._cardpresidio__img = document.createElement("img");
      this._cardpresidio__img.className = "ggskin ggskin_image";
      this._cardpresidio__img.setAttribute(
        "src",
        basePath + "images/cardpresidio.png"
      );
      this._cardpresidio__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardpresidio__img.className = "ggskin ggskin_image";
      this._cardpresidio__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardpresidio__img);
      this._cardpresidio.appendChild(this._cardpresidio__img);
      this._cardpresidio.ggId = "card-presidio";
      this._cardpresidio.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardpresidio.ggVisible = false;
      this._cardpresidio.className = "ggskin ggskin_image ";
      this._cardpresidio.ggType = "image";
      hs = "";
      hs += "height : 263px;";
      hs += "left : -129px;";
      hs += "position : absolute;";
      hs += "top : -117px;";
      hs += "visibility : hidden;";
      hs += "width : 260px;";
      this._cardpresidio.setAttribute("style", hs);
      this._cardpresidio.style[domTransform + "Origin"] = "50% 50%";
      me._cardpresidio.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardpresidio.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardpresidio.ggUpdatePosition = function() {};
      this._cardpresidiotext = document.createElement("div");
      this._cardpresidiotext__img = document.createElement("img");
      this._cardpresidiotext__img.className = "ggskin ggskin_svg";
      this._cardpresidiotext__img.setAttribute(
        "src",
        basePath + "images/cardpresidiotext.svg"
      );
      this._cardpresidiotext__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardpresidiotext__img["ondragstart"] = function() {
        return false;
      };
      this._cardpresidiotext.appendChild(this._cardpresidiotext__img);
      this._cardpresidiotext.ggId = "card-presidio-text";
      this._cardpresidiotext.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardpresidiotext.ggVisible = false;
      this._cardpresidiotext.className = "ggskin ggskin_svg ";
      this._cardpresidiotext.ggType = "svg";
      hs = "";
      hs += "height : 98px;";
      hs += "left : 23px;";
      hs += "position : absolute;";
      hs += "top : 152px;";
      hs += "visibility : hidden;";
      hs += "width : 213px;";
      this._cardpresidiotext.setAttribute("style", hs);
      this._cardpresidiotext.style[domTransform + "Origin"] = "50% 50%";
      me._cardpresidiotext.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardpresidiotext.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardpresidiotext.ggUpdatePosition = function() {};
      this._cardpresidio.appendChild(this._cardpresidiotext);
      this.__div.appendChild(this._cardpresidio);
      this._closepresidio = document.createElement("div");
      this._closepresidio__img = document.createElement("img");
      this._closepresidio__img.className = "ggskin ggskin_svg";
      this._closepresidio__img.setAttribute(
        "src",
        basePath + "images/closepresidio.svg"
      );
      this._closepresidio__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closepresidio__img["ondragstart"] = function() {
        return false;
      };
      this._closepresidio.appendChild(this._closepresidio__img);
      this._closepresidio.ggId = "close-presidio";
      this._closepresidio.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._closepresidio.ggVisible = false;
      this._closepresidio.className = "ggskin ggskin_svg ";
      this._closepresidio.ggType = "svg";
      hs = "";
      hs += "height : 48px;";
      hs += "left : 101px;";
      hs += "position : absolute;";
      hs += "top : -132px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closepresidio.setAttribute("style", hs);
      this._closepresidio.style[domTransform + "Origin"] = "50% 50%";
      me._closepresidio.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closepresidio.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closepresidio.onclick = function() {
        me._closepresidio.style[domTransition] = "none";
        me._closepresidio.style.visibility = "hidden";
        me._closepresidio.ggVisible = false;
        me._cardpresidio.style[domTransition] = "none";
        me._cardpresidio.style.visibility = "hidden";
        me._cardpresidio.ggVisible = false;
        me._cardpresidiotext.style[domTransition] = "none";
        me._cardpresidiotext.style.visibility = "hidden";
        me._cardpresidiotext.ggVisible = false;
      };
      this._closepresidio.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closepresidio);
    } else if (hotspot.skinid == "interaction-mission-cliffs") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-mission-cliffs";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 122px;";
      hs += "position : absolute;";
      hs += "top : 105px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_3 = document.createElement("div");
      this._svg_3__img = document.createElement("img");
      this._svg_3__img.className = "ggskin ggskin_svg";
      this._svg_3__img.setAttribute("src", basePath + "images/svg_3.svg");
      this._svg_3__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_3__img["ondragstart"] = function() {
        return false;
      };
      this._svg_3.appendChild(this._svg_3__img);
      this._svg_3.ggId = "Svg 3";
      this._svg_3.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_3.ggVisible = true;
      this._svg_3.className = "ggskin ggskin_svg ";
      this._svg_3.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_3.setAttribute("style", hs);
      this._svg_3.style[domTransform + "Origin"] = "50% 50%";
      me._svg_3.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_3.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_3.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_3);
      this._svg_255 = document.createElement("div");
      this._svg_255__img = document.createElement("img");
      this._svg_255__img.className = "ggskin ggskin_svg";
      this._svg_255__img.setAttribute("src", basePath + "images/svg_255.svg");
      this._svg_255__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_255__img["ondragstart"] = function() {
        return false;
      };
      this._svg_255.appendChild(this._svg_255__img);
      this._svg_255.ggId = "Svg 255";
      this._svg_255.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_255.ggVisible = true;
      this._svg_255.className = "ggskin ggskin_svg ";
      this._svg_255.ggType = "svg";
      hs = "";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_255.setAttribute("style", hs);
      this._svg_255.style[domTransform + "Origin"] = "50% 50%";
      me._svg_255.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_255.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_255.onclick = function() {
        me._cardmissioncliffs.ggVisible = !me._cardmissioncliffs.ggVisible;
        me._cardmissioncliffs.style[domTransition] = "none";
        me._cardmissioncliffs.style.visibility =
          me._cardmissioncliffs.ggVisible &&
          (Number(me._cardmissioncliffs.style.opacity) > 0 ||
            !me._cardmissioncliffs.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardmissioncliffstext.ggVisible = !me._cardmissioncliffstext
          .ggVisible;
        me._cardmissioncliffstext.style[domTransition] = "none";
        me._cardmissioncliffstext.style.visibility =
          me._cardmissioncliffstext.ggVisible &&
          (Number(me._cardmissioncliffstext.style.opacity) > 0 ||
            !me._cardmissioncliffstext.style.opacity)
            ? "inherit"
            : "hidden";
        me._closemissioncliffs.ggVisible = !me._closemissioncliffs.ggVisible;
        me._closemissioncliffs.style[domTransition] = "none";
        me._closemissioncliffs.style.visibility =
          me._closemissioncliffs.ggVisible &&
          (Number(me._closemissioncliffs.style.opacity) > 0 ||
            !me._closemissioncliffs.style.opacity)
            ? "inherit"
            : "hidden";
      };
      this._svg_255.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_255);
      this._svg_9 = document.createElement("div");
      this._svg_9__img = document.createElement("img");
      this._svg_9__img.className = "ggskin ggskin_svg";
      this._svg_9__img.setAttribute("src", basePath + "images/svg_9.svg");
      this._svg_9__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_9__img["ondragstart"] = function() {
        return false;
      };
      this._svg_9.appendChild(this._svg_9__img);
      this._svg_9.ggId = "Svg 9";
      this._svg_9.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_9.ggVisible = true;
      this._svg_9.className = "ggskin ggskin_svg ";
      this._svg_9.ggType = "svg";
      hs = "";
      hs += "height : 11px;";
      hs += "left : -43px;";
      hs += "position : absolute;";
      hs += "top : 25px;";
      hs += "visibility : inherit;";
      hs += "width : 90px;";
      this._svg_9.setAttribute("style", hs);
      this._svg_9.style[domTransform + "Origin"] = "50% 50%";
      me._svg_9.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_9.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_9.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_9);
      this._cardmissioncliffs = document.createElement("div");
      this._cardmissioncliffs__img = document.createElement("img");
      this._cardmissioncliffs__img.className = "ggskin ggskin_image";
      this._cardmissioncliffs__img.setAttribute(
        "src",
        basePath + "images/cardmissioncliffs.png"
      );
      this._cardmissioncliffs__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardmissioncliffs__img.className = "ggskin ggskin_image";
      this._cardmissioncliffs__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardmissioncliffs__img);
      this._cardmissioncliffs.appendChild(this._cardmissioncliffs__img);
      this._cardmissioncliffs.ggId = "card-mission-cliffs";
      this._cardmissioncliffs.ggParameter = {
        rx: 0,
        ry: 0,
        a: 0,
        sx: 1,
        sy: 1
      };
      this._cardmissioncliffs.ggVisible = false;
      this._cardmissioncliffs.className = "ggskin ggskin_image ";
      this._cardmissioncliffs.ggType = "image";
      hs = "";
      hs += "height : 259px;";
      hs += "left : -136px;";
      hs += "position : absolute;";
      hs += "top : -76px;";
      hs += "visibility : hidden;";
      hs += "width : 260px;";
      this._cardmissioncliffs.setAttribute("style", hs);
      this._cardmissioncliffs.style[domTransform + "Origin"] = "50% 50%";
      me._cardmissioncliffs.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardmissioncliffs.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardmissioncliffs.ggUpdatePosition = function() {};
      this._cardmissioncliffstext = document.createElement("div");
      this._cardmissioncliffstext__img = document.createElement("img");
      this._cardmissioncliffstext__img.className = "ggskin ggskin_svg";
      this._cardmissioncliffstext__img.setAttribute(
        "src",
        basePath + "images/cardmissioncliffstext.svg"
      );
      this._cardmissioncliffstext__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardmissioncliffstext__img["ondragstart"] = function() {
        return false;
      };
      this._cardmissioncliffstext.appendChild(this._cardmissioncliffstext__img);
      this._cardmissioncliffstext.ggId = "card-mission-cliffs-text";
      this._cardmissioncliffstext.ggParameter = {
        rx: 0,
        ry: 0,
        a: 0,
        sx: 1,
        sy: 1
      };
      this._cardmissioncliffstext.ggVisible = false;
      this._cardmissioncliffstext.className = "ggskin ggskin_svg ";
      this._cardmissioncliffstext.ggType = "svg";
      hs = "";
      hs += "height : 84px;";
      hs += "left : 24px;";
      hs += "position : absolute;";
      hs += "top : 157px;";
      hs += "visibility : hidden;";
      hs += "width : 213px;";
      this._cardmissioncliffstext.setAttribute("style", hs);
      this._cardmissioncliffstext.style[domTransform + "Origin"] = "50% 50%";
      me._cardmissioncliffstext.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardmissioncliffstext.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardmissioncliffstext.ggUpdatePosition = function() {};
      this._cardmissioncliffs.appendChild(this._cardmissioncliffstext);
      this.__div.appendChild(this._cardmissioncliffs);
      this._closemissioncliffs = document.createElement("div");
      this._closemissioncliffs__img = document.createElement("img");
      this._closemissioncliffs__img.className = "ggskin ggskin_svg";
      this._closemissioncliffs__img.setAttribute(
        "src",
        basePath + "images/closemissioncliffs.svg"
      );
      this._closemissioncliffs__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closemissioncliffs__img["ondragstart"] = function() {
        return false;
      };
      this._closemissioncliffs.appendChild(this._closemissioncliffs__img);
      this._closemissioncliffs.ggId = "close-mission-cliffs";
      this._closemissioncliffs.ggParameter = {
        rx: 0,
        ry: 0,
        a: 0,
        sx: 1,
        sy: 1
      };
      this._closemissioncliffs.ggVisible = false;
      this._closemissioncliffs.className = "ggskin ggskin_svg ";
      this._closemissioncliffs.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 48px;";
      hs += "left : 91px;";
      hs += "position : absolute;";
      hs += "top : -95px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closemissioncliffs.setAttribute("style", hs);
      this._closemissioncliffs.style[domTransform + "Origin"] = "50% 50%";
      me._closemissioncliffs.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closemissioncliffs.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closemissioncliffs.onclick = function() {
        me._closemissioncliffs.style[domTransition] = "none";
        me._closemissioncliffs.style.visibility = "hidden";
        me._closemissioncliffs.ggVisible = false;
        me._cardmissioncliffs.style[domTransition] = "none";
        me._cardmissioncliffs.style.visibility = "hidden";
        me._cardmissioncliffs.ggVisible = false;
        me._cardmissioncliffstext.style[domTransition] = "none";
        me._cardmissioncliffstext.style.visibility = "hidden";
        me._cardmissioncliffstext.ggVisible = false;
      };
      this._closemissioncliffs.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closemissioncliffs);
    } else if (hotspot.skinid == "interaction-camp") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-camp";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 132px;";
      hs += "position : absolute;";
      hs += "top : 140px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_24 = document.createElement("div");
      this._svg_24__img = document.createElement("img");
      this._svg_24__img.className = "ggskin ggskin_svg";
      this._svg_24__img.setAttribute("src", basePath + "images/svg_24.svg");
      this._svg_24__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_24__img["ondragstart"] = function() {
        return false;
      };
      this._svg_24.appendChild(this._svg_24__img);
      this._svg_24.ggId = "Svg 24";
      this._svg_24.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_24.ggVisible = true;
      this._svg_24.className = "ggskin ggskin_svg ";
      this._svg_24.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_24.setAttribute("style", hs);
      this._svg_24.style[domTransform + "Origin"] = "50% 50%";
      me._svg_24.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_24.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_24.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_24);
      this._svg_25 = document.createElement("div");
      this._svg_25__img = document.createElement("img");
      this._svg_25__img.className = "ggskin ggskin_svg";
      this._svg_25__img.setAttribute("src", basePath + "images/svg_25.svg");
      this._svg_25__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_25__img["ondragstart"] = function() {
        return false;
      };
      this._svg_25.appendChild(this._svg_25__img);
      this._svg_25.ggId = "Svg 25";
      this._svg_25.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_25.ggVisible = true;
      this._svg_25.className = "ggskin ggskin_svg ";
      this._svg_25.ggType = "svg";
      hs = "";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_25.setAttribute("style", hs);
      this._svg_25.style[domTransform + "Origin"] = "50% 50%";
      me._svg_25.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_25.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_25.onclick = function() {
        me._closecamp.ggVisible = !me._closecamp.ggVisible;
        me._closecamp.style[domTransition] = "none";
        me._closecamp.style.visibility =
          me._closecamp.ggVisible &&
          (Number(me._closecamp.style.opacity) > 0 ||
            !me._closecamp.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardcamp.ggVisible = !me._cardcamp.ggVisible;
        me._cardcamp.style[domTransition] = "none";
        me._cardcamp.style.visibility =
          me._cardcamp.ggVisible &&
          (Number(me._cardcamp.style.opacity) > 0 ||
            !me._cardcamp.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardcamptext.ggVisible = !me._cardcamptext.ggVisible;
        me._cardcamptext.style[domTransition] = "none";
        me._cardcamptext.style.visibility =
          me._cardcamptext.ggVisible &&
          (Number(me._cardcamptext.style.opacity) > 0 ||
            !me._cardcamptext.style.opacity)
            ? "inherit"
            : "hidden";
      };
      this._svg_25.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_25);
      this._svg_26 = document.createElement("div");
      this._svg_26__img = document.createElement("img");
      this._svg_26__img.className = "ggskin ggskin_svg";
      this._svg_26__img.setAttribute("src", basePath + "images/svg_26.svg");
      this._svg_26__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_26__img["ondragstart"] = function() {
        return false;
      };
      this._svg_26.appendChild(this._svg_26__img);
      this._svg_26.ggId = "Svg 26";
      this._svg_26.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_26.ggVisible = true;
      this._svg_26.className = "ggskin ggskin_svg ";
      this._svg_26.ggType = "svg";
      hs = "";
      hs += "height : 12px;";
      hs += "left : -38px;";
      hs += "position : absolute;";
      hs += "top : 25px;";
      hs += "visibility : inherit;";
      hs += "width : 82px;";
      this._svg_26.setAttribute("style", hs);
      this._svg_26.style[domTransform + "Origin"] = "50% 50%";
      me._svg_26.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_26.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_26.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_26);
      this._cardcamp = document.createElement("div");
      this._cardcamp__img = document.createElement("img");
      this._cardcamp__img.className = "ggskin ggskin_image";
      this._cardcamp__img.setAttribute("src", basePath + "images/cardcamp.png");
      this._cardcamp__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardcamp__img.className = "ggskin ggskin_image";
      this._cardcamp__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardcamp__img);
      this._cardcamp.appendChild(this._cardcamp__img);
      this._cardcamp.ggId = "card-camp";
      this._cardcamp.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardcamp.ggVisible = false;
      this._cardcamp.className = "ggskin ggskin_image ";
      this._cardcamp.ggType = "image";
      hs = "";
      hs += "height : 261px;";
      hs += "left : -144px;";
      hs += "position : absolute;";
      hs += "top : -66px;";
      hs += "visibility : hidden;";
      hs += "width : 260px;";
      this._cardcamp.setAttribute("style", hs);
      this._cardcamp.style[domTransform + "Origin"] = "50% 50%";
      me._cardcamp.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardcamp.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardcamp.ggUpdatePosition = function() {};
      this._cardcamptext = document.createElement("div");
      this._cardcamptext__img = document.createElement("img");
      this._cardcamptext__img.className = "ggskin ggskin_svg";
      this._cardcamptext__img.setAttribute(
        "src",
        basePath + "images/cardcamptext.svg"
      );
      this._cardcamptext__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardcamptext__img["ondragstart"] = function() {
        return false;
      };
      this._cardcamptext.appendChild(this._cardcamptext__img);
      this._cardcamptext.ggId = "card-camp-text";
      this._cardcamptext.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardcamptext.ggVisible = false;
      this._cardcamptext.className = "ggskin ggskin_svg ";
      this._cardcamptext.ggType = "svg";
      hs = "";
      hs += "height : 102px;";
      hs += "left : 25px;";
      hs += "position : absolute;";
      hs += "top : 150px;";
      hs += "visibility : hidden;";
      hs += "width : 213px;";
      this._cardcamptext.setAttribute("style", hs);
      this._cardcamptext.style[domTransform + "Origin"] = "50% 50%";
      me._cardcamptext.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardcamptext.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardcamptext.ggUpdatePosition = function() {};
      this._cardcamp.appendChild(this._cardcamptext);
      this.__div.appendChild(this._cardcamp);
      this._closecamp = document.createElement("div");
      this._closecamp__img = document.createElement("img");
      this._closecamp__img.className = "ggskin ggskin_svg";
      this._closecamp__img.setAttribute(
        "src",
        basePath + "images/closecamp.svg"
      );
      this._closecamp__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closecamp__img["ondragstart"] = function() {
        return false;
      };
      this._closecamp.appendChild(this._closecamp__img);
      this._closecamp.ggId = "close-camp";
      this._closecamp.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._closecamp.ggVisible = false;
      this._closecamp.className = "ggskin ggskin_svg ";
      this._closecamp.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 48px;";
      hs += "left : 83px;";
      hs += "position : absolute;";
      hs += "top : -84px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closecamp.setAttribute("style", hs);
      this._closecamp.style[domTransform + "Origin"] = "50% 50%";
      me._closecamp.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closecamp.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closecamp.onclick = function() {
        me._closecamp.style[domTransition] = "none";
        me._closecamp.style.visibility = "hidden";
        me._closecamp.ggVisible = false;
        me._cardcamp.style[domTransition] = "none";
        me._cardcamp.style.visibility = "hidden";
        me._cardcamp.ggVisible = false;
        me._cardcamptext.style[domTransition] = "none";
        me._cardcamptext.style.visibility = "hidden";
        me._cardcamptext.ggVisible = false;
      };
      this._closecamp.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closecamp);
    } else if (hotspot.skinid == "interaction-tuolumne") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-tuolumne";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 132px;";
      hs += "position : absolute;";
      hs += "top : 140px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_22 = document.createElement("div");
      this._svg_22__img = document.createElement("img");
      this._svg_22__img.className = "ggskin ggskin_svg";
      this._svg_22__img.setAttribute("src", basePath + "images/svg_22.svg");
      this._svg_22__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_22__img["ondragstart"] = function() {
        return false;
      };
      this._svg_22.appendChild(this._svg_22__img);
      this._svg_22.ggId = "Svg 22";
      this._svg_22.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_22.ggVisible = true;
      this._svg_22.className = "ggskin ggskin_svg ";
      this._svg_22.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_22.setAttribute("style", hs);
      this._svg_22.style[domTransform + "Origin"] = "50% 50%";
      me._svg_22.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_22.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_22.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_22);
      this._svg_23 = document.createElement("div");
      this._svg_23__img = document.createElement("img");
      this._svg_23__img.className = "ggskin ggskin_svg";
      this._svg_23__img.setAttribute("src", basePath + "images/svg_23.svg");
      this._svg_23__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_23__img["ondragstart"] = function() {
        return false;
      };
      this._svg_23.appendChild(this._svg_23__img);
      this._svg_23.ggId = "Svg 23";
      this._svg_23.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_23.ggVisible = true;
      this._svg_23.className = "ggskin ggskin_svg ";
      this._svg_23.ggType = "svg";
      hs = "";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_23.setAttribute("style", hs);
      this._svg_23.style[domTransform + "Origin"] = "50% 50%";
      me._svg_23.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_23.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_23.onclick = function() {
        me._closetuolumne.ggVisible = !me._closetuolumne.ggVisible;
        me._closetuolumne.style[domTransition] = "none";
        me._closetuolumne.style.visibility =
          me._closetuolumne.ggVisible &&
          (Number(me._closetuolumne.style.opacity) > 0 ||
            !me._closetuolumne.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardtuolumne.ggVisible = !me._cardtuolumne.ggVisible;
        me._cardtuolumne.style[domTransition] = "none";
        me._cardtuolumne.style.visibility =
          me._cardtuolumne.ggVisible &&
          (Number(me._cardtuolumne.style.opacity) > 0 ||
            !me._cardtuolumne.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardtuolumnetext.ggVisible = !me._cardtuolumnetext.ggVisible;
        me._cardtuolumnetext.style[domTransition] = "none";
        me._cardtuolumnetext.style.visibility =
          me._cardtuolumnetext.ggVisible &&
          (Number(me._cardtuolumnetext.style.opacity) > 0 ||
            !me._cardtuolumnetext.style.opacity)
            ? "inherit"
            : "hidden";
      };
      this._svg_23.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_23);
      this._svg_18 = document.createElement("div");
      this._svg_18__img = document.createElement("img");
      this._svg_18__img.className = "ggskin ggskin_svg";
      this._svg_18__img.setAttribute("src", basePath + "images/svg_18.svg");
      this._svg_18__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_18__img["ondragstart"] = function() {
        return false;
      };
      this._svg_18.appendChild(this._svg_18__img);
      this._svg_18.ggId = "Svg 18";
      this._svg_18.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_18.ggVisible = true;
      this._svg_18.className = "ggskin ggskin_svg ";
      this._svg_18.ggType = "svg";
      hs = "";
      hs += "height : 10px;";
      hs += "left : -30px;";
      hs += "position : absolute;";
      hs += "top : 25px;";
      hs += "visibility : inherit;";
      hs += "width : 63px;";
      this._svg_18.setAttribute("style", hs);
      this._svg_18.style[domTransform + "Origin"] = "50% 50%";
      me._svg_18.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_18.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_18.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_18);
      this._cardtuolumne = document.createElement("div");
      this._cardtuolumne__img = document.createElement("img");
      this._cardtuolumne__img.className = "ggskin ggskin_image";
      this._cardtuolumne__img.setAttribute(
        "src",
        basePath + "images/cardtuolumne.png"
      );
      this._cardtuolumne__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardtuolumne__img.className = "ggskin ggskin_image";
      this._cardtuolumne__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardtuolumne__img);
      this._cardtuolumne.appendChild(this._cardtuolumne__img);
      this._cardtuolumne.ggId = "card-tuolumne";
      this._cardtuolumne.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardtuolumne.ggVisible = false;
      this._cardtuolumne.className = "ggskin ggskin_image ";
      this._cardtuolumne.ggType = "image";
      hs = "";
      hs += "height : 260px;";
      hs += "left : -34px;";
      hs += "position : absolute;";
      hs += "top : -117px;";
      hs += "visibility : hidden;";
      hs += "width : 260px;";
      this._cardtuolumne.setAttribute("style", hs);
      this._cardtuolumne.style[domTransform + "Origin"] = "50% 50%";
      me._cardtuolumne.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardtuolumne.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardtuolumne.ggUpdatePosition = function() {};
      this._cardtuolumnetext = document.createElement("div");
      this._cardtuolumnetext__img = document.createElement("img");
      this._cardtuolumnetext__img.className = "ggskin ggskin_svg";
      this._cardtuolumnetext__img.setAttribute(
        "src",
        basePath + "images/cardtuolumnetext.svg"
      );
      this._cardtuolumnetext__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardtuolumnetext__img["ondragstart"] = function() {
        return false;
      };
      this._cardtuolumnetext.appendChild(this._cardtuolumnetext__img);
      this._cardtuolumnetext.ggId = "card-tuolumne-text";
      this._cardtuolumnetext.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardtuolumnetext.ggVisible = false;
      this._cardtuolumnetext.className = "ggskin ggskin_svg ";
      this._cardtuolumnetext.ggType = "svg";
      hs = "";
      hs += "height : 84px;";
      hs += "left : 23px;";
      hs += "position : absolute;";
      hs += "top : 154px;";
      hs += "visibility : hidden;";
      hs += "width : 213px;";
      this._cardtuolumnetext.setAttribute("style", hs);
      this._cardtuolumnetext.style[domTransform + "Origin"] = "50% 50%";
      me._cardtuolumnetext.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardtuolumnetext.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardtuolumnetext.ggUpdatePosition = function() {};
      this._cardtuolumne.appendChild(this._cardtuolumnetext);
      this.__div.appendChild(this._cardtuolumne);
      this._closetuolumne = document.createElement("div");
      this._closetuolumne__img = document.createElement("img");
      this._closetuolumne__img.className = "ggskin ggskin_svg";
      this._closetuolumne__img.setAttribute(
        "src",
        basePath + "images/closetuolumne.svg"
      );
      this._closetuolumne__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closetuolumne__img["ondragstart"] = function() {
        return false;
      };
      this._closetuolumne.appendChild(this._closetuolumne__img);
      this._closetuolumne.ggId = "close-tuolumne";
      this._closetuolumne.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._closetuolumne.ggVisible = false;
      this._closetuolumne.className = "ggskin ggskin_svg ";
      this._closetuolumne.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 48px;";
      hs += "left : 193px;";
      hs += "position : absolute;";
      hs += "top : -133px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closetuolumne.setAttribute("style", hs);
      this._closetuolumne.style[domTransform + "Origin"] = "50% 50%";
      me._closetuolumne.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closetuolumne.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closetuolumne.onclick = function() {
        me._closetuolumne.style[domTransition] = "none";
        me._closetuolumne.style.visibility = "hidden";
        me._closetuolumne.ggVisible = false;
        me._cardtuolumne.style[domTransition] = "none";
        me._cardtuolumne.style.visibility = "hidden";
        me._cardtuolumne.ggVisible = false;
        me._cardtuolumnetext.style[domTransition] = "none";
        me._cardtuolumnetext.style.visibility = "hidden";
        me._cardtuolumnetext.ggVisible = false;
      };
      this._closetuolumne.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closetuolumne);
    } else if (hotspot.skinid == "interaction-tioga-road") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-tioga-road";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 132px;";
      hs += "position : absolute;";
      hs += "top : 140px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_20 = document.createElement("div");
      this._svg_20__img = document.createElement("img");
      this._svg_20__img.className = "ggskin ggskin_svg";
      this._svg_20__img.setAttribute("src", basePath + "images/svg_20.svg");
      this._svg_20__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_20__img["ondragstart"] = function() {
        return false;
      };
      this._svg_20.appendChild(this._svg_20__img);
      this._svg_20.ggId = "Svg 20";
      this._svg_20.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_20.ggVisible = true;
      this._svg_20.className = "ggskin ggskin_svg ";
      this._svg_20.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_20.setAttribute("style", hs);
      this._svg_20.style[domTransform + "Origin"] = "50% 50%";
      me._svg_20.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_20.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_20.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_20);
      this._svg_16 = document.createElement("div");
      this._svg_16__img = document.createElement("img");
      this._svg_16__img.className = "ggskin ggskin_svg";
      this._svg_16__img.setAttribute("src", basePath + "images/svg_16.svg");
      this._svg_16__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_16__img["ondragstart"] = function() {
        return false;
      };
      this._svg_16.appendChild(this._svg_16__img);
      this._svg_16.ggId = "Svg 16";
      this._svg_16.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_16.ggVisible = true;
      this._svg_16.className = "ggskin ggskin_svg ";
      this._svg_16.ggType = "svg";
      hs = "";
      hs += "height : 12px;";
      hs += "left : -35px;";
      hs += "position : absolute;";
      hs += "top : 25px;";
      hs += "visibility : inherit;";
      hs += "width : 73px;";
      this._svg_16.setAttribute("style", hs);
      this._svg_16.style[domTransform + "Origin"] = "50% 50%";
      me._svg_16.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_16.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_16.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_16);
      this._svg_21 = document.createElement("div");
      this._svg_21__img = document.createElement("img");
      this._svg_21__img.className = "ggskin ggskin_svg";
      this._svg_21__img.setAttribute("src", basePath + "images/svg_21.svg");
      this._svg_21__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_21__img["ondragstart"] = function() {
        return false;
      };
      this._svg_21.appendChild(this._svg_21__img);
      this._svg_21.ggId = "Svg 21";
      this._svg_21.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_21.ggVisible = true;
      this._svg_21.className = "ggskin ggskin_svg ";
      this._svg_21.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_21.setAttribute("style", hs);
      this._svg_21.style[domTransform + "Origin"] = "50% 50%";
      me._svg_21.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_21.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_21.onclick = function() {
        me._cardtioga.ggVisible = !me._cardtioga.ggVisible;
        me._cardtioga.style[domTransition] = "none";
        me._cardtioga.style.visibility =
          me._cardtioga.ggVisible &&
          (Number(me._cardtioga.style.opacity) > 0 ||
            !me._cardtioga.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardtiogatext.ggVisible = !me._cardtiogatext.ggVisible;
        me._cardtiogatext.style[domTransition] = "none";
        me._cardtiogatext.style.visibility =
          me._cardtiogatext.ggVisible &&
          (Number(me._cardtiogatext.style.opacity) > 0 ||
            !me._cardtiogatext.style.opacity)
            ? "inherit"
            : "hidden";
        me._closetioga.ggVisible = !me._closetioga.ggVisible;
        me._closetioga.style[domTransition] = "none";
        me._closetioga.style.visibility =
          me._closetioga.ggVisible &&
          (Number(me._closetioga.style.opacity) > 0 ||
            !me._closetioga.style.opacity)
            ? "inherit"
            : "hidden";
      };
      this._svg_21.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_21);
      this._cardtioga = document.createElement("div");
      this._cardtioga__img = document.createElement("img");
      this._cardtioga__img.className = "ggskin ggskin_image";
      this._cardtioga__img.setAttribute(
        "src",
        basePath + "images/cardtioga.png"
      );
      this._cardtioga__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardtioga__img.className = "ggskin ggskin_image";
      this._cardtioga__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardtioga__img);
      this._cardtioga.appendChild(this._cardtioga__img);
      this._cardtioga.ggId = "card-tioga";
      this._cardtioga.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardtioga.ggVisible = false;
      this._cardtioga.className = "ggskin ggskin_image ";
      this._cardtioga.ggType = "image";
      hs = "";
      hs += "height : 251px;";
      hs += "left : -123px;";
      hs += "position : absolute;";
      hs += "top : -166px;";
      hs += "visibility : hidden;";
      hs += "width : 260px;";
      this._cardtioga.setAttribute("style", hs);
      this._cardtioga.style[domTransform + "Origin"] = "50% 50%";
      me._cardtioga.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardtioga.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardtioga.ggUpdatePosition = function() {};
      this._cardtiogatext = document.createElement("div");
      this._cardtiogatext__img = document.createElement("img");
      this._cardtiogatext__img.className = "ggskin ggskin_svg";
      this._cardtiogatext__img.setAttribute(
        "src",
        basePath + "images/cardtiogatext.svg"
      );
      this._cardtiogatext__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardtiogatext__img["ondragstart"] = function() {
        return false;
      };
      this._cardtiogatext.appendChild(this._cardtiogatext__img);
      this._cardtiogatext.ggId = "card-tioga-text";
      this._cardtiogatext.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardtiogatext.ggVisible = false;
      this._cardtiogatext.className = "ggskin ggskin_svg ";
      this._cardtiogatext.ggType = "svg";
      hs = "";
      hs += "height : 83px;";
      hs += "left : 24px;";
      hs += "position : absolute;";
      hs += "top : 149px;";
      hs += "visibility : hidden;";
      hs += "width : 213px;";
      this._cardtiogatext.setAttribute("style", hs);
      this._cardtiogatext.style[domTransform + "Origin"] = "50% 50%";
      me._cardtiogatext.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardtiogatext.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardtiogatext.ggUpdatePosition = function() {};
      this._cardtioga.appendChild(this._cardtiogatext);
      this.__div.appendChild(this._cardtioga);
      this._closetioga = document.createElement("div");
      this._closetioga__img = document.createElement("img");
      this._closetioga__img.className = "ggskin ggskin_svg";
      this._closetioga__img.setAttribute(
        "src",
        basePath + "images/closetioga.svg"
      );
      this._closetioga__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closetioga__img["ondragstart"] = function() {
        return false;
      };
      this._closetioga.appendChild(this._closetioga__img);
      this._closetioga.ggId = "close-tioga";
      this._closetioga.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._closetioga.ggVisible = false;
      this._closetioga.className = "ggskin ggskin_svg ";
      this._closetioga.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 48px;";
      hs += "left : 105px;";
      hs += "position : absolute;";
      hs += "top : -184px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closetioga.setAttribute("style", hs);
      this._closetioga.style[domTransform + "Origin"] = "50% 50%";
      me._closetioga.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closetioga.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closetioga.onclick = function() {
        me._closetioga.style[domTransition] = "none";
        me._closetioga.style.visibility = "hidden";
        me._closetioga.ggVisible = false;
        me._cardtioga.style[domTransition] = "none";
        me._cardtioga.style.visibility = "hidden";
        me._cardtioga.ggVisible = false;
        me._cardtiogatext.style[domTransition] = "none";
        me._cardtiogatext.style.visibility = "hidden";
        me._cardtiogatext.ggVisible = false;
      };
      this._closetioga.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closetioga);
    } else if (hotspot.skinid == "interaction-death") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-death";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 132px;";
      hs += "position : absolute;";
      hs += "top : 140px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_61 = document.createElement("div");
      this._svg_61__img = document.createElement("img");
      this._svg_61__img.className = "ggskin ggskin_svg";
      this._svg_61__img.setAttribute("src", basePath + "images/svg_61.svg");
      this._svg_61__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_61__img["ondragstart"] = function() {
        return false;
      };
      this._svg_61.appendChild(this._svg_61__img);
      this._svg_61.ggId = "Svg 61";
      this._svg_61.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_61.ggVisible = true;
      this._svg_61.className = "ggskin ggskin_svg ";
      this._svg_61.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_61.setAttribute("style", hs);
      this._svg_61.style[domTransform + "Origin"] = "50% 50%";
      me._svg_61.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_61.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_61.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_61);
      this._svg_60 = document.createElement("div");
      this._svg_60__img = document.createElement("img");
      this._svg_60__img.className = "ggskin ggskin_svg";
      this._svg_60__img.setAttribute("src", basePath + "images/svg_60.svg");
      this._svg_60__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_60__img["ondragstart"] = function() {
        return false;
      };
      this._svg_60.appendChild(this._svg_60__img);
      this._svg_60.ggId = "Svg 60";
      this._svg_60.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_60.ggVisible = true;
      this._svg_60.className = "ggskin ggskin_svg ";
      this._svg_60.ggType = "svg";
      hs = "";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_60.setAttribute("style", hs);
      this._svg_60.style[domTransform + "Origin"] = "50% 50%";
      me._svg_60.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_60.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_60.onclick = function() {
        me.player.openNext("{node3}", "");
      };
      this._svg_60.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_60);
      this._svg_30 = document.createElement("div");
      this._svg_30__img = document.createElement("img");
      this._svg_30__img.className = "ggskin ggskin_svg";
      this._svg_30__img.setAttribute("src", basePath + "images/svg_30.svg");
      this._svg_30__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_30__img["ondragstart"] = function() {
        return false;
      };
      this._svg_30.appendChild(this._svg_30__img);
      this._svg_30.ggId = "Svg 30";
      this._svg_30.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_30.ggVisible = true;
      this._svg_30.className = "ggskin ggskin_svg ";
      this._svg_30.ggType = "svg";
      hs = "";
      hs += "height : 12px;";
      hs += "left : -37px;";
      hs += "position : absolute;";
      hs += "top : 25px;";
      hs += "visibility : inherit;";
      hs += "width : 81px;";
      this._svg_30.setAttribute("style", hs);
      this._svg_30.style[domTransform + "Origin"] = "50% 50%";
      me._svg_30.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_30.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_30.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_30);
    } else if (hotspot.skinid == "interaction-video-elCap") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-video-elCap";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 132px;";
      hs += "position : absolute;";
      hs += "top : 140px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_422 = document.createElement("div");
      this._svg_422__img = document.createElement("img");
      this._svg_422__img.className = "ggskin ggskin_svg";
      this._svg_422__img.setAttribute("src", basePath + "images/svg_422.svg");
      this._svg_422__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_422__img["ondragstart"] = function() {
        return false;
      };
      this._svg_422.appendChild(this._svg_422__img);
      this._svg_422.ggId = "Svg 42";
      this._svg_422.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_422.ggVisible = true;
      this._svg_422.className = "ggskin ggskin_svg ";
      this._svg_422.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_422.setAttribute("style", hs);
      this._svg_422.style[domTransform + "Origin"] = "50% 50%";
      me._svg_422.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_422.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_422.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_422);
      this._svg_1102 = document.createElement("div");
      this._svg_1102__img = document.createElement("img");
      this._svg_1102__img.className = "ggskin ggskin_svg";
      this._svg_1102__img.setAttribute("src", basePath + "images/svg_1102.svg");
      this._svg_1102__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_1102__img["ondragstart"] = function() {
        return false;
      };
      this._svg_1102.appendChild(this._svg_1102__img);
      this._svg_1102.ggId = "Svg 1102";
      this._svg_1102.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_1102.ggVisible = true;
      this._svg_1102.className = "ggskin ggskin_svg ";
      this._svg_1102.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_1102.setAttribute("style", hs);
      this._svg_1102.style[domTransform + "Origin"] = "50% 50%";
      me._svg_1102.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_1102.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_1102.onclick = function() {
        me._videoelcap.ggVisible = !me._videoelcap.ggVisible;
        me._videoelcap.style[domTransition] = "none";
        me._videoelcap.style.visibility =
          me._videoelcap.ggVisible &&
          (Number(me._videoelcap.style.opacity) > 0 ||
            !me._videoelcap.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardvideoelcap.ggVisible = !me._cardvideoelcap.ggVisible;
        me._cardvideoelcap.style[domTransition] = "none";
        me._cardvideoelcap.style.visibility =
          me._cardvideoelcap.ggVisible &&
          (Number(me._cardvideoelcap.style.opacity) > 0 ||
            !me._cardvideoelcap.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardvideoelcaptext.ggVisible = !me._cardvideoelcaptext.ggVisible;
        me._cardvideoelcaptext.style[domTransition] = "none";
        me._cardvideoelcaptext.style.visibility =
          me._cardvideoelcaptext.ggVisible &&
          (Number(me._cardvideoelcaptext.style.opacity) > 0 ||
            !me._cardvideoelcaptext.style.opacity)
            ? "inherit"
            : "hidden";
        if (me.player.transitionsDisabled) {
          me._videoelcap.style[domTransition] = "none";
        } else {
          me._videoelcap.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me._videoelcap.style.opacity = "1";
        me._videoelcap.style.visibility = me._videoelcap.ggVisible
          ? "inherit"
          : "hidden";
        me._closevideoelcap.ggVisible = !me._closevideoelcap.ggVisible;
        me._closevideoelcap.style[domTransition] = "none";
        me._closevideoelcap.style.visibility =
          me._closevideoelcap.ggVisible &&
          (Number(me._closevideoelcap.style.opacity) > 0 ||
            !me._closevideoelcap.style.opacity)
            ? "inherit"
            : "hidden";
      };
      this._svg_1102.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_1102);
      this._svg_45 = document.createElement("div");
      this._svg_45__img = document.createElement("img");
      this._svg_45__img.className = "ggskin ggskin_svg";
      this._svg_45__img.setAttribute("src", basePath + "images/svg_45.svg");
      this._svg_45__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_45__img["ondragstart"] = function() {
        return false;
      };
      this._svg_45.appendChild(this._svg_45__img);
      this._svg_45.ggId = "Svg 45";
      this._svg_45.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_45.ggVisible = true;
      this._svg_45.className = "ggskin ggskin_svg ";
      this._svg_45.ggType = "svg";
      hs = "";
      hs += "height : 12px;";
      hs += "left : -19px;";
      hs += "position : absolute;";
      hs += "top : 26px;";
      hs += "visibility : inherit;";
      hs += "width : 40px;";
      this._svg_45.setAttribute("style", hs);
      this._svg_45.style[domTransform + "Origin"] = "50% 50%";
      me._svg_45.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_45.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_45.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_45);
      this._cardvideoelcap = document.createElement("div");
      this._cardvideoelcap__img = document.createElement("img");
      this._cardvideoelcap__img.className = "ggskin ggskin_image";
      this._cardvideoelcap__img.setAttribute(
        "src",
        basePath + "images/cardvideoelcap.png"
      );
      this._cardvideoelcap__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardvideoelcap__img.className = "ggskin ggskin_image";
      this._cardvideoelcap__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardvideoelcap__img);
      this._cardvideoelcap.appendChild(this._cardvideoelcap__img);
      this._cardvideoelcap.ggId = "card-video-elCap";
      this._cardvideoelcap.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardvideoelcap.ggVisible = false;
      this._cardvideoelcap.className = "ggskin ggskin_image ";
      this._cardvideoelcap.ggType = "image";
      hs = "";
      hs += "height : 285px;";
      hs += "left : -128px;";
      hs += "position : absolute;";
      hs += "top : -65px;";
      hs += "visibility : hidden;";
      hs += "width : 260px;";
      this._cardvideoelcap.setAttribute("style", hs);
      this._cardvideoelcap.style[domTransform + "Origin"] = "50% 50%";
      me._cardvideoelcap.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardvideoelcap.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardvideoelcap.ggUpdatePosition = function() {};
      this._cardvideoelcaptext = document.createElement("div");
      this._cardvideoelcaptext__img = document.createElement("img");
      this._cardvideoelcaptext__img.className = "ggskin ggskin_svg";
      this._cardvideoelcaptext__img.setAttribute(
        "src",
        basePath + "images/cardvideoelcaptext.svg"
      );
      this._cardvideoelcaptext__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardvideoelcaptext__img["ondragstart"] = function() {
        return false;
      };
      this._cardvideoelcaptext.appendChild(this._cardvideoelcaptext__img);
      this._cardvideoelcaptext.ggId = "card-video-elCap-text";
      this._cardvideoelcaptext.ggParameter = {
        rx: 0,
        ry: 0,
        a: 0,
        sx: 1,
        sy: 1
      };
      this._cardvideoelcaptext.ggVisible = false;
      this._cardvideoelcaptext.className = "ggskin ggskin_svg ";
      this._cardvideoelcaptext.ggType = "svg";
      hs = "";
      hs += "height : 117px;";
      hs += "left : 22px;";
      hs += "position : absolute;";
      hs += "top : 154px;";
      hs += "visibility : hidden;";
      hs += "width : 213px;";
      this._cardvideoelcaptext.setAttribute("style", hs);
      this._cardvideoelcaptext.style[domTransform + "Origin"] = "50% 50%";
      me._cardvideoelcaptext.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardvideoelcaptext.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardvideoelcaptext.ggUpdatePosition = function() {};
      this._cardvideoelcap.appendChild(this._cardvideoelcaptext);
      this.__div.appendChild(this._cardvideoelcap);
      this._videoelcap = document.createElement("div");
      this._videoelcap__text = document.createElement("div");
      this._videoelcap.className = "ggskin ggskin_textdiv";
      this._videoelcap.ggTextDiv = this._videoelcap__text;
      this._videoelcap.ggId = "video-elCap";
      this._videoelcap.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._videoelcap.ggVisible = false;
      this._videoelcap.className = "ggskin ggskin_text ";
      this._videoelcap.ggType = "text";
      hs = "";
      hs += "height : 146px;";
      hs += "left : -127px;";
      hs += "opacity : 0;";
      hs += "position : absolute;";
      hs += "top : -64px;";
      hs += "visibility : hidden;";
      hs += "width : 258px;";
      this._videoelcap.setAttribute("style", hs);
      this._videoelcap.style[domTransform + "Origin"] = "50% 50%";
      hs = "position:absolute;";
      hs += "left: 0px;";
      hs += "top:  0px;";
      hs += "width: 258px;";
      hs += "height: 146px;";
      hs += "border: 0px solid #000000;";
      hs += "color: #000000;";
      hs += "text-align: center;";
      hs += "white-space: nowrap;";
      hs += "padding: 0px 1px 0px 1px;";
      hs += "overflow: hidden;";
      this._videoelcap__text.setAttribute("style", hs);
      this._videoelcap__text.innerHTML =
        '<iframe src="https://player.vimeo.com/video/120579381?title=0&byline=0&portrait=0" width="260" height="146" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      this._videoelcap.appendChild(this._videoelcap__text);
      me._videoelcap.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._videoelcap.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._videoelcap.ggUpdatePosition = function() {};
      this.__div.appendChild(this._videoelcap);
      this._closevideoelcap = document.createElement("div");
      this._closevideoelcap__img = document.createElement("img");
      this._closevideoelcap__img.className = "ggskin ggskin_svg";
      this._closevideoelcap__img.setAttribute(
        "src",
        basePath + "images/closevideoelcap.svg"
      );
      this._closevideoelcap__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closevideoelcap__img["ondragstart"] = function() {
        return false;
      };
      this._closevideoelcap.appendChild(this._closevideoelcap__img);
      this._closevideoelcap.ggId = "close-video-elCap";
      this._closevideoelcap.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._closevideoelcap.ggVisible = false;
      this._closevideoelcap.className = "ggskin ggskin_svg ";
      this._closevideoelcap.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 48px;";
      hs += "left : 100px;";
      hs += "position : absolute;";
      hs += "top : -81px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closevideoelcap.setAttribute("style", hs);
      this._closevideoelcap.style[domTransform + "Origin"] = "50% 50%";
      me._closevideoelcap.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closevideoelcap.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closevideoelcap.onclick = function() {
        me._closevideoelcap.style[domTransition] = "none";
        me._closevideoelcap.style.visibility = "hidden";
        me._closevideoelcap.ggVisible = false;
        me._videoelcap.style[domTransition] = "none";
        me._videoelcap.style.visibility = "hidden";
        me._videoelcap.ggVisible = false;
        me._cardvideoelcap.style[domTransition] = "none";
        me._cardvideoelcap.style.visibility = "hidden";
        me._cardvideoelcap.ggVisible = false;
        me._videoelcap.style[domTransition] = "none";
        me._videoelcap.style.opacity = "0";
        me._videoelcap.style.visibility = "hidden";
        me._cardvideoelcaptext.style[domTransition] = "none";
        me._cardvideoelcaptext.style.visibility = "hidden";
        me._cardvideoelcaptext.ggVisible = false;
      };
      this._closevideoelcap.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closevideoelcap);
    } else if (hotspot.skinid == "interaction-video-johny") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-video-johny";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 132px;";
      hs += "position : absolute;";
      hs += "top : 140px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_421 = document.createElement("div");
      this._svg_421__img = document.createElement("img");
      this._svg_421__img.className = "ggskin ggskin_svg";
      this._svg_421__img.setAttribute("src", basePath + "images/svg_421.svg");
      this._svg_421__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_421__img["ondragstart"] = function() {
        return false;
      };
      this._svg_421.appendChild(this._svg_421__img);
      this._svg_421.ggId = "Svg 42";
      this._svg_421.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_421.ggVisible = true;
      this._svg_421.className = "ggskin ggskin_svg ";
      this._svg_421.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_421.setAttribute("style", hs);
      this._svg_421.style[domTransform + "Origin"] = "50% 50%";
      me._svg_421.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_421.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_421.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_421);
      this._svg_1101 = document.createElement("div");
      this._svg_1101__img = document.createElement("img");
      this._svg_1101__img.className = "ggskin ggskin_svg";
      this._svg_1101__img.setAttribute("src", basePath + "images/svg_1101.svg");
      this._svg_1101__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_1101__img["ondragstart"] = function() {
        return false;
      };
      this._svg_1101.appendChild(this._svg_1101__img);
      this._svg_1101.ggId = "Svg 1101";
      this._svg_1101.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_1101.ggVisible = true;
      this._svg_1101.className = "ggskin ggskin_svg ";
      this._svg_1101.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_1101.setAttribute("style", hs);
      this._svg_1101.style[domTransform + "Origin"] = "50% 50%";
      me._svg_1101.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_1101.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_1101.onclick = function() {
        me._videojohny.ggVisible = !me._videojohny.ggVisible;
        me._videojohny.style[domTransition] = "none";
        me._videojohny.style.visibility =
          me._videojohny.ggVisible &&
          (Number(me._videojohny.style.opacity) > 0 ||
            !me._videojohny.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardvideojohny.ggVisible = !me._cardvideojohny.ggVisible;
        me._cardvideojohny.style[domTransition] = "none";
        me._cardvideojohny.style.visibility =
          me._cardvideojohny.ggVisible &&
          (Number(me._cardvideojohny.style.opacity) > 0 ||
            !me._cardvideojohny.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardvideojohnytext.ggVisible = !me._cardvideojohnytext.ggVisible;
        me._cardvideojohnytext.style[domTransition] = "none";
        me._cardvideojohnytext.style.visibility =
          me._cardvideojohnytext.ggVisible &&
          (Number(me._cardvideojohnytext.style.opacity) > 0 ||
            !me._cardvideojohnytext.style.opacity)
            ? "inherit"
            : "hidden";
        if (me.player.transitionsDisabled) {
          me._videojohny.style[domTransition] = "none";
        } else {
          me._videojohny.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me._videojohny.style.opacity = "1";
        me._videojohny.style.visibility = me._videojohny.ggVisible
          ? "inherit"
          : "hidden";
        me._closevideojohny.ggVisible = !me._closevideojohny.ggVisible;
        me._closevideojohny.style[domTransition] = "none";
        me._closevideojohny.style.visibility =
          me._closevideojohny.ggVisible &&
          (Number(me._closevideojohny.style.opacity) > 0 ||
            !me._closevideojohny.style.opacity)
            ? "inherit"
            : "hidden";
      };
      this._svg_1101.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_1101);
      this._svg_44 = document.createElement("div");
      this._svg_44__img = document.createElement("img");
      this._svg_44__img.className = "ggskin ggskin_svg";
      this._svg_44__img.setAttribute("src", basePath + "images/svg_44.svg");
      this._svg_44__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_44__img["ondragstart"] = function() {
        return false;
      };
      this._svg_44.appendChild(this._svg_44__img);
      this._svg_44.ggId = "Svg 44";
      this._svg_44.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_44.ggVisible = true;
      this._svg_44.className = "ggskin ggskin_svg ";
      this._svg_44.ggType = "svg";
      hs = "";
      hs += "height : 12px;";
      hs += "left : -55px;";
      hs += "position : absolute;";
      hs += "top : 25px;";
      hs += "visibility : inherit;";
      hs += "width : 120px;";
      this._svg_44.setAttribute("style", hs);
      this._svg_44.style[domTransform + "Origin"] = "50% 50%";
      me._svg_44.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_44.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_44.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_44);
      this._cardvideojohny = document.createElement("div");
      this._cardvideojohny__img = document.createElement("img");
      this._cardvideojohny__img.className = "ggskin ggskin_image";
      this._cardvideojohny__img.setAttribute(
        "src",
        basePath + "images/cardvideojohny.png"
      );
      this._cardvideojohny__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardvideojohny__img.className = "ggskin ggskin_image";
      this._cardvideojohny__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardvideojohny__img);
      this._cardvideojohny.appendChild(this._cardvideojohny__img);
      this._cardvideojohny.ggId = "card-video-johny";
      this._cardvideojohny.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardvideojohny.ggVisible = false;
      this._cardvideojohny.className = "ggskin ggskin_image ";
      this._cardvideojohny.ggType = "image";
      hs = "";
      hs += "height : 314px;";
      hs += "left : -158px;";
      hs += "position : absolute;";
      hs += "top : -200px;";
      hs += "visibility : hidden;";
      hs += "width : 320px;";
      this._cardvideojohny.setAttribute("style", hs);
      this._cardvideojohny.style[domTransform + "Origin"] = "50% 50%";
      me._cardvideojohny.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardvideojohny.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardvideojohny.ggUpdatePosition = function() {};
      this._cardvideojohnytext = document.createElement("div");
      this._cardvideojohnytext__img = document.createElement("img");
      this._cardvideojohnytext__img.className = "ggskin ggskin_svg";
      this._cardvideojohnytext__img.setAttribute(
        "src",
        basePath + "images/cardvideojohnytext.svg"
      );
      this._cardvideojohnytext__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardvideojohnytext__img["ondragstart"] = function() {
        return false;
      };
      this._cardvideojohnytext.appendChild(this._cardvideojohnytext__img);
      this._cardvideojohnytext.ggId = "card-video-johny-text";
      this._cardvideojohnytext.ggParameter = {
        rx: 0,
        ry: 0,
        a: 0,
        sx: 1,
        sy: 1
      };
      this._cardvideojohnytext.ggVisible = false;
      this._cardvideojohnytext.className = "ggskin ggskin_svg ";
      this._cardvideojohnytext.ggType = "svg";
      hs = "";
      hs += "height : 84px;";
      hs += "left : 31px;";
      hs += "position : absolute;";
      hs += "top : 204px;";
      hs += "visibility : hidden;";
      hs += "width : 264px;";
      this._cardvideojohnytext.setAttribute("style", hs);
      this._cardvideojohnytext.style[domTransform + "Origin"] = "50% 50%";
      me._cardvideojohnytext.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardvideojohnytext.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardvideojohnytext.ggUpdatePosition = function() {};
      this._cardvideojohny.appendChild(this._cardvideojohnytext);
      this.__div.appendChild(this._cardvideojohny);
      this._videojohny = document.createElement("div");
      this._videojohny__text = document.createElement("div");
      this._videojohny.className = "ggskin ggskin_textdiv";
      this._videojohny.ggTextDiv = this._videojohny__text;
      this._videojohny.ggId = "video-johny";
      this._videojohny.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._videojohny.ggVisible = false;
      this._videojohny.className = "ggskin ggskin_text ";
      this._videojohny.ggType = "text";
      hs = "";
      hs += "height : 173px;";
      hs += "left : -155px;";
      hs += "position : absolute;";
      hs += "top : -199px;";
      hs += "visibility : hidden;";
      hs += "width : 311px;";
      this._videojohny.setAttribute("style", hs);
      this._videojohny.style[domTransform + "Origin"] = "50% 50%";
      hs = "position:absolute;";
      hs += "left: 0px;";
      hs += "top:  0px;";
      hs += "width: 311px;";
      hs += "height: 173px;";
      hs += "border: 0px solid #000000;";
      hs += "color: #000000;";
      hs += "text-align: center;";
      hs += "white-space: nowrap;";
      hs += "padding: 0px 1px 0px 1px;";
      hs += "overflow: hidden;";
      this._videojohny__text.setAttribute("style", hs);
      this._videojohny__text.innerHTML =
        '<iframe src="https://player.vimeo.com/video/120579381?title=0&byline=0&portrait=0" width="320" height="180" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      this._videojohny.appendChild(this._videojohny__text);
      me._videojohny.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._videojohny.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._videojohny.ggUpdatePosition = function() {};
      this.__div.appendChild(this._videojohny);
      this._closevideojohny = document.createElement("div");
      this._closevideojohny__img = document.createElement("img");
      this._closevideojohny__img.className = "ggskin ggskin_svg";
      this._closevideojohny__img.setAttribute(
        "src",
        basePath + "images/closevideojohny.svg"
      );
      this._closevideojohny__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closevideojohny__img["ondragstart"] = function() {
        return false;
      };
      this._closevideojohny.appendChild(this._closevideojohny__img);
      this._closevideojohny.ggId = "close-video-johny";
      this._closevideojohny.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._closevideojohny.ggVisible = false;
      this._closevideojohny.className = "ggskin ggskin_svg ";
      this._closevideojohny.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 48px;";
      hs += "left : 136px;";
      hs += "position : absolute;";
      hs += "top : -220px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closevideojohny.setAttribute("style", hs);
      this._closevideojohny.style[domTransform + "Origin"] = "50% 50%";
      me._closevideojohny.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closevideojohny.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closevideojohny.onclick = function() {
        me._closevideojohny.style[domTransition] = "none";
        me._closevideojohny.style.visibility = "hidden";
        me._closevideojohny.ggVisible = false;
        me._cardvideojohny.style[domTransition] = "none";
        me._cardvideojohny.style.visibility = "hidden";
        me._cardvideojohny.ggVisible = false;
        me._cardvideojohnytext.style[domTransition] = "none";
        me._cardvideojohnytext.style.visibility = "hidden";
        me._cardvideojohnytext.ggVisible = false;
        me._videojohny.style[domTransition] = "none";
        me._videojohny.style.opacity = "0";
        me._videojohny.style.visibility = "hidden";
        me._videojohny.style[domTransition] = "none";
        me._videojohny.style.visibility = "hidden";
        me._videojohny.ggVisible = false;
      };
      this._closevideojohny.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closevideojohny);
    } else if (hotspot.skinid == "interaction-video-yosemite") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-video-yosemite";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 132px;";
      hs += "position : absolute;";
      hs += "top : 140px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_42 = document.createElement("div");
      this._svg_42__img = document.createElement("img");
      this._svg_42__img.className = "ggskin ggskin_svg";
      this._svg_42__img.setAttribute("src", basePath + "images/svg_42.svg");
      this._svg_42__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_42__img["ondragstart"] = function() {
        return false;
      };
      this._svg_42.appendChild(this._svg_42__img);
      this._svg_42.ggId = "Svg 42";
      this._svg_42.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_42.ggVisible = true;
      this._svg_42.className = "ggskin ggskin_svg ";
      this._svg_42.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_42.setAttribute("style", hs);
      this._svg_42.style[domTransform + "Origin"] = "50% 50%";
      me._svg_42.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_42.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_42.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_42);
      this._svg_27 = document.createElement("div");
      this._svg_27__img = document.createElement("img");
      this._svg_27__img.className = "ggskin ggskin_svg";
      this._svg_27__img.setAttribute("src", basePath + "images/svg_27.svg");
      this._svg_27__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_27__img["ondragstart"] = function() {
        return false;
      };
      this._svg_27.appendChild(this._svg_27__img);
      this._svg_27.ggId = "Svg 27";
      this._svg_27.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_27.ggVisible = true;
      this._svg_27.className = "ggskin ggskin_svg ";
      this._svg_27.ggType = "svg";
      hs = "";
      hs += "height : 12px;";
      hs += "left : -60px;";
      hs += "position : absolute;";
      hs += "top : 25px;";
      hs += "visibility : inherit;";
      hs += "width : 131px;";
      this._svg_27.setAttribute("style", hs);
      this._svg_27.style[domTransform + "Origin"] = "50% 50%";
      me._svg_27.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_27.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_27.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_27);
      this._svg_110 = document.createElement("div");
      this._svg_110__img = document.createElement("img");
      this._svg_110__img.className = "ggskin ggskin_svg";
      this._svg_110__img.setAttribute("src", basePath + "images/svg_110.svg");
      this._svg_110__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_110__img["ondragstart"] = function() {
        return false;
      };
      this._svg_110.appendChild(this._svg_110__img);
      this._svg_110.ggId = "Svg 110";
      this._svg_110.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_110.ggVisible = true;
      this._svg_110.className = "ggskin ggskin_svg ";
      this._svg_110.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_110.setAttribute("style", hs);
      this._svg_110.style[domTransform + "Origin"] = "50% 50%";
      me._svg_110.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_110.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_110.onclick = function() {
        me._videoyosemite.ggVisible = !me._videoyosemite.ggVisible;
        me._videoyosemite.style[domTransition] = "none";
        me._videoyosemite.style.visibility =
          me._videoyosemite.ggVisible &&
          (Number(me._videoyosemite.style.opacity) > 0 ||
            !me._videoyosemite.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardvideoyosemite.ggVisible = !me._cardvideoyosemite.ggVisible;
        me._cardvideoyosemite.style[domTransition] = "none";
        me._cardvideoyosemite.style.visibility =
          me._cardvideoyosemite.ggVisible &&
          (Number(me._cardvideoyosemite.style.opacity) > 0 ||
            !me._cardvideoyosemite.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardvideoyosemitetext.ggVisible = !me._cardvideoyosemitetext
          .ggVisible;
        me._cardvideoyosemitetext.style[domTransition] = "none";
        me._cardvideoyosemitetext.style.visibility =
          me._cardvideoyosemitetext.ggVisible &&
          (Number(me._cardvideoyosemitetext.style.opacity) > 0 ||
            !me._cardvideoyosemitetext.style.opacity)
            ? "inherit"
            : "hidden";
        if (me.player.transitionsDisabled) {
          me._videoyosemite.style[domTransition] = "none";
        } else {
          me._videoyosemite.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me._videoyosemite.style.opacity = "1";
        me._videoyosemite.style.visibility = me._videoyosemite.ggVisible
          ? "inherit"
          : "hidden";
        me._closevideoyosemite.ggVisible = !me._closevideoyosemite.ggVisible;
        me._closevideoyosemite.style[domTransition] = "none";
        me._closevideoyosemite.style.visibility =
          me._closevideoyosemite.ggVisible &&
          (Number(me._closevideoyosemite.style.opacity) > 0 ||
            !me._closevideoyosemite.style.opacity)
            ? "inherit"
            : "hidden";
      };
      this._svg_110.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_110);
      this._cardvideoyosemite = document.createElement("div");
      this._cardvideoyosemite__img = document.createElement("img");
      this._cardvideoyosemite__img.className = "ggskin ggskin_image";
      this._cardvideoyosemite__img.setAttribute(
        "src",
        basePath + "images/cardvideoyosemite.png"
      );
      this._cardvideoyosemite__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardvideoyosemite__img.className = "ggskin ggskin_image";
      this._cardvideoyosemite__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardvideoyosemite__img);
      this._cardvideoyosemite.appendChild(this._cardvideoyosemite__img);
      this._cardvideoyosemite.ggId = "card-video-yosemite";
      this._cardvideoyosemite.ggParameter = {
        rx: 0,
        ry: 0,
        a: 0,
        sx: 1,
        sy: 1
      };
      this._cardvideoyosemite.ggVisible = false;
      this._cardvideoyosemite.className = "ggskin ggskin_image ";
      this._cardvideoyosemite.ggType = "image";
      hs = "";
      hs += "height : 274px;";
      hs += "left : -136px;";
      hs += "position : absolute;";
      hs += "top : -92px;";
      hs += "visibility : hidden;";
      hs += "width : 260px;";
      this._cardvideoyosemite.setAttribute("style", hs);
      this._cardvideoyosemite.style[domTransform + "Origin"] = "50% 50%";
      me._cardvideoyosemite.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardvideoyosemite.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardvideoyosemite.ggUpdatePosition = function() {};
      this._cardvideoyosemitetext = document.createElement("div");
      this._cardvideoyosemitetext__img = document.createElement("img");
      this._cardvideoyosemitetext__img.className = "ggskin ggskin_svg";
      this._cardvideoyosemitetext__img.setAttribute(
        "src",
        basePath + "images/cardvideoyosemitetext.svg"
      );
      this._cardvideoyosemitetext__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardvideoyosemitetext__img["ondragstart"] = function() {
        return false;
      };
      this._cardvideoyosemitetext.appendChild(this._cardvideoyosemitetext__img);
      this._cardvideoyosemitetext.ggId = "card-video-yosemite-text";
      this._cardvideoyosemitetext.ggParameter = {
        rx: 0,
        ry: 0,
        a: 0,
        sx: 1,
        sy: 1
      };
      this._cardvideoyosemitetext.ggVisible = false;
      this._cardvideoyosemitetext.className = "ggskin ggskin_svg ";
      this._cardvideoyosemitetext.ggType = "svg";
      hs = "";
      hs += "height : 102px;";
      hs += "left : 21px;";
      hs += "position : absolute;";
      hs += "top : 153px;";
      hs += "visibility : hidden;";
      hs += "width : 215px;";
      this._cardvideoyosemitetext.setAttribute("style", hs);
      this._cardvideoyosemitetext.style[domTransform + "Origin"] = "50% 50%";
      me._cardvideoyosemitetext.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardvideoyosemitetext.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardvideoyosemitetext.ggUpdatePosition = function() {};
      this._cardvideoyosemite.appendChild(this._cardvideoyosemitetext);
      this.__div.appendChild(this._cardvideoyosemite);
      this._videoyosemite = document.createElement("div");
      this._videoyosemite__text = document.createElement("div");
      this._videoyosemite.className = "ggskin ggskin_textdiv";
      this._videoyosemite.ggTextDiv = this._videoyosemite__text;
      this._videoyosemite.ggId = "video-yosemite";
      this._videoyosemite.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._videoyosemite.ggVisible = false;
      this._videoyosemite.className = "ggskin ggskin_text ";
      this._videoyosemite.ggType = "text";
      hs = "";
      hs += "height : 146px;";
      hs += "left : -135px;";
      hs += "opacity : 0;";
      hs += "position : absolute;";
      hs += "top : -91px;";
      hs += "visibility : hidden;";
      hs += "width : 258px;";
      this._videoyosemite.setAttribute("style", hs);
      this._videoyosemite.style[domTransform + "Origin"] = "50% 50%";
      hs = "position:absolute;";
      hs += "left: 0px;";
      hs += "top:  0px;";
      hs += "width: 258px;";
      hs += "height: 146px;";
      hs += "border: 0px solid #000000;";
      hs += "color: #000000;";
      hs += "text-align: center;";
      hs += "white-space: nowrap;";
      hs += "padding: 0px 1px 0px 1px;";
      hs += "overflow: hidden;";
      this._videoyosemite__text.setAttribute("style", hs);
      this._videoyosemite__text.innerHTML =
        '<iframe src="https://player.vimeo.com/video/120579381?title=0&byline=0&portrait=0" width="260" height="146" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      this._videoyosemite.appendChild(this._videoyosemite__text);
      me._videoyosemite.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._videoyosemite.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._videoyosemite.ggUpdatePosition = function() {};
      this.__div.appendChild(this._videoyosemite);
      this._closevideoyosemite = document.createElement("div");
      this._closevideoyosemite__img = document.createElement("img");
      this._closevideoyosemite__img.className = "ggskin ggskin_svg";
      this._closevideoyosemite__img.setAttribute(
        "src",
        basePath + "images/closevideoyosemite.svg"
      );
      this._closevideoyosemite__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closevideoyosemite__img["ondragstart"] = function() {
        return false;
      };
      this._closevideoyosemite.appendChild(this._closevideoyosemite__img);
      this._closevideoyosemite.ggId = "close-video-yosemite";
      this._closevideoyosemite.ggParameter = {
        rx: 0,
        ry: 0,
        a: 0,
        sx: 1,
        sy: 1
      };
      this._closevideoyosemite.ggVisible = false;
      this._closevideoyosemite.className = "ggskin ggskin_svg ";
      this._closevideoyosemite.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 48px;";
      hs += "left : 91px;";
      hs += "position : absolute;";
      hs += "top : -107px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closevideoyosemite.setAttribute("style", hs);
      this._closevideoyosemite.style[domTransform + "Origin"] = "50% 50%";
      me._closevideoyosemite.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closevideoyosemite.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closevideoyosemite.onclick = function() {
        me._closevideoyosemite.style[domTransition] = "none";
        me._closevideoyosemite.style.visibility = "hidden";
        me._closevideoyosemite.ggVisible = false;
        me._cardvideoyosemite.style[domTransition] = "none";
        me._cardvideoyosemite.style.visibility = "hidden";
        me._cardvideoyosemite.ggVisible = false;
        me._cardvideoyosemitetext.style[domTransition] = "none";
        me._cardvideoyosemitetext.style.visibility = "hidden";
        me._cardvideoyosemitetext.ggVisible = false;
        me._videoyosemite.style[domTransition] = "none";
        me._videoyosemite.style.opacity = "0";
        me._videoyosemite.style.visibility = "hidden";
        me._videoyosemite.style[domTransition] = "none";
        me._videoyosemite.style.visibility = "hidden";
        me._videoyosemite.ggVisible = false;
      };
      this._closevideoyosemite.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closevideoyosemite);
    } else if (hotspot.skinid == "interaction-exit") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-exit";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 41px;";
      hs += "position : absolute;";
      hs += "top : 111px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_245 = document.createElement("div");
      this._svg_245__img = document.createElement("img");
      this._svg_245__img.className = "ggskin ggskin_svg";
      this._svg_245__img.setAttribute("src", basePath + "images/svg_245.svg");
      this._svg_245__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_245__img["ondragstart"] = function() {
        return false;
      };
      this._svg_245.appendChild(this._svg_245__img);
      this._svg_245.ggId = "Svg 245";
      this._svg_245.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_245.ggVisible = true;
      this._svg_245.className = "ggskin ggskin_svg ";
      this._svg_245.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -25px;";
      hs += "position : absolute;";
      hs += "top : -25px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_245.setAttribute("style", hs);
      this._svg_245.style[domTransform + "Origin"] = "50% 50%";
      me._svg_245.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_245.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_245.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_245);
      this._svg_34 = document.createElement("div");
      this._svg_34__img = document.createElement("img");
      this._svg_34__img.className = "ggskin ggskin_svg";
      this._svg_34__img.setAttribute("src", basePath + "images/svg_34.svg");
      this._svg_34__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_34__img["ondragstart"] = function() {
        return false;
      };
      this._svg_34.appendChild(this._svg_34__img);
      this._svg_34.ggId = "Svg 34";
      this._svg_34.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_34.ggVisible = true;
      this._svg_34.className = "ggskin ggskin_svg ";
      this._svg_34.ggType = "svg";
      hs = "";
      hs += "height : 12px;";
      hs += "left : -40px;";
      hs += "position : absolute;";
      hs += "top : 25px;";
      hs += "visibility : inherit;";
      hs += "width : 84px;";
      this._svg_34.setAttribute("style", hs);
      this._svg_34.style[domTransform + "Origin"] = "50% 50%";
      me._svg_34.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_34.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_34.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_34);
      this._svg_251 = document.createElement("div");
      this._svg_251__img = document.createElement("img");
      this._svg_251__img.className = "ggskin ggskin_svg";
      this._svg_251__img.setAttribute("src", basePath + "images/svg_251.svg");
      this._svg_251__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_251__img["ondragstart"] = function() {
        return false;
      };
      this._svg_251.appendChild(this._svg_251__img);
      this._svg_251.ggId = "Svg 251";
      this._svg_251.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_251.ggVisible = true;
      this._svg_251.className = "ggskin ggskin_svg ";
      this._svg_251.ggType = "svg";
      hs = "";
      hs += "height : 32px;";
      hs += "left : -16px;";
      hs += "position : absolute;";
      hs += "top : -14px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_251.setAttribute("style", hs);
      this._svg_251.style[domTransform + "Origin"] = "50% 50%";
      me._svg_251.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_251.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_251.onclick = function() {
        me.player.openNext("{node4}", "");
      };
      this._svg_251.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_251);
    } else if (hotspot.skinid == "interaction-badwater") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-badwater";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 41px;";
      hs += "position : absolute;";
      hs += "top : 111px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_241 = document.createElement("div");
      this._svg_241__img = document.createElement("img");
      this._svg_241__img.className = "ggskin ggskin_svg";
      this._svg_241__img.setAttribute("src", basePath + "images/svg_241.svg");
      this._svg_241__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_241__img["ondragstart"] = function() {
        return false;
      };
      this._svg_241.appendChild(this._svg_241__img);
      this._svg_241.ggId = "Svg 241";
      this._svg_241.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_241.ggVisible = true;
      this._svg_241.className = "ggskin ggskin_svg ";
      this._svg_241.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_241.setAttribute("style", hs);
      this._svg_241.style[domTransform + "Origin"] = "50% 50%";
      me._svg_241.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_241.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_241.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_241);
      this._svg_2515 = document.createElement("div");
      this._svg_2515__img = document.createElement("img");
      this._svg_2515__img.className = "ggskin ggskin_svg";
      this._svg_2515__img.setAttribute("src", basePath + "images/svg_2515.svg");
      this._svg_2515__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_2515__img["ondragstart"] = function() {
        return false;
      };
      this._svg_2515.appendChild(this._svg_2515__img);
      this._svg_2515.ggId = "Svg 2515";
      this._svg_2515.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_2515.ggVisible = true;
      this._svg_2515.className = "ggskin ggskin_svg ";
      this._svg_2515.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_2515.setAttribute("style", hs);
      this._svg_2515.style[domTransform + "Origin"] = "50% 50%";
      me._svg_2515.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_2515.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_2515.onclick = function() {
        me._closebadwater.ggVisible = !me._closebadwater.ggVisible;
        me._closebadwater.style[domTransition] = "none";
        me._closebadwater.style.visibility =
          me._closebadwater.ggVisible &&
          (Number(me._closebadwater.style.opacity) > 0 ||
            !me._closebadwater.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardbadwater.ggVisible = !me._cardbadwater.ggVisible;
        me._cardbadwater.style[domTransition] = "none";
        me._cardbadwater.style.visibility =
          me._cardbadwater.ggVisible &&
          (Number(me._cardbadwater.style.opacity) > 0 ||
            !me._cardbadwater.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardbadwatertext.ggVisible = !me._cardbadwatertext.ggVisible;
        me._cardbadwatertext.style[domTransition] = "none";
        me._cardbadwatertext.style.visibility =
          me._cardbadwatertext.ggVisible &&
          (Number(me._cardbadwatertext.style.opacity) > 0 ||
            !me._cardbadwatertext.style.opacity)
            ? "inherit"
            : "hidden";
      };
      this._svg_2515.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_2515);
      this._svg_32 = document.createElement("div");
      this._svg_32__img = document.createElement("img");
      this._svg_32__img.className = "ggskin ggskin_svg";
      this._svg_32__img.setAttribute("src", basePath + "images/svg_32.svg");
      this._svg_32__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_32__img["ondragstart"] = function() {
        return false;
      };
      this._svg_32.appendChild(this._svg_32__img);
      this._svg_32.ggId = "Svg 32";
      this._svg_32.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_32.ggVisible = true;
      this._svg_32.className = "ggskin ggskin_svg ";
      this._svg_32.ggType = "svg";
      hs = "";
      hs += "height : 10px;";
      hs += "left : -47px;";
      hs += "position : absolute;";
      hs += "top : 25px;";
      hs += "visibility : inherit;";
      hs += "width : 100px;";
      this._svg_32.setAttribute("style", hs);
      this._svg_32.style[domTransform + "Origin"] = "50% 50%";
      me._svg_32.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_32.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_32.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_32);
      this._cardbadwater = document.createElement("div");
      this._cardbadwater__img = document.createElement("img");
      this._cardbadwater__img.className = "ggskin ggskin_image";
      this._cardbadwater__img.setAttribute(
        "src",
        basePath + "images/cardbadwater.png"
      );
      this._cardbadwater__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardbadwater__img.className = "ggskin ggskin_image";
      this._cardbadwater__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardbadwater__img);
      this._cardbadwater.appendChild(this._cardbadwater__img);
      this._cardbadwater.ggId = "card-badwater";
      this._cardbadwater.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardbadwater.ggVisible = false;
      this._cardbadwater.className = "ggskin ggskin_image ";
      this._cardbadwater.ggType = "image";
      hs = "";
      hs += "height : 265px;";
      hs += "left : -163px;";
      hs += "position : absolute;";
      hs += "top : -70px;";
      hs += "visibility : hidden;";
      hs += "width : 260px;";
      this._cardbadwater.setAttribute("style", hs);
      this._cardbadwater.style[domTransform + "Origin"] = "50% 50%";
      me._cardbadwater.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardbadwater.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardbadwater.ggUpdatePosition = function() {};
      this._cardbadwatertext = document.createElement("div");
      this._cardbadwatertext__img = document.createElement("img");
      this._cardbadwatertext__img.className = "ggskin ggskin_svg";
      this._cardbadwatertext__img.setAttribute(
        "src",
        basePath + "images/cardbadwatertext.svg"
      );
      this._cardbadwatertext__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardbadwatertext__img["ondragstart"] = function() {
        return false;
      };
      this._cardbadwatertext.appendChild(this._cardbadwatertext__img);
      this._cardbadwatertext.ggId = "card-badwater-text";
      this._cardbadwatertext.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardbadwatertext.ggVisible = false;
      this._cardbadwatertext.className = "ggskin ggskin_svg ";
      this._cardbadwatertext.ggType = "svg";
      hs = "";
      hs += "height : 81px;";
      hs += "left : 25px;";
      hs += "position : absolute;";
      hs += "top : 167px;";
      hs += "visibility : hidden;";
      hs += "width : 213px;";
      this._cardbadwatertext.setAttribute("style", hs);
      this._cardbadwatertext.style[domTransform + "Origin"] = "50% 50%";
      me._cardbadwatertext.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardbadwatertext.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardbadwatertext.ggUpdatePosition = function() {};
      this._cardbadwater.appendChild(this._cardbadwatertext);
      this.__div.appendChild(this._cardbadwater);
      this._closebadwater = document.createElement("div");
      this._closebadwater__img = document.createElement("img");
      this._closebadwater__img.className = "ggskin ggskin_svg";
      this._closebadwater__img.setAttribute(
        "src",
        basePath + "images/closebadwater.svg"
      );
      this._closebadwater__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closebadwater__img["ondragstart"] = function() {
        return false;
      };
      this._closebadwater.appendChild(this._closebadwater__img);
      this._closebadwater.ggId = "close-badwater";
      this._closebadwater.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._closebadwater.ggVisible = false;
      this._closebadwater.className = "ggskin ggskin_svg ";
      this._closebadwater.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 48px;";
      hs += "left : 64px;";
      hs += "position : absolute;";
      hs += "top : -88px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closebadwater.setAttribute("style", hs);
      this._closebadwater.style[domTransform + "Origin"] = "50% 50%";
      me._closebadwater.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closebadwater.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closebadwater.onclick = function() {
        me._closebadwater.style[domTransition] = "none";
        me._closebadwater.style.visibility = "hidden";
        me._closebadwater.ggVisible = false;
        me._cardbadwater.style[domTransition] = "none";
        me._cardbadwater.style.visibility = "hidden";
        me._cardbadwater.ggVisible = false;
        me._cardbadwatertext.style[domTransition] = "none";
        me._cardbadwatertext.style.visibility = "hidden";
        me._cardbadwatertext.ggVisible = false;
      };
      this._closebadwater.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closebadwater);
    } else if (hotspot.skinid == "interaction-zabriski") {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-zabriski";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 41px;";
      hs += "position : absolute;";
      hs += "top : 111px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_54 = document.createElement("div");
      this._svg_54__img = document.createElement("img");
      this._svg_54__img.className = "ggskin ggskin_svg";
      this._svg_54__img.setAttribute("src", basePath + "images/svg_54.svg");
      this._svg_54__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_54__img["ondragstart"] = function() {
        return false;
      };
      this._svg_54.appendChild(this._svg_54__img);
      this._svg_54.ggId = "Svg 54";
      this._svg_54.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_54.ggVisible = true;
      this._svg_54.className = "ggskin ggskin_svg ";
      this._svg_54.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_54.setAttribute("style", hs);
      this._svg_54.style[domTransform + "Origin"] = "50% 50%";
      me._svg_54.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_54.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_54.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_54);
      this._svg_55 = document.createElement("div");
      this._svg_55__img = document.createElement("img");
      this._svg_55__img.className = "ggskin ggskin_svg";
      this._svg_55__img.setAttribute("src", basePath + "images/svg_55.svg");
      this._svg_55__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_55__img["ondragstart"] = function() {
        return false;
      };
      this._svg_55.appendChild(this._svg_55__img);
      this._svg_55.ggId = "Svg 55";
      this._svg_55.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_55.ggVisible = true;
      this._svg_55.className = "ggskin ggskin_svg ";
      this._svg_55.ggType = "svg";
      hs = "";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_55.setAttribute("style", hs);
      this._svg_55.style[domTransform + "Origin"] = "50% 50%";
      me._svg_55.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_55.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_55.onclick = function() {
        me._cardzabrisky.ggVisible = !me._cardzabrisky.ggVisible;
        me._cardzabrisky.style[domTransition] = "none";
        me._cardzabrisky.style.visibility =
          me._cardzabrisky.ggVisible &&
          (Number(me._cardzabrisky.style.opacity) > 0 ||
            !me._cardzabrisky.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardzabriskytext.ggVisible = !me._cardzabriskytext.ggVisible;
        me._cardzabriskytext.style[domTransition] = "none";
        me._cardzabriskytext.style.visibility =
          me._cardzabriskytext.ggVisible &&
          (Number(me._cardzabriskytext.style.opacity) > 0 ||
            !me._cardzabriskytext.style.opacity)
            ? "inherit"
            : "hidden";
        me._closezabrisky.ggVisible = !me._closezabrisky.ggVisible;
        me._closezabrisky.style[domTransition] = "none";
        me._closezabrisky.style.visibility =
          me._closezabrisky.ggVisible &&
          (Number(me._closezabrisky.style.opacity) > 0 ||
            !me._closezabrisky.style.opacity)
            ? "inherit"
            : "hidden";
      };
      this._svg_55.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_55);
      this._svg_29 = document.createElement("div");
      this._svg_29__img = document.createElement("img");
      this._svg_29__img.className = "ggskin ggskin_svg";
      this._svg_29__img.setAttribute("src", basePath + "images/svg_29.svg");
      this._svg_29__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_29__img["ondragstart"] = function() {
        return false;
      };
      this._svg_29.appendChild(this._svg_29__img);
      this._svg_29.ggId = "Svg 29";
      this._svg_29.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_29.ggVisible = true;
      this._svg_29.className = "ggskin ggskin_svg ";
      this._svg_29.ggType = "svg";
      hs = "";
      hs += "height : 12px;";
      hs += "left : -45px;";
      hs += "position : absolute;";
      hs += "top : 25px;";
      hs += "visibility : inherit;";
      hs += "width : 94px;";
      this._svg_29.setAttribute("style", hs);
      this._svg_29.style[domTransform + "Origin"] = "50% 50%";
      me._svg_29.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_29.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_29.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_29);
      this._cardzabrisky = document.createElement("div");
      this._cardzabrisky__img = document.createElement("img");
      this._cardzabrisky__img.className = "ggskin ggskin_image";
      this._cardzabrisky__img.setAttribute(
        "src",
        basePath + "images/cardzabrisky.png"
      );
      this._cardzabrisky__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardzabrisky__img.className = "ggskin ggskin_image";
      this._cardzabrisky__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardzabrisky__img);
      this._cardzabrisky.appendChild(this._cardzabrisky__img);
      this._cardzabrisky.ggId = "card-zabrisky";
      this._cardzabrisky.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardzabrisky.ggVisible = false;
      this._cardzabrisky.className = "ggskin ggskin_image ";
      this._cardzabrisky.ggType = "image";
      hs = "";
      hs += "height : 266px;";
      hs += "left : -102px;";
      hs += "position : absolute;";
      hs += "top : -129px;";
      hs += "visibility : hidden;";
      hs += "width : 260px;";
      this._cardzabrisky.setAttribute("style", hs);
      this._cardzabrisky.style[domTransform + "Origin"] = "50% 50%";
      me._cardzabrisky.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardzabrisky.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardzabrisky.ggUpdatePosition = function() {};
      this._cardzabriskytext = document.createElement("div");
      this._cardzabriskytext__img = document.createElement("img");
      this._cardzabriskytext__img.className = "ggskin ggskin_svg";
      this._cardzabriskytext__img.setAttribute(
        "src",
        basePath + "images/cardzabriskytext.svg"
      );
      this._cardzabriskytext__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardzabriskytext__img["ondragstart"] = function() {
        return false;
      };
      this._cardzabriskytext.appendChild(this._cardzabriskytext__img);
      this._cardzabriskytext.ggId = "card-zabrisky-text";
      this._cardzabriskytext.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardzabriskytext.ggVisible = false;
      this._cardzabriskytext.className = "ggskin ggskin_svg ";
      this._cardzabriskytext.ggType = "svg";
      hs = "";
      hs += "height : 84px;";
      hs += "left : 26px;";
      hs += "position : absolute;";
      hs += "top : 165px;";
      hs += "visibility : hidden;";
      hs += "width : 213px;";
      this._cardzabriskytext.setAttribute("style", hs);
      this._cardzabriskytext.style[domTransform + "Origin"] = "50% 50%";
      me._cardzabriskytext.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardzabriskytext.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardzabriskytext.ggUpdatePosition = function() {};
      this._cardzabrisky.appendChild(this._cardzabriskytext);
      this.__div.appendChild(this._cardzabrisky);
      this._closezabrisky = document.createElement("div");
      this._closezabrisky__img = document.createElement("img");
      this._closezabrisky__img.className = "ggskin ggskin_svg";
      this._closezabrisky__img.setAttribute(
        "src",
        basePath + "images/closezabrisky.svg"
      );
      this._closezabrisky__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closezabrisky__img["ondragstart"] = function() {
        return false;
      };
      this._closezabrisky.appendChild(this._closezabrisky__img);
      this._closezabrisky.ggId = "close-zabrisky";
      this._closezabrisky.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._closezabrisky.ggVisible = false;
      this._closezabrisky.className = "ggskin ggskin_svg ";
      this._closezabrisky.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 48px;";
      hs += "left : 127px;";
      hs += "position : absolute;";
      hs += "top : -146px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closezabrisky.setAttribute("style", hs);
      this._closezabrisky.style[domTransform + "Origin"] = "50% 50%";
      me._closezabrisky.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closezabrisky.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closezabrisky.onclick = function() {
        me._closezabrisky.style[domTransition] = "none";
        me._closezabrisky.style.visibility = "hidden";
        me._closezabrisky.ggVisible = false;
        me._cardzabrisky.style[domTransition] = "none";
        me._cardzabrisky.style.visibility = "hidden";
        me._cardzabrisky.ggVisible = false;
        me._cardzabriskytext.style[domTransition] = "none";
        me._cardzabriskytext.style.visibility = "hidden";
        me._cardzabriskytext.ggVisible = false;
      };
      this._closezabrisky.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closezabrisky);
    } else {
      this.__div = document.createElement("div");
      this.__div.ggId = "interaction-video-death";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot ";
      this.__div.ggType = "hotspot";
      hs = "";
      hs += "height : 5px;";
      hs += "left : 41px;";
      hs += "position : absolute;";
      hs += "top : 111px;";
      hs += "visibility : inherit;";
      hs += "width : 5px;";
      this.__div.setAttribute("style", hs);
      this.__div.style[domTransform + "Origin"] = "50% 50%";
      me.__div.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me.__div.ggElementNodeId = function() {
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      };
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.setActiveHotspot(me.hotspot);
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.setActiveHotspot(null);
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this.__div.ggUpdatePosition = function() {};
      this._svg_420 = document.createElement("div");
      this._svg_420__img = document.createElement("img");
      this._svg_420__img.className = "ggskin ggskin_svg";
      this._svg_420__img.setAttribute("src", basePath + "images/svg_420.svg");
      this._svg_420__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_420__img["ondragstart"] = function() {
        return false;
      };
      this._svg_420.appendChild(this._svg_420__img);
      this._svg_420.ggId = "Svg 420";
      this._svg_420.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_420.ggVisible = true;
      this._svg_420.className = "ggskin ggskin_svg ";
      this._svg_420.ggType = "svg";
      hs = "";
      hs += "height : 50px;";
      hs += "left : -24px;";
      hs += "position : absolute;";
      hs += "top : -24px;";
      hs += "visibility : inherit;";
      hs += "width : 50px;";
      this._svg_420.setAttribute("style", hs);
      this._svg_420.style[domTransform + "Origin"] = "50% 50%";
      me._svg_420.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_420.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_420.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_420);
      this._svg_111 = document.createElement("div");
      this._svg_111__img = document.createElement("img");
      this._svg_111__img.className = "ggskin ggskin_svg";
      this._svg_111__img.setAttribute("src", basePath + "images/svg_111.svg");
      this._svg_111__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_111__img["ondragstart"] = function() {
        return false;
      };
      this._svg_111.appendChild(this._svg_111__img);
      this._svg_111.ggId = "Svg 111";
      this._svg_111.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_111.ggVisible = true;
      this._svg_111.className = "ggskin ggskin_svg ";
      this._svg_111.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 32px;";
      hs += "left : -15px;";
      hs += "position : absolute;";
      hs += "top : -13px;";
      hs += "visibility : inherit;";
      hs += "width : 32px;";
      this._svg_111.setAttribute("style", hs);
      this._svg_111.style[domTransform + "Origin"] = "50% 50%";
      me._svg_111.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_111.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_111.onclick = function() {
        me._videodeath.ggVisible = !me._videodeath.ggVisible;
        me._videodeath.style[domTransition] = "none";
        me._videodeath.style.visibility =
          me._videodeath.ggVisible &&
          (Number(me._videodeath.style.opacity) > 0 ||
            !me._videodeath.style.opacity)
            ? "inherit"
            : "hidden";
        me._cardvideodeath.ggVisible = !me._cardvideodeath.ggVisible;
        me._cardvideodeath.style[domTransition] = "none";
        me._cardvideodeath.style.visibility =
          me._cardvideodeath.ggVisible &&
          (Number(me._cardvideodeath.style.opacity) > 0 ||
            !me._cardvideodeath.style.opacity)
            ? "inherit"
            : "hidden";
        me._closevideodeath.style[domTransition] = "none";
        me._closevideodeath.style.visibility =
          Number(me._closevideodeath.style.opacity) > 0 ||
          !me._closevideodeath.style.opacity
            ? "inherit"
            : "hidden";
        me._closevideodeath.ggVisible = true;
        if (me.player.transitionsDisabled) {
          me._videodeath.style[domTransition] = "none";
        } else {
          me._videodeath.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me._videodeath.style.opacity = "1";
        me._videodeath.style.visibility = me._videodeath.ggVisible
          ? "inherit"
          : "hidden";
        me._cardvideodeathtext.ggVisible = !me._cardvideodeathtext.ggVisible;
        me._cardvideodeathtext.style[domTransition] = "none";
        me._cardvideodeathtext.style.visibility =
          me._cardvideodeathtext.ggVisible &&
          (Number(me._cardvideodeathtext.style.opacity) > 0 ||
            !me._cardvideodeathtext.style.opacity)
            ? "inherit"
            : "hidden";
      };
      this._svg_111.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_111);
      this._svg_31 = document.createElement("div");
      this._svg_31__img = document.createElement("img");
      this._svg_31__img.className = "ggskin ggskin_svg";
      this._svg_31__img.setAttribute("src", basePath + "images/svg_31.svg");
      this._svg_31__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._svg_31__img["ondragstart"] = function() {
        return false;
      };
      this._svg_31.appendChild(this._svg_31__img);
      this._svg_31.ggId = "Svg 31";
      this._svg_31.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._svg_31.ggVisible = true;
      this._svg_31.className = "ggskin ggskin_svg ";
      this._svg_31.ggType = "svg";
      hs = "";
      hs += "height : 12px;";
      hs += "left : -39px;";
      hs += "position : absolute;";
      hs += "top : 25px;";
      hs += "visibility : inherit;";
      hs += "width : 81px;";
      this._svg_31.setAttribute("style", hs);
      this._svg_31.style[domTransform + "Origin"] = "50% 50%";
      me._svg_31.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._svg_31.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._svg_31.ggUpdatePosition = function() {};
      this.__div.appendChild(this._svg_31);
      this._cardvideodeath = document.createElement("div");
      this._cardvideodeath__img = document.createElement("img");
      this._cardvideodeath__img.className = "ggskin ggskin_image";
      this._cardvideodeath__img.setAttribute(
        "src",
        basePath + "images/cardvideodeath.png"
      );
      this._cardvideodeath__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardvideodeath__img.className = "ggskin ggskin_image";
      this._cardvideodeath__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._cardvideodeath__img);
      this._cardvideodeath.appendChild(this._cardvideodeath__img);
      this._cardvideodeath.ggId = "card-video-death";
      this._cardvideodeath.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._cardvideodeath.ggVisible = false;
      this._cardvideodeath.className = "ggskin ggskin_image ";
      this._cardvideodeath.ggType = "image";
      hs = "";
      hs += "height : 253px;";
      hs += "left : -128px;";
      hs += "position : absolute;";
      hs += "top : -115px;";
      hs += "visibility : hidden;";
      hs += "width : 260px;";
      this._cardvideodeath.setAttribute("style", hs);
      this._cardvideodeath.style[domTransform + "Origin"] = "50% 50%";
      me._cardvideodeath.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardvideodeath.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardvideodeath.ggUpdatePosition = function() {};
      this._cardvideodeathtext = document.createElement("div");
      this._cardvideodeathtext__img = document.createElement("img");
      this._cardvideodeathtext__img.className = "ggskin ggskin_svg";
      this._cardvideodeathtext__img.setAttribute(
        "src",
        basePath + "images/cardvideodeathtext.svg"
      );
      this._cardvideodeathtext__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._cardvideodeathtext__img["ondragstart"] = function() {
        return false;
      };
      this._cardvideodeathtext.appendChild(this._cardvideodeathtext__img);
      this._cardvideodeathtext.ggId = "card-video-death-text";
      this._cardvideodeathtext.ggParameter = {
        rx: 0,
        ry: 0,
        a: 0,
        sx: 1,
        sy: 1
      };
      this._cardvideodeathtext.ggVisible = false;
      this._cardvideodeathtext.className = "ggskin ggskin_svg ";
      this._cardvideodeathtext.ggType = "svg";
      hs = "";
      hs += "height : 66px;";
      hs += "left : 24px;";
      hs += "position : absolute;";
      hs += "top : 161px;";
      hs += "visibility : hidden;";
      hs += "width : 213px;";
      this._cardvideodeathtext.setAttribute("style", hs);
      this._cardvideodeathtext.style[domTransform + "Origin"] = "50% 50%";
      me._cardvideodeathtext.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._cardvideodeathtext.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._cardvideodeathtext.ggUpdatePosition = function() {};
      this._cardvideodeath.appendChild(this._cardvideodeathtext);
      this.__div.appendChild(this._cardvideodeath);
      this._videodeath = document.createElement("div");
      this._videodeath__text = document.createElement("div");
      this._videodeath.className = "ggskin ggskin_textdiv";
      this._videodeath.ggTextDiv = this._videodeath__text;
      this._videodeath.ggId = "video-death";
      this._videodeath.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._videodeath.ggVisible = false;
      this._videodeath.className = "ggskin ggskin_text ";
      this._videodeath.ggType = "text";
      hs = "";
      hs += "height : 146px;";
      hs += "left : -126px;";
      hs += "opacity : 0;";
      hs += "position : absolute;";
      hs += "top : -114px;";
      hs += "visibility : hidden;";
      hs += "width : 254px;";
      this._videodeath.setAttribute("style", hs);
      this._videodeath.style[domTransform + "Origin"] = "50% 50%";
      hs = "position:absolute;";
      hs += "left: 0px;";
      hs += "top:  0px;";
      hs += "width: 254px;";
      hs += "height: 146px;";
      hs += "border: 0px solid #000000;";
      hs += "color: #000000;";
      hs += "text-align: center;";
      hs += "white-space: nowrap;";
      hs += "padding: 0px 1px 0px 1px;";
      hs += "overflow: hidden;";
      this._videodeath__text.setAttribute("style", hs);
      this._videodeath__text.innerHTML =
        '<iframe src="https://player.vimeo.com/video/120579381?title=0&byline=0&portrait=0" width="256" height="146" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      this._videodeath.appendChild(this._videodeath__text);
      me._videodeath.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._videodeath.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._videodeath.ggUpdatePosition = function() {};
      this.__div.appendChild(this._videodeath);
      this._closevideodeath = document.createElement("div");
      this._closevideodeath__img = document.createElement("img");
      this._closevideodeath__img.className = "ggskin ggskin_svg";
      this._closevideodeath__img.setAttribute(
        "src",
        basePath + "images/closevideodeath.svg"
      );
      this._closevideodeath__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;"
      );
      this._closevideodeath__img["ondragstart"] = function() {
        return false;
      };
      this._closevideodeath.appendChild(this._closevideodeath__img);
      this._closevideodeath.ggId = "close-video-death";
      this._closevideodeath.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._closevideodeath.ggVisible = false;
      this._closevideodeath.className = "ggskin ggskin_svg ";
      this._closevideodeath.ggType = "svg";
      hs = "";
      hs += "cursor : pointer;";
      hs += "height : 48px;";
      hs += "left : 99px;";
      hs += "position : absolute;";
      hs += "top : -132px;";
      hs += "visibility : hidden;";
      hs += "width : 48px;";
      this._closevideodeath.setAttribute("style", hs);
      this._closevideodeath.style[domTransform + "Origin"] = "50% 50%";
      me._closevideodeath.ggIsActive = function() {
        if (this.parentNode && this.parentNode.ggIsActive) {
          return this.parentNode.ggIsActive();
        }
        return false;
      };
      me._closevideodeath.ggElementNodeId = function() {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        }
        return me.ggNodeId;
      };
      this._closevideodeath.onclick = function() {
        me._closevideodeath.style[domTransition] = "none";
        me._closevideodeath.style.visibility = "hidden";
        me._closevideodeath.ggVisible = false;
        me._cardvideodeath.style[domTransition] = "none";
        me._cardvideodeath.style.visibility = "hidden";
        me._cardvideodeath.ggVisible = false;
        me._cardvideodeathtext.style[domTransition] = "none";
        me._cardvideodeathtext.style.visibility = "hidden";
        me._cardvideodeathtext.ggVisible = false;
        me._videodeath.style[domTransition] = "none";
        me._videodeath.style.opacity = "0";
        me._videodeath.style.visibility = "hidden";
        me._videodeath.style[domTransition] = "none";
        me._videodeath.style.visibility = "hidden";
        me._videodeath.ggVisible = false;
      };
      this._closevideodeath.ggUpdatePosition = function() {};
      this.__div.appendChild(this._closevideodeath);
    }
  }
  this.addSkinHotspot = function(hotspot) {
    return new SkinHotspotClass(me, hotspot);
  };
  this.addSkin();
}
