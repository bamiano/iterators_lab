var iterators = {
    max: function (numList) {
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] > max) {
          max = numList[i];
        }
      }
      return max;
    },
    min: function (numList) {
      var min = Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] < min) {
          min = numList[i];
        }
      }
      return min;

    },
    each: function(items, callback) {
      for (var i = 0; i < items.length; i++) {
        items[i] = callback(items[i]);
      }
      return items;
    },

    filter: function(items, callback) {
      for (var i = 0; i < items.length; i++) {
        items[i] = callback(items[i]);
      }
      return items;
    },
  };


module.exports = iterators;
