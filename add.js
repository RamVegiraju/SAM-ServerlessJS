exports.handler = async (event) => {
    let {num1, num2} = JSON.parse(event.body);
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
        body: JSON.stringify({
            num1: num1,
            num2: num2,
            result: num1 + num2
        })
    }
}