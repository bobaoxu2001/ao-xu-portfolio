import { redirect } from "next/navigation";

// Redirect /contact → /resume (which contains contact info)
export default function ContactPage() {
  redirect("/resume");
}
