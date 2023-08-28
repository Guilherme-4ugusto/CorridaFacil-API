import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient"
const  Logger  = require('../utils/logger')

export class CreateUserControler {
    async handle(request : Request, response : Response) {
        const { name, cpf, phone, birthdate} = request.body;
        await prismaClient.user.create({
            data: {
                name: name,
                cpf: cpf,
                phone: phone,
                birthdate: birthdate
            }
        }).then(res => {
            Logger.info(`Usuario ID = ${res.id} foi cadastrado.`)
            return response.status(201).json(res);  
        }).catch(err => {
            Logger.error(err)
            return response.status(500).json();
        })   
    }
}