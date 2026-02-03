import { NextRequest, NextResponse } from 'next/server';

/**
 * Translation API endpoint
 * Supports multiple translation services with automatic fallback
 * 
 * Services (tried in order):
 * 1. DeepL API (requires DEEPL_API_KEY) - 500,000 chars/month free, best quality
 * 2. Google Translate API (requires GOOGLE_TRANSLATE_API_KEY) - 500,000 chars/month free
 * 3. MyMemory Translation API (free, no API key) - 10,000 chars/day limit
 * 
 * Priority: DeepL > Google > MyMemory
 */

const LOCALE_MAP: Record<string, string> = {
  en: 'en',
  es: 'es',
  it: 'it',
  de: 'de',
  pt: 'pt',
  zh: 'zh', // Keep as 'zh', translation functions will convert to 'zh-CN' as needed
};

// DeepL language codes (slightly different from standard codes)
// DeepL supports ZH for Chinese (Simplified), but we can also use ZH-CN
const DEEPL_LOCALE_MAP: Record<string, string> = {
  en: 'EN',
  es: 'ES',
  it: 'IT',
  de: 'DE',
  pt: 'PT',
  zh: 'ZH', // DeepL uses ZH for Simplified Chinese
};

/**
 * Translate using MyMemory Translation API (free, no API key)
 * Note: Quality is lower, especially for Chinese. For better results, use DeepL or Google Translate API.
 */
async function translateWithMyMemory(text: string, targetLang: string, sourceLang: string = 'en'): Promise<string> {
  try {
    // MyMemory API uses specific language codes
    // Map zh to zh-CN for Simplified Chinese (MyMemory requires zh-CN, not just zh)
    // Also handle if zh-CN is already passed (defensive check)
    const myMemorySourceLang = (sourceLang === 'zh' || sourceLang === 'zh-CN') ? 'zh-CN' : sourceLang;
    const myMemoryTargetLang = (targetLang === 'zh' || targetLang === 'zh-CN') ? 'zh-CN' : targetLang;
    
    // For Chinese translations, MyMemory quality is often poor
    // Consider splitting long texts or using a better service
    if (targetLang === 'zh' || targetLang === 'zh-CN') {
      console.warn('[MyMemory] Translating to Chinese - quality may be lower. Consider using DeepL or Google Translate API for better results.');
    }
    
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${myMemorySourceLang}|${myMemoryTargetLang}`;
    
    // Check URL length - MyMemory has URL length limits (around 2000 chars)
    if (url.length > 2000) {
      throw new Error(`Text too long for MyMemory API (URL length: ${url.length} chars). MyMemory free tier has URL length limits. Please add DeepL API key (500K chars/month free) or Google Translate API key (500K chars/month free) to your .env file for better limits.`);
    }
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Cloud MLM Software',
      },
    });

    // Always parse JSON first, even if response is not ok
    let data;
    try {
      const responseText = await response.text();
      data = JSON.parse(responseText);
    } catch (parseError) {
      // If JSON parsing fails, check HTTP status
      if (response.status === 403) {
        throw new Error('MyMemory API returned 403 Forbidden. This usually means daily quota exceeded (10K chars/day free limit) or the request URL is too long. Please add DeepL API key (500K chars/month free) or Google Translate API key (500K chars/month free) to your .env file.');
      }
      throw new Error(`Translation API request failed: ${response.statusText} (HTTP ${response.status})`);
    }
    
    // Check if translation was successful
    if (data.responseStatus === 200 && data.responseData?.translatedText) {
      return data.responseData.translatedText;
    }

    // MyMemory specific error handling
    // Status 403 = Daily quota exceeded OR per-request limit exceeded OR text too long
    // Status 429 = Rate limit exceeded
    if (data.responseStatus === 403 || response.status === 403) {
      const errorMsg = data.responseData?.errorMessage || data.responseMessage || data.matches?.[0]?.error || '';
      if (errorMsg.toLowerCase().includes('quota') || errorMsg.toLowerCase().includes('limit')) {
        throw new Error(`Translation quota/limit exceeded: ${errorMsg}. MyMemory free tier has a 10K chars/day limit. For longer texts or higher limits, add DeepL API key (500K chars/month free) or Google Translate API key (500K chars/month free) to your .env file.`);
      }
      // Check if text might be too long (MyMemory has URL length limits)
      if (url.length > 1800) {
        throw new Error(`Translation failed with 403 Forbidden. The request URL is too long (${url.length} chars) for MyMemory free tier. Please add DeepL or Google Translate API key for better limits, or use shorter text.`);
      }
      throw new Error(`Translation failed with 403 Forbidden. ${errorMsg || 'This may be due to daily quota exceeded (10K chars/day free limit). Please add DeepL or Google Translate API key for better limits.'}`);
    }
    
    if (data.responseStatus === 429 || response.status === 429) {
      throw new Error('Rate limit exceeded. Too many requests. Please wait a few minutes before trying again.');
    }

    // Check for quota messages in response
    const errorMsg = data.responseData?.errorMessage || data.responseMessage || data.matches?.[0]?.error || '';
    if (errorMsg.toLowerCase().includes('quota') || errorMsg.toLowerCase().includes('limit')) {
      throw new Error(`Translation quota/limit exceeded: ${errorMsg}`);
    }
    
    throw new Error(errorMsg || `Translation failed (Status: ${data.responseStatus || response.status || 'unknown'})`);
  } catch (error) {
    // Re-throw if it's already our formatted error
    if (error instanceof Error && (error.message.includes('Translation') || error.message.includes('quota') || error.message.includes('limit'))) {
      throw error;
    }
    // Otherwise wrap it
    throw new Error(error instanceof Error ? error.message : 'Translation failed');
  }
}

/**
 * Translate using DeepL API (requires API key)
 * Free tier: 500,000 characters/month
 * Best translation quality
 */
async function translateWithDeepL(text: string, targetLang: string, sourceLang: string = 'en'): Promise<string> {
  const apiKey = process.env.DEEPL_API_KEY;
  
  if (!apiKey) {
    throw new Error('DeepL API key not configured');
  }

  try {
    // DeepL uses uppercase language codes
    const targetLangUpper = DEEPL_LOCALE_MAP[targetLang] || targetLang.toUpperCase();
    const sourceLangUpper = DEEPL_LOCALE_MAP[sourceLang] || sourceLang.toUpperCase();
    
    const response = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${apiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        text: text,
        target_lang: targetLangUpper,
        source_lang: sourceLangUpper,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { message: errorText };
      }
      
      if (response.status === 403) {
        throw new Error('DeepL API authentication failed. Please check your API key.');
      } else if (response.status === 456) {
        throw new Error('DeepL monthly character limit exceeded. Please wait for next month or upgrade plan.');
      } else if (response.status === 429) {
        throw new Error('DeepL rate limit exceeded. Please wait a few minutes.');
      }
      
      throw new Error(errorData.message || `DeepL API error (${response.status})`);
    }

    const data = await response.json();
    
    if (data.translations?.[0]?.text) {
      return data.translations[0].text;
    }

    throw new Error('Invalid response from DeepL API');
  } catch (error) {
    throw error;
  }
}

/**
 * Translate using Google Translate API (requires API key)
 * Free tier: 500,000 characters/month
 */
async function translateWithGoogle(text: string, targetLang: string, sourceLang: string = 'en'): Promise<string> {
  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
  
  if (!apiKey) {
    throw new Error('Google Translate API key not configured');
  }

  try {
    // Google Translate API uses specific language codes
    // Map zh to zh-CN for Simplified Chinese
    // Also handle if zh-CN is already passed (defensive check)
    const googleSourceLang = (sourceLang === 'zh' || sourceLang === 'zh-CN') ? 'zh-CN' : sourceLang;
    const googleTargetLang = (targetLang === 'zh' || targetLang === 'zh-CN') ? 'zh-CN' : targetLang;
    
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          source: googleSourceLang,
          target: googleTargetLang,
          format: 'text',
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || 'Google Translate API error');
    }

    const data = await response.json();
    
    if (data.data?.translations?.[0]?.translatedText) {
      return data.data.translations[0].translatedText;
    }

    throw new Error('Invalid response from Google Translate');
  } catch (error) {
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, targetLocale, sourceLocale = 'en' } = body;

    if (!text || !targetLocale) {
      return NextResponse.json(
        { error: 'text and targetLocale are required' },
        { status: 400 }
      );
    }

    // Validate locales
    if (!LOCALE_MAP[sourceLocale] || !LOCALE_MAP[targetLocale]) {
      return NextResponse.json(
        { error: 'Invalid locale' },
        { status: 400 }
      );
    }

    // If same locale, return original text
    if (sourceLocale === targetLocale) {
      return NextResponse.json({ translatedText: text });
    }

    const targetLang = LOCALE_MAP[targetLocale];
    const sourceLang = LOCALE_MAP[sourceLocale];

    let translatedText: string;
    let serviceUsed = 'mymemory';

    // Try services in priority order: DeepL > Google > MyMemory
    // For Chinese, prioritize DeepL or Google for better quality
    const isChinese = targetLang === 'zh' || targetLang === 'zh-CN';
    
    // DeepL API (best quality, 500K chars/month free) - especially good for Chinese
    if (process.env.DEEPL_API_KEY) {
      try {
        translatedText = await translateWithDeepL(text, targetLang, sourceLang);
        serviceUsed = 'deepl';
      } catch (deeplError) {
        console.warn('[Translate] DeepL failed, trying Google Translate:', deeplError);
        // Fallback to Google Translate
        if (process.env.GOOGLE_TRANSLATE_API_KEY) {
          try {
            translatedText = await translateWithGoogle(text, targetLang, sourceLang);
            serviceUsed = 'google';
          } catch (googleError) {
            console.warn('[Translate] Google Translate failed, falling back to MyMemory:', googleError);
            if (isChinese) {
              console.warn('[Translate] WARNING: Using MyMemory for Chinese translation - quality will be lower. Consider adding API keys for better results.');
            }
            translatedText = await translateWithMyMemory(text, targetLang, sourceLang);
            serviceUsed = 'mymemory';
          }
        } else {
          // Fallback directly to MyMemory if no Google key
          if (isChinese) {
            console.warn('[Translate] WARNING: No Google Translate API key. Using MyMemory for Chinese translation - quality will be lower. Add GOOGLE_TRANSLATE_API_KEY or DEEPL_API_KEY for better results.');
          }
          translatedText = await translateWithMyMemory(text, targetLang, sourceLang);
          serviceUsed = 'mymemory';
        }
      }
    }
    // Google Translate API (500K chars/month free) - good for Chinese
    else if (process.env.GOOGLE_TRANSLATE_API_KEY) {
      try {
        translatedText = await translateWithGoogle(text, targetLang, sourceLang);
        serviceUsed = 'google';
      } catch (googleError) {
        console.warn('[Translate] Google Translate failed, falling back to MyMemory:', googleError);
        if (isChinese) {
          console.warn('[Translate] WARNING: Using MyMemory for Chinese translation - quality will be lower. Consider adding DEEPL_API_KEY for better results.');
        }
        translatedText = await translateWithMyMemory(text, targetLang, sourceLang);
        serviceUsed = 'mymemory';
      }
    }
    // MyMemory (free but limited - 10K chars/day, lower quality especially for Chinese)
    else {
      if (isChinese) {
        console.warn('[Translate] WARNING: No translation API keys configured. Using MyMemory for Chinese translation - quality will be significantly lower. Add DEEPL_API_KEY or GOOGLE_TRANSLATE_API_KEY for better results.');
      }
      translatedText = await translateWithMyMemory(text, targetLang, sourceLang);
      serviceUsed = 'mymemory';
    }

    // For Chinese translations, add a quality warning if using MyMemory
    const response: any = {
      translatedText,
      sourceLocale,
      targetLocale,
      service: serviceUsed,
    };
    
    if ((targetLocale === 'zh' || targetLocale === 'zh-CN') && serviceUsed === 'mymemory') {
      response.qualityWarning = 'Chinese translation quality may be lower with MyMemory. For better results, add DeepL API key (500K chars/month free) or Google Translate API key (500K chars/month free) to your .env file.';
    }
    
    return NextResponse.json(response);
  } catch (error: any) {
    const errorMessage = error.message || 'Translation failed';
    
    // Determine status code based on error type
    let statusCode = 500;
    if (errorMessage.toLowerCase().includes('quota') || errorMessage.toLowerCase().includes('exceeded')) {
      statusCode = 403; // Forbidden - quota exceeded
    } else if (errorMessage.toLowerCase().includes('rate limit') || errorMessage.toLowerCase().includes('429')) {
      statusCode = 429; // Too Many Requests
    }
    
    return NextResponse.json(
      {
        error: errorMessage,
        message: errorMessage.includes('quota') || errorMessage.includes('exceeded')
          ? 'Translation quota/limit exceeded. To increase limits, add DeepL API key (500K chars/month free) or Google Translate API key (500K chars/month free) to your .env file.'
          : 'Failed to translate text. Please try again or translate manually.',
      },
      { status: statusCode }
    );
  }
}
