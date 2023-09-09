export type User = {
	_id: string;
	name: string;
	email: string;
	role?: string;
	isActive?: boolean;
	permissions: string[];
	createdAt: string;
	updatedAt: string;
};

export type Employee = {
	_id: string;
	employeeId: string;
	name: string;
	employeeType: string;
	email: string;
	phoneNumber: string;
	department?: string;
	position?: string;
	salary: number;
	joinedDate?: string;
	nid?: string;
	createdAt: Date;
	updatedAt: Date;
};

export type Employees = {
	search?: string;
	sort: string;
	page: number;
	limit: number;
	skip: number;
	docsInPage: number;
	totalDocs: number;
	totalPages: number;
	doc: Employee[];
};

export type TableProps = {
	page: number;
	limit: number;
	search?: string;
	sort: string;
};

export type Data = {
	search?: string;
	sort: string;
	page: number;
	limit: number;
	skip: number;
	docsInPage: number;
	totalDocs: number;
	totalPages: number;
	doc: any[];
};

/**
 * Example
 * 	_id: '64fad2df314843cb2762ed81';
	name: 'Asif Istiaque';
	email: 'asifistiaque.ai@gmail.com';
	role: 'super-admin';
	isActive: true;
	permissions: [];
	createdAt: '2023-09-08T07:53:03.509Z';
	updatedAt: '2023-09-08T07:53:03.509Z';
    __v: 0;
 */
