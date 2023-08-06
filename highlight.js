// function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
//     for (const { start, end } of plainTextPositions) {
//       const textToHighlight = htmlContent.substring(start, end);
//       const highlightedText = `<span style="background-color: yellow;">${textToHighlight}</span>`;
//       htmlContent = htmlContent.replace(new RegExp(textToHighlight, 'g'), highlightedText);
//     }
  
//     return htmlContent;
//   }
function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  plainTextPositions.forEach(({ start, end }) => {
    const plainTextSubstring = plainText.substring(start-1, end);
    const highlightedContent = `<mark>${plainTextSubstring}</mark>`;
    // htmlContent = htmlContent.replace(plainTextSubstring, highlightedContent);
    // htmlContent.map((item, index)=>{
      htmlContent = htmlContent.replaceAll("<br>","<br> ")
      htmlContent = htmlContent.replaceAll("><","> <")
    console.log(htmlContent)
    // })
      // while(i)
      let i=0,j=0;
      let tag = false;
      let whiteSpace = false;
      let begin = true;
      for (const char of htmlContent) {
        j++;
        
        if(char === '>') tag = false;
        else if(char === '<') tag = true;
        else if(char === ' '){
          if(!whiteSpace && !tag) {
            whiteSpace=true;
            if(!tag && !begin)i++;
          }
        }
        //  else i++;
        else {
          if(!tag) {
            whiteSpace=false;
            i++;
            begin = false;
          }
        }
        console.log("i is " +i)
        if(i===start) break;
        
      }
      console.log(j)
      htmlContent = htmlContent.substring(0,j-1) + highlightedContent  + htmlContent.substring(j+end-start, htmlContent.length)
      // htmlContent = highlightedContent
  });

  return htmlContent;
}


  
  
// Example usage:
const htmlContent = '<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>'
const plainText = 'Hi David Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar… Read the full article here ------------------------------------- You received this because you are subscribed to news related to ES0113900J37 , and this story was marked as 82% relevant. Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. To unsubscribe change your email preferences, please click here . -------------------------------------';
const plainTextPositions = [
  // {
  //   start:4,
  //   end:8,
  // },
  // {
  //   start:10,
  //   end:17,
  // },
  // {
  //   start:105,
  //   end:111,
  // },
  // {
  //     start: 242,
  //     end: 247,
  // },
  // {
  //     start: 519,
  //     end: 525,
  // },
  {
    start: 405,
    end: 408,
},
]

const highlightedContent = highlightHTMLContent(htmlContent, plainText, plainTextPositions);
//console.log(highlightedConte`nt);
const IdealAnswer = '<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility <mark>Equity</mark> scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | <mark>Privacy</mark> Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>'


const root = document.getElementById("root").innerHTML = highlightedContent;
