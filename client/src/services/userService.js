const baseUrl = 'http://localhost:3005/api/users';

export async function getAll () {
    const response = await fetch(baseUrl);
    const result = await response.json();

    return result.users;
}


export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`);
    const result = await response.json();

    return result;
}

export const delUser = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`,{method:'DELETE'});
}


export const addUser = async (data) => {
    const response = await fetch(baseUrl,
     {method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)})

    const result = await response.json();
    return result;
}
export const editUser = async (userId,data) => {
    const response = await fetch(`${baseUrl}/${userId}`,
     {method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)})

    const result = await response.json();
    return result;
}