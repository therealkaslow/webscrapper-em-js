const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
  	headless: true
  });
  const page = await browser.newPage();
  await page.goto('https://www.correios.com.br/', { 
  	timeout: 60000
  });
  await page.type('input#relaxation', '07909050');
  await page.keyboard.press('Enter');

  await page.waitForTimeout(5000);

  const abas = await (await browser.pages());
  const aba3 = abas[2];

  	function getTable() {
  		const table = document.querySelector("#resultado-DNEC");
  		return table.innerText;
  	}

	const dadosTable = await aba3.evaluate(getTable);

	console.log(dadosTable);

  await browser.close();
})();