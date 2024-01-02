import Link from "next/link";

const Footer = () => {
  return (
    <footer className="font-poppins bg-secondary text-sm px-10 py-4 md:pt-10 md:px-28">
      <div className="text-gray-400 flex justify-around flex-col md:flex-row text-center md:text-left w-full items-center md:items-start">
        <div className="flex flex-col items-center md:items-start md:mt-3">
          <img
            className="mb-4 md:mb-20 w-40"
            src="/images/logo.jpg"
            alt="a2sv logo"
            width={540}
            height={540}
          />
          <p>© Copyright 2023 Nahusenay Hotel Inc.</p>
          <p>
            <Link href={"#"}>Terms of service</Link> |{" "}
            <Link href={"#"}>Privacy Policy</Link>
          </p>
        </div>
        <div>
          <h3 className="text-gray-800 font-semibold mt-6 text-xl md:mt-3 mb-3">
            Our teams
          </h3>
          <ul>
            <li className="mb-2">Advisors</li>
            <li className="mb-2">Board members</li>
            <li className="mb-2">Executives</li>
            <li className="mb-2">Groups</li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-800 font-semibold mt-6 text-xl md:mt-2 mb-3">
            Navigation
          </h3>
          <ul>
            <li className="mb-2"><Link href={'/'} className="hover:text-primary">Home</Link></li>
            <li className="mb-2"><Link href={'/about'} className="hover:text-primary">About us</Link></li>
            <li className="mb-2"><Link href={'/rooms'} className="hover:text-primary">Our Rooms</Link></li>
            <li className="mb-2"><Link href={'/reservation'} className="hover:text-primary">Reservation</Link></li>
            <li className="mb-2"><Link href={'/blogs'} className="hover:text-primary">Blogs</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-800 font-semibold mt-6 text-xl md:mt-2 mb-3">
            Get in touch
          </h3>
          <Link href={'/contact'} className="mb-2 hover:text-primary">Questions or feedback?</Link>
          <p className="mb-4 md:mb-20">we would like to hear from you</p>
          <section className="flex justify-between md:justify-start md:gap-6">
            <Link href={"#"}>
              <img src="/images/social-icons/facebook.png" alt="facebook" width={28} height={28}/>
            </Link>
            <Link href={"#"}>
              <img src="/images/social-icons/linkedin.png" alt="linkedin" width={28} height={28}/>
            </Link>
            <Link href={"#"}>
              <img src="/images/social-icons/instagram.png" alt="instagram" width={28} height={28}/>
            </Link>
            <Link href={"#"}>
              <img src="/images/social-icons/twitter.png" alt="twitter" width={28} height={28}/>
            </Link>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
