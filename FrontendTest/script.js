const getResp = function() {
    var numOne = document.getElementById("numberOne").value;
    var numTwo = document.getElementById("numberTwo").value;
    console.log(numOne);
    console.log(numTwo)


    //https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://quk94vssi7.execute-api.us-east-1.amazonaws.com/Prod/add"
    fetch(proxyurl + url,{
        method: 'POST',
        body: JSON.stringify
        ({num1: numOne, num2: numTwo}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(function(response){
        console.log(response)
        return response.json()
    }).then(function(data){
        console.log(data)
        console.log(data.result)
    })
}