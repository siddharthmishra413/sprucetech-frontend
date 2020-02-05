const url = 'http://localhost:3000/api';
const headers = {
    'Content-Type': 'application/json'
}

let UserService = {

    tokenVerification: (refreshTokenForPassword) => {
        let requestBody = {
            query: `mutation{ tokenVerification(refreshTokenForPassword: "${refreshTokenForPassword}")
              {
                userName
                userId
              }
            }`
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json();
        })
    }


}


export default UserService;