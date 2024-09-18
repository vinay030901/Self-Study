"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (page) => {
    router.push(page);
  };
  return (
    <section>
      <h1>useRouter</h1>
      <Link href="projects">Projects</Link>
      <br />
      <button className="border px-2 py-4" onClick={() => navigate("about")}>
        Go to about page
      </button>
      <button
        className="border px-2 py-4 m-8"
        onClick={() => navigate("login")}
      >
        Go to Login page
      </button>
    </section>
  );
}
