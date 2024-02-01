import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),
  projects: defineTable({
    owner: v.string(),
    projName: v.string(),
    synopsis: v.string(),
    projImages: v.optional(v.array(v.string())),
  }).index("by_owner", ["owner"]),
  projectImages: defineTable({
    storageId: v.string(),
    projectId: v.string(),
    owner: v.string(),
  }).index("by_projectId", ["projectId"]),
});
