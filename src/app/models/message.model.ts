export interface message {
    username: string,
    content?: string
}

export interface ILogin{
    email:      string;
    password:   string;
}

export interface ITokens{
    refreshToken:       string; //todo el dia
    accessToken:        string; // 5 mmin
}

export interface ILogin {
  email: string;
  password: string;
}