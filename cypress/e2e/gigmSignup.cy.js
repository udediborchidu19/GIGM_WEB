import GIGMSignup from "../PageObject/GIGM_Signup";

describe('SignUp', ()=> {
   
    it('SignUpToGIGM', ()=> {
        cy.visit('https://gigm.com/register');

        cy.fixture("GIGM_Resource").then((data)=> {
            const Sn = new GIGMSignup;
            Sn.AcceptCookies()
            Sn.EnterEmailAdd()
            Sn.FirstName()
            Sn.PhoneNumber()
            Sn.EnterPassword(data.signup_Pass)
            Sn.EnterConfirmationPassword(data.signup_Pass)
            Sn.CheckBoxi();
            Sn.SelSex()
            Sn.Signup()



        })
        
        

    })


})
    