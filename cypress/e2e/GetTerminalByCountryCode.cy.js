/// <reference types="Cypress" />

describe('GetTerminalByCC', ()=>{


    let access_token = "uq6FcojyNaVgxEH5VD8KaRJJ11gTxPCVW1EZAXT--JLmD2BoJtDetwHyfcHN3ztQmL8RH__fZO5dxzekEoRu_v_J7iqyu90FCoaIRSoo0UHUmuX9kulfNDafEOgBgqGHE8i6atzOTnn229NVF3khsl7oixeGKqOkraU708ksTAOJ7NcevYAgXW4CC3YfKgVMvX4dl0nBNzbKlFfpXgBRALMOO8aLRudTeTsQ-JLM0EjibYwqP7wXGcJnUi02gidXcY7lerN13sXfkQRnkI1F-th6EiJvdi7Eyr1ua5tkE0CEWVGYmjsGq7EL48dOZn3NTz-e1ZVSs5aclUB_JDJ7HditiBWXt1onG9fspueyflUU1BxClEFsRgJtMUe6m_MD7597FErsVxKkU-u58oVEOS2S9T7ZrLpgdzr0v9xDX6VEf-YBnW7W1n786vlBOaIMw8xI65M-Ri45Y1QAUN1UUrYMwmx5o6U8sAETA5f9U-2t4FpcZChECZeHllpD7Gqo"
    
    
        it('TerminalByCountryCode', ()=>{
    
            cy.fixture("GIGM_Resource").then((data)=> {
            cy.request({
                method : 'GET',
                url : data.base_url +'/api/terminals/terminalbycountrycode/NG',
                headers:{
                    // 'Authorization': 'Bearer' + access_token 
                    "Content-Type" : "application/x-www-form-urlencoded"
                }
                
                
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.Object.Items[42].TerminalName).to.be.eq('Lagos => Jibowu')
                expect(res.body.Object.Items[42].Latitude).to.be.eq(6.518806)
                expect(res.body.Object.Items[42].Longitude).to.be.eq(3.367547)
                expect(res.body.Object.Items[42].TerminalId).to.be.eq(29)
                expect(res.body.Object.Items).to.be.eq(res.body.Object.Items)

                
        
        
            }).then((res) =>{
                const departureId = res.body.Object.Items[42].TerminalId;
                cy.log(departureId);
                cy.request({
                    method: 'GET',
                    url: data.base_url + '/api/routes/terminals/destinations/' + departureId,
                    headers:{
                        // 'Authorization': 'Bearer' + access_token 
                        "Content-Type" : "application/x-www-form-urlencoded"
                    }
                    
                }).then((res)=>{
                    expect(res.status).to.eq(200)
                    expect(res.body.Object[20].TerminalId).to.be.eq(72)
                    expect(res.body.Object[20].TerminalName).to.be.eq("Enugu==>Nsukka")

            }).then((res)=>{
                // const departureTerId = res.body.Object.Items[42].TerminalId;
                const destinationTerId = res.body.Object[20].TerminalId;

                cy.request({
                    method: 'POST',
                    url: data.base_url + '/api/bookings/search',
                    headers:{
                        // 'Authorization': 'Bearer' + access_token 
                        "Content-Type" : "application/x-www-form-urlencoded"
                    },
                    body:{
                        "TripType": 0,
                        "DepartureTerminalId": 29,
                        "DestinationTerminalId": destinationTerId,
                        "DepartureDate": "2023-04-05T10:28:30.844Z",
                        "ReturnDate": "2023-04-01T10:28:30.844Z",
                        "NumberOfAdults": 1,
                        "NumberOfChildren": 0,
                        "BookingType": 0
                    }

            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.ShortDescription).to.be.eq("SUCCESS") 
                expect(res.body.Object.Departures[0].TripId).to.be.eq("25b6d9e0-a550-4780-b8f1-1eabea754b46")
                expect(res.body.Object.Departures[0].VehicleTripRegistrationId).to.be.eq("c132e287-431f-4d2f-890f-2133f063ddc1")
        }).then((res) =>{
            const tripId = res.body.Object.Departures[0].TripId;
            cy.log(tripId);
            cy.request({
                method: 'GET',
                url: data.base_url + '/api/pickup/points/tripPickupPoints/' + tripId,
                headers:{
                     'Authorization': 'Bearer ' + access_token,
                    "Content-Type" : "application/x-www-form-urlencoded"
                }
                
            }).then((res)=>{
                expect(res.status).to.eq(200)
                // expect(res.body.Object[20].TerminalId).to.be.eq(72)
                // expect(res.body.Object[20].TerminalName).to.be.eq("Enugu==>Nsukka")

        })
    })
})
    
})
        })
    })
})