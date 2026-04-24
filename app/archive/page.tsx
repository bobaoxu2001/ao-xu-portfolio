import { redirect } from "next/navigation";

// Redirect /archive → /projects (archive is embedded in projects page)
export default function ArchivePage() {
  redirect("/projects");
}
