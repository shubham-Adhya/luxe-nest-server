import { Body, Controller, Delete, Get, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserSignupDTO } from './dto/signup.dto';
import { UserLoginDTO } from "./dto/login.dto"

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Post('signup')
    signup(@Body(ValidationPipe) userSignupDTO: UserSignupDTO) {
        return this.usersService.USER_SIGNUP(userSignupDTO)
    }

    @Post('login')
    login(@Body() userLoginDTO: UserLoginDTO) {
        return this.usersService.USER_LOGIN(userLoginDTO)
    }

    @Post('addresses')
    addresses(@Body() addresses: []) {
        return this.usersService.USER_ADD_ADDRESSES(addresses)
    }

    @Post('admin-signup')
    adminSignup(@Body() newAdmin: { name: String, email: String, password: String, role: "ADMIN" }) {
        return this.usersService.USER_ADMIN_SIGNUP(newAdmin)
    }

    @Get("logout")
    logout() {
        return this.usersService.USER_LOGOUT()
    }

    @Get("new-token")
    newToken() {
        return this.usersService.USER_NEW_TOKEN()
    }

    @Get("profile")  // ParseIntPipe
    profile() {
        return this.usersService.USER_PROFILE()
    }

    @Delete("delete-user")
    deleteUser() {
        return this.usersService.USER_DELETE()
    }
}
