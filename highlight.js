function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  plainTextPositions.forEach(({ start, end }) => {

    htmlContent = htmlContent.replaceAll("><", "> <");

    let i = 0, j = 0;
    let insideTag = false, whiteSpace = false, begin = true;

    for (const char of htmlContent) {

      if (char === '>') insideTag = false;
      else if (char === '<') insideTag = true;
      else if (char === ' ') {
        if (!whiteSpace && !insideTag) {
          whiteSpace = true;
          if (!begin) i++;
        }
      }
      else {
        if (!insideTag) {
          whiteSpace = false;
          i++;
          begin = false;
        }
      }

      j++;
      if (i === start) break;

    }

    const prefix = htmlContent.substring(0, j - 1);
    const highlightedText = `<mark>${plainText.substring(start - 1, end)}</mark>`;
    const suffix = htmlContent.substring(j + end - start, htmlContent.length);
    htmlContent = prefix + highlightedText + suffix;
  });

  htmlContent = htmlContent.replaceAll("> <", "><");
  htmlContent = htmlContent.trim();
  return htmlContent;
}

module.exports = highlightHTMLContent;
