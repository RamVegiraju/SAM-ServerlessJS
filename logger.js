exports.handler = async (event) => {
    let eventJson = JSON.stringify(event);
    console.log(eventJson);
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
        body: eventJson
    }
}