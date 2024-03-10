import { UserSignupDTO } from "./signup.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UserLoginDTO extends PartialType(UserSignupDTO) { }