import Link from "next/link";

export  default  function NotificationsPage(){
  return <>
  <div>Notifications</div>
    <div>
      <br/>
      <Link href="/dashboard/archived" className="bg-gray-500 font-thin p-1 text-white">Archived</Link>
    </div>
  </>
}