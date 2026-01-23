'use client';

import React, { useEffect, useState, useMemo } from 'react';
import * as LucideIcons from 'lucide-react';
import * as RemixIcon from '@remixicon/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Input } from './input';
import { cn } from '@/lib/utils';

// Register FontAwesome icons
library.add(fas);

// Icon type definitions
type IconType = 'lucide' | 'remix' | 'fontawesome';
type IconEntry = {
  name: string;
  type: IconType;
  displayName: string;
};

// Cache for all icons (lazy initialization)
let ALL_ICONS_CACHE: IconEntry[] | null = null;

// Get all Lucide icons
const getLucideIcons = (): IconEntry[] => {
  try {
    if (typeof LucideIcons === 'undefined' || LucideIcons === null) {
      return [];
    }

    const iconNames: IconEntry[] = [];
    const excludeKeys = new Set([
      'createLucideIcon',
      'IconNode',
      'LucideProps',
      'default',
    ]);

    if (typeof LucideIcons === 'object') {
      for (const key in LucideIcons) {
        try {
          if (excludeKeys.has(key)) continue;

          const iconComponent = (LucideIcons as any)[key];
          if (iconComponent === undefined || iconComponent === null) continue;

          if (key.length > 0 && key[0] === key[0].toUpperCase() && key[0] !== key[0].toLowerCase()) {
            if (typeof iconComponent === 'function') {
              iconNames.push({
                name: key,
                type: 'lucide',
                displayName: `Lucide: ${key}`,
              });
            }
          }
        } catch (err) {
          continue;
        }
      }
    }

    return iconNames.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    return [];
  }
};

// Get all RemixIcon icons
const getRemixIcons = (): IconEntry[] => {
  try {
    if (typeof RemixIcon === 'undefined' || RemixIcon === null) {
      return [];
    }

    const iconNames: IconEntry[] = [];
    const excludeKeys = new Set(['default']);

    if (typeof RemixIcon === 'object') {
      for (const key in RemixIcon) {
        try {
          if (excludeKeys.has(key)) continue;

          const iconComponent = (RemixIcon as any)[key];
          if (iconComponent === undefined || iconComponent === null) continue;

          // RemixIcon icons typically start with 'Ri'
          if (key.startsWith('Ri') && typeof iconComponent === 'function') {
            iconNames.push({
              name: key,
              type: 'remix',
              displayName: `Remix: ${key}`,
            });
          }
        } catch (err) {
          continue;
        }
      }
    }

    return iconNames.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    return [];
  }
};

// Get all FontAwesome icons dynamically
const getFontAwesomeIcons = (): IconEntry[] => {
  try {
    // Get all icon names from the fas library dynamically
    const faIcons: string[] = [];
    
    // Iterate through all icons in the fas library
    if (typeof fas === 'object' && fas !== null) {
      for (const key in fas) {
        if (key.startsWith('fa') && typeof (fas as any)[key] === 'object') {
          faIcons.push(key);
        }
      }
    }
    
    // If dynamic loading didn't work, fallback to a comprehensive list
    if (faIcons.length === 0) {
      const fallbackIcons: string[] = [
      // Common icons
      'faHome', 'faUser', 'faUsers', 'faCog', 'faSettings', 'faGear', 'faWrench',
      'faSearch', 'faFilter', 'faSort', 'faBars', 'faTimes', 'faCheck', 'faPlus', 'faMinus',
      'faEdit', 'faTrash', 'faSave', 'faDownload', 'faUpload', 'faFile', 'faFolder',
      'faImage', 'faVideo', 'faMusic', 'faEnvelope', 'faPhone', 'faGlobe', 'faLink',
      'faShare', 'faHeart', 'faStar', 'faBookmark', 'faTag', 'faTags', 'faCalendar',
      'faClock', 'faBell', 'faLock', 'faUnlock', 'faShield', 'faKey', 'faEye', 'faEyeSlash',
      'faChart', 'faChartLine', 'faChartBar', 'faChartPie', 'faDatabase', 'faServer',
      'faCloud', 'faNetworkWired', 'faWifi', 'faBluetooth', 'faBatteryFull', 'faPowerOff',
      'faShoppingCart', 'faStore', 'faCreditCard', 'faWallet', 'faDollarSign', 'faBitcoin',
      'faCoins', 'faGift', 'faTicket', 'faQrcode', 'faBarcode', 'faReceipt',
      'faQuestionCircle', 'faInfoCircle', 'faExclamationCircle', 'faCheckCircle',
      'faTimesCircle', 'faWarning', 'faBan', 'faFlag', 'faThumbsUp', 'faThumbsDown',
      'faComment', 'faComments', 'faReply', 'faForward', 'faSend', 'faInbox',
      'faHeadphones', 'faLifeRing', 'faSupport', 'faHelp', 'faQuestion',
      'faCode', 'faTerminal', 'faGithub', 'faGitlab', 'faGit', 'faLaptop', 'faDesktop',
      'faMobile', 'faTablet', 'faTv', 'faCamera', 'faMicrophone', 'faVolumeUp',
      'faPlay', 'faPause', 'faStop', 'faForward', 'faBackward', 'faStepForward',
      'faStepBackward', 'faRedo', 'faUndo', 'faRefresh', 'faSync', 'faSpinner',
      'faRocket', 'faZap', 'faFire', 'faLightbulb', 'faMagic', 'faWand',
      'faPalette', 'faPaintBrush', 'faBrush', 'faEraser', 'faCrop', 'faCut',
      'faCopy', 'faPaste', 'faClipboard', 'faFileAlt', 'faFileArchive', 'faFileCode',
      'faFileExcel', 'faFileImage', 'faFilePdf', 'faFilePowerpoint', 'faFileVideo',
      'faFileWord', 'faFolderOpen', 'faFolderPlus', 'faBook', 'faBookOpen', 'faGraduationCap',
      'faSchool', 'faUniversity', 'faCertificate', 'faAward', 'faTrophy', 'faMedal',
      'faCrown', 'faGem', 'faDiamond', 'faStarHalf', 'faStarHalfAlt',
      'faMap', 'faMapMarker', 'faMapPin', 'faLocationArrow', 'faCompass', 'faRoute',
      'faBuilding', 'faWarehouse', 'faFactory', 'faHospital', 'faHotel', 'faStore',
      'faHome', 'faHouse', 'faDoorOpen', 'faDoorClosed', 'faWindowMaximize', 'faWindowMinimize',
      'faCar', 'faBus', 'faPlane', 'faTrain', 'faShip', 'faBicycle', 'faMotorcycle',
      'faWalking', 'faRunning', 'faSwimmer', 'faDumbbell', 'faFootball', 'faBasketball',
      'faBaseball', 'faVolleyball', 'faTennis', 'faGolf', 'faSkiing', 'faSnowboarding',
      'faGamepad', 'faChess', 'faDice', 'faPuzzlePiece', 'faTheaterMasks',
      'faHeartbeat', 'faStethoscope', 'faPills', 'faSyringe', 'faBandAid', 'faCross',
      'faApple', 'faAppleAlt', 'faLemon', 'faOrange', 'faBanana', 'faCarrot',
      'faBread', 'faCheese', 'faEgg', 'faFish', 'faHamburger', 'faHotdog', 'faIceCream',
      'faPizza', 'faCoffee', 'faWineGlass', 'faBeer', 'faCocktail', 'faGlass',
      'faShirt', 'faTshirt', 'faHat', 'faSocks', 'faShoe', 'faGlasses', 'faSunglasses',
      'faRing', 'faNecklace', 'faWatch', 'faUmbrella', 'faBag', 'faSuitcase',
      'faBaby', 'faChild', 'faUserFriends', 'faUserPlus', 'faUserMinus', 'faUserCheck',
      'faUserTimes', 'faUserCog', 'faUserEdit', 'faUserLock', 'faUserShield',
      'faRobot', 'faGhost', 'faDragon', 'faCat', 'faDog', 'faHorse', 'faFish',
      'faSpider', 'faBug', 'faButterfly', 'faLeaf', 'faTree', 'faFlower', 'faSeedling',
      'faSun', 'faMoon', 'faCloud', 'faCloudRain', 'faCloudSun', 'faCloudMoon',
      'faSnowflake', 'faWind', 'faTornado', 'faHurricane', 'faRainbow', 'faUmbrella',
      'faFire', 'faFlame', 'faVolcano', 'faMountain', 'faWater', 'faWave',
      'faGlobe', 'faGlobeAmericas', 'faGlobeEurope', 'faGlobeAsia', 'faLanguage',
      'faTranslate', 'faComments', 'faCommentDots', 'faCommentAlt', 'faCommentSlash',
      'faPaperPlane', 'faEnvelopeOpen', 'faEnvelopeOpenText', 'faMailBulk',
      'faAt', 'faHashtag', 'faPercent', 'faAsterisk', 'faAmpersand', 'faEquals',
      'faPlusCircle', 'faMinusCircle', 'faTimesCircle', 'faDivide', 'faExclamation',
      'faQuestion', 'faQuoteLeft', 'faQuoteRight', 'faBrackets', 'faParentheses',
      'faBraces', 'faAngleLeft', 'faAngleRight', 'faAngleUp', 'faAngleDown',
      'faAngleDoubleLeft', 'faAngleDoubleRight', 'faAngleDoubleUp', 'faAngleDoubleDown',
      'faArrowLeft', 'faArrowRight', 'faArrowUp', 'faArrowDown', 'faArrowsAlt',
      'faArrowsAltH', 'faArrowsAltV', 'faLongArrowAltLeft', 'faLongArrowAltRight',
      'faLongArrowAltUp', 'faLongArrowAltDown', 'faExchangeAlt', 'faRandom',
      'faRetweet', 'faShare', 'faShareAlt', 'faShareSquare', 'faExternalLinkAlt',
      'faExternalLinkSquareAlt', 'faLink', 'faUnlink', 'faChain', 'faChainBroken',
      'faHandPointLeft', 'faHandPointRight', 'faHandPointUp', 'faHandPointDown',
      'faHandPointer', 'faHandRock', 'faHandPaper', 'faHandScissors', 'faHandLizard',
      'faHandSpock', 'faThumbsUp', 'faThumbsDown', 'faThumbtack', 'faPushPin',
      'faCheck', 'faCheckCircle', 'faCheckSquare', 'faCheckDouble', 'faTimes',
      'faTimesCircle', 'faTimesSquare', 'faBan', 'faStop', 'faStopCircle',
      'faPause', 'faPauseCircle', 'faPlay', 'faPlayCircle', 'faStepForward',
      'faStepBackward', 'faFastForward', 'faFastBackward', 'faForward', 'faBackward',
      'faRedo', 'faRedoAlt', 'faUndo', 'faUndoAlt', 'faSync', 'faSyncAlt', 'faRefresh',
      'faSpinner', 'faCircleNotch', 'faCog', 'faCogs', 'faWrench', 'faScrewdriver',
      'faHammer', 'faToolbox', 'faTools', 'faTool', 'faScrewdriverWrench',
      'faBolt', 'faZap', 'faLightning', 'faFire', 'faFlame', 'faSparkles',
      'faStar', 'faStarHalf', 'faStarHalfAlt', 'faStarHalfStroke', 'faAsterisk',
      'faSun', 'faMoon', 'faCloud', 'faCloudRain', 'faCloudSun', 'faCloudMoon',
      'faSnowflake', 'faWind', 'faTornado', 'faHurricane', 'faRainbow', 'faUmbrella',
      'faFire', 'faFlame', 'faVolcano', 'faMountain', 'faWater', 'faWave',
      'faGlobe', 'faGlobeAmericas', 'faGlobeEurope', 'faGlobeAsia', 'faLanguage',
      'faTranslate', 'faComments', 'faCommentDots', 'faCommentAlt', 'faCommentSlash',
      'faPaperPlane', 'faEnvelopeOpen', 'faEnvelopeOpenText', 'faMailBulk',
      'faAt', 'faHashtag', 'faPercent', 'faAsterisk', 'faAmpersand', 'faEquals',
      'faPlusCircle', 'faMinusCircle', 'faTimesCircle', 'faDivide', 'faExclamation',
      'faQuestion', 'faQuoteLeft', 'faQuoteRight', 'faBrackets', 'faParentheses',
      'faBraces', 'faAngleLeft', 'faAngleRight', 'faAngleUp', 'faAngleDown',
      'faAngleDoubleLeft', 'faAngleDoubleRight', 'faAngleDoubleUp', 'faAngleDoubleDown',
      'faArrowLeft', 'faArrowRight', 'faArrowUp', 'faArrowDown', 'faArrowsAlt',
      'faArrowsAltH', 'faArrowsAltV', 'faLongArrowAltLeft', 'faLongArrowAltRight',
      'faLongArrowAltUp', 'faLongArrowAltDown', 'faExchangeAlt', 'faRandom',
        'faRetweet', 'faShare', 'faShareAlt', 'faShareSquare', 'faExternalLinkAlt',
        'faExternalLinkSquareAlt', 'faLink', 'faUnlink', 'faChain', 'faChainBroken',
      ];
      faIcons.push(...fallbackIcons);
    }

    // Remove duplicates and sort
    const uniqueIcons = Array.from(new Set(faIcons)).sort();

    return uniqueIcons.map(iconName => ({
      name: iconName,
      type: 'fontawesome' as IconType,
      displayName: `FA: ${iconName.replace(/^fa/, '')}`,
    }));
  } catch (error) {
    return [];
  }
};

// Get all icons from all libraries
const getAllIcons = (): IconEntry[] => {
  if (ALL_ICONS_CACHE !== null && Array.isArray(ALL_ICONS_CACHE) && ALL_ICONS_CACHE.length > 0) {
    return ALL_ICONS_CACHE;
  }

  const lucideIcons = getLucideIcons();
  const remixIcons = getRemixIcons();
  const fontAwesomeIcons = getFontAwesomeIcons();

  ALL_ICONS_CACHE = [...lucideIcons, ...remixIcons, ...fontAwesomeIcons];
  return ALL_ICONS_CACHE;
};

interface IconPickerProps {
  value?: string;
  onChange: (iconName: string) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

export function IconPicker({
  value,
  onChange,
  disabled = false,
  placeholder = 'Select an icon...',
  className,
}: IconPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState<IconType | 'all'>('all');

  // Parse icon value to determine type and name
  const parseIconValue = (iconValue?: string): { type: IconType | null; name: string } => {
    if (!iconValue) return { type: null, name: '' };
    
    // Format: "type:iconName" or just "iconName" (defaults to lucide)
    if (iconValue.includes(':')) {
      const [type, name] = iconValue.split(':');
      return { type: type as IconType, name };
    }
    
    // Try to detect type from name
    if (iconValue.startsWith('Ri')) {
      return { type: 'remix', name: iconValue };
    }
    if (iconValue.startsWith('fa')) {
      return { type: 'fontawesome', name: iconValue };
    }
    
    // Default to lucide
    return { type: 'lucide', name: iconValue };
  };

  const { type: currentType, name: currentName } = parseIconValue(value);

  // Get icon component based on type and name
  const getIconComponent = (iconEntry: IconEntry) => {
    try {
      if (iconEntry.type === 'lucide') {
        const IconComponent = (LucideIcons as any)[iconEntry.name] as React.ComponentType<{ className?: string }> | undefined;
        return IconComponent;
      } else if (iconEntry.type === 'remix') {
        const IconComponent = (RemixIcon as any)[iconEntry.name] as React.ComponentType<{ className?: string }> | undefined;
        return IconComponent;
      } else if (iconEntry.type === 'fontawesome') {
        // FontAwesome uses icon definitions
        // Icon name format: "faHome" -> need to find in fas object
        const iconName = iconEntry.name.replace(/^fa/, ''); // Remove 'fa' prefix
        // Try different case variations
        const variations = [
          `fa${iconName.charAt(0).toUpperCase() + iconName.slice(1).toLowerCase()}`,
          `fa${iconName}`,
          iconEntry.name,
        ];
        
        for (const key of variations) {
          if (fas[key as keyof typeof fas]) {
            return { type: 'fontawesome', icon: fas[key as keyof typeof fas] };
          }
        }
      }
      return null;
    } catch (error) {
      return null;
    }
  };

  // Render icon based on type
  const renderIcon = (iconEntry: IconEntry, className?: string) => {
    const iconComponent = getIconComponent(iconEntry);
    
    if (!iconComponent) return null;

    if (iconEntry.type === 'fontawesome' && typeof iconComponent === 'object' && 'icon' in iconComponent) {
      return <FontAwesomeIcon icon={iconComponent.icon} className={className} />;
    } else if (typeof iconComponent === 'function') {
      const Icon = iconComponent;
      return <Icon className={className} />;
    }
    
    return null;
  };

  // Filter icons based on search and type
  const filteredIcons = useMemo(() => {
    try {
      const allIcons = getAllIcons();
      let filtered = allIcons;

      // Filter by type
      if (selectedType !== 'all') {
        filtered = filtered.filter(icon => icon.type === selectedType);
      }

      // Filter by search
      if (search && search.trim()) {
        const searchLower = search.toLowerCase().trim();
        filtered = filtered.filter(icon => {
          const nameMatch = icon.name.toLowerCase().includes(searchLower);
          const displayMatch = icon.displayName.toLowerCase().includes(searchLower);
          return nameMatch || displayMatch;
        });
      }

      return filtered;
    } catch (error) {
      return [];
    }
  }, [search, selectedType]);

  const currentIcon = currentType && currentName 
    ? getAllIcons().find(icon => icon.type === currentType && icon.name === currentName)
    : null;

  // Close icon picker when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.icon-picker-container')) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleIconSelect = (iconEntry: IconEntry) => {
    // Format: "type:iconName"
    const iconValue = `${iconEntry.type}:${iconEntry.name}`;
    onChange(iconValue);
    setIsOpen(false);
    setSearch('');
  };

  return (
    <div className={cn('space-y-2 icon-picker-container', className)}>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(
            'w-full px-3 py-3 text-sm border rounded-md bg-white text-gray-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors flex items-center justify-between',
            'border-gray-200',
            disabled && 'opacity-50 cursor-not-allowed',
            !disabled && 'cursor-pointer hover:border-gray-300'
          )}
        >
          <div className="flex items-center gap-2">
            {currentIcon ? (
              <>
                <div className="h-5 w-5 flex items-center justify-center">
                  {renderIcon(currentIcon, 'h-5 w-5 text-gray-600')}
                </div>
                <span className="text-sm">{currentIcon.displayName}</span>
              </>
            ) : (
              <span className="text-gray-400">{placeholder}</span>
            )}
          </div>
          <svg
            className={cn('h-4 w-4 text-gray-400 transition-transform', isOpen && 'rotate-180')}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border border-gray-200 rounded-md bg-white p-4 max-h-96 overflow-auto z-50 relative shadow-lg">
          {/* Type Filter */}
          <div className="flex gap-2 mb-3 pb-3 border-b border-gray-200">
            <button
              type="button"
              onClick={() => setSelectedType('all')}
              className={cn(
                'px-3 py-1.5 text-xs font-medium rounded-md transition-colors',
                selectedType === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setSelectedType('lucide')}
              className={cn(
                'px-3 py-1.5 text-xs font-medium rounded-md transition-colors',
                selectedType === 'lucide'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              Lucide
            </button>
            <button
              type="button"
              onClick={() => setSelectedType('remix')}
              className={cn(
                'px-3 py-1.5 text-xs font-medium rounded-md transition-colors',
                selectedType === 'remix'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              Remix
            </button>
            <button
              type="button"
              onClick={() => setSelectedType('fontawesome')}
              className={cn(
                'px-3 py-1.5 text-xs font-medium rounded-md transition-colors',
                selectedType === 'fontawesome'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              FontAwesome
            </button>
          </div>

          {/* Search Input */}
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search icons..."
            className="mb-3"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setIsOpen(false);
                setSearch('');
              }
            }}
          />

          {/* Icons Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {filteredIcons.length === 0 ? (
              <p className="text-sm text-gray-500 text-center py-4 col-span-full">
                {search.trim()
                  ? 'No icons found. Try a different search.'
                  : 'Loading icons...'}
              </p>
            ) : (
              filteredIcons.map((iconEntry) => {
                const iconValue = `${iconEntry.type}:${iconEntry.name}`;
                const isSelected = value === iconValue;
                
                return (
                  <button
                    key={iconValue}
                    type="button"
                    onClick={() => handleIconSelect(iconEntry)}
                    className={cn(
                      'p-2 rounded-md border transition-colors flex items-center justify-center',
                      isSelected
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    )}
                    title={iconEntry.displayName}
                  >
                    <div className="h-5 w-5 flex items-center justify-center text-gray-600">
                      {renderIcon(iconEntry, 'h-5 w-5')}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
