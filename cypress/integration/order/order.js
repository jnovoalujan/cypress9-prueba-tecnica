import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("ingrese a la plataforma {string}", (url) => {
    cy.visit(url);
  });
  
  When("seleccione el producto {string} de la categoria {string} deseado", (productName, categoryName) => {
    cy.get('[data-rs-event-name="Select Menu"] > a').click();
    cy.get(`[data-category-name="${categoryName}"]`).click();
    cy.get(`[title="${productName}"`).parents("a").find("button").click();
  });

  When("adiciono toppings, comentario y agrego el producto a la canasta", ()=>{
    cy.frameLoaded()
    cy.frameLoaded('.modal-content');
    cy.iframe('.modal-content').find("#add-to-cart-button").then((ele)=>{
        cy.log(ele.text())
    })
    /*cy.enter('.modal-content').then(getBody => {
  
      getBody().find("#add-to-cart-button").click({force:true});
    
    })*/
    //cy.get('#add-to-cart-button').click();
  })