import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Generate the upload URL

export const generateUploadUrl = mutation({
  args: {
    // ...
  },
  handler: async (ctx, args) => {
    // use `args` and/or `ctx.auth` to authorize the user
    // ...

    // Return an upload URL
    return await ctx.storage.generateUploadUrl();
  },
});

// uploading a single image

export const saveStorageIds = mutation({
  // You can customize these as you like
  args: {
    uploaded: v.array(
      v.object({
        storageId: v.string(),
        projectId: v.string(),
      }),
    ),
    // other args...
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("You must log in to upload this file.");
    }
    args.uploaded.map(async ({ storageId, projectId }) => {
      // Save the storageId to the database using `insert`

      const identity = await ctx.auth.getUserIdentity();
      if (!identity) {
        throw new Error("Called storeUser without authentication present");
      }
      const token = identity.tokenIdentifier;

      ctx.db.insert("projectImages", {
        storageId: storageId,
        projectId: projectId,
        owner: token,
      });

      // ...
    });
    // or `patch`/`replace`
    // ctx.db.patch(someId, {
    //   storageId: args.uploaded.storageId,
    //   // ...
    // });
  },
});
