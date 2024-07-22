"use server"
import prisma from "@repo/db/client"
import bcrypt from "bcrypt"

export const createAccount = async (number: string, password: string, name: string, email: string) => { 

  const hashedPassword = await bcrypt.hash(password, 10);

  if (!number || !password) {
    throw new Error("Number and password are required");
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      number
    }
  })

  if (existingUser) {
    throw new Error("User already exists")
  }

  try {
      const user = await prisma.user.create({
          data: {
              number: number,
              password: hashedPassword, 
              name: name,
              email: email
          }
      });

      return {
          id: user.id.toString(),
          name: user.name,
          email: user.number
      }
    } catch(e) {
      console.error("error creating account", e);
    }
}