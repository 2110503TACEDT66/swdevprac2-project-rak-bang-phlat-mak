import styles from "./topmenu.module.css";
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div className={styles.menucontainer}>
      <Image
        src={"/img/chula.jpg"}
        className={styles.logoimg}
        alt="logo"
        width={0}
        height={0}
        sizes="100vh"
      />
      <TopMenuItem title="BookingPage" pageRef="/booking/" />
      {session ? (
        <Link href="/api/auth/singnout">
          <div> Singn-out of {session.user?.name}</div>
        </Link>
      ) : (
        <Link href="/api/auth/singnin">Sign-In</Link>
      )}
    </div>
  );
}
