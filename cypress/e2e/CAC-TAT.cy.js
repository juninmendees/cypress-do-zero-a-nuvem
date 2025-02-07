describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

it ('preenche os campos obrigatórios e envia o formulário', () => {
  cy.get('#firstName')
  .as('campoNome')
  .type('Luis Carlos')

  cy.get('@campoNome')
  .should('have.value', 'Luis Carlos')

  cy.get('#lastName')
  .as('campoSobrenome')
  .type('Mendes de Almeida Junior')
  cy.get('@campoSobrenome')
  .should('have.value', 'Mendes de Almeida Junior')

  cy.get('#email')
  .as('campoEmail')
  .type('juniormendesjp@gmail.com')
  cy.get('@campoEmail')
  .should('have.value', 'juniormendesjp@gmail.com')

  cy.get('#product')
  .select('blog')
  cy.get('@campoEmail')
  .should('have.value', 'juniormendesjp@gmail.com')

  cy.get(':nth-child(4) > input')
  .check()

  cy.get('#email-checkbox')
  .check()

  cy.get('#open-text-area')
  .type('Parabéns pelo formulário',{delay:0})

  cy.get('.button[type="submit"]')
  .click()
  cy.get('.success')
  .should('be.visible', 'Central de Atendimento ao Cliente TAT')
} )

it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
  cy.get('#email')
  .type('juniormendesjp')
  cy.get('.button[type="submit"]')
  .click()
  cy.get('.error > strong')
  .should('be.visible', 'Central de Atendimento ao Cliente TAT')
})


it.only('valida caracteres não numéricos no telefone', () => {
  cy.get('#phone')
})


//https://github.com/juninmendees/cypress-do-zero-a-nuvem/blob/main/lessons/02.md
//https://docs.cypress.io/api/commands/type
})
