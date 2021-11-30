import { createYield } from "typescript";


describe('My first test',()=>{

    it('just match true',()=>{

        expect(true).to.equal(true);
    })
})

describe('land in home page',()=>{

    it('visit the hoem page',()=>{
        cy.visit("http://localhost:4200/");
    })

})

describe('login page', () => {
    it('should open login component',()=>{

        cy.url().should('include','login');
        cy.wait(2000);
    })

    it('check listview button available',()=>{
   cy.get('.clslist').contains('ListView');
   cy.wait(2000);

    })

    it('should navigate to dashboard after credential check',()=>{
   cy.get(".clsname").type("admin");
   cy.get(".clspassword").type("password");
   cy.wait(5000);
   cy.get('.clssubmit').click();
   cy.wait(5000);
  cy.location().should(  (location)=> expect(location.href).to.eq("http://localhost:4200/dashboard/listview") )

    })



})

describe("should add element in dashboard",()=>{

it('should add using matexpansion',()=>{

    cy.get(".clsmatexpansion").click();
    cy.wait(2000);

})

it('should add content in form',()=>{

cy.get("#pid").type("901");
cy.get("#pname").type("Speaker");
cy.get("#category").type("output");
cy.wait(3000);
cy.get("#butadd").click();

cy.wait(3000);
})

it('should check whether the elements are added',()=>{
cy.get('.clscard').last().should('contain',"Speaker");
cy.wait(1000);

})

it('should logout',()=>{

cy.get(".clslogout").click();
cy.wait(2000);
cy.location().should(  (location)=> expect(location.href).to.eq("http://localhost:4200/home") )


})

})


