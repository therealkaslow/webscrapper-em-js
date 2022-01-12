# Puppeteer Bot Busca Cep

### Um bot desenvolvido com node.js e a biblioteca do google puppeteer

#### 
- ### utilizado para fazer a busca do cep utilizando a manipulação do elemento DOM do site https://correios.com.br
### Rodando os testes

- ### Somente Renomear a Linha 13 que tem o código:
```bash
 await page.type('input#relaxation', /*digite o CEP desejado ao lado =>*/'50080090');
```
- ### Para rodar os testes, rode o seguinte comando

```bash
  node index.js
```
- ### Resultado

```bash
Logradouro/Nome = Avenida Martin Luther King  
Bairro/Distrito = Ilha Joana Bezerra
Localidade/UF = Recife/PE
CEP = 50080-090
```
- ### Se quiser ver como o robô funciona diretamente no navegador, é só alterar uma palavra no código da linha 5 como no exemplo:
- #### De:
```bash
    const browser = await puppeteer.launch({
  	headless: true
```
- #### Para:
```bash
    const browser = await puppeteer.launch({
  	headless: false
```
- #### Com isso o navegador abre, preenche os dados, pega os dados do site e fecha armazenando o endereço no terminal node.js

## Aplicaçoes Utilizadas

 - [Node.js](https://nodejs.org/en/)
 - [Puppeteer](https://pptr.dev/)
