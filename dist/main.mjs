// src/modules/core/components/All.tsx
import styled from "styled-components";

// src/modules/core/AllCssRules.ts
var AllCssRules = class {
  constructor() {
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
  }
};
var allCssRulesObject = new AllCssRules();

// src/modules/core/helpers/generateCssValues.ts
var generateCssValues = (props) => {
  let styles = {};
  for (const prop in props) {
    if (prop in allCssRulesObject) {
      styles[prop] = props[prop];
    }
  }
  return styles;
};

// src/modules/core/helpers/shouldForwardProps.ts
var shouldForwardProp = (prop) => !Object.keys(allCssRulesObject).includes(prop);

// src/modules/core/components/All.tsx
var generateCssOverrides = (forComponent, theme) => {
  if (theme?.overrides && theme.overrides[forComponent]) {
    return theme.overrides[forComponent] || {};
  }
  return {};
};
var generateStyles = (overrides, rules) => {
  return { ...overrides, ...rules };
};
var Element = styled("div").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Element", props.theme),
    generateCssValues(props)
  )
);
var Body = styled("body").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Body", props.theme),
    generateCssValues(props)
  )
);
var Link = styled("a").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Link", props.theme),
    generateCssValues(props)
  )
);
var A = styled("a").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("A", props.theme),
    generateCssValues(props)
  )
);
var Text = styled("p").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Text", props.theme),
    generateCssValues(props)
  )
);
var P = styled("p").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("P", props.theme),
    generateCssValues(props)
  )
);
var Span = styled("span").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Span", props.theme),
    generateCssValues(props)
  )
);
var H1 = styled("h1").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("H1", props.theme),
    generateCssValues(props)
  )
);
var H2 = styled("h2").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("H2", props.theme),
    generateCssValues(props)
  )
);
var H3 = styled("h3").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("H3", props.theme),
    generateCssValues(props)
  )
);
var H4 = styled("h4").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("H4", props.theme),
    generateCssValues(props)
  )
);
var H5 = styled("h5").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("H5", props.theme),
    generateCssValues(props)
  )
);
var Article = styled("article").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Article", props.theme),
    generateCssValues(props)
  )
);
var B = styled("b").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("B", props.theme),
    generateCssValues(props)
  )
);
var I = styled("i").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("I", props.theme),
    generateCssValues(props)
  )
);
var Address = styled("address").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Address", props.theme),
    generateCssValues(props)
  )
);
var Code = styled("code").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Code", props.theme),
    generateCssValues(props)
  )
);
var Br = styled("br").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Br", props.theme),
    generateCssValues(props)
  )
);
var Marker = styled("marker").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Marker", props.theme),
    generateCssValues(props)
  )
);
var Main = styled("main").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Main", props.theme),
    generateCssValues(props)
  )
);
var Header = styled("header").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Header", props.theme),
    generateCssValues(props)
  )
);
var Footer = styled("footer").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Footer", props.theme),
    generateCssValues(props)
  )
);
var Section = styled("section").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Section", props.theme),
    generateCssValues(props)
  )
);
var Aside = styled("aside").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Aside", props.theme),
    generateCssValues(props)
  )
);
var Form = styled("form").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Form", props.theme),
    generateCssValues(props)
  )
);
var Menu = styled("menu").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Menu", props.theme),
    generateCssValues(props)
  )
);
var MenuItem = styled("menuitem").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("MenuItem", props.theme),
    generateCssValues(props)
  )
);
var Select = styled("select").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Select", props.theme),
    generateCssValues(props)
  )
);
var Option = styled("option").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Option", props.theme),
    generateCssValues(props)
  )
);
var OptionGroup = styled("optgroup").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("OptionGroup", props.theme),
    generateCssValues(props)
  )
);
var Button = styled("button").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Button", props.theme),
    generateCssValues(props)
  )
);
var Input = styled("input").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Input", props.theme),
    generateCssValues(props)
  )
);
var TextArea = styled("textarea").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("TextArea", props.theme),
    generateCssValues(props)
  )
);
var Image = styled("image").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Image", props.theme),
    generateCssValues(props)
  )
);
var Img = styled("img").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Img", props.theme),
    generateCssValues(props)
  )
);
var Video = styled("video").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("Video", props.theme),
    generateCssValues(props)
  )
);
var IFrame = styled("iframe").withConfig({
  shouldForwardProp
})(
  (props) => generateStyles(
    generateCssOverrides("IFrame", props.theme),
    generateCssValues(props)
  )
);
var Flex = styled("div").withConfig({
  shouldForwardProp
})((props) => ({
  display: "flex",
  ...generateStyles(
    generateCssOverrides("Flex", props.theme),
    generateCssValues(props)
  )
}));
var FlexRow = styled(Flex).withConfig({
  shouldForwardProp
})((props) => ({
  flexDirection: "row",
  ...generateStyles(
    // generateCssOverrides("FlexRow", props.theme as UIThemeInterface),
    {},
    generateCssValues(props)
  )
}));
var FlexColumn = styled(Flex).withConfig({
  shouldForwardProp
})((props) => ({
  flexDirection: "column",
  ...generateStyles(
    // generateCssOverrides("FlexColumn", props.theme as UIThemeInterface),
    {},
    generateCssValues(props)
  )
}));
var Grid = styled(Flex).withConfig({
  shouldForwardProp
})((props) => ({
  display: "grid",
  ...generateStyles(
    generateCssOverrides("Grid", props.theme),
    generateCssValues(props)
  )
}));

// src/modules/theme/UIThemeProvider.tsx
import { ThemeProvider } from "styled-components";
import { jsx } from "react/jsx-runtime";
var UIThemeProvider = ({
  children,
  theme
}) => {
  return /* @__PURE__ */ jsx(ThemeProvider, { theme, children });
};

// src/modules/theme/createTheme.ts
var createUITheme = (spacings, variations, overrides) => {
  return {
    spacings,
    variations,
    overrides
  };
};
export {
  A,
  Address,
  Article,
  Aside,
  B,
  Body,
  Br,
  Button,
  Code,
  Element,
  Flex,
  FlexColumn,
  FlexRow,
  Footer,
  Form,
  Grid,
  H1,
  H2,
  H3,
  H4,
  H5,
  Header,
  I,
  IFrame,
  Image,
  Img,
  Input,
  Link,
  Main,
  Marker,
  Menu,
  MenuItem,
  Option,
  OptionGroup,
  P,
  Section,
  Select,
  Span,
  Text,
  TextArea,
  UIThemeProvider,
  Video,
  createUITheme,
  generateCssOverrides
};
//# sourceMappingURL=main.mjs.map