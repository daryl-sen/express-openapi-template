import { Request, Response } from "express";

const helloWorldController = {
  getWorlds: (_req: Request, res: Response) => {
    res.send("hello world");
  },
};

module.exports = helloWorldController;
