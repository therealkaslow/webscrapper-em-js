const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  //inserir o cep na linha abaixo!
  const cepCorreios = /* Do lado => */ "07909050";
  //entra no site dos correios
  await page.goto(`https://buscacepinter.correios.com.br/app/endereco/`);
  await page.waitFor(100);

  //digita o CEP
  await page.type('input[name="endereco"]', cepCorreios, {
    delay: 100,
  });

  // clica no botão de buscar
  await page.click('button[class="primario"]');

  //pega os dados da tabela do site e joga no terminal node.js
  const endCorreios = await page.evaluate(() => {
    return document.querySelector('th[data-th="Logradouro/Nome"]');   
  });
  console.log(`O Endereço do CEP ${cepCorreios} é: ${endCorreios}`)
  await browser.close();
})();
