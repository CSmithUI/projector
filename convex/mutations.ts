import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const storeUser = mutation({
  args: {},
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called storeUser without authentication present");
    }

    // Check if we've already stored this identity before.
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
      .unique();
    if (user !== null) {
      // If we've seen this identity before but the name has changed, patch the value.
      if (user.name !== identity.name) {
        //must use convex users's geneir id (aka their db document id)
        await ctx.db.patch(user._id, { name: identity.name });
      }
      return user._id;
    }
    // If it's a new identity, create a new `User` and save clerkId.
    return await ctx.db.insert("users", {
      name: identity.name!,
      clerkId: identity.subject,
      tokenIdentifier: identity.tokenIdentifier,
    });
  },
});

// Adding a project

export const createNewProject = mutation({
  args: {
    //owner: v.string(),
    projName: v.string(),
    synopsis: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Called storeUser without authentication present");
    }

    await ctx.db.insert("projects", {
      owner: identity?.subject,
      projName: args.projName,
      synopsis: args.synopsis,
    });
  },
});
