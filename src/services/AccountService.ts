import { getAxiosInstance } from "../utils/axiosUtils";

export default class AccountService{

    static login(loginForm:any){
        return getAxiosInstance().post(`http://localhost:8080/user/login`,loginForm);
    }
    static register(registerForm:any){
        return getAxiosInstance().post(`http://localhost:8080/user/register`,registerForm);
    }
    static logout(){
        return getAxiosInstance().post(`http://localhost:8080/user/logout`);
    }
    static refreshDb(){
        return getAxiosInstance().delete(`http://localhost:8080/user/refreshDb`);
    }
}