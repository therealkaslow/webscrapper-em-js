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

## Aplicaçoes Utilizadas

 - [Node.js](https://nodejs.org/en/)
 - [Puppeteer](https://pptr.dev/)