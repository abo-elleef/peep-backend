/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/calendar-config.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/calendar-config.js":
/*!*************************************************!*\
  !*** ./app/javascript/packs/calendar-config.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_resource_timegrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/resource-timegrid */ "./node_modules/@fullcalendar/resource-timegrid/main.js");





console.log("custom loaded");

function drawCalendar(element) {
  var calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Calendar"](element, {
    plugins: [_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_1__["default"], _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_resource_timegrid__WEBPACK_IMPORTED_MODULE_4__["default"]],
    resources: [{
      id: 'a',
      title: 'Room A'
    }, {
      id: 'b',
      title: 'Room B'
    }, {
      id: 'c',
      title: 'Room C'
    }, {
      id: 'd',
      title: 'Room D'
    }],
    initialView: "resourceTimeGridPlugin",
    //timeGridDay,  timeGridWeek
    nowIndicator: true,
    headerToolbar: {
      center: 'prev,next today',
      left: '',
      right: 'timeGridWeek,timeGridDay'
    },
    eventClick: function eventClick(info) {
      console.log(info);
    },
    events: function events(info, successCallback, failureCallback) {
      superagent__WEBPACK_IMPORTED_MODULE_2___default.a.get('calendar_events').type('json').query({
        starts_at: info.start.toISOString(),
        ends_at: info.end.toISOString(),
        location_id: window.location_id,
        staff_id: window.staff_id
      }).end(function (err, res) {
        if (err) {
          failureCallback(err);
        } else {
          successCallback(res.body.map(function (event) {
            return {
              title: event.title,
              start: event.start,
              end: event.end,
              display: event.display,
              color: event.display === 'background' ? '#aaa' : event.color
            };
          }));
        }
      });
    }
  });
  calendar.render(); // [
  //     {
  //         title: 'All Day Event',
  //         start: '2020-10-01'
  //     },
  //     {
  //         title: 'Long Event',
  //         start: '2020-10-07',
  //         end: '2020-10-10'
  //     },
  //     {
  //         groupId: '999',
  //         title: 'Repeating Event',
  //         start: '2020-10-09T16:00:00'
  //     },
  //     {
  //         groupId: '999',
  //         title: 'Repeating Event',
  //         start: '2020-10-16T16:00:00'
  //     },
  //     {
  //         title: 'Conference',
  //         start: '2020-10-11',
  //         end: '2020-10-13'
  //     },
  //     {
  //         title: 'Meeting',
  //         start: '2020-10-12T10:30:00',
  //         end: '2020-10-12T18:30:00'
  //     },
  //     {
  //         title: 'Lunch',
  //         start: '2020-10-12T12:00:00'
  //     },
  //     {
  //         title: 'Meeting',
  //         start: '2020-10-12T14:30:00'
  //     },
  //     {
  //         title: 'Birthday Party',
  //         start: '2020-10-13T07:00:00'
  //     },
  //     {
  //         title: 'Click for Google',
  //         url: 'http://google.com/',
  //         start: '2020-10-28'
  //     }
  // ]
}

document.addEventListener('DOMContentLoaded', function () {
  drawCalendar(document.getElementById('calendar'));
});

/***/ }),

/***/ "./node_modules/@fullcalendar/common/main.css":
/*!****************************************************!*\
  !*** ./node_modules/@fullcalendar/common/main.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--6-1!../../postcss-loader/src??ref--6-2!./main.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@fullcalendar/common/main.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@fullcalendar/common/main.js":
/*!***************************************************!*\
  !*** ./node_modules/@fullcalendar/common/main.js ***!
  \***************************************************/
/*! exports provided: Component, createElement, render, createRef, Fragment, createContext, flushToDom, BASE_OPTION_DEFAULTS, BASE_OPTION_REFINERS, BaseComponent, BgEvent, CalendarApi, CalendarContent, CalendarDataManager, CalendarDataProvider, CalendarRoot, ContentHook, CustomContentRenderContext, DateComponent, DateEnv, DateProfileGenerator, DayCellContent, DayCellRoot, DayHeader, DaySeriesModel, DayTableModel, DelayedRunner, ElementDragging, ElementScrollController, Emitter, EventApi, EventRoot, EventSourceApi, Interaction, MountHook, NamedTimeZoneImpl, NowIndicatorRoot, NowTimer, PositionCache, RefMap, RenderHook, ScrollController, ScrollResponder, Scroller, SimpleScrollGrid, Slicer, Splitter, StandardEvent, TableDateCell, TableDowCell, Theme, ViewApi, ViewContextType, ViewRoot, WeekNumberRoot, WindowScrollController, addDays, addDurations, addMs, addWeeks, allowContextMenu, allowSelection, applyMutationToEventStore, applyStyle, applyStyleProp, asCleanDays, asRoughMinutes, asRoughMs, asRoughSeconds, buildClassNameNormalizer, buildEventApis, buildEventRangeKey, buildHashFromArray, buildNavLinkData, buildSegCompareObj, buildSegTimeText, collectFromHash, combineEventUis, compareByFieldSpec, compareByFieldSpecs, compareNumbers, compareObjs, computeEdges, computeFallbackHeaderFormat, computeHeightAndMargins, computeInnerRect, computeRect, computeSegDraggable, computeSegEndResizable, computeSegStartResizable, computeShrinkWidth, computeSmallestCellWidth, computeVisibleDayRange, config, constrainPoint, createDuration, createEmptyEventStore, createEventInstance, createEventUi, createFormatter, createPlugin, diffDates, diffDayAndTime, diffDays, diffPoints, diffWeeks, diffWholeDays, diffWholeWeeks, disableCursor, elementClosest, elementMatches, enableCursor, eventTupleToStore, filterEventStoreDefs, filterHash, findDirectChildren, findElements, flexibleCompare, formatDate, formatDayString, formatIsoTimeString, formatRange, getAllowYScrolling, getCanVGrowWithinCell, getClippingParents, getDateMeta, getDayClassNames, getDefaultEventEnd, getElSeg, getEventClassNames, getIsRtlScrollbarOnLeft, getRectCenter, getRelevantEvents, getScrollGridClassNames, getScrollbarWidths, getSectionClassNames, getSectionHasLiquidHeight, getSegMeta, getSlotClassNames, getStickyFooterScrollbar, getStickyHeaderDates, getUnequalProps, globalLocales, globalPlugins, greatestDurationDenominator, guid, hasBgRendering, hasShrinkWidth, identity, interactionSettingsStore, interactionSettingsToStore, intersectRanges, intersectRects, isArraysEqual, isColPropsEqual, isDateSpansEqual, isInt, isInteractionValid, isMultiDayRange, isPropsEqual, isPropsValid, isValidDate, listenBySelector, mapHash, memoize, memoizeArraylike, memoizeHashlike, memoizeObjArg, mergeEventStores, multiplyDuration, padStart, parseBusinessHours, parseClassNames, parseDragMeta, parseEventDef, parseFieldSpecs, parseMarker, pointInsideRect, preventContextMenu, preventDefault, preventSelection, rangeContainsMarker, rangeContainsRange, rangesEqual, rangesIntersect, refineEventDef, refineProps, removeElement, removeExact, renderChunkContent, renderFill, renderMicroColGroup, renderScrollShim, requestJson, sanitizeShrinkWidth, setElSeg, setRef, sliceEventStore, sliceEvents, sortEventSegs, startOfDay, translateRect, triggerDateSelect, unpromisify, version, whenTransitionDone, wholeDivideDurations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_OPTION_DEFAULTS", function() { return BASE_OPTION_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_OPTION_REFINERS", function() { return BASE_OPTION_REFINERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgEvent", function() { return BgEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarApi", function() { return CalendarApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarContent", function() { return CalendarContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDataManager", function() { return CalendarDataManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDataProvider", function() { return CalendarDataProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarRoot", function() { return CalendarRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentHook", function() { return ContentHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomContentRenderContext", function() { return CustomContentRenderContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateComponent", function() { return DateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateEnv", function() { return DateEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateProfileGenerator", function() { return DateProfileGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayCellContent", function() { return DayCellContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayCellRoot", function() { return DayCellRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayHeader", function() { return DayHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaySeriesModel", function() { return DaySeriesModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTableModel", function() { return DayTableModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayedRunner", function() { return DelayedRunner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementDragging", function() { return ElementDragging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementScrollController", function() { return ElementScrollController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return Emitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventApi", function() { return EventApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRoot", function() { return EventRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSourceApi", function() { return EventSourceApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interaction", function() { return Interaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountHook", function() { return MountHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedTimeZoneImpl", function() { return NamedTimeZoneImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowIndicatorRoot", function() { return NowIndicatorRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowTimer", function() { return NowTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionCache", function() { return PositionCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefMap", function() { return RefMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderHook", function() { return RenderHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollController", function() { return ScrollController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollResponder", function() { return ScrollResponder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scroller", function() { return Scroller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleScrollGrid", function() { return SimpleScrollGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slicer", function() { return Slicer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Splitter", function() { return Splitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardEvent", function() { return StandardEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDateCell", function() { return TableDateCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDowCell", function() { return TableDowCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewApi", function() { return ViewApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContextType", function() { return ViewContextType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRoot", function() { return ViewRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekNumberRoot", function() { return WeekNumberRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowScrollController", function() { return WindowScrollController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return addDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDurations", function() { return addDurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMs", function() { return addMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWeeks", function() { return addWeeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowContextMenu", function() { return allowContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowSelection", function() { return allowSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMutationToEventStore", function() { return applyMutationToEventStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyStyle", function() { return applyStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyStyleProp", function() { return applyStyleProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asCleanDays", function() { return asCleanDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asRoughMinutes", function() { return asRoughMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asRoughMs", function() { return asRoughMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asRoughSeconds", function() { return asRoughSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildClassNameNormalizer", function() { return buildClassNameNormalizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildEventApis", function() { return buildEventApis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildEventRangeKey", function() { return buildEventRangeKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildHashFromArray", function() { return buildHashFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildNavLinkData", function() { return buildNavLinkData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSegCompareObj", function() { return buildSegCompareObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSegTimeText", function() { return buildSegTimeText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectFromHash", function() { return collectFromHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineEventUis", function() { return combineEventUis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareByFieldSpec", function() { return compareByFieldSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareByFieldSpecs", function() { return compareByFieldSpecs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareNumbers", function() { return compareNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareObjs", function() { return compareObjs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeEdges", function() { return computeEdges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeFallbackHeaderFormat", function() { return computeFallbackHeaderFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeHeightAndMargins", function() { return computeHeightAndMargins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeInnerRect", function() { return computeInnerRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeRect", function() { return computeRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeSegDraggable", function() { return computeSegDraggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeSegEndResizable", function() { return computeSegEndResizable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeSegStartResizable", function() { return computeSegStartResizable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeShrinkWidth", function() { return computeShrinkWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeSmallestCellWidth", function() { return computeSmallestCellWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeVisibleDayRange", function() { return computeVisibleDayRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constrainPoint", function() { return constrainPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDuration", function() { return createDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyEventStore", function() { return createEmptyEventStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventInstance", function() { return createEventInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventUi", function() { return createEventUi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFormatter", function() { return createFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlugin", function() { return createPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffDates", function() { return diffDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffDayAndTime", function() { return diffDayAndTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffDays", function() { return diffDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffPoints", function() { return diffPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffWeeks", function() { return diffWeeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffWholeDays", function() { return diffWholeDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffWholeWeeks", function() { return diffWholeWeeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableCursor", function() { return disableCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementClosest", function() { return elementClosest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementMatches", function() { return elementMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableCursor", function() { return enableCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventTupleToStore", function() { return eventTupleToStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterEventStoreDefs", function() { return filterEventStoreDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterHash", function() { return filterHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDirectChildren", function() { return findDirectChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findElements", function() { return findElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexibleCompare", function() { return flexibleCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDayString", function() { return formatDayString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatIsoTimeString", function() { return formatIsoTimeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatRange", function() { return formatRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllowYScrolling", function() { return getAllowYScrolling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCanVGrowWithinCell", function() { return getCanVGrowWithinCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClippingParents", function() { return getClippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateMeta", function() { return getDateMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayClassNames", function() { return getDayClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultEventEnd", function() { return getDefaultEventEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElSeg", function() { return getElSeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventClassNames", function() { return getEventClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsRtlScrollbarOnLeft", function() { return getIsRtlScrollbarOnLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRectCenter", function() { return getRectCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelevantEvents", function() { return getRelevantEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollGridClassNames", function() { return getScrollGridClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidths", function() { return getScrollbarWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSectionClassNames", function() { return getSectionClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSectionHasLiquidHeight", function() { return getSectionHasLiquidHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSegMeta", function() { return getSegMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlotClassNames", function() { return getSlotClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStickyFooterScrollbar", function() { return getStickyFooterScrollbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStickyHeaderDates", function() { return getStickyHeaderDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnequalProps", function() { return getUnequalProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalLocales", function() { return globalLocales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalPlugins", function() { return globalPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greatestDurationDenominator", function() { return greatestDurationDenominator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return guid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBgRendering", function() { return hasBgRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasShrinkWidth", function() { return hasShrinkWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interactionSettingsStore", function() { return interactionSettingsStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interactionSettingsToStore", function() { return interactionSettingsToStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectRanges", function() { return intersectRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectRects", function() { return intersectRects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArraysEqual", function() { return isArraysEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isColPropsEqual", function() { return isColPropsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateSpansEqual", function() { return isDateSpansEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInt", function() { return isInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteractionValid", function() { return isInteractionValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMultiDayRange", function() { return isMultiDayRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPropsEqual", function() { return isPropsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPropsValid", function() { return isPropsValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidDate", function() { return isValidDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenBySelector", function() { return listenBySelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapHash", function() { return mapHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoizeArraylike", function() { return memoizeArraylike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoizeHashlike", function() { return memoizeHashlike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoizeObjArg", function() { return memoizeObjArg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeEventStores", function() { return mergeEventStores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyDuration", function() { return multiplyDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padStart", function() { return padStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseBusinessHours", function() { return parseBusinessHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseClassNames", function() { return parseClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDragMeta", function() { return parseDragMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseEventDef", function() { return parseEventDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseFieldSpecs", function() { return parseFieldSpecs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMarker", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointInsideRect", function() { return pointInsideRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventContextMenu", function() { return preventContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventDefault", function() { return preventDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventSelection", function() { return preventSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeContainsMarker", function() { return rangeContainsMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeContainsRange", function() { return rangeContainsRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangesEqual", function() { return rangesEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangesIntersect", function() { return rangesIntersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refineEventDef", function() { return refineEventDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refineProps", function() { return refineProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeElement", function() { return removeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeExact", function() { return removeExact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderChunkContent", function() { return renderChunkContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFill", function() { return renderFill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMicroColGroup", function() { return renderMicroColGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderScrollShim", function() { return renderScrollShim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestJson", function() { return requestJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeShrinkWidth", function() { return sanitizeShrinkWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setElSeg", function() { return setElSeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRef", function() { return setRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliceEventStore", function() { return sliceEventStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliceEvents", function() { return sliceEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortEventSegs", function() { return sortEventSegs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startOfDay", function() { return startOfDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateRect", function() { return translateRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerDateSelect", function() { return triggerDateSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpromisify", function() { return unpromisify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenTransitionDone", function() { return whenTransitionDone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wholeDivideDurations", function() { return wholeDivideDurations; });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./node_modules/@fullcalendar/common/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _vdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vdom */ "./node_modules/@fullcalendar/common/vdom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _vdom__WEBPACK_IMPORTED_MODULE_2__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vdom__WEBPACK_IMPORTED_MODULE_2__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return _vdom__WEBPACK_IMPORTED_MODULE_2__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return _vdom__WEBPACK_IMPORTED_MODULE_2__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return _vdom__WEBPACK_IMPORTED_MODULE_2__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flushToDom", function() { return _vdom__WEBPACK_IMPORTED_MODULE_2__["flushToDom"]; });

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
FullCalendar v5.3.1
Docs & License: https://fullcalendar.io/
(c) 2020 Adam Shaw
*/



 // no public types yet. when there are, export from:
// import {} from './api-type-deps'

var EventSourceApi =
/** @class */
function () {
  function EventSourceApi(context, internalEventSource // rename?
  ) {
    this.context = context;
    this.internalEventSource = internalEventSource;
  }

  EventSourceApi.prototype.remove = function () {
    this.context.dispatch({
      type: 'REMOVE_EVENT_SOURCE',
      sourceId: this.internalEventSource.sourceId
    });
  };

  EventSourceApi.prototype.refetch = function () {
    this.context.dispatch({
      type: 'FETCH_EVENT_SOURCES',
      sourceIds: [this.internalEventSource.sourceId]
    });
  };

  Object.defineProperty(EventSourceApi.prototype, "id", {
    get: function get() {
      return this.internalEventSource.publicId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventSourceApi.prototype, "url", {
    // only relevant to json-feed event sources
    get: function get() {
      return this.internalEventSource.meta.url;
    },
    enumerable: false,
    configurable: true
  });
  return EventSourceApi;
}();

function removeElement(el) {
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
} // Querying
// ----------------------------------------------------------------------------------------------------------------


function elementClosest(el, selector) {
  if (el.closest) {
    return el.closest(selector); // really bad fallback for IE
    // from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  } else {
    if (!document.documentElement.contains(el)) {
      return null;
    }

    do {
      if (elementMatches(el, selector)) {
        return el;
      }

      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  }
}

function elementMatches(el, selector) {
  var method = el.matches || el.matchesSelector || el.msMatchesSelector;
  return method.call(el, selector);
} // accepts multiple subject els
// returns a real array. good for methods like forEach
// TODO: accept the document


function findElements(container, selector) {
  var containers = container instanceof HTMLElement ? [container] : container;
  var allMatches = [];

  for (var i = 0; i < containers.length; i++) {
    var matches = containers[i].querySelectorAll(selector);

    for (var j = 0; j < matches.length; j++) {
      allMatches.push(matches[j]);
    }
  }

  return allMatches;
} // accepts multiple subject els
// only queries direct child elements // TODO: rename to findDirectChildren!


function findDirectChildren(parent, selector) {
  var parents = parent instanceof HTMLElement ? [parent] : parent;
  var allMatches = [];

  for (var i = 0; i < parents.length; i++) {
    var childNodes = parents[i].children; // only ever elements

    for (var j = 0; j < childNodes.length; j++) {
      var childNode = childNodes[j];

      if (!selector || elementMatches(childNode, selector)) {
        allMatches.push(childNode);
      }
    }
  }

  return allMatches;
} // Style
// ----------------------------------------------------------------------------------------------------------------


var PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;

function applyStyle(el, props) {
  for (var propName in props) {
    applyStyleProp(el, propName, props[propName]);
  }
}

function applyStyleProp(el, name, val) {
  if (val == null) {
    el.style[name] = '';
  } else if (typeof val === 'number' && PIXEL_PROP_RE.test(name)) {
    el.style[name] = val + 'px';
  } else {
    el.style[name] = val;
  }
} // Stops a mouse/touch event from doing it's native browser action


function preventDefault(ev) {
  ev.preventDefault();
} // Event Delegation
// ----------------------------------------------------------------------------------------------------------------


function buildDelegationHandler(selector, handler) {
  return function (ev) {
    var matchedChild = elementClosest(ev.target, selector);

    if (matchedChild) {
      handler.call(matchedChild, ev, matchedChild);
    }
  };
}

function listenBySelector(container, eventType, selector, handler) {
  var attachedHandler = buildDelegationHandler(selector, handler);
  container.addEventListener(eventType, attachedHandler);
  return function () {
    container.removeEventListener(eventType, attachedHandler);
  };
}

function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
  var currentMatchedChild;
  return listenBySelector(container, 'mouseover', selector, function (ev, matchedChild) {
    if (matchedChild !== currentMatchedChild) {
      currentMatchedChild = matchedChild;
      onMouseEnter(ev, matchedChild);

      var realOnMouseLeave_1 = function realOnMouseLeave_1(ev) {
        currentMatchedChild = null;
        onMouseLeave(ev, matchedChild);
        matchedChild.removeEventListener('mouseleave', realOnMouseLeave_1);
      }; // listen to the next mouseleave, and then unattach


      matchedChild.addEventListener('mouseleave', realOnMouseLeave_1);
    }
  });
} // Animation
// ----------------------------------------------------------------------------------------------------------------


var transitionEventNames = ['webkitTransitionEnd', 'otransitionend', 'oTransitionEnd', 'msTransitionEnd', 'transitionend']; // triggered only when the next single subsequent transition finishes

function whenTransitionDone(el, callback) {
  var realCallback = function realCallback(ev) {
    callback(ev);
    transitionEventNames.forEach(function (eventName) {
      el.removeEventListener(eventName, realCallback);
    });
  };

  transitionEventNames.forEach(function (eventName) {
    el.addEventListener(eventName, realCallback); // cross-browser way to determine when the transition finishes
  });
}

var guidNumber = 0;

function guid() {
  return String(guidNumber++);
}
/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/
// Make the mouse cursor express that an event is not allowed in the current area


function disableCursor() {
  document.body.classList.add('fc-not-allowed');
} // Returns the mouse cursor to its original look


function enableCursor() {
  document.body.classList.remove('fc-not-allowed');
}
/* Selection
----------------------------------------------------------------------------------------------------------------------*/


function preventSelection(el) {
  el.classList.add('fc-unselectable');
  el.addEventListener('selectstart', preventDefault);
}

function allowSelection(el) {
  el.classList.remove('fc-unselectable');
  el.removeEventListener('selectstart', preventDefault);
}
/* Context Menu
----------------------------------------------------------------------------------------------------------------------*/


function preventContextMenu(el) {
  el.addEventListener('contextmenu', preventDefault);
}

function allowContextMenu(el) {
  el.removeEventListener('contextmenu', preventDefault);
}

function parseFieldSpecs(input) {
  var specs = [];
  var tokens = [];
  var i;
  var token;

  if (typeof input === 'string') {
    tokens = input.split(/\s*,\s*/);
  } else if (typeof input === 'function') {
    tokens = [input];
  } else if (Array.isArray(input)) {
    tokens = input;
  }

  for (i = 0; i < tokens.length; i++) {
    token = tokens[i];

    if (typeof token === 'string') {
      specs.push(token.charAt(0) === '-' ? {
        field: token.substring(1),
        order: -1
      } : {
        field: token,
        order: 1
      });
    } else if (typeof token === 'function') {
      specs.push({
        func: token
      });
    }
  }

  return specs;
}

function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
  var i;
  var cmp;

  for (i = 0; i < fieldSpecs.length; i++) {
    cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);

    if (cmp) {
      return cmp;
    }
  }

  return 0;
}

function compareByFieldSpec(obj0, obj1, fieldSpec) {
  if (fieldSpec.func) {
    return fieldSpec.func(obj0, obj1);
  }

  return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field]) * (fieldSpec.order || 1);
}

function flexibleCompare(a, b) {
  if (!a && !b) {
    return 0;
  }

  if (b == null) {
    return -1;
  }

  if (a == null) {
    return 1;
  }

  if (typeof a === 'string' || typeof b === 'string') {
    return String(a).localeCompare(String(b));
  }

  return a - b;
}
/* String Utilities
----------------------------------------------------------------------------------------------------------------------*/


function padStart(val, len) {
  var s = String(val);
  return '000'.substr(0, len - s.length) + s;
}
/* Number Utilities
----------------------------------------------------------------------------------------------------------------------*/


function compareNumbers(a, b) {
  return a - b;
}

function isInt(n) {
  return n % 1 === 0;
}
/* FC-specific DOM dimension stuff
----------------------------------------------------------------------------------------------------------------------*/


function computeSmallestCellWidth(cellEl) {
  var allWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-frame');
  var contentWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-cushion');

  if (!allWidthEl) {
    throw new Error('needs fc-scrollgrid-shrink-frame className'); // TODO: use const
  }

  if (!contentWidthEl) {
    throw new Error('needs fc-scrollgrid-shrink-cushion className');
  }

  return cellEl.getBoundingClientRect().width - allWidthEl.getBoundingClientRect().width + // the cell padding+border
  contentWidthEl.getBoundingClientRect().width;
}

var DAY_IDS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']; // Adding

function addWeeks(m, n) {
  var a = dateToUtcArray(m);
  a[2] += n * 7;
  return arrayToUtcDate(a);
}

function addDays(m, n) {
  var a = dateToUtcArray(m);
  a[2] += n;
  return arrayToUtcDate(a);
}

function addMs(m, n) {
  var a = dateToUtcArray(m);
  a[6] += n;
  return arrayToUtcDate(a);
} // Diffing (all return floats)
// TODO: why not use ranges?


function diffWeeks(m0, m1) {
  return diffDays(m0, m1) / 7;
}

function diffDays(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60 * 24);
}

function diffHours(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60);
}

function diffMinutes(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60);
}

function diffSeconds(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / 1000;
}

function diffDayAndTime(m0, m1) {
  var m0day = startOfDay(m0);
  var m1day = startOfDay(m1);
  return {
    years: 0,
    months: 0,
    days: Math.round(diffDays(m0day, m1day)),
    milliseconds: m1.valueOf() - m1day.valueOf() - (m0.valueOf() - m0day.valueOf())
  };
} // Diffing Whole Units


function diffWholeWeeks(m0, m1) {
  var d = diffWholeDays(m0, m1);

  if (d !== null && d % 7 === 0) {
    return d / 7;
  }

  return null;
}

function diffWholeDays(m0, m1) {
  if (timeAsMs(m0) === timeAsMs(m1)) {
    return Math.round(diffDays(m0, m1));
  }

  return null;
} // Start-Of


function startOfDay(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate()]);
}

function startOfHour(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours()]);
}

function startOfMinute(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours(), m.getUTCMinutes()]);
}

function startOfSecond(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours(), m.getUTCMinutes(), m.getUTCSeconds()]);
} // Week Computation


function weekOfYear(marker, dow, doy) {
  var y = marker.getUTCFullYear();
  var w = weekOfGivenYear(marker, y, dow, doy);

  if (w < 1) {
    return weekOfGivenYear(marker, y - 1, dow, doy);
  }

  var nextW = weekOfGivenYear(marker, y + 1, dow, doy);

  if (nextW >= 1) {
    return Math.min(w, nextW);
  }

  return w;
}

function weekOfGivenYear(marker, year, dow, doy) {
  var firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
  var dayStart = startOfDay(marker);
  var days = Math.round(diffDays(firstWeekStart, dayStart));
  return Math.floor(days / 7) + 1; // zero-indexed
} // start-of-first-week - start-of-year


function firstWeekOffset(year, dow, doy) {
  // first-week day -- which january is always in the first week (4 for iso, 1 for other)
  var fwd = 7 + dow - doy; // first-week day local weekday -- which local weekday is fwd

  var fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
} // Array Conversion


function dateToLocalArray(date) {
  return [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
}

function arrayToLocalDate(a) {
  return new Date(a[0], a[1] || 0, a[2] == null ? 1 : a[2], // day of month
  a[3] || 0, a[4] || 0, a[5] || 0);
}

function dateToUtcArray(date) {
  return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds()];
}

function arrayToUtcDate(a) {
  // according to web standards (and Safari), a month index is required.
  // massage if only given a year.
  if (a.length === 1) {
    a = a.concat([0]);
  }

  return new Date(Date.UTC.apply(Date, a));
} // Other Utils


function isValidDate(m) {
  return !isNaN(m.valueOf());
}

function timeAsMs(m) {
  return m.getUTCHours() * 1000 * 60 * 60 + m.getUTCMinutes() * 1000 * 60 + m.getUTCSeconds() * 1000 + m.getUTCMilliseconds();
}

function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
  return {
    instanceId: guid(),
    defId: defId,
    range: range,
    forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
    forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo
  };
}

var hasOwnProperty = Object.prototype.hasOwnProperty; // Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.

function mergeProps(propObjs, complexPropsMap) {
  var dest = {};

  if (complexPropsMap) {
    for (var name_1 in complexPropsMap) {
      var complexObjs = []; // collect the trailing object values, stopping when a non-object is discovered

      for (var i = propObjs.length - 1; i >= 0; i--) {
        var val = propObjs[i][name_1];

        if (_typeof(val) === 'object' && val) {
          // non-null object
          complexObjs.unshift(val);
        } else if (val !== undefined) {
          dest[name_1] = val; // if there were no objects, this value will be used

          break;
        }
      } // if the trailing values were objects, use the merged value


      if (complexObjs.length) {
        dest[name_1] = mergeProps(complexObjs);
      }
    }
  } // copy values into the destination, going from last to first


  for (var i = propObjs.length - 1; i >= 0; i--) {
    var props = propObjs[i];

    for (var name_2 in props) {
      if (!(name_2 in dest)) {
        // if already assigned by previous props or complex props, don't reassign
        dest[name_2] = props[name_2];
      }
    }
  }

  return dest;
}

function filterHash(hash, func) {
  var filtered = {};

  for (var key in hash) {
    if (func(hash[key], key)) {
      filtered[key] = hash[key];
    }
  }

  return filtered;
}

function mapHash(hash, func) {
  var newHash = {};

  for (var key in hash) {
    newHash[key] = func(hash[key], key);
  }

  return newHash;
}

function arrayToHash(a) {
  var hash = {};

  for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
    var item = a_1[_i];
    hash[item] = true;
  }

  return hash;
}

function buildHashFromArray(a, func) {
  var hash = {};

  for (var i = 0; i < a.length; i++) {
    var tuple = func(a[i], i);
    hash[tuple[0]] = tuple[1];
  }

  return hash;
}

function hashValuesToArray(obj) {
  var a = [];

  for (var key in obj) {
    a.push(obj[key]);
  }

  return a;
}

function isPropsEqual(obj0, obj1) {
  if (obj0 === obj1) {
    return true;
  }

  for (var key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        return false;
      }
    }
  }

  for (var key in obj1) {
    if (hasOwnProperty.call(obj1, key)) {
      if (obj0[key] !== obj1[key]) {
        return false;
      }
    }
  }

  return true;
}

function getUnequalProps(obj0, obj1) {
  var keys = [];

  for (var key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        keys.push(key);
      }
    }
  }

  for (var key in obj1) {
    if (hasOwnProperty.call(obj1, key)) {
      if (obj0[key] !== obj1[key]) {
        keys.push(key);
      }
    }
  }

  return keys;
}

function compareObjs(oldProps, newProps, equalityFuncs) {
  if (equalityFuncs === void 0) {
    equalityFuncs = {};
  }

  if (oldProps === newProps) {
    return true;
  }

  for (var key in newProps) {
    if (key in oldProps && isObjValsEqual(oldProps[key], newProps[key], equalityFuncs[key])) ;else {
      return false;
    }
  } // check for props that were omitted in the new


  for (var key in oldProps) {
    if (!(key in newProps)) {
      return false;
    }
  }

  return true;
}
/*
assumed "true" equality for handler names like "onReceiveSomething"
*/


function isObjValsEqual(val0, val1, comparator) {
  if (val0 === val1 || comparator === true) {
    return true;
  }

  if (comparator) {
    return comparator(val0, val1);
  }

  return false;
}

function collectFromHash(hash, startIndex, endIndex, step) {
  if (startIndex === void 0) {
    startIndex = 0;
  }

  if (step === void 0) {
    step = 1;
  }

  var res = [];

  if (endIndex == null) {
    endIndex = Object.keys(hash).length;
  }

  for (var i = startIndex; i < endIndex; i += step) {
    var val = hash[i];

    if (val !== undefined) {
      // will disregard undefined for sparse arrays
      res.push(val);
    }
  }

  return res;
}

function parseRecurring(refined, defaultAllDay, dateEnv, recurringTypes) {
  for (var i = 0; i < recurringTypes.length; i++) {
    var parsed = recurringTypes[i].parse(refined, dateEnv);

    if (parsed) {
      var allDay = refined.allDay;

      if (allDay == null) {
        allDay = defaultAllDay;

        if (allDay == null) {
          allDay = parsed.allDayGuess;

          if (allDay == null) {
            allDay = false;
          }
        }
      }

      return {
        allDay: allDay,
        duration: parsed.duration,
        typeData: parsed.typeData,
        typeId: i
      };
    }
  }

  return null;
}

function expandRecurring(eventStore, framingRange, context) {
  var dateEnv = context.dateEnv,
      pluginHooks = context.pluginHooks,
      options = context.options;
  var defs = eventStore.defs,
      instances = eventStore.instances; // remove existing recurring instances
  // TODO: bad. always expand events as a second step

  instances = filterHash(instances, function (instance) {
    return !defs[instance.defId].recurringDef;
  });

  for (var defId in defs) {
    var def = defs[defId];

    if (def.recurringDef) {
      var duration = def.recurringDef.duration;

      if (!duration) {
        duration = def.allDay ? options.defaultAllDayEventDuration : options.defaultTimedEventDuration;
      }

      var starts = expandRecurringRanges(def, duration, framingRange, dateEnv, pluginHooks.recurringTypes);

      for (var _i = 0, starts_1 = starts; _i < starts_1.length; _i++) {
        var start = starts_1[_i];
        var instance = createEventInstance(defId, {
          start: start,
          end: dateEnv.add(start, duration)
        });
        instances[instance.instanceId] = instance;
      }
    }
  }

  return {
    defs: defs,
    instances: instances
  };
}
/*
Event MUST have a recurringDef
*/


function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
  var typeDef = recurringTypes[eventDef.recurringDef.typeId];
  var markers = typeDef.expand(eventDef.recurringDef.typeData, {
    start: dateEnv.subtract(framingRange.start, duration),
    end: framingRange.end
  }, dateEnv); // the recurrence plugins don't guarantee that all-day events are start-of-day, so we have to

  if (eventDef.allDay) {
    markers = markers.map(startOfDay);
  }

  return markers;
}

var INTERNAL_UNITS = ['years', 'months', 'days', 'milliseconds'];
var PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/; // Parsing and Creation

function createDuration(input, unit) {
  var _a;

  if (typeof input === 'string') {
    return parseString(input);
  } else if (_typeof(input) === 'object' && input) {
    // non-null object
    return parseObject(input);
  } else if (typeof input === 'number') {
    return parseObject((_a = {}, _a[unit || 'milliseconds'] = input, _a));
  } else {
    return null;
  }
}

function parseString(s) {
  var m = PARSE_RE.exec(s);

  if (m) {
    var sign = m[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: sign * (m[2] ? parseInt(m[2], 10) : 0),
      milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 60 * 60 * 1000 + // hours
      (m[4] ? parseInt(m[4], 10) : 0) * 60 * 1000 + // minutes
      (m[5] ? parseInt(m[5], 10) : 0) * 1000 + ( // seconds
      m[6] ? parseInt(m[6], 10) : 0) // ms
      )
    };
  }

  return null;
}

function parseObject(obj) {
  var duration = {
    years: obj.years || obj.year || 0,
    months: obj.months || obj.month || 0,
    days: obj.days || obj.day || 0,
    milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1000 + // hours
    (obj.minutes || obj.minute || 0) * 60 * 1000 + // minutes
    (obj.seconds || obj.second || 0) * 1000 + ( // seconds
    obj.milliseconds || obj.millisecond || obj.ms || 0) // ms

  };
  var weeks = obj.weeks || obj.week;

  if (weeks) {
    duration.days += weeks * 7;
    duration.specifiedWeeks = true;
  }

  return duration;
} // Equality


function durationsEqual(d0, d1) {
  return d0.years === d1.years && d0.months === d1.months && d0.days === d1.days && d0.milliseconds === d1.milliseconds;
}

function asCleanDays(dur) {
  if (!dur.years && !dur.months && !dur.milliseconds) {
    return dur.days;
  }

  return 0;
} // Simple Math


function addDurations(d0, d1) {
  return {
    years: d0.years + d1.years,
    months: d0.months + d1.months,
    days: d0.days + d1.days,
    milliseconds: d0.milliseconds + d1.milliseconds
  };
}

function subtractDurations(d1, d0) {
  return {
    years: d1.years - d0.years,
    months: d1.months - d0.months,
    days: d1.days - d0.days,
    milliseconds: d1.milliseconds - d0.milliseconds
  };
}

function multiplyDuration(d, n) {
  return {
    years: d.years * n,
    months: d.months * n,
    days: d.days * n,
    milliseconds: d.milliseconds * n
  };
} // Conversions
// "Rough" because they are based on average-case Gregorian months/years


function asRoughYears(dur) {
  return asRoughDays(dur) / 365;
}

function asRoughMonths(dur) {
  return asRoughDays(dur) / 30;
}

function asRoughDays(dur) {
  return asRoughMs(dur) / 864e5;
}

function asRoughMinutes(dur) {
  return asRoughMs(dur) / (1000 * 60);
}

function asRoughSeconds(dur) {
  return asRoughMs(dur) / 1000;
}

function asRoughMs(dur) {
  return dur.years * (365 * 864e5) + dur.months * (30 * 864e5) + dur.days * 864e5 + dur.milliseconds;
} // Advanced Math


function wholeDivideDurations(numerator, denominator) {
  var res = null;

  for (var i = 0; i < INTERNAL_UNITS.length; i++) {
    var unit = INTERNAL_UNITS[i];

    if (denominator[unit]) {
      var localRes = numerator[unit] / denominator[unit];

      if (!isInt(localRes) || res !== null && res !== localRes) {
        return null;
      }

      res = localRes;
    } else if (numerator[unit]) {
      // needs to divide by something but can't!
      return null;
    }
  }

  return res;
}

function greatestDurationDenominator(dur) {
  var ms = dur.milliseconds;

  if (ms) {
    if (ms % 1000 !== 0) {
      return {
        unit: 'millisecond',
        value: ms
      };
    }

    if (ms % (1000 * 60) !== 0) {
      return {
        unit: 'second',
        value: ms / 1000
      };
    }

    if (ms % (1000 * 60 * 60) !== 0) {
      return {
        unit: 'minute',
        value: ms / (1000 * 60)
      };
    }

    if (ms) {
      return {
        unit: 'hour',
        value: ms / (1000 * 60 * 60)
      };
    }
  }

  if (dur.days) {
    if (dur.specifiedWeeks && dur.days % 7 === 0) {
      return {
        unit: 'week',
        value: dur.days / 7
      };
    }

    return {
      unit: 'day',
      value: dur.days
    };
  }

  if (dur.months) {
    return {
      unit: 'month',
      value: dur.months
    };
  }

  if (dur.years) {
    return {
      unit: 'year',
      value: dur.years
    };
  }

  return {
    unit: 'millisecond',
    value: 0
  };
} // timeZoneOffset is in minutes


function buildIsoString(marker, timeZoneOffset, stripZeroTime) {
  if (stripZeroTime === void 0) {
    stripZeroTime = false;
  }

  var s = marker.toISOString();
  s = s.replace('.000', '');

  if (stripZeroTime) {
    s = s.replace('T00:00:00Z', '');
  }

  if (s.length > 10) {
    // time part wasn't stripped, can add timezone info
    if (timeZoneOffset == null) {
      s = s.replace('Z', '');
    } else if (timeZoneOffset !== 0) {
      s = s.replace('Z', formatTimeZoneOffset(timeZoneOffset, true));
    } // otherwise, its UTC-0 and we want to keep the Z

  }

  return s;
} // formats the date, but with no time part
// TODO: somehow merge with buildIsoString and stripZeroTime
// TODO: rename. omit "string"


function formatDayString(marker) {
  return marker.toISOString().replace(/T.*$/, '');
} // TODO: use Date::toISOString and use everything after the T?


function formatIsoTimeString(marker) {
  return padStart(marker.getUTCHours(), 2) + ':' + padStart(marker.getUTCMinutes(), 2) + ':' + padStart(marker.getUTCSeconds(), 2);
}

function formatTimeZoneOffset(minutes, doIso) {
  if (doIso === void 0) {
    doIso = false;
  }

  var sign = minutes < 0 ? '-' : '+';
  var abs = Math.abs(minutes);
  var hours = Math.floor(abs / 60);
  var mins = Math.round(abs % 60);

  if (doIso) {
    return sign + padStart(hours, 2) + ':' + padStart(mins, 2);
  } else {
    return 'GMT' + sign + hours + (mins ? ':' + padStart(mins, 2) : '');
  }
} // TODO: new util arrayify?


function removeExact(array, exactVal) {
  var removeCnt = 0;
  var i = 0;

  while (i < array.length) {
    if (array[i] === exactVal) {
      array.splice(i, 1);
      removeCnt++;
    } else {
      i++;
    }
  }

  return removeCnt;
}

function isArraysEqual(a0, a1, equalityFunc) {
  if (a0 === a1) {
    return true;
  }

  var len = a0.length;
  var i;

  if (len !== a1.length) {
    // not array? or not same length?
    return false;
  }

  for (i = 0; i < len; i++) {
    if (!(equalityFunc ? equalityFunc(a0[i], a1[i]) : a0[i] === a1[i])) {
      return false;
    }
  }

  return true;
}

function memoize(workerFunc, resEquality, teardownFunc) {
  var currentArgs;
  var currentRes;
  return function () {
    var newArgs = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }

    if (!currentArgs) {
      currentRes = workerFunc.apply(this, newArgs);
    } else if (!isArraysEqual(currentArgs, newArgs)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }

      var res = workerFunc.apply(this, newArgs);

      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }

    currentArgs = newArgs;
    return currentRes;
  };
}

function memoizeObjArg(workerFunc, resEquality, teardownFunc) {
  var currentArg;
  var currentRes;
  return function (newArg) {
    if (!currentArg) {
      currentRes = workerFunc.call(this, newArg);
    } else if (!isPropsEqual(currentArg, newArg)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }

      var res = workerFunc.call(this, newArg);

      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }

    currentArg = newArg;
    return currentRes;
  };
}

function memoizeArraylike( // used at all?
workerFunc, resEquality, teardownFunc) {
  var currentArgSets = [];
  var currentResults = [];
  return function (newArgSets) {
    var currentLen = currentArgSets.length;
    var newLen = newArgSets.length;
    var i = 0;

    for (; i < currentLen; i++) {
      if (!newArgSets[i]) {
        // one of the old sets no longer exists
        if (teardownFunc) {
          teardownFunc(currentResults[i]);
        }
      } else if (!isArraysEqual(currentArgSets[i], newArgSets[i])) {
        if (teardownFunc) {
          teardownFunc(currentResults[i]);
        }

        var res = workerFunc.apply(this, newArgSets[i]);

        if (!resEquality || !resEquality(res, currentResults[i])) {
          currentResults[i] = res;
        }
      }
    }

    for (; i < newLen; i++) {
      currentResults[i] = workerFunc.apply(this, newArgSets[i]);
    }

    currentArgSets = newArgSets;
    currentResults.splice(newLen); // remove excess

    return currentResults;
  };
}

function memoizeHashlike( // used?
workerFunc, resEquality, teardownFunc // TODO: change arg order
) {
  var currentArgHash = {};
  var currentResHash = {};
  return function (newArgHash) {
    var newResHash = {};

    for (var key in newArgHash) {
      if (!currentResHash[key]) {
        newResHash[key] = workerFunc.apply(this, newArgHash[key]);
      } else if (!isArraysEqual(currentArgHash[key], newArgHash[key])) {
        if (teardownFunc) {
          teardownFunc(currentResHash[key]);
        }

        var res = workerFunc.apply(this, newArgHash[key]);
        newResHash[key] = resEquality && resEquality(res, currentResHash[key]) ? currentResHash[key] : res;
      } else {
        newResHash[key] = currentResHash[key];
      }
    }

    currentArgHash = newArgHash;
    currentResHash = newResHash;
    return newResHash;
  };
}

var EXTENDED_SETTINGS_AND_SEVERITIES = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
};
var STANDARD_DATE_PROP_SEVERITIES = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
};
var MERIDIEM_RE = /\s*([ap])\.?m\.?/i; // eats up leading spaces too

var COMMA_RE = /,/g; // we need re for globalness

var MULTI_SPACE_RE = /\s+/g;
var LTR_RE = /\u200e/g; // control character

var UTC_RE = /UTC|GMT/;

var NativeFormatter =
/** @class */
function () {
  function NativeFormatter(formatSettings) {
    var standardDateProps = {};
    var extendedSettings = {};
    var severity = 0;

    for (var name_1 in formatSettings) {
      if (name_1 in EXTENDED_SETTINGS_AND_SEVERITIES) {
        extendedSettings[name_1] = formatSettings[name_1];
        severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name_1], severity);
      } else {
        standardDateProps[name_1] = formatSettings[name_1];

        if (name_1 in STANDARD_DATE_PROP_SEVERITIES) {
          // TODO: what about hour12? no severity
          severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name_1], severity);
        }
      }
    }

    this.standardDateProps = standardDateProps;
    this.extendedSettings = extendedSettings;
    this.severity = severity;
    this.buildFormattingFunc = memoize(buildFormattingFunc);
  }

  NativeFormatter.prototype.format = function (date, context) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
  };

  NativeFormatter.prototype.formatRange = function (start, end, context, betterDefaultSeparator) {
    var _a = this,
        standardDateProps = _a.standardDateProps,
        extendedSettings = _a.extendedSettings;

    var diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);

    if (!diffSeverity) {
      return this.format(start, context);
    }

    var biggestUnitForPartial = diffSeverity;

    if (biggestUnitForPartial > 1 && ( // the two dates are different in a way that's larger scale than time
    standardDateProps.year === 'numeric' || standardDateProps.year === '2-digit') && (standardDateProps.month === 'numeric' || standardDateProps.month === '2-digit') && (standardDateProps.day === 'numeric' || standardDateProps.day === '2-digit')) {
      biggestUnitForPartial = 1; // make it look like the dates are only different in terms of time
    }

    var full0 = this.format(start, context);
    var full1 = this.format(end, context);

    if (full0 === full1) {
      return full0;
    }

    var partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
    var partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
    var partial0 = partialFormattingFunc(start);
    var partial1 = partialFormattingFunc(end);
    var insertion = findCommonInsertion(full0, partial0, full1, partial1);
    var separator = extendedSettings.separator || betterDefaultSeparator || context.defaultSeparator || '';

    if (insertion) {
      return insertion.before + partial0 + separator + partial1 + insertion.after;
    }

    return full0 + separator + full1;
  };

  NativeFormatter.prototype.getLargestUnit = function () {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return 'year';

      case 4:
        return 'month';

      case 3:
        return 'week';

      case 2:
        return 'day';

      default:
        return 'time';
      // really?
    }
  };

  return NativeFormatter;
}();

function buildFormattingFunc(standardDateProps, extendedSettings, context) {
  var standardDatePropCnt = Object.keys(standardDateProps).length;

  if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === 'short') {
    return function (date) {
      return formatTimeZoneOffset(date.timeZoneOffset);
    };
  }

  if (standardDatePropCnt === 0 && extendedSettings.week) {
    return function (date) {
      return formatWeekNumber(context.computeWeekNumber(date.marker), context.weekText, context.locale, extendedSettings.week);
    };
  }

  return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
}

function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
  standardDateProps = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, standardDateProps); // copy

  extendedSettings = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, extendedSettings); // copy

  sanitizeSettings(standardDateProps, extendedSettings);
  standardDateProps.timeZone = 'UTC'; // we leverage the only guaranteed timeZone for our UTC markers

  var normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
  var zeroFormat; // needed?

  if (extendedSettings.omitZeroMinute) {
    var zeroProps = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, standardDateProps);

    delete zeroProps.minute; // seconds and ms were already considered in sanitizeSettings

    zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
  }

  return function (date) {
    var marker = date.marker;
    var format;

    if (zeroFormat && !marker.getUTCMinutes()) {
      format = zeroFormat;
    } else {
      format = normalFormat;
    }

    var s = format.format(marker);
    return postProcess(s, date, standardDateProps, extendedSettings, context);
  };
}

function sanitizeSettings(standardDateProps, extendedSettings) {
  // deal with a browser inconsistency where formatting the timezone
  // requires that the hour/minute be present.
  if (standardDateProps.timeZoneName) {
    if (!standardDateProps.hour) {
      standardDateProps.hour = '2-digit';
    }

    if (!standardDateProps.minute) {
      standardDateProps.minute = '2-digit';
    }
  } // only support short timezone names


  if (standardDateProps.timeZoneName === 'long') {
    standardDateProps.timeZoneName = 'short';
  } // if requesting to display seconds, MUST display minutes


  if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
    delete extendedSettings.omitZeroMinute;
  }
}

function postProcess(s, date, standardDateProps, extendedSettings, context) {
  s = s.replace(LTR_RE, ''); // remove left-to-right control chars. do first. good for other regexes

  if (standardDateProps.timeZoneName === 'short') {
    s = injectTzoStr(s, context.timeZone === 'UTC' || date.timeZoneOffset == null ? 'UTC' : // important to normalize for IE, which does "GMT"
    formatTimeZoneOffset(date.timeZoneOffset));
  }

  if (extendedSettings.omitCommas) {
    s = s.replace(COMMA_RE, '').trim();
  }

  if (extendedSettings.omitZeroMinute) {
    s = s.replace(':00', ''); // zeroFormat doesn't always achieve this
  } // ^ do anything that might create adjacent spaces before this point,
  // because MERIDIEM_RE likes to eat up loading spaces


  if (extendedSettings.meridiem === false) {
    s = s.replace(MERIDIEM_RE, '').trim();
  } else if (extendedSettings.meridiem === 'narrow') {
    // a/p
    s = s.replace(MERIDIEM_RE, function (m0, m1) {
      return m1.toLocaleLowerCase();
    });
  } else if (extendedSettings.meridiem === 'short') {
    // am/pm
    s = s.replace(MERIDIEM_RE, function (m0, m1) {
      return m1.toLocaleLowerCase() + 'm';
    });
  } else if (extendedSettings.meridiem === 'lowercase') {
    // other meridiem transformers already converted to lowercase
    s = s.replace(MERIDIEM_RE, function (m0) {
      return m0.toLocaleLowerCase();
    });
  }

  s = s.replace(MULTI_SPACE_RE, ' ');
  s = s.trim();
  return s;
}

function injectTzoStr(s, tzoStr) {
  var replaced = false;
  s = s.replace(UTC_RE, function () {
    replaced = true;
    return tzoStr;
  }); // IE11 doesn't include UTC/GMT in the original string, so append to end

  if (!replaced) {
    s += ' ' + tzoStr;
  }

  return s;
}

function formatWeekNumber(num, weekText, locale, display) {
  var parts = [];

  if (display === 'narrow') {
    parts.push(weekText);
  } else if (display === 'short') {
    parts.push(weekText, ' ');
  } // otherwise, considered 'numeric'


  parts.push(locale.simpleNumberFormat.format(num));

  if (locale.options.direction === 'rtl') {
    // TODO: use control characters instead?
    parts.reverse();
  }

  return parts.join('');
} // Range Formatting Utils
// 0 = exactly the same
// 1 = different by time
// and bigger


function computeMarkerDiffSeverity(d0, d1, ca) {
  if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
    return 5;
  }

  if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
    return 4;
  }

  if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
    return 2;
  }

  if (timeAsMs(d0) !== timeAsMs(d1)) {
    return 1;
  }

  return 0;
}

function computePartialFormattingOptions(options, biggestUnit) {
  var partialOptions = {};

  for (var name_2 in options) {
    if (!(name_2 in STANDARD_DATE_PROP_SEVERITIES) || // not a date part prop (like timeZone)
    STANDARD_DATE_PROP_SEVERITIES[name_2] <= biggestUnit) {
      partialOptions[name_2] = options[name_2];
    }
  }

  return partialOptions;
}

function findCommonInsertion(full0, partial0, full1, partial1) {
  var i0 = 0;

  while (i0 < full0.length) {
    var found0 = full0.indexOf(partial0, i0);

    if (found0 === -1) {
      break;
    }

    var before0 = full0.substr(0, found0);
    i0 = found0 + partial0.length;
    var after0 = full0.substr(i0);
    var i1 = 0;

    while (i1 < full1.length) {
      var found1 = full1.indexOf(partial1, i1);

      if (found1 === -1) {
        break;
      }

      var before1 = full1.substr(0, found1);
      i1 = found1 + partial1.length;
      var after1 = full1.substr(i1);

      if (before0 === before1 && after0 === after1) {
        return {
          before: before0,
          after: after0
        };
      }
    }
  }

  return null;
}

function expandZonedMarker(dateInfo, calendarSystem) {
  var a = calendarSystem.markerToArray(dateInfo.marker);
  return {
    marker: dateInfo.marker,
    timeZoneOffset: dateInfo.timeZoneOffset,
    array: a,
    year: a[0],
    month: a[1],
    day: a[2],
    hour: a[3],
    minute: a[4],
    second: a[5],
    millisecond: a[6]
  };
}

function createVerboseFormattingArg(start, end, context, betterDefaultSeparator) {
  var startInfo = expandZonedMarker(start, context.calendarSystem);
  var endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
  return {
    date: startInfo,
    start: startInfo,
    end: endInfo,
    timeZone: context.timeZone,
    localeCodes: context.locale.codes,
    defaultSeparator: betterDefaultSeparator || context.defaultSeparator
  };
}
/*
TODO: fix the terminology of "formatter" vs "formatting func"
*/

/*
At the time of instantiation, this object does not know which cmd-formatting system it will use.
It receives this at the time of formatting, as a setting.
*/


var CmdFormatter =
/** @class */
function () {
  function CmdFormatter(cmdStr) {
    this.cmdStr = cmdStr;
  }

  CmdFormatter.prototype.format = function (date, context, betterDefaultSeparator) {
    return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
  };

  CmdFormatter.prototype.formatRange = function (start, end, context, betterDefaultSeparator) {
    return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
  };

  return CmdFormatter;
}();

var FuncFormatter =
/** @class */
function () {
  function FuncFormatter(func) {
    this.func = func;
  }

  FuncFormatter.prototype.format = function (date, context, betterDefaultSeparator) {
    return this.func(createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
  };

  FuncFormatter.prototype.formatRange = function (start, end, context, betterDefaultSeparator) {
    return this.func(createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
  };

  return FuncFormatter;
}();

function createFormatter(input) {
  if (_typeof(input) === 'object' && input) {
    // non-null object
    return new NativeFormatter(input);
  } else if (typeof input === 'string') {
    return new CmdFormatter(input);
  } else if (typeof input === 'function') {
    return new FuncFormatter(input);
  }
} // base options
// ------------


var BASE_OPTION_REFINERS = {
  navLinkDayClick: identity,
  navLinkWeekClick: identity,
  duration: createDuration,
  bootstrapFontAwesome: identity,
  buttonIcons: identity,
  customButtons: identity,
  defaultAllDayEventDuration: createDuration,
  defaultTimedEventDuration: createDuration,
  nextDayThreshold: createDuration,
  scrollTime: createDuration,
  slotMinTime: createDuration,
  slotMaxTime: createDuration,
  dayPopoverFormat: createFormatter,
  slotDuration: createDuration,
  snapDuration: createDuration,
  headerToolbar: identity,
  footerToolbar: identity,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: createFormatter,
  dayHeaderClassNames: identity,
  dayHeaderContent: identity,
  dayHeaderDidMount: identity,
  dayHeaderWillUnmount: identity,
  dayCellClassNames: identity,
  dayCellContent: identity,
  dayCellDidMount: identity,
  dayCellWillUnmount: identity,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: identity,
  weekNumbers: Boolean,
  weekNumberClassNames: identity,
  weekNumberContent: identity,
  weekNumberDidMount: identity,
  weekNumberWillUnmount: identity,
  editable: Boolean,
  viewClassNames: identity,
  viewDidMount: identity,
  viewWillUnmount: identity,
  nowIndicator: Boolean,
  nowIndicatorClassNames: identity,
  nowIndicatorContent: identity,
  nowIndicatorDidMount: identity,
  nowIndicatorWillUnmount: identity,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: identity,
  locale: identity,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: identity,
  eventOrder: parseFieldSpecs,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: identity,
  contentHeight: identity,
  direction: String,
  weekNumberFormat: createFormatter,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  progressiveEventRendering: Boolean,
  businessHours: identity,
  initialDate: identity,
  now: identity,
  eventDataTransform: identity,
  stickyHeaderDates: identity,
  stickyFooterScrollbar: identity,
  viewHeight: identity,
  defaultAllDay: Boolean,
  eventSourceFailure: identity,
  eventSourceSuccess: identity,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: identity,
  eventConstraint: identity,
  eventAllow: identity,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: identity,
  eventContent: identity,
  eventDidMount: identity,
  eventWillUnmount: identity,
  selectConstraint: identity,
  selectOverlap: identity,
  selectAllow: identity,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: identity,
  slotLaneClassNames: identity,
  slotLaneContent: identity,
  slotLaneDidMount: identity,
  slotLaneWillUnmount: identity,
  slotLabelClassNames: identity,
  slotLabelContent: identity,
  slotLabelDidMount: identity,
  slotLabelWillUnmount: identity,
  dayMaxEvents: identity,
  dayMaxEventRows: identity,
  dayMinWidth: Number,
  slotLabelInterval: createDuration,
  allDayText: String,
  allDayClassNames: identity,
  allDayContent: identity,
  allDayDidMount: identity,
  allDayWillUnmount: identity,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: createFormatter,
  rerenderDelay: Number,
  moreLinkText: identity,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMinHeight: Number,
  slotEventOverlap: Boolean,
  plugins: identity,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: createDuration,
  hiddenDays: identity,
  monthMode: Boolean,
  fixedWeekCount: Boolean,
  validRange: identity,
  visibleRange: identity,
  titleFormat: identity,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String
}; // do NOT give a type here. need `typeof BASE_OPTION_DEFAULTS` to give real results.
// raw values.

var BASE_OPTION_DEFAULTS = {
  eventDisplay: 'auto',
  defaultRangeSeparator: ' - ',
  titleRangeSeparator: " \u2013 ",
  defaultTimedEventDuration: '01:00:00',
  defaultAllDayEventDuration: {
    day: 1
  },
  forceEventDuration: false,
  nextDayThreshold: '00:00:00',
  dayHeaders: true,
  initialView: '',
  aspectRatio: 1.35,
  headerToolbar: {
    start: 'title',
    center: '',
    end: 'today prev,next'
  },
  weekends: true,
  weekNumbers: false,
  weekNumberCalculation: 'local',
  editable: false,
  nowIndicator: false,
  scrollTime: '06:00:00',
  slotMinTime: '00:00:00',
  slotMaxTime: '24:00:00',
  showNonCurrentDates: true,
  lazyFetching: true,
  startParam: 'start',
  endParam: 'end',
  timeZoneParam: 'timeZone',
  timeZone: 'local',
  locales: [],
  locale: '',
  themeSystem: 'standard',
  dragRevertDuration: 500,
  dragScroll: true,
  allDayMaintainDuration: false,
  unselectAuto: true,
  dropAccept: '*',
  eventOrder: 'start,-duration,allDay,title',
  dayPopoverFormat: {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  },
  handleWindowResize: true,
  windowResizeDelay: 100,
  longPressDelay: 1000,
  eventDragMinDistance: 5,
  expandRows: false,
  navLinks: false,
  selectable: false
}; // calendar listeners
// ------------------

var CALENDAR_LISTENER_REFINERS = {
  datesSet: identity,
  eventsSet: identity,
  eventAdd: identity,
  eventChange: identity,
  eventRemove: identity,
  windowResize: identity,
  eventClick: identity,
  eventMouseEnter: identity,
  eventMouseLeave: identity,
  select: identity,
  unselect: identity,
  loading: identity,
  // internal
  _unmount: identity,
  _beforeprint: identity,
  _afterprint: identity,
  _noEventDrop: identity,
  _noEventResize: identity,
  _resize: identity,
  _scrollRequest: identity
}; // calendar-specific options
// -------------------------

var CALENDAR_OPTION_REFINERS = {
  buttonText: identity,
  views: identity,
  plugins: identity,
  initialEvents: identity,
  events: identity,
  eventSources: identity
};
var COMPLEX_OPTION_COMPARATORS = {
  headerToolbar: isBoolComplexEqual,
  footerToolbar: isBoolComplexEqual,
  buttonText: isBoolComplexEqual,
  buttonIcons: isBoolComplexEqual
};

function isBoolComplexEqual(a, b) {
  if (_typeof(a) === 'object' && _typeof(b) === 'object' && a && b) {
    // both non-null objects
    return isPropsEqual(a, b);
  } else {
    return a === b;
  }
} // view-specific options
// ---------------------


var VIEW_OPTION_REFINERS = {
  type: String,
  component: identity,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: identity,
  usesMinMaxTime: Boolean,
  classNames: identity,
  content: identity,
  didMount: identity,
  willUnmount: identity
}; // util funcs
// ----------------------------------------------------------------------------------------------------

function mergeRawOptions(optionSets) {
  return mergeProps(optionSets, COMPLEX_OPTION_COMPARATORS);
}

function refineProps(input, refiners) {
  var refined = {};
  var extra = {};

  for (var propName in refiners) {
    if (propName in input) {
      refined[propName] = refiners[propName](input[propName]);
    }
  }

  for (var propName in input) {
    if (!(propName in refiners)) {
      extra[propName] = input[propName];
    }
  }

  return {
    refined: refined,
    extra: extra
  };
}

function identity(raw) {
  return raw;
}

function parseEvents(rawEvents, eventSource, context, allowOpenRange) {
  var eventStore = createEmptyEventStore();
  var eventRefiners = buildEventRefiners(context);

  for (var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
    var rawEvent = rawEvents_1[_i];
    var tuple = parseEvent(rawEvent, eventSource, context, allowOpenRange, eventRefiners);

    if (tuple) {
      eventTupleToStore(tuple, eventStore);
    }
  }

  return eventStore;
}

function eventTupleToStore(tuple, eventStore) {
  if (eventStore === void 0) {
    eventStore = createEmptyEventStore();
  }

  eventStore.defs[tuple.def.defId] = tuple.def;

  if (tuple.instance) {
    eventStore.instances[tuple.instance.instanceId] = tuple.instance;
  }

  return eventStore;
} // retrieves events that have the same groupId as the instance specified by `instanceId`
// or they are the same as the instance.
// why might instanceId not be in the store? an event from another calendar?


function getRelevantEvents(eventStore, instanceId) {
  var instance = eventStore.instances[instanceId];

  if (instance) {
    var def_1 = eventStore.defs[instance.defId]; // get events/instances with same group

    var newStore = filterEventStoreDefs(eventStore, function (lookDef) {
      return isEventDefsGrouped(def_1, lookDef);
    }); // add the original
    // TODO: wish we could use eventTupleToStore or something like it

    newStore.defs[def_1.defId] = def_1;
    newStore.instances[instance.instanceId] = instance;
    return newStore;
  }

  return createEmptyEventStore();
}

function isEventDefsGrouped(def0, def1) {
  return Boolean(def0.groupId && def0.groupId === def1.groupId);
}

function createEmptyEventStore() {
  return {
    defs: {},
    instances: {}
  };
}

function mergeEventStores(store0, store1) {
  return {
    defs: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, store0.defs), store1.defs),
    instances: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, store0.instances), store1.instances)
  };
}

function filterEventStoreDefs(eventStore, filterFunc) {
  var defs = filterHash(eventStore.defs, filterFunc);
  var instances = filterHash(eventStore.instances, function (instance) {
    return defs[instance.defId]; // still exists?
  });
  return {
    defs: defs,
    instances: instances
  };
}

function excludeSubEventStore(master, sub) {
  var defs = master.defs,
      instances = master.instances;
  var filteredDefs = {};
  var filteredInstances = {};

  for (var defId in defs) {
    if (!sub.defs[defId]) {
      // not explicitly excluded
      filteredDefs[defId] = defs[defId];
    }
  }

  for (var instanceId in instances) {
    if (!sub.instances[instanceId] && // not explicitly excluded
    filteredDefs[instances[instanceId].defId] // def wasn't filtered away
    ) {
        filteredInstances[instanceId] = instances[instanceId];
      }
  }

  return {
    defs: filteredDefs,
    instances: filteredInstances
  };
}

function normalizeConstraint(input, context) {
  if (Array.isArray(input)) {
    return parseEvents(input, null, context, true); // allowOpenRange=true
  } else if (_typeof(input) === 'object' && input) {
    // non-null object
    return parseEvents([input], null, context, true); // allowOpenRange=true
  } else if (input != null) {
    return String(input);
  } else {
    return null;
  }
}

function parseClassNames(raw) {
  if (Array.isArray(raw)) {
    return raw;
  } else if (typeof raw === 'string') {
    return raw.split(/\s+/);
  } else {
    return [];
  }
} // TODO: better called "EventSettings" or "EventConfig"
// TODO: move this file into structs
// TODO: separate constraint/overlap/allow, because selection uses only that, not other props


var EVENT_UI_REFINERS = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: identity,
  overlap: identity,
  allow: identity,
  className: parseClassNames,
  classNames: parseClassNames,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
};

function createEventUi(refined, context) {
  var constraint = normalizeConstraint(refined.constraint, context);
  return {
    display: refined.display || null,
    startEditable: refined.startEditable != null ? refined.startEditable : refined.editable,
    durationEditable: refined.durationEditable != null ? refined.durationEditable : refined.editable,
    constraints: constraint != null ? [constraint] : [],
    overlap: refined.overlap != null ? refined.overlap : null,
    allows: refined.allow != null ? [refined.allow] : [],
    backgroundColor: refined.backgroundColor || refined.color || '',
    borderColor: refined.borderColor || refined.color || '',
    textColor: refined.textColor || '',
    classNames: (refined.className || []).concat(refined.classNames || []) // join singular and plural

  };
} // TODO: prevent against problems with <2 args!


function combineEventUis(uis) {
  return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
}

function combineTwoEventUis(item0, item1) {
  return {
    display: item1.display != null ? item1.display : item0.display,
    startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
    durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
    constraints: item0.constraints.concat(item1.constraints),
    overlap: typeof item1.overlap === 'boolean' ? item1.overlap : item0.overlap,
    allows: item0.allows.concat(item1.allows),
    backgroundColor: item1.backgroundColor || item0.backgroundColor,
    borderColor: item1.borderColor || item0.borderColor,
    textColor: item1.textColor || item0.textColor,
    classNames: item0.classNames.concat(item1.classNames)
  };
}

var EMPTY_EVENT_UI = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: '',
  borderColor: '',
  textColor: '',
  classNames: []
};
var EVENT_NON_DATE_REFINERS = {
  id: String,
  groupId: String,
  title: String,
  url: String
};
var EVENT_DATE_REFINERS = {
  start: identity,
  end: identity,
  date: identity,
  allDay: Boolean
};

var EVENT_REFINERS = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, EVENT_NON_DATE_REFINERS), EVENT_DATE_REFINERS), {
  extendedProps: identity
});

function parseEvent(raw, eventSource, context, allowOpenRange, refiners) {
  if (refiners === void 0) {
    refiners = buildEventRefiners(context);
  }

  var _a = refineEventDef(raw, context, refiners),
      refined = _a.refined,
      extra = _a.extra;

  var defaultAllDay = computeIsDefaultAllDay(eventSource, context);
  var recurringRes = parseRecurring(refined, defaultAllDay, context.dateEnv, context.pluginHooks.recurringTypes);

  if (recurringRes) {
    var def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', recurringRes.allDay, Boolean(recurringRes.duration), context);
    def.recurringDef = {
      typeId: recurringRes.typeId,
      typeData: recurringRes.typeData,
      duration: recurringRes.duration
    };
    return {
      def: def,
      instance: null
    };
  } else {
    var singleRes = parseSingle(refined, defaultAllDay, context, allowOpenRange);

    if (singleRes) {
      var def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', singleRes.allDay, singleRes.hasEnd, context);
      var instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
      return {
        def: def,
        instance: instance
      };
    }
  }

  return null;
}

function refineEventDef(raw, context, refiners) {
  if (refiners === void 0) {
    refiners = buildEventRefiners(context);
  }

  return refineProps(raw, refiners);
}

function buildEventRefiners(context) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, EVENT_UI_REFINERS), EVENT_REFINERS), context.pluginHooks.eventRefiners);
}
/*
Will NOT populate extendedProps with the leftover properties.
Will NOT populate date-related props.
*/


function parseEventDef(refined, extra, sourceId, allDay, hasEnd, context) {
  var def = {
    title: refined.title || '',
    groupId: refined.groupId || '',
    publicId: refined.id || '',
    url: refined.url || '',
    recurringDef: null,
    defId: guid(),
    sourceId: sourceId,
    allDay: allDay,
    hasEnd: hasEnd,
    ui: createEventUi(refined, context),
    extendedProps: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, refined.extendedProps || {}), extra)
  };

  for (var _i = 0, _a = context.pluginHooks.eventDefMemberAdders; _i < _a.length; _i++) {
    var memberAdder = _a[_i];

    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(def, memberAdder(refined));
  } // help out EventApi from having user modify props


  Object.freeze(def.ui.classNames);
  Object.freeze(def.extendedProps);
  return def;
}

function parseSingle(refined, defaultAllDay, context, allowOpenRange) {
  var allDay = refined.allDay;
  var startMeta;
  var startMarker = null;
  var hasEnd = false;
  var endMeta;
  var endMarker = null;
  var startInput = refined.start != null ? refined.start : refined.date;
  startMeta = context.dateEnv.createMarkerMeta(startInput);

  if (startMeta) {
    startMarker = startMeta.marker;
  } else if (!allowOpenRange) {
    return null;
  }

  if (refined.end != null) {
    endMeta = context.dateEnv.createMarkerMeta(refined.end);
  }

  if (allDay == null) {
    if (defaultAllDay != null) {
      allDay = defaultAllDay;
    } else {
      // fall back to the date props LAST
      allDay = (!startMeta || startMeta.isTimeUnspecified) && (!endMeta || endMeta.isTimeUnspecified);
    }
  }

  if (allDay && startMarker) {
    startMarker = startOfDay(startMarker);
  }

  if (endMeta) {
    endMarker = endMeta.marker;

    if (allDay) {
      endMarker = startOfDay(endMarker);
    }

    if (startMarker && endMarker <= startMarker) {
      endMarker = null;
    }
  }

  if (endMarker) {
    hasEnd = true;
  } else if (!allowOpenRange) {
    hasEnd = context.options.forceEventDuration || false;
    endMarker = context.dateEnv.add(startMarker, allDay ? context.options.defaultAllDayEventDuration : context.options.defaultTimedEventDuration);
  }

  return {
    allDay: allDay,
    hasEnd: hasEnd,
    range: {
      start: startMarker,
      end: endMarker
    },
    forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
    forcedEndTzo: endMeta ? endMeta.forcedTzo : null
  };
}

function computeIsDefaultAllDay(eventSource, context) {
  var res = null;

  if (eventSource) {
    res = eventSource.defaultAllDay;
  }

  if (res == null) {
    res = context.options.defaultAllDay;
  }

  return res;
}
/* Date stuff that doesn't belong in datelib core
----------------------------------------------------------------------------------------------------------------------*/
// given a timed range, computes an all-day range that has the same exact duration,
// but whose start time is aligned with the start of the day.


function computeAlignedDayRange(timedRange) {
  var dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
  var start = startOfDay(timedRange.start);
  var end = addDays(start, dayCnt);
  return {
    start: start,
    end: end
  };
} // given a timed range, computes an all-day range based on how for the end date bleeds into the next day
// TODO: give nextDayThreshold a default arg


function computeVisibleDayRange(timedRange, nextDayThreshold) {
  if (nextDayThreshold === void 0) {
    nextDayThreshold = createDuration(0);
  }

  var startDay = null;
  var endDay = null;

  if (timedRange.end) {
    endDay = startOfDay(timedRange.end);
    var endTimeMS = timedRange.end.valueOf() - endDay.valueOf(); // # of milliseconds into `endDay`
    // If the end time is actually inclusively part of the next day and is equal to or
    // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
    // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.

    if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
      endDay = addDays(endDay, 1);
    }
  }

  if (timedRange.start) {
    startDay = startOfDay(timedRange.start); // the beginning of the day the range starts
    // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.

    if (endDay && endDay <= startDay) {
      endDay = addDays(startDay, 1);
    }
  }

  return {
    start: startDay,
    end: endDay
  };
} // spans from one day into another?


function isMultiDayRange(range) {
  var visibleRange = computeVisibleDayRange(range);
  return diffDays(visibleRange.start, visibleRange.end) > 1;
}

function diffDates(date0, date1, dateEnv, largeUnit) {
  if (largeUnit === 'year') {
    return createDuration(dateEnv.diffWholeYears(date0, date1), 'year');
  } else if (largeUnit === 'month') {
    return createDuration(dateEnv.diffWholeMonths(date0, date1), 'month');
  } else {
    return diffDayAndTime(date0, date1); // returns a duration
  }
}

function parseRange(input, dateEnv) {
  var start = null;
  var end = null;

  if (input.start) {
    start = dateEnv.createMarker(input.start);
  }

  if (input.end) {
    end = dateEnv.createMarker(input.end);
  }

  if (!start && !end) {
    return null;
  }

  if (start && end && end < start) {
    return null;
  }

  return {
    start: start,
    end: end
  };
} // SIDE-EFFECT: will mutate ranges.
// Will return a new array result.


function invertRanges(ranges, constraintRange) {
  var invertedRanges = [];
  var start = constraintRange.start; // the end of the previous range. the start of the new range

  var i;
  var dateRange; // ranges need to be in order. required for our date-walking algorithm

  ranges.sort(compareRanges);

  for (i = 0; i < ranges.length; i++) {
    dateRange = ranges[i]; // add the span of time before the event (if there is any)

    if (dateRange.start > start) {
      // compare millisecond time (skip any ambig logic)
      invertedRanges.push({
        start: start,
        end: dateRange.start
      });
    }

    if (dateRange.end > start) {
      start = dateRange.end;
    }
  } // add the span of time after the last event (if there is any)


  if (start < constraintRange.end) {
    // compare millisecond time (skip any ambig logic)
    invertedRanges.push({
      start: start,
      end: constraintRange.end
    });
  }

  return invertedRanges;
}

function compareRanges(range0, range1) {
  return range0.start.valueOf() - range1.start.valueOf(); // earlier ranges go first
}

function intersectRanges(range0, range1) {
  var start = range0.start;
  var end = range0.end;
  var newRange = null;

  if (range1.start !== null) {
    if (start === null) {
      start = range1.start;
    } else {
      start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
    }
  }

  if (range1.end != null) {
    if (end === null) {
      end = range1.end;
    } else {
      end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
    }
  }

  if (start === null || end === null || start < end) {
    newRange = {
      start: start,
      end: end
    };
  }

  return newRange;
}

function rangesEqual(range0, range1) {
  return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) && (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
}

function rangesIntersect(range0, range1) {
  return (range0.end === null || range1.start === null || range0.end > range1.start) && (range0.start === null || range1.end === null || range0.start < range1.end);
}

function rangeContainsRange(outerRange, innerRange) {
  return (outerRange.start === null || innerRange.start !== null && innerRange.start >= outerRange.start) && (outerRange.end === null || innerRange.end !== null && innerRange.end <= outerRange.end);
}

function rangeContainsMarker(range, date) {
  return (range.start === null || date >= range.start) && (range.end === null || date < range.end);
} // If the given date is not within the given range, move it inside.
// (If it's past the end, make it one millisecond before the end).


function constrainMarkerToRange(date, range) {
  if (range.start != null && date < range.start) {
    return range.start;
  }

  if (range.end != null && date >= range.end) {
    return new Date(range.end.valueOf() - 1);
  }

  return date;
}
/*
Specifying nextDayThreshold signals that all-day ranges should be sliced.
*/


function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
  var inverseBgByGroupId = {};
  var inverseBgByDefId = {};
  var defByGroupId = {};
  var bgRanges = [];
  var fgRanges = [];
  var eventUis = compileEventUis(eventStore.defs, eventUiBases);

  for (var defId in eventStore.defs) {
    var def = eventStore.defs[defId];
    var ui = eventUis[def.defId];

    if (ui.display === 'inverse-background') {
      if (def.groupId) {
        inverseBgByGroupId[def.groupId] = [];

        if (!defByGroupId[def.groupId]) {
          defByGroupId[def.groupId] = def;
        }
      } else {
        inverseBgByDefId[defId] = [];
      }
    }
  }

  for (var instanceId in eventStore.instances) {
    var instance = eventStore.instances[instanceId];
    var def = eventStore.defs[instance.defId];
    var ui = eventUis[def.defId];
    var origRange = instance.range;
    var normalRange = !def.allDay && nextDayThreshold ? computeVisibleDayRange(origRange, nextDayThreshold) : origRange;
    var slicedRange = intersectRanges(normalRange, framingRange);

    if (slicedRange) {
      if (ui.display === 'inverse-background') {
        if (def.groupId) {
          inverseBgByGroupId[def.groupId].push(slicedRange);
        } else {
          inverseBgByDefId[instance.defId].push(slicedRange);
        }
      } else if (ui.display !== 'none') {
        (ui.display === 'background' ? bgRanges : fgRanges).push({
          def: def,
          ui: ui,
          instance: instance,
          range: slicedRange,
          isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
          isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf()
        });
      }
    }
  }

  for (var groupId in inverseBgByGroupId) {
    // BY GROUP
    var ranges = inverseBgByGroupId[groupId];
    var invertedRanges = invertRanges(ranges, framingRange);

    for (var _i = 0, invertedRanges_1 = invertedRanges; _i < invertedRanges_1.length; _i++) {
      var invertedRange = invertedRanges_1[_i];
      var def = defByGroupId[groupId];
      var ui = eventUis[def.defId];
      bgRanges.push({
        def: def,
        ui: ui,
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }

  for (var defId in inverseBgByDefId) {
    var ranges = inverseBgByDefId[defId];
    var invertedRanges = invertRanges(ranges, framingRange);

    for (var _a = 0, invertedRanges_2 = invertedRanges; _a < invertedRanges_2.length; _a++) {
      var invertedRange = invertedRanges_2[_a];
      bgRanges.push({
        def: eventStore.defs[defId],
        ui: eventUis[defId],
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }

  return {
    bg: bgRanges,
    fg: fgRanges
  };
}

function hasBgRendering(def) {
  return def.ui.display === 'background' || def.ui.display === 'inverse-background';
}

function setElSeg(el, seg) {
  el.fcSeg = seg;
}

function getElSeg(el) {
  return el.fcSeg || el.parentNode.fcSeg || // for the harness
  null;
} // event ui computation


function compileEventUis(eventDefs, eventUiBases) {
  return mapHash(eventDefs, function (eventDef) {
    return compileEventUi(eventDef, eventUiBases);
  });
}

function compileEventUi(eventDef, eventUiBases) {
  var uis = [];

  if (eventUiBases['']) {
    uis.push(eventUiBases['']);
  }

  if (eventUiBases[eventDef.defId]) {
    uis.push(eventUiBases[eventDef.defId]);
  }

  uis.push(eventDef.ui);
  return combineEventUis(uis);
}

function sortEventSegs(segs, eventOrderSpecs) {
  var objs = segs.map(buildSegCompareObj);
  objs.sort(function (obj0, obj1) {
    return compareByFieldSpecs(obj0, obj1, eventOrderSpecs);
  });
  return objs.map(function (c) {
    return c._seg;
  });
} // returns a object with all primitive props that can be compared


function buildSegCompareObj(seg) {
  var eventRange = seg.eventRange;
  var eventDef = eventRange.def;
  var range = eventRange.instance ? eventRange.instance.range : eventRange.range;
  var start = range.start ? range.start.valueOf() : 0; // TODO: better support for open-range events

  var end = range.end ? range.end.valueOf() : 0; // "

  return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, eventDef.extendedProps), eventDef), {
    id: eventDef.publicId,
    start: start,
    end: end,
    duration: end - start,
    allDay: Number(eventDef.allDay),
    _seg: seg // for later retrieval

  });
}

function computeSegDraggable(seg, context) {
  var pluginHooks = context.pluginHooks;
  var transformers = pluginHooks.isDraggableTransformers;
  var _a = seg.eventRange,
      def = _a.def,
      ui = _a.ui;
  var val = ui.startEditable;

  for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
    var transformer = transformers_1[_i];
    val = transformer(val, def, ui, context);
  }

  return val;
}

function computeSegStartResizable(seg, context) {
  return seg.isStart && seg.eventRange.ui.durationEditable && context.options.eventResizableFromStart;
}

function computeSegEndResizable(seg, context) {
  return seg.isEnd && seg.eventRange.ui.durationEditable;
}

function buildSegTimeText(seg, timeFormat, context, defaultDisplayEventTime, // defaults to true
defaultDisplayEventEnd, // defaults to true
startOverride, endOverride) {
  var dateEnv = context.dateEnv,
      options = context.options;
  var displayEventTime = options.displayEventTime,
      displayEventEnd = options.displayEventEnd;
  var eventDef = seg.eventRange.def;
  var eventInstance = seg.eventRange.instance;

  if (displayEventTime == null) {
    displayEventTime = defaultDisplayEventTime !== false;
  }

  if (displayEventEnd == null) {
    displayEventEnd = defaultDisplayEventEnd !== false;
  }

  if (displayEventTime && !eventDef.allDay && (seg.isStart || seg.isEnd)) {
    var segStart = startOverride || (seg.isStart ? eventInstance.range.start : seg.start || seg.eventRange.range.start);
    var segEnd = endOverride || (seg.isEnd ? eventInstance.range.end : seg.end || seg.eventRange.range.end);

    if (displayEventEnd && eventDef.hasEnd) {
      return dateEnv.formatRange(segStart, segEnd, timeFormat, {
        forcedStartTzo: startOverride ? null : eventInstance.forcedStartTzo,
        forcedEndTzo: endOverride ? null : eventInstance.forcedEndTzo
      });
    } else {
      return dateEnv.format(segStart, timeFormat, {
        forcedTzo: startOverride ? null : eventInstance.forcedStartTzo // nooooo, same

      });
    }
  }

  return '';
}

function getSegMeta(seg, todayRange, nowDate) {
  var segRange = seg.eventRange.range;
  return {
    isPast: segRange.end < (nowDate || todayRange.start),
    isFuture: segRange.start >= (nowDate || todayRange.end),
    isToday: todayRange && rangeContainsMarker(todayRange, segRange.start)
  };
}

function getEventClassNames(props) {
  var classNames = ['fc-event'];

  if (props.isMirror) {
    classNames.push('fc-event-mirror');
  }

  if (props.isDraggable) {
    classNames.push('fc-event-draggable');
  }

  if (props.isStartResizable || props.isEndResizable) {
    classNames.push('fc-event-resizable');
  }

  if (props.isDragging) {
    classNames.push('fc-event-dragging');
  }

  if (props.isResizing) {
    classNames.push('fc-event-resizing');
  }

  if (props.isSelected) {
    classNames.push('fc-event-selected');
  }

  if (props.isStart) {
    classNames.push('fc-event-start');
  }

  if (props.isEnd) {
    classNames.push('fc-event-end');
  }

  if (props.isPast) {
    classNames.push('fc-event-past');
  }

  if (props.isToday) {
    classNames.push('fc-event-today');
  }

  if (props.isFuture) {
    classNames.push('fc-event-future');
  }

  return classNames;
}

function buildEventRangeKey(eventRange) {
  return eventRange.instance ? eventRange.instance.instanceId : eventRange.def.defId + ':' + eventRange.range.start.toISOString(); // inverse-background events don't have specific instances. TODO: better solution
}

var STANDARD_PROPS = {
  start: identity,
  end: identity,
  allDay: Boolean
};

function parseDateSpan(raw, dateEnv, defaultDuration) {
  var span = parseOpenDateSpan(raw, dateEnv);
  var range = span.range;

  if (!range.start) {
    return null;
  }

  if (!range.end) {
    if (defaultDuration == null) {
      return null;
    } else {
      range.end = dateEnv.add(range.start, defaultDuration);
    }
  }

  return span;
}
/*
TODO: somehow combine with parseRange?
Will return null if the start/end props were present but parsed invalidly.
*/


function parseOpenDateSpan(raw, dateEnv) {
  var _a = refineProps(raw, STANDARD_PROPS),
      standardProps = _a.refined,
      extra = _a.extra;

  var startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
  var endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
  var allDay = standardProps.allDay;

  if (allDay == null) {
    allDay = startMeta && startMeta.isTimeUnspecified && (!endMeta || endMeta.isTimeUnspecified);
  }

  return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({
    range: {
      start: startMeta ? startMeta.marker : null,
      end: endMeta ? endMeta.marker : null
    },
    allDay: allDay
  }, extra);
}

function isDateSpansEqual(span0, span1) {
  return rangesEqual(span0.range, span1.range) && span0.allDay === span1.allDay && isSpanPropsEqual(span0, span1);
} // the NON-DATE-RELATED props


function isSpanPropsEqual(span0, span1) {
  for (var propName in span1) {
    if (propName !== 'range' && propName !== 'allDay') {
      if (span0[propName] !== span1[propName]) {
        return false;
      }
    }
  } // are there any props that span0 has that span1 DOESN'T have?
  // both have range/allDay, so no need to special-case.


  for (var propName in span0) {
    if (!(propName in span1)) {
      return false;
    }
  }

  return true;
}

function buildDateSpanApi(span, dateEnv) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, buildRangeApi(span.range, dateEnv, span.allDay)), {
    allDay: span.allDay
  });
}

function buildRangeApiWithTimeZone(range, dateEnv, omitTime) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, buildRangeApi(range, dateEnv, omitTime)), {
    timeZone: dateEnv.timeZone
  });
}

function buildRangeApi(range, dateEnv, omitTime) {
  return {
    start: dateEnv.toDate(range.start),
    end: dateEnv.toDate(range.end),
    startStr: dateEnv.formatIso(range.start, {
      omitTime: omitTime
    }),
    endStr: dateEnv.formatIso(range.end, {
      omitTime: omitTime
    })
  };
}

function fabricateEventRange(dateSpan, eventUiBases, context) {
  var res = refineEventDef({
    editable: false
  }, context);
  var def = parseEventDef(res.refined, res.extra, '', // sourceId
  dateSpan.allDay, true, // hasEnd
  context);
  return {
    def: def,
    ui: compileEventUi(def, eventUiBases),
    instance: createEventInstance(def.defId, dateSpan.range),
    range: dateSpan.range,
    isStart: true,
    isEnd: true
  };
}

function triggerDateSelect(selection, pev, context) {
  context.emitter.trigger('select', Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, buildDateSpanApiWithContext(selection, context)), {
    jsEvent: pev ? pev.origEvent : null,
    view: context.viewApi || context.calendarApi.view
  }));
}

function triggerDateUnselect(pev, context) {
  context.emitter.trigger('unselect', {
    jsEvent: pev ? pev.origEvent : null,
    view: context.viewApi || context.calendarApi.view
  });
}

function buildDateSpanApiWithContext(dateSpan, context) {
  var props = {};

  for (var _i = 0, _a = context.pluginHooks.dateSpanTransforms; _i < _a.length; _i++) {
    var transform = _a[_i];

    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(props, transform(dateSpan, context));
  }

  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(props, buildDateSpanApi(dateSpan, context.dateEnv));

  return props;
} // Given an event's allDay status and start date, return what its fallback end date should be.
// TODO: rename to computeDefaultEventEnd


function getDefaultEventEnd(allDay, marker, context) {
  var dateEnv = context.dateEnv,
      options = context.options;
  var end = marker;

  if (allDay) {
    end = startOfDay(end);
    end = dateEnv.add(end, options.defaultAllDayEventDuration);
  } else {
    end = dateEnv.add(end, options.defaultTimedEventDuration);
  }

  return end;
} // applies the mutation to ALL defs/instances within the event store


function applyMutationToEventStore(eventStore, eventConfigBase, mutation, context) {
  var eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
  var dest = createEmptyEventStore();

  for (var defId in eventStore.defs) {
    var def = eventStore.defs[defId];
    dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, context);
  }

  for (var instanceId in eventStore.instances) {
    var instance = eventStore.instances[instanceId];
    var def = dest.defs[instance.defId]; // important to grab the newly modified def

    dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, context);
  }

  return dest;
}

function applyMutationToEventDef(eventDef, eventConfig, mutation, context) {
  var standardProps = mutation.standardProps || {}; // if hasEnd has not been specified, guess a good value based on deltas.
  // if duration will change, there's no way the default duration will persist,
  // and thus, we need to mark the event as having a real end

  if (standardProps.hasEnd == null && eventConfig.durationEditable && (mutation.startDelta || mutation.endDelta)) {
    standardProps.hasEnd = true; // TODO: is this mutation okay?
  }

  var copy = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, eventDef), standardProps), {
    ui: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, eventDef.ui), standardProps.ui)
  });

  if (mutation.extendedProps) {
    copy.extendedProps = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, copy.extendedProps), mutation.extendedProps);
  }

  for (var _i = 0, _a = context.pluginHooks.eventDefMutationAppliers; _i < _a.length; _i++) {
    var applier = _a[_i];
    applier(copy, mutation, context);
  }

  if (!copy.hasEnd && context.options.forceEventDuration) {
    copy.hasEnd = true;
  }

  return copy;
}

function applyMutationToEventInstance(eventInstance, eventDef, // must first be modified by applyMutationToEventDef
eventConfig, mutation, context) {
  var dateEnv = context.dateEnv;
  var forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
  var clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;

  var copy = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, eventInstance);

  if (forceAllDay) {
    copy.range = computeAlignedDayRange(copy.range);
  }

  if (mutation.datesDelta && eventConfig.startEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.datesDelta),
      end: dateEnv.add(copy.range.end, mutation.datesDelta)
    };
  }

  if (mutation.startDelta && eventConfig.durationEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.startDelta),
      end: copy.range.end
    };
  }

  if (mutation.endDelta && eventConfig.durationEditable) {
    copy.range = {
      start: copy.range.start,
      end: dateEnv.add(copy.range.end, mutation.endDelta)
    };
  }

  if (clearEnd) {
    copy.range = {
      start: copy.range.start,
      end: getDefaultEventEnd(eventDef.allDay, copy.range.start, context)
    };
  } // in case event was all-day but the supplied deltas were not
  // better util for this?


  if (eventDef.allDay) {
    copy.range = {
      start: startOfDay(copy.range.start),
      end: startOfDay(copy.range.end)
    };
  } // handle invalid durations


  if (copy.range.end < copy.range.start) {
    copy.range.end = getDefaultEventEnd(eventDef.allDay, copy.range.start, context);
  }

  return copy;
} // no public types yet. when there are, export from:
// import {} from './api-type-deps'


var ViewApi =
/** @class */
function () {
  function ViewApi(type, getCurrentData, dateEnv) {
    this.type = type;
    this.getCurrentData = getCurrentData;
    this.dateEnv = dateEnv;
  }

  Object.defineProperty(ViewApi.prototype, "calendar", {
    get: function get() {
      return this.getCurrentData().calendarApi;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi.prototype, "title", {
    get: function get() {
      return this.getCurrentData().viewTitle;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi.prototype, "activeStart", {
    get: function get() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi.prototype, "activeEnd", {
    get: function get() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi.prototype, "currentStart", {
    get: function get() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi.prototype, "currentEnd", {
    get: function get() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
    },
    enumerable: false,
    configurable: true
  });

  ViewApi.prototype.getOption = function (name) {
    return this.getCurrentData().options[name]; // are the view-specific options
  };

  return ViewApi;
}();

var EVENT_SOURCE_REFINERS = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  events: identity,
  eventDataTransform: identity,
  // for any network-related sources
  success: identity,
  failure: identity
};

function parseEventSource(raw, context, refiners) {
  if (refiners === void 0) {
    refiners = buildEventSourceRefiners(context);
  }

  var rawObj;

  if (typeof raw === 'string') {
    rawObj = {
      url: raw
    };
  } else if (typeof raw === 'function' || Array.isArray(raw)) {
    rawObj = {
      events: raw
    };
  } else if (_typeof(raw) === 'object' && raw) {
    // not null
    rawObj = raw;
  }

  if (rawObj) {
    var _a = refineProps(rawObj, refiners),
        refined = _a.refined,
        extra = _a.extra;

    var metaRes = buildEventSourceMeta(refined, context);

    if (metaRes) {
      return {
        _raw: raw,
        isFetching: false,
        latestFetchId: '',
        fetchRange: null,
        defaultAllDay: refined.defaultAllDay,
        eventDataTransform: refined.eventDataTransform,
        success: refined.success,
        failure: refined.failure,
        publicId: refined.id || '',
        sourceId: guid(),
        sourceDefId: metaRes.sourceDefId,
        meta: metaRes.meta,
        ui: createEventUi(refined, context),
        extendedProps: extra
      };
    }
  }

  return null;
}

function buildEventSourceRefiners(context) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, EVENT_UI_REFINERS), EVENT_SOURCE_REFINERS), context.pluginHooks.eventSourceRefiners);
}

function buildEventSourceMeta(raw, context) {
  var defs = context.pluginHooks.eventSourceDefs;

  for (var i = defs.length - 1; i >= 0; i--) {
    // later-added plugins take precedence
    var def = defs[i];
    var meta = def.parseMeta(raw);

    if (meta) {
      return {
        sourceDefId: i,
        meta: meta
      };
    }
  }

  return null;
}

function reduceCurrentDate(currentDate, action) {
  switch (action.type) {
    case 'CHANGE_DATE':
      return action.dateMarker;

    default:
      return currentDate;
  }
}

function getInitialDate(options, dateEnv) {
  var initialDateInput = options.initialDate; // compute the initial ambig-timezone date

  if (initialDateInput != null) {
    return dateEnv.createMarker(initialDateInput);
  } else {
    return getNow(options.now, dateEnv); // getNow already returns unzoned
  }
}

function getNow(nowInput, dateEnv) {
  if (typeof nowInput === 'function') {
    nowInput = nowInput();
  }

  if (nowInput == null) {
    return dateEnv.createNowMarker();
  }

  return dateEnv.createMarker(nowInput);
}

var CalendarApi =
/** @class */
function () {
  function CalendarApi() {}

  CalendarApi.prototype.getCurrentData = function () {
    return this.currentDataManager.getCurrentData();
  };

  CalendarApi.prototype.dispatch = function (action) {
    return this.currentDataManager.dispatch(action);
  };

  Object.defineProperty(CalendarApi.prototype, "view", {
    get: function get() {
      return this.getCurrentData().viewApi;
    } // for public API
    ,
    enumerable: false,
    configurable: true
  });

  CalendarApi.prototype.batchRendering = function (callback) {
    callback();
  };

  CalendarApi.prototype.updateSize = function () {
    this.trigger('_resize', true);
  }; // Options
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.setOption = function (name, val) {
    this.dispatch({
      type: 'SET_OPTION',
      optionName: name,
      rawOptionValue: val
    });
  };

  CalendarApi.prototype.getOption = function (name) {
    return this.currentDataManager.currentCalendarOptionsInput[name];
  };

  CalendarApi.prototype.getAvailableLocaleCodes = function () {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }; // Trigger
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.on = function (handlerName, handler) {
    var currentDataManager = this.currentDataManager;

    if (currentDataManager.currentCalendarOptionsRefiners[handlerName]) {
      currentDataManager.emitter.on(handlerName, handler);
    } else {
      console.warn("Unknown listener name '" + handlerName + "'");
    }
  };

  CalendarApi.prototype.off = function (handlerName, handler) {
    this.currentDataManager.emitter.off(handlerName, handler);
  }; // not meant for public use


  CalendarApi.prototype.trigger = function (handlerName) {
    var _a;

    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    (_a = this.currentDataManager.emitter).trigger.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([handlerName], args));
  }; // View
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.changeView = function (viewType, dateOrRange) {
    var _this = this;

    this.batchRendering(function () {
      _this.unselect();

      if (dateOrRange) {
        if (dateOrRange.start && dateOrRange.end) {
          // a range
          _this.dispatch({
            type: 'CHANGE_VIEW_TYPE',
            viewType: viewType
          });

          _this.dispatch({
            type: 'SET_OPTION',
            optionName: 'visibleRange',
            rawOptionValue: dateOrRange
          });
        } else {
          var dateEnv = _this.getCurrentData().dateEnv;

          _this.dispatch({
            type: 'CHANGE_VIEW_TYPE',
            viewType: viewType,
            dateMarker: dateEnv.createMarker(dateOrRange)
          });
        }
      } else {
        _this.dispatch({
          type: 'CHANGE_VIEW_TYPE',
          viewType: viewType
        });
      }
    });
  }; // Forces navigation to a view for the given date.
  // `viewType` can be a specific view name or a generic one like "week" or "day".
  // needs to change


  CalendarApi.prototype.zoomTo = function (dateMarker, viewType) {
    var state = this.getCurrentData();
    var spec;
    viewType = viewType || 'day'; // day is default zoom

    spec = state.viewSpecs[viewType] || this.getUnitViewSpec(viewType);
    this.unselect();

    if (spec) {
      this.dispatch({
        type: 'CHANGE_VIEW_TYPE',
        viewType: spec.type,
        dateMarker: dateMarker
      });
    } else {
      this.dispatch({
        type: 'CHANGE_DATE',
        dateMarker: dateMarker
      });
    }
  }; // Given a duration singular unit, like "week" or "day", finds a matching view spec.
  // Preference is given to views that have corresponding buttons.


  CalendarApi.prototype.getUnitViewSpec = function (unit) {
    var _a = this.getCurrentData(),
        viewSpecs = _a.viewSpecs,
        toolbarConfig = _a.toolbarConfig;

    var viewTypes = [].concat(toolbarConfig.viewsWithButtons);
    var i;
    var spec;

    for (var viewType in viewSpecs) {
      viewTypes.push(viewType);
    }

    for (i = 0; i < viewTypes.length; i++) {
      spec = viewSpecs[viewTypes[i]];

      if (spec) {
        if (spec.singleUnit === unit) {
          return spec;
        }
      }
    }
  }; // Current Date
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.prev = function () {
    this.unselect();
    this.dispatch({
      type: 'PREV'
    });
  };

  CalendarApi.prototype.next = function () {
    this.unselect();
    this.dispatch({
      type: 'NEXT'
    });
  };

  CalendarApi.prototype.prevYear = function () {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: state.dateEnv.addYears(state.currentDate, -1)
    });
  };

  CalendarApi.prototype.nextYear = function () {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: state.dateEnv.addYears(state.currentDate, 1)
    });
  };

  CalendarApi.prototype.today = function () {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: getNow(state.calendarOptions.now, state.dateEnv)
    });
  };

  CalendarApi.prototype.gotoDate = function (zonedDateInput) {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: state.dateEnv.createMarker(zonedDateInput)
    });
  };

  CalendarApi.prototype.incrementDate = function (deltaInput) {
    var state = this.getCurrentData();
    var delta = createDuration(deltaInput);

    if (delta) {
      // else, warn about invalid input?
      this.unselect();
      this.dispatch({
        type: 'CHANGE_DATE',
        dateMarker: state.dateEnv.add(state.currentDate, delta)
      });
    }
  }; // for external API


  CalendarApi.prototype.getDate = function () {
    var state = this.getCurrentData();
    return state.dateEnv.toDate(state.currentDate);
  }; // Date Formatting Utils
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.formatDate = function (d, formatter) {
    var dateEnv = this.getCurrentData().dateEnv;
    return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
  }; // `settings` is for formatter AND isEndExclusive


  CalendarApi.prototype.formatRange = function (d0, d1, settings) {
    var dateEnv = this.getCurrentData().dateEnv;
    return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings), settings);
  };

  CalendarApi.prototype.formatIso = function (d, omitTime) {
    var dateEnv = this.getCurrentData().dateEnv;
    return dateEnv.formatIso(dateEnv.createMarker(d), {
      omitTime: omitTime
    });
  }; // Date Selection / Event Selection / DayClick
  // -----------------------------------------------------------------------------------------------------------------
  // this public method receives start/end dates in any format, with any timezone
  // NOTE: args were changed from v3


  CalendarApi.prototype.select = function (dateOrObj, endDate) {
    var selectionInput;

    if (endDate == null) {
      if (dateOrObj.start != null) {
        selectionInput = dateOrObj;
      } else {
        selectionInput = {
          start: dateOrObj,
          end: null
        };
      }
    } else {
      selectionInput = {
        start: dateOrObj,
        end: endDate
      };
    }

    var state = this.getCurrentData();
    var selection = parseDateSpan(selectionInput, state.dateEnv, createDuration({
      days: 1
    }) // TODO: cache this?
    );

    if (selection) {
      // throw parse error otherwise?
      this.dispatch({
        type: 'SELECT_DATES',
        selection: selection
      });
      triggerDateSelect(selection, null, state);
    }
  }; // public method


  CalendarApi.prototype.unselect = function (pev) {
    var state = this.getCurrentData();

    if (state.dateSelection) {
      this.dispatch({
        type: 'UNSELECT_DATES'
      });
      triggerDateUnselect(pev, state);
    }
  }; // Public Events API
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.addEvent = function (eventInput, sourceInput) {
    if (eventInput instanceof EventApi) {
      var def = eventInput._def;
      var instance = eventInput._instance;
      var currentData = this.getCurrentData(); // not already present? don't want to add an old snapshot

      if (!currentData.eventStore.defs[def.defId]) {
        this.dispatch({
          type: 'ADD_EVENTS',
          eventStore: eventTupleToStore({
            def: def,
            instance: instance
          }) // TODO: better util for two args?

        });
        this.triggerEventAdd(eventInput);
      }

      return eventInput;
    }

    var state = this.getCurrentData();
    var eventSource;

    if (sourceInput instanceof EventSourceApi) {
      eventSource = sourceInput.internalEventSource;
    } else if (typeof sourceInput === 'boolean') {
      if (sourceInput) {
        // true. part of the first event source
        eventSource = hashValuesToArray(state.eventSources)[0];
      }
    } else if (sourceInput != null) {
      // an ID. accepts a number too
      var sourceApi = this.getEventSourceById(sourceInput); // TODO: use an internal function

      if (!sourceApi) {
        console.warn('Could not find an event source with ID "' + sourceInput + '"'); // TODO: test

        return null;
      } else {
        eventSource = sourceApi.internalEventSource;
      }
    }

    var tuple = parseEvent(eventInput, eventSource, state, false);

    if (tuple) {
      var newEventApi = new EventApi(state, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
      this.dispatch({
        type: 'ADD_EVENTS',
        eventStore: eventTupleToStore(tuple)
      });
      this.triggerEventAdd(newEventApi);
      return newEventApi;
    }

    return null;
  };

  CalendarApi.prototype.triggerEventAdd = function (eventApi) {
    var _this = this;

    var emitter = this.getCurrentData().emitter;
    emitter.trigger('eventAdd', {
      event: eventApi,
      relatedEvents: [],
      revert: function revert() {
        _this.dispatch({
          type: 'REMOVE_EVENTS',
          eventStore: eventApiToStore(eventApi)
        });
      }
    });
  }; // TODO: optimize


  CalendarApi.prototype.getEventById = function (id) {
    var state = this.getCurrentData();
    var _a = state.eventStore,
        defs = _a.defs,
        instances = _a.instances;
    id = String(id);

    for (var defId in defs) {
      var def = defs[defId];

      if (def.publicId === id) {
        if (def.recurringDef) {
          return new EventApi(state, def, null);
        } else {
          for (var instanceId in instances) {
            var instance = instances[instanceId];

            if (instance.defId === def.defId) {
              return new EventApi(state, def, instance);
            }
          }
        }
      }
    }

    return null;
  };

  CalendarApi.prototype.getEvents = function () {
    var currentData = this.getCurrentData();
    return buildEventApis(currentData.eventStore, currentData);
  };

  CalendarApi.prototype.removeAllEvents = function () {
    this.dispatch({
      type: 'REMOVE_ALL_EVENTS'
    });
  }; // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.getEventSources = function () {
    var state = this.getCurrentData();
    var sourceHash = state.eventSources;
    var sourceApis = [];

    for (var internalId in sourceHash) {
      sourceApis.push(new EventSourceApi(state, sourceHash[internalId]));
    }

    return sourceApis;
  };

  CalendarApi.prototype.getEventSourceById = function (id) {
    var state = this.getCurrentData();
    var sourceHash = state.eventSources;
    id = String(id);

    for (var sourceId in sourceHash) {
      if (sourceHash[sourceId].publicId === id) {
        return new EventSourceApi(state, sourceHash[sourceId]);
      }
    }

    return null;
  };

  CalendarApi.prototype.addEventSource = function (sourceInput) {
    var state = this.getCurrentData();

    if (sourceInput instanceof EventSourceApi) {
      // not already present? don't want to add an old snapshot
      if (!state.eventSources[sourceInput.internalEventSource.sourceId]) {
        this.dispatch({
          type: 'ADD_EVENT_SOURCES',
          sources: [sourceInput.internalEventSource]
        });
      }

      return sourceInput;
    }

    var eventSource = parseEventSource(sourceInput, state);

    if (eventSource) {
      // TODO: error otherwise?
      this.dispatch({
        type: 'ADD_EVENT_SOURCES',
        sources: [eventSource]
      });
      return new EventSourceApi(state, eventSource);
    }

    return null;
  };

  CalendarApi.prototype.removeAllEventSources = function () {
    this.dispatch({
      type: 'REMOVE_ALL_EVENT_SOURCES'
    });
  };

  CalendarApi.prototype.refetchEvents = function () {
    this.dispatch({
      type: 'FETCH_EVENT_SOURCES'
    });
  }; // Scroll
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.scrollToTime = function (timeInput) {
    var time = createDuration(timeInput);

    if (time) {
      this.trigger('_scrollRequest', {
        time: time
      });
    }
  };

  return CalendarApi;
}();

var EventApi =
/** @class */
function () {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  function EventApi(context, def, instance) {
    this._context = context;
    this._def = def;
    this._instance = instance || null;
  }
  /*
  TODO: make event struct more responsible for this
  */


  EventApi.prototype.setProp = function (name, val) {
    var _a, _b;

    if (name in EVENT_DATE_REFINERS) {
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    } else if (name in EVENT_NON_DATE_REFINERS) {
      val = EVENT_NON_DATE_REFINERS[name](val);
      this.mutate({
        standardProps: (_a = {}, _a[name] = val, _a)
      });
    } else if (name in EVENT_UI_REFINERS) {
      var ui = EVENT_UI_REFINERS[name](val);

      if (name === 'color') {
        ui = {
          backgroundColor: val,
          borderColor: val
        };
      } else if (name === 'editable') {
        ui = {
          startEditable: val,
          durationEditable: val
        };
      } else {
        ui = (_b = {}, _b[name] = val, _b);
      }

      this.mutate({
        standardProps: {
          ui: ui
        }
      });
    } else {
      console.warn("Could not set prop '" + name + "'. Use setExtendedProp instead.");
    }
  };

  EventApi.prototype.setExtendedProp = function (name, val) {
    var _a;

    this.mutate({
      extendedProps: (_a = {}, _a[name] = val, _a)
    });
  };

  EventApi.prototype.setStart = function (startInput, options) {
    if (options === void 0) {
      options = {};
    }

    var dateEnv = this._context.dateEnv;
    var start = dateEnv.createMarker(startInput);

    if (start && this._instance) {
      // TODO: warning if parsed bad
      var instanceRange = this._instance.range;
      var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity); // what if parsed bad!?

      if (options.maintainDuration) {
        this.mutate({
          datesDelta: startDelta
        });
      } else {
        this.mutate({
          startDelta: startDelta
        });
      }
    }
  };

  EventApi.prototype.setEnd = function (endInput, options) {
    if (options === void 0) {
      options = {};
    }

    var dateEnv = this._context.dateEnv;
    var end;

    if (endInput != null) {
      end = dateEnv.createMarker(endInput);

      if (!end) {
        return; // TODO: warning if parsed bad
      }
    }

    if (this._instance) {
      if (end) {
        var endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
        this.mutate({
          endDelta: endDelta
        });
      } else {
        this.mutate({
          standardProps: {
            hasEnd: false
          }
        });
      }
    }
  };

  EventApi.prototype.setDates = function (startInput, endInput, options) {
    if (options === void 0) {
      options = {};
    }

    var dateEnv = this._context.dateEnv;
    var standardProps = {
      allDay: options.allDay
    };
    var start = dateEnv.createMarker(startInput);
    var end;

    if (!start) {
      return; // TODO: warning if parsed bad
    }

    if (endInput != null) {
      end = dateEnv.createMarker(endInput);

      if (!end) {
        // TODO: warning if parsed bad
        return;
      }
    }

    if (this._instance) {
      var instanceRange = this._instance.range; // when computing the diff for an event being converted to all-day,
      // compute diff off of the all-day values the way event-mutation does.

      if (options.allDay === true) {
        instanceRange = computeAlignedDayRange(instanceRange);
      }

      var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);

      if (end) {
        var endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);

        if (durationsEqual(startDelta, endDelta)) {
          this.mutate({
            datesDelta: startDelta,
            standardProps: standardProps
          });
        } else {
          this.mutate({
            startDelta: startDelta,
            endDelta: endDelta,
            standardProps: standardProps
          });
        }
      } else {
        // means "clear the end"
        standardProps.hasEnd = false;
        this.mutate({
          datesDelta: startDelta,
          standardProps: standardProps
        });
      }
    }
  };

  EventApi.prototype.moveStart = function (deltaInput) {
    var delta = createDuration(deltaInput);

    if (delta) {
      // TODO: warning if parsed bad
      this.mutate({
        startDelta: delta
      });
    }
  };

  EventApi.prototype.moveEnd = function (deltaInput) {
    var delta = createDuration(deltaInput);

    if (delta) {
      // TODO: warning if parsed bad
      this.mutate({
        endDelta: delta
      });
    }
  };

  EventApi.prototype.moveDates = function (deltaInput) {
    var delta = createDuration(deltaInput);

    if (delta) {
      // TODO: warning if parsed bad
      this.mutate({
        datesDelta: delta
      });
    }
  };

  EventApi.prototype.setAllDay = function (allDay, options) {
    if (options === void 0) {
      options = {};
    }

    var standardProps = {
      allDay: allDay
    };
    var maintainDuration = options.maintainDuration;

    if (maintainDuration == null) {
      maintainDuration = this._context.options.allDayMaintainDuration;
    }

    if (this._def.allDay !== allDay) {
      standardProps.hasEnd = maintainDuration;
    }

    this.mutate({
      standardProps: standardProps
    });
  };

  EventApi.prototype.formatRange = function (formatInput) {
    var dateEnv = this._context.dateEnv;
    var instance = this._instance;
    var formatter = createFormatter(formatInput);

    if (this._def.hasEnd) {
      return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
        forcedStartTzo: instance.forcedStartTzo,
        forcedEndTzo: instance.forcedEndTzo
      });
    } else {
      return dateEnv.format(instance.range.start, formatter, {
        forcedTzo: instance.forcedStartTzo
      });
    }
  };

  EventApi.prototype.mutate = function (mutation) {
    var instance = this._instance;

    if (instance) {
      var def = this._def;
      var context_1 = this._context;
      var eventStore = context_1.getCurrentData().eventStore;
      var relevantEvents_1 = getRelevantEvents(eventStore, instance.instanceId);
      var eventConfigBase = {
        '': {
          display: '',
          startEditable: true,
          durationEditable: true,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: '',
          borderColor: '',
          textColor: '',
          classNames: []
        }
      };
      relevantEvents_1 = applyMutationToEventStore(relevantEvents_1, eventConfigBase, mutation, context_1);
      var oldEvent = new EventApi(context_1, def, instance); // snapshot

      this._def = relevantEvents_1.defs[def.defId];
      this._instance = relevantEvents_1.instances[instance.instanceId];
      context_1.dispatch({
        type: 'MERGE_EVENTS',
        eventStore: relevantEvents_1
      });
      context_1.emitter.trigger('eventChange', {
        oldEvent: oldEvent,
        event: this,
        relatedEvents: buildEventApis(relevantEvents_1, context_1, instance),
        revert: function revert() {
          context_1.dispatch({
            type: 'REMOVE_EVENTS',
            eventStore: relevantEvents_1
          });
        }
      });
    }
  };

  EventApi.prototype.remove = function () {
    var context = this._context;
    var asStore = eventApiToStore(this);
    context.dispatch({
      type: 'REMOVE_EVENTS',
      eventStore: asStore
    });
    context.emitter.trigger('eventRemove', {
      event: this,
      relatedEvents: [],
      revert: function revert() {
        context.dispatch({
          type: 'MERGE_EVENTS',
          eventStore: asStore
        });
      }
    });
  };

  Object.defineProperty(EventApi.prototype, "source", {
    get: function get() {
      var sourceId = this._def.sourceId;

      if (sourceId) {
        return new EventSourceApi(this._context, this._context.getCurrentData().eventSources[sourceId]);
      }

      return null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "start", {
    get: function get() {
      return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "end", {
    get: function get() {
      return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "startStr", {
    get: function get() {
      var instance = this._instance;

      if (instance) {
        return this._context.dateEnv.formatIso(instance.range.start, {
          omitTime: this._def.allDay,
          forcedTzo: instance.forcedStartTzo
        });
      }

      return '';
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "endStr", {
    get: function get() {
      var instance = this._instance;

      if (instance && this._def.hasEnd) {
        return this._context.dateEnv.formatIso(instance.range.end, {
          omitTime: this._def.allDay,
          forcedTzo: instance.forcedEndTzo
        });
      }

      return '';
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "id", {
    // computable props that all access the def
    // TODO: find a TypeScript-compatible way to do this at scale
    get: function get() {
      return this._def.publicId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "groupId", {
    get: function get() {
      return this._def.groupId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "allDay", {
    get: function get() {
      return this._def.allDay;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "title", {
    get: function get() {
      return this._def.title;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "url", {
    get: function get() {
      return this._def.url;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "display", {
    get: function get() {
      return this._def.ui.display || 'auto';
    } // bad. just normalize the type earlier
    ,
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "startEditable", {
    get: function get() {
      return this._def.ui.startEditable;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "durationEditable", {
    get: function get() {
      return this._def.ui.durationEditable;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "constraint", {
    get: function get() {
      return this._def.ui.constraints[0] || null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "overlap", {
    get: function get() {
      return this._def.ui.overlap;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "allow", {
    get: function get() {
      return this._def.ui.allows[0] || null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "backgroundColor", {
    get: function get() {
      return this._def.ui.backgroundColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "borderColor", {
    get: function get() {
      return this._def.ui.borderColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "textColor", {
    get: function get() {
      return this._def.ui.textColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "classNames", {
    // NOTE: user can't modify these because Object.freeze was called in event-def parsing
    get: function get() {
      return this._def.ui.classNames;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "extendedProps", {
    get: function get() {
      return this._def.extendedProps;
    },
    enumerable: false,
    configurable: true
  });

  EventApi.prototype.toPlainObject = function (settings) {
    if (settings === void 0) {
      settings = {};
    }

    var def = this._def;
    var ui = def.ui;

    var _a = this,
        startStr = _a.startStr,
        endStr = _a.endStr;

    var res = {};

    if (def.title) {
      res.title = def.title;
    }

    if (startStr) {
      res.start = startStr;
    }

    if (endStr) {
      res.end = endStr;
    }

    if (def.publicId) {
      res.id = def.publicId;
    }

    if (def.groupId) {
      res.groupId = def.groupId;
    }

    if (def.url) {
      res.url = def.url;
    }

    if (ui.display && ui.display !== 'auto') {
      res.display = ui.display;
    } // TODO: what about recurring-event properties???
    // TODO: include startEditable/durationEditable/constraint/overlap/allow


    if (settings.collapseColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) {
      res.color = ui.backgroundColor;
    } else {
      if (ui.backgroundColor) {
        res.backgroundColor = ui.backgroundColor;
      }

      if (ui.borderColor) {
        res.borderColor = ui.borderColor;
      }
    }

    if (ui.textColor) {
      res.textColor = ui.textColor;
    }

    if (ui.classNames.length) {
      res.classNames = ui.classNames;
    }

    if (Object.keys(def.extendedProps).length) {
      if (settings.collapseExtendedProps) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(res, def.extendedProps);
      } else {
        res.extendedProps = def.extendedProps;
      }
    }

    return res;
  };

  EventApi.prototype.toJSON = function () {
    return this.toPlainObject();
  };

  return EventApi;
}();

function eventApiToStore(eventApi) {
  var _a, _b;

  var def = eventApi._def;
  var instance = eventApi._instance;
  return {
    defs: (_a = {}, _a[def.defId] = def, _a),
    instances: instance ? (_b = {}, _b[instance.instanceId] = instance, _b) : {}
  };
}

function buildEventApis(eventStore, context, excludeInstance) {
  var defs = eventStore.defs,
      instances = eventStore.instances;
  var eventApis = [];
  var excludeInstanceId = excludeInstance ? excludeInstance.instanceId : '';

  for (var id in instances) {
    var instance = instances[id];
    var def = defs[instance.defId];

    if (instance.instanceId !== excludeInstanceId) {
      eventApis.push(new EventApi(context, def, instance));
    }
  }

  return eventApis;
}

var calendarSystemClassMap = {};

function registerCalendarSystem(name, theClass) {
  calendarSystemClassMap[name] = theClass;
}

function createCalendarSystem(name) {
  return new calendarSystemClassMap[name]();
}

var GregorianCalendarSystem =
/** @class */
function () {
  function GregorianCalendarSystem() {}

  GregorianCalendarSystem.prototype.getMarkerYear = function (d) {
    return d.getUTCFullYear();
  };

  GregorianCalendarSystem.prototype.getMarkerMonth = function (d) {
    return d.getUTCMonth();
  };

  GregorianCalendarSystem.prototype.getMarkerDay = function (d) {
    return d.getUTCDate();
  };

  GregorianCalendarSystem.prototype.arrayToMarker = function (arr) {
    return arrayToUtcDate(arr);
  };

  GregorianCalendarSystem.prototype.markerToArray = function (marker) {
    return dateToUtcArray(marker);
  };

  return GregorianCalendarSystem;
}();

registerCalendarSystem('gregory', GregorianCalendarSystem);
var ISO_RE = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;

function parse(str) {
  var m = ISO_RE.exec(str);

  if (m) {
    var marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number('0.' + m[12]) * 1000 : 0));

    if (isValidDate(marker)) {
      var timeZoneOffset = null;

      if (m[13]) {
        timeZoneOffset = (m[15] === '-' ? -1 : 1) * (Number(m[16] || 0) * 60 + Number(m[18] || 0));
      }

      return {
        marker: marker,
        isTimeUnspecified: !m[6],
        timeZoneOffset: timeZoneOffset
      };
    }
  }

  return null;
}

var DateEnv =
/** @class */
function () {
  function DateEnv(settings) {
    var timeZone = this.timeZone = settings.timeZone;
    var isNamedTimeZone = timeZone !== 'local' && timeZone !== 'UTC';

    if (settings.namedTimeZoneImpl && isNamedTimeZone) {
      this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
    }

    this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
    this.calendarSystem = createCalendarSystem(settings.calendarSystem);
    this.locale = settings.locale;
    this.weekDow = settings.locale.week.dow;
    this.weekDoy = settings.locale.week.doy;

    if (settings.weekNumberCalculation === 'ISO') {
      this.weekDow = 1;
      this.weekDoy = 4;
    }

    if (typeof settings.firstDay === 'number') {
      this.weekDow = settings.firstDay;
    }

    if (typeof settings.weekNumberCalculation === 'function') {
      this.weekNumberFunc = settings.weekNumberCalculation;
    }

    this.weekText = settings.weekText != null ? settings.weekText : settings.locale.options.weekText;
    this.cmdFormatter = settings.cmdFormatter;
    this.defaultSeparator = settings.defaultSeparator;
  } // Creating / Parsing


  DateEnv.prototype.createMarker = function (input) {
    var meta = this.createMarkerMeta(input);

    if (meta === null) {
      return null;
    }

    return meta.marker;
  };

  DateEnv.prototype.createNowMarker = function () {
    if (this.canComputeOffset) {
      return this.timestampToMarker(new Date().valueOf());
    } else {
      // if we can't compute the current date val for a timezone,
      // better to give the current local date vals than UTC
      return arrayToUtcDate(dateToLocalArray(new Date()));
    }
  };

  DateEnv.prototype.createMarkerMeta = function (input) {
    if (typeof input === 'string') {
      return this.parse(input);
    }

    var marker = null;

    if (typeof input === 'number') {
      marker = this.timestampToMarker(input);
    } else if (input instanceof Date) {
      input = input.valueOf();

      if (!isNaN(input)) {
        marker = this.timestampToMarker(input);
      }
    } else if (Array.isArray(input)) {
      marker = arrayToUtcDate(input);
    }

    if (marker === null || !isValidDate(marker)) {
      return null;
    }

    return {
      marker: marker,
      isTimeUnspecified: false,
      forcedTzo: null
    };
  };

  DateEnv.prototype.parse = function (s) {
    var parts = parse(s);

    if (parts === null) {
      return null;
    }

    var marker = parts.marker;
    var forcedTzo = null;

    if (parts.timeZoneOffset !== null) {
      if (this.canComputeOffset) {
        marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1000);
      } else {
        forcedTzo = parts.timeZoneOffset;
      }
    }

    return {
      marker: marker,
      isTimeUnspecified: parts.isTimeUnspecified,
      forcedTzo: forcedTzo
    };
  }; // Accessors


  DateEnv.prototype.getYear = function (marker) {
    return this.calendarSystem.getMarkerYear(marker);
  };

  DateEnv.prototype.getMonth = function (marker) {
    return this.calendarSystem.getMarkerMonth(marker);
  }; // Adding / Subtracting


  DateEnv.prototype.add = function (marker, dur) {
    var a = this.calendarSystem.markerToArray(marker);
    a[0] += dur.years;
    a[1] += dur.months;
    a[2] += dur.days;
    a[6] += dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a);
  };

  DateEnv.prototype.subtract = function (marker, dur) {
    var a = this.calendarSystem.markerToArray(marker);
    a[0] -= dur.years;
    a[1] -= dur.months;
    a[2] -= dur.days;
    a[6] -= dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a);
  };

  DateEnv.prototype.addYears = function (marker, n) {
    var a = this.calendarSystem.markerToArray(marker);
    a[0] += n;
    return this.calendarSystem.arrayToMarker(a);
  };

  DateEnv.prototype.addMonths = function (marker, n) {
    var a = this.calendarSystem.markerToArray(marker);
    a[1] += n;
    return this.calendarSystem.arrayToMarker(a);
  }; // Diffing Whole Units


  DateEnv.prototype.diffWholeYears = function (m0, m1) {
    var calendarSystem = this.calendarSystem;

    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) && calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
      return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
    }

    return null;
  };

  DateEnv.prototype.diffWholeMonths = function (m0, m1) {
    var calendarSystem = this.calendarSystem;

    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
      return calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0) + (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
    }

    return null;
  }; // Range / Duration


  DateEnv.prototype.greatestWholeUnit = function (m0, m1) {
    var n = this.diffWholeYears(m0, m1);

    if (n !== null) {
      return {
        unit: 'year',
        value: n
      };
    }

    n = this.diffWholeMonths(m0, m1);

    if (n !== null) {
      return {
        unit: 'month',
        value: n
      };
    }

    n = diffWholeWeeks(m0, m1);

    if (n !== null) {
      return {
        unit: 'week',
        value: n
      };
    }

    n = diffWholeDays(m0, m1);

    if (n !== null) {
      return {
        unit: 'day',
        value: n
      };
    }

    n = diffHours(m0, m1);

    if (isInt(n)) {
      return {
        unit: 'hour',
        value: n
      };
    }

    n = diffMinutes(m0, m1);

    if (isInt(n)) {
      return {
        unit: 'minute',
        value: n
      };
    }

    n = diffSeconds(m0, m1);

    if (isInt(n)) {
      return {
        unit: 'second',
        value: n
      };
    }

    return {
      unit: 'millisecond',
      value: m1.valueOf() - m0.valueOf()
    };
  };

  DateEnv.prototype.countDurationsBetween = function (m0, m1, d) {
    // TODO: can use greatestWholeUnit
    var diff;

    if (d.years) {
      diff = this.diffWholeYears(m0, m1);

      if (diff !== null) {
        return diff / asRoughYears(d);
      }
    }

    if (d.months) {
      diff = this.diffWholeMonths(m0, m1);

      if (diff !== null) {
        return diff / asRoughMonths(d);
      }
    }

    if (d.days) {
      diff = diffWholeDays(m0, m1);

      if (diff !== null) {
        return diff / asRoughDays(d);
      }
    }

    return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
  }; // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates


  DateEnv.prototype.startOf = function (m, unit) {
    if (unit === 'year') {
      return this.startOfYear(m);
    } else if (unit === 'month') {
      return this.startOfMonth(m);
    } else if (unit === 'week') {
      return this.startOfWeek(m);
    } else if (unit === 'day') {
      return startOfDay(m);
    } else if (unit === 'hour') {
      return startOfHour(m);
    } else if (unit === 'minute') {
      return startOfMinute(m);
    } else if (unit === 'second') {
      return startOfSecond(m);
    }
  };

  DateEnv.prototype.startOfYear = function (m) {
    return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m)]);
  };

  DateEnv.prototype.startOfMonth = function (m) {
    return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m), this.calendarSystem.getMarkerMonth(m)]);
  };

  DateEnv.prototype.startOfWeek = function (m) {
    return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m), this.calendarSystem.getMarkerMonth(m), m.getUTCDate() - (m.getUTCDay() - this.weekDow + 7) % 7]);
  }; // Week Number


  DateEnv.prototype.computeWeekNumber = function (marker) {
    if (this.weekNumberFunc) {
      return this.weekNumberFunc(this.toDate(marker));
    } else {
      return weekOfYear(marker, this.weekDow, this.weekDoy);
    }
  }; // TODO: choke on timeZoneName: long


  DateEnv.prototype.format = function (marker, formatter, dateOptions) {
    if (dateOptions === void 0) {
      dateOptions = {};
    }

    return formatter.format({
      marker: marker,
      timeZoneOffset: dateOptions.forcedTzo != null ? dateOptions.forcedTzo : this.offsetForMarker(marker)
    }, this);
  };

  DateEnv.prototype.formatRange = function (start, end, formatter, dateOptions) {
    if (dateOptions === void 0) {
      dateOptions = {};
    }

    if (dateOptions.isEndExclusive) {
      end = addMs(end, -1);
    }

    return formatter.formatRange({
      marker: start,
      timeZoneOffset: dateOptions.forcedStartTzo != null ? dateOptions.forcedStartTzo : this.offsetForMarker(start)
    }, {
      marker: end,
      timeZoneOffset: dateOptions.forcedEndTzo != null ? dateOptions.forcedEndTzo : this.offsetForMarker(end)
    }, this, dateOptions.defaultSeparator);
  };
  /*
  DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
  might as well use buildIsoString or some other util directly
  */


  DateEnv.prototype.formatIso = function (marker, extraOptions) {
    if (extraOptions === void 0) {
      extraOptions = {};
    }

    var timeZoneOffset = null;

    if (!extraOptions.omitTimeZoneOffset) {
      if (extraOptions.forcedTzo != null) {
        timeZoneOffset = extraOptions.forcedTzo;
      } else {
        timeZoneOffset = this.offsetForMarker(marker);
      }
    }

    return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
  }; // TimeZone


  DateEnv.prototype.timestampToMarker = function (ms) {
    if (this.timeZone === 'local') {
      return arrayToUtcDate(dateToLocalArray(new Date(ms)));
    } else if (this.timeZone === 'UTC' || !this.namedTimeZoneImpl) {
      return new Date(ms);
    } else {
      return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
    }
  };

  DateEnv.prototype.offsetForMarker = function (m) {
    if (this.timeZone === 'local') {
      return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset(); // convert "inverse" offset to "normal" offset
    } else if (this.timeZone === 'UTC') {
      return 0;
    } else if (this.namedTimeZoneImpl) {
      return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
    }

    return null;
  }; // Conversion


  DateEnv.prototype.toDate = function (m, forcedTzo) {
    if (this.timeZone === 'local') {
      return arrayToLocalDate(dateToUtcArray(m));
    } else if (this.timeZone === 'UTC') {
      return new Date(m.valueOf()); // make sure it's a copy
    } else if (!this.namedTimeZoneImpl) {
      return new Date(m.valueOf() - (forcedTzo || 0));
    } else {
      return new Date(m.valueOf() - this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 1000 * 60 // convert minutes -> ms
      );
    }
  };

  return DateEnv;
}();

var globalLocales = [];
var RAW_EN_LOCALE = {
  code: 'en',
  week: {
    dow: 0,
    doy: 4 // 4 days need to be within the year to be considered the first week

  },
  direction: 'ltr',
  buttonText: {
    prev: 'prev',
    next: 'next',
    prevYear: 'prev year',
    nextYear: 'next year',
    year: 'year',
    today: 'today',
    month: 'month',
    week: 'week',
    day: 'day',
    list: 'list'
  },
  weekText: 'W',
  allDayText: 'all-day',
  moreLinkText: 'more',
  noEventsText: 'No events to display'
};

function organizeRawLocales(explicitRawLocales) {
  var defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : 'en';
  var allRawLocales = globalLocales.concat(explicitRawLocales);
  var rawLocaleMap = {
    en: RAW_EN_LOCALE // necessary?

  };

  for (var _i = 0, allRawLocales_1 = allRawLocales; _i < allRawLocales_1.length; _i++) {
    var rawLocale = allRawLocales_1[_i];
    rawLocaleMap[rawLocale.code] = rawLocale;
  }

  return {
    map: rawLocaleMap,
    defaultCode: defaultCode
  };
}

function buildLocale(inputSingular, available) {
  if (_typeof(inputSingular) === 'object' && !Array.isArray(inputSingular)) {
    return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
  } else {
    return queryLocale(inputSingular, available);
  }
}

function queryLocale(codeArg, available) {
  var codes = [].concat(codeArg || []); // will convert to array

  var raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
  return parseLocale(codeArg, codes, raw);
}

function queryRawLocale(codes, available) {
  for (var i = 0; i < codes.length; i++) {
    var parts = codes[i].toLocaleLowerCase().split('-');

    for (var j = parts.length; j > 0; j--) {
      var simpleId = parts.slice(0, j).join('-');

      if (available[simpleId]) {
        return available[simpleId];
      }
    }
  }

  return null;
}

function parseLocale(codeArg, codes, raw) {
  var merged = mergeProps([RAW_EN_LOCALE, raw], ['buttonText']);
  delete merged.code; // don't want this part of the options

  var week = merged.week;
  delete merged.week;
  return {
    codeArg: codeArg,
    codes: codes,
    week: week,
    simpleNumberFormat: new Intl.NumberFormat(codeArg),
    options: merged
  };
}

function formatDate(dateInput, options) {
  if (options === void 0) {
    options = {};
  }

  var dateEnv = buildDateEnv(options);
  var formatter = createFormatter(options);
  var dateMeta = dateEnv.createMarkerMeta(dateInput);

  if (!dateMeta) {
    // TODO: warning?
    return '';
  }

  return dateEnv.format(dateMeta.marker, formatter, {
    forcedTzo: dateMeta.forcedTzo
  });
}

function formatRange(startInput, endInput, options // mixture of env and formatter settings
) {
  var dateEnv = buildDateEnv(_typeof(options) === 'object' && options ? options : {}); // pass in if non-null object

  var formatter = createFormatter(options);
  var startMeta = dateEnv.createMarkerMeta(startInput);
  var endMeta = dateEnv.createMarkerMeta(endInput);

  if (!startMeta || !endMeta) {
    // TODO: warning?
    return '';
  }

  return dateEnv.formatRange(startMeta.marker, endMeta.marker, formatter, {
    forcedStartTzo: startMeta.forcedTzo,
    forcedEndTzo: endMeta.forcedTzo,
    isEndExclusive: options.isEndExclusive,
    defaultSeparator: BASE_OPTION_DEFAULTS.defaultRangeSeparator
  });
} // TODO: more DRY and optimized


function buildDateEnv(settings) {
  var locale = buildLocale(settings.locale || 'en', organizeRawLocales([]).map); // TODO: don't hardcode 'en' everywhere

  return new DateEnv(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({
    timeZone: BASE_OPTION_DEFAULTS.timeZone,
    calendarSystem: 'gregory'
  }, settings), {
    locale: locale
  }));
}

var DEF_DEFAULTS = {
  startTime: '09:00',
  endTime: '17:00',
  daysOfWeek: [1, 2, 3, 4, 5],
  display: 'inverse-background',
  classNames: 'fc-non-business',
  groupId: '_businessHours' // so multiple defs get grouped

};
/*
TODO: pass around as EventDefHash!!!
*/

function parseBusinessHours(input, context) {
  return parseEvents(refineInputs(input), null, context);
}

function refineInputs(input) {
  var rawDefs;

  if (input === true) {
    rawDefs = [{}]; // will get DEF_DEFAULTS verbatim
  } else if (Array.isArray(input)) {
    // if specifying an array, every sub-definition NEEDS a day-of-week
    rawDefs = input.filter(function (rawDef) {
      return rawDef.daysOfWeek;
    });
  } else if (_typeof(input) === 'object' && input) {
    // non-null object
    rawDefs = [input];
  } else {
    // is probably false
    rawDefs = [];
  }

  rawDefs = rawDefs.map(function (rawDef) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, DEF_DEFAULTS), rawDef);
  });
  return rawDefs;
}

function pointInsideRect(point, rect) {
  return point.left >= rect.left && point.left < rect.right && point.top >= rect.top && point.top < rect.bottom;
} // Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false


function intersectRects(rect1, rect2) {
  var res = {
    left: Math.max(rect1.left, rect2.left),
    right: Math.min(rect1.right, rect2.right),
    top: Math.max(rect1.top, rect2.top),
    bottom: Math.min(rect1.bottom, rect2.bottom)
  };

  if (res.left < res.right && res.top < res.bottom) {
    return res;
  }

  return false;
}

function translateRect(rect, deltaX, deltaY) {
  return {
    left: rect.left + deltaX,
    right: rect.right + deltaX,
    top: rect.top + deltaY,
    bottom: rect.bottom + deltaY
  };
} // Returns a new point that will have been moved to reside within the given rectangle


function constrainPoint(point, rect) {
  return {
    left: Math.min(Math.max(point.left, rect.left), rect.right),
    top: Math.min(Math.max(point.top, rect.top), rect.bottom)
  };
} // Returns a point that is the center of the given rectangle


function getRectCenter(rect) {
  return {
    left: (rect.left + rect.right) / 2,
    top: (rect.top + rect.bottom) / 2
  };
} // Subtracts point2's coordinates from point1's coordinates, returning a delta


function diffPoints(point1, point2) {
  return {
    left: point1.left - point2.left,
    top: point1.top - point2.top
  };
}

var canVGrowWithinCell;

function getCanVGrowWithinCell() {
  if (canVGrowWithinCell == null) {
    canVGrowWithinCell = computeCanVGrowWithinCell();
  }

  return canVGrowWithinCell;
}

function computeCanVGrowWithinCell() {
  // for SSR, because this function is call immediately at top-level
  // TODO: just make this logic execute top-level, immediately, instead of doing lazily
  if (typeof document === 'undefined') {
    return true;
  }

  var el = document.createElement('div');
  el.style.position = 'absolute';
  el.style.top = '0px';
  el.style.left = '0px';
  el.innerHTML = '<table><tr><td><div></div></td></tr></table>';
  el.querySelector('table').style.height = '100px';
  el.querySelector('div').style.height = '100%';
  document.body.appendChild(el);
  var div = el.querySelector('div');
  var possible = div.offsetHeight > 0;
  document.body.removeChild(el);
  return possible;
}

var EMPTY_EVENT_STORE = createEmptyEventStore(); // for purecomponents. TODO: keep elsewhere

var Splitter =
/** @class */
function () {
  function Splitter() {
    this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
    this.splitDateSelection = memoize(this._splitDateSpan);
    this.splitEventStore = memoize(this._splitEventStore);
    this.splitIndividualUi = memoize(this._splitIndividualUi);
    this.splitEventDrag = memoize(this._splitInteraction);
    this.splitEventResize = memoize(this._splitInteraction);
    this.eventUiBuilders = {}; // TODO: typescript protection
  }

  Splitter.prototype.splitProps = function (props) {
    var _this = this;

    var keyInfos = this.getKeyInfo(props);
    var defKeys = this.getKeysForEventDefs(props.eventStore);
    var dateSelections = this.splitDateSelection(props.dateSelection);
    var individualUi = this.splitIndividualUi(props.eventUiBases, defKeys); // the individual *bases*

    var eventStores = this.splitEventStore(props.eventStore, defKeys);
    var eventDrags = this.splitEventDrag(props.eventDrag);
    var eventResizes = this.splitEventResize(props.eventResize);
    var splitProps = {};
    this.eventUiBuilders = mapHash(keyInfos, function (info, key) {
      return _this.eventUiBuilders[key] || memoize(buildEventUiForKey);
    });

    for (var key in keyInfos) {
      var keyInfo = keyInfos[key];
      var eventStore = eventStores[key] || EMPTY_EVENT_STORE;
      var buildEventUi = this.eventUiBuilders[key];
      splitProps[key] = {
        businessHours: keyInfo.businessHours || props.businessHours,
        dateSelection: dateSelections[key] || null,
        eventStore: eventStore,
        eventUiBases: buildEventUi(props.eventUiBases[''], keyInfo.ui, individualUi[key]),
        eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : '',
        eventDrag: eventDrags[key] || null,
        eventResize: eventResizes[key] || null
      };
    }

    return splitProps;
  };

  Splitter.prototype._splitDateSpan = function (dateSpan) {
    var dateSpans = {};

    if (dateSpan) {
      var keys = this.getKeysForDateSpan(dateSpan);

      for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        dateSpans[key] = dateSpan;
      }
    }

    return dateSpans;
  };

  Splitter.prototype._getKeysForEventDefs = function (eventStore) {
    var _this = this;

    return mapHash(eventStore.defs, function (eventDef) {
      return _this.getKeysForEventDef(eventDef);
    });
  };

  Splitter.prototype._splitEventStore = function (eventStore, defKeys) {
    var defs = eventStore.defs,
        instances = eventStore.instances;
    var splitStores = {};

    for (var defId in defs) {
      for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
        var key = _a[_i];

        if (!splitStores[key]) {
          splitStores[key] = createEmptyEventStore();
        }

        splitStores[key].defs[defId] = defs[defId];
      }
    }

    for (var instanceId in instances) {
      var instance = instances[instanceId];

      for (var _b = 0, _c = defKeys[instance.defId]; _b < _c.length; _b++) {
        var key = _c[_b];

        if (splitStores[key]) {
          // must have already been created
          splitStores[key].instances[instanceId] = instance;
        }
      }
    }

    return splitStores;
  };

  Splitter.prototype._splitIndividualUi = function (eventUiBases, defKeys) {
    var splitHashes = {};

    for (var defId in eventUiBases) {
      if (defId) {
        // not the '' key
        for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
          var key = _a[_i];

          if (!splitHashes[key]) {
            splitHashes[key] = {};
          }

          splitHashes[key][defId] = eventUiBases[defId];
        }
      }
    }

    return splitHashes;
  };

  Splitter.prototype._splitInteraction = function (interaction) {
    var splitStates = {};

    if (interaction) {
      var affectedStores_1 = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents) // can't use cached. might be events from other calendar
      ); // can't rely on defKeys because event data is mutated


      var mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);

      var mutatedStores_1 = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);

      var populate = function populate(key) {
        if (!splitStates[key]) {
          splitStates[key] = {
            affectedEvents: affectedStores_1[key] || EMPTY_EVENT_STORE,
            mutatedEvents: mutatedStores_1[key] || EMPTY_EVENT_STORE,
            isEvent: interaction.isEvent
          };
        }
      };

      for (var key in affectedStores_1) {
        populate(key);
      }

      for (var key in mutatedStores_1) {
        populate(key);
      }
    }

    return splitStates;
  };

  return Splitter;
}();

function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
  var baseParts = [];

  if (allUi) {
    baseParts.push(allUi);
  }

  if (eventUiForKey) {
    baseParts.push(eventUiForKey);
  }

  var stuff = {
    '': combineEventUis(baseParts)
  };

  if (individualUi) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(stuff, individualUi);
  }

  return stuff;
}

function getDateMeta(date, todayRange, nowDate, dateProfile) {
  return {
    dow: date.getUTCDay(),
    isDisabled: Boolean(dateProfile && !rangeContainsMarker(dateProfile.activeRange, date)),
    isOther: Boolean(dateProfile && !rangeContainsMarker(dateProfile.currentRange, date)),
    isToday: Boolean(todayRange && rangeContainsMarker(todayRange, date)),
    isPast: Boolean(nowDate ? date < nowDate : todayRange ? date < todayRange.start : false),
    isFuture: Boolean(nowDate ? date > nowDate : todayRange ? date >= todayRange.end : false)
  };
}

function getDayClassNames(meta, theme) {
  var classNames = ['fc-day', 'fc-day-' + DAY_IDS[meta.dow]];

  if (meta.isDisabled) {
    classNames.push('fc-day-disabled');
  } else {
    if (meta.isToday) {
      classNames.push('fc-day-today');
      classNames.push(theme.getClass('today'));
    }

    if (meta.isPast) {
      classNames.push('fc-day-past');
    }

    if (meta.isFuture) {
      classNames.push('fc-day-future');
    }

    if (meta.isOther) {
      classNames.push('fc-day-other');
    }
  }

  return classNames;
}

function getSlotClassNames(meta, theme) {
  var classNames = ['fc-slot', 'fc-slot-' + DAY_IDS[meta.dow]];

  if (meta.isDisabled) {
    classNames.push('fc-slot-disabled');
  } else {
    if (meta.isToday) {
      classNames.push('fc-slot-today');
      classNames.push(theme.getClass('today'));
    }

    if (meta.isPast) {
      classNames.push('fc-slot-past');
    }

    if (meta.isFuture) {
      classNames.push('fc-slot-future');
    }
  }

  return classNames;
}

function buildNavLinkData(date, type) {
  if (type === void 0) {
    type = 'day';
  }

  return JSON.stringify({
    date: formatDayString(date),
    type: type
  });
}

var _isRtlScrollbarOnLeft = null;

function getIsRtlScrollbarOnLeft() {
  if (_isRtlScrollbarOnLeft === null) {
    _isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
  }

  return _isRtlScrollbarOnLeft;
}

function computeIsRtlScrollbarOnLeft() {
  var outerEl = document.createElement('div');
  applyStyle(outerEl, {
    position: 'absolute',
    top: -1000,
    left: 0,
    border: 0,
    padding: 0,
    overflow: 'scroll',
    direction: 'rtl'
  });
  outerEl.innerHTML = '<div></div>';
  document.body.appendChild(outerEl);
  var innerEl = outerEl.firstChild;
  var res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
  removeElement(outerEl);
  return res;
}

var _scrollbarWidths;

function getScrollbarWidths() {
  if (!_scrollbarWidths) {
    _scrollbarWidths = computeScrollbarWidths();
  }

  return _scrollbarWidths;
}

function computeScrollbarWidths() {
  var el = document.createElement('div');
  el.style.overflow = 'scroll';
  document.body.appendChild(el);
  var res = computeScrollbarWidthsForEl(el);
  document.body.removeChild(el);
  return res;
} // WARNING: will include border


function computeScrollbarWidthsForEl(el) {
  return {
    x: el.offsetHeight - el.clientHeight,
    y: el.offsetWidth - el.clientWidth
  };
}

function computeEdges(el, getPadding) {
  if (getPadding === void 0) {
    getPadding = false;
  }

  var computedStyle = window.getComputedStyle(el);
  var borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
  var borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
  var borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
  var borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
  var badScrollbarWidths = computeScrollbarWidthsForEl(el); // includes border!

  var scrollbarLeftRight = badScrollbarWidths.y - borderLeft - borderRight;
  var scrollbarBottom = badScrollbarWidths.x - borderTop - borderBottom;
  var res = {
    borderLeft: borderLeft,
    borderRight: borderRight,
    borderTop: borderTop,
    borderBottom: borderBottom,
    scrollbarBottom: scrollbarBottom,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };

  if (getIsRtlScrollbarOnLeft() && computedStyle.direction === 'rtl') {
    // is the scrollbar on the left side?
    res.scrollbarLeft = scrollbarLeftRight;
  } else {
    res.scrollbarRight = scrollbarLeftRight;
  }

  if (getPadding) {
    res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
    res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
    res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
    res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
  }

  return res;
}

function computeInnerRect(el, goWithinPadding, doFromWindowViewport) {
  if (goWithinPadding === void 0) {
    goWithinPadding = false;
  }

  var outerRect = doFromWindowViewport ? el.getBoundingClientRect() : computeRect(el);
  var edges = computeEdges(el, goWithinPadding);
  var res = {
    left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
    right: outerRect.right - edges.borderRight - edges.scrollbarRight,
    top: outerRect.top + edges.borderTop,
    bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom
  };

  if (goWithinPadding) {
    res.left += edges.paddingLeft;
    res.right -= edges.paddingRight;
    res.top += edges.paddingTop;
    res.bottom -= edges.paddingBottom;
  }

  return res;
}

function computeRect(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.pageXOffset,
    top: rect.top + window.pageYOffset,
    right: rect.right + window.pageXOffset,
    bottom: rect.bottom + window.pageYOffset
  };
}

function computeHeightAndMargins(el) {
  return el.getBoundingClientRect().height + computeVMargins(el);
}

function computeVMargins(el) {
  var computed = window.getComputedStyle(el);
  return parseInt(computed.marginTop, 10) + parseInt(computed.marginBottom, 10);
} // does not return window


function getClippingParents(el) {
  var parents = [];

  while (el instanceof HTMLElement) {
    // will stop when gets to document or null
    var computedStyle = window.getComputedStyle(el);

    if (computedStyle.position === 'fixed') {
      break;
    }

    if (/(auto|scroll)/.test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
      parents.push(el);
    }

    el = el.parentNode;
  }

  return parents;
} // given a function that resolves a result asynchronously.
// the function can either call passed-in success and failure callbacks,
// or it can return a promise.
// if you need to pass additional params to func, bind them first.


function unpromisify(func, success, failure) {
  // guard against success/failure callbacks being called more than once
  // and guard against a promise AND callback being used together.
  var isResolved = false;

  var wrappedSuccess = function wrappedSuccess() {
    if (!isResolved) {
      isResolved = true;
      success.apply(this, arguments);
    }
  };

  var wrappedFailure = function wrappedFailure() {
    if (!isResolved) {
      isResolved = true;

      if (failure) {
        failure.apply(this, arguments);
      }
    }
  };

  var res = func(wrappedSuccess, wrappedFailure);

  if (res && typeof res.then === 'function') {
    res.then(wrappedSuccess, wrappedFailure);
  }
}

var Emitter =
/** @class */
function () {
  function Emitter() {
    this.handlers = {};
    this.thisContext = null;
  }

  Emitter.prototype.setThisContext = function (thisContext) {
    this.thisContext = thisContext;
  };

  Emitter.prototype.setOptions = function (options) {
    this.options = options;
  };

  Emitter.prototype.on = function (type, handler) {
    addToHash(this.handlers, type, handler);
  };

  Emitter.prototype.off = function (type, handler) {
    removeFromHash(this.handlers, type, handler);
  };

  Emitter.prototype.trigger = function (type) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    var attachedHandlers = this.handlers[type] || [];
    var optionHandler = this.options && this.options[type];
    var handlers = [].concat(optionHandler || [], attachedHandlers);

    for (var _a = 0, handlers_1 = handlers; _a < handlers_1.length; _a++) {
      var handler = handlers_1[_a];
      handler.apply(this.thisContext, args);
    }
  };

  Emitter.prototype.hasHandlers = function (type) {
    return this.handlers[type] && this.handlers[type].length || this.options && this.options[type];
  };

  return Emitter;
}();

function addToHash(hash, type, handler) {
  (hash[type] || (hash[type] = [])).push(handler);
}

function removeFromHash(hash, type, handler) {
  if (handler) {
    if (hash[type]) {
      hash[type] = hash[type].filter(function (func) {
        return func !== handler;
      });
    }
  } else {
    delete hash[type]; // remove all handler funcs for this type
  }
}
/*
Records offset information for a set of elements, relative to an origin element.
Can record the left/right OR the top/bottom OR both.
Provides methods for querying the cache by position.
*/


var PositionCache =
/** @class */
function () {
  function PositionCache(originEl, els, isHorizontal, isVertical) {
    this.els = els;
    var originClientRect = this.originClientRect = originEl.getBoundingClientRect(); // relative to viewport top-left

    if (isHorizontal) {
      this.buildElHorizontals(originClientRect.left);
    }

    if (isVertical) {
      this.buildElVerticals(originClientRect.top);
    }
  } // Populates the left/right internal coordinate arrays


  PositionCache.prototype.buildElHorizontals = function (originClientLeft) {
    var lefts = [];
    var rights = [];

    for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
      var el = _a[_i];
      var rect = el.getBoundingClientRect();
      lefts.push(rect.left - originClientLeft);
      rights.push(rect.right - originClientLeft);
    }

    this.lefts = lefts;
    this.rights = rights;
  }; // Populates the top/bottom internal coordinate arrays


  PositionCache.prototype.buildElVerticals = function (originClientTop) {
    var tops = [];
    var bottoms = [];

    for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
      var el = _a[_i];
      var rect = el.getBoundingClientRect();
      tops.push(rect.top - originClientTop);
      bottoms.push(rect.bottom - originClientTop);
    }

    this.tops = tops;
    this.bottoms = bottoms;
  }; // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
  // If no intersection is made, returns undefined.


  PositionCache.prototype.leftToIndex = function (leftPosition) {
    var lefts = this.lefts;
    var rights = this.rights;
    var len = lefts.length;
    var i;

    for (i = 0; i < len; i++) {
      if (leftPosition >= lefts[i] && leftPosition < rights[i]) {
        return i;
      }
    }
  }; // Given a top offset (from document top), returns the index of the el that it vertically intersects.
  // If no intersection is made, returns undefined.


  PositionCache.prototype.topToIndex = function (topPosition) {
    var tops = this.tops;
    var bottoms = this.bottoms;
    var len = tops.length;
    var i;

    for (i = 0; i < len; i++) {
      if (topPosition >= tops[i] && topPosition < bottoms[i]) {
        return i;
      }
    }
  }; // Gets the width of the element at the given index


  PositionCache.prototype.getWidth = function (leftIndex) {
    return this.rights[leftIndex] - this.lefts[leftIndex];
  }; // Gets the height of the element at the given index


  PositionCache.prototype.getHeight = function (topIndex) {
    return this.bottoms[topIndex] - this.tops[topIndex];
  };

  return PositionCache;
}();
/*
An object for getting/setting scroll-related information for an element.
Internally, this is done very differently for window versus DOM element,
so this object serves as a common interface.
*/


var ScrollController =
/** @class */
function () {
  function ScrollController() {}

  ScrollController.prototype.getMaxScrollTop = function () {
    return this.getScrollHeight() - this.getClientHeight();
  };

  ScrollController.prototype.getMaxScrollLeft = function () {
    return this.getScrollWidth() - this.getClientWidth();
  };

  ScrollController.prototype.canScrollVertically = function () {
    return this.getMaxScrollTop() > 0;
  };

  ScrollController.prototype.canScrollHorizontally = function () {
    return this.getMaxScrollLeft() > 0;
  };

  ScrollController.prototype.canScrollUp = function () {
    return this.getScrollTop() > 0;
  };

  ScrollController.prototype.canScrollDown = function () {
    return this.getScrollTop() < this.getMaxScrollTop();
  };

  ScrollController.prototype.canScrollLeft = function () {
    return this.getScrollLeft() > 0;
  };

  ScrollController.prototype.canScrollRight = function () {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  };

  return ScrollController;
}();

var ElementScrollController =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(ElementScrollController, _super);

  function ElementScrollController(el) {
    var _this = _super.call(this) || this;

    _this.el = el;
    return _this;
  }

  ElementScrollController.prototype.getScrollTop = function () {
    return this.el.scrollTop;
  };

  ElementScrollController.prototype.getScrollLeft = function () {
    return this.el.scrollLeft;
  };

  ElementScrollController.prototype.setScrollTop = function (top) {
    this.el.scrollTop = top;
  };

  ElementScrollController.prototype.setScrollLeft = function (left) {
    this.el.scrollLeft = left;
  };

  ElementScrollController.prototype.getScrollWidth = function () {
    return this.el.scrollWidth;
  };

  ElementScrollController.prototype.getScrollHeight = function () {
    return this.el.scrollHeight;
  };

  ElementScrollController.prototype.getClientHeight = function () {
    return this.el.clientHeight;
  };

  ElementScrollController.prototype.getClientWidth = function () {
    return this.el.clientWidth;
  };

  return ElementScrollController;
}(ScrollController);

var WindowScrollController =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WindowScrollController, _super);

  function WindowScrollController() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  WindowScrollController.prototype.getScrollTop = function () {
    return window.pageYOffset;
  };

  WindowScrollController.prototype.getScrollLeft = function () {
    return window.pageXOffset;
  };

  WindowScrollController.prototype.setScrollTop = function (n) {
    window.scroll(window.pageXOffset, n);
  };

  WindowScrollController.prototype.setScrollLeft = function (n) {
    window.scroll(n, window.pageYOffset);
  };

  WindowScrollController.prototype.getScrollWidth = function () {
    return document.documentElement.scrollWidth;
  };

  WindowScrollController.prototype.getScrollHeight = function () {
    return document.documentElement.scrollHeight;
  };

  WindowScrollController.prototype.getClientHeight = function () {
    return document.documentElement.clientHeight;
  };

  WindowScrollController.prototype.getClientWidth = function () {
    return document.documentElement.clientWidth;
  };

  return WindowScrollController;
}(ScrollController);

var Theme =
/** @class */
function () {
  function Theme(calendarOptions) {
    if (this.iconOverrideOption) {
      this.setIconOverride(calendarOptions[this.iconOverrideOption]);
    }
  }

  Theme.prototype.setIconOverride = function (iconOverrideHash) {
    var iconClassesCopy;
    var buttonName;

    if (_typeof(iconOverrideHash) === 'object' && iconOverrideHash) {
      // non-null object
      iconClassesCopy = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.iconClasses);

      for (buttonName in iconOverrideHash) {
        iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
      }

      this.iconClasses = iconClassesCopy;
    } else if (iconOverrideHash === false) {
      this.iconClasses = {};
    }
  };

  Theme.prototype.applyIconOverridePrefix = function (className) {
    var prefix = this.iconOverridePrefix;

    if (prefix && className.indexOf(prefix) !== 0) {
      // if not already present
      className = prefix + className;
    }

    return className;
  };

  Theme.prototype.getClass = function (key) {
    return this.classes[key] || '';
  };

  Theme.prototype.getIconClass = function (buttonName, isRtl) {
    var className;

    if (isRtl && this.rtlIconClasses) {
      className = this.rtlIconClasses[buttonName] || this.iconClasses[buttonName];
    } else {
      className = this.iconClasses[buttonName];
    }

    if (className) {
      return this.baseIconClass + ' ' + className;
    }

    return '';
  };

  Theme.prototype.getCustomButtonIconClass = function (customButtonProps) {
    var className;

    if (this.iconOverrideCustomButtonOption) {
      className = customButtonProps[this.iconOverrideCustomButtonOption];

      if (className) {
        return this.baseIconClass + ' ' + this.applyIconOverridePrefix(className);
      }
    }

    return '';
  };

  return Theme;
}();

Theme.prototype.classes = {};
Theme.prototype.iconClasses = {};
Theme.prototype.baseIconClass = '';
Theme.prototype.iconOverridePrefix = '';

var ScrollResponder =
/** @class */
function () {
  function ScrollResponder(execFunc, emitter, scrollTime) {
    var _this = this;

    this.execFunc = execFunc;
    this.emitter = emitter;
    this.scrollTime = scrollTime;

    this.handleScrollRequest = function (request) {
      _this.queuedRequest = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, _this.queuedRequest || {}, request);

      _this.drain();
    };

    emitter.on('_scrollRequest', this.handleScrollRequest);
    this.fireInitialScroll();
  }

  ScrollResponder.prototype.detach = function () {
    this.emitter.off('_scrollRequest', this.handleScrollRequest);
  };

  ScrollResponder.prototype.update = function (isDatesNew) {
    if (isDatesNew) {
      this.fireInitialScroll(); // will drain
    } else {
      this.drain();
    }
  };

  ScrollResponder.prototype.fireInitialScroll = function () {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  };

  ScrollResponder.prototype.drain = function () {
    if (this.queuedRequest && this.execFunc(this.queuedRequest)) {
      this.queuedRequest = null;
    }
  };

  return ScrollResponder;
}();

var ViewContextType = Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createContext"])({}); // for Components

function buildViewContext(viewSpec, viewApi, viewOptions, dateProfileGenerator, dateEnv, theme, pluginHooks, dispatch, getCurrentData, emitter, calendarApi, registerInteractiveComponent, unregisterInteractiveComponent) {
  return {
    dateEnv: dateEnv,
    options: viewOptions,
    pluginHooks: pluginHooks,
    emitter: emitter,
    dispatch: dispatch,
    getCurrentData: getCurrentData,
    calendarApi: calendarApi,
    viewSpec: viewSpec,
    viewApi: viewApi,
    dateProfileGenerator: dateProfileGenerator,
    theme: theme,
    isRtl: viewOptions.direction === 'rtl',
    addResizeHandler: function addResizeHandler(handler) {
      emitter.on('_resize', handler);
    },
    removeResizeHandler: function removeResizeHandler(handler) {
      emitter.off('_resize', handler);
    },
    createScrollResponder: function createScrollResponder(execFunc) {
      return new ScrollResponder(execFunc, emitter, createDuration(viewOptions.scrollTime));
    },
    registerInteractiveComponent: registerInteractiveComponent,
    unregisterInteractiveComponent: unregisterInteractiveComponent
  };
}

var PureComponent =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(PureComponent, _super);

  function PureComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PureComponent.prototype.shouldComponentUpdate = function (nextProps, nextState) {
    if (this.debug) {
      console.log(getUnequalProps(nextProps, this.props), getUnequalProps(nextState, this.state));
    }

    return !compareObjs(this.props, nextProps, this.propEquality) || !compareObjs(this.state, nextState, this.stateEquality);
  };

  PureComponent.addPropsEquality = addPropsEquality;
  PureComponent.addStateEquality = addStateEquality;
  PureComponent.contextType = ViewContextType;
  return PureComponent;
}(_vdom__WEBPACK_IMPORTED_MODULE_2__["Component"]);

PureComponent.prototype.propEquality = {};
PureComponent.prototype.stateEquality = {};

var BaseComponent =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BaseComponent, _super);

  function BaseComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BaseComponent.contextType = ViewContextType;
  return BaseComponent;
}(PureComponent);

function addPropsEquality(propEquality) {
  var hash = Object.create(this.prototype.propEquality);

  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(hash, propEquality);

  this.prototype.propEquality = hash;
}

function addStateEquality(stateEquality) {
  var hash = Object.create(this.prototype.stateEquality);

  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(hash, stateEquality);

  this.prototype.stateEquality = hash;
} // use other one


function setRef(ref, current) {
  if (typeof ref === 'function') {
    ref(current);
  } else if (ref) {
    // see https://github.com/facebook/react/issues/13029
    ref.current = current;
  }
}

function reduceEventStore(eventStore, action, eventSources, dateProfile, context) {
  switch (action.type) {
    case 'RECEIVE_EVENTS':
      // raw
      return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, context);

    case 'ADD_EVENTS':
      // already parsed, but not expanded
      return addEvent(eventStore, action.eventStore, // new ones
      dateProfile ? dateProfile.activeRange : null, context);

    case 'MERGE_EVENTS':
      // already parsed and expanded
      return mergeEventStores(eventStore, action.eventStore);

    case 'PREV': // TODO: how do we track all actions that affect dateProfile :(

    case 'NEXT':
    case 'CHANGE_DATE':
    case 'CHANGE_VIEW_TYPE':
      if (dateProfile) {
        return expandRecurring(eventStore, dateProfile.activeRange, context);
      } else {
        return eventStore;
      }

    case 'REMOVE_EVENTS':
      return excludeSubEventStore(eventStore, action.eventStore);

    case 'REMOVE_EVENT_SOURCE':
      return excludeEventsBySourceId(eventStore, action.sourceId);

    case 'REMOVE_ALL_EVENT_SOURCES':
      return filterEventStoreDefs(eventStore, function (eventDef) {
        return !eventDef.sourceId; // only keep events with no source id
      });

    case 'REMOVE_ALL_EVENTS':
      return createEmptyEventStore();

    default:
      return eventStore;
  }
}

function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, context) {
  if (eventSource && // not already removed
  fetchId === eventSource.latestFetchId // TODO: wish this logic was always in event-sources
  ) {
      var subset = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context);

      if (fetchRange) {
        subset = expandRecurring(subset, fetchRange, context);
      }

      return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
    }

  return eventStore;
}

function transformRawEvents(rawEvents, eventSource, context) {
  var calEachTransform = context.options.eventDataTransform;
  var sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;

  if (sourceEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
  }

  if (calEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
  }

  return rawEvents;
}

function transformEachRawEvent(rawEvents, func) {
  var refinedEvents;

  if (!func) {
    refinedEvents = rawEvents;
  } else {
    refinedEvents = [];

    for (var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
      var rawEvent = rawEvents_1[_i];
      var refinedEvent = func(rawEvent);

      if (refinedEvent) {
        refinedEvents.push(refinedEvent);
      } else if (refinedEvent == null) {
        refinedEvents.push(rawEvent);
      } // if a different falsy value, do nothing

    }
  }

  return refinedEvents;
}

function addEvent(eventStore, subset, expandRange, context) {
  if (expandRange) {
    subset = expandRecurring(subset, expandRange, context);
  }

  return mergeEventStores(eventStore, subset);
}

function rezoneEventStoreDates(eventStore, oldDateEnv, newDateEnv) {
  var defs = eventStore.defs;
  var instances = mapHash(eventStore.instances, function (instance) {
    var def = defs[instance.defId];

    if (def.allDay || def.recurringDef) {
      return instance; // isn't dependent on timezone
    } else {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, instance), {
        range: {
          start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
          end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo))
        },
        forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo,
        forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo
      });
    }
  });
  return {
    defs: defs,
    instances: instances
  };
}

function excludeEventsBySourceId(eventStore, sourceId) {
  return filterEventStoreDefs(eventStore, function (eventDef) {
    return eventDef.sourceId !== sourceId;
  });
} // QUESTION: why not just return instances? do a general object-property-exclusion util


function excludeInstances(eventStore, removals) {
  return {
    defs: eventStore.defs,
    instances: filterHash(eventStore.instances, function (instance) {
      return !removals[instance.instanceId];
    })
  };
} // high-level segmenting-aware tester functions
// ------------------------------------------------------------------------------------------------------------------------


function isInteractionValid(interaction, context) {
  return isNewPropsValid({
    eventDrag: interaction
  }, context); // HACK: the eventDrag props is used for ALL interactions
}

function isDateSelectionValid(dateSelection, context) {
  return isNewPropsValid({
    dateSelection: dateSelection
  }, context);
}

function isNewPropsValid(newProps, context) {
  var calendarState = context.getCurrentData();

  var props = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({
    businessHours: calendarState.businessHours,
    dateSelection: '',
    eventStore: calendarState.eventStore,
    eventUiBases: calendarState.eventUiBases,
    eventSelection: '',
    eventDrag: null,
    eventResize: null
  }, newProps);

  return (context.pluginHooks.isPropsValid || isPropsValid)(props, context);
}

function isPropsValid(state, context, dateSpanMeta, filterConfig) {
  if (dateSpanMeta === void 0) {
    dateSpanMeta = {};
  }

  if (state.eventDrag && !isInteractionPropsValid(state, context, dateSpanMeta, filterConfig)) {
    return false;
  }

  if (state.dateSelection && !isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig)) {
    return false;
  }

  return true;
} // Moving Event Validation
// ------------------------------------------------------------------------------------------------------------------------


function isInteractionPropsValid(state, context, dateSpanMeta, filterConfig) {
  var currentState = context.getCurrentData();
  var interaction = state.eventDrag; // HACK: the eventDrag props is used for ALL interactions

  var subjectEventStore = interaction.mutatedEvents;
  var subjectDefs = subjectEventStore.defs;
  var subjectInstances = subjectEventStore.instances;
  var subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ? state.eventUiBases : {
    '': currentState.selectionConfig
  } // if not a real event, validate as a selection
  );

  if (filterConfig) {
    subjectConfigs = mapHash(subjectConfigs, filterConfig);
  }

  var otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances); // exclude the subject events. TODO: exclude defs too?

  var otherDefs = otherEventStore.defs;
  var otherInstances = otherEventStore.instances;
  var otherConfigs = compileEventUis(otherDefs, state.eventUiBases);

  for (var subjectInstanceId in subjectInstances) {
    var subjectInstance = subjectInstances[subjectInstanceId];
    var subjectRange = subjectInstance.range;
    var subjectConfig = subjectConfigs[subjectInstance.defId];
    var subjectDef = subjectDefs[subjectInstance.defId]; // constraint

    if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, context)) {
      return false;
    } // overlap


    var eventOverlap = context.options.eventOverlap;
    var eventOverlapFunc = typeof eventOverlap === 'function' ? eventOverlap : null;

    for (var otherInstanceId in otherInstances) {
      var otherInstance = otherInstances[otherInstanceId]; // intersect! evaluate

      if (rangesIntersect(subjectRange, otherInstance.range)) {
        var otherOverlap = otherConfigs[otherInstance.defId].overlap; // consider the other event's overlap. only do this if the subject event is a "real" event

        if (otherOverlap === false && interaction.isEvent) {
          return false;
        }

        if (subjectConfig.overlap === false) {
          return false;
        }

        if (eventOverlapFunc && !eventOverlapFunc(new EventApi(context, otherDefs[otherInstance.defId], otherInstance), // still event
        new EventApi(context, subjectDef, subjectInstance) // moving event
        )) {
          return false;
        }
      }
    } // allow (a function)


    var calendarEventStore = currentState.eventStore; // need global-to-calendar, not local to component (splittable)state

    for (var _i = 0, _a = subjectConfig.allows; _i < _a.length; _i++) {
      var subjectAllow = _a[_i];

      var subjectDateSpan = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, dateSpanMeta), {
        range: subjectInstance.range,
        allDay: subjectDef.allDay
      });

      var origDef = calendarEventStore.defs[subjectDef.defId];
      var origInstance = calendarEventStore.instances[subjectInstanceId];
      var eventApi = void 0;

      if (origDef) {
        // was previously in the calendar
        eventApi = new EventApi(context, origDef, origInstance);
      } else {
        // was an external event
        eventApi = new EventApi(context, subjectDef); // no instance, because had no dates
      }

      if (!subjectAllow(buildDateSpanApiWithContext(subjectDateSpan, context), eventApi)) {
        return false;
      }
    }
  }

  return true;
} // Date Selection Validation
// ------------------------------------------------------------------------------------------------------------------------


function isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig) {
  var relevantEventStore = state.eventStore;
  var relevantDefs = relevantEventStore.defs;
  var relevantInstances = relevantEventStore.instances;
  var selection = state.dateSelection;
  var selectionRange = selection.range;
  var selectionConfig = context.getCurrentData().selectionConfig;

  if (filterConfig) {
    selectionConfig = filterConfig(selectionConfig);
  } // constraint


  if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, context)) {
    return false;
  } // overlap


  var selectOverlap = context.options.selectOverlap;
  var selectOverlapFunc = typeof selectOverlap === 'function' ? selectOverlap : null;

  for (var relevantInstanceId in relevantInstances) {
    var relevantInstance = relevantInstances[relevantInstanceId]; // intersect! evaluate

    if (rangesIntersect(selectionRange, relevantInstance.range)) {
      if (selectionConfig.overlap === false) {
        return false;
      }

      if (selectOverlapFunc && !selectOverlapFunc(new EventApi(context, relevantDefs[relevantInstance.defId], relevantInstance), null)) {
        return false;
      }
    }
  } // allow (a function)


  for (var _i = 0, _a = selectionConfig.allows; _i < _a.length; _i++) {
    var selectionAllow = _a[_i];

    var fullDateSpan = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, dateSpanMeta), selection);

    if (!selectionAllow(buildDateSpanApiWithContext(fullDateSpan, context), null)) {
      return false;
    }
  }

  return true;
} // Constraint Utils
// ------------------------------------------------------------------------------------------------------------------------


function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
  for (var _i = 0, constraints_1 = constraints; _i < constraints_1.length; _i++) {
    var constraint = constraints_1[_i];

    if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context), subjectRange)) {
      return false;
    }
  }

  return true;
}

function constraintToRanges(constraint, subjectRange, // for expanding a recurring constraint, or expanding business hours
otherEventStore, // for if constraint is an even group ID
businessHoursUnexpanded, // for if constraint is 'businessHours'
context // for expanding businesshours
) {
  if (constraint === 'businessHours') {
    return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, context));
  } else if (typeof constraint === 'string') {
    // an group ID
    return eventStoreToRanges(filterEventStoreDefs(otherEventStore, function (eventDef) {
      return eventDef.groupId === constraint;
    }));
  } else if (_typeof(constraint) === 'object' && constraint) {
    // non-null object
    return eventStoreToRanges(expandRecurring(constraint, subjectRange, context));
  }

  return []; // if it's false
} // TODO: move to event-store file?


function eventStoreToRanges(eventStore) {
  var instances = eventStore.instances;
  var ranges = [];

  for (var instanceId in instances) {
    ranges.push(instances[instanceId].range);
  }

  return ranges;
} // TODO: move to geom file?


function anyRangesContainRange(outerRanges, innerRange) {
  for (var _i = 0, outerRanges_1 = outerRanges; _i < outerRanges_1.length; _i++) {
    var outerRange = outerRanges_1[_i];

    if (rangeContainsRange(outerRange, innerRange)) {
      return true;
    }
  }

  return false;
}
/*
an INTERACTABLE date component

PURPOSES:
- hook up to fg, fill, and mirror renderers
- interface for dragging and hits
*/


var DateComponent =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(DateComponent, _super);

  function DateComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.uid = guid();
    return _this;
  } // Hit System
  // -----------------------------------------------------------------------------------------------------------------


  DateComponent.prototype.prepareHits = function () {};

  DateComponent.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
    return null; // this should be abstract
  }; // Validation
  // -----------------------------------------------------------------------------------------------------------------


  DateComponent.prototype.isInteractionValid = function (interaction) {
    var dateProfile = this.props.dateProfile; // HACK

    var instances = interaction.mutatedEvents.instances;

    if (dateProfile) {
      // HACK for MorePopover
      for (var instanceId in instances) {
        if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
          return false;
        }
      }
    }

    return isInteractionValid(interaction, this.context);
  };

  DateComponent.prototype.isDateSelectionValid = function (selection) {
    var dateProfile = this.props.dateProfile; // HACK

    if (dateProfile && // HACK for MorePopover
    !rangeContainsRange(dateProfile.validRange, selection.range)) {
      return false;
    }

    return isDateSelectionValid(selection, this.context);
  }; // Pointer Interaction Utils
  // -----------------------------------------------------------------------------------------------------------------


  DateComponent.prototype.isValidSegDownEl = function (el) {
    return !this.props.eventDrag && // HACK
    !this.props.eventResize && // HACK
    !elementClosest(el, '.fc-event-mirror') && (this.isPopover() || !this.isInPopover(el)); // ^above line ensures we don't detect a seg interaction within a nested component.
    // it's a HACK because it only supports a popover as the nested component.
  };

  DateComponent.prototype.isValidDateDownEl = function (el) {
    return !elementClosest(el, '.fc-event:not(.fc-bg-event)') && !elementClosest(el, '.fc-daygrid-more-link') && // a "more.." link
    !elementClosest(el, 'a[data-navlink]') && // a clickable nav link
    !this.isInPopover(el);
  };

  DateComponent.prototype.isPopover = function () {
    return false;
  };

  DateComponent.prototype.isInPopover = function (el) {
    return Boolean(elementClosest(el, '.fc-popover'));
  };

  return DateComponent;
}(BaseComponent); // TODO: easier way to add new hooks? need to update a million things


function createPlugin(input) {
  return {
    id: guid(),
    deps: input.deps || [],
    reducers: input.reducers || [],
    contextInit: [].concat(input.contextInit || []),
    eventRefiners: input.eventRefiners || {},
    eventDefMemberAdders: input.eventDefMemberAdders || [],
    eventSourceRefiners: input.eventSourceRefiners || {},
    isDraggableTransformers: input.isDraggableTransformers || [],
    eventDragMutationMassagers: input.eventDragMutationMassagers || [],
    eventDefMutationAppliers: input.eventDefMutationAppliers || [],
    dateSelectionTransformers: input.dateSelectionTransformers || [],
    datePointTransforms: input.datePointTransforms || [],
    dateSpanTransforms: input.dateSpanTransforms || [],
    views: input.views || {},
    viewPropsTransformers: input.viewPropsTransformers || [],
    isPropsValid: input.isPropsValid || null,
    externalDefTransforms: input.externalDefTransforms || [],
    eventResizeJoinTransforms: input.eventResizeJoinTransforms || [],
    viewContainerAppends: input.viewContainerAppends || [],
    eventDropTransformers: input.eventDropTransformers || [],
    componentInteractions: input.componentInteractions || [],
    calendarInteractions: input.calendarInteractions || [],
    themeClasses: input.themeClasses || {},
    eventSourceDefs: input.eventSourceDefs || [],
    cmdFormatter: input.cmdFormatter,
    recurringTypes: input.recurringTypes || [],
    namedTimeZonedImpl: input.namedTimeZonedImpl,
    initialView: input.initialView || '',
    elementDraggingImpl: input.elementDraggingImpl,
    optionChangeHandlers: input.optionChangeHandlers || {},
    scrollGridImpl: input.scrollGridImpl || null,
    contentTypeHandlers: input.contentTypeHandlers || {},
    listenerRefiners: input.listenerRefiners || {},
    optionRefiners: input.optionRefiners || {},
    propSetHandlers: input.propSetHandlers || {}
  };
}

function buildPluginHooks(pluginDefs, globalDefs) {
  var isAdded = {};
  var hooks = {
    reducers: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    eventResizeJoinTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: '',
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    contentTypeHandlers: {},
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };

  function addDefs(defs) {
    for (var _i = 0, defs_1 = defs; _i < defs_1.length; _i++) {
      var def = defs_1[_i];

      if (!isAdded[def.id]) {
        isAdded[def.id] = true;
        addDefs(def.deps);
        hooks = combineHooks(hooks, def);
      }
    }
  }

  if (pluginDefs) {
    addDefs(pluginDefs);
  }

  addDefs(globalDefs);
  return hooks;
}

function buildBuildPluginHooks() {
  var currentOverrideDefs = [];
  var currentGlobalDefs = [];
  var currentHooks;
  return function (overrideDefs, globalDefs) {
    if (!currentHooks || !isArraysEqual(overrideDefs, currentOverrideDefs) || !isArraysEqual(globalDefs, currentGlobalDefs)) {
      currentHooks = buildPluginHooks(overrideDefs, globalDefs);
    }

    currentOverrideDefs = overrideDefs;
    currentGlobalDefs = globalDefs;
    return currentHooks;
  };
}

function combineHooks(hooks0, hooks1) {
  return {
    reducers: hooks0.reducers.concat(hooks1.reducers),
    contextInit: hooks0.contextInit.concat(hooks1.contextInit),
    eventRefiners: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, hooks0.eventRefiners), hooks1.eventRefiners),
    eventDefMemberAdders: hooks0.eventDefMemberAdders.concat(hooks1.eventDefMemberAdders),
    eventSourceRefiners: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, hooks0.eventSourceRefiners), hooks1.eventSourceRefiners),
    isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
    eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
    eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
    dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
    datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
    dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
    views: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, hooks0.views), hooks1.views),
    viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
    isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
    externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
    eventResizeJoinTransforms: hooks0.eventResizeJoinTransforms.concat(hooks1.eventResizeJoinTransforms),
    viewContainerAppends: hooks0.viewContainerAppends.concat(hooks1.viewContainerAppends),
    eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
    calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
    componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
    themeClasses: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, hooks0.themeClasses), hooks1.themeClasses),
    eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
    cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
    recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
    namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
    initialView: hooks0.initialView || hooks1.initialView,
    elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
    optionChangeHandlers: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, hooks0.optionChangeHandlers), hooks1.optionChangeHandlers),
    scrollGridImpl: hooks1.scrollGridImpl || hooks0.scrollGridImpl,
    contentTypeHandlers: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, hooks0.contentTypeHandlers), hooks1.contentTypeHandlers),
    listenerRefiners: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, hooks0.listenerRefiners), hooks1.listenerRefiners),
    optionRefiners: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, hooks0.optionRefiners), hooks1.optionRefiners),
    propSetHandlers: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, hooks0.propSetHandlers), hooks1.propSetHandlers)
  };
}

var StandardTheme =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(StandardTheme, _super);

  function StandardTheme() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return StandardTheme;
}(Theme);

StandardTheme.prototype.classes = {
  root: 'fc-theme-standard',
  tableCellShaded: 'fc-cell-shaded',
  buttonGroup: 'fc-button-group',
  button: 'fc-button fc-button-primary',
  buttonActive: 'fc-button-active'
};
StandardTheme.prototype.baseIconClass = 'fc-icon';
StandardTheme.prototype.iconClasses = {
  close: 'fc-icon-x',
  prev: 'fc-icon-chevron-left',
  next: 'fc-icon-chevron-right',
  prevYear: 'fc-icon-chevrons-left',
  nextYear: 'fc-icon-chevrons-right'
};
StandardTheme.prototype.rtlIconClasses = {
  prev: 'fc-icon-chevron-right',
  next: 'fc-icon-chevron-left',
  prevYear: 'fc-icon-chevrons-right',
  nextYear: 'fc-icon-chevrons-left'
};
StandardTheme.prototype.iconOverrideOption = 'buttonIcons'; // TODO: make TS-friendly

StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';

function compileViewDefs(defaultConfigs, overrideConfigs) {
  var hash = {};
  var viewType;

  for (viewType in defaultConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }

  for (viewType in overrideConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }

  return hash;
}

function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  if (hash[viewType]) {
    return hash[viewType];
  }

  var viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);

  if (viewDef) {
    hash[viewType] = viewDef;
  }

  return viewDef;
}

function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  var defaultConfig = defaultConfigs[viewType];
  var overrideConfig = overrideConfigs[viewType];

  var queryProp = function queryProp(name) {
    return defaultConfig && defaultConfig[name] !== null ? defaultConfig[name] : overrideConfig && overrideConfig[name] !== null ? overrideConfig[name] : null;
  };

  var theComponent = queryProp('component');
  var superType = queryProp('superType');
  var superDef = null;

  if (superType) {
    if (superType === viewType) {
      throw new Error('Can\'t have a custom view type that references itself');
    }

    superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
  }

  if (!theComponent && superDef) {
    theComponent = superDef.component;
  }

  if (!theComponent) {
    return null; // don't throw a warning, might be settings for a single-unit view
  }

  return {
    type: viewType,
    component: theComponent,
    defaults: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, superDef ? superDef.defaults : {}), defaultConfig ? defaultConfig.rawOptions : {}),
    overrides: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, superDef ? superDef.overrides : {}), overrideConfig ? overrideConfig.rawOptions : {})
  };
} // NOTE: in JSX, you should always use this class with <HookProps> arg. otherwise, will default to any???


var RenderHook =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(RenderHook, _super);

  function RenderHook() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.rootElRef = Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createRef"])();

    _this.handleRootEl = function (el) {
      setRef(_this.rootElRef, el);

      if (_this.props.elRef) {
        setRef(_this.props.elRef, el);
      }
    };

    return _this;
  }

  RenderHook.prototype.render = function () {
    var _this = this;

    var props = this.props;
    var hookProps = props.hookProps;
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(MountHook, {
      hookProps: hookProps,
      didMount: props.didMount,
      willUnmount: props.willUnmount,
      elRef: this.handleRootEl
    }, function (rootElRef) {
      return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ContentHook, {
        hookProps: hookProps,
        content: props.content,
        defaultContent: props.defaultContent,
        backupElRef: _this.rootElRef
      }, function (innerElRef, innerContent) {
        return props.children(rootElRef, normalizeClassNames(props.classNames, hookProps), innerElRef, innerContent);
      });
    });
  };

  return RenderHook;
}(BaseComponent); // for forcing rerender of components that use the ContentHook


var CustomContentRenderContext = Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createContext"])(0);

function ContentHook(props) {
  return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(CustomContentRenderContext.Consumer, null, function (renderId) {
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ContentHookInner, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({
      renderId: renderId
    }, props));
  });
}

var ContentHookInner =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(ContentHookInner, _super);

  function ContentHookInner() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.innerElRef = Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
    return _this;
  }

  ContentHookInner.prototype.render = function () {
    return this.props.children(this.innerElRef, this.renderInnerContent());
  };

  ContentHookInner.prototype.componentDidMount = function () {
    this.updateCustomContent();
  };

  ContentHookInner.prototype.componentDidUpdate = function () {
    this.updateCustomContent();
  };

  ContentHookInner.prototype.renderInnerContent = function () {
    var contentTypeHandlers = this.context.pluginHooks.contentTypeHandlers;

    var _a = this,
        props = _a.props,
        customContentInfo = _a.customContentInfo;

    var rawVal = props.content;
    var innerContent = normalizeContent(rawVal, props.hookProps);
    var innerContentVDom = null;

    if (innerContent === undefined) {
      // use the default
      innerContent = normalizeContent(props.defaultContent, props.hookProps);
    }

    if (innerContent !== undefined) {
      // we allow custom content handlers to return nothing
      if (customContentInfo) {
        customContentInfo.contentVal = innerContent[customContentInfo.contentKey];
      } else if (_typeof(innerContent) === 'object') {
        // look for a prop that would indicate a custom content handler is needed
        for (var contentKey in contentTypeHandlers) {
          if (innerContent[contentKey] !== undefined) {
            customContentInfo = this.customContentInfo = {
              contentKey: contentKey,
              contentVal: innerContent[contentKey],
              handler: contentTypeHandlers[contentKey]()
            };
            break;
          }
        }
      }

      if (customContentInfo) {
        innerContentVDom = []; // signal that something was specified
      } else {
        innerContentVDom = innerContent; // assume a [p]react vdom node. use it
      }
    }

    return innerContentVDom;
  };

  ContentHookInner.prototype.updateCustomContent = function () {
    if (this.customContentInfo) {
      this.customContentInfo.handler(this.innerElRef.current || this.props.backupElRef.current, // the element to render into
      this.customContentInfo.contentVal);
    }
  };

  return ContentHookInner;
}(BaseComponent);

var MountHook =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MountHook, _super);

  function MountHook() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleRootEl = function (rootEl) {
      _this.rootEl = rootEl;

      if (_this.props.elRef) {
        setRef(_this.props.elRef, rootEl);
      }
    };

    return _this;
  }

  MountHook.prototype.render = function () {
    return this.props.children(this.handleRootEl);
  };

  MountHook.prototype.componentDidMount = function () {
    var callback = this.props.didMount;
    callback && callback(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.props.hookProps), {
      el: this.rootEl
    }));
  };

  MountHook.prototype.componentWillUnmount = function () {
    var callback = this.props.willUnmount;
    callback && callback(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.props.hookProps), {
      el: this.rootEl
    }));
  };

  return MountHook;
}(BaseComponent);

function buildClassNameNormalizer() {
  var currentGenerator;
  var currentHookProps;
  var currentClassNames = [];
  return function (generator, hookProps) {
    if (!currentHookProps || !isPropsEqual(currentHookProps, hookProps) || generator !== currentGenerator) {
      currentGenerator = generator;
      currentHookProps = hookProps;
      currentClassNames = normalizeClassNames(generator, hookProps);
    }

    return currentClassNames;
  };
}

function normalizeClassNames(classNames, hookProps) {
  if (typeof classNames === 'function') {
    classNames = classNames(hookProps);
  }

  return parseClassNames(classNames);
}

function normalizeContent(input, hookProps) {
  if (typeof input === 'function') {
    return input(hookProps, _vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"]); // give the function the vdom-creation func
  } else {
    return input;
  }
}

var ViewRoot =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(ViewRoot, _super);

  function ViewRoot() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.normalizeClassNames = buildClassNameNormalizer();
    return _this;
  }

  ViewRoot.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var options = context.options;
    var hookProps = {
      view: context.viewApi
    };
    var customClassNames = this.normalizeClassNames(options.viewClassNames, hookProps);
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(MountHook, {
      hookProps: hookProps,
      didMount: options.viewDidMount,
      willUnmount: options.viewWillUnmount,
      elRef: props.elRef
    }, function (rootElRef) {
      return props.children(rootElRef, ["fc-" + props.viewSpec.type + "-view", 'fc-view'].concat(customClassNames));
    });
  };

  return ViewRoot;
}(BaseComponent);

function parseViewConfigs(inputs) {
  return mapHash(inputs, parseViewConfig);
}

function parseViewConfig(input) {
  var rawOptions = typeof input === 'function' ? {
    component: input
  } : input;
  var component = rawOptions.component;

  if (rawOptions.content) {
    component = createViewHookComponent(rawOptions); // TODO: remove content/classNames/didMount/etc from options?
  }

  return {
    superType: rawOptions.type,
    component: component,
    rawOptions: rawOptions // includes type and component too :(

  };
}

function createViewHookComponent(options) {
  return function (viewProps) {
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ViewContextType.Consumer, null, function (context) {
      return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ViewRoot, {
        viewSpec: context.viewSpec
      }, function (rootElRef, viewClassNames) {
        var hookProps = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, viewProps), {
          nextDayThreshold: context.options.nextDayThreshold
        });

        return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RenderHook, {
          hookProps: hookProps,
          classNames: options.classNames,
          content: options.content,
          didMount: options.didMount,
          willUnmount: options.willUnmount,
          elRef: rootElRef
        }, function (rootElRef, customClassNames, innerElRef, innerContent) {
          return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
            className: viewClassNames.concat(customClassNames).join(' '),
            ref: rootElRef
          }, innerContent);
        });
      });
    });
  };
}

function buildViewSpecs(defaultInputs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  var defaultConfigs = parseViewConfigs(defaultInputs);
  var overrideConfigs = parseViewConfigs(optionOverrides.views);
  var viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
  return mapHash(viewDefs, function (viewDef) {
    return buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults);
  });
}

function buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  var durationInput = viewDef.overrides.duration || viewDef.defaults.duration || dynamicOptionOverrides.duration || optionOverrides.duration;
  var duration = null;
  var durationUnit = '';
  var singleUnit = '';
  var singleUnitOverrides = {};

  if (durationInput) {
    duration = createDurationCached(durationInput);

    if (duration) {
      // valid?
      var denom = greatestDurationDenominator(duration);
      durationUnit = denom.unit;

      if (denom.value === 1) {
        singleUnit = durationUnit;
        singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].rawOptions : {};
      }
    }
  }

  var queryButtonText = function queryButtonText(optionsSubset) {
    var buttonTextMap = optionsSubset.buttonText || {};
    var buttonTextKey = viewDef.defaults.buttonTextKey;

    if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
      return buttonTextMap[buttonTextKey];
    }

    if (buttonTextMap[viewDef.type] != null) {
      return buttonTextMap[viewDef.type];
    }

    if (buttonTextMap[singleUnit] != null) {
      return buttonTextMap[singleUnit];
    }
  };

  return {
    type: viewDef.type,
    component: viewDef.component,
    duration: duration,
    durationUnit: durationUnit,
    singleUnit: singleUnit,
    optionDefaults: viewDef.defaults,
    optionOverrides: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, singleUnitOverrides), viewDef.overrides),
    buttonTextOverride: queryButtonText(dynamicOptionOverrides) || queryButtonText(optionOverrides) || // constructor-specified buttonText lookup hash takes precedence
    viewDef.overrides.buttonText,
    buttonTextDefault: queryButtonText(localeDefaults) || viewDef.defaults.buttonText || queryButtonText(BASE_OPTION_DEFAULTS) || viewDef.type // fall back to given view name

  };
} // hack to get memoization working


var durationInputMap = {};

function createDurationCached(durationInput) {
  var json = JSON.stringify(durationInput);
  var res = durationInputMap[json];

  if (res === undefined) {
    res = createDuration(durationInput);
    durationInputMap[json] = res;
  }

  return res;
}

var DateProfileGenerator =
/** @class */
function () {
  function DateProfileGenerator(props) {
    this.props = props;
    this.nowDate = getNow(props.nowInput, props.dateEnv);
    this.initHiddenDays();
  }
  /* Date Range Computation
  ------------------------------------------------------------------------------------------------------------------*/
  // Builds a structure with info about what the dates/ranges will be for the "prev" view.


  DateProfileGenerator.prototype.buildPrev = function (currentDateProfile, currentDate, forceToValid) {
    var dateEnv = this.props.dateEnv;
    var prevDate = dateEnv.subtract(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
    currentDateProfile.dateIncrement);
    return this.build(prevDate, -1, forceToValid);
  }; // Builds a structure with info about what the dates/ranges will be for the "next" view.


  DateProfileGenerator.prototype.buildNext = function (currentDateProfile, currentDate, forceToValid) {
    var dateEnv = this.props.dateEnv;
    var nextDate = dateEnv.add(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
    currentDateProfile.dateIncrement);
    return this.build(nextDate, 1, forceToValid);
  }; // Builds a structure holding dates/ranges for rendering around the given date.
  // Optional direction param indicates whether the date is being incremented/decremented
  // from its previous value. decremented = -1, incremented = 1 (default).


  DateProfileGenerator.prototype.build = function (currentDate, direction, forceToValid) {
    if (forceToValid === void 0) {
      forceToValid = true;
    }

    var props = this.props;
    var validRange;
    var currentInfo;
    var isRangeAllDay;
    var renderRange;
    var activeRange;
    var isValid;
    validRange = this.buildValidRange();
    validRange = this.trimHiddenDays(validRange);

    if (forceToValid) {
      currentDate = constrainMarkerToRange(currentDate, validRange);
    }

    currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
    isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
    renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
    renderRange = this.trimHiddenDays(renderRange);
    activeRange = renderRange;

    if (!props.showNonCurrentDates) {
      activeRange = intersectRanges(activeRange, currentInfo.range);
    }

    activeRange = this.adjustActiveRange(activeRange);
    activeRange = intersectRanges(activeRange, validRange); // might return null
    // it's invalid if the originally requested date is not contained,
    // or if the range is completely outside of the valid range.

    isValid = rangesIntersect(currentInfo.range, validRange);
    return {
      // constraint for where prev/next operations can go and where events can be dragged/resized to.
      // an object with optional start and end properties.
      validRange: validRange,
      // range the view is formally responsible for.
      // for example, a month view might have 1st-31st, excluding padded dates
      currentRange: currentInfo.range,
      // name of largest unit being displayed, like "month" or "week"
      currentRangeUnit: currentInfo.unit,
      isRangeAllDay: isRangeAllDay,
      // dates that display events and accept drag-n-drop
      // will be `null` if no dates accept events
      activeRange: activeRange,
      // date range with a rendered skeleton
      // includes not-active days that need some sort of DOM
      renderRange: renderRange,
      // Duration object that denotes the first visible time of any given day
      slotMinTime: props.slotMinTime,
      // Duration object that denotes the exclusive visible end time of any given day
      slotMaxTime: props.slotMaxTime,
      isValid: isValid,
      // how far the current date will move for a prev/next operation
      dateIncrement: this.buildDateIncrement(currentInfo.duration) // pass a fallback (might be null) ^

    };
  }; // Builds an object with optional start/end properties.
  // Indicates the minimum/maximum dates to display.
  // not responsible for trimming hidden days.


  DateProfileGenerator.prototype.buildValidRange = function () {
    var input = this.props.validRangeInput;
    var simpleInput = typeof input === 'function' ? input.call(this.props.calendarApi, this.nowDate) : input;
    return this.refineRange(simpleInput) || {
      start: null,
      end: null
    }; // completely open-ended
  }; // Builds a structure with info about the "current" range, the range that is
  // highlighted as being the current month for example.
  // See build() for a description of `direction`.
  // Guaranteed to have `range` and `unit` properties. `duration` is optional.


  DateProfileGenerator.prototype.buildCurrentRangeInfo = function (date, direction) {
    var props = this.props;
    var duration = null;
    var unit = null;
    var range = null;
    var dayCount;

    if (props.duration) {
      duration = props.duration;
      unit = props.durationUnit;
      range = this.buildRangeFromDuration(date, direction, duration, unit);
    } else if (dayCount = this.props.dayCount) {
      unit = 'day';
      range = this.buildRangeFromDayCount(date, direction, dayCount);
    } else if (range = this.buildCustomVisibleRange(date)) {
      unit = props.dateEnv.greatestWholeUnit(range.start, range.end).unit;
    } else {
      duration = this.getFallbackDuration();
      unit = greatestDurationDenominator(duration).unit;
      range = this.buildRangeFromDuration(date, direction, duration, unit);
    }

    return {
      duration: duration,
      unit: unit,
      range: range
    };
  };

  DateProfileGenerator.prototype.getFallbackDuration = function () {
    return createDuration({
      day: 1
    });
  }; // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.


  DateProfileGenerator.prototype.adjustActiveRange = function (range) {
    var _a = this.props,
        dateEnv = _a.dateEnv,
        usesMinMaxTime = _a.usesMinMaxTime,
        slotMinTime = _a.slotMinTime,
        slotMaxTime = _a.slotMaxTime;
    var start = range.start;
    var end = range.end;

    if (usesMinMaxTime) {
      // expand active range if slotMinTime is negative (why not when positive?)
      if (asRoughDays(slotMinTime) < 0) {
        start = startOfDay(start); // necessary?

        start = dateEnv.add(start, slotMinTime);
      } // expand active range if slotMaxTime is beyond one day (why not when negative?)


      if (asRoughDays(slotMaxTime) > 1) {
        end = startOfDay(end); // necessary?

        end = addDays(end, -1);
        end = dateEnv.add(end, slotMaxTime);
      }
    }

    return {
      start: start,
      end: end
    };
  }; // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.


  DateProfileGenerator.prototype.buildRangeFromDuration = function (date, direction, duration, unit) {
    var _a = this.props,
        dateEnv = _a.dateEnv,
        dateAlignment = _a.dateAlignment;
    var start;
    var end;
    var res; // compute what the alignment should be

    if (!dateAlignment) {
      var dateIncrement = this.props.dateIncrement;

      if (dateIncrement) {
        // use the smaller of the two units
        if (asRoughMs(dateIncrement) < asRoughMs(duration)) {
          dateAlignment = greatestDurationDenominator(dateIncrement).unit;
        } else {
          dateAlignment = unit;
        }
      } else {
        dateAlignment = unit;
      }
    } // if the view displays a single day or smaller


    if (asRoughDays(duration) <= 1) {
      if (this.isHiddenDay(start)) {
        start = this.skipHiddenDays(start, direction);
        start = startOfDay(start);
      }
    }

    function computeRes() {
      start = dateEnv.startOf(date, dateAlignment);
      end = dateEnv.add(start, duration);
      res = {
        start: start,
        end: end
      };
    }

    computeRes(); // if range is completely enveloped by hidden days, go past the hidden days

    if (!this.trimHiddenDays(res)) {
      date = this.skipHiddenDays(date, direction);
      computeRes();
    }

    return res;
  }; // Builds the "current" range when a dayCount is specified.


  DateProfileGenerator.prototype.buildRangeFromDayCount = function (date, direction, dayCount) {
    var _a = this.props,
        dateEnv = _a.dateEnv,
        dateAlignment = _a.dateAlignment;
    var runningCount = 0;
    var start = date;
    var end;

    if (dateAlignment) {
      start = dateEnv.startOf(start, dateAlignment);
    }

    start = startOfDay(start);
    start = this.skipHiddenDays(start, direction);
    end = start;

    do {
      end = addDays(end, 1);

      if (!this.isHiddenDay(end)) {
        runningCount++;
      }
    } while (runningCount < dayCount);

    return {
      start: start,
      end: end
    };
  }; // Builds a normalized range object for the "visible" range,
  // which is a way to define the currentRange and activeRange at the same time.


  DateProfileGenerator.prototype.buildCustomVisibleRange = function (date) {
    var props = this.props;
    var input = props.visibleRangeInput;
    var simpleInput = typeof input === 'function' ? input.call(props.calendarApi, props.dateEnv.toDate(date)) : input;
    var range = this.refineRange(simpleInput);

    if (range && (range.start == null || range.end == null)) {
      return null;
    }

    return range;
  }; // Computes the range that will represent the element/cells for *rendering*,
  // but which may have voided days/times.
  // not responsible for trimming hidden days.


  DateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
    return currentRange;
  }; // Compute the duration value that should be added/substracted to the current date
  // when a prev/next operation happens.


  DateProfileGenerator.prototype.buildDateIncrement = function (fallback) {
    var dateIncrement = this.props.dateIncrement;
    var customAlignment;

    if (dateIncrement) {
      return dateIncrement;
    } else if (customAlignment = this.props.dateAlignment) {
      return createDuration(1, customAlignment);
    } else if (fallback) {
      return fallback;
    } else {
      return createDuration({
        days: 1
      });
    }
  };

  DateProfileGenerator.prototype.refineRange = function (rangeInput) {
    if (rangeInput) {
      var range = parseRange(rangeInput, this.props.dateEnv);

      if (range) {
        range = computeVisibleDayRange(range);
      }

      return range;
    }

    return null;
  };
  /* Hidden Days
  ------------------------------------------------------------------------------------------------------------------*/
  // Initializes internal variables related to calculating hidden days-of-week


  DateProfileGenerator.prototype.initHiddenDays = function () {
    var hiddenDays = this.props.hiddenDays || []; // array of day-of-week indices that are hidden

    var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)

    var dayCnt = 0;
    var i;

    if (this.props.weekends === false) {
      hiddenDays.push(0, 6); // 0=sunday, 6=saturday
    }

    for (i = 0; i < 7; i++) {
      if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) {
        dayCnt++;
      }
    }

    if (!dayCnt) {
      throw new Error('invalid hiddenDays'); // all days were hidden? bad.
    }

    this.isHiddenDayHash = isHiddenDayHash;
  }; // Remove days from the beginning and end of the range that are computed as hidden.
  // If the whole range is trimmed off, returns null


  DateProfileGenerator.prototype.trimHiddenDays = function (range) {
    var start = range.start;
    var end = range.end;

    if (start) {
      start = this.skipHiddenDays(start);
    }

    if (end) {
      end = this.skipHiddenDays(end, -1, true);
    }

    if (start == null || end == null || start < end) {
      return {
        start: start,
        end: end
      };
    }

    return null;
  }; // Is the current day hidden?
  // `day` is a day-of-week index (0-6), or a Date (used for UTC)


  DateProfileGenerator.prototype.isHiddenDay = function (day) {
    if (day instanceof Date) {
      day = day.getUTCDay();
    }

    return this.isHiddenDayHash[day];
  }; // Incrementing the current day until it is no longer a hidden day, returning a copy.
  // DOES NOT CONSIDER validRange!
  // If the initial value of `date` is not a hidden day, don't do anything.
  // Pass `isExclusive` as `true` if you are dealing with an end date.
  // `inc` defaults to `1` (increment one day forward each time)


  DateProfileGenerator.prototype.skipHiddenDays = function (date, inc, isExclusive) {
    if (inc === void 0) {
      inc = 1;
    }

    if (isExclusive === void 0) {
      isExclusive = false;
    }

    while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
      date = addDays(date, inc);
    }

    return date;
  };

  return DateProfileGenerator;
}();

function reduceViewType(viewType, action) {
  switch (action.type) {
    case 'CHANGE_VIEW_TYPE':
      return viewType = action.viewType;
  }

  return viewType;
}

function reduceDynamicOptionOverrides(dynamicOptionOverrides, action) {
  var _a;

  switch (action.type) {
    case 'SET_OPTION':
      return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, dynamicOptionOverrides), (_a = {}, _a[action.optionName] = action.rawOptionValue, _a));

    default:
      return dynamicOptionOverrides;
  }
}

function reduceDateProfile(currentDateProfile, action, currentDate, dateProfileGenerator) {
  var dp;

  switch (action.type) {
    case 'CHANGE_VIEW_TYPE':
      return dateProfileGenerator.build(action.dateMarker || currentDate);

    case 'CHANGE_DATE':
      if (!currentDateProfile.activeRange || !rangeContainsMarker(currentDateProfile.currentRange, action.dateMarker) // don't move if date already in view
      ) {
          return dateProfileGenerator.build(action.dateMarker);
        }

      break;

    case 'PREV':
      dp = dateProfileGenerator.buildPrev(currentDateProfile, currentDate);

      if (dp.isValid) {
        return dp;
      }

      break;

    case 'NEXT':
      dp = dateProfileGenerator.buildNext(currentDateProfile, currentDate);

      if (dp.isValid) {
        return dp;
      }

      break;
  }

  return currentDateProfile;
}

function initEventSources(calendarOptions, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null;
  return addSources({}, parseInitialSources(calendarOptions, context), activeRange, context);
}

function reduceEventSources(eventSources, action, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?

  switch (action.type) {
    case 'ADD_EVENT_SOURCES':
      // already parsed
      return addSources(eventSources, action.sources, activeRange, context);

    case 'REMOVE_EVENT_SOURCE':
      return removeSource(eventSources, action.sourceId);

    case 'PREV': // TODO: how do we track all actions that affect dateProfile :(

    case 'NEXT':
    case 'CHANGE_DATE':
    case 'CHANGE_VIEW_TYPE':
      if (dateProfile) {
        return fetchDirtySources(eventSources, activeRange, context);
      } else {
        return eventSources;
      }

    case 'FETCH_EVENT_SOURCES':
      return fetchSourcesByIds(eventSources, action.sourceIds ? // why no type?
      arrayToHash(action.sourceIds) : excludeStaticSources(eventSources, context), activeRange, context);

    case 'RECEIVE_EVENTS':
    case 'RECEIVE_EVENT_ERROR':
      return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);

    case 'REMOVE_ALL_EVENT_SOURCES':
      return {};

    default:
      return eventSources;
  }
}

function reduceEventSourcesNewTimeZone(eventSources, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?

  return fetchSourcesByIds(eventSources, excludeStaticSources(eventSources, context), activeRange, context);
}

function computeEventSourceLoadingLevel(eventSources) {
  var cnt = 0;

  for (var sourceId in eventSources) {
    if (eventSources[sourceId].isFetching) {
      cnt++;
    }
  }

  return cnt;
}

function addSources(eventSourceHash, sources, fetchRange, context) {
  var hash = {};

  for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
    var source = sources_1[_i];
    hash[source.sourceId] = source;
  }

  if (fetchRange) {
    hash = fetchDirtySources(hash, fetchRange, context);
  }

  return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, eventSourceHash), hash);
}

function removeSource(eventSourceHash, sourceId) {
  return filterHash(eventSourceHash, function (eventSource) {
    return eventSource.sourceId !== sourceId;
  });
}

function fetchDirtySources(sourceHash, fetchRange, context) {
  return fetchSourcesByIds(sourceHash, filterHash(sourceHash, function (eventSource) {
    return isSourceDirty(eventSource, fetchRange, context);
  }), fetchRange, context);
}

function isSourceDirty(eventSource, fetchRange, context) {
  if (!doesSourceNeedRange(eventSource, context)) {
    return !eventSource.latestFetchId;
  } else {
    return !context.options.lazyFetching || !eventSource.fetchRange || eventSource.isFetching || // always cancel outdated in-progress fetches
    fetchRange.start < eventSource.fetchRange.start || fetchRange.end > eventSource.fetchRange.end;
  }
}

function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, context) {
  var nextSources = {};

  for (var sourceId in prevSources) {
    var source = prevSources[sourceId];

    if (sourceIdHash[sourceId]) {
      nextSources[sourceId] = fetchSource(source, fetchRange, context);
    } else {
      nextSources[sourceId] = source;
    }
  }

  return nextSources;
}

function fetchSource(eventSource, fetchRange, context) {
  var options = context.options,
      calendarApi = context.calendarApi;
  var sourceDef = context.pluginHooks.eventSourceDefs[eventSource.sourceDefId];
  var fetchId = guid();
  sourceDef.fetch({
    eventSource: eventSource,
    range: fetchRange,
    context: context
  }, function (res) {
    var rawEvents = res.rawEvents;

    if (options.eventSourceSuccess) {
      rawEvents = options.eventSourceSuccess.call(calendarApi, rawEvents, res.xhr) || rawEvents;
    }

    if (eventSource.success) {
      rawEvents = eventSource.success.call(calendarApi, rawEvents, res.xhr) || rawEvents;
    }

    context.dispatch({
      type: 'RECEIVE_EVENTS',
      sourceId: eventSource.sourceId,
      fetchId: fetchId,
      fetchRange: fetchRange,
      rawEvents: rawEvents
    });
  }, function (error) {
    console.warn(error.message, error);

    if (options.eventSourceFailure) {
      options.eventSourceFailure.call(calendarApi, error);
    }

    if (eventSource.failure) {
      eventSource.failure(error);
    }

    context.dispatch({
      type: 'RECEIVE_EVENT_ERROR',
      sourceId: eventSource.sourceId,
      fetchId: fetchId,
      fetchRange: fetchRange,
      error: error
    });
  });
  return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, eventSource), {
    isFetching: true,
    latestFetchId: fetchId
  });
}

function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
  var _a;

  var eventSource = sourceHash[sourceId];

  if (eventSource && // not already removed
  fetchId === eventSource.latestFetchId) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, sourceHash), (_a = {}, _a[sourceId] = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, eventSource), {
      isFetching: false,
      fetchRange: fetchRange // also serves as a marker that at least one fetch has completed

    }), _a));
  }

  return sourceHash;
}

function excludeStaticSources(eventSources, context) {
  return filterHash(eventSources, function (eventSource) {
    return doesSourceNeedRange(eventSource, context);
  });
}

function parseInitialSources(rawOptions, context) {
  var refiners = buildEventSourceRefiners(context);
  var rawSources = [].concat(rawOptions.eventSources || []);
  var sources = []; // parsed

  if (rawOptions.initialEvents) {
    rawSources.unshift(rawOptions.initialEvents);
  }

  if (rawOptions.events) {
    rawSources.unshift(rawOptions.events);
  }

  for (var _i = 0, rawSources_1 = rawSources; _i < rawSources_1.length; _i++) {
    var rawSource = rawSources_1[_i];
    var source = parseEventSource(rawSource, context, refiners);

    if (source) {
      sources.push(source);
    }
  }

  return sources;
}

function doesSourceNeedRange(eventSource, context) {
  var defs = context.pluginHooks.eventSourceDefs;
  return !defs[eventSource.sourceDefId].ignoreRange;
}

function reduceDateSelection(currentSelection, action) {
  switch (action.type) {
    case 'UNSELECT_DATES':
      return null;

    case 'SELECT_DATES':
      return action.selection;

    default:
      return currentSelection;
  }
}

function reduceSelectedEvent(currentInstanceId, action) {
  switch (action.type) {
    case 'UNSELECT_EVENT':
      return '';

    case 'SELECT_EVENT':
      return action.eventInstanceId;

    default:
      return currentInstanceId;
  }
}

function reduceEventDrag(currentDrag, action) {
  var newDrag;

  switch (action.type) {
    case 'UNSET_EVENT_DRAG':
      return null;

    case 'SET_EVENT_DRAG':
      newDrag = action.state;
      return {
        affectedEvents: newDrag.affectedEvents,
        mutatedEvents: newDrag.mutatedEvents,
        isEvent: newDrag.isEvent
      };

    default:
      return currentDrag;
  }
}

function reduceEventResize(currentResize, action) {
  var newResize;

  switch (action.type) {
    case 'UNSET_EVENT_RESIZE':
      return null;

    case 'SET_EVENT_RESIZE':
      newResize = action.state;
      return {
        affectedEvents: newResize.affectedEvents,
        mutatedEvents: newResize.mutatedEvents,
        isEvent: newResize.isEvent
      };

    default:
      return currentResize;
  }
}

function parseToolbars(calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  var viewsWithButtons = [];
  var headerToolbar = calendarOptions.headerToolbar ? parseToolbar(calendarOptions.headerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi, viewsWithButtons) : null;
  var footerToolbar = calendarOptions.footerToolbar ? parseToolbar(calendarOptions.footerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi, viewsWithButtons) : null;
  return {
    headerToolbar: headerToolbar,
    footerToolbar: footerToolbar,
    viewsWithButtons: viewsWithButtons
  };
}

function parseToolbar(sectionStrHash, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi, viewsWithButtons // dump side effects
) {
  return mapHash(sectionStrHash, function (sectionStr) {
    return parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi, viewsWithButtons);
  });
}
/*
BAD: querying icons and text here. should be done at render time
*/


function parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi, viewsWithButtons // dump side effects
) {
  var isRtl = calendarOptions.direction === 'rtl';
  var calendarCustomButtons = calendarOptions.customButtons || {};
  var calendarButtonTextOverrides = calendarOptionOverrides.buttonText || {};
  var calendarButtonText = calendarOptions.buttonText || {};
  var sectionSubstrs = sectionStr ? sectionStr.split(' ') : [];
  return sectionSubstrs.map(function (buttonGroupStr) {
    return buttonGroupStr.split(',').map(function (buttonName) {
      if (buttonName === 'title') {
        return {
          buttonName: buttonName
        };
      } else {
        var customButtonProps_1;
        var viewSpec = void 0;
        var buttonClick = void 0;
        var buttonIcon = void 0; // only one of these will be set

        var buttonText = void 0; // "

        if (customButtonProps_1 = calendarCustomButtons[buttonName]) {
          buttonClick = function buttonClick(ev) {
            if (customButtonProps_1.click) {
              customButtonProps_1.click.call(ev.target, ev, ev.target);
            }
          };

          (buttonIcon = theme.getCustomButtonIconClass(customButtonProps_1)) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = customButtonProps_1.text);
        } else if (viewSpec = viewSpecs[buttonName]) {
          viewsWithButtons.push(buttonName);

          buttonClick = function buttonClick() {
            calendarApi.changeView(buttonName);
          };

          (buttonText = viewSpec.buttonTextOverride) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = viewSpec.buttonTextDefault);
        } else if (calendarApi[buttonName]) {
          // a calendarApi method
          buttonClick = function buttonClick() {
            calendarApi[buttonName]();
          };

          (buttonText = calendarButtonTextOverrides[buttonName]) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = calendarButtonText[buttonName]); //            ^ everything else is considered default
        }

        return {
          buttonName: buttonName,
          buttonClick: buttonClick,
          buttonIcon: buttonIcon,
          buttonText: buttonText
        };
      }
    });
  });
}

var eventSourceDef = {
  ignoreRange: true,
  parseMeta: function parseMeta(refined) {
    if (Array.isArray(refined.events)) {
      return refined.events;
    }

    return null;
  },
  fetch: function fetch(arg, success) {
    success({
      rawEvents: arg.eventSource.meta
    });
  }
};
var arrayEventSourcePlugin = createPlugin({
  eventSourceDefs: [eventSourceDef]
});
var eventSourceDef$1 = {
  parseMeta: function parseMeta(refined) {
    if (typeof refined.events === 'function') {
      return refined.events;
    }

    return null;
  },
  fetch: function fetch(arg, success, failure) {
    var dateEnv = arg.context.dateEnv;
    var func = arg.eventSource.meta;
    unpromisify(func.bind(null, buildRangeApiWithTimeZone(arg.range, dateEnv)), function (rawEvents) {
      success({
        rawEvents: rawEvents
      }); // needs an object response
    }, failure // send errorObj directly to failure callback
    );
  }
};
var funcEventSourcePlugin = createPlugin({
  eventSourceDefs: [eventSourceDef$1]
});

function requestJson(method, url, params, successCallback, failureCallback) {
  method = method.toUpperCase();
  var body = null;

  if (method === 'GET') {
    url = injectQueryStringParams(url, params);
  } else {
    body = encodeParams(params);
  }

  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);

  if (method !== 'GET') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      var parsed = false;
      var res = void 0;

      try {
        res = JSON.parse(xhr.responseText);
        parsed = true;
      } catch (err) {// will handle parsed=false
      }

      if (parsed) {
        successCallback(res, xhr);
      } else {
        failureCallback('Failure parsing JSON', xhr);
      }
    } else {
      failureCallback('Request failed', xhr);
    }
  };

  xhr.onerror = function () {
    failureCallback('Request failed', xhr);
  };

  xhr.send(body);
}

function injectQueryStringParams(url, params) {
  return url + (url.indexOf('?') === -1 ? '?' : '&') + encodeParams(params);
}

function encodeParams(params) {
  var parts = [];

  for (var key in params) {
    parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
  }

  return parts.join('&');
}

var JSON_FEED_EVENT_SOURCE_REFINERS = {
  method: String,
  extraParams: identity,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
var eventSourceDef$2 = {
  parseMeta: function parseMeta(refined) {
    if (refined.url) {
      return {
        url: refined.url,
        method: (refined.method || 'GET').toUpperCase(),
        extraParams: refined.extraParams,
        startParam: refined.startParam,
        endParam: refined.endParam,
        timeZoneParam: refined.timeZoneParam
      };
    }

    return null;
  },
  fetch: function fetch(arg, success, failure) {
    var meta = arg.eventSource.meta;
    var requestParams = buildRequestParams(meta, arg.range, arg.context);
    requestJson(meta.method, meta.url, requestParams, function (rawEvents, xhr) {
      success({
        rawEvents: rawEvents,
        xhr: xhr
      });
    }, function (errorMessage, xhr) {
      failure({
        message: errorMessage,
        xhr: xhr
      });
    });
  }
};
var jsonFeedEventSourcePlugin = createPlugin({
  eventSourceRefiners: JSON_FEED_EVENT_SOURCE_REFINERS,
  eventSourceDefs: [eventSourceDef$2]
});

function buildRequestParams(meta, range, context) {
  var dateEnv = context.dateEnv,
      options = context.options;
  var startParam;
  var endParam;
  var timeZoneParam;
  var customRequestParams;
  var params = {};
  startParam = meta.startParam;

  if (startParam == null) {
    startParam = options.startParam;
  }

  endParam = meta.endParam;

  if (endParam == null) {
    endParam = options.endParam;
  }

  timeZoneParam = meta.timeZoneParam;

  if (timeZoneParam == null) {
    timeZoneParam = options.timeZoneParam;
  } // retrieve any outbound GET/POST data from the options


  if (typeof meta.extraParams === 'function') {
    // supplied as a function that returns a key/value object
    customRequestParams = meta.extraParams();
  } else {
    // probably supplied as a straight key/value object
    customRequestParams = meta.extraParams || {};
  }

  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(params, customRequestParams);

  params[startParam] = dateEnv.formatIso(range.start);
  params[endParam] = dateEnv.formatIso(range.end);

  if (dateEnv.timeZone !== 'local') {
    params[timeZoneParam] = dateEnv.timeZone;
  }

  return params;
}

var SIMPLE_RECURRING_REFINERS = {
  daysOfWeek: identity,
  startTime: createDuration,
  endTime: createDuration,
  duration: createDuration,
  startRecur: identity,
  endRecur: identity
};
var recurring = {
  parse: function parse(refined, dateEnv) {
    if (refined.daysOfWeek || refined.startTime || refined.endTime || refined.startRecur || refined.endRecur) {
      var recurringData = {
        daysOfWeek: refined.daysOfWeek || null,
        startTime: refined.startTime || null,
        endTime: refined.endTime || null,
        startRecur: refined.startRecur ? dateEnv.createMarker(refined.startRecur) : null,
        endRecur: refined.endRecur ? dateEnv.createMarker(refined.endRecur) : null
      };
      var duration = void 0;

      if (refined.duration) {
        duration = refined.duration;
      }

      if (!duration && refined.startTime && refined.endTime) {
        duration = subtractDurations(refined.endTime, refined.startTime);
      }

      return {
        allDayGuess: Boolean(!refined.startTime && !refined.endTime),
        duration: duration,
        typeData: recurringData // doesn't need endTime anymore but oh well

      };
    }

    return null;
  },
  expand: function expand(typeData, framingRange, dateEnv) {
    var clippedFramingRange = intersectRanges(framingRange, {
      start: typeData.startRecur,
      end: typeData.endRecur
    });

    if (clippedFramingRange) {
      return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
    } else {
      return [];
    }
  }
};
var simpleRecurringEventsPlugin = createPlugin({
  recurringTypes: [recurring],
  eventRefiners: SIMPLE_RECURRING_REFINERS
});

function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
  var dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
  var dayMarker = startOfDay(framingRange.start);
  var endMarker = framingRange.end;
  var instanceStarts = [];

  while (dayMarker < endMarker) {
    var instanceStart // if everyday, or this particular day-of-week
    = void 0; // if everyday, or this particular day-of-week

    if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
      if (startTime) {
        instanceStart = dateEnv.add(dayMarker, startTime);
      } else {
        instanceStart = dayMarker;
      }

      instanceStarts.push(instanceStart);
    }

    dayMarker = addDays(dayMarker, 1);
  }

  return instanceStarts;
}

var changeHandlerPlugin = createPlugin({
  optionChangeHandlers: {
    events: function events(_events, context) {
      handleEventSources([_events], context);
    },
    eventSources: handleEventSources
  }
});
/*
BUG: if `event` was supplied, all previously-given `eventSources` will be wiped out
*/

function handleEventSources(inputs, context) {
  var unfoundSources = hashValuesToArray(context.getCurrentData().eventSources);
  var newInputs = [];

  for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
    var input = inputs_1[_i];
    var inputFound = false;

    for (var i = 0; i < unfoundSources.length; i++) {
      if (unfoundSources[i]._raw === input) {
        unfoundSources.splice(i, 1); // delete

        inputFound = true;
        break;
      }
    }

    if (!inputFound) {
      newInputs.push(input);
    }
  }

  for (var _a = 0, unfoundSources_1 = unfoundSources; _a < unfoundSources_1.length; _a++) {
    var unfoundSource = unfoundSources_1[_a];
    context.dispatch({
      type: 'REMOVE_EVENT_SOURCE',
      sourceId: unfoundSource.sourceId
    });
  }

  for (var _b = 0, newInputs_1 = newInputs; _b < newInputs_1.length; _b++) {
    var newInput = newInputs_1[_b];
    context.calendarApi.addEventSource(newInput);
  }
}

function handleDateProfile(dateProfile, context) {
  context.emitter.trigger('datesSet', Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, buildRangeApiWithTimeZone(dateProfile.activeRange, context.dateEnv)), {
    view: context.viewApi
  }));
}

function handleEventStore(eventStore, context) {
  var emitter = context.emitter;

  if (emitter.hasHandlers('eventsSet')) {
    emitter.trigger('eventsSet', buildEventApis(eventStore, context));
  }
}
/*
this array is exposed on the root namespace so that UMD plugins can add to it.
see the rollup-bundles script.
*/


var globalPlugins = [arrayEventSourcePlugin, funcEventSourcePlugin, jsonFeedEventSourcePlugin, simpleRecurringEventsPlugin, changeHandlerPlugin, createPlugin({
  contentTypeHandlers: {
    html: function html() {
      return injectHtml;
    },
    domNodes: function domNodes() {
      return injectDomNodes;
    }
  },
  propSetHandlers: {
    dateProfile: handleDateProfile,
    eventStore: handleEventStore
  }
})];

function injectHtml(el, html) {
  el.innerHTML = html;
}

function injectDomNodes(el, domNodes) {
  var oldNodes = Array.prototype.slice.call(el.childNodes); // TODO: use array util

  var newNodes = Array.prototype.slice.call(domNodes); // TODO: use array util

  if (!isArraysEqual(oldNodes, newNodes)) {
    for (var _i = 0, newNodes_1 = newNodes; _i < newNodes_1.length; _i++) {
      var newNode = newNodes_1[_i];
      el.appendChild(newNode);
    }

    oldNodes.forEach(removeElement);
  }
}

var DelayedRunner =
/** @class */
function () {
  function DelayedRunner(drainedOption) {
    this.drainedOption = drainedOption;
    this.isRunning = false;
    this.isDirty = false;
    this.pauseDepths = {};
    this.timeoutId = 0;
  }

  DelayedRunner.prototype.request = function (delay) {
    this.isDirty = true;

    if (!this.isPaused()) {
      this.clearTimeout();

      if (delay == null) {
        this.tryDrain();
      } else {
        this.timeoutId = setTimeout( // NOT OPTIMAL! TODO: look at debounce
        this.tryDrain.bind(this), delay);
      }
    }
  };

  DelayedRunner.prototype.pause = function (scope) {
    if (scope === void 0) {
      scope = '';
    }

    var pauseDepths = this.pauseDepths;
    pauseDepths[scope] = (pauseDepths[scope] || 0) + 1;
    this.clearTimeout();
  };

  DelayedRunner.prototype.resume = function (scope, force) {
    if (scope === void 0) {
      scope = '';
    }

    var pauseDepths = this.pauseDepths;

    if (scope in pauseDepths) {
      if (force) {
        delete pauseDepths[scope];
      } else {
        var depth = --pauseDepths[scope];

        if (depth <= 0) {
          delete pauseDepths[scope];
        }
      }

      this.tryDrain();
    }
  };

  DelayedRunner.prototype.isPaused = function () {
    return Object.keys(this.pauseDepths).length;
  };

  DelayedRunner.prototype.tryDrain = function () {
    if (!this.isRunning && !this.isPaused()) {
      this.isRunning = true;

      while (this.isDirty) {
        this.isDirty = false;
        this.drained(); // might set isDirty to true again
      }

      this.isRunning = false;
    }
  };

  DelayedRunner.prototype.clear = function () {
    this.clearTimeout();
    this.isDirty = false;
    this.pauseDepths = {};
  };

  DelayedRunner.prototype.clearTimeout = function () {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = 0;
    }
  };

  DelayedRunner.prototype.drained = function () {
    if (this.drainedOption) {
      this.drainedOption();
    }
  };

  return DelayedRunner;
}();

var TaskRunner =
/** @class */
function () {
  function TaskRunner(runTaskOption, drainedOption) {
    this.runTaskOption = runTaskOption;
    this.drainedOption = drainedOption;
    this.queue = [];
    this.delayedRunner = new DelayedRunner(this.drain.bind(this));
  }

  TaskRunner.prototype.request = function (task, delay) {
    this.queue.push(task);
    this.delayedRunner.request(delay);
  };

  TaskRunner.prototype.pause = function (scope) {
    this.delayedRunner.pause(scope);
  };

  TaskRunner.prototype.resume = function (scope, force) {
    this.delayedRunner.resume(scope, force);
  };

  TaskRunner.prototype.drain = function () {
    var queue = this.queue;

    while (queue.length) {
      var completedTasks = [];
      var task = void 0;

      while (task = queue.shift()) {
        this.runTask(task);
        completedTasks.push(task);
      }

      this.drained(completedTasks);
    } // keep going, in case new tasks were added in the drained handler

  };

  TaskRunner.prototype.runTask = function (task) {
    if (this.runTaskOption) {
      this.runTaskOption(task);
    }
  };

  TaskRunner.prototype.drained = function (completedTasks) {
    if (this.drainedOption) {
      this.drainedOption(completedTasks);
    }
  };

  return TaskRunner;
}(); // Computes what the title at the top of the calendarApi should be for this view


function buildTitle(dateProfile, viewOptions, dateEnv) {
  var range; // for views that span a large unit of time, show the proper interval, ignoring stray days before and after

  if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
    range = dateProfile.currentRange;
  } else {
    // for day units or smaller, use the actual day range
    range = dateProfile.activeRange;
  }

  return dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || buildTitleFormat(dateProfile)), {
    isEndExclusive: dateProfile.isRangeAllDay,
    defaultSeparator: viewOptions.titleRangeSeparator
  });
} // Generates the format string that should be used to generate the title for the current date range.
// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.


function buildTitleFormat(dateProfile) {
  var currentRangeUnit = dateProfile.currentRangeUnit;

  if (currentRangeUnit === 'year') {
    return {
      year: 'numeric'
    };
  } else if (currentRangeUnit === 'month') {
    return {
      year: 'numeric',
      month: 'long'
    }; // like "September 2014"
  } else {
    var days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);

    if (days !== null && days > 1) {
      // multi-day range. shorter, like "Sep 9 - 10 2014"
      return {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      };
    } else {
      // one day. longer, like "September 9 2014"
      return {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
    }
  }
} // in future refactor, do the redux-style function(state=initial) for initial-state
// also, whatever is happening in constructor, have it happen in action queue too


var CalendarDataManager =
/** @class */
function () {
  function CalendarDataManager(props) {
    var _this = this;

    this.computeOptionsData = memoize(this._computeOptionsData);
    this.computeCurrentViewData = memoize(this._computeCurrentViewData);
    this.organizeRawLocales = memoize(organizeRawLocales);
    this.buildLocale = memoize(buildLocale);
    this.buildPluginHooks = buildBuildPluginHooks();
    this.buildDateEnv = memoize(buildDateEnv$1);
    this.buildTheme = memoize(buildTheme);
    this.parseToolbars = memoize(parseToolbars);
    this.buildViewSpecs = memoize(buildViewSpecs);
    this.buildDateProfileGenerator = memoizeObjArg(buildDateProfileGenerator);
    this.buildViewApi = memoize(buildViewApi);
    this.buildViewUiProps = memoizeObjArg(buildViewUiProps);
    this.buildEventUiBySource = memoize(buildEventUiBySource, isPropsEqual);
    this.buildEventUiBases = memoize(buildEventUiBases);
    this.parseContextBusinessHours = memoizeObjArg(parseContextBusinessHours);
    this.buildTitle = memoize(buildTitle);
    this.emitter = new Emitter();
    this.actionRunner = new TaskRunner(this._handleAction.bind(this), this.updateData.bind(this));
    this.currentCalendarOptionsInput = {};
    this.currentCalendarOptionsRefined = {};
    this.currentViewOptionsInput = {};
    this.currentViewOptionsRefined = {};
    this.currentCalendarOptionsRefiners = {};

    this.getCurrentData = function () {
      return _this.data;
    };

    this.dispatch = function (action) {
      _this.actionRunner.request(action); // protects against recursive calls to _handleAction

    };

    this.props = props;
    this.actionRunner.pause();
    var dynamicOptionOverrides = {};
    var optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
    var currentViewType = optionsData.calendarOptions.initialView || optionsData.pluginHooks.initialView;
    var currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides); // wire things up
    // TODO: not DRY

    props.calendarApi.currentDataManager = this;
    this.emitter.setThisContext(props.calendarApi);
    this.emitter.setOptions(currentViewData.options);
    var currentDate = getInitialDate(optionsData.calendarOptions, optionsData.dateEnv);
    var dateProfile = currentViewData.dateProfileGenerator.build(currentDate);

    if (!rangeContainsMarker(dateProfile.activeRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }

    var calendarContext = {
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }; // needs to be after setThisContext

    for (var _i = 0, _a = optionsData.pluginHooks.contextInit; _i < _a.length; _i++) {
      var callback = _a[_i];
      callback(calendarContext);
    } // NOT DRY


    var eventSources = initEventSources(optionsData.calendarOptions, dateProfile, calendarContext);
    var initialState = {
      dynamicOptionOverrides: dynamicOptionOverrides,
      currentViewType: currentViewType,
      currentDate: currentDate,
      dateProfile: dateProfile,
      businessHours: this.parseContextBusinessHours(calendarContext),
      eventSources: eventSources,
      eventUiBases: {},
      loadingLevel: computeEventSourceLoadingLevel(eventSources),
      eventStore: createEmptyEventStore(),
      renderableEventStore: createEmptyEventStore(),
      dateSelection: null,
      eventSelection: '',
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(calendarContext).selectionConfig
    };

    var contextAndState = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, calendarContext), initialState);

    for (var _b = 0, _c = optionsData.pluginHooks.reducers; _b < _c.length; _b++) {
      var reducer = _c[_b];

      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(initialState, reducer(null, null, contextAndState));
    }

    if (initialState.loadingLevel) {
      this.emitter.trigger('loading', true); // NOT DRY
    }

    this.state = initialState;
    this.updateData();
    this.actionRunner.resume();
  }

  CalendarDataManager.prototype.resetOptions = function (optionOverrides, append) {
    var props = this.props;
    props.optionOverrides = append ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, props.optionOverrides), optionOverrides) : optionOverrides;
    this.actionRunner.request({
      type: 'NOTHING'
    });
  };

  CalendarDataManager.prototype._handleAction = function (action) {
    var _a = this,
        props = _a.props,
        state = _a.state,
        emitter = _a.emitter;

    var dynamicOptionOverrides = reduceDynamicOptionOverrides(state.dynamicOptionOverrides, action);
    var optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
    var currentViewType = reduceViewType(state.currentViewType, action);
    var currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides); // wire things up
    // TODO: not DRY

    props.calendarApi.currentDataManager = this;
    emitter.setThisContext(props.calendarApi);
    emitter.setOptions(currentViewData.options);
    var calendarContext = {
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter: emitter,
      getCurrentData: this.getCurrentData
    };
    var currentDate = state.currentDate;
    var dateProfile = state.dateProfile;

    if (this.data && this.data.dateProfileGenerator !== currentViewData.dateProfileGenerator) {
      // hack
      dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
    }

    currentDate = reduceCurrentDate(currentDate, action);
    dateProfile = reduceDateProfile(dateProfile, action, currentDate, currentViewData.dateProfileGenerator);

    if (!rangeContainsMarker(dateProfile.currentRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }

    var eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendarContext);
    var eventSourceLoadingLevel = computeEventSourceLoadingLevel(eventSources);
    var eventStore = reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendarContext);
    var renderableEventStore = eventSourceLoadingLevel && !currentViewData.options.progressiveEventRendering ? state.renderableEventStore || eventStore : // try from previous state
    eventStore;

    var _b = this.buildViewUiProps(calendarContext),
        eventUiSingleBase = _b.eventUiSingleBase,
        selectionConfig = _b.selectionConfig; // will memoize obj


    var eventUiBySource = this.buildEventUiBySource(eventSources);
    var eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
    var prevLoadingLevel = state.loadingLevel || 0;
    var loadingLevel = eventSourceLoadingLevel;
    var newState = {
      dynamicOptionOverrides: dynamicOptionOverrides,
      currentViewType: currentViewType,
      currentDate: currentDate,
      dateProfile: dateProfile,
      eventSources: eventSources,
      eventStore: eventStore,
      renderableEventStore: renderableEventStore,
      selectionConfig: selectionConfig,
      eventUiBases: eventUiBases,
      loadingLevel: loadingLevel,
      businessHours: this.parseContextBusinessHours(calendarContext),
      dateSelection: reduceDateSelection(state.dateSelection, action),
      eventSelection: reduceSelectedEvent(state.eventSelection, action),
      eventDrag: reduceEventDrag(state.eventDrag, action),
      eventResize: reduceEventResize(state.eventResize, action)
    };

    var contextAndState = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, calendarContext), newState);

    for (var _i = 0, _c = optionsData.pluginHooks.reducers; _i < _c.length; _i++) {
      var reducer = _c[_i];

      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(newState, reducer(state, action, contextAndState)); // give the OLD state, for old value

    } // TODO: use propSetHandlers in plugin system


    if (!prevLoadingLevel && loadingLevel) {
      emitter.trigger('loading', true);
    } else if (prevLoadingLevel && !loadingLevel) {
      emitter.trigger('loading', false);
    }

    this.state = newState;

    if (props.onAction) {
      props.onAction(action);
    }
  };

  CalendarDataManager.prototype.updateData = function () {
    var _a = this,
        props = _a.props,
        state = _a.state;

    var oldData = this.data;
    var optionsData = this.computeOptionsData(props.optionOverrides, state.dynamicOptionOverrides, props.calendarApi);
    var currentViewData = this.computeCurrentViewData(state.currentViewType, optionsData, props.optionOverrides, state.dynamicOptionOverrides);

    var data = this.data = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({
      viewTitle: this.buildTitle(state.dateProfile, currentViewData.options, optionsData.dateEnv),
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }, optionsData), currentViewData), state);

    var changeHandlers = optionsData.pluginHooks.optionChangeHandlers;
    var oldCalendarOptions = oldData && oldData.calendarOptions;
    var newCalendarOptions = optionsData.calendarOptions;

    if (oldCalendarOptions && oldCalendarOptions !== newCalendarOptions) {
      if (oldCalendarOptions.timeZone !== newCalendarOptions.timeZone) {
        // hack
        state.eventSources = data.eventSources = reduceEventSourcesNewTimeZone(data.eventSources, state.dateProfile, data);
        state.eventStore = data.eventStore = rezoneEventStoreDates(data.eventStore, oldData.dateEnv, data.dateEnv);
      }

      for (var optionName in changeHandlers) {
        if (oldCalendarOptions[optionName] !== newCalendarOptions[optionName]) {
          changeHandlers[optionName](newCalendarOptions[optionName], data);
        }
      }
    }

    if (props.onData) {
      props.onData(data);
    }
  };

  CalendarDataManager.prototype._computeOptionsData = function (optionOverrides, dynamicOptionOverrides, calendarApi) {
    // TODO: blacklist options that are handled by optionChangeHandlers
    var _a = this.processRawCalendarOptions(optionOverrides, dynamicOptionOverrides),
        refinedOptions = _a.refinedOptions,
        pluginHooks = _a.pluginHooks,
        localeDefaults = _a.localeDefaults,
        availableLocaleData = _a.availableLocaleData,
        extra = _a.extra;

    warnUnknownOptions(extra);
    var dateEnv = this.buildDateEnv(refinedOptions.timeZone, refinedOptions.locale, refinedOptions.weekNumberCalculation, refinedOptions.firstDay, refinedOptions.weekText, pluginHooks, availableLocaleData, refinedOptions.defaultRangeSeparator);
    var viewSpecs = this.buildViewSpecs(pluginHooks.views, optionOverrides, dynamicOptionOverrides, localeDefaults);
    var theme = this.buildTheme(refinedOptions, pluginHooks);
    var toolbarConfig = this.parseToolbars(refinedOptions, optionOverrides, theme, viewSpecs, calendarApi);
    return {
      calendarOptions: refinedOptions,
      pluginHooks: pluginHooks,
      dateEnv: dateEnv,
      viewSpecs: viewSpecs,
      theme: theme,
      toolbarConfig: toolbarConfig,
      localeDefaults: localeDefaults,
      availableRawLocales: availableLocaleData.map
    };
  }; // always called from behind a memoizer


  CalendarDataManager.prototype.processRawCalendarOptions = function (optionOverrides, dynamicOptionOverrides) {
    var _a = mergeRawOptions([BASE_OPTION_DEFAULTS, optionOverrides, dynamicOptionOverrides]),
        locales = _a.locales,
        locale = _a.locale;

    var availableLocaleData = this.organizeRawLocales(locales);
    var availableRawLocales = availableLocaleData.map;
    var localeDefaults = this.buildLocale(locale || availableLocaleData.defaultCode, availableRawLocales).options;
    var pluginHooks = this.buildPluginHooks(optionOverrides.plugins || [], globalPlugins);

    var refiners = this.currentCalendarOptionsRefiners = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);

    var extra = {};
    var raw = mergeRawOptions([BASE_OPTION_DEFAULTS, localeDefaults, optionOverrides, dynamicOptionOverrides]);
    var refined = {};
    var currentRaw = this.currentCalendarOptionsInput;
    var currentRefined = this.currentCalendarOptionsRefined;
    var anyChanges = false;

    for (var optionName in raw) {
      if (optionName !== 'plugins') {
        // because plugins is special-cased
        if (raw[optionName] === currentRaw[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && optionName in currentRaw && COMPLEX_OPTION_COMPARATORS[optionName](currentRaw[optionName], raw[optionName])) {
          refined[optionName] = currentRefined[optionName];
        } else if (refiners[optionName]) {
          refined[optionName] = refiners[optionName](raw[optionName]);
          anyChanges = true;
        } else {
          extra[optionName] = currentRaw[optionName];
        }
      }
    }

    if (anyChanges) {
      this.currentCalendarOptionsInput = raw;
      this.currentCalendarOptionsRefined = refined;
    }

    return {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: pluginHooks,
      availableLocaleData: availableLocaleData,
      localeDefaults: localeDefaults,
      extra: extra
    };
  };

  CalendarDataManager.prototype._computeCurrentViewData = function (viewType, optionsData, optionOverrides, dynamicOptionOverrides) {
    var viewSpec = optionsData.viewSpecs[viewType];

    if (!viewSpec) {
      throw new Error("viewType \"" + viewType + "\" is not available. Please make sure you've loaded all neccessary plugins");
    }

    var _a = this.processRawViewOptions(viewSpec, optionsData.pluginHooks, optionsData.localeDefaults, optionOverrides, dynamicOptionOverrides),
        refinedOptions = _a.refinedOptions,
        extra = _a.extra;

    warnUnknownOptions(extra);
    var dateProfileGenerator = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: viewSpec.optionDefaults.dateProfileGeneratorClass,
      duration: viewSpec.duration,
      durationUnit: viewSpec.durationUnit,
      usesMinMaxTime: viewSpec.optionDefaults.usesMinMaxTime,
      dateEnv: optionsData.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: refinedOptions.slotMinTime,
      slotMaxTime: refinedOptions.slotMaxTime,
      showNonCurrentDates: refinedOptions.showNonCurrentDates,
      dayCount: refinedOptions.dayCount,
      dateAlignment: refinedOptions.dateAlignment,
      dateIncrement: refinedOptions.dateIncrement,
      hiddenDays: refinedOptions.hiddenDays,
      weekends: refinedOptions.weekends,
      nowInput: refinedOptions.now,
      validRangeInput: refinedOptions.validRange,
      visibleRangeInput: refinedOptions.visibleRange,
      monthMode: refinedOptions.monthMode,
      fixedWeekCount: refinedOptions.fixedWeekCount
    });
    var viewApi = this.buildViewApi(viewType, this.getCurrentData, optionsData.dateEnv);
    return {
      viewSpec: viewSpec,
      options: refinedOptions,
      dateProfileGenerator: dateProfileGenerator,
      viewApi: viewApi
    };
  };

  CalendarDataManager.prototype.processRawViewOptions = function (viewSpec, pluginHooks, localeDefaults, optionOverrides, dynamicOptionOverrides) {
    var raw = mergeRawOptions([BASE_OPTION_DEFAULTS, viewSpec.optionDefaults, localeDefaults, optionOverrides, viewSpec.optionOverrides, dynamicOptionOverrides]);

    var refiners = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), VIEW_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);

    var refined = {};
    var currentRaw = this.currentViewOptionsInput;
    var currentRefined = this.currentViewOptionsRefined;
    var anyChanges = false;
    var extra = {};

    for (var optionName in raw) {
      if (raw[optionName] === currentRaw[optionName]) {
        refined[optionName] = currentRefined[optionName];
      } else {
        if (raw[optionName] === this.currentCalendarOptionsInput[optionName]) {
          if (optionName in this.currentCalendarOptionsRefined) {
            // might be an "extra" prop
            refined[optionName] = this.currentCalendarOptionsRefined[optionName];
          }
        } else if (refiners[optionName]) {
          refined[optionName] = refiners[optionName](raw[optionName]);
        } else {
          extra[optionName] = raw[optionName];
        }

        anyChanges = true;
      }
    }

    if (anyChanges) {
      this.currentViewOptionsInput = raw;
      this.currentViewOptionsRefined = refined;
    }

    return {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: extra
    };
  };

  return CalendarDataManager;
}();

function buildDateEnv$1(timeZone, explicitLocale, weekNumberCalculation, firstDay, weekText, pluginHooks, availableLocaleData, defaultSeparator) {
  var locale = buildLocale(explicitLocale || availableLocaleData.defaultCode, availableLocaleData.map);
  return new DateEnv({
    calendarSystem: 'gregory',
    timeZone: timeZone,
    namedTimeZoneImpl: pluginHooks.namedTimeZonedImpl,
    locale: locale,
    weekNumberCalculation: weekNumberCalculation,
    firstDay: firstDay,
    weekText: weekText,
    cmdFormatter: pluginHooks.cmdFormatter,
    defaultSeparator: defaultSeparator
  });
}

function buildTheme(options, pluginHooks) {
  var ThemeClass = pluginHooks.themeClasses[options.themeSystem] || StandardTheme;
  return new ThemeClass(options);
}

function buildDateProfileGenerator(props) {
  var DateProfileGeneratorClass = props.dateProfileGeneratorClass || DateProfileGenerator;
  return new DateProfileGeneratorClass(props);
}

function buildViewApi(type, getCurrentData, dateEnv) {
  return new ViewApi(type, getCurrentData, dateEnv);
}

function buildEventUiBySource(eventSources) {
  return mapHash(eventSources, function (eventSource) {
    return eventSource.ui;
  });
}

function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
  var eventUiBases = {
    '': eventUiSingleBase
  };

  for (var defId in eventDefs) {
    var def = eventDefs[defId];

    if (def.sourceId && eventUiBySource[def.sourceId]) {
      eventUiBases[defId] = eventUiBySource[def.sourceId];
    }
  }

  return eventUiBases;
}

function buildViewUiProps(calendarContext) {
  var options = calendarContext.options;
  return {
    eventUiSingleBase: createEventUi({
      display: options.eventDisplay,
      editable: options.editable,
      startEditable: options.eventStartEditable,
      durationEditable: options.eventDurationEditable,
      constraint: options.eventConstraint,
      overlap: typeof options.eventOverlap === 'boolean' ? options.eventOverlap : undefined,
      allow: options.eventAllow,
      backgroundColor: options.eventBackgroundColor,
      borderColor: options.eventBorderColor,
      textColor: options.eventTextColor,
      color: options.eventColor // classNames: options.eventClassNames // render hook will handle this

    }, calendarContext),
    selectionConfig: createEventUi({
      constraint: options.selectConstraint,
      overlap: typeof options.selectOverlap === 'boolean' ? options.selectOverlap : undefined,
      allow: options.selectAllow
    }, calendarContext)
  };
}

function parseContextBusinessHours(calendarContext) {
  return parseBusinessHours(calendarContext.options.businessHours, calendarContext);
}

function warnUnknownOptions(options, viewName) {
  for (var optionName in options) {
    console.warn("Unknown option '" + optionName + "'" + (viewName ? " for view '" + viewName + "'" : ''));
  }
} // TODO: move this to react plugin?


var CalendarDataProvider =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(CalendarDataProvider, _super);

  function CalendarDataProvider(props) {
    var _this = _super.call(this, props) || this;

    _this.handleData = function (data) {
      if (!_this.dataManager) {
        // still within initial run, before assignment in constructor
        // eslint-disable-next-line react/no-direct-mutation-state
        _this.state = data; // can't use setState yet
      } else {
        _this.setState(data);
      }
    };

    _this.dataManager = new CalendarDataManager({
      optionOverrides: props.optionOverrides,
      calendarApi: props.calendarApi,
      onData: _this.handleData
    });
    return _this;
  }

  CalendarDataProvider.prototype.render = function () {
    return this.props.children(this.state);
  };

  CalendarDataProvider.prototype.componentDidUpdate = function (prevProps) {
    var newOptionOverrides = this.props.optionOverrides;

    if (newOptionOverrides !== prevProps.optionOverrides) {
      // prevent recursive handleData
      this.dataManager.resetOptions(newOptionOverrides);
    }
  };

  return CalendarDataProvider;
}(_vdom__WEBPACK_IMPORTED_MODULE_2__["Component"]); // HELPERS

/*
if nextDayThreshold is specified, slicing is done in an all-day fashion.
you can get nextDayThreshold from context.nextDayThreshold
*/


function sliceEvents(props, allDay) {
  return sliceEventStore(props.eventStore, props.eventUiBases, props.dateProfile.activeRange, allDay ? props.nextDayThreshold : null).fg;
}

var NamedTimeZoneImpl =
/** @class */
function () {
  function NamedTimeZoneImpl(timeZoneName) {
    this.timeZoneName = timeZoneName;
  }

  return NamedTimeZoneImpl;
}();

var Interaction =
/** @class */
function () {
  function Interaction(settings) {
    this.component = settings.component;
  }

  Interaction.prototype.destroy = function () {};

  return Interaction;
}();

function parseInteractionSettings(component, input) {
  return {
    component: component,
    el: input.el,
    useEventCenter: input.useEventCenter != null ? input.useEventCenter : true
  };
}

function interactionSettingsToStore(settings) {
  var _a;

  return _a = {}, _a[settings.component.uid] = settings, _a;
} // global state


var interactionSettingsStore = {};
/*
An abstraction for a dragging interaction originating on an event.
Does higher-level things than PointerDragger, such as possibly:
- a "mirror" that moves with the pointer
- a minimum number of pixels or other criteria for a true drag to begin

subclasses must emit:
- pointerdown
- dragstart
- dragmove
- pointerup
- dragend
*/

var ElementDragging =
/** @class */
function () {
  function ElementDragging(el, selector) {
    this.emitter = new Emitter();
  }

  ElementDragging.prototype.destroy = function () {};

  ElementDragging.prototype.setMirrorIsVisible = function (bool) {// optional if subclass doesn't want to support a mirror
  };

  ElementDragging.prototype.setMirrorNeedsRevert = function (bool) {// optional if subclass doesn't want to support a mirror
  };

  ElementDragging.prototype.setAutoScrollEnabled = function (bool) {// optional
  };

  return ElementDragging;
}(); // TODO: get rid of this in favor of options system,
// tho it's really easy to access this globally rather than pass thru options.


var config = {};
/*
Information about what will happen when an external element is dragged-and-dropped
onto a calendar. Contains information for creating an event.
*/

var DRAG_META_REFINERS = {
  startTime: createDuration,
  duration: createDuration,
  create: Boolean,
  sourceId: String
};

function parseDragMeta(raw) {
  var _a = refineProps(raw, DRAG_META_REFINERS),
      refined = _a.refined,
      extra = _a.extra;

  return {
    startTime: refined.startTime || null,
    duration: refined.duration || null,
    create: refined.create != null ? refined.create : true,
    sourceId: refined.sourceId,
    leftoverProps: extra
  };
}

var Toolbar =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(Toolbar, _super);

  function Toolbar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Toolbar.prototype.render = function () {
    var _a = this.props,
        model = _a.model,
        extraClassName = _a.extraClassName;
    var forceLtr = false;
    var startContent, endContent;
    var centerContent = model.center;

    if (model.left) {
      forceLtr = true;
      startContent = model.left;
    } else {
      startContent = model.start;
    }

    if (model.right) {
      forceLtr = true;
      endContent = model.right;
    } else {
      endContent = model.end;
    }

    var classNames = [extraClassName || '', 'fc-toolbar', forceLtr ? 'fc-toolbar-ltr' : ''];
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: classNames.join(' ')
    }, this.renderSection('start', startContent || []), this.renderSection('center', centerContent || []), this.renderSection('end', endContent || []));
  };

  Toolbar.prototype.renderSection = function (key, widgetGroups) {
    var props = this.props;
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ToolbarSection, {
      key: key,
      widgetGroups: widgetGroups,
      title: props.title,
      activeButton: props.activeButton,
      isTodayEnabled: props.isTodayEnabled,
      isPrevEnabled: props.isPrevEnabled,
      isNextEnabled: props.isNextEnabled
    });
  };

  return Toolbar;
}(BaseComponent);

var ToolbarSection =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(ToolbarSection, _super);

  function ToolbarSection() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ToolbarSection.prototype.render = function () {
    var _this = this;

    var children = this.props.widgetGroups.map(function (widgetGroup) {
      return _this.renderWidgetGroup(widgetGroup);
    });
    return _vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])(['div', {
      className: 'fc-toolbar-chunk'
    }], children));
  };

  ToolbarSection.prototype.renderWidgetGroup = function (widgetGroup) {
    var props = this.props;
    var theme = this.context.theme;
    var children = [];
    var isOnlyButtons = true;

    for (var _i = 0, widgetGroup_1 = widgetGroup; _i < widgetGroup_1.length; _i++) {
      var widget = widgetGroup_1[_i];
      var buttonName = widget.buttonName,
          buttonClick = widget.buttonClick,
          buttonText = widget.buttonText,
          buttonIcon = widget.buttonIcon;

      if (buttonName === 'title') {
        isOnlyButtons = false;
        children.push(Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h2", {
          className: 'fc-toolbar-title'
        }, props.title));
      } else {
        var ariaAttrs = buttonIcon ? {
          'aria-label': buttonName
        } : {};
        var buttonClasses = ['fc-' + buttonName + '-button', theme.getClass('button')];

        if (buttonName === props.activeButton) {
          buttonClasses.push(theme.getClass('buttonActive'));
        }

        var isDisabled = !props.isTodayEnabled && buttonName === 'today' || !props.isPrevEnabled && buttonName === 'prev' || !props.isNextEnabled && buttonName === 'next';
        children.push(Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({
          disabled: isDisabled,
          className: buttonClasses.join(' '),
          onClick: buttonClick,
          type: 'button'
        }, ariaAttrs), buttonText || (buttonIcon ? Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
          className: buttonIcon
        }) : '')));
      }
    }

    if (children.length > 1) {
      var groupClassName = isOnlyButtons && theme.getClass('buttonGroup') || '';
      return _vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])(['div', {
        className: groupClassName
      }], children));
    } else {
      return children[0];
    }
  };

  return ToolbarSection;
}(BaseComponent); // TODO: do function component?


var ViewContainer =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(ViewContainer, _super);

  function ViewContainer() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      availableWidth: null
    };

    _this.handleEl = function (el) {
      _this.el = el;
      setRef(_this.props.elRef, el);

      _this.updateAvailableWidth();
    };

    _this.handleResize = function () {
      _this.updateAvailableWidth();
    };

    return _this;
  }

  ViewContainer.prototype.render = function () {
    var _a = this,
        props = _a.props,
        state = _a.state;

    var aspectRatio = props.aspectRatio;
    var classNames = ['fc-view-harness', aspectRatio || props.liquid || props.height ? 'fc-view-harness-active' // harness controls the height
    : 'fc-view-harness-passive' // let the view do the height
    ];
    var height = '';
    var paddingBottom = '';

    if (aspectRatio) {
      if (state.availableWidth !== null) {
        height = state.availableWidth / aspectRatio;
      } else {
        // while waiting to know availableWidth, we can't set height to *zero*
        // because will cause lots of unnecessary scrollbars within scrollgrid.
        // BETTER: don't start rendering ANYTHING yet until we know container width
        // NOTE: why not always use paddingBottom? Causes height oscillation (issue 5606)
        paddingBottom = 1 / aspectRatio * 100 + '%';
      }
    } else {
      height = props.height || '';
    }

    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      ref: this.handleEl,
      onClick: props.onClick,
      className: classNames.join(' '),
      style: {
        height: height,
        paddingBottom: paddingBottom
      }
    }, props.children);
  };

  ViewContainer.prototype.componentDidMount = function () {
    this.context.addResizeHandler(this.handleResize);
  };

  ViewContainer.prototype.componentWillUnmount = function () {
    this.context.removeResizeHandler(this.handleResize);
  };

  ViewContainer.prototype.updateAvailableWidth = function () {
    if (this.el && // needed. but why?
    this.props.aspectRatio // aspectRatio is the only height setting that needs availableWidth
    ) {
        this.setState({
          availableWidth: this.el.offsetWidth
        });
      }
  };

  return ViewContainer;
}(BaseComponent);
/*
Detects when the user clicks on an event within a DateComponent
*/


var EventClicking =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(EventClicking, _super);

  function EventClicking(settings) {
    var _this = _super.call(this, settings) || this;

    _this.handleSegClick = function (ev, segEl) {
      var component = _this.component;
      var context = component.context;
      var seg = getElSeg(segEl);

      if (seg && // might be the <div> surrounding the more link
      component.isValidSegDownEl(ev.target)) {
        // our way to simulate a link click for elements that can't be <a> tags
        // grab before trigger fired in case trigger trashes DOM thru rerendering
        var hasUrlContainer = elementClosest(ev.target, '.fc-event-forced-url');
        var url = hasUrlContainer ? hasUrlContainer.querySelector('a[href]').href : '';
        context.emitter.trigger('eventClick', {
          el: segEl,
          event: new EventApi(component.context, seg.eventRange.def, seg.eventRange.instance),
          jsEvent: ev,
          view: context.viewApi
        });

        if (url && !ev.defaultPrevented) {
          window.location.href = url;
        }
      }
    };

    _this.destroy = listenBySelector(settings.el, 'click', '.fc-event', // on both fg and bg events
    _this.handleSegClick);
    return _this;
  }

  return EventClicking;
}(Interaction);
/*
Triggers events and adds/removes core classNames when the user's pointer
enters/leaves event-elements of a component.
*/


var EventHovering =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(EventHovering, _super);

  function EventHovering(settings) {
    var _this = _super.call(this, settings) || this; // for simulating an eventMouseLeave when the event el is destroyed while mouse is over it


    _this.handleEventElRemove = function (el) {
      if (el === _this.currentSegEl) {
        _this.handleSegLeave(null, _this.currentSegEl);
      }
    };

    _this.handleSegEnter = function (ev, segEl) {
      if (getElSeg(segEl)) {
        // TODO: better way to make sure not hovering over more+ link or its wrapper
        _this.currentSegEl = segEl;

        _this.triggerEvent('eventMouseEnter', ev, segEl);
      }
    };

    _this.handleSegLeave = function (ev, segEl) {
      if (_this.currentSegEl) {
        _this.currentSegEl = null;

        _this.triggerEvent('eventMouseLeave', ev, segEl);
      }
    };

    _this.removeHoverListeners = listenToHoverBySelector(settings.el, '.fc-event', // on both fg and bg events
    _this.handleSegEnter, _this.handleSegLeave);
    return _this;
  }

  EventHovering.prototype.destroy = function () {
    this.removeHoverListeners();
  };

  EventHovering.prototype.triggerEvent = function (publicEvName, ev, segEl) {
    var component = this.component;
    var context = component.context;
    var seg = getElSeg(segEl);

    if (!ev || component.isValidSegDownEl(ev.target)) {
      context.emitter.trigger(publicEvName, {
        el: segEl,
        event: new EventApi(context, seg.eventRange.def, seg.eventRange.instance),
        jsEvent: ev,
        view: context.viewApi
      });
    }
  };

  return EventHovering;
}(Interaction);

var CalendarContent =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(CalendarContent, _super);

  function CalendarContent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.buildViewContext = memoize(buildViewContext);
    _this.buildViewPropTransformers = memoize(buildViewPropTransformers);
    _this.buildToolbarProps = memoize(buildToolbarProps);
    _this.handleNavLinkClick = buildDelegationHandler('a[data-navlink]', _this._handleNavLinkClick.bind(_this));
    _this.headerRef = Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
    _this.footerRef = Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
    _this.interactionsStore = {}; // Component Registration
    // -----------------------------------------------------------------------------------------------------------------

    _this.registerInteractiveComponent = function (component, settingsInput) {
      var settings = parseInteractionSettings(component, settingsInput);
      var DEFAULT_INTERACTIONS = [EventClicking, EventHovering];
      var interactionClasses = DEFAULT_INTERACTIONS.concat(_this.props.pluginHooks.componentInteractions);
      var interactions = interactionClasses.map(function (interactionClass) {
        return new interactionClass(settings);
      });
      _this.interactionsStore[component.uid] = interactions;
      interactionSettingsStore[component.uid] = settings;
    };

    _this.unregisterInteractiveComponent = function (component) {
      for (var _i = 0, _a = _this.interactionsStore[component.uid]; _i < _a.length; _i++) {
        var listener = _a[_i];
        listener.destroy();
      }

      delete _this.interactionsStore[component.uid];
      delete interactionSettingsStore[component.uid];
    }; // Resizing
    // -----------------------------------------------------------------------------------------------------------------


    _this.resizeRunner = new DelayedRunner(function () {
      _this.props.emitter.trigger('_resize', true); // should window resizes be considered "forced" ?


      _this.props.emitter.trigger('windowResize', {
        view: _this.props.viewApi
      });
    });

    _this.handleWindowResize = function (ev) {
      var options = _this.props.options;

      if (options.handleWindowResize && ev.target === window // avoid jqui events
      ) {
          _this.resizeRunner.request(options.windowResizeDelay);
        }
    };

    return _this;
  }
  /*
  renders INSIDE of an outer div
  */


  CalendarContent.prototype.render = function () {
    var props = this.props;
    var toolbarConfig = props.toolbarConfig,
        options = props.options;
    var toolbarProps = this.buildToolbarProps(props.viewSpec, props.dateProfile, props.dateProfileGenerator, props.currentDate, getNow(props.options.now, props.dateEnv), // TODO: use NowTimer????
    props.viewTitle);
    var viewVGrow = false;
    var viewHeight = '';
    var viewAspectRatio;

    if (props.isHeightAuto || props.forPrint) {
      viewHeight = '';
    } else if (options.height != null) {
      viewVGrow = true;
    } else if (options.contentHeight != null) {
      viewHeight = options.contentHeight;
    } else {
      viewAspectRatio = Math.max(options.aspectRatio, 0.5); // prevent from getting too tall
    }

    var viewContext = this.buildViewContext(props.viewSpec, props.viewApi, props.options, props.dateProfileGenerator, props.dateEnv, props.theme, props.pluginHooks, props.dispatch, props.getCurrentData, props.emitter, props.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ViewContextType.Provider, {
      value: viewContext
    }, toolbarConfig.headerToolbar && Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Toolbar, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({
      ref: this.headerRef,
      extraClassName: 'fc-header-toolbar',
      model: toolbarConfig.headerToolbar
    }, toolbarProps)), Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ViewContainer, {
      liquid: viewVGrow,
      height: viewHeight,
      aspectRatio: viewAspectRatio,
      onClick: this.handleNavLinkClick
    }, this.renderView(props), this.buildAppendContent()), toolbarConfig.footerToolbar && Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Toolbar, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({
      ref: this.footerRef,
      extraClassName: 'fc-footer-toolbar',
      model: toolbarConfig.footerToolbar
    }, toolbarProps)));
  };

  CalendarContent.prototype.componentDidMount = function () {
    var props = this.props;
    this.calendarInteractions = props.pluginHooks.calendarInteractions.map(function (calendarInteractionClass) {
      return new calendarInteractionClass(props);
    });
    window.addEventListener('resize', this.handleWindowResize);
    var propSetHandlers = props.pluginHooks.propSetHandlers;

    for (var propName in propSetHandlers) {
      propSetHandlers[propName](props[propName], props);
    }
  };

  CalendarContent.prototype.componentDidUpdate = function (prevProps) {
    var props = this.props;
    var propSetHandlers = props.pluginHooks.propSetHandlers;

    for (var propName in propSetHandlers) {
      if (props[propName] !== prevProps[propName]) {
        propSetHandlers[propName](props[propName], props);
      }
    }
  };

  CalendarContent.prototype.componentWillUnmount = function () {
    window.removeEventListener('resize', this.handleWindowResize);
    this.resizeRunner.clear();

    for (var _i = 0, _a = this.calendarInteractions; _i < _a.length; _i++) {
      var interaction = _a[_i];
      interaction.destroy();
    }

    this.props.emitter.trigger('_unmount');
  };

  CalendarContent.prototype._handleNavLinkClick = function (ev, anchorEl) {
    var _a = this.props,
        dateEnv = _a.dateEnv,
        options = _a.options,
        calendarApi = _a.calendarApi;
    var navLinkOptions = anchorEl.getAttribute('data-navlink');
    navLinkOptions = navLinkOptions ? JSON.parse(navLinkOptions) : {};
    var dateMarker = dateEnv.createMarker(navLinkOptions.date);
    var viewType = navLinkOptions.type;
    var customAction = viewType === 'day' ? options.navLinkDayClick : viewType === 'week' ? options.navLinkWeekClick : null;

    if (typeof customAction === 'function') {
      customAction.call(calendarApi, dateEnv.toDate(dateMarker), ev);
    } else {
      if (typeof customAction === 'string') {
        viewType = customAction;
      }

      calendarApi.zoomTo(dateMarker, viewType);
    }
  };

  CalendarContent.prototype.buildAppendContent = function () {
    var props = this.props;
    var children = props.pluginHooks.viewContainerAppends.map(function (buildAppendContent) {
      return buildAppendContent(props);
    });
    return _vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([_vdom__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {}], children));
  };

  CalendarContent.prototype.renderView = function (props) {
    var pluginHooks = props.pluginHooks;
    var viewSpec = props.viewSpec;
    var viewProps = {
      dateProfile: props.dateProfile,
      businessHours: props.businessHours,
      eventStore: props.renderableEventStore,
      eventUiBases: props.eventUiBases,
      dateSelection: props.dateSelection,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      isHeightAuto: props.isHeightAuto,
      forPrint: props.forPrint
    };
    var transformers = this.buildViewPropTransformers(pluginHooks.viewPropsTransformers);

    for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
      var transformer = transformers_1[_i];

      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(viewProps, transformer.transform(viewProps, props));
    }

    var ViewComponent = viewSpec.component;
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ViewComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, viewProps));
  };

  return CalendarContent;
}(PureComponent);

function buildToolbarProps(viewSpec, dateProfile, dateProfileGenerator, currentDate, now, title) {
  // don't force any date-profiles to valid date profiles (the `false`) so that we can tell if it's invalid
  var todayInfo = dateProfileGenerator.build(now, undefined, false); // TODO: need `undefined` or else INFINITE LOOP for some reason

  var prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate, false);
  var nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate, false);
  return {
    title: title,
    activeButton: viewSpec.type,
    isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
    isPrevEnabled: prevInfo.isValid,
    isNextEnabled: nextInfo.isValid
  };
} // Plugin
// -----------------------------------------------------------------------------------------------------------------


function buildViewPropTransformers(theClasses) {
  return theClasses.map(function (theClass) {
    return new theClass();
  });
}

var CalendarRoot =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(CalendarRoot, _super);

  function CalendarRoot() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      forPrint: false
    };

    _this.handleBeforePrint = function () {
      _this.setState({
        forPrint: true
      });
    };

    _this.handleAfterPrint = function () {
      _this.setState({
        forPrint: false
      });
    };

    return _this;
  }

  CalendarRoot.prototype.render = function () {
    var props = this.props;
    var options = props.options;
    var forPrint = this.state.forPrint;
    var isHeightAuto = forPrint || options.height === 'auto' || options.contentHeight === 'auto';
    var height = !isHeightAuto && options.height != null ? options.height : '';
    var classNames = ['fc', forPrint ? 'fc-media-print' : 'fc-media-screen', 'fc-direction-' + options.direction, props.theme.getClass('root')];

    if (!getCanVGrowWithinCell()) {
      classNames.push('fc-liquid-hack');
    }

    return props.children(classNames, height, isHeightAuto, forPrint);
  };

  CalendarRoot.prototype.componentDidMount = function () {
    var emitter = this.props.emitter;
    emitter.on('_beforeprint', this.handleBeforePrint);
    emitter.on('_afterprint', this.handleAfterPrint);
  };

  CalendarRoot.prototype.componentWillUnmount = function () {
    var emitter = this.props.emitter;
    emitter.off('_beforeprint', this.handleBeforePrint);
    emitter.off('_afterprint', this.handleAfterPrint);
  };

  return CalendarRoot;
}(BaseComponent); // Computes a default column header formatting string if `colFormat` is not explicitly defined


function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
  // if more than one week row, or if there are a lot of columns with not much space,
  // put just the day numbers will be in each cell
  if (!datesRepDistinctDays || dayCnt > 10) {
    return createFormatter({
      weekday: 'short'
    }); // "Sat"
  } else if (dayCnt > 1) {
    return createFormatter({
      weekday: 'short',
      month: 'numeric',
      day: 'numeric',
      omitCommas: true
    }); // "Sat 11/12"
  } else {
    return createFormatter({
      weekday: 'long'
    }); // "Saturday"
  }
}

var CLASS_NAME = 'fc-col-header-cell'; // do the cushion too? no

var TableDateCell =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(TableDateCell, _super);

  function TableDateCell() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TableDateCell.prototype.render = function () {
    var _a = this.context,
        dateEnv = _a.dateEnv,
        options = _a.options,
        theme = _a.theme,
        viewApi = _a.viewApi;
    var props = this.props;
    var date = props.date,
        dateProfile = props.dateProfile;
    var dayMeta = getDateMeta(date, props.todayRange, null, dateProfile);
    var classNames = [CLASS_NAME].concat(getDayClassNames(dayMeta, theme));
    var text = dateEnv.format(date, props.dayHeaderFormat); // if colCnt is 1, we are already in a day-view and don't need a navlink

    var navLinkAttrs = options.navLinks && !dayMeta.isDisabled && props.colCnt > 1 ? {
      'data-navlink': buildNavLinkData(date),
      tabIndex: 0
    } : {};

    var hookProps = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({
      date: dateEnv.toDate(date),
      view: viewApi
    }, props.extraHookProps), {
      text: text
    }), dayMeta);

    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RenderHook, {
      hookProps: hookProps,
      classNames: options.dayHeaderClassNames,
      content: options.dayHeaderContent,
      defaultContent: renderInner,
      didMount: options.dayHeaderDidMount,
      willUnmount: options.dayHeaderWillUnmount
    }, function (rootElRef, customClassNames, innerElRef, innerContent) {
      return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("th", Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({
        ref: rootElRef,
        className: classNames.concat(customClassNames).join(' '),
        "data-date": !dayMeta.isDisabled ? formatDayString(date) : undefined,
        colSpan: props.colSpan
      }, props.extraDataAttrs), Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: 'fc-scrollgrid-sync-inner'
      }, !dayMeta.isDisabled && Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({
        ref: innerElRef,
        className: ['fc-col-header-cell-cushion', props.isSticky ? 'fc-sticky' : ''].join(' ')
      }, navLinkAttrs), innerContent)));
    });
  };

  return TableDateCell;
}(BaseComponent);

var TableDowCell =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(TableDowCell, _super);

  function TableDowCell() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TableDowCell.prototype.render = function () {
    var props = this.props;
    var _a = this.context,
        dateEnv = _a.dateEnv,
        theme = _a.theme,
        viewApi = _a.viewApi,
        options = _a.options;
    var date = addDays(new Date(259200000), props.dow); // start with Sun, 04 Jan 1970 00:00:00 GMT

    var dateMeta = {
      dow: props.dow,
      isDisabled: false,
      isFuture: false,
      isPast: false,
      isToday: false,
      isOther: false
    };
    var classNames = [CLASS_NAME].concat(getDayClassNames(dateMeta, theme), props.extraClassNames || []);
    var text = dateEnv.format(date, props.dayHeaderFormat);

    var hookProps = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({
      // TODO: make this public?
      date: date
    }, dateMeta), {
      view: viewApi
    }), props.extraHookProps), {
      text: text
    });

    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RenderHook, {
      hookProps: hookProps,
      classNames: options.dayHeaderClassNames,
      content: options.dayHeaderContent,
      defaultContent: renderInner,
      didMount: options.dayHeaderDidMount,
      willUnmount: options.dayHeaderWillUnmount
    }, function (rootElRef, customClassNames, innerElRef, innerContent) {
      return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("th", Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({
        ref: rootElRef,
        className: classNames.concat(customClassNames).join(' '),
        colSpan: props.colSpan
      }, props.extraDataAttrs), Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: 'fc-scrollgrid-sync-inner'
      }, Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
        className: ['fc-col-header-cell-cushion', props.isSticky ? 'fc-sticky' : ''].join(' '),
        ref: innerElRef
      }, innerContent)));
    });
  };

  return TableDowCell;
}(BaseComponent);

function renderInner(hookProps) {
  return hookProps.text;
}

var NowTimer =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(NowTimer, _super);

  function NowTimer(props, context) {
    var _this = _super.call(this, props, context) || this;

    _this.initialNowDate = getNow(context.options.now, context.dateEnv);
    _this.initialNowQueriedMs = new Date().valueOf();
    _this.state = _this.computeTiming().currentState;
    return _this;
  }

  NowTimer.prototype.render = function () {
    var _a = this,
        props = _a.props,
        state = _a.state;

    return props.children(state.nowDate, state.todayRange);
  };

  NowTimer.prototype.componentDidMount = function () {
    this.setTimeout();
  };

  NowTimer.prototype.componentDidUpdate = function (prevProps) {
    if (prevProps.unit !== this.props.unit) {
      this.clearTimeout();
      this.setTimeout();
    }
  };

  NowTimer.prototype.componentWillUnmount = function () {
    this.clearTimeout();
  };

  NowTimer.prototype.computeTiming = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var unroundedNow = addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs);
    var currentUnitStart = context.dateEnv.startOf(unroundedNow, props.unit);
    var nextUnitStart = context.dateEnv.add(currentUnitStart, createDuration(1, props.unit));
    var waitMs = nextUnitStart.valueOf() - unroundedNow.valueOf();
    return {
      currentState: {
        nowDate: currentUnitStart,
        todayRange: buildDayRange(currentUnitStart)
      },
      nextState: {
        nowDate: nextUnitStart,
        todayRange: buildDayRange(nextUnitStart)
      },
      waitMs: waitMs
    };
  };

  NowTimer.prototype.setTimeout = function () {
    var _this = this;

    var _a = this.computeTiming(),
        nextState = _a.nextState,
        waitMs = _a.waitMs;

    this.timeoutId = setTimeout(function () {
      _this.setState(nextState, function () {
        _this.setTimeout();
      });
    }, waitMs);
  };

  NowTimer.prototype.clearTimeout = function () {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  };

  NowTimer.contextType = ViewContextType;
  return NowTimer;
}(_vdom__WEBPACK_IMPORTED_MODULE_2__["Component"]);

function buildDayRange(date) {
  var start = startOfDay(date);
  var end = addDays(start, 1);
  return {
    start: start,
    end: end
  };
}

var DayHeader =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(DayHeader, _super);

  function DayHeader() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
    return _this;
  }

  DayHeader.prototype.render = function () {
    var context = this.context;
    var _a = this.props,
        dates = _a.dates,
        dateProfile = _a.dateProfile,
        datesRepDistinctDays = _a.datesRepDistinctDays,
        renderIntro = _a.renderIntro;
    var dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, datesRepDistinctDays, dates.length);
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(NowTimer, {
      unit: 'day'
    }, function (nowDate, todayRange) {
      return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("tr", null, renderIntro && renderIntro(), dates.map(function (date) {
        return datesRepDistinctDays ? Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TableDateCell, {
          key: date.toISOString(),
          date: date,
          dateProfile: dateProfile,
          todayRange: todayRange,
          colCnt: dates.length,
          dayHeaderFormat: dayHeaderFormat
        }) : Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(TableDowCell, {
          key: date.getUTCDay(),
          dow: date.getUTCDay(),
          dayHeaderFormat: dayHeaderFormat
        });
      }));
    });
  };

  return DayHeader;
}(BaseComponent);

function createDayHeaderFormatter(explicitFormat, datesRepDistinctDays, dateCnt) {
  return explicitFormat || computeFallbackHeaderFormat(datesRepDistinctDays, dateCnt);
}

var DaySeriesModel =
/** @class */
function () {
  function DaySeriesModel(range, dateProfileGenerator) {
    var date = range.start;
    var end = range.end;
    var indices = [];
    var dates = [];
    var dayIndex = -1;

    while (date < end) {
      // loop each day from start to end
      if (dateProfileGenerator.isHiddenDay(date)) {
        indices.push(dayIndex + 0.5); // mark that it's between indices
      } else {
        dayIndex++;
        indices.push(dayIndex);
        dates.push(date);
      }

      date = addDays(date, 1);
    }

    this.dates = dates;
    this.indices = indices;
    this.cnt = dates.length;
  }

  DaySeriesModel.prototype.sliceRange = function (range) {
    var firstIndex = this.getDateDayIndex(range.start); // inclusive first index

    var lastIndex = this.getDateDayIndex(addDays(range.end, -1)); // inclusive last index

    var clippedFirstIndex = Math.max(0, firstIndex);
    var clippedLastIndex = Math.min(this.cnt - 1, lastIndex); // deal with in-between indices

    clippedFirstIndex = Math.ceil(clippedFirstIndex); // in-between starts round to next cell

    clippedLastIndex = Math.floor(clippedLastIndex); // in-between ends round to prev cell

    if (clippedFirstIndex <= clippedLastIndex) {
      return {
        firstIndex: clippedFirstIndex,
        lastIndex: clippedLastIndex,
        isStart: firstIndex === clippedFirstIndex,
        isEnd: lastIndex === clippedLastIndex
      };
    } else {
      return null;
    }
  }; // Given a date, returns its chronolocial cell-index from the first cell of the grid.
  // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
  // If before the first offset, returns a negative number.
  // If after the last offset, returns an offset past the last cell offset.
  // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.


  DaySeriesModel.prototype.getDateDayIndex = function (date) {
    var indices = this.indices;
    var dayOffset = Math.floor(diffDays(this.dates[0], date));

    if (dayOffset < 0) {
      return indices[0] - 1;
    } else if (dayOffset >= indices.length) {
      return indices[indices.length - 1] + 1;
    } else {
      return indices[dayOffset];
    }
  };

  return DaySeriesModel;
}();

var DayTableModel =
/** @class */
function () {
  function DayTableModel(daySeries, breakOnWeeks) {
    var dates = daySeries.dates;
    var daysPerRow;
    var firstDay;
    var rowCnt;

    if (breakOnWeeks) {
      // count columns until the day-of-week repeats
      firstDay = dates[0].getUTCDay();

      for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow++) {
        if (dates[daysPerRow].getUTCDay() === firstDay) {
          break;
        }
      }

      rowCnt = Math.ceil(dates.length / daysPerRow);
    } else {
      rowCnt = 1;
      daysPerRow = dates.length;
    }

    this.rowCnt = rowCnt;
    this.colCnt = daysPerRow;
    this.daySeries = daySeries;
    this.cells = this.buildCells();
    this.headerDates = this.buildHeaderDates();
  }

  DayTableModel.prototype.buildCells = function () {
    var rows = [];

    for (var row = 0; row < this.rowCnt; row++) {
      var cells = [];

      for (var col = 0; col < this.colCnt; col++) {
        cells.push(this.buildCell(row, col));
      }

      rows.push(cells);
    }

    return rows;
  };

  DayTableModel.prototype.buildCell = function (row, col) {
    var date = this.daySeries.dates[row * this.colCnt + col];
    return {
      key: date.toISOString(),
      date: date
    };
  };

  DayTableModel.prototype.buildHeaderDates = function () {
    var dates = [];

    for (var col = 0; col < this.colCnt; col++) {
      dates.push(this.cells[0][col].date);
    }

    return dates;
  };

  DayTableModel.prototype.sliceRange = function (range) {
    var colCnt = this.colCnt;
    var seriesSeg = this.daySeries.sliceRange(range);
    var segs = [];

    if (seriesSeg) {
      var firstIndex = seriesSeg.firstIndex,
          lastIndex = seriesSeg.lastIndex;
      var index = firstIndex;

      while (index <= lastIndex) {
        var row = Math.floor(index / colCnt);
        var nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
        segs.push({
          row: row,
          firstCol: index % colCnt,
          lastCol: (nextIndex - 1) % colCnt,
          isStart: seriesSeg.isStart && index === firstIndex,
          isEnd: seriesSeg.isEnd && nextIndex - 1 === lastIndex
        });
        index = nextIndex;
      }
    }

    return segs;
  };

  return DayTableModel;
}();

var Slicer =
/** @class */
function () {
  function Slicer() {
    this.sliceBusinessHours = memoize(this._sliceBusinessHours);
    this.sliceDateSelection = memoize(this._sliceDateSpan);
    this.sliceEventStore = memoize(this._sliceEventStore);
    this.sliceEventDrag = memoize(this._sliceInteraction);
    this.sliceEventResize = memoize(this._sliceInteraction);
    this.forceDayIfListItem = false; // hack
  }

  Slicer.prototype.sliceProps = function (props, dateProfile, nextDayThreshold, context) {
    var extraArgs = [];

    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }

    var eventUiBases = props.eventUiBases;
    var eventSegs = this.sliceEventStore.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([props.eventStore, eventUiBases, dateProfile, nextDayThreshold], extraArgs));
    return {
      dateSelectionSegs: this.sliceDateSelection.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([props.dateSelection, eventUiBases, context], extraArgs)),
      businessHourSegs: this.sliceBusinessHours.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([props.businessHours, dateProfile, nextDayThreshold, context], extraArgs)),
      fgEventSegs: eventSegs.fg,
      bgEventSegs: eventSegs.bg,
      eventDrag: this.sliceEventDrag.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([props.eventDrag, eventUiBases, dateProfile, nextDayThreshold], extraArgs)),
      eventResize: this.sliceEventResize.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([props.eventResize, eventUiBases, dateProfile, nextDayThreshold], extraArgs)),
      eventSelection: props.eventSelection
    }; // TODO: give interactionSegs?
  };

  Slicer.prototype.sliceNowDate = function ( // does not memoize
  date, context) {
    var extraArgs = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      extraArgs[_i - 2] = arguments[_i];
    }

    return this._sliceDateSpan.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([{
      range: {
        start: date,
        end: addMs(date, 1)
      },
      allDay: false
    }, {}, context], extraArgs));
  };

  Slicer.prototype._sliceBusinessHours = function (businessHours, dateProfile, nextDayThreshold, context) {
    var extraArgs = [];

    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }

    if (!businessHours) {
      return [];
    }

    return this._sliceEventStore.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), context), {}, dateProfile, nextDayThreshold], extraArgs)).bg;
  };

  Slicer.prototype._sliceEventStore = function (eventStore, eventUiBases, dateProfile, nextDayThreshold) {
    var extraArgs = [];

    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }

    if (eventStore) {
      var rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
      return {
        bg: this.sliceEventRanges(rangeRes.bg, extraArgs),
        fg: this.sliceEventRanges(rangeRes.fg, extraArgs)
      };
    } else {
      return {
        bg: [],
        fg: []
      };
    }
  };

  Slicer.prototype._sliceInteraction = function (interaction, eventUiBases, dateProfile, nextDayThreshold) {
    var extraArgs = [];

    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }

    if (!interaction) {
      return null;
    }

    var rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
    return {
      segs: this.sliceEventRanges(rangeRes.fg, extraArgs),
      affectedInstances: interaction.affectedEvents.instances,
      isEvent: interaction.isEvent
    };
  };

  Slicer.prototype._sliceDateSpan = function (dateSpan, eventUiBases, context) {
    var extraArgs = [];

    for (var _i = 3; _i < arguments.length; _i++) {
      extraArgs[_i - 3] = arguments[_i];
    }

    if (!dateSpan) {
      return [];
    }

    var eventRange = fabricateEventRange(dateSpan, eventUiBases, context);
    var segs = this.sliceRange.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([dateSpan.range], extraArgs));

    for (var _a = 0, segs_1 = segs; _a < segs_1.length; _a++) {
      var seg = segs_1[_a];
      seg.eventRange = eventRange;
    }

    return segs;
  };
  /*
  "complete" seg means it has component and eventRange
  */


  Slicer.prototype.sliceEventRanges = function (eventRanges, extraArgs) {
    var segs = [];

    for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
      var eventRange = eventRanges_1[_i];
      segs.push.apply(segs, this.sliceEventRange(eventRange, extraArgs));
    }

    return segs;
  };
  /*
  "complete" seg means it has component and eventRange
  */


  Slicer.prototype.sliceEventRange = function (eventRange, extraArgs) {
    var dateRange = eventRange.range; // hack to make multi-day events that are being force-displayed as list-items to take up only one day

    if (this.forceDayIfListItem && eventRange.ui.display === 'list-item') {
      dateRange = {
        start: dateRange.start,
        end: addDays(dateRange.start, 1)
      };
    }

    var segs = this.sliceRange.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([dateRange], extraArgs));

    for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
      var seg = segs_2[_i];
      seg.eventRange = eventRange;
      seg.isStart = eventRange.isStart && seg.isStart;
      seg.isEnd = eventRange.isEnd && seg.isEnd;
    }

    return segs;
  };

  return Slicer;
}();
/*
for incorporating slotMinTime/slotMaxTime if appropriate
TODO: should be part of DateProfile!
TimelineDateProfile already does this btw
*/


function computeActiveRange(dateProfile, isComponentAllDay) {
  var range = dateProfile.activeRange;

  if (isComponentAllDay) {
    return range;
  }

  return {
    start: addMs(range.start, dateProfile.slotMinTime.milliseconds),
    end: addMs(range.end, dateProfile.slotMaxTime.milliseconds - 864e5) // 864e5 = ms in a day

  };
}

var VISIBLE_HIDDEN_RE = /^(visible|hidden)$/;

var Scroller =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(Scroller, _super);

  function Scroller() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleEl = function (el) {
      _this.el = el;
      setRef(_this.props.elRef, el);
    };

    return _this;
  }

  Scroller.prototype.render = function () {
    var props = this.props;
    var liquid = props.liquid,
        liquidIsAbsolute = props.liquidIsAbsolute;
    var isAbsolute = liquid && liquidIsAbsolute;
    var className = ['fc-scroller'];

    if (liquid) {
      if (liquidIsAbsolute) {
        className.push('fc-scroller-liquid-absolute');
      } else {
        className.push('fc-scroller-liquid');
      }
    }

    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      ref: this.handleEl,
      className: className.join(' '),
      style: {
        overflowX: props.overflowX,
        overflowY: props.overflowY,
        left: isAbsolute && -(props.overcomeLeft || 0) || '',
        right: isAbsolute && -(props.overcomeRight || 0) || '',
        bottom: isAbsolute && -(props.overcomeBottom || 0) || '',
        marginLeft: !isAbsolute && -(props.overcomeLeft || 0) || '',
        marginRight: !isAbsolute && -(props.overcomeRight || 0) || '',
        marginBottom: !isAbsolute && -(props.overcomeBottom || 0) || '',
        maxHeight: props.maxHeight || ''
      }
    }, props.children);
  };

  Scroller.prototype.needsXScrolling = function () {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
      return false;
    } // testing scrollWidth>clientWidth is unreliable cross-browser when pixel heights aren't integers.
    // much more reliable to see if children are taller than the scroller, even tho doesn't account for
    // inner-child margins and absolute positioning


    var el = this.el;
    var realClientWidth = this.el.getBoundingClientRect().width - this.getYScrollbarWidth();
    var children = el.children;

    for (var i = 0; i < children.length; i++) {
      var childEl = children[i];

      if (childEl.getBoundingClientRect().width > realClientWidth) {
        return true;
      }
    }

    return false;
  };

  Scroller.prototype.needsYScrolling = function () {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
      return false;
    } // testing scrollHeight>clientHeight is unreliable cross-browser when pixel heights aren't integers.
    // much more reliable to see if children are taller than the scroller, even tho doesn't account for
    // inner-child margins and absolute positioning


    var el = this.el;
    var realClientHeight = this.el.getBoundingClientRect().height - this.getXScrollbarWidth();
    var children = el.children;

    for (var i = 0; i < children.length; i++) {
      var childEl = children[i];

      if (childEl.getBoundingClientRect().height > realClientHeight) {
        return true;
      }
    }

    return false;
  };

  Scroller.prototype.getXScrollbarWidth = function () {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
      return 0;
    } else {
      return this.el.offsetHeight - this.el.clientHeight; // only works because we guarantee no borders. TODO: add to CSS with important?
    }
  };

  Scroller.prototype.getYScrollbarWidth = function () {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
      return 0;
    } else {
      return this.el.offsetWidth - this.el.clientWidth; // only works because we guarantee no borders. TODO: add to CSS with important?
    }
  };

  return Scroller;
}(BaseComponent);
/*
TODO: somehow infer OtherArgs from masterCallback?
TODO: infer RefType from masterCallback if provided
*/


var RefMap =
/** @class */
function () {
  function RefMap(masterCallback) {
    var _this = this;

    this.masterCallback = masterCallback;
    this.currentMap = {};
    this.depths = {};
    this.callbackMap = {};

    this.handleValue = function (val, key) {
      var _a = _this,
          depths = _a.depths,
          currentMap = _a.currentMap;
      var removed = false;
      var added = false;

      if (val !== null) {
        removed = key in currentMap; // for bug... ACTUALLY: can probably do away with this now that callers don't share numeric indices anymore

        currentMap[key] = val;
        depths[key] = (depths[key] || 0) + 1;
        added = true;
      } else if (--depths[key] === 0) {
        delete currentMap[key];
        delete _this.callbackMap[key];
        removed = true;
      }

      if (_this.masterCallback) {
        if (removed) {
          _this.masterCallback(null, String(key));
        }

        if (added) {
          _this.masterCallback(val, String(key));
        }
      }
    };
  }

  RefMap.prototype.createRef = function (key) {
    var _this = this;

    var refCallback = this.callbackMap[key];

    if (!refCallback) {
      refCallback = this.callbackMap[key] = function (val) {
        _this.handleValue(val, String(key));
      };
    }

    return refCallback;
  }; // TODO: check callers that don't care about order. should use getAll instead
  // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
  // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"


  RefMap.prototype.collect = function (startIndex, endIndex, step) {
    return collectFromHash(this.currentMap, startIndex, endIndex, step);
  };

  RefMap.prototype.getAll = function () {
    return hashValuesToArray(this.currentMap);
  };

  return RefMap;
}();

function computeShrinkWidth(chunkEls) {
  var shrinkCells = findElements(chunkEls, '.fc-scrollgrid-shrink');
  var largestWidth = 0;

  for (var _i = 0, shrinkCells_1 = shrinkCells; _i < shrinkCells_1.length; _i++) {
    var shrinkCell = shrinkCells_1[_i];
    largestWidth = Math.max(largestWidth, computeSmallestCellWidth(shrinkCell));
  }

  return Math.ceil(largestWidth); // <table> elements work best with integers. round up to ensure contents fits
}

function getSectionHasLiquidHeight(props, sectionConfig) {
  return props.liquid && sectionConfig.liquid; // does the section do liquid-height? (need to have whole scrollgrid liquid-height as well)
}

function getAllowYScrolling(props, sectionConfig) {
  return sectionConfig.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  getSectionHasLiquidHeight(props, sectionConfig); // if the section is liquid height, it might condense enough to require scrollbars
} // TODO: ONLY use `arg`. force out internal function to use same API


function renderChunkContent(sectionConfig, chunkConfig, arg) {
  var expandRows = arg.expandRows;
  var content = typeof chunkConfig.content === 'function' ? chunkConfig.content(arg) : Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])('table', {
    className: [chunkConfig.tableClassName, sectionConfig.syncRowHeights ? 'fc-scrollgrid-sync-table' : ''].join(' '),
    style: {
      minWidth: arg.tableMinWidth,
      width: arg.clientWidth,
      height: expandRows ? arg.clientHeight : '' // css `height` on a <table> serves as a min-height

    }
  }, arg.tableColGroupNode, Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])('tbody', {}, typeof chunkConfig.rowContent === 'function' ? chunkConfig.rowContent(arg) : chunkConfig.rowContent));
  return content;
}

function isColPropsEqual(cols0, cols1) {
  return isArraysEqual(cols0, cols1, isPropsEqual);
}

function renderMicroColGroup(cols, shrinkWidth) {
  var colNodes = [];
  /*
  for ColProps with spans, it would have been great to make a single <col span="">
  HOWEVER, Chrome was getting messing up distributing the width to <td>/<th> elements with colspans.
  SOLUTION: making individual <col> elements makes Chrome behave.
  */

  for (var _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
    var colProps = cols_1[_i];
    var span = colProps.span || 1;

    for (var i = 0; i < span; i++) {
      colNodes.push(Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("col", {
        style: {
          width: colProps.width === 'shrink' ? sanitizeShrinkWidth(shrinkWidth) : colProps.width || '',
          minWidth: colProps.minWidth || ''
        }
      }));
    }
  }

  return _vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])(['colgroup', {}], colNodes));
}

function sanitizeShrinkWidth(shrinkWidth) {
  /* why 4? if we do 0, it will kill any border, which are needed for computeSmallestCellWidth
  4 accounts for 2 2-pixel borders. TODO: better solution? */
  return shrinkWidth == null ? 4 : shrinkWidth;
}

function hasShrinkWidth(cols) {
  for (var _i = 0, cols_2 = cols; _i < cols_2.length; _i++) {
    var col = cols_2[_i];

    if (col.width === 'shrink') {
      return true;
    }
  }

  return false;
}

function getScrollGridClassNames(liquid, context) {
  var classNames = ['fc-scrollgrid', context.theme.getClass('table')];

  if (liquid) {
    classNames.push('fc-scrollgrid-liquid');
  }

  return classNames;
}

function getSectionClassNames(sectionConfig, wholeTableVGrow) {
  var classNames = ['fc-scrollgrid-section', 'fc-scrollgrid-section-' + sectionConfig.type, sectionConfig.className // used?
  ];

  if (wholeTableVGrow && sectionConfig.liquid && sectionConfig.maxHeight == null) {
    classNames.push('fc-scrollgrid-section-liquid');
  }

  if (sectionConfig.isSticky) {
    classNames.push('fc-scrollgrid-section-sticky');
  }

  return classNames;
}

function renderScrollShim(arg) {
  return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'fc-scrollgrid-sticky-shim',
    style: {
      width: arg.clientWidth,
      minWidth: arg.tableMinWidth
    }
  });
}

function getStickyHeaderDates(options) {
  var stickyHeaderDates = options.stickyHeaderDates;

  if (stickyHeaderDates == null || stickyHeaderDates === 'auto') {
    stickyHeaderDates = options.height === 'auto' || options.viewHeight === 'auto';
  }

  return stickyHeaderDates;
}

function getStickyFooterScrollbar(options) {
  var stickyFooterScrollbar = options.stickyFooterScrollbar;

  if (stickyFooterScrollbar == null || stickyFooterScrollbar === 'auto') {
    stickyFooterScrollbar = options.height === 'auto' || options.viewHeight === 'auto';
  }

  return stickyFooterScrollbar;
}

var SimpleScrollGrid =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(SimpleScrollGrid, _super);

  function SimpleScrollGrid() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.processCols = memoize(function (a) {
      return a;
    }, isColPropsEqual); // so we get same `cols` props every time

    _this.renderMicroColGroup = memoize(renderMicroColGroup); // yucky to memoize VNodes, but much more efficient for consumers

    _this.scrollerRefs = new RefMap();
    _this.scrollerElRefs = new RefMap(_this._handleScrollerEl.bind(_this));
    _this.state = {
      shrinkWidth: null,
      forceYScrollbars: false,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }; // TODO: can do a really simple print-view. dont need to join rows

    _this.handleSizing = function () {
      _this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({
        shrinkWidth: _this.computeShrinkWidth()
      }, _this.computeScrollerDims()));
    };

    return _this;
  }

  SimpleScrollGrid.prototype.render = function () {
    var _a = this,
        props = _a.props,
        state = _a.state,
        context = _a.context;

    var sectionConfigs = props.sections || [];
    var cols = this.processCols(props.cols);
    var microColGroupNode = this.renderMicroColGroup(cols, state.shrinkWidth);
    var classNames = getScrollGridClassNames(props.liquid, context); // TODO: make DRY

    var configCnt = sectionConfigs.length;
    var configI = 0;
    var currentConfig;
    var headSectionNodes = [];
    var bodySectionNodes = [];
    var footSectionNodes = [];

    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'header') {
      headSectionNodes.push(this.renderSection(currentConfig, configI, microColGroupNode));
      configI++;
    }

    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'body') {
      bodySectionNodes.push(this.renderSection(currentConfig, configI, microColGroupNode));
      configI++;
    }

    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'footer') {
      footSectionNodes.push(this.renderSection(currentConfig, configI, microColGroupNode));
      configI++;
    } // firefox bug: when setting height on table and there is a thead or tfoot,
    // the necessary height:100% on the liquid-height body section forces the *whole* table to be taller. (bug #5524)
    // use getCanVGrowWithinCell as a way to detect table-stupid firefox.
    // if so, use a simpler dom structure, jam everything into a lone tbody.


    var isBuggy = !getCanVGrowWithinCell();
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])('table', {
      className: classNames.join(' '),
      style: {
        height: props.height
      }
    }, Boolean(!isBuggy && headSectionNodes.length) && _vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])(['thead', {}], headSectionNodes)), Boolean(!isBuggy && bodySectionNodes.length) && _vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])(['tbody', {}], bodySectionNodes)), Boolean(!isBuggy && footSectionNodes.length) && _vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])(['tfoot', {}], footSectionNodes)), isBuggy && _vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])(['tbody', {}], headSectionNodes, bodySectionNodes, footSectionNodes)));
  };

  SimpleScrollGrid.prototype.renderSection = function (sectionConfig, sectionI, microColGroupNode) {
    if ('outerContent' in sectionConfig) {
      return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_vdom__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
        key: sectionConfig.key
      }, sectionConfig.outerContent);
    }

    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("tr", {
      key: sectionConfig.key,
      className: getSectionClassNames(sectionConfig, this.props.liquid).join(' ')
    }, this.renderChunkTd(sectionConfig, sectionI, microColGroupNode, sectionConfig.chunk));
  };

  SimpleScrollGrid.prototype.renderChunkTd = function (sectionConfig, sectionI, microColGroupNode, chunkConfig) {
    if ('outerContent' in chunkConfig) {
      return chunkConfig.outerContent;
    }

    var props = this.props;
    var _a = this.state,
        forceYScrollbars = _a.forceYScrollbars,
        scrollerClientWidths = _a.scrollerClientWidths,
        scrollerClientHeights = _a.scrollerClientHeights;
    var needsYScrolling = getAllowYScrolling(props, sectionConfig); // TODO: do lazily. do in section config?

    var isLiquid = getSectionHasLiquidHeight(props, sectionConfig); // for `!props.liquid` - is WHOLE scrollgrid natural height?
    // TODO: do same thing in advanced scrollgrid? prolly not b/c always has horizontal scrollbars

    var overflowY = !props.liquid ? 'visible' : forceYScrollbars ? 'scroll' : !needsYScrolling ? 'hidden' : 'auto';
    var content = renderChunkContent(sectionConfig, chunkConfig, {
      tableColGroupNode: microColGroupNode,
      tableMinWidth: '',
      clientWidth: scrollerClientWidths[sectionI] !== undefined ? scrollerClientWidths[sectionI] : null,
      clientHeight: scrollerClientHeights[sectionI] !== undefined ? scrollerClientHeights[sectionI] : null,
      expandRows: sectionConfig.expandRows,
      syncRowHeights: false,
      rowSyncHeights: [],
      reportRowHeightChange: function reportRowHeightChange() {}
    });
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("td", {
      ref: chunkConfig.elRef
    }, Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: 'fc-scroller-harness' + (isLiquid ? ' fc-scroller-harness-liquid' : '')
    }, Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Scroller, {
      ref: this.scrollerRefs.createRef(sectionI),
      elRef: this.scrollerElRefs.createRef(sectionI),
      overflowY: overflowY,
      overflowX: !props.liquid ? 'visible' : 'hidden'
      /* natural height? */
      ,
      maxHeight: sectionConfig.maxHeight,
      liquid: isLiquid,
      liquidIsAbsolute: true
      /* because its within a harness */

    }, content)));
  };

  SimpleScrollGrid.prototype._handleScrollerEl = function (scrollerEl, key) {
    var sectionI = parseInt(key, 10);
    var chunkConfig = this.props.sections[sectionI].chunk;
    setRef(chunkConfig.scrollerElRef, scrollerEl);
  };

  SimpleScrollGrid.prototype.componentDidMount = function () {
    this.handleSizing();
    this.context.addResizeHandler(this.handleSizing);
  };

  SimpleScrollGrid.prototype.componentDidUpdate = function () {
    // TODO: need better solution when state contains non-sizing things
    this.handleSizing();
  };

  SimpleScrollGrid.prototype.componentWillUnmount = function () {
    this.context.removeResizeHandler(this.handleSizing);
  };

  SimpleScrollGrid.prototype.computeShrinkWidth = function () {
    return hasShrinkWidth(this.props.cols) ? computeShrinkWidth(this.scrollerElRefs.getAll()) : 0;
  };

  SimpleScrollGrid.prototype.computeScrollerDims = function () {
    var scrollbarWidth = getScrollbarWidths();
    var sectionCnt = this.props.sections.length;

    var _a = this,
        scrollerRefs = _a.scrollerRefs,
        scrollerElRefs = _a.scrollerElRefs;

    var forceYScrollbars = false;
    var scrollerClientWidths = {};
    var scrollerClientHeights = {};

    for (var sectionI = 0; sectionI < sectionCnt; sectionI++) {
      // along edge
      var scroller = scrollerRefs.currentMap[sectionI];

      if (scroller && scroller.needsYScrolling()) {
        forceYScrollbars = true;
        break;
      }
    }

    for (var sectionI = 0; sectionI < sectionCnt; sectionI++) {
      // along edge
      var scrollerEl = scrollerElRefs.currentMap[sectionI];

      if (scrollerEl) {
        var harnessEl = scrollerEl.parentNode; // TODO: weird way to get this. need harness b/c doesn't include table borders

        scrollerClientWidths[sectionI] = Math.floor(harnessEl.getBoundingClientRect().width - (forceYScrollbars ? scrollbarWidth.y // use global because scroller might not have scrollbars yet but will need them in future
        : 0));
        scrollerClientHeights[sectionI] = Math.floor(harnessEl.getBoundingClientRect().height // never has horizontal scrollbars
        );
      }
    }

    return {
      forceYScrollbars: forceYScrollbars,
      scrollerClientWidths: scrollerClientWidths,
      scrollerClientHeights: scrollerClientHeights
    };
  };

  return SimpleScrollGrid;
}(BaseComponent);

SimpleScrollGrid.addStateEquality({
  scrollerClientWidths: isPropsEqual,
  scrollerClientHeights: isPropsEqual
});

var EventRoot =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(EventRoot, _super);

  function EventRoot() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.elRef = Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
    return _this;
  }

  EventRoot.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var options = context.options;
    var seg = props.seg;
    var eventRange = seg.eventRange;
    var ui = eventRange.ui;
    var hookProps = {
      event: new EventApi(context, eventRange.def, eventRange.instance),
      view: context.viewApi,
      timeText: props.timeText,
      textColor: ui.textColor,
      backgroundColor: ui.backgroundColor,
      borderColor: ui.borderColor,
      isDraggable: !props.disableDragging && computeSegDraggable(seg, context),
      isStartResizable: !props.disableResizing && computeSegStartResizable(seg, context),
      isEndResizable: !props.disableResizing && computeSegEndResizable(seg),
      isMirror: Boolean(props.isDragging || props.isResizing || props.isDateSelecting),
      isStart: Boolean(seg.isStart),
      isEnd: Boolean(seg.isEnd),
      isPast: Boolean(props.isPast),
      isFuture: Boolean(props.isFuture),
      isToday: Boolean(props.isToday),
      isSelected: Boolean(props.isSelected),
      isDragging: Boolean(props.isDragging),
      isResizing: Boolean(props.isResizing)
    };
    var standardClassNames = getEventClassNames(hookProps).concat(ui.classNames);
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RenderHook, {
      hookProps: hookProps,
      classNames: options.eventClassNames,
      content: options.eventContent,
      defaultContent: props.defaultContent,
      didMount: options.eventDidMount,
      willUnmount: options.eventWillUnmount,
      elRef: this.elRef
    }, function (rootElRef, customClassNames, innerElRef, innerContent) {
      return props.children(rootElRef, standardClassNames.concat(customClassNames), innerElRef, innerContent, hookProps);
    });
  };

  EventRoot.prototype.componentDidMount = function () {
    setElSeg(this.elRef.current, this.props.seg);
  };
  /*
  need to re-assign seg to the element if seg changes, even if the element is the same
  */


  EventRoot.prototype.componentDidUpdate = function (prevProps) {
    var seg = this.props.seg;

    if (seg !== prevProps.seg) {
      setElSeg(this.elRef.current, seg);
    }
  };

  return EventRoot;
}(BaseComponent); // should not be a purecomponent


var StandardEvent =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(StandardEvent, _super);

  function StandardEvent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  StandardEvent.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var seg = props.seg;
    var timeFormat = context.options.eventTimeFormat || props.defaultTimeFormat;
    var timeText = buildSegTimeText(seg, timeFormat, context, props.defaultDisplayEventTime, props.defaultDisplayEventEnd);
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(EventRoot, {
      seg: seg,
      timeText: timeText,
      disableDragging: props.disableDragging,
      disableResizing: props.disableResizing,
      defaultContent: props.defaultContent || renderInnerContent,
      isDragging: props.isDragging,
      isResizing: props.isResizing,
      isDateSelecting: props.isDateSelecting,
      isSelected: props.isSelected,
      isPast: props.isPast,
      isFuture: props.isFuture,
      isToday: props.isToday
    }, function (rootElRef, classNames, innerElRef, innerContent, hookProps) {
      return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({
        className: props.extraClassNames.concat(classNames).join(' '),
        style: {
          borderColor: hookProps.borderColor,
          backgroundColor: hookProps.backgroundColor
        },
        ref: rootElRef
      }, getSegAnchorAttrs(seg)), Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: 'fc-event-main',
        ref: innerElRef,
        style: {
          color: hookProps.textColor
        }
      }, innerContent), hookProps.isStartResizable && Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: 'fc-event-resizer fc-event-resizer-start'
      }), hookProps.isEndResizable && Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: 'fc-event-resizer fc-event-resizer-end'
      }));
    });
  };

  return StandardEvent;
}(BaseComponent);

function renderInnerContent(innerProps) {
  return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'fc-event-main-frame'
  }, innerProps.timeText && Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'fc-event-time'
  }, innerProps.timeText), Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'fc-event-title-container'
  }, Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'fc-event-title fc-sticky'
  }, innerProps.event.title || Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_vdom__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, "\xA0"))));
}

function getSegAnchorAttrs(seg) {
  var url = seg.eventRange.def.url;
  return url ? {
    href: url
  } : {};
}

var NowIndicatorRoot = function NowIndicatorRoot(props) {
  return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ViewContextType.Consumer, null, function (context) {
    var options = context.options;
    var hookProps = {
      isAxis: props.isAxis,
      date: context.dateEnv.toDate(props.date),
      view: context.viewApi
    };
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RenderHook, {
      hookProps: hookProps,
      classNames: options.nowIndicatorClassNames,
      content: options.nowIndicatorContent,
      didMount: options.nowIndicatorDidMount,
      willUnmount: options.nowIndicatorWillUnmount
    }, props.children);
  });
};

var DAY_NUM_FORMAT = createFormatter({
  day: 'numeric'
});

var DayCellRoot =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(DayCellRoot, _super);

  function DayCellRoot() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.refineHookProps = memoizeObjArg(refineHookProps);
    _this.normalizeClassNames = buildClassNameNormalizer();
    return _this;
  }

  DayCellRoot.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var options = context.options;
    var hookProps = this.refineHookProps({
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraProps: props.extraHookProps,
      viewApi: context.viewApi,
      dateEnv: context.dateEnv
    });
    var classNames = getDayClassNames(hookProps, context.theme).concat(hookProps.isDisabled ? [] // don't use custom classNames if disabled
    : this.normalizeClassNames(options.dayCellClassNames, hookProps));
    var dataAttrs = hookProps.isDisabled ? {} : {
      'data-date': formatDayString(props.date)
    };
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(MountHook, {
      hookProps: hookProps,
      didMount: options.dayCellDidMount,
      willUnmount: options.dayCellWillUnmount,
      elRef: props.elRef
    }, function (rootElRef) {
      return props.children(rootElRef, classNames, dataAttrs, hookProps.isDisabled);
    });
  };

  return DayCellRoot;
}(BaseComponent);

var DayCellContent =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(DayCellContent, _super);

  function DayCellContent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DayCellContent.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var options = context.options;
    var hookProps = refineHookProps({
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraProps: props.extraHookProps,
      viewApi: context.viewApi,
      dateEnv: context.dateEnv
    });
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ContentHook, {
      hookProps: hookProps,
      content: options.dayCellContent,
      defaultContent: props.defaultContent
    }, props.children);
  };

  return DayCellContent;
}(BaseComponent);

function refineHookProps(raw) {
  var date = raw.date,
      dateEnv = raw.dateEnv;
  var dayMeta = getDateMeta(date, raw.todayRange, null, raw.dateProfile);
  return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({
    date: dateEnv.toDate(date),
    view: raw.viewApi
  }, dayMeta), {
    dayNumberText: raw.showDayNumber ? dateEnv.format(date, DAY_NUM_FORMAT) : ''
  }), raw.extraProps);
}

function renderFill(fillType) {
  return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "fc-" + fillType
  });
}

var BgEvent = function BgEvent(props) {
  return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(EventRoot, {
    defaultContent: renderInnerContent$1,
    seg: props.seg
    /* uselesss i think */
    ,
    timeText: ''
    /* weird */
    ,
    disableDragging: true,
    disableResizing: true,
    isDragging: false,
    isResizing: false,
    isDateSelecting: false,
    isSelected: false,
    isPast: props.isPast,
    isFuture: props.isFuture,
    isToday: props.isToday
  }, function (rootElRef, classNames, innerElRef, innerContent, hookProps) {
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      ref: rootElRef,
      className: ['fc-bg-event'].concat(classNames).join(' '),
      style: {
        backgroundColor: hookProps.backgroundColor
      }
    }, innerContent);
  });
};

function renderInnerContent$1(props) {
  var title = props.event.title;
  return title && Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: 'fc-event-title'
  }, props.event.title);
}

var WeekNumberRoot = function WeekNumberRoot(props) {
  return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ViewContextType.Consumer, null, function (context) {
    var dateEnv = context.dateEnv,
        options = context.options;
    var date = props.date;
    var format = options.weekNumberFormat || props.defaultFormat;
    var num = dateEnv.computeWeekNumber(date); // TODO: somehow use for formatting as well?

    var text = dateEnv.format(date, format);
    var hookProps = {
      num: num,
      text: text,
      date: date
    };
    return Object(_vdom__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RenderHook, {
      hookProps: hookProps,
      classNames: options.weekNumberClassNames,
      content: options.weekNumberContent,
      defaultContent: renderInner$1,
      didMount: options.weekNumberDidMount,
      willUnmount: options.weekNumberWillUnmount
    }, props.children);
  });
};

function renderInner$1(innerProps) {
  return innerProps.text;
} // exports
// --------------------------------------------------------------------------------------------------


var version = '5.3.1'; // important to type it, so .d.ts has generic string



/***/ }),

/***/ "./node_modules/@fullcalendar/common/vdom.js":
/*!***************************************************!*\
  !*** ./node_modules/@fullcalendar/common/vdom.js ***!
  \***************************************************/
/*! exports provided: Component, createElement, render, createRef, Fragment, createContext, flushToDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return Fragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return createContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flushToDom", function() { return flushToDom; });
if (typeof FullCalendarVDom === 'undefined') {
  throw new Error('Please import the top-level fullcalendar lib before attempting to import a plugin.');
}

var Component = FullCalendarVDom.Component;
var createElement = FullCalendarVDom.createElement;
var render = FullCalendarVDom.render;
var createRef = FullCalendarVDom.createRef;
var Fragment = FullCalendarVDom.Fragment;
var createContext = FullCalendarVDom.createContext;
var flushToDom = FullCalendarVDom.flushToDom;

/***/ }),

/***/ "./node_modules/@fullcalendar/core/main.js":
/*!*************************************************!*\
  !*** ./node_modules/@fullcalendar/core/main.js ***!
  \*************************************************/
/*! exports provided: Component, createElement, render, createRef, Fragment, createContext, flushToDom, BASE_OPTION_DEFAULTS, BASE_OPTION_REFINERS, BaseComponent, BgEvent, CalendarApi, CalendarContent, CalendarDataManager, CalendarDataProvider, CalendarRoot, ContentHook, CustomContentRenderContext, DateComponent, DateEnv, DateProfileGenerator, DayCellContent, DayCellRoot, DayHeader, DaySeriesModel, DayTableModel, DelayedRunner, ElementDragging, ElementScrollController, Emitter, EventApi, EventRoot, EventSourceApi, Interaction, MountHook, NamedTimeZoneImpl, NowIndicatorRoot, NowTimer, PositionCache, RefMap, RenderHook, ScrollController, ScrollResponder, Scroller, SimpleScrollGrid, Slicer, Splitter, StandardEvent, TableDateCell, TableDowCell, Theme, ViewApi, ViewContextType, ViewRoot, WeekNumberRoot, WindowScrollController, addDays, addDurations, addMs, addWeeks, allowContextMenu, allowSelection, applyMutationToEventStore, applyStyle, applyStyleProp, asCleanDays, asRoughMinutes, asRoughMs, asRoughSeconds, buildClassNameNormalizer, buildEventApis, buildEventRangeKey, buildHashFromArray, buildNavLinkData, buildSegCompareObj, buildSegTimeText, collectFromHash, combineEventUis, compareByFieldSpec, compareByFieldSpecs, compareNumbers, compareObjs, computeEdges, computeFallbackHeaderFormat, computeHeightAndMargins, computeInnerRect, computeRect, computeSegDraggable, computeSegEndResizable, computeSegStartResizable, computeShrinkWidth, computeSmallestCellWidth, computeVisibleDayRange, config, constrainPoint, createDuration, createEmptyEventStore, createEventInstance, createEventUi, createFormatter, createPlugin, diffDates, diffDayAndTime, diffDays, diffPoints, diffWeeks, diffWholeDays, diffWholeWeeks, disableCursor, elementClosest, elementMatches, enableCursor, eventTupleToStore, filterEventStoreDefs, filterHash, findDirectChildren, findElements, flexibleCompare, formatDate, formatDayString, formatIsoTimeString, formatRange, getAllowYScrolling, getCanVGrowWithinCell, getClippingParents, getDateMeta, getDayClassNames, getDefaultEventEnd, getElSeg, getEventClassNames, getIsRtlScrollbarOnLeft, getRectCenter, getRelevantEvents, getScrollGridClassNames, getScrollbarWidths, getSectionClassNames, getSectionHasLiquidHeight, getSegMeta, getSlotClassNames, getStickyFooterScrollbar, getStickyHeaderDates, getUnequalProps, globalLocales, globalPlugins, greatestDurationDenominator, guid, hasBgRendering, hasShrinkWidth, identity, interactionSettingsStore, interactionSettingsToStore, intersectRanges, intersectRects, isArraysEqual, isColPropsEqual, isDateSpansEqual, isInt, isInteractionValid, isMultiDayRange, isPropsEqual, isPropsValid, isValidDate, listenBySelector, mapHash, memoize, memoizeArraylike, memoizeHashlike, memoizeObjArg, mergeEventStores, multiplyDuration, padStart, parseBusinessHours, parseClassNames, parseDragMeta, parseEventDef, parseFieldSpecs, parseMarker, pointInsideRect, preventContextMenu, preventDefault, preventSelection, rangeContainsMarker, rangeContainsRange, rangesEqual, rangesIntersect, refineEventDef, refineProps, removeElement, removeExact, renderChunkContent, renderFill, renderMicroColGroup, renderScrollShim, requestJson, sanitizeShrinkWidth, setElSeg, setRef, sliceEventStore, sliceEvents, sortEventSegs, startOfDay, translateRect, triggerDateSelect, unpromisify, version, whenTransitionDone, wholeDivideDurations, Calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return Calendar; });
/* harmony import */ var _vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vdom */ "./node_modules/@fullcalendar/core/vdom.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/common */ "./node_modules/@fullcalendar/common/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flushToDom", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["flushToDom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_OPTION_DEFAULTS", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["BASE_OPTION_DEFAULTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_OPTION_REFINERS", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["BASE_OPTION_REFINERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BgEvent", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["BgEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarApi", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["CalendarApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarContent", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["CalendarContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarDataManager", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["CalendarDataManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarDataProvider", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["CalendarDataProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarRoot", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["CalendarRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentHook", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["ContentHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomContentRenderContext", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["CustomContentRenderContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateComponent", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["DateComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateEnv", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["DateEnv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateProfileGenerator", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["DateProfileGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DayCellContent", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["DayCellContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DayCellRoot", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["DayCellRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DayHeader", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["DayHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DaySeriesModel", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["DaySeriesModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DayTableModel", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["DayTableModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DelayedRunner", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["DelayedRunner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementDragging", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["ElementDragging"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementScrollController", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["ElementScrollController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["Emitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventApi", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["EventApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventRoot", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["EventRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventSourceApi", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["EventSourceApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interaction", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["Interaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MountHook", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["MountHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NamedTimeZoneImpl", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["NamedTimeZoneImpl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NowIndicatorRoot", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["NowIndicatorRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NowTimer", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["NowTimer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PositionCache", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["PositionCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefMap", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["RefMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderHook", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["RenderHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollController", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["ScrollController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollResponder", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["ScrollResponder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scroller", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["Scroller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleScrollGrid", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["SimpleScrollGrid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slicer", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["Slicer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Splitter", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["Splitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StandardEvent", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["StandardEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableDateCell", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["TableDateCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableDowCell", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["TableDowCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["Theme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewApi", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["ViewApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewContextType", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["ViewContextType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewRoot", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["ViewRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeekNumberRoot", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["WeekNumberRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowScrollController", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["WindowScrollController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["addDays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addDurations", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["addDurations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMs", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["addMs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addWeeks", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["addWeeks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allowContextMenu", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["allowContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allowSelection", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["allowSelection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMutationToEventStore", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["applyMutationToEventStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyle", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["applyStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyleProp", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["applyStyleProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asCleanDays", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["asCleanDays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asRoughMinutes", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["asRoughMinutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asRoughMs", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["asRoughMs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asRoughSeconds", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["asRoughSeconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildClassNameNormalizer", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["buildClassNameNormalizer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildEventApis", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["buildEventApis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildEventRangeKey", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["buildEventRangeKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildHashFromArray", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["buildHashFromArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildNavLinkData", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["buildNavLinkData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildSegCompareObj", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["buildSegCompareObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildSegTimeText", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["buildSegTimeText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collectFromHash", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["collectFromHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineEventUis", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["combineEventUis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareByFieldSpec", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["compareByFieldSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareByFieldSpecs", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["compareByFieldSpecs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareNumbers", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["compareNumbers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareObjs", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["compareObjs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeEdges", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["computeEdges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeFallbackHeaderFormat", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["computeFallbackHeaderFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeHeightAndMargins", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["computeHeightAndMargins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeInnerRect", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["computeInnerRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeRect", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["computeRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeSegDraggable", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["computeSegDraggable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeSegEndResizable", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["computeSegEndResizable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeSegStartResizable", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["computeSegStartResizable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeShrinkWidth", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["computeShrinkWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeSmallestCellWidth", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["computeSmallestCellWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeVisibleDayRange", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["computeVisibleDayRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["config"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constrainPoint", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["constrainPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDuration", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["createDuration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEmptyEventStore", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["createEmptyEventStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEventInstance", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["createEventInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEventUi", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["createEventUi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFormatter", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["createFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPlugin", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["createPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "diffDates", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["diffDates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "diffDayAndTime", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["diffDayAndTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "diffDays", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["diffDays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "diffPoints", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["diffPoints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "diffWeeks", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["diffWeeks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "diffWholeDays", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["diffWholeDays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "diffWholeWeeks", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["diffWholeWeeks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableCursor", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["disableCursor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementClosest", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["elementClosest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementMatches", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["elementMatches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableCursor", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["enableCursor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventTupleToStore", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["eventTupleToStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterEventStoreDefs", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["filterEventStoreDefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterHash", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["filterHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDirectChildren", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["findDirectChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findElements", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["findElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexibleCompare", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["flexibleCompare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDayString", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["formatDayString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatIsoTimeString", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["formatIsoTimeString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatRange", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["formatRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllowYScrolling", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getAllowYScrolling"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCanVGrowWithinCell", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getCanVGrowWithinCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClippingParents", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getClippingParents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDateMeta", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getDateMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDayClassNames", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getDayClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultEventEnd", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getDefaultEventEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElSeg", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getElSeg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEventClassNames", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getEventClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsRtlScrollbarOnLeft", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getIsRtlScrollbarOnLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRectCenter", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getRectCenter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelevantEvents", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getRelevantEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScrollGridClassNames", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getScrollGridClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidths", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getScrollbarWidths"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSectionClassNames", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getSectionClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSectionHasLiquidHeight", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getSectionHasLiquidHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSegMeta", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getSegMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSlotClassNames", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getSlotClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStickyFooterScrollbar", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getStickyFooterScrollbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStickyHeaderDates", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getStickyHeaderDates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUnequalProps", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["getUnequalProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "globalLocales", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["globalLocales"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "globalPlugins", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["globalPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "greatestDurationDenominator", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["greatestDurationDenominator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["guid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasBgRendering", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["hasBgRendering"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasShrinkWidth", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["hasShrinkWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interactionSettingsStore", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["interactionSettingsStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interactionSettingsToStore", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["interactionSettingsToStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersectRanges", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["intersectRanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersectRects", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["intersectRects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArraysEqual", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["isArraysEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isColPropsEqual", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["isColPropsEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDateSpansEqual", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["isDateSpansEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInt", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["isInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInteractionValid", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["isInteractionValid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMultiDayRange", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["isMultiDayRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPropsEqual", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["isPropsEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPropsValid", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["isPropsValid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidDate", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["isValidDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listenBySelector", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["listenBySelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapHash", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["mapHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["memoize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoizeArraylike", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["memoizeArraylike"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoizeHashlike", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["memoizeHashlike"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoizeObjArg", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["memoizeObjArg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeEventStores", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["mergeEventStores"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiplyDuration", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["multiplyDuration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "padStart", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["padStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseBusinessHours", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["parseBusinessHours"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseClassNames", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["parseClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDragMeta", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["parseDragMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseEventDef", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["parseEventDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseFieldSpecs", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["parseFieldSpecs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseMarker", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["parseMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointInsideRect", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["pointInsideRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventContextMenu", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["preventContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventDefault", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["preventDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventSelection", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["preventSelection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rangeContainsMarker", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["rangeContainsMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rangeContainsRange", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["rangeContainsRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rangesEqual", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["rangesEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rangesIntersect", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["rangesIntersect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refineEventDef", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["refineEventDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refineProps", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["refineProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeElement", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["removeElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeExact", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["removeExact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderChunkContent", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["renderChunkContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderFill", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["renderFill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderMicroColGroup", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["renderMicroColGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderScrollShim", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["renderScrollShim"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestJson", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["requestJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sanitizeShrinkWidth", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["sanitizeShrinkWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setElSeg", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["setElSeg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRef", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["setRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sliceEventStore", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["sliceEventStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sliceEvents", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["sliceEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortEventSegs", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["sortEventSegs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOfDay", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["startOfDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateRect", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["translateRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "triggerDateSelect", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["triggerDateSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unpromisify", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["unpromisify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["version"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "whenTransitionDone", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["whenTransitionDone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wholeDivideDurations", function() { return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["wholeDivideDurations"]; });

/*!
FullCalendar v5.3.1
Docs & License: https://fullcalendar.io/
(c) 2020 Adam Shaw
*/





var Calendar =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(Calendar, _super);

  function Calendar(el, optionOverrides) {
    if (optionOverrides === void 0) {
      optionOverrides = {};
    }

    var _this = _super.call(this) || this;

    _this.isRendering = false;
    _this.isRendered = false;
    _this.currentClassNames = [];
    _this.customContentRenderId = 0; // will affect custom generated classNames?

    _this.handleAction = function (action) {
      // actions we know we want to render immediately
      switch (action.type) {
        case 'SET_EVENT_DRAG':
        case 'SET_EVENT_RESIZE':
          _this.renderRunner.tryDrain();

      }
    };

    _this.handleData = function (data) {
      _this.currentData = data;

      _this.renderRunner.request(data.calendarOptions.rerenderDelay);
    };

    _this.handleRenderRequest = function () {
      if (_this.isRendering) {
        _this.isRendered = true;
        var currentData_1 = _this.currentData;
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["render"])(Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["CalendarRoot"], {
          options: currentData_1.calendarOptions,
          theme: currentData_1.theme,
          emitter: currentData_1.emitter
        }, function (classNames, height, isHeightAuto, forPrint) {
          _this.setClassNames(classNames);

          _this.setHeight(height);

          return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["CustomContentRenderContext"].Provider, {
            value: _this.customContentRenderId
          }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["CalendarContent"], Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({
            isHeightAuto: isHeightAuto,
            forPrint: forPrint
          }, currentData_1)));
        }), _this.el);
      } else if (_this.isRendered) {
        _this.isRendered = false;
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["render"])(null, _this.el);

        _this.setClassNames([]);

        _this.setHeight('');
      }

      Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["flushToDom"])();
    };

    _this.el = el;
    _this.renderRunner = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["DelayedRunner"](_this.handleRenderRequest);
    new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["CalendarDataManager"]({
      optionOverrides: optionOverrides,
      calendarApi: _this,
      onAction: _this.handleAction,
      onData: _this.handleData
    });
    return _this;
  }

  Object.defineProperty(Calendar.prototype, "view", {
    get: function get() {
      return this.currentData.viewApi;
    } // for public API
    ,
    enumerable: false,
    configurable: true
  });

  Calendar.prototype.render = function () {
    var wasRendering = this.isRendering;

    if (!wasRendering) {
      this.isRendering = true;
    } else {
      this.customContentRenderId++;
    }

    this.renderRunner.request();

    if (wasRendering) {
      this.updateSize();
    }
  };

  Calendar.prototype.destroy = function () {
    if (this.isRendering) {
      this.isRendering = false;
      this.renderRunner.request();
    }
  };

  Calendar.prototype.updateSize = function () {
    _super.prototype.updateSize.call(this);

    Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["flushToDom"])();
  };

  Calendar.prototype.batchRendering = function (func) {
    this.renderRunner.pause('batchRendering');
    func();
    this.renderRunner.resume('batchRendering');
  };

  Calendar.prototype.pauseRendering = function () {
    this.renderRunner.pause('pauseRendering');
  };

  Calendar.prototype.resumeRendering = function () {
    this.renderRunner.resume('pauseRendering', true);
  };

  Calendar.prototype.resetOptions = function (optionOverrides, append) {
    this.currentDataManager.resetOptions(optionOverrides, append);
  };

  Calendar.prototype.setClassNames = function (classNames) {
    if (!Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["isArraysEqual"])(classNames, this.currentClassNames)) {
      var classList = this.el.classList;

      for (var _i = 0, _a = this.currentClassNames; _i < _a.length; _i++) {
        var className = _a[_i];
        classList.remove(className);
      }

      for (var _b = 0, classNames_1 = classNames; _b < classNames_1.length; _b++) {
        var className = classNames_1[_b];
        classList.add(className);
      }

      this.currentClassNames = classNames;
    }
  };

  Calendar.prototype.setHeight = function (height) {
    Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["applyStyleProp"])(this.el, 'height', height);
  };

  return Calendar;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_2__["CalendarApi"]);



/***/ }),

/***/ "./node_modules/@fullcalendar/core/vdom.js":
/*!*************************************************!*\
  !*** ./node_modules/@fullcalendar/core/vdom.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");


(typeof globalThis !== 'undefined' ? globalThis : window).FullCalendarVDom = {
  Component: preact__WEBPACK_IMPORTED_MODULE_1__["Component"],
  createElement: preact__WEBPACK_IMPORTED_MODULE_1__["createElement"],
  render: preact__WEBPACK_IMPORTED_MODULE_1__["render"],
  createRef: preact__WEBPACK_IMPORTED_MODULE_1__["createRef"],
  Fragment: preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
  createContext: createContext,
  flushToDom: flushToDom
};

function flushToDom() {
  var oldDebounceRendering = preact__WEBPACK_IMPORTED_MODULE_1__["options"].debounceRendering;
  var callbackQ = [];

  function execCallbackSync(callback) {
    callbackQ.push(callback);
  }

  preact__WEBPACK_IMPORTED_MODULE_1__["options"].debounceRendering = execCallbackSync;
  preact__WEBPACK_IMPORTED_MODULE_1__["render"](preact__WEBPACK_IMPORTED_MODULE_1__["createElement"](FakeComponent, {}), document.createElement('div'));

  while (callbackQ.length) {
    callbackQ.shift()();
  }

  preact__WEBPACK_IMPORTED_MODULE_1__["options"].debounceRendering = oldDebounceRendering;
}

var FakeComponent =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FakeComponent, _super);

  function FakeComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FakeComponent.prototype.render = function () {
    return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"]('div', {});
  };

  FakeComponent.prototype.componentDidMount = function () {
    this.setState({});
  };

  return FakeComponent;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function createContext(defaultValue) {
  var ContextType = preact__WEBPACK_IMPORTED_MODULE_1__["createContext"](defaultValue);
  var origProvider = ContextType.Provider;

  ContextType.Provider = function () {
    var _this = this;

    var isNew = !this.getChildContext;
    var children = origProvider.apply(this, arguments);

    if (isNew) {
      var subs_1 = [];

      this.shouldComponentUpdate = function (_props) {
        if (_this.props.value !== _props.value) {
          subs_1.some(function (c) {
            c.context = _props.value;
            c.forceUpdate();
          });
        }
      };

      this.sub = function (c) {
        subs_1.push(c);
        var old = c.componentWillUnmount;

        c.componentWillUnmount = function () {
          subs_1.splice(subs_1.indexOf(c), 1);
          old && old.call(c);
        };
      };
    }

    return children;
  };

  return ContextType;
}

/***/ }),

/***/ "./node_modules/@fullcalendar/daygrid/main.css":
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/main.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--6-1!../../postcss-loader/src??ref--6-2!./main.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@fullcalendar/daygrid/main.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@fullcalendar/daygrid/main.js":
/*!****************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/main.js ***!
  \****************************************************/
/*! exports provided: default, DayGridView, DayTable, DayTableSlicer, Table, TableView, buildDayTableModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayGridView", function() { return DayTableView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTable", function() { return DayTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTableSlicer", function() { return DayTableSlicer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableView", function() { return TableView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildDayTableModel", function() { return buildDayTableModel; });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./node_modules/@fullcalendar/daygrid/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/common */ "./node_modules/@fullcalendar/common/main.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/*!
FullCalendar v5.3.2
Docs & License: https://fullcalendar.io/
(c) 2020 Adam Shaw
*/



/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a Table subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.

var TableView =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TableView, _super);

  function TableView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.headerElRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    return _this;
  }

  TableView.prototype.renderSimpleLayout = function (headerRowContent, bodyContent) {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var sections = [];
    var stickyHeaderDates = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getStickyHeaderDates"])(context.options);

    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }
      });
    }

    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      chunk: {
        content: bodyContent
      }
    });
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["ViewRoot"], {
      viewSpec: context.viewSpec
    }, function (rootElRef, classNames) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        ref: rootElRef,
        className: ['fc-daygrid'].concat(classNames).join(' ')
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["SimpleScrollGrid"], {
        liquid: !props.isHeightAuto && !props.forPrint,
        cols: []
        /* TODO: make optional? */
        ,
        sections: sections
      }));
    });
  };

  TableView.prototype.renderHScrollLayout = function (headerRowContent, bodyContent, colCnt, dayMinWidth) {
    var ScrollGrid = this.context.pluginHooks.scrollGridImpl;

    if (!ScrollGrid) {
      throw new Error('No ScrollGrid implementation');
    }

    var _a = this,
        props = _a.props,
        context = _a.context;

    var stickyHeaderDates = !props.forPrint && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getStickyHeaderDates"])(context.options);
    var stickyFooterScrollbar = !props.forPrint && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getStickyFooterScrollbar"])(context.options);
    var sections = [];

    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunks: [{
          key: 'main',
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }]
      });
    }

    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      chunks: [{
        key: 'main',
        content: bodyContent
      }]
    });

    if (stickyFooterScrollbar) {
      sections.push({
        type: 'footer',
        key: 'footer',
        isSticky: true,
        chunks: [{
          key: 'main',
          content: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["renderScrollShim"]
        }]
      });
    }

    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["ViewRoot"], {
      viewSpec: context.viewSpec
    }, function (rootElRef, classNames) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        ref: rootElRef,
        className: ['fc-daygrid'].concat(classNames).join(' ')
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ScrollGrid, {
        liquid: !props.isHeightAuto && !props.forPrint,
        colGroups: [{
          cols: [{
            span: colCnt,
            minWidth: dayMinWidth
          }]
        }],
        sections: sections
      }));
    });
  };

  return TableView;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]);

function splitSegsByRow(segs, rowCnt) {
  var byRow = [];

  for (var i = 0; i < rowCnt; i++) {
    byRow[i] = [];
  }

  for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
    var seg = segs_1[_i];
    byRow[seg.row].push(seg);
  }

  return byRow;
}

function splitSegsByFirstCol(segs, colCnt) {
  var byCol = [];

  for (var i = 0; i < colCnt; i++) {
    byCol[i] = [];
  }

  for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
    var seg = segs_2[_i];
    byCol[seg.firstCol].push(seg);
  }

  return byCol;
}

function splitInteractionByRow(ui, rowCnt) {
  var byRow = [];

  if (!ui) {
    for (var i = 0; i < rowCnt; i++) {
      byRow[i] = null;
    }
  } else {
    for (var i = 0; i < rowCnt; i++) {
      byRow[i] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }

    for (var _i = 0, _a = ui.segs; _i < _a.length; _i++) {
      var seg = _a[_i];
      byRow[seg.row].segs.push(seg);
    }
  }

  return byRow;
}

var DEFAULT_WEEK_NUM_FORMAT = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createFormatter"])({
  week: 'narrow'
});

var TableCell =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TableCell, _super);

  function TableCell() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleRootEl = function (el) {
      _this.rootEl = el;
      Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["setRef"])(_this.props.elRef, el);
    };

    _this.handleMoreLinkClick = function (ev) {
      var props = _this.props;

      if (props.onMoreClick) {
        var allSegs = props.segsByEachCol;
        var hiddenSegs = allSegs.filter(function (seg) {
          return props.segIsHidden[seg.eventRange.instance.instanceId];
        });
        props.onMoreClick({
          date: props.date,
          allSegs: allSegs,
          hiddenSegs: hiddenSegs,
          moreCnt: props.moreCnt,
          dayEl: _this.rootEl,
          ev: ev
        });
      }
    };

    return _this;
  }

  TableCell.prototype.render = function () {
    var _this = this;

    var _a = this.context,
        options = _a.options,
        viewApi = _a.viewApi;
    var props = this.props;
    var date = props.date,
        dateProfile = props.dateProfile;
    var hookProps = {
      num: props.moreCnt,
      text: props.buildMoreLinkText(props.moreCnt),
      view: viewApi
    };
    var navLinkAttrs = options.navLinks ? {
      'data-navlink': Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildNavLinkData"])(date, 'week'),
      tabIndex: 0
    } : {};
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayCellRoot"], {
      date: date,
      dateProfile: dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraHookProps: props.extraHookProps,
      elRef: this.handleRootEl
    }, function (rootElRef, classNames, rootDataAttrs, isDisabled) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
        ref: rootElRef,
        className: ['fc-daygrid-day'].concat(classNames, props.extraClassNames || []).join(' ')
      }, rootDataAttrs, props.extraDataAttrs), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'fc-daygrid-day-frame fc-scrollgrid-sync-inner',
        ref: props.innerElRef
        /* different from hook system! RENAME */

      }, props.showWeekNumber && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["WeekNumberRoot"], {
        date: date,
        defaultFormat: DEFAULT_WEEK_NUM_FORMAT
      }, function (rootElRef, classNames, innerElRef, innerContent) {
        return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
          ref: rootElRef,
          className: ['fc-daygrid-week-number'].concat(classNames).join(' ')
        }, navLinkAttrs), innerContent);
      }), !isDisabled && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TableCellTop, {
        date: date,
        dateProfile: dateProfile,
        showDayNumber: props.showDayNumber,
        forceDayTop: props.forceDayTop,
        todayRange: props.todayRange,
        extraHookProps: props.extraHookProps
      }), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'fc-daygrid-day-events',
        ref: props.fgContentElRef,
        style: {
          paddingBottom: props.fgPaddingBottom
        }
      }, props.fgContent, Boolean(props.moreCnt) && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'fc-daygrid-day-bottom',
        style: {
          marginTop: props.moreMarginTop
        }
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RenderHook"], {
        hookProps: hookProps,
        classNames: options.moreLinkClassNames,
        content: options.moreLinkContent,
        defaultContent: renderMoreLinkInner,
        didMount: options.moreLinkDidMount,
        willUnmount: options.moreLinkWillUnmount
      }, function (rootElRef, classNames, innerElRef, innerContent) {
        return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
          onClick: _this.handleMoreLinkClick,
          ref: rootElRef,
          className: ['fc-daygrid-more-link'].concat(classNames).join(' ')
        }, innerContent);
      }))), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'fc-daygrid-day-bg'
      }, props.bgContent)));
    });
  };

  return TableCell;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]);

function renderTopInner(props) {
  return props.dayNumberText;
}

function renderMoreLinkInner(props) {
  return props.text;
}

var TableCellTop =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TableCellTop, _super);

  function TableCellTop() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TableCellTop.prototype.render = function () {
    var props = this.props;
    var navLinkAttrs = this.context.options.navLinks ? {
      'data-navlink': Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildNavLinkData"])(props.date),
      tabIndex: 0
    } : {};
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayCellContent"], {
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraHookProps: props.extraHookProps,
      defaultContent: renderTopInner
    }, function (innerElRef, innerContent) {
      return (innerContent || props.forceDayTop) && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'fc-daygrid-day-top',
        ref: innerElRef
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
        className: 'fc-daygrid-day-number'
      }, navLinkAttrs), innerContent || Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, "\xA0")));
    });
  };

  return TableCellTop;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

var DEFAULT_TABLE_EVENT_TIME_FORMAT = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createFormatter"])({
  hour: 'numeric',
  minute: '2-digit',
  omitZeroMinute: true,
  meridiem: 'narrow'
});

function hasListItemDisplay(seg) {
  var display = seg.eventRange.ui.display;
  return display === 'list-item' || display === 'auto' && !seg.eventRange.def.allDay && seg.firstCol === seg.lastCol && // can't be multi-day
  seg.isStart && // "
  seg.isEnd // "
  ;
}

var TableListItemEvent =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TableListItemEvent, _super);

  function TableListItemEvent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TableListItemEvent.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var timeFormat = context.options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
    var timeText = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildSegTimeText"])(props.seg, timeFormat, context, true, props.defaultDisplayEventEnd);
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["EventRoot"], {
      seg: props.seg,
      timeText: timeText,
      defaultContent: renderInnerContent,
      isDragging: props.isDragging,
      isResizing: false,
      isDateSelecting: false,
      isSelected: props.isSelected,
      isPast: props.isPast,
      isFuture: props.isFuture,
      isToday: props.isToday
    }, function (rootElRef, classNames, innerElRef, innerContent) {
      return (// we don't use styles!
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
          className: ['fc-daygrid-event', 'fc-daygrid-dot-event'].concat(classNames).join(' '),
          ref: rootElRef
        }, getSegAnchorAttrs(props.seg)), innerContent)
      );
    });
  };

  return TableListItemEvent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

function renderInnerContent(innerProps) {
  return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'fc-daygrid-event-dot',
    style: {
      borderColor: innerProps.borderColor || innerProps.backgroundColor
    }
  }), innerProps.timeText && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'fc-event-time'
  }, innerProps.timeText), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'fc-event-title'
  }, innerProps.event.title || Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, "\xA0")));
}

function getSegAnchorAttrs(seg) {
  var url = seg.eventRange.def.url;
  return url ? {
    href: url
  } : {};
}

var TableBlockEvent =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TableBlockEvent, _super);

  function TableBlockEvent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TableBlockEvent.prototype.render = function () {
    var props = this.props;
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["StandardEvent"], Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, props, {
      extraClassNames: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'],
      defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT,
      defaultDisplayEventEnd: props.defaultDisplayEventEnd,
      disableResizing: !props.seg.eventRange.def.allDay
    }));
  };

  return TableBlockEvent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

function computeFgSegPlacement( // for one row. TODO: print mode?
cellModels, segs, dayMaxEvents, dayMaxEventRows, eventHeights, maxContentHeight, colCnt, eventOrderSpecs) {
  var colPlacements = []; // if event spans multiple cols, its present in each col

  var moreCnts = []; // by-col

  var segIsHidden = {};
  var segTops = {}; // always populated for each seg

  var segMarginTops = {}; // simetimes populated for each seg

  var moreTops = {};
  var paddingBottoms = {}; // for each cell's inner-wrapper div

  for (var i = 0; i < colCnt; i++) {
    colPlacements.push([]);
    moreCnts.push(0);
  }

  segs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["sortEventSegs"])(segs, eventOrderSpecs);

  for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
    var seg = segs_1[_i];
    var instanceId = seg.eventRange.instance.instanceId;
    var eventHeight = eventHeights[instanceId + ':' + seg.firstCol];
    placeSeg(seg, eventHeight || 0); // will keep colPlacements sorted by top
  }

  if (dayMaxEvents === true || dayMaxEventRows === true) {
    limitByMaxHeight(moreCnts, segIsHidden, colPlacements, maxContentHeight); // populates moreCnts/segIsHidden
  } else if (typeof dayMaxEvents === 'number') {
    limitByMaxEvents(moreCnts, segIsHidden, colPlacements, dayMaxEvents); // populates moreCnts/segIsHidden
  } else if (typeof dayMaxEventRows === 'number') {
    limitByMaxRows(moreCnts, segIsHidden, colPlacements, dayMaxEventRows); // populates moreCnts/segIsHidden
  } // computes segTops/segMarginTops/moreTops/paddingBottoms


  for (var col = 0; col < colCnt; col++) {
    var placements = colPlacements[col];
    var currentNonAbsBottom = 0;
    var currentAbsHeight = 0;

    for (var _a = 0, placements_1 = placements; _a < placements_1.length; _a++) {
      var placement = placements_1[_a];
      var seg = placement.seg;

      if (!segIsHidden[seg.eventRange.instance.instanceId]) {
        segTops[seg.eventRange.instance.instanceId] = placement.top; // from top of container

        if (seg.firstCol === seg.lastCol && seg.isStart && seg.isEnd) {
          // TODO: simpler way? NOT DRY
          segMarginTops[seg.eventRange.instance.instanceId] = placement.top - currentNonAbsBottom; // from previous seg bottom

          currentAbsHeight = 0;
          currentNonAbsBottom = placement.bottom;
        } else {
          // multi-col event, abs positioned
          currentAbsHeight = placement.bottom - currentNonAbsBottom;
        }
      }
    }

    if (currentAbsHeight) {
      if (moreCnts[col]) {
        moreTops[col] = currentAbsHeight;
      } else {
        paddingBottoms[col] = currentAbsHeight;
      }
    }
  }

  function placeSeg(seg, segHeight) {
    if (!tryPlaceSegAt(seg, segHeight, 0)) {
      for (var col = seg.firstCol; col <= seg.lastCol; col++) {
        for (var _i = 0, _a = colPlacements[col]; _i < _a.length; _i++) {
          // will repeat multi-day segs!!!!!!! bad!!!!!!
          var placement = _a[_i];

          if (tryPlaceSegAt(seg, segHeight, placement.bottom)) {
            return;
          }
        }
      }
    }
  }

  function tryPlaceSegAt(seg, segHeight, top) {
    if (canPlaceSegAt(seg, segHeight, top)) {
      for (var col = seg.firstCol; col <= seg.lastCol; col++) {
        var placements = colPlacements[col];
        var insertionIndex = 0;

        while (insertionIndex < placements.length && top >= placements[insertionIndex].top) {
          insertionIndex++;
        }

        placements.splice(insertionIndex, 0, {
          seg: seg,
          top: top,
          bottom: top + segHeight
        });
      }

      return true;
    } else {
      return false;
    }
  }

  function canPlaceSegAt(seg, segHeight, top) {
    for (var col = seg.firstCol; col <= seg.lastCol; col++) {
      for (var _i = 0, _a = colPlacements[col]; _i < _a.length; _i++) {
        var placement = _a[_i];

        if (top < placement.bottom && top + segHeight > placement.top) {
          // collide?
          return false;
        }
      }
    }

    return true;
  } // what does this do!?


  for (var instanceIdAndFirstCol in eventHeights) {
    if (!eventHeights[instanceIdAndFirstCol]) {
      segIsHidden[instanceIdAndFirstCol.split(':')[0]] = true;
    }
  }

  var segsByFirstCol = colPlacements.map(extractFirstColSegs); // operates on the sorted cols

  var segsByEachCol = colPlacements.map(function (placements, col) {
    var segs = extractAllColSegs(placements);
    segs = resliceDaySegs(segs, cellModels[col].date, col);
    return segs;
  });
  return {
    segsByFirstCol: segsByFirstCol,
    segsByEachCol: segsByEachCol,
    segIsHidden: segIsHidden,
    segTops: segTops,
    segMarginTops: segMarginTops,
    moreCnts: moreCnts,
    moreTops: moreTops,
    paddingBottoms: paddingBottoms
  };
}

function extractFirstColSegs(oneColPlacements, col) {
  var segs = [];

  for (var _i = 0, oneColPlacements_1 = oneColPlacements; _i < oneColPlacements_1.length; _i++) {
    var placement = oneColPlacements_1[_i];

    if (placement.seg.firstCol === col) {
      segs.push(placement.seg);
    }
  }

  return segs;
}

function extractAllColSegs(oneColPlacements) {
  var segs = [];

  for (var _i = 0, oneColPlacements_2 = oneColPlacements; _i < oneColPlacements_2.length; _i++) {
    var placement = oneColPlacements_2[_i];
    segs.push(placement.seg);
  }

  return segs;
}

function limitByMaxHeight(hiddenCnts, segIsHidden, colPlacements, maxContentHeight) {
  limitEvents(hiddenCnts, segIsHidden, colPlacements, true, function (placement) {
    return placement.bottom <= maxContentHeight;
  });
}

function limitByMaxEvents(hiddenCnts, segIsHidden, colPlacements, dayMaxEvents) {
  limitEvents(hiddenCnts, segIsHidden, colPlacements, false, function (placement, levelIndex) {
    return levelIndex < dayMaxEvents;
  });
}

function limitByMaxRows(hiddenCnts, segIsHidden, colPlacements, dayMaxEventRows) {
  limitEvents(hiddenCnts, segIsHidden, colPlacements, true, function (placement, levelIndex) {
    return levelIndex < dayMaxEventRows;
  });
}
/*
populates the given hiddenCnts/segIsHidden, which are supplied empty.
TODO: return them instead
*/


function limitEvents(hiddenCnts, segIsHidden, colPlacements, _moreLinkConsumesLevel, isPlacementInBounds) {
  var colCnt = hiddenCnts.length;
  var segIsVisible = {}; // TODO: instead, use segIsHidden with true/false?

  var visibleColPlacements = []; // will mirror colPlacements

  for (var col = 0; col < colCnt; col++) {
    visibleColPlacements.push([]);
  }

  for (var col = 0; col < colCnt; col++) {
    var placements = colPlacements[col];
    var level = 0;

    for (var _i = 0, placements_2 = placements; _i < placements_2.length; _i++) {
      var placement = placements_2[_i];

      if (isPlacementInBounds(placement, level)) {
        recordVisible(placement);
      } else {
        recordHidden(placement, level, _moreLinkConsumesLevel);
      } // only considered a level if the seg had height


      if (placement.top !== placement.bottom) {
        level++;
      }
    }
  }

  function recordVisible(placement) {
    var seg = placement.seg;
    var instanceId = seg.eventRange.instance.instanceId;

    if (!segIsVisible[instanceId]) {
      segIsVisible[instanceId] = true;

      for (var col = seg.firstCol; col <= seg.lastCol; col++) {
        visibleColPlacements[col].push(placement);
      }
    }
  }

  function recordHidden(placement, currentLevel, moreLinkConsumesLevel) {
    var seg = placement.seg;
    var instanceId = seg.eventRange.instance.instanceId;

    if (!segIsHidden[instanceId]) {
      segIsHidden[instanceId] = true;

      for (var col = seg.firstCol; col <= seg.lastCol; col++) {
        var hiddenCnt = ++hiddenCnts[col];

        if (moreLinkConsumesLevel && hiddenCnt === 1) {
          var doomedLevel = currentLevel - 1;

          while (visibleColPlacements[col].length > doomedLevel) {
            recordHidden(visibleColPlacements[col].pop(), // removes
            visibleColPlacements[col].length, // will execute after the pop. will be the index of the removed placement
            false);
          }
        }
      }
    }
  }
} // Given the events within an array of segment objects, reslice them to be in a single day


function resliceDaySegs(segs, dayDate, colIndex) {
  var dayStart = dayDate;
  var dayEnd = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addDays"])(dayStart, 1);
  var dayRange = {
    start: dayStart,
    end: dayEnd
  };
  var newSegs = [];

  for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
    var seg = segs_2[_i];
    var eventRange = seg.eventRange;
    var origRange = eventRange.range;
    var slicedRange = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["intersectRanges"])(origRange, dayRange);

    if (slicedRange) {
      newSegs.push(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, seg), {
        firstCol: colIndex,
        lastCol: colIndex,
        eventRange: {
          def: eventRange.def,
          ui: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, eventRange.ui), {
            durationEditable: false
          }),
          instance: eventRange.instance,
          range: slicedRange
        },
        isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(),
        isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf()
      }));
    }
  }

  return newSegs;
}

var TableRow =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TableRow, _super);

  function TableRow() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.cellElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RefMap"](); // the <td>

    _this.frameElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RefMap"](); // the fc-daygrid-day-frame

    _this.fgElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RefMap"](); // the fc-daygrid-day-events

    _this.segHarnessRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RefMap"](); // indexed by "instanceId:firstCol"

    _this.rootElRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    _this.state = {
      framePositions: null,
      maxContentHeight: null,
      segHeights: {}
    };
    return _this;
  }

  TableRow.prototype.render = function () {
    var _this = this;

    var _a = this,
        props = _a.props,
        state = _a.state,
        context = _a.context;

    var colCnt = props.cells.length;
    var businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
    var bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
    var highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
    var mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);

    var _b = computeFgSegPlacement(props.cells, props.fgEventSegs, props.dayMaxEvents, props.dayMaxEventRows, state.segHeights, state.maxContentHeight, colCnt, context.options.eventOrder),
        paddingBottoms = _b.paddingBottoms,
        segsByFirstCol = _b.segsByFirstCol,
        segsByEachCol = _b.segsByEachCol,
        segIsHidden = _b.segIsHidden,
        segTops = _b.segTops,
        segMarginTops = _b.segMarginTops,
        moreCnts = _b.moreCnts,
        moreTops = _b.moreTops;

    var selectedInstanceHash = // TODO: messy way to compute this
    props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {};
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", {
      ref: this.rootElRef
    }, props.renderIntro && props.renderIntro(), props.cells.map(function (cell, col) {
      var normalFgNodes = _this.renderFgSegs(segsByFirstCol[col], segIsHidden, segTops, segMarginTops, selectedInstanceHash, props.todayRange);

      var mirrorFgNodes = _this.renderFgSegs(mirrorSegsByCol[col], {}, segTops, // use same tops as real rendering
      {}, {}, props.todayRange, Boolean(props.eventDrag), Boolean(props.eventResize), false // date-selecting (because mirror is never drawn for date selection)
      );

      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TableCell, {
        key: cell.key,
        elRef: _this.cellElRefs.createRef(cell.key),
        innerElRef: _this.frameElRefs.createRef(cell.key)
        /* FF <td> problem, but okay to use for left/right. TODO: rename prop */
        ,
        dateProfile: props.dateProfile,
        date: cell.date,
        showDayNumber: props.showDayNumbers,
        showWeekNumber: props.showWeekNumbers && col === 0,
        forceDayTop: props.showWeekNumbers
        /* even displaying weeknum for row, not necessarily day */
        ,
        todayRange: props.todayRange,
        extraHookProps: cell.extraHookProps,
        extraDataAttrs: cell.extraDataAttrs,
        extraClassNames: cell.extraClassNames,
        moreCnt: moreCnts[col],
        buildMoreLinkText: props.buildMoreLinkText,
        onMoreClick: props.onMoreClick,
        segIsHidden: segIsHidden,
        moreMarginTop: moreTops[col]
        /* rename */
        ,
        segsByEachCol: segsByEachCol[col],
        fgPaddingBottom: paddingBottoms[col],
        fgContentElRef: _this.fgElRefs.createRef(cell.key),
        fgContent: // Fragment scopes the keys
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, normalFgNodes), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, mirrorFgNodes)),
        bgContent: // Fragment scopes the keys
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, _this.renderFillSegs(highlightSegsByCol[col], 'highlight'), _this.renderFillSegs(businessHoursByCol[col], 'non-business'), _this.renderFillSegs(bgEventSegsByCol[col], 'bg-event'))
      });
    }));
  };

  TableRow.prototype.componentDidMount = function () {
    this.updateSizing(true);
  };

  TableRow.prototype.componentDidUpdate = function (prevProps, prevState) {
    var currentProps = this.props;
    this.updateSizing(!Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["isPropsEqual"])(prevProps, currentProps));
  };

  TableRow.prototype.getHighlightSegs = function () {
    var props = this.props;

    if (props.eventDrag && props.eventDrag.segs.length) {
      // messy check
      return props.eventDrag.segs;
    } else if (props.eventResize && props.eventResize.segs.length) {
      // messy check
      return props.eventResize.segs;
    } else {
      return props.dateSelectionSegs;
    }
  };

  TableRow.prototype.getMirrorSegs = function () {
    var props = this.props;

    if (props.eventResize && props.eventResize.segs.length) {
      // messy check
      return props.eventResize.segs;
    } else {
      return [];
    }
  };

  TableRow.prototype.renderFgSegs = function (segs, segIsHidden, // does NOT mean display:hidden
  segTops, segMarginTops, selectedInstanceHash, todayRange, isDragging, isResizing, isDateSelecting) {
    var context = this.context;
    var eventSelection = this.props.eventSelection;
    var framePositions = this.state.framePositions;
    var defaultDisplayEventEnd = this.props.cells.length === 1; // colCnt === 1

    var nodes = [];

    if (framePositions) {
      for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
        var seg = segs_1[_i];
        var instanceId = seg.eventRange.instance.instanceId;
        var isMirror = isDragging || isResizing || isDateSelecting;
        var isSelected = selectedInstanceHash[instanceId];
        var isInvisible = segIsHidden[instanceId] || isSelected;
        var isAbsolute = segIsHidden[instanceId] || isMirror || seg.firstCol !== seg.lastCol || !seg.isStart || !seg.isEnd; // TODO: simpler way? NOT DRY

        var marginTop = void 0;
        var top_1 = void 0;
        var left = void 0;
        var right = void 0;

        if (isAbsolute) {
          top_1 = segTops[instanceId];

          if (context.isRtl) {
            right = 0;
            left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
          } else {
            left = 0;
            right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
          }
        } else {
          marginTop = segMarginTops[instanceId];
        }
        /*
        known bug: events that are force to be list-item but span multiple days still take up space in later columns
        */


        nodes.push(Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: 'fc-daygrid-event-harness' + (isAbsolute ? ' fc-daygrid-event-harness-abs' : ''),
          key: instanceId,
          ref: isMirror ? null : this.segHarnessRefs.createRef(instanceId + ':' + seg.firstCol)
          /* in print mode when in mult cols, could collide */
          ,
          style: {
            visibility: isInvisible ? 'hidden' : '',
            marginTop: marginTop || '',
            top: top_1 || '',
            left: left || '',
            right: right || ''
          }
        }, hasListItemDisplay(seg) ? Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TableListItemEvent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
          seg: seg,
          isDragging: isDragging,
          isSelected: instanceId === eventSelection,
          defaultDisplayEventEnd: defaultDisplayEventEnd
        }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegMeta"])(seg, todayRange))) : Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TableBlockEvent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
          seg: seg,
          isDragging: isDragging,
          isResizing: isResizing,
          isDateSelecting: isDateSelecting,
          isSelected: instanceId === eventSelection,
          defaultDisplayEventEnd: defaultDisplayEventEnd
        }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegMeta"])(seg, todayRange)))));
      }
    }

    return nodes;
  };

  TableRow.prototype.renderFillSegs = function (segs, fillType) {
    var isRtl = this.context.isRtl;
    var todayRange = this.props.todayRange;
    var framePositions = this.state.framePositions;
    var nodes = [];

    if (framePositions) {
      for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
        var seg = segs_2[_i];
        var leftRightCss = isRtl ? {
          right: 0,
          left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol]
        } : {
          left: 0,
          right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol]
        };
        nodes.push(Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          key: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildEventRangeKey"])(seg.eventRange),
          className: 'fc-daygrid-bg-harness',
          style: leftRightCss
        }, fillType === 'bg-event' ? Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BgEvent"], Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
          seg: seg
        }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegMeta"])(seg, todayRange))) : Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["renderFill"])(fillType)));
      }
    }

    return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])([_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {}], nodes));
  };

  TableRow.prototype.updateSizing = function (isExternalSizingChange) {
    var _a = this,
        props = _a.props,
        frameElRefs = _a.frameElRefs;

    if (props.clientWidth !== null) {
      // positioning ready?
      if (isExternalSizingChange) {
        var frameEls = props.cells.map(function (cell) {
          return frameElRefs.currentMap[cell.key];
        });

        if (frameEls.length) {
          var originEl = this.rootElRef.current;
          this.setState({
            framePositions: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["PositionCache"](originEl, frameEls, true, // isHorizontal
            false)
          });
        }
      }

      var limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
      this.setState({
        segHeights: this.computeSegHeights(),
        maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null
      });
    }
  };

  TableRow.prototype.computeSegHeights = function () {
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["mapHash"])(this.segHarnessRefs.currentMap, function (eventHarnessEl) {
      return eventHarnessEl.getBoundingClientRect().height;
    });
  };

  TableRow.prototype.computeMaxContentHeight = function () {
    var firstKey = this.props.cells[0].key;
    var cellEl = this.cellElRefs.currentMap[firstKey];
    var fcContainerEl = this.fgElRefs.currentMap[firstKey];
    return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
  };

  TableRow.prototype.getCellEls = function () {
    var elMap = this.cellElRefs.currentMap;
    return this.props.cells.map(function (cell) {
      return elMap[cell.key];
    });
  };

  return TableRow;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]);

TableRow.addStateEquality({
  segHeights: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["isPropsEqual"]
});
var PADDING_FROM_VIEWPORT = 10;
var SCROLL_DEBOUNCE = 10;

var Popover =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(Popover, _super);

  function Popover() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.repositioner = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DelayedRunner"](_this.updateSize.bind(_this));

    _this.handleRootEl = function (el) {
      _this.rootEl = el;

      if (_this.props.elRef) {
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["setRef"])(_this.props.elRef, el);
      }
    }; // Triggered when the user clicks *anywhere* in the document, for the autoHide feature


    _this.handleDocumentMousedown = function (ev) {
      var onClose = _this.props.onClose; // only hide the popover if the click happened outside the popover

      if (onClose && !_this.rootEl.contains(ev.target)) {
        onClose();
      }
    };

    _this.handleDocumentScroll = function () {
      _this.repositioner.request(SCROLL_DEBOUNCE);
    };

    _this.handleCloseClick = function () {
      var onClose = _this.props.onClose;

      if (onClose) {
        onClose();
      }
    };

    return _this;
  }

  Popover.prototype.render = function () {
    var theme = this.context.theme;
    var props = this.props;
    var classNames = ['fc-popover', theme.getClass('popover')].concat(props.extraClassNames || []);
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
      className: classNames.join(' ')
    }, props.extraAttrs, {
      ref: this.handleRootEl
    }), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'fc-popover-header ' + theme.getClass('popoverHeader')
    }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: 'fc-popover-title'
    }, props.title), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: 'fc-popover-close ' + theme.getIconClass('close'),
      onClick: this.handleCloseClick
    })), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'fc-popover-body ' + theme.getClass('popoverContent')
    }, props.children));
  };

  Popover.prototype.componentDidMount = function () {
    document.addEventListener('mousedown', this.handleDocumentMousedown);
    document.addEventListener('scroll', this.handleDocumentScroll);
    this.updateSize();
  };

  Popover.prototype.componentWillUnmount = function () {
    document.removeEventListener('mousedown', this.handleDocumentMousedown);
    document.removeEventListener('scroll', this.handleDocumentScroll);
  }; // TODO: adjust on window resize

  /*
  NOTE: the popover is position:fixed, so coordinates are relative to the viewport
  NOTE: the PARENT calls this as well, on window resize. we would have wanted to use the repositioner,
        but need to ensure that all other components have updated size first (for alignmentEl)
  */


  Popover.prototype.updateSize = function () {
    var _a = this.props,
        alignmentEl = _a.alignmentEl,
        topAlignmentEl = _a.topAlignmentEl;
    var rootEl = this.rootEl;

    if (!rootEl) {
      return; // not sure why this was null, but we shouldn't let external components call updateSize() anyway
    }

    var dims = rootEl.getBoundingClientRect(); // only used for width,height

    var alignment = alignmentEl.getBoundingClientRect();
    var top = topAlignmentEl ? topAlignmentEl.getBoundingClientRect().top : alignment.top;
    top = Math.min(top, window.innerHeight - dims.height - PADDING_FROM_VIEWPORT);
    top = Math.max(top, PADDING_FROM_VIEWPORT);
    var left;

    if (this.context.isRtl) {
      left = alignment.right - dims.width;
    } else {
      left = alignment.left;
    }

    left = Math.min(left, window.innerWidth - dims.width - PADDING_FROM_VIEWPORT);
    left = Math.max(left, PADDING_FROM_VIEWPORT);
    Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["applyStyle"])(rootEl, {
      top: top,
      left: left
    });
  };

  return Popover;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

var MorePopover =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MorePopover, _super);

  function MorePopover() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handlePopoverEl = function (popoverEl) {
      _this.popoverEl = popoverEl;

      if (popoverEl) {
        _this.context.registerInteractiveComponent(_this, {
          el: popoverEl,
          useEventCenter: false
        });
      } else {
        _this.context.unregisterInteractiveComponent(_this);
      }
    };

    return _this;
  }

  MorePopover.prototype.render = function () {
    var _a = this.context,
        options = _a.options,
        dateEnv = _a.dateEnv;
    var props = this.props;
    var date = props.date,
        hiddenInstances = props.hiddenInstances,
        todayRange = props.todayRange,
        dateProfile = props.dateProfile,
        selectedInstanceId = props.selectedInstanceId;
    var title = dateEnv.format(date, options.dayPopoverFormat);
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayCellRoot"], {
      date: date,
      dateProfile: dateProfile,
      todayRange: todayRange,
      elRef: this.handlePopoverEl
    }, function (rootElRef, dayClassNames, dataAttrs) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Popover, {
        elRef: rootElRef,
        title: title,
        extraClassNames: ['fc-more-popover'].concat(dayClassNames),
        extraAttrs: dataAttrs,
        onClose: props.onCloseClick,
        alignmentEl: props.alignmentEl,
        topAlignmentEl: props.topAlignmentEl
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayCellContent"], {
        date: date,
        dateProfile: dateProfile,
        todayRange: todayRange
      }, function (innerElRef, innerContent) {
        return innerContent && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: 'fc-more-popover-misc',
          ref: innerElRef
        }, innerContent);
      }), props.segs.map(function (seg) {
        var instanceId = seg.eventRange.instance.instanceId;
        return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: 'fc-daygrid-event-harness',
          key: instanceId,
          style: {
            visibility: hiddenInstances[instanceId] ? 'hidden' : ''
          }
        }, hasListItemDisplay(seg) ? Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TableListItemEvent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
          seg: seg,
          isDragging: false,
          isSelected: instanceId === selectedInstanceId,
          defaultDisplayEventEnd: false
        }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegMeta"])(seg, todayRange))) : Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TableBlockEvent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
          seg: seg,
          isDragging: false,
          isResizing: false,
          isDateSelecting: false,
          isSelected: instanceId === selectedInstanceId,
          defaultDisplayEventEnd: false
        }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegMeta"])(seg, todayRange))));
      }));
    });
  };

  MorePopover.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
    var date = this.props.date;

    if (positionLeft < elWidth && positionTop < elHeight) {
      return {
        component: this,
        dateSpan: {
          allDay: true,
          range: {
            start: date,
            end: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addDays"])(date, 1)
          }
        },
        dayEl: this.popoverEl,
        rect: {
          left: 0,
          top: 0,
          right: elWidth,
          bottom: elHeight
        },
        layer: 1
      };
    }
  };

  MorePopover.prototype.isPopover = function () {
    return true; // gross
  };

  return MorePopover;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]);

var Table =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(Table, _super);

  function Table() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.splitBusinessHourSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByRow);
    _this.splitBgEventSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByRow);
    _this.splitFgEventSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByRow);
    _this.splitDateSelectionSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByRow);
    _this.splitEventDrag = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitInteractionByRow);
    _this.splitEventResize = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitInteractionByRow);
    _this.buildBuildMoreLinkText = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(buildBuildMoreLinkText);
    _this.rowRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RefMap"]();
    _this.state = {
      morePopoverState: null
    };

    _this.handleRootEl = function (rootEl) {
      _this.rootEl = rootEl;
      Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["setRef"])(_this.props.elRef, rootEl);
    };

    _this.handleMoreLinkClick = function (arg) {
      var context = _this.context;
      var dateEnv = context.dateEnv;
      var clickOption = context.options.moreLinkClick;

      function segForPublic(seg) {
        var _a = seg.eventRange,
            def = _a.def,
            instance = _a.instance,
            range = _a.range;
        return {
          event: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["EventApi"](context, def, instance),
          start: dateEnv.toDate(range.start),
          end: dateEnv.toDate(range.end),
          isStart: seg.isStart,
          isEnd: seg.isEnd
        };
      }

      if (typeof clickOption === 'function') {
        clickOption = clickOption({
          date: dateEnv.toDate(arg.date),
          allDay: true,
          allSegs: arg.allSegs.map(segForPublic),
          hiddenSegs: arg.hiddenSegs.map(segForPublic),
          jsEvent: arg.ev,
          view: context.viewApi
        }); // hack to handle void
      }

      if (!clickOption || clickOption === 'popover') {
        _this.setState({
          morePopoverState: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, arg), {
            currentFgEventSegs: _this.props.fgEventSegs
          })
        });
      } else if (typeof clickOption === 'string') {
        // a view name
        context.calendarApi.zoomTo(arg.date, clickOption);
      }
    };

    _this.handleMorePopoverClose = function () {
      _this.setState({
        morePopoverState: null
      });
    };

    return _this;
  }

  Table.prototype.render = function () {
    var _this = this;

    var props = this.props;
    var dateProfile = props.dateProfile,
        dayMaxEventRows = props.dayMaxEventRows,
        dayMaxEvents = props.dayMaxEvents,
        expandRows = props.expandRows;
    var morePopoverState = this.state.morePopoverState;
    var rowCnt = props.cells.length;
    var businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
    var bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
    var fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
    var dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
    var eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
    var eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
    var buildMoreLinkText = this.buildBuildMoreLinkText(this.context.options.moreLinkText);
    var limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true; // if rows can't expand to fill fixed height, can't do balanced-height event limit
    // TODO: best place to normalize these options?

    if (limitViaBalanced && !expandRows) {
      limitViaBalanced = false;
      dayMaxEventRows = null;
      dayMaxEvents = null;
    }

    var classNames = ['fc-daygrid-body', limitViaBalanced ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced', expandRows ? '' : 'fc-daygrid-body-natural' // will height of one row depend on the others?
    ];
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classNames.join(' '),
      ref: this.handleRootEl,
      style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: props.clientWidth,
        minWidth: props.tableMinWidth
      }
    }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["NowTimer"], {
      unit: 'day'
    }, function (nowDate, todayRange) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("table", {
        className: 'fc-scrollgrid-sync-table',
        style: {
          width: props.clientWidth,
          minWidth: props.tableMinWidth,
          height: expandRows ? props.clientHeight : ''
        }
      }, props.colGroupNode, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tbody", null, props.cells.map(function (cells, row) {
        return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TableRow, {
          ref: _this.rowRefs.createRef(row),
          key: cells.length ? cells[0].date.toISOString()
          /* best? or put key on cell? or use diff formatter? */
          : row // in case there are no cells (like when resource view is loading)
          ,
          showDayNumbers: rowCnt > 1,
          showWeekNumbers: props.showWeekNumbers,
          todayRange: todayRange,
          dateProfile: dateProfile,
          cells: cells,
          renderIntro: props.renderRowIntro,
          businessHourSegs: businessHourSegsByRow[row],
          eventSelection: props.eventSelection,
          bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay)
          /* hack */
          ,
          fgEventSegs: fgEventSegsByRow[row],
          dateSelectionSegs: dateSelectionSegsByRow[row],
          eventDrag: eventDragByRow[row],
          eventResize: eventResizeByRow[row],
          dayMaxEvents: dayMaxEvents,
          dayMaxEventRows: dayMaxEventRows,
          clientWidth: props.clientWidth,
          clientHeight: props.clientHeight,
          buildMoreLinkText: buildMoreLinkText,
          onMoreClick: _this.handleMoreLinkClick
        });
      }))), !props.forPrint && morePopoverState && morePopoverState.currentFgEventSegs === props.fgEventSegs && // clear popover on event mod
      Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MorePopover, {
        date: morePopoverState.date,
        dateProfile: dateProfile,
        segs: morePopoverState.allSegs,
        alignmentEl: morePopoverState.dayEl,
        topAlignmentEl: rowCnt === 1 ? props.headerAlignElRef.current : null,
        onCloseClick: _this.handleMorePopoverClose,
        selectedInstanceId: props.eventSelection,
        hiddenInstances: // yuck
        (props.eventDrag ? props.eventDrag.affectedInstances : null) || (props.eventResize ? props.eventResize.affectedInstances : null) || {},
        todayRange: todayRange
      }));
    }));
  }; // Hit System
  // ----------------------------------------------------------------------------------------------------


  Table.prototype.prepareHits = function () {
    this.rowPositions = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["PositionCache"](this.rootEl, this.rowRefs.collect().map(function (rowObj) {
      return rowObj.getCellEls()[0];
    }), // first cell el in each row. TODO: not optimal
    false, true // vertical
    );
    this.colPositions = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["PositionCache"](this.rootEl, this.rowRefs.currentMap[0].getCellEls(), // cell els in first row
    true, // horizontal
    false);
  };

  Table.prototype.positionToHit = function (leftPosition, topPosition) {
    var _a = this,
        colPositions = _a.colPositions,
        rowPositions = _a.rowPositions;

    var col = colPositions.leftToIndex(leftPosition);
    var row = rowPositions.topToIndex(topPosition);

    if (row != null && col != null) {
      return {
        row: row,
        col: col,
        dateSpan: {
          range: this.getCellRange(row, col),
          allDay: true
        },
        dayEl: this.getCellEl(row, col),
        relativeRect: {
          left: colPositions.lefts[col],
          right: colPositions.rights[col],
          top: rowPositions.tops[row],
          bottom: rowPositions.bottoms[row]
        }
      };
    }
  };

  Table.prototype.getCellEl = function (row, col) {
    return this.rowRefs.currentMap[row].getCellEls()[col]; // TODO: not optimal
  };

  Table.prototype.getCellRange = function (row, col) {
    var start = this.props.cells[row][col].date;
    var end = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addDays"])(start, 1);
    return {
      start: start,
      end: end
    };
  };

  return Table;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]);

function buildBuildMoreLinkText(moreLinkTextInput) {
  if (typeof moreLinkTextInput === 'function') {
    return moreLinkTextInput;
  } else {
    return function (num) {
      return "+" + num + " " + moreLinkTextInput;
    };
  }
}

function isSegAllDay(seg) {
  return seg.eventRange.def.allDay;
}

var DayTable =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(DayTable, _super);

  function DayTable() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.slicer = new DayTableSlicer();
    _this.tableRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();

    _this.handleRootEl = function (rootEl) {
      if (rootEl) {
        _this.context.registerInteractiveComponent(_this, {
          el: rootEl
        });
      } else {
        _this.context.unregisterInteractiveComponent(_this);
      }
    };

    return _this;
  }

  DayTable.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Table, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
      ref: this.tableRef,
      elRef: this.handleRootEl
    }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), {
      dateProfile: props.dateProfile,
      cells: props.dayTableModel.cells,
      colGroupNode: props.colGroupNode,
      tableMinWidth: props.tableMinWidth,
      renderRowIntro: props.renderRowIntro,
      dayMaxEvents: props.dayMaxEvents,
      dayMaxEventRows: props.dayMaxEventRows,
      showWeekNumbers: props.showWeekNumbers,
      expandRows: props.expandRows,
      headerAlignElRef: props.headerAlignElRef,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      forPrint: props.forPrint
    }));
  };

  DayTable.prototype.prepareHits = function () {
    this.tableRef.current.prepareHits();
  };

  DayTable.prototype.queryHit = function (positionLeft, positionTop) {
    var rawHit = this.tableRef.current.positionToHit(positionLeft, positionTop);

    if (rawHit) {
      return {
        component: this,
        dateSpan: rawHit.dateSpan,
        dayEl: rawHit.dayEl,
        rect: {
          left: rawHit.relativeRect.left,
          right: rawHit.relativeRect.right,
          top: rawHit.relativeRect.top,
          bottom: rawHit.relativeRect.bottom
        },
        layer: 0
      };
    }
  };

  return DayTable;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]);

var DayTableSlicer =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(DayTableSlicer, _super);

  function DayTableSlicer() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.forceDayIfListItem = true;
    return _this;
  }

  DayTableSlicer.prototype.sliceRange = function (dateRange, dayTableModel) {
    return dayTableModel.sliceRange(dateRange);
  };

  return DayTableSlicer;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Slicer"]);

var DayTableView =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(DayTableView, _super);

  function DayTableView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.buildDayTableModel = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(buildDayTableModel);
    _this.headerRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    _this.tableRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    return _this;
  }

  DayTableView.prototype.render = function () {
    var _this = this;

    var _a = this.context,
        options = _a.options,
        dateProfileGenerator = _a.dateProfileGenerator;
    var props = this.props;
    var dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
    var headerContent = options.dayHeaders && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayHeader"], {
      ref: this.headerRef,
      dateProfile: props.dateProfile,
      dates: dayTableModel.headerDates,
      datesRepDistinctDays: dayTableModel.rowCnt === 1
    });

    var bodyContent = function bodyContent(contentArg) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(DayTable, {
        ref: _this.tableRef,
        dateProfile: props.dateProfile,
        dayTableModel: dayTableModel,
        businessHours: props.businessHours,
        dateSelection: props.dateSelection,
        eventStore: props.eventStore,
        eventUiBases: props.eventUiBases,
        eventSelection: props.eventSelection,
        eventDrag: props.eventDrag,
        eventResize: props.eventResize,
        nextDayThreshold: options.nextDayThreshold,
        colGroupNode: contentArg.tableColGroupNode,
        tableMinWidth: contentArg.tableMinWidth,
        dayMaxEvents: options.dayMaxEvents,
        dayMaxEventRows: options.dayMaxEventRows,
        showWeekNumbers: options.weekNumbers,
        expandRows: !props.isHeightAuto,
        headerAlignElRef: _this.headerElRef,
        clientWidth: contentArg.clientWidth,
        clientHeight: contentArg.clientHeight,
        forPrint: props.forPrint
      });
    };

    return options.dayMinWidth ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth) : this.renderSimpleLayout(headerContent, bodyContent);
  };

  return DayTableView;
}(TableView);

function buildDayTableModel(dateProfile, dateProfileGenerator) {
  var daySeries = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DaySeriesModel"](dateProfile.renderRange, dateProfileGenerator);
  return new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayTableModel"](daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}

var TableDateProfileGenerator =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TableDateProfileGenerator, _super);

  function TableDateProfileGenerator() {
    return _super !== null && _super.apply(this, arguments) || this;
  } // Computes the date range that will be rendered.


  TableDateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
    var dateEnv = this.props.dateEnv;

    var renderRange = _super.prototype.buildRenderRange.call(this, currentRange, currentRangeUnit, isRangeAllDay);

    var start = renderRange.start;
    var end = renderRange.end;
    var endOfWeek; // year and month views should be aligned with weeks. this is already done for week

    if (/^(year|month)$/.test(currentRangeUnit)) {
      start = dateEnv.startOfWeek(start); // make end-of-week if not already

      endOfWeek = dateEnv.startOfWeek(end);

      if (endOfWeek.valueOf() !== end.valueOf()) {
        end = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addWeeks"])(endOfWeek, 1);
      }
    } // ensure 6 weeks


    if (this.props.monthMode && this.props.fixedWeekCount) {
      var rowCnt = Math.ceil( // could be partial weeks due to hiddenDays
      Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["diffWeeks"])(start, end));
      end = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addWeeks"])(end, 6 - rowCnt);
    }

    return {
      start: start,
      end: end
    };
  };

  return TableDateProfileGenerator;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateProfileGenerator"]);

var OPTION_REFINERS = {
  moreLinkClick: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["identity"],
  moreLinkClassNames: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["identity"],
  moreLinkContent: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["identity"],
  moreLinkDidMount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["identity"],
  moreLinkWillUnmount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["identity"]
};
var main = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createPlugin"])({
  initialView: 'dayGridMonth',
  optionRefiners: OPTION_REFINERS,
  views: {
    dayGrid: {
      component: DayTableView,
      dateProfileGeneratorClass: TableDateProfileGenerator
    },
    dayGridDay: {
      type: 'dayGrid',
      duration: {
        days: 1
      }
    },
    dayGridWeek: {
      type: 'dayGrid',
      duration: {
        weeks: 1
      }
    },
    dayGridMonth: {
      type: 'dayGrid',
      duration: {
        months: 1
      },
      monthMode: true,
      fixedWeekCount: true
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (main);


/***/ }),

/***/ "./node_modules/@fullcalendar/premium-common/main.js":
/*!***********************************************************!*\
  !*** ./node_modules/@fullcalendar/premium-common/main.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/common */ "./node_modules/@fullcalendar/common/main.js");
/*!
FullCalendar Scheduler v5.3.1
Docs & License: https://fullcalendar.io/scheduler
(c) 2020 Adam Shaw
*/

var RELEASE_DATE = '2020-09-04'; // for Scheduler

var UPGRADE_WINDOW = 365 + 7; // days. 1 week leeway, for tz shift reasons too

var LICENSE_INFO_URL = 'http://fullcalendar.io/scheduler/license/';
var PRESET_LICENSE_KEYS = ['GPL-My-Project-Is-Open-Source', 'CC-Attribution-NonCommercial-NoDerivatives'];
var CSS = {
  position: 'absolute',
  zIndex: 99999,
  bottom: '1px',
  left: '1px',
  background: '#eee',
  borderColor: '#ddd',
  borderStyle: 'solid',
  borderWidth: '1px 1px 0 0',
  padding: '2px 4px',
  fontSize: '12px',
  borderTopRightRadius: '3px'
};

function buildLicenseWarning(context) {
  var key = context.options.schedulerLicenseKey;

  if (!isImmuneUrl(window.location.href) && !isValidKey(key)) {
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'fc-license-message',
      style: CSS
    }, "Please use a valid license key. ", Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: LICENSE_INFO_URL
    }, "More Info"));
  }
}
/*
This decryption is not meant to be bulletproof. Just a way to remind about an upgrade.
*/


function isValidKey(key) {
  if (PRESET_LICENSE_KEYS.indexOf(key) !== -1) {
    return true;
  }

  var parts = (key || '').match(/^(\d+)-fcs-(\d+)$/);

  if (parts && parts[1].length === 10) {
    var purchaseDate = new Date(parseInt(parts[2], 10) * 1000);
    var releaseDate = new Date(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["config"].mockSchedulerReleaseDate || RELEASE_DATE);

    if (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["isValidDate"])(releaseDate)) {
      // token won't be replaced in dev mode
      var minPurchaseDate = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["addDays"])(releaseDate, -UPGRADE_WINDOW);

      if (minPurchaseDate < purchaseDate) {
        return true;
      }
    }
  }

  return false;
}

function isImmuneUrl(url) {
  return /\w+:\/\/fullcalendar\.io\/|\/examples\/[\w-]+\.html$/.test(url);
}

var OPTION_REFINERS = {
  schedulerLicenseKey: String
};
var main = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
  optionRefiners: OPTION_REFINERS,
  viewContainerAppends: [buildLicenseWarning]
});
/* harmony default export */ __webpack_exports__["default"] = (main);

/***/ }),

/***/ "./node_modules/@fullcalendar/resource-common/main.js":
/*!************************************************************!*\
  !*** ./node_modules/@fullcalendar/resource-common/main.js ***!
  \************************************************************/
/*! exports provided: default, AbstractResourceDayTableModel, DEFAULT_RESOURCE_ORDER, DayResourceTableModel, ResourceApi, ResourceDayHeader, ResourceDayTableModel, ResourceLabelRoot, ResourceSplitter, VResourceJoiner, VResourceSplitter, buildResourceFields, buildRowNodes, flattenResources, getPublicId, isGroupsEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractResourceDayTableModel", function() { return AbstractResourceDayTableModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESOURCE_ORDER", function() { return DEFAULT_RESOURCE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayResourceTableModel", function() { return DayResourceTableModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceApi", function() { return ResourceApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDayHeader", function() { return ResourceDayHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDayTableModel", function() { return ResourceDayTableModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceLabelRoot", function() { return ResourceLabelRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceSplitter", function() { return ResourceSplitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VResourceJoiner", function() { return VResourceJoiner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VResourceSplitter", function() { return VResourceSplitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildResourceFields", function() { return buildResourceFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildRowNodes", function() { return buildRowNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenResources", function() { return flattenResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPublicId", function() { return getPublicId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGroupsEqual", function() { return isGroupsEqual; });
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/common */ "./node_modules/@fullcalendar/common/main.js");
/* harmony import */ var _fullcalendar_premium_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/premium-common */ "./node_modules/@fullcalendar/premium-common/main.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
FullCalendar Scheduler v5.3.1
Docs & License: https://fullcalendar.io/scheduler
(c) 2020 Adam Shaw
*/




function massageEventDragMutation(eventMutation, hit0, hit1) {
  var resource0 = hit0.dateSpan.resourceId;
  var resource1 = hit1.dateSpan.resourceId;

  if (resource0 && resource1 && resource0 !== resource1) {
    eventMutation.resourceMutation = {
      matchResourceId: resource0,
      setResourceId: resource1
    };
  }
}
/*
TODO: all this would be much easier if we were using a hash!
*/


function applyEventDefMutation(eventDef, mutation, context) {
  var resourceMutation = mutation.resourceMutation;

  if (resourceMutation && computeResourceEditable(eventDef, context)) {
    var index = eventDef.resourceIds.indexOf(resourceMutation.matchResourceId);

    if (index !== -1) {
      var resourceIds = eventDef.resourceIds.slice(); // copy

      resourceIds.splice(index, 1); // remove

      if (resourceIds.indexOf(resourceMutation.setResourceId) === -1) {
        // not already in there
        resourceIds.push(resourceMutation.setResourceId); // add
      }

      eventDef.resourceIds = resourceIds;
    }
  }
}
/*
HACK
TODO: use EventUi system instead of this
*/


function computeResourceEditable(eventDef, context) {
  var resourceEditable = eventDef.resourceEditable;

  if (resourceEditable == null) {
    var source = eventDef.sourceId && context.getCurrentData().eventSources[eventDef.sourceId];

    if (source) {
      resourceEditable = source.extendedProps.resourceEditable; // used the Source::extendedProps hack
    }

    if (resourceEditable == null) {
      resourceEditable = context.options.eventResourceEditable;

      if (resourceEditable == null) {
        resourceEditable = context.options.editable; // TODO: use defaults system instead
      }
    }
  }

  return resourceEditable;
}

function transformEventDrop(mutation, context) {
  var resourceMutation = mutation.resourceMutation;

  if (resourceMutation) {
    var calendarApi = context.calendarApi;
    return {
      oldResource: calendarApi.getResourceById(resourceMutation.matchResourceId),
      newResource: calendarApi.getResourceById(resourceMutation.setResourceId)
    };
  } else {
    return {
      oldResource: null,
      newResource: null
    };
  }
}

var ResourceDataAdder =
/** @class */
function () {
  function ResourceDataAdder() {
    this.filterResources = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["memoize"])(filterResources);
  }

  ResourceDataAdder.prototype.transform = function (viewProps, calendarProps) {
    if (calendarProps.viewSpec.optionDefaults.needsResourceData) {
      return {
        resourceStore: this.filterResources(calendarProps.resourceStore, calendarProps.options.filterResourcesWithEvents, calendarProps.eventStore, calendarProps.dateProfile.activeRange),
        resourceEntityExpansions: calendarProps.resourceEntityExpansions
      };
    }
  };

  return ResourceDataAdder;
}();

function filterResources(resourceStore, doFilterResourcesWithEvents, eventStore, activeRange) {
  if (doFilterResourcesWithEvents) {
    var instancesInRange = filterEventInstancesInRange(eventStore.instances, activeRange);
    var hasEvents_1 = computeHasEvents(instancesInRange, eventStore.defs);

    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(hasEvents_1, computeAncestorHasEvents(hasEvents_1, resourceStore));

    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["filterHash"])(resourceStore, function (resource, resourceId) {
      return hasEvents_1[resourceId];
    });
  } else {
    return resourceStore;
  }
}

function filterEventInstancesInRange(eventInstances, activeRange) {
  return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["filterHash"])(eventInstances, function (eventInstance) {
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["rangesIntersect"])(eventInstance.range, activeRange);
  });
}

function computeHasEvents(eventInstances, eventDefs) {
  var hasEvents = {};

  for (var instanceId in eventInstances) {
    var instance = eventInstances[instanceId];

    for (var _i = 0, _a = eventDefs[instance.defId].resourceIds; _i < _a.length; _i++) {
      var resourceId = _a[_i];
      hasEvents[resourceId] = true;
    }
  }

  return hasEvents;
}
/*
mark resources as having events if any of their ancestors have them
NOTE: resourceStore might not have all the resources that hasEvents{} has keyed
*/


function computeAncestorHasEvents(hasEvents, resourceStore) {
  var res = {};

  for (var resourceId in hasEvents) {
    var resource = void 0;

    while (resource = resourceStore[resourceId]) {
      resourceId = resource.parentId; // now functioning as the parentId

      if (resourceId) {
        res[resourceId] = true;
      } else {
        break;
      }
    }
  }

  return res;
} // for when non-resource view should be given EventUi info (for event coloring/constraints based off of resource data)


var ResourceEventConfigAdder =
/** @class */
function () {
  function ResourceEventConfigAdder() {
    this.buildResourceEventUis = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["memoize"])(buildResourceEventUis, _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["isPropsEqual"]);
    this.injectResourceEventUis = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["memoize"])(injectResourceEventUis);
  }

  ResourceEventConfigAdder.prototype.transform = function (viewProps, calendarProps) {
    if (!calendarProps.viewSpec.optionDefaults.needsResourceData) {
      return {
        eventUiBases: this.injectResourceEventUis(viewProps.eventUiBases, viewProps.eventStore.defs, this.buildResourceEventUis(calendarProps.resourceStore))
      };
    }
  };

  return ResourceEventConfigAdder;
}();

function buildResourceEventUis(resourceStore) {
  return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["mapHash"])(resourceStore, function (resource) {
    return resource.ui;
  });
}

function injectResourceEventUis(eventUiBases, eventDefs, resourceEventUis) {
  return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["mapHash"])(eventUiBases, function (eventUi, defId) {
    if (defId) {
      // not the '' key
      return injectResourceEventUi(eventUi, eventDefs[defId], resourceEventUis);
    } else {
      return eventUi;
    }
  });
}

function injectResourceEventUi(origEventUi, eventDef, resourceEventUis) {
  var parts = []; // first resource takes precedence, which fights with the ordering of combineEventUis, thus the unshifts

  for (var _i = 0, _a = eventDef.resourceIds; _i < _a.length; _i++) {
    var resourceId = _a[_i];

    if (resourceEventUis[resourceId]) {
      parts.unshift(resourceEventUis[resourceId]);
    }
  }

  parts.unshift(origEventUi);
  return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["combineEventUis"])(parts);
} // for making sure events that have editable resources are always draggable in resource views


function transformIsDraggable(val, eventDef, eventUi, context) {
  if (!val) {
    var state = context.getCurrentData();
    var viewSpec = state.viewSpecs[state.currentViewType];

    if (viewSpec.optionDefaults.needsResourceData) {
      if (computeResourceEditable(eventDef, context)) {
        return true;
      }
    }
  }

  return val;
}

var defs = []; // TODO: use plugin system

function registerResourceSourceDef(def) {
  defs.push(def);
}

function getResourceSourceDef(id) {
  return defs[id];
}

function getResourceSourceDefs() {
  return defs;
} // TODO: make this a plugin-able parser
// TODO: success/failure


var RESOURCE_SOURCE_REFINERS = {
  id: String,
  // for array. TODO: move to resource-array
  resources: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  // for json feed. TODO: move to resource-json-feed
  url: String,
  method: String,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  extraParams: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"]
};

function parseResourceSource(input) {
  var inputObj;

  if (typeof input === 'string') {
    inputObj = {
      url: input
    };
  } else if (typeof input === 'function' || Array.isArray(input)) {
    inputObj = {
      resources: input
    };
  } else if (_typeof(input) === 'object' && input) {
    // non-null object
    inputObj = input;
  }

  if (inputObj) {
    var _a = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["refineProps"])(inputObj, RESOURCE_SOURCE_REFINERS),
        refined = _a.refined,
        extra = _a.extra;

    warnUnknownProps(extra);
    var metaRes = buildResourceSourceMeta(refined);

    if (metaRes) {
      return {
        _raw: input,
        sourceId: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["guid"])(),
        sourceDefId: metaRes.sourceDefId,
        meta: metaRes.meta,
        publicId: refined.id || '',
        isFetching: false,
        latestFetchId: '',
        fetchRange: null
      };
    }
  }

  return null;
}

function buildResourceSourceMeta(refined) {
  var defs = getResourceSourceDefs();

  for (var i = defs.length - 1; i >= 0; i--) {
    // later-added plugins take precedence
    var def = defs[i];
    var meta = def.parseMeta(refined);

    if (meta) {
      return {
        meta: meta,
        sourceDefId: i
      };
    }
  }
}

function warnUnknownProps(props) {
  for (var propName in props) {
    console.warn("Unknown resource prop '" + propName + "'");
  }
}

function reduceResourceSource(source, action, context) {
  var options = context.options,
      dateProfile = context.dateProfile;

  if (!source || !action) {
    return createSource(options.initialResources || options.resources, dateProfile.activeRange, options.refetchResourcesOnNavigate, context);
  }

  switch (action.type) {
    case 'RESET_RESOURCE_SOURCE':
      return createSource(action.resourceSourceInput, dateProfile.activeRange, options.refetchResourcesOnNavigate, context);

    case 'PREV': // TODO: how do we track all actions that affect dateProfile :(

    case 'NEXT':
    case 'CHANGE_DATE':
    case 'CHANGE_VIEW_TYPE':
      return handleRangeChange(source, dateProfile.activeRange, options.refetchResourcesOnNavigate, context);

    case 'RECEIVE_RESOURCES':
    case 'RECEIVE_RESOURCE_ERROR':
      return receiveResponse(source, action.fetchId, action.fetchRange);

    case 'REFETCH_RESOURCES':
      return fetchSource(source, dateProfile.activeRange, context);

    default:
      return source;
  }
}

function createSource(input, activeRange, refetchResourcesOnNavigate, context) {
  if (input) {
    var source = parseResourceSource(input);
    source = fetchSource(source, refetchResourcesOnNavigate ? activeRange : null, context);
    return source;
  }

  return null;
}

function handleRangeChange(source, activeRange, refetchResourcesOnNavigate, context) {
  if (refetchResourcesOnNavigate && !doesSourceIgnoreRange(source) && (!source.fetchRange || !Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["rangesEqual"])(source.fetchRange, activeRange))) {
    return fetchSource(source, activeRange, context);
  } else {
    return source;
  }
}

function doesSourceIgnoreRange(source) {
  return Boolean(getResourceSourceDef(source.sourceDefId).ignoreRange);
}

function fetchSource(source, fetchRange, context) {
  var sourceDef = getResourceSourceDef(source.sourceDefId);
  var fetchId = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["guid"])();
  sourceDef.fetch({
    resourceSource: source,
    range: fetchRange,
    context: context
  }, function (res) {
    context.dispatch({
      type: 'RECEIVE_RESOURCES',
      fetchId: fetchId,
      fetchRange: fetchRange,
      rawResources: res.rawResources
    });
  }, function (error) {
    context.dispatch({
      type: 'RECEIVE_RESOURCE_ERROR',
      fetchId: fetchId,
      fetchRange: fetchRange,
      error: error
    });
  });
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, source), {
    isFetching: true,
    latestFetchId: fetchId
  });
}

function receiveResponse(source, fetchId, fetchRange) {
  if (fetchId === source.latestFetchId) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, source), {
      isFetching: false,
      fetchRange: fetchRange
    });
  }

  return source;
}

var PRIVATE_ID_PREFIX = '_fc:';
var RESOURCE_REFINERS = {
  id: String,
  parentId: String,
  children: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  title: String,
  businessHours: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  extendedProps: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  // event-ui
  eventEditable: Boolean,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventConstraint: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  eventOverlap: Boolean,
  eventAllow: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  eventClassNames: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["parseClassNames"],
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String
};
/*
needs a full store so that it can populate children too
*/

function parseResource(raw, parentId, store, context) {
  if (parentId === void 0) {
    parentId = '';
  }

  var _a = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["refineProps"])(raw, RESOURCE_REFINERS),
      refined = _a.refined,
      extra = _a.extra;

  var resource = {
    id: refined.id || PRIVATE_ID_PREFIX + Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["guid"])(),
    parentId: refined.parentId || parentId,
    title: refined.title || '',
    businessHours: refined.businessHours ? Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["parseBusinessHours"])(refined.businessHours, context) : null,
    ui: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createEventUi"])({
      editable: refined.eventEditable,
      startEditable: refined.eventStartEditable,
      durationEditable: refined.eventDurationEditable,
      constraint: refined.eventConstraint,
      overlap: refined.eventOverlap,
      allow: refined.eventAllow,
      classNames: refined.eventClassNames,
      backgroundColor: refined.eventBackgroundColor,
      borderColor: refined.eventBorderColor,
      textColor: refined.eventTextColor,
      color: refined.eventColor
    }, context),
    extendedProps: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, extra), refined.extendedProps)
  }; // help out ResourceApi from having user modify props

  Object.freeze(resource.ui.classNames);
  Object.freeze(resource.extendedProps);
  if (store[resource.id]) ;else {
    store[resource.id] = resource;

    if (refined.children) {
      for (var _i = 0, _b = refined.children; _i < _b.length; _i++) {
        var childInput = _b[_i];
        parseResource(childInput, resource.id, store, context);
      }
    }
  }
  return resource;
}
/*
TODO: use this in more places
*/


function getPublicId(id) {
  if (id.indexOf(PRIVATE_ID_PREFIX) === 0) {
    return '';
  }

  return id;
}

function reduceResourceStore(store, action, source, context) {
  if (!store || !action) {
    return {};
  }

  switch (action.type) {
    case 'RECEIVE_RESOURCES':
      return receiveRawResources(store, action.rawResources, action.fetchId, source, context);

    case 'ADD_RESOURCE':
      return addResource(store, action.resourceHash);

    case 'REMOVE_RESOURCE':
      return removeResource(store, action.resourceId);

    case 'SET_RESOURCE_PROP':
      return setResourceProp(store, action.resourceId, action.propName, action.propValue);

    case 'SET_RESOURCE_EXTENDED_PROP':
      return setResourceExtendedProp(store, action.resourceId, action.propName, action.propValue);

    default:
      return store;
  }
}

function receiveRawResources(existingStore, inputs, fetchId, source, context) {
  if (source.latestFetchId === fetchId) {
    var nextStore = {};

    for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
      var input = inputs_1[_i];
      parseResource(input, '', nextStore, context);
    }

    return nextStore;
  } else {
    return existingStore;
  }
}

function addResource(existingStore, additions) {
  // TODO: warn about duplicate IDs
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, existingStore), additions);
}

function removeResource(existingStore, resourceId) {
  var newStore = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, existingStore);

  delete newStore[resourceId]; // promote children

  for (var childResourceId in newStore) {
    // a child, *maybe* but probably not
    if (newStore[childResourceId].parentId === resourceId) {
      newStore[childResourceId] = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, newStore[childResourceId]), {
        parentId: ''
      });
    }
  }

  return newStore;
}

function setResourceProp(existingStore, resourceId, name, value) {
  var _a, _b;

  var existingResource = existingStore[resourceId]; // TODO: sanitization

  if (existingResource) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, existingStore), (_a = {}, _a[resourceId] = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, existingResource), (_b = {}, _b[name] = value, _b)), _a));
  } else {
    return existingStore;
  }
}

function setResourceExtendedProp(existingStore, resourceId, name, value) {
  var _a, _b;

  var existingResource = existingStore[resourceId];

  if (existingResource) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, existingStore), (_a = {}, _a[resourceId] = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, existingResource), {
      extendedProps: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, existingResource.extendedProps), (_b = {}, _b[name] = value, _b))
    }), _a));
  } else {
    return existingStore;
  }
}

function reduceResourceEntityExpansions(expansions, action) {
  var _a;

  if (!expansions || !action) {
    return {};
  }

  switch (action.type) {
    case 'SET_RESOURCE_ENTITY_EXPANDED':
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, expansions), (_a = {}, _a[action.id] = action.isExpanded, _a));

    default:
      return expansions;
  }
}

function reduceResources(state, action, context) {
  var resourceSource = reduceResourceSource(state && state.resourceSource, action, context);
  var resourceStore = reduceResourceStore(state && state.resourceStore, action, resourceSource, context);
  var resourceEntityExpansions = reduceResourceEntityExpansions(state && state.resourceEntityExpansions, action);
  return {
    resourceSource: resourceSource,
    resourceStore: resourceStore,
    resourceEntityExpansions: resourceEntityExpansions,
    loadingLevel: context.loadingLevel + (resourceSource && resourceSource.isFetching ? 1 : 0)
  };
}

var EVENT_REFINERS = {
  resourceId: String,
  resourceIds: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceEditable: Boolean
};

function generateEventDefResourceMembers(refined) {
  return {
    resourceIds: ensureStringArray(refined.resourceIds).concat(refined.resourceId ? [refined.resourceId] : []),
    resourceEditable: refined.resourceEditable
  };
}

function ensureStringArray(items) {
  return (items || []).map(function (item) {
    return String(item);
  });
}

function transformDateSelectionJoin(hit0, hit1) {
  var resourceId0 = hit0.dateSpan.resourceId;
  var resourceId1 = hit1.dateSpan.resourceId;

  if (resourceId0 && resourceId1) {
    if (hit0.component.allowAcrossResources === false && resourceId0 !== resourceId1) {
      return false;
    } else {
      return {
        resourceId: resourceId0
      };
    }
  }
}

var ResourceApi =
/** @class */
function () {
  function ResourceApi(_context, _resource) {
    this._context = _context;
    this._resource = _resource;
  }

  ResourceApi.prototype.setProp = function (name, value) {
    var oldResource = this._resource;

    this._context.dispatch({
      type: 'SET_RESOURCE_PROP',
      resourceId: oldResource.id,
      propName: name,
      propValue: value
    });

    this.sync(oldResource);
  };

  ResourceApi.prototype.setExtendedProp = function (name, value) {
    var oldResource = this._resource;

    this._context.dispatch({
      type: 'SET_RESOURCE_EXTENDED_PROP',
      resourceId: oldResource.id,
      propName: name,
      propValue: value
    });

    this.sync(oldResource);
  };

  ResourceApi.prototype.sync = function (oldResource) {
    var context = this._context;
    var resourceId = oldResource.id; // TODO: what if dispatch didn't complete synchronously?

    this._resource = context.getCurrentData().resourceStore[resourceId];
    context.emitter.trigger('resourceChange', {
      oldResource: new ResourceApi(context, oldResource),
      resource: this,
      revert: function revert() {
        var _a;

        context.dispatch({
          type: 'ADD_RESOURCE',
          resourceHash: (_a = {}, _a[resourceId] = oldResource, _a)
        });
      }
    });
  };

  ResourceApi.prototype.remove = function () {
    var context = this._context;
    var internalResource = this._resource;
    var resourceId = internalResource.id;
    context.dispatch({
      type: 'REMOVE_RESOURCE',
      resourceId: resourceId
    });
    context.emitter.trigger('resourceRemove', {
      resource: this,
      revert: function revert() {
        var _a;

        context.dispatch({
          type: 'ADD_RESOURCE',
          resourceHash: (_a = {}, _a[resourceId] = internalResource, _a)
        });
      }
    });
  };

  ResourceApi.prototype.getParent = function () {
    var context = this._context;
    var parentId = this._resource.parentId;

    if (parentId) {
      return new ResourceApi(context, context.getCurrentData().resourceSource[parentId]);
    } else {
      return null;
    }
  };

  ResourceApi.prototype.getChildren = function () {
    var thisResourceId = this._resource.id;
    var context = this._context;
    var resourceStore = context.getCurrentData().resourceStore;
    var childApis = [];

    for (var resourceId in resourceStore) {
      if (resourceStore[resourceId].parentId === thisResourceId) {
        childApis.push(new ResourceApi(context, resourceStore[resourceId]));
      }
    }

    return childApis;
  };
  /*
  this is really inefficient!
  TODO: make EventApi::resourceIds a hash or keep an index in the Calendar's state
  */


  ResourceApi.prototype.getEvents = function () {
    var thisResourceId = this._resource.id;
    var context = this._context;
    var _a = context.getCurrentData().eventStore,
        defs = _a.defs,
        instances = _a.instances;
    var eventApis = [];

    for (var instanceId in instances) {
      var instance = instances[instanceId];
      var def = defs[instance.defId];

      if (def.resourceIds.indexOf(thisResourceId) !== -1) {
        // inefficient!!!
        eventApis.push(new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["EventApi"](context, def, instance));
      }
    }

    return eventApis;
  };

  Object.defineProperty(ResourceApi.prototype, "id", {
    get: function get() {
      return getPublicId(this._resource.id);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResourceApi.prototype, "title", {
    get: function get() {
      return this._resource.title;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResourceApi.prototype, "eventConstraint", {
    get: function get() {
      return this._resource.ui.constraints[0] || null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResourceApi.prototype, "eventOverlap", {
    get: function get() {
      return this._resource.ui.overlap;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResourceApi.prototype, "eventAllow", {
    get: function get() {
      return this._resource.ui.allows[0] || null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResourceApi.prototype, "eventBackgroundColor", {
    get: function get() {
      return this._resource.ui.backgroundColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResourceApi.prototype, "eventBorderColor", {
    get: function get() {
      return this._resource.ui.borderColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResourceApi.prototype, "eventTextColor", {
    get: function get() {
      return this._resource.ui.textColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResourceApi.prototype, "eventClassNames", {
    // NOTE: user can't modify these because Object.freeze was called in event-def parsing
    get: function get() {
      return this._resource.ui.classNames;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResourceApi.prototype, "extendedProps", {
    get: function get() {
      return this._resource.extendedProps;
    },
    enumerable: false,
    configurable: true
  });

  ResourceApi.prototype.toPlainObject = function (settings) {
    if (settings === void 0) {
      settings = {};
    }

    var internal = this._resource;
    var ui = internal.ui;
    var publicId = this.id;
    var res = {};

    if (publicId) {
      res.id = publicId;
    }

    if (internal.title) {
      res.title = internal.title;
    }

    if (settings.collapseEventColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) {
      res.eventColor = ui.backgroundColor;
    } else {
      if (ui.backgroundColor) {
        res.eventBackgroundColor = ui.backgroundColor;
      }

      if (ui.borderColor) {
        res.eventBorderColor = ui.borderColor;
      }
    }

    if (ui.textColor) {
      res.eventTextColor = ui.textColor;
    }

    if (ui.classNames.length) {
      res.eventClassNames = ui.classNames;
    }

    if (Object.keys(internal.extendedProps).length) {
      if (settings.collapseExtendedProps) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(res, internal.extendedProps);
      } else {
        res.extendedProps = internal.extendedProps;
      }
    }

    return res;
  };

  ResourceApi.prototype.toJSON = function () {
    return this.toPlainObject();
  };

  return ResourceApi;
}();

function buildResourceApis(resourceStore, context) {
  var resourceApis = [];

  for (var resourceId in resourceStore) {
    resourceApis.push(new ResourceApi(context, resourceStore[resourceId]));
  }

  return resourceApis;
}

_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["CalendarApi"].prototype.addResource = function (input, scrollTo) {
  var _a;

  var _this = this;

  if (scrollTo === void 0) {
    scrollTo = true;
  }

  var currentState = this.getCurrentData();
  var resourceHash;
  var resource;

  if (input instanceof ResourceApi) {
    resource = input._resource;
    resourceHash = (_a = {}, _a[resource.id] = resource, _a);
  } else {
    resourceHash = {};
    resource = parseResource(input, '', resourceHash, currentState);
  }

  this.dispatch({
    type: 'ADD_RESOURCE',
    resourceHash: resourceHash
  });

  if (scrollTo) {
    // TODO: wait til dispatch completes somehow
    this.trigger('_scrollRequest', {
      resourceId: resource.id
    });
  }

  var resourceApi = new ResourceApi(currentState, resource);
  currentState.emitter.trigger('resourceAdd', {
    resource: resourceApi,
    revert: function revert() {
      _this.dispatch({
        type: 'REMOVE_RESOURCE',
        resourceId: resource.id
      });
    }
  });
  return resourceApi;
};

_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["CalendarApi"].prototype.getResourceById = function (id) {
  id = String(id);
  var currentState = this.getCurrentData();

  if (currentState.resourceStore) {
    // guard against calendar with no resource functionality
    var rawResource = currentState.resourceStore[id];

    if (rawResource) {
      return new ResourceApi(currentState, rawResource);
    }
  }

  return null;
};

_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["CalendarApi"].prototype.getResources = function () {
  var currentState = this.getCurrentData();
  var resourceStore = currentState.resourceStore;
  var resourceApis = [];

  if (resourceStore) {
    // guard against calendar with no resource functionality
    for (var resourceId in resourceStore) {
      resourceApis.push(new ResourceApi(currentState, resourceStore[resourceId]));
    }
  }

  return resourceApis;
};

_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["CalendarApi"].prototype.getTopLevelResources = function () {
  var currentState = this.getCurrentData();
  var resourceStore = currentState.resourceStore;
  var resourceApis = [];

  if (resourceStore) {
    // guard against calendar with no resource functionality
    for (var resourceId in resourceStore) {
      if (!resourceStore[resourceId].parentId) {
        resourceApis.push(new ResourceApi(currentState, resourceStore[resourceId]));
      }
    }
  }

  return resourceApis;
};

_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["CalendarApi"].prototype.refetchResources = function () {
  this.dispatch({
    type: 'REFETCH_RESOURCES'
  });
};

function transformDatePoint(dateSpan, context) {
  return dateSpan.resourceId ? {
    resource: context.calendarApi.getResourceById(dateSpan.resourceId)
  } : {};
}

function transformDateSpan(dateSpan, context) {
  return dateSpan.resourceId ? {
    resource: context.calendarApi.getResourceById(dateSpan.resourceId)
  } : {};
}
/*
splits things BASED OFF OF which resources they are associated with.
creates a '' entry which is when something has NO resource.
*/


var ResourceSplitter =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(ResourceSplitter, _super);

  function ResourceSplitter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ResourceSplitter.prototype.getKeyInfo = function (props) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
      '': {}
    }, props.resourceStore // already has `ui` and `businessHours` keys!
    );
  };

  ResourceSplitter.prototype.getKeysForDateSpan = function (dateSpan) {
    return [dateSpan.resourceId || ''];
  };

  ResourceSplitter.prototype.getKeysForEventDef = function (eventDef) {
    var resourceIds = eventDef.resourceIds;

    if (!resourceIds.length) {
      return [''];
    }

    return resourceIds;
  };

  return ResourceSplitter;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["Splitter"]);

function isPropsValidWithResources(props, context) {
  var splitter = new ResourceSplitter();
  var sets = splitter.splitProps(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, props), {
    resourceStore: context.getCurrentData().resourceStore
  }));

  for (var resourceId in sets) {
    var props_1 = sets[resourceId]; // merge in event data from the non-resource segment

    if (resourceId && sets['']) {
      // current segment is not the non-resource one, and there IS a non-resource one
      props_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, props_1), {
        eventStore: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["mergeEventStores"])(sets[''].eventStore, props_1.eventStore),
        eventUiBases: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, sets[''].eventUiBases), props_1.eventUiBases)
      });
    }

    if (!Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["isPropsValid"])(props_1, context, {
      resourceId: resourceId
    }, filterConfig.bind(null, resourceId))) {
      return false;
    }
  }

  return true;
}

function filterConfig(resourceId, config) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, config), {
    constraints: filterConstraints(resourceId, config.constraints)
  });
}

function filterConstraints(resourceId, constraints) {
  return constraints.map(function (constraint) {
    var defs = constraint.defs;

    if (defs) {
      // we are dealing with an EventStore
      // if any of the events define constraints to resources that are NOT this resource,
      // then this resource is unconditionally prohibited, which is what a `false` value does.
      for (var defId in defs) {
        var resourceIds = defs[defId].resourceIds;

        if (resourceIds.length && resourceIds.indexOf(resourceId) === -1) {
          // TODO: use a hash?!!! (for other reasons too)
          return false;
        }
      }
    }

    return constraint;
  });
}

function transformExternalDef(dateSpan) {
  return dateSpan.resourceId ? {
    resourceId: dateSpan.resourceId
  } : {};
}

function transformEventResizeJoin(hit0, hit1) {
  var component = hit0.component;

  if (component.allowAcrossResources === false && hit0.dateSpan.resourceId !== hit1.dateSpan.resourceId) {
    return false;
  }
}

_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["EventApi"].prototype.getResources = function () {
  var calendarApi = this._context.calendarApi;
  return this._def.resourceIds.map(function (resourceId) {
    return calendarApi.getResourceById(resourceId);
  });
};

_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["EventApi"].prototype.setResources = function (resources) {
  var resourceIds = []; // massage resources -> resourceIds

  for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
    var resource = resources_1[_i];
    var resourceId = null;

    if (typeof resource === 'string') {
      resourceId = resource;
    } else if (typeof resource === 'number') {
      resourceId = String(resource);
    } else if (resource instanceof ResourceApi) {
      resourceId = resource.id; // guaranteed to always have an ID. hmmm
    } else {
      console.warn('unknown resource type: ' + resource);
    }

    if (resourceId) {
      resourceIds.push(resourceId);
    }
  }

  this.mutate({
    standardProps: {
      resourceIds: resourceIds
    }
  });
};

var optionChangeHandlers = {
  resources: handleResources
};

function handleResources(newSourceInput, context) {
  var oldSourceInput = context.getCurrentData().resourceSource._raw;

  if (oldSourceInput !== newSourceInput) {
    context.dispatch({
      type: 'RESET_RESOURCE_SOURCE',
      resourceSourceInput: newSourceInput
    });
  }
}

var DEFAULT_RESOURCE_ORDER = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["parseFieldSpecs"])('id,title');

function handleResourceStore(resourceStore, calendarData) {
  var emitter = calendarData.emitter;

  if (emitter.hasHandlers('resourcesSet')) {
    emitter.trigger('resourcesSet', buildResourceApis(resourceStore, calendarData));
  }
}

var OPTION_REFINERS = {
  initialResources: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resources: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  eventResourceEditable: Boolean,
  refetchResourcesOnNavigate: Boolean,
  resourceOrder: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["parseFieldSpecs"],
  filterResourcesWithEvents: Boolean,
  resourceGroupField: String,
  resourceAreaWidth: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceAreaColumns: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourcesInitiallyExpanded: Boolean,
  datesAboveResources: Boolean,
  needsResourceData: Boolean,
  resourceAreaHeaderClassNames: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceAreaHeaderContent: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceAreaHeaderDidMount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceAreaHeaderWillUnmount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceGroupLabelClassNames: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceGroupLabelContent: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceGroupLabelDidMount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceGroupLabelWillUnmount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceLabelClassNames: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceLabelContent: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceLabelDidMount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceLabelWillUnmount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceLaneClassNames: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceLaneContent: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceLaneDidMount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceLaneWillUnmount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceGroupLaneClassNames: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceGroupLaneContent: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceGroupLaneDidMount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceGroupLaneWillUnmount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"]
};
var LISTENER_REFINERS = {
  resourcesSet: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceAdd: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceChange: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  resourceRemove: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"]
};
registerResourceSourceDef({
  ignoreRange: true,
  parseMeta: function parseMeta(refined) {
    if (Array.isArray(refined.resources)) {
      return refined.resources;
    }

    return null;
  },
  fetch: function fetch(arg, successCallback) {
    successCallback({
      rawResources: arg.resourceSource.meta
    });
  }
});
registerResourceSourceDef({
  parseMeta: function parseMeta(refined) {
    if (typeof refined.resources === 'function') {
      return refined.resources;
    }

    return null;
  },
  fetch: function fetch(arg, success, failure) {
    var dateEnv = arg.context.dateEnv;
    var func = arg.resourceSource.meta;
    var publicArg = arg.range ? {
      start: dateEnv.toDate(arg.range.start),
      end: dateEnv.toDate(arg.range.end),
      startStr: dateEnv.formatIso(arg.range.start),
      endStr: dateEnv.formatIso(arg.range.end),
      timeZone: dateEnv.timeZone
    } : {}; // TODO: make more dry with EventSourceFunc
    // TODO: accept a response?

    Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["unpromisify"])(func.bind(null, publicArg), function (rawResources) {
      success({
        rawResources: rawResources
      }); // needs an object response
    }, failure // send errorObj directly to failure callback
    );
  }
});
registerResourceSourceDef({
  parseMeta: function parseMeta(refined) {
    if (refined.url) {
      return {
        url: refined.url,
        method: (refined.method || 'GET').toUpperCase(),
        extraParams: refined.extraParams
      };
    }

    return null;
  },
  fetch: function fetch(arg, successCallback, failureCallback) {
    var meta = arg.resourceSource.meta;
    var requestParams = buildRequestParams(meta, arg.range, arg.context);
    Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["requestJson"])(meta.method, meta.url, requestParams, function (rawResources, xhr) {
      successCallback({
        rawResources: rawResources,
        xhr: xhr
      });
    }, function (message, xhr) {
      failureCallback({
        message: message,
        xhr: xhr
      });
    });
  }
}); // TODO: somehow consolidate with event json feed

function buildRequestParams(meta, range, context) {
  var dateEnv = context.dateEnv,
      options = context.options;
  var startParam;
  var endParam;
  var timeZoneParam;
  var customRequestParams;
  var params = {};

  if (range) {
    startParam = meta.startParam;

    if (startParam == null) {
      startParam = options.startParam;
    }

    endParam = meta.endParam;

    if (endParam == null) {
      endParam = options.endParam;
    }

    timeZoneParam = meta.timeZoneParam;

    if (timeZoneParam == null) {
      timeZoneParam = options.timeZoneParam;
    }

    params[startParam] = dateEnv.formatIso(range.start);
    params[endParam] = dateEnv.formatIso(range.end);

    if (dateEnv.timeZone !== 'local') {
      params[timeZoneParam] = dateEnv.timeZone;
    }
  } // retrieve any outbound GET/POST data from the options


  if (typeof meta.extraParams === 'function') {
    // supplied as a function that returns a key/value object
    customRequestParams = meta.extraParams();
  } else {
    // probably supplied as a straight key/value object
    customRequestParams = meta.extraParams || {};
  }

  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(params, customRequestParams);

  return params;
} // TODO: not used for Spreadsheet. START USING. difficult because of col-specific rendering props


function ResourceLabelRoot(props) {
  return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["ViewContextType"].Consumer, null, function (context) {
    var options = context.options;
    var hookProps = {
      resource: new ResourceApi(context, props.resource),
      date: props.date ? context.dateEnv.toDate(props.date) : null,
      view: context.viewApi
    };
    var dataAttrs = {
      'data-resource-id': props.resource.id,
      'data-date': props.date ? Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["formatDayString"])(props.date) : undefined
    };
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["RenderHook"], {
      hookProps: hookProps,
      classNames: options.resourceLabelClassNames,
      content: options.resourceLabelContent,
      defaultContent: renderInnerContent,
      didMount: options.resourceLabelDidMount,
      willUnmount: options.resourceLabelWillUnmount
    }, function (rootElRef, classNames, innerElRef, innerContent) {
      return props.children(rootElRef, classNames, // TODO: pass in 'fc-resource' ?
      dataAttrs, innerElRef, innerContent);
    });
  });
}

function renderInnerContent(props) {
  return props.resource.title || props.resource.id;
}

var ResourceDayHeader =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(ResourceDayHeader, _super);

  function ResourceDayHeader() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.buildDateFormat = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["memoize"])(buildDateFormat);
    return _this;
  }

  ResourceDayHeader.prototype.render = function () {
    var _this = this;

    var _a = this,
        props = _a.props,
        context = _a.context;

    var dateFormat = this.buildDateFormat(context.options.dayHeaderFormat, props.datesRepDistinctDays, props.dates.length);
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["NowTimer"], {
      unit: 'day'
    }, function (nowDate, todayRange) {
      if (props.dates.length === 1) {
        return _this.renderResourceRow(props.resources, props.dates[0]);
      } else {
        if (context.options.datesAboveResources) {
          return _this.renderDayAndResourceRows(props.dates, dateFormat, todayRange, props.resources);
        } else {
          return _this.renderResourceAndDayRows(props.resources, props.dates, dateFormat, todayRange);
        }
      }
    });
  };

  ResourceDayHeader.prototype.renderResourceRow = function (resources, date) {
    var resourceCells = resources.map(function (resource) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ResourceCell, {
        key: resource.id,
        resource: resource,
        colSpan: 1,
        date: date
      });
    });
    return this.buildTr(resourceCells, 'resources');
  };

  ResourceDayHeader.prototype.renderDayAndResourceRows = function (dates, dateFormat, todayRange, resources) {
    var dateCells = [];
    var resourceCells = [];

    for (var _i = 0, dates_1 = dates; _i < dates_1.length; _i++) {
      var date = dates_1[_i];
      dateCells.push(this.renderDateCell(date, dateFormat, todayRange, resources.length, null, true));

      for (var _a = 0, resources_1 = resources; _a < resources_1.length; _a++) {
        var resource = resources_1[_a];
        resourceCells.push(Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ResourceCell, {
          key: resource.id + ':' + date.toISOString(),
          resource: resource,
          colSpan: 1,
          date: date
        }));
      }
    }

    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, this.buildTr(dateCells, 'day'), this.buildTr(resourceCells, 'resources'));
  };

  ResourceDayHeader.prototype.renderResourceAndDayRows = function (resources, dates, dateFormat, todayRange) {
    var resourceCells = [];
    var dateCells = [];

    for (var _i = 0, resources_2 = resources; _i < resources_2.length; _i++) {
      var resource = resources_2[_i];
      resourceCells.push(Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ResourceCell, {
        key: resource.id,
        resource: resource,
        colSpan: dates.length,
        isSticky: true
      }));

      for (var _a = 0, dates_2 = dates; _a < dates_2.length; _a++) {
        var date = dates_2[_a];
        dateCells.push(this.renderDateCell(date, dateFormat, todayRange, 1, resource));
      }
    }

    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, this.buildTr(resourceCells, 'day'), this.buildTr(dateCells, 'resources'));
  }; // a cell with date text. might have a resource associated with it


  ResourceDayHeader.prototype.renderDateCell = function (date, dateFormat, todayRange, colSpan, resource, isSticky) {
    var props = this.props;
    var keyPostfix = resource ? ":" + resource.id : '';
    var extraHookProps = resource ? {
      resource: new ResourceApi(this.context, resource)
    } : {};
    var extraDataAttrs = resource ? {
      'data-resource-id': resource.id
    } : {};
    return props.datesRepDistinctDays ? Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["TableDateCell"], {
      key: date.toISOString() + keyPostfix,
      date: date,
      dateProfile: props.dateProfile,
      todayRange: todayRange,
      colCnt: props.dates.length * props.resources.length,
      dayHeaderFormat: dateFormat,
      colSpan: colSpan,
      isSticky: isSticky,
      extraHookProps: extraHookProps,
      extraDataAttrs: extraDataAttrs
    }) : Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["TableDowCell"] // we can't leverage the pure-componentness becausae the extra* props are new every time :(
    , {
      key: date.getUTCDay() + keyPostfix,
      dow: date.getUTCDay(),
      dayHeaderFormat: dateFormat,
      colSpan: colSpan,
      isSticky: isSticky,
      extraHookProps: extraHookProps,
      extraDataAttrs: extraDataAttrs
    });
  };

  ResourceDayHeader.prototype.buildTr = function (cells, key) {
    var renderIntro = this.props.renderIntro;

    if (!cells.length) {
      cells = [Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
        key: 0
      }, "\xA0")];
    }

    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      key: key
    }, renderIntro && renderIntro(), cells);
  };

  return ResourceDayHeader;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]);

function buildDateFormat(dayHeaderFormat, datesRepDistinctDays, dayCnt) {
  return dayHeaderFormat || Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["computeFallbackHeaderFormat"])(datesRepDistinctDays, dayCnt);
}

var ResourceCell =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(ResourceCell, _super);

  function ResourceCell() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ResourceCell.prototype.render = function () {
    var props = this.props;
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ResourceLabelRoot, {
      resource: props.resource,
      date: props.date
    }, function (elRef, customClassNames, dataAttrs, innerElRef, innerContent) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
        ref: elRef,
        className: ['fc-col-header-cell', 'fc-resource'].concat(customClassNames).join(' '),
        colSpan: props.colSpan
      }, dataAttrs), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: 'fc-scrollgrid-sync-inner'
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: ['fc-col-header-cell-cushion', props.isSticky ? 'fc-sticky' : ''].join(' '),
        ref: innerElRef
      }, innerContent)));
    });
  };

  return ResourceCell;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]);

var AbstractResourceDayTableModel =
/** @class */
function () {
  function AbstractResourceDayTableModel(dayTableModel, resources, context) {
    this.dayTableModel = dayTableModel;
    this.resources = resources;
    this.context = context;
    this.resourceIndex = new ResourceIndex(resources);
    this.rowCnt = dayTableModel.rowCnt;
    this.colCnt = dayTableModel.colCnt * resources.length;
    this.cells = this.buildCells();
  }

  AbstractResourceDayTableModel.prototype.buildCells = function () {
    var _a = this,
        rowCnt = _a.rowCnt,
        dayTableModel = _a.dayTableModel,
        resources = _a.resources;

    var rows = [];

    for (var row = 0; row < rowCnt; row++) {
      var rowCells = [];

      for (var dateCol = 0; dateCol < dayTableModel.colCnt; dateCol++) {
        for (var resourceCol = 0; resourceCol < resources.length; resourceCol++) {
          var resource = resources[resourceCol];
          var extraHookProps = {
            resource: new ResourceApi(this.context, resource)
          };
          var extraDataAttrs = {
            'data-resource-id': resource.id
          };
          var extraClassNames = ['fc-resource'];
          var date = dayTableModel.cells[row][dateCol].date;
          rowCells[this.computeCol(dateCol, resourceCol)] = {
            key: resource.id + ':' + date.toISOString(),
            date: date,
            resource: resource,
            extraHookProps: extraHookProps,
            extraDataAttrs: extraDataAttrs,
            extraClassNames: extraClassNames
          };
        }
      }

      rows.push(rowCells);
    }

    return rows;
  };

  return AbstractResourceDayTableModel;
}();
/*
resources over dates
*/


var ResourceDayTableModel =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(ResourceDayTableModel, _super);

  function ResourceDayTableModel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ResourceDayTableModel.prototype.computeCol = function (dateI, resourceI) {
    return resourceI * this.dayTableModel.colCnt + dateI;
  };
  /*
  all date ranges are intact
  */


  ResourceDayTableModel.prototype.computeColRanges = function (dateStartI, dateEndI, resourceI) {
    return [{
      firstCol: this.computeCol(dateStartI, resourceI),
      lastCol: this.computeCol(dateEndI, resourceI),
      isStart: true,
      isEnd: true
    }];
  };

  return ResourceDayTableModel;
}(AbstractResourceDayTableModel);
/*
dates over resources
*/


var DayResourceTableModel =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(DayResourceTableModel, _super);

  function DayResourceTableModel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DayResourceTableModel.prototype.computeCol = function (dateI, resourceI) {
    return dateI * this.resources.length + resourceI;
  };
  /*
  every single day is broken up
  */


  DayResourceTableModel.prototype.computeColRanges = function (dateStartI, dateEndI, resourceI) {
    var segs = [];

    for (var i = dateStartI; i <= dateEndI; i++) {
      var col = this.computeCol(i, resourceI);
      segs.push({
        firstCol: col,
        lastCol: col,
        isStart: i === dateStartI,
        isEnd: i === dateEndI
      });
    }

    return segs;
  };

  return DayResourceTableModel;
}(AbstractResourceDayTableModel);

var ResourceIndex =
/** @class */
function () {
  function ResourceIndex(resources) {
    var indicesById = {};
    var ids = [];

    for (var i = 0; i < resources.length; i++) {
      var id = resources[i].id;
      ids.push(id);
      indicesById[id] = i;
    }

    this.ids = ids;
    this.indicesById = indicesById;
    this.length = resources.length;
  }

  return ResourceIndex;
}();
/*
TODO: just use ResourceHash somehow? could then use the generic ResourceSplitter
*/


var VResourceSplitter =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(VResourceSplitter, _super);

  function VResourceSplitter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  VResourceSplitter.prototype.getKeyInfo = function (props) {
    var resourceDayTableModel = props.resourceDayTableModel;
    var hash = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["mapHash"])(resourceDayTableModel.resourceIndex.indicesById, function (i) {
      return resourceDayTableModel.resources[i]; // has `ui` AND `businessHours` keys!
    }); // :(

    hash[''] = {};
    return hash;
  };

  VResourceSplitter.prototype.getKeysForDateSpan = function (dateSpan) {
    return [dateSpan.resourceId || ''];
  };

  VResourceSplitter.prototype.getKeysForEventDef = function (eventDef) {
    var resourceIds = eventDef.resourceIds;

    if (!resourceIds.length) {
      return [''];
    }

    return resourceIds;
  };

  return VResourceSplitter;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["Splitter"]); // joiner


var NO_SEGS = []; // for memoizing

var VResourceJoiner =
/** @class */
function () {
  function VResourceJoiner() {
    this.joinDateSelection = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["memoize"])(this.joinSegs);
    this.joinBusinessHours = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["memoize"])(this.joinSegs);
    this.joinFgEvents = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["memoize"])(this.joinSegs);
    this.joinBgEvents = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["memoize"])(this.joinSegs);
    this.joinEventDrags = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["memoize"])(this.joinInteractions);
    this.joinEventResizes = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["memoize"])(this.joinInteractions);
  }
  /*
  propSets also has a '' key for things with no resource
  */


  VResourceJoiner.prototype.joinProps = function (propSets, resourceDayTable) {
    var dateSelectionSets = [];
    var businessHoursSets = [];
    var fgEventSets = [];
    var bgEventSets = [];
    var eventDrags = [];
    var eventResizes = [];
    var eventSelection = '';
    var keys = resourceDayTable.resourceIndex.ids.concat(['']); // add in the all-resource key

    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
      var key = keys_1[_i];
      var props = propSets[key];
      dateSelectionSets.push(props.dateSelectionSegs);
      businessHoursSets.push(key ? props.businessHourSegs : NO_SEGS); // don't include redundant all-resource businesshours

      fgEventSets.push(key ? props.fgEventSegs : NO_SEGS); // don't include fg all-resource segs

      bgEventSets.push(props.bgEventSegs);
      eventDrags.push(props.eventDrag);
      eventResizes.push(props.eventResize);
      eventSelection = eventSelection || props.eventSelection;
    }

    return {
      dateSelectionSegs: this.joinDateSelection.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])([resourceDayTable], dateSelectionSets)),
      businessHourSegs: this.joinBusinessHours.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])([resourceDayTable], businessHoursSets)),
      fgEventSegs: this.joinFgEvents.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])([resourceDayTable], fgEventSets)),
      bgEventSegs: this.joinBgEvents.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])([resourceDayTable], bgEventSets)),
      eventDrag: this.joinEventDrags.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])([resourceDayTable], eventDrags)),
      eventResize: this.joinEventResizes.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])([resourceDayTable], eventResizes)),
      eventSelection: eventSelection
    };
  };

  VResourceJoiner.prototype.joinSegs = function (resourceDayTable) {
    var segGroups = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      segGroups[_i - 1] = arguments[_i];
    }

    var resourceCnt = resourceDayTable.resources.length;
    var transformedSegs = [];

    for (var i = 0; i < resourceCnt; i++) {
      for (var _a = 0, _b = segGroups[i]; _a < _b.length; _a++) {
        var seg = _b[_a];
        transformedSegs.push.apply(transformedSegs, this.transformSeg(seg, resourceDayTable, i));
      }

      for (var _c = 0, _d = segGroups[resourceCnt]; _c < _d.length; _c++) {
        // one beyond. the all-resource
        var seg = _d[_c];
        transformedSegs.push.apply( // one beyond. the all-resource
        transformedSegs, this.transformSeg(seg, resourceDayTable, i));
      }
    }

    return transformedSegs;
  };
  /*
  for expanding non-resource segs to all resources.
  only for public use.
  no memoizing.
  */


  VResourceJoiner.prototype.expandSegs = function (resourceDayTable, segs) {
    var resourceCnt = resourceDayTable.resources.length;
    var transformedSegs = [];

    for (var i = 0; i < resourceCnt; i++) {
      for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
        var seg = segs_1[_i];
        transformedSegs.push.apply(transformedSegs, this.transformSeg(seg, resourceDayTable, i));
      }
    }

    return transformedSegs;
  };

  VResourceJoiner.prototype.joinInteractions = function (resourceDayTable) {
    var interactions = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      interactions[_i - 1] = arguments[_i];
    }

    var resourceCnt = resourceDayTable.resources.length;
    var affectedInstances = {};
    var transformedSegs = [];
    var anyInteractions = false;
    var isEvent = false;

    for (var i = 0; i < resourceCnt; i++) {
      var interaction = interactions[i];

      if (interaction) {
        anyInteractions = true;

        for (var _a = 0, _b = interaction.segs; _a < _b.length; _a++) {
          var seg = _b[_a];
          transformedSegs.push.apply(transformedSegs, this.transformSeg(seg, resourceDayTable, i) // TODO: templateify Interaction::segs
          );
        }

        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(affectedInstances, interaction.affectedInstances);

        isEvent = isEvent || interaction.isEvent;
      }

      if (interactions[resourceCnt]) {
        // one beyond. the all-resource
        for (var _c = 0, _d = interactions[resourceCnt].segs; _c < _d.length; _c++) {
          var seg = _d[_c];
          transformedSegs.push.apply(transformedSegs, this.transformSeg(seg, resourceDayTable, i) // TODO: templateify Interaction::segs
          );
        }
      }
    }

    if (anyInteractions) {
      return {
        affectedInstances: affectedInstances,
        segs: transformedSegs,
        isEvent: isEvent
      };
    } else {
      return null;
    }
  };

  return VResourceJoiner;
}();
/*
doesn't accept grouping
*/


function flattenResources(resourceStore, orderSpecs) {
  return buildRowNodes(resourceStore, [], orderSpecs, false, {}, true).map(function (node) {
    return node.resource;
  });
}

function buildRowNodes(resourceStore, groupSpecs, orderSpecs, isVGrouping, expansions, expansionDefault) {
  var complexNodes = buildHierarchy(resourceStore, isVGrouping ? -1 : 1, groupSpecs, orderSpecs);
  var flatNodes = [];
  flattenNodes(complexNodes, flatNodes, isVGrouping, [], 0, expansions, expansionDefault);
  return flatNodes;
}

function flattenNodes(complexNodes, res, isVGrouping, rowSpans, depth, expansions, expansionDefault) {
  for (var i = 0; i < complexNodes.length; i++) {
    var complexNode = complexNodes[i];
    var group = complexNode.group;

    if (group) {
      if (isVGrouping) {
        var firstRowIndex = res.length;
        var rowSpanIndex = rowSpans.length;
        flattenNodes(complexNode.children, res, isVGrouping, rowSpans.concat(0), depth, expansions, expansionDefault);

        if (firstRowIndex < res.length) {
          var firstRow = res[firstRowIndex];
          var firstRowSpans = firstRow.rowSpans = firstRow.rowSpans.slice();
          firstRowSpans[rowSpanIndex] = res.length - firstRowIndex;
        }
      } else {
        var id = group.spec.field + ':' + group.value;
        var isExpanded = expansions[id] != null ? expansions[id] : expansionDefault;
        res.push({
          id: id,
          group: group,
          isExpanded: isExpanded
        });

        if (isExpanded) {
          flattenNodes(complexNode.children, res, isVGrouping, rowSpans, depth + 1, expansions, expansionDefault);
        }
      }
    } else if (complexNode.resource) {
      var id = complexNode.resource.id;
      var isExpanded = expansions[id] != null ? expansions[id] : expansionDefault;
      res.push({
        id: id,
        rowSpans: rowSpans,
        depth: depth,
        isExpanded: isExpanded,
        hasChildren: Boolean(complexNode.children.length),
        resource: complexNode.resource,
        resourceFields: complexNode.resourceFields
      });

      if (isExpanded) {
        flattenNodes(complexNode.children, res, isVGrouping, rowSpans, depth + 1, expansions, expansionDefault);
      }
    }
  }
}

function buildHierarchy(resourceStore, maxDepth, groupSpecs, orderSpecs) {
  var resourceNodes = buildResourceNodes(resourceStore, orderSpecs);
  var builtNodes = [];

  for (var resourceId in resourceNodes) {
    var resourceNode = resourceNodes[resourceId];

    if (!resourceNode.resource.parentId) {
      insertResourceNode(resourceNode, builtNodes, groupSpecs, 0, maxDepth, orderSpecs);
    }
  }

  return builtNodes;
}

function buildResourceNodes(resourceStore, orderSpecs) {
  var nodeHash = {};

  for (var resourceId in resourceStore) {
    var resource = resourceStore[resourceId];
    nodeHash[resourceId] = {
      resource: resource,
      resourceFields: buildResourceFields(resource),
      children: []
    };
  }

  for (var resourceId in resourceStore) {
    var resource = resourceStore[resourceId];

    if (resource.parentId) {
      var parentNode = nodeHash[resource.parentId];

      if (parentNode) {
        insertResourceNodeInSiblings(nodeHash[resourceId], parentNode.children, orderSpecs);
      }
    }
  }

  return nodeHash;
}

function insertResourceNode(resourceNode, nodes, groupSpecs, depth, maxDepth, orderSpecs) {
  if (groupSpecs.length && (maxDepth === -1 || depth <= maxDepth)) {
    var groupNode = ensureGroupNodes(resourceNode, nodes, groupSpecs[0]);
    insertResourceNode(resourceNode, groupNode.children, groupSpecs.slice(1), depth + 1, maxDepth, orderSpecs);
  } else {
    insertResourceNodeInSiblings(resourceNode, nodes, orderSpecs);
  }
}

function ensureGroupNodes(resourceNode, nodes, groupSpec) {
  var groupValue = resourceNode.resourceFields[groupSpec.field];
  var groupNode;
  var newGroupIndex; // find an existing group that matches, or determine the position for a new group

  if (groupSpec.order) {
    for (newGroupIndex = 0; newGroupIndex < nodes.length; newGroupIndex++) {
      var node = nodes[newGroupIndex];

      if (node.group) {
        var cmp = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["flexibleCompare"])(groupValue, node.group.value) * groupSpec.order;

        if (cmp === 0) {
          groupNode = node;
          break;
        } else if (cmp < 0) {
          break;
        }
      }
    }
  } else {
    // the groups are unordered
    for (newGroupIndex = 0; newGroupIndex < nodes.length; newGroupIndex++) {
      var node = nodes[newGroupIndex];

      if (node.group && groupValue === node.group.value) {
        groupNode = node;
        break;
      }
    }
  }

  if (!groupNode) {
    groupNode = {
      group: {
        value: groupValue,
        spec: groupSpec
      },
      children: []
    };
    nodes.splice(newGroupIndex, 0, groupNode);
  }

  return groupNode;
}

function insertResourceNodeInSiblings(resourceNode, siblings, orderSpecs) {
  var i;

  for (i = 0; i < siblings.length; i++) {
    var cmp = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["compareByFieldSpecs"])(siblings[i].resourceFields, resourceNode.resourceFields, orderSpecs); // TODO: pass in ResourceApi?

    if (cmp > 0) {
      // went 1 past. insert at i
      break;
    }
  }

  siblings.splice(i, 0, resourceNode);
}

function buildResourceFields(resource) {
  var obj = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, resource.extendedProps), resource.ui), resource);

  delete obj.ui;
  delete obj.extendedProps;
  return obj;
}

function isGroupsEqual(group0, group1) {
  return group0.spec === group1.spec && group0.value === group1.value;
}

var main = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
  deps: [_fullcalendar_premium_common__WEBPACK_IMPORTED_MODULE_1__["default"]],
  reducers: [reduceResources],
  eventRefiners: EVENT_REFINERS,
  eventDefMemberAdders: [generateEventDefResourceMembers],
  isDraggableTransformers: [transformIsDraggable],
  eventDragMutationMassagers: [massageEventDragMutation],
  eventDefMutationAppliers: [applyEventDefMutation],
  dateSelectionTransformers: [transformDateSelectionJoin],
  datePointTransforms: [transformDatePoint],
  dateSpanTransforms: [transformDateSpan],
  viewPropsTransformers: [ResourceDataAdder, ResourceEventConfigAdder],
  isPropsValid: isPropsValidWithResources,
  externalDefTransforms: [transformExternalDef],
  eventResizeJoinTransforms: [transformEventResizeJoin],
  eventDropTransformers: [transformEventDrop],
  optionChangeHandlers: optionChangeHandlers,
  optionRefiners: OPTION_REFINERS,
  listenerRefiners: LISTENER_REFINERS,
  propSetHandlers: {
    resourceStore: handleResourceStore
  }
});
/* harmony default export */ __webpack_exports__["default"] = (main);


/***/ }),

/***/ "./node_modules/@fullcalendar/resource-daygrid/main.js":
/*!*************************************************************!*\
  !*** ./node_modules/@fullcalendar/resource-daygrid/main.js ***!
  \*************************************************************/
/*! exports provided: default, ResourceDayTable, ResourceDayTableView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDayTable", function() { return ResourceDayTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDayTableView", function() { return ResourceDayTableView; });
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/common */ "./node_modules/@fullcalendar/common/main.js");
/* harmony import */ var _fullcalendar_premium_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/premium-common */ "./node_modules/@fullcalendar/premium-common/main.js");
/* harmony import */ var _fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/resource-common */ "./node_modules/@fullcalendar/resource-common/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/*!
FullCalendar Scheduler v5.3.1
Docs & License: https://fullcalendar.io/scheduler
(c) 2020 Adam Shaw
*/






var ResourceDayTable =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(ResourceDayTable, _super);

  function ResourceDayTable() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.allowAcrossResources = false;
    _this.splitter = new _fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["VResourceSplitter"]();
    _this.slicers = {};
    _this.joiner = new ResourceDayTableJoiner();
    _this.tableRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createRef"])();

    _this.handleRootEl = function (rootEl) {
      if (rootEl) {
        _this.context.registerInteractiveComponent(_this, {
          el: rootEl
        });
      } else {
        _this.context.unregisterInteractiveComponent(_this);
      }
    };

    return _this;
  }

  ResourceDayTable.prototype.render = function () {
    var _this = this;

    var _a = this,
        props = _a.props,
        context = _a.context;

    var resourceDayTableModel = props.resourceDayTableModel,
        nextDayThreshold = props.nextDayThreshold,
        dateProfile = props.dateProfile;
    var splitProps = this.splitter.splitProps(props);
    this.slicers = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["mapHash"])(splitProps, function (split, resourceId) {
      return _this.slicers[resourceId] || new _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["DayTableSlicer"]();
    });
    var slicedProps = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["mapHash"])(this.slicers, function (slicer, resourceId) {
      return slicer.sliceProps(splitProps[resourceId], dateProfile, nextDayThreshold, context, resourceDayTableModel.dayTableModel);
    });
    this.allowAcrossResources = resourceDayTableModel.dayTableModel.colCnt === 1; // hack for EventResizing

    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["Table"], Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({
      forPrint: props.forPrint,
      ref: this.tableRef,
      elRef: this.handleRootEl
    }, this.joiner.joinProps(slicedProps, resourceDayTableModel), {
      cells: resourceDayTableModel.cells,
      dateProfile: dateProfile,
      colGroupNode: props.colGroupNode,
      tableMinWidth: props.tableMinWidth,
      renderRowIntro: props.renderRowIntro,
      dayMaxEvents: props.dayMaxEvents,
      dayMaxEventRows: props.dayMaxEventRows,
      showWeekNumbers: props.showWeekNumbers,
      expandRows: props.expandRows,
      headerAlignElRef: props.headerAlignElRef,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight
    }));
  };

  ResourceDayTable.prototype.prepareHits = function () {
    this.tableRef.current.prepareHits();
  };

  ResourceDayTable.prototype.queryHit = function (positionLeft, positionTop) {
    var rawHit = this.tableRef.current.positionToHit(positionLeft, positionTop);

    if (rawHit) {
      return {
        component: this,
        dateSpan: {
          range: rawHit.dateSpan.range,
          allDay: rawHit.dateSpan.allDay,
          resourceId: this.props.resourceDayTableModel.cells[rawHit.row][rawHit.col].resource.id
        },
        dayEl: rawHit.dayEl,
        rect: {
          left: rawHit.relativeRect.left,
          right: rawHit.relativeRect.right,
          top: rawHit.relativeRect.top,
          bottom: rawHit.relativeRect.bottom
        },
        layer: 0
      };
    }
  };

  return ResourceDayTable;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]);

var ResourceDayTableJoiner =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(ResourceDayTableJoiner, _super);

  function ResourceDayTableJoiner() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ResourceDayTableJoiner.prototype.transformSeg = function (seg, resourceDayTableModel, resourceI) {
    var colRanges = resourceDayTableModel.computeColRanges(seg.firstCol, seg.lastCol, resourceI);
    return colRanges.map(function (colRange) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, seg), colRange), {
        isStart: seg.isStart && colRange.isStart,
        isEnd: seg.isEnd && colRange.isEnd
      });
    });
  };

  return ResourceDayTableJoiner;
}(_fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["VResourceJoiner"]);

var ResourceDayTableView =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(ResourceDayTableView, _super);

  function ResourceDayTableView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.flattenResources = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["memoize"])(_fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["flattenResources"]);
    _this.buildResourceDayTableModel = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["memoize"])(buildResourceDayTableModel);
    _this.headerRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.tableRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    return _this;
  }

  ResourceDayTableView.prototype.render = function () {
    var _this = this;

    var _a = this,
        props = _a.props,
        context = _a.context;

    var options = context.options;
    var resourceOrderSpecs = options.resourceOrder || _fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_RESOURCE_ORDER"];
    var resources = this.flattenResources(props.resourceStore, resourceOrderSpecs);
    var resourceDayTableModel = this.buildResourceDayTableModel(props.dateProfile, context.dateProfileGenerator, resources, options.datesAboveResources, context);
    var headerContent = options.dayHeaders && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["ResourceDayHeader"], {
      ref: this.headerRef,
      resources: resources,
      dateProfile: props.dateProfile,
      dates: resourceDayTableModel.dayTableModel.headerDates,
      datesRepDistinctDays: true
    });

    var bodyContent = function bodyContent(contentArg) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ResourceDayTable, {
        ref: _this.tableRef,
        dateProfile: props.dateProfile,
        resourceDayTableModel: resourceDayTableModel,
        businessHours: props.businessHours,
        eventStore: props.eventStore,
        eventUiBases: props.eventUiBases,
        dateSelection: props.dateSelection,
        eventSelection: props.eventSelection,
        eventDrag: props.eventDrag,
        eventResize: props.eventResize,
        nextDayThreshold: options.nextDayThreshold,
        tableMinWidth: contentArg.tableMinWidth,
        colGroupNode: contentArg.tableColGroupNode,
        dayMaxEvents: options.dayMaxEvents,
        dayMaxEventRows: options.dayMaxEventRows,
        showWeekNumbers: options.weekNumbers,
        expandRows: !props.isHeightAuto,
        headerAlignElRef: _this.headerElRef,
        clientWidth: contentArg.clientWidth,
        clientHeight: contentArg.clientHeight,
        forPrint: props.forPrint
      });
    };

    return options.dayMinWidth ? this.renderHScrollLayout(headerContent, bodyContent, resourceDayTableModel.colCnt, options.dayMinWidth) : this.renderSimpleLayout(headerContent, bodyContent);
  };

  return ResourceDayTableView;
}(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["TableView"]);

function buildResourceDayTableModel(dateProfile, dateProfileGenerator, resources, datesAboveResources, context) {
  var dayTable = Object(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["buildDayTableModel"])(dateProfile, dateProfileGenerator);
  return datesAboveResources ? new _fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["DayResourceTableModel"](dayTable, resources, context) : new _fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["ResourceDayTableModel"](dayTable, resources, context);
}

var main = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
  deps: [_fullcalendar_premium_common__WEBPACK_IMPORTED_MODULE_1__["default"], _fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"]],
  initialView: 'resourceDayGridDay',
  views: {
    resourceDayGrid: {
      type: 'dayGrid',
      component: ResourceDayTableView,
      needsResourceData: true
    },
    resourceDayGridDay: {
      type: 'resourceDayGrid',
      duration: {
        days: 1
      }
    },
    resourceDayGridWeek: {
      type: 'resourceDayGrid',
      duration: {
        weeks: 1
      }
    },
    resourceDayGridMonth: {
      type: 'resourceDayGrid',
      duration: {
        months: 1
      },
      // TODO: wish we didn't have to C&P from dayGrid's file
      monthMode: true,
      fixedWeekCount: true
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (main);


/***/ }),

/***/ "./node_modules/@fullcalendar/resource-timegrid/main.js":
/*!**************************************************************!*\
  !*** ./node_modules/@fullcalendar/resource-timegrid/main.js ***!
  \**************************************************************/
/*! exports provided: default, ResourceDayTimeCols, ResourceDayTimeColsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDayTimeCols", function() { return ResourceDayTimeCols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDayTimeColsView", function() { return ResourceDayTimeColsView; });
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/common */ "./node_modules/@fullcalendar/common/main.js");
/* harmony import */ var _fullcalendar_premium_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/premium-common */ "./node_modules/@fullcalendar/premium-common/main.js");
/* harmony import */ var _fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/resource-common */ "./node_modules/@fullcalendar/resource-common/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fullcalendar_resource_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/resource-daygrid */ "./node_modules/@fullcalendar/resource-daygrid/main.js");
/*!
FullCalendar Scheduler v5.3.1
Docs & License: https://fullcalendar.io/scheduler
(c) 2020 Adam Shaw
*/







var ResourceDayTimeCols =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(ResourceDayTimeCols, _super);

  function ResourceDayTimeCols() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.allowAcrossResources = false;
    _this.buildDayRanges = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["memoize"])(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["buildDayRanges"]);
    _this.splitter = new _fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["VResourceSplitter"]();
    _this.slicers = {};
    _this.joiner = new ResourceDayTimeColsJoiner();
    _this.timeColsRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createRef"])();

    _this.handleRootEl = function (rootEl) {
      if (rootEl) {
        _this.context.registerInteractiveComponent(_this, {
          el: rootEl
        });
      } else {
        _this.context.unregisterInteractiveComponent(_this);
      }
    };

    return _this;
  }

  ResourceDayTimeCols.prototype.render = function () {
    var _this = this;

    var _a = this,
        props = _a.props,
        context = _a.context;

    var dateEnv = context.dateEnv,
        options = context.options;
    var dateProfile = props.dateProfile,
        resourceDayTableModel = props.resourceDayTableModel;
    var dayRanges = this.dayRanges = this.buildDayRanges(resourceDayTableModel.dayTableModel, dateProfile, dateEnv);
    var splitProps = this.splitter.splitProps(props);
    this.slicers = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["mapHash"])(splitProps, function (split, resourceId) {
      return _this.slicers[resourceId] || new _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["DayTimeColsSlicer"]();
    });
    var slicedProps = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["mapHash"])(this.slicers, function (slicer, resourceId) {
      return slicer.sliceProps(splitProps[resourceId], dateProfile, null, context, dayRanges);
    });
    this.allowAcrossResources = dayRanges.length === 1;
    return (// TODO: would move this further down hierarchy, but sliceNowDate needs it
      Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["NowTimer"], {
        unit: options.nowIndicator ? 'minute' : 'day'
      }, function (nowDate, todayRange) {
        return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["TimeCols"], Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({
          ref: _this.timeColsRef,
          rootElRef: _this.handleRootEl
        }, _this.joiner.joinProps(slicedProps, resourceDayTableModel), {
          dateProfile: dateProfile,
          axis: props.axis,
          slotDuration: props.slotDuration,
          slatMetas: props.slatMetas,
          cells: resourceDayTableModel.cells[0],
          tableColGroupNode: props.tableColGroupNode,
          tableMinWidth: props.tableMinWidth,
          clientWidth: props.clientWidth,
          clientHeight: props.clientHeight,
          expandRows: props.expandRows,
          nowDate: nowDate,
          nowIndicatorSegs: options.nowIndicator && _this.buildNowIndicatorSegs(nowDate),
          todayRange: todayRange,
          onScrollTopRequest: props.onScrollTopRequest,
          forPrint: props.forPrint,
          onSlatCoords: props.onSlatCoords
        }));
      })
    );
  };

  ResourceDayTimeCols.prototype.buildNowIndicatorSegs = function (date) {
    var nonResourceSegs = this.slicers[''].sliceNowDate(date, this.context, this.dayRanges);
    return this.joiner.expandSegs(this.props.resourceDayTableModel, nonResourceSegs);
  };

  ResourceDayTimeCols.prototype.queryHit = function (positionLeft, positionTop) {
    var rawHit = this.timeColsRef.current.positionToHit(positionLeft, positionTop);

    if (rawHit) {
      return {
        component: this,
        dateSpan: {
          range: rawHit.dateSpan.range,
          allDay: rawHit.dateSpan.allDay,
          resourceId: this.props.resourceDayTableModel.cells[0][rawHit.col].resource.id
        },
        dayEl: rawHit.dayEl,
        rect: {
          left: rawHit.relativeRect.left,
          right: rawHit.relativeRect.right,
          top: rawHit.relativeRect.top,
          bottom: rawHit.relativeRect.bottom
        },
        layer: 0
      };
    }
  };

  return ResourceDayTimeCols;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]);

var ResourceDayTimeColsJoiner =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(ResourceDayTimeColsJoiner, _super);

  function ResourceDayTimeColsJoiner() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ResourceDayTimeColsJoiner.prototype.transformSeg = function (seg, resourceDayTable, resourceI) {
    return [Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, seg), {
      col: resourceDayTable.computeCol(seg.col, resourceI)
    })];
  };

  return ResourceDayTimeColsJoiner;
}(_fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["VResourceJoiner"]);

var ResourceDayTimeColsView =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(ResourceDayTimeColsView, _super);

  function ResourceDayTimeColsView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.flattenResources = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["memoize"])(_fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["flattenResources"]);
    _this.buildResourceTimeColsModel = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["memoize"])(buildResourceTimeColsModel);
    _this.buildSlatMetas = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["memoize"])(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["buildSlatMetas"]);
    return _this;
  }

  ResourceDayTimeColsView.prototype.render = function () {
    var _this = this;

    var _a = this,
        props = _a.props,
        context = _a.context;

    var options = context.options,
        dateEnv = context.dateEnv;
    var dateProfile = props.dateProfile;
    var splitProps = this.allDaySplitter.splitProps(props);
    var resourceOrderSpecs = options.resourceOrder || _fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_RESOURCE_ORDER"];
    var resources = this.flattenResources(props.resourceStore, resourceOrderSpecs);
    var resourceDayTableModel = this.buildResourceTimeColsModel(dateProfile, context.dateProfileGenerator, resources, options.datesAboveResources, context);
    var slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
    var dayMinWidth = options.dayMinWidth;
    var hasAttachedAxis = !dayMinWidth;
    var hasDetachedAxis = dayMinWidth;
    var headerContent = options.dayHeaders && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["ResourceDayHeader"], {
      resources: resources,
      dates: resourceDayTableModel.dayTableModel.headerDates,
      dateProfile: dateProfile,
      datesRepDistinctDays: true,
      renderIntro: hasAttachedAxis ? this.renderHeadAxis : null
    });

    var allDayContent = options.allDaySlot !== false && function (contentArg) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_fullcalendar_resource_daygrid__WEBPACK_IMPORTED_MODULE_5__["ResourceDayTable"], Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, splitProps['allDay'], {
        dateProfile: dateProfile,
        resourceDayTableModel: resourceDayTableModel,
        nextDayThreshold: options.nextDayThreshold,
        tableMinWidth: contentArg.tableMinWidth,
        colGroupNode: contentArg.tableColGroupNode,
        renderRowIntro: hasAttachedAxis ? _this.renderTableRowAxis : null,
        showWeekNumbers: false,
        expandRows: false,
        headerAlignElRef: _this.headerElRef,
        clientWidth: contentArg.clientWidth,
        clientHeight: contentArg.clientHeight,
        forPrint: props.forPrint
      }, _this.getAllDayMaxEventProps()));
    };

    var timeGridContent = function timeGridContent(contentArg) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ResourceDayTimeCols, Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, splitProps['timed'], {
        dateProfile: dateProfile,
        axis: hasAttachedAxis,
        slotDuration: options.slotDuration,
        slatMetas: slatMetas,
        resourceDayTableModel: resourceDayTableModel,
        tableColGroupNode: contentArg.tableColGroupNode,
        tableMinWidth: contentArg.tableMinWidth,
        clientWidth: contentArg.clientWidth,
        clientHeight: contentArg.clientHeight,
        onSlatCoords: _this.handleSlatCoords,
        expandRows: contentArg.expandRows,
        forPrint: props.forPrint,
        onScrollTopRequest: _this.handleScrollTopRequest
      }));
    };

    return hasDetachedAxis ? this.renderHScrollLayout(headerContent, allDayContent, timeGridContent, resourceDayTableModel.colCnt, dayMinWidth, slatMetas, this.state.slatCoords) : this.renderSimpleLayout(headerContent, allDayContent, timeGridContent);
  };

  return ResourceDayTimeColsView;
}(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["TimeColsView"]);

function buildResourceTimeColsModel(dateProfile, dateProfileGenerator, resources, datesAboveResources, context) {
  var dayTable = Object(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["buildTimeColsModel"])(dateProfile, dateProfileGenerator);
  return datesAboveResources ? new _fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["DayResourceTableModel"](dayTable, resources, context) : new _fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["ResourceDayTableModel"](dayTable, resources, context);
}

var main = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
  deps: [_fullcalendar_premium_common__WEBPACK_IMPORTED_MODULE_1__["default"], _fullcalendar_resource_common__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["default"]],
  initialView: 'resourceTimeGridDay',
  views: {
    resourceTimeGrid: {
      type: 'timeGrid',
      component: ResourceDayTimeColsView,
      needsResourceData: true
    },
    resourceTimeGridDay: {
      type: 'resourceTimeGrid',
      duration: {
        days: 1
      }
    },
    resourceTimeGridWeek: {
      type: 'resourceTimeGrid',
      duration: {
        weeks: 1
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (main);


/***/ }),

/***/ "./node_modules/@fullcalendar/timegrid/main.css":
/*!******************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/main.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--6-1!../../postcss-loader/src??ref--6-2!./main.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@fullcalendar/timegrid/main.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@fullcalendar/timegrid/main.js":
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/main.js ***!
  \*****************************************************/
/*! exports provided: default, DayTimeCols, DayTimeColsSlicer, DayTimeColsView, TimeCols, TimeColsSlatsCoords, TimeColsView, buildDayRanges, buildSlatMetas, buildTimeColsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTimeCols", function() { return DayTimeCols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTimeColsSlicer", function() { return DayTimeColsSlicer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTimeColsView", function() { return DayTimeColsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeCols", function() { return TimeCols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeColsSlatsCoords", function() { return TimeColsSlatsCoords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeColsView", function() { return TimeColsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildDayRanges", function() { return buildDayRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSlatMetas", function() { return buildSlatMetas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTimeColsModel", function() { return buildTimeColsModel; });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./node_modules/@fullcalendar/timegrid/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/common */ "./node_modules/@fullcalendar/common/main.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/*!
FullCalendar v5.3.1
Docs & License: https://fullcalendar.io/
(c) 2020 Adam Shaw
*/





var AllDaySplitter =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(AllDaySplitter, _super);

  function AllDaySplitter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AllDaySplitter.prototype.getKeyInfo = function () {
    return {
      allDay: {},
      timed: {}
    };
  };

  AllDaySplitter.prototype.getKeysForDateSpan = function (dateSpan) {
    if (dateSpan.allDay) {
      return ['allDay'];
    } else {
      return ['timed'];
    }
  };

  AllDaySplitter.prototype.getKeysForEventDef = function (eventDef) {
    if (!eventDef.allDay) {
      return ['timed'];
    } else if (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["hasBgRendering"])(eventDef)) {
      return ['timed', 'allDay'];
    } else {
      return ['allDay'];
    }
  };

  return AllDaySplitter;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Splitter"]);

var TimeColsSlatsCoords =
/** @class */
function () {
  function TimeColsSlatsCoords(positions, dateProfile, slatMetas) {
    this.positions = positions;
    this.dateProfile = dateProfile;
    this.slatMetas = slatMetas;
  }

  TimeColsSlatsCoords.prototype.safeComputeTop = function (date) {
    var dateProfile = this.dateProfile;

    if (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["rangeContainsMarker"])(dateProfile.currentRange, date)) {
      var startOfDayDate = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(date);
      var timeMs = date.valueOf() - startOfDayDate.valueOf();

      if (timeMs >= Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["asRoughMs"])(dateProfile.slotMinTime) && timeMs < Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["asRoughMs"])(dateProfile.slotMaxTime)) {
        return this.computeTimeTop(Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createDuration"])(timeMs));
      }
    }
  }; // Computes the top coordinate, relative to the bounds of the grid, of the given date.
  // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.


  TimeColsSlatsCoords.prototype.computeDateTop = function (when, startOfDayDate) {
    if (!startOfDayDate) {
      startOfDayDate = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(when);
    }

    return this.computeTimeTop(Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createDuration"])(when.valueOf() - startOfDayDate.valueOf()));
  }; // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
  // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
  // Eventually allow computation with arbirary slat dates.


  TimeColsSlatsCoords.prototype.computeTimeTop = function (duration) {
    var _a = this,
        positions = _a.positions,
        dateProfile = _a.dateProfile,
        slatMetas = _a.slatMetas;

    var len = positions.els.length;
    var slotDurationMs = slatMetas[1].date.valueOf() - slatMetas[0].date.valueOf(); // we assume dates are uniform

    var slatCoverage = (duration.milliseconds - Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["asRoughMs"])(dateProfile.slotMinTime)) / slotDurationMs; // floating-point value of # of slots covered

    var slatIndex;
    var slatRemainder; // compute a floating-point number for how many slats should be progressed through.
    // from 0 to number of slats (inclusive)
    // constrained because slotMinTime/slotMaxTime might be customized.

    slatCoverage = Math.max(0, slatCoverage);
    slatCoverage = Math.min(len, slatCoverage); // an integer index of the furthest whole slat
    // from 0 to number slats (*exclusive*, so len-1)

    slatIndex = Math.floor(slatCoverage);
    slatIndex = Math.min(slatIndex, len - 1); // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
    // could be 1.0 if slatCoverage is covering *all* the slots

    slatRemainder = slatCoverage - slatIndex;
    return positions.tops[slatIndex] + positions.getHeight(slatIndex) * slatRemainder;
  };

  return TimeColsSlatsCoords;
}(); // potential nice values for the slot-duration and interval-duration
// from largest to smallest


var STOCK_SUB_DURATIONS = [{
  hours: 1
}, {
  minutes: 30
}, {
  minutes: 15
}, {
  seconds: 30
}, {
  seconds: 15
}];
/*
for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
*/

var TimeColsSlats =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeColsSlats, _super);

  function TimeColsSlats() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.rootElRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    _this.slatElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RefMap"]();
    return _this;
  }

  TimeColsSlats.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'fc-timegrid-slots',
      ref: this.rootElRef
    }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("table", {
      className: context.theme.getClass('table'),
      style: {
        minWidth: props.tableMinWidth,
        width: props.clientWidth,
        height: props.minHeight
      }
    }, props.tableColGroupNode
    /* relies on there only being a single <col> for the axis */
    , Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeColsSlatsBody, {
      slatElRefs: this.slatElRefs,
      axis: props.axis,
      slatMetas: props.slatMetas
    })));
  };

  TimeColsSlats.prototype.componentDidMount = function () {
    this.updateSizing();
  };

  TimeColsSlats.prototype.componentDidUpdate = function () {
    this.updateSizing();
  };

  TimeColsSlats.prototype.componentWillUnmount = function () {
    if (this.props.onCoords) {
      this.props.onCoords(null);
    }
  };

  TimeColsSlats.prototype.updateSizing = function () {
    var props = this.props;

    if (props.onCoords && props.clientWidth !== null // means sizing has stabilized
    ) {
        var rootEl = this.rootElRef.current;

        if (rootEl.offsetHeight) {
          // not hidden by css
          props.onCoords(new TimeColsSlatsCoords(new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["PositionCache"](this.rootElRef.current, collectSlatEls(this.slatElRefs.currentMap, props.slatMetas), false, true // vertical
          ), this.props.dateProfile, props.slatMetas));
        }
      }
  };

  return TimeColsSlats;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

function collectSlatEls(elMap, slatMetas) {
  return slatMetas.map(function (slatMeta) {
    return elMap[slatMeta.key];
  });
}

var TimeColsSlatsBody =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeColsSlatsBody, _super);

  function TimeColsSlatsBody() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TimeColsSlatsBody.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var options = context.options;
    var slatElRefs = props.slatElRefs;
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tbody", null, props.slatMetas.map(function (slatMeta, i) {
      var hookProps = {
        time: slatMeta.time,
        date: context.dateEnv.toDate(slatMeta.date),
        view: context.viewApi
      };
      var classNames = ['fc-timegrid-slot', 'fc-timegrid-slot-lane', slatMeta.isLabeled ? '' : 'fc-timegrid-slot-minor'];
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", {
        key: slatMeta.key,
        ref: slatElRefs.createRef(slatMeta.key)
      }, props.axis && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeColsAxisCell, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, slatMeta)), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RenderHook"], {
        hookProps: hookProps,
        classNames: options.slotLaneClassNames,
        content: options.slotLaneContent,
        didMount: options.slotLaneDidMount,
        willUnmount: options.slotLaneWillUnmount
      }, function (rootElRef, customClassNames, innerElRef, innerContent) {
        return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
          ref: rootElRef,
          className: classNames.concat(customClassNames).join(' '),
          "data-time": slatMeta.isoTimeStr
        }, innerContent);
      }));
    }));
  };

  return TimeColsSlatsBody;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

var DEFAULT_SLAT_LABEL_FORMAT = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createFormatter"])({
  hour: 'numeric',
  minute: '2-digit',
  omitZeroMinute: true,
  meridiem: 'short'
});

function TimeColsAxisCell(props) {
  var classNames = ['fc-timegrid-slot', 'fc-timegrid-slot-label', props.isLabeled ? 'fc-scrollgrid-shrink' : 'fc-timegrid-slot-minor'];
  return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["ViewContextType"].Consumer, null, function (context) {
    if (!props.isLabeled) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
        className: classNames.join(' '),
        "data-time": props.isoTimeStr
      });
    } else {
      var dateEnv = context.dateEnv,
          options = context.options,
          viewApi = context.viewApi;
      var labelFormat = // TODO: fully pre-parse
      options.slotLabelFormat == null ? DEFAULT_SLAT_LABEL_FORMAT : Array.isArray(options.slotLabelFormat) ? Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createFormatter"])(options.slotLabelFormat[0]) : Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createFormatter"])(options.slotLabelFormat);
      var hookProps = {
        level: 0,
        time: props.time,
        date: dateEnv.toDate(props.date),
        view: viewApi,
        text: dateEnv.format(props.date, labelFormat)
      };
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RenderHook"], {
        hookProps: hookProps,
        classNames: options.slotLabelClassNames,
        content: options.slotLabelContent,
        defaultContent: renderInnerContent,
        didMount: options.slotLabelDidMount,
        willUnmount: options.slotLabelWillUnmount
      }, function (rootElRef, customClassNames, innerElRef, innerContent) {
        return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
          ref: rootElRef,
          className: classNames.concat(customClassNames).join(' '),
          "data-time": props.isoTimeStr
        }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: 'fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame'
        }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: 'fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion',
          ref: innerElRef
        }, innerContent)));
      });
    }
  });
}

function renderInnerContent(props) {
  return props.text;
}

function buildSlatMetas(slotMinTime, slotMaxTime, explicitLabelInterval, slotDuration, dateEnv) {
  var dayStart = new Date(0);
  var slatTime = slotMinTime;
  var slatIterator = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createDuration"])(0);
  var labelInterval = explicitLabelInterval || computeLabelInterval(slotDuration);
  var metas = [];

  while (Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["asRoughMs"])(slatTime) < Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["asRoughMs"])(slotMaxTime)) {
    var date = dateEnv.add(dayStart, slatTime);
    var isLabeled = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["wholeDivideDurations"])(slatIterator, labelInterval) !== null;
    metas.push({
      date: date,
      time: slatTime,
      key: date.toISOString(),
      isoTimeStr: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["formatIsoTimeString"])(date),
      isLabeled: isLabeled
    });
    slatTime = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addDurations"])(slatTime, slotDuration);
    slatIterator = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addDurations"])(slatIterator, slotDuration);
  }

  return metas;
} // Computes an automatic value for slotLabelInterval


function computeLabelInterval(slotDuration) {
  var i;
  var labelInterval;
  var slotsPerLabel; // find the smallest stock label interval that results in more than one slots-per-label

  for (i = STOCK_SUB_DURATIONS.length - 1; i >= 0; i--) {
    labelInterval = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createDuration"])(STOCK_SUB_DURATIONS[i]);
    slotsPerLabel = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["wholeDivideDurations"])(labelInterval, slotDuration);

    if (slotsPerLabel !== null && slotsPerLabel > 1) {
      return labelInterval;
    }
  }

  return slotDuration; // fall back
}

var DEFAULT_WEEK_NUM_FORMAT = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createFormatter"])({
  week: 'short'
});
var AUTO_ALL_DAY_MAX_EVENT_ROWS = 5;

var TimeColsView =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeColsView, _super);

  function TimeColsView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.allDaySplitter = new AllDaySplitter(); // for use by subclasses

    _this.headerElRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    _this.rootElRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    _this.scrollerElRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    _this.state = {
      slatCoords: null
    };

    _this.handleScrollTopRequest = function (scrollTop) {
      var scrollerEl = _this.scrollerElRef.current;

      if (scrollerEl) {
        // TODO: not sure how this could ever be null. weirdness with the reducer
        scrollerEl.scrollTop = scrollTop;
      }
    };
    /* Header Render Methods
    ------------------------------------------------------------------------------------------------------------------*/


    _this.renderHeadAxis = function (frameHeight) {
      if (frameHeight === void 0) {
        frameHeight = '';
      }

      var options = _this.context.options;
      var dateProfile = _this.props.dateProfile;
      var range = dateProfile.renderRange;
      var dayCnt = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["diffDays"])(range.start, range.end);
      var navLinkAttrs = options.navLinks && dayCnt === 1 ? // only do in day views (to avoid doing in week views that dont need it)
      {
        'data-navlink': Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildNavLinkData"])(range.start, 'week'),
        tabIndex: 0
      } : {};

      if (options.weekNumbers) {
        return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["WeekNumberRoot"], {
          date: range.start,
          defaultFormat: DEFAULT_WEEK_NUM_FORMAT
        }, function (rootElRef, classNames, innerElRef, innerContent) {
          return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("th", {
            ref: rootElRef,
            className: ['fc-timegrid-axis', 'fc-scrollgrid-shrink'].concat(classNames).join(' ')
          }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
            className: 'fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid',
            style: {
              height: frameHeight
            }
          }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
            ref: innerElRef,
            className: 'fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner'
          }, navLinkAttrs), innerContent)));
        });
      }

      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("th", {
        className: 'fc-timegrid-axis'
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'fc-timegrid-axis-frame',
        style: {
          height: frameHeight
        }
      }));
    };
    /* Table Component Render Methods
    ------------------------------------------------------------------------------------------------------------------*/
    // only a one-way height sync. we don't send the axis inner-content height to the DayGrid,
    // but DayGrid still needs to have classNames on inner elements in order to measure.


    _this.renderTableRowAxis = function (rowHeight) {
      var _a = _this.context,
          options = _a.options,
          viewApi = _a.viewApi;
      var hookProps = {
        text: options.allDayText,
        view: viewApi
      };
      return (// TODO: make reusable hook. used in list view too
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RenderHook"], {
          hookProps: hookProps,
          classNames: options.allDayClassNames,
          content: options.allDayContent,
          defaultContent: renderAllDayInner,
          didMount: options.allDayDidMount,
          willUnmount: options.allDayWillUnmount
        }, function (rootElRef, classNames, innerElRef, innerContent) {
          return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
            ref: rootElRef,
            className: ['fc-timegrid-axis', 'fc-scrollgrid-shrink'].concat(classNames).join(' ')
          }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
            className: 'fc-timegrid-axis-frame fc-scrollgrid-shrink-frame' + (rowHeight == null ? ' fc-timegrid-axis-frame-liquid' : ''),
            style: {
              height: rowHeight
            }
          }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
            className: 'fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner',
            ref: innerElRef
          }, innerContent)));
        })
      );
    };

    _this.handleSlatCoords = function (slatCoords) {
      _this.setState({
        slatCoords: slatCoords
      });
    };

    return _this;
  } // rendering
  // ----------------------------------------------------------------------------------------------------


  TimeColsView.prototype.renderSimpleLayout = function (headerRowContent, allDayContent, timeContent) {
    var _a = this,
        context = _a.context,
        props = _a.props;

    var sections = [];
    var stickyHeaderDates = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getStickyHeaderDates"])(context.options);

    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }
      });
    }

    if (allDayContent) {
      sections.push({
        type: 'body',
        key: 'all-day',
        chunk: {
          content: allDayContent
        }
      });
      sections.push({
        type: 'body',
        key: 'all-day-divider',
        outerContent: // TODO: rename to cellContent so don't need to define <tr>?
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", {
          className: 'fc-scrollgrid-section'
        }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
          className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded')
        }))
      });
    }

    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      expandRows: Boolean(context.options.expandRows),
      chunk: {
        scrollerElRef: this.scrollerElRef,
        content: timeContent
      }
    });
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["ViewRoot"], {
      viewSpec: context.viewSpec,
      elRef: this.rootElRef
    }, function (rootElRef, classNames) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: ['fc-timegrid'].concat(classNames).join(' '),
        ref: rootElRef
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["SimpleScrollGrid"], {
        liquid: !props.isHeightAuto && !props.forPrint,
        cols: [{
          width: 'shrink'
        }],
        sections: sections
      }));
    });
  };

  TimeColsView.prototype.renderHScrollLayout = function (headerRowContent, allDayContent, timeContent, colCnt, dayMinWidth, slatMetas, slatCoords // yuck
  ) {
    var _this = this;

    var ScrollGrid = this.context.pluginHooks.scrollGridImpl;

    if (!ScrollGrid) {
      throw new Error('No ScrollGrid implementation');
    }

    var _a = this,
        context = _a.context,
        props = _a.props;

    var stickyHeaderDates = !props.forPrint && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getStickyHeaderDates"])(context.options);
    var stickyFooterScrollbar = !props.forPrint && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getStickyFooterScrollbar"])(context.options);
    var sections = [];

    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        syncRowHeights: true,
        chunks: [{
          key: 'axis',
          rowContent: function rowContent(arg) {
            return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", null, _this.renderHeadAxis(arg.rowSyncHeights[0]));
          }
        }, {
          key: 'cols',
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }]
      });
    }

    if (allDayContent) {
      sections.push({
        type: 'body',
        key: 'all-day',
        syncRowHeights: true,
        chunks: [{
          key: 'axis',
          rowContent: function rowContent(contentArg) {
            return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", null, _this.renderTableRowAxis(contentArg.rowSyncHeights[0]));
          }
        }, {
          key: 'cols',
          content: allDayContent
        }]
      });
      sections.push({
        key: 'all-day-divider',
        type: 'body',
        outerContent: // TODO: rename to cellContent so don't need to define <tr>?
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", {
          className: 'fc-scrollgrid-section'
        }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
          colSpan: 2,
          className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded')
        }))
      });
    }

    var isNowIndicator = context.options.nowIndicator;
    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      expandRows: Boolean(context.options.expandRows),
      chunks: [{
        key: 'axis',
        content: function content(arg) {
          // TODO: make this now-indicator arrow more DRY with TimeColsContent
          return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
            className: 'fc-timegrid-axis-chunk'
          }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("table", {
            style: {
              height: arg.expandRows ? arg.clientHeight : ''
            }
          }, arg.tableColGroupNode, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tbody", null, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeBodyAxis, {
            slatMetas: slatMetas
          }))), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
            className: 'fc-timegrid-now-indicator-container'
          }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["NowTimer"], {
            unit: isNowIndicator ? 'minute' : 'day'
            /* hacky */

          }, function (nowDate) {
            var nowIndicatorTop = isNowIndicator && slatCoords && slatCoords.safeComputeTop(nowDate); // might return void

            if (typeof nowIndicatorTop === 'number') {
              return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["NowIndicatorRoot"], {
                isAxis: true,
                date: nowDate
              }, function (rootElRef, classNames, innerElRef, innerContent) {
                return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
                  ref: rootElRef,
                  className: ['fc-timegrid-now-indicator-arrow'].concat(classNames).join(' '),
                  style: {
                    top: nowIndicatorTop
                  }
                }, innerContent);
              });
            }

            return null;
          })));
        }
      }, {
        key: 'cols',
        scrollerElRef: this.scrollerElRef,
        content: timeContent
      }]
    });

    if (stickyFooterScrollbar) {
      sections.push({
        key: 'footer',
        type: 'footer',
        isSticky: true,
        chunks: [{
          key: 'axis',
          content: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["renderScrollShim"]
        }, {
          key: 'cols',
          content: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["renderScrollShim"]
        }]
      });
    }

    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["ViewRoot"], {
      viewSpec: context.viewSpec,
      elRef: this.rootElRef
    }, function (rootElRef, classNames) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: ['fc-timegrid'].concat(classNames).join(' '),
        ref: rootElRef
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ScrollGrid, {
        liquid: !props.isHeightAuto && !props.forPrint,
        colGroups: [{
          width: 'shrink',
          cols: [{
            width: 'shrink'
          }]
        }, {
          cols: [{
            span: colCnt,
            minWidth: dayMinWidth
          }]
        }],
        sections: sections
      }));
    });
  };
  /* Dimensions
  ------------------------------------------------------------------------------------------------------------------*/


  TimeColsView.prototype.getAllDayMaxEventProps = function () {
    var _a = this.context.options,
        dayMaxEvents = _a.dayMaxEvents,
        dayMaxEventRows = _a.dayMaxEventRows;

    if (dayMaxEvents === true || dayMaxEventRows === true) {
      // is auto?
      dayMaxEvents = undefined;
      dayMaxEventRows = AUTO_ALL_DAY_MAX_EVENT_ROWS; // make sure "auto" goes to a real number
    }

    return {
      dayMaxEvents: dayMaxEvents,
      dayMaxEventRows: dayMaxEventRows
    };
  };

  return TimeColsView;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]);

function renderAllDayInner(hookProps) {
  return hookProps.text;
}

var TimeBodyAxis =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeBodyAxis, _super);

  function TimeBodyAxis() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TimeBodyAxis.prototype.render = function () {
    return this.props.slatMetas.map(function (slatMeta) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", {
        key: slatMeta.key
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeColsAxisCell, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, slatMeta)));
    });
  };

  return TimeBodyAxis;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

function splitSegsByCol(segs, colCnt) {
  var segsByCol = [];
  var i;

  for (i = 0; i < colCnt; i++) {
    segsByCol.push([]);
  }

  if (segs) {
    for (i = 0; i < segs.length; i++) {
      segsByCol[segs[i].col].push(segs[i]);
    }
  }

  return segsByCol;
}

function splitInteractionByCol(ui, colCnt) {
  var byRow = [];

  if (!ui) {
    for (var i = 0; i < colCnt; i++) {
      byRow[i] = null;
    }
  } else {
    for (var i = 0; i < colCnt; i++) {
      byRow[i] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }

    for (var _i = 0, _a = ui.segs; _i < _a.length; _i++) {
      var seg = _a[_i];
      byRow[seg.col].segs.push(seg);
    }
  }

  return byRow;
} // UNFORTUNATELY, assigns results to the top/bottom/level/forwardCoord/backwardCoord props of the actual segs.
// TODO: return hash (by instanceId) of results


function computeSegCoords(segs, dayDate, slatCoords, eventMinHeight, eventOrderSpecs) {
  computeSegVerticals(segs, dayDate, slatCoords, eventMinHeight);
  return computeSegHorizontals(segs, eventOrderSpecs); // requires top/bottom from computeSegVerticals
} // For each segment in an array, computes and assigns its top and bottom properties


function computeSegVerticals(segs, dayDate, slatCoords, eventMinHeight) {
  for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
    var seg = segs_1[_i];
    seg.top = slatCoords.computeDateTop(seg.start, dayDate);
    seg.bottom = Math.max(seg.top + (eventMinHeight || 0), // yuck
    slatCoords.computeDateTop(seg.end, dayDate));
  }
} // Given an array of segments that are all in the same column, sets the backwardCoord and forwardCoord on each.
// Assumed the segs are already ordered.
// NOTE: Also reorders the given array by date!


function computeSegHorizontals(segs, eventOrderSpecs) {
  // IMPORTANT TO CLEAR OLD RESULTS :(
  for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
    var seg = segs_2[_i];
    seg.level = null;
    seg.forwardCoord = null;
    seg.backwardCoord = null;
    seg.forwardPressure = null;
  }

  segs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["sortEventSegs"])(segs, eventOrderSpecs);
  var level0;
  var levels = buildSlotSegLevels(segs);
  computeForwardSlotSegs(levels);

  if (level0 = levels[0]) {
    for (var _a = 0, level0_1 = level0; _a < level0_1.length; _a++) {
      var seg = level0_1[_a];
      computeSlotSegPressures(seg);
    }

    for (var _b = 0, level0_2 = level0; _b < level0_2.length; _b++) {
      var seg = level0_2[_b];
      computeSegForwardBack(seg, 0, 0, eventOrderSpecs);
    }
  }

  return segs;
} // Builds an array of segments "levels". The first level will be the leftmost tier of segments if the calendar is
// left-to-right, or the rightmost if the calendar is right-to-left. Assumes the segments are already ordered by date.


function buildSlotSegLevels(segs) {
  var levels = [];
  var i;
  var seg;
  var j;

  for (i = 0; i < segs.length; i++) {
    seg = segs[i]; // go through all the levels and stop on the first level where there are no collisions

    for (j = 0; j < levels.length; j++) {
      if (!computeSlotSegCollisions(seg, levels[j]).length) {
        break;
      }
    }

    seg.level = j;
    (levels[j] || (levels[j] = [])).push(seg);
  }

  return levels;
} // Find all the segments in `otherSegs` that vertically collide with `seg`.
// Append into an optionally-supplied `results` array and return.


function computeSlotSegCollisions(seg, otherSegs, results) {
  if (results === void 0) {
    results = [];
  }

  for (var i = 0; i < otherSegs.length; i++) {
    if (isSlotSegCollision(seg, otherSegs[i])) {
      results.push(otherSegs[i]);
    }
  }

  return results;
} // Do these segments occupy the same vertical space?


function isSlotSegCollision(seg1, seg2) {
  return seg1.bottom > seg2.top && seg1.top < seg2.bottom;
} // For every segment, figure out the other segments that are in subsequent
// levels that also occupy the same vertical space. Accumulate in seg.forwardSegs


function computeForwardSlotSegs(levels) {
  var i;
  var level;
  var j;
  var seg;
  var k;

  for (i = 0; i < levels.length; i++) {
    level = levels[i];

    for (j = 0; j < level.length; j++) {
      seg = level[j];
      seg.forwardSegs = [];

      for (k = i + 1; k < levels.length; k++) {
        computeSlotSegCollisions(seg, levels[k], seg.forwardSegs);
      }
    }
  }
} // Figure out which path forward (via seg.forwardSegs) results in the longest path until
// the furthest edge is reached. The number of segments in this path will be seg.forwardPressure


function computeSlotSegPressures(seg) {
  var forwardSegs = seg.forwardSegs;
  var forwardPressure = 0;
  var i;
  var forwardSeg;

  if (seg.forwardPressure == null) {
    // not already computed
    for (i = 0; i < forwardSegs.length; i++) {
      forwardSeg = forwardSegs[i]; // figure out the child's maximum forward path

      computeSlotSegPressures(forwardSeg); // either use the existing maximum, or use the child's forward pressure
      // plus one (for the forwardSeg itself)

      forwardPressure = Math.max(forwardPressure, 1 + forwardSeg.forwardPressure);
    }

    seg.forwardPressure = forwardPressure;
  }
} // Calculate seg.forwardCoord and seg.backwardCoord for the segment, where both values range
// from 0 to 1. If the calendar is left-to-right, the seg.backwardCoord maps to "left" and
// seg.forwardCoord maps to "right" (via percentage). Vice-versa if the calendar is right-to-left.
//
// The segment might be part of a "series", which means consecutive segments with the same pressure
// who's width is unknown until an edge has been hit. `seriesBackwardPressure` is the number of
// segments behind this one in the current series, and `seriesBackwardCoord` is the starting
// coordinate of the first segment in the series.


function computeSegForwardBack(seg, seriesBackwardPressure, seriesBackwardCoord, eventOrderSpecs) {
  var forwardSegs = seg.forwardSegs;
  var i;

  if (seg.forwardCoord == null) {
    // not already computed
    if (!forwardSegs.length) {
      // if there are no forward segments, this segment should butt up against the edge
      seg.forwardCoord = 1;
    } else {
      // sort highest pressure first
      sortForwardSegs(forwardSegs, eventOrderSpecs); // this segment's forwardCoord will be calculated from the backwardCoord of the
      // highest-pressure forward segment.

      computeSegForwardBack(forwardSegs[0], seriesBackwardPressure + 1, seriesBackwardCoord, eventOrderSpecs);
      seg.forwardCoord = forwardSegs[0].backwardCoord;
    } // calculate the backwardCoord from the forwardCoord. consider the series


    seg.backwardCoord = seg.forwardCoord - (seg.forwardCoord - seriesBackwardCoord) / ( // available width for series
    seriesBackwardPressure + 1); // # of segments in the series
    // use this segment's coordinates to computed the coordinates of the less-pressurized
    // forward segments

    for (i = 0; i < forwardSegs.length; i++) {
      computeSegForwardBack(forwardSegs[i], 0, seg.forwardCoord, eventOrderSpecs);
    }
  }
}

function sortForwardSegs(forwardSegs, eventOrderSpecs) {
  var objs = forwardSegs.map(buildTimeGridSegCompareObj);
  var specs = [// put higher-pressure first
  {
    field: 'forwardPressure',
    order: -1
  }, // put segments that are closer to initial edge first (and favor ones with no coords yet)
  {
    field: 'backwardCoord',
    order: 1
  }].concat(eventOrderSpecs);
  objs.sort(function (obj0, obj1) {
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["compareByFieldSpecs"])(obj0, obj1, specs);
  });
  return objs.map(function (c) {
    return c._seg;
  });
}

function buildTimeGridSegCompareObj(seg) {
  var obj = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildSegCompareObj"])(seg);
  obj.forwardPressure = seg.forwardPressure;
  obj.backwardCoord = seg.backwardCoord;
  return obj;
}

var DEFAULT_TIME_FORMAT = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createFormatter"])({
  hour: 'numeric',
  minute: '2-digit',
  meridiem: false
});

var TimeColEvent =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeColEvent, _super);

  function TimeColEvent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TimeColEvent.prototype.render = function () {
    var classNames = ['fc-timegrid-event', 'fc-v-event'];

    if (this.props.isCondensed) {
      classNames.push('fc-timegrid-event-condensed');
    }

    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["StandardEvent"], Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.props, {
      defaultTimeFormat: DEFAULT_TIME_FORMAT,
      extraClassNames: classNames
    }));
  };

  return TimeColEvent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["config"].timeGridEventCondensedHeight = 30;

var TimeCol =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeCol, _super);

  function TimeCol() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TimeCol.prototype.render = function () {
    var _this = this;

    var _a = this,
        props = _a.props,
        context = _a.context;

    var isSelectMirror = context.options.selectMirror;
    var mirrorSegs = props.eventDrag && props.eventDrag.segs || props.eventResize && props.eventResize.segs || isSelectMirror && props.dateSelectionSegs || [];
    var interactionAffectedInstances = // TODO: messy way to compute this
    props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {};
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayCellRoot"], {
      elRef: props.elRef,
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      extraHookProps: props.extraHookProps
    }, function (rootElRef, classNames, dataAttrs) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
        ref: rootElRef,
        className: ['fc-timegrid-col'].concat(classNames, props.extraClassNames || []).join(' ')
      }, dataAttrs, props.extraDataAttrs), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'fc-timegrid-col-frame'
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'fc-timegrid-col-bg'
      }, _this.renderFillSegs(props.businessHourSegs, 'non-business'), _this.renderFillSegs(props.bgEventSegs, 'bg-event'), _this.renderFillSegs(props.dateSelectionSegs, 'highlight')), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'fc-timegrid-col-events'
      }, _this.renderFgSegs(props.fgEventSegs, interactionAffectedInstances)), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'fc-timegrid-col-events'
      }, _this.renderFgSegs(mirrorSegs, {}, Boolean(props.eventDrag), Boolean(props.eventResize), Boolean(isSelectMirror) // TODO: pass in left/right instead of using only computeSegTopBottomCss
      )), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'fc-timegrid-now-indicator-container'
      }, _this.renderNowIndicator(props.nowIndicatorSegs)), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeColMisc, {
        date: props.date,
        dateProfile: props.dateProfile,
        todayRange: props.todayRange,
        extraHookProps: props.extraHookProps
      })));
    });
  };

  TimeCol.prototype.renderFgSegs = function (segs, segIsInvisible, isDragging, isResizing, isDateSelecting) {
    var props = this.props;

    if (props.forPrint) {
      return this.renderPrintFgSegs(segs);
    } else if (props.slatCoords) {
      return this.renderPositionedFgSegs(segs, segIsInvisible, isDragging, isResizing, isDateSelecting);
    }
  };

  TimeCol.prototype.renderPrintFgSegs = function (segs) {
    var _a = this,
        props = _a.props,
        context = _a.context; // not DRY


    segs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["sortEventSegs"])(segs, context.options.eventOrder);
    return segs.map(function (seg) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'fc-timegrid-event-harness',
        key: seg.eventRange.instance.instanceId
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeColEvent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
        seg: seg,
        isDragging: false,
        isResizing: false,
        isDateSelecting: false,
        isSelected: false,
        isCondensed: false
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegMeta"])(seg, props.todayRange, props.nowDate))));
    });
  };

  TimeCol.prototype.renderPositionedFgSegs = function (segs, segIsInvisible, isDragging, isResizing, isDateSelecting) {
    var _this = this;

    var _a = this,
        context = _a.context,
        props = _a.props; // assigns TO THE SEGS THEMSELVES
    // also, receives resorted array


    segs = computeSegCoords(segs, props.date, props.slatCoords, context.options.eventMinHeight, context.options.eventOrder);
    return segs.map(function (seg) {
      var instanceId = seg.eventRange.instance.instanceId;
      var isMirror = isDragging || isResizing || isDateSelecting;
      var positionCss = isMirror ? Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
        left: 0,
        right: 0
      }, _this.computeSegTopBottomCss(seg)) : _this.computeFgSegPositionCss(seg);
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'fc-timegrid-event-harness' + (seg.level > 0 ? ' fc-timegrid-event-harness-inset' : ''),
        key: instanceId,
        style: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
          visibility: segIsInvisible[instanceId] ? 'hidden' : ''
        }, positionCss)
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeColEvent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
        seg: seg,
        isDragging: isDragging,
        isResizing: isResizing,
        isDateSelecting: isDateSelecting,
        isSelected: instanceId === props.eventSelection,
        isCondensed: seg.bottom - seg.top < _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["config"].timeGridEventCondensedHeight
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegMeta"])(seg, props.todayRange, props.nowDate))));
    });
  };

  TimeCol.prototype.renderFillSegs = function (segs, fillType) {
    var _this = this;

    var _a = this,
        context = _a.context,
        props = _a.props;

    if (!props.slatCoords) {
      return;
    } // BAD: assigns TO THE SEGS THEMSELVES


    computeSegVerticals(segs, props.date, props.slatCoords, context.options.eventMinHeight);
    var children = segs.map(function (seg) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        key: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildEventRangeKey"])(seg.eventRange),
        className: 'fc-timegrid-bg-harness',
        style: _this.computeSegTopBottomCss(seg)
      }, fillType === 'bg-event' ? Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BgEvent"], Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
        seg: seg
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegMeta"])(seg, props.todayRange, props.nowDate))) : Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["renderFill"])(fillType));
    });
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, children);
  };

  TimeCol.prototype.renderNowIndicator = function (segs) {
    var _a = this.props,
        slatCoords = _a.slatCoords,
        date = _a.date;

    if (!slatCoords) {
      return;
    }

    return segs.map(function (seg, i) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["NowIndicatorRoot"], {
        isAxis: false,
        date: date,
        key: i
        /* key doesn't matter. will only ever be one */

      }, function (rootElRef, classNames, innerElRef, innerContent) {
        return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          ref: rootElRef,
          className: ['fc-timegrid-now-indicator-line'].concat(classNames).join(' '),
          style: {
            top: slatCoords.computeDateTop(seg.start, date)
          }
        }, innerContent);
      });
    });
  };

  TimeCol.prototype.computeFgSegPositionCss = function (seg) {
    var _a = this.context,
        isRtl = _a.isRtl,
        options = _a.options;
    var shouldOverlap = options.slotEventOverlap;
    var backwardCoord = seg.backwardCoord; // the left side if LTR. the right side if RTL. floating-point

    var forwardCoord = seg.forwardCoord; // the right side if LTR. the left side if RTL. floating-point

    var left; // amount of space from left edge, a fraction of the total width

    var right; // amount of space from right edge, a fraction of the total width

    if (shouldOverlap) {
      // double the width, but don't go beyond the maximum forward coordinate (1.0)
      forwardCoord = Math.min(1, backwardCoord + (forwardCoord - backwardCoord) * 2);
    }

    if (isRtl) {
      left = 1 - forwardCoord;
      right = backwardCoord;
    } else {
      left = backwardCoord;
      right = 1 - forwardCoord;
    }

    var props = {
      zIndex: seg.level + 1,
      left: left * 100 + '%',
      right: right * 100 + '%'
    };

    if (shouldOverlap && seg.forwardPressure) {
      // add padding to the edge so that forward stacked events don't cover the resizer's icon
      props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
    }

    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, props), this.computeSegTopBottomCss(seg));
  };

  TimeCol.prototype.computeSegTopBottomCss = function (seg) {
    return {
      top: seg.top,
      bottom: -seg.bottom
    };
  };

  return TimeCol;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

var TimeColMisc =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeColMisc, _super);

  function TimeColMisc() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TimeColMisc.prototype.render = function () {
    var props = this.props;
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayCellContent"], {
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      extraHookProps: props.extraHookProps
    }, function (innerElRef, innerContent) {
      return innerContent && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'fc-timegrid-col-misc',
        ref: innerElRef
      }, innerContent);
    });
  };

  return TimeColMisc;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

var TimeColsContent =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeColsContent, _super);

  function TimeColsContent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.splitFgEventSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByCol);
    _this.splitBgEventSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByCol);
    _this.splitBusinessHourSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByCol);
    _this.splitNowIndicatorSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByCol);
    _this.splitDateSelectionSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByCol);
    _this.splitEventDrag = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitInteractionByCol);
    _this.splitEventResize = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitInteractionByCol);
    _this.rootElRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    _this.cellElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RefMap"]();
    return _this;
  }

  TimeColsContent.prototype.render = function () {
    var _this = this;

    var _a = this,
        props = _a.props,
        context = _a.context;

    var nowIndicatorTop = context.options.nowIndicator && props.slatCoords && props.slatCoords.safeComputeTop(props.nowDate); // might return void

    var colCnt = props.cells.length;
    var fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, colCnt);
    var bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, colCnt);
    var businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, colCnt);
    var nowIndicatorSegsByRow = this.splitNowIndicatorSegs(props.nowIndicatorSegs, colCnt);
    var dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, colCnt);
    var eventDragByRow = this.splitEventDrag(props.eventDrag, colCnt);
    var eventResizeByRow = this.splitEventResize(props.eventResize, colCnt);
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'fc-timegrid-cols',
      ref: this.rootElRef
    }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("table", {
      style: {
        minWidth: props.tableMinWidth,
        width: props.clientWidth
      }
    }, props.tableColGroupNode, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tbody", null, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", null, props.axis && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
      className: 'fc-timegrid-col fc-timegrid-axis'
    }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'fc-timegrid-col-frame'
    }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'fc-timegrid-now-indicator-container'
    }, typeof nowIndicatorTop === 'number' && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["NowIndicatorRoot"], {
      isAxis: true,
      date: props.nowDate
    }, function (rootElRef, classNames, innerElRef, innerContent) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        ref: rootElRef,
        className: ['fc-timegrid-now-indicator-arrow'].concat(classNames).join(' '),
        style: {
          top: nowIndicatorTop
        }
      }, innerContent);
    })))), props.cells.map(function (cell, i) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeCol, {
        key: cell.key,
        elRef: _this.cellElRefs.createRef(cell.key),
        dateProfile: props.dateProfile,
        date: cell.date,
        nowDate: props.nowDate,
        todayRange: props.todayRange,
        extraHookProps: cell.extraHookProps,
        extraDataAttrs: cell.extraDataAttrs,
        extraClassNames: cell.extraClassNames,
        fgEventSegs: fgEventSegsByRow[i],
        bgEventSegs: bgEventSegsByRow[i],
        businessHourSegs: businessHourSegsByRow[i],
        nowIndicatorSegs: nowIndicatorSegsByRow[i],
        dateSelectionSegs: dateSelectionSegsByRow[i],
        eventDrag: eventDragByRow[i],
        eventResize: eventResizeByRow[i],
        slatCoords: props.slatCoords,
        eventSelection: props.eventSelection,
        forPrint: props.forPrint
      });
    })))));
  };

  TimeColsContent.prototype.componentDidMount = function () {
    this.updateCoords();
  };

  TimeColsContent.prototype.componentDidUpdate = function () {
    this.updateCoords();
  };

  TimeColsContent.prototype.updateCoords = function () {
    var props = this.props;

    if (props.onColCoords && props.clientWidth !== null // means sizing has stabilized
    ) {
        props.onColCoords(new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["PositionCache"](this.rootElRef.current, collectCellEls(this.cellElRefs.currentMap, props.cells), true, // horizontal
        false));
      }
  };

  return TimeColsContent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

function collectCellEls(elMap, cells) {
  return cells.map(function (cell) {
    return elMap[cell.key];
  });
}
/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/


var TimeCols =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TimeCols, _super);

  function TimeCols() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.processSlotOptions = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(processSlotOptions);
    _this.state = {
      slatCoords: null
    };

    _this.handleScrollRequest = function (request) {
      var onScrollTopRequest = _this.props.onScrollTopRequest;
      var slatCoords = _this.state.slatCoords;

      if (onScrollTopRequest && slatCoords) {
        if (request.time) {
          var top_1 = slatCoords.computeTimeTop(request.time);
          top_1 = Math.ceil(top_1); // zoom can give weird floating-point values. rather scroll a little bit further

          if (top_1) {
            top_1++;
          } // to overcome top border that slots beyond the first have. looks better


          onScrollTopRequest(top_1);
        }

        return true;
      }
    };

    _this.handleColCoords = function (colCoords) {
      _this.colCoords = colCoords;
    };

    _this.handleSlatCoords = function (slatCoords) {
      _this.setState({
        slatCoords: slatCoords
      });

      if (_this.props.onSlatCoords) {
        _this.props.onSlatCoords(slatCoords);
      }
    };

    return _this;
  }

  TimeCols.prototype.render = function () {
    var _a = this,
        props = _a.props,
        state = _a.state;

    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'fc-timegrid-body',
      ref: props.rootElRef,
      style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: props.clientWidth,
        minWidth: props.tableMinWidth
      }
    }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeColsSlats, {
      axis: props.axis,
      dateProfile: props.dateProfile,
      slatMetas: props.slatMetas,
      clientWidth: props.clientWidth,
      minHeight: props.expandRows ? props.clientHeight : '',
      tableMinWidth: props.tableMinWidth,
      tableColGroupNode: props.axis ? props.tableColGroupNode : null
      /* axis depends on the colgroup's shrinking */
      ,
      onCoords: this.handleSlatCoords
    }), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeColsContent, {
      cells: props.cells,
      axis: props.axis,
      dateProfile: props.dateProfile,
      businessHourSegs: props.businessHourSegs,
      bgEventSegs: props.bgEventSegs,
      fgEventSegs: props.fgEventSegs,
      dateSelectionSegs: props.dateSelectionSegs,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      todayRange: props.todayRange,
      nowDate: props.nowDate,
      nowIndicatorSegs: props.nowIndicatorSegs,
      clientWidth: props.clientWidth,
      tableMinWidth: props.tableMinWidth,
      tableColGroupNode: props.tableColGroupNode,
      slatCoords: state.slatCoords,
      onColCoords: this.handleColCoords,
      forPrint: props.forPrint
    }));
  };

  TimeCols.prototype.componentDidMount = function () {
    this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
  };

  TimeCols.prototype.componentDidUpdate = function (prevProps) {
    this.scrollResponder.update(prevProps.dateProfile !== this.props.dateProfile);
  };

  TimeCols.prototype.componentWillUnmount = function () {
    this.scrollResponder.detach();
  };

  TimeCols.prototype.positionToHit = function (positionLeft, positionTop) {
    var _a = this.context,
        dateEnv = _a.dateEnv,
        options = _a.options;
    var colCoords = this.colCoords;
    var dateProfile = this.props.dateProfile;
    var slatCoords = this.state.slatCoords;

    var _b = this.processSlotOptions(this.props.slotDuration, options.snapDuration),
        snapDuration = _b.snapDuration,
        snapsPerSlot = _b.snapsPerSlot;

    var colIndex = colCoords.leftToIndex(positionLeft);
    var slatIndex = slatCoords.positions.topToIndex(positionTop);

    if (colIndex != null && slatIndex != null) {
      var slatTop = slatCoords.positions.tops[slatIndex];
      var slatHeight = slatCoords.positions.getHeight(slatIndex);
      var partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1

      var localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat

      var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
      var dayDate = this.props.cells[colIndex].date;
      var time = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addDurations"])(dateProfile.slotMinTime, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["multiplyDuration"])(snapDuration, snapIndex));
      var start = dateEnv.add(dayDate, time);
      var end = dateEnv.add(start, snapDuration);
      return {
        col: colIndex,
        dateSpan: {
          range: {
            start: start,
            end: end
          },
          allDay: false
        },
        dayEl: colCoords.els[colIndex],
        relativeRect: {
          left: colCoords.lefts[colIndex],
          right: colCoords.rights[colIndex],
          top: slatTop,
          bottom: slatTop + slatHeight
        }
      };
    }
  };

  return TimeCols;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

function processSlotOptions(slotDuration, snapDurationOverride) {
  var snapDuration = snapDurationOverride || slotDuration;
  var snapsPerSlot = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["wholeDivideDurations"])(slotDuration, snapDuration);

  if (snapsPerSlot === null) {
    snapDuration = slotDuration;
    snapsPerSlot = 1; // TODO: say warning?
  }

  return {
    snapDuration: snapDuration,
    snapsPerSlot: snapsPerSlot
  };
}

var DayTimeCols =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(DayTimeCols, _super);

  function DayTimeCols() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.buildDayRanges = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(buildDayRanges);
    _this.slicer = new DayTimeColsSlicer();
    _this.timeColsRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();

    _this.handleRootEl = function (rootEl) {
      if (rootEl) {
        _this.context.registerInteractiveComponent(_this, {
          el: rootEl
        });
      } else {
        _this.context.unregisterInteractiveComponent(_this);
      }
    };

    return _this;
  }

  DayTimeCols.prototype.render = function () {
    var _this = this;

    var _a = this,
        props = _a.props,
        context = _a.context;

    var dateProfile = props.dateProfile,
        dayTableModel = props.dayTableModel;
    var isNowIndicator = context.options.nowIndicator;
    var dayRanges = this.buildDayRanges(dayTableModel, dateProfile, context.dateEnv); // give it the first row of cells
    // TODO: would move this further down hierarchy, but sliceNowDate needs it

    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["NowTimer"], {
      unit: isNowIndicator ? 'minute' : 'day'
    }, function (nowDate, todayRange) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TimeCols, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
        ref: _this.timeColsRef,
        rootElRef: _this.handleRootEl
      }, _this.slicer.sliceProps(props, dateProfile, null, context, dayRanges), {
        forPrint: props.forPrint,
        axis: props.axis,
        dateProfile: dateProfile,
        slatMetas: props.slatMetas,
        slotDuration: props.slotDuration,
        cells: dayTableModel.cells[0],
        tableColGroupNode: props.tableColGroupNode,
        tableMinWidth: props.tableMinWidth,
        clientWidth: props.clientWidth,
        clientHeight: props.clientHeight,
        expandRows: props.expandRows,
        nowDate: nowDate,
        nowIndicatorSegs: isNowIndicator && _this.slicer.sliceNowDate(nowDate, context, dayRanges),
        todayRange: todayRange,
        onScrollTopRequest: props.onScrollTopRequest,
        onSlatCoords: props.onSlatCoords
      }));
    });
  };

  DayTimeCols.prototype.queryHit = function (positionLeft, positionTop) {
    var rawHit = this.timeColsRef.current.positionToHit(positionLeft, positionTop);

    if (rawHit) {
      return {
        component: this,
        dateSpan: rawHit.dateSpan,
        dayEl: rawHit.dayEl,
        rect: {
          left: rawHit.relativeRect.left,
          right: rawHit.relativeRect.right,
          top: rawHit.relativeRect.top,
          bottom: rawHit.relativeRect.bottom
        },
        layer: 0
      };
    }
  };

  return DayTimeCols;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]);

function buildDayRanges(dayTableModel, dateProfile, dateEnv) {
  var ranges = [];

  for (var _i = 0, _a = dayTableModel.headerDates; _i < _a.length; _i++) {
    var date = _a[_i];
    ranges.push({
      start: dateEnv.add(date, dateProfile.slotMinTime),
      end: dateEnv.add(date, dateProfile.slotMaxTime)
    });
  }

  return ranges;
}

var DayTimeColsSlicer =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(DayTimeColsSlicer, _super);

  function DayTimeColsSlicer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DayTimeColsSlicer.prototype.sliceRange = function (range, dayRanges) {
    var segs = [];

    for (var col = 0; col < dayRanges.length; col++) {
      var segRange = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["intersectRanges"])(range, dayRanges[col]);

      if (segRange) {
        segs.push({
          start: segRange.start,
          end: segRange.end,
          isStart: segRange.start.valueOf() === range.start.valueOf(),
          isEnd: segRange.end.valueOf() === range.end.valueOf(),
          col: col
        });
      }
    }

    return segs;
  };

  return DayTimeColsSlicer;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Slicer"]);

var DayTimeColsView =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(DayTimeColsView, _super);

  function DayTimeColsView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.buildTimeColsModel = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(buildTimeColsModel);
    _this.buildSlatMetas = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(buildSlatMetas);
    return _this;
  }

  DayTimeColsView.prototype.render = function () {
    var _this = this;

    var _a = this.context,
        options = _a.options,
        dateEnv = _a.dateEnv,
        dateProfileGenerator = _a.dateProfileGenerator;
    var props = this.props;
    var dateProfile = props.dateProfile;
    var dayTableModel = this.buildTimeColsModel(dateProfile, dateProfileGenerator);
    var splitProps = this.allDaySplitter.splitProps(props);
    var slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
    var dayMinWidth = options.dayMinWidth;
    var hasAttachedAxis = !dayMinWidth;
    var hasDetachedAxis = dayMinWidth;
    var headerContent = options.dayHeaders && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayHeader"], {
      dates: dayTableModel.headerDates,
      dateProfile: dateProfile,
      datesRepDistinctDays: true,
      renderIntro: hasAttachedAxis ? this.renderHeadAxis : null
    });

    var allDayContent = options.allDaySlot !== false && function (contentArg) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["DayTable"], Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, splitProps['allDay'], {
        dateProfile: dateProfile,
        dayTableModel: dayTableModel,
        nextDayThreshold: options.nextDayThreshold,
        tableMinWidth: contentArg.tableMinWidth,
        colGroupNode: contentArg.tableColGroupNode,
        renderRowIntro: hasAttachedAxis ? _this.renderTableRowAxis : null,
        showWeekNumbers: false,
        expandRows: false,
        headerAlignElRef: _this.headerElRef,
        clientWidth: contentArg.clientWidth,
        clientHeight: contentArg.clientHeight,
        forPrint: props.forPrint
      }, _this.getAllDayMaxEventProps()));
    };

    var timeGridContent = function timeGridContent(contentArg) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(DayTimeCols, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, splitProps['timed'], {
        dayTableModel: dayTableModel,
        dateProfile: dateProfile,
        axis: hasAttachedAxis,
        slotDuration: options.slotDuration,
        slatMetas: slatMetas,
        forPrint: props.forPrint,
        tableColGroupNode: contentArg.tableColGroupNode,
        tableMinWidth: contentArg.tableMinWidth,
        clientWidth: contentArg.clientWidth,
        clientHeight: contentArg.clientHeight,
        onSlatCoords: _this.handleSlatCoords,
        expandRows: contentArg.expandRows,
        onScrollTopRequest: _this.handleScrollTopRequest
      }));
    };

    return hasDetachedAxis ? this.renderHScrollLayout(headerContent, allDayContent, timeGridContent, dayTableModel.colCnt, dayMinWidth, slatMetas, this.state.slatCoords) : this.renderSimpleLayout(headerContent, allDayContent, timeGridContent);
  };

  return DayTimeColsView;
}(TimeColsView);

function buildTimeColsModel(dateProfile, dateProfileGenerator) {
  var daySeries = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DaySeriesModel"](dateProfile.renderRange, dateProfileGenerator);
  return new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayTableModel"](daySeries, false);
}

var OPTION_REFINERS = {
  allDaySlot: Boolean
};
var main = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createPlugin"])({
  initialView: 'timeGridWeek',
  optionRefiners: OPTION_REFINERS,
  views: {
    timeGrid: {
      component: DayTimeColsView,
      usesMinMaxTime: true,
      allDaySlot: true,
      slotDuration: '00:30:00',
      slotEventOverlap: true // a bad name. confused with overlap/constraint system

    },
    timeGridDay: {
      type: 'timeGrid',
      duration: {
        days: 1
      }
    },
    timeGridWeek: {
      type: 'timeGrid',
      duration: {
        weeks: 1
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (main);


/***/ }),

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Expose `Emitter`.
 */
if (true) {
  module.exports = Emitter;
}
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */


function Emitter(obj) {
  if (obj) return mixin(obj);
}

;
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }

  return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {}; // all

  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  } // specific event


  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this; // remove all handlers

  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  } // remove specific handler


  var cb;

  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];

    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  } // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.


  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */


Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1),
      callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);

    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */


Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */


Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@fullcalendar/common/main.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@fullcalendar/common/main.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "\n/* classes attached to <body> */\n\n.fc-not-allowed,\n.fc-not-allowed .fc-event { /* override events' custom cursors */\n  cursor: not-allowed;\n}\n\n.fc-unselectable {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.fc {\n  /* layout of immediate children */\n  display: flex;\n  flex-direction: column;\n\n  font-size: 1em\n}\n\n.fc,\n  .fc *,\n  .fc *:before,\n  .fc *:after {\n    box-sizing: border-box;\n  }\n\n.fc table {\n    border-collapse: collapse;\n    border-spacing: 0;\n    font-size: 1em; /* normalize cross-browser */\n  }\n\n.fc th {\n    text-align: center;\n  }\n\n.fc th,\n  .fc td {\n    vertical-align: top;\n    padding: 0;\n  }\n\n.fc a[data-navlink] {\n    cursor: pointer;\n  }\n\n.fc a[data-navlink]:hover {\n    text-decoration: underline;\n  }\n\n.fc-direction-ltr {\n  direction: ltr;\n  text-align: left;\n}\n\n.fc-direction-rtl {\n  direction: rtl;\n  text-align: right;\n}\n\n.fc-theme-standard td,\n  .fc-theme-standard th {\n    border: 1px solid #ddd;\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n  }\n\n/* for FF, which doesn't expand a 100% div within a table cell. use absolute positioning */\n\n/* inner-wrappers are responsible for being absolute */\n\n/* TODO: best place for this? */\n\n.fc-liquid-hack td,\n  .fc-liquid-hack th {\n    position: relative;\n  }\n\n@font-face {\n  font-family: 'fcicons';\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n.fc-icon {\n  /* added for fc */\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'fcicons' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-feature-settings: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.fc-icon-chevron-left:before {\n  content: \"\\e900\";\n}\n\n.fc-icon-chevron-right:before {\n  content: \"\\e901\";\n}\n\n.fc-icon-chevrons-left:before {\n  content: \"\\e902\";\n}\n\n.fc-icon-chevrons-right:before {\n  content: \"\\e903\";\n}\n\n.fc-icon-minus-square:before {\n  content: \"\\e904\";\n}\n\n.fc-icon-plus-square:before {\n  content: \"\\e905\";\n}\n\n.fc-icon-x:before {\n  content: \"\\e906\";\n}\n\n/*\nLots taken from Flatly (MIT): https://bootswatch.com/4/flatly/bootstrap.css\n\nThese styles only apply when the standard-theme is activated.\nWhen it's NOT activated, the fc-button classes won't even be in the DOM.\n*/\n\n.fc {\n\n  /* reset */\n\n}\n\n.fc .fc-button {\n    border-radius: 0;\n    overflow: visible;\n    text-transform: none;\n    margin: 0;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n  }\n\n.fc .fc-button:focus {\n    outline: 1px dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n\n.fc .fc-button {\n    -webkit-appearance: button;\n  }\n\n.fc .fc-button:not(:disabled) {\n    cursor: pointer;\n  }\n\n.fc .fc-button::-moz-focus-inner {\n    padding: 0;\n    border-style: none;\n  }\n\n.fc {\n\n  /* theme */\n\n}\n\n.fc .fc-button {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    vertical-align: middle;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    background-color: transparent;\n    border: 1px solid transparent;\n    padding: 0.4em 0.65em;\n    font-size: 1em;\n    line-height: 1.5;\n    border-radius: 0.25em;\n  }\n\n.fc .fc-button:hover {\n    text-decoration: none;\n  }\n\n.fc .fc-button:focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);\n  }\n\n.fc .fc-button:disabled {\n    opacity: 0.65;\n  }\n\n.fc {\n\n  /* \"primary\" coloring */\n\n}\n\n.fc .fc-button-primary {\n    color: #fff;\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #2C3E50;\n    background-color: #2C3E50;\n    background-color: var(--fc-button-bg-color, #2C3E50);\n    border-color: #2C3E50;\n    border-color: #2C3E50;\n    border-color: var(--fc-button-border-color, #2C3E50);\n  }\n\n.fc .fc-button-primary:hover {\n    color: #fff;\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #1e2b37;\n    background-color: #1e2b37;\n    background-color: var(--fc-button-hover-bg-color, #1e2b37);\n    border-color: #1a252f;\n    border-color: #1a252f;\n    border-color: var(--fc-button-hover-border-color, #1a252f);\n  }\n\n.fc .fc-button-primary:disabled { /* not DRY */\n    color: #fff;\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #2C3E50;\n    background-color: #2C3E50;\n    background-color: var(--fc-button-bg-color, #2C3E50);\n    border-color: #2C3E50;\n    border-color: #2C3E50;\n    border-color: var(--fc-button-border-color, #2C3E50); /* overrides :hover */\n  }\n\n.fc .fc-button-primary:focus {\n    box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  }\n\n.fc .fc-button-primary:not(:disabled):active,\n  .fc .fc-button-primary:not(:disabled).fc-button-active {\n    color: #fff;\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #1a252f;\n    background-color: #1a252f;\n    background-color: var(--fc-button-active-bg-color, #1a252f);\n    border-color: #151e27;\n    border-color: #151e27;\n    border-color: var(--fc-button-active-border-color, #151e27);\n  }\n\n.fc .fc-button-primary:not(:disabled):active:focus,\n  .fc .fc-button-primary:not(:disabled).fc-button-active:focus {\n    box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  }\n\n.fc {\n\n  /* icons within buttons */\n\n}\n\n.fc .fc-button .fc-icon {\n    vertical-align: middle;\n    font-size: 1.5em; /* bump up the size (but don't make it bigger than line-height of button, which is 1.5em also) */\n  }\n\n.fc .fc-button-group {\n    position: relative;\n    display: inline-flex;\n    vertical-align: middle;\n  }\n\n.fc .fc-button-group > .fc-button {\n    position: relative;\n    flex: 1 1 auto;\n  }\n\n.fc .fc-button-group > .fc-button:hover {\n    z-index: 1;\n  }\n\n.fc .fc-button-group > .fc-button:focus,\n  .fc .fc-button-group > .fc-button:active,\n  .fc .fc-button-group > .fc-button.fc-button-active {\n    z-index: 1;\n  }\n\n.fc-direction-ltr .fc-button-group > .fc-button:not(:first-child) {\n    margin-left: -1px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n\n.fc-direction-ltr .fc-button-group > .fc-button:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n.fc-direction-rtl .fc-button-group > .fc-button:not(:first-child) {\n    margin-right: -1px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n.fc-direction-rtl .fc-button-group > .fc-button:not(:last-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n\n.fc .fc-toolbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n.fc .fc-toolbar.fc-header-toolbar {\n    margin-bottom: 1.5em;\n  }\n\n.fc .fc-toolbar.fc-footer-toolbar {\n    margin-top: 1.5em;\n  }\n\n.fc .fc-toolbar-title {\n    font-size: 1.75em;\n    margin: 0;\n  }\n\n.fc-direction-ltr .fc-toolbar > * > :not(:first-child) {\n    margin-left: .75em; /* space between */\n  }\n\n.fc-direction-rtl .fc-toolbar > * > :not(:first-child) {\n    margin-right: .75em; /* space between */\n  }\n\n.fc-direction-rtl .fc-toolbar-ltr { /* when the toolbar-chunk positioning system is explicitly left-to-right */\n    flex-direction: row-reverse;\n  }\n\n.fc .fc-scroller {\n    -webkit-overflow-scrolling: touch;\n    position: relative; /* for abs-positioned elements within */\n  }\n\n.fc .fc-scroller-liquid {\n    height: 100%;\n  }\n\n.fc .fc-scroller-liquid-absolute {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n  }\n\n.fc .fc-scroller-harness {\n    position: relative;\n    overflow: hidden;\n    direction: ltr;\n      /* hack for chrome computing the scroller's right/left wrong for rtl. undone below... */\n      /* TODO: demonstrate in codepen */\n  }\n\n.fc .fc-scroller-harness-liquid {\n    height: 100%;\n  }\n\n.fc-direction-rtl .fc-scroller-harness > .fc-scroller { /* undo above hack */\n    direction: rtl;\n  }\n\n.fc-theme-standard .fc-scrollgrid {\n    border: 1px solid #ddd;\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd); /* bootstrap does this. match */\n  }\n\n.fc .fc-scrollgrid,\n    .fc .fc-scrollgrid table { /* all tables (self included) */\n      width: 100%; /* because tables don't normally do this */\n      table-layout: fixed;\n    }\n\n.fc .fc-scrollgrid table { /* inner tables */\n      border-top-style: hidden;\n      border-left-style: hidden;\n      border-right-style: hidden;\n    }\n\n.fc .fc-scrollgrid {\n\n    border-collapse: separate;\n    border-right-width: 0;\n    border-bottom-width: 0;\n\n  }\n\n.fc .fc-scrollgrid-liquid {\n    height: 100%;\n  }\n\n.fc .fc-scrollgrid-section { /* a <tr> */\n    height: 1px /* better than 0, for firefox */\n\n  }\n\n.fc .fc-scrollgrid-section > td {\n      height: 1px; /* needs a height so inner div within grow. better than 0, for firefox */\n    }\n\n.fc .fc-scrollgrid-section table {\n      height: 1px;\n        /* for most browsers, if a height isn't set on the table, can't do liquid-height within cells */\n        /* serves as a min-height. harmless */\n    }\n\n.fc .fc-scrollgrid-section-liquid {\n    height: auto\n\n  }\n\n.fc .fc-scrollgrid-section-liquid > td {\n      height: 100%; /* better than `auto`, for firefox */\n    }\n\n.fc .fc-scrollgrid-section > * {\n    border-top-width: 0;\n    border-left-width: 0;\n  }\n\n.fc .fc-scrollgrid-section-header > *,\n  .fc .fc-scrollgrid-section-footer > * {\n    border-bottom-width: 0;\n  }\n\n.fc .fc-scrollgrid-section-body table,\n  .fc .fc-scrollgrid-section-footer table {\n    border-bottom-style: hidden; /* head keeps its bottom border tho */\n  }\n\n.fc {\n\n  /* stickiness */\n\n}\n\n.fc .fc-scrollgrid-section-sticky > * {\n    background: #fff;\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff);\n    position: -webkit-sticky;\n    position: sticky;\n    z-index: 2; /* TODO: var */\n    /* TODO: box-shadow when sticking */\n  }\n\n.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky > * {\n    top: 0; /* because border-sharing causes a gap at the top */\n      /* TODO: give safari -1. has bug */\n  }\n\n.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky > * {\n    bottom: 0; /* known bug: bottom-stickiness doesn't work in safari */\n  }\n\n.fc .fc-scrollgrid-sticky-shim { /* for horizontal scrollbar */\n    height: 1px; /* needs height to create scrollbars */\n    margin-bottom: -1px;\n  }\n\n.fc-sticky { /* no .fc wrap because used as child of body */\n  position: -webkit-sticky;\n  position: sticky;\n}\n\n.fc .fc-view-harness {\n    flex-grow: 1; /* because this harness is WITHIN the .fc's flexbox */\n    position: relative;\n  }\n\n.fc {\n\n  /* when the harness controls the height, make the view liquid */\n\n}\n\n.fc .fc-view-harness-active > .fc-view {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n\n.fc .fc-col-header-cell-cushion {\n    display: inline-block; /* x-browser for when sticky (when multi-tier header) */\n    padding: 2px 4px;\n  }\n\n.fc .fc-bg-event,\n  .fc .fc-non-business,\n  .fc .fc-highlight {\n    /* will always have a harness with position:relative/absolute, so absolutely expand */\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n\n.fc .fc-non-business {\n    background: rgba(215, 215, 215, 0.3);\n    background: rgba(215, 215, 215, 0.3);\n    background: var(--fc-non-business-color, rgba(215, 215, 215, 0.3));\n  }\n\n.fc .fc-bg-event {\n    background: rgb(143, 223, 130);\n    background: rgb(143, 223, 130);\n    background: var(--fc-bg-event-color, rgb(143, 223, 130));\n    opacity: 0.3;\n    opacity: 0.3;\n    opacity: var(--fc-bg-event-opacity, 0.3)\n  }\n\n.fc .fc-bg-event .fc-event-title {\n      margin: .5em;\n      font-size: .85em;\n      font-size: .85em;\n      font-size: var(--fc-small-font-size, .85em);\n      font-style: italic;\n    }\n\n.fc .fc-highlight {\n    background: rgba(188, 232, 241, 0.3);\n    background: rgba(188, 232, 241, 0.3);\n    background: var(--fc-highlight-color, rgba(188, 232, 241, 0.3));\n  }\n\n.fc .fc-cell-shaded,\n  .fc .fc-day-disabled {\n    background: rgba(208, 208, 208, 0.3);\n    background: rgba(208, 208, 208, 0.3);\n    background: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n\n/* link resets */\n\n/* ---------------------------------------------------------------------------------------------------- */\n\na.fc-event,\na.fc-event:hover {\n  text-decoration: none;\n}\n\n/* cursor */\n\n.fc-event[href],\n.fc-event.fc-event-draggable {\n  cursor: pointer;\n}\n\n/* event text content */\n\n/* ---------------------------------------------------------------------------------------------------- */\n\n.fc-event .fc-event-main {\n    position: relative;\n    z-index: 2;\n  }\n\n/* dragging */\n\n/* ---------------------------------------------------------------------------------------------------- */\n\n.fc-event-dragging:not(.fc-event-selected) { /* MOUSE */\n    opacity: 0.75;\n  }\n\n.fc-event-dragging.fc-event-selected { /* TOUCH */\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);\n  }\n\n/* resizing */\n\n/* ---------------------------------------------------------------------------------------------------- */\n\n/* (subclasses should hone positioning for touch and non-touch) */\n\n.fc-event .fc-event-resizer {\n    display: none;\n    position: absolute;\n    z-index: 4;\n  }\n\n.fc-event:hover, /* MOUSE */\n.fc-event-selected { /* TOUCH */\n\n}\n\n.fc-event:hover .fc-event-resizer, .fc-event-selected .fc-event-resizer {\n    display: block;\n  }\n\n.fc-event-selected .fc-event-resizer {\n    border-radius: 4px;\n    border-radius: calc(8px / 2);\n    border-radius: calc(var(--fc-event-resizer-dot-total-width, 8px) / 2);\n    border-width: 1px;\n    border-width: 1px;\n    border-width: var(--fc-event-resizer-dot-border-width, 1px);\n    width: 8px;\n    width: 8px;\n    width: var(--fc-event-resizer-dot-total-width, 8px);\n    height: 8px;\n    height: 8px;\n    height: var(--fc-event-resizer-dot-total-width, 8px);\n    border-style: solid;\n    border-color: inherit;\n    background: #fff;\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff)\n\n    /* expand hit area */\n\n  }\n\n.fc-event-selected .fc-event-resizer:before {\n      content: '';\n      position: absolute;\n      top: -20px;\n      left: -20px;\n      right: -20px;\n      bottom: -20px;\n    }\n\n/* selecting (always TOUCH) */\n\n/* ---------------------------------------------------------------------------------------------------- */\n\n.fc-event-selected {\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2)\n\n  /* expand hit area (subclasses should expand) */\n\n}\n\n.fc-event-selected:before {\n    content: \"\";\n    position: absolute;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n\n.fc-event-selected {\n\n  /* dimmer effect */\n\n}\n\n.fc-event-selected:after {\n    content: \"\";\n    background: rgba(0, 0, 0, 0.25);\n    background: rgba(0, 0, 0, 0.25);\n    background: var(--fc-event-selected-overlay-color, rgba(0, 0, 0, 0.25));\n    position: absolute;\n    z-index: 1;\n\n    /* assume there's a border on all sides. overcome it. */\n    /* sometimes there's NOT a border, in which case the dimmer will go over */\n    /* an adjacent border, which looks fine. */\n    top: -1px;\n    left: -1px;\n    right: -1px;\n    bottom: -1px;\n  }\n\n/*\nA HORIZONTAL event\n*/\n\n.fc-h-event { /* allowed to be top-level */\n  display: block;\n  border: 1px solid #3788d8;\n  border: 1px solid #3788d8;\n  border: 1px solid var(--fc-event-border-color, #3788d8);\n  background-color: #3788d8;\n  background-color: #3788d8;\n  background-color: var(--fc-event-bg-color, #3788d8)\n\n}\n\n.fc-h-event .fc-event-main {\n    color: #fff;\n    color: #fff;\n    color: var(--fc-event-text-color, #fff);\n  }\n\n.fc-h-event .fc-event-main-frame {\n    display: flex; /* for make fc-event-title-container expand */\n  }\n\n.fc-h-event .fc-event-time {\n    max-width: 100%; /* clip overflow on this element */\n    overflow: hidden;\n  }\n\n.fc-h-event .fc-event-title-container { /* serves as a container for the sticky cushion */\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0; /* important for allowing to shrink all the way */\n  }\n\n.fc-h-event .fc-event-title {\n    display: inline-block; /* need this to be sticky cross-browser */\n    vertical-align: top; /* for not messing up line-height */\n    left: 0;  /* for sticky */\n    right: 0; /* for sticky */\n    max-width: 100%; /* clip overflow on this element */\n    overflow: hidden;\n  }\n\n.fc-h-event.fc-event-selected:before {\n    /* expand hit area */\n    top: -10px;\n    bottom: -10px;\n  }\n\n/* adjust border and border-radius (if there is any) for non-start/end */\n\n.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),\n.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left-width: 0;\n}\n\n.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),\n.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right-width: 0;\n}\n\n/* resizers */\n\n.fc-h-event:not(.fc-event-selected) .fc-event-resizer {\n  top: 0;\n  bottom: 0;\n  width: 8px;\n  width: 8px;\n  width: var(--fc-event-resizer-thickness, 8px);\n}\n\n.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,\n.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end {\n  cursor: w-resize;\n  left: -4px;\n  left: calc(8px / -2);\n  left: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n}\n\n.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,\n.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start {\n  cursor: e-resize;\n  right: -4px;\n  right: calc(8px / -2);\n  right: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n}\n\n/* resizers for TOUCH */\n\n.fc-h-event.fc-event-selected .fc-event-resizer {\n  top: 50%;\n  margin-top: -4px;\n  margin-top: calc(8px / -2);\n  margin-top: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n}\n\n.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,\n.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end {\n  left: -4px;\n  left: calc(8px / -2);\n  left: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n}\n\n.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,\n.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start {\n  right: -4px;\n  right: calc(8px / -2);\n  right: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n}\n", "",{"version":3,"sources":["main.css"],"names":[],"mappings":";AACA,+BAA+B;;AAE/B;4BAC4B,oCAAoC;EAC9D,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;KACtB,sBAAsB;MACrB,qBAAqB;UACjB,iBAAiB;EACzB,2BAA2B;EAC3B,6CAA6C;AAC/C;;AACA;EACE,iCAAiC;EACjC,aAAa;EACb,sBAAsB;;EAEtB;AACF;;AACA;;;;IAII,sBAAsB;EACxB;;AACF;IACI,yBAAyB;IACzB,iBAAiB;IACjB,cAAc,EAAE,4BAA4B;EAC9C;;AACF;IACI,kBAAkB;EACpB;;AACF;;IAEI,mBAAmB;IACnB,UAAU;EACZ;;AACF;IACI,eAAe;EACjB;;AACF;IACI,0BAA0B;EAC5B;;AACF;EACE,cAAc;EACd,gBAAgB;AAClB;;AACA;EACE,cAAc;EACd,iBAAiB;AACnB;;AACA;;IAEI,sBAAsB;IACtB,sBAA8C;IAA9C,8CAA8C;EAChD;;AACF,0FAA0F;;AAC1F,sDAAsD;;AACtD,+BAA+B;;AAC/B;;IAEI,kBAAkB;EACpB;;AAEF;EACE,sBAAsB;EACtB,4mGAA4mG;EAC5mG,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,yBAAyB;KACtB,sBAAsB;MACrB,qBAAqB;UACjB,iBAAiB;;EAEzB,+EAA+E;EAC/E,iCAAiC;EACjC,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,6BAAoB;EAApB,oBAAoB;EACpB,oBAAoB;EACpB,cAAc;;EAEd,sCAAsC;EACtC,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AACA;;;;;CAKC;;AACD;;EAEE,UAAU;;AAEZ;;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,SAAS;IACT,oBAAoB;IACpB,kBAAkB;IAClB,oBAAoB;EACtB;;AACF;IACI,mBAAmB;IACnB,0CAA0C;EAC5C;;AACF;IACI,0BAA0B;EAC5B;;AACF;IACI,eAAe;EACjB;;AACF;IACI,UAAU;IACV,kBAAkB;EACpB;;AACF;;EAEE,UAAU;;AAEZ;;AACA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;IAClB,sBAAsB;IACtB,yBAAyB;OACtB,sBAAsB;QACrB,qBAAqB;YACjB,iBAAiB;IACzB,6BAA6B;IAC7B,6BAA6B;IAC7B,qBAAqB;IACrB,cAAc;IACd,gBAAgB;IAChB,qBAAqB;EACvB;;AACF;IACI,qBAAqB;EACvB;;AACF;IACI,UAAU;IACV,+CAA+C;EACjD;;AACF;IACI,aAAa;EACf;;AACF;;EAEE,uBAAuB;;AAEzB;;AACA;IACI,WAAW;IACX,WAAwC;IAAxC,wCAAwC;IACxC,yBAAyB;IACzB,yBAAoD;IAApD,oDAAoD;IACpD,qBAAqB;IACrB,qBAAoD;IAApD,oDAAoD;EACtD;;AACF;IACI,WAAW;IACX,WAAwC;IAAxC,wCAAwC;IACxC,yBAAyB;IACzB,yBAA0D;IAA1D,0DAA0D;IAC1D,qBAAqB;IACrB,qBAA0D;IAA1D,0DAA0D;EAC5D;;AACF,kCAAkC,YAAY;IAC1C,WAAW;IACX,WAAwC;IAAxC,wCAAwC;IACxC,yBAAyB;IACzB,yBAAoD;IAApD,oDAAoD;IACpD,qBAAqB;IACrB,qBAAoD;IAApD,oDAAoD,EAAE,qBAAqB;EAC7E;;AACF;IACI,+CAA+C;EACjD;;AACF;;IAEI,WAAW;IACX,WAAwC;IAAxC,wCAAwC;IACxC,yBAAyB;IACzB,yBAA2D;IAA3D,2DAA2D;IAC3D,qBAAqB;IACrB,qBAA2D;IAA3D,2DAA2D;EAC7D;;AACF;;IAEI,+CAA+C;EACjD;;AACF;;EAEE,yBAAyB;;AAE3B;;AACA;IACI,sBAAsB;IACtB,gBAAgB,EAAE,gGAAgG;EACpH;;AACF;IACI,kBAAkB;IAClB,oBAAoB;IACpB,sBAAsB;EACxB;;AACF;IACI,kBAAkB;IAClB,cAAc;EAChB;;AACF;IACI,UAAU;EACZ;;AACF;;;IAGI,UAAU;EACZ;;AACF;IACI,iBAAiB;IACjB,yBAAyB;IACzB,4BAA4B;EAC9B;;AACF;IACI,0BAA0B;IAC1B,6BAA6B;EAC/B;;AACF;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,6BAA6B;EAC/B;;AACF;IACI,yBAAyB;IACzB,4BAA4B;EAC9B;;AACF;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;EACrB;;AACF;IACI,oBAAoB;EACtB;;AACF;IACI,iBAAiB;EACnB;;AACF;IACI,iBAAiB;IACjB,SAAS;EACX;;AACF;IACI,kBAAkB,EAAE,kBAAkB;EACxC;;AACF;IACI,mBAAmB,EAAE,kBAAkB;EACzC;;AACF,oCAAoC,0EAA0E;IAC1G,2BAA2B;EAC7B;;AACF;IACI,iCAAiC;IACjC,kBAAkB,EAAE,uCAAuC;EAC7D;;AACF;IACI,YAAY;EACd;;AACF;IACI,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,OAAO;IACP,SAAS;EACX;;AACF;IACI,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;MACZ,uFAAuF;MACvF,iCAAiC;EACrC;;AACF;IACI,YAAY;EACd;;AACF,wDAAwD,oBAAoB;IACxE,cAAc;EAChB;;AACF;IACI,sBAAsB;IACtB,sBAA8C;IAA9C,8CAA8C,EAAE,+BAA+B;EACjF;;AACF;+BAC+B,+BAA+B;MACxD,WAAW,EAAE,0CAA0C;MACvD,mBAAmB;IACrB;;AACJ,2BAA2B,iBAAiB;MACtC,wBAAwB;MACxB,yBAAyB;MACzB,0BAA0B;IAC5B;;AACJ;;IAEI,yBAAyB;IACzB,qBAAqB;IACrB,sBAAsB;;EAExB;;AACF;IACI,YAAY;EACd;;AACF,6BAA6B,WAAW;IACpC,UAAU,EAAE,+BAA+B;;EAE7C;;AACF;MACM,WAAW,EAAE,wEAAwE;IACvF;;AACJ;MACM,WAAW;QACT,+FAA+F;QAC/F,qCAAqC;IACzC;;AACJ;IACI;;EAEF;;AACF;MACM,YAAY,EAAE,oCAAoC;IACpD;;AACJ;IACI,mBAAmB;IACnB,oBAAoB;EACtB;;AACF;;IAEI,sBAAsB;EACxB;;AACF;;IAEI,2BAA2B,EAAE,qCAAqC;EACpE;;AACF;;EAEE,eAAe;;AAEjB;;AACA;IACI,gBAAgB;IAChB,gBAAyC;IAAzC,yCAAyC;IACzC,wBAAwB;IACxB,gBAAgB;IAChB,UAAU,EAAE,cAAc;IAC1B,mCAAmC;EACrC;;AACF;IACI,MAAM,EAAE,mDAAmD;MACzD,kCAAkC;EACtC;;AACF;IACI,SAAS,EAAE,wDAAwD;EACrE;;AACF,iCAAiC,6BAA6B;IAC1D,WAAW,EAAE,sCAAsC;IACnD,mBAAmB;EACrB;;AACF,aAAa,8CAA8C;EACzD,wBAAwB;EACxB,gBAAgB;AAClB;;AACA;IACI,YAAY,EAAE,qDAAqD;IACnE,kBAAkB;EACpB;;AACF;;EAEE,+DAA+D;;AAEjE;;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;EACT;;AACF;IACI,qBAAqB,EAAE,uDAAuD;IAC9E,gBAAgB;EAClB;;AACF;;;IAGI,qFAAqF;IACrF,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;EACX;;AACF;IACI,oCAAoC;IACpC,oCAAkE;IAAlE,kEAAkE;EACpE;;AACF;IACI,8BAA8B;IAC9B,8BAAwD;IAAxD,wDAAwD;IACxD,YAAY;IACZ,YAAuC;IAAvC;EACF;;AACF;MACM,YAAY;MACZ,gBAAgB;MAChB,gBAA2C;MAA3C,2CAA2C;MAC3C,kBAAkB;IACpB;;AACJ;IACI,oCAAoC;IACpC,oCAA+D;IAA/D,+DAA+D;EACjE;;AACF;;IAEI,oCAAoC;IACpC,oCAAgE;IAAhE,gEAAgE;EAClE;;AACF,gBAAgB;;AAChB,yGAAyG;;AACzG;;EAEE,qBAAqB;AACvB;;AACA,WAAW;;AACX;;EAEE,eAAe;AACjB;;AACA,uBAAuB;;AACvB,yGAAyG;;AACzG;IACI,kBAAkB;IAClB,UAAU;EACZ;;AACF,aAAa;;AACb,yGAAyG;;AACzG,6CAA6C,UAAU;IACnD,aAAa;EACf;;AACF,uCAAuC,UAAU;IAC7C,wCAAwC;EAC1C;;AACF,aAAa;;AACb,yGAAyG;;AACzG,iEAAiE;;AACjE;IACI,aAAa;IACb,kBAAkB;IAClB,UAAU;EACZ;;AACF;qBACqB,UAAU;;AAE/B;;AACA;IACI,cAAc;EAChB;;AACF;IACI,kBAAkB;IAClB,4BAAqE;IAArE,qEAAqE;IACrE,iBAAiB;IACjB,iBAA2D;IAA3D,2DAA2D;IAC3D,UAAU;IACV,UAAmD;IAAnD,mDAAmD;IACnD,WAAW;IACX,WAAoD;IAApD,oDAAoD;IACpD,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;IAChB,gBAAwC;IAAxC,wCAAwC;;IAExC,oBAAoB;;EAEtB;;AACF;MACM,WAAW;MACX,kBAAkB;MAClB,UAAU;MACV,WAAW;MACX,YAAY;MACZ,aAAa;IACf;;AACJ,6BAA6B;;AAC7B,yGAAyG;;AACzG;EACE,uCAAuC;;EAEvC,+CAA+C;;AAEjD;;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;EACX;;AACF;;EAEE,kBAAkB;;AAEpB;;AACA;IACI,WAAW;IACX,+BAA+B;IAC/B,+BAAuE;IAAvE,uEAAuE;IACvE,kBAAkB;IAClB,UAAU;;IAEV,uDAAuD;IACvD,0EAA0E;IAC1E,0CAA0C;IAC1C,SAAS;IACT,UAAU;IACV,WAAW;IACX,YAAY;EACd;;AACF;;CAEC;;AACD,cAAc,4BAA4B;EACxC,cAAc;EACd,yBAAyB;EACzB,yBAAuD;EAAvD,uDAAuD;EACvD,yBAAyB;EACzB,yBAAkD;EAAlD;;AAEF;;AACA;IACI,WAAW;IACX,WAAuC;IAAvC,uCAAuC;EACzC;;AACF;IACI,aAAa,EAAE,6CAA6C;EAC9D;;AACF;IACI,eAAe,EAAE,kCAAkC;IACnD,gBAAgB;EAClB;;AACF,wCAAwC,iDAAiD;IACrF,YAAY;IACZ,cAAc;IACd,YAAY,EAAE,iDAAiD;EACjE;;AACF;IACI,qBAAqB,EAAE,yCAAyC;IAChE,mBAAmB,EAAE,mCAAmC;IACxD,OAAO,GAAG,eAAe;IACzB,QAAQ,EAAE,eAAe;IACzB,eAAe,EAAE,kCAAkC;IACnD,gBAAgB;EAClB;;AACF;IACI,oBAAoB;IACpB,UAAU;IACV,aAAa;EACf;;AACF,wEAAwE;;AACxE;;EAEE,yBAAyB;EACzB,4BAA4B;EAC5B,oBAAoB;AACtB;;AACA;;EAEE,0BAA0B;EAC1B,6BAA6B;EAC7B,qBAAqB;AACvB;;AACA,aAAa;;AACb;EACE,MAAM;EACN,SAAS;EACT,UAAU;EACV,UAA6C;EAA7C,6CAA6C;AAC/C;;AACA;;EAEE,gBAAgB;EAChB,UAAU;EACV,oBAAuD;EAAvD,uDAAuD;AACzD;;AACA;;EAEE,gBAAgB;EAChB,WAAW;EACX,qBAAwD;EAAxD,wDAAwD;AAC1D;;AACA,uBAAuB;;AACvB;EACE,QAAQ;EACR,gBAAgB;EAChB,0BAAmE;EAAnE,mEAAmE;AACrE;;AACA;;EAEE,UAAU;EACV,oBAA6D;EAA7D,6DAA6D;AAC/D;;AACA;;EAEE,WAAW;EACX,qBAA8D;EAA9D,8DAA8D;AAChE","file":"main.css","sourcesContent":["\n/* classes attached to <body> */\n\n.fc-not-allowed,\n.fc-not-allowed .fc-event { /* override events' custom cursors */\n  cursor: not-allowed;\n}\n\n.fc-unselectable {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.fc {\n  /* layout of immediate children */\n  display: flex;\n  flex-direction: column;\n\n  font-size: 1em\n}\n.fc,\n  .fc *,\n  .fc *:before,\n  .fc *:after {\n    box-sizing: border-box;\n  }\n.fc table {\n    border-collapse: collapse;\n    border-spacing: 0;\n    font-size: 1em; /* normalize cross-browser */\n  }\n.fc th {\n    text-align: center;\n  }\n.fc th,\n  .fc td {\n    vertical-align: top;\n    padding: 0;\n  }\n.fc a[data-navlink] {\n    cursor: pointer;\n  }\n.fc a[data-navlink]:hover {\n    text-decoration: underline;\n  }\n.fc-direction-ltr {\n  direction: ltr;\n  text-align: left;\n}\n.fc-direction-rtl {\n  direction: rtl;\n  text-align: right;\n}\n.fc-theme-standard td,\n  .fc-theme-standard th {\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n  }\n/* for FF, which doesn't expand a 100% div within a table cell. use absolute positioning */\n/* inner-wrappers are responsible for being absolute */\n/* TODO: best place for this? */\n.fc-liquid-hack td,\n  .fc-liquid-hack th {\n    position: relative;\n  }\n\n@font-face {\n  font-family: 'fcicons';\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n.fc-icon {\n  /* added for fc */\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'fcicons' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.fc-icon-chevron-left:before {\n  content: \"\\e900\";\n}\n\n.fc-icon-chevron-right:before {\n  content: \"\\e901\";\n}\n\n.fc-icon-chevrons-left:before {\n  content: \"\\e902\";\n}\n\n.fc-icon-chevrons-right:before {\n  content: \"\\e903\";\n}\n\n.fc-icon-minus-square:before {\n  content: \"\\e904\";\n}\n\n.fc-icon-plus-square:before {\n  content: \"\\e905\";\n}\n\n.fc-icon-x:before {\n  content: \"\\e906\";\n}\n/*\nLots taken from Flatly (MIT): https://bootswatch.com/4/flatly/bootstrap.css\n\nThese styles only apply when the standard-theme is activated.\nWhen it's NOT activated, the fc-button classes won't even be in the DOM.\n*/\n.fc {\n\n  /* reset */\n\n}\n.fc .fc-button {\n    border-radius: 0;\n    overflow: visible;\n    text-transform: none;\n    margin: 0;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n  }\n.fc .fc-button:focus {\n    outline: 1px dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n.fc .fc-button {\n    -webkit-appearance: button;\n  }\n.fc .fc-button:not(:disabled) {\n    cursor: pointer;\n  }\n.fc .fc-button::-moz-focus-inner {\n    padding: 0;\n    border-style: none;\n  }\n.fc {\n\n  /* theme */\n\n}\n.fc .fc-button {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    vertical-align: middle;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    background-color: transparent;\n    border: 1px solid transparent;\n    padding: 0.4em 0.65em;\n    font-size: 1em;\n    line-height: 1.5;\n    border-radius: 0.25em;\n  }\n.fc .fc-button:hover {\n    text-decoration: none;\n  }\n.fc .fc-button:focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);\n  }\n.fc .fc-button:disabled {\n    opacity: 0.65;\n  }\n.fc {\n\n  /* \"primary\" coloring */\n\n}\n.fc .fc-button-primary {\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #2C3E50;\n    background-color: var(--fc-button-bg-color, #2C3E50);\n    border-color: #2C3E50;\n    border-color: var(--fc-button-border-color, #2C3E50);\n  }\n.fc .fc-button-primary:hover {\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #1e2b37;\n    background-color: var(--fc-button-hover-bg-color, #1e2b37);\n    border-color: #1a252f;\n    border-color: var(--fc-button-hover-border-color, #1a252f);\n  }\n.fc .fc-button-primary:disabled { /* not DRY */\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #2C3E50;\n    background-color: var(--fc-button-bg-color, #2C3E50);\n    border-color: #2C3E50;\n    border-color: var(--fc-button-border-color, #2C3E50); /* overrides :hover */\n  }\n.fc .fc-button-primary:focus {\n    box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  }\n.fc .fc-button-primary:not(:disabled):active,\n  .fc .fc-button-primary:not(:disabled).fc-button-active {\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #1a252f;\n    background-color: var(--fc-button-active-bg-color, #1a252f);\n    border-color: #151e27;\n    border-color: var(--fc-button-active-border-color, #151e27);\n  }\n.fc .fc-button-primary:not(:disabled):active:focus,\n  .fc .fc-button-primary:not(:disabled).fc-button-active:focus {\n    box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  }\n.fc {\n\n  /* icons within buttons */\n\n}\n.fc .fc-button .fc-icon {\n    vertical-align: middle;\n    font-size: 1.5em; /* bump up the size (but don't make it bigger than line-height of button, which is 1.5em also) */\n  }\n.fc .fc-button-group {\n    position: relative;\n    display: inline-flex;\n    vertical-align: middle;\n  }\n.fc .fc-button-group > .fc-button {\n    position: relative;\n    flex: 1 1 auto;\n  }\n.fc .fc-button-group > .fc-button:hover {\n    z-index: 1;\n  }\n.fc .fc-button-group > .fc-button:focus,\n  .fc .fc-button-group > .fc-button:active,\n  .fc .fc-button-group > .fc-button.fc-button-active {\n    z-index: 1;\n  }\n.fc-direction-ltr .fc-button-group > .fc-button:not(:first-child) {\n    margin-left: -1px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n.fc-direction-ltr .fc-button-group > .fc-button:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n.fc-direction-rtl .fc-button-group > .fc-button:not(:first-child) {\n    margin-right: -1px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n.fc-direction-rtl .fc-button-group > .fc-button:not(:last-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n.fc .fc-toolbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n.fc .fc-toolbar.fc-header-toolbar {\n    margin-bottom: 1.5em;\n  }\n.fc .fc-toolbar.fc-footer-toolbar {\n    margin-top: 1.5em;\n  }\n.fc .fc-toolbar-title {\n    font-size: 1.75em;\n    margin: 0;\n  }\n.fc-direction-ltr .fc-toolbar > * > :not(:first-child) {\n    margin-left: .75em; /* space between */\n  }\n.fc-direction-rtl .fc-toolbar > * > :not(:first-child) {\n    margin-right: .75em; /* space between */\n  }\n.fc-direction-rtl .fc-toolbar-ltr { /* when the toolbar-chunk positioning system is explicitly left-to-right */\n    flex-direction: row-reverse;\n  }\n.fc .fc-scroller {\n    -webkit-overflow-scrolling: touch;\n    position: relative; /* for abs-positioned elements within */\n  }\n.fc .fc-scroller-liquid {\n    height: 100%;\n  }\n.fc .fc-scroller-liquid-absolute {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n  }\n.fc .fc-scroller-harness {\n    position: relative;\n    overflow: hidden;\n    direction: ltr;\n      /* hack for chrome computing the scroller's right/left wrong for rtl. undone below... */\n      /* TODO: demonstrate in codepen */\n  }\n.fc .fc-scroller-harness-liquid {\n    height: 100%;\n  }\n.fc-direction-rtl .fc-scroller-harness > .fc-scroller { /* undo above hack */\n    direction: rtl;\n  }\n.fc-theme-standard .fc-scrollgrid {\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd); /* bootstrap does this. match */\n  }\n.fc .fc-scrollgrid,\n    .fc .fc-scrollgrid table { /* all tables (self included) */\n      width: 100%; /* because tables don't normally do this */\n      table-layout: fixed;\n    }\n.fc .fc-scrollgrid table { /* inner tables */\n      border-top-style: hidden;\n      border-left-style: hidden;\n      border-right-style: hidden;\n    }\n.fc .fc-scrollgrid {\n\n    border-collapse: separate;\n    border-right-width: 0;\n    border-bottom-width: 0;\n\n  }\n.fc .fc-scrollgrid-liquid {\n    height: 100%;\n  }\n.fc .fc-scrollgrid-section { /* a <tr> */\n    height: 1px /* better than 0, for firefox */\n\n  }\n.fc .fc-scrollgrid-section > td {\n      height: 1px; /* needs a height so inner div within grow. better than 0, for firefox */\n    }\n.fc .fc-scrollgrid-section table {\n      height: 1px;\n        /* for most browsers, if a height isn't set on the table, can't do liquid-height within cells */\n        /* serves as a min-height. harmless */\n    }\n.fc .fc-scrollgrid-section-liquid {\n    height: auto\n\n  }\n.fc .fc-scrollgrid-section-liquid > td {\n      height: 100%; /* better than `auto`, for firefox */\n    }\n.fc .fc-scrollgrid-section > * {\n    border-top-width: 0;\n    border-left-width: 0;\n  }\n.fc .fc-scrollgrid-section-header > *,\n  .fc .fc-scrollgrid-section-footer > * {\n    border-bottom-width: 0;\n  }\n.fc .fc-scrollgrid-section-body table,\n  .fc .fc-scrollgrid-section-footer table {\n    border-bottom-style: hidden; /* head keeps its bottom border tho */\n  }\n.fc {\n\n  /* stickiness */\n\n}\n.fc .fc-scrollgrid-section-sticky > * {\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff);\n    position: -webkit-sticky;\n    position: sticky;\n    z-index: 2; /* TODO: var */\n    /* TODO: box-shadow when sticking */\n  }\n.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky > * {\n    top: 0; /* because border-sharing causes a gap at the top */\n      /* TODO: give safari -1. has bug */\n  }\n.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky > * {\n    bottom: 0; /* known bug: bottom-stickiness doesn't work in safari */\n  }\n.fc .fc-scrollgrid-sticky-shim { /* for horizontal scrollbar */\n    height: 1px; /* needs height to create scrollbars */\n    margin-bottom: -1px;\n  }\n.fc-sticky { /* no .fc wrap because used as child of body */\n  position: -webkit-sticky;\n  position: sticky;\n}\n.fc .fc-view-harness {\n    flex-grow: 1; /* because this harness is WITHIN the .fc's flexbox */\n    position: relative;\n  }\n.fc {\n\n  /* when the harness controls the height, make the view liquid */\n\n}\n.fc .fc-view-harness-active > .fc-view {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n.fc .fc-col-header-cell-cushion {\n    display: inline-block; /* x-browser for when sticky (when multi-tier header) */\n    padding: 2px 4px;\n  }\n.fc .fc-bg-event,\n  .fc .fc-non-business,\n  .fc .fc-highlight {\n    /* will always have a harness with position:relative/absolute, so absolutely expand */\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n.fc .fc-non-business {\n    background: rgba(215, 215, 215, 0.3);\n    background: var(--fc-non-business-color, rgba(215, 215, 215, 0.3));\n  }\n.fc .fc-bg-event {\n    background: rgb(143, 223, 130);\n    background: var(--fc-bg-event-color, rgb(143, 223, 130));\n    opacity: 0.3;\n    opacity: var(--fc-bg-event-opacity, 0.3)\n  }\n.fc .fc-bg-event .fc-event-title {\n      margin: .5em;\n      font-size: .85em;\n      font-size: var(--fc-small-font-size, .85em);\n      font-style: italic;\n    }\n.fc .fc-highlight {\n    background: rgba(188, 232, 241, 0.3);\n    background: var(--fc-highlight-color, rgba(188, 232, 241, 0.3));\n  }\n.fc .fc-cell-shaded,\n  .fc .fc-day-disabled {\n    background: rgba(208, 208, 208, 0.3);\n    background: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n/* link resets */\n/* ---------------------------------------------------------------------------------------------------- */\na.fc-event,\na.fc-event:hover {\n  text-decoration: none;\n}\n/* cursor */\n.fc-event[href],\n.fc-event.fc-event-draggable {\n  cursor: pointer;\n}\n/* event text content */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event .fc-event-main {\n    position: relative;\n    z-index: 2;\n  }\n/* dragging */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event-dragging:not(.fc-event-selected) { /* MOUSE */\n    opacity: 0.75;\n  }\n.fc-event-dragging.fc-event-selected { /* TOUCH */\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);\n  }\n/* resizing */\n/* ---------------------------------------------------------------------------------------------------- */\n/* (subclasses should hone positioning for touch and non-touch) */\n.fc-event .fc-event-resizer {\n    display: none;\n    position: absolute;\n    z-index: 4;\n  }\n.fc-event:hover, /* MOUSE */\n.fc-event-selected { /* TOUCH */\n\n}\n.fc-event:hover .fc-event-resizer, .fc-event-selected .fc-event-resizer {\n    display: block;\n  }\n.fc-event-selected .fc-event-resizer {\n    border-radius: 4px;\n    border-radius: calc(var(--fc-event-resizer-dot-total-width, 8px) / 2);\n    border-width: 1px;\n    border-width: var(--fc-event-resizer-dot-border-width, 1px);\n    width: 8px;\n    width: var(--fc-event-resizer-dot-total-width, 8px);\n    height: 8px;\n    height: var(--fc-event-resizer-dot-total-width, 8px);\n    border-style: solid;\n    border-color: inherit;\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff)\n\n    /* expand hit area */\n\n  }\n.fc-event-selected .fc-event-resizer:before {\n      content: '';\n      position: absolute;\n      top: -20px;\n      left: -20px;\n      right: -20px;\n      bottom: -20px;\n    }\n/* selecting (always TOUCH) */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event-selected {\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2)\n\n  /* expand hit area (subclasses should expand) */\n\n}\n.fc-event-selected:before {\n    content: \"\";\n    position: absolute;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n.fc-event-selected {\n\n  /* dimmer effect */\n\n}\n.fc-event-selected:after {\n    content: \"\";\n    background: rgba(0, 0, 0, 0.25);\n    background: var(--fc-event-selected-overlay-color, rgba(0, 0, 0, 0.25));\n    position: absolute;\n    z-index: 1;\n\n    /* assume there's a border on all sides. overcome it. */\n    /* sometimes there's NOT a border, in which case the dimmer will go over */\n    /* an adjacent border, which looks fine. */\n    top: -1px;\n    left: -1px;\n    right: -1px;\n    bottom: -1px;\n  }\n/*\nA HORIZONTAL event\n*/\n.fc-h-event { /* allowed to be top-level */\n  display: block;\n  border: 1px solid #3788d8;\n  border: 1px solid var(--fc-event-border-color, #3788d8);\n  background-color: #3788d8;\n  background-color: var(--fc-event-bg-color, #3788d8)\n\n}\n.fc-h-event .fc-event-main {\n    color: #fff;\n    color: var(--fc-event-text-color, #fff);\n  }\n.fc-h-event .fc-event-main-frame {\n    display: flex; /* for make fc-event-title-container expand */\n  }\n.fc-h-event .fc-event-time {\n    max-width: 100%; /* clip overflow on this element */\n    overflow: hidden;\n  }\n.fc-h-event .fc-event-title-container { /* serves as a container for the sticky cushion */\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0; /* important for allowing to shrink all the way */\n  }\n.fc-h-event .fc-event-title {\n    display: inline-block; /* need this to be sticky cross-browser */\n    vertical-align: top; /* for not messing up line-height */\n    left: 0;  /* for sticky */\n    right: 0; /* for sticky */\n    max-width: 100%; /* clip overflow on this element */\n    overflow: hidden;\n  }\n.fc-h-event.fc-event-selected:before {\n    /* expand hit area */\n    top: -10px;\n    bottom: -10px;\n  }\n/* adjust border and border-radius (if there is any) for non-start/end */\n.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),\n.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left-width: 0;\n}\n.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),\n.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right-width: 0;\n}\n/* resizers */\n.fc-h-event:not(.fc-event-selected) .fc-event-resizer {\n  top: 0;\n  bottom: 0;\n  width: 8px;\n  width: var(--fc-event-resizer-thickness, 8px);\n}\n.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,\n.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end {\n  cursor: w-resize;\n  left: -4px;\n  left: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n}\n.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,\n.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start {\n  cursor: e-resize;\n  right: -4px;\n  right: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n}\n/* resizers for TOUCH */\n.fc-h-event.fc-event-selected .fc-event-resizer {\n  top: 50%;\n  margin-top: -4px;\n  margin-top: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n}\n.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,\n.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end {\n  left: -4px;\n  left: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n}\n.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,\n.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start {\n  right: -4px;\n  right: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@fullcalendar/daygrid/main.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@fullcalendar/daygrid/main.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "\n:root {\n  --fc-daygrid-event-dot-width: 8px;\n}\n.fc .fc-popover {\n    position: fixed;\n    top: 0; /* for when not positioned yet */\n    box-shadow: 0 2px 6px rgba(0,0,0,.15);\n  }\n.fc .fc-popover-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 3px 4px;\n  }\n.fc .fc-popover-title {\n    margin: 0 2px;\n  }\n.fc .fc-popover-close {\n    cursor: pointer;\n    opacity: 0.65;\n    font-size: 1.1em;\n  }\n.fc-theme-standard .fc-popover {\n    border: 1px solid #ddd;\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n    background: #fff;\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff);\n  }\n.fc-theme-standard .fc-popover-header {\n    background: rgba(208, 208, 208, 0.3);\n    background: rgba(208, 208, 208, 0.3);\n    background: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n/* help things clear margins of inner content */\n.fc-daygrid-day-frame,\n.fc-daygrid-day-events,\n.fc-daygrid-event-harness { /* for event top/bottom margins */\n}\n.fc-daygrid-day-frame:before, .fc-daygrid-day-events:before, .fc-daygrid-event-harness:before {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc-daygrid-day-frame:after, .fc-daygrid-day-events:after, .fc-daygrid-event-harness:after {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc .fc-daygrid-body { /* a <div> that wraps the table */\n    position: relative;\n    z-index: 1; /* container inner z-index's because <tr>s can't do it */\n  }\n.fc .fc-daygrid-day.fc-day-today {\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: var(--fc-today-bg-color, rgba(255, 220, 40, 0.15));\n    }\n.fc .fc-daygrid-day-frame {\n    position: relative;\n    min-height: 100%; /* seems to work better than `height` because sets height after rows/cells naturally do it */\n  }\n.fc {\n\n  /* cell top */\n\n}\n.fc .fc-daygrid-day-top {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n.fc .fc-day-other .fc-daygrid-day-top {\n    opacity: 0.3;\n  }\n.fc {\n\n  /* day number (within cell top) */\n\n}\n.fc .fc-daygrid-day-number {\n    position: relative;\n    z-index: 4;\n    padding: 4px;\n  }\n.fc {\n\n  /* event container */\n\n}\n.fc .fc-daygrid-day-events {\n    margin-top: 1px; /* needs to be margin, not padding, so that available cell height can be computed */\n  }\n.fc {\n\n  /* positioning for balanced vs natural */\n\n}\n.fc .fc-daygrid-body-balanced .fc-daygrid-day-events {\n      position: absolute;\n      left: 0;\n      right: 0;\n    }\n.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {\n      position: relative; /* for containing abs positioned event harnesses */\n      min-height: 2em; /* in addition to being a min-height during natural height, equalizes the heights a little bit */\n    }\n.fc .fc-daygrid-body-natural { /* can coexist with -unbalanced */\n  }\n.fc .fc-daygrid-body-natural .fc-daygrid-day-events {\n      margin-bottom: 1em;\n    }\n.fc {\n\n  /* event harness */\n\n}\n.fc .fc-daygrid-event-harness {\n    position: relative;\n  }\n.fc .fc-daygrid-event-harness-abs {\n    position: absolute;\n    top: 0; /* fallback coords for when cannot yet be computed */\n    left: 0; /* */\n    right: 0; /* */\n  }\n.fc .fc-daygrid-bg-harness {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n  }\n.fc {\n\n  /* bg content */\n\n}\n.fc .fc-daygrid-day-bg .fc-non-business { z-index: 1 }\n.fc .fc-daygrid-day-bg .fc-bg-event { z-index: 2 }\n.fc .fc-daygrid-day-bg .fc-highlight { z-index: 3 }\n.fc {\n\n  /* events */\n\n}\n.fc .fc-daygrid-event {\n    z-index: 6;\n    margin-top: 1px;\n  }\n.fc .fc-daygrid-event.fc-event-mirror {\n    z-index: 7;\n  }\n.fc {\n\n  /* cell bottom (within day-events) */\n\n}\n.fc .fc-daygrid-day-bottom {\n    font-size: .85em;\n    margin: 2px 3px 0;\n  }\n.fc .fc-daygrid-more-link {\n    position: relative;\n    z-index: 4;\n    cursor: pointer;\n  }\n.fc {\n\n  /* week number (within frame) */\n\n}\n.fc .fc-daygrid-week-number {\n    position: absolute;\n    z-index: 5;\n    top: 0;\n    padding: 2px;\n    min-width: 1.5em;\n    text-align: center;\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n    color: #808080;\n    color: #808080;\n    color: var(--fc-neutral-text-color, #808080);\n  }\n.fc {\n\n  /* popover */\n\n}\n.fc .fc-more-popover {\n    z-index: 8;\n  }\n.fc .fc-more-popover .fc-popover-body {\n    min-width: 220px;\n    padding: 10px;\n  }\n.fc-direction-ltr .fc-daygrid-event.fc-event-start,\n.fc-direction-rtl .fc-daygrid-event.fc-event-end {\n  margin-left: 2px;\n}\n.fc-direction-ltr .fc-daygrid-event.fc-event-end,\n.fc-direction-rtl .fc-daygrid-event.fc-event-start {\n  margin-right: 2px;\n}\n.fc-direction-ltr .fc-daygrid-week-number {\n    left: 0;\n    border-radius: 0 0 3px 0;\n  }\n.fc-direction-rtl .fc-daygrid-week-number {\n    right: 0;\n    border-radius: 0 0 0 3px;\n  }\n.fc-liquid-hack .fc-daygrid-day-frame {\n    position: static; /* will cause inner absolute stuff to expand to <td> */\n  }\n.fc-daygrid-event { /* make root-level, because will be dragged-and-dropped outside of a component root */\n  position: relative; /* for z-indexes assigned later */\n  white-space: nowrap;\n  border-radius: 3px; /* dot event needs this to when selected */\n  font-size: .85em;\n  font-size: .85em;\n  font-size: var(--fc-small-font-size, .85em);\n}\n/* --- the rectangle (\"block\") style of event --- */\n.fc-daygrid-block-event .fc-event-time {\n    font-weight: bold;\n  }\n.fc-daygrid-block-event .fc-event-time,\n  .fc-daygrid-block-event .fc-event-title {\n    padding: 1px;\n  }\n/* --- the dot style of event --- */\n.fc-daygrid-dot-event {\n  display: flex;\n  align-items: center;\n  padding: 2px 0\n\n}\n.fc-daygrid-dot-event .fc-event-title {\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0; /* important for allowing to shrink all the way */\n    overflow: hidden;\n    font-weight: bold;\n  }\n.fc-daygrid-dot-event:hover,\n  .fc-daygrid-dot-event.fc-event-mirror {\n    background: rgba(0, 0, 0, 0.1);\n  }\n.fc-daygrid-dot-event.fc-event-selected:before {\n    /* expand hit area */\n    top: -10px;\n    bottom: -10px;\n  }\n.fc-daygrid-event-dot { /* the actual dot */\n  margin: 0 4px;\n  box-sizing: content-box;\n  width: 0;\n  height: 0;\n  border: 4px solid #3788d8;\n  border: calc(8px / 2) solid #3788d8;\n  border: calc(var(--fc-daygrid-event-dot-width, 8px) / 2) solid var(--fc-event-border-color, #3788d8);\n  border-radius: 4px;\n  border-radius: calc(8px / 2);\n  border-radius: calc(var(--fc-daygrid-event-dot-width, 8px) / 2);\n}\n/* --- spacing between time and title --- */\n.fc-direction-ltr .fc-daygrid-event .fc-event-time {\n    margin-right: 3px;\n  }\n.fc-direction-rtl .fc-daygrid-event .fc-event-time {\n    margin-left: 3px;\n  }\n", "",{"version":3,"sources":["main.css"],"names":[],"mappings":";AACA;EACE,iCAAiC;AACnC;AACA;IACI,eAAe;IACf,MAAM,EAAE,gCAAgC;IACxC,qCAAqC;EACvC;AACF;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;EAClB;AACF;IACI,aAAa;EACf;AACF;IACI,eAAe;IACf,aAAa;IACb,gBAAgB;EAClB;AACF;IACI,sBAAsB;IACtB,sBAA8C;IAA9C,8CAA8C;IAC9C,gBAAgB;IAChB,gBAAyC;IAAzC,yCAAyC;EAC3C;AACF;IACI,oCAAoC;IACpC,oCAAgE;IAAhE,gEAAgE;EAClE;AACF,+CAA+C;AAC/C;;4BAE4B,iCAAiC;AAC7D;AACA;EACE,WAAW;EACX,WAAW;EACX,cAAc,EAAE;AAClB;EACE,WAAW;EACX,WAAW;EACX,cAAc,EAAE;AAClB,uBAAuB,iCAAiC;IACpD,kBAAkB;IAClB,UAAU,EAAE,wDAAwD;EACtE;AACF;MACM,0CAA0C;MAC1C,0CAAoE;MAApE,oEAAoE;IACtE;AACJ;IACI,kBAAkB;IAClB,gBAAgB,EAAE,4FAA4F;EAChH;AACF;;EAEE,aAAa;;AAEf;AACA;IACI,aAAa;IACb,2BAA2B;EAC7B;AACF;IACI,YAAY;EACd;AACF;;EAEE,iCAAiC;;AAEnC;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;EACd;AACF;;EAEE,oBAAoB;;AAEtB;AACA;IACI,eAAe,EAAE,mFAAmF;EACtG;AACF;;EAEE,wCAAwC;;AAE1C;AACA;MACM,kBAAkB;MAClB,OAAO;MACP,QAAQ;IACV;AACJ;MACM,kBAAkB,EAAE,kDAAkD;MACtE,eAAe,EAAE,gGAAgG;IACnH;AACJ,+BAA+B,iCAAiC;EAC9D;AACF;MACM,kBAAkB;IACpB;AACJ;;EAEE,kBAAkB;;AAEpB;AACA;IACI,kBAAkB;EACpB;AACF;IACI,kBAAkB;IAClB,MAAM,EAAE,oDAAoD;IAC5D,OAAO,EAAE,IAAI;IACb,QAAQ,EAAE,IAAI;EAChB;AACF;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;EACX;AACF;;EAEE,eAAe;;AAEjB;AACA,0CAA0C,WAAW;AACrD,sCAAsC,WAAW;AACjD,uCAAuC,WAAW;AAClD;;EAEE,WAAW;;AAEb;AACA;IACI,UAAU;IACV,eAAe;EACjB;AACF;IACI,UAAU;EACZ;AACF;;EAEE,oCAAoC;;AAEtC;AACA;IACI,gBAAgB;IAChB,iBAAiB;EACnB;AACF;IACI,kBAAkB;IAClB,UAAU;IACV,eAAe;EACjB;AACF;;EAEE,+BAA+B;;AAEjC;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,MAAM;IACN,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,0CAA0C;IAC1C,0CAAsE;IAAtE,sEAAsE;IACtE,cAAc;IACd,cAA4C;IAA5C,4CAA4C;EAC9C;AACF;;EAEE,YAAY;;AAEd;AACA;IACI,UAAU;EACZ;AACF;IACI,gBAAgB;IAChB,aAAa;EACf;AACF;;EAEE,gBAAgB;AAClB;AACA;;EAEE,iBAAiB;AACnB;AACA;IACI,OAAO;IACP,wBAAwB;EAC1B;AACF;IACI,QAAQ;IACR,wBAAwB;EAC1B;AACF;IACI,gBAAgB,EAAE,sDAAsD;EAC1E;AACF,oBAAoB,qFAAqF;EACvG,kBAAkB,EAAE,iCAAiC;EACrD,mBAAmB;EACnB,kBAAkB,EAAE,0CAA0C;EAC9D,gBAAgB;EAChB,gBAA2C;EAA3C,2CAA2C;AAC7C;AACA,mDAAmD;AACnD;IACI,iBAAiB;EACnB;AACF;;IAEI,YAAY;EACd;AACF,mCAAmC;AACnC;EACE,aAAa;EACb,mBAAmB;EACnB;;AAEF;AACA;IACI,YAAY;IACZ,cAAc;IACd,YAAY,EAAE,iDAAiD;IAC/D,gBAAgB;IAChB,iBAAiB;EACnB;AACF;;IAEI,8BAA8B;EAChC;AACF;IACI,oBAAoB;IACpB,UAAU;IACV,aAAa;EACf;AACF,wBAAwB,mBAAmB;EACzC,aAAa;EACb,uBAAuB;EACvB,QAAQ;EACR,SAAS;EACT,yBAAyB;EACzB,mCAAoG;EAApG,oGAAoG;EACpG,kBAAkB;EAClB,4BAA+D;EAA/D,+DAA+D;AACjE;AACA,2CAA2C;AAC3C;IACI,iBAAiB;EACnB;AACF;IACI,gBAAgB;EAClB","file":"main.css","sourcesContent":["\n:root {\n  --fc-daygrid-event-dot-width: 8px;\n}\n.fc .fc-popover {\n    position: fixed;\n    top: 0; /* for when not positioned yet */\n    box-shadow: 0 2px 6px rgba(0,0,0,.15);\n  }\n.fc .fc-popover-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 3px 4px;\n  }\n.fc .fc-popover-title {\n    margin: 0 2px;\n  }\n.fc .fc-popover-close {\n    cursor: pointer;\n    opacity: 0.65;\n    font-size: 1.1em;\n  }\n.fc-theme-standard .fc-popover {\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff);\n  }\n.fc-theme-standard .fc-popover-header {\n    background: rgba(208, 208, 208, 0.3);\n    background: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n/* help things clear margins of inner content */\n.fc-daygrid-day-frame,\n.fc-daygrid-day-events,\n.fc-daygrid-event-harness { /* for event top/bottom margins */\n}\n.fc-daygrid-day-frame:before, .fc-daygrid-day-events:before, .fc-daygrid-event-harness:before {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc-daygrid-day-frame:after, .fc-daygrid-day-events:after, .fc-daygrid-event-harness:after {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc .fc-daygrid-body { /* a <div> that wraps the table */\n    position: relative;\n    z-index: 1; /* container inner z-index's because <tr>s can't do it */\n  }\n.fc .fc-daygrid-day.fc-day-today {\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: var(--fc-today-bg-color, rgba(255, 220, 40, 0.15));\n    }\n.fc .fc-daygrid-day-frame {\n    position: relative;\n    min-height: 100%; /* seems to work better than `height` because sets height after rows/cells naturally do it */\n  }\n.fc {\n\n  /* cell top */\n\n}\n.fc .fc-daygrid-day-top {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n.fc .fc-day-other .fc-daygrid-day-top {\n    opacity: 0.3;\n  }\n.fc {\n\n  /* day number (within cell top) */\n\n}\n.fc .fc-daygrid-day-number {\n    position: relative;\n    z-index: 4;\n    padding: 4px;\n  }\n.fc {\n\n  /* event container */\n\n}\n.fc .fc-daygrid-day-events {\n    margin-top: 1px; /* needs to be margin, not padding, so that available cell height can be computed */\n  }\n.fc {\n\n  /* positioning for balanced vs natural */\n\n}\n.fc .fc-daygrid-body-balanced .fc-daygrid-day-events {\n      position: absolute;\n      left: 0;\n      right: 0;\n    }\n.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {\n      position: relative; /* for containing abs positioned event harnesses */\n      min-height: 2em; /* in addition to being a min-height during natural height, equalizes the heights a little bit */\n    }\n.fc .fc-daygrid-body-natural { /* can coexist with -unbalanced */\n  }\n.fc .fc-daygrid-body-natural .fc-daygrid-day-events {\n      margin-bottom: 1em;\n    }\n.fc {\n\n  /* event harness */\n\n}\n.fc .fc-daygrid-event-harness {\n    position: relative;\n  }\n.fc .fc-daygrid-event-harness-abs {\n    position: absolute;\n    top: 0; /* fallback coords for when cannot yet be computed */\n    left: 0; /* */\n    right: 0; /* */\n  }\n.fc .fc-daygrid-bg-harness {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n  }\n.fc {\n\n  /* bg content */\n\n}\n.fc .fc-daygrid-day-bg .fc-non-business { z-index: 1 }\n.fc .fc-daygrid-day-bg .fc-bg-event { z-index: 2 }\n.fc .fc-daygrid-day-bg .fc-highlight { z-index: 3 }\n.fc {\n\n  /* events */\n\n}\n.fc .fc-daygrid-event {\n    z-index: 6;\n    margin-top: 1px;\n  }\n.fc .fc-daygrid-event.fc-event-mirror {\n    z-index: 7;\n  }\n.fc {\n\n  /* cell bottom (within day-events) */\n\n}\n.fc .fc-daygrid-day-bottom {\n    font-size: .85em;\n    margin: 2px 3px 0;\n  }\n.fc .fc-daygrid-more-link {\n    position: relative;\n    z-index: 4;\n    cursor: pointer;\n  }\n.fc {\n\n  /* week number (within frame) */\n\n}\n.fc .fc-daygrid-week-number {\n    position: absolute;\n    z-index: 5;\n    top: 0;\n    padding: 2px;\n    min-width: 1.5em;\n    text-align: center;\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n    color: #808080;\n    color: var(--fc-neutral-text-color, #808080);\n  }\n.fc {\n\n  /* popover */\n\n}\n.fc .fc-more-popover {\n    z-index: 8;\n  }\n.fc .fc-more-popover .fc-popover-body {\n    min-width: 220px;\n    padding: 10px;\n  }\n.fc-direction-ltr .fc-daygrid-event.fc-event-start,\n.fc-direction-rtl .fc-daygrid-event.fc-event-end {\n  margin-left: 2px;\n}\n.fc-direction-ltr .fc-daygrid-event.fc-event-end,\n.fc-direction-rtl .fc-daygrid-event.fc-event-start {\n  margin-right: 2px;\n}\n.fc-direction-ltr .fc-daygrid-week-number {\n    left: 0;\n    border-radius: 0 0 3px 0;\n  }\n.fc-direction-rtl .fc-daygrid-week-number {\n    right: 0;\n    border-radius: 0 0 0 3px;\n  }\n.fc-liquid-hack .fc-daygrid-day-frame {\n    position: static; /* will cause inner absolute stuff to expand to <td> */\n  }\n.fc-daygrid-event { /* make root-level, because will be dragged-and-dropped outside of a component root */\n  position: relative; /* for z-indexes assigned later */\n  white-space: nowrap;\n  border-radius: 3px; /* dot event needs this to when selected */\n  font-size: .85em;\n  font-size: var(--fc-small-font-size, .85em);\n}\n/* --- the rectangle (\"block\") style of event --- */\n.fc-daygrid-block-event .fc-event-time {\n    font-weight: bold;\n  }\n.fc-daygrid-block-event .fc-event-time,\n  .fc-daygrid-block-event .fc-event-title {\n    padding: 1px;\n  }\n/* --- the dot style of event --- */\n.fc-daygrid-dot-event {\n  display: flex;\n  align-items: center;\n  padding: 2px 0\n\n}\n.fc-daygrid-dot-event .fc-event-title {\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0; /* important for allowing to shrink all the way */\n    overflow: hidden;\n    font-weight: bold;\n  }\n.fc-daygrid-dot-event:hover,\n  .fc-daygrid-dot-event.fc-event-mirror {\n    background: rgba(0, 0, 0, 0.1);\n  }\n.fc-daygrid-dot-event.fc-event-selected:before {\n    /* expand hit area */\n    top: -10px;\n    bottom: -10px;\n  }\n.fc-daygrid-event-dot { /* the actual dot */\n  margin: 0 4px;\n  box-sizing: content-box;\n  width: 0;\n  height: 0;\n  border: 4px solid #3788d8;\n  border: calc(var(--fc-daygrid-event-dot-width, 8px) / 2) solid var(--fc-event-border-color, #3788d8);\n  border-radius: 4px;\n  border-radius: calc(var(--fc-daygrid-event-dot-width, 8px) / 2);\n}\n/* --- spacing between time and title --- */\n.fc-direction-ltr .fc-daygrid-event .fc-event-time {\n    margin-right: 3px;\n  }\n.fc-direction-rtl .fc-daygrid-event .fc-event-time {\n    margin-left: 3px;\n  }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@fullcalendar/timegrid/main.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@fullcalendar/timegrid/main.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "\n/*\nA VERTICAL event\n*/\n\n.fc-v-event { /* allowed to be top-level */\n  display: block;\n  border: 1px solid #3788d8;\n  border: 1px solid #3788d8;\n  border: 1px solid var(--fc-event-border-color, #3788d8);\n  background-color: #3788d8;\n  background-color: #3788d8;\n  background-color: var(--fc-event-bg-color, #3788d8)\n\n}\n\n.fc-v-event .fc-event-main {\n    color: #fff;\n    color: #fff;\n    color: var(--fc-event-text-color, #fff);\n    height: 100%;\n  }\n\n.fc-v-event .fc-event-main-frame {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n\n.fc-v-event .fc-event-time {\n    flex-grow: 0;\n    flex-shrink: 0;\n    max-height: 100%;\n    overflow: hidden;\n  }\n\n.fc-v-event .fc-event-title-container { /* a container for the sticky cushion */\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-height: 0; /* important for allowing to shrink all the way */\n  }\n\n.fc-v-event .fc-event-title { /* will have fc-sticky on it */\n    top: 0;\n    bottom: 0;\n    max-height: 100%; /* clip overflow */\n    overflow: hidden;\n  }\n\n.fc-v-event:not(.fc-event-start) {\n    border-top-width: 0;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n\n.fc-v-event:not(.fc-event-end) {\n    border-bottom-width: 0;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n.fc-v-event.fc-event-selected:before {\n    /* expand hit area */\n    left: -10px;\n    right: -10px;\n  }\n\n.fc-v-event {\n\n  /* resizer (mouse AND touch) */\n\n}\n\n.fc-v-event .fc-event-resizer-start {\n    cursor: n-resize;\n  }\n\n.fc-v-event .fc-event-resizer-end {\n    cursor: s-resize;\n  }\n\n.fc-v-event {\n\n  /* resizer for MOUSE */\n\n}\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer {\n      height: 8px;\n      height: 8px;\n      height: var(--fc-event-resizer-thickness, 8px);\n      left: 0;\n      right: 0;\n    }\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start {\n      top: -4px;\n      top: calc(8px / -2);\n      top: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n    }\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end {\n      bottom: -4px;\n      bottom: calc(8px / -2);\n      bottom: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n    }\n\n.fc-v-event {\n\n  /* resizer for TOUCH (when event is \"selected\") */\n\n}\n\n.fc-v-event.fc-event-selected .fc-event-resizer {\n      left: 50%;\n      margin-left: -4px;\n      margin-left: calc(8px / -2);\n      margin-left: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n    }\n\n.fc-v-event.fc-event-selected .fc-event-resizer-start {\n      top: -4px;\n      top: calc(8px / -2);\n      top: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n    }\n\n.fc-v-event.fc-event-selected .fc-event-resizer-end {\n      bottom: -4px;\n      bottom: calc(8px / -2);\n      bottom: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n    }\n\n.fc .fc-timegrid .fc-daygrid-body { /* the all-day daygrid within the timegrid view */\n    z-index: 2; /* put above the timegrid-body so that more-popover is above everything. TODO: better solution */\n  }\n\n.fc .fc-timegrid-divider {\n    padding: 0 0 2px; /* browsers get confused when you set height. use padding instead */\n  }\n\n.fc .fc-timegrid-body {\n    position: relative;\n    z-index: 1; /* scope the z-indexes of slots and cols */\n    min-height: 100%; /* fill height always, even when slat table doesn't grow */\n  }\n\n.fc .fc-timegrid-axis-chunk { /* for advanced ScrollGrid */\n    position: relative /* offset parent for now-indicator-container */\n\n  }\n\n.fc .fc-timegrid-axis-chunk > table {\n      position: relative;\n      z-index: 1; /* above the now-indicator-container */\n    }\n\n.fc .fc-timegrid-slots {\n    position: relative;\n    z-index: 1;\n  }\n\n.fc .fc-timegrid-slot { /* a <td> */\n    height: 1.5em;\n    border-bottom: 0 /* each cell owns its top border */\n  }\n\n.fc .fc-timegrid-slot:empty:before {\n      content: '\\00a0'; /* make sure there's at least an empty space to create height for height syncing */\n    }\n\n.fc .fc-timegrid-slot-minor {\n    border-top-style: dotted;\n  }\n\n.fc .fc-timegrid-slot-label-cushion {\n    display: inline-block;\n    white-space: nowrap;\n  }\n\n.fc .fc-timegrid-slot-label {\n    vertical-align: middle; /* vertical align the slots */\n  }\n\n.fc {\n\n\n  /* slots AND axis cells (top-left corner of view including the \"all-day\" text) */\n\n}\n\n.fc .fc-timegrid-axis-cushion,\n  .fc .fc-timegrid-slot-label-cushion {\n    padding: 0 4px;\n  }\n\n.fc {\n\n\n  /* axis cells (top-left corner of view including the \"all-day\" text) */\n  /* vertical align is more complicated, uses flexbox */\n\n}\n\n.fc .fc-timegrid-axis-frame-liquid {\n    height: 100%; /* will need liquid-hack in FF */\n  }\n\n.fc .fc-timegrid-axis-frame {\n    overflow: hidden;\n    display: flex;\n    align-items: center; /* vertical align */\n    justify-content: flex-end; /* horizontal align. matches text-align below */\n  }\n\n.fc .fc-timegrid-axis-cushion {\n    max-width: 60px; /* limits the width of the \"all-day\" text */\n    flex-shrink: 0; /* allows text to expand how it normally would, regardless of constrained width */\n  }\n\n.fc-direction-ltr .fc-timegrid-slot-label-frame {\n    text-align: right;\n  }\n\n.fc-direction-rtl .fc-timegrid-slot-label-frame {\n    text-align: left;\n  }\n\n.fc-liquid-hack .fc-timegrid-axis-frame-liquid {\n  height: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  }\n\n.fc .fc-timegrid-col.fc-day-today {\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: var(--fc-today-bg-color, rgba(255, 220, 40, 0.15));\n    }\n\n.fc .fc-timegrid-col-frame {\n    min-height: 100%; /* liquid-hack is below */\n    position: relative;\n  }\n\n.fc-liquid-hack .fc-timegrid-col-frame {\n  height: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  }\n\n.fc-media-screen .fc-timegrid-cols {\n    position: absolute; /* no z-index. children will decide and go above slots */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0\n  }\n\n.fc-media-screen .fc-timegrid-cols > table {\n      height: 100%;\n    }\n\n.fc-media-screen .fc-timegrid-col-bg,\n  .fc-media-screen .fc-timegrid-col-events,\n  .fc-media-screen .fc-timegrid-now-indicator-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n  }\n\n.fc-media-screen .fc-timegrid-event-harness {\n    position: absolute; /* top/left/right/bottom will all be set by JS */\n  }\n\n.fc {\n\n  /* bg */\n\n}\n\n.fc .fc-timegrid-col-bg {\n    z-index: 2; /* TODO: kill */\n  }\n\n.fc .fc-timegrid-col-bg .fc-non-business { z-index: 1 }\n\n.fc .fc-timegrid-col-bg .fc-bg-event { z-index: 2 }\n\n.fc .fc-timegrid-col-bg .fc-highlight { z-index: 3 }\n\n.fc .fc-timegrid-bg-harness {\n    position: absolute; /* top/bottom will be set by JS */\n    left: 0;\n    right: 0;\n  }\n\n.fc {\n\n  /* fg events */\n  /* (the mirror segs are put into a separate container with same classname, */\n  /* and they must be after the normal seg container to appear at a higher z-index) */\n\n}\n\n.fc .fc-timegrid-col-events {\n    z-index: 3;\n    /* child event segs have z-indexes that are scoped within this div */\n  }\n\n.fc {\n\n  /* now indicator */\n\n}\n\n.fc .fc-timegrid-now-indicator-container {\n    bottom: 0;\n    overflow: hidden; /* don't let overflow of lines/arrows cause unnecessary scrolling */\n    /* z-index is set on the individual elements */\n  }\n\n.fc-direction-ltr .fc-timegrid-col-events {\n    margin: 0 2.5% 0 2px;\n  }\n\n.fc-direction-rtl .fc-timegrid-col-events {\n    margin: 0 2px 0 2.5%;\n  }\n\n.fc-timegrid-event-harness-inset .fc-timegrid-event,\n.fc-timegrid-event.fc-event-mirror {\n  box-shadow: 0px 0px 0px 1px #fff;\n  box-shadow: 0px 0px 0px 1px #fff;\n  box-shadow: 0px 0px 0px 1px var(--fc-page-bg-color, #fff);\n}\n\n.fc-timegrid-event { /* events need to be root */\n\n  font-size: .85em;\n\n  font-size: .85em;\n\n  font-size: var(--fc-small-font-size, .85em);\n  border-radius: 3px\n\n}\n\n.fc-timegrid-event .fc-event-main {\n    padding: 1px 1px 0;\n  }\n\n.fc-timegrid-event .fc-event-time {\n    white-space: nowrap;\n    font-size: .85em;\n    font-size: .85em;\n    font-size: var(--fc-small-font-size, .85em);\n    margin-bottom: 1px;\n  }\n\n.fc-timegrid-event-condensed .fc-event-main-frame {\n    flex-direction: row;\n    overflow: hidden;\n  }\n\n.fc-timegrid-event-condensed .fc-event-time:after {\n    content: '\\00a0-\\00a0'; /* dash surrounded by non-breaking spaces */\n  }\n\n.fc-timegrid-event-condensed .fc-event-title {\n    font-size: .85em;\n    font-size: .85em;\n    font-size: var(--fc-small-font-size, .85em)\n  }\n\n.fc-media-screen .fc-timegrid-event {\n    position: absolute; /* absolute WITHIN the harness */\n    top: 0;\n    bottom: 1px; /* stay away from bottom slot line */\n    left: 0;\n    right: 0;\n  }\n\n.fc {\n\n  /* line */\n\n}\n\n.fc .fc-timegrid-now-indicator-line {\n    position: absolute;\n    z-index: 4;\n    left: 0;\n    right: 0;\n    border-style: solid;\n    border-color: red;\n    border-color: red;\n    border-color: var(--fc-now-indicator-color, red);\n    border-width: 1px 0 0;\n  }\n\n.fc {\n\n  /* arrow */\n\n}\n\n.fc .fc-timegrid-now-indicator-arrow {\n    position: absolute;\n    z-index: 4;\n    margin-top: -5px; /* vertically center on top coordinate */\n    border-style: solid;\n    border-color: red;\n    border-color: red;\n    border-color: var(--fc-now-indicator-color, red);\n  }\n\n.fc-direction-ltr .fc-timegrid-now-indicator-arrow {\n    left: 0;\n\n    /* triangle pointing right. TODO: mixin */\n    border-width: 5px 0 5px 6px;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n  }\n\n.fc-direction-rtl .fc-timegrid-now-indicator-arrow {\n    right: 0;\n\n    /* triangle pointing left. TODO: mixin */\n    border-width: 5px 6px 5px 0;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n  }\n", "",{"version":3,"sources":["main.css"],"names":[],"mappings":";AACA;;CAEC;;AAED,cAAc,4BAA4B;EACxC,cAAc;EACd,yBAAyB;EACzB,yBAAuD;EAAvD,uDAAuD;EACvD,yBAAyB;EACzB,yBAAkD;EAAlD;;AAEF;;AAEA;IACI,WAAW;IACX,WAAuC;IAAvC,uCAAuC;IACvC,YAAY;EACd;;AAEF;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;EACxB;;AAEF;IACI,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,gBAAgB;EAClB;;AAEF,wCAAwC,uCAAuC;IAC3E,YAAY;IACZ,cAAc;IACd,aAAa,EAAE,iDAAiD;EAClE;;AAEF,8BAA8B,8BAA8B;IACxD,MAAM;IACN,SAAS;IACT,gBAAgB,EAAE,kBAAkB;IACpC,gBAAgB;EAClB;;AAEF;IACI,mBAAmB;IACnB,yBAAyB;IACzB,0BAA0B;EAC5B;;AAEF;IACI,sBAAsB;IACtB,4BAA4B;IAC5B,6BAA6B;EAC/B;;AAEF;IACI,oBAAoB;IACpB,WAAW;IACX,YAAY;EACd;;AAEF;;EAEE,8BAA8B;;AAEhC;;AAEA;IACI,gBAAgB;EAClB;;AAEF;IACI,gBAAgB;EAClB;;AAEF;;EAEE,sBAAsB;;AAExB;;AAEA;MACM,WAAW;MACX,WAA8C;MAA9C,8CAA8C;MAC9C,OAAO;MACP,QAAQ;IACV;;AAEJ;MACM,SAAS;MACT,mBAAsD;MAAtD,sDAAsD;IACxD;;AAEJ;MACM,YAAY;MACZ,sBAAyD;MAAzD,yDAAyD;IAC3D;;AAEJ;;EAEE,iDAAiD;;AAEnD;;AAEA;MACM,SAAS;MACT,iBAAiB;MACjB,2BAAoE;MAApE,oEAAoE;IACtE;;AAEJ;MACM,SAAS;MACT,mBAA4D;MAA5D,4DAA4D;IAC9D;;AAEJ;MACM,YAAY;MACZ,sBAA+D;MAA/D,+DAA+D;IACjE;;AACJ,oCAAoC,iDAAiD;IACjF,UAAU,EAAE,gGAAgG;EAC9G;;AACF;IACI,gBAAgB,EAAE,mEAAmE;EACvF;;AACF;IACI,kBAAkB;IAClB,UAAU,EAAE,0CAA0C;IACtD,gBAAgB,EAAE,0DAA0D;EAC9E;;AACF,8BAA8B,4BAA4B;IACtD,iBAAiB,EAAE,8CAA8C;;EAEnE;;AACF;MACM,kBAAkB;MAClB,UAAU,EAAE,sCAAsC;IACpD;;AACJ;IACI,kBAAkB;IAClB,UAAU;EACZ;;AACF,wBAAwB,WAAW;IAC/B,aAAa;IACb,eAAe,EAAE,kCAAkC;EACrD;;AACF;MACM,gBAAgB,EAAE,kFAAkF;IACtG;;AACJ;IACI,wBAAwB;EAC1B;;AACF;IACI,qBAAqB;IACrB,mBAAmB;EACrB;;AACF;IACI,sBAAsB,EAAE,6BAA6B;EACvD;;AACF;;;EAGE,gFAAgF;;AAElF;;AACA;;IAEI,cAAc;EAChB;;AACF;;;EAGE,sEAAsE;EACtE,qDAAqD;;AAEvD;;AACA;IACI,YAAY,EAAE,gCAAgC;EAChD;;AACF;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB,EAAE,mBAAmB;IACxC,yBAAyB,EAAE,+CAA+C;EAC5E;;AACF;IACI,eAAe,EAAE,2CAA2C;IAC5D,cAAc,EAAE,iFAAiF;EACnG;;AACF;IACI,iBAAiB;EACnB;;AACF;IACI,gBAAgB;EAClB;;AACF;EACE,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP;;AACF;MACM,0CAA0C;MAC1C,0CAAoE;MAApE,oEAAoE;IACtE;;AACJ;IACI,gBAAgB,EAAE,yBAAyB;IAC3C,kBAAkB;EACpB;;AACF;EACE,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP;;AACF;IACI,kBAAkB,EAAE,wDAAwD;IAC5E,MAAM;IACN,OAAO;IACP,QAAQ;IACR;EACF;;AACF;MACM,YAAY;IACd;;AACJ;;;IAGI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;EACV;;AACF;IACI,kBAAkB,EAAE,gDAAgD;EACtE;;AACF;;EAEE,OAAO;;AAET;;AACA;IACI,UAAU,EAAE,eAAe;EAC7B;;AACF,2CAA2C,WAAW;;AACtD,uCAAuC,WAAW;;AAClD,wCAAwC,WAAW;;AACnD;IACI,kBAAkB,EAAE,iCAAiC;IACrD,OAAO;IACP,QAAQ;EACV;;AACF;;EAEE,cAAc;EACd,4EAA4E;EAC5E,mFAAmF;;AAErF;;AACA;IACI,UAAU;IACV,oEAAoE;EACtE;;AACF;;EAEE,kBAAkB;;AAEpB;;AACA;IACI,SAAS;IACT,gBAAgB,EAAE,mEAAmE;IACrF,8CAA8C;EAChD;;AACF;IACI,oBAAoB;EACtB;;AACF;IACI,oBAAoB;EACtB;;AACF;;EAEE,gCAAgC;EAChC,gCAAyD;EAAzD,yDAAyD;AAC3D;;AACA,qBAAqB,2BAA2B;;EAE9C,gBAAgB;;EAEhB,gBAA2C;;EAA3C,2CAA2C;EAC3C;;AAEF;;AACA;IACI,kBAAkB;EACpB;;AACF;IACI,mBAAmB;IACnB,gBAAgB;IAChB,gBAA2C;IAA3C,2CAA2C;IAC3C,kBAAkB;EACpB;;AACF;IACI,mBAAmB;IACnB,gBAAgB;EAClB;;AACF;IACI,sBAAsB,EAAE,2CAA2C;EACrE;;AACF;IACI,gBAAgB;IAChB,gBAA0C;IAA1C;EACF;;AACF;IACI,kBAAkB,EAAE,gCAAgC;IACpD,MAAM;IACN,WAAW,EAAE,oCAAoC;IACjD,OAAO;IACP,QAAQ;EACV;;AACF;;EAEE,SAAS;;AAEX;;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,OAAO;IACP,QAAQ;IACR,mBAAmB;IACnB,iBAAiB;IACjB,iBAAgD;IAAhD,gDAAgD;IAChD,qBAAqB;EACvB;;AACF;;EAEE,UAAU;;AAEZ;;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,gBAAgB,EAAE,wCAAwC;IAC1D,mBAAmB;IACnB,iBAAiB;IACjB,iBAAgD;IAAhD,gDAAgD;EAClD;;AACF;IACI,OAAO;;IAEP,yCAAyC;IACzC,2BAA2B;IAC3B,6BAA6B;IAC7B,gCAAgC;EAClC;;AACF;IACI,QAAQ;;IAER,wCAAwC;IACxC,2BAA2B;IAC3B,6BAA6B;IAC7B,gCAAgC;EAClC","file":"main.css","sourcesContent":["\n/*\nA VERTICAL event\n*/\n\n.fc-v-event { /* allowed to be top-level */\n  display: block;\n  border: 1px solid #3788d8;\n  border: 1px solid var(--fc-event-border-color, #3788d8);\n  background-color: #3788d8;\n  background-color: var(--fc-event-bg-color, #3788d8)\n\n}\n\n.fc-v-event .fc-event-main {\n    color: #fff;\n    color: var(--fc-event-text-color, #fff);\n    height: 100%;\n  }\n\n.fc-v-event .fc-event-main-frame {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n\n.fc-v-event .fc-event-time {\n    flex-grow: 0;\n    flex-shrink: 0;\n    max-height: 100%;\n    overflow: hidden;\n  }\n\n.fc-v-event .fc-event-title-container { /* a container for the sticky cushion */\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-height: 0; /* important for allowing to shrink all the way */\n  }\n\n.fc-v-event .fc-event-title { /* will have fc-sticky on it */\n    top: 0;\n    bottom: 0;\n    max-height: 100%; /* clip overflow */\n    overflow: hidden;\n  }\n\n.fc-v-event:not(.fc-event-start) {\n    border-top-width: 0;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n\n.fc-v-event:not(.fc-event-end) {\n    border-bottom-width: 0;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n.fc-v-event.fc-event-selected:before {\n    /* expand hit area */\n    left: -10px;\n    right: -10px;\n  }\n\n.fc-v-event {\n\n  /* resizer (mouse AND touch) */\n\n}\n\n.fc-v-event .fc-event-resizer-start {\n    cursor: n-resize;\n  }\n\n.fc-v-event .fc-event-resizer-end {\n    cursor: s-resize;\n  }\n\n.fc-v-event {\n\n  /* resizer for MOUSE */\n\n}\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer {\n      height: 8px;\n      height: var(--fc-event-resizer-thickness, 8px);\n      left: 0;\n      right: 0;\n    }\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start {\n      top: -4px;\n      top: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n    }\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end {\n      bottom: -4px;\n      bottom: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n    }\n\n.fc-v-event {\n\n  /* resizer for TOUCH (when event is \"selected\") */\n\n}\n\n.fc-v-event.fc-event-selected .fc-event-resizer {\n      left: 50%;\n      margin-left: -4px;\n      margin-left: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n    }\n\n.fc-v-event.fc-event-selected .fc-event-resizer-start {\n      top: -4px;\n      top: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n    }\n\n.fc-v-event.fc-event-selected .fc-event-resizer-end {\n      bottom: -4px;\n      bottom: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n    }\n.fc .fc-timegrid .fc-daygrid-body { /* the all-day daygrid within the timegrid view */\n    z-index: 2; /* put above the timegrid-body so that more-popover is above everything. TODO: better solution */\n  }\n.fc .fc-timegrid-divider {\n    padding: 0 0 2px; /* browsers get confused when you set height. use padding instead */\n  }\n.fc .fc-timegrid-body {\n    position: relative;\n    z-index: 1; /* scope the z-indexes of slots and cols */\n    min-height: 100%; /* fill height always, even when slat table doesn't grow */\n  }\n.fc .fc-timegrid-axis-chunk { /* for advanced ScrollGrid */\n    position: relative /* offset parent for now-indicator-container */\n\n  }\n.fc .fc-timegrid-axis-chunk > table {\n      position: relative;\n      z-index: 1; /* above the now-indicator-container */\n    }\n.fc .fc-timegrid-slots {\n    position: relative;\n    z-index: 1;\n  }\n.fc .fc-timegrid-slot { /* a <td> */\n    height: 1.5em;\n    border-bottom: 0 /* each cell owns its top border */\n  }\n.fc .fc-timegrid-slot:empty:before {\n      content: '\\00a0'; /* make sure there's at least an empty space to create height for height syncing */\n    }\n.fc .fc-timegrid-slot-minor {\n    border-top-style: dotted;\n  }\n.fc .fc-timegrid-slot-label-cushion {\n    display: inline-block;\n    white-space: nowrap;\n  }\n.fc .fc-timegrid-slot-label {\n    vertical-align: middle; /* vertical align the slots */\n  }\n.fc {\n\n\n  /* slots AND axis cells (top-left corner of view including the \"all-day\" text) */\n\n}\n.fc .fc-timegrid-axis-cushion,\n  .fc .fc-timegrid-slot-label-cushion {\n    padding: 0 4px;\n  }\n.fc {\n\n\n  /* axis cells (top-left corner of view including the \"all-day\" text) */\n  /* vertical align is more complicated, uses flexbox */\n\n}\n.fc .fc-timegrid-axis-frame-liquid {\n    height: 100%; /* will need liquid-hack in FF */\n  }\n.fc .fc-timegrid-axis-frame {\n    overflow: hidden;\n    display: flex;\n    align-items: center; /* vertical align */\n    justify-content: flex-end; /* horizontal align. matches text-align below */\n  }\n.fc .fc-timegrid-axis-cushion {\n    max-width: 60px; /* limits the width of the \"all-day\" text */\n    flex-shrink: 0; /* allows text to expand how it normally would, regardless of constrained width */\n  }\n.fc-direction-ltr .fc-timegrid-slot-label-frame {\n    text-align: right;\n  }\n.fc-direction-rtl .fc-timegrid-slot-label-frame {\n    text-align: left;\n  }\n.fc-liquid-hack .fc-timegrid-axis-frame-liquid {\n  height: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  }\n.fc .fc-timegrid-col.fc-day-today {\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: var(--fc-today-bg-color, rgba(255, 220, 40, 0.15));\n    }\n.fc .fc-timegrid-col-frame {\n    min-height: 100%; /* liquid-hack is below */\n    position: relative;\n  }\n.fc-liquid-hack .fc-timegrid-col-frame {\n  height: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  }\n.fc-media-screen .fc-timegrid-cols {\n    position: absolute; /* no z-index. children will decide and go above slots */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0\n  }\n.fc-media-screen .fc-timegrid-cols > table {\n      height: 100%;\n    }\n.fc-media-screen .fc-timegrid-col-bg,\n  .fc-media-screen .fc-timegrid-col-events,\n  .fc-media-screen .fc-timegrid-now-indicator-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n  }\n.fc-media-screen .fc-timegrid-event-harness {\n    position: absolute; /* top/left/right/bottom will all be set by JS */\n  }\n.fc {\n\n  /* bg */\n\n}\n.fc .fc-timegrid-col-bg {\n    z-index: 2; /* TODO: kill */\n  }\n.fc .fc-timegrid-col-bg .fc-non-business { z-index: 1 }\n.fc .fc-timegrid-col-bg .fc-bg-event { z-index: 2 }\n.fc .fc-timegrid-col-bg .fc-highlight { z-index: 3 }\n.fc .fc-timegrid-bg-harness {\n    position: absolute; /* top/bottom will be set by JS */\n    left: 0;\n    right: 0;\n  }\n.fc {\n\n  /* fg events */\n  /* (the mirror segs are put into a separate container with same classname, */\n  /* and they must be after the normal seg container to appear at a higher z-index) */\n\n}\n.fc .fc-timegrid-col-events {\n    z-index: 3;\n    /* child event segs have z-indexes that are scoped within this div */\n  }\n.fc {\n\n  /* now indicator */\n\n}\n.fc .fc-timegrid-now-indicator-container {\n    bottom: 0;\n    overflow: hidden; /* don't let overflow of lines/arrows cause unnecessary scrolling */\n    /* z-index is set on the individual elements */\n  }\n.fc-direction-ltr .fc-timegrid-col-events {\n    margin: 0 2.5% 0 2px;\n  }\n.fc-direction-rtl .fc-timegrid-col-events {\n    margin: 0 2px 0 2.5%;\n  }\n.fc-timegrid-event-harness-inset .fc-timegrid-event,\n.fc-timegrid-event.fc-event-mirror {\n  box-shadow: 0px 0px 0px 1px #fff;\n  box-shadow: 0px 0px 0px 1px var(--fc-page-bg-color, #fff);\n}\n.fc-timegrid-event { /* events need to be root */\n\n  font-size: .85em;\n\n  font-size: var(--fc-small-font-size, .85em);\n  border-radius: 3px\n\n}\n.fc-timegrid-event .fc-event-main {\n    padding: 1px 1px 0;\n  }\n.fc-timegrid-event .fc-event-time {\n    white-space: nowrap;\n    font-size: .85em;\n    font-size: var(--fc-small-font-size, .85em);\n    margin-bottom: 1px;\n  }\n.fc-timegrid-event-condensed .fc-event-main-frame {\n    flex-direction: row;\n    overflow: hidden;\n  }\n.fc-timegrid-event-condensed .fc-event-time:after {\n    content: '\\00a0-\\00a0'; /* dash surrounded by non-breaking spaces */\n  }\n.fc-timegrid-event-condensed .fc-event-title {\n    font-size: .85em;\n    font-size: var(--fc-small-font-size, .85em)\n  }\n.fc-media-screen .fc-timegrid-event {\n    position: absolute; /* absolute WITHIN the harness */\n    top: 0;\n    bottom: 1px; /* stay away from bottom slot line */\n    left: 0;\n    right: 0;\n  }\n.fc {\n\n  /* line */\n\n}\n.fc .fc-timegrid-now-indicator-line {\n    position: absolute;\n    z-index: 4;\n    left: 0;\n    right: 0;\n    border-style: solid;\n    border-color: red;\n    border-color: var(--fc-now-indicator-color, red);\n    border-width: 1px 0 0;\n  }\n.fc {\n\n  /* arrow */\n\n}\n.fc .fc-timegrid-now-indicator-arrow {\n    position: absolute;\n    z-index: 4;\n    margin-top: -5px; /* vertically center on top coordinate */\n    border-style: solid;\n    border-color: red;\n    border-color: var(--fc-now-indicator-color, red);\n  }\n.fc-direction-ltr .fc-timegrid-now-indicator-arrow {\n    left: 0;\n\n    /* triangle pointing right. TODO: mixin */\n    border-width: 5px 0 5px 6px;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n  }\n.fc-direction-rtl .fc-timegrid-now-indicator-arrow {\n    right: 0;\n\n    /* triangle pointing left. TODO: mixin */\n    border-width: 5px 6px 5px 0;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n  }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/fast-safe-stringify/index.js":
/*!***************************************************!*\
  !*** ./node_modules/fast-safe-stringify/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = stringify;
stringify["default"] = stringify;
stringify.stable = deterministicStringify;
stringify.stableStringify = deterministicStringify;
var arr = [];
var replacerStack = []; // Regular stringify

function stringify(obj, replacer, spacer) {
  decirc(obj, '', [], undefined);
  var res;

  if (replacerStack.length === 0) {
    res = JSON.stringify(obj, replacer, spacer);
  } else {
    res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
  }

  while (arr.length !== 0) {
    var part = arr.pop();

    if (part.length === 4) {
      Object.defineProperty(part[0], part[1], part[3]);
    } else {
      part[0][part[1]] = part[2];
    }
  }

  return res;
}

function decirc(val, k, stack, parent) {
  var i;

  if (_typeof(val) === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);

        if (propertyDescriptor.get !== undefined) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, {
              value: '[Circular]'
            });
            arr.push([parent, k, val, propertyDescriptor]);
          } else {
            replacerStack.push([val, k]);
          }
        } else {
          parent[k] = '[Circular]';
          arr.push([parent, k, val]);
        }

        return;
      }
    }

    stack.push(val); // Optimize for Arrays. Big arrays could kill the performance otherwise!

    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        decirc(val[i], i, stack, val);
      }
    } else {
      var keys = Object.keys(val);

      for (i = 0; i < keys.length; i++) {
        var key = keys[i];
        decirc(val[key], key, stack, val);
      }
    }

    stack.pop();
  }
} // Stable-stringify


function compareFunction(a, b) {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
}

function deterministicStringify(obj, replacer, spacer) {
  var tmp = deterministicDecirc(obj, '', [], undefined) || obj;
  var res;

  if (replacerStack.length === 0) {
    res = JSON.stringify(tmp, replacer, spacer);
  } else {
    res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
  }

  while (arr.length !== 0) {
    var part = arr.pop();

    if (part.length === 4) {
      Object.defineProperty(part[0], part[1], part[3]);
    } else {
      part[0][part[1]] = part[2];
    }
  }

  return res;
}

function deterministicDecirc(val, k, stack, parent) {
  var i;

  if (_typeof(val) === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);

        if (propertyDescriptor.get !== undefined) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, {
              value: '[Circular]'
            });
            arr.push([parent, k, val, propertyDescriptor]);
          } else {
            replacerStack.push([val, k]);
          }
        } else {
          parent[k] = '[Circular]';
          arr.push([parent, k, val]);
        }

        return;
      }
    }

    if (typeof val.toJSON === 'function') {
      return;
    }

    stack.push(val); // Optimize for Arrays. Big arrays could kill the performance otherwise!

    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        deterministicDecirc(val[i], i, stack, val);
      }
    } else {
      // Create a temporary object in the required way
      var tmp = {};
      var keys = Object.keys(val).sort(compareFunction);

      for (i = 0; i < keys.length; i++) {
        var key = keys[i];
        deterministicDecirc(val[key], key, stack, val);
        tmp[key] = val[key];
      }

      if (parent !== undefined) {
        arr.push([parent, k, val]);
        parent[k] = tmp;
      } else {
        return tmp;
      }
    }

    stack.pop();
  }
} // wraps replacer function to handle values we couldn't replace
// and mark them as [Circular]


function replaceGetterValues(replacer) {
  replacer = replacer !== undefined ? replacer : function (k, v) {
    return v;
  };
  return function (key, val) {
    if (replacerStack.length > 0) {
      for (var i = 0; i < replacerStack.length; i++) {
        var part = replacerStack[i];

        if (part[1] === key && part[0] === val) {
          val = '[Circular]';
          replacerStack.splice(i, 1);
          break;
        }
      }
    }

    return replacer.call(this, key, val);
  };
}

/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, __u, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__u", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,
    l,
    u,
    i,
    t,
    o,
    r,
    f = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function s(n, l) {
  for (var u in l) {
    n[u] = l[u];
  }

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function h(n, l, u) {
  var i,
      t,
      o,
      r = arguments,
      f = {};

  for (o in l) {
    "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];
  }

  if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) {
    u.push(r[o]);
  }
  if (null != u && (f.children = u), "function" == typeof n && null != n.defaultProps) for (o in n.defaultProps) {
    void 0 === f[o] && (f[o] = n.defaultProps[o]);
  }
  return v(n, f, i, t, null);
}

function v(l, u, i, t, o) {
  var r = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: o
  };
  return null == o && (r.__v = r), null != n.vnode && n.vnode(r), r;
}

function y() {
  return {
    current: null
  };
}

function p(n) {
  return n.children;
}

function d(n, l) {
  this.props = n, this.context = l;
}

function _(n, l) {
  if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) {
    if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  }

  return "function" == typeof n.type ? _(n) : null;
}

function w(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) {
      if (null != (u = n.__k[l]) && null != u.__e) {
        n.__e = n.__c.base = u.__e;
        break;
      }
    }

    return w(n);
  }
}

function k(l) {
  (!l.__d && (l.__d = !0) && u.push(l) && !g.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(g);
}

function g() {
  for (var n; g.__r = u.length;) {
    n = u.sort(function (n, l) {
      return n.__v.__b - l.__v.__b;
    }), u = [], n.some(function (n) {
      var l, u, i, t, o, r, f;
      n.__d && (r = (o = (l = n).__v).__e, (f = l.__P) && (u = [], (i = s({}, o)).__v = i, t = $(f, o, i, l.__n, void 0 !== f.ownerSVGElement, null != o.__h ? [r] : null, u, null == r ? _(o) : r, o.__h), j(u, o), t != r && w(o)));
    });
  }
}

function m(n, l, u, i, t, o, r, c, s, h) {
  var y,
      d,
      w,
      k,
      g,
      m,
      b,
      A = i && i.__k || e,
      P = A.length;

  for (s == f && (s = null != r ? r[0] : P ? _(i, 0) : null), u.__k = [], y = 0; y < l.length; y++) {
    if (null != (k = u.__k[y] = null == (k = l[y]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(p, {
      children: k
    }, null, null, null) : null != k.__e || null != k.__c ? v(k.type, k.props, k.key, null, k.__v) : k)) {
      if (k.__ = u, k.__b = u.__b + 1, null === (w = A[y]) || w && k.key == w.key && k.type === w.type) A[y] = void 0;else for (d = 0; d < P; d++) {
        if ((w = A[d]) && k.key == w.key && k.type === w.type) {
          A[d] = void 0;
          break;
        }

        w = null;
      }
      g = $(n, k, w = w || f, t, o, r, c, s, h), (d = k.ref) && w.ref != d && (b || (b = []), w.ref && b.push(w.ref, null, k), b.push(d, k.__c || g, k)), null != g ? (null == m && (m = g), s = x(n, k, w, A, r, g, s), h || "option" != u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && w.__e == s && s.parentNode != n && (s = _(w));
    }
  }

  if (u.__e = m, null != r && "function" != typeof u.type) for (y = r.length; y--;) {
    null != r[y] && a(r[y]);
  }

  for (y = P; y--;) {
    null != A[y] && L(A[y], A[y]);
  }

  if (b) for (y = 0; y < b.length; y++) {
    I(b[y], b[++y], b[++y]);
  }
}

function b(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    b(n, l);
  }) : l.push(n)), l;
}

function x(n, l, u, i, t, o, r) {
  var f, e, c;
  if (void 0 !== l.__d) f = l.__d, l.__d = void 0;else if (t == u || o != r || null == o.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(o), f = null;else {
    for (e = r, c = 0; (e = e.nextSibling) && c < i.length; c += 2) {
      if (e == o) break n;
    }

    n.insertBefore(o, r), f = r;
  }
  return void 0 !== f ? f : o.nextSibling;
}

function A(n, l, u, i, t) {
  var o;

  for (o in u) {
    "children" === o || "key" === o || o in l || C(n, o, null, u[o], i);
  }

  for (o in l) {
    t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || C(n, o, l[o], u[o], i);
  }
}

function P(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c.test(l) ? u : u + "px";
}

function C(n, l, u, i, t) {
  var o, r, f;
  if (t && "className" == l && (l = "class"), "style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) {
        u && l in u || P(n.style, l, "");
      }
      if (u) for (l in u) {
        i && u[l] === i[l] || P(n.style, l, u[l]);
      }
    }
  } else "o" === l[0] && "n" === l[1] ? (o = l !== (l = l.replace(/Capture$/, "")), (r = l.toLowerCase()) in n && (l = r), l = l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, f = o ? N : z, u ? i || n.addEventListener(l, f, o) : n.removeEventListener(l, f, o)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && "download" !== l && "href" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function z(l) {
  this.l[l.type + !1](n.event ? n.event(l) : l);
}

function N(l) {
  this.l[l.type + !0](n.event ? n.event(l) : l);
}

function T(n, l, u) {
  var i, t;

  for (i = 0; i < n.__k.length; i++) {
    (t = n.__k[i]) && (t.__ = n, t.__e && ("function" == typeof t.type && t.__k.length > 1 && T(t, l, u), l = x(u, t, t, n.__k, null, t.__e, l), "function" == typeof n.type && (n.__d = l)));
  }
}

function $(l, u, i, t, o, r, f, e, c) {
  var a,
      h,
      v,
      y,
      _,
      w,
      k,
      g,
      b,
      x,
      A,
      P = u.type;

  if (void 0 !== u.constructor) return null;
  null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (g = u.props, b = (a = P.contextType) && t[a.__c], x = a ? b ? b.props.value : a.__ : t, i.__c ? k = (h = u.__c = i.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(g, x) : (u.__c = h = new d(g, x), h.constructor = P, h.render = M), b && b.sub(h), h.props = g, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s({}, h.__s)), s(h.__s, P.getDerivedStateFromProps(g, h.__s))), y = h.props, _ = h.state, v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && g !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(g, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(g, h.__s, x) || u.__v === i.__v) {
          h.props = g, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, h.__h.length && f.push(h), T(u, e, l);
          break n;
        }

        null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
          h.componentDidUpdate(y, _, w);
        });
      }
      h.context = x, h.props = g, h.state = h.__s, (a = n.__r) && a(u), h.__d = !1, h.__v = u, h.__P = l, a = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = s(s({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (w = h.getSnapshotBeforeUpdate(y, _)), A = null != a && a.type == p && null == a.key ? a.props.children : a, m(l, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), k && (h.__E = h.__ = null), h.__e = !1;
    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = H(i.__e, u, i, t, o, r, f, c);

    (a = n.diffed) && a(u);
  } catch (l) {
    u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), n.__e(l, u, i);
  }

  return u.__e;
}

function j(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function H(n, l, u, i, t, o, r, c) {
  var s,
      a,
      h,
      v,
      y,
      p = u.props,
      d = l.props;
  if (t = "svg" === l.type || t, null != o) for (s = 0; s < o.length; s++) {
    if (null != (a = o[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {
      n = a, o[s] = null;
      break;
    }
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && {
      is: d.is
    }), o = null, c = !1;
  }

  if (null === l.type) p === d || c && n.data === d || (n.data = d);else {
    if (null != o && (o = e.slice.call(n.childNodes)), h = (p = u.props || f).dangerouslySetInnerHTML, v = d.dangerouslySetInnerHTML, !c) {
      if (null != o) for (p = {}, y = 0; y < n.attributes.length; y++) {
        p[n.attributes[y].name] = n.attributes[y].value;
      }
      (v || h) && (v && (h && v.__html == h.__html || v.__html === n.innerHTML) || (n.innerHTML = v && v.__html || ""));
    }

    A(n, d, p, t, c), v ? l.__k = [] : (s = l.props.children, m(n, Array.isArray(s) ? s : [s], l, u, i, "foreignObject" !== l.type && t, o, r, f, c)), c || ("value" in d && void 0 !== (s = d.value) && (s !== n.value || "progress" === l.type && !s) && C(n, "value", s, p.value, !1), "checked" in d && void 0 !== (s = d.checked) && s !== n.checked && C(n, "checked", s, p.checked, !1));
  }
  return n;
}

function I(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function L(l, u, i) {
  var t, o, r;

  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || I(t, null, u)), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (r = 0; r < t.length; r++) {
    t[r] && L(t[r], u, i);
  }
  null != o && a(o);
}

function M(n, l, u) {
  return this.constructor(n, u);
}

function O(l, u, i) {
  var t, r, c;
  n.__ && n.__(l, u), r = (t = i === o) ? null : i && i.__k || u.__k, l = h(p, null, [l]), c = [], $(u, (t ? u : i || u).__k = l, r || f, f, void 0 !== u.ownerSVGElement, i && !t ? [i] : r ? null : u.childNodes.length ? e.slice.call(u.childNodes) : null, c, i || f, t), j(c, l);
}

function S(n, l) {
  O(n, l, o);
}

function q(n, l, u) {
  var i,
      t,
      o,
      r = arguments,
      f = s({}, n.props);

  for (o in l) {
    "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];
  }

  if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) {
    u.push(r[o]);
  }
  return null != u && (f.children = u), v(n.type, f, i || n.key, t || n.ref, null);
}

function B(n, l) {
  var u = {
    __c: l = "__cC" + r++,
    __: n,
    Consumer: function Consumer(n, l) {
      return n.children(l);
    },
    Provider: function Provider(n, u, i) {
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(k);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}

n = {
  __e: function __e(n, l) {
    for (var u, i, t, o = l.__h; l = l.__;) {
      if ((u = l.__c) && !u.__) try {
        if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return l.__h = o, u.__E = u;
      } catch (l) {
        n = l;
      }
    }

    throw n;
  }
}, l = function l(n) {
  return null != n && void 0 === n.constructor;
}, d.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(s({}, u), this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), k(this));
}, d.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), k(this));
}, d.prototype.render = p, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, o = f, r = 0;


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/superagent/lib/agent-base.js":
/*!***************************************************!*\
  !*** ./node_modules/superagent/lib/agent-base.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function Agent() {
  this._defaults = [];
}

['use', 'on', 'once', 'set', 'query', 'type', 'accept', 'auth', 'withCredentials', 'sortQuery', 'retry', 'ok', 'redirects', 'timeout', 'buffer', 'serialize', 'parse', 'ca', 'key', 'pfx', 'cert', 'disableTLSCerts'].forEach(function (fn) {
  // Default setting for all requests from this agent
  Agent.prototype[fn] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this._defaults.push({
      fn: fn,
      args: args
    });

    return this;
  };
});

Agent.prototype._setDefaults = function (req) {
  this._defaults.forEach(function (def) {
    req[def.fn].apply(req, _toConsumableArray(def.args));
  });
};

module.exports = Agent;

/***/ }),

/***/ "./node_modules/superagent/lib/client.js":
/*!***********************************************!*\
  !*** ./node_modules/superagent/lib/client.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/**
 * Root reference for iframes.
 */


var root;

if (typeof window !== 'undefined') {
  // Browser window
  root = window;
} else if (typeof self === 'undefined') {
  // Other environments
  console.warn('Using browser-only version of superagent in non-browser environment');
  root = void 0;
} else {
  // Web Worker
  root = self;
}

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var safeStringify = __webpack_require__(/*! fast-safe-stringify */ "./node_modules/fast-safe-stringify/index.js");

var qs = __webpack_require__(/*! qs */ "./node_modules/superagent/node_modules/qs/lib/index.js");

var RequestBase = __webpack_require__(/*! ./request-base */ "./node_modules/superagent/lib/request-base.js");

var isObject = __webpack_require__(/*! ./is-object */ "./node_modules/superagent/lib/is-object.js");

var ResponseBase = __webpack_require__(/*! ./response-base */ "./node_modules/superagent/lib/response-base.js");

var Agent = __webpack_require__(/*! ./agent-base */ "./node_modules/superagent/lib/agent-base.js");
/**
 * Noop.
 */


function noop() {}
/**
 * Expose `request`.
 */


module.exports = function (method, url) {
  // callback
  if (typeof url === 'function') {
    return new exports.Request('GET', method).end(url);
  } // url first


  if (arguments.length === 1) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
};

exports = module.exports;
var request = exports;
exports.Request = Request;
/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest && (!root.location || root.location.protocol !== 'file:' || !root.ActiveXObject)) {
    return new XMLHttpRequest();
  }

  try {
    return new ActiveXObject('Microsoft.XMLHTTP');
  } catch (_unused) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP.6.0');
  } catch (_unused2) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP.3.0');
  } catch (_unused3) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP');
  } catch (_unused4) {}

  throw new Error('Browser-only version of superagent could not find XHR');
};
/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */


var trim = ''.trim ? function (s) {
  return s.trim();
} : function (s) {
  return s.replace(/(^\s*|\s*$)/g, '');
};
/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) pushEncodedKeyValuePair(pairs, key, obj[key]);
  }

  return pairs.join('&');
}
/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */


function pushEncodedKeyValuePair(pairs, key, val) {
  if (val === undefined) return;

  if (val === null) {
    pairs.push(encodeURI(key));
    return;
  }

  if (Array.isArray(val)) {
    val.forEach(function (v) {
      pushEncodedKeyValuePair(pairs, key, v);
    });
  } else if (isObject(val)) {
    for (var subkey in val) {
      if (Object.prototype.hasOwnProperty.call(val, subkey)) pushEncodedKeyValuePair(pairs, "".concat(key, "[").concat(subkey, "]"), val[subkey]);
    }
  } else {
    pairs.push(encodeURI(key) + '=' + encodeURIComponent(val));
  }
}
/**
 * Expose serialization method.
 */


request.serializeObject = serialize;
/**
 * Parse the given x-www-form-urlencoded `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');

    if (pos === -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}
/**
 * Expose parser.
 */


request.parseString = parseString;
/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  form: 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};
/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': qs.stringify,
  'application/json': safeStringify
};
/**
 * Default parsers.
 *
 *     superagent.parse['application/xml'] = function(str){
 *       return { object parsed from str };
 *     };
 *
 */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};
/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');

    if (index === -1) {
      // could be empty line, just skip it
      continue;
    }

    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}
/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */


function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[/+]json($|[^-\w])/i.test(mime);
}
/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */


function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr; // responseText is accessible only if responseType is '' or 'text' and on older browsers

  this.text = this.req.method !== 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status; // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request

  if (status === 1223) {
    status = 204;
  }

  this._setStatusProperties(status);

  this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  this.header = this.headers; // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.

  this.header['content-type'] = this.xhr.getResponseHeader('content-type');

  this._setHeaderProperties(this.header);

  if (this.text === null && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method === 'HEAD' ? null : this._parseBody(this.text ? this.text : this.xhr.response);
  }
} // eslint-disable-next-line new-cap


ResponseBase(Response.prototype);
/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function (str) {
  var parse = request.parse[this.type];

  if (this.req._parser) {
    return this.req._parser(this, str);
  }

  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }

  return parse && str && (str.length > 0 || str instanceof Object) ? parse(str) : null;
};
/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */


Response.prototype.toError = function () {
  var req = this.req;
  var method = req.method;
  var url = req.url;
  var msg = "cannot ".concat(method, " ").concat(url, " (").concat(this.status, ")");
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;
  return err;
};
/**
 * Expose `Response`.
 */


request.Response = Response;
/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case

  this._header = {}; // coerces header names to lowercase

  this.on('end', function () {
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch (err_) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = err_; // issue #675: return the raw response if the response parsing fails

      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType === 'undefined' ? self.xhr.responseText : self.xhr.response; // issue #876: return the http status code if the response parsing fails

        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);
    var new_err;

    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || res.text || 'Unsuccessful HTTP response');
      }
    } catch (err_) {
      new_err = err_; // ok() callback can throw
    } // #1000 don't catch errors from the callback to avoid double calling it


    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}
/**
 * Mixin `Emitter` and `RequestBase`.
 */
// eslint-disable-next-line new-cap


Emitter(Request.prototype); // eslint-disable-next-line new-cap

RequestBase(Request.prototype);
/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function (type) {
  this.set('Content-Type', request.types[type] || type);
  return this;
};
/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.accept = function (type) {
  this.set('Accept', request.types[type] || type);
  return this;
};
/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.auth = function (user, pass, options) {
  if (arguments.length === 1) pass = '';

  if (_typeof(pass) === 'object' && pass !== null) {
    // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }

  if (!options) {
    options = {
      type: typeof btoa === 'function' ? 'basic' : 'auto'
    };
  }

  var encoder = function encoder(string) {
    if (typeof btoa === 'function') {
      return btoa(string);
    }

    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};
/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.query = function (val) {
  if (typeof val !== 'string') val = serialize(val);
  if (val) this._query.push(val);
  return this;
};
/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.attach = function (field, file, options) {
  if (file) {
    if (this._data) {
      throw new Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }

  return this;
};

Request.prototype._getFormData = function () {
  if (!this._formData) {
    this._formData = new root.FormData();
  }

  return this._formData;
};
/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */


Request.prototype.callback = function (err, res) {
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};
/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */


Request.prototype.crossDomainError = function () {
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;
  err.status = this.status;
  err.method = this.method;
  err.url = this.url;
  this.callback(err);
}; // This only warns, because the request is still likely to work


Request.prototype.agent = function () {
  console.warn('This is not supported in browser version of superagent');
  return this;
};

Request.prototype.ca = Request.prototype.agent;
Request.prototype.buffer = Request.prototype.ca; // This throws, because it can't send/receive data as expected

Request.prototype.write = function () {
  throw new Error('Streaming is not supported in browser version of superagent');
};

Request.prototype.pipe = Request.prototype.write;
/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj host object
 * @return {Boolean} is a host object
 * @api private
 */

Request.prototype._isHost = function (obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && _typeof(obj) === 'object' && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
};
/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.end = function (fn) {
  if (this._endCalled) {
    console.warn('Warning: .end() was called twice. This is not supported in superagent');
  }

  this._endCalled = true; // store callback

  this._callback = fn || noop; // querystring

  this._finalizeQueryString();

  this._end();
};

Request.prototype._setUploadTimeout = function () {
  var self = this; // upload timeout it's wokrs only if deadline timeout is off

  if (this._uploadTimeout && !this._uploadTimeoutTimer) {
    this._uploadTimeoutTimer = setTimeout(function () {
      self._timeoutError('Upload timeout of ', self._uploadTimeout, 'ETIMEDOUT');
    }, this._uploadTimeout);
  }
}; // eslint-disable-next-line complexity


Request.prototype._end = function () {
  if (this._aborted) return this.callback(new Error('The request has been aborted even before .end() was called'));
  var self = this;
  this.xhr = request.getXHR();
  var xhr = this.xhr;
  var data = this._formData || this._data;

  this._setTimeouts(); // state change


  xhr.onreadystatechange = function () {
    var readyState = xhr.readyState;

    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }

    if (readyState !== 4) {
      return;
    } // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"


    var status;

    try {
      status = xhr.status;
    } catch (_unused5) {
      status = 0;
    }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }

    self.emit('end');
  }; // progress


  var handleProgress = function handleProgress(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;

      if (e.percent === 100) {
        clearTimeout(self._uploadTimeoutTimer);
      }
    }

    e.direction = direction;
    self.emit('progress', e);
  };

  if (this.hasListeners('progress')) {
    try {
      xhr.addEventListener('progress', handleProgress.bind(null, 'download'));

      if (xhr.upload) {
        xhr.upload.addEventListener('progress', handleProgress.bind(null, 'upload'));
      }
    } catch (_unused6) {// Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  if (xhr.upload) {
    this._setUploadTimeout();
  } // initiate request


  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  } // CORS


  if (this._withCredentials) xhr.withCredentials = true; // body

  if (!this._formData && this.method !== 'GET' && this.method !== 'HEAD' && typeof data !== 'string' && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];

    var _serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];

    if (!_serialize && isJSON(contentType)) {
      _serialize = request.serialize['application/json'];
    }

    if (_serialize) data = _serialize(data);
  } // set header fields


  for (var field in this.header) {
    if (this.header[field] === null) continue;
    if (Object.prototype.hasOwnProperty.call(this.header, field)) xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  } // send stuff


  this.emit('request', this); // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined

  xhr.send(typeof data === 'undefined' ? null : data);
};

request.agent = function () {
  return new Agent();
};

['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE'].forEach(function (method) {
  Agent.prototype[method.toLowerCase()] = function (url, fn) {
    var req = new request.Request(method, url);

    this._setDefaults(req);

    if (fn) {
      req.end(fn);
    }

    return req;
  };
});
Agent.prototype.del = Agent.prototype["delete"];
/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function (url, data, fn) {
  var req = request('GET', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.head = function (url, data, fn) {
  var req = request('HEAD', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.options = function (url, data, fn) {
  var req = request('OPTIONS', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


function del(url, data, fn) {
  var req = request('DELETE', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request.del = del;
request["delete"] = del;
/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function (url, data, fn) {
  var req = request('PATCH', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.post = function (url, data, fn) {
  var req = request('POST', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.put = function (url, data, fn) {
  var req = request('PUT', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/***/ }),

/***/ "./node_modules/superagent/lib/is-object.js":
/*!**************************************************!*\
  !*** ./node_modules/superagent/lib/is-object.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */


function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/superagent/lib/request-base.js":
/*!*****************************************************!*\
  !*** ./node_modules/superagent/lib/request-base.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/**
 * Module of mixed-in functions shared between node and client code
 */


var isObject = __webpack_require__(/*! ./is-object */ "./node_modules/superagent/lib/is-object.js");
/**
 * Expose `RequestBase`.
 */


module.exports = RequestBase;
/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(object) {
  if (object) return mixin(object);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */


function mixin(object) {
  for (var key in RequestBase.prototype) {
    if (Object.prototype.hasOwnProperty.call(RequestBase.prototype, key)) object[key] = RequestBase.prototype[key];
  }

  return object;
}
/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.clearTimeout = function () {
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  clearTimeout(this._uploadTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  delete this._uploadTimeoutTimer;
  return this;
};
/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */


RequestBase.prototype.parse = function (fn) {
  this._parser = fn;
  return this;
};
/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.responseType = function (value) {
  this._responseType = value;
  return this;
};
/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */


RequestBase.prototype.serialize = function (fn) {
  this._serializer = fn;
  return this;
};
/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 * - upload is the time  since last bit of data was sent or received. This timeout works only if deadline timeout is off
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.timeout = function (options) {
  if (!options || _typeof(options) !== 'object') {
    this._timeout = options;
    this._responseTimeout = 0;
    this._uploadTimeout = 0;
    return this;
  }

  for (var option in options) {
    if (Object.prototype.hasOwnProperty.call(options, option)) {
      switch (option) {
        case 'deadline':
          this._timeout = options.deadline;
          break;

        case 'response':
          this._responseTimeout = options.response;
          break;

        case 'upload':
          this._uploadTimeout = options.upload;
          break;

        default:
          console.warn('Unknown timeout option', option);
      }
    }
  }

  return this;
};
/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.retry = function (count, fn) {
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
}; //
// NOTE: we do not include ESOCKETTIMEDOUT because that is from `request` package
//       <https://github.com/sindresorhus/got/pull/537>
//
// NOTE: we do not include EADDRINFO because it was removed from libuv in 2014
//       <https://github.com/libuv/libuv/commit/02e1ebd40b807be5af46343ea873331b2ee4e9c1>
//       <https://github.com/request/request/search?q=ESOCKETTIMEDOUT&unscoped_q=ESOCKETTIMEDOUT>
//
//
// TODO: expose these as configurable defaults
//


var ERROR_CODES = new Set(['ETIMEDOUT', 'ECONNRESET', 'EADDRINUSE', 'ECONNREFUSED', 'EPIPE', 'ENOTFOUND', 'ENETUNREACH', 'EAI_AGAIN']);
var STATUS_CODES = new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]); // TODO: we would need to make this easily configurable before adding it in (e.g. some might want to add POST)
// const METHODS = new Set(['GET', 'PUT', 'HEAD', 'DELETE', 'OPTIONS', 'TRACE']);

/**
 * Determine if a request should be retried.
 * (Inspired by https://github.com/sindresorhus/got#retry)
 *
 * @param {Error} err an error
 * @param {Response} [res] response
 * @returns {Boolean} if segment should be retried
 */

RequestBase.prototype._shouldRetry = function (err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }

  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);

      if (override === true) return true;
      if (override === false) return false; // undefined falls back to defaults
    } catch (err_) {
      console.error(err_);
    }
  } // TODO: we would need to make this easily configurable before adding it in (e.g. some might want to add POST)

  /*
  if (
    this.req &&
    this.req.method &&
    !METHODS.has(this.req.method.toUpperCase())
  )
    return false;
  */


  if (res && res.status && STATUS_CODES.has(res.status)) return true;

  if (err) {
    if (err.code && ERROR_CODES.has(err.code)) return true; // Superagent timeout

    if (err.timeout && err.code === 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }

  return false;
};
/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */


RequestBase.prototype._retry = function () {
  this.clearTimeout(); // node

  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;
  this.timedoutError = null;
  return this._end();
};
/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */


RequestBase.prototype.then = function (resolve, reject) {
  var _this = this;

  if (!this._fullfilledPromise) {
    var self = this;

    if (this._endCalled) {
      console.warn('Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises');
    }

    this._fullfilledPromise = new Promise(function (resolve, reject) {
      self.on('abort', function () {
        if (_this._maxRetries && _this._maxRetries > _this._retries) {
          return;
        }

        if (_this.timedout && _this.timedoutError) {
          reject(_this.timedoutError);
          return;
        }

        var err = new Error('Aborted');
        err.code = 'ABORTED';
        err.status = _this.status;
        err.method = _this.method;
        err.url = _this.url;
        reject(err);
      });
      self.end(function (err, res) {
        if (err) reject(err);else resolve(res);
      });
    });
  }

  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype["catch"] = function (cb) {
  return this.then(undefined, cb);
};
/**
 * Allow for extension
 */


RequestBase.prototype.use = function (fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function (cb) {
  if (typeof cb !== 'function') throw new Error('Callback required');
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function (res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};
/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */


RequestBase.prototype.get = function (field) {
  return this._header[field.toLowerCase()];
};
/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */


RequestBase.prototype.getHeader = RequestBase.prototype.get;
/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function (field, value) {
  if (isObject(field)) {
    for (var key in field) {
      if (Object.prototype.hasOwnProperty.call(field, key)) this.set(key, field[key]);
    }

    return this;
  }

  this._header[field.toLowerCase()] = value;
  this.header[field] = value;
  return this;
};
/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field field name
 */


RequestBase.prototype.unset = function (field) {
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};
/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name name of field
 * @param {String|Blob|File|Buffer|fs.ReadStream} val value of field
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.field = function (name, value) {
  // name should be either a string or an object.
  if (name === null || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      if (Object.prototype.hasOwnProperty.call(name, key)) this.field(key, name[key]);
    }

    return this;
  }

  if (Array.isArray(value)) {
    for (var i in value) {
      if (Object.prototype.hasOwnProperty.call(value, i)) this.field(name, value[i]);
    }

    return this;
  } // val should be defined now


  if (value === null || undefined === value) {
    throw new Error('.field(name, val) val can not be empty');
  }

  if (typeof value === 'boolean') {
    value = String(value);
  }

  this._getFormData().append(name, value);

  return this;
};
/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request} request
 * @api public
 */


RequestBase.prototype.abort = function () {
  if (this._aborted) {
    return this;
  }

  this._aborted = true;
  if (this.xhr) this.xhr.abort(); // browser

  if (this.req) this.req.abort(); // node

  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function (user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', "Basic ".concat(base64Encoder("".concat(user, ":").concat(pass))));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer':
      // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', "Bearer ".concat(user));
      break;

    default:
      break;
  }

  return this;
};
/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */


RequestBase.prototype.withCredentials = function (on) {
  // This is browser-only functionality. Node side is no-op.
  if (on === undefined) on = true;
  this._withCredentials = on;
  return this;
};
/**
 * Set the max redirects to `n`. Does nothing in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.redirects = function (n) {
  this._maxRedirects = n;
  return this;
};
/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n number of bytes
 * @return {Request} for chaining
 */


RequestBase.prototype.maxResponseSize = function (n) {
  if (typeof n !== 'number') {
    throw new TypeError('Invalid argument');
  }

  this._maxResponseSize = n;
  return this;
};
/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */


RequestBase.prototype.toJSON = function () {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};
/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */
// eslint-disable-next-line complexity


RequestBase.prototype.send = function (data) {
  var isObject_ = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject_ && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw new Error("Can't merge these send calls");
  } // merge


  if (isObject_ && isObject(this._data)) {
    for (var key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) this._data[key] = data[key];
    }
  } else if (typeof data === 'string') {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if (type) type = type.toLowerCase().trim();

    if (type === 'application/x-www-form-urlencoded') {
      this._data = this._data ? "".concat(this._data, "&").concat(data) : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObject_ || this._isHost(data)) {
    return this;
  } // default to json


  if (!type) this.type('json');
  return this;
};
/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.sortQuery = function (sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};
/**
 * Compose querystring to append to req.url
 *
 * @api private
 */


RequestBase.prototype._finalizeQueryString = function () {
  var query = this._query.join('&');

  if (query) {
    this.url += (this.url.includes('?') ? '&' : '?') + query;
  }

  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');

    if (index >= 0) {
      var queryArray = this.url.slice(index + 1).split('&');

      if (typeof this._sort === 'function') {
        queryArray.sort(this._sort);
      } else {
        queryArray.sort();
      }

      this.url = this.url.slice(0, index) + '?' + queryArray.join('&');
    }
  }
}; // For backwards compat only


RequestBase.prototype._appendQueryString = function () {
  console.warn('Unsupported');
};
/**
 * Invoke callback with timeout error.
 *
 * @api private
 */


RequestBase.prototype._timeoutError = function (reason, timeout, errno) {
  if (this._aborted) {
    return;
  }

  var err = new Error("".concat(reason + timeout, "ms exceeded"));
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.timedoutError = err;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function () {
  var self = this; // deadline

  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function () {
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  } // response timeout


  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function () {
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};

/***/ }),

/***/ "./node_modules/superagent/lib/response-base.js":
/*!******************************************************!*\
  !*** ./node_modules/superagent/lib/response-base.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Module dependencies.
 */

var utils = __webpack_require__(/*! ./utils */ "./node_modules/superagent/lib/utils.js");
/**
 * Expose `ResponseBase`.
 */


module.exports = ResponseBase;
/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */


function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    if (Object.prototype.hasOwnProperty.call(ResponseBase.prototype, key)) obj[key] = ResponseBase.prototype[key];
  }

  return obj;
}
/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */


ResponseBase.prototype.get = function (field) {
  return this.header[field.toLowerCase()];
};
/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */


ResponseBase.prototype._setHeaderProperties = function (header) {
  // TODO: moar!
  // TODO: make this a util
  // content-type
  var ct = header['content-type'] || '';
  this.type = utils.type(ct); // params

  var params = utils.params(ct);

  for (var key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) this[key] = params[key];
  }

  this.links = {}; // links

  try {
    if (header.link) {
      this.links = utils.parseLinks(header.link);
    }
  } catch (_unused) {// ignore
  }
};
/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */


ResponseBase.prototype._setStatusProperties = function (status) {
  var type = status / 100 | 0; // status / class

  this.statusCode = status;
  this.status = this.statusCode;
  this.statusType = type; // basics

  this.info = type === 1;
  this.ok = type === 2;
  this.redirect = type === 3;
  this.clientError = type === 4;
  this.serverError = type === 5;
  this.error = type === 4 || type === 5 ? this.toError() : false; // sugar

  this.created = status === 201;
  this.accepted = status === 202;
  this.noContent = status === 204;
  this.badRequest = status === 400;
  this.unauthorized = status === 401;
  this.notAcceptable = status === 406;
  this.forbidden = status === 403;
  this.notFound = status === 404;
  this.unprocessableEntity = status === 422;
};

/***/ }),

/***/ "./node_modules/superagent/lib/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/superagent/lib/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */


exports.type = function (str) {
  return str.split(/ *; */).shift();
};
/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */


exports.params = function (val) {
  var obj = {};

  var _iterator = _createForOfIteratorHelper(val.split(/ *; */)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var str = _step.value;
      var parts = str.split(/ *= */);
      var key = parts.shift();

      var _val = parts.shift();

      if (key && _val) obj[key] = _val;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return obj;
};
/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */


exports.parseLinks = function (val) {
  var obj = {};

  var _iterator2 = _createForOfIteratorHelper(val.split(/ *, */)),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var str = _step2.value;
      var parts = str.split(/ *; */);
      var url = parts[0].slice(1, -1);
      var rel = parts[1].split(/ *= */)[1].slice(1, -1);
      obj[rel] = url;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return obj;
};
/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */


exports.cleanHeader = function (header, changesOrigin) {
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header.host; // secuirty

  if (changesOrigin) {
    delete header.authorization;
    delete header.cookie;
  }

  return header;
};

/***/ }),

/***/ "./node_modules/superagent/node_modules/qs/lib/formats.js":
/*!****************************************************************!*\
  !*** ./node_modules/superagent/node_modules/qs/lib/formats.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__(/*! ./utils */ "./node_modules/superagent/node_modules/qs/lib/utils.js");

var Format = {
  RFC1738: 'RFC1738',
  RFC3986: 'RFC3986'
};
module.exports = util.assign({
  'default': Format.RFC3986,
  formatters: {
    RFC1738: function RFC1738(value) {
      return replace.call(value, percentTwenties, '+');
    },
    RFC3986: function RFC3986(value) {
      return String(value);
    }
  }
}, Format);

/***/ }),

/***/ "./node_modules/superagent/node_modules/qs/lib/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/superagent/node_modules/qs/lib/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/superagent/node_modules/qs/lib/stringify.js");

var parse = __webpack_require__(/*! ./parse */ "./node_modules/superagent/node_modules/qs/lib/parse.js");

var formats = __webpack_require__(/*! ./formats */ "./node_modules/superagent/node_modules/qs/lib/formats.js");

module.exports = {
  formats: formats,
  parse: parse,
  stringify: stringify
};

/***/ }),

/***/ "./node_modules/superagent/node_modules/qs/lib/parse.js":
/*!**************************************************************!*\
  !*** ./node_modules/superagent/node_modules/qs/lib/parse.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/superagent/node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
  allowDots: false,
  allowPrototypes: false,
  arrayLimit: 20,
  charset: 'utf-8',
  charsetSentinel: false,
  comma: false,
  decoder: utils.decode,
  delimiter: '&',
  depth: 5,
  ignoreQueryPrefix: false,
  interpretNumericEntities: false,
  parameterLimit: 1000,
  parseArrays: true,
  plainObjects: false,
  strictNullHandling: false
};

var interpretNumericEntities = function interpretNumericEntities(str) {
  return str.replace(/&#(\d+);/g, function ($0, numberStr) {
    return String.fromCharCode(parseInt(numberStr, 10));
  });
};

var parseArrayValue = function parseArrayValue(val, options) {
  if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
    return val.split(',');
  }

  return val;
}; // This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.


var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.

var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
  var obj = {};
  var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
  var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
  var parts = cleanStr.split(options.delimiter, limit);
  var skipIndex = -1; // Keep track of where the utf8 sentinel was found

  var i;
  var charset = options.charset;

  if (options.charsetSentinel) {
    for (i = 0; i < parts.length; ++i) {
      if (parts[i].indexOf('utf8=') === 0) {
        if (parts[i] === charsetSentinel) {
          charset = 'utf-8';
        } else if (parts[i] === isoSentinel) {
          charset = 'iso-8859-1';
        }

        skipIndex = i;
        i = parts.length; // The eslint settings do not allow break;
      }
    }
  }

  for (i = 0; i < parts.length; ++i) {
    if (i === skipIndex) {
      continue;
    }

    var part = parts[i];
    var bracketEqualsPos = part.indexOf(']=');
    var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
    var key, val;

    if (pos === -1) {
      key = options.decoder(part, defaults.decoder, charset, 'key');
      val = options.strictNullHandling ? null : '';
    } else {
      key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
      val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function (encodedVal) {
        return options.decoder(encodedVal, defaults.decoder, charset, 'value');
      });
    }

    if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
      val = interpretNumericEntities(val);
    }

    if (part.indexOf('[]=') > -1) {
      val = isArray(val) ? [val] : val;
    }

    if (has.call(obj, key)) {
      obj[key] = utils.combine(obj[key], val);
    } else {
      obj[key] = val;
    }
  }

  return obj;
};

var parseObject = function parseObject(chain, val, options, valuesParsed) {
  var leaf = valuesParsed ? val : parseArrayValue(val, options);

  for (var i = chain.length - 1; i >= 0; --i) {
    var obj;
    var root = chain[i];

    if (root === '[]' && options.parseArrays) {
      obj = [].concat(leaf);
    } else {
      obj = options.plainObjects ? Object.create(null) : {};
      var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
      var index = parseInt(cleanRoot, 10);

      if (!options.parseArrays && cleanRoot === '') {
        obj = {
          0: leaf
        };
      } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
        obj = [];
        obj[index] = leaf;
      } else {
        obj[cleanRoot] = leaf;
      }
    }

    leaf = obj; // eslint-disable-line no-param-reassign
  }

  return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
  if (!givenKey) {
    return;
  } // Transform dot notation to bracket notation


  var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey; // The regex chunks

  var brackets = /(\[[^[\]]*])/;
  var child = /(\[[^[\]]*])/g; // Get the parent

  var segment = options.depth > 0 && brackets.exec(key);
  var parent = segment ? key.slice(0, segment.index) : key; // Stash the parent if it exists

  var keys = [];

  if (parent) {
    // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
    if (!options.plainObjects && has.call(Object.prototype, parent)) {
      if (!options.allowPrototypes) {
        return;
      }
    }

    keys.push(parent);
  } // Loop through children appending to the array until we hit depth


  var i = 0;

  while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
    i += 1;

    if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
      if (!options.allowPrototypes) {
        return;
      }
    }

    keys.push(segment[1]);
  } // If there's a remainder, just add whatever is left


  if (segment) {
    keys.push('[' + key.slice(segment.index) + ']');
  }

  return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
  if (!opts) {
    return defaults;
  }

  if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
    throw new TypeError('Decoder has to be a function.');
  }

  if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
    throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
  }

  var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;
  return {
    allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
    allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
    arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
    charset: charset,
    charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
    comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
    decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
    delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof opts.depth === 'number' || opts.depth === false ? +opts.depth : defaults.depth,
    ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
    interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
    parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
    parseArrays: opts.parseArrays !== false,
    plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
    strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
  };
};

module.exports = function (str, opts) {
  var options = normalizeParseOptions(opts);

  if (str === '' || str === null || typeof str === 'undefined') {
    return options.plainObjects ? Object.create(null) : {};
  }

  var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
  var obj = options.plainObjects ? Object.create(null) : {}; // Iterate over the keys and setup the new object

  var keys = Object.keys(tempObj);

  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];
    var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
    obj = utils.merge(obj, newObj, options);
  }

  return utils.compact(obj);
};

/***/ }),

/***/ "./node_modules/superagent/node_modules/qs/lib/stringify.js":
/*!******************************************************************!*\
  !*** ./node_modules/superagent/node_modules/qs/lib/stringify.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var utils = __webpack_require__(/*! ./utils */ "./node_modules/superagent/node_modules/qs/lib/utils.js");

var formats = __webpack_require__(/*! ./formats */ "./node_modules/superagent/node_modules/qs/lib/formats.js");

var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
  brackets: function brackets(prefix) {
    return prefix + '[]';
  },
  comma: 'comma',
  indices: function indices(prefix, key) {
    return prefix + '[' + key + ']';
  },
  repeat: function repeat(prefix) {
    return prefix;
  }
};
var isArray = Array.isArray;
var push = Array.prototype.push;

var pushToArray = function pushToArray(arr, valueOrArray) {
  push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;
var defaultFormat = formats['default'];
var defaults = {
  addQueryPrefix: false,
  allowDots: false,
  charset: 'utf-8',
  charsetSentinel: false,
  delimiter: '&',
  encode: true,
  encoder: utils.encode,
  encodeValuesOnly: false,
  format: defaultFormat,
  formatter: formats.formatters[defaultFormat],
  // deprecated
  indices: false,
  serializeDate: function serializeDate(date) {
    return toISO.call(date);
  },
  skipNulls: false,
  strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
  return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || _typeof(v) === 'symbol' || typeof v === 'bigint';
};

var stringify = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset) {
  var obj = object;

  if (typeof filter === 'function') {
    obj = filter(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate(obj);
  } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
    obj = utils.maybeMap(obj, function (value) {
      if (value instanceof Date) {
        return serializeDate(value);
      }

      return value;
    }).join(',');
  }

  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
    }

    obj = '';
  }

  if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
    if (encoder) {
      var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
      return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
    }

    return [formatter(prefix) + '=' + formatter(String(obj))];
  }

  var values = [];

  if (typeof obj === 'undefined') {
    return values;
  }

  var objKeys;

  if (isArray(filter)) {
    objKeys = filter;
  } else {
    var keys = Object.keys(obj);
    objKeys = sort ? keys.sort(sort) : keys;
  }

  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];
    var value = obj[key];

    if (skipNulls && value === null) {
      continue;
    }

    var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix : prefix + (allowDots ? '.' + key : '[' + key + ']');
    pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset));
  }

  return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
  if (!opts) {
    return defaults;
  }

  if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
    throw new TypeError('Encoder has to be a function.');
  }

  var charset = opts.charset || defaults.charset;

  if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
    throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
  }

  var format = formats['default'];

  if (typeof opts.format !== 'undefined') {
    if (!has.call(formats.formatters, opts.format)) {
      throw new TypeError('Unknown format option provided.');
    }

    format = opts.format;
  }

  var formatter = formats.formatters[format];
  var filter = defaults.filter;

  if (typeof opts.filter === 'function' || isArray(opts.filter)) {
    filter = opts.filter;
  }

  return {
    addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
    allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
    charset: charset,
    charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
    delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
    encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
    encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
    encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
    filter: filter,
    formatter: formatter,
    serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
    skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
    sort: typeof opts.sort === 'function' ? opts.sort : null,
    strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
  };
};

module.exports = function (object, opts) {
  var obj = object;
  var options = normalizeStringifyOptions(opts);
  var objKeys;
  var filter;

  if (typeof options.filter === 'function') {
    filter = options.filter;
    obj = filter('', obj);
  } else if (isArray(options.filter)) {
    filter = options.filter;
    objKeys = filter;
  }

  var keys = [];

  if (_typeof(obj) !== 'object' || obj === null) {
    return '';
  }

  var arrayFormat;

  if (opts && opts.arrayFormat in arrayPrefixGenerators) {
    arrayFormat = opts.arrayFormat;
  } else if (opts && 'indices' in opts) {
    arrayFormat = opts.indices ? 'indices' : 'repeat';
  } else {
    arrayFormat = 'indices';
  }

  var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

  if (!objKeys) {
    objKeys = Object.keys(obj);
  }

  if (options.sort) {
    objKeys.sort(options.sort);
  }

  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];

    if (options.skipNulls && obj[key] === null) {
      continue;
    }

    pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.formatter, options.encodeValuesOnly, options.charset));
  }

  var joined = keys.join(options.delimiter);
  var prefix = options.addQueryPrefix === true ? '?' : '';

  if (options.charsetSentinel) {
    if (options.charset === 'iso-8859-1') {
      // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
      prefix += 'utf8=%26%2310003%3B&';
    } else {
      // encodeURIComponent('✓')
      prefix += 'utf8=%E2%9C%93&';
    }
  }

  return joined.length > 0 ? prefix + joined : '';
};

/***/ }),

/***/ "./node_modules/superagent/node_modules/qs/lib/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/superagent/node_modules/qs/lib/utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = function () {
  var array = [];

  for (var i = 0; i < 256; ++i) {
    array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
  }

  return array;
}();

var compactQueue = function compactQueue(queue) {
  while (queue.length > 1) {
    var item = queue.pop();
    var obj = item.obj[item.prop];

    if (isArray(obj)) {
      var compacted = [];

      for (var j = 0; j < obj.length; ++j) {
        if (typeof obj[j] !== 'undefined') {
          compacted.push(obj[j]);
        }
      }

      item.obj[item.prop] = compacted;
    }
  }
};

var arrayToObject = function arrayToObject(source, options) {
  var obj = options && options.plainObjects ? Object.create(null) : {};

  for (var i = 0; i < source.length; ++i) {
    if (typeof source[i] !== 'undefined') {
      obj[i] = source[i];
    }
  }

  return obj;
};

var merge = function merge(target, source, options) {
  /* eslint no-param-reassign: 0 */
  if (!source) {
    return target;
  }

  if (_typeof(source) !== 'object') {
    if (isArray(target)) {
      target.push(source);
    } else if (target && _typeof(target) === 'object') {
      if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
        target[source] = true;
      }
    } else {
      return [target, source];
    }

    return target;
  }

  if (!target || _typeof(target) !== 'object') {
    return [target].concat(source);
  }

  var mergeTarget = target;

  if (isArray(target) && !isArray(source)) {
    mergeTarget = arrayToObject(target, options);
  }

  if (isArray(target) && isArray(source)) {
    source.forEach(function (item, i) {
      if (has.call(target, i)) {
        var targetItem = target[i];

        if (targetItem && _typeof(targetItem) === 'object' && item && _typeof(item) === 'object') {
          target[i] = merge(targetItem, item, options);
        } else {
          target.push(item);
        }
      } else {
        target[i] = item;
      }
    });
    return target;
  }

  return Object.keys(source).reduce(function (acc, key) {
    var value = source[key];

    if (has.call(acc, key)) {
      acc[key] = merge(acc[key], value, options);
    } else {
      acc[key] = value;
    }

    return acc;
  }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
  return Object.keys(source).reduce(function (acc, key) {
    acc[key] = source[key];
    return acc;
  }, target);
};

var decode = function decode(str, decoder, charset) {
  var strWithoutPlus = str.replace(/\+/g, ' ');

  if (charset === 'iso-8859-1') {
    // unescape never throws, no try...catch needed:
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
  } // utf-8


  try {
    return decodeURIComponent(strWithoutPlus);
  } catch (e) {
    return strWithoutPlus;
  }
};

var encode = function encode(str, defaultEncoder, charset) {
  // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
  // It has been adapted here for stricter adherence to RFC 3986
  if (str.length === 0) {
    return str;
  }

  var string = str;

  if (_typeof(str) === 'symbol') {
    string = Symbol.prototype.toString.call(str);
  } else if (typeof str !== 'string') {
    string = String(str);
  }

  if (charset === 'iso-8859-1') {
    return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
      return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
    });
  }

  var out = '';

  for (var i = 0; i < string.length; ++i) {
    var c = string.charCodeAt(i);

    if (c === 0x2D // -
    || c === 0x2E // .
    || c === 0x5F // _
    || c === 0x7E // ~
    || c >= 0x30 && c <= 0x39 // 0-9
    || c >= 0x41 && c <= 0x5A // a-z
    || c >= 0x61 && c <= 0x7A // A-Z
    ) {
        out += string.charAt(i);
        continue;
      }

    if (c < 0x80) {
      out = out + hexTable[c];
      continue;
    }

    if (c < 0x800) {
      out = out + (hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F]);
      continue;
    }

    if (c < 0xD800 || c >= 0xE000) {
      out = out + (hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]);
      continue;
    }

    i += 1;
    c = 0x10000 + ((c & 0x3FF) << 10 | string.charCodeAt(i) & 0x3FF);
    out += hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
  }

  return out;
};

var compact = function compact(value) {
  var queue = [{
    obj: {
      o: value
    },
    prop: 'o'
  }];
  var refs = [];

  for (var i = 0; i < queue.length; ++i) {
    var item = queue[i];
    var obj = item.obj[item.prop];
    var keys = Object.keys(obj);

    for (var j = 0; j < keys.length; ++j) {
      var key = keys[j];
      var val = obj[key];

      if (_typeof(val) === 'object' && val !== null && refs.indexOf(val) === -1) {
        queue.push({
          obj: obj,
          prop: key
        });
        refs.push(val);
      }
    }
  }

  compactQueue(queue);
  return value;
};

var isRegExp = function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
  if (!obj || _typeof(obj) !== 'object') {
    return false;
  }

  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
  return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
  if (isArray(val)) {
    var mapped = [];

    for (var i = 0; i < val.length; i += 1) {
      mapped.push(fn(val[i]));
    }

    return mapped;
  }

  return fn(val);
};

module.exports = {
  arrayToObject: arrayToObject,
  assign: assign,
  combine: combine,
  compact: compact,
  decode: decode,
  encode: encode,
  isBuffer: isBuffer,
  isRegExp: isRegExp,
  maybeMap: maybeMap,
  merge: merge
};

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return _assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};


function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
}
;
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}
;

var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
}

/***/ })

/******/ });
//# sourceMappingURL=calendar-config-b245ca5f131740aa3c06.js.map