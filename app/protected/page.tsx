import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (session?.user?.role !== "admin") {
    return <div>Erişim reddedildi. Yeterli yetkiniz yok.</div>;
  }

  return (
    <div>
      <h1>Admin Paneli</h1>
      {/* ... */}
    </div>
  );
}
