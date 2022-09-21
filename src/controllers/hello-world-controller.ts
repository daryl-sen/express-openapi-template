import { Request, Response } from "express";

const helloWorldController = {
  getHelloWorld: (_req: Request, res: Response) => {
    res.send("hello world!");
  },
};

module.exports = helloWorldController;
