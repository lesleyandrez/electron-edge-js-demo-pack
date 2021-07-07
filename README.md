# Instruções para rodar o projeto

* Primeiro certifique-se de que está com a versão `16` do NodeJS com `node -v`;
* Tenha alguma versão do .NETCore instalada `dotnet --version`;
* Instale as dependências com `npm install`;
* Se não aconteceu nenhum erro durante a instalação rode `npm start` para iniciar o Electron no modo desenvolvimento, então você deve ver as mensagens `.NET Welcomes JavaScript`, `.NET Welcomes Again` e `.NET Welcomes And Again` uma após a outra com 1 segundo de atraso entre elas (sucesso 🥇);
* Depois rode `npm run pack` para gerar o pacote com o nome `TestApp-{*}`, onde `{*}` é a sua plataforma.