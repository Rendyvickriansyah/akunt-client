import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "transaction.index",
		component: () => import("../views/transaction/Index.vue"),
	},
	{
		path: "/edit/:id",
		name: "transaction.edit",
		component: () => import("../views/transaction/Edit.vue"),
	},
	{
		path: "/create",
		name: "transaction.create",
		component: () => import("../views/transaction/Create.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
