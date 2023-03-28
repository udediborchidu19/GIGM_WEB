// import { it } from "mocha";
import Change_Wallet_Pin from "../PageObject/GIGM_Change_Wallet_Pin";

describe('Change_Auth_Credentials', ()=> {
    

    it('ChangePin', ()=> {
        cy.visit('https://gigm.com/');

        cy.fixture("GIGM_Resource").then((data)=> {
            const Pn = new Change_Wallet_Pin;
            Pn.AcceptCookies();
            Pn.ClickLogin_SignUp_Btn();
            Pn.ClickLogin_SignUp_Btn2();
            Pn.setUserName(data.username1);
            Pn.setPassword(data.password1);
            Pn.clickBtn();
            Pn.Wait();
            Pn.AccountAvata2();
            Pn.ChangeWalletPin();



        })
        
        

    })

})