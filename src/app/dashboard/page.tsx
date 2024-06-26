import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function dashboard() {
  const { getUser } = getKindeServerSession();
  const user: any = await getUser();
  if(!user||!user.id) redirect("/auth-callback?origin=dashboard")

  return <div>dashboard</div>;
}

export default dashboard;
