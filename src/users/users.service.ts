import { Injectable, NotFoundException } from '@nestjs/common';
import { UserSignupDTO } from './dto/signup.dto';
import { UserLoginDTO } from "./dto/login.dto"

@Injectable()
export class UsersService {
    // private users = [
    //     {
    //         "id": 1,
    //         "name": "Leanne Graham",
    //         "email": "Sincere@april.biz",
    //         "role": "INTERN",
    //     },
    //     {
    //         "id": 2,
    //         "name": "Ervin Howell",
    //         "email": "Shanna@melissa.tv",
    //         "role": "INTERN",
    //     },
    //     {
    //         "id": 3,
    //         "name": "Clementine Bauch",
    //         "email": "Nathan@yesenia.net",
    //         "role": "ENGINEER",
    //     },
    //     {
    //         "id": 4,
    //         "name": "Patricia Lebsack",
    //         "email": "Julianne.OConner@kory.org",
    //         "role": "ENGINEER",
    //     },
    //     {
    //         "id": 5,
    //         "name": "Chelsey Dietrich",
    //         "email": "Lucio_Hettinger@annie.ca",
    //         "role": "ADMIN",
    //     }
    // ]

    USER_SIGNUP(userSignupDTO: UserSignupDTO) {
        return { message: "Congratulations, your account has been successfully created", user: { ...userSignupDTO } }
    }

    USER_LOGIN(userLoginDTO: UserLoginDTO) {
        /*
        only required  { email: String, password: String }
        */
        return { message: "Login successfull", user: { ...userLoginDTO } }
    }

    USER_ADD_ADDRESSES(addresses: []) {
        return { message: "New addresses added", addresses }
    }

    USER_ADMIN_SIGNUP(newAdmin: { name: String, email: String, password: String, role: "ADMIN" }) {
        return { message: "Admin Signup Successful", newAdmin }
    }

    USER_LOGOUT() {
        return { message: "Logout successfull" }
    }

    USER_NEW_TOKEN() {
        return { message: "New Token" }
    }

    USER_PROFILE() {

        // if (!user) throw new NotFoundException("User not found")

        return { message: "Profile Details" }
    }

    USER_DELETE() {
        return { message: "User deleted Successfully" }
    }


}
