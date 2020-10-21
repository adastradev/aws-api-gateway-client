"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
var utils = {
  assertDefined: function assertDefined(object, name) {
    if (object === undefined) {
      throw new Error("".concat(name, " must be defined"));
    } else {
      return object;
    }
  },
  assertParametersDefined: function assertParametersDefined(params, keys, ignore) {
    if (keys === undefined) {
      return;
    }

    if (keys.length > 0 && params === undefined) {
      params = {};
    }

    for (var i = 0; i < keys.length; i++) {
      if (!utils.contains(ignore, keys[i])) {
        utils.assertDefined(params[keys[i]], keys[i]);
      }
    }
  },
  parseParametersToObject: function parseParametersToObject(params, keys) {
    if (params === undefined) {
      return {};
    }

    var object = {};

    for (var i = 0; i < keys.length; i++) {
      object[keys[i]] = params[keys[i]];
    }

    return object;
  },
  contains: function contains(a, obj) {
    if (a === undefined) {
      return false;
    }

    var i = a.length;

    while (i--) {
      if (a[i] === obj) {
        return true;
      }
    }

    return false;
  },
  copy: function copy(obj) {
    if (null === obj || 'object' !== (0, _typeof2["default"])(obj)) return obj;

    var Buffer = require('buffer').Buffer;

    if (Buffer.isBuffer(obj)) return Buffer.from(obj);
    var copy = obj.constructor();
    var attr = null;

    for (attr in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, attr)) copy[attr] = obj[attr];
    }

    return copy;
  },
  mergeInto: function mergeInto(baseObj, additionalProps) {
    if (null === baseObj || 'object' !== (0, _typeof2["default"])(baseObj)) return baseObj;
    var merged = baseObj.constructor();
    var attr = null;

    for (attr in baseObj) {
      if (Object.prototype.hasOwnProperty.call(baseObj, attr)) merged[attr] = baseObj[attr];
    }

    if (null == additionalProps || 'object' != (0, _typeof2["default"])(additionalProps)) return baseObj;

    for (attr in additionalProps) {
      if (Object.prototype.hasOwnProperty.call(additionalProps, attr)) {
        merged[attr] = additionalProps[attr];
      }
    }

    return merged;
  }
};
var _default = utils;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYXBpR2F0ZXdheUNvcmUvdXRpbHMuanMiXSwibmFtZXMiOlsidXRpbHMiLCJhc3NlcnREZWZpbmVkIiwib2JqZWN0IiwibmFtZSIsInVuZGVmaW5lZCIsIkVycm9yIiwiYXNzZXJ0UGFyYW1ldGVyc0RlZmluZWQiLCJwYXJhbXMiLCJrZXlzIiwiaWdub3JlIiwibGVuZ3RoIiwiaSIsImNvbnRhaW5zIiwicGFyc2VQYXJhbWV0ZXJzVG9PYmplY3QiLCJhIiwib2JqIiwiY29weSIsIkJ1ZmZlciIsInJlcXVpcmUiLCJpc0J1ZmZlciIsImZyb20iLCJjb25zdHJ1Y3RvciIsImF0dHIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJtZXJnZUludG8iLCJiYXNlT2JqIiwiYWRkaXRpb25hbFByb3BzIiwibWVyZ2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUc7QUFDWkMsRUFBQUEsYUFBYSxFQUFFLHVCQUFTQyxNQUFULEVBQWlCQyxJQUFqQixFQUF1QjtBQUNwQyxRQUFJRCxNQUFNLEtBQUtFLFNBQWYsRUFBMEI7QUFDeEIsWUFBTSxJQUFJQyxLQUFKLFdBQWFGLElBQWIsc0JBQU47QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPRCxNQUFQO0FBQ0Q7QUFDRixHQVBXO0FBUVpJLEVBQUFBLHVCQUF1QixFQUFFLGlDQUFTQyxNQUFULEVBQWlCQyxJQUFqQixFQUF1QkMsTUFBdkIsRUFBK0I7QUFDdEQsUUFBSUQsSUFBSSxLQUFLSixTQUFiLEVBQXdCO0FBQ3RCO0FBQ0Q7O0FBQ0QsUUFBSUksSUFBSSxDQUFDRSxNQUFMLEdBQWMsQ0FBZCxJQUFtQkgsTUFBTSxLQUFLSCxTQUFsQyxFQUE2QztBQUMzQ0csTUFBQUEsTUFBTSxHQUFHLEVB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Q0FBTixHQUFlTSxPQUFPLENBQUNOLElBQUQsQ0FBdEI7QUFDMUQ7O0FBQ0QsUUFBSSxRQUFRTyxlQUFSLElBQTJCLHFDQUFtQkEsZUFBbkIsQ0FBL0IsRUFBbUUsT0FBT0QsT0FBUDs7QUFDbkUsU0FBS04sSUFBTCxJQUFhTyxlQUFiLEVBQThCO0FBQzVCLFVBQUlOLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDRyxlQUFyQyxFQUFzRFAsSUFBdEQsQ0FBSixFQUFpRTtBQUMvRFEsUUFBQUEsTUFBTSxDQUFDUixJQUFELENBQU4sR0FBZU8sZUFBZSxDQUFDUCxJQUFELENBQTlCO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPUSxNQUFQO0FBQ0Q7QUFwRVcsQ0FBZDtlQXVFZTlCLEsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTAtMjAxNiBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIikuXG4gKiBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBBIGNvcHkgb2YgdGhlIExpY2Vuc2UgaXMgbG9jYXRlZCBhdFxuICpcbiAqICBodHRwOi8vYXdzLmFtYXpvbi5jb20vYXBhY2hlMi4wXG4gKlxuICogb3IgaW4gdGhlIFwibGljZW5zZVwiIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkXG4gKiBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiAqIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gKiBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuY29uc3QgdXRpbHMgPSB7XG4gIGFzc2VydERlZmluZWQ6IGZ1bmN0aW9uKG9iamVjdCwgbmFtZSkge1xuICAgIGlmIChvYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke25hbWV9IG11c3QgYmUgZGVmaW5lZGApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH1cbiAgfSxcbiAgYXNzZXJ0UGFyYW1ldGVyc0RlZmluZWQ6IGZ1bmN0aW9uKHBhcmFtcywga2V5cywgaWdub3JlKSB7XG4gICAgaWYgKGtleXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoa2V5cy5sZW5ndGggPiAwICYmIHBhcmFtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMgPSB7fTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXV0aWxzLmNvbnRhaW5zKGlnbm9yZSwga2V5c1tpXSkpIHtcbiAgICAgICAgdXRpbHMuYXNzZXJ0RGVmaW5lZChwYXJhbXNba2V5c1tpXV0sIGtleXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcGFyc2VQYXJhbWV0ZXJzVG9PYmplY3Q6IGZ1bmN0aW9uKHBhcmFtcywga2V5cykge1xuICAgIGlmIChwYXJhbXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBsZXQgb2JqZWN0ID0geyB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0W2tleXNbaV1dID0gcGFyYW1zW2tleXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9LFxuICBjb250YWluczogZnVuY3Rpb24oYSwgb2JqKSB7XG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgaSA9IGEubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmIChhW2ldID09PSBvYmopIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgY29weTogZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG51bGwgPT09IG9iaiB8fCAnb2JqZWN0JyAhPT0gdHlwZW9mIG9iaikgcmV0dXJuIG9iajtcbiAgICBsZXQgQnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyO1xuICAgIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkgcmV0dXJuIEJ1ZmZlci5mcm9tKG9iaik7XG4gICAgbGV0IGNvcHkgPSBvYmouY29uc3RydWN0b3IoKTtcbiAgICBsZXQgYXR0ciA9IG51bGw7XG4gICAgZm9yIChhdHRyIGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGF0dHIpKSBjb3B5W2F0dHJdID0gb2JqW2F0dHJdO1xuICAgIH1cbiAgICByZXR1cm4gY29weTtcbiAgfSxcbiAgbWVyZ2VJbnRvOiBmdW5jdGlvbihiYXNlT2JqLCBhZGRpdGlvbmFsUHJvcHMpIHtcbiAgICBpZiAobnVsbCA9PT0gYmFzZU9iaiB8fCAnb2JqZWN0JyAhPT0gdHlwZW9mIGJhc2VPYmopIHJldHVybiBiYXNlT2JqO1xuICAgIGxldCBtZXJnZWQgPSBiYXNlT2JqLmNvbnN0cnVjdG9yKCk7XG4gICAgbGV0IGF0dHIgPSBudWxsO1xuICAgIGZvciAoYXR0ciBpbiBiYXNlT2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGJhc2VPYmosIGF0dHIpKSBtZXJnZWRbYXR0cl0gPSBiYXNlT2JqW2F0dHJdO1xuICAgIH1cbiAgICBpZiAobnVsbCA9PSBhZGRpdGlvbmFsUHJvcHMgfHwgJ29iamVjdCcgIT0gdHlwZW9mIGFkZGl0aW9uYWxQcm9wcykgcmV0dXJuIGJhc2VPYmo7XG4gICAgZm9yIChhdHRyIGluIGFkZGl0aW9uYWxQcm9wcykge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhZGRpdGlvbmFsUHJvcHMsIGF0dHIpKSB7XG4gICAgICAgIG1lcmdlZFthdHRyXSA9IGFkZGl0aW9uYWxQcm9wc1thdHRyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG4iXX0=