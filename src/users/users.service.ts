import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const user = await this.prisma.user.create({ data });
    return user;
  }

  async getUserById(id: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user;
  }

  async updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User | null> {
    const user = await this.prisma.user.update({ where: { id }, data });
    return user;
  }

  async deleteUser(id: number): Promise<User | null> {
    const user = await this.prisma.user.delete({ where: { id } });
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }
}
