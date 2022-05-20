// import Vue from "vue";
import Hljs from "highlight.js";
Hljs.configure({ ignoreUnescapedHTML: true });

let Highlight = {};
Highlight.install = function (Vue) {
  Vue.directive("highlight", function (el) {
    let blocks = el.querySelectorAll("pre code");
    blocks.forEach((block) => {
      Hljs.highlightElement(block);
    });
  });
};
export default Highlight;
