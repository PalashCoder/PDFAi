import { useRouter, useSearchParams } from "next/navigation"

function authCallback() {
    const router = useRouter();
    const searchParams=useSearchParams();
    const origin=searchParams.get("origin");
  return (
    <div>authCallback</div>
  )
}

export default authCallback