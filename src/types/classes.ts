export class LoginRequest {
    username: string;
    password: string;
    corporateCode: string;
    constructor(username: string, password: string, corporateCode: string) {
        this.username = username;
        this.password = password;
        this.corporateCode = corporateCode;
    }

    toString(): string {
        return `${this}`;
    }
}

export type ResponseBody = {
    responseCode: string;
    data?: any;
    description?: string;
    message?: string;
    hasError?: boolean;
};