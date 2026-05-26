'use client';

import { useTransition } from 'react';

export default function LoginPage() {
  const [isPending, startTransition] = useTransition();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      window.location.href = '/auth/login';
    });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-950 p-4 text-zinc-50 font-sans overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl p-8 shadow-2xl overflow-hidden transition-all duration-300 hover:border-zinc-700">
        
        {/* Sleek Glowing Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-red-500 to-pink-500" />
        
        <div className="text-center mb-8">
          {/* Auth0 Shield Logo */}
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800/80 border border-zinc-700 shadow-inner">
            <svg
              className="h-7 w-7 text-orange-500 animate-pulse"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21.928 11.607c-.202-.688-.853-2.128-2.613-2.585l-7.315-1.9a1.002 1.002 0 0 0-.5 0l-7.315 1.9c-1.76.457-2.41 1.897-2.613 2.585-.648 2.203.493 5.437 3.245 7.643 1.902 1.525 5.568 3.992 6.425 4.568a1.003 1.003 0 0 0 1.096 0c.857-.576 4.523-3.043 6.425-4.568 2.752-2.206 3.893-5.44 3.246-7.643zm-9.928 8.878c-1.393-.974-4.225-3.056-5.467-4.053-2.002-1.606-2.535-3.805-2.115-5.234.128-.436.5-.989 1.157-1.16l6.425-1.67v12.117z"/>
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold tracking-tight text-white">Welcome Back</h1>
          <p className="text-sm text-zinc-400 mt-2">
            Secure single sign-on access to your dashboard
          </p>
        </div>

        <div className="space-y-4">
          <form onSubmit={handleSignIn}>
            <button
              type="submit"
              disabled={isPending}
              className="group relative w-full flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 active:bg-orange-700 disabled:opacity-50 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-orange-600/10 cursor-pointer"
            >
              {isPending ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Connecting to Auth0...</span>
                </>
              ) : (
                <>
                  {/* Lock/Shield Icon */}
                  <svg
                    className="h-5 w-5 fill-white transition-transform group-hover:scale-110"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                  </svg>
                  <span>Sign In with Auth0</span>
                </>
              )}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-zinc-900 px-2 text-zinc-500 font-semibold tracking-wider">Protected by OIDC</span>
            </div>
          </div>

          <p className="text-center text-[11px] text-zinc-500 px-4">
            Authorized personnel only. Sessions are monitored and logged. If you experience issues, please contact IT support.
          </p>
        </div>
      </div>
    </div>
  );
}
