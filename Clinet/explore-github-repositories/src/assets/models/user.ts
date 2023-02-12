export interface User {
  Username: string;
  Password: string;
}

export interface UserDto {
  username: string;
  passwordHash: string;
  passwordSalt: string;
}

export interface Token {
  token: string;
}

