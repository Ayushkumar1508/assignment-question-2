const highlightHTMLContent = require('./highlight');
const cases = require('./cases');

test.each(cases)(
    "'highlightHTMLContent' returns ->",
    (htmlContent, plainText, plainTextPositions, output) => {
        expect(highlightHTMLContent(htmlContent, plainText, plainTextPositions)).toBe(output);
    }
);
