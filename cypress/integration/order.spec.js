// Implement the following tests in Cypress:

// - [ ] test that you can add text to the box
// - [ ] test that you can select multiple toppings
// - [ ] test that you can submit the form

it("sanity check", () => {
    expect(8 + 5).to.equal(13)
})


describe("pizza website", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })
    it("can visit home page", () => {
        cy.contains("Pizza for Programmers")
    })
    it("can order a pizza", () => {
        cy.get(`[data-test-id="pizza"]`).click()
        cy.contains(`Create your pizza!`)
        const submitBtn = () => cy.get(`[data-test-id="submitBtn"]`)
        submitBtn().should(`be.disabled`)
        cy.get('select').select('Small')
        cy.get(`[data-test-id="fullname"]`).type("James Bond")
        cy.get('[type="checkbox"]').check()
        cy.get('[type="radio"]').first().check()
        cy.get('form').contains('Add to Order').click()
        submitBtn().should(`not.be.disabled`)
    })
})

