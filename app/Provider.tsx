"use client";
import React, { ReactNode } from "react";
import {
  ClientSideSuspense,
  LiveblocksProvider,
} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
import { getClerkUsers, getDocumentUsers } from "@/lib/actions/user.action";
import { useUser } from "@clerk/nextjs";
const Provider = ({ children }: { children: ReactNode }) => {
  const { user: clerkUser } = useUser();
  return (
    <LiveblocksProvider
      authEndpoint="/api/liveblocks-auth"
      resolveUsers={async ({ userIds }) => {
        const users = await getClerkUsers({ userIds });
        return users;
      }}
      resolveMentionSuggestions={async ({ text, roomId }) => {
        const roomUsers = await getDocumentUsers({
          roomId,
          currentUser: clerkUser?.emailAddresses[0].emailAddress!,
          text,
        });

        return roomUsers;
      }}
    >
      <ClientSideSuspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        {children}
      </ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
