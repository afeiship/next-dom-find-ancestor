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
