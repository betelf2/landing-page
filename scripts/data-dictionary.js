import { DATA_ROUTES } from "./data-routes.js";

function getValueByKey(category, key) 
{
    if (DATA_ROUTES[category] && DATA_ROUTES[category][key]) 
    {
        return DATA_ROUTES[category][key];
    } else 
    {
        return null;
    }
}

/**  Captura dados associados com a key, que é um ministério ou um departamento. */
export function getAssociatedData(key)
{
    var data = null;
    
    if(key)
    {   
        const departamentoValue = getValueByKey('DEPARTAMENTOS', key);
        const ministerioValue = getValueByKey('MINISTERIOS', key);

        if(departamentoValue)
            data = departamentoValue;
        else
            data = ministerioValue;
    }

    return data;
}