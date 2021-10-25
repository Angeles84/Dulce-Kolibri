// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/')

  })
  it('test links', () => {
    cy.get('[data-cy=links]')
    .children()
    .should('have.length', 11)
  })

  it('h2', () => {
    cy.visit('/nosotros')
    cy.contains('h2','Nuestra historia')
  })
  it('click en torta abre detalle', () => {
    cy.visit('/tortas')
    cy.contains('h3', 'Torta de trufa').click()
  })
  it('agregando producto', () => {
    cy.visit('/administracion')
    cy.contains('AGREGAR PRODUCTO').click()
    cy.get('[data-test-id="agregar-producto"] input:first').type('tortita rica')
    cy.get('[data-test-id="agregar-producto"] textarea').type('adgedrgw')
    cy.get('#agregar').click()


  })
})
