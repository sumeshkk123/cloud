/**
 * Sanitize error messages before showing in toasts so we never expose backend
 * details (e.g. Prisma, stack traces, DB names) to users.
 */
const BACKEND_HINTS = [
  'prisma',
  'Prisma',
  'prisma client',
  'PrismaClient',
  'P1001',
  'P2002',
  'P2003',
  'unique constraint',
  'foreign key',
  'raw query',
  '$queryRaw',
  'migrate',
  'schema',
  'relation',
  'Record to update',
  'Record to create',
  'Unknown arg',
  'Invalid `prisma.',
];

const GENERIC_ERROR = 'Something went wrong. Please try again.';

export function sanitizeErrorForToast(message: string | null | undefined, fallback = GENERIC_ERROR): string {
  const str = typeof message === 'string' ? message.trim() : '';
  if (!str) return fallback;
  const lower = str.toLowerCase();
  const hasBackendHint = BACKEND_HINTS.some((hint) => lower.includes(hint.toLowerCase()));
  return hasBackendHint ? fallback : str;
}
