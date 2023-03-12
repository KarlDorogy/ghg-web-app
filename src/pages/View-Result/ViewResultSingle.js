import React from 'react';


function ViewResultSingle(){

    async function callAPI() {
        const user = await Auth.currentAuthenticatedUser()
        const token = user.signInUserSession.idToken.jwtToken
        console.log({ token })
        const requestInfo = {
          headers: {
            Authorization: token
          },
          queryStringParameters: { 
            id: 'e36bc896-8a81-4ce1-abf0-f2779f558e5a'
          }
        };
        await API.get('api4ef6c8be', '/ghgViewResult', requestInfo).then((response) => {
          setData(response)
          console.log(response)
        })
      }


    return(
        <></>
    );





}
export default ViewResultSingle