/*!
 * name: @jswork/next-dom-find-ancestor
 * description: Find the closest ancestor element that has a specific class.
 * homepage: https://github.com/afeiship/next-dom-find-ancestor
 * version: 1.0.0
 * date: 2020-11-22 17:45:38
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.domFindAncestor = function (inElement, inSelector) {
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
