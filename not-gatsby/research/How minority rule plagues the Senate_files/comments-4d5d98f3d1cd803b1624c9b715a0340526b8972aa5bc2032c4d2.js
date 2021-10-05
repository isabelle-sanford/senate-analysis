_.namespace('DailyKos.Notifications');

DailyKos.Notifications = (function() {
  // show the toast this many pixels from the bottom of the screen
  var BOTTOM_OFFSET = 80;

  // if hideToast is invoked in rapid-fire succession, only run the last one.
  var _waitHide = _.memoize(function(duration){
    return _(_hideToast).debounce(duration);
  });

  return {
    showToast: function(opts) {
      $(function() {_showToast(opts); });
    },

    hideToast: function() {
      $(_waitHide(1000));
    }
  };

  function _showToast(opts) {
    var $toast = $('.toast');

    opts = opts || {};

    $toast.find('.title').html(opts.title);
    $toast.find('.msg').html(opts.msg);
    $toast.css({bottom: BOTTOM_OFFSET});

    if (opts.time) $(_waitHide(opts.time));
  }

  function _hideToast() {
    var $toast = $('.toast');
    var height = $toast.outerHeight();

    $toast.css({bottom: -2*height});
  }
})();
DailyKos.CommentRating = Backbone.Model.extend({
  urlRoot: "/comment_ratings"
});

DailyKos.Comment = Backbone.Model.extend({
  defaults: {
    n_recrates: 0,
    sort_string: '0'
  },
  initialize: function(attributes) {
    this.bind('sync', function() {
      attributes = _(this.attributes).omit('recommenders');
    });

    if(attributes['create_epoch']) {
      var createdAtEpoch = attributes['create_epoch'] * 1000, // Convert rails epoch to JS epoch
          createdAtInTZ = DailyKos.Time.localizeCommentTime(new Date(createdAtEpoch));

      this.set('created_at', createdAtInTZ);
    }
  },
  children: function() {
    return CommentApp.comments.findChildrenOf(this.get('id'));
  },
  lastChild: function() {
    return _(this.children()).last();
  },
  indexPosition: function() {
    return _(CommentApp.comments.models).findIndex({id: this.id});
  },
  comment_view: function(view) {
    CommentApp.commentViews = CommentApp.commentViews || {};

    if (view) {
      return CommentApp.commentViews[this.cid] = view; // set view
    } else {
      return CommentApp.commentViews[this.cid];        // get view
    }
  },
  foldChildren: function() {
    _(this.children()).each(function (child) {
      child.trigger('fold');
    });
  },
  unfoldChildren: function() {
    _(this.children()).each(function (child) {
      child.trigger('unfold');
    });
  },
  anchorTag: function() {
    return "#comment_" + this.get('id');
  },
  replyDepth: function() {
    var sortStr     = this.get("sort_string") || '';
    var matchData   = sortStr && sortStr.match(/\./g);
    var replyLevel  = (matchData ? matchData.length : 0);

    if(sortStr) { return replyLevel - CommentApp.replyLevelOffset; }

    if(this.get("parent_id")) {
      var parentId = this.get("parent_id"),
          pComment = CommentApp.comments.findWhere({id: parentId});

      if(pComment) {
        replyLevel = pComment.replyDepth() + 1;
      }
    }

    return replyLevel - CommentApp.replyLevelOffset;
  },
  urlRoot: function() {
    return "/stories/" + this.get("story_id") + "/comments";
  },
  errorMessage: function() {
    if (this.get('author_id') == DailyKos.currentUserId())
      return "You cannot recommend your own comment.";
  },
  getParent: function(){
    var parentId = this.get('parent_id');
    return CommentApp.comments.get(parentId);
  },
  getParentSortString: function(){
    var parent = this.getParent();
    if (parent)
      return parent.get('sort_string');
    else
      return '';
  },
  updateSortString: function(){
    var sort_string;

    var parent_sort_string = this.getParentSortString();
    if (parent_sort_string) {
      sort_string = parent_sort_string + '.' + this.get('id');
    } else {
      sort_string = this.get('id');
    }

    this.set("sort_string", sort_string); //this positions the comment as the bottom-most child-of-the-parent

    CommentApp.comments.sort();
  },
  containsTweets: function() {
    var text = this.get('textToRender');
    return text && text.match(/twitter-tweet/ig);
  },
  containsInstagrams: function() {
    var text = this.get('textToRender');
    return text && text.match(/instagram-media/ig);
  },
  containsAssociatedPress: function() {
    var text = this.get('textToRender');
    return text && text.match(/elections.ap.org\/widgets\/content\//ig);
  },
  containsPetitions: function() {
    var text = this.get('textToRender');
    return text && text.match(/dk-action-link/ig);
  }

});

DailyKos.Author = Backbone.Model.extend({
  urlRoot: function() {
    return "/users";
  }
});

DailyKos.Authors = Backbone.Collection.extend({
  model: DailyKos.Author
});

DailyKos.authorList = new DailyKos.Authors;

DailyKos.Comments = Backbone.Collection.extend({
  url: function() {
    return "/stories/" + this.storyID + "/comments";
  },
  model: DailyKos.Comment,
  initialize: function(models, options){
    this.storyID = options.storyID;
  },
  comparator: function(comment) {
    return comment.get("sort_string");
  },
  findChildrenOf: function(commentID) {
    var sortStrMatch = commentID + '.';

    return  this.reduce(function (children, comment) {
              var sortStr = comment.get('sort_string');

              if(sortStr && sortStr.indexOf(sortStrMatch) >= 0) {
                children.push(comment);
              }

              return children;
            }, []);
  }
});

DailyKos.CommentRatings = Backbone.Collection.extend({
  url: "/comment_ratings"
});
/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */
(function(root, factory) {

  /* CommonJS */
  if (typeof exports == 'object')  module.exports = factory()

  /* AMD module */
  else if (typeof define == 'function' && define.amd) define(factory)

  /* Browser global */
  else root.Spinner = factory()
}
(this, function() {
  "use strict";

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = (function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }())

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
    if(s[prop] !== undefined) return prop
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    direction: 1,         // 1: clockwise, -1: counterclockwise
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: '50%',           // center vertically
    left: '50%',          // center horizontally
    position: 'absolute'  // element position
  }

  /** The constructor */
  function Spinner(o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function(target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width

      css(el, {
        left: o.left,
        top: o.top
      })
        
      if (target) {
        target.insertBefore(el, target.firstChild||null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    /**
     * Stops and removes the Spinner.
     */
    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
    lines: function(el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML() {

    /* Utility function to create a VML tag */
    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function(el, o) {
      var r = o.length+o.width
        , s = 2*r

      function grp() {
        return css(
          vml('group', {
            coordsize: s + ' ' + s,
            coordorigin: -r + ' ' + -r
          }),
          { width: s, height: s }
        )
      }

      var margin = -(o.width+o.length)*2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg(i, dx, filter) {
        ins(g,
          ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
            ins(css(vml('roundrect', {arcsize: o.corners}), {
                width: r,
                height: o.width,
                left: o.radius,
                top: -o.width>>1,
                filter: filter
              }),
              vml('fill', {color: getColor(o.color, i), opacity: o.opacity}),
              vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++)
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function(el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i+o < c.childNodes.length) {
        c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

  if (!vendor(probe, 'transform') && probe.adj) initVML()
  else useCssAnimations = vendor(probe, 'animation')

  return Spinner

}));

if(!DailyKos) var DailyKos = {};

// spinner settings for loading comments
var commentSettings = {
  lines:     17,        // The number of lines to draw
  length:    9,         // The length of each line
  width:     2,         // The line thickness
  radius:    19,        // The radius of the inner circle
  corners:   1,         // Corner roundness (0..1)
  rotate:    0,         // The rotation offset
  direction: 1,         // 1: clockwise, -1: counterclockwise
  color:     '#000',    // #rgb or #rrggbb or array of colors
  speed:     0.9,       // Rounds per second
  trail:     100,       // Afterglow percentage
  shadow:    true,      // Whether to render a shadow
  hwaccel:   false,     // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex:    0,         // The z-index (defaults to 2000000000)
  top:       '50%',     // Top position relative to parent
  left:      '50%',     // Left position relative to parent
};

//todo rename this to storyRec
var storyRecSettings = {
  lines:     15,          // The number of lines to draw
  length:    0,           // The length of each line
  width:     4,           // The line thickness
  radius:    12,          // The radius of the inner circle
  corners:   1,           // Corner roundness (0..1)
  rotate:    9,           // The rotation offset
  direction: 1,           // 1: clockwise, -1: counterclockwise
  color:     '#000',      // #rgb or #rrggbb or array of colors
  speed:     2.2,         // Rounds per second
  trail:     100,         // Afterglow percentage
  shadow:    false,       // Whether to render a shadow
  hwaccel:   false,       // Whether to use hardware acceleration
  className: 'spinner',   // The CSS class to assign to the spinner
  zIndex:    0,           // The z-index (defaults to 2000000000)
  top:       '32px',      // Top position relative to parent
  left:      '60px',      // Left position relative to parent
  position:  'absolute'
};

var commentRec = {
  lines:     15,          // The number of lines to draw
  length:    0,           // The length of each line
  width:     4,           // The line thickness
  radius:    10,          // The radius of the inner circle
  corners:   1,           // Corner roundness (0..1)
  rotate:    9,           // The rotation offset
  direction: 1,           // 1: clockwise, -1: counterclockwise
  color:     '#000',      // #rgb or #rrggbb or array of colors
  speed:     2.2,         // Rounds per second
  trail:     100,         // Afterglow percentage
  shadow:    false,       // Whether to render a shadow
  hwaccel:   false,       // Whether to use hardware acceleration
  className: 'spinner',   // The CSS class to assign to the spinner
  zIndex:    0,           // The z-index (defaults to 2000000000)
  top:       '-13px',     // Top position relative to parent
  left:      '9.5px',     // Left position relative to parent
  position:  'relative'
};

var fullCommentRec = {
  lines:     15,          // The number of lines to draw
  length:    0,           // The length of each line
  width:     4,           // The line thickness
  radius:    8,          // The radius of the inner circle
  corners:   1,           // Corner roundness (0..1)
  rotate:    9,           // The rotation offset
  direction: 1,           // 1: clockwise, -1: counterclockwise
  color:     '#000',      // #rgb or #rrggbb or array of colors
  speed:     2.2,         // Rounds per second
  trail:     100,         // Afterglow percentage
  shadow:    false,       // Whether to render a shadow
  hwaccel:   false,       // Whether to use hardware acceleration
  className: 'spinner',   // The CSS class to assign to the spinner
  zIndex:    0,           // The z-index (defaults to 2000000000)
  top:       '-15px',     // Top position relative to parent
  left:      '59px',     // Left position relative to parent
  position:  'relative'
};

DailyKos.spinnerSetting = {
  commentSettings: commentSettings,
  commentRec:      commentRec,
  storyRec:        storyRecSettings, // todo rename to storyRec
  fullCommentRec:  fullCommentRec
};

(function() {
  var spinner, target;

  DailyKos.spinner = new Spinner(commentSettings);

  DailyKos.spinner.hide = function() {
    $('#spinner').hide();
    DailyKos.spinner.stop();
  };

  $(function() {
    //commentbox
    target = $('#spinner');

    if(target.is(':hidden')) return; // don't bother, comments are loaded

    DailyKos.spinner.spin(target);
  });
})();
// Generated by CoffeeScript 1.7.1
(function() {
  var autoLink,
    __slice = [].slice;

  autoLink = function() {
    var k, linkAttributes, option, options, pattern, v;
    options = 1 <= arguments.length ? __slice.call(arguments, 0) : [];

    pattern = /(^|[\s\n]|<br\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi;
    if (!(options.length > 0)) {
      return this.replace(pattern, "$1<a href='$2'>$2</a>");
    }
    option = options[0];
    linkAttributes = ((function() {
      var _results;
      _results = [];
      for (k in option) {
        v = option[k];
        if (k !== 'callback') {
          _results.push(" " + k + "='" + v + "'");
        }
      }
      return _results;
    })()).join('');
    return this.replace(pattern, function(match, space, url) {
      var link;
      link = (typeof option.callback === "function" ? option.callback(url) : void 0) || ("<a href='" + url + "'" + linkAttributes + ">" + url + "</a>");
      return "" + space + link;
    });
  };

  String.prototype['autoLink'] = autoLink;

}).call(this);

(function(){

  DailyKos.TextHelpers = {
    // Takes plain text, if text matches a url, it creates anchor tags around it.
    //
    // Usage:
    // linkify(plaintext)
    // linkify(plaintext, shortenAnchor)
    //
    // Example:
    // linkify('Visit www.foo.com')
    // => Visit <a href='http://www.foo.com'>www.foo.com</a>
    //
    //
    // If 'shortenAnchor' is true, the link text will be abbreviated as FQDN.
    // Example:
    // linkify('Visit http://www.foo.com/long/url/here', true)
    // => Visit <a href='http://www.foo.com/long/url/here'>www.foo.com/...</a>
    linkify:                linkify,

    // Given a full url string, returns only the fqdn part of the url.
    //
    // Usage:
    // getFqdn(plaintext)
    //
    // Example:
    // fqdn('http://www.google.com/long/url/here')
    // => www.google.com
    getFqdn:                getFqdn,

    // Convert to https
    // http://foo.com/bar => https://foo.com/bar
    urlToHttps:             urlToHttps,

    // Given a string that contains an anchor tag, returns the link text shortened to the FQDN
    //
    // Usage:
    // shortenAnchorText(plaintext)
    //
    // Example:
    // shortenAnchorText('Visit <a href="http://foo.com/loo/fah">http://foo.com/loo/fah</a>')
    // => Visit <a href="http://foo.com/loo/fah">foo.com/...</a>
    shortenAnchorText:      shortenAnchorText,

    // Given escaped html, returns unescaped html
    unescapeHtml:           unescapeHtml,
  };

return;

  function linkify(text, shortenAnchor) {
    text = text.autoLink({target: "_blank", rel: "nofollow" });

    if (shortenAnchor)
      text = shortenAnchorText(text);

    return text;
  }

  function shortenAnchorText(text) {
    var replaceLinkWithFqdn = function(){
      var url, fqdn, isTruncated, urlSplit;

      url  = this.innerText;
      fqdn = getFqdn(this.innerText);

      if (fqdn === url) return;

      // if url got truncated by 'getFqdn', show ellipses
      urlSplit    = url.split(fqdn + '/');
      isTruncated = (urlSplit.length > 1) && (urlSplit[1] !== '');
      if (isTruncated) fqdn += '/...';

      this.innerText = fqdn;
    };

    text = $('<div>').html(text);
    text.find('a').each(replaceLinkWithFqdn);
    text = text.html();

    return text;
  }

  function getFqdn(text) {
    var fqdn;

    var re1 ='.*?';  // Non-greedy match on filler
    var re2 ='((?:[a-z][a-z\\.\\d\\-]+)\\.(?:[a-z][a-z\\-]+))(?![\\w\\.])';  // get fully qualified domain name of url
    var p = new RegExp(re1+re2,["i"]);
    var m = p.exec(text);

    if (m) fqdn = m[1] || m[0];

    return fqdn || text; // fqdn or fallback
  }

  function urlToHttps (url) {
    return url && url.replace(/^http:\/\//i, 'https://');
  }

  function unescapeHtml (html) {
    if (!html) return html;

    var isEncoded = /&lt;|&gt;/i;

    if (!isEncoded.test(html)) return html;

    return $('<textarea>').html(html).text();
  }
})();
//
// View Hierarchy
// ¯¯¯¯¯¯¯¯¯¯¯¯¯¯
// Backbone.View
//   DailyKos.CommentViewBase
//     DailyKos.CommentView
//       DailyKos.MobileCommentView
//     DailyKos.CommentThreadView
//       DailyKos.MobileCommentThreadView
//
// Put any shared code here in DailyKos.CommentViewBase.
//




DailyKos.CommentViewBase = Backbone.View.extend({
  paragraphify: function(text) {
    // if(text.has_p_tag or text.is_empty) abort
    if (text.indexOf('<p>') >= 0 || _.isEmpty($.trim(text))) return text;

    text = '<p>' + text + '</p>';
    text = text.replace(/(\r\n|\n|\r)/gm, '</p><p>');
    return text;
  },
  commentText: function(commentContainer) {
    var editor = $(commentContainer).find("textarea").ckeditorGet();
    var text = editor.getData();
    return (this.isBlank(text)) ? '' : text;
  },
  isBlank: function(text){
    var $el = $('<div>').html(text);
    if ($el.find('img, iframe').length) return false;
    var str = $el.text().trim();
    return !str;
  },
  buildSortString: function(comment) {
    var comments    = CommentApp.comments;
    var sort_string = comment.id;
    var parent      = comments.get(comment.get('parent_id'));

    while (parent) {
      sort_string = parent.id + '.' + sort_string;
      parent = comments.get(parent.get('parent_id'));
    }

    return sort_string;
  },
  commentTextMobile: function(commentContainer) {
    text = $(commentContainer).find(".text").val();
    text = Handlebars.Utils.escapeExpression(text);
    text = DailyKos.TextHelpers.linkify(text);
    text = this.paragraphify(text);
    return $.trim(text);
  },
  toggleDisplay: function(elements) {
    elements.forEach(function(e) {
      e.toggle();
    });
  },
  clearCommentForm: function(event) {
    var $comment   = $(event.target).closest('.new_comment');
    var editor     = $comment.find('textarea').data('ckeditorInstance');
    var confirmMsg = "Are you sure you want to clear this comment?";

    if (editor.getData() && !confirm(confirmMsg)) {
      event.stopImmediatePropagation(); // do not toggleNewCommentForm
      return false;
    }

    editor.setData('');

    return false;
  },
  commentSpinner: function(enabled) {
    if(enabled) {
      var setting = DailyKos.spinnerSetting.commentRec;
      var spinner = (this.model.get('spinner') || new Spinner(setting)).spin();
      var button  = $(this.$el).find('.recommend_buttons')[0];

      button.appendChild(spinner.el);
      this.model.set({spinner: spinner}, {silent: true});
      $(button).prop('disabled', true);

    } else {
      this.model.get('spinner').stop();
      $(button).prop('disabled', false);
    }
  }
});
// If comment  has 'hidden?' attribute,      add class 'is-hidden-comment' to comment.
// If ancestor has 'hidden?' attribute,      add class 'is-hidden-reply' to comment.
// If comment  has 'flagged' attribute,      add class 'is-comment-flagged-by-me' to comment.
// If comment  has 'contentious?' attribute, add class 'is-contentious-comment' to comment.

(function(){
  if (!window.CommentApp) CommentApp = {};

  // comment attributes on the backbone model
  var isHidden                = 'hidden?';                          // is this comment hidden?
  var hideReplies             = 'hideReplies?';                     // are these replies of a comment that was hidden?
  var hideRepliesFlaggedByMe  = 'hideRepliesFlaggedByMe?';          // are these replies of a comment that was hidden by me?
  var isFlaggedByMe           = 'flagged';                          // is this comment flagged by me?
  var isContentious           = 'contentious?';                     // is this comment 2 flags away from being hidden?

  // comment classes on the commentView.$el
  var isHiddenClass           = 'is-hidden-comment';                 // this is a hidden comment (hidden by other users)
  var isHiddenReplyClass      = 'is-hidden-reply';                   // this is a child of a hidden comment
  var isFlaggedByMeClass      = 'is-comment-flagged-by-me';          // this is a comment flagged by me
  var isReplyFlaggedByMeClass = 'is-reply-to-comment-flagged-by-me'; // this is a child of a comment that was hidden by me
  var isContentiousClass      = 'is-contentious-comment';            // this comment is 2 flags away from being hidden

  // set "hidden" attributes on the backbone comment model
  CommentApp.setHiddenCommentAttributes = function(comment) {
    var silent = {silent: true};
    var parent = comment.getParent();

    var isHideReplies            = comment.get(isHidden)      || (parent && parent.get(hideReplies));
    var isHideRepliesFlaggedByMe = comment.get(isFlaggedByMe) || (parent && parent.get(hideRepliesFlaggedByMe));

    comment.set(hideReplies,            isHideReplies,            silent);
    comment.set(hideRepliesFlaggedByMe, isHideRepliesFlaggedByMe, silent);
  };

  // returns a string of comment classes
  CommentApp.getHiddenCommentClasses = function(comment) {
    var parent  = comment.getParent();
    var classes = '';

    if (comment.get(isFlaggedByMe))           classes += ' ' + isFlaggedByMeClass;
    if (comment.get(isHidden))                classes += ' ' + isHiddenClass;
    if (comment.get(isContentious))           classes += ' ' + isContentiousClass;
    if (!parent) return classes;
    if (parent.get(hideReplies))              classes += ' ' + isHiddenReplyClass;
    if (parent.get(hideRepliesFlaggedByMe))   classes += ' ' + isReplyFlaggedByMeClass;

    return classes;
  };

  // When you click on the eye, all comments will be 100% visible and unobscured.
  CommentApp.initHiddenCommentsClickListener = function($comments) {
    $comments.on('click', '.toggle-hidden-comments', function() {
      var $comment  = $(this).closest('.comment');

      CommentApp.toggleCommentThread($comment);

      return false;
    });

    // When we unobscure a parent comment and replies to the parent are loaded via ajax,
    // they will not have the 'unobscured' class, so here, we're adding the class.
    $(document).on('comment-auto-updated', function(){
      var $parent   = $('.unobscured').first();        // $parent exists IFF you clicked the eye to unobscure comments
      var $children = $parent.commentChildren();

      $children.addClass('unobscured');
    });
  };

  // This toggles the '.unobscured' class for the $comment and its children
  // which basically reveals/obscures the hidden comment and its replies.
  CommentApp.toggleCommentThread = function($comment) {
    var $children = $comment.commentChildren();
    var obscured  = !$comment.is('.unobscured');

    $('#comments .unobscured').removeClass('unobscured'); // obscure all. allow only one comment-thread to be unobscured at a time in the next step.

    if (obscured) {
      $comment.addClass('unobscured');
      $children.addClass('unobscured');
    }
  };

})();

DailyKos.CommentView = DailyKos.CommentViewBase.extend({
  id:         function() { return "comment-" + this.model.get("id"); },
  commentContainer: function() { return $(this.el).find('.comment-wrapper'); },

  events: {
    "click .recommend:not(.inactive)":"recommend",
    "click .flag":                    "flag",
    "click .flag-disabled":           "flag",
    "click .fold-tree":               "foldTree",
    "click .actions .unrecommend":    "removeRating",
    "click .actions .unflag":         "removeRating",
    "click .actions .reply:not(:disabled)":          "toggleNewCommentForm",
    "click .preview:not(:disabled)" :                "previewReply",
    "click .post:not(.posting):not(:disabled)":      "postReply",
    "click .cancel" :                 "clearCommentForm",
    "click .reply-box .cancel" :      "toggleNewCommentForm",
    "click .edit" :                   "editReply",
    "click .recommend-disabled"     : "promptCannotRecommend",
    "mouseenter .comment_author" : "showAuthor",
    "mouseleave .comment_author" : "hideAuthor",
    "click .remove-comment" :         "removeComment",
    "click .comment-time" : "selectComment",
    "click .parent-author" : "selectParentAndReply",
    "click .should-notify" : "toggleNotify"
  },
  initialize: function(options) {
    this.model.bind('destroy', this.remove, this);
    this.model.bind('change', this.render, this);

    this.model.bind('fold',   this.fold, this);
    this.model.bind('unfold', this.unfold, this);

    DailyKos.CommentView.template = DailyKos.CommentView.template || $("#comment_template");
    this.comments = options.comments;
    this.mainView = options.mainView;
    this.parentView = this.model.get("parentView");
    this.model.unset("parentView", {silent: true});
    this.model.comment_view(this);
  },
  renderTemplate: function(json) {
    var rendered = DailyKos.CommentView.template.render(json);
    $(this.el).html(rendered);
  },
  setupRecommendersHover: function(elem) {
    var recommdedEl = (elem || this.$el).find('.recommend_buttons');

    var comment = this.model;
    DailyKos.RecommendsPopover.setupPopover(
      recommdedEl,
      function($el) {
        var text = comment.get("recommenders_text");

        if(!_.isEmpty(text)) return text;
      }
    );
  },
  setupAuthorProfileHover: function() {
    var authorNameEl = this.$el.find('.author-name');

    DailyKos.MiniProfile.setupPopover(
      authorNameEl,
      this.model.get('author_id')
    )
  },
  setupFlaggingUsersPopover: function (elem) {
    if(!DailyKos.canViewCommentFlagData()) return;
    if(!this.model.get('n_trollrates') > 0) return;

    var flaggingEl = (elem || this.$el).find('.flag-controls');

    var comment = this.model;
    DailyKos.RecommendsPopover.setupPopover(
      flaggingEl,
      function($el) {
        var text = comment.get("traf_text");

        if(!_.isEmpty(text)) return text;
      }
    );
  },
  render: function() {
    var self = this;
    var shouldFoldComments = App.Comments.Folding.shouldFoldComments;

    if(!this.model.get("textToRender")) {
      var text = this.model.get("text");
      text = DK.Https.getHtmlWithHttpsImgSrc(text);
      this.model.set({textToRender: text}, {silent: true});
    }

    if(!this.model.get("insertedEmbeds")) {
      this.model.set("insertedEmbeds", true, {silent: true});

      this.insertTwitterEmbeds(this.model);
      this.insertInstagramEmbeds(this.model);
    }

    this.setRenderAttrs(this.model);

    this.renderTemplate(this.model.toJSON());

    this.reloadRecommendersContent();

    if(!CommentApp.isMobile) {
      this.setupRecommendersHover(this.$el);
      this.setupAuthorProfileHover(this.$el);
      this.setupFlaggingUsersPopover(this.$el);
    }

    if(this.model.get("preview")) {
      this.$el.addClass("preview");
      this.limitWhitespace();
    } else {
      this.$el.removeClass("preview");

      if (shouldFoldComments(this.model)) this.fold();
    }

    autosavedReply = this.fetchReply();
    if(autosavedReply) {
      $(this.el).find("textarea.text").val(autosavedReply);
    }

    DailyKos.spinner.hide('fast');

    _.defer(function() {
      if (self.model.containsTweets() && DailyKos.Twitter) {
        DailyKos.Twitter.renderTweetEmbeds(self.el);
      }
      if (self.model.containsInstagrams() && DailyKos.Instagram) {
        DailyKos.Instagram.instagramRenderEmbeds();
      }
      if (self.model.containsAssociatedPress() && DailyKos.AssociatedPress) {
        DailyKos.AssociatedPress.renderEmbeds();
      }
      if (self.model.containsPetitions() && $.actionNetworkRender) {
        $.actionNetworkRender(self.el);
      }
    });

    return this;
  },
  setRenderAttrs: function(comment) {
    CommentApp.setHiddenCommentAttributes(comment);
    if(this.isTipJar(comment)) {
      comment.set("isTipJar", true);
    } else {
      comment.set("canReply", true);
    }
  },
  canReply: function(comment) {
    return !this.isTipJar(comment);
  },
  isTipJar: function(comment) {
    var commentIndex   = this.comments.indexOf(comment);
    var isFirstComment = commentIndex === 0;

    if (!isFirstComment) return false;

    return (comment.get('subject') === 'Tip Jar');
  },
  getTwitterEmbed: function(matchId, successCb) {
    $.ajax({
      dataType: "jsonp",
      async: true,
      url: "https://api.twitter.com/1/statuses/oembed.json?id=" + matchId,
      success: successCb
    })
  },
  insertTwitterEmbeds: function(model) {
    var text, $textDom, renderedTweets, $tweetContainer, tweetContent;

    if(!model.containsTweets()) return false;

    text = model.get("textToRender");
    $textDom = $("<div>").html(text);
    renderedTweets = $textDom.find('.dk-editor-embed[data-twitter-content]');

    renderedTweets.each(function() {
      $tweetContainer = $(this);
      tweetContent    = $tweetContainer.data('twitter-content');
      tweetContent    = _.unescape(tweetContent);

      $tweetContainer.html(tweetContent);
    });

    model.set("textToRender", $textDom.html());
    return false;
  },
  insertInstagramEmbeds: function(model) {
    var text, $textDom

    if(!model.containsInstagrams()) return false;

    text = model.get("textToRender");
    $textDom = $("<div>").html(text);
    instagrams = $textDom.find('.instagram-media');

    DK.Instagram.instagramRenderEmbeds();

    model.set("textToRender", $textDom.html());
    return false;
  },
  fold: function(foldChildren) {
    this.$el.addClass('folded');
    (foldChildren === true) && this.model.foldChildren();
    $(document).trigger('comment-folded');
  },
  unfold: function(unfoldChildren) {
    this.$el.removeClass('folded');
    (unfoldChildren === true) && this.model.unfoldChildren();
    $(document).trigger('comment-folded');
  },
  isFolded: function() { return this.$el.hasClass('folded') },
  isShiftOrMetaKeyPress: function(e) {
    return(e.shiftKey || e.metaKey);
  },
  foldTree: function(e) {
    e.preventDefault();

    // if shift-clicking, then don't toggle child comments:
    var toggleChildren = this.isShiftOrMetaKeyPress(e) ? false : true;

    this.isFolded() ? this.unfold(toggleChildren) : this.fold(toggleChildren);
  },
  promptCannotRecommend: function(e) {
    if (this.$el.is('.folded')) return; // requirement: disable recs for folded comments.

    var messageText = '.comment_recommend_login',
        $target = $(this.el);

    var toggleMessage = function () {
      e.preventDefault();

      var $el = $target.find(messageText);
      $el.toggleClass('show-notification');

      setTimeout(function () { $el.toggleClass('show-notification') }, 10000);
    }

    if( !DailyKos.isLoggedIn() ) {
      toggleMessage();
    }

    DailyKos.RecommendsPopover.hide();

    return false;
  },
  showAuthor: function() {
    var $targetDiv = this.$el.find('.author_bio');
    if($targetDiv.hasClass('loaded')) {
      this.showWithPosition($targetDiv);
    } else if($targetDiv.hasClass('requesting')) {
      return false;
    } else {
      var commentAuthorId = this.$el.find('.comment_author a').attr('id');
      var existingAuthor = _.find(DailyKos.authorList.models, function(author) {
        if (author.get('id') === commentAuthorId) {
          return author;
        }
      });

      if(existingAuthor) {
        existingAuthor.el = $targetDiv;
        var existingView = new DailyKos.AuthorPopup({model: existingAuthor});
        existingView.render();
        this.showWithPosition($targetDiv);
      } else {
        $targetDiv.addClass('requesting');
        var commentAuthor = new DailyKos.Author({id: commentAuthorId});
        commentAuthor.el = $targetDiv;
        commentAuthor.fetch();
        DailyKos.authorList.add(commentAuthor);
        new DailyKos.AuthorPopup({model: commentAuthor});
        $targetDiv.show();
      }
    }
  },

  selectComment: function(e) {
    if(e.metaKey || e.ctrlKey) return; // open new tab

    CommentApp.selectComment(this.model.get('id'));
    event.preventDefault();
  },
  selectParentAndReply: function(event) {
    var target    = $(event.target),
        href      = target.attr('href'),
        commentId = href.split('_').pop();

    if(commentId) {
      CommentApp.selectComment(commentId);
    }
  },
  toggleNotify: function(event) {
    var $target      = $(event.target);

    if($target.is(':checked')) {
      this.model.set('should_notify', true, {silent: true});
      CommentApp.shouldNotify = true;
    } else {
      this.model.set('should_notify', false, {silent: true});
      CommentApp.shouldNotify = false;
    }

    return true;
  },
  removeComment: function(event) {
    var target      = $(event.target),
        targetData  = $(target).data();

    var removeChildren  = targetData.remove == 'children',
        confirmStr      = "Are you sure you want to delete the comment";

    if(removeChildren)
      confirmStr += ", and all its children,";

    confirmStr += " by the user '" + this.model.get('author') + "'?";

    if(!DailyKos.showConfirm(confirmStr)) return;

    this.__removeComment({removeChildren: removeChildren});
  },
  __removeComment: function(args) {
    if(!_.isObject(args)) args = {};

    var self              = this,
        commentId         = this.model.get("id"),
        parentSortPrefix  = commentId + ".",
        parentId          = this.model.get("parent_id"),
        removeChildren    = !!args.removeChildren,
        destroyOptions    = {
          wait:   true,
          error:  function(model, response, options) {
            DailyKos.showAlert("Error deleting comment! Please contact support.");
          }
        };

    this.model.destroy(destroyOptions);

    var childComments = [];

    this.comments.map(function(comment) {
      var sortStr = comment.get("sort_string"),
          cId     = comment.get("id");

      if(!sortStr || !cId) return; // If this is hit, we're doing something wrong
      if(sortStr.indexOf(parentSortPrefix) === -1) return; // Wrong droids

      childComments.push(comment);
    });

    if(removeChildren) {
      _(childComments).each(function(comment) {
        comment.destroy(destroyOptions);
      })
      return;
    }

    _(childComments).each(function(comment) {
      var sortStr     = comment.get("sort_string") || '';
      var cId         = comment.get("id");
      var newSortStr  = sortStr.replace(parentSortPrefix, "");

      comment.set('parent_id', parentId, {silent: true})
      comment.set("sort_string", newSortStr);
    });

    CommentApp.comments.sort();

    _(childComments).each(function(comment) {
      var index = CommentApp.comments.indexOf(comment);

      if(index < 1) {
        $('#comments').find(".comment:first").before(commentEl);
      } else {
        $('#comments').find(".comment").eq(index - 1).after(commentEl);
      }
    })
  },
  hideAuthor: function() {
    this.$el.find('.author_bio').hide();
  },
  showWithPosition: function($targetDiv) {
    var popupOffset;
    if($targetDiv.siblings('a').hasClass('story_author')) {
      popupOffset = '22px';
    } else {
      popupOffset = '20px';
    }

    $targetDiv.css({top: 'inherit', bottom: popupOffset});
    $targetDiv.find('.author_up_arrow').hide();
    $targetDiv.find('.author_arrow').show();
    $targetDiv.show();
    if(($targetDiv.offset().top - 50) < $('#header').offset().top) {
      $targetDiv.css({bottom: 'inherit', top: popupOffset});
      $targetDiv.find('.author_up_arrow').show();
      $targetDiv.find('.author_arrow').hide();
    }
  },
  parseErrorFromResponse: function(xhr) {
    var errorMessage = null;

    try {
      var response = JSON.parse(xhr.responseText);

      if(_.isObject(response['errors']) && response['errors'].length) {
        errorMessage = _.values(response['errors']).join("<br/>");
      } else if(response['error']) {
        errorMessage = response['error'];
      }
      // else errorMessage will be null
    } catch(e) { }

    return errorMessage;
  },
  getError: function(xhr, args) {
    var defaultMessage  = args['defaultMessage'],
        errorMessage    = null;

    if (xhr) {
      if(xhr.status >= 500)
        errorMessage = "The server encountered an error performing this action and our staff has been notified.";

      if(xhr.status === 0)
        errorMessage = "We were unable to connect to the server to perform this action.";

      if(!errorMessage)
        errorMessage = this.parseErrorFromResponse(xhr);
    }

    return(errorMessage || defaultMessage || 'Sorry, there was an error.');
  },
  reloadElClasses: function() {
    var classes = App.Comments.Comment.View.getCommentClass({comment: this.model});

    this.$el.attr('class', classes);
  },
  displayError: function(xhr, args) {
    var errorMsg = this.getError(xhr, args);
    DailyKos.showAlert(errorMsg);
  },
  recommendAdded: function() {
    var silent = { silent: true };
    var recTxt = this.model.get('recommenders_text'),
        recCnt = parseInt(this.model.get('n_recrates'));


    this.model.set('recommenders_text', recTxt, silent);
    this.model.set('recommended',       true,   silent);
    this.model.set('n_recrates',        recCnt, silent);

    if(!CommentApp.isMobile) {
      this.reloadRecommendersContent();
    }
  },
  recommendRemoved: function() {
    var silent = { silent: true };
    var recTxt = this.model.get('recommenders_text'),
        recCnt = parseInt(this.model.get('n_recrates'));

    if(!recTxt) return;

    var nickname = DailyKos.currentUserNickname();

    if(recTxt === nickname)
      recTxt = '';
    else
      recTxt = recTxt.replace(',' + DailyKos.currentUserNickname(), '');

    this.model.set('recommenders_text', recTxt, silent);
    this.model.set('recommended',       false,  silent);
    this.model.set('n_recrates',        recCnt, silent);

    if(!CommentApp.isMobile) this.reloadRecommendersContent();
  },
  reloadRecommendersContent: function(scrollDown) {
    this.reloadElClasses();

    var $recCount  = this.$el.find('.rec-count');
    var n_recrates = this.model.get('n_recrates');
    $recCount.text(n_recrates);
    $recCount.attr('data-n_recrates', n_recrates);

    var $el         = this.$el.find('.recommend_buttons'),
        popContent  = $el.find('.popover-content'),
        popover     = $el.data('bs.popover');

    if(popContent.length == 0) return; // Nothing to do here

    if(_.isEmpty(this.model.get('recommenders_text'))) {
      return $el.find('.popover.recommends').detach();
    }

    var scrollPos = popContent.scrollTop();

    popover.show(); // re-show the popover

    if(scrollDown)
      popContent.scrollTop(popContent[0].scrollHeight);
    else
      popContent.scrollTop(scrollPos);
  },
  recommend: function(event, onBeforeSend, onComplete) {
    event.preventDefault();
    if(this._isRecommending) return;

    if (this.$el.is('.folded')) return;

    if(!DailyKos.isLoggedIn()) {
      this.promptCannotRecommend(event);
      return false;
    }

    var star = $(event.target);
    if (star.hasClass('greyed-out')) return;
    if (this.recommendErrors())      return;
    star.addClass("greyed-out");

    var rating  = new DailyKos.CommentRating({rating: 4, comment_id: this.model.get("id"), story_id: this.model.get("story_id")}),
        _this   = this;

    this._isRecommending = true;
    var setting = DailyKos.spinnerSetting.fullCommentRec;
    var spinner = new Spinner(setting).spin();
    this.model.set({spinner: spinner}, {silent: true});
    this.commentSpinner(true);
    star.closest('.recommend').addClass("recommend-processing");
    rating.save({}, {
      beforeSend: function() {
        if (onBeforeSend) onBeforeSend();
      },
      success: function(model, response) {
        _this.model.set({
                          'contentious?': model.get('comment')['contentious?'],
                          'hidden?': model.get('comment')['hidden?']
                        }, {silent: true});
        CommentApp.commentRatings.add(rating, {merge: true});

        _this.recommendAdded();
        _this.onCommentRatingSuccess.apply(_this, arguments);
      },
      error: function(model, xhr, options) {
        _this.displayError(xhr, {
          defaultMessage: "There was an error recommending the comment."
        });
      },
      complete: function() {
        _this._isRecommending = false;
        star.removeClass("greyed-out");
        star.closest('.recommend').removeClass("recommend-processing");
        spinner.stop();
        if (onComplete) onComplete();
      }
    });
    return false;
  },
  recommendErrors: function() {
    var comment      = this.model;
    var errorMessage = comment.errorMessage();

    if (!errorMessage) return false;

    this.displayError(null, { defaultMessage: errorMessage });
    return true;
  },
  flag: function(event) {
    var title, question, options, flagText;
    var commentId = this.model.id;
    var _this     = this;

    flagText = '<p><strong>Flags may only be used for comments' +
      ' that are seriously offensive or that violate site rules.</strong></p>' +
      '<p>You may not flag for disagreement or disapproval.' +
      ' Abusing flags will lead to loss of ratings privileges.</p>';

    title    = 'Comment Flag';
    question = (DailyKos.hideRatesRemaing() < 6) ? flagText + '<p>Are you sure you want to flag this comment? You have ' + DailyKos.hideRatesRemaing() + ' flags left today.</p>'
                                                 : flagText + '<p>Are you sure you want to flag this comment?</p>';
    options  = {primaryBtnLabel: 'Flag', onSubmit: onFlagBtnClick};

    DailyKos.Modal.showConfirmation(question, title, options);

    function onFlagBtnClick(){
      $(event.target).addClass("greyed-out");

      var rating = new DailyKos.CommentRating({rating: 0, comment_id: commentId, story_id: _this.model.get("story_id")});

      rating.save({}, {
        success: function(model, response) {
          _this.model.set({
                            'contentious?': model.get('comment')['contentious?'],
                            'hidden?': model.get('comment')['hidden?']
                          }, {silent: true});
          CommentApp.commentRatings.add(rating, {merge: true});
          DailyKos.decrementHrs();

          _this.onCommentRatingSuccess.apply(_this, arguments);
        },
        error: function(model, xhr, options) {
          $(event.target).removeClass("greyed-out");

          _this.displayError(xhr, {
            defaultMessage: "There was an error flagging the comment."
          });
        }
      });
    } // function onFlagBtnClick

    return false;
  },
  removeRating: function(event, onBeforeSend, onComplete) {
    event.preventDefault();

    if (this.$el.is('.folded')) return;

    var star = $(event.target);
    if (star.hasClass('greyed-out')) return;
    star.addClass("greyed-out");

    var rating  = new DailyKos.CommentRating({rating: null, comment_id: this.model.get("id"), story_id: this.model.get("story_id")}),
        _this   = this;

    rating.save({}, {
      beforeSend: function() {
        if (onBeforeSend) onBeforeSend();
      },
      success: function(model, response) {
        _this.model.set({
                          'contentious?': model.get('comment')['contentious?'],
                          'hidden?': model.get('comment')['hidden?']
                        }, {silent: true});
        CommentApp.commentRatings.add(rating, {merge: true, remove: true});
        _this.recommendRemoved();
        _this.onCommentRatingSuccess.apply(_this, arguments);
      },
      error: function(model, xhr, options) {
        _this.displayError(xhr, {
          defaultMessage: "There was an error removing the rating for this comment."
        });
      },
      complete: function() {
        star.removeClass('greyed-out');
        if (onComplete) onComplete();
      }
    });
    return false;
  },
  onCommentRatingSuccess: function(rating, response, xhr) {
    var comment  = this.model;
    var data     = {rating: rating, comment: comment};
    var children = comment.children();

    $(document).trigger('comment-rating:update-model', data);
    $(document).trigger('comment-rating:update-view',  data);

    _(children).each(function(child) {
      $(document).trigger('comment-rating:update-model', {comment: child});
      $(document).trigger('comment-rating:update-view',  {comment: child});
    });
  },
  toggleNewCommentForm: function() {
    var $el           = this.$el;
    var isInitialized = $el.data("editor_initialized");

    if(isInitialized) {
      $el.find(".new_comment").toggle();
    } else {
      this.initializeCKE();
    }

    setTimeout(function() { $el.find('.cke_textarea_inline').focus(); }, 300); // focus on comment box

    _.defer(function(){ $(window).resize(); }); // refresh CKE toolbar position

    return false;
  },
  initializeCKE: function() {
    var $el        = this.$el;
    var $container = $el.find('.comment-container');
    var formEl     = CommentApp.replyTemplate.render(this.model.toJSON());

    $container.append(formEl);
    $container.find("textarea.text").ckeInline();

    $el.data("editor_initialized", true);
  },
  previewReply: function(event) {
    event.preventDefault();

    var commentText = this.commentText(this.el);
    if(commentText === "") return false;

    var createdAt = DailyKos.Time.localizeCommentTime(new Date());
    var shouldNotify = $(this.el).find('.should-notify').is(':checked');
    CommentApp.shouldNotify = shouldNotify;

    var comment = new DailyKos.Comment({
      text: commentText,
      story_id: this.model.get("story_id"),
      story_author_id: this.model.get("story_author_id"),
      parent_id: this.model.get("id"),
      author: DailyKos.currentUserNickname,
      author_id: DailyKos.currentUserId,
      in_reply_to: this.model.get("author"),
      created_at: createdAt,
      author_avatar: DailyKos.userAvatar(),
      sort_string: this.model.get("sort_string") + ".0",
      should_notify: shouldNotify,
      preview: true,
      parentView: this
    });

    this.comments.add(comment, {merge: true});
    this.toggleNewCommentForm();
    this.saveReply();

    $(this.el).find(".actions .reply").hide();

    return false;
  },
  postReply: function(event) {
    event.preventDefault();

    this.limitWhitespace();

    var btnPost = $(this.el).find("button.post");        // 'Post' button
    var btnEdit = $(this.el).find("button.edit");        // 'Edit' button
    var txtPost = $(this.el).find(".post.display_text"); // 'Posting...' text
    var toggles = [btnPost, btnEdit, txtPost];

    if (btnPost.is(":disabled")) return;
    btnPost.attr('disabled', true);
    this.toggleDisplay(toggles);

    var _this = this;
    this.model.save({}, {
      success: function(model, response, options) {
        var avatar = DailyKos.userAvatar();
        if (avatar) _this.model.set('author_avatar', avatar);
        _this.model.updateSortString();
        _this.model.set("newSessionReply", true);
        _this.remove();
        _this.comments.remove(_this.model);
        _this.model.set("preview", null);
        _this.comments.add(_this.model, {merge: true, isNew: true});
        _this.toggleDisplay(toggles);

        if(_this.parentView) {
          var $parent = $(_this.parentView.el);
          var editor  = $parent.find('textarea').ckeditorGet();
          if (editor) editor.setData("");
          $parent.find(".actions .reply").show();

          _this.parentView.clearReply();
        } else {
          var targetForm = $(".comments .new_comment.top, .comments .new_comment.bottom")

          targetForm.show();
          $(".comments .wrap_hack").hide();

          if (_this.model.get("targetForm")) {
            targetForm = $(".new_comment." + _this.model.get("targetForm"));
          }

          targetForm.find(".error-alert").addClass("hidden");

          $(".comments .new_comment.bottom").show();
          $(".comments .new_comment.bottom").css('visibility', 'visible');

          clearEditor();

          location.hash = "#comment_" + _this.model.get("id");
        }

        $(document).trigger('comment-posted');

        DailyKos.loadAttributions($("#comment-" +_this.model.id));

        function clearEditor() {
          var editor = targetForm.find("textarea").ckeditorGet();
          var editorName = editor.name;
          var toolbarName = editorName +'_toolbar';

          targetForm.find("textarea").ckeditorGet().setData('');

          _.defer(function(){
            $('#'+toolbarName).trigger('resize');
          });
        }
      },
      error: function(model, xhr, options) {
        _this.toggleDisplay(toggles);
        $(_this.el).find(".post").removeClass("posting").html("Post");

        _this.editReply(_this.getError(xhr, {
          defaultMessage: "There was an error saving your comment. Please try again."
        }))
      }
    });
  },
  __renderError: function(formEl, errorMsg) {
    var alertEl = formEl.find(".error-alert");

    if(errorMsg && alertEl.length == 0) {
      // We don't have the alert element, so fall back to the previous method.
      return this.mainView.popNotification(errorMsg, true);
    }

    if(!(errorMsg && _.isString(errorMsg))) {
      alertEl.addClass("hidden");
    } else {
      var errorEl = alertEl.find(".error-message");

      // Here we render HTML because we have anchor elements in the devise
      // authentication error messages.
      errorEl.html(errorMsg);
      alertEl.removeClass("hidden");
    }
  },
  showCommentForm: function(errorMsg) {
    if(this.parentView) {
      this.parentView.toggleNewCommentForm();
      this.parentView.$el.find(".actions .reply").show();

      this.__renderError(this.parentView.$el, errorMsg);
    } else {
      var targetForm = $(".new_comment.top, .new_comment.bottom");

      $(".comments .wrap_hack").hide();

      targetForm.show();
      targetForm.css('visibility', 'visible');

      if (this.model && this.model.get("targetForm")) {
        targetForm = $(".new_comment." + this.model.get("targetForm"));
      }

      this.__renderError(targetForm, errorMsg);
    }
  },
  editReply: function(errorMsg) {
    this.showCommentForm(errorMsg);
    this.comments.remove(this.model);
    this.model.destroy();

    return false;
  },
  autosaveKey: function() {
    var key = "comment_autosave_story_"   +
              this.model.get("story_id")  +
              "_comment_"                 +
              this.model.get("id");

    return key;
  },
  saveReply: function() {
    localStorage[this.autosaveKey()] = $(this.el).find(".text").val();
  },
  fetchReply: function() {
    return localStorage[this.autosaveKey()] || '';
  },
  clearReply: function() {
    localStorage[this.autosaveKey()] = null;
  },
  showStaticForms: function() {
    $(".comments .wrap_hack").hide();

    $(".comments .new_comment.bottom").show();
    $(".comments .new_comment.bottom").css('visibility', 'visible');
  },
  limitWhitespace: function() {
    this.model.set({textToRender: this.stripSpacesAndNewLines("textToRender")}, {silent: true});
    this.model.set({text: this.stripSpacesAndNewLines("text")}, {silent: true});
  },
  stripSpacesAndNewLines: function(attribute_name) {
    var commentText = this.model.get(attribute_name);
    commentText = commentText.replace(/(?:\s*\<p class="is-empty-p"\>\s*\<\/p\>\s*){4,}/g, '<p class="is-empty-p"></p><p class="is-empty-p"></p><p class="is-empty-p"></p>');
    var maxSpaces = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    commentText = commentText.replace(/(?:\s\&nbsp\;){26,}/g, maxSpaces);
    commentText = DailyKos.textHelpers.trimWhitespace(commentText);
    return commentText;
  }
});
DailyKos.CommentThreadView = DailyKos.CommentViewBase.extend((function(){

// --- BEGIN INDENT ---
var _self = {};

return _(_self).extend({
  events: {
    "click .static-comment-form-wrapper .preview"      : "previewReply",
    "click .static-comment-form-wrapper .cancel"       : "clearCommentForm",
  },

  // Selectors so we don't have to do a mass find/replace. May be excessive.
  commentDiv:                 ".new_comment",
  commentButtonsToDisable:    ".buttons .preview, .comment-buttons .post",
  countdownSelector:          ".new_comment .countdown",
  countdownMessageSelector:   ".countdown-message",
  countdownTimerSelector:     ".new_comment .countdown-timer",
  commentReplySelector:       ".actions .reply",
  commentElementsToHide:      ".input, button, .warning",

  initialize: function(options){
    if(CommentApp.commentRatingsLoaded) this.setupRatings();

    this.tree = options.tree || options.el;
    this.setTimeLimitForComments(options.commentsCloseAt);

    CommentApp.comments.bind('add', this.renderComment, this);
  },
  setupRatings: function() {
    this.setRatings();
  },
  selectComment: function(commentId) {
    CommentApp.selectComment(commentId);
  },
  render: function() {
    $(document).on('comments-loaded', function () {
      if($('.new_comment').length > 0) {
        $(function(){ $(".new_comment.bottom textarea.text").ckeInline(); });
      }
    });

    this.renderComments();

    return false;
  },
  renderComment: function(comment, collection, options) {
    try {
      var view = new DailyKos.CommentView({
        model: comment,
        comments: CommentApp.comments,
        mainView: this
      }).render();

      var index = CommentApp.comments.indexOf(comment);
      var startingHeight = $(".comment-section").height();

      if($(this.tree).find(".comment").length < 1) {
        $(this.tree).append(view.el);
      } else {
        if(index < 1) {
          $(this.tree).find(".comment:first").before(view.el);
        } else {
          $(this.tree).find(".comment").eq(index - 1).after(view.el);
        }
      }

      if(options.update) {
        CommentApp.Utils.adjustScroll(view.el, startingHeight);
      }

      if(options.isNew) {
        var commentId = comment.get("id")
        if(commentId) CommentApp.selectComment(commentId);
      }
    } catch(e) {
      // Don't stop execution by re-raising:
      DailyKos.Errors.notify(e, 'comment-thread-view#renderComment');
    }
  },
  // This is for the comment-page.
  // when a comment is directly linked, this function will return
  // - the index of the linked-comment
  // - the index of the last-child of the linked-comment
  // - the parent of the linked-comment
  getLinkedCommentRange: function() {
    var comments      = CommentApp.comments;
    var linkedComment = comments.find({id: CommentApp.linkedCommentId});
    var lastChild     = linkedComment.lastChild();

    var start  = linkedComment.indexPosition();
    var end    = (lastChild || linkedComment).indexPosition();
    var parent = linkedComment.getParent();

    this.setReplyLevelOffset(linkedComment);
    this.setCommentContextHref(linkedComment, parent);
    this.setBackToStoryHref();

    return {start: start, end: end, parent: parent};
  },
  // This is for the comment-page.
  setCommentContextHref: function (linkedComment, parent) {
    CommentApp.onLoad(function(){
      $('.comment-context').removeClass('hidden');

      var grandparent = parent && parent.getParent();

      if (!grandparent) return;

      var commentPath = CommentApp.commentPath(grandparent.id);

      var linkToParent;
      linkToParent = $('.comment-parent-link');                          // link the "Show Parent Thread" button to the parent thread
      linkToParent = linkToParent.add('.comment:first .parent-author');  // link the {UserName} > {PARENT} link to the parent thread
      linkToParent.attr({href: commentPath})
                  .removeClass('hidden');
    });
  },
  // This is for the comment-page.
  // Originally, the plan was was to have the "Back to Story" link take you back to the story page.
  // We then decided it'd be nicer to have the "Back to Story" link take you back to the story page AND scroll you to the comment.
  // Here, we're finding what comment is selected on the page, then we'll take you back to the story, and scroll you to that comment.
  setBackToStoryHref: function () {
    // When the "Back to Story" link is clicked
    // Set the url to the story page, with the #anchor to the currently selected comment
    $('.story-link').click(function() {
      var anchor = $('.comment.selected').find('.anchor:first').attr('name');
      if (!anchor) return;
      var href = '/stories/' + DK.currentStoryID + '#' + anchor;
      $(this).attr('href', href);
    });
  },
  setReplyLevelOffset: function (linkedComment) {
    var sort_string = linkedComment.get('sort_string');
    var numParents  = (sort_string.match(/\./g) || []).length;
    CommentApp.replyLevelOffset = Math.max(numParents - 1, 0);
  },
  setCommentRange: function(comments) {
    if (!CommentApp.linkedCommentId) return;
    var range = this.getLinkedCommentRange();
    comments.models = comments.models.slice(range.start, range.end + 1);
    if (range.parent) comments.models.unshift(range.parent);
    comments.length = comments.models.length;
  },
  renderComments: function() {
    var comments = CommentApp.comments;

    this.renderStaticCommentForms();
    this.setCommentRange(comments);

    var commentsDup = [].concat(comments.toArray());

    var processComments = function () {
      var commentsChunk = commentsDup.splice(0, 50);

      var self = this;
      _(commentsChunk).each(function (comment) {
        var view = new DailyKos.CommentView({
          model: comment,
          comments: comments,
          mainView: CommentApp.commentThreadView
        }).render();

        $(CommentApp.commentThreadView.tree).append(view.el);

        if(!CommentApp.selectedComment) return;

        if (CommentApp.selectedComment == comment.get("id")) {
          view.$el.addClass("selected linked-to-comment");

          CommentApp.selectedCommentFound = true;

          $(document).on('comments-loaded', function () {
            setTimeout(function() {
              if(view.$el.is(':visible')) {
                self.scrollToComment(view.el.id);
              } else {
                // Notify the user that they cannot view the comment in their URL bar:
                var modalContent = "<p>The comment you're trying to view is hidden and can't be read.</p>";
                DailyKos.Modal.showError(modalContent, "Comment Hidden");
              }
            }, 300);
          });
        } else if (comment.get("sort_string").indexOf(CommentApp.selectedComment) >= 0) {
          view.$el.addClass("linked-to-thread");
        }
      });

      if(commentsDup.length > 0) {
        _.defer(processComments);
      } else {
        DailyKos.spinner.hide();
        $('.comments').show();
        $(document).trigger('comments-loaded');
      }
    }.bind(this);

    processComments();
  },

  // Since comments are loaded in a delayed fashion, we have to wait then set the location.hash when the comment is rendered (in most browsers).
  // Some browsers don't scroll to the location.hash if it is re-set to the same value, so we have to change the location.
  // IE9 doesn't support history.replaceState, but it scrolls to the hash even when location.hash is re-set to the same value - so we're good there.
  //
  // By default, elements with class='anchor' have a top:60px, so that anchor tags are not obscured by fixed-top elements.
  // If we did not have this rule, the browser would scroll to the element and position it at the very top of the window (obscured by the element affixed to the top).
  // We change this for the comment page, since that page has a different set of fixed-top elements.
  scrollToComment: function(id){
    try {
      var comment_hash = id.replace('-', '_');

      var title = document.title;
      var path  = window.location.pathname;

      if ($.browser.mozilla && $.browser.desktop) return;    // Firefox observes the page for matching '#comment_id'

      if (history && history.replaceState) {
        history.replaceState({}, title, path);               // Un-set the hash. However, don't add to history.
      }

      location.hash = '#' + comment_hash;                    // Re-set the hash. This scrolls to the comment.
    } catch (e) {
      console.warn(e);
    }
  },
  setRatings: function() {
    CommentApp.commentRatings.each(function(rating) {
      comment = CommentApp.comments.get(rating.get("comment_id"));

      if(!comment) return; // hidden comment

      $(document).trigger('comment-rating:update-model', {rating: rating, comment: comment});
      if (!comment.comment_view()) return; // on comment-page: skip comment-ratings for non-rendered comments
      $(document).trigger('comment-rating:update-view',  {rating: rating, comment: comment});
    });
  },
  setTimeLimitForComments: function(_commentsCloseAt) {
    var timeNow       = new Date(),
        intNow        = Number(timeNow),
        notifyWithin  = (60 * 60) * 1000; // If story comments close in the next hour, have the UI inform the User that this is the case.

    if(!_.isDate(_commentsCloseAt) && !_.isNumber(_commentsCloseAt))
      _commentsCloseAt = intNow;

    this.commentsCloseAt = new Date(_commentsCloseAt);

    var commentsClosed  = this.commentsCloseAt < timeNow,
        beginNotifyAt   = new Date(this.commentsCloseAt - notifyWithin),
        timeUntilNotify = beginNotifyAt - timeNow;

    if(timeUntilNotify < 0) timeUntilNotify = 0;

    // Comments are already closed. Get out of here.
    if(commentsClosed)
      return this.endCommentingPeriod({ force: true });

    var self = this;
    setTimeout(function() { self.startCommentTimeLimit(); }, timeUntilNotify);
  },
  startCommentTimeLimit: function() {
    var oneSecond = 1000,
        oneMinute = 60 * oneSecond;

    var self = this;
    var runTimer = self.updateCommentTimer();

    if(!runTimer) return;

    var interval  = setInterval(function() {
                      if(! self.updateCommentTimer()) { clearInterval(interval); }
                    }, oneSecond);
  },
  updateCommentTimer: function() {
    var oneSecond   = 1000,
        oneMinute   = 60 * oneSecond,
        timeNow     = new Date(),
        timeLeft    = this.commentsCloseAt - timeNow,
        minsLeft    = Math.floor(timeLeft / oneMinute),
        secsLeft    = Math.floor((timeLeft - (minsLeft * oneMinute)) / oneSecond),
        counterText = "00:";

    if(minsLeft < 10) minsLeft = "0" + minsLeft;
    if(secsLeft < 10) secsLeft = "0" + secsLeft;

    counterText += minsLeft + ":" + secsLeft;

    $(this.countdownSelector).removeClass("hidden");
    $(this.countdownTimerSelector).html(counterText);

    if(minsLeft > 0 || secsLeft > 0)
      return true;
    else {
      this.endCommentingPeriod();
      return false;
    }
  },
  endCommentingPeriod: function(args) {
    if(!_(args).isObject()) args = { force: false };
    CommentApp.commentingHasEnded = true;
    $(this.commentReplySelector).addClass("hidden");

    if(args.force) {
      $(this.commentDiv).hide();
    }

    $(this.commentButtonsToDisable).attr("disabled", "disabled");
    $(this.commentButtonsToDisable).addClass("disabled");
    $(this.commentButtonsToDisable).removeClass("enabled");

    if(window.CKEDITOR) {
      var editors = _.values(CKEDITOR.instances);
      _(editors).each(function(editor) {
        editor.setReadOnly()
      });

      $('.cke_editable_inline').css('background-color', '#F9F9F9')
    }

    $(this.countdownMessageSelector).html("The story's comment period has ended.");
    $(".actions > a.reply").hide();
  },
  fetchNewComments: function() {
    CommentApp.comments.fetch();
  },
  popNotification: function(content, showModal) {
    var modal_box = $(".modal_box");
    if (showModal && modal_box.length > 0) {
      $(".modal_box .content").html(content);
      modal_box.jqm({
        toTop: true,
        onShow: function(hash) {
          hash.o.css('opacity',0.8);
          hash.w.show();
        }
      }).jqmShow();
    } else {
      alert(content);
    }
  },
  previewReply: function(event) {
    event.preventDefault();

    var $comment    = $(event.target).closest('.new_comment');
    var commentText = this.commentText($comment);
    if (commentText === '') return false;

    var targetForm  = $comment,
        formWrapper = targetForm,
        isTop       = targetForm.hasClass('top'),
        insertAt    = isTop ?  "0" : "9999999999",
        commentForm = isTop ? ".new_comment.top" : ".new_comment.bottom";

    var createdAt = DailyKos.Time.localizeCommentTime(new Date());
    var shouldNotify = $comment.find('.should-notify').is(':checked');
    CommentApp.shouldNotify = shouldNotify;

    var comment = new DailyKos.Comment({
      text: commentText,
      story_id: CommentApp.storyID,
      author: DailyKos.currentUserNickname,
      author_id: DailyKos.currentUserId,
      story_author_id: CommentApp.storyAuthorID,
      created_at: createdAt,
      sort_string: insertAt,
      author_avatar: DailyKos.userAvatar(),
      targetForm: isTop ? "top" : "bottom",
      preview: true,
      should_notify: shouldNotify
    });

    CommentApp.comments.add(comment, {merge: true, at: +insertAt});

    formWrapper.hide();

    $(this.el).find(".new_comment.bottom").css('visibility', 'hidden');
    $(this.el).find(".wrap_hack").show();

    return false;
  },
  renderStaticCommentForms: function() {
    _.defer(this.renderTopStaticCommentForm);
    _.defer(this.renderBottomStaticCommentForm);
  },
  renderTopStaticCommentForm: function (){
    var comments = $('#comments');
    if (window.innerHeight > comments.height()) return; // top comment not needed since window is large enough

    var static_form = $("#static_comment_form");
    $('#comments .comment-start').after(static_form.render({position: 'top'}));
    $(".new_comment.top textarea.text").ckeInline();
  },
  renderBottomStaticCommentForm: function (){
    var static_form  = $("#static_comment_form");
    var comments = $('#comments');
    comments.append(static_form.render({position: 'bottom'}));       // add bottom textarea
    $(".new_comment.bottom textarea.text").ckeInline();              // convert textarea to ckeditor
  }
}); // return _(self).extend
// --- END INDENT --- Temporarily unindenting this code to reduce merge conflicts into master.

})());
(function ($) {
  var customAvatarImgs = {
      zero_rate:        "<img src='https://images.dailykos.com/i/user_badges/Trusted.png' class='badge' title='Trusted User'/>"
    , rescue_story:     "<img src='https://images.dailykos.com/i/user_badges/RescueRanger.png' class='badge' title='Rescue Ranger'/>"
    , is_subscriber:    "<img src='https://images.dailykos.com/i/user_badges/Subscriber.png' class='badge' title='Daily Kos Subscriber'/>"
    , act_blue:         "<img src='https://images.dailykos.com/i/user_badges/ActBlue.png' class='badge' title='Donated through Act Blue'/>"
    , netroots_nation:  "<img src='https://images.dailykos.com/i/user_badges/NetNation.png' class='badge' title='Netroots Nation Attendee'/>"
    , beta_tester:      "<img src='https://images.dailykos.com/i/user_badges/BetaTester.png' class='badge' title='Beta Tester'/>"
    , has_donated:      "<img src='https://images.dailykos.com/i/user_badges/DailyKos_Donor_badge.png' class='badge' title='Donated to Daily Kos'/>"
  }

  DailyKos.AuthorPopup = Backbone.View.extend({
    initialize: function(options) {
      // turn this off to redesign
      return false;
    },
    render: function() {
      var newPopup = this.model.el.append(this.template(this.model.attributes));
      this.model.el.removeClass('requesting').addClass('loaded');
      if(this.model.get('user_sig').length > 0) {
        this.model.el.find('.bottom_author_info').css({'margin-top': '7px'});
      }

      var popupOffset;
      if(this.model.el.siblings('a').hasClass('story_author')) {
        popupOffset = '22px';
      } else {
        popupOffset = '20px';
      }

      if((this.model.el.offset().top - 50) < $('#header').offset().top) {
        this.model.el.css({bottom: 'inherit', top: popupOffset});
        this.model.el.find('.author_up_arrow').show();
        this.model.el.find('.author_arrow').hide();
      } else {
        this.model.el.css({bottom: popupOffset});
      }

      var linkMiddle = (this.model.el.siblings('a').width() / 2) - 5;
      linkMiddle = Math.max(1, linkMiddle);
      this.model.el.find('.author_arrow').css({'margin-left': (linkMiddle + "px")});
      this.model.el.find('.author_up_arrow').css({'margin-left': (linkMiddle + "px")});
      return this;
    }
  });
})(jQuery);
DailyKos.MobileCommentView = DailyKos.CommentView.extend({
  events: {
    "click .recommend:not(.inactive)":          "mobileRecommend",
    "click .flag":                              "flag",
    "click .actions .unrecommend":              "mobileRemoveRating",
    "click .actions .unflag":                   "removeRating",
    "click .actions .reply:not(:disabled)":     "slideToggleNewCommentForm",
    "click .preview:not(:disabled)":            "previewReply",
    "click .post:not(.posting):not(:disabled)": "postReply",
    "click .cancel":                            "slideToggleNewCommentForm",
    "click .edit":                              "editReply",
    "click .inactive":                          "promptCannotRecommend",
    "click .remove-comment":                    "removeComment"
  },
  commentContainer: function() { return $(this.el).find('.comment_wrapper'); },
  indentWidth: function() {
    var indentBy = this.model.get("sort_string").match(/\./g) ? (this.model.get("sort_string").match(/\./g).length) * 10 : 0;
    return _.min([indentBy, 70], function(width) { return width; });
  },
  postReply: function() {
    var btnPost = $(this.el).find("button.post");        // 'Post' button
    var btnEdit = $(this.el).find("button.edit");        // 'Edit' button
    var txtPost = $(this.el).find(".post.display_text"); // 'Posting...' text
    var toggles = [btnPost, btnEdit, txtPost];

    if (btnPost.is(":disabled")) return;
    btnPost.attr('disabled', true);
    this.toggleDisplay(toggles);

    var _this = this;
    this.model.save({}, {
      success: function(model, response, options) {
        // hide the buttons for 'Post', 'Edit'
        _this.toggleDisplay(toggles);

        // update comment model
        model.set('sort_string', _this.buildSortString(model));
        model.set("preview", null);

        // re-insert comment model
        _this.remove();
        _this.comments.remove(model);
        _this.comments.add(model, {merge: true});

        // refresh UI
        if(_this.parentView) {
          $(_this.parentView.el).find(".actions .reply").show();
          $(_this.parentView.el).find('.input textarea').val('');
          _this.parentView.clearReply();
        } else {
          $(".comments .wrap_hack").hide();
          $(".new_comment.top textarea").val('');
          $(".new_comment.top, .new_comment.bottom").show();
          $(".new_comment.top, .new_comment.bottom").css('visibility', 'visible');
          $(".new_comment.bottom textarea").val('');
        }

        // scroll to comment
        // location.hash = "#comment_" + model.get("id");
        var comment_selector = "#comment_" + model.get("id");
        comment_selector = comment_selector.replace('_', '-');
        $('html,body').animate({scrollTop: $(comment_selector).offset().top},  1000);

        btnPost.attr('disabled', false);
      },
      error: function(model, response, options) {
        _this.toggleDisplay(toggles);
        if (_.contains([401, 403, 404], response.status)) {
          DailyKos.Modal.showError(JSON.parse(response.responseText).error);
        } else {
          DailyKos.Modal.showError("There was an error saving your comment. Please try again.");
        }

        btnPost.attr('disabled', false);
      }
    });
  },
  saveReply: function() {
    localStorage["comment_autosave_story_"+this.model.get("story_id")+"_comment_"+this.model.get("id")] = $(this.el).find(".input textarea").val();
  },
  slideToggleNewCommentForm: function(e) {
    if($(this.el).find(".new_comment").is(':visible')) {
      var _this = this;
      $($(this.el).find('textarea.text')).trigger('autosize.destroy');
      $(this.el).find(".new_comment").slideToggle(400, function() {
        $(_this.el).find('.up_triangle_gray').hide();
        $(_this.el).find(".meta").css("border-bottom", "1px #DEDEDE solid");
        return false;
      });
      $('html,body').animate({scrollTop: $(this.el).offset().top},  1000); // scroll up to top of comment
    } else {
      $(this.el).find('.up_triangle_gray').show();
      var authorWidth = $(this.el).find('.comment_author').width();
      var authorMiddle = (authorWidth / 2) - 5.5;
      $(this.el).find('.up_triangle_gray').css("left", authorMiddle);
      $(this.el).find(".meta").css("border-bottom", "none");
      $(this.el).find(".new_comment").slideToggle();
      $($(this.el).find('textarea.text')).autosize();
      $('html,body').animate({scrollTop: $(this.el).find('.meta').offset().top},  1000); // scroll down to reveal comment form
    }
    return false;
  },
  toggleNewCommentForm: function() {
    var nextState = $(this.el).find(".new_comment").is(':visible') ? 'hide' : 'show';

    $(this.el).find('.up_triangle_gray').toggle();
    $(this.el).find(".new_comment").toggle();

    if(nextState == 'show') {
      $(this.el).find(".meta").css("border-bottom", "none");
      $(this.el).find(".new_comment").css('visiblity', 'visible');
    } else {
      $(this.el).find(".meta").css("border-bottom", "1px #DEDEDE solid");
    }

    return false;
  },
  commentText: function(commentContainer) {
    return this.commentTextMobile(commentContainer);
  },
  mobileRecommend: function(e){
    this.ratingWithSpinner(e, this.recommend);
  },
  mobileRemoveRating: function(e){
    this.ratingWithSpinner(e, this.removeRating);
  },
  ratingWithSpinner: function(e, performRating) {
    e.preventDefault();

    var that = this;
    var startSpinner = function(){ that.commentSpinner(true);  };
    var stopSpinner  = function(){ that.commentSpinner(false); };

    performRating.call(this, e, startSpinner, stopSpinner);
  },
  promptCannotRecommend: function(e) {
    e.preventDefault();
    $(this.el).find('.comment_recommend_login').toggleVisibilityFor(10000);
    return false;
  }
});

DailyKos.MobileCommentThreadView = DailyKos.CommentThreadView.extend({
  events: {
    "submit .top.new_comment" : "previewReply",
    "submit .bottom.new_comment" : "previewReply"
  },
  renderComment: function(comment, collection, options) {
    var view = new DailyKos.MobileCommentView({
      model: comment,
      commentRatings: CommentApp.commentRatings,
      comments: CommentApp.comments,
      mainView: this
    }).render();

    var index = CommentApp.comments.indexOf(comment);

    if(index < 1) {
      $(this.el).find(".comment:first").before(view.el);
    } else {
      $(this.el).find(".comment").eq(index - 1).after(view.el);
    }

    this.highlight(view.el);
  },
  renderComments: function() {
    this.renderTopStaticCommentForm();

    var threadView = this;
    var comments_inner = $('#comments_inner');

    var commentsDup = [].concat(CommentApp.comments.toArray());

    var processComments = function () {
      var commentsChunk = commentsDup.splice(0, 50);

      _(commentsChunk).each(function (comment) {
        var view = new DailyKos.MobileCommentView({
          model: comment,
          commentRatings: CommentApp.commentRatings,
          comments: CommentApp.comments,
          mainView: CommentApp.commentThreadView
        }).render();

        if (CommentApp.selectedComment == comment.get("id")) {
          view.$el.addClass("selected");
          view.$el.addClass("linked-to-comment");

          CommentApp.selectedCommentFound = true;

          $(document).on('comments-loaded', function () {
            setTimeout(function() {
              if(view.$el.is(':visible')) {
                threadView.scrollToElement(view.$el);
              } else {
                // Notify the user that they cannot view the comment in their URL bar:
                var modalContent = "<p>The comment you're trying to view is hidden and can't be read.</p>";
                DailyKos.Modal.showError(modalContent, "Comment Hidden");
              }
            }, 1000);
          });
        } else if (comment.get("sort_string").indexOf(CommentApp.selectedComment) >= 0) {
          view.$el.addClass("linked-to-thread");
        }

        comments_inner.append(view.el);
      });

      if(commentsDup.length > 0) {
        _.defer(processComments);
      } else {
        threadView.onCommentRenderingComplete();
      }
    }

    _.defer(processComments);
  },
  onCommentRenderingComplete: function(){
    DailyKos.spinner.hide();

    this.renderTopStaticCommentForm();
    this.renderBottomStaticCommentForm();

    if($('.new_comment.bottom').length > 0) {
      $('.comment').last().addClass('last');
    } else {
      $('.comment').last().addClass('bottom_no_form');
    }

    $(document).trigger('comments-loaded');
  },
  render: function() {
    this.renderComments();
  },
  initializeCKE: function() {
    return false;
  },
  renderTopStaticCommentForm: function() {
    if($('#comments_inner').height() > 480) {
      var context = { staticFormClass: 'top' };
      var topForm = $("#static_comment_form").render(context);
      $('#comments').prepend(topForm);
      $('#comments').find('.new_comment textarea').first().autosize();
    }
  },
  renderBottomStaticCommentForm: function() {
    var context = { staticFormClass: 'bottom' };
    var bottomForm = $("#static_comment_form").render(context);
    $('#comments').append(bottomForm);
    $('#comments').find('.new_comment textarea').last().autosize();
    $('.comment_count.bottom').show();
  },
  scrollToElement: function(e) {
    if (e.length) {
      $('html,body').animate({
        scrollTop: e.offset().top
      }, 1000);
    }
  },
  highlight: function(e) {
    $(e).addClass('selected');

    setTimeout(function() {
      $(e).addClass('fade-out');
    }, 3000);
  },
  commentText: function(commentContainer) {
    return this.commentTextMobile(commentContainer);
  }
});






(function() {
  if(!window.CommentApp) window.CommentApp = {};

  var self = CommentApp;

  $(document).on('comments-loaded', function() { CommentApp.isLoaded = true; });

  $.extend(self, {
    commentRatingsLoaded: false,
    commentingHasEnded:   false,
    isInitialized:        false,
    isMobile:             false,
    selectedComment:      null,
    replyLevelOffset:     0,

    determineSelectedComment: function () {
      var selectedComment = window.location.hash;

      // - if path is '/comments/1/2'
      // - then go to '/comments/1/2#comment_2'
      if (!selectedComment && CommentApp.linkedCommentId) {
        selectedComment =  '#comment_' + CommentApp.linkedCommentId;
      }

      if (selectedComment) {
        var matchData = selectedComment.match(/comment_(\d*)/);
        if(matchData) {
          self.selectedComment = matchData[1];

          setTimeout(showLoadingMessage, 1000);
        }
      }
    },

    initialize: function(comments, options) {
      CommentApp.determineSelectedComment();

      App.Comments.Rating.init();
      App.Comments.Comment.init();
      App.Comments.Folding.init({isMobile: self.isMobile});
      CommentApp.HandlebarsHelpers.init();

      if(self.isMobile) {
        self.setWhoamiListenersTemporarilyForMobile()
      } else {
        self.setWhoamiListeners()
        self.replyTemplate = $("#reply_form_template");
        DailyKos.CKE.setLinkPopover();
      }

      self.storyID = options.storyID;
      self.storyAuthorID = options.authorID;
      self.shouldNotify = DailyKos.preferCommentNotifications();

      self.comments = new DailyKos.Comments(comments, {storyID: self.storyID, storyAuthorID: self.storyAuthorID});
      self.isInitialized = true;

      if(self.isMobile) {
        self.commentThreadView = new DailyKos.MobileCommentThreadView(options);
      } else {
        self.commentThreadView = new DailyKos.CommentThreadView(options);
      }

      _.defer(function () {
        self.renderComments();
      });

      $(document).on('comments-loaded', function () {
        if(!self.commentingHasEnded && !self.isMobile) {
          self.AutoUpdater.initialize();
        }

        if (self.commentingHasEnded) {
          $("h4.comments-closed-notice").removeClass('hidden');
        }

        if(self.selectedComment && self.selectedCommentFound !== true) {
          // Notify the user that a comment with the given ID no longer exists:
          $(function () {
            var modalContent = "<p>The comment you're trying to view doesn't exist!</p>";
            DailyKos.Modal.showError(modalContent, "Comment Not Found");
          });
        }

        if (!CommentApp.isMobile) App.Tracker.StoryPage.init();

        CommentApp.initComplete = true;
      });
    },
    initMobile: function(comments, options) {
      CommentApp.determineSelectedComment();

      self.isMobile = true;

      self.commentRatings = new DailyKos.CommentRatings(options.commentRatings);
      self.commentRatingsLoaded = true;

      self.initialize(comments, options);
    },
    onLoad: function(callback) {
      if (CommentApp.isLoaded) {
        callback();
      } else {
        $(document).on('comments-loaded', callback);
      }
    },
    setRatings: function(ratings) {
      self.commentRatings = new DailyKos.CommentRatings(ratings);
      self.commentRatingsLoaded = true;

      if(self.commentsRendered) {
        // already rendered! Setup with commentThreadView:
        self.commentThreadView.setupRatings();
      }
      else if(self.isInitialized) {
        // Haven't yet rendered. Can do it now:
        self.commentThreadView.setupRatings();
        self.renderComments();
      }
    },
    renderComments: function(force) {
      if(self.commentsRendered && !force) return;

      self.commentsRendered = true;
      self.commentThreadView.render();
    },
    setWhoamiListeners: function() {
      DailyKos.Whoami.onLoadAndFromCache(function(ev, json) {
        if(!DailyKos.isLoggedIn()) return;

        var body = $('body');

        if(DailyKos.isModerator())        body.addClass('comment-moderator');
        if(DailyKos.canQueueToRescue())   body.addClass('rescue-queuer');

        if(DailyKos.canFlagComment())     body.addClass('can-hide-comments');
        if(DailyKos.canRecComment())      body.addClass('can-recommend');
        if(DailyKos.preferHiddenComments()) body.addClass('prefer-hidden-comments');
        if(DailyKos.preferHiddenCommentsUntilIHide()) body.addClass('prefer-hidden-comments-until-i-hide');
        if(DailyKos.canZeroRateComments())   body.addClass('can-zero-rate-comments');
        if(DailyKos.canViewCommentFlagData()) body.addClass('can-view-flag-data progressive-rollout');
        if(DailyKos.progressiveRollout()) body.addClass('progressive-rollout');

        if(!self.commentingHasEnded) {
          if(DailyKos.canComment())   body.addClass('can-comment');
        }
      });
    },
    setWhoamiListenersTemporarilyForMobile: function() {
      var body = $('body');

      if(DailyKos.preferHiddenComments()) body.addClass('prefer-hidden-comments');
      if(DailyKos.preferHiddenCommentsUntilIHide()) body.addClass('prefer-hidden-comments-until-i-hide');
      if(DailyKos.canZeroRateComments())   body.addClass('can-zero-rate-comments');
    },
    commentsPath: function() {
      return "/stories/" + self.storyID + "/comments";
    },
    selectComment: function (commentId) {
      this.selectedComment = commentId;

      $('.comment.selected').removeClass('selected');
      $('#comment-' + commentId).addClass('selected');

      this.Utils.scrollToComment(commentId);
    },
    commentsContainInstagram:  function(comments) {
      console.log("checking comments for instagram embeds");
      _(comments).each(
        function(){console.log("checking each comment");if (self.model.containsInstagrams()) {return true;}}
      );

      return false;
    }
  });

  function showLoadingMessage() {
    if (CommentApp.isLoaded) return;
    DailyKos.Notifications.showToast({msg: 'Loading comments...'});
    $(document).on('comments-loaded', function(){ setTimeout(DailyKos.Notifications.hideToast, 250); });
  }
})();
(function() {
  var self = window.CommentApp.Utils = {};

  $.extend(self, {
    scrollToComment: function (commentId) {
      commentId = commentId || this.selectedComment;

      if(!commentId) return;

      var comment = $('#comment-' + commentId);

      // object doesn't exist (yet?)
      if(comment.length <= 0) {
        window.location.hash = "comment_" + commentId;
        return;
      }

      this.__scrollToComment(commentId);
    },
    __scrollToComment: function(commentId) {
      var comment = $('#comment-' + commentId);
      var $window = $(window);

      var docViewTop = $window.scrollTop() + 45; // 45 = navbar height
      var docViewBottom = docViewTop + $window.height();

      var offset = comment.offset();

      if(!offset) {
        return this.__setHashWithoutScroll(commentId);
      }

      var elemTop = comment.offset().top;
      var elemBottom = elemTop + comment.height();

      var commentIsVisible = (elemBottom <= docViewBottom) && (elemTop >= docViewTop);

      var scrollTopOffset = 0;
      scrollTopOffset -= affixedElem.fixedTopHeight(); // when scrolling, accommodate for elements fixed to the top of the viewport (navbars, etc.)
      scrollTopOffset -= 20;                           // leave 20px at the top, so we're not butting up against the navbar or window-top

      if(!commentIsVisible) {
        comment.scrollView(scrollTopOffset, 500);
      }

      this.__setHashWithoutScroll(commentId)
    },
    __setHashWithoutScroll: function (commentId) {
      var newHash = "comment_" + commentId;

      if(window.location.hash == '#' + newHash) return;

      var comment = $('#comment-' + commentId);
      var anchor = comment.find('a.anchor');

      anchor.hide()
      window.location.hash = newHash;
      setTimeout(anchor.show, 1000);
    },
    /*
      After comments are inserted into the DOM by the
      auto updater, the page should not jump if the comment
      is inserted above or into the viewport. This function
      checks the position of the new comment(s) and adjusts
      the scroll position if the comment is injected above
      the viewport so that the window does not appear to the
      user to move. A second check is necessary to do the same
      once images have loaded. In an ideal world, we would lazy
      load comment images and this would probably allow us to
      skip the second check altogether.
    */
    adjustScroll: function (commentView, startingHeight) {
      var scrollTop, newCommentTop, addedOffset,
          windowHeight, repliesAndPreviews, highestReplyOrPreviewInView,
          images, loadCounter, $imgContainer, imgContainerHeight,
          $tweetContainer, tweetContainerHeight;

      scrollTop        = $(window).scrollTop();
      windowHeight     = $(window).height();
      newCommentTop    = $(commentView).offset().top;
      oldWindowBottom  = scrollTop + windowHeight + $(commentView).height();
      addedOffset      = 100; // wiggle room at page top, adjust up or down

      // Return if comment below viewable area, or, by subtracting
      // the added offset, just barely on the page
      if(newCommentTop >= oldWindowBottom) return false;

      // Decide whether to adjust scroll if inserted comment is in viewable area,
      // checking first if it is lower than scrollTop + a small offset.
      if(newCommentTop > scrollTop + addedOffset) {
        repliesAndPreviews = $('#comments').
                             find('.new_comment:visible, .comment.preview:visible').
                             not('.top');

        // find the highest open reply box or preview box that is in the
        // viewport, if one exists
        highestReplyOrPreviewInView = _.find(repliesAndPreviews, function(replyOrPreview) {
          return $(replyOrPreview).offset().top  > scrollTop &&
                 $(replyOrPreview).offset().top  < oldWindowBottom; // bottom would have been in viewport
        });

        // If there is no reply or preview box that the comment was inserted above
        // that would have been in view before the new comment was
        // inserted, then don't adjust the scroll.
        if(!highestReplyOrPreviewInView) return false;

        // If the highest open reply or comment box is higher up the page
        // than the newly inserted comment, don't adjust the scroll.
        if($(highestReplyOrPreviewInView).offset().top < newCommentTop)
          return false;
      }

      // Since the new comment was not inserted below or on the screen,
      // the new comment was inserted above the screen, so adjust the
      // scroll.
      $(window).scrollTop(scrollTop + $(".comment-section").height() - startingHeight);

      CommentApp.Utils.globalHeight = $(".comment-section").height();
      images = $(commentView).find('img').not('.avatar');
      loadCounter = 0;

      $.each(images, function(index, image) {
        $imgContainer = $(image).parent();
        imgContainerHeight = $imgContainer.height();
        $imgContainer.css({"height": imgContainerHeight + "px"});

        $(image).on('load error', function() {
          loadCounter++;
          $imgContainer.css({"height": "auto"});

          if(loadCounter === images.length) {
            $(window).scrollTop($(window).scrollTop() +
                                $(".comment-section").height() -
                                CommentApp.Utils.globalHeight);
            CommentApp.Utils.globalHeight  = $(".comment-section").height();
          }
        });
      });

      if($(commentView).find('blockquote.twitter-tweet').length > 0) {
        $tweetContainer      = $(commentView).find('[data-twitter-content]');
        tweetContainerHeight = $tweetContainer.height();
        $tweetContainer.css({"height": tweetContainerHeight + "px"});

        twttr.ready(function (twttr) {
          twttr.events.bind('rendered', function (event) {
            $tweetContainer.css({"height": "auto"});

            $(window).scrollTop($(window).scrollTop() +
                                $(".comment-section").height() -
                                CommentApp.Utils.globalHeight);
            CommentApp.Utils.globalHeight  = $(".comment-section").height();
          });
        });
      }
      if($(commentView).find('blockquote.instagram-media').length > 0) DailyKos.Instagram.instagramRenderEmbeds;
      return false;
    },
  })

  return self;
})();
(function() {
  if(!window.CommentApp) window.CommentApp = {};
  if(!window.CommentApp.AutoUpdater) window.CommentApp.AutoUpdater = {};

  var self = CommentApp.AutoUpdater;
  var Notify;

  $.extend(self, {
    pollFrequency: 30000, // 30 seconds

    initialize: function() {
      Notify = CommentApp.AutoUpdater.Notify.init();
      self.pollForUpdates();
      self.addKeyListener();
    },
    addNewComments: function(comments) {
      var newComments = [],
          newReplies  = [];

      var userNickname = DailyKos.currentUserNickname();

      _(comments).each(function(c) {
        if(c['parent_id']) {
          var parent = CommentApp.comments.get(c['parent_id']);

          if(parent)
            c['sort_string'] = parent.get('sort_string') + "." + c['id'];
        }

        if(CommentApp.comments.get(c['id'])) return; // skip if it exists

        var comment = new DailyKos.Comment(c);
        CommentApp.comments.add(comment, {merge: true, update: true});

        if(userNickname && userNickname === comment.get('in_reply_to')) {
          newReplies.push(comment);
        } else {
          newComments.push(comment);
        }
      });

      Notify.notify({type: 'comment',  comments: newComments });
      Notify.notify({type: 'reply',    comments: newReplies  });
    },
    addKeyListener: function() {
      $('body').on('keyup', function(e) {
        if (ctrlShiftO(e)) self.__pollForUpdate();
      });

      function ctrlShiftO(e) {
        return e.keyCode === 79 && e.ctrlKey && e.shiftKey;
      }
    },
    pollForUpdates: function() {
      if (DK.pageType === 'comment-page') return;
      setTimeout(self.__pollForUpdate, self.pollFrequency);
    },
    latestCommentEpoch: function() {
      return CommentApp.comments.max(
        function(c) {
          // Don't count comments that were posted in the current session:
          return c.get('newSessionReply') ? 0 : c.get('create_epoch');
        }
      ).get('create_epoch');
    },
    __pollForUpdate: function(latestEpoch) {
      if (!DailyKos.preferAutoRefresh()) return self.pollForUpdates(); // Abort, but continue to perform a noop-loop; this simplifies setTimeout on/off logic.

      if(latestEpoch === undefined)
        latestEpoch = self.latestCommentEpoch();

      $.getJSON(CommentApp.commentsPath(), { created_after: latestEpoch }, function(comments) {
        self.addNewComments(comments);

        if (comments && comments.length) {
          $(document).trigger('comment-auto-updated');
        }
        console.log("on comment-auto-updated")
        $(document).on('comment-auto-updated', self.loadInstagramIfEmbedPresent(comments));
      });

      self.pollForUpdates();
    },
    loadInstagramIfEmbedPresent:  function(comments) {
      if(self.commentsContainInstagram(comments)) {
        console.log("calling instagram render embeds");
        DK.Instagram.instagramRenderEmbeds();
      }
     },
    commentsContainInstagram:  function(comments) {
      var hasInstagram = false;
      console.log("checking comments: " + comments.length);
      _.each(comments, function(comment) {
        console.log("checking each comment!");
        if (self.textContainsInstagram(comment)) {console.log("comment contains instagram"); hasInstagram = true;}
      });
      return hasInstagram;
    },
    textContainsInstagram: function(comment) {
      var text = comment.text;
      return text && text.match(/instagram-media/ig);
    }
  });

})();
//
// User event handling
// - Handle click events
// - Handle comment-read events
//

(function () {
  _('CommentApp.AutoUpdater.Notify.Events').namespace({
    init: init
  });

  var Notify, Select, Growl;

  function init () {
    Notify = CommentApp.AutoUpdater.Notify;
    Select = Notify.Select;
    Growl  = CommentApp.AutoUpdater.Notify.Growl;

    addEventListener();
    addClickListener();
  }

  function addEventListener () {
    var updateGrowl = function () {
      Notify.notify({type: 'reply',   updateOnly: true});
      Notify.notify({type: 'comment', updateOnly: true});
    };

    updateGrowl = _(updateGrowl).throttle(3000);

    $(document).on('comment-read', updateGrowl);
  }

  function addClickListener () {
    var $body  = $('body');

  //$body.on('mouseup', Select.userName, closeLastName);
    $body.on('mouseup', Select.userName, selectComment);
    $body.on('mouseup', Select.closeBtn, clearIncoming);
  }

  // Scroll to comment
  function selectComment () {
    var commentId = $(this).data('commentId');
    CommentApp.commentThreadView.selectComment(commentId);
    $(document).trigger('comment-selected');
  }

  // Close the growl if the last username is clicked
  function closeLastName () {
    var $growl = $(this).closest(Select.container);

    if ($growl.find(Select.userName).length === 1) {
      Growl.close({$growl: $growl});
    }
  }

  // Clear incoming reply or comment list
  function clearIncoming () {
    var $growl = $(this).closest(Select.container);
    var type   = $growl.data('type');

    Notify.setIncoming(type, []);
    Growl.close({$growl: $growl});
  }

})();
//
// Growl wrapper
//
// Custom behavior
// - shows a new growl only if a growl is not already showing
// - updates growl if already showing
// - sets $.growl options
//

(function () {
  _('CommentApp.AutoUpdater.Notify.Growl').namespace({
    init: init,
    growl: growl,
    close: close
  });

  var Select;

  return;

  function init () {
    Select = CommentApp.AutoUpdater.Notify.Select;

    return CommentApp.AutoUpdater.Notify.Growl;
  }

  // Determines whether to growl or update the existing growl container.
  function growl (opts) {
    var $growl = growlContainer(opts);

    if ($growl.length) {
      updateGrowl(opts);
    } else if (!opts.updateOnly) {
      showGrowl(opts);
    }
  }

  function showGrowl (opts) {
    var growlInstance = $.growl(growlParams(opts));

    setGrowlData(growlInstance, opts);
  }

  function close (opts) {
    var growlInstance = getInstance(opts || {});

    if (!growlInstance) return;

    growlInstance.close({preventDefault: noop, stopPropagation: noop}); // Call the api directly. Avoid the $growlClose.click() anti-pattern: https://davidwalsh.name/dont-trigger-real-event-names
  }

  // Set growl instance on the element so we can invoke functions on it later.
  function setGrowlData (growlInstance, opts) {
    var $growl = growlInstance.$growl();
    var data   = _(opts).extend({growlInstance: growlInstance});

    $growl.data(data);
  }

  function updateGrowl (opts) {
    var $growl = growlContainer(opts);

    $growl.find(Select.title).html(opts.title);
    $growl.find(Select.message).html(opts.message);
  }

  function growlParams (opts) {
    opts.style = opts.type;

    return _(opts).defaults({
      location:    'br',                    // bottom-right
      size:        'large',                 // large sized growl
      fixed:       true,                    // show until manually dismissed
      duration:    999999999                // forever
    });
  }

  function getInstance (opts) {
    if (opts.instance) return opts.instance;
    if (opts.$growl)   return opts.$growl.data('growlInstance');
    if (opts.type)     return growlContainer(opts).data('growlInstance');
  }

  function growlContainer (opts) {
    if (opts.$growl) return opts.$growl;
    if (opts.type)   return $(Select.containerByType(opts));
  }

  function noop () { }

})();
//
// New Comment Notification System
//
// This is a wrapper around comment_auto_updater/notify/growl.js
//
// This shows only two growls at any one time.
// - new replies
// - new comments (non-replies)
//

(function () {

  _('CommentApp.AutoUpdater.Notify').namespace({
    init:        init,
    notify:      notify,
    setIncoming: setIncoming
  });

  var Growl, Select;
  var tracker;
  var MAX_COMMENTS_VISIBLE = 15; // maximum number of usernames visible per growl
  var incoming; // incoming comments - comments posted since you've loaded this page.

  function init () {
    Growl    = CommentApp.AutoUpdater.Notify.Growl.init();
    Select   = CommentApp.AutoUpdater.Notify.Select.init();
    tracker  = App.Tracker.StoryPage.storyPageTracker();
    incoming = {comment: [], reply: []};

    CommentApp.AutoUpdater.Notify.Events.init();

    return CommentApp.AutoUpdater.Notify;
  }

  // Aggregates incoming comments and shows a growl.
  function notify (opts) {
    var comments;

    comments = addIncoming(opts);
    comments = _(comments).filter(isVisible);
    comments = _(comments).filter(isUnread);
    opts.comments = comments;

    if (comments.length) {
      Growl.growl({
        message:   message(opts),
        title:     title(opts),
        type:      opts.type,
        namespace: Select.containerName
      });
    } else {
      Growl.close(opts);
    }
  }

  // Add to the incoming list of comments since you've loaded this page.
  function addIncoming (opts) {
    var type     = opts.type;
    var comments = opts.comments;

    if (!comments) return incoming[type];

    return (incoming[type] = incoming[type].concat(comments));
  }

  function setIncoming (type, array) {
    incoming[type] = array;
  }

  // "2 New Comments" / "2 New Replies"
  function title (opts) {
    var count = opts.comments.length;
    var str;
    str = count + ' New ' + _(count).pluralize(opts.type);
    str = _.titleize(str);
    return str;
  }

  // List of user names.
  function message (opts) {
    var comments = opts.comments;
    var overflow = comments.length > MAX_COMMENTS_VISIBLE;
    var toLink = function (comment) {
      return "<a href='{anchorTag}' class='new-comment-name' data-comment-id='{commentId}'>{commentAuthor}</a>"
        .replace('{anchorTag}',        comment.anchorTag())
        .replace('{commentId}',        comment.get('id'))
        .replace('{commentAuthor}',    comment.get('author'));
    };

    var links = _(comments)
      .chain()
        .map(toLink)
        .first(MAX_COMMENTS_VISIBLE)
      .value();

    var result = links.join(', ');

    if (overflow) result +=  ' ...';

    return result;
  }

  // Comments this user cannot see.
  function isVisible (comment) {
    return comment.comment_view().$el.is(':visible');
  }

  // Comments this user has already seen.
  function isUnread (comment) {
    return tracker.isUnreadComment({id: comment.id});
  }

})();
// Selectors for the CommentApp.AutoUpdater.Notify components

_('CommentApp.AutoUpdater.Notify.Select').namespace({
  init: function (argument) {
    var Select = CommentApp.AutoUpdater.Notify.Select;

    _(Select).extend({
      containerName:  'comment-auto-updater',           // namespace
      closeBtn:      '.comment-auto-updater-close',     // growl close button
      container:     '.comment-auto-updater',           // growl container
      title:         '.comment-auto-updater-title',     // growl title
      message:       '.comment-auto-updater-message',   // growl message
      userName:      '.new-comment-name',               // user name in growl
      containerByType: function(opts) {                 // a specific growl container (new-reply / new-comment)
        return '.comment-auto-updater-' + opts.type;
      }
    });

    return Select;
  }
});
_.namespace('CommentApp.HandlebarsHelpers');

CommentApp.HandlebarsHelpers.init = function () {
  Handlebars.registerHelper('ifRecommendable', function(commentId, options) {
    var recommendable = !CommentApp.comments.get(commentId).errorMessage();

    if(recommendable)
      return options.fn(this);
    else
      return options.inverse(this);
  });

  Handlebars.registerHelper('isModerator', function() {
    return DailyKos.isLoggedIn() && DailyKos.isModerator();
  });

  Handlebars.registerHelper('canComment', function() {
    if(CommentApp.commentingHasEnded) return false;
    return DailyKos.isLoggedIn() && DailyKos.canComment();
  });

  Handlebars.registerHelper('ifCanComment', function(options) {
    if(CommentApp.commentingHasEnded)
      return options.inverse(this);

    if(DailyKos.isLoggedIn() && DailyKos.canComment()) {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  });

  Handlebars.registerHelper('ifcanRecComment', function(authorId, options) {
    // Can't comment if the comment is too old
    if(this.is_too_old_to_recommend)
      return options.inverse(this);

    // If the user is not logged in, they will probably
    // be able to recommend the comment when they do.
    // They will be disallowed from actually recommending
    // the comment in CommentView#recommend.
    if(!DailyKos.isLoggedIn())
      return options.fn(this);

    if(typeof authorId === "function") authorId = authorId();

    if(DailyKos.canRecComment(authorId))
      return options.fn(this);
    else
      return options.inverse(this);
  });

  Handlebars.registerHelper('ifCommentFlaggable', function(authorId, storyAuthorId, options) {
    if(!DailyKos.isLoggedIn())
      return options.inverse(this);

    if(typeof authorId === "function") authorId = authorId();

    if(DailyKos.canFlagComment(authorId))
      return options.fn(this);
    else
      return options.inverse(this);
  });

  var storyPageTracker = !CommentApp.isMobile && App.Tracker.StoryPage.storyPageTracker();  // track non-mobile only
  Handlebars.registerHelper('ifUnreadComment', function(comment, options) {
    return (isUnreadComment()) ? options.fn(this) : options.inverse(this);

    function isUnreadComment() {
      if(DailyKos.isLoggedIn() && DailyKos.currentUserId() == comment.author_id) {
        return false;
      }

      return storyPageTracker.isUnreadComment({id: comment.id});
    }
  });

  Handlebars.registerHelper('recommendClasses', function() {
    if(DailyKos.isLoggedIn()) {
      return 'recommend';
    } else {
      return 'recommend inactive';
    }
  });

  Handlebars.registerHelper('hasHidePermission', function() {
    if(CommentApp.commentingHasEnded) return false;
    return DailyKos.isLoggedIn() && DailyKos.canFlagComment();
  });

  Handlebars.registerHelper('ifCanFlagComment', function(commentId, authorId, storyAuthorId, is_too_old_to_recommend, options) {
    if (typeof authorId === "function") authorId = authorId();

    var currentUserId = DailyKos.currentUserId();
    if (!currentUserId) return options.inverse(this);
    var cannot_view_comment_flag_data = !DailyKos.canViewCommentFlagData();
    
    // Can't flag comments without an id *or* your own comments *or* comments in your own story  *or* (comments too old and you don't have perms to view comment flag data)
    if (disableCommentFlagForUser(commentId, currentUserId, authorId, storyAuthorId, is_too_old_to_recommend, cannot_view_comment_flag_data)) {
      return options.inverse(this);
    }

    var commentRating;
    if(CommentApp.commentRatings && CommentApp.commentRatings.models) {
      commentRating = _.find(CommentApp.commentRatings.models, function(cr) {
        return String(cr.get("comment_id")) === commentId;
      });
    }

    if(commentRating && commentRating.get("hred") === 1) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }

    function disableCommentFlagForUser(commentId, currentUserId, authorId, storyAuthorId, is_too_old_to_recommend, cannot_view_comment_flag_data) {
      return (commentId === undefined || currentUserId === authorId || currentUserId === storyAuthorId || (is_too_old_to_recommend && cannot_view_comment_flag_data))
    }
  });

  Handlebars.registerHelper('insertEmbeds', function(textToRender) {
    textToRender = DK.Embeds.Prerender.html(textToRender);
    textToRender = twemoji_custom.parse(textToRender);
    return new Handlebars.SafeString(textToRender);
  });

  Handlebars.registerHelper('commentNotifyChecked', function(options) {
    if(CommentApp.shouldNotify) {
      return options.fn(this);
    } else {
      return new Handlebars.SafeString('');
    }
  });

  var SUBJECT_LENGTH = 50;
  var $div = $('<div>');
  Handlebars.registerHelper('truncatedSubject', function() {
    var subject, subjects;

    subject = this.subject_text || this.text || '';
    subject = $div.html(subject).text();                      // strip the html
    subjects = subject.split('\n');
    subject = _(subjects).find(function(s){ return s.trim(); });    // find a non-blank
    subject = subject && subject.trim();

    if (!subject)
      return '';

    if (subject.length >= SUBJECT_LENGTH)
      subject += '...';

    return encodeURIComponent(subject);
  });

  Handlebars.registerHelper('escapeQuote', escapeQuote);
  function escapeQuote (text) {
    if (!text) return;

    text = text.replace(/(['])/g, '&apos;');
    text = text.replace(/(["])/g, '&quot;');
    text = $div.html(text).html(); // convert html-entity to unicode - http://stackoverflow.com/questions/2808368/converting-html-entities-to-unicode-character-in-javascript

    return text;
  }

  var Folding = App.Comments.Folding;
  Handlebars.registerHelper('preprocessSubjectText', function(text) {
    text = escapeQuote(text);
    text = Folding.addUnfoldLinkToImagePlaceholder(text, this);
    text = Folding.addUnfoldLinkToEllipsis(text, this);

    return text;
  });

  var storyId = DailyKos.currentStoryID;
  function commentPath (commentId) {
    return '/comments/' + storyId + '/' + commentId + '#comment_' + commentId;
  }
  Handlebars.registerHelper('commentPath', commentPath);
  CommentApp.commentPath = commentPath;

  Handlebars.registerHelper('currentUserAvatarUrl', function() {
    return DailyKos.userAvatar();
  });

  Handlebars.registerHelper('sortString', function() {
    if(this.model) {
      return new Handlebars.SafeString(this.model.get('sort_string'));
    } else {
      return new Handlebars.SafeString("");
    }
  });

  Handlebars.registerHelper('simplePlural', function(count) {
    var returnString = "s";
    if(parseInt(count) === 1) returnString = "";

    return new Handlebars.SafeString(returnString);
  });

  return false;
};
if (!DailyKos.CKE) DailyKos.CKE = {};

// Creates the jQuery helper function ckeInline.
// Usage: $('textarea').ckeInline();
// This creates an inline CKEditor.
$.fn.ckeInline = function() {
  var textareas = this;
  textareas.each(function(i, textarea){
    try {
      var ckeEditor = CKEDITOR.inline(textarea);
      // When clicking away from CKEditor
      // copy contents from cke to textarea.
      ckeEditor.on('blur', function(e){ e.sender.updateElement(); });
      // Set data on textarea so we can retrieve the
      // editor later by using $('textarea').ckeditorGet();
      $(textarea).data('ckeditorInstance', ckeEditor);
    } catch (e) {
      console.log(e);    // The editor instance "editor1" is already attached to the provided element.
      console.log(this); // ... And here's the element
    }
  });

  return this;
};
_.namespace('App.Comments.Comment');

App.Comments.Comment.init = function() {
  var Comment = App.Comments.Comment;

  $(document).on('comment-rating:update-model', updateModel)
             .on('comment-rating:update-view',  updateView);

  function updateModel (e, opts) {
    Comment.Model.setRating(opts);
    CommentApp.setHiddenCommentAttributes(opts.comment);
  }

  function updateView (e, opts) {
    var commentId = opts.comment.id;

    Comment.View.setCommentClass({id: commentId});
  }
};
_.namespace('App.Comments.Comment.Model');

// Given a CommentRating model,
// Sets the 'recommended' and 'flagged' attributes on the comment.
App.Comments.Comment.Model.setRating = function (opts) {
  var rating  = opts.rating;
  if (!rating) return;
  var comment = opts.comment || CommentApp.comments.find({id: '' + rating.get('comment_id')});
  var points  = rating.get("rating");
  var stats   = rating.get("stats");
  var attr    = {recommended: points === 4, flagged: points === 0};

  _(attr).extend(stats);

  comment.set(attr, {silent: true});
};
_.namespace('App.Comments.Comment.View');

(function () {
  App.Comments.Comment.View.getCommentClass = getCommentClass;
  App.Comments.Comment.View.setCommentClass = setCommentClass;

  //
  // Sets all the classes on the .comment element
  //
  function setCommentClass (opts) {
    CommentApp.onLoad(function () {
      var key          = getKey(opts);
      var commentClass = getCommentClass({key: key});
      var $comment     = $('#'+key);

      $comment.attr('class', commentClass);
    });
  }

  //
  // Determines the state of the comment and returns a class string to be applied to the comment element.
  //
  //   For example:
  //     $comment.attr('class', getCommentClass({id: '123456'}))
  //
  function getCommentClass (opts) {
    var comment    = getComment(opts);
    var depth      = comment.replyDepth();
    var $comment   = comment.comment_view().$el;
    var classes    = 'comment';

    if (+depth)                                  classes += ' child-reply depth-' + depth;
    if (comment.get('recommended'))              classes += ' recommended';
    if (comment.get("by_story_author"))          classes += ' by-story-author';
    if (comment.get('is_too_old_to_recommend'))  classes += ' is-too-old-to-recommend';
    if ($comment.hasClass('selected'))           classes += ' selected';

    classes += ' ' + CommentApp.getHiddenCommentClasses(comment);

    return classes;
  }

  //
  // Takes a comment identifier.
  // Returns a comment key/selector.
  //
  //   options:
  //     {id:      '123456'}
  //     {key:     'comment-123456'}
  //     {comment: commentModel}
  function getKey (opts) {
    if (opts.key)     return opts.key;
    if (opts.id)      return 'comment-' + opts.id;
    if (opts.comment) return 'comment-' + opts.comment.id;

    console.warn('getKey invalid opts');
  }

  // Takes a comment identifier.
  // Returns a comment model.
  //
  //   options:
  //     {id:     '123456'}
  //     {key:    'comment-123456'}
  //     {comment: commentModel}
  function getComment (opts) {
    if (opts.comment) return opts.comment;
    if (opts.id)      return CommentApp.comments.find({id: opts.id});
    if (opts.key)     return CommentApp.comments.find({id: opts.key.replace('comment-', '')});

    console.warn('getComment: invalid opts');
  }
})();
//
// Full site
// Comment ratings
//
_.namespace('App.Comments.Rating');

App.Comments.Rating.init = function () {
  var Rating  = App.Comments.Rating;
  var partial = $('#comment-actions-partial').html();

  Handlebars.registerPartial('commentActions', partial);

  $(document).on('comment-rating:update-view', function(e, opts) {
    Rating.View.render(opts);
  });
};
_.namespace('App.Comments.Rating.View');

(function(){
  var view;

  App.Comments.Rating.View.render = function (opts) {
    if (!view) view = Handlebars.compile('{{> commentActions }}');

    CommentApp.onLoad(function () {
      var comment = getComment(opts);

      renderTemplate(comment);
      renderRecommenders(comment);
    });
  };

  function renderTemplate (comment) {
    var $comment = $('#comment-' + comment.id);
    var $actions = $comment.find('.actions');
    var html     = view(comment.toJSON());

    $actions.html(html);
  }

  function renderRecommenders (comment) {
    if (CommentApp.isMobile) return;

    var view = comment.comment_view();

    view.setupFlaggingUsersPopover();
    view.setupRecommendersHover();
  }

  function getComment (opts) {
    if (opts.comment)   return opts.comment;
    if (opts.commentId) return CommentApp.comments.find({id: '' + opts.commentId});
    console.warn('getComment: missing comment id');
  }
})();
//
// Full site
// Comment folding
//
_.namespace('App.Comments.Folding');


// Reads from user pref to determine whether comments should be folded.
//
// If mobile, we don't fold comments.
//
// Otherwise, returns a function that determines whether we should fold new comments.
//
// We fold iff:
// - you've set your pref to fold comments.
// - the comment was not posted by you on this pageload.
App.Comments.Folding.init = function (opts) {
  var self = App.Comments.Folding;

  if (opts.isMobile) {
    self.shouldFoldComments = function () { return false; };
  } else {
    self.shouldFoldComments = shouldFoldCommentsFunc;
    self.addUnfoldClickListener();
  }


  function shouldFoldCommentsFunc (model) {
    var isSelectedComment = CommentApp.selectedComment === model.id;

    if (isSelectedComment)            return false;
    if (model.get('newSessionReply')) return false;

    return DailyKos.preferFoldedComments();
  }
};
_.namespace('App.Comments.Folding');

(function(){
  var $div = $('<div>');

  // Adds a click listener.
  // When unfold-comment   is clicked, comment will be unfolded.
  // When comment-text     is clicked, comment will be unfolded.
  // When dk5_subject_text is clicked, do nothing.
  App.Comments.Folding.addUnfoldClickListener = function () {
    $('#comments')
      .on('click', '.folded .unfold-comment',   unfoldComment)
      .on('click', '.folded .comment-text',     unfoldComment)
      .on('click', '.dk5_subject_text', noop);
  };

  // If the comment subject is [image],
  // then we're going to make it a link that unfolds the comment.
  App.Comments.Folding.addUnfoldLinkToImagePlaceholder = function (text, comment) {
    if (text !== '[image]') return text;

    $div.html(comment.textToRender);

    var hasImage = $div.find('img').length;

    if (hasImage) {
      return text.replace("[image]", linkText('Show Image'));
    } else {
      return text;
    }
  };

  // We'll only make the ellipsis clickable if the user didn't type ellipsis of their own. Mitigates trollery.
  App.Comments.Folding.addUnfoldLinkToEllipsis = function (text, comment) {
    if (!text) return text;

    if (_(comment.textToRender).contains('…')) {
      return text;
    } else {
      return text.replace('…', linkText('…'));
    }
  };

  function linkText (text) {
    var tpl = "<a href='#' class='unfold-comment'>{{text}}</a>";

    return tpl.replace('{{text}}', text);
  }

  function unfoldComment (e) {
    e.preventDefault();

    var $comment = $(this).closest('.comment');

    $comment.removeClass('folded');
    $(document).trigger('comment-folded');
  }

  function noop (e) {
    e.stopPropagation();
  }
})();
;(function(){

  _.namespace('App.Comments.Filters');

  App.Comments.Filters.toggleUI = function() {
    $('.comment-filter-toggle').toggleClass('hidden');
    $('.comment-filter-checkboxes').toggleClass('hidden');

    return false;
  };

  App.Comments.Filters.init = function () {
    var $checkFoldComments                 = $('.checkbox-fold-comments');
    var $checkAutoRefresh                  = $('.checkbox-auto-refresh');
    var $checkShowHiddenComments           = $('.checkbox-show-hidden-comments');
    var $checkShowHiddenCommentsUntilIHide = $('.checkbox-show-hidden-comments-until-i-hide');
    var preferFoldedComments = DailyKos.preferFoldedComments(),
        preferAutoRefresh    = DailyKos.preferAutoRefresh(),
        preferHiddenComments = DailyKos.preferHiddenComments(),
        preferHiddenCommentsUntilIHide = DailyKos.preferHiddenCommentsUntilIHide(),
        preferHiddenOrUntilIHide = preferHiddenComments || preferHiddenCommentsUntilIHide;

    initCheckBox($checkFoldComments,                 {checked: preferFoldedComments,           enabled: true,                     onChange: onChangeFoldComments });
    initCheckBox($checkAutoRefresh,                  {checked: preferAutoRefresh,              enabled: true,                     onChange: onChangeAutoRefresh });
    initCheckBox($checkShowHiddenComments,           {checked: preferHiddenOrUntilIHide,       enabled: true,                     onChange: onChangeShowHiddenComments });
    initCheckBox($checkShowHiddenCommentsUntilIHide, {checked: preferHiddenCommentsUntilIHide, enabled: preferHiddenOrUntilIHide, onChange: onChangeShowHiddenCommentsUntilIHide });

    if (preferAutoRefresh) $('body').addClass('prefer-auto-refresh');

    return;

    function onChangeFoldComments () {
      var checked = $(this).is(':checked');
      var toggleClass = checked ? 'addClass' : 'removeClass';
      $('.comment')[toggleClass]('folded');

      $(document).trigger('comment-folded');

      DK.preferFoldedComments(checked);
      DK.Whoami.set('preferFoldedComments', checked);
    }
    function onChangeAutoRefresh () {
      var checked = $(this).is(':checked');
      var toggleClass = checked ? 'addClass' : 'removeClass';
      $('body')[toggleClass]('prefer-auto-refresh');
      DK.preferAutoRefresh(checked);
      DK.Whoami.set('preferAutoRefresh', checked);
    }
    function onChangeShowHiddenComments () {
      if (!DailyKos.canZeroRateComments()) return;

      var checked = $(this).is(':checked');
      var toggleClass = checked ? 'addClass' : 'removeClass';
      $('body')[toggleClass]('prefer-hidden-comments').removeClass('prefer-hidden-comments-until-i-hide');

      $checkShowHiddenCommentsUntilIHide.prop({checked: false});
      if (checked) {
        $checkShowHiddenCommentsUntilIHide.removeAttr('disabled');
      } else {
        $checkShowHiddenCommentsUntilIHide.attr({disabled: 'disabled'});
      }

      DK.Whoami.set('preferHiddenComments',           $checkShowHiddenComments.is(':checked'));
      DK.Whoami.set('preferHiddenCommentsUntilIHide', false);
    }
    function onChangeShowHiddenCommentsUntilIHide () {
      if (!DailyKos.canZeroRateComments()) return;

      if ($(this).is(':checked')) {
        $('body').addClass('prefer-hidden-comments-until-i-hide').removeClass('prefer-hidden-comments');
      } else {
        $('body').addClass('prefer-hidden-comments').removeClass('prefer-hidden-comments-until-i-hide');
      }

      DK.Whoami.set('preferHiddenComments',          !$checkShowHiddenCommentsUntilIHide.is(':checked'));
      DK.Whoami.set('preferHiddenCommentsUntilIHide', $checkShowHiddenCommentsUntilIHide.is(':checked'));
    }
  };

  function initCheckBox($checkbox, opts) {
    if (opts.enabled) $checkbox.removeAttr('disabled'); // enable checkbox
    $checkbox.prop({checked: opts.checked});            // init the checked state
    $checkbox.change(opts.onChange);                    // bind change events
  }

})();



_.namespace('App.Comments');

// Key commands for traversing and interacting with comment tree
App.Comments.KeyboardShortcuts = function() {
  var $document = $(document);
  var cmd = App.Comments.KeyboardShortcuts.commands();
  var enabled = true;
  var keyMap = {
    L: 'recommend',
    r: 'reply',
    R: 'reply',
    p: 'parent',
    P: 'parent',
    o: 'fold',
    O: 'fold',
    j: 'nextUnread',
    J: 'next',
    k: 'prevUnread',
    K: 'prev'
  };


  init();


  function init() {
    toggleKeyboardShortcuts();
    bindKeys();
  }

  function toggleKeyboardShortcuts () {
    var inputs = 'textarea, input, [contenteditable], select';

    $(document).on('focus', inputs, function(){ enabled = false; })
               .on('blur',  inputs, function(){ enabled = true;  });
  }

  function bindKeys () {
    _(keyMap).each(function(funcName, key) {
      var charCode = key.charCodeAt(0);

      $document.keypress(function(e){
        if (!enabled)             return;
        if (e.which !== charCode) return;

        cmd[funcName]();
      });
    });
  }
};

// Show/hide the keyboard shortcuts legend/rubric.
App.Comments.KeyboardShortcuts.toggleRubric = function () {
  $('.more-shortcuts').toggleClass('hidden');
};

// Declare time in milliseconds to scroll via keyboard shortcuts.
App.Comments.KeyboardShortcuts.scrollDuration = 500;
App.Comments.KeyboardShortcuts.commands = function() {
  var util      = App.Comments.KeyboardShortcuts.util();
  var selector  = App.Comments.KeyboardShortcuts.selectors();
  var $document = $(document);

  return {
    parent: function () {
      scrollTo(getParent());
      notifyKeyNavEvent();
    },
    nextUnread: function() {
      scrollToUnread('next');
      notifyKeyNavEvent();
    },
    prevUnread: function() {
      scrollToUnread('prev');
      notifyKeyNavEvent();
    },
    next: function() {
      scrollTo(getComment('next'));
      notifyKeyNavEvent();
    },
    prev: function() {
      scrollTo(getComment('prev'));
      notifyKeyNavEvent();
    },
    recommend: function () {
      var $comment = util.getSelectedComment();
      if ($comment) $comment.find(selector.recommend).click();
    },
    reply:  function () {
      var $comment = util.getSelectedComment();
      if ($comment) $comment.find(selector.reply).click();
    },
    fold: function () {
      var $comment = util.getSelectedComment();
      if ($comment) $comment.toggleClass('folded');
      $(document).trigger('comment-folded');
    }
  };

  // Return parent of selected comment.
  function getParent () {
    var $comment = getComment();
    var id = $comment.attr('id');
    if (!id) return;
    id = id.replace('comment-', '');
    var comment = CommentApp.comments.find({id: id});
    var parentId = comment.get('parent_id');
    if (+parentId) return $('#comment-' + parentId);
  }

  // Return next or previous unread comment.
  function getUnreadComment (step) {
    var $comment = util.getSelectedComment();

    if (!$comment) {
      $comment = util.getClosestComment(step);
      if (isUnread($comment)) return $comment;
    }

    if (!$comment) return;

    var $el  = sibling($comment);

    while ($el.length) {
      if (isUnread($el)) return $el;
      $el = sibling($el);
  }

    function sibling($el)   { return util.getSiblingComment($el, step); }
    function isUnread ($el) { return !!$el.find(selector.newIndicator).length; }
  }

  // Scroll and select the comment.
  function scrollTo(comment) {
    if (!comment || !comment.length) return;
    var $comment = $(comment);
    util.selectComment($comment);
    util.scrollToComment($comment);
  }

  function scrollToUnread (step) {
    if(window.showNewComments) { return; }

    var $comment = getUnreadComment(step);
    if (!$comment) $comment = selector.unreadCommentAt(step === 'next' ? 'first' : 'last');
    if ($comment)  return scrollTo($comment);

    var msg = 'There are no unread comments at this time.';
    DailyKos.Notifications.showToast({msg: msg, time: 3000});
  }

  // Return selected comment or comment closest to window top.
  function getComment(step) {
    return util.getSelectedComment(step) || util.getClosestComment(step);
  }

  // Notify that a comment-key-nav event happened
  function notifyKeyNavEvent () {
    $document.trigger('comment-keynav-start');
  }
};
(function () {
  var _sel;

  App.Comments.KeyboardShortcuts.selectors = function () {
    return _sel || (_sel = {
      exploreBar:      '.explore-bar',
      comment:         '.comment:visible:not(#comment-undefined)',
      commentWrapper:  '.comment-wrapper',
      recommend:       '.recommend:visible, .unrecommend:visible', // toggle via :visible
      reply:           '.reply:visible',
      newIndicator:    '.new_comment_indicator:visible',
      selectedComment: '.selected.comment',

      unreadCommentAt: function(pseudo) {
        var select = "{newIndicator}:{pseudo}"
            .replace('{newIndicator}', _sel.newIndicator)
            .replace('{pseudo}',       pseudo);

        var $comment = $(select).closest(_sel.comment);

        return ($comment.length) ? $comment : null;
      }
    });
  };
})();
;(function(){
  var util, selector, navbarHeight, scrollDuration;
  var scrollMargin = 20;

  var $document;

  App.Comments.KeyboardShortcuts.util = function() {
    if (!util) init();
    return util;
  };

  function init () {
    selector       = App.Comments.KeyboardShortcuts.selectors();
    scrollDuration = App.Comments.KeyboardShortcuts.scrollDuration;
    navbarHeight   = affixedElem.fixedTopHeight();
    $document      = $(document);

    util = {
      scrollToComment:       scrollToComment,
      getSelectedComment:    getSelectedComment,
      getClosestComment:     getClosestComment,
      getSiblingComment:     getSiblingComment,
      selectComment:         selectComment
    };
  }

  function scrollToComment ($comment) {
    var outlineHeight = parseInt($comment.find('.comment-wrapper').css('outline-width'));

    var offset = 0;
    offset -= navbarHeight;  // fixed navbar causes viewport top position to be lower
    offset -= outlineHeight; // comment outline causes viewport top position to be lower
    offset -= scrollMargin;  // instead of scrolling to the comment exactly, leave some margin at the top

    $comment.scrollView(offset, scrollDuration, {onComplete: notifyScrollComplete});
  }

  function notifyScrollComplete () {
    $document.trigger('comment-keynav-end');
  }

  // Returns '.selected.comment'
  //
  // Gets the NEXT selected comment if a comment is selected and 'next' is provided as the step argument.
  // Gets the PREV selected comment if a comment is selected and 'prev' is provided as the step argument.
  function getSelectedComment (step) {
    var $selectedComment = $(selector.selectedComment);
    if (!$selectedComment.length) return;
    if (!step) return $selectedComment;

    var $step = getSiblingComment($selectedComment, step);
    return $step.length ? $step : $selectedComment;
  }

  // Get the comment that is closest to the window-top.
  function getClosestComment (step) {
    var $comment, comment;

    if (step === 'next') {
      comment = getClosestCommentNext();
    } else if (step === 'prev') {
      comment = getClosestCommentPrev();
    }
    if (comment) return $(comment);

    $comment = $(selector.comment).first();
    if ($comment.length) return $comment;

    function getClosestCommentNext () {
      return _($(selector.comment)).find(function(comment){
        return $(comment).offset().top > windowTopPosition();
      });
    }

    function getClosestCommentPrev () {
      return _($(selector.comment).reverse()).find(function(comment){
        return $(comment).offset().top < windowTopPosition();
      });
    }

    function windowTopPosition () {
      return $(window).scrollTop() + navbarHeight;
    }
  }

  // Get the next/prev visible comment
  //
  // Ideally, we'd do something like $comment.next(),
  // but flagged comments may be hidden and we don't want to return those.
  // Here, we're fetching nextAll or prevAll, and filtering to get the nearest visible comment.
  function getSiblingComment ($selectedComment, step) {
    return $selectedComment[step+'All'](selector.comment+':first');
  }

  function selectComment ($comment) {
    $(selector.selectedComment).removeClass('selected');
    $comment.addClass('selected');
  }
})();













