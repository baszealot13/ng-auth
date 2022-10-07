describe('Authenticate', () => {
    it('should see', () => {
        cy.visit('http://localhost:4200/authentication/signin');

        cy.get('h1').should('have.text', 'Sign in');
        cy.get('#username').should('exist');
        cy.get('#password').should('exist');
        cy.get('button').should('exist');
        cy.get('button').should('have.text', 'Sign in');
    });

    it('sign in', () => {
        cy.intercept('POST', 'http://localhost:8080/api/login', {
            token: 'fake-token-12345678'
        });
        cy.intercept('GET', 'http://localhost:8080/api/users', [
            {
                "id": 11,
                "username": "Frankie",
                "user_email": "Frankie@gmail.com"
            },
            {
                "id": 12,
                "username": null,
                "user_email": null
            },
            {
                "id": 13,
                "username": "SayHiya",
                "user_email": "hiya@gmail.com"
            },
            {
                "id": 14,
                "username": "SayHiya2",
                "user_email": "hiya2@gmail.com"
            },
            {
                "id": 15,
                "username": "UJean",
                "user_email": "UJean@gmail.com"
            },
            {
                "id": 16,
                "username": "shane",
                "user_email": "shane@gmail.com"
            },
            {
                "id": 17,
                "username": "test123",
                "user_email": "test123@gmail.com"
            },
            {
                "id": 19,
                "username": "test1234",
                "user_email": "test1234@gmail.com"
            },
            {
                "id": 20,
                "username": "b1834",
                "user_email": "b1834@gmail.com"
            },
            {
                "id": 21,
                "username": "johndoe",
                "user_email": "john.doe@gmail.com"
            },
            {
                "id": 24,
                "username": "utest1",
                "user_email": "utest1.test@gmail.com"
            },
            {
                "id": 26,
                "username": "utest2",
                "user_email": "utest2.test@gmail.com"
            },
            {
                "id": 27,
                "username": "utest3",
                "user_email": "utest3.test@gmail.com"
            }
        ])
        cy.visit('http://localhost:4200/authentication/signin');

        cy.get('#username').type('test1');
        cy.wait(2000)
        cy.get('#password').type('123456');
        cy.wait(2000)
        cy.get('button').click();
        cy.wait(2000)

        cy.url().should('not.include', '/authentication/signin');
        cy.get('h1').should('have.text', 'Users');

    })
})