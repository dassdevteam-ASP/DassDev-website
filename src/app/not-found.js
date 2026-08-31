import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <section className="w-full max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          404
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          This page doesn't exist.
        </h1>

        <p className="mx-auto mt-5 max-w-lg leading-7 text-muted-foreground">
          The page you're looking for may have moved or the URL may be
          incorrect.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
        >
          Back to DASS DEV.
        </Link>
      </section>
    </main>
  );
}
