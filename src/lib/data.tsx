type SidebarItem = {
	title: string;
	href: string;
	icon: string;
	route: string;
};

export const sidebar: SidebarItem[] = [
	{
		title: 'Dashboard',
		href: '/',
		icon: 'FiHome',
		route: 'dashboard',
	},
	{
		title: 'Users',
		href: '/users',
		icon: 'FiHome',
		route: 'users',
	},
	{
		title: 'Employees',
		href: '/employees',
		icon: 'FiHome',
		route: 'employees',
	},
];
