import Logo from "@/components/logo";
import Link from "next/link";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";

const footerLinks = [
  { title: "Company", links: ["Kariyera", "Müəllimlər", "Dəstək", "Əlaqə"] },
  { title: "Product", links: ["Kurslar", "Qiymətlər", "Bloqlar"] },
  { title: "Legal", links: ["Qayda və Şərtlər", "Məxfilik siyasəti"] },
];

const address = `Masallı şəhəri, "Prospekt" Biznes Mərkəzi (2-ci mərtəbə)`;

export default function Footer() {
  return (
    <section className="xl:px-32 mb-20 w-full">
      <div className="bg-[#f8fafe] rounded-[40px] xl:p-14 xl:pt-16 xl:pb-28 border flex gap-10 flex-col xl:flex-row justify-between p-8 pt-10">
        <div>
          <Logo />
          <address>
            <Link
              href={
                "https://www.google.com/maps/place/ONE+Academy/@39.0341552,48.6677413,219m/data=!3m1!1e3!4m6!3m5!1s0x402323998f6c81a5:0x8bc3cf93099b9735!8m2!3d39.0343889!4d48.6675238!16s%2Fg%2F11kj4q7lw8?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
              }
              target="_blank"
              className="flex gap-2 items-center font-bold"
            >
              <MdOutlineLocationOn />
              {address}
            </Link>
          </address>
          <Link
            href="tel:+994513886411"
            target="_blank"
            className="flex gap-2 items-center font-bold"
          >
            <IoPhonePortraitOutline />
            (+994) 51 388 64 11
          </Link>
        </div>

        {footerLinks.map(({ title, links }, index) => (
          <div key={index}>
            <h6 className="font-bold">{title}</h6>
            <ul>
              {links.map((link, i) => (
                <li key={i}>
                  <Link href={link}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex gap-4">
          <div className="h-10 w-auto "></div>
          <div className="h-10 w-auto "></div>
          <div className="h-10 w-auto "></div>
        </div>
      </div>
    </section>
  );
}
