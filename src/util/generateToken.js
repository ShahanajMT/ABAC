// gen token for only user
import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/env.js";


//dummy User
const user = {
    id: 1,
    name: 'shanu',
    role: "manager",
    department: "IT",
    accessLevel: 4,
};

const token = jwt.sign(user, jwtSecret, { expiresIn: "1h"});
console.log(`JWT token for ${user.role} : ${token}`);
