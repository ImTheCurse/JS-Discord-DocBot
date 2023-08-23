const pupp = require('puppeteer');

async function getSnapshot(url){
    const browser = await pupp.launch({
        headless: true
      })
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({height:1920,width:1080})

    
    //await page.waitFoSrSelector('#syntax');
   // const element = await page.$('#syntax');
    //await element.screenshot({path:'image.png'})
    
    await browser.close();

   
}

module.exports = getSnapshot;

