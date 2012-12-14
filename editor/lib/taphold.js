/**
 *  Copyright (c) 2011 Zauber S.A. <http://www.zaubersoftware.com/>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 * 
 *  @author Guido Marucci Blas - guido@zaubersoftware.com
 *  @description Adds a handler for a custom event 'taphold' that handles a
 *  tap and hold on touch interfaces.
 */
(function($) {
    var TAP_AND_HOLD_TRIGGER_TIMER = 1000;
    var MAX_DISTANCE_ALLOWED_IN_TAP_AND_HOLD_EVENT = 5;
    var TOUCHSTART = "touchstart";
    var TOUCHEND = "touchend";
    var TOUCHMOVE = "touchmove";

    // For debugging only
    // var TOUCHSTART = "mousedown";
    // var TOUCHEND = "mouseup";
    // var TOUCHMOVE = "mousemove";

    var tapAndHoldTimer = null;

    function calculateEuclideanDistance(x1, y1, x2, y2) {
        var diffX = (x2 - x1);
        var diffY = (y2 - y1);
        return Math.sqrt((diffX * diffX) + (diffY * diffY));
    };

    function onTouchStart(event) {
        var e = event.originalEvent;

        // Only start detector if and only if one finger is over the widget
        if (!e.touches || (e.targetTouches.length === 1 && e.touches.length === 1)) {
            startTapAndHoldDetector.call(this, event)
            var element = $(this);
            element.bind(TOUCHMOVE, onTouchMove);
            element.bind(TOUCHEND, onTouchEnd); 
        } else {
            stopTapAndHoldDetector.call(this);
        }   
    };

    function onTouchMove(event) {
        if (tapAndHoldTimer == null) {
            return;
        }

        var e = event.originalEvent;
        var x = (e.changedTouches) ? e.changedTouches[0].pageX: e.pageX;
        var y = (e.changedTouches) ? e.changedTouches[0].pageY: e.pageY;
        
        var tapAndHoldPoint = $(this).data("taphold.point");
        var euclideanDistance = calculateEuclideanDistance(tapAndHoldPoint.x, tapAndHoldPoint.y, x, y);
                
        if (euclideanDistance > MAX_DISTANCE_ALLOWED_IN_TAP_AND_HOLD_EVENT) {
            stopTapAndHoldDetector.call(this);
        }
    };

    function onTouchEnd(event) {
        stopTapAndHoldDetector.call(this);
    };

    function onTapAndHold(event) {
        clear.call(this);
        $(this).data("taphold.handler").call(this, event);
    };

    function clear() {
        tapAndHoldTimer = null;
        $(this).unbind(TOUCHMOVE, onTouchMove);
        $(this).unbind(TOUCHEND, onTouchEnd);   
    };

    function startTapAndHoldDetector(event) {
        if (tapAndHoldTimer != null) {
            return;
        }
        var self = this;
        tapAndHoldTimer = setTimeout(function(){
            onTapAndHold.call(self, event)
        }, TAP_AND_HOLD_TRIGGER_TIMER);

        // Stores tap x & y
        var e = event.originalEvent;
        var tapAndHoldPoint = {};
        tapAndHoldPoint.x = (e.changedTouches) ? e.changedTouches[0].pageX: e.pageX;
        tapAndHoldPoint.y = (e.changedTouches) ? e.changedTouches[0].pageY: e.pageY;
        $(this).data("taphold.point", tapAndHoldPoint);
    };

    function stopTapAndHoldDetector() {
        clearTimeout(tapAndHoldTimer);
        clear.call(this);   
    };

    $.event.special["taphold"] = {
        setup: function() {
            
        },

        add: function(handleObj) {
            $(this).data("taphold.handler", handleObj.handler);
            if (handleObj.data) {
                $(this).bind(TOUCHSTART, handleObj.data, onTouchStart);
            } else {
                $(this).bind(TOUCHSTART, onTouchStart);
            }
        },

        remove: function(handleObj) {
            stopTapAndHoldDetector.call(this);
            if (handleObj.data) {
                $(this).unbind(TOUCHSTART, handleObj.data, onTouchStart);
            } else {
                $(this).unbind(TOUCHSTART, onTouchStart);
            }
        },

        teardown: function() {
            
        }
    };

})(jQuery);