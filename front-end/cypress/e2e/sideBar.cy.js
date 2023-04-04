describe('Sidebar Extension', () => {

    beforeEach(()=>{
        cy.mockStudents()
        cy.visit('http://localhost:3000/')
        cy.wait('@getStudents')
    })
    it('should toggle collapse when clicked', () => {
        cy.get('.ant-layout-sider-trigger').click()
        cy.get('.ant-layout-sider').should('have.class', 'ant-layout-sider-collapsed')
        cy.get('.ant-layout-sider-trigger').click()
        cy.get('.ant-layout-sider').should('not.have.class', 'ant-layout-sider-collapsed')
    })
    it('should open submenu when clicked', () => {
        const initialUrl = Cypress.config().baseUrl;
        cy.get('.ant-menu-submenu-title').contains('User').click()
        cy.get('.ant-menu-submenu-open').should('have.length', 1)
        cy.get('.ant-menu-item').contains('Tom').click()
        cy.url().should('not.contain', '/#3')
        cy.get('.ant-menu-item').contains('Bill').click()
        cy.url().should('not.contain', '/#4')
        cy.get('.ant-menu-item').contains('Alex').click()
        cy.url().should('not.contain', '/#5')
        cy.get('.ant-menu-submenu-title').contains('Team').click()
        cy.get('.ant-menu-submenu-open').should('have.length', 2)
        cy.get('.ant-menu-item').contains('Team 1').click()
        cy.url().should('not.contain', '/#6')
        cy.get('.ant-menu-item').contains('Team 2').click()
        cy.url().should('not.contain', '/#8')

    })
})

