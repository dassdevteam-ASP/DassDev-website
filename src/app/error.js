"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <section className="w-full max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Something went wrong
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          We hit an unexpected problem.
        </h1>

        <p className="mx-auto mt-5 max-w-lg leading-7 text-muted-foreground">
          Try loading the page again. If the problem continues, please try again
          later.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
        >
          Try again
        </button>
      </section>
    </main>
  );
}
