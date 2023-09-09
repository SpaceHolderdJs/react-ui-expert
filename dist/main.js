"use strict";
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/main.ts
var main_exports = {};
__export(main_exports, {
    A: function() {
        return A;
    },
    Address: function() {
        return Address;
    },
    Article: function() {
        return Article;
    },
    Aside: function() {
        return Aside;
    },
    B: function() {
        return B;
    },
    Body: function() {
        return Body;
    },
    Br: function() {
        return Br;
    },
    Button: function() {
        return Button;
    },
    Code: function() {
        return Code;
    },
    Element: function() {
        return Element;
    },
    Flex: function() {
        return Flex;
    },
    FlexColumn: function() {
        return FlexColumn;
    },
    FlexRow: function() {
        return FlexRow;
    },
    Footer: function() {
        return Footer;
    },
    Form: function() {
        return Form;
    },
    Grid: function() {
        return Grid;
    },
    H1: function() {
        return H1;
    },
    H2: function() {
        return H2;
    },
    H3: function() {
        return H3;
    },
    H4: function() {
        return H4;
    },
    H5: function() {
        return H5;
    },
    Header: function() {
        return Header;
    },
    I: function() {
        return I;
    },
    IFrame: function() {
        return IFrame;
    },
    Image: function() {
        return Image;
    },
    Img: function() {
        return Img;
    },
    Input: function() {
        return Input;
    },
    Link: function() {
        return Link;
    },
    Main: function() {
        return Main;
    },
    Marker: function() {
        return Marker;
    },
    Menu: function() {
        return Menu;
    },
    MenuItem: function() {
        return MenuItem;
    },
    Option: function() {
        return Option;
    },
    OptionGroup: function() {
        return OptionGroup;
    },
    P: function() {
        return P;
    },
    Section: function() {
        return Section;
    },
    Select: function() {
        return Select;
    },
    Span: function() {
        return Span;
    },
    Text: function() {
        return Text;
    },
    TextArea: function() {
        return TextArea;
    },
    UIThemeProvider: function() {
        return UIThemeProvider;
    },
    Video: function() {
        return Video;
    },
    createUITheme: function() {
        return createUITheme;
    },
    generateCssOverrides: function() {
        return generateCssOverrides;
    }
});
module.exports = __toCommonJS(main_exports);
// src/modules/core/components/All.tsx
var import_styled_components = __toESM(require("styled-components"));
// src/modules/core/AllCssRules.ts
var AllCssRules = function AllCssRules() {
    _class_call_check(this, AllCssRules);
    this.accentColor = "";
    this.alignContent = "";
    this.alignItems = "";
    this.alignSelf = "";
    this.alignTracks = "";
    this.animationComposition = "";
    this.animationDelay = "";
    this.animationDirection = "";
    this.animationDuration = "";
    this.animationFillMode = "";
    this.animationIterationCount = "";
    this.animationName = "";
    this.animationPlayState = "";
    this.animationTimeline = "";
    this.animationTimingFunction = "";
    this.appearance = "";
    this.aspectRatio = "";
    this.backdropFilter = "";
    this.backfaceVisibility = "";
    this.backgroundAttachment = "";
    this.backgroundBlendMode = "";
    this.backgroundClip = "";
    this.backgroundColor = "";
    this.backgroundImage = "";
    this.backgroundOrigin = "";
    this.backgroundPositionX = "";
    this.backgroundPositionY = "";
    this.backgroundRepeat = "";
    this.backgroundSize = "";
    this.blockOverflow = "";
    this.blockSize = "";
    this.borderBlockColor = "";
    this.borderBlockEndColor = "";
    this.borderBlockEndStyle = "";
    this.borderBlockEndWidth = "";
    this.borderBlockStartColor = "";
    this.borderBlockStartStyle = "";
    this.borderBlockStartWidth = "";
    this.borderBlockStyle = "";
    this.borderBlockWidth = "";
    this.borderBottomColor = "";
    this.borderBottomLeftRadius = "";
    this.borderBottomRightRadius = "";
    this.borderBottomStyle = "";
    this.borderBottomWidth = "";
    this.borderCollapse = "";
    this.borderEndEndRadius = "";
    this.borderEndStartRadius = "";
    this.borderImageOutset = "";
    this.borderImageRepeat = "";
    this.borderImageSlice = "";
    this.borderImageSource = "";
    this.borderImageWidth = "";
    this.borderInlineColor = "";
    this.borderInlineEndColor = "";
    this.borderInlineEndStyle = "";
    this.borderInlineEndWidth = "";
    this.borderInlineStartColor = "";
    this.borderInlineStartStyle = "";
    this.borderInlineStartWidth = "";
    this.borderInlineStyle = "";
    this.borderInlineWidth = "";
    this.borderLeftColor = "";
    this.borderLeftStyle = "";
    this.borderLeftWidth = "";
    this.borderRightColor = "";
    this.borderRightStyle = "";
    this.borderRightWidth = "";
    this.borderSpacing = "";
    this.borderStartEndRadius = "";
    this.borderStartStartRadius = "";
    this.borderTopColor = "";
    this.borderTopLeftRadius = "";
    this.borderTopRightRadius = "";
    this.borderTopStyle = "";
    this.borderTopWidth = "";
    this.bottom = "";
    this.boxDecorationBreak = "";
    this.boxShadow = "";
    this.boxSizing = "";
    this.breakAfter = "";
    this.breakBefore = "";
    this.breakInside = "";
    this.captionSide = "";
    this.caretColor = "";
    this.caretShape = "";
    this.clear = "";
    this.clipPath = "";
    this.color = "";
    this.colorAdjust = "";
    this.colorScheme = "";
    this.columnCount = "";
    this.columnFill = "";
    this.columnGap = "";
    this.columnRuleColor = "";
    this.columnRuleStyle = "";
    this.columnRuleWidth = "";
    this.columnSpan = "";
    this.columnWidth = "";
    this.contain = "";
    this.containIntrinsicBlockSize = "";
    this.containIntrinsicHeight = "";
    this.containIntrinsicInlineSize = "";
    this.containIntrinsicWidth = "";
    this.containerName = "";
    this.containerType = "";
    this.content = "";
    this.contentVisibility = "";
    this.counterIncrement = "";
    this.counterReset = "";
    this.counterSet = "";
    this.cursor = "";
    this.direction = "";
    this.display = "";
    this.emptyCells = "";
    this.filter = "";
    this.flexBasis = "";
    this.flexDirection = "";
    this.flexGrow = "";
    this.flexShrink = "";
    this.flexWrap = "";
    this.float = "";
    this.fontFamily = "";
    this.fontFeatureSettings = "";
    this.fontKerning = "";
    this.fontLanguageOverride = "";
    this.fontOpticalSizing = "";
    this.fontPalette = "";
    this.fontSize = "";
    this.fontSizeAdjust = "";
    this.fontSmooth = "";
    this.fontStretch = "";
    this.fontStyle = "";
    this.fontSynthesis = "";
    this.fontVariant = "";
    this.fontVariantAlternates = "";
    this.fontVariantCaps = "";
    this.fontVariantEastAsian = "";
    this.fontVariantEmoji = "";
    this.fontVariantLigatures = "";
    this.fontVariantNumeric = "";
    this.fontVariantPosition = "";
    this.fontVariationSettings = "";
    this.fontWeight = "";
    this.forcedColorAdjust = "";
    this.gridAutoColumns = "";
    this.gridAutoFlow = "";
    this.gridAutoRows = "";
    this.gridColumnEnd = "";
    this.gridColumnStart = "";
    this.gridRowEnd = "";
    this.gridRowStart = "";
    this.gridTemplateAreas = "";
    this.gridTemplateColumns = "";
    this.gridTemplateRows = "";
    this.hangingPunctuation = "";
    this.height = "";
    this.hyphenateCharacter = "";
    this.hyphenateLimitChars = "";
    this.hyphens = "";
    this.imageOrientation = "";
    this.imageRendering = "";
    this.imageResolution = "";
    this.initialLetter = "";
    this.inlineSize = "";
    this.inputSecurity = "";
    this.insetBlockEnd = "";
    this.insetBlockStart = "";
    this.insetInlineEnd = "";
    this.insetInlineStart = "";
    this.isolation = "";
    this.justifyContent = "";
    this.justifyItems = "";
    this.justifySelf = "";
    this.justifyTracks = "";
    this.left = "";
    this.letterSpacing = "";
    this.lineBreak = "";
    this.lineHeight = "";
    this.lineHeightStep = "";
    this.listStyleImage = "";
    this.listStylePosition = "";
    this.listStyleType = "";
    this.marginBlockEnd = "";
    this.marginBlockStart = "";
    this.marginBottom = "";
    this.marginInlineEnd = "";
    this.marginInlineStart = "";
    this.marginLeft = "";
    this.marginRight = "";
    this.marginTop = "";
    this.marginTrim = "";
    this.maskBorderMode = "";
    this.maskBorderOutset = "";
    this.maskBorderRepeat = "";
    this.maskBorderSlice = "";
    this.maskBorderSource = "";
    this.maskBorderWidth = "";
    this.maskClip = "";
    this.maskComposite = "";
    this.maskImage = "";
    this.maskMode = "";
    this.maskOrigin = "";
    this.maskPosition = "";
    this.maskRepeat = "";
    this.maskSize = "";
    this.maskType = "";
    this.mathDepth = "";
    this.mathShift = "";
    this.mathStyle = "";
    this.maxBlockSize = "";
    this.maxHeight = "";
    this.maxInlineSize = "";
    this.maxLines = "";
    this.maxWidth = "";
    this.minBlockSize = "";
    this.minHeight = "";
    this.minInlineSize = "";
    this.minWidth = "";
    this.mixBlendMode = "";
    this.motionDistance = "";
    this.motionPath = "";
    this.motionRotation = "";
    this.objectFit = "";
    this.objectPosition = "";
    this.offsetAnchor = "";
    this.offsetDistance = "";
    this.offsetPath = "";
    this.offsetPosition = "";
    this.offsetRotate = "";
    this.offsetRotation = "";
    this.opacity = "";
    this.order = "";
    this.orphans = "";
    this.outlineColor = "";
    this.outlineOffset = "";
    this.outlineStyle = "";
    this.outlineWidth = "";
    this.overflowAnchor = "";
    this.overflowBlock = "";
    this.overflowClipBox = "";
    this.overflowClipMargin = "";
    this.overflowInline = "";
    this.overflowWrap = "";
    this.overflowX = "";
    this.overflowY = "";
    this.overscrollBehaviorBlock = "";
    this.overscrollBehaviorInline = "";
    this.overscrollBehaviorX = "";
    this.overscrollBehaviorY = "";
    this.paddingBlockEnd = "";
    this.paddingBlockStart = "";
    this.paddingBottom = "";
    this.paddingInlineEnd = "";
    this.paddingInlineStart = "";
    this.paddingLeft = "";
    this.paddingRight = "";
    this.paddingTop = "";
    this.page = "";
    this.pageBreakAfter = "";
    this.pageBreakBefore = "";
    this.pageBreakInside = "";
    this.paintOrder = "";
    this.perspective = "";
    this.perspectiveOrigin = "";
    this.pointerEvents = "";
    this.position = "";
    this.printColorAdjust = "";
    this.quotes = "";
    this.resize = "";
    this.right = "";
    this.rotate = "";
    this.rowGap = "";
    this.rubyAlign = "";
    this.rubyMerge = "";
    this.rubyPosition = "";
    this.scale = "";
    this.scrollBehavior = "";
    this.scrollMarginBlockEnd = "";
    this.scrollMarginBlockStart = "";
    this.scrollMarginBottom = "";
    this.scrollMarginInlineEnd = "";
    this.scrollMarginInlineStart = "";
    this.scrollMarginLeft = "";
    this.scrollMarginRight = "";
    this.scrollMarginTop = "";
    this.scrollPaddingBlockEnd = "";
    this.scrollPaddingBlockStart = "";
    this.scrollPaddingBottom = "";
    this.scrollPaddingInlineEnd = "";
    this.scrollPaddingInlineStart = "";
    this.scrollPaddingLeft = "";
    this.scrollPaddingRight = "";
    this.scrollPaddingTop = "";
    this.scrollSnapAlign = "";
    this.scrollSnapMarginBottom = "";
    this.scrollSnapMarginLeft = "";
    this.scrollSnapMarginRight = "";
    this.scrollSnapMarginTop = "";
    this.scrollSnapStop = "";
    this.scrollSnapType = "";
    this.scrollTimelineAxis = "";
    this.scrollTimelineName = "";
    this.scrollbarColor = "";
    this.scrollbarGutter = "";
    this.scrollbarWidth = "";
    this.shapeImageThreshold = "";
    this.shapeMargin = "";
    this.shapeOutside = "";
    this.tabSize = "";
    this.tableLayout = "";
    this.textAlign = "";
    this.textAlignLast = "";
    this.textCombineUpright = "";
    this.textDecorationColor = "";
    this.textDecorationLine = "";
    this.textDecorationSkip = "";
    this.textDecorationSkipInk = "";
    this.textDecorationStyle = "";
    this.textDecorationThickness = "";
    this.textEmphasisColor = "";
    this.textEmphasisPosition = "";
    this.textEmphasisStyle = "";
    this.textIndent = "";
    this.textJustify = "";
    this.textOrientation = "";
    this.textOverflow = "";
    this.textRendering = "";
    this.textShadow = "";
    this.textSizeAdjust = "";
    this.textTransform = "";
    this.textUnderlineOffset = "";
    this.textUnderlinePosition = "";
    this.top = "";
    this.touchAction = "";
    this.transform = "";
    this.transformBox = "";
    this.transformOrigin = "";
    this.transformStyle = "";
    this.transitionDelay = "";
    this.transitionDuration = "";
    this.transitionProperty = "";
    this.transitionTimingFunction = "";
    this.translate = "";
    this.unicodeBidi = "";
    this.userSelect = "";
    this.verticalAlign = "";
    this.viewTransitionName = "";
    this.visibility = "";
    this.whiteSpace = "";
    this.widows = "";
    this.width = "";
    this.willChange = "";
    this.wordBreak = "";
    this.wordSpacing = "";
    this.wordWrap = "";
    this.writingMode = "";
    this.zIndex = "";
    this.zoom = "";
    this.all = "";
    this.animation = "";
    this.background = "";
    this.backgroundPosition = "";
    this.border = "";
    this.borderBlock = "";
    this.borderBlockEnd = "";
    this.borderBlockStart = "";
    this.borderBottom = "";
    this.borderColor = "";
    this.borderImage = "";
    this.borderInline = "";
    this.borderInlineEnd = "";
    this.borderInlineStart = "";
    this.borderLeft = "";
    this.borderRadius = "";
    this.borderRight = "";
    this.borderStyle = "";
    this.borderTop = "";
    this.borderWidth = "";
    this.caret = "";
    this.columnRule = "";
    this.columns = "";
    this.containIntrinsicSize = "";
    this.container = "";
    this.flex = "";
    this.flexFlow = "";
    this.font = "";
    this.gap = "";
    this.grid = "";
    this.gridArea = "";
    this.gridColumn = "";
    this.gridRow = "";
    this.gridTemplate = "";
    this.inset = "";
    this.insetBlock = "";
    this.insetInline = "";
    this.lineClamp = "";
    this.listStyle = "";
    this.margin = "";
    this.marginBlock = "";
    this.marginInline = "";
    this.mask = "";
    this.maskBorder = "";
    this.motion = "";
    this.offset = "";
    this.outline = "";
    this.overflow = "";
    this.overscrollBehavior = "";
    this.padding = "";
    this.paddingBlock = "";
    this.paddingInline = "";
    this.placeContent = "";
    this.placeItems = "";
    this.placeSelf = "";
    this.scrollMargin = "";
    this.scrollMarginBlock = "";
    this.scrollMarginInline = "";
    this.scrollPadding = "";
    this.scrollPaddingBlock = "";
    this.scrollPaddingInline = "";
    this.scrollSnapMargin = "";
    this.scrollTimeline = "";
    this.textDecoration = "";
    this.textEmphasis = "";
    this.transition = "";
    this.MozAnimationDelay = "";
    this.MozAnimationDirection = "";
    this.MozAnimationDuration = "";
    this.MozAnimationFillMode = "";
    this.MozAnimationIterationCount = "";
    this.MozAnimationName = "";
    this.MozAnimationPlayState = "";
    this.MozAnimationTimingFunction = "";
    this.MozAppearance = "";
    this.MozBackfaceVisibility = "";
    this.MozBinding = "";
    this.MozBorderBottomColors = "";
    this.MozBorderEndColor = "";
    this.MozBorderEndStyle = "";
    this.MozBorderEndWidth = "";
    this.MozBorderLeftColors = "";
    this.MozBorderRightColors = "";
    this.MozBorderStartColor = "";
    this.MozBorderStartStyle = "";
    this.MozBorderTopColors = "";
    this.MozBoxSizing = "";
    this.MozColumnCount = "";
    this.MozColumnFill = "";
    this.MozColumnRuleColor = "";
    this.MozColumnRuleStyle = "";
    this.MozColumnRuleWidth = "";
    this.MozColumnWidth = "";
    this.MozContextProperties = "";
    this.MozFontFeatureSettings = "";
    this.MozFontLanguageOverride = "";
    this.MozHyphens = "";
    this.MozImageRegion = "";
    this.MozMarginEnd = "";
    this.MozMarginStart = "";
    this.MozOrient = "";
    this.MozOsxFontSmoothing = "";
    this.MozPaddingEnd = "";
    this.MozPaddingStart = "";
    this.MozPerspective = "";
    this.MozPerspectiveOrigin = "";
    this.MozStackSizing = "";
    this.MozTabSize = "";
    this.MozTextBlink = "";
    this.MozTextSizeAdjust = "";
    this.MozTransformOrigin = "";
    this.MozTransformStyle = "";
    this.MozTransitionDelay = "";
    this.MozTransitionDuration = "";
    this.MozTransitionProperty = "";
    this.MozTransitionTimingFunction = "";
    this.MozUserFocus = "";
    this.MozUserModify = "";
    this.MozUserSelect = "";
    this.MozWindowDragging = "";
    this.MozWindowShadow = "";
    this.msAccelerator = "";
    this.msBlockProgression = "";
    this.msContentZoomChaining = "";
    this.msContentZoomLimitMax = "";
    this.msContentZoomLimitMin = "";
    this.msContentZoomSnapPoints = "";
    this.msContentZoomSnapType = "";
    this.msContentZooming = "";
    this.msFilter = "";
    this.msFlexDirection = "";
    this.msFlexPositive = "";
    this.msFlowFrom = "";
    this.msFlowInto = "";
    this.msGridColumns = "";
    this.msGridRows = "";
    this.msHighContrastAdjust = "";
    this.msHyphenateLimitChars = "";
    this.msHyphenateLimitLines = "";
    this.msHyphenateLimitZone = "";
    this.msHyphens = "";
    this.msImeAlign = "";
    this.msLineBreak = "";
    this.msOrder = "";
    this.msOverflowStyle = "";
    this.msOverflowX = "";
    this.msOverflowY = "";
    this.msScrollChaining = "";
    this.msScrollLimitXMax = "";
    this.msScrollLimitXMin = "";
    this.msScrollLimitYMax = "";
    this.msScrollLimitYMin = "";
    this.msScrollRails = "";
    this.msScrollSnapPointsX = "";
    this.msScrollSnapPointsY = "";
    this.msScrollSnapType = "";
    this.msScrollTranslation = "";
    this.msScrollbar3dlightColor = "";
    this.msScrollbarArrowColor = "";
    this.msScrollbarBaseColor = "";
    this.msScrollbarDarkshadowColor = "";
    this.msScrollbarFaceColor = "";
    this.msScrollbarHighlightColor = "";
    this.msScrollbarShadowColor = "";
    this.msScrollbarTrackColor = "";
    this.msTextAutospace = "";
    this.msTextCombineHorizontal = "";
    this.msTextOverflow = "";
    this.msTouchAction = "";
    this.msTouchSelect = "";
    this.msTransform = "";
    this.msTransformOrigin = "";
    this.msTransitionDelay = "";
    this.msTransitionDuration = "";
    this.msTransitionProperty = "";
    this.msTransitionTimingFunction = "";
    this.msUserSelect = "";
    this.msWordBreak = "";
    this.msWrapFlow = "";
    this.msWrapMargin = "";
    this.msWrapThrough = "";
    this.msWritingMode = "";
    this.WebkitAlignContent = "";
    this.WebkitAlignItems = "";
    this.WebkitAlignSelf = "";
    this.WebkitAnimationDelay = "";
    this.WebkitAnimationDirection = "";
    this.WebkitAnimationDuration = "";
    this.WebkitAnimationFillMode = "";
    this.WebkitAnimationIterationCount = "";
    this.WebkitAnimationName = "";
    this.WebkitAnimationPlayState = "";
    this.WebkitAnimationTimingFunction = "";
    this.WebkitAppearance = "";
    this.WebkitBackdropFilter = "";
    this.WebkitBackfaceVisibility = "";
    this.WebkitBackgroundClip = "";
    this.WebkitBackgroundOrigin = "";
    this.WebkitBackgroundSize = "";
    this.WebkitBorderBeforeColor = "";
    this.WebkitBorderBeforeStyle = "";
    this.WebkitBorderBeforeWidth = "";
    this.WebkitBorderBottomLeftRadius = "";
    this.WebkitBorderBottomRightRadius = "";
    this.WebkitBorderImageSlice = "";
    this.WebkitBorderTopLeftRadius = "";
    this.WebkitBorderTopRightRadius = "";
    this.WebkitBoxDecorationBreak = "";
    this.WebkitBoxReflect = "";
    this.WebkitBoxShadow = "";
    this.WebkitBoxSizing = "";
    this.WebkitClipPath = "";
    this.WebkitColumnCount = "";
    this.WebkitColumnFill = "";
    this.WebkitColumnRuleColor = "";
    this.WebkitColumnRuleStyle = "";
    this.WebkitColumnRuleWidth = "";
    this.WebkitColumnSpan = "";
    this.WebkitColumnWidth = "";
    this.WebkitFilter = "";
    this.WebkitFlexBasis = "";
    this.WebkitFlexDirection = "";
    this.WebkitFlexGrow = "";
    this.WebkitFlexShrink = "";
    this.WebkitFlexWrap = "";
    this.WebkitFontFeatureSettings = "";
    this.WebkitFontKerning = "";
    this.WebkitFontSmoothing = "";
    this.WebkitFontVariantLigatures = "";
    this.WebkitHyphenateCharacter = "";
    this.WebkitHyphens = "";
    this.WebkitInitialLetter = "";
    this.WebkitJustifyContent = "";
    this.WebkitLineBreak = "";
    this.WebkitLineClamp = "";
    this.WebkitMarginEnd = "";
    this.WebkitMarginStart = "";
    this.WebkitMaskAttachment = "";
    this.WebkitMaskBoxImageOutset = "";
    this.WebkitMaskBoxImageRepeat = "";
    this.WebkitMaskBoxImageSlice = "";
    this.WebkitMaskBoxImageSource = "";
    this.WebkitMaskBoxImageWidth = "";
    this.WebkitMaskClip = "";
    this.WebkitMaskComposite = "";
    this.WebkitMaskImage = "";
    this.WebkitMaskOrigin = "";
    this.WebkitMaskPosition = "";
    this.WebkitMaskPositionX = "";
    this.WebkitMaskPositionY = "";
    this.WebkitMaskRepeat = "";
    this.WebkitMaskRepeatX = "";
    this.WebkitMaskRepeatY = "";
    this.WebkitMaskSize = "";
    this.WebkitMaxInlineSize = "";
    this.WebkitOrder = "";
    this.WebkitOverflowScrolling = "";
    this.WebkitPaddingEnd = "";
    this.WebkitPaddingStart = "";
    this.WebkitPerspective = "";
    this.WebkitPerspectiveOrigin = "";
    this.WebkitPrintColorAdjust = "";
    this.WebkitRubyPosition = "";
    this.WebkitScrollSnapType = "";
    this.WebkitShapeMargin = "";
    this.WebkitTapHighlightColor = "";
    this.WebkitTextCombine = "";
    this.WebkitTextDecorationColor = "";
    this.WebkitTextDecorationLine = "";
    this.WebkitTextDecorationSkip = "";
    this.WebkitTextDecorationStyle = "";
    this.WebkitTextEmphasisColor = "";
    this.WebkitTextEmphasisPosition = "";
    this.WebkitTextEmphasisStyle = "";
    this.WebkitTextFillColor = "";
    this.WebkitTextOrientation = "";
    this.WebkitTextSizeAdjust = "";
    this.WebkitTextStrokeColor = "";
    this.WebkitTextStrokeWidth = "";
    this.WebkitTextUnderlinePosition = "";
    this.WebkitTouchCallout = "";
    this.WebkitTransform = "";
    this.WebkitTransformOrigin = "";
    this.WebkitTransformStyle = "";
    this.WebkitTransitionDelay = "";
    this.WebkitTransitionDuration = "";
    this.WebkitTransitionProperty = "";
    this.WebkitTransitionTimingFunction = "";
    this.WebkitUserModify = "";
    this.WebkitUserSelect = "";
    this.WebkitWritingMode = "";
    this.MozAnimation = "";
    this.MozBorderImage = "";
    this.MozColumnRule = "";
    this.MozColumns = "";
    this.MozTransition = "";
    this.msContentZoomLimit = "";
    this.msContentZoomSnap = "";
    this.msFlex = "";
    this.msScrollLimit = "";
    this.msScrollSnapX = "";
    this.msScrollSnapY = "";
    this.msTransition = "";
    this.WebkitAnimation = "";
    this.WebkitBorderBefore = "";
    this.WebkitBorderImage = "";
    this.WebkitBorderRadius = "";
    this.WebkitColumnRule = "";
    this.WebkitColumns = "";
    this.WebkitFlex = "";
    this.WebkitFlexFlow = "";
    this.WebkitMask = "";
    this.WebkitMaskBoxImage = "";
    this.WebkitTextEmphasis = "";
    this.WebkitTextStroke = "";
    this.WebkitTransition = "";
    this.azimuth = "";
    this.boxAlign = "";
    this.boxDirection = "";
    this.boxFlex = "";
    this.boxFlexGroup = "";
    this.boxLines = "";
    this.boxOrdinalGroup = "";
    this.boxOrient = "";
    this.boxPack = "";
    this.clip = "";
    this.gridColumnGap = "";
    this.gridGap = "";
    this.gridRowGap = "";
    this.imeMode = "";
    this.offsetBlock = "";
    this.offsetBlockEnd = "";
    this.offsetBlockStart = "";
    this.offsetInline = "";
    this.offsetInlineEnd = "";
    this.offsetInlineStart = "";
    this.scrollSnapCoordinate = "";
    this.scrollSnapDestination = "";
    this.scrollSnapPointsX = "";
    this.scrollSnapPointsY = "";
    this.scrollSnapTypeX = "";
    this.scrollSnapTypeY = "";
    this.KhtmlBoxAlign = "";
    this.KhtmlBoxDirection = "";
    this.KhtmlBoxFlex = "";
    this.KhtmlBoxFlexGroup = "";
    this.KhtmlBoxLines = "";
    this.KhtmlBoxOrdinalGroup = "";
    this.KhtmlBoxOrient = "";
    this.KhtmlBoxPack = "";
    this.KhtmlLineBreak = "";
    this.KhtmlOpacity = "";
    this.KhtmlUserSelect = "";
    this.MozBackgroundClip = "";
    this.MozBackgroundInlinePolicy = "";
    this.MozBackgroundOrigin = "";
    this.MozBackgroundSize = "";
    this.MozBorderRadius = "";
    this.MozBorderRadiusBottomleft = "";
    this.MozBorderRadiusBottomright = "";
    this.MozBorderRadiusTopleft = "";
    this.MozBorderRadiusTopright = "";
    this.MozBoxAlign = "";
    this.MozBoxDirection = "";
    this.MozBoxFlex = "";
    this.MozBoxOrdinalGroup = "";
    this.MozBoxOrient = "";
    this.MozBoxPack = "";
    this.MozBoxShadow = "";
    this.MozFloatEdge = "";
    this.MozForceBrokenImageIcon = "";
    this.MozOpacity = "";
    this.MozOutline = "";
    this.MozOutlineColor = "";
    this.MozOutlineRadius = "";
    this.MozOutlineRadiusBottomleft = "";
    this.MozOutlineRadiusBottomright = "";
    this.MozOutlineRadiusTopleft = "";
    this.MozOutlineRadiusTopright = "";
    this.MozOutlineStyle = "";
    this.MozOutlineWidth = "";
    this.MozTextAlignLast = "";
    this.MozTextDecorationColor = "";
    this.MozTextDecorationLine = "";
    this.MozTextDecorationStyle = "";
    this.MozUserInput = "";
    this.msImeMode = "";
    this.OAnimation = "";
    this.OAnimationDelay = "";
    this.OAnimationDirection = "";
    this.OAnimationDuration = "";
    this.OAnimationFillMode = "";
    this.OAnimationIterationCount = "";
    this.OAnimationName = "";
    this.OAnimationPlayState = "";
    this.OAnimationTimingFunction = "";
    this.OBackgroundSize = "";
    this.OBorderImage = "";
    this.OObjectFit = "";
    this.OObjectPosition = "";
    this.OTabSize = "";
    this.OTextOverflow = "";
    this.OTransform = "";
    this.OTransformOrigin = "";
    this.OTransition = "";
    this.OTransitionDelay = "";
    this.OTransitionDuration = "";
    this.OTransitionProperty = "";
    this.OTransitionTimingFunction = "";
    this.WebkitBoxAlign = "";
    this.WebkitBoxDirection = "";
    this.WebkitBoxFlex = "";
    this.WebkitBoxFlexGroup = "";
    this.WebkitBoxLines = "";
    this.WebkitBoxOrdinalGroup = "";
    this.WebkitBoxOrient = "";
    this.WebkitBoxPack = "";
    this.WebkitScrollSnapPointsX = "";
    this.WebkitScrollSnapPointsY = "";
    this.alignmentBaseline = "";
    this.baselineShift = "";
    this.clipRule = "";
    this.colorInterpolation = "";
    this.colorRendering = "";
    this.dominantBaseline = "";
    this.fill = "";
    this.fillOpacity = "";
    this.fillRule = "";
    this.floodColor = "";
    this.floodOpacity = "";
    this.glyphOrientationVertical = "";
    this.lightingColor = "";
    this.marker = "";
    this.markerEnd = "";
    this.markerMid = "";
    this.markerStart = "";
    this.shapeRendering = "";
    this.stopColor = "";
    this.stopOpacity = "";
    this.stroke = "";
    this.strokeDasharray = "";
    this.strokeDashoffset = "";
    this.strokeLinecap = "";
    this.strokeLinejoin = "";
    this.strokeMiterlimit = "";
    this.strokeOpacity = "";
    this.strokeWidth = "";
    this.textAnchor = "";
    this.vectorEffect = "";
};
var allCssRulesObject = new AllCssRules();
// src/modules/core/helpers/generateCssValues.ts
var generateCssValues = function(props) {
    var styles = {};
    for(var prop in props){
        if (prop in allCssRulesObject) {
            styles[prop] = props[prop];
        }
    }
    return styles;
};
// src/modules/core/helpers/shouldForwardProps.ts
var shouldForwardProp = function(prop) {
    return !Object.keys(allCssRulesObject).includes(prop);
};
// src/modules/core/components/All.tsx
var generateCssOverrides = function(forComponent, theme) {
    var _theme;
    if (((_theme = theme) === null || _theme === void 0 ? void 0 : _theme.overrides) && theme.overrides[forComponent]) {
        return theme.overrides[forComponent] || {};
    }
    return {};
};
var generateStyles = function(overrides, rules) {
    return _object_spread({}, overrides, rules);
};
var Element = (0, import_styled_components.default)("div").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Element", props.theme), generateCssValues(props));
});
var Body = (0, import_styled_components.default)("body").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Body", props.theme), generateCssValues(props));
});
var Link = (0, import_styled_components.default)("a").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Link", props.theme), generateCssValues(props));
});
var A = (0, import_styled_components.default)("a").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("A", props.theme), generateCssValues(props));
});
var Text = (0, import_styled_components.default)("p").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Text", props.theme), generateCssValues(props));
});
var P = (0, import_styled_components.default)("p").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("P", props.theme), generateCssValues(props));
});
var Span = (0, import_styled_components.default)("span").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Span", props.theme), generateCssValues(props));
});
var H1 = (0, import_styled_components.default)("h1").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("H1", props.theme), generateCssValues(props));
});
var H2 = (0, import_styled_components.default)("h2").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("H2", props.theme), generateCssValues(props));
});
var H3 = (0, import_styled_components.default)("h3").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("H3", props.theme), generateCssValues(props));
});
var H4 = (0, import_styled_components.default)("h4").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("H4", props.theme), generateCssValues(props));
});
var H5 = (0, import_styled_components.default)("h5").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("H5", props.theme), generateCssValues(props));
});
var Article = (0, import_styled_components.default)("article").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Article", props.theme), generateCssValues(props));
});
var B = (0, import_styled_components.default)("b").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("B", props.theme), generateCssValues(props));
});
var I = (0, import_styled_components.default)("i").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("I", props.theme), generateCssValues(props));
});
var Address = (0, import_styled_components.default)("address").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Address", props.theme), generateCssValues(props));
});
var Code = (0, import_styled_components.default)("code").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Code", props.theme), generateCssValues(props));
});
var Br = (0, import_styled_components.default)("br").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Br", props.theme), generateCssValues(props));
});
var Marker = (0, import_styled_components.default)("marker").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Marker", props.theme), generateCssValues(props));
});
var Main = (0, import_styled_components.default)("main").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Main", props.theme), generateCssValues(props));
});
var Header = (0, import_styled_components.default)("header").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Header", props.theme), generateCssValues(props));
});
var Footer = (0, import_styled_components.default)("footer").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Footer", props.theme), generateCssValues(props));
});
var Section = (0, import_styled_components.default)("section").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Section", props.theme), generateCssValues(props));
});
var Aside = (0, import_styled_components.default)("aside").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Aside", props.theme), generateCssValues(props));
});
var Form = (0, import_styled_components.default)("form").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Form", props.theme), generateCssValues(props));
});
var Menu = (0, import_styled_components.default)("menu").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Menu", props.theme), generateCssValues(props));
});
var MenuItem = (0, import_styled_components.default)("menuitem").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("MenuItem", props.theme), generateCssValues(props));
});
var Select = (0, import_styled_components.default)("select").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Select", props.theme), generateCssValues(props));
});
var Option = (0, import_styled_components.default)("option").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Option", props.theme), generateCssValues(props));
});
var OptionGroup = (0, import_styled_components.default)("optgroup").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("OptionGroup", props.theme), generateCssValues(props));
});
var Button = (0, import_styled_components.default)("button").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Button", props.theme), generateCssValues(props));
});
var Input = (0, import_styled_components.default)("input").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Input", props.theme), generateCssValues(props));
});
var TextArea = (0, import_styled_components.default)("textarea").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("TextArea", props.theme), generateCssValues(props));
});
var Image = (0, import_styled_components.default)("image").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Image", props.theme), generateCssValues(props));
});
var Img = (0, import_styled_components.default)("img").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Img", props.theme), generateCssValues(props));
});
var Video = (0, import_styled_components.default)("video").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("Video", props.theme), generateCssValues(props));
});
var IFrame = (0, import_styled_components.default)("iframe").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return generateStyles(generateCssOverrides("IFrame", props.theme), generateCssValues(props));
});
var Flex = (0, import_styled_components.default)("div").withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return _object_spread({
        display: "flex"
    }, generateStyles(generateCssOverrides("Flex", props.theme), generateCssValues(props)));
});
var FlexRow = (0, import_styled_components.default)(Flex).withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return _object_spread({
        flexDirection: "row"
    }, generateStyles(// generateCssOverrides("FlexRow", props.theme as UIThemeInterface),
    {}, generateCssValues(props)));
});
var FlexColumn = (0, import_styled_components.default)(Flex).withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return _object_spread({
        flexDirection: "column"
    }, generateStyles(// generateCssOverrides("FlexColumn", props.theme as UIThemeInterface),
    {}, generateCssValues(props)));
});
var Grid = (0, import_styled_components.default)(Flex).withConfig({
    shouldForwardProp: shouldForwardProp
})(function(props) {
    return _object_spread({
        display: "grid"
    }, generateStyles(generateCssOverrides("Grid", props.theme), generateCssValues(props)));
});
// src/modules/theme/UIThemeProvider.tsx
var import_styled_components2 = require("styled-components");
var import_jsx_runtime = require("react/jsx-runtime");
var UIThemeProvider = function(param) {
    var children = param.children, theme = param.theme;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_styled_components2.ThemeProvider, {
        theme: theme,
        children: children
    });
};
// src/modules/theme/createTheme.ts
var createUITheme = function(spacings, variations, overrides) {
    return {
        spacings: spacings,
        variations: variations,
        overrides: overrides
    };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    A: A,
    Address: Address,
    Article: Article,
    Aside: Aside,
    B: B,
    Body: Body,
    Br: Br,
    Button: Button,
    Code: Code,
    Element: Element,
    Flex: Flex,
    FlexColumn: FlexColumn,
    FlexRow: FlexRow,
    Footer: Footer,
    Form: Form,
    Grid: Grid,
    H1: H1,
    H2: H2,
    H3: H3,
    H4: H4,
    H5: H5,
    Header: Header,
    I: I,
    IFrame: IFrame,
    Image: Image,
    Img: Img,
    Input: Input,
    Link: Link,
    Main: Main,
    Marker: Marker,
    Menu: Menu,
    MenuItem: MenuItem,
    Option: Option,
    OptionGroup: OptionGroup,
    P: P,
    Section: Section,
    Select: Select,
    Span: Span,
    Text: Text,
    TextArea: TextArea,
    UIThemeProvider: UIThemeProvider,
    Video: Video,
    createUITheme: createUITheme,
    generateCssOverrides: generateCssOverrides
});
//# sourceMappingURL=main.js.map