// Recuperar dados passados via url
export function getDataFromCurrentURL()
{
    var url = document.location.href

    try 
    {
        var params = url.split('?')[1].split('&')
    } 
    catch (error) 
    {
        return null
    }
    
    var data = {}
    var tmp;

    for(var i = 0, l = params.length; i < l; i++)
    {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1].toUpperCase()
    }

    return data;
}