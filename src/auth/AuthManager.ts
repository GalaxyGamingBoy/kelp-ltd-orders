import { Request } from "express"

export default class AuthManager {
    static passwordAuth = (req: Request): boolean => {
        let master_password: any;
        try {
            master_password = req.query.master_password;
            if (master_password == process.env.MASTER_PASSWORD) {
                return true;
            } else {
                return false;
            }
        } catch (_) {
            return false;
        }
    }
}