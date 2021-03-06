import { Request, Response } from "express";
import signupBusiness from "../business/SignupBusiness";
import { User } from "../model/userInterfaces";

export class Signup {
  async handle(req: Request, res: Response): Promise<void> {
    try {
      const user: User = {
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email,
        password: req.body.password,
      };

      const token = await signupBusiness.execute(user);

      res.send({ token });
    } catch (error) {
      res
        .status(error.statusCode || 400)
        .send({ message: error.message || error.sqlMessage });
    }
  }
}

export default new Signup();
