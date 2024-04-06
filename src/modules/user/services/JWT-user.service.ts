import jwt from 'jsonwebtoken';


type IjwtData = {
    id: string
}

const sign = (data: IjwtData) => {
    try {
        if (!process.env.SECRET_KEY) throw new Error("JWT_SECRET_NOT_FOUND");

        return jwt.sign(data as object, process.env.SECRET_KEY, { algorithm: "HS256", expiresIn: "2h" });
    } catch (error) {
        console.error('Erro ao gerar token:', error);
        throw new Error("Erro ao gerar token");
    }
}

const verify = (token: string): IjwtData => {
    try {
        if (!process.env.SECRET_KEY) throw new Error("JWT_SECRET_NOT_FOUND");

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        if (typeof decoded === "string") throw new Error("INVALID_TOKEN");

        return decoded as IjwtData;
    } catch (error) {
        console.error('Erro ao verificar token:', error);
        throw new Error("Erro ao verificar token");
    }
}

export const JWTService = {
    sign,
    verify
}