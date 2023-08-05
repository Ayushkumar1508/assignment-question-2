const htmlContent = '<p>This is a <b>sample</b> HTML content with some text.</p>';
const plainText = 'sample';
const plainTextPositions = [{ start: 10, end: 16 }];

const highlightedContent = highlightHTMLContent(htmlContent, plainText, plainTextPositions);
console.log(highlightedContent);
