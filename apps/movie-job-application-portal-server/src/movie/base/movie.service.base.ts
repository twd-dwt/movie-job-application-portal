/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Movie as PrismaMovie } from "@prisma/client";

export class MovieServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MovieCountArgs, "select">): Promise<number> {
    return this.prisma.movie.count(args);
  }

  async movies<T extends Prisma.MovieFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieFindManyArgs>
  ): Promise<PrismaMovie[]> {
    return this.prisma.movie.findMany<Prisma.MovieFindManyArgs>(args);
  }
  async movie<T extends Prisma.MovieFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieFindUniqueArgs>
  ): Promise<PrismaMovie | null> {
    return this.prisma.movie.findUnique(args);
  }
  async createMovie<T extends Prisma.MovieCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieCreateArgs>
  ): Promise<PrismaMovie> {
    return this.prisma.movie.create<T>(args);
  }
  async updateMovie<T extends Prisma.MovieUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieUpdateArgs>
  ): Promise<PrismaMovie> {
    return this.prisma.movie.update<T>(args);
  }
  async deleteMovie<T extends Prisma.MovieDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieDeleteArgs>
  ): Promise<PrismaMovie> {
    return this.prisma.movie.delete(args);
  }
}