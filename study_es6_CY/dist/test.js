"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var sentences = [{
  subject: "JavaScript",
  verb: "is",
  object: "great"
}, {
  subject: "Elephants",
  verb: "are",
  object: "great"
}];

var say = function say(_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      subject = _ref2[0],
      verb = _ref2[1],
      object = _ref2[2];

  console.log("".concat(subject).concat(verb).concat(object));
};

for (var _i2 = 0; _i2 < sentences.length; _i2++) {
  var s = sentences[_i2];
  say(s);
}