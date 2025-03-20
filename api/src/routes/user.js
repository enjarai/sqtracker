import express from "express";
import { banUser, demoteUser, fetchUser, promoteUser, unbanUser } from "../controllers/user";

const router = express.Router();

export default (tracker) => {
  router.get("/:username", fetchUser(tracker));
  router.post("/ban/:username", banUser);
  router.post("/unban/:username", unbanUser);
  router.post("/promote/:username", promoteUser);
  router.post("/demote/:username", demoteUser);
  return router;
};
