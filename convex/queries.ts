import { query } from "./_generated/server";
import { v } from "convex/values";

// Return the last 100 tasks in a given task list.
export const getUserProjects = query({
  args: {},
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called storeUser without authentication present");
    }
    const token = identity.tokenIdentifier;
    const projects = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("owner"), token))
      .order("desc")
      .collect();
    return projects;
  },
});
