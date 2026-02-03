/**
 * Utility functions for handling database errors consistently across API routes
 */

/**
 * Checks if an error indicates that a database table doesn't exist
 */
export function isTableNotFoundError(error: any): boolean {
  if (!error) return false;
  
  const errorCode = error?.code;
  const errorMessage = String(error?.message || '').toLowerCase();
  
  // Prisma error codes for missing tables/relations
  const tableNotFoundCodes = ['P2021', 'P2010', 'P1001'];
  
  // Error message patterns indicating missing table
  const tableNotFoundPatterns = [
    'does not exist',
    'relation',
    'table',
    'unknown table',
    'no such table',
    'cannot find',
  ];
  
  return (
    tableNotFoundCodes.includes(errorCode) ||
    tableNotFoundPatterns.some(pattern => errorMessage.includes(pattern))
  );
}

/**
 * Returns a safe response for table not found errors
 * GET requests return empty array, other requests return helpful error
 */
export function handleTableNotFoundError(
  error: any,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET'
): { response: Response; isTableNotFound: boolean } {
  if (isTableNotFoundError(error)) {
    if (method === 'GET') {
      return {
        response: Response.json([]),
        isTableNotFound: true,
      };
    }
    
    return {
      response: Response.json(
        { 
          error: 'Database table does not exist. Please run: npx prisma migrate dev',
          code: 'TABLE_NOT_FOUND'
        },
        { status: 500 }
      ),
      isTableNotFound: true,
    };
  }
  
  return {
    response: Response.json(
      { error: error?.message || 'An unexpected error occurred' },
      { status: 500 }
    ),
    isTableNotFound: false,
  };
}
