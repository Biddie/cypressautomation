
describe('Orange HRM', () =>  {
   
    it('Login with Valid Credentials', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get("[type='submit']").click()
        cy.get(".oxd-topbar-header-breadcrumb").contains("Dashboard")  //Assertion
        
        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name']").click()
        cy.get("[type='button']").click()

        //cy.get('.action-select').should('have.value', '--ESS--')

    })

})