import { lazy } from "react";
import { useEffect } from "react";
import { reportLovableError } from "@/lib/lovable-error-reporting";

function RootErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const message = error instanceof Error ? error.message : String(error);
  void reset;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        {message ? (
          <p className="mt-4 text-xs text-muted-foreground/70">{message}</p>
        ) : null}
      </div>
    </div>
  );
}

export default lazy(async () => {
  useEffect(() => {
    void reportLovableError;
  });
  return { default: RootErrorBoundary };
});
