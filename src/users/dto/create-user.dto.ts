class UserDto{
    name: string
    gender: string
    username: string
    password: string
}
class ContactInfoDto{
    email: string
    phoneNumber: string
    address: string
}
export class CreateUserDto {
    user: UserDto
    "contact-info": ContactInfoDto
}
