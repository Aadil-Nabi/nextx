import Link from "next/link";

export  default  function NotificationsPage(){
  return <>
  <div>Notifications</div>
    <div>
      <br/>
      <Link href="/dashboard/archived">Archived</Link>
    </div>
  </>
}