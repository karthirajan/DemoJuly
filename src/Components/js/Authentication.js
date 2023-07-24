
class Authentication{

     baseUrl='https://jsonplaceholder.typicode.com/';
    setLoggedinUser(name){
        localStorage.setItem('LoggedInUser', name);
    }
   getLoggedinUser(){
    let name=localStorage.getItem('LoggedInUser');
    return name;
   }
    isLoggedInUser(){
        let isLoggedinName=this.getLoggedinUser();
        if(isLoggedinName){
            return true
        }else{
            return false
        }
    }

    removeUser(){
        localStorage.removeItem('LoggedInUser')
    }


}
export default new Authentication();