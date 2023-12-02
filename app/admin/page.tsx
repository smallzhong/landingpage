"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { allowedUsers } from "../../timeline_config";

export default function AdminPage() {
  const router = useRouter();

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/api/auth/signin");
    }
  });

  const updateToken = async () => {
    await fetch("/api/update-token", { method: "POST" });
    router.push("/");
  };

  // @ts-ignore
  const id = session?.account.id;
  return (
    <>
      <p>
        User: {session ? session.user.name : "N/A"}
      </p>
      {
        session &&
        (allowedUsers.includes(id) ?
          <a className="cursor-pointer" onClick={updateToken}>Update Token</a> :
          <p className="text-ctp-red">This user is not in the allowed list.</p>)
      }
    </>
  );
}