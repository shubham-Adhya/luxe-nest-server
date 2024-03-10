import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator"

export class UserSignupDTO {
    @IsNotEmpty()
    @IsString()
    name: String

    @IsEmail()
    email: String

    @IsNotEmpty()
    password: String

    @IsEnum(["CUSTOMER", "ADMIN"], {
        message: "Valid role required"
    })
    role: "CUSTOMER" | "ADMIN"

    addresses: String
}