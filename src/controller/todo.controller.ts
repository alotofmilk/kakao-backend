import express from "express";
import TODOModel from "../model/todo.model";

const router = express.Router();

type TODO = {
  todo: string;
};

router.get("/", async (req, res) => {
  const TODOs: TODOModel[] = await TODOModel.findAll();
  return res.status(200).json(TODOs);
});

router.post("/", (req, res) => {
  const { todo } = req.body as TODO;
  if (!todo) {
    return res.status(400).json();
  }

  TODOModel.create({
    todo: todo,
  });
  return res.status(201).json();
});

router.delete("/:TODOid", async (req, res) => {
  const { TODOid } = req.params;
  const todo: TODOModel | null = await TODOModel.findByPk(TODOid);
  if (!todo) {
    return res.status(404).json();
  }
  await TODOModel.destroy({ where: { id: TODOid } });
  res.status(200).json();
});

export default router;
