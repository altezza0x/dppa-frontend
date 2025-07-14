// Color configuration for consistent theme usage across the application
export const colors = {
  // Primary brand colors
  primary: {
    emerald: {
      light: 'text-emerald-300',
      base: 'text-emerald-400',
      medium: 'text-emerald-500',
      dark: 'text-emerald-600',
    },
    green: {
      light: 'text-green-50',
      base: 'text-green-600',
      medium: 'text-green-700',
      dark: 'text-green-800',
    },
    teal: {
      base: 'text-teal-400',
    }
  },
  
  // Text colors
  text: {
    // White variants
    white: 'text-white',
    
    // Gray variants
    gray: {
      light: 'text-gray-300',
      base: 'text-gray-400',
      medium: 'text-gray-500',
      dark: 'text-gray-600',
      darker: 'text-gray-900',
    },
    
    // Black variant
    black: 'text-black',
  },
  
  // Semantic colors
  semantic: {
    // Success colors (green variants)
    success: {
      light: 'text-green-600',
      base: 'text-green-700',
      dark: 'text-green-800',
    },
    
    // Info colors (emerald variants)
    info: {
      light: 'text-emerald-300',
      base: 'text-emerald-400',
      dark: 'text-emerald-600',
    },
    
    // Accent colors
    accent: {
      emerald: 'text-emerald-400',
      teal: 'text-teal-400',
    }
  },
  
  // Component-specific colors
  components: {
    // Hero section
    hero: {
      title: 'text-emerald-400',
      subtitle: 'text-gray-300',
      buttonPrimary: 'text-white',
      buttonSecondary: 'text-emerald-300',
      cardTitle: 'text-white',
      cardSubtitle: 'text-gray-300',
      iconDefault: 'text-gray-300',
      iconHover: 'text-emerald-300',
      serviceLabel: 'text-white',
      serviceDesc: 'text-gray-400',
    },
    
    // Section headers
    section: {
      title: 'text-green-800',
      subtitle: 'text-green-600',
    },
    
    // Cards
    card: {
      title: 'text-green-800',
      titleHover: 'text-green-600',
      content: 'text-gray-600',
      meta: 'text-gray-500',
      link: 'text-green-600',
      linkHover: 'text-green-700',
    },
    
    // Services
    service: {
      title: 'text-green-800',
      titleHover: 'text-green-600',
      icon: 'text-green-700',
    },
    
    // Agenda
    agenda: {
      title: 'text-green-800',
      eventTitle: 'text-green-800',
      eventMeta: 'text-gray-500',
      eventTime: 'text-green-700',
      link: 'text-green-600',
    },
    
    // News/Articles
    news: {
      title: 'text-green-800',
      titleHover: 'text-green-600',
      content: 'text-gray-600',
      meta: 'text-gray-500',
      link: 'text-green-600',
      linkHover: 'text-green-700',
    },
    
    // Contact/Profile
    contact: {
      title: 'text-gray-900',
      subtitle: 'text-green-700',
      text: 'text-gray-500',
      link: 'text-green-700',
    },
    
    // Statistics
    stats: {
      title: 'text-green-800',
      value: 'text-green-800',
      label: 'text-gray-600',
    },
    
    // Icons
    icon: {
      primary: 'text-green-600',
      secondary: 'text-green-700',
      accent: 'text-emerald-400',
      neutral: 'text-gray-400',
      neutralHover: 'text-emerald-300',
      white: 'text-white',
    }
  }
} as const;

// Helper function to get color class
export const getColor = (path: string): string => {
  const keys = path.split('.');
  let current: any = colors;
  
  for (const key of keys) {
    if (current[key] !== undefined) {
      current = current[key];
    } else {
      console.warn(`Color path "${path}" not found. Falling back to default.`);
      return 'text-gray-500'; // fallback color
    }
  }
  
  return typeof current === 'string' ? current : 'text-gray-500';
};

// Predefined color combinations for common use cases
export const colorCombinations = {
  // Hero section combinations
  heroTitle: colors.components.hero.title,
  heroSubtitle: colors.components.hero.subtitle,
  heroButtonPrimary: colors.components.hero.buttonPrimary,
  heroButtonSecondary: colors.components.hero.buttonSecondary,
  
  // Section combinations
  sectionTitle: colors.components.section.title,
  sectionSubtitle: colors.components.section.subtitle,
  
  // Card combinations
  cardTitle: colors.components.card.title,
  cardContent: colors.components.card.content,
  cardMeta: colors.components.card.meta,
  cardLink: colors.components.card.link,
  
  // Service combinations
  serviceTitle: colors.components.service.title,
  serviceIcon: colors.components.service.icon,
  
  // Common text combinations
  primaryText: colors.primary.green.dark,
  secondaryText: colors.text.gray.medium,
  mutedText: colors.text.gray.base,
  
  // Icon combinations
  primaryIcon: colors.components.icon.primary,
  secondaryIcon: colors.components.icon.secondary,
  accentIcon: colors.components.icon.accent,
} as const;

export default colors;
