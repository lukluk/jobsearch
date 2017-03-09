var Nightmare = require('nightmare');       
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://linkedin.com')
  .type('#login-email', 'luklukaha@gmail.com')
  .type('#login-password', 'Cipc0pmimi')
  .click('#login-submit')  
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });