/*!
 * name: @feizheng/next-dom-find-ancestor
 * description: Find the closest ancestor element that has a specific class.
 * url: https://github.com/afeiship/next-dom-find-ancestor
 * version: 1.0.0
 * date: 2019-12-31 20:56:55
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.domFindAncestor = function(inElement, inSelector) {
    var element = inElement;
    while (
      (element = element.parentElement) &&
      !(element.matches || element.matchesSelector).call(element, inSelector)
    );
    return element;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.domFindAncestor;
  }
})();

//# sourceMappingURL=next-dom-find-ancestor.js.map
