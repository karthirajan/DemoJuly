class Authentication{
        
    baseUrl="https://jsonplaceholder.typicode.com/";

    setLoggedInUser(username){
        localStorage.setItem('loggedInUser', username );
    }

    getLoggedInUser(){
      let username=  localStorage.getItem('loggedInUser');
        return username;
    }

    isLoggedInUser(){
        let isLoggedInUname=this.getLoggedInUser();
        if(isLoggedInUname){
            return true;
        }else{
            return false;
        }
    }
    removeUser(){
        localStorage.removeItem('loggedInUser');
    }
}

export default new Authentication;