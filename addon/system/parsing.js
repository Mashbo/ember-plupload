/**
 * Parse Html function copied from https://github.com/nefe/You-Dont-Need-jQuery#v2.0
 */
function parseHTML(string) {
  const context = document.implementation.createHTMLDocument();

  // Set the base href for the created document so any parsed elements with URLs
  // are based on the document's URL
  const base = context.createElement('base');
  base.href = document.location.href;
  context.head.appendChild(base);

  context.body.innerHTML = string;
  return context.body.children;
}

// TODO: Parse XML function to replace jQuery.parseXml
export { parseHTML };