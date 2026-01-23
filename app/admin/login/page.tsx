'use client';

import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Eye, EyeOff, Lock } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Redirect authenticated users away from login page immediately
  // This handles both direct navigation and back button scenarios
  useEffect(() => {
    if (status === 'authenticated' && session) {
      setIsRedirecting(true);
      // Use replace to remove login page from browser history
      // This prevents back button from going back to login
      if (typeof window !== 'undefined') {
        // Update browser history immediately
        window.history.replaceState(null, '', '/admin');
      }
      router.replace('/admin');
    }
  }, [status, session, router]);

  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPassword((prev) => {
      return !prev;
    });
  };
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Show loading state while checking session
  if (status === 'loading' || isRedirecting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">
            {isRedirecting ? 'Redirecting to dashboard...' : 'Checking authentication...'}
          </p>
        </div>
      </div>
    );
  }

  // Don't render login form if user is authenticated (will redirect)
  if (status === 'authenticated' || isRedirecting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        if (result.error === 'CredentialsSignin') {
          setError('Invalid email or password. Please contact your administrator.');
        } else {
          setError(`Login failed: ${result.error}. Check your database connection and .env file.`);
        }
        setLoading(false);
      } else if (result?.ok) {
        router.push('/admin');
        router.refresh();
      } else {
        setError('Login failed. Please try again.');
        setLoading(false);
      }
    } catch (err: any) {
      setError(`Error: ${err.message || 'An error occurred. Check your database connection.'}`);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Left Side - Promotional Section */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden w-full">
        {/* Gradient Background - Using Blue Variants */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-400/20 to-blue-600/20 animate-pulse"></div>
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white w-full">
          <div className="max-w-md mx-auto text-center space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-ping"></div>
              <Lock className="relative h-16 w-16 mx-auto text-white drop-shadow-lg" />
            </div>
            <h2 className="text-4xl font-bold leading-tight drop-shadow-lg">
              Start managing your content with one click, explore powerful features!
            </h2>
            <p className="text-lg text-white/90 drop-shadow-md">
              Access your admin panel to manage your content and settings.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-8 lg:px-12">
        <div className="w-full max-w-md">
          {/* Brand */}
          <div className="mb-8">
            <div className="mb-4">
              <Image
                src="/cloudmlm-logo.webp"
                alt="Cloud MLM Software"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-xl px-8 py-8 md:py-12 border border-gray-100">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Sign In
              </h2>
              <p className="text-sm text-gray-600">
                Enter your credentials to access the admin panel
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 transition-all"
                  placeholder="admin@example.com"
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 transition-all"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    onMouseDown={(e) => e.preventDefault()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer outline-none focus:outline-none p-1 select-none"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    style={{ pointerEvents: 'auto' }}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className={`rounded-lg p-4 ${error.startsWith('✅')
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
                  }`}>
                  <p className={`text-sm ${error.startsWith('✅')
                    ? 'text-green-800'
                    : 'text-red-800'
                    }`}>{error}</p>
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>

            </form>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-gray-500">
            © 2026 Cloud MLM Software. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
