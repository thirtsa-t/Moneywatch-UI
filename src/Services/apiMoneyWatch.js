// import axios from 'axios';
// import {notification} from 'antd';

// const basicUrl = "https://money-watch1.herokuapp.com/api/v1";

// class MoneyApi{

//     async signupUser(data){

//         try {
//             // console.log(">>>>>>>>",data);
//             const response = await axios.post(basicUrl+"/moneywatch/user/signup",data);

//             console.log(response)
//             return response.data;
//         } catch (error) {
//             notification.error({message:"user failed to sign up"});
//         }

//     }

//     async signinUser(data){

// try{
// const response = await axios.post(basicUrl+"/moneywatch/user/signin",data)

// return response.data;
// }catch(error){

//             notification.error({message:"user failed to signin"});
// }

//     }

// }

// export default new MoneyApi();