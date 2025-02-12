import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { CreateSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const SubscriptionRouter = Router();

SubscriptionRouter.get("/", (req, res) => res.send("Get all subscriptions"));
SubscriptionRouter.get("/:id", (req, res) => res.send("Get all subscriptions"));
SubscriptionRouter.post("/", (req, res) => res.send("Get all subscriptions"));
SubscriptionRouter.put("/:id", authorize, CreateSubscription);
SubscriptionRouter.delete("/:id", (req, res) => res.send("Get all subscriptions"));
SubscriptionRouter.get("/user/:id", authorize,getUserSubscriptions);
SubscriptionRouter.put("/:id/cancel", (req, res) => res.send("Get all subscriptions"));
SubscriptionRouter.get("/upcoming-renewals", (req, res) => res.send("Get all subscriptions"));

export default SubscriptionRouter;