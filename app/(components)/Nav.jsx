import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center text-white space-x-4">
        <Link href="/">
        Home
        </Link>
        <Link href="/TicketPage/new">
        Ticket
        </Link>
      </div>
      <div>
        <p className=" text-default-text">jake.lower17@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;