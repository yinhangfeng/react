const EventPluginRegistry = require('react-dom/lib/EventPluginRegistry');
const ResponderEventPlugin = require('react-dom/lib/ResponderEventPlugin');

const normalizeNativeEvent = require('./normalizeNativeEvent');

const responderDependencies = {
  topMouseDown: 'topMouseDown',
  topMouseMove: 'topMouseMove',
  topMouseUp: 'topMouseUp',
  topScroll: 'topScroll',
  topSelectionChange: 'topSelectionChange',
  topTouchCancel: 'topTouchCancel',
  topTouchEnd: 'topTouchEnd',
  topTouchMove: 'topTouchMove',
  topTouchStart: 'topTouchStart',
};



const endDependencies = [ responderDependencies.topTouchCancel, responderDependencies.topTouchEnd, responderDependencies.topMouseUp ];
const moveDependencies = [ responderDependencies.topTouchMove, responderDependencies.topMouseMove ];
const startDependencies = [ responderDependencies.topTouchStart, responderDependencies.topMouseDown ];
const emptyDependencies = [];

/**
 * Setup ResponderEventPlugin dependencies
 */
ResponderEventPlugin.eventTypes.responderMove.dependencies = moveDependencies;
ResponderEventPlugin.eventTypes.responderEnd.dependencies = endDependencies;
ResponderEventPlugin.eventTypes.responderStart.dependencies = startDependencies;
ResponderEventPlugin.eventTypes.responderRelease.dependencies = endDependencies;
ResponderEventPlugin.eventTypes.responderTerminationRequest.dependencies = emptyDependencies;
ResponderEventPlugin.eventTypes.responderGrant.dependencies = emptyDependencies;
ResponderEventPlugin.eventTypes.responderReject.dependencies = emptyDependencies;
ResponderEventPlugin.eventTypes.responderTerminate.dependencies = emptyDependencies;
ResponderEventPlugin.eventTypes.moveShouldSetResponder.dependencies = moveDependencies;
ResponderEventPlugin.eventTypes.selectionChangeShouldSetResponder.dependencies = [ responderDependencies.topSelectionChange ];
ResponderEventPlugin.eventTypes.scrollShouldSetResponder.dependencies = [ responderDependencies.topScroll ];
ResponderEventPlugin.eventTypes.startShouldSetResponder.dependencies = startDependencies;



const originalExtractEvents = ResponderEventPlugin.extractEvents;
ResponderEventPlugin.extractEvents = function(
  topLevelType,
  targetInst,
  nativeEvent,
  nativeEventTarget
) {
  if (responderDependencies[topLevelType]) {
    // TODO nativeEvent 重用
    nativeEvent = normalizeNativeEvent(nativeEvent);
    return originalExtractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
  }
  return null;
};

EventPluginRegistry.injectEventPluginsByName({
  ResponderEventPlugin
});