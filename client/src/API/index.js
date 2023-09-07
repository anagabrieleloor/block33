const BASE_URL = 'http://localhost:8080/api';

export async function fetchUsers() {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        const result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
        return error;
    }
}

export async function fetchSingleUser(user_id) {
    try {
        const response = await fetch(`${BASE_URL}/users/${user_id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export async function login(username, password) {
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
                    username: username,
                    password: password
                
            })
        });
        const result = await response.json();
        console.log("result", result);
        return result
    } catch (error) {
        console.error(error)
    }
}

  export async function registerUser(username, password,) {
    try {
  const response = await fetch(
    `${BASE_URL}/users/signup`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password
      },
    })
  });
  const result = await response.json();

  console.log(result)
  return result
} catch (error) {
  console.error(error);
}
}

export async function fetchUserProfile(user_id) {
    try {
      const response = await fetch(`${BASE_URL}/users/${user_id}`, {
        headers: {
          'Content-Type': 'application/json',
        
        },
      });
  
      if (!response.ok) {
       
        throw new Error('Failed to fetch user profile');
      }
  
      const userProfile = await response.json();
      return userProfile;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }


  
export async function fetchMatches(user_id) {
    try {
        const response = await fetch(`${BASE_URL}/users/${user_id}/matches`);
        const result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
        return error;
    }
}
