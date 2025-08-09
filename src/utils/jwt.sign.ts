import jwt from "jsonwebtoken";
import { ShiftSession } from "../generated/prisma";

interface IJwtSignProps {
  cashierId: string;
  email: string;
  shift?: ShiftSession;
}

export const jwtSign = ({ cashierId, email, shift }: IJwtSignProps) => {
  return jwt.sign({ cashierId, email, shift }, process.env.JWT_SECRET_KEY!, {
    expiresIn: "1w",
  });
};
