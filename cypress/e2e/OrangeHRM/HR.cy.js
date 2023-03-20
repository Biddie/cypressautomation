
describe('Orange HRM', () =>  {
    it('OpenBrowser', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
        cy.url().should('contain','orangehrmlive.com')
    })

    it('OpenBrowser', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.contains('Login')
        cy.contains('Username')
    })

    it('Login with Valid Credentials', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get("[type='submit']").click()
        cy.get(".oxd-topbar-header-breadcrumb").contains("Dashboard")  //Assertion


    })

})