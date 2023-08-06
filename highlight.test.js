const highlightHTMLContent = require('./highlight');
const cases = require('./cases');

test.each(cases)(
    "'highlightHTMLContent' returns ->",
    (htmlContent, plainText, plainTextPositions, output) => {
        expect(highlightHTMLContent(htmlContent, plainText, plainTextPositions)).toBe(output);
    }
);
document.getElementById("root").innerHTML = highlightHTMLContent(cases[0][0], cases[0][1], cases[0][2])