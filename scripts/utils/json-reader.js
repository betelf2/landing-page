export async function loadJsonData(address)
{
    try{
        const response = await fetch(address);
        var jsonData = await response.json();
        return jsonData
    } catch(error){
        console.log("Error reading JSON: ", error);
        return null
    }
}