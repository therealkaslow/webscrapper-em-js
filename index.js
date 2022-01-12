const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
  	headless: true
  });
  //abre o navegador
  const page = await browser.newPage();
  await page.goto('https://www.correios.com.br/', { 
  	timeout: 60000
  });
  //digita no buscar pelo cep o numero do cep e aperta enter
  await page.type('input#relaxation', /*digite o CEP desejado ao lado =>*/'50080090');
  await page.keyboard.press('Enter');

  await page.waitForTimeout(5000);

  const abas = await (await browser.pages());
  const aba3 = abas[2];
  //pega no site o elemento DOM da tabela do endereço
  	function getTable() {
  		const table = document.querySelector("#resultado-DNEC");
  		return table.innerText;
  	}

	const dadosTable = await aba3.evaluate(getTable);
  //mostra no console do node os dados do endereço
	console.log(dadosTable);

  await browser.close();
})();