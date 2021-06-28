# How To Connect The Backend To The Forntend

### making use of [axios](https://axios-http.com/docs/intro) /

##### [axios-cdn](https://unpkg.com/axios/dist/axios.min.js)

<b>NOTE:</b> you don't have to do it this way this is just a basic example on how to use the api

## setup script main.js

creat a javascript file name it whatever you want <b>(e.g)</b>

    $ touch main.js

the add the following example to it

```javascript
class HelperFunctions {
  constructor() {
    this.url = 'https://starthubzuri.herokuapp.com';
  }

  /**
   * Sign up function
   *
   * @param formData object containing user data = { firstName, lastName, email, ...rest }
   */
  async Signup(formData) {
    try {
      const config = { headers: { 'Content-Type': 'application/json' } };

      const { data } = await axios.post(
        `${this.url}/api/v1/auth/sign-up`,
        formData,
        config
      );

      localStorage.setItem('user', JSON.stringify(data.data));
      // console.log('payload', data);
    } catch (error) {
      console.log(
        'error',
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }

  /**
   * Login function
   *
   * @param formData object containing user data = { email, password }
   */
  async Signin(formData) {
    try {
      const config = { headers: { 'Content-Type': 'application/json' } };

      const { data } = await axios.post(
        `${this.url}/api/v1/auth/sign-in`,
        formData,
        config
      );

      localStorage.setItem('user', JSON.stringify(data.data));
      // console.log('payload', data);
    } catch (error) {
      console.error(
        'error',
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }

  /**
   * log user out by deleting users data from local storage
   *
   * @param none logout function
   **/
  async Logout() {
    localStorage.removeItem('user');
    document.location.href = '/login'; // replace this with your own url
  }

  /**
   * get all  projects
   *
   * returns an object with payload projects
   * @param none fetch all projects function
   */
  async FetchAllProjects() {
    try {
      const { data } = await axios.get(`${this.url}/api/v1/projects`);

      return { projects: data };
      // console.log(data);
    } catch (error) {
      console.error(
        'error',
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }

  /**
   * get one project
   *
   * returns an object with payload project
   * @param id project id is requried
   */
  async GetOneProject(id) {
    try {
      const { data } = await axios.get(`/api/v1/projects/${id}`);

      return { project: data.data };
      // console.log(data);
    } catch (error) {
      console.log(
        'error',
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }

  /**
   * Add user projects
   *
   * @param formData object containing user data = { projectName, projectLink, projectInfo, ...rest }
   */
  async AddProject(formData) {
    try {
      const user = JSON.parse(localStorage.getItem('user'));

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(
        `${this.url}/api/v1/projects`,
        formData,
        config
      );

      // console.log(data);

      return { projects: data.data };
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      console.error('error', message);
    }
  }
  /**
   * Update user project
   *
   * @param {number} id  project id
   * @param {object} formData object containing user data = { projectName, projectLink, projectInfo, ...rest }
   */
  async UpdateOneProject(id, formData) {
    try {
      const user = JSON.parse(localStorage.getItem('user'));

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.put(
        `${this.url}/api/v1/projects/${id}`,
        formData,
        config
      );

      console.log(data);

      return { project: data.data };
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      console.error('error', message);
    }
  }

  /**
   * Delete loged in user project
   *
   * returns a payload with a message
   * @param id project id is requried
   */
  async DeleteOneProject(id) {
    try {
      const user = JSON.parse(localStorage.getItem('user'));

      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };

      const { data } = await axios.delete(
        `${this.url}/api/v1/projects/${id}`,
        config
      );

      return { payload: data.message };
      // console.log(data);
    } catch (error) {
      console.log(
        'error',
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }

  /**
   * user profile or dashboard profile
   * @ dsescription  get user specific info
   * @param none get all user info
   *  */
  async GetUserInfo() {
    try {
      const user = JSON.parse(localStorage.getItem('user')); // get user data from local storage

      const config = { headers: { Authorization: `Bearer ${user.token}` } }; // get user token

      const { data } = await axios.get(
        `${this.url}/api/v1/users/profile`,
        config
      );

      // console.log(data);

      return { userInfo: data.data };
    } catch (error) {
      console.log(
        'error',
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }

  /**
   * user projects
   *
   * @ dsescription  get all users projects
   * @param none fetch all user projects
   *  */
  async GetAllUserProject() {
    try {
      const user = JSON.parse(localStorage.getItem('user')); // get user data from local storage

      const config = { headers: { Authorization: `Bearer ${user.token}` } }; // get user token

      const { data } = await axios.get(
        `${this.url}/api/v1/users/projects `,
        config
      );

      // console.log(data);

      return { userInfo: data.data };
    } catch (error) {
      console.log(
        'error',
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
}
```

## setup script index.js

creat a javascript file name it whatever you want <b>(e.g)</b>

    $ touch index.js

the add the following example to it

```javascript
const ApiServices = new HelperFunctions(); // HelperFunction from main.js

const InputForm = document.getElementById('add_project');

// console.log(ApiServices.fetchAllProjects());

const myFunction = (e) => {
  e.preventDefault();

  const fn = document.getElementById('fn');
  const ln = document.getElementById('ln');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const id = document.getElementById('id');

  const data = {
    firstName: fn.value,
    lastName: ln.value,
    email: email.value,
    password: password.value,
    studentId: id.value,
  };

  console.log(data);

  //   ApiServices.Signup(data);  requries form data

  // ApiServices.Signin(data);
};

InputForm.addEventListener('submit', myFunction);
```
