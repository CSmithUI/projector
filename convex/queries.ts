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

    const projects = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("owner"), identity.subject))
      .order("desc")
      .collect();
    return projects;
  },
});

export const getProjectDetail = query({
  args: { projectId: v.string() },
  handler: async (ctx, args) => {
    const project = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("_id"), args.projectId))
      .collect();
    return project;
  },
});
