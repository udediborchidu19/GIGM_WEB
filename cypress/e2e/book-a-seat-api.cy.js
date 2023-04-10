/// <reference types="Cypress" />

describe('Authentication', ()=>{


// let access_token = res.body.access_token


    it('LoginToMobility', ()=>{

        cy.fixture("GIGM_Resource").then((data)=> {
        cy.request({
            method : 'POST',
            url : data.base_url +'/login',
            headers:{
                // 'Authorization': 'Bearer' + access_token 
                "Content-Type" : "application/x-www-form-urlencoded"
            },
            body:{
                'username': 'udebibor.favour@thegiggroupng.com',
                'Password' : '548f3c',
                'client_id' : 'X-GIG-ADMIN',
                'client_secret' : 'X-GIG-Secret',
                'grant_type' : 'password'
            }
            



        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body).has.property('username', 'udebibor.favour@thegiggroupng.com')
            expect(res.body).has.property('access_token')
    
    
        })
    })
    })
})