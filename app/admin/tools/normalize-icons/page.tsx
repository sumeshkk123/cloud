'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/adminUi/button';
import { PageTitle } from '@/components/ui/adminUi/page-title';
import { useToast } from '@/components/ui/toast';
import { Loader2, RefreshCw } from 'lucide-react';

export default function NormalizeIconsPage() {
  const { showToast, ToastComponent } = useToast();
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<{
    modules: number;
    demoItems: number;
    features: number;
    services: number;
    aiCopilots: number;
    industrySolutions: number;
  } | null>(null);

  const handleNormalize = async () => {
    setIsRunning(true);
    setResults(null);

    try {
      const response = await fetch('/api/admin/normalize-icons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to normalize icons');
      }

      setResults(data.results);
      showToast('Icons normalized successfully!', 'success');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to normalize icons.';
      showToast(message, 'error');
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="space-y-6">
      <PageTitle title="Normalize Icons" description="Normalize all icon values in the database by adding proper prefixes (lucide:, remix:, fontawesome:)" />

      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              What does this do?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              This tool will scan all database tables that contain icon fields and normalize them by adding the appropriate prefix:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm mt-2 space-y-1">
              <li>Icons starting with <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">Ri</code> → <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">remix:Ri...</code></li>
              <li>Icons starting with <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">fa</code> → <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">fontawesome:fa...</code></li>
              <li>All other icons → <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">lucide:...</code></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Tables that will be updated:
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
              <li>modules (image field)</li>
              <li>demo_items (icon field)</li>
              <li>features (icon field)</li>
              <li>services (icon field)</li>
              <li>ai_copilots (icon field)</li>
              <li>industry_solutions (icon field)</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
            <Button
              onClick={handleNormalize}
              disabled={isRunning}
              variant="primary"
              className="flex items-center gap-2"
            >
              {isRunning ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Normalizing icons...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4" />
                  Normalize All Icons
                </>
              )}
            </Button>
          </div>

          {results && (
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Normalization Results:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Modules</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{results.modules}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Demo Items</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{results.demoItems}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Features</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{results.features}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Services</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{results.services}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                  <div className="text-sm text-gray-600 dark:text-gray-400">AI Copilots</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{results.aiCopilots}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Industry Solutions</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{results.industrySolutions}</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Total records updated:{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {Object.values(results).reduce((sum, count) => sum + count, 0)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {ToastComponent}
    </div>
  );
}
