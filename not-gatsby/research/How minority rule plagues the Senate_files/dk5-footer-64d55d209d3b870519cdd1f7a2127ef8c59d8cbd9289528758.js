/**
 * @preserve
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Version: v2.0.11
 * Contributors: Mattia Larentis
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 * Description: A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 * License: MIT
 * Homepage: http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */
;(function ($, window, undefined) {
    // outside the scope of the jQuery plugin to
    // keep track of all dropdowns
    var $allDropdowns = $();

    // if instantlyCloseOthers is true, then it will instantly
    // shut other nav items when a new one is hovered over
    $.fn.dropdownHover = function (options) {
        // don't do anything if touch is supported
        // (plugin causes some issues on mobile)
        if('ontouchstart' in document) return this; // don't want to affect chaining

        var $groupDropdown = $groupDropdown || $();

        // the element we really care about
        // is the dropdown-toggle's parent
        $allDropdowns = $allDropdowns.add(this.parent());
        $groupDropdown = $groupDropdown.add(this.parent());

        return this.each(function () {
            var $this = $(this),
                $parent = $this.parent(),
                defaults = {
                    delayShow: 0,
                    delayHide: 500,
                    instantlyCloseOthers: true,
                    instantlyShowWhenGroupOpen: true
                },
                data = {
                    delayShow: $(this).data('delayShow') || $(this).data('delay'),
                    delayHide: $(this).data('delayHide') || $(this).data('delay'),
                    instantlyCloseOthers: $(this).data('close-others')
                },
                showEvent   = 'show.bs.dropdown',
                hideEvent   = 'hide.bs.dropdown',
                // shownEvent  = 'shown.bs.dropdown',
                // hiddenEvent = 'hidden.bs.dropdown',
                settings = $.extend(true, {}, defaults, options, data),
                hideTimeout,
                showTimeout;

            $parent.hover(function (event) {
                // so a neighbor can't open the dropdown
                if(!$parent.hasClass('open') && (!($parent.is(event.target) || $parent.has(event.target).length >= 1))) {
                    // stop this event, stop executing any code
                    // in this callback but continue to propagate
                    return true;
                }

                openDropdown(event);
            }, function () {
                window.clearTimeout(showTimeout);

                hideTimeout = window.setTimeout(function () {
                    $parent.removeClass('open');
                    $this.trigger(hideEvent);
                }, settings.delayHide);
            });

            // this helps with button groups!
            $this.hover(function (event) {
                // this helps prevent a double event from firing.
                // see https://github.com/CWSpear/bootstrap-hover-dropdown/issues/55
                if(!$parent.hasClass('open') && (!($parent.is(event.target) || $parent.has(event.target).length >= 1))) {
                    // stop this event, stop executing any code
                    // in this callback but continue to propagate
                    return true;
                }

                openDropdown(event);
            });

            // handle submenus
            $parent.find('.dropdown-submenu').each(function (){
                var $this = $(this);
                var subTimeout;
                $this.hover(function () {
                    window.clearTimeout(subTimeout);
                    $this.children('.dropdown-menu').show();
                    // always close submenu siblings instantly
                    $this.siblings().children('.dropdown-menu').hide();
                }, function () {
                    var $submenu = $this.children('.dropdown-menu');
                    subTimeout = window.setTimeout(function () {
                        $submenu.hide();
                    }, settings.delayHide);
                });
            });

            
            function openDropdown(event) {
                var showDelay = settings.delayShow,
                    openDropdowns;

                $allDropdowns.find(':focus').blur();

                if(settings.instantlyCloseOthers === true)
                    $allDropdowns.removeClass('open');

                if(settings.instantlyShowWhenGroupOpen === true && showDelay > 0) {
                  openDropdowns = $groupDropdown.filter('.open').not($parent);

                  if(openDropdowns.length > 0) showDelay = 0;
                }

                window.clearTimeout(hideTimeout);

                showTimeout = window.setTimeout(function () {
                  if(!$parent.is(':hover')) return;

                  $parent.addClass('open');

                  openDropdowns && openDropdowns.removeClass('open');

                  $this.trigger(showEvent);
                }, showDelay);
            }
        });
    };

    $(document).ready(function () {
        // apply dropdownHover to all elements with the data-hover="dropdown" attribute
        $('[data-hover="dropdown"]').dropdownHover();
    });
})(jQuery, this);
/*! jQuery UI - v1.10.4 - 2014-08-02
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.position.js, jquery.ui.autocomplete.js, jquery.ui.menu.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function( $, undefined ) {

var uuid = 0,
  runiqueId = /^ui-id-\d+$/;

// $.ui might exist from components with no dependencies, e.g., $.ui.position
$.ui = $.ui || {};

$.extend( $.ui, {
  version: "1.10.4",

  keyCode: {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    NUMPAD_ADD: 107,
    NUMPAD_DECIMAL: 110,
    NUMPAD_DIVIDE: 111,
    NUMPAD_ENTER: 108,
    NUMPAD_MULTIPLY: 106,
    NUMPAD_SUBTRACT: 109,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  }
});

// plugins
$.fn.extend({
  focus: (function( orig ) {
    return function( delay, fn ) {
      return typeof delay === "number" ?
        this.each(function() {
          var elem = this;
          setTimeout(function() {
            $( elem ).focus();
            if ( fn ) {
              fn.call( elem );
            }
          }, delay );
        }) :
        orig.apply( this, arguments );
    };
  })( $.fn.focus ),

  scrollParent: function() {
    var scrollParent;
    if (($.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
      scrollParent = this.parents().filter(function() {
        return (/(relative|absolute|fixed)/).test($.css(this,"position")) && (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
      }).eq(0);
    } else {
      scrollParent = this.parents().filter(function() {
        return (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
      }).eq(0);
    }

    return (/fixed/).test(this.css("position")) || !scrollParent.length ? $(document) : scrollParent;
  },

  zIndex: function( zIndex ) {
    if ( zIndex !== undefined ) {
      return this.css( "zIndex", zIndex );
    }

    if ( this.length ) {
      var elem = $( this[ 0 ] ), position, value;
      while ( elem.length && elem[ 0 ] !== document ) {
        // Ignore z-index if position is set to a value where z-index is ignored by the browser
        // This makes behavior of this function consistent across browsers
        // WebKit always returns auto if the element is positioned
        position = elem.css( "position" );
        if ( position === "absolute" || position === "relative" || position === "fixed" ) {
          // IE returns 0 when zIndex is not specified
          // other browsers return a string
          // we ignore the case of nested elements with an explicit value of 0
          // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
          value = parseInt( elem.css( "zIndex" ), 10 );
          if ( !isNaN( value ) && value !== 0 ) {
            return value;
          }
        }
        elem = elem.parent();
      }
    }

    return 0;
  },

  uniqueId: function() {
    return this.each(function() {
      if ( !this.id ) {
        this.id = "ui-id-" + (++uuid);
      }
    });
  },

  removeUniqueId: function() {
    return this.each(function() {
      if ( runiqueId.test( this.id ) ) {
        $( this ).removeAttr( "id" );
      }
    });
  }
});

// selectors
function focusable( element, isTabIndexNotNaN ) {
  var map, mapName, img,
    nodeName = element.nodeName.toLowerCase();
  if ( "area" === nodeName ) {
    map = element.parentNode;
    mapName = map.name;
    if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
      return false;
    }
    img = $( "img[usemap=#" + mapName + "]" )[0];
    return !!img && visible( img );
  }
  return ( /input|select|textarea|button|object/.test( nodeName ) ?
    !element.disabled :
    "a" === nodeName ?
      element.href || isTabIndexNotNaN :
      isTabIndexNotNaN) &&
    // the element and all of its ancestors must be visible
    visible( element );
}

function visible( element ) {
  return $.expr.filters.visible( element ) &&
    !$( element ).parents().addBack().filter(function() {
      return $.css( this, "visibility" ) === "hidden";
    }).length;
}

$.extend( $.expr[ ":" ], {
  data: $.expr.createPseudo ?
    $.expr.createPseudo(function( dataName ) {
      return function( elem ) {
        return !!$.data( elem, dataName );
      };
    }) :
    // support: jQuery <1.8
    function( elem, i, match ) {
      return !!$.data( elem, match[ 3 ] );
    },

  focusable: function( element ) {
    return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
  },

  tabbable: function( element ) {
    var tabIndex = $.attr( element, "tabindex" ),
      isTabIndexNaN = isNaN( tabIndex );
    return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
  }
});

// support: jQuery <1.8
if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
  $.each( [ "Width", "Height" ], function( i, name ) {
    var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
      type = name.toLowerCase(),
      orig = {
        innerWidth: $.fn.innerWidth,
        innerHeight: $.fn.innerHeight,
        outerWidth: $.fn.outerWidth,
        outerHeight: $.fn.outerHeight
      };

    function reduce( elem, size, border, margin ) {
      $.each( side, function() {
        size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
        if ( border ) {
          size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
        }
        if ( margin ) {
          size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
        }
      });
      return size;
    }

    $.fn[ "inner" + name ] = function( size ) {
      if ( size === undefined ) {
        return orig[ "inner" + name ].call( this );
      }

      return this.each(function() {
        $( this ).css( type, reduce( this, size ) + "px" );
      });
    };

    $.fn[ "outer" + name] = function( size, margin ) {
      if ( typeof size !== "number" ) {
        return orig[ "outer" + name ].call( this, size );
      }

      return this.each(function() {
        $( this).css( type, reduce( this, size, true, margin ) + "px" );
      });
    };
  });
}

// support: jQuery <1.8
if ( !$.fn.addBack ) {
  $.fn.addBack = function( selector ) {
    return this.add( selector == null ?
      this.prevObject : this.prevObject.filter( selector )
    );
  };
}

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
  $.fn.removeData = (function( removeData ) {
    return function( key ) {
      if ( arguments.length ) {
        return removeData.call( this, $.camelCase( key ) );
      } else {
        return removeData.call( this );
      }
    };
  })( $.fn.removeData );
}





// deprecated
$.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

$.support.selectstart = "onselectstart" in document.createElement( "div" );
$.fn.extend({
  disableSelection: function() {
    return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
      ".ui-disableSelection", function( event ) {
        event.preventDefault();
      });
  },

  enableSelection: function() {
    return this.unbind( ".ui-disableSelection" );
  }
});

$.extend( $.ui, {
  // $.ui.plugin is deprecated. Use $.widget() extensions instead.
  plugin: {
    add: function( module, option, set ) {
      var i,
        proto = $.ui[ module ].prototype;
      for ( i in set ) {
        proto.plugins[ i ] = proto.plugins[ i ] || [];
        proto.plugins[ i ].push( [ option, set[ i ] ] );
      }
    },
    call: function( instance, name, args ) {
      var i,
        set = instance.plugins[ name ];
      if ( !set || !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) {
        return;
      }

      for ( i = 0; i < set.length; i++ ) {
        if ( instance.options[ set[ i ][ 0 ] ] ) {
          set[ i ][ 1 ].apply( instance.element, args );
        }
      }
    }
  },

  // only used by resizable
  hasScroll: function( el, a ) {

    //If overflow is hidden, the element might have extra content, but the user wants to hide it
    if ( $( el ).css( "overflow" ) === "hidden") {
      return false;
    }

    var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
      has = false;

    if ( el[ scroll ] > 0 ) {
      return true;
    }

    // TODO: determine which cases actually cause this to happen
    // if the element doesn't have the scroll set, see if it's possible to
    // set the scroll
    el[ scroll ] = 1;
    has = ( el[ scroll ] > 0 );
    el[ scroll ] = 0;
    return has;
  }
});

})( jQuery );
(function( $, undefined ) {

var uuid = 0,
  slice = Array.prototype.slice,
  _cleanData = $.cleanData;
$.cleanData = function( elems ) {
  for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
    try {
      $( elem ).triggerHandler( "remove" );
    // http://bugs.jquery.com/ticket/8235
    } catch( e ) {}
  }
  _cleanData( elems );
};

$.widget = function( name, base, prototype ) {
  var fullName, existingConstructor, constructor, basePrototype,
    // proxiedPrototype allows the provided prototype to remain unmodified
    // so that it can be used as a mixin for multiple widgets (#8876)
    proxiedPrototype = {},
    namespace = name.split( "." )[ 0 ];

  name = name.split( "." )[ 1 ];
  fullName = namespace + "-" + name;

  if ( !prototype ) {
    prototype = base;
    base = $.Widget;
  }

  // create selector for plugin
  $.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
    return !!$.data( elem, fullName );
  };

  $[ namespace ] = $[ namespace ] || {};
  existingConstructor = $[ namespace ][ name ];
  constructor = $[ namespace ][ name ] = function( options, element ) {
    // allow instantiation without "new" keyword
    if ( !this._createWidget ) {
      return new constructor( options, element );
    }

    // allow instantiation without initializing for simple inheritance
    // must use "new" keyword (the code above always passes args)
    if ( arguments.length ) {
      this._createWidget( options, element );
    }
  };
  // extend with the existing constructor to carry over any static properties
  $.extend( constructor, existingConstructor, {
    version: prototype.version,
    // copy the object used to create the prototype in case we need to
    // redefine the widget later
    _proto: $.extend( {}, prototype ),
    // track widgets that inherit from this widget in case this widget is
    // redefined after a widget inherits from it
    _childConstructors: []
  });

  basePrototype = new base();
  // we need to make the options hash a property directly on the new instance
  // otherwise we'll modify the options hash on the prototype that we're
  // inheriting from
  basePrototype.options = $.widget.extend( {}, basePrototype.options );
  $.each( prototype, function( prop, value ) {
    if ( !$.isFunction( value ) ) {
      proxiedPrototype[ prop ] = value;
      return;
    }
    proxiedPrototype[ prop ] = (function() {
      var _super = function() {
          return base.prototype[ prop ].apply( this, arguments );
        },
        _superApply = function( args ) {
          return base.prototype[ prop ].apply( this, args );
        };
      return function() {
        var __super = this._super,
          __superApply = this._superApply,
          returnValue;

        this._super = _super;
        this._superApply = _superApply;

        returnValue = value.apply( this, arguments );

        this._super = __super;
        this._superApply = __superApply;

        return returnValue;
      };
    })();
  });
  constructor.prototype = $.widget.extend( basePrototype, {
    // TODO: remove support for widgetEventPrefix
    // always use the name + a colon as the prefix, e.g., draggable:start
    // don't prefix for widgets that aren't DOM-based
    widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
  }, proxiedPrototype, {
    constructor: constructor,
    namespace: namespace,
    widgetName: name,
    widgetFullName: fullName
  });

  // If this widget is being redefined then we need to find all widgets that
  // are inheriting from it and redefine all of them so that they inherit from
  // the new version of this widget. We're essentially trying to replace one
  // level in the prototype chain.
  if ( existingConstructor ) {
    $.each( existingConstructor._childConstructors, function( i, child ) {
      var childPrototype = child.prototype;

      // redefine the child widget using the same prototype that was
      // originally used, but inherit from the new version of the base
      $.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
    });
    // remove the list of existing child constructors from the old constructor
    // so the old child constructors can be garbage collected
    delete existingConstructor._childConstructors;
  } else {
    base._childConstructors.push( constructor );
  }

  $.widget.bridge( name, constructor );
};

$.widget.extend = function( target ) {
  var input = slice.call( arguments, 1 ),
    inputIndex = 0,
    inputLength = input.length,
    key,
    value;
  for ( ; inputIndex < inputLength; inputIndex++ ) {
    for ( key in input[ inputIndex ] ) {
      value = input[ inputIndex ][ key ];
      if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
        // Clone objects
        if ( $.isPlainObject( value ) ) {
          target[ key ] = $.isPlainObject( target[ key ] ) ?
            $.widget.extend( {}, target[ key ], value ) :
            // Don't extend strings, arrays, etc. with objects
            $.widget.extend( {}, value );
        // Copy everything else by reference
        } else {
          target[ key ] = value;
        }
      }
    }
  }
  return target;
};

$.widget.bridge = function( name, object ) {
  var fullName = object.prototype.widgetFullName || name;
  $.fn[ name ] = function( options ) {
    var isMethodCall = typeof options === "string",
      args = slice.call( arguments, 1 ),
      returnValue = this;

    // allow multiple hashes to be passed on init
    options = !isMethodCall && args.length ?
      $.widget.extend.apply( null, [ options ].concat(args) ) :
      options;

    if ( isMethodCall ) {
      this.each(function() {
        var methodValue,
          instance = $.data( this, fullName );
        if ( !instance ) {
          return $.error( "cannot call methods on " + name + " prior to initialization; " +
            "attempted to call method '" + options + "'" );
        }
        if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
          return $.error( "no such method '" + options + "' for " + name + " widget instance" );
        }
        methodValue = instance[ options ].apply( instance, args );
        if ( methodValue !== instance && methodValue !== undefined ) {
          returnValue = methodValue && methodValue.jquery ?
            returnValue.pushStack( methodValue.get() ) :
            methodValue;
          return false;
        }
      });
    } else {
      this.each(function() {
        var instance = $.data( this, fullName );
        if ( instance ) {
          instance.option( options || {} )._init();
        } else {
          $.data( this, fullName, new object( options, this ) );
        }
      });
    }

    return returnValue;
  };
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
  widgetName: "widget",
  widgetEventPrefix: "",
  defaultElement: "<div>",
  options: {
    disabled: false,

    // callbacks
    create: null
  },
  _createWidget: function( options, element ) {
    element = $( element || this.defaultElement || this )[ 0 ];
    this.element = $( element );
    this.uuid = uuid++;
    this.eventNamespace = "." + this.widgetName + this.uuid;
    this.options = $.widget.extend( {},
      this.options,
      this._getCreateOptions(),
      options );

    this.bindings = $();
    this.hoverable = $();
    this.focusable = $();

    if ( element !== this ) {
      $.data( element, this.widgetFullName, this );
      this._on( true, this.element, {
        remove: function( event ) {
          if ( event.target === element ) {
            this.destroy();
          }
        }
      });
      this.document = $( element.style ?
        // element within the document
        element.ownerDocument :
        // element is window or document
        element.document || element );
      this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
    }

    this._create();
    this._trigger( "create", null, this._getCreateEventData() );
    this._init();
  },
  _getCreateOptions: $.noop,
  _getCreateEventData: $.noop,
  _create: $.noop,
  _init: $.noop,

  destroy: function() {
    this._destroy();
    // we can probably remove the unbind calls in 2.0
    // all event bindings should go through this._on()
    this.element
      .unbind( this.eventNamespace )
      // 1.9 BC for #7810
      // TODO remove dual storage
      .removeData( this.widgetName )
      .removeData( this.widgetFullName )
      // support: jquery <1.6.3
      // http://bugs.jquery.com/ticket/9413
      .removeData( $.camelCase( this.widgetFullName ) );
    this.widget()
      .unbind( this.eventNamespace )
      .removeAttr( "aria-disabled" )
      .removeClass(
        this.widgetFullName + "-disabled " +
        "ui-state-disabled" );

    // clean up events and states
    this.bindings.unbind( this.eventNamespace );
    this.hoverable.removeClass( "ui-state-hover" );
    this.focusable.removeClass( "ui-state-focus" );
  },
  _destroy: $.noop,

  widget: function() {
    return this.element;
  },

  option: function( key, value ) {
    var options = key,
      parts,
      curOption,
      i;

    if ( arguments.length === 0 ) {
      // don't return a reference to the internal hash
      return $.widget.extend( {}, this.options );
    }

    if ( typeof key === "string" ) {
      // handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
      options = {};
      parts = key.split( "." );
      key = parts.shift();
      if ( parts.length ) {
        curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
        for ( i = 0; i < parts.length - 1; i++ ) {
          curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
          curOption = curOption[ parts[ i ] ];
        }
        key = parts.pop();
        if ( arguments.length === 1 ) {
          return curOption[ key ] === undefined ? null : curOption[ key ];
        }
        curOption[ key ] = value;
      } else {
        if ( arguments.length === 1 ) {
          return this.options[ key ] === undefined ? null : this.options[ key ];
        }
        options[ key ] = value;
      }
    }

    this._setOptions( options );

    return this;
  },
  _setOptions: function( options ) {
    var key;

    for ( key in options ) {
      this._setOption( key, options[ key ] );
    }

    return this;
  },
  _setOption: function( key, value ) {
    this.options[ key ] = value;

    if ( key === "disabled" ) {
      this.widget()
        .toggleClass( this.widgetFullName + "-disabled ui-state-disabled", !!value )
        .attr( "aria-disabled", value );
      this.hoverable.removeClass( "ui-state-hover" );
      this.focusable.removeClass( "ui-state-focus" );
    }

    return this;
  },

  enable: function() {
    return this._setOption( "disabled", false );
  },
  disable: function() {
    return this._setOption( "disabled", true );
  },

  _on: function( suppressDisabledCheck, element, handlers ) {
    var delegateElement,
      instance = this;

    // no suppressDisabledCheck flag, shuffle arguments
    if ( typeof suppressDisabledCheck !== "boolean" ) {
      handlers = element;
      element = suppressDisabledCheck;
      suppressDisabledCheck = false;
    }

    // no element argument, shuffle and use this.element
    if ( !handlers ) {
      handlers = element;
      element = this.element;
      delegateElement = this.widget();
    } else {
      // accept selectors, DOM elements
      element = delegateElement = $( element );
      this.bindings = this.bindings.add( element );
    }

    $.each( handlers, function( event, handler ) {
      function handlerProxy() {
        // allow widgets to customize the disabled handling
        // - disabled as an array instead of boolean
        // - disabled class as method for disabling individual parts
        if ( !suppressDisabledCheck &&
            ( instance.options.disabled === true ||
              $( this ).hasClass( "ui-state-disabled" ) ) ) {
          return;
        }
        return ( typeof handler === "string" ? instance[ handler ] : handler )
          .apply( instance, arguments );
      }

      // copy the guid so direct unbinding works
      if ( typeof handler !== "string" ) {
        handlerProxy.guid = handler.guid =
          handler.guid || handlerProxy.guid || $.guid++;
      }

      var match = event.match( /^(\w+)\s*(.*)$/ ),
        eventName = match[1] + instance.eventNamespace,
        selector = match[2];
      if ( selector ) {
        delegateElement.delegate( selector, eventName, handlerProxy );
      } else {
        element.bind( eventName, handlerProxy );
      }
    });
  },

  _off: function( element, eventName ) {
    eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
    element.unbind( eventName ).undelegate( eventName );
  },

  _delay: function( handler, delay ) {
    function handlerProxy() {
      return ( typeof handler === "string" ? instance[ handler ] : handler )
        .apply( instance, arguments );
    }
    var instance = this;
    return setTimeout( handlerProxy, delay || 0 );
  },

  _hoverable: function( element ) {
    this.hoverable = this.hoverable.add( element );
    this._on( element, {
      mouseenter: function( event ) {
        $( event.currentTarget ).addClass( "ui-state-hover" );
      },
      mouseleave: function( event ) {
        $( event.currentTarget ).removeClass( "ui-state-hover" );
      }
    });
  },

  _focusable: function( element ) {
    this.focusable = this.focusable.add( element );
    this._on( element, {
      focusin: function( event ) {
        $( event.currentTarget ).addClass( "ui-state-focus" );
      },
      focusout: function( event ) {
        $( event.currentTarget ).removeClass( "ui-state-focus" );
      }
    });
  },

  _trigger: function( type, event, data ) {
    var prop, orig,
      callback = this.options[ type ];

    data = data || {};
    event = $.Event( event );
    event.type = ( type === this.widgetEventPrefix ?
      type :
      this.widgetEventPrefix + type ).toLowerCase();
    // the original event may come from any element
    // so we need to reset the target on the new event
    event.target = this.element[ 0 ];

    // copy original event properties over to the new event
    orig = event.originalEvent;
    if ( orig ) {
      for ( prop in orig ) {
        if ( !( prop in event ) ) {
          event[ prop ] = orig[ prop ];
        }
      }
    }

    this.element.trigger( event, data );
    return !( $.isFunction( callback ) &&
      callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
      event.isDefaultPrevented() );
  }
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
  $.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
    if ( typeof options === "string" ) {
      options = { effect: options };
    }
    var hasOptions,
      effectName = !options ?
        method :
        options === true || typeof options === "number" ?
          defaultEffect :
          options.effect || defaultEffect;
    options = options || {};
    if ( typeof options === "number" ) {
      options = { duration: options };
    }
    hasOptions = !$.isEmptyObject( options );
    options.complete = callback;
    if ( options.delay ) {
      element.delay( options.delay );
    }
    if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
      element[ method ]( options );
    } else if ( effectName !== method && element[ effectName ] ) {
      element[ effectName ]( options.duration, options.easing, callback );
    } else {
      element.queue(function( next ) {
        $( this )[ method ]();
        if ( callback ) {
          callback.call( element[ 0 ] );
        }
        next();
      });
    }
  };
});

})( jQuery );
(function( $, undefined ) {

$.ui = $.ui || {};

var cachedScrollbarWidth,
  max = Math.max,
  abs = Math.abs,
  round = Math.round,
  rhorizontal = /left|center|right/,
  rvertical = /top|center|bottom/,
  roffset = /[\+\-]\d+(\.[\d]+)?%?/,
  rposition = /^\w+/,
  rpercent = /%$/,
  _position = $.fn.position;

function getOffsets( offsets, width, height ) {
  return [
    parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
    parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
  ];
}

function parseCss( element, property ) {
  return parseInt( $.css( element, property ), 10 ) || 0;
}

function getDimensions( elem ) {
  var raw = elem[0];
  if ( raw.nodeType === 9 ) {
    return {
      width: elem.width(),
      height: elem.height(),
      offset: { top: 0, left: 0 }
    };
  }
  if ( $.isWindow( raw ) ) {
    return {
      width: elem.width(),
      height: elem.height(),
      offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
    };
  }
  if ( raw.preventDefault ) {
    return {
      width: 0,
      height: 0,
      offset: { top: raw.pageY, left: raw.pageX }
    };
  }
  return {
    width: elem.outerWidth(),
    height: elem.outerHeight(),
    offset: elem.offset()
  };
}

$.position = {
  scrollbarWidth: function() {
    if ( cachedScrollbarWidth !== undefined ) {
      return cachedScrollbarWidth;
    }
    var w1, w2,
      div = $( "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>" ),
      innerDiv = div.children()[0];

    $( "body" ).append( div );
    w1 = innerDiv.offsetWidth;
    div.css( "overflow", "scroll" );

    w2 = innerDiv.offsetWidth;

    if ( w1 === w2 ) {
      w2 = div[0].clientWidth;
    }

    div.remove();

    return (cachedScrollbarWidth = w1 - w2);
  },
  getScrollInfo: function( within ) {
    var overflowX = within.isWindow || within.isDocument ? "" :
        within.element.css( "overflow-x" ),
      overflowY = within.isWindow || within.isDocument ? "" :
        within.element.css( "overflow-y" ),
      hasOverflowX = overflowX === "scroll" ||
        ( overflowX === "auto" && within.width < within.element[0].scrollWidth ),
      hasOverflowY = overflowY === "scroll" ||
        ( overflowY === "auto" && within.height < within.element[0].scrollHeight );
    return {
      width: hasOverflowY ? $.position.scrollbarWidth() : 0,
      height: hasOverflowX ? $.position.scrollbarWidth() : 0
    };
  },
  getWithinInfo: function( element ) {
    var withinElement = $( element || window ),
      isWindow = $.isWindow( withinElement[0] ),
      isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9;
    return {
      element: withinElement,
      isWindow: isWindow,
      isDocument: isDocument,
      offset: withinElement.offset() || { left: 0, top: 0 },
      scrollLeft: withinElement.scrollLeft(),
      scrollTop: withinElement.scrollTop(),
      width: isWindow ? withinElement.width() : withinElement.outerWidth(),
      height: isWindow ? withinElement.height() : withinElement.outerHeight()
    };
  }
};

$.fn.position = function( options ) {
  if ( !options || !options.of ) {
    return _position.apply( this, arguments );
  }

  // make a copy, we don't want to modify arguments
  options = $.extend( {}, options );

  var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
    target = $( options.of ),
    within = $.position.getWithinInfo( options.within ),
    scrollInfo = $.position.getScrollInfo( within ),
    collision = ( options.collision || "flip" ).split( " " ),
    offsets = {};

  dimensions = getDimensions( target );
  if ( target[0].preventDefault ) {
    // force left top to allow flipping
    options.at = "left top";
  }
  targetWidth = dimensions.width;
  targetHeight = dimensions.height;
  targetOffset = dimensions.offset;
  // clone to reuse original targetOffset later
  basePosition = $.extend( {}, targetOffset );

  // force my and at to have valid horizontal and vertical positions
  // if a value is missing or invalid, it will be converted to center
  $.each( [ "my", "at" ], function() {
    var pos = ( options[ this ] || "" ).split( " " ),
      horizontalOffset,
      verticalOffset;

    if ( pos.length === 1) {
      pos = rhorizontal.test( pos[ 0 ] ) ?
        pos.concat( [ "center" ] ) :
        rvertical.test( pos[ 0 ] ) ?
          [ "center" ].concat( pos ) :
          [ "center", "center" ];
    }
    pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
    pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

    // calculate offsets
    horizontalOffset = roffset.exec( pos[ 0 ] );
    verticalOffset = roffset.exec( pos[ 1 ] );
    offsets[ this ] = [
      horizontalOffset ? horizontalOffset[ 0 ] : 0,
      verticalOffset ? verticalOffset[ 0 ] : 0
    ];

    // reduce to just the positions without the offsets
    options[ this ] = [
      rposition.exec( pos[ 0 ] )[ 0 ],
      rposition.exec( pos[ 1 ] )[ 0 ]
    ];
  });

  // normalize collision option
  if ( collision.length === 1 ) {
    collision[ 1 ] = collision[ 0 ];
  }

  if ( options.at[ 0 ] === "right" ) {
    basePosition.left += targetWidth;
  } else if ( options.at[ 0 ] === "center" ) {
    basePosition.left += targetWidth / 2;
  }

  if ( options.at[ 1 ] === "bottom" ) {
    basePosition.top += targetHeight;
  } else if ( options.at[ 1 ] === "center" ) {
    basePosition.top += targetHeight / 2;
  }

  atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
  basePosition.left += atOffset[ 0 ];
  basePosition.top += atOffset[ 1 ];

  return this.each(function() {
    var collisionPosition, using,
      elem = $( this ),
      elemWidth = elem.outerWidth(),
      elemHeight = elem.outerHeight(),
      marginLeft = parseCss( this, "marginLeft" ),
      marginTop = parseCss( this, "marginTop" ),
      collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) + scrollInfo.width,
      collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) + scrollInfo.height,
      position = $.extend( {}, basePosition ),
      myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

    if ( options.my[ 0 ] === "right" ) {
      position.left -= elemWidth;
    } else if ( options.my[ 0 ] === "center" ) {
      position.left -= elemWidth / 2;
    }

    if ( options.my[ 1 ] === "bottom" ) {
      position.top -= elemHeight;
    } else if ( options.my[ 1 ] === "center" ) {
      position.top -= elemHeight / 2;
    }

    position.left += myOffset[ 0 ];
    position.top += myOffset[ 1 ];

    // if the browser doesn't support fractions, then round for consistent results
    if ( !$.support.offsetFractions ) {
      position.left = round( position.left );
      position.top = round( position.top );
    }

    collisionPosition = {
      marginLeft: marginLeft,
      marginTop: marginTop
    };

    $.each( [ "left", "top" ], function( i, dir ) {
      if ( $.ui.position[ collision[ i ] ] ) {
        $.ui.position[ collision[ i ] ][ dir ]( position, {
          targetWidth: targetWidth,
          targetHeight: targetHeight,
          elemWidth: elemWidth,
          elemHeight: elemHeight,
          collisionPosition: collisionPosition,
          collisionWidth: collisionWidth,
          collisionHeight: collisionHeight,
          offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
          my: options.my,
          at: options.at,
          within: within,
          elem : elem
        });
      }
    });

    if ( options.using ) {
      // adds feedback as second argument to using callback, if present
      using = function( props ) {
        var left = targetOffset.left - position.left,
          right = left + targetWidth - elemWidth,
          top = targetOffset.top - position.top,
          bottom = top + targetHeight - elemHeight,
          feedback = {
            target: {
              element: target,
              left: targetOffset.left,
              top: targetOffset.top,
              width: targetWidth,
              height: targetHeight
            },
            element: {
              element: elem,
              left: position.left,
              top: position.top,
              width: elemWidth,
              height: elemHeight
            },
            horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
            vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
          };
        if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
          feedback.horizontal = "center";
        }
        if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
          feedback.vertical = "middle";
        }
        if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
          feedback.important = "horizontal";
        } else {
          feedback.important = "vertical";
        }
        options.using.call( this, props, feedback );
      };
    }

    elem.offset( $.extend( position, { using: using } ) );
  });
};

$.ui.position = {
  fit: {
    left: function( position, data ) {
      var within = data.within,
        withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
        outerWidth = within.width,
        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
        overLeft = withinOffset - collisionPosLeft,
        overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
        newOverRight;

      // element is wider than within
      if ( data.collisionWidth > outerWidth ) {
        // element is initially over the left side of within
        if ( overLeft > 0 && overRight <= 0 ) {
          newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
          position.left += overLeft - newOverRight;
        // element is initially over right side of within
        } else if ( overRight > 0 && overLeft <= 0 ) {
          position.left = withinOffset;
        // element is initially over both left and right sides of within
        } else {
          if ( overLeft > overRight ) {
            position.left = withinOffset + outerWidth - data.collisionWidth;
          } else {
            position.left = withinOffset;
          }
        }
      // too far left -> align with left edge
      } else if ( overLeft > 0 ) {
        position.left += overLeft;
      // too far right -> align with right edge
      } else if ( overRight > 0 ) {
        position.left -= overRight;
      // adjust based on position and margin
      } else {
        position.left = max( position.left - collisionPosLeft, position.left );
      }
    },
    top: function( position, data ) {
      var within = data.within,
        withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
        outerHeight = data.within.height,
        collisionPosTop = position.top - data.collisionPosition.marginTop,
        overTop = withinOffset - collisionPosTop,
        overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
        newOverBottom;

      // element is taller than within
      if ( data.collisionHeight > outerHeight ) {
        // element is initially over the top of within
        if ( overTop > 0 && overBottom <= 0 ) {
          newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
          position.top += overTop - newOverBottom;
        // element is initially over bottom of within
        } else if ( overBottom > 0 && overTop <= 0 ) {
          position.top = withinOffset;
        // element is initially over both top and bottom of within
        } else {
          if ( overTop > overBottom ) {
            position.top = withinOffset + outerHeight - data.collisionHeight;
          } else {
            position.top = withinOffset;
          }
        }
      // too far up -> align with top
      } else if ( overTop > 0 ) {
        position.top += overTop;
      // too far down -> align with bottom edge
      } else if ( overBottom > 0 ) {
        position.top -= overBottom;
      // adjust based on position and margin
      } else {
        position.top = max( position.top - collisionPosTop, position.top );
      }
    }
  },
  flip: {
    left: function( position, data ) {
      var within = data.within,
        withinOffset = within.offset.left + within.scrollLeft,
        outerWidth = within.width,
        offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
        overLeft = collisionPosLeft - offsetLeft,
        overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
        myOffset = data.my[ 0 ] === "left" ?
          -data.elemWidth :
          data.my[ 0 ] === "right" ?
            data.elemWidth :
            0,
        atOffset = data.at[ 0 ] === "left" ?
          data.targetWidth :
          data.at[ 0 ] === "right" ?
            -data.targetWidth :
            0,
        offset = -2 * data.offset[ 0 ],
        newOverRight,
        newOverLeft;

      if ( overLeft < 0 ) {
        newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
        if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
          position.left += myOffset + atOffset + offset;
        }
      }
      else if ( overRight > 0 ) {
        newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
        if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
          position.left += myOffset + atOffset + offset;
        }
      }
    },
    top: function( position, data ) {
      var within = data.within,
        withinOffset = within.offset.top + within.scrollTop,
        outerHeight = within.height,
        offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
        collisionPosTop = position.top - data.collisionPosition.marginTop,
        overTop = collisionPosTop - offsetTop,
        overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
        top = data.my[ 1 ] === "top",
        myOffset = top ?
          -data.elemHeight :
          data.my[ 1 ] === "bottom" ?
            data.elemHeight :
            0,
        atOffset = data.at[ 1 ] === "top" ?
          data.targetHeight :
          data.at[ 1 ] === "bottom" ?
            -data.targetHeight :
            0,
        offset = -2 * data.offset[ 1 ],
        newOverTop,
        newOverBottom;
      if ( overTop < 0 ) {
        newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
        if ( ( position.top + myOffset + atOffset + offset) > overTop && ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) ) {
          position.top += myOffset + atOffset + offset;
        }
      }
      else if ( overBottom > 0 ) {
        newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
        if ( ( position.top + myOffset + atOffset + offset) > overBottom && ( newOverTop > 0 || abs( newOverTop ) < overBottom ) ) {
          position.top += myOffset + atOffset + offset;
        }
      }
    }
  },
  flipfit: {
    left: function() {
      $.ui.position.flip.left.apply( this, arguments );
      $.ui.position.fit.left.apply( this, arguments );
    },
    top: function() {
      $.ui.position.flip.top.apply( this, arguments );
      $.ui.position.fit.top.apply( this, arguments );
    }
  }
};

// fraction support test
(function () {
  var testElement, testElementParent, testElementStyle, offsetLeft, i,
    body = document.getElementsByTagName( "body" )[ 0 ],
    div = document.createElement( "div" );

  //Create a "fake body" for testing based on method used in jQuery.support
  testElement = document.createElement( body ? "div" : "body" );
  testElementStyle = {
    visibility: "hidden",
    width: 0,
    height: 0,
    border: 0,
    margin: 0,
    background: "none"
  };
  if ( body ) {
    $.extend( testElementStyle, {
      position: "absolute",
      left: "-1000px",
      top: "-1000px"
    });
  }
  for ( i in testElementStyle ) {
    testElement.style[ i ] = testElementStyle[ i ];
  }
  testElement.appendChild( div );
  testElementParent = body || document.documentElement;
  testElementParent.insertBefore( testElement, testElementParent.firstChild );

  div.style.cssText = "position: absolute; left: 10.7432222px;";

  offsetLeft = $( div ).offset().left;
  $.support.offsetFractions = offsetLeft > 10 && offsetLeft < 11;

  testElement.innerHTML = "";
  testElementParent.removeChild( testElement );
})();

}( jQuery ) );
(function( $, undefined ) {

$.widget( "ui.autocomplete", {
  version: "1.10.4",
  defaultElement: "<input>",
  options: {
    appendTo: null,
    autoFocus: false,
    delay: 300,
    minLength: 1,
    position: {
      my: "left top",
      at: "left bottom",
      collision: "none"
    },
    source: null,

    // callbacks
    change: null,
    close: null,
    focus: null,
    open: null,
    response: null,
    search: null,
    select: null
  },

  requestIndex: 0,
  pending: 0,

  _create: function() {
    // Some browsers only repeat keydown events, not keypress events,
    // so we use the suppressKeyPress flag to determine if we've already
    // handled the keydown event. #7269
    // Unfortunately the code for & in keypress is the same as the up arrow,
    // so we use the suppressKeyPressRepeat flag to avoid handling keypress
    // events when we know the keydown event was used to modify the
    // search term. #7799
    var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
      nodeName = this.element[0].nodeName.toLowerCase(),
      isTextarea = nodeName === "textarea",
      isInput = nodeName === "input";

    this.isMultiLine =
      // Textareas are always multi-line
      isTextarea ? true :
      // Inputs are always single-line, even if inside a contentEditable element
      // IE also treats inputs as contentEditable
      isInput ? false :
      // All other element types are determined by whether or not they're contentEditable
      this.element.prop( "isContentEditable" );

    this.valueMethod = this.element[ isTextarea || isInput ? "val" : "text" ];
    this.isNewMenu = true;

    this.element
      .addClass( "ui-autocomplete-input" )
      .attr( "autocomplete", "off" );

    this._on( this.element, {
      keydown: function( event ) {
        if ( this.element.prop( "readOnly" ) ) {
          suppressKeyPress = true;
          suppressInput = true;
          suppressKeyPressRepeat = true;
          return;
        }

        suppressKeyPress = false;
        suppressInput = false;
        suppressKeyPressRepeat = false;
        var keyCode = $.ui.keyCode;
        switch( event.keyCode ) {
        case keyCode.PAGE_UP:
          suppressKeyPress = true;
          this._move( "previousPage", event );
          break;
        case keyCode.PAGE_DOWN:
          suppressKeyPress = true;
          this._move( "nextPage", event );
          break;
        case keyCode.UP:
          suppressKeyPress = true;
          this._keyEvent( "previous", event );
          break;
        case keyCode.DOWN:
          suppressKeyPress = true;
          this._keyEvent( "next", event );
          break;
        case keyCode.ENTER:
        case keyCode.NUMPAD_ENTER:
          // when menu is open and has focus
          if ( this.menu.active ) {
            // #6055 - Opera still allows the keypress to occur
            // which causes forms to submit
            suppressKeyPress = true;
            event.preventDefault();
            this.menu.select( event );
          }
          break;
        case keyCode.TAB:
          if ( this.menu.active ) {
            this.menu.select( event );
          }
          break;
        case keyCode.ESCAPE:
          if ( this.menu.element.is( ":visible" ) ) {
            this._value( this.term );
            this.close( event );
            // Different browsers have different default behavior for escape
            // Single press can mean undo or clear
            // Double press in IE means clear the whole form
            event.preventDefault();
          }
          break;
        default:
          suppressKeyPressRepeat = true;
          // search timeout should be triggered before the input value is changed
          this._searchTimeout( event );
          break;
        }
      },
      keypress: function( event ) {
        if ( suppressKeyPress ) {
          suppressKeyPress = false;
          if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
            event.preventDefault();
          }
          return;
        }
        if ( suppressKeyPressRepeat ) {
          return;
        }

        // replicate some key handlers to allow them to repeat in Firefox and Opera
        var keyCode = $.ui.keyCode;
        switch( event.keyCode ) {
        case keyCode.PAGE_UP:
          this._move( "previousPage", event );
          break;
        case keyCode.PAGE_DOWN:
          this._move( "nextPage", event );
          break;
        case keyCode.UP:
          this._keyEvent( "previous", event );
          break;
        case keyCode.DOWN:
          this._keyEvent( "next", event );
          break;
        }
      },
      input: function( event ) {
        if ( suppressInput ) {
          suppressInput = false;
          event.preventDefault();
          return;
        }
        this._searchTimeout( event );
      },
      focus: function() {
        this.selectedItem = null;
        this.previous = this._value();
      },
      blur: function( event ) {
        if ( this.cancelBlur ) {
          delete this.cancelBlur;
          return;
        }

        clearTimeout( this.searching );
        this.close( event );
        this._change( event );
      }
    });

    this._initSource();
    this.menu = $( "<ul>" )
      .addClass( "ui-autocomplete ui-front" )
      .appendTo( this._appendTo() )
      .menu({
        // disable ARIA support, the live region takes care of that
        role: null
      })
      .hide()
      .data( "ui-menu" );

    this._on( this.menu.element, {
      mousedown: function( event ) {
        // prevent moving focus out of the text field
        event.preventDefault();

        // IE doesn't prevent moving focus even with event.preventDefault()
        // so we set a flag to know when we should ignore the blur event
        this.cancelBlur = true;
        this._delay(function() {
          delete this.cancelBlur;
        });

        // clicking on the scrollbar causes focus to shift to the body
        // but we can't detect a mouseup or a click immediately afterward
        // so we have to track the next mousedown and close the menu if
        // the user clicks somewhere outside of the autocomplete
        var menuElement = this.menu.element[ 0 ];
        if ( !$( event.target ).closest( ".ui-menu-item" ).length ) {
          this._delay(function() {
            var that = this;
            this.document.one( "mousedown", function( event ) {
              if ( event.target !== that.element[ 0 ] &&
                  event.target !== menuElement &&
                  !$.contains( menuElement, event.target ) ) {
                that.close();
              }
            });
          });
        }
      },
      menufocus: function( event, ui ) {
        // support: Firefox
        // Prevent accidental activation of menu items in Firefox (#7024 #9118)
        if ( this.isNewMenu ) {
          this.isNewMenu = false;
          if ( event.originalEvent && /^mouse/.test( event.originalEvent.type ) ) {
            this.menu.blur();

            this.document.one( "mousemove", function() {
              $( event.target ).trigger( event.originalEvent );
            });

            return;
          }
        }

        var item = ui.item.data( "ui-autocomplete-item" );
        if ( false !== this._trigger( "focus", event, { item: item } ) ) {
          // use value to match what will end up in the input, if it was a key event
          if ( event.originalEvent && /^key/.test( event.originalEvent.type ) ) {
            this._value( item.value );
          }
        } else {
          // Normally the input is populated with the item's value as the
          // menu is navigated, causing screen readers to notice a change and
          // announce the item. Since the focus event was canceled, this doesn't
          // happen, so we update the live region so that screen readers can
          // still notice the change and announce it.
          this.liveRegion.text( item.value );
        }
      },
      menuselect: function( event, ui ) {
        var item = ui.item.data( "ui-autocomplete-item" ),
          previous = this.previous;

        // only trigger when focus was lost (click on menu)
        if ( this.element[0] !== this.document[0].activeElement ) {
          this.element.focus();
          this.previous = previous;
          // #6109 - IE triggers two focus events and the second
          // is asynchronous, so we need to reset the previous
          // term synchronously and asynchronously :-(
          this._delay(function() {
            this.previous = previous;
            this.selectedItem = item;
          });
        }

        if ( false !== this._trigger( "select", event, { item: item } ) ) {
          this._value( item.value );
        }
        // reset the term after the select event
        // this allows custom select handling to work properly
        this.term = this._value();

        this.close( event );
        this.selectedItem = item;
      }
    });

    this.liveRegion = $( "<span>", {
        role: "status",
        "aria-live": "polite"
      })
      .addClass( "ui-helper-hidden-accessible" )
      .insertBefore( this.element );

    // turning off autocomplete prevents the browser from remembering the
    // value when navigating through history, so we re-enable autocomplete
    // if the page is unloaded before the widget is destroyed. #7790
    this._on( this.window, {
      beforeunload: function() {
        this.element.removeAttr( "autocomplete" );
      }
    });
  },

  _destroy: function() {
    clearTimeout( this.searching );
    this.element
      .removeClass( "ui-autocomplete-input" )
      .removeAttr( "autocomplete" );
    this.menu.element.remove();
    this.liveRegion.remove();
  },

  _setOption: function( key, value ) {
    this._super( key, value );
    if ( key === "source" ) {
      this._initSource();
    }
    if ( key === "appendTo" ) {
      this.menu.element.appendTo( this._appendTo() );
    }
    if ( key === "disabled" && value && this.xhr ) {
      this.xhr.abort();
    }
  },

  _appendTo: function() {
    var element = this.options.appendTo;

    if ( element ) {
      element = element.jquery || element.nodeType ?
        $( element ) :
        this.document.find( element ).eq( 0 );
    }

    if ( !element ) {
      element = this.element.closest( ".ui-front" );
    }

    if ( !element.length ) {
      element = this.document[0].body;
    }

    return element;
  },

  _initSource: function() {
    var array, url,
      that = this;
    if ( $.isArray(this.options.source) ) {
      array = this.options.source;
      this.source = function( request, response ) {
        response( $.ui.autocomplete.filter( array, request.term ) );
      };
    } else if ( typeof this.options.source === "string" ) {
      url = this.options.source;
      this.source = function( request, response ) {
        if ( that.xhr ) {
          that.xhr.abort();
        }
        that.xhr = $.ajax({
          url: url,
          data: request,
          dataType: "json",
          success: function( data ) {
            response( data );
          },
          error: function() {
            response( [] );
          }
        });
      };
    } else {
      this.source = this.options.source;
    }
  },

  _searchTimeout: function( event ) {
    clearTimeout( this.searching );
    this.searching = this._delay(function() {
      // only search if the value has changed
      if ( this.term !== this._value() ) {
        this.selectedItem = null;
        this.search( null, event );
      }
    }, this.options.delay );
  },

  search: function( value, event ) {
    value = value != null ? value : this._value();

    // always save the actual value, not the one passed as an argument
    this.term = this._value();

    if ( value.length < this.options.minLength ) {
      return this.close( event );
    }

    if ( this._trigger( "search", event ) === false ) {
      return;
    }

    return this._search( value );
  },

  _search: function( value ) {
    this.pending++;
    this.element.addClass( "ui-autocomplete-loading" );
    this.cancelSearch = false;

    this.source( { term: value }, this._response() );
  },

  _response: function() {
    var index = ++this.requestIndex;

    return $.proxy(function( content ) {
      if ( index === this.requestIndex ) {
        this.__response( content );
      }

      this.pending--;
      if ( !this.pending ) {
        this.element.removeClass( "ui-autocomplete-loading" );
      }
    }, this );
  },

  __response: function( content ) {
    if ( content ) {
      content = this._normalize( content );
    }
    this._trigger( "response", null, { content: content } );
    if ( !this.options.disabled && content && content.length && !this.cancelSearch ) {
      this._suggest( content );
      this._trigger( "open" );
    } else {
      // use ._close() instead of .close() so we don't cancel future searches
      this._close();
    }
  },

  close: function( event ) {
    this.cancelSearch = true;
    this._close( event );
  },

  _close: function( event ) {
    if ( this.menu.element.is( ":visible" ) ) {
      this.menu.element.hide();
      this.menu.blur();
      this.isNewMenu = true;
      this._trigger( "close", event );
    }
  },

  _change: function( event ) {
    if ( this.previous !== this._value() ) {
      this._trigger( "change", event, { item: this.selectedItem } );
    }
  },

  _normalize: function( items ) {
    // assume all items have the right format when the first item is complete
    if ( items.length && items[0].label && items[0].value ) {
      return items;
    }
    return $.map( items, function( item ) {
      if ( typeof item === "string" ) {
        return {
          label: item,
          value: item
        };
      }
      return $.extend({
        label: item.label || item.value,
        value: item.value || item.label
      }, item );
    });
  },

  _suggest: function( items ) {
    var ul = this.menu.element.empty();
    this._renderMenu( ul, items );
    this.isNewMenu = true;
    this.menu.refresh();

    // size and position menu
    ul.show();
    this._resizeMenu();
    ul.position( $.extend({
      of: this.element
    }, this.options.position ));

    if ( this.options.autoFocus ) {
      this.menu.next();
    }
  },

  _resizeMenu: function() {
    var ul = this.menu.element;
    ul.outerWidth( Math.max(
      // Firefox wraps long text (possibly a rounding bug)
      // so we add 1px to avoid the wrapping (#7513)
      ul.width( "" ).outerWidth() + 1,
      this.element.outerWidth()
    ) );
  },

  _renderMenu: function( ul, items ) {
    var that = this;
    $.each( items, function( index, item ) {
      that._renderItemData( ul, item );
    });
  },

  _renderItemData: function( ul, item ) {
    return this._renderItem( ul, item ).data( "ui-autocomplete-item", item );
  },

  _renderItem: function( ul, item ) {
    return $( "<li>" )
      .append( $( "<a>" ).text( item.label ) )
      .appendTo( ul );
  },

  _move: function( direction, event ) {
    if ( !this.menu.element.is( ":visible" ) ) {
      this.search( null, event );
      return;
    }
    if ( this.menu.isFirstItem() && /^previous/.test( direction ) ||
        this.menu.isLastItem() && /^next/.test( direction ) ) {
      this._value( this.term );
      this.menu.blur();
      return;
    }
    this.menu[ direction ]( event );
  },

  widget: function() {
    return this.menu.element;
  },

  _value: function() {
    return this.valueMethod.apply( this.element, arguments );
  },

  _keyEvent: function( keyEvent, event ) {
    if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
      this._move( keyEvent, event );

      // prevents moving cursor to beginning/end of the text field in some browsers
      event.preventDefault();
    }
  }
});

$.extend( $.ui.autocomplete, {
  escapeRegex: function( value ) {
    return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  },
  filter: function(array, term) {
    var matcher = new RegExp( $.ui.autocomplete.escapeRegex(term), "i" );
    return $.grep( array, function(value) {
      return matcher.test( value.label || value.value || value );
    });
  }
});


// live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
$.widget( "ui.autocomplete", $.ui.autocomplete, {
  options: {
    messages: {
      noResults: "No search results.",
      results: function( amount ) {
        return amount + ( amount > 1 ? " results are" : " result is" ) +
          " available, use up and down arrow keys to navigate.";
      }
    }
  },

  __response: function( content ) {
    var message;
    this._superApply( arguments );
    if ( this.options.disabled || this.cancelSearch ) {
      return;
    }
    if ( content && content.length ) {
      message = this.options.messages.results( content.length );
    } else {
      message = this.options.messages.noResults;
    }
    this.liveRegion.text( message );
  }
});

}( jQuery ));
(function( $, undefined ) {

$.widget( "ui.menu", {
  version: "1.10.4",
  defaultElement: "<ul>",
  delay: 300,
  options: {
    icons: {
      submenu: "ui-icon-carat-1-e"
    },
    menus: "ul",
    position: {
      my: "left top",
      at: "right top"
    },
    role: "menu",

    // callbacks
    blur: null,
    focus: null,
    select: null
  },

  _create: function() {
    this.activeMenu = this.element;
    // flag used to prevent firing of the click handler
    // as the event bubbles up through nested menus
    this.mouseHandled = false;
    this.element
      .uniqueId()
      .addClass( "ui-menu ui-widget ui-widget-content ui-corner-all" )
      .toggleClass( "ui-menu-icons", !!this.element.find( ".ui-icon" ).length )
      .attr({
        role: this.options.role,
        tabIndex: 0
      })
      // need to catch all clicks on disabled menu
      // not possible through _on
      .bind( "click" + this.eventNamespace, $.proxy(function( event ) {
        if ( this.options.disabled ) {
          event.preventDefault();
        }
      }, this ));

    if ( this.options.disabled ) {
      this.element
        .addClass( "ui-state-disabled" )
        .attr( "aria-disabled", "true" );
    }

    this._on({
      // Prevent focus from sticking to links inside menu after clicking
      // them (focus should always stay on UL during navigation).
      "mousedown .ui-menu-item > a": function( event ) {
        event.preventDefault();
      },
      "click .ui-state-disabled > a": function( event ) {
        event.preventDefault();
      },
      "click .ui-menu-item:has(a)": function( event ) {
        var target = $( event.target ).closest( ".ui-menu-item" );
        if ( !this.mouseHandled && target.not( ".ui-state-disabled" ).length ) {
          this.select( event );

          // Only set the mouseHandled flag if the event will bubble, see #9469.
          if ( !event.isPropagationStopped() ) {
            this.mouseHandled = true;
          }

          // Open submenu on click
          if ( target.has( ".ui-menu" ).length ) {
            this.expand( event );
          } else if ( !this.element.is( ":focus" ) && $( this.document[ 0 ].activeElement ).closest( ".ui-menu" ).length ) {

            // Redirect focus to the menu
            this.element.trigger( "focus", [ true ] );

            // If the active item is on the top level, let it stay active.
            // Otherwise, blur the active item since it is no longer visible.
            if ( this.active && this.active.parents( ".ui-menu" ).length === 1 ) {
              clearTimeout( this.timer );
            }
          }
        }
      },
      "mouseenter .ui-menu-item": function( event ) {
        var target = $( event.currentTarget );
        // Remove ui-state-active class from siblings of the newly focused menu item
        // to avoid a jump caused by adjacent elements both having a class with a border
        target.siblings().children( ".ui-state-active" ).removeClass( "ui-state-active" );
        this.focus( event, target );
      },
      mouseleave: "collapseAll",
      "mouseleave .ui-menu": "collapseAll",
      focus: function( event, keepActiveItem ) {
        // If there's already an active item, keep it active
        // If not, activate the first item
        var item = this.active || this.element.children( ".ui-menu-item" ).eq( 0 );

        if ( !keepActiveItem ) {
          this.focus( event, item );
        }
      },
      blur: function( event ) {
        this._delay(function() {
          if ( !$.contains( this.element[0], this.document[0].activeElement ) ) {
            this.collapseAll( event );
          }
        });
      },
      keydown: "_keydown"
    });

    this.refresh();

    // Clicks outside of a menu collapse any open menus
    this._on( this.document, {
      click: function( event ) {
        if ( !$( event.target ).closest( ".ui-menu" ).length ) {
          this.collapseAll( event );
        }

        // Reset the mouseHandled flag
        this.mouseHandled = false;
      }
    });
  },

  _destroy: function() {
    // Destroy (sub)menus
    this.element
      .removeAttr( "aria-activedescendant" )
      .find( ".ui-menu" ).addBack()
        .removeClass( "ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons" )
        .removeAttr( "role" )
        .removeAttr( "tabIndex" )
        .removeAttr( "aria-labelledby" )
        .removeAttr( "aria-expanded" )
        .removeAttr( "aria-hidden" )
        .removeAttr( "aria-disabled" )
        .removeUniqueId()
        .show();

    // Destroy menu items
    this.element.find( ".ui-menu-item" )
      .removeClass( "ui-menu-item" )
      .removeAttr( "role" )
      .removeAttr( "aria-disabled" )
      .children( "a" )
        .removeUniqueId()
        .removeClass( "ui-corner-all ui-state-hover" )
        .removeAttr( "tabIndex" )
        .removeAttr( "role" )
        .removeAttr( "aria-haspopup" )
        .children().each( function() {
          var elem = $( this );
          if ( elem.data( "ui-menu-submenu-carat" ) ) {
            elem.remove();
          }
        });

    // Destroy menu dividers
    this.element.find( ".ui-menu-divider" ).removeClass( "ui-menu-divider ui-widget-content" );
  },

  _keydown: function( event ) {
    var match, prev, character, skip, regex,
      preventDefault = true;

    function escape( value ) {
      return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
    }

    switch ( event.keyCode ) {
    case $.ui.keyCode.PAGE_UP:
      this.previousPage( event );
      break;
    case $.ui.keyCode.PAGE_DOWN:
      this.nextPage( event );
      break;
    case $.ui.keyCode.HOME:
      this._move( "first", "first", event );
      break;
    case $.ui.keyCode.END:
      this._move( "last", "last", event );
      break;
    case $.ui.keyCode.UP:
      this.previous( event );
      break;
    case $.ui.keyCode.DOWN:
      this.next( event );
      break;
    case $.ui.keyCode.LEFT:
      this.collapse( event );
      break;
    case $.ui.keyCode.RIGHT:
      if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
        this.expand( event );
      }
      break;
    case $.ui.keyCode.ENTER:
    case $.ui.keyCode.SPACE:
      this._activate( event );
      break;
    case $.ui.keyCode.ESCAPE:
      this.collapse( event );
      break;
    default:
      preventDefault = false;
      prev = this.previousFilter || "";
      character = String.fromCharCode( event.keyCode );
      skip = false;

      clearTimeout( this.filterTimer );

      if ( character === prev ) {
        skip = true;
      } else {
        character = prev + character;
      }

      regex = new RegExp( "^" + escape( character ), "i" );
      match = this.activeMenu.children( ".ui-menu-item" ).filter(function() {
        return regex.test( $( this ).children( "a" ).text() );
      });
      match = skip && match.index( this.active.next() ) !== -1 ?
        this.active.nextAll( ".ui-menu-item" ) :
        match;

      // If no matches on the current filter, reset to the last character pressed
      // to move down the menu to the first item that starts with that character
      if ( !match.length ) {
        character = String.fromCharCode( event.keyCode );
        regex = new RegExp( "^" + escape( character ), "i" );
        match = this.activeMenu.children( ".ui-menu-item" ).filter(function() {
          return regex.test( $( this ).children( "a" ).text() );
        });
      }

      if ( match.length ) {
        this.focus( event, match );
        if ( match.length > 1 ) {
          this.previousFilter = character;
          this.filterTimer = this._delay(function() {
            delete this.previousFilter;
          }, 1000 );
        } else {
          delete this.previousFilter;
        }
      } else {
        delete this.previousFilter;
      }
    }

    if ( preventDefault ) {
      event.preventDefault();
    }
  },

  _activate: function( event ) {
    if ( !this.active.is( ".ui-state-disabled" ) ) {
      if ( this.active.children( "a[aria-haspopup='true']" ).length ) {
        this.expand( event );
      } else {
        this.select( event );
      }
    }
  },

  refresh: function() {
    var menus,
      icon = this.options.icons.submenu,
      submenus = this.element.find( this.options.menus );

    this.element.toggleClass( "ui-menu-icons", !!this.element.find( ".ui-icon" ).length );

    // Initialize nested menus
    submenus.filter( ":not(.ui-menu)" )
      .addClass( "ui-menu ui-widget ui-widget-content ui-corner-all" )
      .hide()
      .attr({
        role: this.options.role,
        "aria-hidden": "true",
        "aria-expanded": "false"
      })
      .each(function() {
        var menu = $( this ),
          item = menu.prev( "a" ),
          submenuCarat = $( "<span>" )
            .addClass( "ui-menu-icon ui-icon " + icon )
            .data( "ui-menu-submenu-carat", true );

        item
          .attr( "aria-haspopup", "true" )
          .prepend( submenuCarat );
        menu.attr( "aria-labelledby", item.attr( "id" ) );
      });

    menus = submenus.add( this.element );

    // Don't refresh list items that are already adapted
    menus.children( ":not(.ui-menu-item):has(a)" )
      .addClass( "ui-menu-item" )
      .attr( "role", "presentation" )
      .children( "a" )
        .uniqueId()
        .addClass( "ui-corner-all" )
        .attr({
          tabIndex: -1,
          role: this._itemRole()
        });

    // Initialize unlinked menu-items containing spaces and/or dashes only as dividers
    menus.children( ":not(.ui-menu-item)" ).each(function() {
      var item = $( this );
      // hyphen, em dash, en dash
      if ( !/[^\-\u2014\u2013\s]/.test( item.text() ) ) {
        item.addClass( "ui-widget-content ui-menu-divider" );
      }
    });

    // Add aria-disabled attribute to any disabled menu item
    menus.children( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

    // If the active item has been removed, blur the menu
    if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
      this.blur();
    }
  },

  _itemRole: function() {
    return {
      menu: "menuitem",
      listbox: "option"
    }[ this.options.role ];
  },

  _setOption: function( key, value ) {
    if ( key === "icons" ) {
      this.element.find( ".ui-menu-icon" )
        .removeClass( this.options.icons.submenu )
        .addClass( value.submenu );
    }
    this._super( key, value );
  },

  focus: function( event, item ) {
    var nested, focused;
    this.blur( event, event && event.type === "focus" );

    this._scrollIntoView( item );

    this.active = item.first();
    focused = this.active.children( "a" ).addClass( "ui-state-focus" );
    // Only update aria-activedescendant if there's a role
    // otherwise we assume focus is managed elsewhere
    if ( this.options.role ) {
      this.element.attr( "aria-activedescendant", focused.attr( "id" ) );
    }

    // Highlight active parent menu item, if any
    this.active
      .parent()
      .closest( ".ui-menu-item" )
      .children( "a:first" )
      .addClass( "ui-state-active" );

    if ( event && event.type === "keydown" ) {
      this._close();
    } else {
      this.timer = this._delay(function() {
        this._close();
      }, this.delay );
    }

    nested = item.children( ".ui-menu" );
    if ( nested.length && event && ( /^mouse/.test( event.type ) ) ) {
      this._startOpening(nested);
    }
    this.activeMenu = item.parent();

    this._trigger( "focus", event, { item: item } );
  },

  _scrollIntoView: function( item ) {
    var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
    if ( this._hasScroll() ) {
      borderTop = parseFloat( $.css( this.activeMenu[0], "borderTopWidth" ) ) || 0;
      paddingTop = parseFloat( $.css( this.activeMenu[0], "paddingTop" ) ) || 0;
      offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
      scroll = this.activeMenu.scrollTop();
      elementHeight = this.activeMenu.height();
      itemHeight = item.height();

      if ( offset < 0 ) {
        this.activeMenu.scrollTop( scroll + offset );
      } else if ( offset + itemHeight > elementHeight ) {
        this.activeMenu.scrollTop( scroll + offset - elementHeight + itemHeight );
      }
    }
  },

  blur: function( event, fromFocus ) {
    if ( !fromFocus ) {
      clearTimeout( this.timer );
    }

    if ( !this.active ) {
      return;
    }

    this.active.children( "a" ).removeClass( "ui-state-focus" );
    this.active = null;

    this._trigger( "blur", event, { item: this.active } );
  },

  _startOpening: function( submenu ) {
    clearTimeout( this.timer );

    // Don't open if already open fixes a Firefox bug that caused a .5 pixel
    // shift in the submenu position when mousing over the carat icon
    if ( submenu.attr( "aria-hidden" ) !== "true" ) {
      return;
    }

    this.timer = this._delay(function() {
      this._close();
      this._open( submenu );
    }, this.delay );
  },

  _open: function( submenu ) {
    var position = $.extend({
      of: this.active
    }, this.options.position );

    clearTimeout( this.timer );
    this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
      .hide()
      .attr( "aria-hidden", "true" );

    submenu
      .show()
      .removeAttr( "aria-hidden" )
      .attr( "aria-expanded", "true" )
      .position( position );
  },

  collapseAll: function( event, all ) {
    clearTimeout( this.timer );
    this.timer = this._delay(function() {
      // If we were passed an event, look for the submenu that contains the event
      var currentMenu = all ? this.element :
        $( event && event.target ).closest( this.element.find( ".ui-menu" ) );

      // If we found no valid submenu ancestor, use the main menu to close all sub menus anyway
      if ( !currentMenu.length ) {
        currentMenu = this.element;
      }

      this._close( currentMenu );

      this.blur( event );
      this.activeMenu = currentMenu;
    }, this.delay );
  },

  // With no arguments, closes the currently active menu - if nothing is active
  // it closes all menus.  If passed an argument, it will search for menus BELOW
  _close: function( startMenu ) {
    if ( !startMenu ) {
      startMenu = this.active ? this.active.parent() : this.element;
    }

    startMenu
      .find( ".ui-menu" )
        .hide()
        .attr( "aria-hidden", "true" )
        .attr( "aria-expanded", "false" )
      .end()
      .find( "a.ui-state-active" )
        .removeClass( "ui-state-active" );
  },

  collapse: function( event ) {
    var newItem = this.active &&
      this.active.parent().closest( ".ui-menu-item", this.element );
    if ( newItem && newItem.length ) {
      this._close();
      this.focus( event, newItem );
    }
  },

  expand: function( event ) {
    var newItem = this.active &&
      this.active
        .children( ".ui-menu " )
        .children( ".ui-menu-item" )
        .first();

    if ( newItem && newItem.length ) {
      this._open( newItem.parent() );

      // Delay so Firefox will not hide activedescendant change in expanding submenu from AT
      this._delay(function() {
        this.focus( event, newItem );
      });
    }
  },

  next: function( event ) {
    this._move( "next", "first", event );
  },

  previous: function( event ) {
    this._move( "prev", "last", event );
  },

  isFirstItem: function() {
    return this.active && !this.active.prevAll( ".ui-menu-item" ).length;
  },

  isLastItem: function() {
    return this.active && !this.active.nextAll( ".ui-menu-item" ).length;
  },

  _move: function( direction, filter, event ) {
    var next;
    if ( this.active ) {
      if ( direction === "first" || direction === "last" ) {
        next = this.active
          [ direction === "first" ? "prevAll" : "nextAll" ]( ".ui-menu-item" )
          .eq( -1 );
      } else {
        next = this.active
          [ direction + "All" ]( ".ui-menu-item" )
          .eq( 0 );
      }
    }
    if ( !next || !next.length || !this.active ) {
      next = this.activeMenu.children( ".ui-menu-item" )[ filter ]();
    }

    this.focus( event, next );
  },

  nextPage: function( event ) {
    var item, base, height;

    if ( !this.active ) {
      this.next( event );
      return;
    }
    if ( this.isLastItem() ) {
      return;
    }
    if ( this._hasScroll() ) {
      base = this.active.offset().top;
      height = this.element.height();
      this.active.nextAll( ".ui-menu-item" ).each(function() {
        item = $( this );
        return item.offset().top - base - height < 0;
      });

      this.focus( event, item );
    } else {
      this.focus( event, this.activeMenu.children( ".ui-menu-item" )
        [ !this.active ? "first" : "last" ]() );
    }
  },

  previousPage: function( event ) {
    var item, base, height;
    if ( !this.active ) {
      this.next( event );
      return;
    }
    if ( this.isFirstItem() ) {
      return;
    }
    if ( this._hasScroll() ) {
      base = this.active.offset().top;
      height = this.element.height();
      this.active.prevAll( ".ui-menu-item" ).each(function() {
        item = $( this );
        return item.offset().top - base + height > 0;
      });

      this.focus( event, item );
    } else {
      this.focus( event, this.activeMenu.children( ".ui-menu-item" ).first() );
    }
  },

  _hasScroll: function() {
    return this.element.outerHeight() < this.element.prop( "scrollHeight" );
  },

  select: function( event ) {
    // TODO: It should never be possible to not have an active item at this
    // point, but the tests don't trigger mouseenter before click.
    this.active = this.active || $( event.target ).closest( ".ui-menu-item" );
    var ui = { item: this.active };
    if ( !this.active.has( ".ui-menu" ).length ) {
      this.collapseAll( event, true );
    }
    this._trigger( "select", event, ui );
  }
});

}( jQuery ));
/*
 * jQuery Iframe Transport Plugin 1.8.3
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global define, require, window, document */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(require('jquery'));
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Helper variable to create unique names for the transport iframes:
    var counter = 0;

    // The iframe transport accepts four additional options:
    // options.fileInput: a jQuery collection of file input fields
    // options.paramName: the parameter name for the file form data,
    //  overrides the name property of the file input field(s),
    //  can be a string or an array of strings.
    // options.formData: an array of objects with name and value properties,
    //  equivalent to the return data of .serializeArray(), e.g.:
    //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
    // options.initialIframeSrc: the URL of the initial iframe src,
    //  by default set to "javascript:false;"
    $.ajaxTransport('iframe', function (options) {
        if (options.async) {
            // javascript:false as initial iframe src
            // prevents warning popups on HTTPS in IE6:
            /*jshint scripturl: true */
            var initialIframeSrc = options.initialIframeSrc || 'javascript:false;',
            /*jshint scripturl: false */
                form,
                iframe,
                addParamChar;
            return {
                send: function (_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    form.attr('accept-charset', options.formAcceptCharset);
                    addParamChar = /\?/.test(options.url) ? '&' : '?';
                    // XDomainRequest only supports GET and POST:
                    if (options.type === 'DELETE') {
                        options.url = options.url + addParamChar + '_method=DELETE';
                        options.type = 'POST';
                    } else if (options.type === 'PUT') {
                        options.url = options.url + addParamChar + '_method=PUT';
                        options.type = 'POST';
                    } else if (options.type === 'PATCH') {
                        options.url = options.url + addParamChar + '_method=PATCH';
                        options.type = 'POST';
                    }
                    // IE versions below IE8 cannot set the name property of
                    // elements that have already been added to the DOM,
                    // so we set the name along with the iframe HTML markup:
                    counter += 1;
                    iframe = $(
                        '<iframe src="' + initialIframeSrc +
                            '" name="iframe-transport-' + counter + '"></iframe>'
                    ).bind('load', function () {
                        var fileInputClones,
                            paramNames = $.isArray(options.paramName) ?
                                    options.paramName : [options.paramName];
                        iframe
                            .unbind('load')
                            .bind('load', function () {
                                var response;
                                // Wrap in a try/catch block to catch exceptions thrown
                                // when trying to access cross-domain iframe contents:
                                try {
                                    response = iframe.contents();
                                    // Google Chrome and Firefox do not throw an
                                    // exception when calling iframe.contents() on
                                    // cross-domain requests, so we unify the response:
                                    if (!response.length || !response[0].firstChild) {
                                        throw new Error();
                                    }
                                } catch (e) {
                                    response = undefined;
                                }
                                // The complete callback returns the
                                // iframe content document as response object:
                                completeCallback(
                                    200,
                                    'success',
                                    {'iframe': response}
                                );
                                // Fix for IE endless progress bar activity bug
                                // (happens on form submits to iframe targets):
                                $('<iframe src="' + initialIframeSrc + '"></iframe>')
                                    .appendTo(form);
                                window.setTimeout(function () {
                                    // Removing the form in a setTimeout call
                                    // allows Chrome's developer tools to display
                                    // the response result
                                    form.remove();
                                }, 0);
                            });
                        form
                            .prop('target', iframe.prop('name'))
                            .prop('action', options.url)
                            .prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function (index, field) {
                                $('<input type="hidden"/>')
                                    .prop('name', field.name)
                                    .val(field.value)
                                    .appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length &&
                                options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            // Insert a clone for each file input field:
                            options.fileInput.after(function (index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function (index) {
                                    $(this).prop(
                                        'name',
                                        paramNames[index] || options.paramName
                                    );
                                });
                            }
                            // Appending the file input fields to the hidden form
                            // removes them from their original location:
                            form
                                .append(options.fileInput)
                                .prop('enctype', 'multipart/form-data')
                                // enctype must be set as encoding for IE:
                                .prop('encoding', 'multipart/form-data');
                            // Remove the HTML5 form attribute from the input(s):
                            options.fileInput.removeAttr('form');
                        }
                        form.submit();
                        // Insert the file input fields at their original location
                        // by replacing the clones with the originals:
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function (index, input) {
                                var clone = $(fileInputClones[index]);
                                // Restore the original name and form properties:
                                $(input)
                                    .prop('name', clone.prop('name'))
                                    .attr('form', clone.attr('form'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function () {
                    if (iframe) {
                        // javascript:false as iframe src aborts the request
                        // and prevents warning popups on HTTPS in IE6.
                        // concat is used to avoid the "Script URL" JSLint error:
                        iframe
                            .unbind('load')
                            .prop('src', initialIframeSrc);
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });

    // The iframe transport returns the iframe content document as response.
    // The following adds converters from iframe to text, json, html, xml
    // and script.
    // Please note that the Content-Type for JSON responses has to be text/plain
    // or text/html, if the browser doesn't include application/json in the
    // Accept header, else IE will show a download dialog.
    // The Content-Type for XML responses on the other hand has to be always
    // application/xml or text/xml, so IE properly parses the XML response.
    // See also
    // https://github.com/blueimp/jQuery-File-Upload/wiki/Setup#content-type-negotiation
    $.ajaxSetup({
        converters: {
            'iframe text': function (iframe) {
                return iframe && $(iframe[0].body).text();
            },
            'iframe json': function (iframe) {
                return iframe && $.parseJSON($(iframe[0].body).text());
            },
            'iframe html': function (iframe) {
                return iframe && $(iframe[0].body).html();
            },
            'iframe xml': function (iframe) {
                var xmlDoc = iframe && iframe[0];
                return xmlDoc && $.isXMLDoc(xmlDoc) ? xmlDoc :
                        $.parseXML((xmlDoc.XMLDocument && xmlDoc.XMLDocument.xml) ||
                            $(xmlDoc.body).html());
            },
            'iframe script': function (iframe) {
                return iframe && $.globalEval($(iframe[0].body).text());
            }
        }
    });

}));
/*
 * jQuery File Upload Plugin 5.42.3
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global define, require, window, document, location, Blob, FormData */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery.ui.widget'
        ], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(
            require('jquery'),
            require('./vendor/jquery.ui.widget')
        );
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Detect file input support, based on
    // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
    $.support.fileInput = !(new RegExp(
        // Handle devices which give false positives for the feature detection:
        '(Android (1\\.[0156]|2\\.[01]))' +
            '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' +
            '|(w(eb)?OSBrowser)|(webOS)' +
            '|(Kindle/(1\\.0|2\\.[05]|3\\.0))'
    ).test(window.navigator.userAgent) ||
        // Feature detection for all other devices:
        $('<input type="file">').prop('disabled'));

    // The FileReader API is not actually used, but works as feature detection,
    // as some Safari versions (5?) support XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads.
    // window.XMLHttpRequestUpload is not available on IE10, so we check for
    // window.ProgressEvent instead to detect XHR2 file upload capability:
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // Detect support for Blob slicing (required for chunked uploads):
    $.support.blobSlice = window.Blob && (Blob.prototype.slice ||
        Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

    // Helper function to create drag handlers for dragover/dragenter/dragleave:
    function getDragHandler(type) {
        var isDragOver = type === 'dragover';
        return function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var dataTransfer = e.dataTransfer;
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 &&
                    this._trigger(
                        type,
                        $.Event(type, {delegatedEvent: e})
                    ) !== false) {
                e.preventDefault();
                if (isDragOver) {
                    dataTransfer.dropEffect = 'copy';
                }
            }
        };
    }

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default undefined.
            // Set to a DOM node or jQuery object to enable file pasting:
            pasteZone: undefined,
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // The following option limits the number of files uploaded with one
            // XHR request to keep the request size under or equal to the defined
            // limit in bytes:
            limitMultiFileUploadSize: undefined,
            // Multipart file uploads add a number of bytes to each uploaded file,
            // therefore the following option adds an overhead for each file used
            // in the limitMultiFileUploadSize configuration:
            limitMultiFileUploadSizeOverhead: 512,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,
            // By default, uploads are started automatically when adding files:
            autoUpload: true,

            // Error and info messages:
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },

            // Translation function, gets the message key to be translated
            // and an object with context specific data as arguments:
            i18n: function (message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function (key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uploads, else
            // once for each file selection.
            //
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows you to override plugin options as well as define ajax settings.
            //
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            //
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }
                if (data.autoUpload || (data.autoUpload !== false &&
                        $(this).fileupload('option', 'autoUpload'))) {
                    data.process().done(function () {
                        data.submit();
                    });
                }
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false,
            timeout: 0
        },

        // A list of options that require reinitializing event listeners and/or
        // special initialization code:
        _specialOptions: [
            'fileInput',
            'dropZone',
            'pasteZone',
            'multipart',
            'forceIframeTransport'
        ],

        _blobSlice: $.support.blobSlice && function () {
            var slice = this.slice || this.webkitSlice || this.mozSlice;
            return slice.apply(this, arguments);
        },

        _BitrateTimer: function () {
            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if ($.type(options.formData) === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _initProgressObject: function (obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },

        _initResponseObject: function (obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(
                    e.loaded / e.total * (data.chunkSize || data._progress.total)
                ) + (data.uploadedBytes || 0);
                // Add the difference from the previously loaded state
                // to the global loaded counter:
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(
                    now,
                    this._progress.loaded,
                    data.bitrateInterval
                );
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger(
                    'progress',
                    $.Event('progress', {delegatedEvent: e}),
                    data
                );
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger(
                    'progressall',
                    $.Event('progressall', {delegatedEvent: e}),
                    this._progress
                );
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _isInstanceOf: function (type, obj) {
            // Cross-frame instanceof check
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },

        _initXHRData: function (options) {
            var that = this,
                formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = $.type(options.paramName) === 'array' ?
                    options.paramName[0] : options.paramName;
            options.headers = $.extend({}, options.headers);
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.name) + '"';
            }
            if (!multipart) {
                options.contentType = file.type || 'application/octet-stream';
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: ($.type(options.paramName) === 'array' &&
                                    options.paramName[index]) || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(paramName, options.blob, file.name);
                    } else {
                        $.each(options.files, function (index, file) {
                            // This check allows the tests to run with
                            // dummy objects:
                            if (that._isInstanceOf('File', file) ||
                                    that._isInstanceOf('Blob', file)) {
                                formData.append(
                                    ($.type(options.paramName) === 'array' &&
                                        options.paramName[index]) || paramName,
                                    file,
                                    file.uploadName || file.name
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && targetHost && targetHost !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },

        _getParamName: function (options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type ||
                ($.type(options.form.prop('method')) === 'string' &&
                    options.form.prop('method')) || ''
                ).toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function (deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Adds convenience methods to the data callback argument:
        _addConvenienceMethods: function (e, data) {
            var that = this,
                getPromise = function (args) {
                    return $.Deferred().resolveWith(that, args).promise();
                };
            data.process = function (resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue =
                        (this._processQueue || getPromise([this])).pipe(
                            function () {
                                if (data.errorThrown) {
                                    return $.Deferred()
                                        .rejectWith(that, [data]).promise();
                                }
                                return getPromise(arguments);
                            }
                        ).pipe(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise([this]);
            };
            data.submit = function () {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR =
                        (that._trigger(
                            'submit',
                            $.Event('submit', {delegatedEvent: e}),
                            this
                        ) !== false) && that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function () {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                this.errorThrown = 'abort';
                that._trigger('fail', null, this);
                return that._getXHRPromise(false);
            };
            data.state = function () {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.processing = function () {
                return !this.jqXHR && this._processQueue && that
                    ._getDeferredState(this._processQueue) === 'pending';
            };
            data.progress = function () {
                return this._progress;
            };
            data.response = function () {
                return this._response;
            };
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function (jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 &&
                    parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            options.uploadedBytes = options.uploadedBytes || 0;
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes,
                mcs = options.maxChunkSize || fs,
                slice = this._blobSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // The chunk upload method:
            upload = function () {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(
                    file,
                    ub,
                    ub + mcs,
                    file.type
                );
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
                        that._getXHRPromise(false, o.context))
                    .done(function (result, textStatus, jqXHR) {
                        ub = that._getUploadedBytes(jqXHR) ||
                            (ub + o.chunkSize);
                        // Create a progress event if no final progress event
                        // with loaded equaling total has been triggered
                        // for this chunk:
                        if (currentLoaded + o.chunkSize - o._progress.loaded) {
                            that._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: ub - o.uploadedBytes,
                                total: ub - o.uploadedBytes
                            }), o);
                        }
                        options.uploadedBytes = o.uploadedBytes = ub;
                        o.result = result;
                        o.textStatus = textStatus;
                        o.jqXHR = jqXHR;
                        that._trigger('chunkdone', null, o);
                        that._trigger('chunkalways', null, o);
                        if (ub < fs) {
                            // File upload not yet complete,
                            // continue with the next chunk:
                            upload();
                        } else {
                            dfd.resolveWith(
                                o.context,
                                [result, textStatus, jqXHR]
                            );
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        o.jqXHR = jqXHR;
                        o.textStatus = textStatus;
                        o.errorThrown = errorThrown;
                        that._trigger('chunkfail', null, o);
                        that._trigger('chunkalways', null, o);
                        dfd.rejectWith(
                            o.context,
                            [jqXHR, textStatus, errorThrown]
                        );
                    });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
                // Reset the global progress values:
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            // Make sure the container objects for the .response() and
            // .progress() methods on the data object are available
            // and reset to their initial state:
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            // Initialize the global progress values:
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                // Create a progress event if no final progress event
                // with loaded equaling total has been triggered:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._trigger('always', null, options);
        },

        _onSend: function (e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function () {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        ((aborted || that._trigger(
                            'send',
                            $.Event('send', {delegatedEvent: e}),
                            options
                        ) === false) &&
                        that._getXHRPromise(false, options.context, aborted)) ||
                        that._chunkedUpload(options) || $.ajax(options)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        that._sending -= 1;
                        that._active -= 1;
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                        if (that._active === 0) {
                            // The stop callback is triggered when all uploads have
                            // been completed, equivalent to the global ajaxStop event:
                            that._trigger('stop');
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.pipe(send);
                } else {
                    this._sequence = this._sequence.pipe(send, send);
                    pipe = this._sequence;
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                files = data.files,
                filesLength = files.length,
                limit = options.limitMultiFileUploads,
                limitSize = options.limitMultiFileUploadSize,
                overhead = options.limitMultiFileUploadSizeOverhead,
                batchSize = 0,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i,
                j = 0;
            if (limitSize && (!filesLength || files[0].size === undefined)) {
                limitSize = undefined;
            }
            if (!(options.singleFileUploads || limit || limitSize) ||
                    !this._isXHRUpload(options)) {
                fileSet = [files];
                paramNameSet = [paramName];
            } else if (!(options.singleFileUploads || limitSize) && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i += limit) {
                    fileSet.push(files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else if (!options.singleFileUploads && limitSize) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i = i + 1) {
                    batchSize += files[i].size + overhead;
                    if (i + 1 === filesLength ||
                            ((batchSize + files[i + 1].size + overhead) > limitSize) ||
                            (limit && i + 1 - j >= limit)) {
                        fileSet.push(files.slice(j, i + 1));
                        paramNameSlice = paramName.slice(j, i + 1);
                        if (!paramNameSlice.length) {
                            paramNameSlice = paramName;
                        }
                        paramNameSet.push(paramNameSlice);
                        j = i + 1;
                        batchSize = 0;
                    }
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = files;
            $.each(fileSet || files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger(
                    'add',
                    $.Event('add', {delegatedEvent: e}),
                    newData
                );
                return result;
            });
            return result;
        },

        _replaceFileInput: function (data) {
            var input = data.fileInput,
                inputClone = input.clone(true);
            // Add a reference for the new cloned file input to the data argument:
            data.fileInputClone = inputClone;
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function (entry, path) {
            var that = this,
                dfd = $.Deferred(),
                errorHandler = function (e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    // Since $.when returns immediately if one
                    // Deferred is rejected, we use resolve instead.
                    // This allows valid files and invalid items
                    // to be returned together in one set:
                    dfd.resolve([e]);
                },
                successHandler = function (entries) {
                    that._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).done(function (files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                },
                readEntries = function () {
                    dirReader.readEntries(function (results) {
                        if (!results.length) {
                            successHandler(entries);
                        } else {
                            entries = entries.concat(results);
                            readEntries();
                        }
                    }, errorHandler);
                },
                dirReader, entries = [];
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                readEntries();
            } else {
                // Return an empy list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function (entries, path) {
            var that = this;
            return $.when.apply(
                $,
                $.map(entries, function (entry) {
                    return that._handleFileTreeEntry(entry, path);
                })
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _getDroppedFiles: function (dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry ||
                    items[0].getAsEntry)) {
                return this._handleFileTreeEntries(
                    $.map(items, function (item) {
                        var entry;
                        if (item.webkitGetAsEntry) {
                            entry = item.webkitGetAsEntry();
                            if (entry) {
                                // Workaround for Chrome bug #149735:
                                entry._file = item.getAsFile();
                            }
                            return entry;
                        }
                        return item.getAsEntry();
                    })
                );
            }
            return $.Deferred().resolve(
                $.makeArray(dataTransfer.files)
            ).promise();
        },

        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') ||
                    fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function (fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _onChange: function (e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data);
                }
                if (that._trigger(
                        'change',
                        $.Event('change', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function (e) {
            var items = e.originalEvent && e.originalEvent.clipboardData &&
                    e.originalEvent.clipboardData.items,
                data = {files: []};
            if (items && items.length) {
                $.each(items, function (index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger(
                        'paste',
                        $.Event('paste', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    this._onAdd(e, data);
                }
            }
        },

        _onDrop: function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var that = this,
                dataTransfer = e.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function (files) {
                    data.files = files;
                    if (that._trigger(
                            'drop',
                            $.Event('drop', {delegatedEvent: e}),
                            data
                        ) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },

        _onDragOver: getDragHandler('dragover'),

        _onDragEnter: getDragHandler('dragenter'),

        _onDragLeave: getDragHandler('dragleave'),

        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    // event.preventDefault() on dragenter is required for IE10+:
                    dragenter: this._onDragEnter,
                    // dragleave is not required, but added for completeness:
                    dragleave: this._onDragLeave
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            if ($.support.fileInput) {
                this._on(this.options.fileInput, {
                    change: this._onChange
                });
            }
        },

        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _setOption: function (key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ?
                        this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _getRegExp: function (str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },

        _isRegExpOption: function (key, value) {
            return key !== 'url' && $.type(value) === 'string' &&
                /^\/.*\/[igm]{0,3}$/.test(value);
        },

        _initDataAttributes: function () {
            var that = this,
                options = this.options,
                data = this.element.data();
            // Initialize options set via HTML5 data-attributes:
            $.each(
                this.element[0].attributes,
                function (index, attr) {
                    var key = attr.name.toLowerCase(),
                        value;
                    if (/^data-/.test(key)) {
                        // Convert hyphen-ated key to camelCase:
                        key = key.slice(5).replace(/-[a-z]/g, function (str) {
                            return str.charAt(1).toUpperCase();
                        });
                        value = data[key];
                        if (that._isRegExpOption(key, value)) {
                            value = that._getRegExp(value);
                        }
                        options[key] = value;
                    }
                }
            );
        },

        _create: function () {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },

        // This method is exposed to the widget API and allows to query
        // the number of active uploads:
        active: function () {
            return this._active;
        },

        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function () {
            return this._progress;
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(
                        function (files) {
                            if (aborted) {
                                return;
                            }
                            if (!files.length) {
                                dfd.reject();
                                return;
                            }
                            data.files = files;
                            jqXHR = that._onSend(null, data);
                            jqXHR.then(
                                function (result, textStatus, jqXHR) {
                                    dfd.resolve(result, textStatus, jqXHR);
                                },
                                function (jqXHR, textStatus, errorThrown) {
                                    dfd.reject(jqXHR, textStatus, errorThrown);
                                }
                            );
                        }
                    );
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));
/*! URI.js v1.12.1 http://medialize.github.com/URI.js/ */
/* build contains: URI.js */
(function(p,r){"object"===typeof exports?module.exports=r(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],r):p.URI=r(p.punycode,p.IPv6,p.SecondLevelDomains,p)})(this,function(p,r,v,w){function e(a,b){if(!(this instanceof e))return new e(a,b);void 0===a&&(a="undefined"!==typeof location?location.href+"":"");this.href(a);return void 0!==b?this.absoluteTo(b):this}function s(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,
"\\$1")}function y(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function l(a){return"Array"===y(a)}function x(a,b){var c,e;if(l(b)){c=0;for(e=b.length;c<e;c++)if(!x(a,b[c]))return!1;return!0}var f=y(b);c=0;for(e=a.length;c<e;c++)if("RegExp"===f){if("string"===typeof a[c]&&a[c].match(b))return!0}else if(a[c]===b)return!0;return!1}function A(a,b){if(!l(a)||!l(b)||a.length!==b.length)return!1;a.sort();b.sort();for(var c=0,e=a.length;c<e;c++)if(a[c]!==b[c])return!1;
return!0}function B(a){return escape(a)}function z(a){return encodeURIComponent(a).replace(/[!'()*]/g,B).replace(/\*/g,"%2A")}var C=w&&w.URI;e.version="1.12.1";var d=e.prototype,t=Object.prototype.hasOwnProperty;e._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:e.duplicateQueryParameters,escapeQuerySpace:e.escapeQuerySpace}};e.duplicateQueryParameters=!1;e.escapeQuerySpace=!0;e.protocol_expression=
/^[a-z][a-z0-9.+-]*$/i;e.idn_expression=/[^a-z0-9\.-]/i;e.punycode_expression=/(xn--)/i;e.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;e.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
e.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;e.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/};e.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"};e.invalid_hostname_characters=
/[^a-zA-Z0-9\.-]/;e.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src"};e.getDomAttribute=function(a){if(a&&a.nodeName){var b=a.nodeName.toLowerCase();return"input"===b&&"image"!==a.type?void 0:e.domAttributes[b]}};e.encode=z;e.decode=decodeURIComponent;e.iso8859=function(){e.encode=escape;e.decode=unescape};e.unicode=function(){e.encode=z;e.decode=decodeURIComponent};e.characters=
{pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}}};e.encodeQuery=
function(a,b){var c=e.encode(a+"");void 0===b&&(b=e.escapeQuerySpace);return b?c.replace(/%20/g,"+"):c};e.decodeQuery=function(a,b){a+="";void 0===b&&(b=e.escapeQuerySpace);try{return e.decode(b?a.replace(/\+/g,"%20"):a)}catch(c){return a}};e.recodePath=function(a){a=(a+"").split("/");for(var b=0,c=a.length;b<c;b++)a[b]=e.encodePathSegment(e.decode(a[b]));return a.join("/")};e.decodePath=function(a){a=(a+"").split("/");for(var b=0,c=a.length;b<c;b++)a[b]=e.decodePathSegment(a[b]);return a.join("/")};
var q={encode:"encode",decode:"decode"},m,u=function(a,b){return function(c){return e[b](c+"").replace(e.characters[a][b].expression,function(c){return e.characters[a][b].map[c]})}};for(m in q)e[m+"PathSegment"]=u("pathname",q[m]);e.encodeReserved=u("reserved","encode");e.parse=function(a,b){var c;b||(b={});c=a.indexOf("#");-1<c&&(b.fragment=a.substring(c+1)||null,a=a.substring(0,c));c=a.indexOf("?");-1<c&&(b.query=a.substring(c+1)||null,a=a.substring(0,c));"//"===a.substring(0,2)?(b.protocol=null,
a=a.substring(2),a=e.parseAuthority(a,b)):(c=a.indexOf(":"),-1<c&&(b.protocol=a.substring(0,c)||null,b.protocol&&!b.protocol.match(e.protocol_expression)?b.protocol=void 0:"file"===b.protocol?a=a.substring(c+3):"//"===a.substring(c+1,c+3)?(a=a.substring(c+3),a=e.parseAuthority(a,b)):(a=a.substring(c+1),b.urn=!0)));b.path=a;return b};e.parseHost=function(a,b){var c=a.indexOf("/"),e;-1===c&&(c=a.length);"["===a.charAt(0)?(e=a.indexOf("]"),b.hostname=a.substring(1,e)||null,b.port=a.substring(e+2,c)||
null):a.indexOf(":")!==a.lastIndexOf(":")?(b.hostname=a.substring(0,c)||null,b.port=null):(e=a.substring(0,c).split(":"),b.hostname=e[0]||null,b.port=e[1]||null);b.hostname&&"/"!==a.substring(c).charAt(0)&&(c++,a="/"+a);return a.substring(c)||"/"};e.parseAuthority=function(a,b){a=e.parseUserinfo(a,b);return e.parseHost(a,b)};e.parseUserinfo=function(a,b){var c=a.indexOf("/"),g=-1<c?a.lastIndexOf("@",c):a.indexOf("@");-1<g&&(-1===c||g<c)?(c=a.substring(0,g).split(":"),b.username=c[0]?e.decode(c[0]):
null,c.shift(),b.password=c[0]?e.decode(c.join(":")):null,a=a.substring(g+1)):(b.username=null,b.password=null);return a};e.parseQuery=function(a,b){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var c={},g=a.split("&"),f=g.length,d,h,n=0;n<f;n++)d=g[n].split("="),h=e.decodeQuery(d.shift(),b),d=d.length?e.decodeQuery(d.join("="),b):null,c[h]?("string"===typeof c[h]&&(c[h]=[c[h]]),c[h].push(d)):c[h]=d;return c};e.build=function(a){var b="";a.protocol&&(b+=a.protocol+
":");a.urn||!b&&!a.hostname||(b+="//");b+=e.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&"string"===typeof a.hostname&&(b+="/"),b+=a.path);"string"===typeof a.query&&a.query&&(b+="?"+a.query);"string"===typeof a.fragment&&a.fragment&&(b+="#"+a.fragment);return b};e.buildHost=function(a){var b="";if(a.hostname)e.ip6_expression.test(a.hostname)?b=a.port?b+("["+a.hostname+"]:"+a.port):b+a.hostname:(b+=a.hostname,a.port&&(b+=":"+a.port));else return"";return b};e.buildAuthority=
function(a){return e.buildUserinfo(a)+e.buildHost(a)};e.buildUserinfo=function(a){var b="";a.username&&(b+=e.encode(a.username),a.password&&(b+=":"+e.encode(a.password)),b+="@");return b};e.buildQuery=function(a,b,c){var g="",f,d,h,n;for(d in a)if(t.call(a,d)&&d)if(l(a[d]))for(f={},h=0,n=a[d].length;h<n;h++)void 0!==a[d][h]&&void 0===f[a[d][h]+""]&&(g+="&"+e.buildQueryParameter(d,a[d][h],c),!0!==b&&(f[a[d][h]+""]=!0));else void 0!==a[d]&&(g+="&"+e.buildQueryParameter(d,a[d],c));return g.substring(1)};
e.buildQueryParameter=function(a,b,c){return e.encodeQuery(a,c)+(null!==b?"="+e.encodeQuery(b,c):"")};e.addQuery=function(a,b,c){if("object"===typeof b)for(var g in b)t.call(b,g)&&e.addQuery(a,g,b[g]);else if("string"===typeof b)void 0===a[b]?a[b]=c:("string"===typeof a[b]&&(a[b]=[a[b]]),l(c)||(c=[c]),a[b]=a[b].concat(c));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};e.removeQuery=function(a,b,c){var g;if(l(b))for(c=0,g=b.length;c<g;c++)a[b[c]]=void 0;
else if("object"===typeof b)for(g in b)t.call(b,g)&&e.removeQuery(a,g,b[g]);else if("string"===typeof b)if(void 0!==c)if(a[b]===c)a[b]=void 0;else{if(l(a[b])){g=a[b];var f={},d,h;if(l(c))for(d=0,h=c.length;d<h;d++)f[c[d]]=!0;else f[c]=!0;d=0;for(h=g.length;d<h;d++)void 0!==f[g[d]]&&(g.splice(d,1),h--,d--);a[b]=g}}else a[b]=void 0;else throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");};e.hasQuery=function(a,b,c,g){if("object"===typeof b){for(var d in b)if(t.call(b,
d)&&!e.hasQuery(a,d,b[d]))return!1;return!0}if("string"!==typeof b)throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");switch(y(c)){case "Undefined":return b in a;case "Boolean":return a=Boolean(l(a[b])?a[b].length:a[b]),c===a;case "Function":return!!c(a[b],b,a);case "Array":return l(a[b])?(g?x:A)(a[b],c):!1;case "RegExp":return l(a[b])?g?x(a[b],c):!1:Boolean(a[b]&&a[b].match(c));case "Number":c=String(c);case "String":return l(a[b])?g?x(a[b],c):!1:a[b]===c;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");
}};e.commonPath=function(a,b){var c=Math.min(a.length,b.length),e;for(e=0;e<c;e++)if(a.charAt(e)!==b.charAt(e)){e--;break}if(1>e)return a.charAt(0)===b.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(e)||"/"!==b.charAt(e))e=a.substring(0,e).lastIndexOf("/");return a.substring(0,e+1)};e.withinString=function(a,b,c){c||(c={});var g=c.start||e.findUri.start,d=c.end||e.findUri.end,k=c.trim||e.findUri.trim,h=/[a-z0-9-]=["']?$/i;for(g.lastIndex=0;;){var n=g.exec(a);if(!n)break;n=n.index;if(c.ignoreHtml){var l=
a.slice(Math.max(n-3,0),n);if(l&&h.test(l))continue}var l=n+a.slice(n).search(d),m=a.slice(n,l).replace(k,"");c.ignore&&c.ignore.test(m)||(l=n+m.length,m=b(m,n,l,a),a=a.slice(0,n)+m+a.slice(l),g.lastIndex=n+m.length)}g.lastIndex=0;return a};e.ensureValidHostname=function(a){if(a.match(e.invalid_hostname_characters)){if(!p)throw new TypeError("Hostname '"+a+"' contains characters other than [A-Z0-9.-] and Punycode.js is not available");if(p.toASCII(a).match(e.invalid_hostname_characters))throw new TypeError("Hostname '"+
a+"' contains characters other than [A-Z0-9.-]");}};e.noConflict=function(a){if(a)return a={URI:this.noConflict()},URITemplate&&"function"==typeof URITemplate.noConflict&&(a.URITemplate=URITemplate.noConflict()),r&&"function"==typeof r.noConflict&&(a.IPv6=r.noConflict()),SecondLevelDomains&&"function"==typeof SecondLevelDomains.noConflict&&(a.SecondLevelDomains=SecondLevelDomains.noConflict()),a;w.URI===this&&(w.URI=C);return this};d.build=function(a){if(!0===a)this._deferred_build=!0;else if(void 0===
a||this._deferred_build)this._string=e.build(this._parts),this._deferred_build=!1;return this};d.clone=function(){return new e(this)};d.valueOf=d.toString=function(){return this.build(!1)._string};q={protocol:"protocol",username:"username",password:"password",hostname:"hostname",port:"port"};u=function(a){return function(b,c){if(void 0===b)return this._parts[a]||"";this._parts[a]=b||null;this.build(!c);return this}};for(m in q)d[m]=u(q[m]);q={query:"?",fragment:"#"};u=function(a,b){return function(c,
e){if(void 0===c)return this._parts[a]||"";null!==c&&(c+="",c.charAt(0)===b&&(c=c.substring(1)));this._parts[a]=c;this.build(!e);return this}};for(m in q)d[m]=u(m,q[m]);q={search:["?","query"],hash:["#","fragment"]};u=function(a,b){return function(c,e){var d=this[a](c,e);return"string"===typeof d&&d.length?b+d:d}};for(m in q)d[m]=u(q[m][1],q[m][0]);d.pathname=function(a,b){if(void 0===a||!0===a){var c=this._parts.path||(this._parts.hostname?"/":"");return a?e.decodePath(c):c}this._parts.path=a?e.recodePath(a):
"/";this.build(!b);return this};d.path=d.pathname;d.href=function(a,b){var c;if(void 0===a)return this.toString();this._string="";this._parts=e._parts();var g=a instanceof e,d="object"===typeof a&&(a.hostname||a.path||a.pathname);a.nodeName&&(d=e.getDomAttribute(a),a=a[d]||"",d=!1);!g&&d&&void 0!==a.pathname&&(a=a.toString());if("string"===typeof a)this._parts=e.parse(a,this._parts);else if(g||d)for(c in g=g?a._parts:a,g)t.call(this._parts,c)&&(this._parts[c]=g[c]);else throw new TypeError("invalid input");
this.build(!b);return this};d.is=function(a){var b=!1,c=!1,d=!1,f=!1,k=!1,h=!1,l=!1,m=!this._parts.urn;this._parts.hostname&&(m=!1,c=e.ip4_expression.test(this._parts.hostname),d=e.ip6_expression.test(this._parts.hostname),b=c||d,k=(f=!b)&&v&&v.has(this._parts.hostname),h=f&&e.idn_expression.test(this._parts.hostname),l=f&&e.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return m;case "absolute":return!m;case "domain":case "name":return f;case "sld":return k;
case "ip":return b;case "ip4":case "ipv4":case "inet4":return c;case "ip6":case "ipv6":case "inet6":return d;case "idn":return h;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return l}return null};var D=d.protocol,E=d.port,F=d.hostname;d.protocol=function(a,b){if(void 0!==a&&a&&(a=a.replace(/:(\/\/)?$/,""),!a.match(e.protocol_expression)))throw new TypeError("Protocol '"+a+"' contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return D.call(this,
a,b)};d.scheme=d.protocol;d.port=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError("Port '"+a+"' contains characters other than [0-9]");return E.call(this,a,b)};d.hostname=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var c={};e.parseHost(a,c);a=c.hostname}return F.call(this,a,b)};d.host=function(a,b){if(this._parts.urn)return void 0===a?"":this;
if(void 0===a)return this._parts.hostname?e.buildHost(this._parts):"";e.parseHost(a,this._parts);this.build(!b);return this};d.authority=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?e.buildAuthority(this._parts):"";e.parseAuthority(a,this._parts);this.build(!b);return this};d.userinfo=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.username)return"";var c=e.buildUserinfo(this._parts);return c.substring(0,
c.length-1)}"@"!==a[a.length-1]&&(a+="@");e.parseUserinfo(a,this._parts);this.build(!b);return this};d.resource=function(a,b){var c;if(void 0===a)return this.path()+this.search()+this.hash();c=e.parse(a);this._parts.path=c.path;this._parts.query=c.query;this._parts.fragment=c.fragment;this.build(!b);return this};d.subdomain=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.length-this.domain().length-
1;return this._parts.hostname.substring(0,c)||""}c=this._parts.hostname.length-this.domain().length;c=this._parts.hostname.substring(0,c);c=RegExp("^"+s(c));a&&"."!==a.charAt(a.length-1)&&(a+=".");a&&e.ensureValidHostname(a);this._parts.hostname=this._parts.hostname.replace(c,a);this.build(!b);return this};d.domain=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.match(/\./g);
if(c&&2>c.length)return this._parts.hostname;c=this._parts.hostname.length-this.tld(b).length-1;c=this._parts.hostname.lastIndexOf(".",c-1)+1;return this._parts.hostname.substring(c)||""}if(!a)throw new TypeError("cannot set domain empty");e.ensureValidHostname(a);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(c=RegExp(s(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a));this.build(!b);return this};d.tld=function(a,b){if(this._parts.urn)return void 0===a?"":
this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.lastIndexOf("."),c=this._parts.hostname.substring(c+1);return!0!==b&&v&&v.list[c.toLowerCase()]?v.get(this._parts.hostname)||c:c}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(v&&v.is(a))c=RegExp(s(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a);else throw new TypeError("TLD '"+a+"' contains characters other than [A-Z0-9]");else{if(!this._parts.hostname||
this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");c=RegExp(s(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(c,a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};d.directory=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var c=this._parts.path.length-this.filename().length-1,c=this._parts.path.substring(0,
c)||(this._parts.hostname?"/":"");return a?e.decodePath(c):c}c=this._parts.path.length-this.filename().length;c=this._parts.path.substring(0,c);c=RegExp("^"+s(c));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=e.recodePath(a);this._parts.path=this._parts.path.replace(c,a);this.build(!b);return this};d.filename=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";
var c=this._parts.path.lastIndexOf("/"),c=this._parts.path.substring(c+1);return a?e.decodePathSegment(c):c}c=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(c=!0);var d=RegExp(s(this.filename())+"$");a=e.recodePath(a);this._parts.path=this._parts.path.replace(d,a);c?this.normalizePath(b):this.build(!b);return this};d.suffix=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this.filename(),d=c.lastIndexOf(".");
if(-1===d)return"";c=c.substring(d+1);c=/^[a-z0-9%]+$/i.test(c)?c:"";return a?e.decodePathSegment(c):c}"."===a.charAt(0)&&(a=a.substring(1));if(c=this.suffix())d=a?RegExp(s(c)+"$"):RegExp(s("."+c)+"$");else{if(!a)return this;this._parts.path+="."+e.recodePath(a)}d&&(a=e.recodePath(a),this._parts.path=this._parts.path.replace(d,a));this.build(!b);return this};d.segment=function(a,b,c){var e=this._parts.urn?":":"/",d=this.path(),k="/"===d.substring(0,1),d=d.split(e);void 0!==a&&"number"!==typeof a&&
(c=b,b=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error("Bad segment '"+a+"', must be 0-based integer");k&&d.shift();0>a&&(a=Math.max(d.length+a,0));if(void 0===b)return void 0===a?d:d[a];if(null===a||void 0===d[a])if(l(b)){d=[];a=0;for(var h=b.length;a<h;a++)if(b[a].length||d.length&&d[d.length-1].length)d.length&&!d[d.length-1].length&&d.pop(),d.push(b[a])}else{if(b||"string"===typeof b)""===d[d.length-1]?d[d.length-1]=b:d.push(b)}else b||"string"===typeof b&&b.length?d[a]=b:d.splice(a,
1);k&&d.unshift("");return this.path(d.join(e),c)};d.segmentCoded=function(a,b,c){var d,f;"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0===b){a=this.segment(a,b,c);if(l(a))for(d=0,f=a.length;d<f;d++)a[d]=e.decode(a[d]);else a=void 0!==a?e.decode(a):void 0;return a}if(l(b))for(d=0,f=b.length;d<f;d++)b[d]=e.decode(b[d]);else b="string"===typeof b?e.encode(b):b;return this.segment(a,b,c)};var G=d.query;d.query=function(a,b){if(!0===a)return e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);
if("function"===typeof a){var c=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace),d=a.call(this,c);this._parts.query=e.buildQuery(d||c,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!b);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=e.buildQuery(a,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!b),this):G.call(this,a,b)};d.setQuery=function(a,b,c){var d=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);
if("object"===typeof a)for(var f in a)t.call(a,f)&&(d[f]=a[f]);else if("string"===typeof a)d[a]=void 0!==b?b:null;else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=e.buildQuery(d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};d.addQuery=function(a,b,c){var d=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);e.addQuery(d,a,void 0===b?null:b);this._parts.query=
e.buildQuery(d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};d.removeQuery=function(a,b,c){var d=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);e.removeQuery(d,a,b);this._parts.query=e.buildQuery(d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};d.hasQuery=function(a,b,c){var d=e.parseQuery(this._parts.query,this._parts.escapeQuerySpace);
return e.hasQuery(d,a,b,c)};d.setSearch=d.setQuery;d.addSearch=d.addQuery;d.removeSearch=d.removeQuery;d.hasSearch=d.hasQuery;d.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};d.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),
this.build(!a));return this};d.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&p?this._parts.hostname=p.toASCII(this._parts.hostname):this.is("IPv6")&&r&&(this._parts.hostname=r.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};d.normalizePort=function(a){"string"===typeof this._parts.protocol&&this._parts.port===e.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};d.normalizePath=
function(a){if(this._parts.urn||!this._parts.path||"/"===this._parts.path)return this;var b,c=this._parts.path,d="",f,k;"/"!==c.charAt(0)&&(b=!0,c="/"+c);c=c.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");b&&(d=c.substring(1).match(/^(\.\.\/)+/)||"")&&(d=d[0]);for(;;){f=c.indexOf("/..");if(-1===f)break;else if(0===f){c=c.substring(3);continue}k=c.substring(0,f).lastIndexOf("/");-1===k&&(k=f);c=c.substring(0,k)+c.substring(f+3)}b&&this.is("relative")&&(c=d+c.substring(1));c=e.recodePath(c);
this._parts.path=c;this.build(!a);return this};d.normalizePathname=d.normalizePath;d.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(e.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!a));return this};d.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};d.normalizeSearch=d.normalizeQuery;d.normalizeHash=d.normalizeFragment;d.iso8859=function(){var a=
e.encode,b=e.decode;e.encode=escape;e.decode=decodeURIComponent;this.normalize();e.encode=a;e.decode=b;return this};d.unicode=function(){var a=e.encode,b=e.decode;e.encode=z;e.decode=unescape;this.normalize();e.encode=a;e.decode=b;return this};d.readable=function(){var a=this.clone();a.username("").password("").normalize();var b="";a._parts.protocol&&(b+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&p?(b+=p.toUnicode(a._parts.hostname),a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());
a._parts.hostname&&a._parts.path&&"/"!==a._parts.path.charAt(0)&&(b+="/");b+=a.path(!0);if(a._parts.query){for(var c="",d=0,f=a._parts.query.split("&"),k=f.length;d<k;d++){var h=(f[d]||"").split("="),c=c+("&"+e.decodeQuery(h[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"));void 0!==h[1]&&(c+="="+e.decodeQuery(h[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}b+="?"+c.substring(1)}return b+=e.decodeQuery(a.hash(),!0)};d.absoluteTo=function(a){var b=this.clone(),c=["protocol","username",
"password","hostname","port"],d,f;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof e||(a=new e(a));b._parts.protocol||(b._parts.protocol=a._parts.protocol);if(this._parts.hostname)return b;for(d=0;f=c[d];d++)b._parts[f]=a._parts[f];b._parts.path?".."===b._parts.path.substring(-2)&&(b._parts.path+="/"):(b._parts.path=a._parts.path,b._parts.query||(b._parts.query=a._parts.query));"/"!==b.path().charAt(0)&&(a=a.directory(),b._parts.path=(a?
a+"/":"")+b._parts.path,b.normalizePath());b.build();return b};d.relativeTo=function(a){var b=this.clone().normalize(),c,d,f,k;if(b._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a=(new e(a)).normalize();c=b._parts;d=a._parts;f=b.path();k=a.path();if("/"!==f.charAt(0))throw Error("URI is already relative");if("/"!==k.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");c.protocol===d.protocol&&(c.protocol=null);if(c.username===
d.username&&c.password===d.password&&null===c.protocol&&null===c.username&&null===c.password&&c.hostname===d.hostname&&c.port===d.port)c.hostname=null,c.port=null;else return b.build();if(f===k)return c.path="",b.build();a=e.commonPath(b.path(),a.path());if(!a)return b.build();d=d.path.substring(a.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");c.path=d+c.path.substring(a.length);return b.build()};d.equals=function(a){var b=this.clone();a=new e(a);var c={},d={},f={},k;b.normalize();a.normalize();
if(b.toString()===a.toString())return!0;c=b.query();d=a.query();b.query("");a.query("");if(b.toString()!==a.toString()||c.length!==d.length)return!1;c=e.parseQuery(c,this._parts.escapeQuerySpace);d=e.parseQuery(d,this._parts.escapeQuerySpace);for(k in c)if(t.call(c,k)){if(!l(c[k])){if(c[k]!==d[k])return!1}else if(!A(c[k],d[k]))return!1;f[k]=!0}for(k in d)if(t.call(d,k)&&!f[k])return!1;return!0};d.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};d.escapeQuerySpace=
function(a){this._parts.escapeQuerySpace=!!a;return this};return e});
if(!DailyKos) var DailyKos = {};

DailyKos.UserNameAutocomplete = (function() {
  var selectedUserID = null;
  var targetInputSelector;

  var keyCode = function(e) {
    return e.keyCode || e.which;
  }
  var keys = { up: 38, down: 40, enter: 13, right: 39, esc: 27 };

  var highlightUser = function(id) {
    selectedUserID = id;
    $('.selected').removeClass('selected');
    $("#" + id).addClass('selected');
  }

  var chooseUser = function(id) {
    $('#user_name').val($('#' + id).text());
    $('#user_name_list').hide();
  }

  var populateUserNameList = function(data) {
    $('#user_name_list').html('');

    _(data).each(function(user) {
      $('#user_name_list').append(
        $('<div>', {
          'class': 'user_name',
          'id': "user_" + user.id,
          "data-id": user.id,
          "data-nickname": user.nickname
        }).html(user.nickname).prepend($('<img>', {
          'src': user.thumb_avatar_location,
          'style': 'width: 22px'
        }))
      );
    });

    $('.user_name').click(function() {
      highlightUser("user_" + $(this).data('id'));
      chooseUser("user_" + $(this).data('id'));
    });

    if ($("#"+selectedUserID).length) {
      $("#"+selectedUserID).addClass('selected');
    } else {
      highlightUser($('#user_name_list div:first').attr('id'));
    }

    $('#userAutocompleteLoading').hide();
    $('#user_name_list').show();
  }

  var getUsers = function(name) {
    if (DailyKos.UserNameAutocomplete.request) DailyKos.UserNameAutocomplete.request.abort();

    DailyKos.UserNameAutocomplete.request = $.ajax({
      url: '/users.json',
      success: populateUserNameList,
      data: {nickname: name}
    });
    $('#userAutocompleteLoading').show();
  };

  var nextPreviousUser = function(ev){
    switch (keyCode(ev)) {
      case keys.down:
        highlightUser($('#' + selectedUserID).next().attr('id') || $("#user_name_list div:first").attr('id'));
        return false;
      break;
      case keys.up:
        highlightUser($('#' + selectedUserID).prev().attr('id') || $("#user_name_list div:last").attr('id'));
        return false;
      break;
      case keys.enter:
        if (selectedUserID){
          chooseUser(selectedUserID);
        }
        return false;
      break;
      case keys.esc:
        $('#userAutocompleteLoading').hide();
      break;
    }
  };

  var hoverUser = function(ev) {
    highlightUser($(this).attr('id'));
  };

  var buildWidget = function() {
    $(targetInputSelector).after(
      $("<div>", {
        'id': 'user_name_list',
        'style': 'display:none'
      })
    );
    $(targetInputSelector).after(
      $('<img>', {
        'id': 'userAutocompleteLoading',
        'src': "/assets/loading-23ad52d66992fe60cc56a641bf5520c98f02185af3077ca0e938993b506e3038.gif",
        'style': 'margin-left: -20px; margin-top: 0px; height: 25px; display: none'
      })
    );
  };

  return {
    init: function(targetID) {
      targetInputSelector = targetID;

      buildWidget();

      var handleChange = function(ev) {
        if ($(ev.target).val().length >= 3 && !(_(_(keys).values()).include(keyCode(ev)))) {
          getUsers($(ev.target).val());
        }
        if ($(ev.target).val().length < 3) {
          $('#userAutocompleteLoading').hide();
        }
        if (keyCode(ev) == keys.esc) $('#user_name_list').hide();
      }

      $('.user_name').on('mouseover', hoverUser);
      $('#user_name.autocomplete').keydown(nextPreviousUser);
      $('#user_name.autocomplete').keyup(handleChange);
      $('#user_name.autocomplete').blur(function(){
        setTimeout(function(){ $('#user_name_list').hide(); }, 100);
      });
    }
  };
})();
//
// As of June 9, 2015
//   It appears that no one is invoking DailyKos.Donations anymore.
//   Clicking "donate" from the front page takes us to Actblue's donation page.
//
// If this is used again:
//   note that the 'logged_in' class has been removed from
//   the body element (server-side rendering) due to caching.
//   'logged_in' will need to be re-implemented via whoami/javascript.
//

if(!DailyKos) var DailyKos = {};

DailyKos.Donations = (function() {
  var setThankYouBackgroundPosition = function() {
    $("body.controller_donations.action_thank_you").css({
      backgroundPosition: "center " + ($("body").height() - $("#legal").height() - 475) + "px"
    });
  };

  var setLoginPanelHeight = function() {
    var top_offset = $("#donation_credit_card_attributes_number").offset();
    $("#login_message").css({
      left: top_offset.left,
      top: top_offset.top,
      height: $("#legal").offset().top - top_offset.top - 5
    });
  };

  return {
    init: function() {
      $(".toggle_edit_recurring_donation").click(function() {
        $("#edit_recurring_donation").toggle();
        $("#cancel_recurring_donation").hide();
        return false;
      });
      $(".toggle_cancel_recurring_donation").click(function() {
        $("#cancel_recurring_donation").toggle();
        $("#edit_recurring_donation").hide();
        return false;
      });

      $("body:not(.logged_in) input[name=donation_type]").click(function() {
        if(this.checked && $(this).val() == "recurring") {
          $("#login_message").show();
        } else {
          $("#login_message").hide();
        }
      });

      $("#new_donation").submit(function() {
        if(!$("body").hasClass("logged_in") && $("#donation_type_recurring").is(":checked")) {
          return false
        }
      });

      if($("body").hasClass("action_thank_you")) {
        setThankYouBackgroundPosition();
      } else {
        setLoginPanelHeight();
      }
    }
  };
}());

$(document).ready(function() {
  if($("body").hasClass("controller_donations")) DailyKos.Donations.init();
});
if(!DailyKos) var DailyKos = {};

DailyKos.Subscriptions = (function() {
  var isLifeTimeSub = function(){
    return $('#subscription_type_lifetime').is(':checked');
  };

  var isGift = function(){
    return $('#gift_subscription').is('.active');
  };

  var buildOrder = function() {
    var description;

    if(isLifeTimeSub()) {
      description = 'Lifetime Subscription for';
    } else if(isGift()) {
      description = 'One Year Gift Subscription for';
    } else {
      description = 'Annual Subscription for';
    }

    return {
      total: 				isLifeTimeSub() ? DailyKos.Subscriptions.LifeSubscriptionCost : DailyKos.Subscriptions.YearSubscriptionCost,
      description: 	description,
      subscriber: 	isGift() ? $('#user_name').val() : DailyKos.currentUser
    };
  }

  var updateCart = function() {
    var cartDetails = buildOrder();

    $('.recipient').html(cartDetails.subscriber);
    $('.total').html(cartDetails.total);
    $('.title_text').html(cartDetails.description);
  };

  var showHideRaido = function() {
    $('.type_radio').hide();

    if(isGift()) {
      $('.one_year_radio').show();
      if(! $('#subscription_type_lifetime').is(':checked')) {
        $('.one_year_radio input').attr('checked', 'checked')
      }
    } else if($('#cant_subscribe_pannel').length == 0) {
      $('.recurring_radio').show();
      if(! $('#subscription_type_lifetime').is(':checked')) {
        $('.recurring_radio input').attr('checked', 'checked')
      }
    }
  }

  var showHideGiftFields = function(){
    if (isGift()) {
      $('#gift_fields').show();
    } else {
      $('#gift_fields').hide();
    }
  };

  var updateDisplay = function(){
    showHideRaido();
    showHideGiftFields();

    if(isGift()){
      $('#for_yourself').css({backgroundImage: "url(/assets/subscriptions/tab_gradient-ae591eee6e4b40f24f4c183f15ae7ff4b6ff154b33a0aaacf2fb4b559a9fb486.png)" });
      $('#gift_subscription').css({backgroundImage: ""});
      $('#choose_subscription').show();
      $("#cant_subscribe_pannel").hide();
      $('#not_logged_in').hide();
      $('.subscription_description.for_self').hide();
      $('.subscription_description.gift_subscription').show();
    } else {
      $('#gift_subscription').css({backgroundImage: "url(/assets/subscriptions/tab_gradient-ae591eee6e4b40f24f4c183f15ae7ff4b6ff154b33a0aaacf2fb4b559a9fb486.png)" });
      $('#for_yourself').css({backgroundImage: ""})
      $('.subscription_description.for_self').show();
      $('.subscription_description.gift_subscription').hide();
      showForYourselfTab();
    }
  };

  var clearErrors = function(){
    $('.user_name_error').remove();
    $('#error_message').hide();
  };

  var initTabs = function(){
    $('.tab').click(function(ev){
      $('.tab').removeClass('active').addClass('inactive');
      $(this).addClass('active').removeClass('inactive');
      $('input[name=is_gift]').val(isGift());
      $('.submit').show();
      clearErrors();
      updateDisplay();
    });

    if($('#is_gift').val() == 'true') {
      $('#gift_subscription').click();
    } else {
      $('#for_yourself').click();
    }

    $('.cart .description').html("");
    updateCart();

    if($('.field_with_errors').parents('#choose_subscription').length > 0) {
      $('#gift_subscription').click();
      $('#user_name').focus();
    } else if($('.field_with_errors, .gateway_errors').parents('#payment').length > 0) {
      flipToCheckout();
    } else {
      if ($.getUrlVar('gift_for')) {
        $('#user_name').val(decodeURI($.getUrlVar('gift_for')).replace(/#.*$/, '').replace('+', ' '));  // remember: Horace%20Boothroyd%20III
        $('#user_name').change();
        $('#gift_subscription').click();
      } else {
        $('#for_yourself').click();
      }
    }
  };

  var showForYourselfTab = function() {
    if(!DailyKos.currentUser) {
      $('#choose_subscription').hide();
      $('#not_logged_in').show();
      $('.submit').hide();
    } else if ($('#cant_subscribe_pannel').length > 0) {
      $('#not_logged_in').hide();
    } else {
      $('#choose_subscription').show();
      $('.recurring_radio').show();
    }

    if($("#cant_subscribe_pannel").length > 0) {
      $('.pannel').hide();
      $("#cant_subscribe_pannel").show();
      $('.submit').hide();
    }
  }

  var flipToCheckout = function(){
    $('#bg_image').hide();
    $('.pannel, #pannels_top').hide();
    $('#payment, .cart, .edit_subscription').show();
    $('.by_check').show();
    $('#new_subscription .submit').val('Subscribe Now');
    $('.user_name_error').remove();
  }

  var initContinueEditButtons = function(){
    // go back should be both the back button
    var showCheckoutAux = function(){
      if(!$('#payment').is(':visible')) {
        flipToCheckout();
        searchExistingSubscriptions();
      }
    };

    var showCheckout = function() {
      updateCart();
      if (isGift() && !DailyKos.Subscriptions.userData) {
        setTimeout(showCheckout, 100);
      } else if (isGift() && !DailyKos.Subscriptions.userData.can_subscribe) {
        var createError = function() {
          $('.user_name_error').remove();
          $('form').prepend("<div class='gateway_errors user_name_error' style='display:none;'> Sorry, you can't give that user a gift subscription </div>");
        };

        if($(".user_name_error").length > 0) {
          createError();
          $('.user_name_error').show();
          showUserNameError(DailyKos.Subscriptions.userData.not_subscribable_reason || 'user name is not valid');
        } else {
          createError();
          $('.user_name_error').show(500, function(){
            setTimeout(function(){
              showUserNameError(DailyKos.Subscriptions.userData.not_subscribable_reason || 'user name is not valid');
            }, 200);
          });
        }
      } else {
        showCheckoutAux();
      }
    };

    var showShoping = function() {
      if($('#payment').is(':visible')) {
        $('#bg_image').show();
        $('#pannels_top').show();
        $('.by_check').hide();
        if (isGift()) {
          $('#gift_subscription').click();
        } else {
          if (DailyKos.currentUser) {
            $('#for_yourself').click();
          } else {
            $('#not_logged_in').show();
          }
        }
        $('#payment, .cart, .edit_subscription').hide();
        $('#new_subscription .submit').val('Continue');
        return false;
      }
    };

    var varifyUserName = function(){
      if(!$('#payment').is(':visible')) {
        searchExistingSubscriptions();
        showCheckout();
        return false;
      }
    };

    $('#new_subscription .submit').click(varifyUserName);
    $('#new_subscription').submit(varifyUserName);
    $('.edit_subscription').click(showShoping);
  };

  var showUserNameError = function(message){
    $('#user_name').parent().data('error_message', message);
    $('#user_name').parent().addClass('field_with_errors');
    DailyKos.Forms.showError($('#user_name'));
  };

  var initUserNameErrors = function(){
    $('#user_name').change(function(e){
      // we need to know where the user is going, not the triggering element, hence the delay
      setTimeout(function(){
        if(!DailyKos.Subscriptions.userData) return;

        if($(document.activeElement).attr('id') != 'user_name' &&
           $(document.activeElement).attr('id') != 'user_name_list') {
          if(!DailyKos.Subscriptions.userData.subscriber) {
            showUserNameError('user could not be found');
          } else if(!DailyKos.Subscriptions.userData.can_subscribe) {
            showUserNameError(DailyKos.Subscriptions.userData.not_subscribable_reason);
          }
          if(DailyKos.Subscriptions.userData.can_subscribe) {
            $('#user_name').parent().removeClass('field_with_errors');
            $('#user_name').parent().data('error_message', '');
            $('.user_name_error').hide(500);
          }
        }
      }, 100);
    });
  };

  var searchExistingSubscriptions = function() {
    $('.cart .description').html("");
    DailyKos.Subscriptions.userData = null;
    DailyKos.Subscriptions.searchingUsers = true;

    if (DailyKos.Subscriptions.subscriptionSearchRequest) {
      DailyKos.Subscriptions.subscriptionSearchRequest.abort();
    }
    if (DailyKos.Subscriptions.subscriptionSearchTimeout) {
      clearTimeout(DailyKos.Subscriptions.subscriptionSearchTimeout);
    }

    if(!$('#user_name').val()){
      DailyKos.Subscriptions.userData = {};
    } else {
      DailyKos.Subscriptions.subscriptionSearchTimeout = setTimeout(function(){
        DailyKos.Subscriptions.subscriptionSearchRequest = $.ajax({
          url: '/users/' + $('#user_name').val() + '/subscriptions',
          success: function(data){
            $('.cart .description').html("");

            if(data.lifetime) {
              $('.cart .description').html("<span class='recipient'>Username</span> has a lifetime subscription");
            } else if (data.recurring) {
              $('.cart .description').html("<span class='recipient'>Username</span> has recurring subscription");
            } else if (data.expires_at) {
              $('.cart .description').html("<span class='recipient'>Username</span> has a subscription expiring " + data.expires_at);
            }

            $('.cart .description .recipient').html(data.subscriber);

            DailyKos.Subscriptions.searchingUsers = false;
            DailyKos.Subscriptions.userData = data;
          }
        });
      }, 333);
    }
  };

  var setThankYouBackgroundPosition = function() {
    $("body.controller_subscriptions.action_thank_you").css({
      backgroundPosition: "center " + ($("body").height() - $("#legal").height() - 475) + "px"
    });
  };

  var hideShowLifetime = function() {
    if(!DailyKos.lifetimeSubscriptionsAvailible) {
      $('.subscription_type').hide();
    }
  }

  return {
    init: function() {
      initTabs();
      initContinueEditButtons();
      hideShowLifetime();
      DailyKos.UserNameAutocomplete.init('#user_name');
      initUserNameErrors();
      $('#user_name').change(searchExistingSubscriptions);  // this might be overkill- could just remove errors on change, and otherwise only check on continue
      $(".toggle_cancel_recurring_subscription").click(function(){
        $("#cancel_recurring_subscription").toggle();
        return false;
      });
      setThankYouBackgroundPosition();
    },

    LifeSubscriptionCost: '$100',

    YearSubscriptionCost: '$40'
  };
}());

$(document).ready(function() {
  if($("body").hasClass("controller_subscriptions")) DailyKos.Subscriptions.init();
});
// lets jquery animate over colors
(function(d){d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(f,e){d.fx.step[e]=function(g){if(!g.colorInit){g.start=c(g.elem,e);g.end=b(g.end);g.colorInit=true}g.elem.style[e]="rgb("+[Math.max(Math.min(parseInt((g.pos*(g.end[0]-g.start[0]))+g.start[0]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[1]-g.start[1]))+g.start[1]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[2]-g.start[2]))+g.start[2]),255),0)].join(",")+")"}});function b(f){var e;if(f&&f.constructor==Array&&f.length==3){return f}if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){return[parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55]}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}if(e=/rgba\(0, 0, 0, 0\)/.exec(f)){return a.transparent}return a[d.trim(f).toLowerCase()]}function c(g,e){var f;do{f=d.curCSS(g,e);if(f!=""&&f!="transparent"||d.nodeName(g,"body")){break}e="backgroundColor"}while(g=g.parentNode);return b(f)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}})(jQuery);

// lets you get at the url properties http://jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});
/*
* jQuery UI Tag-it!
*
* @version v2.0 (06/2011)
*
* Copyright 2011, Levy Carneiro Jr.
* Released under the MIT license.
* http://aehlke.github.com/tag-it/LICENSE
*
* Homepage:
*   http://aehlke.github.com/tag-it/
*
* Authors:
*   Levy Carneiro Jr.
*   Martin Rehfeld
*   Tobias Schmidt
*   Skylar Challand
*   Alex Ehlke
*
* Maintainer:
*   Alex Ehlke - Twitter: @aehlke
*
* Dependencies:
*   jQuery v1.4+
*   jQuery UI v1.8+
*/
(function($) {

    $.widget('ui.tagit', {
        options: {
            itemName          : 'item',
            fieldName         : 'tags',
            availableTags     : [],
            tagSource         : null,
            removeConfirmation: false,
            caseSensitive     : true,
            placeholderText   : null,

            // When this is true, clicking in the tag list
            // will no longer set focus on the input box.
            disableInputFocus : false,

            // When enabled, quotes are not neccesary
            // for inputting multi-word tags.
            allowSpaces: false,

            // Whether to animate tag removals or not.
            animate: true,

            // The below options are for using a single field instead of several
            // for our form values.
            //
            // When enabled, will use a single hidden field for the form,
            // rather than one per tag. It will delimit tags in the field
            // with singleFieldDelimiter.
            //
            // The easiest way to use singleField is to just instantiate tag-it
            // on an INPUT element, in which case singleField is automatically
            // set to true, and singleFieldNode is set to that element. This 
            // way, you don't need to fiddle with these options.
            singleField: false,

            singleFieldDelimiter: ',',

            // Set this to an input DOM node to use an existing form field.
            // Any text in it will be erased on init. But it will be
            // populated with the text of tags as they are created,
            // delimited by singleFieldDelimiter.
            //
            // If this is not set, we create an input node for it,
            // with the name given in settings.fieldName, 
            // ignoring settings.itemName.
            singleFieldNode: null,

            // Optionally set a tabindex attribute on the input that gets
            // created for tag-it.
            tabIndex: null,


            // Event callbacks.
            onTagAdded  : null,
            onTagRemoved: null,
            onTagClicked: null
        },


        _create: function() {
            // allowDuplicates upon initialization for legacy tags; Due to the DK tag pre-processor,
            // which strips spaces, existing tags "foo bar" and "foobar" are considered same.
            // Here, we allow dupes on init, but restore the options afterwards.
            var allowDuplicates = this.options.allowDuplicates;
            this.options.allowDuplicates = true;

            // for handling static scoping inside callbacks
            var that = this;

            // There are 2 kinds of DOM nodes this widget can be instantiated on:
            //     1. UL, OL, or some element containing either of these.
            //     2. INPUT, in which case 'singleField' is overridden to true,
            //        a UL is created and the INPUT is hidden.
            if (this.element.is('input')) {
                this.tagList = $('<ul></ul>').insertAfter(this.element);
                this.options.singleField = true;
                this.options.singleFieldNode = this.element;
                this.element.css('display', 'none');
            } else {
                this.tagList = this.element.find('ul, ol').andSelf().last();
            }

            this._tagInput = $('<input type="text" />').addClass('ui-widget-content');
            if (this.options.tabIndex) {
                this._tagInput.attr('tabindex', this.options.tabIndex);
            }
            if (this.options.placeholderText) {
                this._tagInput.attr('placeholder', this.options.placeholderText);
            }

            this.options.tagSource = this.options.tagSource || function(search, showChoices) {
                var filter = search.term.toLowerCase();
                var choices = $.grep(this.options.availableTags, function(element) {
                    // Only match autocomplete options that begin with the search term.
                    // (Case insensitive.)
                    return (element.toLowerCase().indexOf(filter) === 0);
                });
                showChoices(this._subtractArray(choices, this.assignedTags()));
            };

            // Bind tagSource callback functions to this context.
            if ($.isFunction(this.options.tagSource)) {
                this.options.tagSource = $.proxy(this.options.tagSource, this);
            }

            this.tagList
                .addClass('tagit')
                .addClass('ui-widget ui-widget-content ui-corner-all')
                // Create the input field.
                .append($('<li class="tagit-new"></li>').append(this._tagInput))
                .click(function(e) {
                    var target = $(e.target);
                    if (target.hasClass('tagit-label')) {
                        that._trigger('onTagClicked', e, target.closest('.tagit-choice'));
                    } else {
                        // Sets the focus() to the input field, if the user
                        // clicks anywhere inside the UL. This is needed
                        // because the input field needs to be of a small size.
                        if (!that.options.disableInputFocus) {
                            that._tagInput.focus();
                        }
                    }
                });

            // Add existing tags from the list, if any.
            this.tagList.children('li').each(function() {
                if (!$(this).hasClass('tagit-new')) {
                    that.createTag($(this).html(), $(this).attr('class'));
                    $(this).remove();
                }
            });

            // Single field support.
            if (this.options.singleField) {
                if (this.options.singleFieldNode) {
                    // Add existing tags from the input field.
                    var node = $(this.options.singleFieldNode);
                    var tags = node.val().split(this.options.singleFieldDelimiter);
                    node.val('');
                    $.each(tags, function(index, tag) {
                        that.createTag(tag);
                    });
                } else {
                    // Create our single field input after our list.
                    this.options.singleFieldNode = this.tagList.after('<input type="hidden" style="display:none;" value="" name="' + this.options.fieldName + '" />');
                }
            }

            // Events.
            this._tagInput
                .keydown(function(event) {
                    // Backspace is not detected within a keypress, so it must use keydown.
                    if (event.which == $.ui.keyCode.BACKSPACE && that._tagInput.val() === '') {
                        var tag = that._lastTag();
                        if (!that.options.removeConfirmation || tag.hasClass('remove')) {
                            // When backspace is pressed, the last tag is deleted.
                            that.removeTag(tag);
                        } else if (that.options.removeConfirmation) {
                            tag.addClass('remove ui-state-highlight');
                        }
                    } else if (that.options.removeConfirmation) {
                        that._lastTag().removeClass('remove ui-state-highlight');
                    }

                    // Comma/Space/Enter are all valid delimiters for new tags,
                    // except when there is an open quote or if setting allowSpaces = true.
                    // Tab will also create a tag, unless the tag input is empty, in which case it isn't caught.
                    if (
                        event.which == $.ui.keyCode.COMMA ||
                        event.which == $.ui.keyCode.ENTER ||
                        (
                            event.which == $.ui.keyCode.TAB &&
                            that._tagInput.val() !== ''
                        ) ||
                        (
                            event.which == $.ui.keyCode.SPACE &&
                            that.options.allowSpaces !== true &&
                            (
                                $.trim(that._tagInput.val()).replace( /^s*/, '' ).charAt(0) != '"' ||
                                (
                                    $.trim(that._tagInput.val()).charAt(0) == '"' &&
                                    $.trim(that._tagInput.val()).charAt($.trim(that._tagInput.val()).length - 1) == '"' &&
                                    $.trim(that._tagInput.val()).length - 1 !== 0
                                )
                            )
                        )
                    ) {
                        event.preventDefault();
                        that.createTag(that._cleanedInput());

                        // The autocomplete doesn't close automatically when TAB is pressed.
                        // So let's ensure that it closes.
                        that._tagInput.autocomplete('close');
                    }
                });
                

            // Autocomplete.
            if (this.options.availableTags || this.options.tagSource) {
                this._tagInput.autocomplete({
                    source: this.options.tagSource,
                    select: function(event, ui) {
                        // Delete the last tag if we autocomplete something despite the input being empty
                        // This happens because the input's blur event causes the tag to be created when
                        // the user clicks an autocomplete item.
                        // The only artifact of this is that while the user holds down the mouse button
                        // on the selected autocomplete item, a tag is shown with the pre-autocompleted text,
                        // and is changed to the autocompleted text upon mouseup.
                        if (that._tagInput.val() === '') {
                            that.removeTag(that._lastTag(), false);
                        }
                        that.createTag(ui.item.value);
                        // Preventing the tag input to be updated with the chosen value.
                        return false;
                    },
                    position: {
                        my : "left top",
                        at : "left bottom",
                        of : that._tagInput.parent().parent()
                    },
                    appendTo: $("#image_list, .meta_data").first()
                });
            }

            this.options.allowDuplicates = allowDuplicates;
        },

        _cleanedInput: function() {
            // Returns the contents of the tag input, cleaned and ready to be passed to createTag
            var tagInputStr = $.trim(this._tagInput.val().replace(/^"(.*)"$/, '$1'));
            return tagInputStr.replace(/^#+(.*)$/, '$1');
        },

        _lastTag: function() {
            return this.tagList.children('.tagit-choice:last');
        },

        assignedTags: function() {
            // Returns an array of tag string values
            var that = this;
            var tags = [];
            if (this.options.singleField) {
                tags = $(this.options.singleFieldNode).val().split(this.options.singleFieldDelimiter);
                if (tags[0] === '') {
                    tags = [];
                }
            } else {
                this.tagList.children('.tagit-choice').each(function() {
                    tags.push(that.tagLabel(this));
                });
            }
            return tags;
        },

        _updateSingleTagsField: function(tags) {
            // Takes a list of tag string values, updates this.options.singleFieldNode.val to the tags delimited by this.options.singleFieldDelimiter
            $(this.options.singleFieldNode).val(tags.join(this.options.singleFieldDelimiter));
        },

        _subtractArray: function(a1, a2) {
            var result = [];
            for (var i = 0; i < a1.length; i++) {
                if ($.inArray(a1[i], a2) == -1) {
                    result.push(a1[i]);
                }
            }
            return result;
        },

        tagLabel: function(tag) {
            // Returns the tag's string label.
            if (this.options.singleField) {
                return $(tag).children('.tagit-label').text();
            } else {
                return $(tag).children('input').val();
            }
        },

        _isNew: function(value) {
            var that = this;
            var isNew = true;
            this.tagList.children('.tagit-choice').each(function(i) {
                if (that._formatStr(value) == that._formatStr(that.tagLabel(this))) {
                    isNew = false;
                    return false;
                }
            });
            return isNew;
        },

        _formatStr: function(str) {
            if (this.options.caseSensitive) {
                return str;
            }
            return $.trim(str.toLowerCase());
        },

        createTag: function(value, additionalClass) {
            var that = this;
            // Automatically trims the value of leading and trailing whitespace.
            value = $.trim(value);

            if(this.options.preprocessTag) {
                value = this.options.preprocessTag(value);
            }

            if (value === '') {
                return false;
            }

            if (!this.options.allowDuplicates && !this._isNew(value)) {
                if (this._trigger('onTagExists', null, {
                    existingTag: value
                }) !== false) {

                }
                return false;
            }

            var label = $(this.options.onTagClicked ? '<a class="tagit-label"></a>' : '<span class="tagit-label"></span>').text(value);

            // Create tag.
            var tag = $('<li></li>')
                .addClass('tagit-choice ui-widget-content ui-state-default ui-corner-all')
                .addClass(additionalClass)
                .append(label);

            // Button for removing the tag.
            var removeTagIcon = $('<span></span>')
                .addClass('ui-icon ui-icon-close');
            var removeTag = $('<a><span class="text-icon">\xd7</span></a>') // \xd7 is an X
                .addClass('tagit-close')
                .append(removeTagIcon)
                .click(function(e) {
                    // Removes a tag when the little 'x' is clicked.
                    that.removeTag(tag);
                });
            tag.append(removeTag);

            // Unless options.singleField is set, each tag has a hidden input field inline.
            if (this.options.singleField) {
                var tags = this.assignedTags();
                tags.push(value);
                this._updateSingleTagsField(tags);
            } else {
                var escapedValue = label.html();
                tag.append('<input type="hidden" style="display:none;" value="' + escapedValue + '" name="' + this.options.itemName + '[' + this.options.fieldName + '][]" />');
            }

            if (this._trigger('beforeTagAdded', null, {
                tag: tag,
                tagLabel: this.tagLabel(tag),
            }) === false) {
                return;
            }

            this._trigger('onTagAdded', null, tag);

            // Cleaning the input.
            this._tagInput.val('');

            // insert tag
            this._tagInput.parent().before(tag);

            // gt@dailykos
            // patching this post-event hook in
            // this exists in the latest version
            this._trigger('afterTagAdded', null, tag);
        },
        
        removeTag: function(tag, animate) {
            animate = animate || this.options.animate;

            tag = $(tag);

            this._trigger('onTagRemoved', null, tag);

            if (this.options.singleField) {
                var tags = this.assignedTags();
                var removedTagLabel = this.tagLabel(tag);
                tags = $.grep(tags, function(el){
                    return el != removedTagLabel;
                });
                this._updateSingleTagsField(tags);
            }
            // Animate the removal.
            if (animate) {
                tag.fadeOut('fast').hide('blind', {direction: 'horizontal'}, 'fast', function(){
                    tag.remove();
                }).dequeue();
            } else {
                tag.remove();
            }
        },

        removeAll: function() {
            // Removes all tags.
            var that = this;
            this.tagList.children('.tagit-choice').each(function(index, tag) {
                that.removeTag(tag, false);
            });
        }

    });

})(jQuery);


_.namespace('DailyKos').Notifier = (function(){
  var notifications;
  var warnings;
  var warningsAcknowledged = false;

  var formatDate = function(date){
    return (new Date(date)).toString();
  };
  _.templateSettings = {
      evaluate    : /<%([\s\S]+?)%>/g,
      interpolate : /<%=([\s\S]+?)%>/g,
      escape      : /<%-([\s\S]+?)%>/g
  };
  var warningTemplate = _.template(
    "<p>" +
      "A message has been issued from site admin at <%= time %>: <div class='warning'><pre><%= warning %></pre></div>" +
      "<% if(warntype == 'ratings') { %> " +
      "  <p>Your rating privileges have been suspended.</p> " +
      "<% } else if(warntype == 'trusted') { %> " +
      "    <p>Your trusted user privileges have been suspended.</p>" +
      "<% } %> " +
      "<% if(isTimeout) { %>" +
      "  <p>Your privileges will be restored at <%= reinstate_at %>.</p>" +
      "<% } %>" +
      "<form action='/warnings/<%= id %>.json' id='edit_warning_<%= id %>' data-warning_id=<%= id %> class='acknowledge_warning' method='post'>" +
      "  <input name='_method' type='hidden' value='put' />" +
      "  <div><p>I acknowledge receipt of this message:" +
      "    <input name='warning[acknowledged]' type='hidden' value='0' />" +
      "    <input type='checkbox' id='warning_acknowledged' name='warning[acknowledged]' value='1' />" +
      "  </p><p>" +
      "			 (Posting is not allowed until the message is acknowledged.)</p>" +
      "  </div> " +
      "<div><input type='submit' class='submit btn btn-default' id='acknowledge' value='Acknowledge' /></div>" +
      "</form>" +
    "</p></div>"
  );

  var showNotices = function() {
    if(hasWarnings()) {
      showNextWarning();
    } else if(hasNotifications()) {
      showNextNotification();
    } else {
      if(warningsAcknowledged) window.location.reload();
      removeContent();
    }
  }

  var submitAcknowledgment = function() {
  // failure... display response from server in alert box (didn't check box, wrong id, wrong user)
  //    	success: showNextNotice,
  //    	failure: //check acknowledge box
    var values = {};
      $.each($('.acknowledge_warning').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });
    $.ajax( {
      data: {
        _method: "PUT",
        warning: {
          acknowledged: values["warning[acknowledged]"]
        },
      },
      url: '/warnings/' + $('.acknowledge_warning').data('warning_id'),
      type: "POST",
      success: function(data){
        if (data.status == 'success') {
          warningsAcknowledged = true;
          showNotices();
        } else {
          DailyKos.showAlert(data.message);
        }
      }
    });

    return false;
  }

  var markAsSeen = function(notification) {
    $.ajax({
      type: "PUT",
      url:  "/notifications/" + notification.id
    })
  }

  var showNextWarning = function() {
    var warning = _(warnings).first();
    warnings = _(warnings).rest();

    if(warning) {
      warning.time = formatDate(warning.time);
      warning.isTimeout = !!warning.reinstate_at;
      warning.reinstate_at = formatDate(warning.reinstate_at);
      showContent(warningTemplate(warning));
      $(".acknowledge_warning").submit(submitAcknowledgment);
    }

    $('.close-notice').on('click', function() {
      showNotices();
      return false;
    });
  };

  var showNextNotification = function() {
    var notification = _(notifications).first();
    notifications = _(notifications).rest();
    showContent(notification.message);

    $('.close-notice').on('click', function() {
      markAsSeen(notification);
      showNotices();
      return false;
    });
  };

  var showContent = function(content) {
    content = "<div class='dk-notice-wrapper'><div class='close-notice'>&nbsp;</div>" +
      content + "</div>"
    $('#dk-notices').html(content).show();
  }

  var removeContent  = function() {
    $('#dk-notices').html('').hide();
  }

  var hasWarnings = function() {
    return !!warnings && warnings.length > 0;
  }

  var hasNotifications = function() {
    return !!notifications && notifications.length > 0;
  }

  return {
    init: function(){
      warnings = DailyKos.warnings();
      notifications = DailyKos.notifications();

      if (hasWarnings() || hasNotifications()) {
        showNotices();
      }
      return false;
    }
  };

})();

DailyKos.Whoami.onLoad(function() {
  DailyKos.Notifier.init();
  return false;
});
// Set body.is-mobile for mobile devices for all pages.
if ($.browser.mobile) $('body').addClass('is-mobile');
_.namespace('DailyKos').blogFileupload = (function() {
  var $closeBtn, $header;

  function init() {
    $closeBtn = $('.close-library');
    $header   = $('.blog-header-photo');

    if(!$header.find('img').length) {
      $('.delete-blog-controls').addClass('hidden');
    }

    resetForm();
    prepFileAddEvents();
    prepDeleteEvents();
    prepFileUploadEvents();

    return false;
  };

  function resetForm(keepError) {
    if(!keepError) $('#error_explanation').html('');
    $('#check_box_label, .avatar_preview, .delete_image, .fake_input').removeClass('faded');
    $('.delete_image, #edit-blog-logo-submit').prop("disabled", false);
    $('.delete_image').prop('checked', false);
    $('.modal-content').find('.dk-progress').css('width', '0%');
    $('.dk-progress_bar').hide();
    $('.dk-progress-text').html('');
    $('#real_uploader').prop('disabled', false);

    $("#edit-blog-logo-submit").off('click');
    $("#edit-blog-logo-submit").on('click', function() {
      if(!$('#blog_delete_logo').is(':checked') ||  $('#upload_file_name').html().length < 1) {
          $('#error_explanation').html("<p>You haven't selected any changes to make.</p>");
      }
    });

    return false;
  };

  function prepFileAddEvents() {
    $('.edit_blog').bind('fileuploadadd', function (e, data) {
      if(data.files[0]) $('#upload_file_name').html("<b>File selected</b>:  " + data.files[0].name);
      $('#error_explanation').html('');
      $('.delete_image').addClass('faded').prop("disabled", true);
      $('#check_box_label, .avatar_preview').addClass('faded');
    });

    return false;
  };

  function prepDeleteEvents() {
    $('#blog_delete_logo').on('click', function() {
      $('#error_explanation').html('');

      if(!$(this).is(':checked')) {
        resetForm();
        return true;
      }

      $("#edit-blog-logo-submit").off('click').on('click', function() {
        $.ajax({
          url: $('.edit_blog').attr('action'),
          data: $('.edit_blog').serialize(),
          dataType: 'json',
          method: 'POST'
        }).success(function(data) {
           $header.find('img').replaceWith('<p>' + data.name + '</p>');
           resetForm();
           $('#blog_logo_preview').attr('src', data.logo_large);
           $('.delete-blog-controls').addClass('hidden');
           $closeBtn.trigger('click');
        });
      });

      $('#real_uploader').prop('disabled', true);
      $('.avatar_preview, .fake_input').addClass('faded');
    });

    return false;
  };

  function prepFileUploadEvents() {
    var percentDone;

    $('.edit_blog').fileupload({
      url: $('.edit_blog').attr('action'),
      dataType: 'json',
      add: function(e, data) {
        $("#edit-blog-logo-submit").off('click').on('click', function () {
            $('.dk-progress_bar').show();
            data.submit();
          });
      },
      done: function(e, data) {
        var img      = $('<img>', {src: data.result.logo_large});

        $('#blog_logo_preview').attr('src', img.attr('src'));
        resetForm();

        $('.delete-blog-controls').removeClass('hidden');
        $('#upload_file_name').html('');

        $closeBtn.trigger('click');
        $header.find('img, p').remove();
        $header.append(img);
        alert('Blog logo updated. It may take a few minutes ' +
        'for changes to appear consistently everywhere.');
      },
      send: function (e, data) {

      },
      progress: function (e, data) {
        percentDone = parseInt(data.loaded / data.total * 100, 10);
        $('.modal-content').find('.dk-progress').css('width', percentDone + '%');
        if(percentDone < 100) {
          $('.dk-progress-text').html(percentDone + "%");
        } else {
          $('.dk-progress-text').html("Processing . . .");
        }
      },
      fail: function(e, data) {
        var errors = $.parseJSON(data.jqXHR.responseText);
        $('#error_explanation').html("<p>The following errors prevented the logo from being saved:</p><ul></ul>");
        resetForm(true);

        _.each(errors, function(msg) {
          $('#error_explanation').find('ul').append($('<li>Logo ' + msg + '</li>'));
        });
      }
    });

    return false;
  };

  return {
    init: init
  }
})();

if ($('.edit_blog').length) {
  DailyKos.blogFileupload.init();
};
if(!DailyKos) var DailyKos = {};

DailyKos.Tag = Backbone.Model.extend({
  urlRoot: "/tags",
  toJSON: function() {
  	return { tag: _.clone( this.attributes ) }
  }
});

DailyKos.Image = Backbone.Model.extend({
  urlRoot: "/images",

  // Had to add url explictly to override url value passed into bespoke collections (QueuedImages,
  // for example)  I belive this is due to API change of backbone, as updates worked well for a
  // while, then broke when we updated backbone
  url: function() {
    return "/images/" + this.get('id') + '.json';
  },
  initialize: function() {
    this.refresh();
  },
  mergeResults: function(results) {
    var self = this;

    _(results).each(function(val, key) {
      self.set(key, val);
    });

    this.refresh();
  },
  refresh: function() {
    var itags = _(this.get("image_taggings")).
                  map(function(attributes) {
                    return new DailyKos.ImageTagging(attributes);
                  }
                );

    this.set("image_taggings", itags);
  },
  toJSON: function() {
  	return { image: _.clone( this.attributes ) };
  },
  removeFromQueue: function() {
  	$.post("/images/"+this.id+"/remove_from_queue.json?story_id="+DailyKos.currentStoryID);
  },
  addtoQueue: function() {
  	if(!DailyKos.Library.QueuedImages.get(this.id)) { DailyKos.Library.QueuedImages.add(this); }
  	$.post("/images/"+this.id+"/add_to_queue.json?story_id="+DailyKos.currentStoryID);
  },
  addCommentImage: function() {
    if(!DailyKos.Library.QueuedImages.get(this.id)) { DailyKos.Library.QueuedImages.add(this); }
    return false;
  },
  removeCommentImage: function() {
    if(DailyKos.Library.QueuedImages.get(this.id)) { DailyKos.Library.QueuedImages.remove(this); }
    return false;
  }
});

DailyKos.ImageQueueing = Backbone.Model.extend({
  urlRoot: "/image_queueings"
});

DailyKos.ImageTagging = Backbone.Model.extend({
  urlRoot: "/image_taggings"
});

DailyKos.Images = Backbone.Collection.extend({
  url: "/images",
  model: DailyKos.Image,
  comparator: function(image) {
    var date = new Date(image.get("created_at"));
    return -date.getTime();
  }
});

Handlebars.registerHelper('limit', function(string, numberOfCharacters) {
  if(string && string.length > numberOfCharacters)
    return new Handlebars.SafeString(string.substr(0,numberOfCharacters) + "...");
  else
    return string;
});

Handlebars.registerHelper("pluralize", function(num, word) {
    if (num === 1) { return num + " " + word; }

    var result = num + " ";
    if (word === "story") {
      result += "stories";
    } else {
      result += word + "s";
    }

    return result;
});

Handlebars.registerHelper("canTagImage", function(imageUploaderId, hasPerms, options) {
   var userId = DailyKos.currentUserId();
   if(imageUploaderId === userId || hasPerms) return options.fn(this);
   return options.inverse(this);
});

Handlebars.registerHelper("displayDimensionWarning", function(crop_dimensions, options) {
  if (!crop_dimensions ||!crop_dimensions.original ) {
    return false;
  }
  var width = crop_dimensions.original.width;
  if( width > 381 && width < 915 ) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

// When image library performs a search, the search terms are passed as query string parameters.
// The "buildQueryString" function is responsible for constructing the query string parameters.
//
// There are two ways of building the query string
//  1) desktop
//  2) mobile
//
// On desktop, buildQueryString receves VisualSearch lib's facets,
// which contain search terms and search attributes (e.g. file_name, image_id)
//
// On mobile, we don't use VisualSearch, we just have a simple input box that we parse.
//

_.namespace('DailyKos.Library');

(function(){
  DailyKos.Library.getBuildQueryString = $.browser.mobile ? getBuildQueryStringMobile : getBuildQueryStringVS;

  return;

  // Search Input                         =>    Query String
  // file_name:one                        =>  /,File_Name/:one/,
  // file_name:one two                    =>  /,File_Name/:one two/,
  // file_name:one,     uploader:two      =>  /,File_Name/:one/,Uploader/:two/,
  // file_name:one two, uploader:three    =>  /,File_Name/:one two/,Uploader/:three/,
  // Token "/," is a delimiter between search attributes  (e.g. file_name, uploader)
  // Token "/:" is a separator between search attribute and search term (file_name/: lolcats)
  function getBuildQueryStringMobile() {
    var $mobileSearch = $('#img-lib-mobile-search');
    return function() {
      var search = getSearchText();

      if (!search) return '';

      search = removeCommas(search);
      search = downCase(search);
      search = escapeAttributes(search);

      return search;

      function attributes() {
        return [
          'image_id',
          'attribution',
          'description',
          'tag',
          'file_name',
          'uploader',
          'my_images',
          'staff_uploaded',
          'location',
          'exact_match'
        ];
      }
      function getSearchText() {
        return $mobileSearch.val();
      }
      function downCase(str)         { return str.toLowerCase(); }
      function removeCommas(str)     { return str.replace(',', ''); }
      function escapeAttributes(str) {
        _(attributes()).each(function(attr){
          var searchAttr =         attr +  ':';
          var escapeAttr = '/,' +  attr + '/:';
          str = str.replace(searchAttr, escapeAttr);
        });
        return str;
      }
    };
  }

  function getBuildQueryStringVS() {
    return function(facets) {
      var searchStr = this.visualSearch.searchBox.value();
      var qs = "";
      var tooShort = true;

      // Abort the search if the user has not typed enough characters into the search box.
      // We show full results if the user hasn't typed anything into the search box (length 0).
      var isTooShort = function(str) {
        if (_.isEmpty(str)) return true;
        var len = str.trim().length;
        return (0 < len && len < 3);
      };

      _.each(facets, function(facet){
        for (var attribute in facet) {
          // Get the search term value (unfacetedText).
          // Work around vs.js idiosynchrasies. We want search to happen instantly (i.e. no enter key press).
          // However, vs.js waits for the enter key to build the facet groups. Because of this, when the search
          // term value of our facet isn't present we need to query the search box instead of relying solely on facet values.
          var value         = facet[attribute];
          var unfacetedText = $('.VS-input-width-tester.VS-interface').contents().last()[0] || '';
          unfacetedText = value || unfacetedText.wholeText;

          qs += attribute + '/:' + unfacetedText;

          // If any search term meets the required length, make a note of it for later.
          if (!isTooShort(attribute) || !isTooShort(value) || !isTooShort(unfacetedText)) tooShort = false;

          // Find the remainder of the search terms since vs.js keeps it in searchBox.value() but not in searchQuery.facets().
          // Start out with the full searchbox.value string and remove the facets until you have the remainder.
          var sub = /\s/.test(attribute) ? '"' + attribute + '"' : attribute;
          sub += ': ' + '"' + value + '"';
          searchStr = searchStr.replace(sub,   '');
          searchStr = searchStr.replace(value, '');
        }

        qs += '/,';
      });

      if (!isTooShort(searchStr)) tooShort = false;
      this.searchTermIsTooShort = tooShort && (!_.isEmpty(searchStr));
      qs += searchStr;

      return qs;
    };
  }
})();

DailyKos.Library.open = function(targetEditor) {
  if(DailyKos.Library.shown) return false;
  DailyKos.Library.shown = true;

  function showLibrary() {
    DailyKos.Library.ImageLibrary.setButtonState();
    $('#image_library').modal();

    return false;
  }

  if(DailyKos.Library.ImageLibrary === undefined) {
    $.ajax({
      url:    "/images/library",
      success: function(html) {
        $("#image-library-wrapper").html(html);
        DailyKos.Library.ImageLibrary = new DailyKos.Library.ImageLibraryView({el: $("#image_library"), targetEditor: targetEditor});
        showLibrary();

        $('#image_library').on('hidden.bs.modal', function(e) {
          DailyKos.Library.shown = false;
        });
      }
    });
  } else {
    DailyKos.Library.ImageLibrary.targetEditor = targetEditor;
    DailyKos.Library.ImageLibrary.unSelectAllImages();
    showLibrary();
  }

  return false;
};

DailyKos.Library.UploadProgressView = Backbone.View.extend({
  events: {
    "click .close_error" : "remove"
  },

  initialize: function() {
    this.model.bind('change', this.render, this);
    this.model.bind('destroy', this.remove, this);
    this.template = Handlebars.compile($("#image_uploading_template").html());
    this.errorTemplate = Handlebars.compile($("#image_uploading_error_template").html());
  },
  render: function() {
    if(this.model.get("state") == "uploading")
      $(this.el).html(this.template(this.model.toJSON()["image"]));
    else if(this.model.get("state") == "error")
      $(this.el).html(this.errorTemplate(this.model.toJSON()["image"]));

    return this;
  }
});

DailyKos.Library.ImageThumbView = Backbone.View.extend({
  className: "image",
  events: {
    "click" : "toggleSelect",
    "select" : "select",
    "mouseover" : "showAdd",
    "mouseout" : "hideAdd"
  },
  initialize: function() {
    this.model.bind('destroy', this.remove, this);
    this.model.bind('change', this.render, this);
    this.template = Handlebars.compile($("#image_thumbnail_template").html());
    this.rendered = false;
  },
  render: function() {
    if(!this.rendered) {
      $(this.el).html(this.template(this.model.toJSON()["image"]));
    }

    if(this.model.get("selected")) {
      $(this.el).addClass("selected");
    } else {
      $(this.el).removeClass("selected");
    }

    this.rendered = true;

    return this;
  },
  toggleSelect: function(e) {

    if(this.model.get("selected") && (DailyKos.Library.SelectedImages.length <= 1)) {
      this.deselect(e);
    } else {
      this.select(e);
    }

    DailyKos.Library.ImageLibrary.setButtonState();

    e.stopPropagation();
  },
  isShiftOrMetaKeyPress: function(e) {
    return(e.shiftKey || e.metaKey);
  },
  select: function(e) {
    if(! DailyKos.Library.ImageThumbView.prototype.isShiftOrMetaKeyPress(e)) {
      DailyKos.Library.SelectedImages.each(function(image) { image.set("selected", false); });
      DailyKos.Library.SelectedImages.reset();
      DailyKos.Library.EditView.render();
    }

    this.model.set("selected", true);
    if(!DailyKos.Library.SelectedImages.get(this.model.id)) {
      DailyKos.Library.SelectedImages.add(this.model);
    }
  },
  deselect: function() {
    this.model.set("selected", false);
    DailyKos.Library.SelectedImages.remove(this.model);
  }
});

DailyKos.Library.ImageEditView = Backbone.View.extend({
  className:  "meta_data",
  events: {
    "click .edit" : "edit",
    "keypress .editor" : "saveOnEnter",
    "blur .editor:not(.select)" : "save",
    "click .save" : "save",
    "change select" : "save",
    "click .delete" : "toggleDeleteOptions",
    "click .cancel_delete" : "toggleDeleteOptions",
    "click .delete_from_site" : "deleteFromSite",
    "click .exclude" : "toggleExcludeOptions",
    "click .cancel_exclude" : "toggleExcludeOptions",
    "click .exclude_from_site" : "excludeFromSite",
    "click .confirm_license_change" : "save",
    "click .cancel_license_change" : "cancelLicenseChange",
    "click .close-tag" : "removeTag"
  },

  initialize: function() {
    this.confirmingLicenseChange = false;

    this.template = Handlebars.compile($("#image_edit_template").html());

    this.collection.bind('add', this.render, this);
    this.collection.bind('remove', this.render, this);

    _.bindAll(this, 'save');
  },
  render: function() {
    $(this.el).attr("class", "meta_data");

    if(this.collection.length === 0) {
      $(this.el).html("<p class='none_selected'>select an image to edit metadata</p>");
    }
    else if(this.collection.length == 1) {
      var model = this.collection.first();
      $(this.el).html(this.template(model.toJSON()["image"]));
      $(this.el).find("option[value='"+model.get("license")+"']").attr("selected", "selected");
    }
    else {
      var attributes = this.multiSelectAttributes();
      $(this.el).html(this.template(attributes));
      $(this.el).find("option[value='"+attributes["license"]+"']").attr("selected", "selected");
    }

    if(this.collection.length > 0) {
      var collection = this.collection;
      var _this = this;

      DailyKos.TagEditor.disableSpaceKey(".meta-data-wrapper"); // Disable spacebar on tag-input box. Child elements of the meta container are re-rendered as you click images, so just set this on teh parental unit.

      $(".tags", this.el).tagit({
        allowSpaces: true,
        caseSensitive: false,
        placeholderText: "Add a tag . . .",
        tagSource: function(search, showChoices) {
          $.ajax({
            url: "/tags/search.json",
            data: {query: search.term},
            success: function(tags) {
              showChoices(_.pluck(tags, 'tag'));
            }
          });
        },

        preprocessTag: DailyKos.TagEditor.preprocessTag,
        onTagExists:   DailyKos.TagEditor.onTagExists,

        beforeTagAdded: function(event, ui) {
          var tag = ui.tagLabel;
          tag.replace(/^#+(.*)$/, '$1');
          var invalid = (/[^a-zA-Z0-9&\.-]|\.$/).test(tag);
          if (invalid) {
            if (confirm('This tag is invalid.  Allowed characters are: letters, numbers, and -.&.  Trailing periods are not allowed.  Are you sure you want to continue?')) {
              var sanitizedTag = tag.replace(/[^a-zA-Z0-9&\.-]|\.$/g, '');
              ui.tagLabel = sanitizedTag;
              ui.tag.find('.tagit-label').html(sanitizedTag);
            } else {
              return false;
            }
          }
        },
        onTagAdded: function(event, tag) {
          _this.render();
          collection.each(function(model) {
            var tagName = $(tag).find(".tagit-label").html();
            var imageTagging = _.find(model.get("image_taggings"), function(tagging){ return tagging.get("tag_name") == tagName; });

            if(!imageTagging) {
              var newTag = new DailyKos.Tag({tag: tagName});
              newTag.save({}, {
                success: function() {
                  var imageTagging = new DailyKos.ImageTagging({
                    tag_id: newTag.get("id"),
                    image_id: model.get("id"),
                    tag_name: tagName
                  });
                  imageTagging.save({}, {
                    success: function() {
                      model.attributes["image_taggings"].push(imageTagging);
                      _this.render();
                    },
                    error: function(imageTaggingModel, response) {
                      // We could use some error handling here
                      // that gives feedback to user
                      _this.render();
                    }
                  });
                },
                error: function(tagModel, response) {
                  // We could use some error handling here
                  // that gives feedback to user
                  $(tag).hide();
                }
              });
            } else {
              return false;
            }
          });
        },
        onTagRemoved: function(event, tag) {
          collection.each(function(model) {
            var tagName = $(tag).find(".tagit-label").html();
            var imageTagging = _.find(model.get("image_taggings"), function(tagging){ return tagging.get("tag_name") == tagName; });
            imageTagging.destroy({ wait: true });

            var newTaggings = _.reject(model.get("image_taggings"), function(tagging){ return tagging.get("tag_name") == tagName; });
            model.set("image_taggings", newTaggings);
          });
        }
      });
    }

    return this;
  },
  removeTag: function(event) {
    this.collection.each(function(model) {
      var tagName = $(event.target).parent().text();
      var imageTagging = _.find(model.get("image_taggings"), function(tagging){ return tagging.get("tag_name") == tagName; });
      imageTagging.destroy({ wait: true });

      var newTaggings = _.reject(model.get("image_taggings"), function(tagging){ return tagging.get("tag_name") == tagName; });
      model.set("image_taggings", newTaggings);
    });
    this.render();
    return false;
  },
  edit: function(e) {
    $(e.target).parent().addClass("editing");
    $(".editing .editor").focus();
    e.stopPropagation();
  },
  save: function(e) {
    var _this = this;
    var attributes = this.serialize();
    var needToConfirm = false;

    // Check for license change if we haven't asked for a confirmation
    this.collection.each(function(model) {
      if(model.get("license") != "me" && attributes["license"] == "me" && !_this.confirmingLicenseChange) {
        _this.confirmingLicenseChange = true;
        $(_this.el).addClass("confirming_license");
        needToConfirm = true;
      }
    });

    if(!needToConfirm) {
      this.confirmingLicenseChange = false;
      $(this.el).removeClass("confirming_license").find(".editing").removeClass("editing");
      this.collection.each(function(model) {
        model.url = DailyKos.Image.prototype.url;

        attributes.wait = true;

        model.save(attributes);
      });
      this.render();
    }
  },
  cancel: function() {
    $(this.el).find(".editing").removeClass("editing");
  },
  saveOnEnter: function(e) {
    if (e.keyCode == 13) {
      this.save({wait: true});
      return false;
    }
  },
  cancelLicenseChange: function() {
    this.confirmingLicenseChange = false;
    $(this.el).removeClass("confirming_license");
    this.cancel();
    this.render();
  },
  deleteFromSite: function() {
    if($(this.el).hasClass("confirming")) {
      this.toggleDeleteOptions();
      this.collection.each(function(image) {
        image.url = '/images/' + image.id + '.json';
        image.destroy({ wait: true,
                        error: function(model, response) {
                          alert('An error occurred while attempting to delete ' +
                                model.get('filename'));
                        }
                      });
      });
      this.collection.reset();
      this.render();
    } else {
      $(this.el).addClass("confirming");
    }

    return false;
  },
  toggleDeleteOptions: function() {
    if($(this.el).hasClass("deleting")) {
      $(this.el).removeClass("deleting").removeClass("confirming");
    }
    else {
      $(this.el).addClass("deleting");
    }
    return false;
  },
  excludeFromSite: function() {
    if($(this.el).hasClass("confirming_exclude")) {
      var collection = this.collection;
      collection.forEach(function(img){

        var reason = $('.excluded_reason').val();
        if (!reason) reason = 'none';
        img.url = '/images/' + img.id + '/exclude?is_excluded=true&excluded_reason=' + reason;
        img.save({wait: true});

        collection.remove(img);
      });

      $('.image.selected').hide();
      this.render();
      this.collection.reset();
    } else {
      $(this.el).addClass("confirming_exclude");
    }

    return false;
  },
  toggleExcludeOptions: function() {
    if($(this.el).hasClass("excluding")) {
      $(this.el).removeClass("excluding").removeClass("confirming_exclude");
    }
    else {
      $(this.el).addClass("excluding");
    }
    return false;
  },
  serialize: function() {
    var attributes = {};
    $.each($(this.el).find("form").first().serializeArray(), function(index, element) {
      if(element.value != "-----") attributes[element.name] = element.value;
    });
    attributes["license_text"] = $(this.el).find("#license option:selected").text();
    return attributes;
  },
  multiSelectAttributes: function() {
    var keys = _.keys(this.collection.models[0].attributes);
    var attributes = {};
    var collection = this.collection;
    _.each(keys, function(key) {
      var allSame = _.all(collection.models, function(model) {
        return collection.models[0].get(key) == model.get(key);
      });

      if(allSame)
        attributes[key] = collection.models[0].get(key);
      else
        attributes[key] = "-----";
    });
    attributes["url_large"] = "/assets/images/multi_select-af58758604ef53ca3538f1eade40bf33e67a6cc2dbe22fe82ccf871d33fa0e10.png";
    attributes["filename"] = this.collection.length + " Images";
    attributes["image_taggings"] = [];

    function canModify(attribute) {
      return _.all(collection.models, function(model){
        return model.get("modifiable_attributes")[attribute] === true;
      });
    }

    if(canModify("attribution")){
      attributes["modifiable_attributes"] = { attribution: true };
    }

    if(canModify("license")){
      _.extend(attributes["modifiable_attributes"], { license: true });
    }

    if(canModify("location")){
      _.extend(attributes["modifiable_attributes"], { location: true });
    }

    if(canModify("description")){
      _.extend(attributes["modifiable_attributes"], { description: true });
    }

    return attributes;
  }
});

DailyKos.Library.ImageLibraryView = Backbone.View.extend({
  events: {
    "click .done_button_active"  : "insertAndClose",
    "click .done_button_inactive"  : "closeLibrary",
    "click .close" : "closeLibrary",
    "click .images" : "handleClick",
    "scroll .images" : "handleScroll",
    "click .search-pane-switches .my_images": "showMyImages",
    "click .search-pane-switches .everyones_images" : "handleEveryonesImagesClick",
    "keyup .visual_search input" : "clearOnEscapeKeyPress",
    "keydown .visual_search input" : "keyDownOnSearchBox",
    "click .cancel" : "clearSearchForm",
    "click .search_query" : "setSearchQuery"
  },

  initialize: function(options) {
    var self = this;
    DailyKos.Library.ImageLibraryView.self = this;
    $('.VS-icon-cancel').on('click', function(e){self.displayOverfillIndicator(e);} );

    this.currentUploadsPage = 1;
    this.currentSearchPage = 1;
    this.fetchedCurrentUploads = false;
    this.dragLeaveTimeout = null;
    this.targetEditor = options.targetEditor;
    this.buildQueryString = DailyKos.Library.getBuildQueryString();

    DailyKos.Library.RecentlyUploadedImages = new DailyKos.Images;
    DailyKos.Library.SelectedImages = new DailyKos.Images;
    DailyKos.Library.UploadingImages = new DailyKos.Images;
    DailyKos.Library.SearchResultImages = new DailyKos.Images;

    this.initializeUploader();
    this.initializeEditPane();

    DailyKos.Library.RecentlyUploadedImages.bind('add', this.addImage, this);
    DailyKos.Library.RecentlyUploadedImages.bind('reset', this.addAllImages, this);

    DailyKos.Library.SearchResultImages.bind('add', this.addSearchResultImage, this);
    DailyKos.Library.SearchResultImages.bind('reset', this.addAllSearchResultImages, this);
    DailyKos.Library.SearchResultImages.add = function(newImages) {
      var _this = this;
      newImages = _.reject(newImages, function(newImage) {
        return _this.any(function(oldImage) {
          return newImage.id == oldImage.id;
        });
      });
      Backbone.Collection.prototype.add.call(this, newImages);
    };

    DailyKos.Library.UploadingImages.bind('add', this.addUploadingImage, this);

    _.bindAll(this, 'handleScroll');
    _.bindAll(this, 'performSearch');

    $(".images").scroll(this.handleScroll);

    self.initMobileSearch();

    this.visualSearch = VS.init({
      container : $('.visual_search'),
      showFacets : true,
      autosearch : false,
      remainder  : 'all',
      unquotable : [],
      minLength  : 3,
      query      : '',
      placeholder: 'Search for images by keyword or tag. . .',
      callbacks : {
        search       : function(query, searchCollection) {
          self.performSearch();
        },
        // These are the facets that will be autocompleted in an empty input.
        facetMatches : function(callback) {
          var main_category = 'Narrow By';

          callback([
            { label: 'All',            category: main_category },
            { label: 'File_Name',      category: main_category },
            { label: 'Uploader',       category: main_category },
            { label: 'Image_ID',       category: main_category },
            { label: 'Staff_Uploaded', category: main_category },
            { label: 'Description',    category: main_category },
            { label: 'Attribution',    category: main_category },
            { label: 'Location',       category: main_category },
            { label: 'Tag',            category: main_category },
            { label: 'My_Images',      category: main_category },
            { label: 'Exact_Match',    category: main_category }
          ], {
            preserveOrder: true
          });
        },

        // These are the values that match specific categories, autocompleted
        // in a category's input field.  searchTerm can be used to filter the
        // list on the server-side, prior to providing a list to the widget.
        valueMatches : function(facet, searchTerm, callback) {
          switch (facet) {
            case 'Staff_Uploaded':
              callback(['Yes', 'No'], { preserveOrder: true });
              break;
            case 'My_Images':
              callback(['True']);
              break;
          }
        },
        // This will override visualsearch's clear-search behavior which triggers an undesired
        // search when cmd+a backspace is pressed. We just want it to clear out the search field.
        clearSearch : function(defaultBehavior) {
          defaultBehavior();
        },
      }
    });
    self.performSearch();
  },
  initMobileSearch: function(){
    var self            = this;
    var searchInput     = $('#img-lib-mobile-search');
    var enterKeyPressed = false;

    // If the enter key was pressed, perform search.
    searchInput.keypress(function(e){
      enterKeyPressed = e.which === 13;
      if (enterKeyPressed) self.performSearch();
    });

    // If the virtual keyboard was dismissed, perform search.
    // Behave as though the enter key was pressed.
    searchInput.blur(function(){
      if (!enterKeyPressed) self.performSearch();
    });
  },
  // this function and the addAllImages function
  // load the images into the 'my images' section of
  // the library
  addImage: function(image) {
    var searchValue, view, index, previous;

    searchValue = this.visualSearch.searchBox.value().trim();

    view = new DailyKos.Library.ImageThumbView({model: image}).render();

    index     = DailyKos.Library.RecentlyUploadedImages.indexOf(view.model);
    previous  = DailyKos.Library.RecentlyUploadedImages.at(index - 1);
    if (index === 0 || !previous) {
      $(".my_images ul").prepend(view.el);
    } else {
      $(".my_images ul > div:nth-child("+(index)+")").after(view.el);
    }

    $(".my_images .loading_more").removeClass("loading");
  },
  addAllImages: function() {
    DailyKos.Library.RecentlyUploadedImages.each(this.addImage);
    if(DailyKos.Library.RecentlyUploadedImages.length == 1) {
      DailyKos.Library.RecentlyUploadedImages.first();
    }

  },
  addSearchResultImage: function(image) {
    var view;

    if(DailyKos.Library.SearchResultImages.length == 1) {
      image.set("selected", true);
      DailyKos.Library.SelectedImages.add(image);
    }

    view  = new DailyKos.Library.ImageThumbView({model: image});

    $(".everyones_images ul").append(view.render().el);
  },
  addAllSearchResultImages: function() {
    DailyKos.Library.SearchResultImages.each(this.addSearchResultImage);
  },
  addUploadingImage: function(image) {
    var view = new DailyKos.Library.UploadProgressView({model: image});
    $(".current_uploads").prepend(view.render().el);
  },
  unSelectAllImages: function() {
    DailyKos.Library.SelectedImages.each(function(image) { image.set("selected", false); });
    DailyKos.Library.SelectedImages.reset();
    DailyKos.Library.EditView.render();
  },
  setButtonState: function() {
    var selections = DailyKos.Library.SelectedImages.size();
    var isStoryImg = DailyKos.Library.storySelectMode;

    if (selections === 0)
      return this.deactivateInsertButton();

    if (selections === 1)
      return this.activateInsertButton();

    // selections >= 2
    if (isStoryImg)
      return this.deactivateInsertButton();
    else
      return this.activateInsertButton();
  },
  deactivateInsertButton: function() {
    $('.done_button').removeClass('done_button_active')
                     .addClass('done_button_inactive')
                     .val('Done');
  },
  activateInsertButton: function() {
    $('.done_button').removeClass('done_button_inactive')
                     .addClass('done_button_active')
                     .val('Choose');
  },
  insertAndClose: function(e) {
    if(DailyKos.Library.storySelectMode && DailyKos.Library.SelectedImages.length === 1) {
      // Insert the "Primary image" aka "Title image"
      if (this.insertStoryImage(e)) return;

      // Render image attribution
      DailyKos.loadAttributions($('#primary_photo'));

      // Send a notification that a change has occurred on the editor.
      // This allows any listeners that are registered to be notified.
      _.trigger.storyFormChange([e]);
    } else if (this.targetEditor && DailyKos.Library.SelectedImages.length > 0) {
      this.insertImages();
    }

    this.closeLibrary();
  },
  closeLibrary: function() {
    $('#image_library').modal('hide');
    return false;
  },
  insertImages: function() {
    var insertHtml = this.targetEditor;

    _.each(DailyKos.Library.SelectedImages.models, function(image) {
      var html  = imgTag(image);
      var $html = $(html);

      if(image.get('attribution')) {
        $html.find('.image-attribution').html(image.get('attribution')).removeClass('hidden');
      }

      $html.children('img').attr('data-img-id', image.get('id'));
      html = $html[0].outerHTML;

      // Don't insert a new line after images - ticket #89975212
      // html += '<p><br></p>';

      insertHtml(html);
    });

    return;

    function imgTag(image) {
      var image_url = image.get('url_large');
      var filename_match = image_url.match("large/(.*)\\?");
      var desc = image.get('description') || (filename_match && filename_match[1]) || ''
      return "<img src='" + image_url + "' alt='" + desc + "' title='" + desc + "'>"
    }
  },
  insertStoryImage: function(e) {
    var image, cropDimensions, imageUrl,
      description, imageDimensions;

    image = DailyKos.Library.SelectedImages.models[0];
    cropDimensions = image.get("crop_dimensions").story_image;
    if (!cropDimensions) {
      alert('This image is too small. If you have the original image, please re-upload the image and try again.');
      return true;
    }
    imageDimensions = DailyKos.Stories.primaryImageSize(cropDimensions.width, cropDimensions.height);
    description = image.get('description') || '';

    imageUrl = "<img src='" + image.get("url_story_image") + "' style='" + imageDimensions.style + "' title='" + description + "' alt='" + description + "' >";
    DailyKos.Stories.insertPrimaryImage(imageUrl, image.get('id'));

    return false;
  },
  handleClick: function(e) {
    DailyKos.Library.EditView.render();
    this.setButtonState();
  },
  showMyImages: function() {
    this.unSelectAllImages();

    if(!this.fetchedCurrentUploads) {
      DailyKos.Library.RecentlyUploadedImages.fetch({url: "/images/recently_uploaded?page=" + this.currentUploadsPage});
      this.fetchedCurrentUploads = true;
    }

    $(".search-pane-switches .selected").removeClass("selected");
    $(".search-pane-switches .my_images").addClass("selected");
    $(".images .everyones_images").hide();
    $(".images .my_images").show();
    return false;
  },
  handleEveryonesImagesClick: function() {
    this.unSelectAllImages();
    this.showEveryonesImages();
    this.performSearch();
    return false;
  },
  showEveryonesImages: function() {
    this.unSelectAllImages();
    $(".search-pane-switches .selected").removeClass("selected");
    $(".search-pane-switches .everyones_images").addClass("selected");
    $(".images .my_images").hide();
    $(".images .everyones_images").show();
  },
  performSearch: function(nextPage) {
    this.showEveryonesImages();

    var currentSearch = '';
    if (this.visualSearch) {
      var facets = this.visualSearch.searchQuery.facets();
      currentSearch = this.buildQueryString(facets);
    }

    if (!nextPage) {
      if (currentSearch == this.previousSearch)   return;
      if (this.searchTermIsTooShort)              return;
      if (this.repeatedEmptyQuery(currentSearch)) return;
    }

    this.previousSearch = currentSearch;

    $(".search .cancel").hide();
    $(".search .loading").show();
    $(".no_results").hide();
    $(".everyones_images .loading_more").addClass("loading");

    if(nextPage) {
      this.currentSearchPage = Math.ceil(DailyKos.Library.SearchResultImages.length / 20) + 1;
    } else {
      this.clearSearchResults();
      DailyKos.Library.SearchResultImages.reset();
      this.currentSearchPage = 1;
    }

    if (this.jqxhr) {
      this.jqxhr.abort();
      this.jqxhr = null;
    }
    this.jqxhr = DailyKos.Library.SearchResultImages.fetch({
      url: "/images/search?query="+currentSearch+"&page="+this.currentSearchPage,
      remove: false,
      success: function() {
        $(".search .loading").hide();
        if(_.isEmpty($(".search input").val())) {
          $(".search .cancel").hide();
        } else {
          $(".search .cancel").show();
        }

        if(DailyKos.Library.SearchResultImages.length === 0) {
          $(".everyones_images .no_results").show();
        } else {
          $(".everyones_images .no_results").hide();
        }

        $(".everyones_images .loading_more").removeClass("loading");
      }
    });

    return false;
  },
  repeatedEmptyQuery: function(currentSearch){
    var isThisQueryEmpty   = _.isEmpty(currentSearch.trim());
    var repeatedEmptyQuery = isThisQueryEmpty && this.isLastQueryEmpty;
    this.isLastQueryEmpty  = isThisQueryEmpty;

    return repeatedEmptyQuery;
  },
  keyDownOnSearchBox: function(e) {
    var isTab = this.searchOnTabKeyPress(e);
    if (!isTab) this.handleSearchChange(e);
    this.displayOverfillIndicator(e);
  },
  // When the user hits the escape key:
  // 1) close the drop down - this is already handled by visualsearch.js
  // 2) clear out search contents if the drop down is already closed
  clearOnEscapeKeyPress: function(e) {
    if ((e.type === 'keyup' && e.keyCode === 27)) {
      if (this.ddlWasClosed) {
        $('.VS-cancel-search-box')[0].click();
      }
    }

    var searchDropDown = $("#images ul.ui-autocomplete[style*='display: block']");
    this.ddlWasClosed = searchDropDown.length === 0;
  },
  searchOnTabKeyPress: function(e) {
    var isTabKey = e.keyCode === 9;

    if (isTabKey) {
      VS.dk.searchEvent(e);
      VS.dk.focusSearch(e);
    }

    return isTabKey;
  },
  // display a visual indicator when the searchbox has overfilled
  displayOverfillIndicator: function(e) {
    if ($('.VS-search-inner').height() > 28) {
      $('.VS-icon-search').addClass('VS-icon-ellipsis');
    } else {
      $('.VS-icon-search').removeClass('VS-icon-ellipsis');
    }
  },
  handleSearchChange: function(e) {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(this.performSearch, 300);
  },
  clearSearchForm: function() {
    this.visualSearch.searchBox.clearSearch(function(defaultBehavior) { defaultBehavior() });
  },
  clearSearchResults: function() {
    $(".everyones_images ul").empty();
  },
  setSearchQuery: function(event) {
    $(".search input").val($(event.target).data("query")).change();
    return false;
  },
  handleScroll: function() {
    var scrollPosition = $(".images").scrollTop() + $(".images").height();

    if($(".images .my_images").is(":visible") && scrollPosition >= $(".images .my_images").height()) {
      $(".my_images .loading_more").addClass("loading");
      this.currentUploadsPage = Math.ceil(DailyKos.Library.RecentlyUploadedImages.length / 20) + 1;
      DailyKos.Library.RecentlyUploadedImages.fetch({
        remove: false,
        url: "/images/recently_uploaded?page=" + this.currentUploadsPage,
        success: function() {
          $(".my_images .loading_more").removeClass("loading");
        }
      });
    } else if($(".images .everyones_images").is(":visible") && scrollPosition >= $(".images .everyones_images").height() + 8) {
      this.performSearch(true);
    }
  },
  initializeEditPane: function() {
    DailyKos.Library.EditView = new DailyKos.Library.ImageEditView({collection: DailyKos.Library.SelectedImages});
    $(".meta-data-wrapper").append(DailyKos.Library.EditView.render().el);
  },
  initializeUploader: function() {
    var _this = this;
    $('#new_image').fileupload({
      dataType: 'json',
      url: $('#new_image').attr("action"),
      dropZone: $("#image_library"),
      send: function (e, data) {
        var image = new DailyKos.Image({
          state: "uploading",
          percentComplete: 0,
          filename: data.files[0].name,
          errorMessage: null
        });
        DailyKos.Library.UploadingImages.add(image);
        data.context = image;
      },
      done: function (e, data) {
        var activeUploads;

        data.context.destroy();

        var image = new DailyKos.Image(data.result);
        DailyKos.Library.RecentlyUploadedImages.add(image, { at: 0 });

        // If multiple images are uploaded in storySelect (single select only)
        // mode, make sure only the last image is selected
        activeUploads = $('#new_image').fileupload('active');

        if(!DailyKos.Library.storySelectMode || activeUploads === 1) {
          image.set("selected", true);
          DailyKos.Library.SelectedImages.add(image);
        }

        DailyKos.Library.ImageLibrary.setButtonState();

        return false;
      },
      progress: function (e, data) {
        var percent = parseInt(data.loaded / data.total * 100, 10);
        if(percent == 100) { data.context.set("processing", true); }

        data.context.set("percentComplete", percent);
      },
      fail: function(e, data) {
        var errors;
        var messages = "";

        if(data.jqXHR.status === 503) {
          messages = "The server is too busy. Please verify the image size is less than 20MB, wait a moment and try again."
        } else {
          try {
            errors = $.parseJSON(data.jqXHR.responseText);

            _.each(errors.errors.image, function(msg) {
              messages += msg + " ";
            });

          } catch(e) {
            messages = "An error has occurred. Image Library accepts only .jpg, .gif., and .png file types smaller than 20MB. Please confirm your image meets those criteria before trying again. Contact the helpdesk for more support.";
          }
        }

        data.context.set("state", "error");
        data.context.set("errorMessage", messages);
      },
      dragover: function(e) {
        clearTimeout(_this.dragLeaveTimeout);
        $(_this.el).find("#new_image").addClass("dragging");
      },
      drop: function(e) {
        $(_this.el).find("#new_image").removeClass("dragging");
      }
    }).on('fileuploadsubmit', function() {
      _this.showMyImages();
    });

    $("#image_library").bind("dragleave", function() {
      _this.dragLeaveTimeout = setTimeout(function() {
        $(_this.el).find("#new_image").removeClass("dragging");
      }, 100);
    });
  }
});
_.namespace('DailyKos.Forms.CheckBox');

// Use this to trigger a form submit when one of your form inputs has data-submit-onchange='true'.
//
// For example
//   <!-- create a <form> that has an <input data-submit-onchange="true"> -->
//   <form action="/foo" data-remote="true" method="post">
//     <input data-submit-onchange="true" name="hide_comments" type="checkbox" value="true">
//   </form>
//
//   <!-- when an input with [data-submit-onchange='true'] is changed trigger a form submit -->
//   <script>
//     DailyKos.Forms.CheckBox.init()
//   </script>
//
// When the checkbox is clicked, the form will be submitted.
//
// If you only want the form to be submitted when the user is logged in, set the following data
// property to true.
//   <form data-login-required='true'>
//   ...
//   </form>
//
DailyKos.Forms.CheckBox.init = function() {
  // Given $form, returns the debounced function that submits that form.
  var debouncedSubmitter = _(formSubmitter).memoize(memHashFunction);

  // Bind submit-onchange listener
  $('body').on('change', "[data-submit-onchange='true']", function() {
    var $form = $(this.form);
    var isLoginRequired = $form.data('loginRequired');
    var isLoggedIn      = DailyKos.currentUserId();

    if (!isLoginRequired || isLoggedIn) {
      debouncedSubmitter($form)();
    }
  });

  function formSubmitter ($form) {
    var submit = _($form.submit).bind($form);
    return _(submit).debounce(3000);
  }

  function memHashFunction($form) {
    var hashKey = 'underscore-memo-hash';
    var hashVal = $form.data(hashKey);

    if (hashVal) return hashVal;

    hashVal = Math.random();
    $form.data(hashKey, hashVal);

    return hashVal;
  }
};
(function() {
  if (!window.DailyKos) {
    window.DailyKos = {};
  }

  window.DailyKos.LabelPlaceholders = (function() {
    var checkFields, hideLabel, initFormState, monitorFormState, placeHolderSupport, showLabel;
    placeHolderSupport = function() {
      var i;
      i = document.createElement('input');
      return 'placeholder' in i;
    };
    hideLabel = function(field) {
      return $(field).parents('p').find('label').hide();
    };
    showLabel = function(field) {
      return $(field).parents('p').find('label').show();
    };
    checkFields = function() {
      return _.each($(".label_placeholder"), function(field) {
        if ($(field).val()) {
          return hideLabel(field);
        } else {
          return showLabel(field);
        }
      });
    };
    monitorFormState = function() {
      setTimeout(function() {
        return checkFields();
      }, 150);
      return $('.label_placeholder').change(function() {
        return checkFields();
      }).keyup(function() {
        return $(this).change();
      }).keydown(function() {
        return $(this).change();
      });
    };
    initFormState = function() {
      _.each($(".label_placeholder"), function(field) {
        return hideLabel(field);
      });
      if (!placeHolderSupport()) {
        return monitorFormState();
      }
    };
    return {
      init: function() {
        return initFormState();
      }
    };
  })();

  $(function() {
    if ($('#main').length > 0 && $('#main').hasClass('label_placeholders')) {
      return DailyKos.LabelPlaceholders.init();
    }
  });

}).call(this);
/*
 * jqModal - Minimalist Modaling with jQuery
 *
 * Copyright (c) 2007-2014 Brice Burgess @IceburgBrice
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * $Version: 1.1.0 (2014.07.03 +r21)
 * Requires: jQuery 1.2.3+
 */
(function(e){e.fn.jqm=function(t){var n=e.extend({},e.jqm.params,t);return this.each(function(){var t=e(this),r=t.data("jqm");if(!r)r={ID:c++};t.data("jqm",e.extend(r,n)).addClass("jqm-init");n.trigger&&e(this).jqmAddTrigger(n.trigger)})};e.fn.jqmAddTrigger=function(n){return this.each(function(){if(!o(e(this),"jqmShow",n))t("jqmAddTrigger must be called on initialized modals")})};e.fn.jqmAddClose=function(n){return this.each(function(){if(!o(e(this),"jqmHide",n))t("jqmAddClose must be called on initialized modals")})};e.fn.jqmShow=function(t){return this.each(function(){!this._jqmShown&&n(e(this),t)})};e.fn.jqmHide=function(t){return this.each(function(){this._jqmShown&&r(e(this),t)})};var t=function(e){if(window.console&&window.console.error)window.console.error(e)},n=function(t,n){var r=t.data("jqm"),n=n||window.event,i=parseInt(t.css("z-index")),i=i>0?i:3e3,s=e("<div></div>").addClass(r.overlayClass).css({height:"100%",width:"100%",position:"fixed",left:0,top:0,"z-index":i-1,opacity:r.overlay/100}),o={w:t,c:r,o:s,t:n};t.css("z-index",i);if(r.ajax){var a=r.target||t,f=r.ajax;a=typeof a=="string"?e(a,t):e(a);if(f.substr(0,1)=="@")f=e(n).attr(f.substring(1));a.html(r.ajaxText).load(f,function(){r.onLoad&&r.onLoad.call(this,o);u(o)})}else{u(o)}},r=function(e,t){var n=e.data("jqm"),t=t||window.event,r={w:e,c:n,o:e.data("jqmv"),t:t};a(r)},i=function(t){if(t.c.overlay>0)t.o.prependTo("body");t.w.show();e.jqm.focusFunc(t.w);return true},s=function(e){e.w.hide()&&e.o&&e.o.remove();return true},o=function(t,n,r){if(!t.data("jqm"))return false;return e(r).each(function(){this[n]=this[n]||[];this[n].push(t)}).click(function(){var t=this;e.each(this[n],function(e,r){r[n](t)});return false})},u=function(t){var n=t.w,r=t.o,i=t.c;if(i.onShow(t)!==false){n[0]._jqmShown=true;if(i.modal){!h[0]&&f("bind");h.push(n)}else n.jqmAddClose(r);i.closeClass&&n.jqmAddClose(e("."+i.closeClass,n));i.toTop&&r&&n.before('<span id="jqmP'+i.ID+'"></span>').insertAfter(r);n.data("jqmv",r)}},a=function(t){var n=t.w,r=t.o,i=t.c;if(i.onHide(t)!==false){n[0]._jqmShown=false;if(i.modal){h.pop();!h[0]&&f("unbind")}i.toTop&&r&&e("#jqmP"+i.ID).after(n).remove()}},f=function(t){e(document)[t]("keypress keydown mousedown",l)},l=function(t){var n=e(t.target).data("jqm")||e(t.target).parents(".jqm-init:first").data("jqm"),r=h[h.length-1].data("jqm");if(n&&n.ID==r.ID)return true;return e.jqm.focusFunc(r)},c=0,h=[];e.jqm={params:{overlay:50,overlayClass:"jqmOverlay",closeClass:"jqmClose",trigger:".jqModal",ajax:false,target:false,ajaxText:"",modal:false,toTop:false,onShow:i,onHide:s,onLoad:false},focusFunc:function(t){e(":input:visible:first",t).focus();return false}}})(jQuery);
if(!DailyKos) var DailyKos = {};

DailyKos.SignInModal = (function() {
  var prepLoginForm = function() {
    $('#login_form').jqm({modal: true});
    $('#new_user #return_to').val(window.location.href);

    $('#new_user')
    .bind("ajax:success", function(evt, xhr, status, error){
      window.location = xhr['location'] || "/";
    })
    .bind("ajax:error", function(evt, xhr, status, error){
      error = xhr.responseText;
      if($('#login_form .error').length > 0) {
        $('#login_form .error').remove();
      }
      $('#logo_wrapper').after("<p class=error>" + error + "</p>");
    });

    $(document).keyup(function(e) {
      if($('#login_form').is(':visible') && e.which == 27) {
        $('#login_form').jqmHide();
      }

      if($('#signup_prompt').is(':visible') && e.which == 27) {
        $('#signup_prompt').jqmHide();
      }
    });

    return false;
  }
    
  return {
    init: function() {
      if ($('#signup_prompt').length > 0) {
        $('#signup_prompt').jqm({modal: true});
      }  
      
      if ($('#login_form').length > 0) {
          prepLoginForm();
        }
      },
      
      // there's a little slight of hand in this function, but
      // seems better than trying to mess with the jqModal settings
      modalSwitch: function() {
        $('#signup_prompt').fadeOut('fast');
        $('#login_form').fadeIn('fast');
        $('#login_form').jqmShow();
        $('#signup_prompt').jqmHide();
      }
    };
    
}());

$(document).ready(function() {
  if($("body").hasClass("layout_main")) {
    DailyKos.SignInModal.init();
  }
});
/*
 * Mailcheck https://github.com/Kicksend/mailcheck
 * Author
 * Derrick Ko (@derrickko)
 *
 * License
 * Copyright (c) 2012 Receivd, Inc.
 *
 * Licensed under the MIT License.
 *
 * v 1.1
 */

var Kicksend = {
	mailcheck : {
		threshold: 3,

		defaultDomains: ["yahoo.com", "google.com", "hotmail.com", "gmail.com", "me.com", "aol.com", "mac.com",
			"live.com", "comcast.net", "googlemail.com", "msn.com", "hotmail.co.uk", "yahoo.co.uk",
			"facebook.com", "verizon.net", "sbcglobal.net", "att.net", "gmx.com", "mail.com"],

		defaultTopLevelDomains: ["co.uk", "com", "net", "org", "info", "edu", "gov", "mil"],

		run: function(opts) {
			opts.domains = opts.domains || Kicksend.mailcheck.defaultDomains;
			opts.topLevelDomains = opts.topLevelDomains || Kicksend.mailcheck.defaultTopLevelDomains;
			opts.distanceFunction = opts.distanceFunction || Kicksend.sift3Distance;

			var result = Kicksend.mailcheck.suggest(encodeURI(opts.email), opts.domains, opts.topLevelDomains, opts.distanceFunction);

			if (result) {
				if (opts.suggested) {
					opts.suggested(result);
				}
			} else {
				if (opts.empty) {
					opts.empty();
				}
			}
		},

		suggest: function(email, domains, topLevelDomains, distanceFunction) {
			email = email.toLowerCase();

			var emailParts = this.splitEmail(email);

			var closestDomain = this.findClosestDomain(emailParts.domain, domains, distanceFunction);

			if (closestDomain) {
				if (closestDomain != emailParts.domain) {
					// The email address closely matches one of the supplied domains; return a suggestion
					return { address: emailParts.address, domain: closestDomain, full: emailParts.address + "@" + closestDomain };
				}
			} else {
				// The email address does not closely match one of the supplied domains
				var closestTopLevelDomain = this.findClosestDomain(emailParts.topLevelDomain, topLevelDomains);
				if (emailParts.domain && closestTopLevelDomain && closestTopLevelDomain != emailParts.topLevelDomain) {
					// The email address may have a mispelled top-level domain; return a suggestion
					var domain = emailParts.domain;
					closestDomain = domain.substring(0, domain.lastIndexOf(emailParts.topLevelDomain)) + closestTopLevelDomain;
					return { address: emailParts.address, domain: closestDomain, full: emailParts.address + "@" + closestDomain };
				}
			}
			/* The email address exactly matches one of the supplied domains, does not closely
			 * match any domain and does not appear to simply have a mispelled top-level domain,
			 * or is an invalid email address; do not return a suggestion.
			 */
			return false;
		},

		findClosestDomain: function(domain, domains, distanceFunction) {
			var dist;
			var minDist = 99;
			var closestDomain = null;

			if (!domain || !domains) {
				return false;
			}
			if(!distanceFunction) {
				distanceFunction = this.sift3Distance;
			}

			for (var i = 0; i < domains.length; i++) {
				if (domain === domains[i]) {
					return domain;
				}
				dist = distanceFunction(domain, domains[i]);
				if (dist < minDist) {
					minDist = dist;
					closestDomain = domains[i];
				}
			}

			if (minDist <= this.threshold && closestDomain !== null) {
				return closestDomain;
			} else {
				return false;
			}
		},

		sift3Distance: function(s1, s2) {
			// sift3: http://siderite.blogspot.com/2007/04/super-fast-and-accurate-string-distance.html
			if (s1 == null || s1.length === 0) {
				if (s2 == null || s2.length === 0) {
					return 0;
				} else {
					return s2.length;
				}
			}

			if (s2 == null || s2.length === 0) {
				return s1.length;
			}

			var c = 0;
			var offset1 = 0;
			var offset2 = 0;
			var lcs = 0;
			var maxOffset = 5;

			while ((c + offset1 < s1.length) && (c + offset2 < s2.length)) {
				if (s1.charAt(c + offset1) == s2.charAt(c + offset2)) {
					lcs++;
				} else {
					offset1 = 0;
					offset2 = 0;
					for (var i = 0; i < maxOffset; i++) {
						if ((c + i < s1.length) && (s1.charAt(c + i) == s2.charAt(c))) {
							offset1 = i;
							break;
						}
						if ((c + i < s2.length) && (s1.charAt(c) == s2.charAt(c + i))) {
							offset2 = i;
							break;
						}
					}
				}
				c++;
			}
			return (s1.length + s2.length) /2 - lcs;
		},

		splitEmail: function(email) {
			var parts = email.split('@');

			if (parts.length < 2) {
				return false;
			}

			for (var i = 0; i < parts.length; i++) {
				if (parts[i] === '') {
					return false;
				}
			}

			var domain = parts.pop();
			var domainParts = domain.split('.');
			var tld = '';

			if (domainParts.length == 0) {
				// The address does not have a top-level domain
				return false;
			} else if (domainParts.length == 1) {
				// The address has only a top-level domain (valid under RFC)
				tld = domainParts[0];
			} else {
				// The address has a domain and a top-level domain
				for (var i = 1; i < domainParts.length; i++) {
					tld += domainParts[i] + '.';
				}
				if (domainParts.length >= 2) {
					tld = tld.substring(0, tld.length - 1);
				}
			}

			return {
				topLevelDomain: tld,
				domain: domain,
				address: parts.join('@')
			}
		}
	}
};

if (window.jQuery) {
	(function($){
		$.fn.mailcheck = function(opts) {
			var self = this;
			if (opts.suggested) {
				var oldSuggested = opts.suggested;
				opts.suggested = function(result) {
					oldSuggested(self, result);
				};
			}

			if (opts.empty) {
				var oldEmpty = opts.empty;
				opts.empty = function() {
					oldEmpty.call(null, self);
				};
			}

			opts.email = this.val();
			Kicksend.mailcheck.run(opts);
		}
	})(jQuery);
};
if(!DailyKos) var DailyKos = {};

DailyKos.Navigation = (function() {
  var showUserControls = function() {
    $(".sub_navigation_container").hide();
    $(".navigation li").removeClass("active");
    $(".user_controls").show();
  };
  
  var hideUserControls = function() {
    $(".user_controls").hide();
    $(".navigation li").removeClass("active");
  }
  
  var toggleUserControls = function() {
    if($(".user_controls").is(":visible")) {
      hideUserControls();
    } else {
      showUserControls();
    }
  }
  
  return {
    init: function() {
      $("#header .navigation a").mouseover(function() {
        hideUserControls();
        $(".sub_navigation_container .sub_navigation").hide();
        $(".navigation li").removeClass("active");
        $(".sub_navigation_container ."+$(this).data("name")).show();
        $(".sub_navigation_container").show();
        $(this).parent().addClass("active");
      });
      
      $("#header").mouseleave(function(event) {
        $(".sub_navigation_container").hide();
        $(".navigation li").removeClass("active");
      });
      
      $("#header .username, #header .notifications").click(function() {
        toggleUserControls();
        return false;
      });
      
      $("body:not(#header .user_controls)").click(function(event) {
        hideUserControls();
      });
      
      $(window).scroll(function() {
        if($(this).scrollTop() > 130) {
          $("#header").css({position: "fixed", top: 0});
          $("#main").css({paddingTop: 45});
        } else {
          $("#header").css({position: "relative"});
          $("#main").css({paddingTop: 0});
        }
      });
    }
  };
}());

$(document).ready(function() {
  if($("body").hasClass("layout_main")) {
    DailyKos.Navigation.init();
  }
});

if(!DailyKos) var DailyKos = {};

DailyKos.UserEditor = (function() {
  var isIE = (navigator.appName == 'Microsoft Internet Explorer');
  
  var truncateFileName = function(uploadFileName) {
    var firstPart = uploadFileName.substring(0, 15);
    secondPartBegin = uploadFileName.length - 5;
    var secondPart = uploadFileName.substring(secondPartBegin);
    return firstPart + '. . .' + secondPart;
  }

  var setIFrameHeight = function(){
    var iframeHeight = $('#avatar_update').height() + 22;
    window.parent.postMessage(('height: ' + iframeHeight), '*');
  }
  
  var prepUploader = function() {
    var uploadFileName;
    $('#real_uploader').change(function() {
      uploadFileName = _.last($('#real_uploader').val().split("\\"));
      if(uploadFileName.length > 23) {
        uploadFileName = truncateFileName(uploadFileName);
      }
      $('.avatar_preview').addClass('faded');
      $('#upload_file_name').html(uploadFileName);
      $('.delete_image').addClass('faded').prop("disabled", true);
      $('#check_box_label').addClass('faded');
    });
    return false;
  }
  
  var prepDelete = function() {
    $('.delete_image').on("click", function(){
      if($('.delete_image').is(':checked')){
        $('.avatar_preview').addClass('faded');
        $('.fake_input').addClass('faded').attr('onclick', false);
     } else {
        $('.avatar_preview').removeClass('faded');
        $('.fake_input').removeClass('faded').attr('onclick', "$('#real_uploader').click();");
      }
    });
    return false;
  }
  
  var prepSubmit = function() {
    $('#submit').on("click", function(e) {
      if(!$('.delete_image').is(':checked') && $('#upload_file_name').html() === "") {
        e.preventDefault();
        $('#error_explanation').html("<p>You haven't selected any changes to make.</p>");
        setIFrameHeight();
        return false;
      }
    });
  }
  
  var prepIE = function() {
    $('.fake_input').hide();
    $('#real_uploader').show();
     $('#real_uploader').on("click", function() {
       $('.avatar_preview').addClass('faded');
       $('.delete_image').addClass('faded').prop("disabled", true);
       $('#check_box_label').addClass('faded');
     });
    return false;
  }
  
  return {
    setIFrameHeight: setIFrameHeight,
    init: function() {
      if(isIE) {
        prepIE();
      } else {
        prepUploader();
        prepSubmit();
      }
      prepDelete();
      if($('body').hasClass('action_update')) {
        setIFrameHeight();
      }
      return false;
    }
  };
}());
  if(!DailyKos) var DailyKos = {};

  DailyKos.SidebarItem = Backbone.Model.extend ({
  });

  DailyKos.SidebarItems = Backbone.Collection.extend ({
    model: DailyKos.SidebarItem,

    initialize: function(models, options){
      this.on('remove', this.hideModel);
      this.url = options.url;
      if(options.id !== undefined) { this.url = options.url + options.id + '.json'; }
    },
    hideModel: function(model){
      model.trigger('hide');
    }
  });

  DailyKos.SidebarItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'clearfix',
    events: {
     'mouseenter': 'applyTooltip'
     },
    initialize: function(){
      this.model.on('hide', this.remove, this);
      this.model.on('destroy', this.remove, this);
      this.model.on('change', this.render, this);
      this.template = Handlebars.compile($(this.options.template).html());
      this.tooltip_selector = this.options.tooltip_selector;
    },
    applyTooltip: function(e) {
        // Applies jQuery tools tooltip functionality
        //$('div[data-preview]').tooltip({position: 'center left', offset: [-10, -10], effect: 'fade'});
        $(this.tooltip_selector).tooltip({position: 'bottom center', offset: [1, 0], effect: 'fade'});
    },
    remove: function(){
      this.$el.remove();
    },
    render: function() {
      var attributes = this.model.toJSON();
      this.$el.html(this.template(attributes));
      return this;
    }
  });

  var SidebarItemsView = Backbone.View.extend({
    tagName: 'ol',
    initialize: function(){
      this.collection.on('add', this.addOne, this);
      this.collection.on('reset', this.addAll, this);
      this.template = this.options.template
      this.tooltip_selector = this.options.tooltip_selector;
    },
    addOne: function(sidebarItem){
      var sidebarItemView = new DailyKos.SidebarItemView({model: sidebarItem, template: this.template, tooltip_selector: this.tooltip_selector});
      this.$el.append(sidebarItemView.render().el);
    },
    addAll: function(){
      this.collection.forEach(this.addOne, this);
    },
    render: function() {
      this.addAll();
    }
  });
// This is the annotated source code for
// [VisualSearch.js](http://documentcloud.github.com/visualsearch/),
// a rich search box for real data.
//
// The annotated source HTML is generated by
// [Docco](http://jashkenas.github.com/docco/).

/** @license VisualSearch.js 0.4.0
 *  (c) 2011 Samuel Clay, @samuelclay, DocumentCloud Inc.
 *  VisualSearch.js may be freely distributed under the MIT license.
 *  For all details and documentation:
 *  http://documentcloud.github.com/visualsearch
 */

(function() {

  var $ = jQuery; // Handle namespaced jQuery

  // Setting up VisualSearch globals. These will eventually be made instance-based.
  if (!window.VS) window.VS = {};
  if (!VS.app)    VS.app    = {};
  if (!VS.ui)     VS.ui     = {};
  if (!VS.model)  VS.model  = {};
  if (!VS.utils)  VS.utils  = {};

  // Sets the version for VisualSearch to be used programatically elsewhere.
  VS.VERSION = '0.4.0';

  VS.VisualSearch = function(options) {
    var defaults = {
      container   : '',
      query       : '',
      autosearch  : true,
      unquotable  : [],
      remainder   : 'text',
      showFacets  : true,
      callbacks   : {
        search          : $.noop,
        focus           : $.noop,
        blur            : $.noop,
        facetMatches    : $.noop,
        valueMatches    : $.noop
      }
    };
    this.options           = _.extend({}, defaults, options);
    this.options.callbacks = _.extend({}, defaults.callbacks, options.callbacks);

    VS.app.hotkeys.initialize();
    this.searchQuery   = new VS.model.SearchQuery();
    this.searchBox     = new VS.ui.SearchBox({
        app: this,
        showFacets: this.options.showFacets
    });

    if (options.container) {
      var searchBox = this.searchBox.render().el;
      $(this.options.container).html(searchBox);
    }
    this.searchBox.value(this.options.query || '');

    // Disable page caching for browsers that incorrectly cache the visual search inputs.
    // This is forced the browser to re-render the page when it is retrieved in its history.
    $(window).bind('unload', function(e) {});

    // Gives the user back a reference to the `searchBox` so they
    // can use public methods.
    return this;
  };

  // Entry-point used to tie all parts of VisualSearch together. It will either attach
  // itself to `options.container`, or pass back the `searchBox` so it can be rendered
  // at will.
  VS.init = function(options) {
    return new VS.VisualSearch(options);
  };

})();

(function() {

var $ = jQuery; // Handle namespaced jQuery

// The search box is responsible for managing the many facet views and input views.
VS.ui.SearchBox = Backbone.View.extend({

  id  : 'search',

  events : {
    'click .VS-cancel-search-box' : 'clearSearch',
    'mousedown .VS-search-box'    : 'maybeFocusSearch',
    'dblclick .VS-search-box'     : 'highlightSearch',
    'click .VS-search-box'        : 'maybeTripleClick'
  },

  // Creating a new SearchBox registers handlers for re-rendering facets when necessary,
  // as well as handling typing when a facet is selected.
  initialize : function() {
    this.app = this.options.app;
    this.flags = {
      allSelected : false
    };
    this.facetViews = [];
    this.inputViews = [];
    _.bindAll(this, 'renderFacets', '_maybeDisableFacets', 'disableFacets',
              'deselectAllFacets', 'addedFacet', 'removedFacet', 'changedFacet');
    this.app.searchQuery
            .bind('reset', this.renderFacets)
            .bind('add', this.addedFacet)
            .bind('remove', this.removedFacet)
            .bind('change', this.changedFacet);
    $(document).bind('keydown', this._maybeDisableFacets);
    VS.dk = this
    VS.ui.SearchBox.dk = this;

    // Focus fix for IE.
    // - Add a click listener to the search box.
    // - When an attribute or search term is clicked do nothing.
    // - When an empty part of the search is clicked put the focus and caret on the search term.
    setTimeout(
      function(e){
        $('.VS-search-inner').click(function(e){
          if (e.target == this && VS.ui.SearchFacet.dk) {
            $('#image_library').focus();
            VS.ui.SearchFacet.dk.setCursorAtEnd(-1);
            VS.ui.SearchInput.dk.setCursorAtEnd(-1);
          }
        });
      }, 0
    );
  },

  // Renders the search box, but requires placement on the page through `this.el`.
  render : function() {
    $(this.el).append(JST['search_box']({}));
    $(document.body).setMode('no', 'search');

    return this;
  },

  // # Querying Facets #

  // Either gets a serialized query string or sets the faceted query from a query string.
  value : function(query) {
    if (query == null) return this.serialize();
    return this.setQuery(query);
  },

  // Uses the VS.app.searchQuery collection to serialize the current query from the various
  // facets that are in the search box.
  serialize : function() {
    var query           = [];
    var inputViewsCount = this.inputViews.length;

    this.app.searchQuery.each(_.bind(function(facet, i) {
      query.push(this.inputViews[i].value());
      query.push(facet.serialize());
    }, this));

    if (inputViewsCount) {
      query.push(this.inputViews[inputViewsCount-1].value());
    }

    return _.compact(query).join(' ');
  },

  // Returns any facet views that are currently selected. Useful for changing the value
  // callbacks based on what else is in the search box and which facet is being edited.
  selected: function() {
    return _.select(this.facetViews, function(view) {
      return view.modes.editing == 'is' || view.modes.selected == 'is';
    });
  },

  // Similar to `this.selected`, returns any facet models that are currently selected.
  selectedModels: function() {
    return _.pluck(this.selected(), 'model');
  },

  // Takes a query string and uses the SearchParser to parse and render it. Note that
  // `VS.app.SearchParser` refreshes the `VS.app.searchQuery` collection, which is bound
  // here to call `this.renderFacets`.
  setQuery : function(query) {
    this.currentQuery = query;
    VS.app.SearchParser.parse(this.app, query);
  },

  // Returns the position of a facet/input view. Useful when moving between facets.
  viewPosition : function(view) {
    var views    = view.type == 'facet' ? this.facetViews : this.inputViews;
    var position = _.indexOf(views, view);
    if (position == -1) position = 0;
    return position;
  },

  // Used to launch a search. Hitting enter or clicking the search button.
  searchEvent : function(e) {
    var query = this.value();
    this.focusSearch(e);
    this.value(query);
    this.app.options.callbacks.search(query, this.app.searchQuery);
  },

  // # Rendering Facets #

  // Add a new facet. Facet will be focused and ready to accept a value. Can also
  // specify position, in the case of adding facets from an inbetween input.
  addFacet : function(category, initialQuery, position) {
    category     = VS.utils.inflector.trim(category);
    initialQuery = VS.utils.inflector.trim(initialQuery || '');
    if (!category) return;

    var model = new VS.model.SearchFacet({
      category : category,
      value    : initialQuery || '',
      app      : this.app
    });
    this.app.searchQuery.add(model, {at: position});
  },

  // Renders a newly added facet, and selects it.
  addedFacet : function (model) {
    this.renderFacets();
    var facetView = _.detect(this.facetViews, function(view) {
      if (view.model == model) return true;
    });

    _.defer(function() {
      facetView.enableEdit();
    });
  },

  // Changing a facet programmatically re-renders it.
  changedFacet: function () {
    this.renderFacets();
  },

  // When removing a facet, potentially do something. For now, the adjacent
  // remaining facet is selected, but this is handled by the facet's view,
  // since its position is unknown by the time the collection triggers this
  // remove callback.
  removedFacet : function (facet, query, options) {},

  // Renders each facet as a searchFacet view.
  renderFacets : function() {
    this.facetViews = [];
    this.inputViews = [];

    this.$('.VS-search-inner').empty();

    this.app.searchQuery.each(_.bind(this.renderFacet, this));

    // Add on an n+1 empty search input on the very end.
    this.renderSearchInput();
    this.renderPlaceholder();
  },

  // Render a single facet, using its category and query value.
  renderFacet : function(facet, position) {
    var view = new VS.ui.SearchFacet({
      app   : this.app,
      model : facet,
      order : position
    });

    // Input first, facet second.
    this.renderSearchInput();
    this.facetViews.push(view);
    this.$('.VS-search-inner').children().eq(position*2).after(view.render().el);

    view.calculateSize();
    _.defer(_.bind(view.calculateSize, view));

    return view;
  },

  // Render a single input, used to create and autocomplete facets
  renderSearchInput : function() {
    var input = new VS.ui.SearchInput({
      position: this.inputViews.length,
      app: this.app,
      showFacets: this.options.showFacets
    });
    this.$('.VS-search-inner').append(input.render().el);
    this.inputViews.push(input);
  },

  // Handles showing/hiding the placeholder text
  renderPlaceholder : function() {
    var $placeholder = this.$('.VS-placeholder');
    if (this.app.searchQuery.length) {
      $placeholder.addClass("VS-hidden");
    } else {
      $placeholder.removeClass("VS-hidden")
                  .text(this.app.options.placeholder);
    }
  },

  // # Modifying Facets #

  // Clears out the search box. Command+A + delete can trigger this, as can a cancel button.
  //
  // If a `clearSearch` callback was provided, the callback is invoked and
  // provided with a function performs the actual removal of the data.  This
  // allows third-party developers to either clear data asynchronously, or
  // prior to performing their custom "clear" logic.
  clearSearch : function(e) {
    var actualClearSearch = _.bind(function() {
      this.disableFacets();
      this.value('');
      this.flags.allSelected = false;
      if (e.type === 'click') this.searchEvent(e);
      this.focusSearch(e);
    }, this);

    if (this.app.options.callbacks.clearSearch) {
      this.app.options.callbacks.clearSearch(actualClearSearch);
    } else {
      actualClearSearch();
    }

    _.defer(function() {
      $('#image_library').focus();
      VS.dk.focusSearch(e);
      VS.ui.SearchInput.dk.setCursorAtEnd(-1);
    })
  },

  // Command+A selects all facets.
  selectAllFacets : function() {
    this.flags.allSelected = true;

    $(document).one('click.selectAllFacets', this.deselectAllFacets);

    _.each(this.facetViews, function(facetView, i) {
      facetView.selectFacet();
    });
    _.each(this.inputViews, function(inputView, i) {
      inputView.selectText();
    });
  },

  // Used by facets and input to see if all facets are currently selected.
  allSelected : function(deselect) {
    if (deselect) this.flags.allSelected = false;
    return this.flags.allSelected;
  },

  // After `selectAllFacets` is engaged, this method is bound to the entire document.
  // This immediate disables and deselects all facets, but it also checks if the user
  // has clicked on either a facet or an input, and properly selects the view.
  deselectAllFacets : function(e) {
    this.disableFacets();

    if (this.$(e.target).is('.category,input')) {
      var el   = $(e.target).closest('.search_facet,.search_input');
      var view = _.detect(this.facetViews.concat(this.inputViews), function(v) {
        return v.el == el[0];
      });
      if (view.type == 'facet') {
        view.selectFacet();
      } else if (view.type == 'input') {
        _.defer(function() {
          view.enableEdit(true);
        });
      }
    }
  },

  // Disables all facets except for the passed in view. Used when switching between
  // facets, so as not to have to keep state of active facets.
  disableFacets : function(keepView) {
    _.each(this.inputViews, function(view) {
      if (view && view != keepView &&
          (view.modes.editing == 'is' || view.modes.selected == 'is')) {
        view.disableEdit();
      }
    });
    _.each(this.facetViews, function(view) {
      if (view && view != keepView &&
          (view.modes.editing == 'is' || view.modes.selected == 'is')) {
        view.disableEdit();
        view.deselectFacet();
      }
    });

    this.flags.allSelected = false;
    this.removeFocus();
    $(document).unbind('click.selectAllFacets');
  },

  // Resize all inputs to account for extra keystrokes which may be changing the facet
  // width incorrectly. This is a safety check to ensure inputs are correctly sized.
  resizeFacets : function(view) {
    _.each(this.facetViews, function(facetView, i) {
      if (!view || facetView == view) {
        facetView.resize();
      }
    });
  },

  // Handles keydown events on the document. Used to complete the Cmd+A deletion, and
  // blurring focus.
  _maybeDisableFacets : function(e) {
    if (this.flags.allSelected && VS.app.hotkeys.key(e) == 'backspace') {
      e.preventDefault();
      this.clearSearch(e);
      return false;
    } else if (this.flags.allSelected && VS.app.hotkeys.printable(e)) {
      this.clearSearch(e);
    }
  },

  // # Focusing Facets #

  // Move focus between facets and inputs. Takes a direction as well as many options
  // for skipping over inputs and only to facets, placement of cursor position in facet
  // (i.e. at the end), and selecting the text in the input/facet.
  focusNextFacet : function(currentView, direction, options) {
    options = options || {};
    var viewCount    = this.facetViews.length;
    var viewPosition = options.viewPosition || this.viewPosition(currentView);

    if (!options.skipToFacet) {
      // Correct for bouncing between matching text and facet arrays.
      if (currentView.type == 'text'  && direction > 0) direction -= 1;
      if (currentView.type == 'facet' && direction < 0) direction += 1;
    } else if (options.skipToFacet && currentView.type == 'text' &&
               viewCount == viewPosition && direction >= 0) {
      // Special case of looping around to a facet from the last search input box.
      return false;
    }
    var view, next = Math.min(viewCount, viewPosition + direction);

    if (currentView.type == 'text') {
      if (next >= 0 && next < viewCount) {
        view = this.facetViews[next];
      } else if (next == viewCount) {
        view = this.inputViews[this.inputViews.length-1];
      }
      if (view && options.selectFacet && view.type == 'facet') {
        view.selectFacet();
      } else if (view) {
        view.enableEdit();
        view.setCursorAtEnd(direction || options.startAtEnd);
      }
    } else if (currentView.type == 'facet') {
      if (options.skipToFacet) {
        if (next >= viewCount || next < 0) {
          view = _.last(this.inputViews);
          view.enableEdit();
        } else {
          view = this.facetViews[next];
          view.enableEdit();
          view.setCursorAtEnd(direction || options.startAtEnd);
        }
      } else {
        view = this.inputViews[next];
        view.enableEdit();
      }
    }
    if (options.selectText) view.selectText();
    this.resizeFacets();

    return true;
  },

  maybeFocusSearch : function(e) {
    if ($(e.target).is('.VS-search-box') ||
        $(e.target).is('.VS-search-inner') ||
        e.type == 'keydown') {
      this.focusSearch(e);
    }
  },

  // Bring focus to last input field.
  focusSearch : function(e, selectText) {
    var view = this.inputViews[this.inputViews.length-1];
    view.enableEdit(selectText);
    if (!selectText) view.setCursorAtEnd(-1);
    if (e.type == 'keydown') {
      view.keydown(e);
      view.box.trigger('keydown');
    }
    _.defer(_.bind(function() {
      if (!this.$('input:focus').length) {
        view.enableEdit(selectText);
      }
    }, this));
  },

  // Double-clicking on the search wrapper should select the existing text in
  // the last search input. Also start the triple-click timer.
  highlightSearch : function(e) {
    if ($(e.target).is('.VS-search-box') ||
        $(e.target).is('.VS-search-inner') ||
        e.type == 'keydown') {
      var lastinput = this.inputViews[this.inputViews.length-1];
      lastinput.startTripleClickTimer();
      this.focusSearch(e, true);
    }
  },

  maybeTripleClick : function(e) {
    var lastinput = this.inputViews[this.inputViews.length-1];
    return lastinput.maybeTripleClick(e);
  },

  // Used to show the user is focused on some input inside the search box.
  addFocus : function() {
    this.app.options.callbacks.focus();
    this.$('.VS-search-box').addClass('VS-focus');
  },

  // User is no longer focused on anything in the search box.
  removeFocus : function() {
    this.app.options.callbacks.blur();
    var focus = _.any(this.facetViews.concat(this.inputViews), function(view) {
      return view.isFocused();
    });
    if (!focus) this.$('.VS-search-box').removeClass('VS-focus');
  },

  // Show a menu which adds pre-defined facets to the search box. This is unused for now.
  showFacetCategoryMenu : function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.facetCategoryMenu && this.facetCategoryMenu.modes.open == 'is') {
      return this.facetCategoryMenu.close();
    }

    var items = [
      {title: 'Account', onClick: _.bind(this.addFacet, this, 'account', '')},
      {title: 'Project', onClick: _.bind(this.addFacet, this, 'project', '')},
      {title: 'Filter', onClick: _.bind(this.addFacet, this, 'filter', '')},
      {title: 'Access', onClick: _.bind(this.addFacet, this, 'access', '')}
    ];

    var menu = this.facetCategoryMenu || (this.facetCategoryMenu = new dc.ui.Menu({
      items       : items,
      standalone  : true
    }));

    this.$('.VS-icon-search').after(menu.render().open().content);
    return false;
  }

});

})();

(function() {

var $ = jQuery; // Handle namespaced jQuery

// This is the visual search facet that holds the category and its autocompleted
// input field.
VS.ui.SearchFacet = Backbone.View.extend({

  type : 'facet',

  className : 'search_facet',

  events : {
    'click .category'           : 'selectFacet',
    'keydown input'             : 'keydown',
    'mousedown input'           : 'enableEdit',
    'mouseover .VS-icon-cancel' : 'showDelete',
    'mouseout .VS-icon-cancel'  : 'hideDelete',
    'click .VS-icon-cancel'     : 'remove'
  },

  initialize : function(options) {
    this.flags = {
      canClose : false
    };
    _.bindAll(this, 'set', 'keydown', 'deselectFacet', 'deferDisableEdit');
    VS.ui.SearchFacet.dk = this;
  },

  // Rendering the facet sets up autocompletion, events on blur, and populates
  // the facet's input with its starting value.
  render : function() {
    $(this.el).html(JST['search_facet']({
      model : this.model
    }));

    this.setMode('not', 'editing');
    this.setMode('not', 'selected');
    this.box = this.$('input');
    this.box.val(this.model.label());
    this.box.bind('blur', this.deferDisableEdit);
    // Handle paste events with `propertychange`
    this.box.bind('input propertychange', this.keydown);
    this.setupAutocomplete();

    return this;
  },

  // This method is used to setup the facet's input to auto-grow.
  // This is defered in the searchBox so it can be attached to the
  // DOM to get the correct font-size.
  calculateSize : function() {
    this.box.autoGrowInput();
    this.box.unbind('updated.autogrow');
    this.box.bind('updated.autogrow', _.bind(this.moveAutocomplete, this));
  },

  // Forces a recalculation of this facet's input field's value. Called when
  // the facet is focused, removed, or otherwise modified.
  resize : function(e) {
    this.box.trigger('resize.autogrow', e);
  },

  // Watches the facet's input field to see if it matches the beginnings of
  // words in `autocompleteValues`, which is different for every category.
  // If the value, when selected from the autocompletion menu, is different
  // than what it was, commit the facet and search for it.
  setupAutocomplete : function() {
    this.box.autocomplete({
      source    : _.bind(this.autocompleteValues, this),
      minLength : 0,
      delay     : 0,
      autoFocus : true,
      position  : {offset : "0 5"},
      create    : _.bind(function(e, ui) {
        $(this.el).find('.ui-autocomplete-input').css('z-index','auto');
      }, this),
      select    : _.bind(function(e, ui) {
        e.preventDefault();
        var originalValue = this.model.get('value');
        this.set(ui.item.value);
        if (originalValue != ui.item.value || this.box.val() != ui.item.value) {
          if (this.options.app.options.autosearch) {
            this.search(e);
          } else {
              _.defer(function(){
                $('#image_library').focus();
                VS.ui.SearchInput.dk.setCursorAtEnd(-1);
              });
              this.options.app.searchBox.renderFacets();
              this.options.app.searchBox.focusNextFacet(this, 1, {viewPosition: this.options.order});
          }
        }
        return false;
      }, this),
      open      : _.bind(function(e, ui) {
        var box = this.box;
        this.box.autocomplete('widget').find('.ui-menu-item').each(function() {
          var $value = $(this),
              autoCompleteData = $value.data('item.autocomplete') || $value.data('ui-autocomplete-item');

          if (autoCompleteData['value'] == box.val() && box.data('uiAutocomplete').menu.activate) {
            box.data('uiAutocomplete').menu.activate(new $.Event("mouseover"), $value);
          }
        });
      }, this)
    });

    this.box.autocomplete('widget').addClass('VS-interface');
  },

  // As the facet's input field grows, it may move to the next line in the
  // search box. `autoGrowInput` triggers an `updated` event on the input
  // field, which is bound to this method to move the autocomplete menu.
  moveAutocomplete : function() {
    var autocomplete = this.box.data('uiAutocomplete');
    if (autocomplete) {
      autocomplete.menu.element.position({
        my        : "left top",
        at        : "left bottom",
        of        : this.box.data('uiAutocomplete').element,
        collision : "flip",
        offset    : "0 5"
      });
    }
  },

  // When a user enters a facet and it is being edited, immediately show
  // the autocomplete menu and size it to match the contents.
  searchAutocomplete : function(e) {
    var autocomplete = this.box.data('uiAutocomplete');
    if (autocomplete) {
      var menu = autocomplete.menu.element;
      autocomplete.search();

      // Resize the menu based on the correctly measured width of what's bigger:
      // the menu's original size or the menu items' new size.
      menu.outerWidth(Math.max(
        menu.width('').outerWidth(),
        autocomplete.element.outerWidth()
      ));
    }
  },

  // Closes the autocomplete menu. Called on disabling, selecting, deselecting,
  // and anything else that takes focus out of the facet's input field.
  closeAutocomplete : function() {
    var autocomplete = this.box.data('uiAutocomplete');
    if (autocomplete) {
      autocomplete.close();
    } else {
      _.defer(function() {
        $('#images.action_library.controller_images.layout_application.no_search').focus();
        VS.ui.SearchInput.dk.setCursorAtEnd(-1);
      });
    }
  },

  // Search terms used in the autocomplete menu. These are specific to the facet,
  // and only match for the facet's category. The values are then matched on the
  // first letter of any word in matches, and finally sorted according to the
  // value's own category. You can pass `preserveOrder` as an option in the
  // `facetMatches` callback to skip any further ordering done client-side.
  autocompleteValues : function(req, resp) {
    var category = this.model.get('category');
    var value    = this.model.get('value');
    var searchTerm = req.term;

    this.options.app.options.callbacks.valueMatches(category, searchTerm, function(matches, options) {
      options = options || {};
      matches = matches || [];

      if (searchTerm && value != searchTerm) {
        if (options.preserveMatches) {
          resp(matches);
        } else {
          var re = VS.utils.inflector.escapeRegExp(searchTerm || '');
          var matcher = new RegExp('\\b' + re, 'i');
          matches = $.grep(matches, function(item) {
            return matcher.test(item) ||
                   matcher.test(item.value) ||
                   matcher.test(item.label);
        });
        }
      }

      if (options.preserveOrder) {
        resp(matches);
      } else {
        resp(_.sortBy(matches, function(match) {
          if (match == value || match.value == value) return '';
          else return match;
        }));
      }
    });

  },

  // Sets the facet's model's value.
  set : function(value) {
    if (!value) return;
    this.model.set({'value': value});
  },

  // Before the searchBox performs a search, we need to close the
  // autocomplete menu.
  search : function(e, direction) {
    if (!direction) direction = 1;
    this.closeAutocomplete();
    this.options.app.searchBox.searchEvent(e);
    _.defer(_.bind(function() {
      this.options.app.searchBox.focusNextFacet(this, direction, {viewPosition: this.options.order});
    }, this));
  },

  // Begin editing the facet's input. This is called when the user enters
  // the input either from another facet or directly clicking on it.
  //
  // This method tells all other facets and inputs to disable so it can have
  // the sole focus. It also prepares the autocompletion menu.
  enableEdit : function() {
    if (this.modes.editing != 'is') {
      this.setMode('is', 'editing');
      this.deselectFacet();
      if (this.box.val() == '') {
        this.box.val(this.model.get('value'));
      }
    }

    this.flags.canClose = false;
    this.options.app.searchBox.disableFacets(this);
    this.options.app.searchBox.addFocus();
    _.defer(_.bind(function() {
      this.options.app.searchBox.addFocus();
    }, this));
    this.resize();
    this.searchAutocomplete();
    this.box.focus();
  },

  // When the user blurs the input, they may either be going to another input
  // or off the search box entirely. If they go to another input, this facet
  // will be instantly disabled, and the canClose flag will be turned back off.
  //
  // However, if the user clicks elsewhere on the page, this method starts a timer
  // that checks if any of the other inputs are selected or are being edited. If
  // not, then it can finally close itself and its autocomplete menu.
  deferDisableEdit : function() {
    this.flags.canClose = true;
    _.delay(_.bind(function() {
      if (this.flags.canClose && !this.box.is(':focus') &&
          this.modes.editing == 'is' && this.modes.selected != 'is') {
        this.disableEdit();
      }
    }, this), 250);
  },

  // Called either by other facets receiving focus or by the timer in `deferDisableEdit`,
  // this method will turn off the facet, remove any text selection, and close
  // the autocomplete menu.
  disableEdit : function() {
    var newFacetQuery = VS.utils.inflector.trim(this.box.val());
    if (newFacetQuery != this.model.get('value')) {
      this.set(newFacetQuery);
    }
    this.flags.canClose = false;
    this.box.selectRange(0, 0);
    this.box.blur();
    this.setMode('not', 'editing');
    this.closeAutocomplete();
    this.options.app.searchBox.removeFocus();
  },

  // Selects the facet, which blurs the facet's input and highlights the facet.
  // If this is the only facet being selected (and not part of a select all event),
  // we attach a mouse/keyboard watcher to check if the next action by the user
  // should delete this facet or just deselect it.
  selectFacet : function(e) {
    if (e) e.preventDefault();
    var allSelected = this.options.app.searchBox.allSelected();
    if (this.modes.selected == 'is') return;

    if (this.box.is(':focus')) {
      this.box.setCursorPosition(0);
      this.box.blur();
    }

    this.flags.canClose = false;
    this.closeAutocomplete();
    this.setMode('is', 'selected');
    this.setMode('not', 'editing');
    if (!allSelected || e) {
      $(document).unbind('keydown.facet', this.keydown);
      $(document).unbind('click.facet', this.deselectFacet);
      _.defer(_.bind(function() {
        $(document).unbind('keydown.facet').bind('keydown.facet', this.keydown);
        $(document).unbind('click.facet').one('click.facet', this.deselectFacet);
      }, this));
      this.options.app.searchBox.disableFacets(this);
      this.options.app.searchBox.addFocus();
    }
    return false;
  },

  // Turns off highlighting on the facet. Called in a variety of ways, this
  // only deselects the facet if it is selected, and then cleans up the
  // keyboard/mouse watchers that were created when the facet was first
  // selected.
  deselectFacet : function(e) {
    if (e) e.preventDefault();
    if (this.modes.selected == 'is') {
      this.setMode('not', 'selected');
      this.closeAutocomplete();
      this.options.app.searchBox.removeFocus();
    }
    $(document).unbind('keydown.facet', this.keydown);
    $(document).unbind('click.facet', this.deselectFacet);
    return false;
  },

  // Is the user currently focused in this facet's input field?
  isFocused : function() {
    return this.box.is(':focus');
  },

  // Hovering over the delete button styles the facet so the user knows that
  // the delete button will kill the entire facet.
  showDelete : function() {
    $(this.el).addClass('search_facet_maybe_delete');
  },

  // On `mouseout`, the user is no longer hovering on the delete button.
  hideDelete : function() {
    $(this.el).removeClass('search_facet_maybe_delete');
  },

  // When switching between facets, depending on the direction the cursor is
  // coming from, the cursor in this facet's input field should match the original
  // direction.
  setCursorAtEnd : function(direction) {
    if (direction == -1) {
      this.box.setCursorPosition(this.box.val().length);
    } else {
      this.box.setCursorPosition(0);
    }
  },

  // Deletes the facet and sends the cursor over to the nearest input field.
  remove : function(e) {
    var committed = this.model.get('value');
    this.deselectFacet();
    this.disableEdit();
    this.options.app.searchQuery.remove(this.model);

    var isClickRemoveAttribute = (
      e.currentTarget &&
      e.currentTarget.className === "search_facet_remove VS-icon VS-icon-cancel" &&
      e.type === "click"
    );

    if (isClickRemoveAttribute || (committed && this.options.app.options.autosearch)) {
      this.search(e, -1);
    } else {
      this.options.app.searchBox.renderFacets();
      this.options.app.searchBox.focusNextFacet(this, -1, {viewPosition: this.options.order});
    }
  },

  // Selects the text in the facet's input field. When the user tabs between
  // facets, convention is to highlight the entire field.
  selectText: function() {
    this.box.selectRange(0, this.box.val().length);
  },

  // Handles all keyboard inputs when in the facet's input field. This checks
  // for movement between facets and inputs, entering a new value that needs
  // to be autocompleted, as well as the removal of this facet.
  keydown : function(e) {
    var key = VS.app.hotkeys.key(e);

    if ((key == 'enter' || key == 'tab') && this.box.val()) {
      this.disableEdit();
      this.search(e);
    } else if (key == 'left') {
      if (this.modes.selected == 'is') {
        this.deselectFacet();
        this.options.app.searchBox.focusNextFacet(this, -1, {startAtEnd: -1});
      } else if (this.box.getCursorPosition() == 0 && !this.box.getSelection().length) {
        this.selectFacet();
      }
    } else if (key == 'right') {
      if (this.modes.selected == 'is') {
        e.preventDefault();
        this.deselectFacet();
        this.setCursorAtEnd(0);
        this.enableEdit();
      } else if (this.box.getCursorPosition() == this.box.val().length) {
        e.preventDefault();
        this.disableEdit();
        this.options.app.searchBox.focusNextFacet(this, 1);
      }
    } else if (VS.app.hotkeys.shift && key == 'tab') {
      e.preventDefault();
      this.options.app.searchBox.focusNextFacet(this, -1, {
        startAtEnd  : -1,
        skipToFacet : true,
        selectText  : true
      });
    } else if (key == 'tab') {
    } else if (VS.app.hotkeys.command && (e.which == 97 || e.which == 65)) {
      e.preventDefault();
      this.options.app.searchBox.selectAllFacets();
      return false;
    } else if (VS.app.hotkeys.printable(e) && this.modes.selected == 'is') {
      this.options.app.searchBox.focusNextFacet(this, -1, {startAtEnd: -1});
      this.remove(e);
    } else if (key == 'backspace') {
      if (this.modes.selected == 'is') {
        e.preventDefault();
        this.remove(e);
      } else if (this.box.getCursorPosition() == 0 &&
                 !this.box.getSelection().length) {
        e.preventDefault();
        this.selectFacet();
      }
    }

    // Handle paste events
    if (e.which == null) {
        // this.searchAutocomplete(e);
        _.defer(_.bind(this.resize, this, e));
    } else {
      this.resize(e);
    }
  }

});

})();

(function() {

var $ = jQuery; // Handle namespaced jQuery

// This is the visual search input that is responsible for creating new facets.
// There is one input placed in between all facets.
VS.ui.SearchInput = Backbone.View.extend({

  type : 'text',

  className : 'search_input ui-menu',

  events : {
    'keypress input'  : 'keypress',
    'keydown input'   : 'keydown',
    'click input'     : 'maybeTripleClick',
    'dblclick input'  : 'startTripleClickTimer'
  },

  initialize : function() {
    this.app = this.options.app;
    var _this = this;
    $('#image_library').on('scroll', function() { _this.moveAutocomplete() });
    this.flags = {
      canClose : false
    };
    _.bindAll(this, 'removeFocus', 'addFocus', 'moveAutocomplete', 'deferDisableEdit');
    VS.ui.SearchInput.dk = this;
  },

  // Rendering the input sets up autocomplete, events on focusing and blurring
  // the input, and the auto-grow of the input.
  render : function() {
    $(this.el).html(JST['search_input']({}));

    this.setMode('not', 'editing');
    this.setMode('not', 'selected');
    this.box = this.$('input');
    this.box.autoGrowInput();
    this.box.bind('updated.autogrow', this.moveAutocomplete);
    this.box.bind('blur',  this.deferDisableEdit);
    this.box.bind('focus', this.addFocus);
    this.setupAutocomplete();

    return this;
  },

  // Watches the input and presents an autocompleted menu, taking the
  // remainder of the input field and adding a separate facet for it.
  //
  // See `addTextFacetRemainder` for explanation on how the remainder works.
  setupAutocomplete : function() {
    this.box.autocomplete({
      minLength : this.options.showFacets ? 0 : 1,
      delay     : 50,
      autoFocus : true,
      position  : {at : "left bottom+10", offset : "0 -1"},
      source    : _.bind(this.autocompleteValues, this),
      create    : _.bind(function(e, ui) {
        $(this.el).find('.ui-autocomplete-input').css('z-index','auto');
      }, this),
      select    : _.bind(function(e, ui) {
        e.preventDefault();
        // stopPropogation does weird things in jquery-ui 1.9
        // e.stopPropagation();
        var remainder = this.addTextFacetRemainder(ui.item.value);
        var position  = this.options.position + (remainder ? 1 : 0);
        this.app.searchBox.addFacet(ui.item instanceof String ? ui.item : ui.item.value, '', position);
        return false;
      }, this)
    });

    // Renders the results grouped by the categories they belong to.
    this.box.data('uiAutocomplete')._renderMenu = function(ul, items) {
      var category = '';
      _.each(items, _.bind(function(item, i) {
        if (item.category && item.category != category) {
          ul.append('<li class="ui-autocomplete-category">'+item.category+'</li>');
          category = item.category;
        }

        if(this._renderItemData) {
          this._renderItemData(ul, item);
        } else {
          this._renderItem(ul, item);
        }

      }, this));
    };

    this.box.autocomplete('widget').addClass('VS-interface');
  },

  // Search terms used in the autocomplete menu. The values are matched on the
  // first letter of any word in matches, and finally sorted according to the
  // value's own category. You can pass `preserveOrder` as an option in the
  // `facetMatches` callback to skip any further ordering done client-side.
  autocompleteValues : function(req, resp) {
    var searchTerm = req.term;
    var fullWord   = searchTerm.match(/\w+\*?/); // Autocomplete the full word otherwise autocomplete opens on spaces. Ex: We don't want autocomplete to open on the space after "horses "
    var re         = VS.utils.inflector.escapeRegExp(fullWord && fullWord[0] || '');
    this.app.options.callbacks.facetMatches(function(prefixes, options) {
      options = options || {};
      prefixes = prefixes || [];

      // Only match from the beginning of the word.
      var matcher    = new RegExp('^' + re, 'i');
      var matches    = $.grep(prefixes, function(item) {
        return item && matcher.test(item.label || item);
      });

      if (options.preserveOrder) {
        resp(matches);
      } else {
        resp(_.sortBy(matches, function(match) {
          if (match.label) return match.category + '-' + match.label;
          else             return match;
        }));
      }
    });

    DailyKos.Library.ImageLibraryView.self.handleSearchChange();
  },

  // Closes the autocomplete menu. Called on disabling, selecting, deselecting,
  // and anything else that takes focus out of the facet's input field.
  closeAutocomplete : function() {
    var autocomplete = this.box.data('uiAutocomplete');
    if (autocomplete) autocomplete.close();
  },

  // As the input field grows, it may move to the next line in the
  // search box. `autoGrowInput` triggers an `updated` event on the input
  // field, which is bound to this method to move the autocomplete menu.
  moveAutocomplete : function() {
    var autocomplete = this.box.data('uiAutocomplete');
    if (autocomplete) {
      autocomplete.menu.element.position({
        my        : "left top",
        at        : "left bottom+10",
        of        : this.box.data('uiAutocomplete').element,
        collision : "none",
        offset    : '0 -1'
      });
    }
  },

  // When a user enters a facet and it is being edited, immediately show
  // the autocomplete menu and size it to match the contents.
  searchAutocomplete : function(e) {
    var autocomplete = this.box.data('uiAutocomplete');
    if (autocomplete) {
      var menu = autocomplete.menu.element;
      autocomplete.search();

      // Resize the menu based on the correctly measured width of what's bigger:
      // the menu's original size or the menu items' new size.
      menu.outerWidth(Math.max(
        menu.width('').outerWidth(),
        autocomplete.element.outerWidth()
      ));
    }
  },

  // If a user searches for "word word category", the category would be
  // matched and autocompleted, and when selected, the "word word" would
  // also be caught as the remainder and then added in its own facet.
  addTextFacetRemainder : function(facetValue) {
    var boxValue = this.box.val();
    var lastWord = boxValue.match(/\b(\w+)$/);

    if (!lastWord) {
      return '';
    }

    var matcher = new RegExp(lastWord[0], "i");
    if (facetValue.search(matcher) == 0) {
      boxValue = boxValue.replace(/\b(\w+)$/, '');
    }
    boxValue = boxValue.replace('^\s+|\s+$', '');

    if (boxValue) {
      this.app.searchBox.addFacet(this.app.options.remainder, boxValue, this.options.position);
    }

    return boxValue;
  },

  // Directly called to focus the input. This is different from `addFocus`
  // because this is not called by a focus event. This instead calls a
  // focus event causing the input to become focused.
  enableEdit : function(selectText) {
    this.addFocus();
    if (selectText) {
      this.selectText();
    }
    this.box.focus();
  },

  // Event called on user focus on the input. Tells all other input and facets
  // to give up focus, and starts revving the autocomplete.
  addFocus : function() {
    this.flags.canClose = false;
    if (!this.app.searchBox.allSelected()) {
      this.app.searchBox.disableFacets(this);
    }
    this.app.searchBox.addFocus();
    this.setMode('is', 'editing');
    this.setMode('not', 'selected');
    if (!this.app.searchBox.allSelected()) {
        this.searchAutocomplete();
    }
  },

  // Directly called to blur the input. This is different from `removeFocus`
  // because this is not called by a blur event.
  disableEdit : function() {
    this.box.blur();
    this.removeFocus();
  },

  // Event called when user blur's the input, either through the keyboard tabbing
  // away or the mouse clicking off. Cleans up
  removeFocus : function() {
    this.flags.canClose = false;
    this.app.searchBox.removeFocus();
    this.setMode('not', 'editing');
    this.setMode('not', 'selected');
    this.closeAutocomplete();
  },

  // When the user blurs the input, they may either be going to another input
  // or off the search box entirely. If they go to another input, this facet
  // will be instantly disabled, and the canClose flag will be turned back off.
  //
  // However, if the user clicks elsewhere on the page, this method starts a timer
  // that checks if any of the other inputs are selected or are being edited. If
  // not, then it can finally close itself and its autocomplete menu.
  deferDisableEdit : function() {
    this.flags.canClose = true;
    _.delay(_.bind(function() {
      if (this.flags.canClose &&
          !this.box.is(':focus') &&
          this.modes.editing == 'is') {
        this.disableEdit();
      }
    }, this), 250);
  },

  // Starts a timer that will cause a triple-click, which highlights all facets.
  startTripleClickTimer : function() {
    this.tripleClickTimer = setTimeout(_.bind(function() {
      this.tripleClickTimer = null;
    }, this), 500);
  },

  // Event on click that checks if a triple click is in play. The
  // `tripleClickTimer` is counting down, ready to be engaged and intercept
  // the click event to force a select all instead.
  maybeTripleClick : function(e) {
    if (!!this.tripleClickTimer) {
      e.preventDefault();
      this.app.searchBox.selectAllFacets();
      return false;
    }
  },

  // Is the user currently focused in the input field?
  isFocused : function() {
    return this.box.is(':focus');
  },

  // When serializing the facets, the inputs need to also have their values represented,
  // in case they contain text that is not yet faceted (but will be once the search is
  // completed).
  value : function() {
    return this.box.val();
  },

  // When switching between facets and inputs, depending on the direction the cursor
  // is coming from, the cursor in this facet's input field should match the original
  // direction.
  setCursorAtEnd : function(direction) {
    if (direction == -1) {
      this.box.setCursorPosition(this.box.val().length);
    } else {
      this.box.setCursorPosition(0);
    }
  },

  // Selects the entire range of text in the input. Useful when tabbing between inputs
  // and facets.
  selectText : function() {
    this.box.selectRange(0, this.box.val().length);
    if (!this.app.searchBox.allSelected()) {
      this.box.focus();
    } else {
      this.setMode('is', 'selected');
    }
  },

  // Before the searchBox performs a search, we need to close the
  // autocomplete menu.
  search : function(e, direction) {
    if (!direction) direction = 0;
    this.closeAutocomplete();
    this.app.searchBox.searchEvent(e);
    _.defer(_.bind(function() {
      this.app.searchBox.focusNextFacet(this, direction);
    }, this));
  },

  // Callback fired on key press in the search box. We search when they hit return.
  keypress : function(e) {
    var key = VS.app.hotkeys.key(e);

    if (key == 'enter' || key == 'tab') {
      return this.search(e, 100);
    } else if (VS.app.hotkeys.colon(e)) {
      this.box.trigger('resize.autogrow', e);
      var query    = this.box.val();
      var prefixes = [];
      if (this.app.options.callbacks.facetMatches) {
          this.app.options.callbacks.facetMatches(function(p) {
              prefixes = p;
          });
      }
      var labels   = _.map(prefixes, function(prefix) {
        if (prefix.label) return prefix.label;
        else              return prefix;
      });
      if (_.contains(labels, query)) {
        e.preventDefault();
        var remainder = this.addTextFacetRemainder(query);
        var position  = this.options.position + (remainder?1:0);
        this.app.searchBox.addFacet(query, '', position);
        return false;
      }
    } else if (key == 'backspace') {
      if (this.box.getCursorPosition() == 0 && !this.box.getSelection().length) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        this.app.searchBox.resizeFacets();
        return false;
      }
    }
  },

  // Handles all keyboard inputs when in the input field. This checks
  // for movement between facets and inputs, entering a new value that needs
  // to be autocompleted, as well as stepping between facets with backspace.
  keydown : function(e) {
    var key = VS.app.hotkeys.key(e);

    if (key == 'left') {
      if (this.box.getCursorPosition() == 0) {
        e.preventDefault();
        this.app.searchBox.focusNextFacet(this, -1, {startAtEnd: -1});
      }
    } else if (key == 'right') {
      if (this.box.getCursorPosition() == this.box.val().length) {
        e.preventDefault();
        this.app.searchBox.focusNextFacet(this, 1, {selectFacet: true});
      }
    } else if (VS.app.hotkeys.shift && key == 'tab') {
      e.preventDefault();
      this.app.searchBox.focusNextFacet(this, -1, {selectText: true});
    } else if (key == 'tab') {
    } else if (VS.app.hotkeys.command &&
               String.fromCharCode(e.which).toLowerCase() == 'a') {
      e.preventDefault();
      this.app.searchBox.selectAllFacets();
      return false;
    } else if (key == 'backspace' && !this.app.searchBox.allSelected()) {
      if (this.box.getCursorPosition() == 0 && !this.box.getSelection().length) {
        e.preventDefault();
        this.app.searchBox.focusNextFacet(this, -1, {backspace: true});
        return false;
      }
    } else if (key == 'end') {
      var view = this.app.searchBox.inputViews[this.app.searchBox.inputViews.length-1];
      view.setCursorAtEnd(-1);
    } else if (key == 'home') {
      var view = this.app.searchBox.inputViews[0];
      view.setCursorAtEnd(-1);
    }

    this.box.trigger('resize.autogrow', e);
  }

});

})();

(function(){

  var $ = jQuery; // Handle namespaced jQuery

  // Makes the view enter a mode. Modes have both a 'mode' and a 'group',
  // and are mutually exclusive with any other modes in the same group.
  // Setting will update the view's modes hash, as well as set an HTML class
  // of *[mode]_[group]* on the view's element. Convenient way to swap styles
  // and behavior.
  Backbone.View.prototype.setMode = function(mode, group) {
    this.modes || (this.modes = {});
    if (this.modes[group] === mode) return;
    $(this.el).setMode(mode, group);
    this.modes[group] = mode;
  };

})();
(function() {

var $ = jQuery; // Handle namespaced jQuery

// DocumentCloud workspace hotkeys. To tell if a key is currently being pressed,
// just ask `VS.app.hotkeys.[key]` on `keypress`, or ask `VS.app.hotkeys.key(e)`
// on `keydown`.
//
// For the most headache-free way to use this utility, check modifier keys,
// like shift and command, with `VS.app.hotkeys.shift`, and check every other
// key with `VS.app.hotkeys.key(e) == 'key_name'`.
VS.app.hotkeys = {

  // Keys that will be mapped to the `hotkeys` namespace.
  KEYS: {
    '16':  'shift',
    '17':  'command',
    '91':  'command',
    '93':  'command',
    '224': 'command',
    '13':  'enter',
    '37':  'left',
    '38':  'upArrow',
    '39':  'right',
    '40':  'downArrow',
    '46':  'delete',
    '8':   'backspace',
    '35':  'end',
    '36':  'home',
    '9':   'tab',
    '188': 'comma'
  },

  // Binds global keydown and keyup events to listen for keys that match `this.KEYS`.
  initialize : function() {
    _.bindAll(this, 'down', 'up', 'blur');
    $(document).bind('keydown', this.down);
    $(document).bind('keyup', this.up);
    $(window).bind('blur', this.blur);
  },

  // On `keydown`, turn on all keys that match.
  down : function(e) {
    var key = this.KEYS[e.which];
    if (key) this[key] = true;
  },

  // On `keyup`, turn off all keys that match.
  up : function(e) {
    var key = this.KEYS[e.which];
    if (key) this[key] = false;
  },

  // If an input is blurred, all keys need to be turned off, since they are no longer
  // able to modify the document.
  blur : function(e) {
    for (var key in this.KEYS) this[this.KEYS[key]] = false;
  },

  // Check a key from an event and return the common english name.
  key : function(e) {
    return this.KEYS[e.which];
  },

  // Colon is special, since the value is different between browsers.
  colon : function(e) {
    var charCode = e.which;
    return charCode && String.fromCharCode(charCode) == ":";
  },

  // Check a key from an event and match it against any known characters.
  // The `keyCode` is different depending on the event type: `keydown` vs. `keypress`.
  //
  // These were determined by looping through every `keyCode` and `charCode` that
  // resulted from `keydown` and `keypress` events and counting what was printable.
  printable : function(e) {
    var code = e.which;
    if (e.type == 'keydown') {
      if (code == 32 ||                      // space
          (code >= 48 && code <= 90) ||      // 0-1a-z
          (code >= 96 && code <= 111) ||     // 0-9+-/*.
          (code >= 186 && code <= 192) ||    // ;=,-./^
          (code >= 219 && code <= 222)) {    // (\)'
        return true;
      }
    } else {
      // [space]!"#$%&'()*+,-.0-9:;<=>?@A-Z[\]^_`a-z{|} and unicode characters
      if ((code >= 32 && code <= 126)  ||
          (code >= 160 && code <= 500) ||
          (String.fromCharCode(code) == ":")) {
        return true;
      }
    }
    return false;
  }

};

})();
(function() {

var $ = jQuery; // Handle namespaced jQuery

// Naive English transformations on words. Only used for a few transformations
// in VisualSearch.js.
VS.utils.inflector = {

  // Delegate to the ECMA5 String.prototype.trim function, if available.
  trim : function(s) {
    return s.trim ? s.trim() : s.replace(/^\s+|\s+$/g, '');
  },

  // Escape strings that are going to be used in a regex. Escapes punctuation
  // that would be incorrect in a regex.
  escapeRegExp : function(s) {
    return s.replace(/([.*+?^${}()|[\]\/\\])/g, '\\$1');
  }
};

})();
(function() {

var $ = jQuery; // Handle namespaced jQuery

$.fn.extend({

  // Makes the selector enter a mode. Modes have both a 'mode' and a 'group',
  // and are mutually exclusive with any other modes in the same group.
  // Setting will update the view's modes hash, as well as set an HTML class
  // of *[mode]_[group]* on the view's element. Convenient way to swap styles
  // and behavior.
  setMode : function(state, group) {
    group    = group || 'mode';
    var re   = new RegExp("\\w+_" + group + "(\\s|$)", 'g');
    var mode = (state === null) ? "" : state + "_" + group;
    this.each(function() {
      this.className = (this.className.replace(re, '')+' '+mode)
                       .replace(/\s\s/g, ' ');
    });
    return mode;
  },

  // When attached to an input element, this will cause the width of the input
  // to match its contents. This calculates the width of the contents of the input
  // by measuring a hidden shadow div that should match the styling of the input.
  autoGrowInput: function() {
    return this.each(function() {
      var $input  = $(this);
      var $tester = $('<div />').css({
        opacity     : 0,
        top         : -9999,
        left        : -9999,
        position    : 'absolute',
        whiteSpace  : 'nowrap'
      }).addClass('VS-input-width-tester').addClass('VS-interface');

      // Watch for input value changes on all of these events. `resize`
      // event is called explicitly when the input has been changed without
      // a single keypress.
      var events = 'keydown.autogrow keypress.autogrow ' +
                   'resize.autogrow change.autogrow';
      $input.next('.VS-input-width-tester').remove();
      $input.after($tester);
      $input.unbind(events).bind(events, function(e, realEvent) {
        if (realEvent) e = realEvent;
        var value = $input.val();

        // Watching for the backspace key is tricky because it may not
        // actually be deleting the character, but instead the key gets
        // redirected to move the cursor from facet to facet.
        if (VS.app.hotkeys.key(e) == 'backspace') {
          var position = $input.getCursorPosition();
          if (position > 0) value = value.slice(0, position-1) +
                                    value.slice(position, value.length);
        } else if (VS.app.hotkeys.printable(e) &&
                   !VS.app.hotkeys.command) {
          value += String.fromCharCode(e.which);
        }
        value = value.replace(/&/g, '&amp;')
                     .replace(/</g, '&lt;')
                     .replace(/>/g, '&gt;');

        $tester.html(value);

        $input.width($tester.width() + 3 + parseInt($input.css('min-width')));
        $input.trigger('updated.autogrow');
      });

      // Sets the width of the input on initialization.
      $input.trigger('resize.autogrow');
    });
  },


  // Cross-browser method used for calculating where the cursor is in an
  // input field.
  getCursorPosition: function() {
    var position = 0;
    var input    = this.get(0);

    if (document.selection) { // IE
      input.focus();
      var sel    = document.selection.createRange();
      var selLen = document.selection.createRange().text.length;
      sel.moveStart('character', -input.value.length);
      position   = sel.text.length - selLen;
    } else if (input && $(input).is(':visible') &&
               input.selectionStart != null) { // Firefox/Safari
      position = input.selectionStart;
    }

    return position;
  },

  // A simple proxy for `selectRange` that sets the cursor position in an
  // input field.
  setCursorPosition: function(position) {
    return this.each(function() {
      return $(this).selectRange(position, position);
    });
  },

  // Cross-browser way to select text in an input field.
  selectRange: function(start, end) {
    return this.filter(':visible').each(function() {
      if (this.setSelectionRange) { // FF/Webkit
        this.focus();
        this.setSelectionRange(start, end);
      } else if (this.createTextRange) { // IE
        var range = this.createTextRange();
        range.collapse(true);
        range.moveEnd('character', end);
        range.moveStart('character', start);
        if (end - start >= 0) range.select();
      }
    });
  },

  // Returns an object that contains the text selection range values for
  // an input field.
  getSelection: function() {
    var input = this[0];

    if (input.selectionStart != null) { // FF/Webkit
      var start = input.selectionStart;
      var end   = input.selectionEnd;
      return {
        start   : start,
        end     : end,
        length  : end-start,
        text    : input.value.substr(start, end-start)
      };
    } else if (document.selection) { // IE
      var range = document.selection.createRange();
      if (range) {
        var textRange = input.createTextRange();
        var copyRange = textRange.duplicate();
        textRange.moveToBookmark(range.getBookmark());
        copyRange.setEndPoint('EndToStart', textRange);
        var start = copyRange.text.length;
        var end   = start + range.text.length;
        return {
          start   : start,
          end     : end,
          length  : end-start,
          text    : range.text
        };
      }
    }
    return {start: 0, end: 0, length: 0};
  }

});

// Debugging in Internet Explorer. This allows you to use
// `console.log(['message', var1, var2, ...])`. Just remove the `false` and
// add your console.logs. This will automatically stringify objects using
// `JSON.stringify', so you can read what's going out. Think of this as a
// *Diet Firebug Lite Zero with Lemon*.
if (false) {
  window.console = {};
  var _$ied;
  window.console.log = function(msg) {
    if (_.isArray(msg)) {
      var message = msg[0];
      var vars = _.map(msg.slice(1), function(arg) {
        return JSON.stringify(arg);
      }).join(' - ');
    }
    if(!_$ied){
      _$ied = $('<div><ol></ol></div>').css({
        'position': 'fixed',
        'bottom': 10,
        'left': 10,
        'zIndex': 20000,
        'width': $('body').width() - 80,
        'border': '1px solid #000',
        'padding': '10px',
        'backgroundColor': '#fff',
        'fontFamily': 'arial,helvetica,sans-serif',
        'fontSize': '11px'
      });
      $('body').append(_$ied);
    }
    var $message = $('<li>'+message+' - '+vars+'</li>').css({
      'borderBottom': '1px solid #999999'
    });
    _$ied.find('ol').append($message);
    _.delay(function() {
      $message.fadeOut(500);
    }, 5000);
  };

}

})();

(function() {

var $ = jQuery; // Handle namespaced jQuery

// Used to extract keywords and facets from the free text search.
var QUOTES_RE   = "('[^']+'|\"[^\"]+\")";
var FREETEXT_RE = "('[^']+'|\"[^\"]+\"|[^'\"\\s]\\S*)";
var CATEGORY_RE = FREETEXT_RE +                     ':\\s*';
VS.app.SearchParser = {

  // Matches `category: "free text"`, with and without quotes.
  ALL_FIELDS : new RegExp(CATEGORY_RE + FREETEXT_RE, 'g'),

  // Matches a single category without the text. Used to correctly extract facets.
  CATEGORY   : new RegExp(CATEGORY_RE),

  // Called to parse a query into a collection of `SearchFacet` models.
  parse : function(instance, query) {
    var searchFacets = this._extractAllFacets(instance, query);
    instance.searchQuery.reset(searchFacets);
    return searchFacets;
  },

  // Walks the query and extracts facets, categories, and free text.
  _extractAllFacets : function(instance, query) {
    var facets = [];
    var originalQuery = query;
    var virginQuery = query;
    while (query) {
      var category, value;
      originalQuery = query;
      var field = this._extractNextField(query);
      if (!field) {
        category = instance.options.remainder;
        value    = this._extractSearchText(query);
        query    = VS.utils.inflector.trim(query.replace(value, ''));
      } else if (field.indexOf(':') != -1) {
        category = field.match(this.CATEGORY)[1].replace(/(^['"]|['"]$)/g, '');
        value    = field.replace(this.CATEGORY, '').replace(/(^['"]|['"]$)/g, '');
        query    = VS.utils.inflector.trim(query.replace(field, ''));
      } else if (field.indexOf(':') == -1) {
        category = instance.options.remainder;
        value    = field;
        query    = VS.utils.inflector.trim(query.replace(value, ''));
      }

      if (category && value) {
          var searchFacet = new VS.model.SearchFacet({
            category : category,
            value    : VS.utils.inflector.trim(value),
            app      : instance
          });
          facets.push(searchFacet);
      }
      if (originalQuery == query) break;
    }

    // Arrange the search attributes in the order that they were typed.
    // - compare the facets array with the original untouched query.
    // - sort each facet by the order of its appearance in the query.
    // - when not found put the facet all the way on the right.
    return _.sortBy(facets, function(facet) {
      index = virginQuery.indexOf(facet.attributes.value);
      // If the search attribute was not found, put it on the right most position.
      return (index < 0) ? 999 : index;
    });
  },

  // Extracts the first field found, capturing any free text that comes
  // before the category.
  _extractNextField : function(query) {
    var textRe = new RegExp('^\\s*(\\S+)\\s+(?=' + QUOTES_RE + FREETEXT_RE + ')');
    var textMatch = query.match(textRe);
    if (textMatch && textMatch.length >= 1) {
      return textMatch[1];
    } else {
      return this._extractFirstField(query);
    }
  },

  // If there is no free text before the facet, extract the category and value.
  _extractFirstField : function(query) {
    var fields = query.match(this.ALL_FIELDS);
    return fields && fields.length && fields[0];
  },

  // If the found match is not a category and facet, extract the trimmed free text.
  _extractSearchText : function(query) {
    query = query || '';
    var text = VS.utils.inflector.trim(query.replace(this.ALL_FIELDS, ''));
    return text;
  }

};

})();

(function() {

var $ = jQuery; // Handle namespaced jQuery

// The model that holds individual search facets and their categories.
// Held in a collection by `VS.app.searchQuery`.
VS.model.SearchFacet = Backbone.Model.extend({

  // Extract the category and value and serialize it in preparation for
  // turning the entire searchBox into a search query that can be sent
  // to the server for parsing and searching.
  serialize : function() {
    var category = this.quoteCategory(this.get('category'));
    var value    = VS.utils.inflector.trim(this.get('value'));
    var remainder = this.get("app").options.remainder;

    if (!value) return '';

    if (!_.contains(this.get("app").options.unquotable || [], category) && category != remainder) {
      value = this.quoteValue(value);
    }

    if (category != remainder) {
      category = category + ': ';
    } else {
      category = "";
    }
    return category + value;
  },

  // Wrap categories that have spaces or any kind of quote with opposite matching
  // quotes to preserve the complex category during serialization.
  quoteCategory : function(category) {
    var hasDoubleQuote = (/"/).test(category);
    var hasSingleQuote = (/'/).test(category);
    var hasSpace       = (/\s/).test(category);

    if (hasDoubleQuote && !hasSingleQuote) {
      return "'" + category + "'";
    } else if (hasSpace || (hasSingleQuote && !hasDoubleQuote)) {
      return '"' + category + '"';
    } else {
      return category;
    }
  },

  // Wrap values that have quotes in opposite matching quotes. If a value has
  // both single and double quotes, just use the double quotes.
  quoteValue : function(value) {
    var hasDoubleQuote = (/"/).test(value);
    var hasSingleQuote = (/'/).test(value);

    if (hasDoubleQuote && !hasSingleQuote) {
      return "'" + value + "'";
    } else {
      return '"' + value + '"';
    }
  },

  // If provided, use a custom label instead of the raw value.
  label : function() {
      return this.get('label') || this.get('value');
  }

});

})();
(function() {

var $ = jQuery; // Handle namespaced jQuery

// Collection which holds all of the individual facets (category: value).
// Used for finding and removing specific facets.
VS.model.SearchQuery = Backbone.Collection.extend({

  // Model holds the category and value of the facet.
  model : VS.model.SearchFacet,

  // Turns all of the facets into a single serialized string.
  serialize : function() {
    return this.map(function(facet){ return facet.serialize(); }).join(' ');
  },

  facets : function() {
    return this.map(function(facet) {
      var value = {};
      value[facet.get('category')] = facet.get('value');
      return value;
    });
  },

  // Find a facet by its category. Multiple facets with the same category
  // is fine, but only the first is returned.
  find : function(category) {
    var facet = this.detect(function(facet) {
      return facet.get('category').toLowerCase() == category.toLowerCase();
    });
    return facet && facet.get('value');
  },

  // Counts the number of times a specific category is in the search query.
  count : function(category) {
    return this.select(function(facet) {
      return facet.get('category').toLowerCase() == category.toLowerCase();
    }).length;
  },

  // Returns an array of extracted values from each facet in a category.
  values : function(category) {
    var facets = this.select(function(facet) {
      return facet.get('category').toLowerCase() == category.toLowerCase();
    });
    return _.map(facets, function(facet) { return facet.get('value'); });
  },

  // Checks all facets for matches of either a category or both category and value.
  has : function(category, value) {
    return this.any(function(facet) {
      var categoryMatched = facet.get('category').toLowerCase() == category.toLowerCase();
      if (!value) return categoryMatched;
      return categoryMatched && facet.get('value') == value;
    });
  },

  // Used to temporarily hide specific categories and serialize the search query.
  withoutCategory : function() {
    var categories = _.map(_.toArray(arguments), function(cat) { return cat.toLowerCase(); });
    return this.map(function(facet) {
      if (!_.include(categories, facet.get('category').toLowerCase())) {
        return facet.serialize();
      };
    }).join(' ');
  }

});

})();
(function(){
window.JST = window.JST || {};

window.JST['search_box'] = _.template('<div class="VS-search">\n  <div class="VS-search-box-wrapper VS-search-box">\n    <div class="VS-icon VS-icon-search"></div>\n    <div class="VS-placeholder"></div>\n    <div class="VS-search-inner"></div>\n    <div class="VS-icon VS-icon-cancel VS-cancel-search-box" title="clear search"></div>\n  </div>\n</div>');
window.JST['search_facet'] = _.template('<% if (model.has(\'category\')) { %>\n  <div class="category"><%= model.get(\'category\') %>:</div>\n<% } %>\n\n<div class="search_facet_input_container">\n  <input type="text" class="search_facet_input ui-menu VS-interface" value="" />\n</div>\n\n<div class="search_facet_remove VS-icon VS-icon-cancel"></div>');
window.JST['search_input'] = _.template('<input type="text" class="ui-menu" />');
})();
if(!DailyKos) var DailyKos = {};

DailyKos.Stories = (function() {
  var storyData;

  function data() {
    return storyData;
  }

  function initializeStoryData(){
    storyData = $('#story_data').data('storyData');
    if (!storyData) throw "Error: an element with the 'story_data' data attribute is required";

    _.extend(storyData, {
      published:   function(){ return this.displaystatus === 'published';   },
      unpublished: function(){ return this.displaystatus === 'unpublished'; },
      queued:      function(){ return this.displaystatus === 'queued'; },
      hidden:      function(){ return this.displaystatus === 'hidden'; },
      deletable:   function(){ return this.unpublished() || this.queued(); }
    });

    _.trigger.dataLoaded();
  }

  function processPhoto() {
    var img;
    img = $('#story_image_url').val();

    if (!img || img === "") return;
    img = "<img src='" + img + "'>";

    insertPrimaryImage(img);
    return false;
  }

  function insertPrimaryImage(imageTag, imageId) {
    var imageSrc = $(imageTag).attr('src');

    $('.photo-instructions-wrapper').hide();
    $('.primary-photo-wrapper').html(imageTag);
    $('.photo-content').show().css("display", "inline");
    $('#primary_photo').css({'height': ''});

    if(!imageId) {
      var match = imageSrc.match(/\/images\/(\d+)/);
      imageId = (match && match[1]);
    }

    if (imageId) $('#story_primary_image_id').val(imageId);
    $('#story_image_url').val(imageSrc);
    $('#image-caption-container').show();

    return false;
  }

  function primaryImageSize(imgWidth, imgHeight) {
    imgWidth  = +imgWidth;
    imgHeight = +imgHeight;

    var resizedWidth, resizedHeight;
    resizedWidth = (imgWidth * 338) / imgHeight;
    resizedHeight = 338;

    if(resizedWidth > 616) {
      resizedHeight = (imgHeight * 616) / imgWidth;
      resizedWidth  = 616;
    }

    return {
      width: Math.round(resizedWidth),
      height: Math.round(resizedHeight)
    };
  }

  function minimizePhotoBox() {
    $('#primary_photo').addClass('is_minimized');
    $('#primary_photo').animate({height: '38px'}, 200, function() {
     $('#photo_container').removeClass('centered').addClass('margin_top');
     $('.photo_control.minimize').hide();
     $('.photo_control.maximize').show();
    });
    return false;
  }

  function maximizePhotoBox() {
    $('#primary_photo').removeClass('is_minimized');
    $('#primary_photo').animate({height: '340px'}, 200, function() {
      $('#photo_container').addClass('centered').removeClass('margin_top');
      $('.photo_control.maximize').hide();
      $('.photo_control.minimize').show();
    });
    return false;
  }

  function resetPhotoBox() {
    $('#primary_photo .photo-content').hide();
    $('#primary_photo .primary-photo-wrapper').html("");
    $('#story_primary_image_id').val('');
    $('#story_image_url').val('');
    $('#primary_photo .photo-instructions-wrapper').show();
    return false;
  }

  function initializePhotoControls() {
    $('.photo_control.minimize').on('click', function() {
      return minimizePhotoBox();
    });

    $('.photo_control.maximize').on('click', function() {
      return maximizePhotoBox();
    });

    $('.photo_control.remove').on('click', function(e) {
      resetPhotoBox();
      _.trigger.storyFormChange([e]);
    });
  }

  function openLibrary(targetEditor, storySelectMode) {
    if(storySelectMode && $('#photo_control').hasClass('maximize'))
      maximizePhotoBox();

    DailyKos.Library.storySelectMode = storySelectMode;
    DailyKos.Library.open(targetEditor, storySelectMode);
    return false;
  }

  function processStoryText(ed) { try {
    var Embeds      = DK.Embeds;
    var newContent  = $('#story_introtext').val();
    var bodyContent = $('#story_bodytext').val();

    $('#story_bodytext').val('');

    // Append storytext to introtext, delimited by pagebreak.
    if (bodyContent)  {
      newContent += DailyKos.CKE.pagebreakHR;
      newContent += bodyContent;
    }

    // When there's content, add a new line. When an embed/image
    // is a trailing element, we need to allocate space for the caret.
    // When there's no content, don't add a new line because the
    // "Write your story..." placeholder only displays when there's no content.
    if (newContent) newContent += '<p><br></p>';

    newContent = checkImageAttributions(newContent, ed);
    newContent = Embeds.Prerender.html(newContent);

    Embeds.renderHtmlString(newContent, function (renderedContent) {
      ed.setData(renderedContent);
    });

    return false;
  } catch (e) {
    alert('There was an error while loading the editor.');
    console.error('processStoryText', e);
  }}

  // Check to see if the attribution of any of the images
  // has changed. This is instead of getting the image attributions
  // on each image request. Do this synchronously so we don't need
  // to reset the text editor.
  function checkImageAttributions(html, ed) {
    var $html = $('<div>').html(html);
    var imageIds = [];

    $html.find('img[data-img-id]').each(function() {
      if(typeof $(this).data('img-id') === 'number') {
        imageIds.push($(this).data('img-id'));
      }
    });

    if(imageIds.length > 0) {
      var targetUrl = "/attribution_check/" + imageIds.join(',') + "/attributions";
      $.ajax({
        url: targetUrl,
        async: false,
        dataType: 'json'
      })
        .success(function(data) {
          var $targetImage, attribution;

          _.each(imageIds, function(id) {
             $targetImage = $html.find("img[data-img-id='" + id + "']");
             attribution = $targetImage.next('.image-attribution');

             if(data[id] && attribution.html() !== data[id]) {
               attribution.html(data[id]).removeClass('hidden');
             } else if(attribution.html() !== data[id]) {
               attribution.html("&nbsp;").addClass("hidden");
             }
          });
        });
    }

    return $html.html();
  }

  function permissions() {
    var el = $('#story_permissions').data();
    if (el)
      return el['storyPermissions'];
    else
      throw "Error: an element with the 'story_permissions' data attribute is required";
  }

  function isStoryEditor(){ return !!$('#story-authoring-tool').length; }

  return {
    init: function() {
      processPhoto();
      initializePhotoControls();
      initializeStoryData();
    },
    openLibrary: openLibrary,
    insertPrimaryImage: insertPrimaryImage,
    primaryImageSize: primaryImageSize,
    permissions: permissions,
    data: data,
    initializeStoryData: initializeStoryData,
    isStoryEditor: isStoryEditor,
    processStoryText: processStoryText
  };

})();

// Notify that DailyKos.Stories has been loaded.
$(document).trigger('loaded-dailykos-stories');
// Generated by CoffeeScript 1.9.3

/*
jQuery Growl
Copyright 2015 Kevin Sylvestre
1.3.1
 */

(function() {
  "use strict";
  var $, Animation, Growl,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  $ = jQuery;

  Animation = (function() {
    function Animation() {}

    Animation.transitions = {
      "webkitTransition": "webkitTransitionEnd",
      "mozTransition": "mozTransitionEnd",
      "oTransition": "oTransitionEnd",
      "transition": "transitionend"
    };

    Animation.transition = function($el) {
      var el, ref, result, type;
      el = $el[0];
      ref = this.transitions;
      for (type in ref) {
        result = ref[type];
        if (el.style[type] != null) {
          return result;
        }
      }
    };

    return Animation;

  })();

  Growl = (function() {
    Growl.settings = {
      namespace: 'growl',
      duration: 3200,
      close: "&#215;",
      location: "default",
      style: "default",
      size: "medium",
      delayOnHover: true
    };

    Growl.growl = function(settings) {
      if (settings == null) {
        settings = {};
      }
      this.initialize();
      return new Growl(settings);
    };

    Growl.initialize = function() {
      return $("body:not(:has(#growls))").append('<div id="growls" />');
    };

    function Growl(settings) {
      if (settings == null) {
        settings = {};
      }
      this.container = bind(this.container, this);
      this.content = bind(this.content, this);
      this.html = bind(this.html, this);
      this.$growl = bind(this.$growl, this);
      this.$growls = bind(this.$growls, this);
      this.animate = bind(this.animate, this);
      this.remove = bind(this.remove, this);
      this.dismiss = bind(this.dismiss, this);
      this.present = bind(this.present, this);
      this.waitAndDismiss = bind(this.waitAndDismiss, this);
      this.cycle = bind(this.cycle, this);
      this.close = bind(this.close, this);
      this.click = bind(this.click, this);
      this.mouseLeave = bind(this.mouseLeave, this);
      this.mouseEnter = bind(this.mouseEnter, this);
      this.unbind = bind(this.unbind, this);
      this.bind = bind(this.bind, this);
      this.render = bind(this.render, this);
      this.settings = $.extend({}, Growl.settings, settings);
      this.$growls().attr('class', this.settings.location);
      this.render();
    }

    Growl.prototype.render = function() {
      var $growl;
      $growl = this.$growl();
      this.$growls().append($growl);
      if (this.settings.fixed) {
        this.present();
      } else {
        this.cycle();
      }
    };

    Growl.prototype.bind = function($growl) {
      if ($growl == null) {
        $growl = this.$growl();
      }
      $growl.on("click", this.click);
      if (this.settings.delayOnHover) {
        $growl.on("mouseenter", this.mouseEnter);
        $growl.on("mouseleave", this.mouseLeave);
      }
      return $growl.on("contextmenu", this.close).find("." + this.settings.namespace + "-close").on("click", this.close);
    };

    Growl.prototype.unbind = function($growl) {
      if ($growl == null) {
        $growl = this.$growl();
      }
      $growl.off("click", this.click);
      if (this.settings.delayOnHover) {
        $growl.off("mouseenter", this.mouseEnter);
        $growl.off("mouseleave", this.mouseLeave);
      }
      return $growl.off("contextmenu", this.close).find("." + this.settings.namespace + "-close").off("click", this.close);
    };

    Growl.prototype.mouseEnter = function(event) {
      var $growl;
      $growl = this.$growl();
      return $growl.stop(true, true);
    };

    Growl.prototype.mouseLeave = function(event) {
      return this.waitAndDismiss();
    };

    Growl.prototype.click = function(event) {
      if (this.settings.url != null) {
        event.preventDefault();
        event.stopPropagation();
        return window.open(this.settings.url);
      }
    };

    Growl.prototype.close = function(event) {
      var $growl;
      event.preventDefault();
      event.stopPropagation();
      $growl = this.$growl();
      return $growl.stop().queue(this.dismiss).queue(this.remove);
    };

    Growl.prototype.cycle = function() {
      var $growl;
      $growl = this.$growl();
      return $growl.queue(this.present).queue(this.waitAndDismiss());
    };

    Growl.prototype.waitAndDismiss = function() {
      var $growl;
      $growl = this.$growl();
      return $growl.delay(this.settings.duration).queue(this.dismiss).queue(this.remove);
    };

    Growl.prototype.present = function(callback) {
      var $growl;
      $growl = this.$growl();
      this.bind($growl);
      return this.animate($growl, this.settings.namespace + "-incoming", 'out', callback);
    };

    Growl.prototype.dismiss = function(callback) {
      var $growl;
      $growl = this.$growl();
      this.unbind($growl);
      return this.animate($growl, this.settings.namespace + "-outgoing", 'in', callback);
    };

    Growl.prototype.remove = function(callback) {
      this.$growl().remove();
      return callback();
    };

    Growl.prototype.animate = function($element, name, direction, callback) {
      var transition;
      if (direction == null) {
        direction = 'in';
      }
      transition = Animation.transition($element);
      $element[direction === 'in' ? 'removeClass' : 'addClass'](name);
      $element.offset().position;
      $element[direction === 'in' ? 'addClass' : 'removeClass'](name);
      if (callback == null) {
        return;
      }
      if (transition != null) {
        $element.one(transition, callback);
      } else {
        callback();
      }
    };

    Growl.prototype.$growls = function() {
      return this.$_growls != null ? this.$_growls : this.$_growls = $('#growls');
    };

    Growl.prototype.$growl = function() {
      return this.$_growl != null ? this.$_growl : this.$_growl = $(this.html());
    };

    Growl.prototype.html = function() {
      return this.container(this.content());
    };

    Growl.prototype.content = function() {
      return "<div class='" + this.settings.namespace + "-close'>" + this.settings.close + "</div>\n<div class='" + this.settings.namespace + "-title'>" + this.settings.title + "</div>\n<div class='" + this.settings.namespace + "-message'>" + this.settings.message + "</div>";
    };

    Growl.prototype.container = function(content) {
      return "<div class='" + this.settings.namespace + " " + this.settings.namespace + "-" + this.settings.style + " " + this.settings.namespace + "-" + this.settings.size + "'>\n  " + content + "\n</div>";
    };

    return Growl;

  })();

  this.Growl = Growl;

  $.growl = function(options) {
    if (options == null) {
      options = {};
    }
    return Growl.growl(options);
  };

  $.growl.error = function(options) {
    var settings;
    if (options == null) {
      options = {};
    }
    settings = {
      title: "Error!",
      style: "error"
    };
    return $.growl($.extend(settings, options));
  };

  $.growl.notice = function(options) {
    var settings;
    if (options == null) {
      options = {};
    }
    settings = {
      title: "Notice!",
      style: "notice"
    };
    return $.growl($.extend(settings, options));
  };

  $.growl.warning = function(options) {
    var settings;
    if (options == null) {
      options = {};
    }
    settings = {
      title: "Warning!",
      style: "warning"
    };
    return $.growl($.extend(settings, options));
  };

}).call(this);
if ($.browser.mobile)
  $('[data-disable-mobile-click]').click(function(e){ e.preventDefault(); });
// Safari 5 has a bug where it displays images inside figure elements as small thumbnails.
// The problem is caused by figure elements with the 'table' type display.
// The size is locked to a width when the page is loaded, and never recalculated.
// The result is figure is rendered very small.
//
// On ready, we switch figure display to 'block', then back to 'table' again to trigger a recalculation.

$(function(){
  var safari5 = $.browser.desktop &&
                $.browser.safari  &&
                $.browser.versionNumber === 5;

  if (!safari5) return;

  var $figure = $('figure');
  setTimeout(function(){ $figure.css({display: 'block'}); }, 0);
  setTimeout(function(){ $figure.css({display: 'table'}); }, 1);
});
// when spacebar is pressed, scroll down

_.defer(function(){
  var SPACE_KEY   = 32;
  var SCROLL_TIME = 200;
  var UNDERSCROLL = 90;
  var $window     = $(window);
  var scrollTop, offset;
  var tsmoothScroll = _(smoothScroll).throttle(SCROLL_TIME);

  window.onkeypress = function(e){
    if (e.keyCode !== SPACE_KEY)     return;
    if (e.target  !== document.body) return;

    e.preventDefault();

    tsmoothScroll(e);
  };

  function smoothScroll(e) {
    scrollTop = $window.scrollTop();
    offset    = $window.height() - $('.scroll-offset').height() - UNDERSCROLL;

    if (e.shiftKey) scrollTop -= offset;
    else            scrollTop += offset;

    $('html, body').animate({scrollTop: scrollTop}, SCROLL_TIME);
  }
});
// If we're on a page that has comments
// Upon leaving the page:
//   if the page has unposted comments
//   confirm page leave

(function(){
  var message = "You have an unposted comment.";

  function hasUnpostedComment(){
    var hasComment = function(instance){ return !!instance.getData(); };
    var excludeStoryUpdater = function(instance, name){ return name !== 'story_update_text'; };
    var instances;

    if (window.CKEDITOR && CKEDITOR.instances) {
      instances = CKEDITOR.instances;
      instances = _(instances).filter(excludeStoryUpdater);
      return instances.some(hasComment);
    } else {
      return false;
    }
  }

  DailyKos.initConfirmPageLeaveForUnpostedComments = function(){
    $(window).on('beforeunload', function(){
      if(hasUnpostedComment()) return message;
    });
  };
})();
// Add classes to <body> that describe the browser platform, name, device, etc.
// e.g. .is-mac-platform .is-chrome-browser .is-desktop-device

_.namespace('App.Browser');

(function () {
  App.Browser.setBodyClass = function () {
    var platform = format($.browser.platform);
    var browser  = format($.browser.name);
    var device   = ($.browser.desktop) ? 'desktop' : 'mobile';

    var classes = 'is-{platform}-platform is-{browser}-browser is-{device}-device'
      .replace('{platform}', platform)
      .replace('{browser}',  browser)
      .replace('{device}',   device);

    $('body').addClass(classes);
  };

  // convert 'windows phone' => 'windows-phone'
  function format (str) {
    return (str || '').replace(' ', '-');
  }
})();













// Look into splitting off the below on a per-page basis:




















$(App.Browser.setBodyClass);
