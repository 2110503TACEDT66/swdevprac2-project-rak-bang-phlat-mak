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
        src={"/img/logo.jpg"}
        className={styles.logoimg}
        alt="logo"
        width={0}
        height={0}
        sizes="100vh"
      />
      <div className="flex flex-row absolute right-10 top-0 h-full py-2 text-center">
      <TopMenuItem title="Reservations" pageRef="/booking/" />
      {session ? (
              <TopMenuItem title="Sign Out" pageRef="/api/auth/signout" />
      ) : (
        <>
        <TopMenuItem title="Sign In" pageRef="/api/auth/signin"/>
        <TopMenuItem title="Register" pageRef="/signup"/></>
        )}
       </div>
    </div>
  );
}
