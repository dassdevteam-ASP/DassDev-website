"use client";

export default function GlobalError() {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <main className="flex min-h-screen items-center justify-center px-6">
          <section className="text-center">
            <p className="text-sm text-muted-foreground">DASS DEV.</p>

            <h1 className="mt-4 text-4xl font-bold">Something went wrong.</h1>

            <p className="mt-4 text-muted-foreground">
              Please refresh the page and try again.
            </p>
          </section>
        </main>
      </body>
    </html>
  );
}
