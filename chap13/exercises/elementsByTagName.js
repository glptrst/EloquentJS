<!doctype html>
<script src="code/mountains.js"></script>
<script src="code/chapter/13_dom.js"></script>

<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
function byTagName(node, tagName) {
    var arr = [];
    tagName = tagName.toUpperCase();
    childs = node.childNodes;

    function recursiveSearch(node) {        
        for (var i = 0; i < node.childNodes.length; i++) {
            var child = node.childNodes[i];
            if (child.nodeType == document.ELEMENT_NODE) {
                if (child.tagName == tagName) {
                     arr.push(child);
                }
                recursiveSearch(child);
            }
        }    
    }
    
    recursiveSearch(node);      
    return arr;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>
