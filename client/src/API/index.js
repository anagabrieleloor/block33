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
        
        if (response.ok) {
          
          const token = result.token;
          const user_id = result.user.user_id;

          console.log("token", token);
          console.log("user_id", user_id)

          // saving token to local storage
          localStorage.setItem('token', token);
          localStorage.setItem('user_id', user_id)
          console.log('local storage:', localStorage)
      }

        return result
        
    } catch (error) {
        console.error(error)
    }
}

export async function logOut() {
  try {
    const response = await fetch(`${BASE_URL}/users/logout`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
    },

    });
    const result = await response.json();
    console.log("bye for now", result);
    return result
  } catch (error) {
    console.error(error)
  }
}

  export async function registerUser(username, password, first_name, last_name, gender, location, education, work, photos, about_me, song) {
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
        password: password,
        first_name: first_name, 
        last_name: last_name, 
        gender: gender, 
        location: location, 
        education: education, 
        work: work, 
        photos: photos, 
        about_me: about_me, 
        song:song

      },
    })
  });
  const result = await response.json();
  if (response.headers.get('content-type') === 'application/json' && result.token) {
    console.log("Token:", result.token);
  } else {
    console.log("No token found in the response.");
  }

  console.log("result", result)
  return result
} catch (error) {
  console.error("sign up yikes", error);
}
}

export async function fetchUserProfile(user_id, token) {
    try {
      const response = await fetch(`${BASE_URL}/users/${user_id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
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

export async function fetchUserMessages(user_id) {
  try {
      const response = await fetch(`${BASE_URL}/users/${user_id}/messages`);
      const result = await response.json();
      console.log(result);
      return result
  } catch (error) {
      console.error(error);
      return error;
  }
}

export async function updateProfile(user_id, updatedUserData) {
  try {
      const response = await fetch(`${BASE_URL}/users/edit_profile/${user_id}`, {
          method: "PUT",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedUserData)
         
      });
      const result = await response.json();
      console.log("result", result);
      return result
  } catch (error) {
      console.error(error)
  }
}
