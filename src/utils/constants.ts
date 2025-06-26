
export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', icon: 'home', href: '/', active: true },
  { id: 'calendar', label: 'Calendar', icon: 'calendar', href: '/calendar', active: false },
  { id: 'profile', label: 'Profile', icon: 'user', href: '/profile', active: false },
] as const;

export const PLACEHOLDER_USER = {
  id: '1',
  name: 'João Silva',
  email: 'joao.silva@example.com',
  phone: '(11) 99999-9999',
  address: 'Rua das Flores, 123',
} as const;
