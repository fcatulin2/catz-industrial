import { permanentRedirect } from "next/navigation";

export default function CompanyProfileRedirect() {
  permanentRedirect("/#about");
}
