import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),
  projects: defineTable({
    owner: v.id("users"),
    projName: v.string(),
    synopsis: v.string(),
  }).index("by_owner", ["owner"]),
});
