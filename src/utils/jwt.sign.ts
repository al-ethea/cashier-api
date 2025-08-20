import jwt from "jsonwebtoken";
import { ShiftSession } from "../generated/prisma";

interface IJwtSignProps {
  cashierId: string;
  email: string;
  shift?: ShiftSession;
}

interface IJwtSignAdminProps {
  adminId: string;
  email: string;
}

export const jwtSign = ({ cashierId, email, shift }: IJwtSignProps) => {
  return jwt.sign(
    {
      cashierId,
      email,
      role: "cashier",
      shift: shift || null,
    },
    process.env.JWT_SECRET_KEY!,
    {
      expiresIn: "1w",
    }
  );
};

export const jwtSignAdmin = ({ adminId, email }: IJwtSignAdminProps) => {
  return jwt.sign(
    { adminId, email, role: "admin" },
    process.env.JWT_SECRET_KEY!,
    {
      expiresIn: "1w",
    }
  );
};
