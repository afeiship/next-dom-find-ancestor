(function () {
  require('../src');
  const JsDom = require('jsdom').JSDOM;

  describe('api.basic test', () => {
    test('nx.domFindAncestor parent exist:', function () {
      var html = `<div class="far ancestor">
        <div id="target2">
          <div class="near ancestor">
              <p id="target1">Where am I?</p>
          </div>
        </div>
    </div>`;
      var dom = new JsDom(html);
      var document = dom.window.document;
      var target1 = document.querySelector('#target1');
      var target2 = document.querySelector('#target2');
      var el1 = nx.domFindAncestor(target1, '.ancestor');
      var el2 = nx.domFindAncestor(target2, '.ancestor');

      expect(el1.className).toBe('near ancestor');
      expect(el2.className).toBe('far ancestor');
    });

    test('nx.domFindAncestor parent not exist:', function () {
      var html = `<div class="far ancestor">
                  <p id="target1">Where am I?</p>
                </div>`;
      var dom = new JsDom(html);
      var document = dom.window.document;
      var target = document.querySelector('#target1');
      var el = nx.domFindAncestor(target, '.ancestor-xxx');

      expect(el).toBe(null);
    });
  });

})();
